import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "gsap",
      "lucide-react",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
}

export default nextConfig
