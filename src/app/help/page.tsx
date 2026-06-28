import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Help Center",
  description: "Find answers to common questions about ERGO vehicles, ownership, charging, and support.",
}

const TOPICS = [
  { title: "Vehicle Ownership", description: "Learn about warranty coverage, maintenance schedules, and owner benefits.", articles: ["Warranty Information", "Scheduled Maintenance", "Roadside Assistance", "Owner's Manual"] },
  { title: "Charging", description: "Everything you need to know about charging your ERGO at home and on the road.", articles: ["Home Charging Installation", "Public Charging Network", "Charging Speeds Explained", "Battery Care Tips"] },
  { title: "Connectivity", description: "Set up and manage your ERGO's connected features and over-the-air updates.", articles: ["Account Setup", "Mobile App Guide", "OTA Updates", "Connectivity Plans"] },
  { title: "Service & Support", description: "Find service centers, schedule appointments, and get technical support.", articles: ["Find a Service Center", "Schedule Service", "Technical Support", "Vehicle Recalls"] },
]

export default function HelpPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Help Center</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Support</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Help Center</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Find answers, guides, and support resources for your ERGO ownership experience.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid sm:grid-cols-2 gap-8">
              {TOPICS.map((topic) => (
                <div key={topic.title} className="rounded-xl border bg-card p-6 sm:p-8">
                  <h2 className="text-lg font-bold mb-2">{topic.title}</h2>
                  <p className="text-sm text-muted-foreground mb-6">{topic.description}</p>
                  <ul className="space-y-2">
                    {topic.articles.map((article) => (
                      <li key={article}>
                        <a href="#" className="text-sm text-foreground hover:underline flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          {article}
                        </a>
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
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-8">Our support team is available 24/7 to assist you.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Contact Us</a>
                <a href="tel:+1800ERGO" className="inline-flex h-12 items-center justify-center rounded-full border border-input px-8 text-sm font-medium transition-colors hover:bg-muted">Call 1-800-ERGO</a>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
