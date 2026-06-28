import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { SafeImage } from "@/components/ui/safe-image"
import { assets } from "@/data/assets"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ERGO Automotive — our mission, vision, and the team behind the future of motion.",
}

const VALUES = [
  { title: "Innovation First", description: "We challenge every convention. Our engineering team pushes beyond what's possible, rethinking every component from first principles to achieve the extraordinary." },
  { title: "Obsessive Craftsmanship", description: "Every ERGO is built with a fanatical attention to detail. From the stitch count on our seats to the acoustic tuning of our cabin, we accept nothing less than perfection." },
  { title: "Sustainable Performance", description: "We believe exhilarating performance and environmental responsibility are not mutually exclusive. Our electric powertrains deliver both without compromise." },
  { title: "Driver-Centric Design", description: "Technology should serve the driver, not distract them. Every interface, every control, every surface is designed to enhance the connection between driver and machine." },
]

const LEADERSHIP = [
  { name: "Dr. Elena Vasquez", title: "CEO & Founder", bio: "Former chief engineer at a leading EV manufacturer, Elena founded ERGO with a vision to redefine automotive luxury through electric propulsion.", img: assets.users[0] },
  { name: "Marcus Webb", title: "CTO", bio: "With two decades in autonomous systems and battery technology, Marcus leads the engineering team behind ERGO's industry-leading range and performance.", img: assets.users[1] },
  { name: "Sophie Laurent", title: "Chief Design Officer", bio: "A celebrated automotive designer whose previous work includes some of the most iconic vehicles of the last decade. Sophie defines the ERGO design language.", img: assets.users[2] },
]

export default function AboutPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">About</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Our Story</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Redefining Motion</h1>
              <p className="text-muted-foreground text-lg max-w-xl">ERGO Automotive was founded on a singular belief: that the automobile can be so much more. More efficient. More intelligent. More exhilarating.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We set out to engineer the world&apos;s most advanced electric vehicles — not by following established paths, but by creating our own. Every ERGO represents years of research, thousands of engineering hours, and an unwavering commitment to excellence.</p>
              <p className="text-muted-foreground leading-relaxed">From our proprietary battery technology to our AI-driven assistance systems, every innovation serves a single purpose: to create a driving experience that is safer, more intuitive, and more exhilarating than anything that has come before.</p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-20">
              {VALUES.map((val) => (
                <div key={val.title} className="rounded-xl border bg-card p-6 sm:p-8">
                  <h3 className="text-lg font-bold mb-3">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">Leadership</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {LEADERSHIP.map((person) => (
                <div key={person.name} className="rounded-xl border bg-card p-6 sm:p-8 text-center">
                  <div className="relative size-16 rounded-full overflow-hidden bg-muted mx-auto mb-4">
                    <SafeImage src={person.img} alt={person.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{person.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{person.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Join the Journey</h2>
              <p className="text-muted-foreground mb-8">Be part of the team that&apos;s redefining the future of motion.</p>
              <a href="/careers" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">View Careers</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
