import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join ERGO Automotive. Explore open positions in engineering, design, manufacturing, and more.",
}

const OPENINGS = [
  { title: "Senior Powertrain Engineer", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
  { title: "Battery Systems Architect", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
  { title: "UI/UX Designer", dept: "Design", location: "San Francisco, CA", type: "Full-time" },
  { title: "Autonomous Software Engineer", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
  { title: "Manufacturing Engineer", dept: "Operations", location: "Austin, TX", type: "Full-time" },
  { title: "Quality Assurance Specialist", dept: "Operations", location: "Austin, TX", type: "Full-time" },
  { title: "Marketing Manager", dept: "Marketing", location: "San Francisco, CA", type: "Full-time" },
  { title: "Customer Experience Lead", dept: "Support", location: "Remote", type: "Full-time" },
]

const PERKS = [
  "Competitive equity packages", "Comprehensive health coverage", "Flexible PTO policy", "401(k) with company match", "Daily catered meals", "On-site fitness center", "Annual learning stipend", "Parental leave (16 weeks)",
]

export default function CareersPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Careers</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Join Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Build the Future</h1>
              <p className="text-muted-foreground text-lg max-w-xl">At ERGO, we&apos;re looking for people who refuse to accept what&apos;s possible today. People who want to build what comes next.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Open Positions</h2>
                <div className="space-y-4">
                  {OPENINGS.map((job) => (
                    <div key={job.title} className="rounded-xl border bg-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.dept} &middot; {job.location}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">{job.type}</span>
                        <a href="#" className="text-sm font-medium text-foreground hover:underline">Apply</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">Why ERGO</h2>
                <ul className="space-y-3">
                  {PERKS.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-foreground"><path d="M2.5 7L5.5 10L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Don&apos;t See a Role?</h2>
              <p className="text-muted-foreground mb-8">We&apos;re always looking for exceptional talent. Send us your resume.</p>
              <a href="mailto:careers@ergo.com" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Send Resume</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
