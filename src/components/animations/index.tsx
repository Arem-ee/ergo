"use client"

import { type Variants, motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

interface RevealProps {
  children: React.ReactNode
  variant?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleIn"
  delay?: number
  className?: string
  as?: "div" | "span" | "section"
}

const variantMap: Record<string, Variants> = {
  fadeIn,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  scaleIn,
}

function Reveal({ children, variant = "slideUp", delay = 0, className, as = "div" }: RevealProps) {
  const prefersReduced = useReducedMotion()
  const v = variantMap[variant]

  const MotionTag = motion[as]

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={v}
      transition={{ delay }}
      className={className}
      style={prefersReduced ? { opacity: 1, transform: "none" } : undefined}
    >
      {children}
    </MotionTag>
  )
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
  fast?: boolean
}

function Stagger({ children, className, fast = false }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fast ? staggerContainerFast : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { Reveal, Stagger }
export type { RevealProps, StaggerProps }
