import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ERGO Automotive privacy policy — how we collect, use, and protect your personal data.",
}

export default function PrivacyPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Privacy Policy</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: June 1, 2026</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto prose prose-sm sm:prose-base dark:prose-invert">
              <h2>1. Information We Collect</h2>
              <p>ERGO Automotive (&quot;ERGO,&quot; &quot;we,&quot; &quot;us&quot;) collects information you provide directly, such as your name, email address, phone number, and mailing address when you request a test drive, contact our support team, or create an account.</p>
              <p>We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior through cookies and similar technologies.</p>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to: provide and improve our products and services; process your test drive requests and inquiries; communicate with you about your ERGO ownership experience; send you marketing communications (with your consent); comply with legal obligations; and protect our rights and property.</p>

              <h2>3. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential. We may also disclose information when required by law or to protect our rights.</p>

              <h2>4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information, including encryption in transit and at rest, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.</p>

              <h2>5. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to opt out of the sale of your personal information and to restrict or object to certain processing activities.</p>

              <h2>6. Cookies</h2>
              <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings.</p>

              <h2>7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

              <h2>8. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date.</p>

              <h2>9. Contact</h2>
              <p>If you have questions about this privacy policy or our data practices, please contact us at <a href="mailto:privacy@ergo.com" className="text-foreground font-medium hover:underline">privacy@ergo.com</a> or write to ERGO Automotive, 742 Innovation Drive, San Francisco, CA 94105.</p>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
