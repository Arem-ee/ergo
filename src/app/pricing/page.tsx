import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Pricing",
  description: "ERGO pricing — from $84,900 for the ERGO S to $169,900 for the ERGO R. Explore models, packages, and build your perfect ERGO.",
}

const MODELS = [
  { name: "ERGO S", price: "$84,900", tagline: "The Benchmark", specs: ["670 hp", "405 mi range", "3.1 s 0-60", "RWD/AWD"] },
  { name: "ERGO X", price: "$94,900", tagline: "Boundless Exploration", specs: ["750 hp", "360 mi range", "3.8 s 0-60", "AWD"] },
  { name: "ERGO R", price: "$169,900", tagline: "Raw Precision", specs: ["1,050 hp", "290 mi range", "1.9 s 0-60", "AWD"] },
  { name: "ERGO GT", price: "$124,900", tagline: "Grand Touring Redefined", specs: ["820 hp", "445 mi range", "2.7 s 0-60", "AWD"] },
]

const PACKAGES = [
  { name: "Standard", price: "Included", features: ["Full LED Lighting", "19-inch Alloy Wheels", "Premium Cloth Upholstery", "12.3-inch Digital Display", "Advanced Safety Suite", "8-Speaker Audio System"] },
  { name: "Premium", price: "+$6,000", features: ["Adaptive Air Suspension", "20-inch Alloy Wheels", "Nappa Leather Upholstery", "17-inch OLED Display", "22-Speaker Audio System", "Panoramic Glass Roof"] },
  { name: "Performance", price: "+$12,000", features: ["Carbon-Ceramic Brakes", "21-inch Forged Wheels", "Track Mode & Launch Control", "Carbon Fiber Trim Package", "Active Aerodynamics", "Performance Tires"] },
]

export default function PricingPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Pricing</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Investment</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Transparent Pricing</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Every ERGO includes our full suite of safety and convenience features. Choose the model and package that fits your lifestyle.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {MODELS.map((model) => (
                <div key={model.name} className="rounded-xl border bg-card p-6 sm:p-8 flex flex-col">
                  <h2 className="text-xl font-bold tracking-tight mb-1">{model.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{model.tagline}</p>
                  <p className="text-3xl font-bold mb-6">{model.price}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {model.specs.map((spec) => (
                      <li key={spec} className="text-sm text-muted-foreground flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-foreground"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <a href="/book-test-drive" className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Book Test Drive</a>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">Available Packages</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {PACKAGES.map((pkg) => (
                <div key={pkg.name} className="rounded-xl border bg-card p-6 sm:p-8 flex flex-col">
                  <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.price}</p>
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-foreground"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Build Your ERGO</h2>
              <p className="text-muted-foreground mb-8">Use our online configurator to customize every detail and see your price in real time.</p>
              <a href="/#configurator" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Open Configurator</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
