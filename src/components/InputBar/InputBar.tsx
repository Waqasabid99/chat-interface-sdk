/**
 * InputBar.tsx
 *
 * The bottom bar of the chat panel.
 * Contains an auto-resizing textarea (up to 5 lines) and a send button.
 *
 * Behaviour (per PRD §4.2):
 *  - Enter        → send message
 *  - Shift+Enter  → insert newline
 *  - Textarea auto-resizes from 1 line up to MAX_ROWS, then scrolls internally
 *  - Send button + textarea both disabled while isLoading is true
 *  - Send button disabled when input is empty
 *  - On send, textarea resets to single-line height immediately
 *  - Autofocus when the panel opens (via the autoFocus prop)
 *  - Fully keyboard and screen-reader accessible
 */

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "../../utils/cn";
import styles from "./InputBar.module.css";

// ─── Constants ────────────────────────────────────────────────────────────────

/** Line-height used for auto-resize calculation (matches CSS). */
const LINE_HEIGHT_PX = 22;

/** Vertical padding inside the textarea (top + bottom, matches CSS). */
const TEXTAREA_PADDING_V = 20; // 10px top + 10px bottom

/** Maximum number of visible lines before the textarea becomes scrollable. */
const MAX_ROWS = 5;

const MAX_HEIGHT_PX = LINE_HEIGHT_PX * MAX_ROWS + TEXTAREA_PADDING_V;

// ─── Props ────────────────────────────────────────────────────────────────────

export interface InputBarProps {
  /** Called when the user submits a non-empty message. */
  onSend: (text: string) => void;

  /** When true, textarea and send button are disabled. */
  isLoading?: boolean;

  /** Placeholder text shown in the textarea. */
  placeholder?: string;

  /**
   * When true, the textarea receives focus as soon as the component mounts.
   * Pass `true` whenever the chat panel opens.
   */
  autoFocus?: boolean;

  /** Extra class applied to the root wrapper. */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const InputBar: React.FC<InputBarProps> = ({
  onSend,
  isLoading = false,
  placeholder = "Type a message…",
  autoFocus = false,
  className,
}) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formId = useId();

  // ── Auto-resize logic ─────────────────────────────────────────────────────

  /**
   * Recalculates the textarea height to fit its content, capped at MAX_HEIGHT.
   * We temporarily set height to "auto" so scrollHeight reflects the true
   * content height without being constrained by the current element height.
   */
  const syncHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT_PX)}px`;
    el.style.overflowY =
      el.scrollHeight > MAX_HEIGHT_PX ? "auto" : "hidden";
  }, []);

  /** Reset height to single-line after sending. */
  const resetHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.overflowY = "hidden";
  }, []);

  // Sync height whenever value changes
  useEffect(() => {
    syncHeight();
  }, [value, syncHeight]);

  // ── Autofocus ─────────────────────────────────────────────────────────────

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      // rAF ensures the panel's open animation has started before we focus,
      // preventing a layout jump on the first render.
      const raf = requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [autoFocus]);

  // Re-focus the textarea once a loading response completes so the user can
  // immediately type their next message without clicking.
  const prevLoading = useRef(isLoading);
  useEffect(() => {
    if (prevLoading.current && !isLoading) {
      textareaRef.current?.focus();
    }
    prevLoading.current = isLoading;
  }, [isLoading]);

  // ── Send handler ──────────────────────────────────────────────────────────

  const handleSend = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setValue("");
    resetHeight();
  }, [value, isLoading, onSend, resetHeight]);

  // ── Keyboard handler ──────────────────────────────────────────────────────

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // prevent bare newline
        handleSend();
      }
      // Shift+Enter falls through naturally — browser inserts \n
    },
    [handleSend]
  );

  // ── Derived state ─────────────────────────────────────────────────────────

  const canSend = value.trim().length > 0 && !isLoading;
  const inputId = `${formId}-input`;

  return (
    <div
      className={cn(styles.root, isLoading && styles.loading, className)}
      role="group"
      aria-label="Message input"
    >
      {/* ── Divider ── */}
      <div className={styles.divider} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Textarea ── */}
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
          rows={1}
          aria-label={placeholder}
          aria-disabled={isLoading}
          aria-multiline="true"
          // Tells screen readers this textarea is part of a live chat
          aria-describedby={isLoading ? `${formId}-loading` : undefined}
          autoComplete="off"
          autoCorrect="on"
          autoCapitalize="sentences"
          spellCheck
        />

        {/* Hidden loading description for screen readers */}
        {isLoading && (
          <span id={`${formId}-loading`} className={styles.srOnly} aria-live="polite">
            Waiting for response…
          </span>
        )}

        {/* ── Send Button ── */}
        <button
          type="button"
          className={cn(styles.sendButton, canSend && styles.sendButtonActive)}
          onClick={handleSend}
          disabled={!canSend}
          aria-label="Send message"
          aria-disabled={!canSend}
          tabIndex={0}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <SendIcon />
          )}
        </button>
      </div>

      {/* ── Hint text ── */}
      <p className={styles.hint} aria-hidden="true">
        Press{" "}
        <kbd className={styles.kbd}>Enter</kbd> to send,{" "}
        <kbd className={styles.kbd}>Shift</kbd>+<kbd className={styles.kbd}>Enter</kbd>{" "}
        for new line
      </p>
    </div>
  );
};

InputBar.displayName = "InputBar";

// ─── Icons ────────────────────────────────────────────────────────────────────

const SendIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
  >
    {/*
      Angled paper-plane send icon.
      Path: a filled send/arrow shape pointing top-right.
    */}
    <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
  </svg>
);

const LoadingSpinner: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width="18"
    height="18"
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
);