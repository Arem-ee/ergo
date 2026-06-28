"use client"

import { useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Reveal, Stagger } from "@/components/animations"

const PERFORMANCE_STATS = [
  { end: 1050, suffix: " hp", label: "Peak Horsepower", description: "Triple electric motors delivering instant torque across all four wheels." },
  { end: 217, suffix: " mph", label: "Top Speed", description: "Aerodynamic optimization and high-speed stability at every velocity." },
  { end: 19, suffix: " s", label: "0-60 mph", description: "Launch mode harnesses full power for jaw-dropping acceleration.", divideBy10: true },
  { end: 445, suffix: " mi", label: "Max Range", description: "Next-generation battery pack with industry-leading energy density." },
]

function PerformanceSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="performance" className="py-20 sm:py-28 lg:py-36 bg-muted/50">
      <Container>
        <Reveal variant="slideUp">
          <SectionTitle
            label="Performance"
            title="Numbers That Speak"
            description="Raw data that puts every ERGO in a league of its own. These aren't just specs — they're benchmarks."
          />
        </Reveal>

        <Stagger>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PERFORMANCE_STATS.map((stat) => (
              <Reveal key={stat.label} variant="slideUp">
                <div className="rounded-xl border bg-card p-6 sm:p-8 flex flex-col gap-3">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                    {prefersReduced ? (
                      <span>{stat.end}{stat.suffix}</span>
                    ) : stat.divideBy10 ? (
                      <>
                        <AnimatedCounter end={1} duration={2} />
                        <span>.</span>
                        <AnimatedCounter end={9} duration={1.5} />
                        <span>{stat.suffix}</span>
                      </>
                    ) : (
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2.5} />
                    )}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  )
}

export { PerformanceSection }
