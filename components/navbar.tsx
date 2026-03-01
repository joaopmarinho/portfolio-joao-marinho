"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.about, href: "#hero" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.lab, href: "#personal-projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm font-semibold text-primary tracking-wider">
          {"<JPM />"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-border" />
          <LanguageToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
