"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { handleImageError } from "@/lib/image"
import type { Testimonial } from "@/constants/testimonials"

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className="rounded-xl border bg-card p-6 sm:p-8 flex flex-col gap-5"
      whileHover={prefersReduced ? undefined : { y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center gap-4">
        <div className="relative size-12 rounded-full overflow-hidden bg-muted shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
            onError={handleImageError}
          />
        </div>
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill={i < testimonial.rating ? "currentColor" : "none"}
              className={i < testimonial.rating ? "text-amber-400" : "text-border"}
            >
              <path
                d="M7 1L8.89 5.09L13 5.64L10 8.73L10.78 13L7 10.59L3.22 13L4 8.73L1 5.64L5.11 5.09L7 1Z"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
    </motion.div>
  )
}

export { TestimonialCard }
export type { TestimonialCardProps }
