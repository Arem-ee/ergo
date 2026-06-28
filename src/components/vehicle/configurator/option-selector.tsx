"use client"

import { cn } from "@/lib/utils"

interface Option {
  id: string
  label: string
  price: number
  description?: string
  features?: string[]
}

interface OptionSelectorProps {
  label: string
  options: readonly Option[]
  selectedId: string
  onSelect: (option: Option) => void
  showPrice?: boolean
}

function OptionSelector({ label, options, selectedId, onSelect, showPrice = true }: OptionSelectorProps) {
  return (
    <div>
      <p className="text-sm font-semibold mb-3">{label}</p>
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const isSelected = selectedId === option.id
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option)}
              className={cn(
                "flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-all duration-200",
                isSelected
                  ? "border-foreground bg-foreground/5"
                  : "border-border hover:border-muted-foreground/40 bg-transparent"
              )}
            >
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "text-sm font-medium",
                  isSelected ? "text-foreground" : "text-muted-foreground"
                )}>
                  {option.label}
                </p>
                {option.description && (
                  <p className="text-xs text-muted-foreground/70 mt-0.5 line-clamp-1">
                    {option.description}
                  </p>
                )}
                {option.features && option.features.length > 0 && isSelected && (
                  <ul className="mt-2 space-y-1">
                    {option.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
                          <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {showPrice && (
                <span className={cn(
                  "text-sm font-medium ml-4 whitespace-nowrap",
                  option.price > 0 ? "text-foreground" : "text-muted-foreground/50"
                )}>
                  {option.price === 0 ? "Included" : `+$${option.price.toLocaleString()}`}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { OptionSelector }
