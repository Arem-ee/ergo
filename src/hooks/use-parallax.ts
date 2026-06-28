"use client"

import { useEffect, useRef } from "react"

interface UseParallaxOptions {
  speed?: number
  direction?: "vertical" | "horizontal"
}

export function useParallax<T extends HTMLElement>({
  speed = 0.3,
  direction = "vertical",
}: UseParallaxOptions = {}) {
  const ref = useRef<T>(null!)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      const offset = scrolled * speed

      if (direction === "vertical") {
        el.style.transform = `translate3d(0, ${Math.min(Math.max(offset, -100), 100)}px, 0)`
      } else {
        el.style.transform = `translate3d(${Math.min(Math.max(offset, -100), 100)}px, 0, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return ref
}
