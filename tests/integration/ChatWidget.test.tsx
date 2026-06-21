import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { ChatWidget, type Message } from '../../src'

describe('ChatWidget', () => {
  beforeAll(() => {
    class MockIntersectionObserver {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
    }
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  it('should render uncontrolled', () => {
    const { container } = render(<ChatWidget onMessage={async () => 'res'} />)
    expect(container).toBeTruthy()
  })

  it('should render with controlled messages', () => {
    const messages: Message[] = [
      {
        id: '1',
        role: 'user',
        content: 'hello from controlled prop',
        timestamp: new Date(),
      },
    ]
    const onMessagesChange = vi.fn()
    const onMessage = vi.fn(async () => 'reply')

    render(
      <ChatWidget
        defaultView="chat"
        isOpen={true}
        messages={messages}
        onMessagesChange={onMessagesChange}
        onMessage={onMessage}
      />
    )

    // Verify messages prop is passed down and rendered
    const text = screen.getByText('hello from controlled prop')
    expect(text).toBeTruthy()
  })
})
