/**
 * ChatWidget.tsx
 * Root shell — manages views: "home" | "chat" | "help"
 */

'use client'

import React, { useCallback, useEffect, useId, useRef, useState } from 'react'

import { ChatPanel } from '../ChatPanel'
import { TriggerButton } from '../TriggerButton'
import { WidgetHome } from '../WidgetHome'
import { WidgetHelp } from '../WidgetHelp'
import { WidgetArticle } from '../WidgetArticle'
import { useChat } from '../../hooks/useChat'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'
import { buildCssVars } from '../../utils/cssVars'

import type { OnMessageHandler, Message } from '../../types'
import type { HelpArticle } from '../WidgetHome'

import styles from './ChatWidget.module.css'

// ─── Constants ────────────────────────────────────────────────────────────────

/** Matches CLOSE_DURATION_MS in ChatPanel.tsx */
const CHAT_CLOSE_MS = 200

// ─── Types ────────────────────────────────────────────────────────────────────

type WidgetView = 'home' | 'chat' | 'help' | 'article'

// ─── Props ────────────────────────────────────────────────────────────────────

export interface ChatWidgetProps {
  /** Required — handler returning a string or ReadableStream */
  onMessage: OnMessageHandler

  /** Name shown in the widget header. Default: "AI Assistant" */
  agentName?: string

  /** URL string or React element used as the agent's avatar */
  agentAvatar?: string | React.ReactNode

  /** Brand logo shown in the widget header and home screen */
  logo?: string | React.ReactNode

  /** Color scheme. "auto" follows system preference. Default: "auto" */
  theme?: 'light' | 'dark' | 'auto'

  /** Hex color for buttons and accents. Default: "#2563EB" */
  primaryColor?: string

  /** Input field placeholder text */
  placeholder?: string

  /**
   * Large heading shown in the dark home screen header.
   * Use "\n" for line breaks. Default: "Need support?\nHow can we help?"
   * Also used as the first assistant message in the chat.
   */
  welcomeMessage?: string

  /**
   * Sub heading shown in the dark home screen header.
   * Use "\n" for line breaks. Default: "Need support?\nHow can we help?"
   * Also used as the first assistant message in the chat.
   */
  welcomeSubMessage?: string

  // ─── Home screen content ──────────────────────────────────────────────────

  /** Preview text of the agent's most recent message (shown in home card) */
  recentMessage?: string

  /** Human-readable time since the recent message, e.g. "1m" */
  recentMessageTime?: string

  /** Status text shown in the status card, e.g. "All Systems Operational" */
  statusText?: string

  /** When the status was last updated, e.g. "Updated Apr 12, 08:14 UTC" */
  statusUpdated?: string

  /** List of help articles. Requires showHelpArticles=true to display. */
  helpArticles?: HelpArticle[]

  /**
   * When true and helpArticles is non-empty, renders the help search section
   * on the home screen and the Help tab in the bottom nav.
   */
  showHelpArticles?: boolean

  // ─── Layout & control ─────────────────────────────────────────────────────

  /** Which view to start on. Default: "home" */
  defaultView?: 'home' | 'chat'

  /** External open state (controlled mode) */
  isOpen?: boolean

  /** Callback when open state changes (controlled mode) */
  onOpenChange?: (open: boolean) => void

  /** Anchor position on screen. Default: "bottom-right" */
  position?: 'bottom-right' | 'bottom-left'

  /** Extra class for the root container */
  className?: string

  /** Inline style override for the root container */
  style?: React.CSSProperties

  /** Initial messages to populate the chat history */
  initialMessages?: Message[]

  /** Whether to show the chat history section on the home screen. Default: false */
  showHistory?: boolean

  /** Optional controlled messages */
  messages?: Message[]

  /** Optional callback when messages change in controlled mode */
  onMessagesChange?: (messages: Message[]) => void
}

