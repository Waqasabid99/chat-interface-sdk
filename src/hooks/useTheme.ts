/**
 * useTheme.ts
 *
 * Resolves the widget's effective theme ("light" | "dark") and keeps it in
 * sync with the OS preference when theme="auto". Updates dynamically if the
 * user switches their system theme mid-session.
 */

import { useEffect, useState } from 'react'

type ThemeProp = 'light' | 'dark' | 'auto'
type ResolvedTheme = 'light' | 'dark'

const MEDIA_QUERY = '(prefers-color-scheme: dark)'

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  if (!window.matchMedia) return 'light'
  return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light'
}

/**
 * Returns the resolved theme ("light" | "dark").
 *
 * - "light" / "dark" → returned as-is
 * - "auto"           → derived from prefers-color-scheme and updated live
 */
export function useTheme(theme: ThemeProp): ResolvedTheme {
  const [resolved, setResolved] = useState<ResolvedTheme>(() => {
    if (theme !== 'auto') return theme
    return getSystemTheme()
  })

  useEffect(() => {
    if (theme !== 'auto') {
      setResolved(theme)
      return
    }

    // Set immediately in case the value changed between render and effect
    setResolved(getSystemTheme())
    if (typeof window === 'undefined' || !window.matchMedia) {
      return
    }

    const mq = window.matchMedia(MEDIA_QUERY)
    const handler = (e: MediaQueryListEvent) => {
      setResolved(e.matches ? 'dark' : 'light')
    }

    // Use addEventListener where available (Safari 14+), fall back to addListener
    if (mq.addEventListener) {
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    } else {
      // Legacy Safari
      mq.addListener(handler)
      return () => mq.removeListener(handler)
    }
  }, [theme])

  return resolved
}
