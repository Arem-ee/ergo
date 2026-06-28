"use client"

import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { Carousel } from "@/components/ui/carousel"
import { TestimonialCard } from "@/components/sections/testimonial-card"
import { Reveal } from "@/components/animations"
import { TESTIMONIALS } from "@/constants/testimonials"

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <Reveal variant="slideUp">
          <SectionTitle
            label="Testimonials"
            title="Driven by Passion"
            description="Hear from those who experience ERGO every day. Real stories from real owners."
          />
        </Reveal>

        <Reveal variant="slideUp" delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <Carousel
              slides={TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
              autoPlayInterval={5000}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export { TestimonialsSection }
