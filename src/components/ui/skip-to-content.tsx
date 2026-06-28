function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:inline-flex focus:h-10 focus:items-center focus:justify-center focus:rounded-lg focus:bg-foreground focus:px-4 focus:text-sm focus:font-medium focus:text-background focus:outline-none"
    >
      Skip to main content
    </a>
  )
}

export { SkipToContent }
