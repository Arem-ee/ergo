import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "News",
  description: "The latest news, press releases, and announcements from ERGO Automotive.",
}

const ARTICLES = [
  { title: "ERGO S Achieves 5-Star Safety Rating", date: "June 12, 2026", category: "Safety", excerpt: "The ERGO S has earned a perfect 5-star safety rating from the NHTSA, making it one of the safest vehicles in its class." },
  { title: "ERGO Opens New Production Facility in Austin", date: "May 28, 2026", category: "Company", excerpt: "ERGO Automotive announces the opening of a state-of-the-art manufacturing facility in Austin, Texas, creating 2,000 new jobs." },
  { title: "ERGO R Sets New Lap Record at Laguna Seca", date: "May 15, 2026", category: "Performance", excerpt: "The ERGO R hypercar set a new production EV lap record at WeatherTech Raceway Laguna Seca with a time of 1:28.42." },
  { title: "ERGO Introduces Over-the-Air Performance Upgrade", date: "April 30, 2026", category: "Technology", excerpt: "New OTA update unlocks additional horsepower and improved efficiency for all ERGO models, available at no additional cost." },
  { title: "ERGO Partners with ChargePoint for Nationwide Network", date: "April 12, 2026", category: "Company", excerpt: "Strategic partnership to integrate ChargePoint's extensive charging network into the ERGO navigation and trip planning system." },
  { title: "ERGO GT Named Luxury Car of the Year", date: "March 25, 2026", category: "Awards", excerpt: "The ERGO GT has been awarded Luxury Car of the Year by Automotive Excellence Magazine, praised for its blend of comfort and performance." },
]

export default function NewsPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">News</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Press</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Latest News</h1>
              <p className="text-muted-foreground text-lg max-w-xl">Stay up to date with the latest announcements, press releases, and stories from ERGO Automotive.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6">
                {ARTICLES.map((article) => (
                  <article key={article.title} className="rounded-xl border bg-card p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{article.category}</span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight mb-2">{article.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <a href="#" className="inline-flex text-sm font-medium text-foreground hover:underline mt-3">Read more</a>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-muted/50">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Press Inquiries</h2>
              <p className="text-muted-foreground mb-8">Members of the press can contact our communications team.</p>
              <a href="mailto:press@ergo.com" className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Contact Press Team</a>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
