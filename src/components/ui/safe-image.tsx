"use client"

import Image from "next/image"
import type { ImageProps } from "next/image"
import { handleImageError } from "@/lib/image"

type SafeImageProps = Omit<ImageProps, "onError">

function SafeImage(props: SafeImageProps) {
  return <Image {...props} onError={handleImageError} />
}

export { SafeImage }
