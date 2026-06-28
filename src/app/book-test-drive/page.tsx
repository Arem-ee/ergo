import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Book a Test Drive",
  description: "Schedule a test drive at your nearest ERGO studio. Experience the future of motion firsthand.",
}

export default function BookTestDrivePage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Book Test Drive</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Book a Test Drive</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Experience ERGO firsthand. Schedule a drive at your nearest studio and feel the future of motion.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-xl mx-auto">
              <div className="rounded-xl border bg-card p-6 sm:p-8">
                <h2 className="text-xl font-bold mb-6">Your Information</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
                      <input id="first-name" type="text" placeholder="John" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
                      <input id="last-name" type="text" placeholder="Doe" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input id="email" type="email" placeholder="john@example.com" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                    <input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="vehicle" className="block text-sm font-medium">Preferred Vehicle</label>
                    <select id="vehicle" defaultValue="" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                      <option value="" disabled>Select a model</option>
                      <option value="ergo-s">ERGO S</option>
                      <option value="ergo-x">ERGO X</option>
                      <option value="ergo-r">ERGO R</option>
                      <option value="ergo-gt">ERGO GT</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="block text-sm font-medium">Preferred Date</label>
                    <input id="date" type="date" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                  </div>
                  <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Schedule Test Drive</button>
                </form>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-sm font-semibold mb-2">Prefer to call?</h3>
                <p className="text-sm text-muted-foreground">Speak with a product specialist at <a href="tel:+1800ERGO" className="text-foreground font-medium hover:underline">1-800-ERGO</a></p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Not Ready to Drive?</h2>
              <p className="text-muted-foreground mb-4">Explore the full ERGO lineup from the comfort of your home.</p>
              <a href="/models" className="inline-flex h-12 items-center justify-center rounded-full border border-input px-8 text-sm font-medium transition-colors hover:bg-muted">View Models</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
