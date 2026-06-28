import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  function FormField({ label, error, className, id, ...props }, ref) {
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-foreground"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            "flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus:ring-destructive/40",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

export { FormField }
export type { FormFieldProps }
