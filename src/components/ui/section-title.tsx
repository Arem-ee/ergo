"use client"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/animations"

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

function SectionTitle({ label, title, description, align = "center", className }: SectionTitleProps) {
  return (
    <Reveal variant="slideUp">
      <div
        className={cn(
          "max-w-2xl mb-12 sm:mb-16 lg:mb-20",
          align === "center" && "mx-auto text-center",
          className
        )}
      >
        {label && (
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {label}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export { SectionTitle }
export type { SectionTitleProps }
