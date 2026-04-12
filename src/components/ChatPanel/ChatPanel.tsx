/**
 * ChatPanel.tsx
 *
 * The sliding chat panel — the main body of the widget that opens and closes.
 * Composes ChatHeader, MessageList, and InputBar into a single dialog surface.
 *
 * Anatomy (per PRD §4.1):
 *   ChatPanel (animated in/out, role="dialog")
 *   ├── ChatHeader   (agent identity + controls)
 *   ├── MessageList  (scrollable transcript)
 *   └── InputBar     (textarea + send button)
 *
 * Behaviour (per PRD §4.2):
 *   - Opens with a smooth scale + fade animation (200ms ease-out)
 *   - Closes with a matching reverse animation before unmounting
 *   - InputBar autofocuses when the panel opens
 *   - Panel has role="dialog", aria-modal="true", aria-labelledby={dialogLabelId}
 *     so screen readers announce it as a modal and read the agent name as the label
 *   - Escape key is handled upstream in ChatWidget; this component only manages
 *     its own visual open/close lifecycle
 *
 * Open/close animation strategy:
 *   We keep the panel in the DOM while animating out (using a "closing" state)
 *   so the CSS exit animation can play to completion before the element is
 *   removed. The sequence is:
 *     isOpen: false → set isClosing=true → after CLOSE_DURATION_MS → set
 *     isVisible=false (removes from DOM)
 *   This avoids the common mistake of toggling display:none which cuts the
 *   animation off immediately.
 *
 * forwardRef:
 *   The panel exposes its root div ref so ChatWidget can pass it to
 *   useFocusTrap — keeping focus trap logic out of this component.
 */

"use client"; // Next.js App Router safety

import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { ChatHeader } from "../ChatHeader";
import { MessageList } from "../MessageList";
import { InputBar } from "../InputBar";
import { cn } from "../../utils/cn";
import type { Message } from "../../types";
import styles from "./ChatPanel.module.css";

// ─── Constants ────────────────────────────────────────────────────────────────

/**
 * Must match the CSS animation duration in ChatPanel.module.css.
 * Used to delay DOM removal until the close animation finishes.
 */
const CLOSE_DURATION_MS = 200;

// ─── Props ────────────────────────────────────────────────────────────────────

export interface ChatPanelProps {
  /** Controls visibility — drives open/close animation */
  isOpen: boolean;

  /** Closes the panel — wired to ChatWidget's close() */
  onClose: () => void;

  /** Full message history from useChat */
  messages: Message[];

  /** True while a response is loading or streaming */
  isLoading: boolean;

  /** Error string from useChat, or null */
  error: string | null;

  /** Send a new message — wired to useChat's sendMessage() */
  onSend: (text: string) => void;

  /** Retry the last failed message — wired to useChat's retryLast() */
  onRetry: () => void;

  /** Clear all messages — wired to useChat's clearMessages() */
  onClear: () => void;

  /** Agent display name — forwarded to ChatHeader */
  agentName?: string;

  /** Agent avatar URL or ReactNode — forwarded to ChatHeader */
  agentAvatar?: string | React.ReactNode;

  /** Brand logo — forwarded to ChatHeader */
  logo?: string | React.ReactNode;

  /** InputBar placeholder text */
  placeholder?: string;

  /**
   * When provided, a ← back button appears in the header.
   * Clicking it navigates back to the home view.
   */
  onBack?: () => void;

  /**
   * ID of the dialog element — used by ChatWidget's TriggerButton as
   * aria-controls so the button announces which element it opens.
   */
  dialogId?: string;

  /**
   * ID applied to the agent name <h2> inside ChatHeader.
   * Referenced by aria-labelledby on the dialog element.
   */
  dialogLabelId?: string;

  /** Extra class on the root dialog element */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const ChatPanel = forwardRef<HTMLDivElement, ChatPanelProps>(
  (
    {
      isOpen,
      onClose,
      messages,
      isLoading,
      error,
      onSend,
      onRetry,
      onClear,
      agentName = "AI Assistant",
      agentAvatar,
      logo,
      placeholder,
      onBack,
      dialogId,
      dialogLabelId,
      className,
    },
    ref
  ) => {
    /**
     * isVisible — controls whether the panel is in the DOM at all.
     * isClosing — true during the exit animation phase.
     *
     * State machine:
     *   isOpen=true  → isVisible=true,  isClosing=false  (entry animation plays)
     *   isOpen=false → isVisible=true,  isClosing=true   (exit animation plays)
     *                → after CLOSE_DURATION_MS:
     *                  isVisible=false, isClosing=false  (unmounted)
     */
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isClosing, setIsClosing] = useState(false);
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      // Clear any in-flight close timer when isOpen changes
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }

      if (isOpen) {
        // Opening: mount immediately so the entry animation plays
        setIsClosing(false);
        setIsVisible(true);
      } else {
        // Closing: start exit animation, then unmount after it completes
        setIsClosing(true);
        closeTimerRef.current = setTimeout(() => {
          setIsVisible(false);
          setIsClosing(false);
        }, CLOSE_DURATION_MS);
      }

      return () => {
        if (closeTimerRef.current) {
          clearTimeout(closeTimerRef.current);
        }
      };
    }, [isOpen]);

    // Don't render anything while fully closed and animation has completed
    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        id={dialogId}
        className={cn(
          styles.panel,
          isClosing ? styles.closing : styles.opening,
          className
        )}
        // ARIA dialog semantics
        role="dialog"
        aria-modal="true"
        aria-label={agentName}
        aria-labelledby={dialogLabelId}
        // Prevents clicks inside the panel from propagating to the backdrop
        // or other elements on the page
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <ChatHeader
          agentName={agentName}
          agentAvatar={agentAvatar}
          logo={logo}
          isLoading={isLoading}
          onClose={onClose}
          onBack={onBack}
          onClear={messages.length > 0 ? onClear : undefined}
          dialogLabelId={dialogLabelId}
        />

        {/* ── Message list ── */}
        <MessageList
          messages={messages}
          onRetry={onRetry}
        />

        {/* ── Input bar ── */}
        <InputBar
          onSend={onSend}
          isLoading={isLoading}
          placeholder={placeholder}
          // Autofocus the textarea whenever the panel opens (not on re-renders)
          autoFocus={isOpen && !isClosing}
        />

        {/* ── Network/global error banner ── */}
        {error && (
          <div
            className={styles.errorBanner}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <span className={styles.errorBannerIcon} aria-hidden="true">
              ⚠
            </span>
            <span className={styles.errorBannerText}>{error}</span>
            <button
              type="button"
              className={styles.errorBannerDismiss}
              onClick={onRetry}
              aria-label="Retry last message"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    );
  }
);

ChatPanel.displayName = "ChatPanel";