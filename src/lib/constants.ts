export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "ERGO",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ergo.com",
  tagline: "The Future of Motion",
  description: "Premium automotive engineering redefined.",
} as const

export const APP_VERSION = "0.1.0" as const
