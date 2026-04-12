/**
 * WidgetHelp.tsx
 *
 * Help page — shown when the user clicks the "Help" tab in the bottom nav.
 * Displays all help articles with client-side search filtering.
 *
 * Anatomy:
 *   WidgetHelp
 *   ├── White header  (title + close button)
 *   ├── scrollArea    (search bar + article list)
 *   └── nav           (Home | Messages | Help active)
 */

"use client";

import React, { memo, useState, useCallback, useMemo } from "react";
import { cn } from "../../utils/cn";
import type { HelpArticle } from "../WidgetHome";
import styles from "./WidgetHelp.module.css";

// ─── Props ────────────────────────────────────────────────────────────────────

export interface WidgetHelpProps {
  helpArticles: HelpArticle[];

  /** Return to home view */
  onGoHome: () => void;

  /** Open the chat view */
  onStartChat: () => void;

  /** Close the widget entirely */
  onClose: () => void;

  /** Called when a help article is clicked */
  onArticleClick?: (article: HelpArticle) => void;

  /** Extra class on the root element */
  className?: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const CloseIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
    width="18" height="18" aria-hidden="true" focusable="false">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" />
  </svg>
);

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    width="16" height="16" aria-hidden="true" focusable="false">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const ChevronRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    width="14" height="14" aria-hidden="true" focusable="false">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
  </svg>
);

const HomeNavIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
    aria-hidden="true" focusable="false" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const MessagesNavIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
    aria-hidden="true" focusable="false" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const HelpNavIcon: React.FC<{ active?: boolean }> = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
    aria-hidden="true" focusable="false"
    fill={active ? "currentColor" : "none"} stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

export const WidgetHelp: React.FC<WidgetHelpProps> = memo(({
  helpArticles,
  onGoHome,
  onStartChat,
  onClose,
  onArticleClick,
  className,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return helpArticles;
    const q = searchQuery.toLowerCase();
    return helpArticles.filter((a) => a.title.toLowerCase().includes(q));
  }, [helpArticles, searchQuery]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    []
  );

  return (
    <div className={cn(styles.root, className)}>

      {/* ── Header ── */}
      <header className={styles.header}>
        <h1 className={styles.title}>Help</h1>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close chat"
        >
          <CloseIcon />
        </button>
        <div className={styles.headerDivider} aria-hidden="true" />
      </header>

      {/* ── Search + articles ── */}
      <div className={styles.scrollArea}>

        {/* Search bar */}
        <div className={styles.searchBarWrap}>
          <div className={styles.searchBar}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search for help"
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search help articles"
              autoFocus
            />
            <span className={styles.searchIcon} aria-hidden="true">
              <SearchIcon />
            </span>
          </div>
        </div>

        {/* Article list */}
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
                    <span className={styles.articleTitle}>{article.title}</span>
                    <ChevronRightIcon />
                  </a>
                ) : (
                  <button
                    type="button"
                    className={styles.articleLink}
                    onClick={() => onArticleClick?.(article)}
                  >
                    <span className={styles.articleTitle}>{article.title}</span>
                    <ChevronRightIcon />
                  </button>
                )}
              </li>
            ))
          ) : (
            <li className={styles.noResults}>
              No articles match &ldquo;{searchQuery}&rdquo;
            </li>
          )}
        </ul>
      </div>

      {/* ── Bottom nav ── */}
      <nav className={styles.nav} aria-label="Widget navigation">
        <button
          type="button"
          className={styles.navItem}
          onClick={onGoHome}
          aria-label="Home"
        >
          <HomeNavIcon />
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

        <button
          type="button"
          className={cn(styles.navItem, styles.navItemActive)}
          aria-label="Help"
          aria-current="page"
        >
          <HelpNavIcon active />
          <span className={styles.navLabel}>Help</span>
        </button>
      </nav>
    </div>
  );
});

WidgetHelp.displayName = "WidgetHelp";
