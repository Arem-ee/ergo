"use client"

import { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

function SimpleEnvironment() {
  const { scene, gl } = useThree()

  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 1024
    canvas.height = 512
    const ctx = canvas.getContext("2d")!

    const gradient = ctx.createLinearGradient(0, 0, 0, 512)
    gradient.addColorStop(0, "#e8e8e8")
    gradient.addColorStop(0.3, "#cccccc")
    gradient.addColorStop(0.6, "#888888")
    gradient.addColorStop(1, "#222222")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1024, 512)

    const texture = new THREE.CanvasTexture(canvas)
    texture.mapping = THREE.EquirectangularReflectionMapping

    const pmremGenerator = new THREE.PMREMGenerator(gl)
    pmremGenerator.compileEquirectangularShader()
    const envMap = pmremGenerator.fromEquirectangular(texture).texture
    texture.dispose()
    pmremGenerator.dispose()

    scene.environment = envMap
    scene.background = new THREE.Color("#111111")

    return () => {
      envMap.dispose()
      scene.environment = null
      scene.background = null
    }
  }, [scene, gl])

  return null
}

export { SimpleEnvironment }