// ─── Component ────────────────────────────────────────────────────────────────

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  onMessage,
  agentName = 'AI Assistant',
  agentAvatar,
  logo,
  theme = 'auto',
  primaryColor = '#2563EB',
  placeholder = 'Type a message…',
  welcomeMessage,
  welcomeSubMessage,
  recentMessage,
  recentMessageTime,
  statusText,
  statusUpdated,
  helpArticles,
  showHelpArticles = false,
  defaultView = 'home',
  isOpen: controlledIsOpen,
  onOpenChange,
  position = 'bottom-right',
  className,
  style,
  initialMessages,
  showHistory = false,
  messages: controlledMessages,
  onMessagesChange,
}) => {
  // ── SSR guard ─────────────────────────────────────────────────────────────
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // ── Open/close state ──────────────────────────────────────────────────────
  const isControlled = controlledIsOpen !== undefined
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = isControlled ? controlledIsOpen : internalOpen

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next)
      onOpenChange?.(next)
    },
    [isControlled, onOpenChange]
  )

  const open = useCallback(() => setOpen(true), [setOpen])
  console.log(open)
  const close = useCallback(() => setOpen(false), [setOpen])
  const toggle = useCallback(() => setOpen(!isOpen), [isOpen, setOpen])

  // ── View management ───────────────────────────────────────────────────────
  const [activeView, setActiveView] = useState<WidgetView>(defaultView)
  const [chatPanelOpen, setChatPanelOpen] = useState(defaultView === 'chat')
  const [activeArticle, setActiveArticle] = useState<HelpArticle | null>(null)
  const viewTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Maximize logic ───────────────────────────────────────────────────────
  const [isMaximized, setIsMaximized] = useState(false)
  const toggleMaximize = useCallback(() => setIsMaximized((prev) => !prev), [])

  /** Navigate to the chat view immediately (no delay needed for opening). */
  const goToChat = useCallback(() => {
    if (viewTimerRef.current) clearTimeout(viewTimerRef.current)
    setActiveView('chat')
    setChatPanelOpen(true)
  }, [])

  /**
   * Navigate back to the home view.
   * First closes ChatPanel (triggering its exit animation), then after the
   * animation completes switches the view so WidgetHome renders.
   */
  const goBack = useCallback(() => {
    setChatPanelOpen(false)
    viewTimerRef.current = setTimeout(
      () => setActiveView('home'),
      CHAT_CLOSE_MS
    )
  }, [])

  /** Navigate to help view — same delayed approach as goBack. */
  const goToHelp = useCallback(() => {
    if (viewTimerRef.current) clearTimeout(viewTimerRef.current)
    if (activeView === 'chat') {
      setChatPanelOpen(false)
      viewTimerRef.current = setTimeout(
        () => setActiveView('help'),
        CHAT_CLOSE_MS
      )
    } else {
      setActiveView('help')
    }
  }, [activeView])

  /** Navigate to single article view. */
  const goToArticle = useCallback(
    (article: HelpArticle) => {
      if (viewTimerRef.current) clearTimeout(viewTimerRef.current)
      setActiveArticle(article)
      if (activeView === 'chat') {
        setChatPanelOpen(false)
        viewTimerRef.current = setTimeout(
          () => setActiveView('article'),
          CHAT_CLOSE_MS
        )
      } else {
        setActiveView('article')
      }
    },
    [activeView]
  )

  /** Navigate back from article view. */
  const goBackFromArticle = useCallback(() => {
    setActiveView('home')
  }, [])

  // Sync view state when widget opens/closes
  useEffect(() => {
    if (!isOpen) {
      if (viewTimerRef.current) clearTimeout(viewTimerRef.current)
      setChatPanelOpen(false)
      // Close maximization if the widget is closed
      setIsMaximized(false)
    } else if (activeView === 'chat') {
      setChatPanelOpen(true)
    }
  }, [isOpen, activeView])

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (viewTimerRef.current) clearTimeout(viewTimerRef.current)
    }
  }, [])

  // ── Derived visibility flags ──────────────────────────────────────────────
  const showHome = isOpen && activeView === 'home' && !chatPanelOpen
  const showHelp = isOpen && activeView === 'help' && !chatPanelOpen
  const showArticle =
    isOpen &&
    activeView === 'article' &&
    !chatPanelOpen &&
    activeArticle != null
  const chatIsOpen = isOpen && chatPanelOpen

  // ── Theming ───────────────────────────────────────────────────────────────
  const resolvedTheme = useTheme(theme)
  const cssVars = buildCssVars({ primaryColor, theme: resolvedTheme })

  // ── Chat state ────────────────────────────────────────────────────────────
  const { messages, sendMessage, isLoading, error, clearMessages, retryLast } =
    useChat({
      onMessage,
      welcomeMessage,
      initialMessages,
      messages: controlledMessages,
      onMessagesChange,
    })

  // ── Derived recent message for home screen ──────────────────────────────
  // If showHistory is enabled and we have messages, show the last one.
  // Otherwise, fallback to the legacy recentMessage prop.
  const canShowHistory = showHistory && messages.length > 0
  const sessionLastMessage = messages[messages.length - 1]
  const displayRecentMessage = canShowHistory
    ? sessionLastMessage?.content
    : recentMessage

  const displayRecentTime = canShowHistory
    ? sessionLastMessage
      ? new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }).format(sessionLastMessage.timestamp)
      : undefined
    : recentMessageTime

  // ── Focus management ──────────────────────────────────────────────────────
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useFocusTrap(panelRef, chatIsOpen)

  useEffect(() => {
    if (!isOpen) triggerRef.current?.focus()
  }, [isOpen])

  // ── Keyboard shortcuts ────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  // ── Accessibility IDs ─────────────────────────────────────────────────────
  const dialogId = useId()
  const dialogLabelId = `${dialogId}-label`

  if (!mounted) return null

  return (
    <div
      className={cn(
        styles.root,
        styles[position],
        isOpen && styles.isOpen,
        isMaximized && styles.isMaximized,
        className
      )}
      style={{ ...cssVars, ...style }}
      data-theme={resolvedTheme}
    >
      {/* ── Home view ── */}
      {showHome && (
        <WidgetHome
          className={styles.panelArea}
          welcomeMessage={welcomeMessage}
          welcomeSubMessage={welcomeSubMessage}
          agentName={agentName}
          agentAvatar={agentAvatar}
          logo={logo}
          recentMessage={displayRecentMessage}
          recentMessageTime={displayRecentTime}
          statusText={statusText}
          statusUpdated={statusUpdated}
          helpArticles={helpArticles}
          showHelpArticles={showHelpArticles}
          onStartChat={goToChat}
          onShowHelp={goToHelp}
          onArticleClick={goToArticle}
          onClose={close}
        />
      )}

      {/* ── Help view ── */}
      {showHelp && helpArticles && helpArticles.length > 0 && (
        <WidgetHelp
          className={styles.panelArea}
          helpArticles={helpArticles}
          onGoHome={goBack}
          onStartChat={goToChat}
          onArticleClick={goToArticle}
          onClose={close}
        />
      )}

      {/* ── Article view ── */}
      {showArticle && (
        <WidgetArticle
          className={styles.panelArea}
          article={activeArticle!}
          onBack={goBackFromArticle}
          onClose={close}
        />
      )}

      {/* ── Chat panel ── */}
      <ChatPanel
        ref={panelRef}
        isOpen={chatIsOpen}
        onClose={close}
        onBack={goBack}
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
        isMaximized={isMaximized}
        onMaximizeToggle={toggleMaximize}
      />

      {/* ── Trigger Button ── */}
      {!isMaximized && (
        <TriggerButton
          ref={triggerRef}
          className={styles.trigger}
          isOpen={isOpen}
          onClick={toggle}
          primaryColor={primaryColor}
          logo={logo}
          aria-expanded={isOpen}
          aria-controls={dialogId}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        />
      )}
    </div>
  )
}

ChatWidget.displayName = 'ChatWidget'
