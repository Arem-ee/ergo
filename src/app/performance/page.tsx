import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { SafeImage } from "@/components/ui/safe-image"
import { assets } from "@/data/assets"

export const metadata: Metadata = {
  title: "Performance",
  description: "ERGO performance metrics — 1,050 hp, 217 mph top speed, 0-60 in 1.9 seconds, and 445 miles of range. Numbers that speak for themselves.",
}

const PERFORMANCE_HERO = [
  { value: "1,050 hp", label: "Peak Horsepower" },
  { value: "217 mph", label: "Top Speed" },
  { value: "1.9 s", label: "0-60 mph" },
  { value: "445 mi", label: "Max Range" },
]

const PERFORMANCE_DETAILS = [
  { title: "Powertrain", description: "Triple electric motor architecture with torque vectoring delivers instant power to all four wheels. The advanced thermal management system ensures consistent performance lap after lap.", specs: [{ l: "Motor Configuration", v: "Triple Motor" }, { l: "Battery Capacity", v: "120 kWh" }, { l: "Torque", v: "1,050 lb-ft" }], img: assets.vehicles[2] },
  { title: "Aerodynamics", description: "Active aerodynamic elements including a deployable rear spoiler and adaptive grille shutters optimize drag and downforce in real time, achieving a class-leading drag coefficient.", specs: [{ l: "Drag Coefficient", v: "0.21 Cd" }, { l: "Downforce", v: "450 lb" }, { l: "Active Aero", v: "Yes" }], img: assets.vehicles[0] },
  { title: "Chassis & Suspension", description: "Adaptive air suspension with predictive road scanning adjusts damping in milliseconds. The lightweight aluminum space frame provides exceptional rigidity and crash safety.", specs: [{ l: "Suspension", v: "Adaptive Air" }, { l: "Frame Material", v: "Aluminum" }, { l: "Curb Weight", v: "4,850 lb" }], img: assets.vehicles[3] },
  { title: "Braking System", description: "Carbon-ceramic brakes with regenerative braking recovery capture over 98% of braking energy. The integrated brake-by-wire system provides instant, precise stopping power.", specs: [{ l: "Front Brakes", v: "16.5-inch" }, { l: "Rear Brakes", v: "15.7-inch" }, { l: "60-0 mph", v: "108 ft" }], img: assets.vehicles[1] },
]

export default function PerformancePage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Performance</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Engineering</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Numbers That Speak</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Raw data that puts every ERGO in a league of its own. These aren&apos;t just specs — they&apos;re benchmarks.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {PERFORMANCE_HERO.map((stat) => (
                <div key={stat.label} className="rounded-xl border bg-card p-6">
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-16">
              {PERFORMANCE_DETAILS.map((detail, i) => (
                <div key={detail.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{detail.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{detail.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {detail.specs.map((spec) => (
                        <div key={spec.l} className="rounded-xl border bg-card p-4 text-center">
                          <p className="text-sm font-semibold">{spec.v}</p>
                          <p className="text-xs text-muted-foreground mt-1">{spec.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <SafeImage
                      src={detail.img}
                      alt={detail.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Feel the Power</h2>
              <p className="text-muted-foreground mb-8">Nothing compares to experiencing ERGO performance firsthand. Book your test drive today.</p>
              <a href="/book-test-drive" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Book Test Drive</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
