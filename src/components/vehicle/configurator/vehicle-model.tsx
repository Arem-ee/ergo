"use client"

import { useRef, useMemo } from "react"
import * as THREE from "three"
import type { Mesh, Group } from "three"
import { useConfiguratorStore } from "@/stores/configurator-store"

function CarBody({ color }: { color: string }) {
  const bodyColor = new THREE.Color(color)

  return (
    <group>
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[1.8, 0.3, 4.2]} />
        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.8} />
      </mesh>

      <mesh position={[0, 0.55, -0.6]} castShadow>
        <boxGeometry args={[1.7, 0.2, 2.2]} />
        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.8} />
      </mesh>

      <mesh position={[0, 0.7, 0.4]} castShadow>
        <boxGeometry args={[1.65, 0.25, 1.8]} />
        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.8} />
      </mesh>

      <mesh position={[0, 0.45, -1.85]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.6, 0.2, 0.4]} />
        <meshStandardMaterial color={bodyColor} roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  )
}

function Cabin() {
  return (
    <mesh position={[0, 0.85, -0.4]} castShadow>
      <boxGeometry args={[1.5, 0.25, 1.8]} />
      <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.2} />
    </mesh>
  )
}

function Windows() {
  const glassMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#88bbdd",
    metalness: 0.1,
    roughness: 0.05,
    transparent: true,
    opacity: 0.35,
    envMapIntensity: 0.5,
  }), [])

  return (
    <group>
      <mesh position={[0, 0.95, -0.65]} material={glassMat}>
        <boxGeometry args={[1.35, 0.15, 0.8]} />
      </mesh>
      <mesh position={[0, 0.95, -0.1]} material={glassMat}>
        <boxGeometry args={[1.35, 0.15, 0.8]} />
      </mesh>
      <mesh position={[0.77, 0.85, -0.4]} rotation={[0, 0, 0.3]} material={glassMat}>
        <planeGeometry args={[0.05, 0.25]} />
      </mesh>
      <mesh position={[-0.77, 0.85, -0.4]} rotation={[0, 0, -0.3]} material={glassMat}>
        <planeGeometry args={[0.05, 0.25]} />
      </mesh>
    </group>
  )
}

function Wheels() {
  const tireMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    roughness: 0.9,
    metalness: 0.1,
  }), [])

  const rimMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#c0c0c0",
    roughness: 0.2,
    metalness: 0.8,
  }), [])

  const positions = [
    [-0.7, 0.15, -1.3],
    [0.7, 0.15, -1.3],
    [-0.7, 0.15, 1.3],
    [0.7, 0.15, 1.3],
  ]

  return (
    <group>
      {positions.map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} material={tireMat}>
            <torusGeometry args={[0.28, 0.12, 16, 24]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} material={rimMat}>
            <cylinderGeometry args={[0.18, 0.18, 0.08, 24]} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0.06]} material={rimMat}>
            <ringGeometry args={[0.04, 0.18, 12]} />
          </mesh>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <mesh
              key={angle}
              rotation={[0, 0, Math.PI / 2]}
              position={[
                0,
                0,
                0.06,
              ]}
              material={rimMat}
            >
              <boxGeometry args={[0.18, 0.03, 0.005]} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}

function Headlights() {
  const lightMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    emissive: "#ffffff",
    emissiveIntensity: 0.3,
    roughness: 0.1,
    metalness: 0.1,
  }), [])

  return (
    <group>
      <mesh position={[-0.5, 0.35, -2.12]} material={lightMat}>
        <boxGeometry args={[0.25, 0.1, 0.05]} />
      </mesh>
      <mesh position={[0.5, 0.35, -2.12]} material={lightMat}>
        <boxGeometry args={[0.25, 0.1, 0.05]} />
      </mesh>
    </group>
  )
}

function Taillights() {
  const tailMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#cc0000",
    emissive: "#cc0000",
    emissiveIntensity: 0.15,
    roughness: 0.3,
    metalness: 0.2,
  }), [])

  return (
    <group>
      <mesh position={[-0.5, 0.35, 2.12]} material={tailMat}>
        <boxGeometry args={[0.25, 0.08, 0.05]} />
      </mesh>
      <mesh position={[0.5, 0.35, 2.12]} material={tailMat}>
        <boxGeometry args={[0.25, 0.08, 0.05]} />
      </mesh>
    </group>
  )
}

function VehicleModel() {
  const groupRef = useRef<Group>(null!)
  const color = useConfiguratorStore((s) => s.color.hex)

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      <CarBody color={color} />
      <Cabin />
      <Windows />
      <Wheels />
      <Headlights />
      <Taillights />
    </group>
  )
}

export { VehicleModel }
