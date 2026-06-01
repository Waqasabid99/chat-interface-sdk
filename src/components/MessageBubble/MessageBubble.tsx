/**
 * MessageBubble.tsx
 *
 * Renders a single message in the chat — either a user bubble (right-aligned,
 * primary color) or an assistant bubble (left-aligned, surface color).
 *
 * Handles all five message statuses from the useChat hook:
 *  - "loading"   → animated three-dot typing indicator
 *  - "streaming" → content renders progressively with a blinking cursor
 *  - "done"      → static content + timestamp
 *  - "error"     → error styling with an inline Retry button
 *  - undefined   → treated as "done" (welcome message, initial state)
 *
 * Design decisions:
 *  - User bubbles are right-aligned with --ai-user-bubble background
 *  - Assistant bubbles are left-aligned with --ai-assistant-bubble background
 *  - Whitespace is preserved (pre-wrap) so \n from Shift+Enter renders correctly
 *  - Long unbroken strings (URLs, tokens) wrap with overflow-wrap: anywhere
 *  - Timestamps shown on hover/focus (aria-hidden, decorative only)
 *  - Error state shows the error text + a retry button in the bubble itself
 *  - No external dependencies — pure CSS animations for the typing indicator
 */

import React, { memo, useCallback, useMemo } from 'react'

import { cn } from '../../utils/cn'
import type { Message } from '../../types'
import styles from './MessageBubble.module.css'
import stylesHeader from '../ChatHeader/ChatHeader.module.css'
import { TypingIndicator } from '../TypingIndicator'
import { MarkdownRenderer } from '../MarkdownRenderer/MarkdownRenderer'

// ─── Props ────────────────────────────────────────────────────────────────────

export interface MessageBubbleProps {
  message: Message

  /**
   * Called when the user clicks the retry button on an error bubble.
   * Only rendered for assistant messages with status="error".
   */
  onRetry?: () => void

  /** URL string or React element used as the agent's avatar */
  agentAvatar?: string | React.ReactNode

  /** Name shown in the widget header. Default: "AI Assistant" */
  agentName?: string

  /** Extra class applied to the outermost row element. */
  className?: string

}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Formats a Date as "h:mm AM/PM" — e.g. "2:34 PM" */
function formatTime(date: Date): string {
  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  })
}


/** Error icon — inline SVG, no external dep */
const ErrorIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="14"
    height="14"
    aria-hidden="true"
    focusable="false"
    className={styles.errorIcon}
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  </svg>
)

/** Retry icon */
const RetryIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="12"
    height="12"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.389Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
      clipRule="evenodd"
    />
  </svg>
)

// ─── Component ────────────────────────────────────────────────────────────────

export const MessageBubble: React.FC<MessageBubbleProps> = memo(
  ({ message, onRetry, className, agentAvatar, agentName }) => {
    const { role, content, timestamp, status } = message

    const isUser = role === 'user'
    const isLoading = status === 'loading'
    const isStreaming = status === 'streaming'
    const isError = status === 'error'
    const isDone = !status || status === 'done'

    // ── Retry handler ───────────────────────────────────────────────────────
    const handleRetry = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation()
        onRetry?.()
      },
      [onRetry]
    )


    const initials = useMemo(() => {
      const words = agentName?.trim().split(/\s+/) || []
      if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
      return (words[0][0] + words[1][0]).toUpperCase()
    }, [agentName])

    // ── Bubble content ──────────────────────────────────────────────────────

    const renderContent = () => {
      // Loading: show typing dots instead of (empty) content
      if (isLoading) {
        return <TypingIndicator variant="bubble" />
      }

      // Error: error icon + message text + retry button
      if (isError) {
        return (
          <span className={styles.errorBody}>
            <span className={styles.errorMessage}>
              <ErrorIcon />
              <span>{content || 'Something went wrong.'}</span>
            </span>
            {onRetry && (
              <button
                type="button"
                className={styles.retryButton}
                onClick={handleRetry}
                aria-label="Retry message"
              >
                <RetryIcon />
                Retry
              </button>
            )}
          </span>
        )
      }

      // Streaming: content + blinking cursor
      if (isStreaming) {
        return <MarkdownRenderer content={content} isStreaming={true} />
      }

      // Done / welcome message: formatted markdown
      return <MarkdownRenderer content={content} />
    }

    // ── ARIA role for live updates ──────────────────────────────────────────
    // Assistant messages that arrive during streaming are announced politely.
    // We omit aria-live on user messages (the user typed them).
    const liveProps =
      !isUser && (isLoading || isStreaming)
        ? { 'aria-live': 'polite' as const, 'aria-atomic': false }
        : {}

    return (
      <div
        className={cn(
          styles.row,
          isUser ? styles.rowUser : styles.rowAssistant,
          className
        )}
        // Each message is a list item — the parent MessageList renders a <ul>
        role="listitem"
      >
        {/* ── Assistant avatar dot ── */}
        {!isUser && (agentName || agentAvatar) && (
          <span
            className={cn(styles.avatar)}
            aria-hidden="false"
          >
            {
              agentAvatar ? (
                <img
                  src={agentAvatar as string}
                  alt={""}
                  className={stylesHeader.avatarImg}

                />
              ) : (
                <div className={stylesHeader.avatarInitials}>{initials}</div>
              )
            }
          </span>
        )}

        {/* ── Bubble ── */}
        <div
          className={cn(
            styles.bubble,
            isUser && styles.bubbleUser,
            isLoading && styles.bubbleLoading,
            isStreaming && styles.bubbleStreaming,
            isError && styles.bubbleError,
            isDone && !isUser && styles.bubbleDone
          )}
          {...liveProps}
        >
          {renderContent()}
        </div>

        {/* ── Timestamp (visible on hover/focus-within) ── */}
        {(isDone || isError) && (
          <time
            className={cn(
              styles.timestamp,
              isUser ? styles.timestampUser : styles.timestampAssistant
            )}
            dateTime={timestamp?.toISOString()}
            aria-hidden="true"
          >
            {formatTime(timestamp)}
          </time>
        )}
      </div>
    )
  }
)

MessageBubble.displayName = 'MessageBubble'
