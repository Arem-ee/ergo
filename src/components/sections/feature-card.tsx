"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: "default" | "outlined"
  className?: string
}

function FeatureCard({ icon, title, description, variant = "default", className }: FeatureCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={cn(
        "rounded-xl p-6 sm:p-8 transition-all duration-200",
        variant === "default" && "bg-card text-card-foreground border shadow-sm",
        variant === "outlined" && "border border-border bg-transparent",
        className
      )}
      whileHover={prefersReduced ? undefined : {
        y: -4,
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
      }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="size-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-4"
        whileHover={prefersReduced ? undefined : { scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  )
}

export { FeatureCard }
export type { FeatureCardProps }
