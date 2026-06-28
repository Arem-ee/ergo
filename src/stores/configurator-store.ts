import { create } from "zustand"
import type { ConfiguratorColor, ConfiguratorWheel, ConfiguratorInterior, ConfiguratorPackage, PricingBreakdown } from "@/types/configurator"
import { COLORS, WHEELS, INTERIORS, PACKAGES, BASE_PRICE } from "@/constants/configurator"

interface ConfiguratorStore {
  model: string
  color: ConfiguratorColor
  wheels: ConfiguratorWheel
  interior: ConfiguratorInterior
  pkg: ConfiguratorPackage
  pricing: PricingBreakdown
  setModel: (model: string) => void
  setColor: (color: ConfiguratorColor) => void
  setWheels: (wheels: ConfiguratorWheel) => void
  setInterior: (interior: ConfiguratorInterior) => void
  setPackage: (pkg: ConfiguratorPackage) => void
  reset: () => void
}

function calculatePricing(
  color: ConfiguratorColor,
  wheels: ConfiguratorWheel,
  interior: ConfiguratorInterior,
  pkg: ConfiguratorPackage
): PricingBreakdown {
  return {
    base: BASE_PRICE,
    color: color.price,
    wheels: wheels.price,
    interior: interior.price,
    pkg: pkg.price,
    total: BASE_PRICE + color.price + wheels.price + interior.price + pkg.price,
  }
}

export const useConfiguratorStore = create<ConfiguratorStore>((set) => ({
  model: "ergo-s",
  color: COLORS[0],
  wheels: WHEELS[0],
  interior: INTERIORS[0],
  pkg: PACKAGES[0],
  pricing: calculatePricing(COLORS[0], WHEELS[0], INTERIORS[0], PACKAGES[0]),

  setModel: (model) => set({ model }),

  setColor: (color) =>
    set((state) => ({
      color,
      pricing: calculatePricing(color, state.wheels, state.interior, state.pkg),
    })),

  setWheels: (wheels) =>
    set((state) => ({
      wheels,
      pricing: calculatePricing(state.color, wheels, state.interior, state.pkg),
    })),

  setInterior: (interior) =>
    set((state) => ({
      interior,
      pricing: calculatePricing(state.color, state.wheels, interior, state.pkg),
    })),

  setPackage: (pkg) =>
    set((state) => ({
      pkg,
      pricing: calculatePricing(state.color, state.wheels, state.interior, pkg),
    })),

  reset: () =>
    set({
      model: "ergo-s",
      color: COLORS[0],
      wheels: WHEELS[0],
      interior: INTERIORS[0],
      pkg: PACKAGES[0],
      pricing: calculatePricing(COLORS[0], WHEELS[0], INTERIORS[0], PACKAGES[0]),
    }),
}))
