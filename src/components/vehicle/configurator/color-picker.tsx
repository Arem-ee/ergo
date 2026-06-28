"use client"

import { cn } from "@/lib/utils"
import { useConfiguratorStore } from "@/stores/configurator-store"
import { COLORS } from "@/constants/configurator"

function ColorPicker() {
  const selectedColor = useConfiguratorStore((s) => s.color)
  const setColor = useConfiguratorStore((s) => s.setColor)

  return (
    <div>
      <p className="text-sm font-semibold mb-3">Exterior Color</p>
      <div className="flex flex-wrap gap-3">
        {COLORS.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setColor(c)}
            className="flex flex-col items-center gap-1.5 group p-2 -m-2"
            title={c.label}
          >
            <div
              className={cn(
                "size-8 rounded-full border-2 transition-all duration-200",
                selectedColor.id === c.id
                  ? "border-foreground scale-110"
                  : "border-transparent group-hover:border-muted-foreground/50"
              )}
              style={{ backgroundColor: c.hex }}
            />
            <span className={cn(
              "text-xs leading-tight text-center",
              selectedColor.id === c.id ? "text-foreground font-medium" : "text-muted-foreground"
            )}>
              {c.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export { ColorPicker }
