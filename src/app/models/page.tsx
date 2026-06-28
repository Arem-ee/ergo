import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { SafeImage } from "@/components/ui/safe-image"
import { VEHICLES } from "@/constants/vehicles"
import { assets } from "@/data/assets"

export const metadata: Metadata = {
  title: "Models",
  description: "Explore the ERGO lineup — S, X, R, and GT. Each model redefines what an automobile can be.",
}

export default function ModelsPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Models</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Lineup</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Choose Your ERGO</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Every ERGO is engineered from the ground up to deliver an unmatched blend of performance, range, and luxury.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-16">
              {VEHICLES.map((vehicle, i) => (
                <div key={vehicle.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <SafeImage src={vehicle.image} alt={vehicle.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{vehicle.name}</h2>
                    <p className="text-muted-foreground text-sm font-medium mb-4">{vehicle.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{vehicle.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="rounded-xl border bg-card p-4"><p className="text-sm text-muted-foreground">Horsepower</p><p className="text-lg font-semibold">{vehicle.specs.horsepower}</p></div>
                      <div className="rounded-xl border bg-card p-4"><p className="text-sm text-muted-foreground">Top Speed</p><p className="text-lg font-semibold">{vehicle.specs.topSpeed}</p></div>
                      <div className="rounded-xl border bg-card p-4"><p className="text-sm text-muted-foreground">0-60 mph</p><p className="text-lg font-semibold">{vehicle.specs.acceleration}</p></div>
                      <div className="rounded-xl border bg-card p-4"><p className="text-sm text-muted-foreground">Range</p><p className="text-lg font-semibold">{vehicle.specs.range}</p></div>
                    </div>
                    <p className="text-2xl font-bold mb-6">{vehicle.price}</p>
                    <a href="/book-test-drive" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Book Test Drive</a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Can&apos;t Decide?</h2>
              <p className="text-muted-foreground mb-8">Visit your nearest ERGO studio to experience every model up close.</p>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Find a Studio</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
