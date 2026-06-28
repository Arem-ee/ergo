"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "@/components/animations"
import { handleImageError } from "@/lib/image"
import type { Vehicle } from "@/types"

interface VehicleCardProps {
  vehicle: Vehicle
  index: number
}

function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <Reveal variant="slideUp" delay={index * 0.1}>
      <motion.div
        className="group relative flex flex-col"
        whileHover={prefersReduced ? undefined : { y: -6 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted"
          whileHover={prefersReduced ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={vehicle.image}
            alt={`${vehicle.name} - ${vehicle.tagline}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
          />
        </motion.div>

        <div className="mt-5 sm:mt-6 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{vehicle.name}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.tagline}</p>
            </div>
            <p className="text-sm text-muted-foreground whitespace-nowrap">{vehicle.price}</p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {vehicle.description}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-lg font-semibold">{vehicle.specs.horsepower}</p>
              <p className="text-xs text-muted-foreground">Horsepower</p>
            </div>
            <div>
              <p className="text-lg font-semibold">{vehicle.specs.range}</p>
              <p className="text-xs text-muted-foreground">Range</p>
            </div>
          </div>

          <motion.a
            href="/models"
            className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-6 text-sm font-medium mt-2"
            whileHover={prefersReduced ? undefined : { scale: 1.03, backgroundColor: "var(--muted)" }}
            whileTap={prefersReduced ? undefined : { scale: 0.97 }}
          >
            Explore {vehicle.name}
          </motion.a>
        </div>
      </motion.div>
    </Reveal>
  )
}

export { VehicleCard }
export type { VehicleCardProps }
