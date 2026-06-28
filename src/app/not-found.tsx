import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
      <div className="size-16 rounded-full bg-muted flex items-center justify-center">
        <span className="text-2xl font-bold text-muted-foreground">404</span>
      </div>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Page not found</h1>
        <p className="text-muted-foreground text-sm max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Check the URL or return home.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-foreground/90"
      >
        Return home
      </Link>
    </div>
  )
}
