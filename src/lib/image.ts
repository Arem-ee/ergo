import type { StaticImageData } from "next/image"
import { assets } from "@/data/assets"

type ImageSrc = string | StaticImageData

function handleImageError(e: React.SyntheticEvent<HTMLImageElement>): void {
  const img = e.currentTarget
  if (img.src !== assets.fallback) {
    img.src = assets.fallback
  }
}

function getVehicleImage(index: number): string {
  return assets.vehicles[index] ?? assets.fallback
}

function getUserImage(index: number): string {
  return assets.users[index] ?? assets.fallback
}

export { handleImageError, getVehicleImage, getUserImage }
export type { ImageSrc }
