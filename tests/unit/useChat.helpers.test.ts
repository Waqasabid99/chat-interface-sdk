import { describe, it, expect } from 'vitest'
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
} from '../../src/hooks/useChat.helpers'
import type { Message } from '../../src/types'

describe('useChat helpers', () => {
  describe('buildInitialMessages', () => {
    it('returns initialMessages if provided', () => {
      const initial: Message[] = [
        {
          id: '1',
          role: 'user',
          content: 'hello',
          timestamp: new Date(),
          status: 'done',
        },
      ]
      const result = buildInitialMessages('welcome', initial)
      expect(result).toBe(initial)
    })

    it('returns welcome message if no initialMessages', () => {
      const result = buildInitialMessages('welcome')
      expect(result).toHaveLength(1)
      expect(result[0].role).toBe('assistant')
      expect(result[0].content).toBe('welcome')
      expect(result[0].status).toBe('done')
    })

    it('returns empty array if neither welcomeMessage nor initialMessages are provided', () => {
      const result = buildInitialMessages()
      expect(result).toEqual([])
    })
  })

  describe('addUserMessage', () => {
    it('appends a user message and returns a new array', () => {
      const messages: Message[] = []
      const timestamp = new Date()
      const result = addUserMessage(
        messages,
        '  hello world  ',
        'msg1',
        timestamp
      )
      expect(messages).toHaveLength(0) // pure
      expect(result).toHaveLength(1)
      expect(result[0]).toEqual({
        id: 'msg1',
        role: 'user',
        content: 'hello world',
        timestamp,
        status: 'done',
      })
    })
  })

  describe('insertPlaceholder', () => {
    it('appends a placeholder assistant message and returns a new array', () => {
      const messages: Message[] = []
      const timestamp = new Date()
      const result = insertPlaceholder(messages, 'asst1', timestamp)
      expect(messages).toHaveLength(0) // pure
      expect(result).toHaveLength(1)
      expect(result[0]).toEqual({
        id: 'asst1',
        role: 'assistant',
        content: '',
        timestamp,
        status: 'loading',
      })
    })
  })

  describe('startStreaming', () => {
    it('updates assistant status to streaming', () => {
      const messages: Message[] = [
        {
          id: 'asst1',
          role: 'assistant',
          content: '',
          timestamp: new Date(),
          status: 'loading',
        },
      ]
      const result = startStreaming(messages, 'asst1')
      expect(messages[0].status).toBe('loading') // pure
      expect(result[0].status).toBe('streaming')
    })
  })

  describe('appendStreamChunk', () => {
    it('appends text to content of matching assistant message', () => {
      const messages: Message[] = [
        {
          id: 'asst1',
          role: 'assistant',
          content: 'hello',
          timestamp: new Date(),
          status: 'streaming',
        },
      ]
      const result = appendStreamChunk(messages, 'asst1', ' world')
      expect(messages[0].content).toBe('hello') // pure
      expect(result[0].content).toBe('hello world')
    })

    it('does not mutate if text is empty', () => {
      const messages: Message[] = [
        {
          id: 'asst1',
          role: 'assistant',
          content: 'hello',
          timestamp: new Date(),
          status: 'streaming',
        },
      ]
      const result = appendStreamChunk(messages, 'asst1', '')
      expect(result).toBe(messages)
    })
  })

  describe('finalizeMessage', () => {
    it('updates content, status, and timestamp of matching message', () => {
      const messages: Message[] = [
        {
          id: 'asst1',
          role: 'assistant',
          content: '',
          timestamp: new Date(0),
          status: 'loading',
        },
      ]
      const timestamp = new Date()
      const result = finalizeMessage(
        messages,
        'asst1',
        'done content',
        'done',
        timestamp
      )
      expect(messages[0].status).toBe('loading') // pure
      expect(result[0]).toEqual({
        id: 'asst1',
        role: 'assistant',
        content: 'done content',
        timestamp,
        status: 'done',
      })
    })
  })

  describe('finalizeStreamSuccess', () => {
    it('updates status to done without changing content', () => {
      const messages: Message[] = [
        {
          id: 'asst1',
          role: 'assistant',
          content: 'streamed content',
          timestamp: new Date(),
          status: 'streaming',
        },
      ]
      const result = finalizeStreamSuccess(messages, 'asst1')
      expect(messages[0].status).toBe('streaming')
      expect(result[0].status).toBe('done')
      expect(result[0].content).toBe('streamed content')
    })
  })

  describe('finalizeStreamError', () => {
    it('updates status to error and sets error text if content is empty', () => {
      const messages: Message[] = [
        {
          id: 'asst1',
          role: 'assistant',
          content: '',
          timestamp: new Date(),
          status: 'streaming',
        },
      ]
      const result = finalizeStreamError(messages, 'asst1', 'some error')
      expect(result[0].status).toBe('error')
      expect(result[0].content).toBe('some error')
    })

    it('retains existing content if not empty', () => {
      const messages: Message[] = [
        {
          id: 'asst1',
          role: 'assistant',
          content: 'partial content',
          timestamp: new Date(),
          status: 'streaming',
        },
      ]
      const result = finalizeStreamError(messages, 'asst1', 'some error')
      expect(result[0].status).toBe('error')
      expect(result[0].content).toBe('partial content')
    })
  })

  describe('prepareRetry', () => {
    it('removes last assistant and last user message', () => {
      const messages: Message[] = [
        { id: 'u1', role: 'user', content: 'hello', timestamp: new Date() },
        { id: 'a1', role: 'assistant', content: 'hi', timestamp: new Date() },
        {
          id: 'u2',
          role: 'user',
          content: 'retry this',
          timestamp: new Date(),
        },
        {
          id: 'a2',
          role: 'assistant',
          content: 'failed',
          timestamp: new Date(),
          status: 'error',
        },
      ]
      const result = prepareRetry(messages)
      expect(result).toHaveLength(2)
      expect(result[0].id).toBe('u1')
      expect(result[1].id).toBe('a1')
    })

    it('handles cases where assistant message is missing', () => {
      const messages: Message[] = [
        { id: 'u1', role: 'user', content: 'hello', timestamp: new Date() },
      ]
      const result = prepareRetry(messages)
      expect(result).toEqual([])
    })
  })

  describe('clearChat', () => {
    it('resets chat using initial messages or welcomeMessage', () => {
      const result = clearChat('welcome')
      expect(result).toHaveLength(1)
      expect(result[0].content).toBe('welcome')
    })
  })
})
