"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/animations"
import { navigationLinks } from "@/data/navigation"

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <Reveal variant="slideUp" className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">ERGO</Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Premium automotive engineering redefined. The future of motion, available today.
            </p>
            <div className="flex gap-4 mt-6">
              {navigationLinks.social.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </Reveal>

          {(["company", "support", "legal"] as const).map((category) => (
            <Reveal key={category} variant="slideUp">
              <h4 className="text-sm font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {navigationLinks[category].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal variant="slideUp">
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} ERGO Automotive. All rights reserved.
              </p>
              <form
                className="flex w-full sm:w-auto gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Subscribe to newsletter"
                  className="flex h-12 w-full sm:w-56 rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <motion.button
                  type="submit"
                  className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  )
}

export { Footer }
