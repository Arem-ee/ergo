"use client"

import { ColorPicker } from "./color-picker"
import { OptionSelector } from "./option-selector"
import { useConfiguratorStore } from "@/stores/configurator-store"
import { WHEELS, INTERIORS, PACKAGES } from "@/constants/configurator"

function ConfiguratorPanel() {
  const wheels = useConfiguratorStore((s) => s.wheels)
  const interior = useConfiguratorStore((s) => s.interior)
  const pkg = useConfiguratorStore((s) => s.pkg)
  const setWheels = useConfiguratorStore((s) => s.setWheels)
  const setInterior = useConfiguratorStore((s) => s.setInterior)
  const setPackage = useConfiguratorStore((s) => s.setPackage)

  return (
    <div className="space-y-8">
      <ColorPicker />
      <OptionSelector
        label="Wheels"
        options={WHEELS}
        selectedId={wheels.id}
        onSelect={(opt) => setWheels(opt as typeof wheels)}
      />
      <OptionSelector
        label="Interior"
        options={INTERIORS}
        selectedId={interior.id}
        onSelect={(opt) => setInterior(opt as typeof interior)}
      />
      <OptionSelector
        label="Package"
        options={PACKAGES}
        selectedId={pkg.id}
        onSelect={(opt) => setPackage(opt as typeof pkg)}
        showPrice={true}
      />
    </div>
  )
}

export { ConfiguratorPanel }
