"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows, PerspectiveCamera } from "@react-three/drei"
import { VehicleModel } from "./vehicle-model"
import { SimpleEnvironment } from "./simple-environment"

function ConfiguratorScene() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[3.5, 1.8, 4]} fov={35} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize={1024} />
        <directionalLight position={[-3, 3, -3]} intensity={0.4} />
        <directionalLight position={[0, 6, 0]} intensity={0.3} />
        <spotLight position={[0, 5, 0]} angle={0.5} penumbra={0.8} intensity={0.5} />

        <VehicleModel />
        <SimpleEnvironment />
        <ContactShadows
          position={[0, -0.45, 0]}
          opacity={0.6}
          scale={6}
          blur={2.5}
          far={2}
        />

        <OrbitControls
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
