"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { useRevealAnimation } from "@/hooks/use-reveal-animation"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

function AnimatedCounter({
  end,
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useRevealAnimation({ threshold: 0.5 })
  const hasAnimated = useRef(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    if (prefersReduced) {
      setCount(end)
      return
    }

    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * end)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, prefersReduced])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export { AnimatedCounter }
export type { AnimatedCounterProps }
