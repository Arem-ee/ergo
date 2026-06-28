import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article" | "header" | "footer"
  container?: boolean
  fullWidth?: boolean
  withPadding?: boolean
}

function SectionWrapper({
  className,
  as: Component = "section",
  container = true,
  fullWidth = false,
  withPadding = true,
  children,
  ...props
}: SectionWrapperProps) {
  const content = (
    <Component
      className={cn(
        "relative",
        withPadding && "py-16 sm:py-24 lg:py-32",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )

  if (container) {
    return <Container>{content}</Container>
  }

  return content
}

export { SectionWrapper }
export type { SectionWrapperProps }
