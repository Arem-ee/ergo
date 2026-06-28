"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased flex items-center justify-center p-4">
        <div className="text-center max-w-md" role="alert">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Critical Error</h1>
          <p className="text-muted-foreground text-sm mb-6">
            A critical error occurred. Please refresh the page or try again later.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/90"
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex h-10 items-center justify-center rounded-full border border-input px-6 text-sm font-medium hover:bg-muted"
            >
              Refresh page
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
