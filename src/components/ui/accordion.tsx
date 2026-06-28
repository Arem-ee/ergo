"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-5 sm:py-6 text-left transition-colors hover:text-foreground/80"
            >
              <span className="text-base sm:text-lg font-medium pr-4">{item.question}</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 sm:pb-6 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export { Accordion }
export type { AccordionProps, AccordionItem }
