import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { SafeImage } from "@/components/ui/safe-image"
import { assets } from "@/data/assets"

export const metadata: Metadata = {
  title: "Technology",
  description: "Discover the advanced technology powering every ERGO — AI driving assistance, smart connectivity, intelligent dashboard, and voice assistant.",
}

const TECH_FEATURES = [
  {
    title: "AI Driving Assistance",
    description: "A 360-degree sensor fusion system powered by neural network processing enables Level 3 autonomous capability. Every ERGO learns your routes, driving preferences, and habits over time, creating a personalized experience that improves with every mile.",
    stats: [{ label: "Sensors", value: "24+" }, { label: "Processing Power", value: "1.2 TOPS" }, { label: "Autonomy Level", value: "L3" }],
    img: assets.interior,
  },
  {
    title: "Smart Connectivity",
    description: "Built on a 5G architecture with over-the-air updates that continuously improve performance, add features, and refine the driving experience. Your ERGO evolves without ever visiting a service center.",
    stats: [{ label: "Connectivity", value: "5G" }, { label: "Update Speed", value: "<15 min" }, { label: "Update Frequency", value: "Quarterly" }],
    img: assets.vehicles[0],
  },
  {
    title: "Intelligent Dashboard",
    description: "A seamless curved OLED display spanning the entire cockpit. Context-aware interface surfaces the right information at the right moment, minimizing distraction and maximizing awareness.",
    stats: [{ label: "Display Size", value: "17-inch" }, { label: "Resolution", value: "4K" }, { label: "Response Time", value: "<1ms" }],
    img: assets.interior,
  },
  {
    title: "Voice Assistant",
    description: "Natural language AI that understands context and intent. Control climate, navigation, media, and vehicle settings conversationally without touching a single button.",
    stats: [{ label: "Languages", value: "12+" }, { label: "Voice Commands", value: "200+" }, { label: "Response Time", value: "<0.5s" }],
    img: assets.vehicles[1],
  },
]

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-muted/30">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li className="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-foreground font-medium" aria-current="page">Technology</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Innovation</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Intelligence Built In</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Every ERGO is a platform of advanced technology — from AI-driven assistance to seamless connectivity that evolves with you.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-16">
              {TECH_FEATURES.map((feature, i) => (
                <div key={feature.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{feature.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {feature.stats.map((stat) => (
                        <div key={stat.label} className="rounded-xl border bg-card p-4 text-center">
                          <p className="text-lg font-semibold">{stat.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    {feature.title === "Voice Assistant" ? (
                      <img src="" alt="Voice assistant UI visual" className="object-cover w-full h-full absolute inset-0" />
                    ) : feature.title === "Smart Connectivity" ? (
                      <img src="" alt="Connectivity interface visual" className="object-cover w-full h-full absolute inset-0" />
                    ) : (
                      <SafeImage
                        src={feature.img}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Experience It Yourself</h2>
              <p className="text-muted-foreground mb-8">Schedule a test drive and discover the technology that sets ERGO apart.</p>
              <a href="/book-test-drive" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Book Test Drive</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
