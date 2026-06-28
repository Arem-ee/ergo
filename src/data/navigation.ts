export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export const navigationLinks = {
  nav: [
    { label: "Models", href: "/models" },
    { label: "Technology", href: "/technology" },
    { label: "Performance", href: "/performance" },
    { label: "Interior", href: "/interior" },
    { label: "Pricing", href: "/pricing" },
  ] satisfies NavLink[],
  bookTestDrive: { label: "Book Test Drive", href: "/book-test-drive" } satisfies NavLink,
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
  ] satisfies NavLink[],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Help Center", href: "/help" },
  ] satisfies NavLink[],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ] satisfies NavLink[],
  social: [
    { label: "Instagram", href: "https://instagram.com/ergo", external: true },
    { label: "X", href: "https://x.com/ergo", external: true },
    { label: "YouTube", href: "https://youtube.com/ergo", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/company/ergo", external: true },
  ] satisfies NavLink[],
}
