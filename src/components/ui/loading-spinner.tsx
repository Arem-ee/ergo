import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <svg
      className={cn(
        "animate-spin text-muted-foreground",
        size === "sm" && "size-4",
        size === "md" && "size-6",
        size === "lg" && "size-8",
        className
      )}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" className="opacity-30" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" className="opacity-80" strokeDashoffset="8" />
    </svg>
  )
}

export { LoadingSpinner }
export type { LoadingSpinnerProps }
