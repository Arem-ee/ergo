import type { NavigationItem } from "@/types"

export const SITE_CONFIG = {
  name: "ERGO",
  tagline: "The Future of Motion",
  description: "Premium automotive engineering redefined.",
  url: "https://ergo.com",
} as const

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Models", href: "/models" },
  { label: "Design", href: "/design" },
  { label: "Technology", href: "/technology" },
  { label: "Experience", href: "/experience" },
] as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

export const TRANSITION_DURATIONS = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.75,
  slowest: 1,
} as const
