import type { Message } from '../types'
import { generateId } from '../utils/generateId'

/**
 * Builds the initial list of messages. Uses initialMessages if provided,
 * otherwise creates a welcome message assistant bubble if welcomeMessage is provided.
 */
export function buildInitialMessages(
  welcomeMessage?: string,
  initialMessages?: Message[]
): Message[] {
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

/**
 * Appends a user message to the messages list.
 */
export function addUserMessage(
  messages: Message[],
  text: string,
  id: string,
  timestamp: Date = new Date()
): Message[] {
  return [
    ...messages,
    {
      id,
      role: 'user',
      content: text.trim(),
      timestamp,
      status: 'done',
    },
  ]
}

/**
 * Appends an assistant placeholder message to the messages list with status 'loading'.
 */
export function insertPlaceholder(
  messages: Message[],
  assistantId: string,
  timestamp: Date = new Date()
): Message[] {
  return [
    ...messages,
    {
      id: assistantId,
      role: 'assistant',
      content: '',
      timestamp,
      status: 'loading',
    },
  ]
}

/**
 * Transitions an assistant placeholder/message to the streaming state.
 */
export function startStreaming(
  messages: Message[],
  assistantId: string
): Message[] {
  return messages.map((m) =>
    m.id === assistantId ? { ...m, status: 'streaming' } : m
  )
}

/**
 * Appends a text chunk to an assistant message during streaming.
 */
export function appendStreamChunk(
  messages: Message[],
  assistantId: string,
  text: string
): Message[] {
  if (!text) return messages
  return messages.map((m) =>
    m.id === assistantId ? { ...m, content: m.content + text } : m
  )
}

/**
 * Finalizes an assistant message (e.g. at the end of streaming or direct string response),
 * updating its content, status, and timestamp.
 */
export function finalizeMessage(
  messages: Message[],
  assistantId: string,
  content: string,
  status: 'done' | 'error',
  timestamp: Date = new Date()
): Message[] {
  return messages.map((m) =>
    m.id === assistantId
      ? {
          ...m,
          content,
          status,
          timestamp,
        }
      : m
  )
}

/**
 * Transitions a streaming assistant message to status 'done'.
 */
export function finalizeStreamSuccess(
  messages: Message[],
  assistantId: string
): Message[] {
  return messages.map((m) =>
    m.id === assistantId ? { ...m, status: 'done' } : m
  )
}

/**
 * Transitions a streaming/loading assistant message to status 'error' and sets the content.
 */
export function finalizeStreamError(
  messages: Message[],
  assistantId: string,
  errorText: string
): Message[] {
  return messages.map((m) =>
    m.id === assistantId
      ? {
          ...m,
          status: 'error',
          content: m.content || errorText,
        }
      : m
  )
}

/**
 * Prepares the message history for a retry by removing the last assistant message
 * and the last user message.
 */
export function prepareRetry(messages: Message[]): Message[] {
  // Remove last assistant message
  const lastAssistantIdx = [...messages]
    .reverse()
    .findIndex((m) => m.role === 'assistant')
  let filtered = messages
  if (lastAssistantIdx !== -1) {
    const realIdx = messages.length - 1 - lastAssistantIdx
    filtered = messages.filter((_, i) => i !== realIdx)
  }

  // Remove last user message
  const lastUserIdx = [...filtered]
    .reverse()
    .findIndex((m) => m.role === 'user')
  if (lastUserIdx !== -1) {
    const realIdx = filtered.length - 1 - lastUserIdx
    filtered = filtered.filter((_, i) => i !== realIdx)
  }

  return filtered
}

/**
 * Clears the messages and returns the initial set of messages.
 */
export function clearChat(
  welcomeMessage?: string,
  initialMessages?: Message[]
): Message[] {
  return buildInitialMessages(welcomeMessage, initialMessages)
}
