import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SkipToContent } from "@/components/ui/skip-to-content"
import { StructuredData } from "@/components/seo/structured-data"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ergo.com"
const siteName = "ERGO"
const siteDescription = "Premium automotive engineering redefined. Explore the future of motion with ERGO electric vehicles."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | The Future of Motion`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: ["ERGO", "electric vehicle", "luxury car", "automotive", "EV", "sports car", "electric sedan", "premium automotive"],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} | The Future of Motion`,
    description: siteDescription,
    url: siteUrl,
    images: [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | The Future of Motion`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SkipToContent />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
