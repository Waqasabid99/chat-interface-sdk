/**
 * ChatHeader.tsx
 *
 * The topmost bar of the ChatPanel.
 *
 * Anatomy (per PRD §4.1):
 *   [ AgentAvatar ] [ AgentName + status ] [ ClearButton ] [ CloseButton ]
 *
 * Props flow from ChatWidget → ChatPanel → ChatHeader:
 *   - agentName     : display name shown in the header (default: "AI Assistant")
 *   - agentAvatar   : string URL → rendered as <img>
 *                     ReactNode  → rendered directly
 *                     undefined  → default initials avatar derived from agentName
 *   - logo          : string URL or ReactNode — shown as a small brand mark
 *                     left of the agent name group when provided
 *   - isLoading     : when true, a "Typing…" status line appears under the name
 *   - onClose       : closes the chat panel (wired to ChatWidget's close())
 *   - onClear       : clears message history (wired to useChat's clearMessages())
 *   - dialogLabelId : id applied to the agent name <h2> so the panel's
 *                     aria-labelledby can reference it
 *   - className     : optional extra class on the root element
 *
 * Accessibility:
 *   - Root is a <header> landmark with role="banner" scoped to the dialog
 *   - Agent name is an <h2> with the dialogLabelId so the dialog is labelled
 *   - Close button has aria-label="Close chat"
 *   - Clear button has aria-label="Clear conversation"
 *   - Both buttons have visible :focus-visible rings
 *   - Status text uses aria-live="polite" + role="status"
 */

import React, { memo, useMemo } from "react";

import { cn } from "../../utils/cn";
import styles from "./ChatHeader.module.css";
import { TypingIndicator } from "../TypingIndicator";

// ─── Props ────────────────────────────────────────────────────────────────────

export interface ChatHeaderProps {
  /** Display name of the AI agent */
  agentName?: string;

  /** Avatar: URL string, ReactNode, or undefined (falls back to initials) */
  agentAvatar?: string | React.ReactNode;

  /** Optional brand logo — shown left of the agent group */
  logo?: string | React.ReactNode;

  /**
   * When true, the header shows a live "Typing…" status indicator
   * under the agent name.
   */
  isLoading?: boolean;

  /** Closes the chat panel */
  onClose: () => void;

  /**
   * When provided, a ← back button is rendered on the far left.
   * Clicking it navigates back to the home view.
   */
  onBack?: () => void;

  /**
   * Clears the message history.
   * When undefined, the clear button is not rendered.
   */
  onClear?: () => void;

  /**
   * Applied to the agent name <h2>.
   * Must match the aria-labelledby on the dialog element.
   */
  dialogLabelId?: string;

  /** Extra class on the root <header> element */
  className?: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

/** Left chevron / back icon */
const BackIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
    />
  </svg>
);

/** X / close icon */
const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
  </svg>
);

/** Trash / clear conversation icon */
const ClearIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="15"
    height="15"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

// ─── Avatar ───────────────────────────────────────────────────────────────────

interface AvatarProps {
  agentAvatar?: string | React.ReactNode;
  agentName: string;
}

/**
 * Renders the agent avatar in one of three ways:
 *  1. ReactNode  → rendered directly inside the avatar frame
 *  2. string     → treated as an image URL, rendered as <img>
 *  3. undefined  → initials derived from agentName (up to 2 chars)
 */
const Avatar: React.FC<AvatarProps> = ({ agentAvatar, agentName }) => {
  const initials = useMemo(() => {
    const words = agentName.trim().split(/\s+/);
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }, [agentName]);

  return (
    <span className={styles.avatar} aria-hidden="true">
      {typeof agentAvatar === "string" ? (
        <img
          src={agentAvatar}
          alt=""
          className={styles.avatarImg}
          draggable={false}
        />
      ) : agentAvatar != null ? (
        <span className={styles.avatarCustom}>{agentAvatar}</span>
      ) : (
        <span className={styles.avatarInitials}>{initials}</span>
      )}

      {/* Online indicator dot */}
      <span className={styles.onlineDot} aria-hidden="true" />
    </span>
  );
};

// ─── Logo ─────────────────────────────────────────────────────────────────────

interface LogoProps {
  logo: string | React.ReactNode;
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  if (typeof logo === "string") {
    return (
      <span className={styles.logo} aria-hidden="true">
        <img src={logo} alt="" className={styles.logoImg} draggable={false} />
      </span>
    );
  }
  return (
    <span className={styles.logo} aria-hidden="true">
      {logo}
    </span>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

export const ChatHeader: React.FC<ChatHeaderProps> = memo(
  ({
    agentName = "AI Assistant",
    agentAvatar,
    logo,
    isLoading = false,
    onClose,
    onBack,
    onClear,
    dialogLabelId,
    className,
  }) => {
    return (
      <header className={cn(styles.root, className)}>
        {/* ── Back button (optional) ── */}
        {onBack && (
          <button
            type="button"
            className={cn(styles.iconButton, styles.backButton)}
            onClick={onBack}
            aria-label="Go back"
            title="Go back"
          >
            <BackIcon />
          </button>
        )}

        {/* ── Left group: logo (optional) + avatar + name ── */}
        <div className={styles.identity}>
          {logo && <Logo logo={logo} />}

          <Avatar agentAvatar={agentAvatar} agentName={agentName} />

          <div className={styles.nameGroup}>
            <h2
              id={dialogLabelId}
              className={styles.agentName}
              title={agentName}
            >
              {agentName}
            </h2>

            {/* Status line: "Online" at rest, animated "Typing…" while loading */}
            <div className={styles.statusLine}>
              {isLoading ? (
                <TypingIndicator variant="inline" />
              ) : (
                <span
                  className={styles.onlineStatus}
                  role="status"
                  aria-label="Assistant is online"
                >
                  <span className={styles.onlinePip} aria-hidden="true" />
                  Online
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Right group: action buttons ── */}
        <div className={styles.actions} role="group" aria-label="Chat controls">
          {/* Clear conversation — only rendered when onClear is provided */}
          {onClear && (
            <button
              type="button"
              className={cn(styles.iconButton, styles.clearButton)}
              onClick={onClear}
              aria-label="Clear conversation"
              title="Clear conversation"
            >
              <ClearIcon />
            </button>
          )}

          {/* Close panel */}
          <button
            type="button"
            className={cn(styles.iconButton, styles.closeButton)}
            onClick={onClose}
            aria-label="Close chat"
            title="Close chat"
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── Bottom border ── */}
        <div className={styles.divider} aria-hidden="true" />
      </header>
    );
  }
);

ChatHeader.displayName = "ChatHeader";