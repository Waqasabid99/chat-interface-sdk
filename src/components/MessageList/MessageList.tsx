/**
 * MessageList.tsx
 *
 * Scrollable container that renders all MessageBubble instances.
 *
 * Behaviour (per PRD §4.2):
 *  - Auto-scrolls to the bottom on every new message and on every streamed chunk
 *  - Scroll position is PRESERVED if the user has scrolled up while streaming
 *    (i.e. the "scroll lock" is released only once the user scrolls back down)
 *  - A "scroll to bottom" pill button appears when the user is not at the bottom
 *  - Empty state: a centred placeholder when there are no messages yet
 *  - The list is a semantic <ul> (role="log" + aria-live="polite") so screen
 *    readers announce new messages automatically without per-bubble live regions
 *    conflicting; MessageBubble's own aria-live is only active for the in-flight
 *    streaming bubble
 *
 * Scroll anchor strategy:
 *  - A zero-height sentinel <div> sits after the last message
 *  - scrollIntoView({ behavior: "smooth" }) is called on it whenever the list
 *    should snap to bottom
 *  - User scroll intent is detected via an IntersectionObserver watching the
 *    sentinel: when it leaves the viewport the user has scrolled up
 *  - As soon as the sentinel re-enters the viewport (user scrolled back down)
 *    the lock is released automatically
 */

import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import { MessageBubble } from '../MessageBubble'
import { cn } from '../../utils/cn'
import type { Message } from '../../types'
import styles from './MessageList.module.css'

// ─── Props ────────────────────────────────────────────────────────────────────

export interface MessageListProps {
  messages: Message[]

  /**
   * Passed down to every error-status assistant bubble.
   * Triggers retryLast() from useChat.
   */
  onRetry?: () => void

  /** URL string or React element used as the agent's avatar */
  agentAvatar?: string | React.ReactNode

  /** Name shown in the widget header. Default: "AI Assistant" */
  agentName?: string

  /** Extra class applied to the scrollable root element. */
  className?: string
}

// ─── Scroll-to-bottom button ──────────────────────────────────────────────────

const ChevronDownIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
)

// ─── Empty state ──────────────────────────────────────────────────────────────

const EmptyState: React.FC = () => (
  <div className={styles.emptyState} aria-hidden="true">
    <span className={styles.emptyIcon}>
      {/* Simple chat bubble SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="36"
        height="36"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </span>
    <p className={styles.emptyText}>Start the conversation</p>
    <p className={styles.emptySubtext}>Send a message to get started</p>
  </div>
)

// ─── Component ────────────────────────────────────────────────────────────────

export const MessageList: React.FC<MessageListProps> = memo(
  ({ messages, onRetry, className, agentAvatar, agentName }) => {
    const scrollRootRef = useRef<HTMLDivElement>(null)
    const sentinelRef = useRef<HTMLDivElement>(null)

    /**
     * userScrolledUp === true  → user has scrolled up; do NOT auto-scroll
     * userScrolledUp === false → user is at (or near) the bottom; DO auto-scroll
     */
    const [userScrolledUp, setUserScrolledUp] = useState(false)

    // Tracks the previous message count so we can detect new arrivals
    const prevCountRef = useRef(messages.length)

    // ── IntersectionObserver — watches the sentinel ─────────────────────────
    useEffect(() => {
      const sentinel = sentinelRef.current
      if (!sentinel) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          // sentinel visible  → user is at the bottom → release scroll lock
          // sentinel invisible → user scrolled up      → engage scroll lock
          setUserScrolledUp(!entry.isIntersecting)
        },
        {
          root: scrollRootRef.current,
          threshold: 0.1, // 10% of the sentinel must be visible to count
        }
      )

      observer.observe(sentinel)
      return () => observer.disconnect()
    }, [])

    // ── Auto-scroll helper ──────────────────────────────────────────────────

    const scrollToBottom = useCallback(
      (behavior: ScrollBehavior = 'smooth') => {
        sentinelRef.current?.scrollIntoView({ behavior, block: 'nearest' })
      },
      []
    )

    /**
     * Scroll on new message arrival OR on streaming chunk updates.
     *
     * We use useLayoutEffect so the DOM has been updated (new bubble painted)
     * before we attempt to scroll — prevents a one-frame lag where the list
     * scrolls to the old bottom.
     *
     * Rules:
     *  1. A brand-new message was added → always scroll (unless user scrolled up)
     *  2. Last message is streaming/loading → scroll each chunk (unless user scrolled up)
     */
    useLayoutEffect(() => {
      if (userScrolledUp) return

      const currentCount = messages.length
      const lastMsg = messages[messages.length - 1]

      const isNewMessage = currentCount > prevCountRef.current
      const isLiveUpdate =
        lastMsg?.status === 'streaming' || lastMsg?.status === 'loading'

      if (isNewMessage || isLiveUpdate) {
        scrollToBottom('smooth')
      }

      prevCountRef.current = currentCount
    }, [messages, userScrolledUp, scrollToBottom])

    /**
     * When the panel first mounts (or messages are cleared and a welcome
     * message loads), snap instantly to the bottom without animation.
     */
    useLayoutEffect(() => {
      scrollToBottom('instant' as ScrollBehavior)
      // Only run on mount
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ── Scroll-to-bottom button handler ────────────────────────────────────

    const handleScrollToBottom = useCallback(() => {
      scrollToBottom('smooth')
      // Release lock immediately on explicit user action — the IntersectionObserver
      // will confirm and keep it released once the sentinel comes into view
      setUserScrolledUp(false)
    }, [scrollToBottom])

    const isEmpty = messages.length === 0

    return (
      <div className={cn(styles.root, className)}>
        {/* ── Scrollable region ── */}
        <div
          ref={scrollRootRef}
          className={styles.scrollArea}
          // role="log" semantically describes a live region that accumulates
          // entries (chat transcripts, logs). aria-live="polite" is implicit
          // for role="log" but we set it explicitly for maximum compat.
          role="log"
          aria-live="polite"
          aria-label="Chat messages"
          aria-relevant="additions"
          tabIndex={0} // scrollable region should be keyboard-focusable
        >
          {isEmpty ? (
            <EmptyState />
          ) : (
            // Semantic list — MessageBubble uses role="listitem"
            <ul className={styles.list} aria-label="Message history">
              {messages.map((message) => (
                <li key={message.id} className={styles.listItem}>
                  <MessageBubble
                    message={message}
                    agentAvatar={agentAvatar}
                    agentName={agentName}
                    onRetry={
                      message.role === 'assistant' && message.status === 'error'
                        ? onRetry
                        : undefined
                    }
                  />
                </li>
              ))}

              {/* ── Scroll sentinel — always the last child ── */}
              <li aria-hidden="true" className={styles.sentinelItem}>
                <div ref={sentinelRef} className={styles.sentinel} />
              </li>
            </ul>
          )}
        </div>

        {/* ── Scroll-to-bottom pill ── */}
        {userScrolledUp && !isEmpty && (
          <button
            type="button"
            className={styles.scrollPill}
            onClick={handleScrollToBottom}
            aria-label="Scroll to latest message"
          >
            <ChevronDownIcon />
            <span>Latest</span>
          </button>
        )}
      </div>
    )
  }
)

MessageList.displayName = 'MessageList'
