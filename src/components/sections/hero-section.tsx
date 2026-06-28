"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/animations"

function HeroSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 overflow-hidden bg-background">
      <Image
        src="/vehicles/hero-section-bg.png"
        alt="ERGO hero vehicle"
        fill
        priority
        className="object-cover object-right sm:object-center"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent dark:from-white/5 z-0" />

      <Container className="relative z-10 w-full">
        <div className="z-20">
          <Reveal variant="slideUp" delay={0.1}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-5">
              ERGO Automotive
            </span>
          </Reveal>
          <Reveal variant="slideUp" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-white drop-shadow-lg">
              Engineered for Tomorrow
            </h1>
          </Reveal>
          <Reveal variant="slideUp" delay={0.3}>
            <p className="mt-6 text-base sm:text-lg text-white/90 drop-shadow-sm max-w-md leading-relaxed">
              Every curve, every line, every component — precision-crafted to
              redefine what an automobile can be. Experience the future of
              motion today.
            </p>
          </Reveal>
          <Reveal variant="slideUp" delay={0.4}>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="/models"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Vehicles
              </motion.a>
              <motion.a
                href="/book-test-drive"
                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-muted"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Test Drive
              </motion.a>
            </div>
          </Reveal>
          <Reveal variant="slideUp" delay={0.5}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12">
              {[
                { value: "1,050 hp", label: "Peak Power" },
                { value: "2.5 s", label: "0-60 mph" },
                { value: "405 mi", label: "Max Range" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={prefersReduced ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="20"
          height="32"
          viewBox="0 0 20 32"
          fill="none"
          className="opacity-40"
        >
          <rect
            x="1.5"
            y="1.5"
            width="17"
            height="29"
            rx="8.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="10" cy="11" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  )
}

export { HeroSection }
