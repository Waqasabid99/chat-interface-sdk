/**
 * WdigetHome.tsx  (filename kept as-is to match project convention)
 *
 * The landing home screen of the chat widget.
 * Shown when the widget first opens — before the user starts a conversation.
 *
 * Anatomy:
 *   WidgetHome
 *   ├── Dark header  (logo + close button + welcome heading)
 *   └── bodyWrapper  (dark bg to fill behind rounded-top scrollArea)
 *       ├── scrollArea  (white, rounded-top, overflow-y: auto)
 *       │   ├── cards section
 *       │   │   ├── Recent message card  (optional)
 *       │   │   ├── Status card          (optional)
 *       │   │   └── Help articles        (when showHelpArticles=true)
 *       │   │       ├── Search input     (client-side filter)
 *       │   │       └── Article links
 *       │   └── CTA section  ("Send us a message" button)
 *       └── nav  (Home | Messages | Help?)
 */

'use client'

import React, { memo, useState, useCallback, useMemo } from 'react'
import { cn } from '../../utils/cn'
import styles from './WidgetHome.module.css'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HelpArticle {
  /** Article title displayed as a clickable link */
  title: string
  /** Optional href — opens in a new tab when clicked */
  href?: string
  /** Article description (shown in single view) */
  description?: React.ReactNode | string
  /** Article main content details */
  content?: React.ReactNode | string
  /** Human readable last updated time */
  updatedAt?: string
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface WidgetHomeProps {
  /** Large welcome heading displayed in the dark header */
  welcomeMessage?: string

  /** Large welcome sub heading displayed in the dark header */
  welcomeSubMessage?: string

  /** Agent display name shown in the "Recent message" card */
  agentName?: string

  /** Agent avatar — URL string or ReactNode */
  agentAvatar?: string | React.ReactNode

  /** Brand logo shown top-left in the dark header */
  logo?: string | React.ReactNode

  /** Preview text of the most recent message */
  recentMessage?: string

  /** Human-readable time since the recent message, e.g. "1m" */
  recentMessageTime?: string

  /** Status text, e.g. "All Systems Operational" */
  statusText?: string

  /** When the status was last updated, e.g. "Updated Apr 12, 08:14 UTC" */
  statusUpdated?: string

  /** List of help articles. Requires showHelpArticles=true to display. */
  helpArticles?: HelpArticle[]

  /**
   * When true and helpArticles is non-empty, renders the search + article section
   * and the Help tab in the bottom nav.
   */
  showHelpArticles?: boolean

  /** Called when "Send us a message" CTA or Messages tab is clicked */
  onStartChat: () => void

  /** Called when the Help tab is clicked */
  onShowHelp?: () => void

  /** Called when the × button is clicked */
  onClose: () => void

  /** Called when a help article is clicked */
  onArticleClick?: (article: HelpArticle) => void

  /** Extra class on the root element */
  className?: string
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
    />
  </svg>
)

const SearchIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const ChevronRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="14"
    height="14"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
    />
  </svg>
)

const CheckCircleIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="12" fill="#22c55e" />
    <path
      d="M7 12.5l3.5 3.5 6.5-7"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

const HomeNavIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    aria-hidden="true"
    focusable="false"
    fill={active ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" />
    <path d="M9 21V12h6v9" />
  </svg>
)

const MessagesNavIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    aria-hidden="true"
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const HelpNavIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    aria-hidden="true"
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const SendCtaIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

// ─── Sub-components ───────────────────────────────────────────────────────────

interface AvatarProps {
  agentAvatar?: string | React.ReactNode
  agentName: string
  size?: 'sm' | 'md'
}

