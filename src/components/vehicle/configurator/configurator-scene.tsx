"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows, PerspectiveCamera, Center } from "@react-three/drei"
import { GlbModel } from "./glb-model"
import { SimpleEnvironment } from "./simple-environment"

function ConfiguratorScene() {
  return (
    <div className="w-full h-full min-h-[350px] lg:min-h-[500px] lg:h-[500px] rounded-2xl bg-gradient-to-b from-zinc-900 to-black overflow-hidden relative">
      <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ width: "100%", height: "100%", display: "block" }}>
        <PerspectiveCamera makeDefault position={[0, 0.8, 4]} fov={45} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize={1024} />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} />
        <directionalLight position={[0, 6, 0]} intensity={0.3} />
        <spotLight position={[0, 5, 0]} angle={0.5} penumbra={0.8} intensity={0.5} />

        <Suspense fallback={null}>
          <Center scale={1.5} position={[0, -0.5, 0]}>
            <GlbModel />
          </Center>
        </Suspense>
        <SimpleEnvironment />
        <ContactShadows
          position={[0, -0.45, 0]}
          opacity={0.6}
          scale={6}
          blur={2.5}
          far={2}
        />

        <OrbitControls
          target={[0, 0, 0]}
          enablePan={false}
          enableZoom={true}
          minDistance={2.5}
          maxDistance={8}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate
          autoRotateSpeed={1}
          rotateSpeed={0.8}
          zoomSpeed={0.6}
        />
      </Canvas>
    </div>
  )
}

export { ConfiguratorScene }
