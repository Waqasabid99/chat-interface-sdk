/**
 * ChatWidget.tsx
 * Root shell component — composes TriggerButton + ChatPanel.
 * Handles open/close state (controlled & uncontrolled), theming,
 * focus management, and keyboard shortcuts.
 */

"use client"; // Next.js App Router safety

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { ChatPanel } from "../ChatPanel";
import { TriggerButton } from "../TriggerButton";
import { useChat } from "../../hooks/useChat";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../utils/cn";
import { buildCssVars } from "../../utils/cssVars";

import type { OnMessageHandler } from "../../types";

import styles from "./ChatWidget.module.css";

// ─── Props ────────────────────────────────────────────────────────────────────

export interface ChatWidgetProps {
  /** Required — handler returning a string or ReadableStream */
  onMessage: OnMessageHandler;

  /** Name shown in the widget header. Default: "AI Assistant" */
  agentName?: string;

  /** URL string or React element used as the agent's avatar */
  agentAvatar?: string | React.ReactNode;

  /** Brand logo shown in the widget header */
  logo?: string | React.ReactNode;

  /** Color scheme. "auto" follows system preference. Default: "auto" */
  theme?: "light" | "dark" | "auto";

  /** Hex color for buttons and accents. Default: "#2563EB" */
  primaryColor?: string;

  /** Input field placeholder text */
  placeholder?: string;

  /** First assistant message shown when the panel opens */
  welcomeMessage?: string;

  /** External open state (controlled mode) */
  isOpen?: boolean;

  /** Callback when open state changes (controlled mode) */
  onOpenChange?: (open: boolean) => void;

  /** Anchor position on screen. Default: "bottom-right" */
  position?: "bottom-right" | "bottom-left";

  /** Extra class for the root container */
  className?: string;

  /** Inline style override for the root container */
  style?: React.CSSProperties;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  onMessage,
  agentName = "AI Assistant",
  agentAvatar,
  logo,
  theme = "auto",
  primaryColor = "#2563EB",
  placeholder = "Type a message…",
  welcomeMessage,
  isOpen: controlledIsOpen,
  onOpenChange,
  position = "bottom-right",
  className,
  style,
}) => {
  // ── SSR guard — render nothing on the server ──────────────────────────────
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ── Open/close state — supports controlled & uncontrolled ─────────────────
  const isControlled = controlledIsOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? controlledIsOpen : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const open = useCallback(() => setOpen(true), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

  // ── Theming ───────────────────────────────────────────────────────────────
  const resolvedTheme = useTheme(theme);
  const cssVars = buildCssVars({ primaryColor, theme: resolvedTheme });

  // ── Chat state via useChat hook ───────────────────────────────────────────
  const { messages, sendMessage, isLoading, error, clearMessages, retryLast } =
    useChat({ onMessage, welcomeMessage });

  // ── Focus management ──────────────────────────────────────────────────────
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(panelRef, isOpen);

  // Return focus to the trigger when the panel closes
  useEffect(() => {
    if (!isOpen) {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // ── Keyboard shortcuts ────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  // ── Accessibility IDs ─────────────────────────────────────────────────────
  const dialogId = useId();
  const dialogLabelId = `${dialogId}-label`;

  // ── SSR: render nothing until hydrated ───────────────────────────────────
  if (!mounted) return null;

  return (
    <div
      className={cn(
        styles.root,
        styles[position],
        className
      )}
      style={{ ...cssVars, ...style }}
      data-theme={resolvedTheme}
    >
      {/* ── Chat Panel ── */}
      <ChatPanel
        ref={panelRef}
        isOpen={isOpen}
        onClose={close}
        messages={messages}
        isLoading={isLoading}
        error={error}
        onSend={sendMessage}
        onRetry={retryLast}
        onClear={clearMessages}
        agentName={agentName}
        agentAvatar={agentAvatar}
        logo={logo}
        placeholder={placeholder}
        dialogId={dialogId}
        dialogLabelId={dialogLabelId}
      />

      {/* ── Trigger Button ── */}
      <TriggerButton
        ref={triggerRef}
        isOpen={isOpen}
        onClick={toggle}
        primaryColor={primaryColor}
        logo={logo}
        aria-expanded={isOpen}
        aria-controls={dialogId}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      />
    </div>
  );
};

ChatWidget.displayName = "ChatWidget";