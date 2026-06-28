import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground transition-colors">{item.label}</Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export { Breadcrumbs }
export type { BreadcrumbsProps, BreadcrumbItem }
