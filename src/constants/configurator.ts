import type { ConfiguratorColor, ConfiguratorWheel, ConfiguratorInterior, ConfiguratorPackage, Hotspot } from "@/types/configurator"

export const BASE_PRICE = 65000

export const COLORS: ConfiguratorColor[] = [
  { id: "black", name: "black", hex: "#1a1a1a", label: "Obsidian Black", price: 0, description: "Deep, lustrous black with metallic flakes" },
  { id: "white", name: "white", hex: "#f5f5f5", label: "Pearl White", price: 1500, description: "Multi-coat pearl white with ceramic finish" },
  { id: "red", name: "red", hex: "#8b1a1a", label: "Inferno Red", price: 2000, description: "Rich crimson red with deep gloss" },
  { id: "blue", name: "blue", hex: "#1a3a6b", label: "Midnight Blue", price: 1800, description: "Deep ocean blue with subtle metallic" },
  { id: "silver", name: "silver", hex: "#c0c0c0", label: "Lunar Silver", price: 1200, description: "Bright silver with platinum undertones" },
]

export const WHEELS: ConfiguratorWheel[] = [
  { id: "sport", name: "sport", label: "Sport Wheels", price: 0, description: "19-inch alloy wheels with all-season tires" },
  { id: "premium", name: "premium", label: "Premium Wheels", price: 2500, description: "20-inch forged alloy wheels with performance tires" },
  { id: "aero", name: "aero", label: "Aero Wheels", price: 3500, description: "21-inch aerodynamic wheels with low-rolling-resistance tires" },
]

export const INTERIORS: ConfiguratorInterior[] = [
  { id: "black-leather", name: "black-leather", label: "Black Leather", price: 0, description: "Premium black Nappa leather with contrast stitching" },
  { id: "white-leather", name: "white-leather", label: "White Leather", price: 3000, description: "Ivory white Nappa leather with ventilated seats" },
  { id: "performance", name: "performance", label: "Performance Interior", price: 4500, description: "Alcantara and carbon fiber with racing seats" },
]

export const PACKAGES: ConfiguratorPackage[] = [
  {
    id: "standard",
    name: "standard",
    label: "Standard Package",
    price: 0,
    description: "Essential features for everyday driving",
    features: ["LED headlights", "17-inch touchscreen", "Premium audio", "Heated seats"],
  },
  {
    id: "performance",
    name: "performance",
    label: "Performance Package",
    price: 8000,
    description: "Track-ready upgrades for maximum performance",
    features: ["Sport-tuned suspension", "Carbon ceramic brakes", "Track mode", "Performance tires", "Launch control"],
  },
  {
    id: "luxury",
    name: "luxury",
    label: "Luxury Package",
    price: 12000,
    description: "Ultimate comfort and convenience",
    features: ["Semi-aniline leather", "Massaging seats", "Premium audio pro", "Quad-zone climate", "Panoramic roof", "Air suspension"],
  },
]

export const INTERIOR_HOTSPOTS: Hotspot[] = [
  { id: "dashboard", x: 50, y: 30, title: "Digital Dashboard", description: "17-inch curved OLED display with haptic feedback and adaptive night mode. The intuitive interface puts every control at your fingertips." },
  { id: "seats", x: 20, y: 60, title: "Premium Seating", description: "Heated, ventilated, and massaging seats wrapped in Nappa leather with 22-way power adjustment for the perfect driving position." },
  { id: "audio", x: 75, y: 45, title: "Sound System", description: "22-speaker immersive audio system with Dolby Atmos. Active noise cancellation creates a serene cabin environment." },
  { id: "climate", x: 50, y: 70, title: "Climate Control", description: "Quad-zone automatic climate control with HEPA filtration and biometric cabin sensing that adjusts temperature to each occupant." },
]

export const MODELS = [
  { id: "ergo-s", name: "ERGO S", basePrice: 65000 },
  { id: "ergo-x", name: "ERGO X", basePrice: 84900 },
  { id: "ergo-r", name: "ERGO R", basePrice: 129900 },
  { id: "ergo-gt", name: "ERGO GT", basePrice: 99900 },
]
