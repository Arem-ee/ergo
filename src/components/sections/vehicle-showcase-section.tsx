"use client"

import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { VehicleCard } from "@/components/vehicle/vehicle-card"
import { VEHICLES } from "@/constants/vehicles"

function VehicleShowcaseSection() {
  return (
    <section id="models" className="py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionTitle
          label="Models"
          title="Choose Your ERGO"
          description="Every ERGO is engineered from the ground up to deliver an unmatched blend of performance, range, and luxury."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {VEHICLES.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export { VehicleShowcaseSection }
