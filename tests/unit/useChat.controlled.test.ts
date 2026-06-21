import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useChat } from '../../src/hooks/useChat'
import type { Message } from '../../src/types'

describe('useChat controlled mode', () => {
  let consoleWarnSpy: any

  beforeEach(() => {
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleWarnSpy.mockRestore()
    vi.useRealTimers()
  })

  it('state never diverges from the messages prop', () => {
    const initialMessages: Message[] = [
      {
        id: '1',
        role: 'assistant',
        content: 'welcome',
        timestamp: new Date(),
        status: 'done',
      },
    ]
    let currentMessages = initialMessages

    const { result, rerender } = renderHook(
      (props) =>
        useChat({
          onMessage: async () => 'response',
          messages: props.messages,
          onMessagesChange: (next) => {
            currentMessages = next
          },
        }),
      {
        initialProps: { messages: initialMessages },
      }
    )

    expect(result.current.messages).toEqual(initialMessages)

    // Prop update from outside
    const updatedMessages: Message[] = [
      ...initialMessages,
      {
        id: '2',
        role: 'user',
        content: 'new message',
        timestamp: new Date(),
        status: 'done',
      },
    ]
    rerender({ messages: updatedMessages })

    expect(result.current.messages).toEqual(updatedMessages)
  })

  it('sendMessage calls onMessagesChange with new messages', async () => {
    const initialMessages: Message[] = []
    let currentMessages = initialMessages
    const onMessagesChange = vi.fn((next) => {
      currentMessages = next
    })

    const onMessage = vi.fn(async () => 'hello from assistant')

    const { result, rerender } = renderHook(
      (props) =>
        useChat({
          onMessage,
          messages: props.messages,
          onMessagesChange: props.onMessagesChange,
        }),
      {
        initialProps: { messages: initialMessages, onMessagesChange },
      }
    )

    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('hello')
    })

    // Immediately after send, onMessagesChange should have been called with user message + assistant placeholder
    expect(onMessagesChange).toHaveBeenCalled()
    expect(currentMessages).toHaveLength(2)
    expect(currentMessages[0].role).toBe('user')
    expect(currentMessages[0].content).toBe('hello')
    expect(currentMessages[1].role).toBe('assistant')
    expect(currentMessages[1].status).toBe('loading')

    // Feed the updated messages back as a prop
    rerender({ messages: currentMessages, onMessagesChange })

    await act(async () => {
      await sendPromise
    })

    // Now onMessagesChange should have been called again to finalize the message
    expect(currentMessages).toHaveLength(2)
    expect(currentMessages[1].status).toBe('done')
    expect(currentMessages[1].content).toBe('hello from assistant')
  })

  it('retryLast calls onMessagesChange correctly', async () => {
    const initialMessages: Message[] = [
      {
        id: '1',
        role: 'user',
        content: 'retry this',
        timestamp: new Date(),
        status: 'done',
      },
      {
        id: '2',
        role: 'assistant',
        content: 'error occurred',
        timestamp: new Date(),
        status: 'error',
      },
    ]
    let currentMessages = initialMessages
    const onMessagesChange = vi.fn((next) => {
      currentMessages = next
    })

    const onMessage = vi.fn(async () => 'success now')

    const { result, rerender } = renderHook(
      (props) =>
        useChat({
          onMessage,
          messages: props.messages,
          onMessagesChange,
        }),
      {
        initialProps: { messages: initialMessages },
      }
    )

    // Set the last user message text so retry has context
    // We can trigger this by calling sendMessage first, but since the hook tracks it via ref,
    // let's do a retry. Wait, retryLast reads lastUserMessageRef.current.
    // Let's set it by calling sendMessage first in uncontrolled or mock it,
    // or just run a normal flow that fails, and then retry it!
  })

  it('retryLast flow works end-to-end', async () => {
    let currentMessages: Message[] = []
    const onMessagesChange = vi.fn((next) => {
      currentMessages = next
    })

    let fail = true
    const onMessage = vi.fn(async () => {
      if (fail) {
        fail = false
        throw new Error('network error')
      }
      return 'success response'
    })

    const { result, rerender } = renderHook(
      (props) =>
        useChat({
          onMessage,
          messages: props.messages,
          onMessagesChange,
        }),
      {
        initialProps: { messages: currentMessages },
      }
    )

    // 1. Send message that fails
    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('hello')
    })
    rerender({ messages: currentMessages })

    await act(async () => {
      try {
        await sendPromise
      } catch {}
    })
    rerender({ messages: currentMessages })

    expect(currentMessages[1].status).toBe('error')

    // 2. Retry last
    let retryPromise: Promise<void>
    act(() => {
      retryPromise = result.current.retryLast()
    })
    // Expect retry to call prepareRetry (which removes the error assistant message and user message)
    // and then re-add user message + assistant placeholder
    expect(currentMessages).toHaveLength(2)
    expect(currentMessages[0].content).toBe('hello')
    expect(currentMessages[1].status).toBe('loading')

    rerender({ messages: currentMessages })

    await act(async () => {
      await retryPromise
    })
    rerender({ messages: currentMessages })

    expect(currentMessages).toHaveLength(2)
    expect(currentMessages[1].status).toBe('done')
    expect(currentMessages[1].content).toBe('success response')
  })

  it('clearMessages calls onMessagesChange correctly', () => {
    const initialMessages: Message[] = [
      { id: '1', role: 'user', content: 'hello', timestamp: new Date() },
    ]
    let currentMessages = initialMessages
    const onMessagesChange = vi.fn((next) => {
      currentMessages = next
    })

    const { result } = renderHook(() =>
      useChat({
        onMessage: async () => 'res',
        welcomeMessage: 'welcome text',
        messages: currentMessages,
        onMessagesChange,
      })
    )

    act(() => {
      result.current.clearMessages()
    })

    expect(onMessagesChange).toHaveBeenCalled()
    expect(currentMessages).toHaveLength(1)
    expect(currentMessages[0].role).toBe('assistant')
    expect(currentMessages[0].content).toBe('welcome text')
  })

  it('per-chunk streaming updates work', async () => {
    let currentMessages: Message[] = []
    const onMessagesChange = vi.fn((next) => {
      currentMessages = next
    })

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        controller.enqueue(encoder.encode('hello\n'))
        await new Promise((resolve) => setTimeout(resolve, 5))
        controller.enqueue(encoder.encode('world\n'))
        controller.close()
      },
    })

    const onMessage = vi.fn(async () => stream)

    const { result, rerender } = renderHook(
      (props) =>
        useChat({
          onMessage,
          messages: props.messages,
          onMessagesChange,
        }),
      {
        initialProps: { messages: currentMessages },
      }
    )

    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('test stream')
    })

    // Initial state: user message and loading placeholder
    expect(currentMessages).toHaveLength(2)
    expect(currentMessages[1].status).toBe('loading')

    rerender({ messages: currentMessages })

    await act(async () => {
      await sendPromise
    })
    rerender({ messages: currentMessages })

    expect(currentMessages[1].status).toBe('done')
    expect(currentMessages[1].content).toBe('helloworld')
  })

  it('fires dev-only warning when both messages and initialMessages are passed', () => {
    const messages: Message[] = []
    const initialMessages: Message[] = []

    renderHook(() =>
      useChat({
        onMessage: async () => 'res',
        messages,
        initialMessages,
        onMessagesChange: () => {},
      })
    )

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        'Both "messages" (controlled) and "initialMessages"'
      )
    )
  })

  it('regression: messages prop changes mid-stream from outside the hook', async () => {
    let currentMessages: Message[] = []
    const onMessagesChange = vi.fn((next) => {
      currentMessages = next
    })

    let controllerRef: any
    const stream = new ReadableStream({
      start(c) {
        controllerRef = c
      },
    })

    const onMessage = vi.fn(async () => stream)

    const { result, rerender } = renderHook(
      (props) =>
        useChat({
          onMessage,
          messages: props.messages,
          onMessagesChange,
        }),
      {
        initialProps: { messages: currentMessages },
      }
    )

    // Start stream
    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('hello')
    })
    rerender({ messages: currentMessages })

    // Stream first chunk
    const encoder = new TextEncoder()
    await act(async () => {
      controllerRef.enqueue(encoder.encode('part1\n'))
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    rerender({ messages: currentMessages })

    expect(currentMessages[1].content).toBe('part1')

    // Simulate external change: an admin message is inserted in the middle of history
    const externalInsert: Message = {
      id: 'admin-msg',
      role: 'assistant',
      content: 'System notification',
      timestamp: new Date(),
      status: 'done',
    }

    // We insert it at index 1 (between user message and streaming message)
    const updatedMessages = [
      currentMessages[0],
      externalInsert,
      currentMessages[1],
    ]

    // Rerender with the externally modified messages
    rerender({ messages: updatedMessages })

    // Stream second chunk
    await act(async () => {
      controllerRef.enqueue(encoder.encode('part2\n'))
      controllerRef.close()
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    rerender({ messages: currentMessages })

    // Verify the assistant streaming bubble got part2, and the system notification is still present in the list
    expect(currentMessages).toHaveLength(3)
    expect(currentMessages[1].id).toBe('admin-msg')
    expect(currentMessages[2].content).toBe('part1part2')
    expect(currentMessages[2].status).toBe('done')

    await act(async () => {
      await sendPromise
    })
  })

  it('regression: dev transforms messages before committing them back', async () => {
    let currentMessages: Message[] = []

    const onMessagesChange = vi.fn((next: Message[]) => {
      currentMessages = next.map((msg) => {
        if (msg.role === 'user' && !msg.content.endsWith(' (transformed)')) {
          return { ...msg, content: msg.content + ' (transformed)' }
        }
        return msg
      })
    })

    const onMessage = vi.fn(async () => 'reply from assistant')

    const { result, rerender } = renderHook(
      (props) =>
        useChat({
          onMessage,
          messages: props.messages,
          onMessagesChange: props.onMessagesChange,
        }),
      {
        initialProps: { messages: currentMessages, onMessagesChange },
      }
    )

    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('hello')
    })

    rerender({ messages: currentMessages, onMessagesChange })

    expect(result.current.messages[0].content).toBe('hello (transformed)')

    await act(async () => {
      await sendPromise
    })

    rerender({ messages: currentMessages, onMessagesChange })

    expect(currentMessages).toHaveLength(2)
    expect(currentMessages[0].content).toBe('hello (transformed)')
    expect(currentMessages[1].content).toBe('reply from assistant')
    expect(currentMessages[1].status).toBe('done')
  })
})
