/**
 * TypingIndicator.tsx
 *
 * Canonical reusable animated typing indicator for the ai-interface package.
 *
 * The PRD (§4.1, §5.2) defines TypingIndicator as a standalone component:
 *   "TypingIndicator.tsx — Animated 3-dot loader"
 *
 * Three visual variants serve different locations in the widget:
 *
 *   "bubble"  (default)
 *     Renders inside a MessageBubble when status="loading".
 *     Larger dots (7px), muted color, bounces 6px.
 *     Used by: MessageBubble (replaces the inline TypingDots)
 *
 *   "inline"
 *     Compact version for tight spaces like the ChatHeader status line.
 *     Smaller dots (4px), primary color, bounces 4px.
 *     Used by: ChatHeader (replaces the inline TypingStatus)
 *
 *   "standalone"
 *     Full centered block with a label below — for embedding outside the
 *     widget (e.g. a loading screen, a custom panel, or a v2 full-page chat).
 *     Dots are medium (8px), primary color, bounces 7px.
 *
 * All variants:
 *   - aria-label and role="status" so screen readers announce loading state
 *   - Staggered animation-delay per dot for a natural wave motion
 *   - prefers-reduced-motion: dots freeze at rest opacity, no bounce
 *   - No external dependencies
 *
 * Dot animation (all variants share the same keyframe shape, scaled by CSS):
 *   0%        → resting (dim, y=0)
 *   40%       → peak    (bright, y=-N)
 *   80%–100%  → resting (dim, y=0)
 *   Stagger:  0ms / staggerMs / staggerMs*2
 */

import React, { memo } from 'react'

import { cn } from '../../utils/cn'
import styles from './TypingIndicator.module.css'

// ─── Props ────────────────────────────────────────────────────────────────────

export type TypingIndicatorVariant = 'bubble' | 'inline' | 'standalone'

export interface TypingIndicatorProps {
  /**
   * Visual style variant.
   * - "bubble"     → inside a MessageBubble loading state (default)
   * - "inline"     → compact, for ChatHeader status line
   * - "standalone" → centered block with text label
   */
  variant?: TypingIndicatorVariant

  /**
   * Accessible label announced by screen readers.
   * Defaults differ by variant:
   *   bubble / standalone → "Thinking…"
   *   inline              → "Assistant is typing"
   */
  label?: string

  /**
   * Text shown below the dots in the "standalone" variant only.
   * Defaults to the label value.
   */
  caption?: string

  /** Extra class on the root element */
  className?: string
}

// ─── Default labels per variant ──────────────────────────────────────────────

const DEFAULT_LABELS: Record<TypingIndicatorVariant, string> = {
  bubble: 'Thinking…',
  inline: 'Assistant is typing',
  standalone: 'Thinking…',
}

// ─── Component ────────────────────────────────────────────────────────────────

export const TypingIndicator: React.FC<TypingIndicatorProps> = memo(
  ({ variant = 'bubble', label, caption, className }) => {
    const resolvedLabel = label ?? DEFAULT_LABELS[variant]
    const resolvedCaption = caption ?? resolvedLabel

    const isBubble = variant === 'bubble'
    const isInline = variant === 'inline'
    const isStandalone = variant === 'standalone'

    return (
      <span
        className={cn(
          styles.root,
          isBubble && styles.rootBubble,
          isInline && styles.rootInline,
          isStandalone && styles.rootStandalone,
          className
        )}
        role="status"
        aria-live="polite"
        aria-label={resolvedLabel}
      >
        {/* ── Dot group ── */}
        <span
          className={cn(
            styles.dots,
            isBubble && styles.dotsBubble,
            isInline && styles.dotsInline,
            isStandalone && styles.dotsStandalone
          )}
          aria-hidden="true"
        >
          <span className={cn(styles.dot, styles.dot1)} />
          <span className={cn(styles.dot, styles.dot2)} />
          <span className={cn(styles.dot, styles.dot3)} />
        </span>

        {/* ── Standalone caption ── */}
        {isStandalone && (
          <span className={styles.caption} aria-hidden="true">
            {resolvedCaption}
          </span>
        )}

        {/*
         * Inline label for "inline" variant:
         * Visually rendered (small italic text after the dots) but kept
         * out of the a11y tree since the parent role="status" + aria-label
         * covers the announcement.
         */}
        {isInline && (
          <span className={styles.inlineLabel} aria-hidden="true">
            Typing…
          </span>
        )}
      </span>
    )
  }
)

TypingIndicator.displayName = 'TypingIndicator'
