/**
 * useFocusTrap.ts
 *
 * Traps keyboard focus inside a container element while it is active.
 * Meets WCAG 2.1 §2.1.2 (No Keyboard Trap) by releasing the trap when
 * the container is no longer active.
 */

import { RefObject, useEffect } from 'react'

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  'details > summary',
].join(', ')

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
  ).filter((el) => !el.closest('[hidden]') && el.offsetParent !== null)
}

/**
 * Activates a focus trap inside `ref` when `active` is true.
 * On activation, focuses the first focusable child.
 * Tab / Shift+Tab cycle within the container.
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  active: boolean
): void {
  useEffect(() => {
    if (!active || !ref.current) return

    const container = ref.current

    // Focus the first focusable element when the trap activates
    const focusable = getFocusableElements(container)
    if (focusable.length > 0) {
      // Small delay so CSS transitions don't interfere with focus
      const raf = requestAnimationFrame(() => focusable[0].focus())
      return () => cancelAnimationFrame(raf)
    }
  }, [active, ref])

  useEffect(() => {
    if (!active || !ref.current) return

    const container = ref.current

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusable = getFocusableElements(container)
      if (focusable.length === 0) {
        e.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        // Shift+Tab: if focus is on the first element, wrap to last
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        // Tab: if focus is on the last element, wrap to first
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, ref])
}
