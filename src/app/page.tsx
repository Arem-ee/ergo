import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ConfiguratorSection } from "@/components/sections/configurator-section"
import { VehicleShowcaseSection } from "@/components/sections/vehicle-showcase-section"
import { PerformanceSection } from "@/components/sections/performance-section"
import { TechnologySection } from "@/components/sections/technology-section"
import { InteriorSection } from "@/components/sections/interior-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TestDriveSection } from "@/components/sections/test-drive-section"
import { FAQSection } from "@/components/sections/faq-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <HeroSection />
        <ConfiguratorSection />
        <VehicleShowcaseSection />
        <PerformanceSection />
        <TechnologySection />
        <InteriorSection />
        <TestimonialsSection />
        <TestDriveSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
