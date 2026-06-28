"use client"

import { useEffect, useRef } from "react"

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ")

function useFocusTrap(active: boolean) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active || !ref.current) return

    const container = ref.current
    const previouslyFocused = document.activeElement as HTMLElement | null

    const focusable = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return
      const currentFocusable = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      const firstEl = currentFocusable[0]
      const lastEl = currentFocusable[currentFocusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault()
          lastEl?.focus()
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault()
          firstEl?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [active])

  return ref
}

export { useFocusTrap }
