/**
 * TriggerButton.tsx
 *
 * The always-visible floating action button (FAB) that opens and closes the
 * chat panel. Anchored to the bottom corner of the ChatWidget root.
 *
 * Anatomy (per PRD §4.1):
 *   TriggerButton
 *   └── Icon  (chat bubble when closed, X when open)
 *       └── Logo overlay (optional brand mark, shown when panel is closed)
 *
 * Behaviour:
 *   - Renders a circular FAB with --ai-primary background
 *   - When isOpen=false: shows an animated chat bubble icon (or the logo prop)
 *   - When isOpen=true:  morphs into a close (×) icon via a rotation transition
 *   - Hover: lifts slightly with a stronger shadow
 *   - Active/press: scales down (physical press feedback)
 *   - Unread indicator dot: appears when the panel is closed and there are
 *     unread messages (messages.length > 0). Communicates activity without
 *     opening the panel.
 *   - forwardRef: ChatWidget holds the ref so it can return focus here when
 *     the panel closes (keyboard accessibility requirement)
 *
 * ARIA:
 *   - aria-label and aria-expanded are passed directly from ChatWidget as
 *     spread props (ButtonHTMLAttributes) — the parent owns the semantics
 *   - aria-controls links the button to the panel dialog (dialogId)
 *   - role="button" is implicit; we use <button type="button">
 *
 * Logo prop handling (matches ChatHeader's Logo):
 *   - string  → <img> with alt=""
 *   - ReactNode → rendered directly
 *   - undefined → default chat bubble SVG icon
 *
 * The logo is only shown when the panel is closed. When open, the button
 * always shows the × icon so the close affordance is always unambiguous.
 */

"use client"; // Next.js App Router safety

import React, {
  forwardRef,
  type ButtonHTMLAttributes,
} from "react";

import { cn } from "../../utils/cn";
import styles from "./TriggerButton.module.css";

// ─── Props ────────────────────────────────────────────────────────────────────

export interface TriggerButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the chat panel is currently open */
  isOpen: boolean;

  /** Primary accent color — used to derive the button background inline */
  primaryColor?: string;

  /**
   * Optional brand logo shown on the button face when the panel is closed.
   * string  → treated as an image URL
   * ReactNode → rendered directly
   * undefined → default chat bubble SVG
   */
  logo?: string | React.ReactNode;

  /**
   * Number of messages currently in the conversation.
   * When > 0 and the panel is closed, an unread indicator dot is shown.
   */
  messageCount?: number;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

/** Default chat bubble icon shown when no logo is provided */
const ChatIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223Z"
      clipRule="evenodd"
    />
  </svg>
);

/** Close / X icon — shown when the panel is open */
const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="22"
    height="22"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

// ─── Logo renderer (mirrors ChatHeader's Logo sub-component) ──────────────────

interface LogoMarkProps {
  logo: string | React.ReactNode;
}

const LogoMark: React.FC<LogoMarkProps> = ({ logo }) => {
  if (typeof logo === "string") {
    return (
      <img
        src={logo}
        alt=""
        className={styles.logoImg}
        draggable={false}
      />
    );
  }
  return <span className={styles.logoNode}>{logo}</span>;
};

// ─── Component ────────────────────────────────────────────────────────────────

export const TriggerButton = forwardRef<HTMLButtonElement, TriggerButtonProps>(
  (
    {
      isOpen,
      primaryColor,
      logo,
      messageCount = 0,
      className,
      ...rest // aria-label, aria-expanded, aria-controls, onClick, etc.
    },
    ref
  ) => {
    const hasUnread = !isOpen && messageCount > 0;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          styles.button,
          isOpen && styles.buttonOpen,
          className
        )}
        {...rest}
      >
        {/* ── Icon layer — chat/logo OR close, with crossfade ── */}
        <span className={styles.iconWrap}>
          {/* Closed face: logo or default chat icon */}
          <span
            className={cn(
              styles.iconSlot,
              styles.iconChat,
              isOpen && styles.iconHidden
            )}
            aria-hidden="true"
          >
            {logo ? <LogoMark logo={logo} /> : <ChatIcon />}
          </span>

          {/* Open face: always the X icon */}
          <span
            className={cn(
              styles.iconSlot,
              styles.iconClose,
              !isOpen && styles.iconHidden
            )}
            aria-hidden="true"
          >
            <CloseIcon />
          </span>
        </span>

        {/* ── Unread indicator dot ── */}
        {hasUnread && (
          <span
            className={styles.unreadDot}
            aria-hidden="true"
          />
        )}

        {/* ── Ripple ring — plays on open ── */}
        {isOpen && (
          <span className={styles.ripple} aria-hidden="true" />
        )}
      </button>
    );
  }
);

TriggerButton.displayName = "TriggerButton";