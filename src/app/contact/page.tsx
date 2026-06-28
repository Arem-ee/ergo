import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ERGO Automotive. Find a studio, call a specialist, or send us a message.",
}

export default function ContactPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Contact</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">Get in Touch</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Contact Us</h1>
              <p className="text-muted-foreground text-lg max-w-xl">We&apos;re here to help. Whether you have a question about our vehicles, need support, or want to visit a studio.</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="grid gap-6">
                  <div className="rounded-xl border bg-card p-6">
                    <h2 className="text-lg font-bold mb-1">Phone</h2>
                    <p className="text-sm text-muted-foreground mb-3">Speak with a product specialist.</p>
                    <a href="tel:+1800ERGO" className="text-foreground font-medium hover:underline">1-800-ERGO</a>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h2 className="text-lg font-bold mb-1">Email</h2>
                    <p className="text-sm text-muted-foreground mb-3">We&apos;ll respond within 24 hours.</p>
                    <a href="mailto:support@ergo.com" className="text-foreground font-medium hover:underline">support@ergo.com</a>
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                    <h2 className="text-lg font-bold mb-1">Headquarters</h2>
                    <p className="text-sm text-muted-foreground">742 Innovation Drive<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-xl border bg-card p-6 sm:p-8">
                  <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="contact-first" className="block text-sm font-medium">First Name</label>
                        <input id="contact-first" type="text" placeholder="John" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-last" className="block text-sm font-medium">Last Name</label>
                        <input id="contact-last" type="text" placeholder="Doe" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-sm font-medium">Email</label>
                      <input id="contact-email" type="email" placeholder="john@example.com" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="block text-sm font-medium">Subject</label>
                      <select id="contact-subject" defaultValue="" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                        <option value="" disabled>Select a topic</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="press">Press Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="block text-sm font-medium">Message</label>
                      <textarea id="contact-message" rows={4} placeholder="How can we help?" className="flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-y" />
                    </div>
                    <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
