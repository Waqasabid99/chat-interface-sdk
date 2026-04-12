'use client'

import React, { memo } from 'react'
import { cn } from '../../utils/cn'
import type { HelpArticle } from '../WidgetHome'
import styles from './WidgetArticle.module.css'

export interface WidgetArticleProps {
  article: HelpArticle
  onBack: () => void
  onClose: () => void
  className?: string
}

const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ExpandIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 4h6v6h-2V7.41l-4.29 4.3-1.42-1.42L16.59 6H14V4zm-4 16H4v-6h2v2.59l4.29-4.3 1.42 1.42L7.41 18H10v2z"
    />
  </svg>
)

const CloseIcon = () => (
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

export const WidgetArticle: React.FC<WidgetArticleProps> = memo(
  ({ article, onBack, onClose, className }) => {
    return (
      <div className={cn(styles.root, className)}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={onBack}
            aria-label="Go back"
          >
            <BackIcon />
          </button>
          <div className={styles.headerRight}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Expand"
            >
              <ExpandIcon />
            </button>
            <button
              type="button"
              className={styles.iconButton}
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
        </header>

        <div className={styles.scrollArea}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>{article.title}</h1>
            {article.updatedAt && (
              <p className={styles.updatedAt}>{article.updatedAt}</p>
            )}

            {article.description && (
              <div className={styles.descriptionBox}>{article.description}</div>
            )}

            {article.content && (
              <div className={styles.articleContent}>{article.content}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
)

WidgetArticle.displayName = 'WidgetArticle'
