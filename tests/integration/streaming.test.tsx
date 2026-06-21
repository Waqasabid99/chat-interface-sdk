import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useChat } from '../../src/hooks/useChat'
import type { Message } from '../../src/types'

describe('streaming integration', () => {
  const createStream = (chunks: string[]) => {
    return new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        for (const chunk of chunks) {
          controller.enqueue(encoder.encode(chunk))
          await new Promise((resolve) => setTimeout(resolve, 5))
        }
        controller.close()
      },
    })
  }

  it('should handle streaming responses in uncontrolled mode', async () => {
    const stream = createStream([
      'data: {"content": "Hello"}\n',
      'data: {"content": " World"}\n',
    ])
    const onMessage = vi.fn(async () => stream)

    const { result } = renderHook(() => useChat({ onMessage }))

    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('test stream')
    })

    await act(async () => {
      await sendPromise
    })

    expect(result.current.messages).toHaveLength(2)
    expect(result.current.messages[1].content).toBe('Hello World')
    expect(result.current.messages[1].status).toBe('done')
  })

  it('should handle streaming responses in controlled mode', async () => {
    const stream = createStream([
      'data: {"content": "Hello"}\n',
      'data: {"content": " Controlled"}\n',
    ])
    const onMessage = vi.fn(async () => stream)
    let currentMessages: Message[] = []
    const onMessagesChange = vi.fn((next) => {
      currentMessages = next
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

    let sendPromise: Promise<void>
    act(() => {
      sendPromise = result.current.sendMessage('test stream')
    })
    rerender({ messages: currentMessages })

    await act(async () => {
      await sendPromise
    })
    rerender({ messages: currentMessages })

    expect(currentMessages).toHaveLength(2)
    expect(currentMessages[1].content).toBe('Hello Controlled')
    expect(currentMessages[1].status).toBe('done')
  })
})
