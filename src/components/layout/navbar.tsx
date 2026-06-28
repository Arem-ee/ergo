"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { navigationLinks } from "@/data/navigation"
import { analytics } from "@/lib/analytics"
import { useFocusTrap } from "@/hooks/use-focus-trap"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const menuRef = useFocusTrap(menuOpen)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleNavClick = useCallback((label: string) => {
    analytics.navClick(label)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        layout
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "bg-background/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)] dark:shadow-[0_1px_0_rgba(255,255,255,0.05)]"
              : "bg-transparent"
          )}
        >
          <Container
            as="nav"
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
            )}
            aria-label="Main navigation"
          >
            <motion.a
              href="/"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="ERGO home"
            >
              <span className={cn(
                "text-xl font-bold tracking-tight transition-colors duration-300",
                !scrolled && "text-white"
              )}>
                ERGO
              </span>
            </motion.a>

            <div className="hidden lg:flex items-center gap-8" role="menubar">
              {navigationLinks.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => handleNavClick(item.label)}
                  className={cn(
                    "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href={navigationLinks.bookTestDrive.href}
                className={cn(
                  "hidden sm:inline-flex h-9 items-center justify-center rounded-full px-5 text-sm font-medium transition-all",
                  scrolled
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-white text-black hover:bg-white/90"
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {navigationLinks.bookTestDrive.label}
              </motion.a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className={cn(
                  "lg:hidden inline-flex items-center justify-center size-11 rounded-lg transition-colors",
                  scrolled ? "hover:bg-muted" : "hover:bg-white/10"
                )}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                  className={cn("transition-colors", !scrolled && "text-white")}
                  aria-hidden="true"
                >
                  <path d="M2.5 5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </Container>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col h-full p-6 safe-bottom overflow-y-auto overscroll-contain"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-bold tracking-tight">ERGO</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center size-11 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close menu"
                  autoFocus
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2 flex-1" aria-label="Mobile navigation">
                {navigationLinks.nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => { setMenuOpen(false); handleNavClick(item.label) }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    className="text-2xl font-semibold py-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href={navigationLinks.bookTestDrive.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-all hover:bg-foreground/90"
              >
                {navigationLinks.bookTestDrive.label}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { Navbar }
