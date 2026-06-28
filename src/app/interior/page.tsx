import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { SafeImage } from "@/components/ui/safe-image"
import { assets } from "@/data/assets"

export const metadata: Metadata = {
  title: "Interior",
  description: "Step inside the ERGO cabin — premium seating, digital dashboard, immersive sound, and quad-zone climate control.",
}

const INTERIOR_FEATURES = [
  { title: "Premium Seating", description: "Heated, ventilated, and massaging seats wrapped in Nappa leather with 22-way power adjustment and memory settings for every driver.", specs: [{ l: "Material", v: "Nappa Leather" }, { l: "Adjustment", v: "22-Way" }, { l: "Massage Modes", v: "5" }] },
  { title: "Digital Dashboard", description: "A 17-inch curved OLED display with haptic feedback and adaptive night mode. The interface learns your preferences and surfaces relevant information contextually.", specs: [{ l: "Display", v: "17-inch OLED" }, { l: "Resolution", v: "4K" }, { l: "Haptic Zones", v: "8" }] },
  { title: "Sound System", description: "22-speaker immersive audio system with Dolby Atmos and active noise cancellation. Concert-grade clarity transforms every drive into a private performance.", specs: [{ l: "Speakers", v: "22" }, { l: "Amplifier", v: "1,200W" }, { l: "Audio Tech", v: "Dolby Atmos" }] },
  { title: "Climate Control", description: "Quad-zone automatic climate control with HEPA filtration, air purification, and biometric cabin sensing that adjusts temperature by occupant.", specs: [{ l: "Zones", v: "4" }, { l: "Filtration", v: "HEPA" }, { l: "Sensors", v: "Biometric" }] },
]

export default function InteriorPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Interior</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Craftsmanship</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">The Sanctuary Within</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Step inside a cabin designed around the driver. Every material, every surface, every detail chosen with obsessive precision.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-16">
              <SafeImage src={assets.interior} alt="ERGO interior cockpit" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {INTERIOR_FEATURES.map((feature) => (
                <div key={feature.title} className="rounded-xl border bg-card p-6 sm:p-8">
                  <h2 className="text-xl font-bold tracking-tight mb-3">{feature.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {feature.specs.map((spec) => (
                      <div key={spec.l}>
                        <p className="text-sm font-semibold">{spec.v}</p>
                        <p className="text-xs text-muted-foreground mt-1">{spec.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Step Inside</h2>
              <p className="text-muted-foreground mb-8">Visit an ERGO studio to experience the interior firsthand.</p>
              <a href="/book-test-drive" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Book Test Drive</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
