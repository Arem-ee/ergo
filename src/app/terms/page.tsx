import type { Metadata } from "next"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ERGO Automotive terms of service — the terms governing your use of our website and services.",
}

export default function TermsPage() {
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
                  <span className="text-foreground font-medium" aria-current="page">Terms of Service</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: June 1, 2026</p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl mx-auto prose prose-sm sm:prose-base dark:prose-invert">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing or using the ERGO Automotive website (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use the Website.</p>

              <h2>2. Use of the Website</h2>
              <p>You agree to use the Website only for lawful purposes and in accordance with these Terms. You must not use the Website in any way that could damage, disable, overburden, or impair our servers or interfere with any other party&apos;s use of the Website.</p>

              <h2>3. Intellectual Property</h2>
              <p>All content on the Website, including text, graphics, logos, images, software, and design elements, is the property of ERGO Automotive or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.</p>

              <h2>4. Vehicle Information</h2>
              <p>Vehicle specifications, features, pricing, and availability displayed on the Website are for informational purposes and are subject to change without notice. We make every effort to ensure accuracy but cannot guarantee that all information is current or error-free.</p>

              <h2>5. Test Drive and Purchase</h2>
              <p>Test drive requests and vehicle purchases are subject to additional terms and conditions provided at the time of booking or purchase. These Terms do not constitute an offer to sell or lease any vehicle.</p>

              <h2>6. Limitation of Liability</h2>
              <p>ERGO Automotive shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Website, even if we have been advised of the possibility of such damages.</p>

              <h2>7. Indemnification</h2>
              <p>You agree to indemnify and hold harmless ERGO Automotive, its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses arising out of your use of the Website or violation of these Terms.</p>

              <h2>8. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Website after changes constitutes acceptance of the modified Terms.</p>

              <h2>9. Governing Law</h2>
              <p>These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of San Francisco County, California.</p>

              <h2>10. Contact</h2>
              <p>For questions about these Terms, please contact us at <a href="mailto:legal@ergo.com" className="text-foreground font-medium hover:underline">legal@ergo.com</a> or write to ERGO Automotive, 742 Innovation Drive, San Francisco, CA 94105.</p>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
