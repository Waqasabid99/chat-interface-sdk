/**
 * InputBar.tsx
 *
 * The bottom bar of the chat panel.
 * Contains an auto-resizing textarea (up to 5 lines) and a send button.
 *
 * Behaviour (per PRD §4.2):
 *  - Enter        → send message
 *  - Shift+Enter  → insert newline
 *  - Textarea starts as a single line and grows with content up to MAX_ROWS,
 *    then becomes internally scrollable — matching ChatGPT's input behaviour.
 *  - Send button + textarea both disabled while isLoading is true
 *  - Send button disabled when input is empty
 *  - On send, textarea resets to single-line height immediately
 *  - Autofocus when the panel opens (via the autoFocus prop)
 *  - Fully keyboard and screen-reader accessible
 */

import React, { useCallback, useEffect, useId, useRef, useState } from 'react'

import { cn } from '../../utils/cn'
import styles from './InputBar.module.css'

// ─── Constants ────────────────────────────────────────────────────────────────

/** Line-height used for auto-resize calculation (matches CSS). */
const LINE_HEIGHT_PX = 24

/** Vertical padding inside the textarea (top + bottom, matches CSS). */
const TEXTAREA_PADDING_V = 18 // 9px top + 9px bottom

/** Maximum number of visible lines before the textarea becomes scrollable. */
const MAX_ROWS = 5

const MAX_HEIGHT_PX = LINE_HEIGHT_PX * MAX_ROWS + TEXTAREA_PADDING_V

// ─── Props ────────────────────────────────────────────────────────────────────

export interface InputBarProps {
  /** Called when the user submits a non-empty message. */
  onSend: (text: string) => void

  /** When true, textarea and send button are disabled. */
  isLoading?: boolean

  /** Placeholder text shown in the textarea. */
  placeholder?: string

  /**
   * When true, the textarea receives focus as soon as the component mounts.
   * Pass `true` whenever the chat panel opens.
   */
  autoFocus?: boolean

  /** Extra class applied to the root wrapper. */
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export const InputBar: React.FC<InputBarProps> = ({
  onSend,
  isLoading = false,
  placeholder = 'Message…',
  autoFocus = false,
  className,
}) => {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const formId = useId()

  // ── Auto-resize logic ─────────────────────────────────────────────────────

  /**
   * Recalculates the textarea height to fit its content, capped at MAX_HEIGHT.
   *
   * Pattern used by ChatGPT / linear.app / Vercel:
   *  1. Collapse to "auto" so scrollHeight is unconstrained.
   *  2. Re-set to min(scrollHeight, MAX_HEIGHT_PX).
   *  3. Toggle overflow-y so the scrollbar only appears when capped.
   *
   * This means the textarea is truly one line tall when empty or on a single
   * line of text, and grows naturally as the user types.
   */
  const syncHeight = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    // Step 1 — release the height constraint so scrollHeight reflects content
    el.style.height = 'auto'
    // Step 2 — clamp to our max
    const next = Math.min(el.scrollHeight, MAX_HEIGHT_PX)
    el.style.height = `${next}px`
    // Step 3 — only scroll internally once capped
    el.style.overflowY = el.scrollHeight > MAX_HEIGHT_PX ? 'auto' : 'hidden'
  }, [])

  /**
   * Snap the textarea back to a single line after the message is sent.
   * We set height to "auto" and let the `rows={1}` attribute handle the
   * single-line default — no hard-coded pixel value needed.
   */
  const resetHeight = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.overflowY = 'hidden'
  }, [])

  // Sync height whenever value changes (including paste, autocomplete, etc.)
  useEffect(() => {
    syncHeight()
  }, [value, syncHeight])

  // ── Autofocus ─────────────────────────────────────────────────────────────

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      // rAF ensures the panel's open animation has started before we focus,
      // preventing a layout jump on the first render.
      const raf = requestAnimationFrame(() => {
        textareaRef.current?.focus()
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [autoFocus])

  // Re-focus the textarea once a loading response completes so the user can
  // immediately type their next message without clicking.
  const prevLoading = useRef(isLoading)
  useEffect(() => {
    if (prevLoading.current && !isLoading) {
      textareaRef.current?.focus()
    }
    prevLoading.current = isLoading
  }, [isLoading])

  // ── Send handler ──────────────────────────────────────────────────────────

  const handleSend = useCallback(() => {
    const trimmed = value.trim()
    if (!trimmed || isLoading) return
    onSend(trimmed)
    setValue('')
    // resetHeight runs synchronously here so there is no single-frame "flash"
    // of the old tall textarea before the value-change effect fires.
    resetHeight()
  }, [value, isLoading, onSend, resetHeight])

  // ── Keyboard handler ──────────────────────────────────────────────────────

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault() // prevent bare newline
        handleSend()
      }
      // Shift+Enter falls through naturally — browser inserts \n
    },
    [handleSend]
  )

  // ── Derived state ─────────────────────────────────────────────────────────

  const canSend = value.trim().length > 0 && !isLoading
  const inputId = `${formId}-input`

  return (
    <div
      className={cn(styles.root, isLoading && styles.loading, className)}
      role="group"
      aria-label="Message input"
    >
      {/* ── Top divider ── */}
      <div className={styles.divider} aria-hidden="true" />

      {/* ── Input pill: textarea + send button side-by-side ── */}
      <div className={styles.inputRow}>
        <label htmlFor={inputId} className={styles.srOnly}>
          {placeholder}
        </label>

        <textarea
          ref={textareaRef}
          id={inputId}
          className={styles.textarea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          /**
           * rows={1} is the key to the single-line default.
           * Combined with height:"auto" in CSS, the browser renders exactly
           * one line of text until syncHeight() expands it.
           */
          rows={1}
          aria-label={placeholder}
          aria-disabled={isLoading}
          aria-multiline="true"
          aria-describedby={isLoading ? `${formId}-loading` : undefined}
          autoComplete="off"
          autoCorrect="on"
          autoCapitalize="sentences"
          spellCheck
        />

        {/* Send button lives inside the pill, right-aligned */}
        <button
          type="button"
          className={cn(styles.sendButton, canSend && styles.sendButtonActive)}
          onClick={handleSend}
          disabled={!canSend}
          aria-label="Send message"
          aria-disabled={!canSend}
          tabIndex={0}
        >
          {isLoading ? <LoadingSpinner /> : <SendIcon />}
        </button>

        {/* Hidden loading description for screen readers */}
        {isLoading && (
          <span
            id={`${formId}-loading`}
            className={styles.srOnly}
            aria-live="polite"
          >
            Waiting for response…
          </span>
        )}
      </div>
    </div>
  )
}

InputBar.displayName = 'InputBar'

// ─── Icons ────────────────────────────────────────────────────────────────────

const SendIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
  >
    {/* Up-arrow — matches ChatGPT's send icon style */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .574.268l7.5 9a.75.75 0 0 1-.574 1.232H13.5V21a.75.75 0 0 1-1.5 0v-8.25H4.5a.75.75 0 0 1-.574-1.232l7.5-9A.75.75 0 0 1 12 2.25Z"
    />
  </svg>
)

const LoadingSpinner: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
    className={styles.spinner}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="40 20"
    />
  </svg>
)