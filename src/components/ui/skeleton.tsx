import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular"
}

function Skeleton({ className, variant = "text", ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-muted",
        variant === "text" && "h-4 w-full rounded",
        variant === "circular" && "rounded-full",
        variant === "rectangular" && "rounded-xl",
        className
      )}
      {...props}
    />
  )
}

function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <Skeleton variant="rectangular" className="h-40 w-full" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <div className="grid grid-cols-2 gap-4 pt-2">
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
      </div>
      <Skeleton className="h-10 w-32" />
    </div>
  )
}

function SectionSkeleton() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Skeleton className="h-3 w-24 mx-auto" />
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Skeleton, CardSkeleton, SectionSkeleton }
export type { SkeletonProps }
