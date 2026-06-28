"use client"

import { motion } from "framer-motion"
import { useConfiguratorStore } from "@/stores/configurator-store"
import { MODELS } from "@/constants/configurator"

function PricingSummary() {
  const color = useConfiguratorStore((s) => s.color)
  const wheels = useConfiguratorStore((s) => s.wheels)
  const interior = useConfiguratorStore((s) => s.interior)
  const pkg = useConfiguratorStore((s) => s.pkg)
  const pricing = useConfiguratorStore((s) => s.pricing)

  const currentModel = MODELS.find((m) => m.id === "ergo-s")

  return (
    <motion.div
      layout
      className="rounded-xl border bg-card p-6 sm:p-8"
    >
      <h3 className="text-lg font-bold mb-4">Configuration Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Model</span>
          <span className="font-medium">{currentModel?.name ?? "ERGO S"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Color</span>
          <span className="font-medium flex items-center gap-2">
            <span className="size-3 rounded-full inline-block" style={{ backgroundColor: color.hex }} />
            {color.label}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Wheels</span>
          <span className="font-medium">{wheels.label}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Interior</span>
          <span className="font-medium">{interior.label}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Package</span>
          <span className="font-medium">{pkg.label}</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-border space-y-2 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <span>Base Price</span>
          <span>${pricing.base.toLocaleString()}</span>
        </div>
        {pricing.color > 0 && (
          <div className="flex justify-between text-muted-foreground">
            <span>Color Upgrade</span>
            <span>+${pricing.color.toLocaleString()}</span>
          </div>
        )}
        {pricing.wheels > 0 && (
          <div className="flex justify-between text-muted-foreground">
            <span>Wheel Upgrade</span>
            <span>+${pricing.wheels.toLocaleString()}</span>
          </div>
        )}
        {pricing.interior > 0 && (
          <div className="flex justify-between text-muted-foreground">
            <span>Interior Upgrade</span>
            <span>+${pricing.interior.toLocaleString()}</span>
          </div>
        )}
        {pricing.pkg > 0 && (
          <div className="flex justify-between text-muted-foreground">
            <span>{pkg.label}</span>
            <span>+${pricing.pkg.toLocaleString()}</span>
          </div>
        )}
      </div>

      <motion.div
        key={pricing.total}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        className="mt-5 pt-4 border-t border-border flex justify-between items-center"
      >
        <span className="text-base font-bold">Total</span>
        <span className="text-2xl font-bold tracking-tight">${pricing.total.toLocaleString()}</span>
      </motion.div>

      <motion.button
        type="button"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        Reserve Now
      </motion.button>
    </motion.div>
  )
}

export { PricingSummary }
