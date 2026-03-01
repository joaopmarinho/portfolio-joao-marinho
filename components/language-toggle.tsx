"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  const toggleLocale = () => {
    setLocale(locale === "pt" ? "en" : "pt")
  }

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
      aria-label={`Switch to ${locale === "pt" ? "English" : "Portugues"}`}
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{locale === "pt" ? "PT" : "EN"}</span>
    </button>
  )
}
