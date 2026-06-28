"use client"

import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { useConfiguratorStore } from "@/stores/configurator-store"

function GlbModel() {
  const { scene } = useGLTF("/vehicles/vehicle-model.glb")
  const selectedColor = useConfiguratorStore((s) => s.color.hex)

  useEffect(() => {
    if (!scene) return

    scene.traverse((object: any) => {
      if (!object.isMesh) return

      const material = object.material
      if (!material) return

      // Handle both single materials and material arrays
      const materials = Array.isArray(material) ? material : [material]

      materials.forEach((mat: any) => {
        if (!mat) return

        // Skip only transparent materials (glass, windows)
        // Do NOT skip based on roughness — paint can be low roughness
        if (mat.transparent && mat.opacity < 0.5) return

        // Skip materials that are named explicitly as glass or chrome
        const name = (mat.name || "").toLowerCase()
        if (
          name.includes("glass") || name.includes("window") ||
          name.includes("lens") || name.includes("chrome") ||
          name.includes("light")
        ) return

        // Skip tires and rubber
        const matName = (mat.name || "").toLowerCase()
        const meshName = (object.name || "").toLowerCase()

        const isTire =
          matName.includes("tire") ||
          matName.includes("tyre") ||
          matName.includes("rubber") ||
          matName.includes("wheel_rubber") ||
          meshName.includes("tire") ||
          meshName.includes("tyre") ||
          // Rubber is very rough and very dark — detect by properties
          (mat.roughness > 0.8 && mat.metalness < 0.1 &&
           mat.color &&
           mat.color.r < 0.15 &&
           mat.color.g < 0.15 &&
           mat.color.b < 0.15)

        if (isTire) return

        // Clone the material if not already cloned to avoid
        // modifying the shared original
        if (!object.userData.materialCloned) {
          object.material = Array.isArray(material)
            ? materials.map((m: any) => m.clone())
            : mat.clone()
          object.userData.materialCloned = true
        }

        // Apply color
        const targetMat = Array.isArray(object.material)
          ? object.material
          : [object.material]

        targetMat.forEach((m: any) => {
          if (m.transparent && m.opacity < 0.5) return
          const matName2 = (m.name || "").toLowerCase()
          if (
            matName2.includes("glass") || matName2.includes("window") ||
            matName2.includes("lens") || matName2.includes("chrome") ||
            matName2.includes("light")
          ) return

          // Re-check tire on cloned material
          if (
            matName2.includes("tire") || matName2.includes("tyre") ||
            matName2.includes("rubber") || matName2.includes("wheel_rubber")
          ) return

          m.color.set(selectedColor)

          // Car paint properties — shiny, slightly metallic
          m.roughness = 0.3
          m.metalness = 0.6
          m.envMapIntensity = 1.0
          m.needsUpdate = true
        })
      })
    })
  }, [scene, selectedColor])

  return <primitive object={scene} />
}

export { GlbModel }
