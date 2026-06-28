"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CarouselProps {
  slides: React.ReactNode[]
  autoPlayInterval?: number
  className?: string
}

function Carousel({ slides, autoPlayInterval = 5000, className }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined)
  const prefersReduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef(0)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, slides.length, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, slides.length, goTo])

  useEffect(() => {
    if (prefersReduced) return
    timerRef.current = setInterval(next, autoPlayInterval)
    return () => clearInterval(timerRef.current)
  }, [next, autoPlayInterval, prefersReduced])

  const slideOffset = typeof window !== "undefined" ? Math.min(window.innerWidth * 0.4, 300) : 300

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? slideOffset : -slideOffset, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -slideOffset : slideOffset, opacity: 0 }),
  }

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartRef.current - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        if (diff > 0) next()
        else prev()
      }
    },
    [next, prev]
  )

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={prefersReduced ? undefined : variants}
            initial={prefersReduced ? undefined : "enter"}
            animate={prefersReduced ? undefined : "center"}
            exit={prefersReduced ? undefined : "exit"}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          type="button"
          onClick={prev}
          className="inline-flex items-center justify-center size-11 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "relative flex items-center justify-center transition-all duration-300",
                "before:absolute before:inset-[-8px] before:rounded-full"
              )}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  i === current
                    ? "bg-foreground w-6 h-2"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 h-2 w-2"
                )}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="inline-flex items-center justify-center size-11 rounded-full border border-border hover:bg-muted transition-colors"
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export { Carousel }
export type { CarouselProps }