const Avatar: React.FC<AvatarProps> = ({
  agentAvatar,
  agentName,
  size = 'md',
}) => {
  const initials = useMemo(() => {
    const words = agentName.trim().split(/\s+/)
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
    return (words[0][0] + words[1][0]).toUpperCase()
  }, [agentName])

  return (
    <span
      className={cn(styles.avatar, size === 'sm' && styles.avatarSm)}
      aria-hidden="true"
    >
      {typeof agentAvatar === 'string' ? (
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
    </span>
  )
}

interface LogoMarkProps {
  logo: string | React.ReactNode
}

const LogoMark: React.FC<LogoMarkProps> = ({ logo }) => {
  if (typeof logo === 'string') {
    return (
      <span className={styles.logoWrap}>
        <img src={logo} alt="" className={styles.logoImg} draggable={false} />
      </span>
    )
  }
  return <span className={styles.logoWrap}>{logo}</span>
}

// ─── Component ────────────────────────────────────────────────────────────────

export const WidgetHome: React.FC<WidgetHomeProps> = memo(
  ({
    welcomeMessage = 'Need support?\nHow can we help?',
    welcomeSubMessage,
    agentName = 'AI Assistant',
    agentAvatar,
    logo,
    recentMessage,
    recentMessageTime,
    statusText,
    statusUpdated,
    helpArticles,
    showHelpArticles = false,
    onStartChat,
    onShowHelp,
    onClose,
    onArticleClick,
    className,
  }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const shouldShowHelp =
      showHelpArticles && helpArticles && helpArticles.length > 0

    const filteredArticles = useMemo(() => {
      if (!helpArticles) return []
      if (!searchQuery.trim()) return helpArticles
      const q = searchQuery.toLowerCase()
      return helpArticles.filter((a) => a.title.toLowerCase().includes(q))
    }, [helpArticles, searchQuery])

    const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchQuery(e.target.value),
      []
    )

    const hasRecentMessage = recentMessage != null
    const hasStatus = statusText != null

    return (
      <div className={cn(styles.root, className)}>
        {/* ── Dark header ── */}
        <div className={styles.header}>
          <div className={styles.headerTop}>
            {logo ? (
              <LogoMark logo={logo} />
            ) : (
              <span className={styles.logoWrap} aria-hidden="true" />
            )}
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          <h1 className={styles.welcomeHeading}>
            {welcomeMessage.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
            <br />
            {welcomeSubMessage?.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h1>
        </div>

        {/* ── Body ── */}
        <div className={styles.bodyWrapper}>
          <div className={styles.scrollArea}>
            {/* Cards */}
            <div className={styles.cards}>
              {/* Recent message card */}
              {hasRecentMessage && (
                <button
                  type="button"
                  className={cn(styles.card, styles.cardClickable)}
                  onClick={onStartChat}
                  aria-label="View recent conversation"
                >
                  <p className={styles.cardLabel}>Recent message</p>
                  <div className={styles.recentRow}>
                    <Avatar
                      agentAvatar={agentAvatar}
                      agentName={agentName}
                      size="sm"
                    />
                    <div className={styles.recentContent}>
                      <div className={styles.recentMeta}>
                        <span className={styles.recentName}>{agentName}</span>
                        {recentMessageTime && (
                          <span className={styles.recentTime}>
                            {recentMessageTime}
                          </span>
                        )}
                      </div>
                      <p className={styles.recentText}>{recentMessage}</p>
                    </div>
                  </div>
                </button>
              )}

              {/* Status card */}
              {hasStatus && (
                <div className={styles.card}>
                  <div className={styles.statusRow}>
                    <span className={styles.statusIcon}>
                      <CheckCircleIcon />
                    </span>
                    <div className={styles.statusContent}>
                      <p className={styles.statusTitle}>
                        <strong>Status: </strong>
                        {statusText}
                      </p>
                      {statusUpdated && (
                        <p className={styles.statusUpdated}>{statusUpdated}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Help articles section */}
              {shouldShowHelp && (
                <div className={styles.articlesCard}>
                  {/* Search bar */}
                  <div className={styles.searchBar}>
                    <input
                      type="search"
                      className={styles.searchInput}
                      placeholder="Search for help"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      aria-label="Search help articles"
                    />
                    <span className={styles.searchIcon} aria-hidden="true">
                      <SearchIcon />
                    </span>
                  </div>

                  {/* Article links */}
                  <ul className={styles.articleList} aria-label="Help articles">
                    {filteredArticles.length > 0 ? (
                      filteredArticles.map((article, i) => (
                        <li key={i} className={styles.articleItem}>
                          {article.href ? (
                            <a
                              href={article.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.articleLink}
                            >
                              <span className={styles.articleTitle}>
                                {article.title}
                              </span>
                              <ChevronRightIcon />
                            </a>
                          ) : (
                            <button
                              type="button"
                              className={styles.articleLink}
                              onClick={() => onArticleClick?.(article)}
                            >
                              <span className={styles.articleTitle}>
                                {article.title}
                              </span>
                              <ChevronRightIcon />
                            </button>
                          )}
                        </li>
                      ))
                    ) : (
                      <li className={styles.noResults}>No results found</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <button
                type="button"
                className={styles.ctaButton}
                onClick={onStartChat}
              >
                <SendCtaIcon />
                Send us a message
              </button>
            </div>
          </div>

          {/* ── Bottom nav ── */}
          <nav className={styles.nav} aria-label="Widget navigation">
            <button
              type="button"
              className={cn(styles.navItem, styles.navItemActive)}
              aria-label="Home"
              aria-current="page"
            >
              <HomeNavIcon active />
              <span className={styles.navLabel}>Home</span>
            </button>

            <button
              type="button"
              className={styles.navItem}
              onClick={onStartChat}
              aria-label="Messages"
            >
              <MessagesNavIcon />
              <span className={styles.navLabel}>Messages</span>
            </button>

            {shouldShowHelp && onShowHelp && (
              <button
                type="button"
                className={styles.navItem}
                onClick={onShowHelp}
                aria-label="Help"
              >
                <HelpNavIcon />
                <span className={styles.navLabel}>Help</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    )
  }
)

WidgetHome.displayName = 'WidgetHome'
