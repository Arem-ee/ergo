import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "header" | "footer" | "main" | "nav"
  fluid?: boolean
}

function Container({
  className,
  as: Component = "div",
  fluid = false,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        !fluid && "max-w-7xl",
        className
      )}
      {...props}
    />
  )
}

export { Container }
export type { ContainerProps }
