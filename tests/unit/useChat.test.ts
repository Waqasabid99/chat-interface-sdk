import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useChat } from '../../src/hooks/useChat'
import type { Message } from '../../src/types'

describe('useChat uncontrolled mode', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('should initialize with empty messages by default', () => {
    const { result } = renderHook(() =>
      useChat({
        onMessage: async () => 'response',
      })
    )
    expect(result.current.messages).toEqual([])
  })

  it('should initialize with welcomeMessage', () => {
    const { result } = renderHook(() =>
      useChat({
        onMessage: async () => 'response',
        welcomeMessage: 'Welcome to chat',
      })
    )
    expect(result.current.messages).toHaveLength(1)
    expect(result.current.messages[0].role).toBe('assistant')
    expect(result.current.messages[0].content).toBe('Welcome to chat')
    expect(result.current.messages[0].status).toBe('done')
  })

  it('should initialize with initialMessages', () => {
    const initial: Message[] = [
      { id: '1', role: 'user', content: 'hello', timestamp: new Date() },
    ]
    const { result } = renderHook(() =>
      useChat({
        onMessage: async () => 'response',
        initialMessages: initial,
      })
    )
    expect(result.current.messages).toEqual(initial)
  })

  it('should handle sendMessage and update state', async () => {
    const onMessage = vi.fn(async () => 'reply content')
    const { result } = renderHook(() =>
      useChat({
        onMessage,
      })
    )

    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('hello user')
    })

    // Immediately shows loading and user message
    expect(result.current.messages).toHaveLength(2)
    expect(result.current.messages[0].role).toBe('user')
    expect(result.current.messages[1].status).toBe('loading')

    await act(async () => {
      await sendPromise
    })

    expect(result.current.messages).toHaveLength(2)
    expect(result.current.messages[1].status).toBe('done')
    expect(result.current.messages[1].content).toBe('reply content')
  })

  it('should handle retryLast for failed messages', async () => {
    let fail = true
    const onMessage = vi.fn(async () => {
      if (fail) {
        fail = false
        throw new Error('failed attempt')
      }
      return 'success attempt'
    })

    const { result } = renderHook(() =>
      useChat({
        onMessage,
      })
    )

    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('try')
    })

    await act(async () => {
      try {
        await sendPromise
      } catch {}
    })

    expect(result.current.messages[1].status).toBe('error')

    // Retry
    let retryPromise: Promise<void>
    act(() => {
      retryPromise = result.current.retryLast()
    })

    // Immediately swaps out error message and user message, re-adds user + loading
    expect(result.current.messages).toHaveLength(2)
    expect(result.current.messages[1].status).toBe('loading')

    await act(async () => {
      await retryPromise
    })

    expect(result.current.messages[1].status).toBe('done')
    expect(result.current.messages[1].content).toBe('success attempt')
  })

  it('should handle clearMessages', () => {
    const { result } = renderHook(() =>
      useChat({
        onMessage: async () => 'res',
        welcomeMessage: 'hello support',
      })
    )

    expect(result.current.messages).toHaveLength(1)

    act(() => {
      result.current.clearMessages()
    })

    expect(result.current.messages).toHaveLength(1)
    expect(result.current.messages[0].content).toBe('hello support')
  })
})
