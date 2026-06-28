"use client"

import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { Accordion } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/constants/faq"

function FAQSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            description="Everything you need to know about owning an ERGO."
          />
          <Accordion items={FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  )
}

export { FAQSection }
