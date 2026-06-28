"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/sections/feature-card"
import { InteriorHotspots } from "@/components/sections/interior-hotspots"
import { Reveal, Stagger } from "@/components/animations"

const INTERIOR_FEATURES = [
  {
    title: "Premium Seating",
    description: "Heated, ventilated, and massaging seats wrapped in Nappa leather with 22-way power adjustment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <path d="M4 14C4 12.8954 4.89543 12 6 12H14C15.1046 12 16 12.8954 16 14V16C16 16.5523 15.5523 17 15 17H5C4.44772 17 4 16.5523 4 16V14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12V5C4 3.89543 4.89543 3 6 3H14C15.1046 3 16 3.89543 16 5V12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Digital Dashboard",
    description: "A 17-inch curved OLED display with haptic feedback and adaptive night mode for effortless interaction.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <rect x="1" y="3" width="18" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 14V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sound System",
    description: "22-speaker immersive audio system with Dolby Atmos and active noise cancellation for concert-grade clarity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 13V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Climate Control",
    description: "Quad-zone automatic climate control with HEPA filtration, air purification, and biometric cabin sensing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground">
        <path d="M10 3V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 7L10 3L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 13L10 17L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function InteriorSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="interior" className="py-20 sm:py-28 lg:py-36 bg-muted/50">
      <Container>
        <Reveal variant="slideUp">
          <SectionTitle
            label="Interior"
            title="The Sanctuary Within"
            description="Step inside a cabin designed around the driver. Every material, every surface, every detail chosen with obsessive precision. Tap a hotspot to explore."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={prefersReduced ? undefined : { clipPath: "inset(0 100% 0 0)" }}
            whileInView={prefersReduced ? undefined : { clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <InteriorHotspots />
          </motion.div>

          <Stagger className="grid gap-4 order-1 lg:order-2">
            {INTERIOR_FEATURES.map((feature, i) => (
              <Reveal key={feature.title} variant="slideUp" delay={i * 0.1}>
                <FeatureCard
                  icon={
                    <motion.div
                      whileHover={prefersReduced ? undefined : { scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                  }
                  title={feature.title}
                  description={feature.description}
                  variant="outlined"
                />
              </Reveal>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  )
}

export { InteriorSection }
