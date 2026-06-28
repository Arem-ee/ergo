"use client"

import dynamic from "next/dynamic"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { ConfiguratorPanel } from "@/components/vehicle/configurator/configurator-panel"
import { PricingSummary } from "@/components/vehicle/configurator/pricing-summary"
import { Reveal } from "@/components/animations"

const ConfiguratorScene = dynamic(
  () => import("@/components/vehicle/configurator/configurator-scene").then((m) => ({ default: m.ConfiguratorScene })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center">
        <div className="size-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
      </div>
    ),
  }
)

function ConfiguratorSection() {
  return (
    <section id="configurator" className="py-20 sm:py-28 lg:py-36 bg-muted/50">
      <Container>
        <Reveal variant="slideUp">
          <SectionTitle
            label="Configurator"
            title="Build Your ERGO"
            description="Choose every detail of your perfect ERGO — from exterior color to performance package."
          />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <Reveal variant="slideUp" delay={0.1}>
              <ConfiguratorPanel />
            </Reveal>
            <Reveal variant="slideUp" delay={0.2}>
              <PricingSummary />
            </Reveal>
          </div>

          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <Reveal variant="slideUp" delay={0.1}>
              <ConfiguratorScene />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { ConfiguratorSection }
