import { useState, useCallback, useRef } from 'react'
import type { Message, UseChatOptions, UseChatReturn } from '../types'
import { generateId, isReadableStream } from '../utils/generateId'

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useChat({
  onMessage,
  welcomeMessage,
  initialMessages,
}: UseChatOptions): UseChatReturn {
  const buildInitialMessages = (): Message[] => {
    if (initialMessages && initialMessages.length > 0) {
      return initialMessages
    }
    if (!welcomeMessage) return []
    return [
      {
        id: generateId(),
        role: 'assistant',
        content: welcomeMessage,
        timestamp: new Date(),
        status: 'done',
      },
    ]
  }

  const [messages, setMessages] = useState<Message[]>(buildInitialMessages)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

      const appendToAssistant = (text: string) => {
        if (!text) return
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: m.content + text } : m
          )
        )
      }

      // Mark the placeholder message as streaming
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, status: 'streaming' } : m
        )
      )

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

          appendToAssistant(contentToAppend)
        }

        const tail = decoder.decode()
        buffer += tail
        const finalText = getChunkText(buffer)
        appendToAssistant(finalText)

        // Mark as done
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, status: 'done' } : m))
        )
      } catch (streamError) {
        console.log(streamError)
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  status: 'error',
                  content: m.content || 'Stream interrupted. Please try again.',
                }
              : m
          )
        )
        throw streamError
      } finally {
        reader.releaseLock()
      }
    },
    []
  )

  // ── Core send logic ─────────────────────────────────────────────────────────

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isLoading) return

      setError(null)
      setIsLoading(true)

      // 1. Append the user message
      const userMessage: Message = {
        id: generateId(),
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
        status: 'done',
      }

      // Capture history BEFORE the new user message for the handler
      // (history = everything the assistant has already seen)
      const historySnapshot = messages

      setMessages((prev) => [...prev, userMessage])

      // 2. Push an empty assistant placeholder so the UI shows a loading state
      const assistantId = generateId()
      const assistantPlaceholder: Message = {
        id: assistantId,
        role: 'assistant',
        content: '',
        timestamp: new Date(),
        status: 'loading',
      }

      setMessages((prev) => [...prev, assistantPlaceholder])

      try {
        const result = await onMessage(trimmed, historySnapshot)

        if (isReadableStream(result)) {
          // Streaming path — handleStream mutates the placeholder in place
          await handleStream(result, assistantId)
        } else {
          // Non-streaming path — populate the placeholder at once
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    content: result,
                    status: 'done',
                    timestamp: new Date(),
                  }
                : m
            )
          )
        }
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Something went wrong.'
        console.log(err)
        setError(message)

        // Mark the assistant placeholder as an error bubble
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: message,
                  status: 'error',
                  timestamp: new Date(),
                }
              : m
          )
        )
      } finally {
        setIsLoading(false)
      }
    },
    [isLoading, messages, onMessage, handleStream]
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

    // Remove the last assistant message (the error bubble) so it gets replaced
    setMessages((prev) => {
      const lastAssistantIdx = [...prev]
        .reverse()
        .findIndex((m) => m.role === 'assistant')
      if (lastAssistantIdx === -1) return prev
      const realIdx = prev.length - 1 - lastAssistantIdx
      return prev.filter((_, i) => i !== realIdx)
    })

    // Also remove the last user message — send() will re-add it
    setMessages((prev) => {
      const lastUserIdx = [...prev]
        .reverse()
        .findIndex((m) => m.role === 'user')
      if (lastUserIdx === -1) return prev
      const realIdx = prev.length - 1 - lastUserIdx
      return prev.filter((_, i) => i !== realIdx)
    })

    setError(null)
    await send(last)
  }, [send])

  const clearMessages = useCallback(() => {
    setMessages(buildInitialMessages())
    setError(null)
    lastUserMessageRef.current = null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [welcomeMessage])

  return {
    messages,
    sendMessage,
    isLoading,
    error,
    clearMessages,
    retryLast,
  }
}
