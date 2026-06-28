"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { INTERIOR_HOTSPOTS } from "@/constants/configurator"
import type { Hotspot } from "@/types/configurator"
import { assets } from "@/data/assets"
import { handleImageError } from "@/lib/image"

function HotspotPulse() {
  return (
    <span className="absolute inset-0 rounded-full border border-foreground/40 animate-ping" style={{ animationDuration: "2.5s" }} />
  )
}

function HotspotCard({ hotspot }: { hotspot: Hotspot }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:bottom-4 sm:w-72 rounded-xl border bg-background/95 backdrop-blur-md p-4 shadow-lg"
    >
      <h4 className="text-sm font-semibold mb-1">{hotspot.title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{hotspot.description}</p>
    </motion.div>
  )
}

function InteriorHotspots() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted order-2 lg:order-1">
      <Image
        src={assets.interior}
        alt="ERGO interior cockpit"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        onError={handleImageError}
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent z-10">
        <p className="text-white/80 text-sm font-medium">Interactive Interior</p>
        <p className="text-white/50 text-xs">Tap a hotspot to learn more</p>
      </div>

      {INTERIOR_HOTSPOTS.map((hotspot) => {
        const isActive = activeHotspot?.id === hotspot.id
        return (
          <div
            key={hotspot.id}
            className="absolute z-10"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <button
              type="button"
              onClick={() => setActiveHotspot(isActive ? null : hotspot)}
              className={cn(
                "relative size-11 rounded-full flex items-center justify-center transition-all duration-200",
                isActive
                  ? "bg-foreground scale-110"
                  : "bg-background/80 hover:bg-background"
              )}
              aria-label={`Learn about ${hotspot.title}`}
            >
              <span className="text-sm font-bold">+</span>
              {!isActive && <HotspotPulse />}
            </button>
          </div>
        )
      })}

      <AnimatePresence>
        {activeHotspot && <HotspotCard hotspot={activeHotspot} />}
      </AnimatePresence>
    </div>
  )
}

export { InteriorHotspots }
