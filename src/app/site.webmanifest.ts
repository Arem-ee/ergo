import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ERGO Automotive",
    short_name: "ERGO",
    description: "Premium automotive engineering redefined.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  }
}
