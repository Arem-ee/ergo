"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Unhandled error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4" role="alert">
      <div className="size-16 rounded-full bg-destructive/10 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-destructive">
          <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 8v6M14 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Something went wrong</h1>
        <p className="text-muted-foreground text-sm max-w-md">
          An unexpected error occurred. Our team has been notified. Please try again or return home.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-foreground/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-full border border-input px-6 text-sm font-medium transition-colors hover:bg-muted"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
