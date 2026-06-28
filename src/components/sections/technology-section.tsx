"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/sections/feature-card"
import { Reveal, Stagger } from "@/components/animations"

const FEATURES = [
  {
    title: "AI Driving Assistance",
    description: "360-degree sensor fusion with neural network processing for Level 3 autonomous capability. Your ERGO learns your routes and driving preferences over time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Smart Connectivity",
    description: "5G-enabled with over-the-air updates that continuously improve performance, add features, and refine the driving experience without visiting a service center.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <path d="M5.5 7.5C7.98528 5.01472 12.0147 5.01472 14.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 5C6.31371 1.68629 11.6863 1.68629 15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 10C9.10457 8.89543 10.8954 8.89543 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Intelligent Dashboard",
    description: "A seamless curved display spanning the entire cockpit. Context-aware interface surfaces the right information at the right moment, minimizing distraction.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <rect x="1" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 13H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Voice Assistant",
    description: "Natural language AI that understands context and intent. Control climate, navigation, media, and vehicle settings without touching a single button.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <path d="M10 2C7.79086 2 6 3.79086 6 6V10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10V6C14 3.79086 12.2091 2 10 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 9V10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 15V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 18H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

function TechnologySection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="technology" className="py-20 sm:py-28 lg:py-36">
      <Container>
        <Reveal variant="slideUp">
          <SectionTitle
            label="Technology"
            title="Intelligence Built In"
            description="Every ERGO is a platform of advanced technology — from AI-driven assistance to seamless connectivity that evolves with you."
          />
        </Reveal>

        <Stagger>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {FEATURES.map((feature) => (
              <Reveal key={feature.title} variant="slideUp">
                <FeatureCard
                  icon={
                    <motion.div
                      whileHover={prefersReduced ? undefined : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.icon}
                    </motion.div>
                  }
                  title={feature.title}
                  description={feature.description}
                />
              </Reveal>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  )
}

export { TechnologySection }
