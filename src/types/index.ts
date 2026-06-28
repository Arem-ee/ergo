export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface Vehicle {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  href: string
  price: string
  specs: {
    horsepower: string
    topSpeed: string
    acceleration: string
    range: string
  }
}

export interface Spec {
  label: string
  value: string
}

export interface VehicleDetails {
  id: string
  name: string
  tagline: string
  description: string
  images: string[]
  specs: Spec[]
  colors: ColorOption[]
}

export interface ColorOption {
  name: string
  hex: string
  label: string
}

export type ButtonVariant = "primary" | "secondary" | "ghost"
export type ButtonSize = "sm" | "md" | "lg" | "xl"

export interface ThemeState {
  mode: "light" | "dark"
  toggle: () => void
  setMode: (mode: "light" | "dark") => void
}
