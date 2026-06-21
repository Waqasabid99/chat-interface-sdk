import { useState, useCallback, useRef, useEffect } from 'react'
import type { Message, UseChatOptions, UseChatReturn } from '../types'
import { generateId, isReadableStream } from '../utils/generateId'
import {
  buildInitialMessages,
  addUserMessage,
  insertPlaceholder,
  startStreaming,
  appendStreamChunk,
  finalizeMessage,
  finalizeStreamSuccess,
  finalizeStreamError,
  prepareRetry,
  clearChat,
} from './useChat.helpers'

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useChat({
  onMessage,
  welcomeMessage,
  initialMessages,
  messages: controlledMessages,
  onMessagesChange,
}: UseChatOptions): UseChatReturn {
  const isControlled = controlledMessages !== undefined

  const warnedRef = useRef(false)
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && !warnedRef.current) {
      if (isControlled && initialMessages !== undefined) {
        warnedRef.current = true
        console.warn(
          'useChat: Both "messages" (controlled) and "initialMessages" (uncontrolled) were passed. "initialMessages" will be ignored.'
        )
      }
    }
  }, [isControlled, initialMessages])

  const [internalMessages, setInternalMessages] = useState<Message[]>(() =>
    isControlled ? [] : buildInitialMessages(welcomeMessage, initialMessages)
  )
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const activeMessages = isControlled
    ? controlledMessages || []
    : internalMessages

  // Ref to always hold the latest value of messages to avoid stale closures in streaming loop
  const messagesRef = useRef<Message[]>(activeMessages)
  messagesRef.current = activeMessages

  // Track the last rendered prop value to clear the pending state synchronously during render
  const lastPropRef = useRef<Message[] | undefined>(controlledMessages)
  const pendingMessagesRef = useRef<Message[] | null>(null)

  if (controlledMessages !== lastPropRef.current) {
    lastPropRef.current = controlledMessages
    pendingMessagesRef.current = null
  }

  // updateMessages function wraps setState or onMessagesChange
  const updateMessages = useCallback(
    (updater: (prev: Message[]) => Message[]) => {
      if (isControlled) {
        const current = pendingMessagesRef.current ?? messagesRef.current
        const next = updater(current)
        pendingMessagesRef.current = next
        onMessagesChange?.(next)
      } else {
        setInternalMessages(updater)
      }
    },
    [isControlled, onMessagesChange]
  )

  /**
   * Stores the last user message text so retryLast() can replay it
   * without re-exposing it through the public API.
   */
  const lastUserMessageRef = useRef<string | null>(null)

  // ── Stream handler ──────────────────────────────────────────────────────────

  const handleStream = useCallback(
    async (stream: ReadableStream, assistantId: string) => {
      const reader = stream.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      const getChunkText = (line: string) => {
        const trimmed = line.trim()
        if (!trimmed) return ''

        const jsonText = trimmed.startsWith('data:')
          ? trimmed.replace(/^data:\s*/, '')
          : trimmed

        try {
          const parsed = JSON.parse(jsonText)
          return (
            (typeof parsed?.message?.content === 'string' &&
              parsed.message.content) ||
            (typeof parsed?.content === 'string' && parsed.content) ||
            ''
          )
        } catch {
          return line
        }
      }

      // Mark the placeholder message as streaming
      updateMessages((prev) => startStreaming(prev, assistantId))

      try {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          buffer += chunk

          const lines = buffer.split(/\r?\n/)
          buffer = lines.pop() ?? ''

          let contentToAppend = ''
          for (const line of lines) {
            contentToAppend += getChunkText(line)
          }

          if (contentToAppend) {
            updateMessages((prev) =>
              appendStreamChunk(prev, assistantId, contentToAppend)
            )
          }
        }

        const tail = decoder.decode()
        buffer += tail
        const finalText = getChunkText(buffer)
        if (finalText) {
          updateMessages((prev) =>
            appendStreamChunk(prev, assistantId, finalText)
          )
        }

        // Mark as done
        updateMessages((prev) => finalizeStreamSuccess(prev, assistantId))
      } catch (streamError) {
        updateMessages((prev) =>
          finalizeStreamError(
            prev,
            assistantId,
            'Stream interrupted. Please try again.'
          )
        )
        throw streamError
      } finally {
        reader.releaseLock()
      }
    },
    [updateMessages]
  )

  // ── Core send logic ─────────────────────────────────────────────────────────

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isLoading) return

      setError(null)
      setIsLoading(true)

      const userMessageId = generateId()
      const assistantId = generateId()
      const timestamp = new Date()

      // Capture history BEFORE the new user message for the handler
      // (history = everything the assistant has already seen)
      const historySnapshot = messagesRef.current

      // 1 & 2. Append the user message and assistant placeholder
      updateMessages((prev) => {
        const withUser = addUserMessage(prev, trimmed, userMessageId, timestamp)
        return insertPlaceholder(withUser, assistantId, timestamp)
      })

      try {
        const result = await onMessage(trimmed, historySnapshot)

        if (isReadableStream(result)) {
          // Streaming path — handleStream mutates the placeholder in place
          await handleStream(result, assistantId)
        } else {
          // Non-streaming path — populate the placeholder at once
          updateMessages((prev) =>
            finalizeMessage(prev, assistantId, result, 'done')
          )
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Something went wrong.'
        setError(message)

        // Mark the assistant placeholder as an error bubble
        updateMessages((prev) =>
          finalizeMessage(prev, assistantId, message, 'error')
        )
      } finally {
        setIsLoading(false)
      }
    },
    [isLoading, onMessage, handleStream, updateMessages]
  )

  // ── Public API ──────────────────────────────────────────────────────────────

  const sendMessage = useCallback(
    async (text: string) => {
      lastUserMessageRef.current = text.trim()
      await send(text)
    },
    [send]
  )

  /**
   * Retries the last user message. Strips the most recent assistant message
   * (which may be an error bubble) before re-sending so the UI stays clean.
   */
  const retryLast = useCallback(async () => {
    const last = lastUserMessageRef.current
    if (!last) return

    updateMessages((prev) => prepareRetry(prev))
    setError(null)
    await send(last)
  }, [send, updateMessages])

  const clearMessages = useCallback(() => {
    updateMessages(() =>
      clearChat(welcomeMessage, isControlled ? undefined : initialMessages)
    )
    setError(null)
    lastUserMessageRef.current = null
  }, [welcomeMessage, isControlled, initialMessages, updateMessages])

  return {
    messages: activeMessages,
    sendMessage,
    isLoading,
    error,
    clearMessages,
    retryLast,
  }
}
