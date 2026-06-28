export interface ConfiguratorColor {
  id: string
  name: string
  hex: string
  label: string
  price: number
  description: string
}

export interface ConfiguratorWheel {
  id: string
  name: string
  label: string
  price: number
  description: string
}

export interface ConfiguratorInterior {
  id: string
  name: string
  label: string
  price: number
  description: string
}

export interface ConfiguratorPackage {
  id: string
  name: string
  label: string
  price: number
  description: string
  features: string[]
}

export interface ConfiguratorState {
  model: string
  color: ConfiguratorColor
  wheels: ConfiguratorWheel
  interior: ConfiguratorInterior
  pkg: ConfiguratorPackage
}

export interface PricingBreakdown {
  base: number
  color: number
  wheels: number
  interior: number
  pkg: number
  total: number
}

export interface Hotspot {
  id: string
  x: number
  y: number
  title: string
  description: string
}

export interface TestDriveFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  vehicle: string
  date: string
}
