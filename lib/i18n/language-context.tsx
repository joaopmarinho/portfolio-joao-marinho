"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "./translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  hasChosenLanguage: boolean
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const STORAGE_KEY = "portfolio-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt")
  const [hasChosenLanguage, setHasChosenLanguage] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored === "pt" || stored === "en") {
      setLocaleState(stored)
      setHasChosenLanguage(true)
    } else {
      setHasChosenLanguage(false)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale === "pt" ? "pt-BR" : "en-US"
    }
  }, [locale, mounted])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setHasChosenLanguage(true)
    localStorage.setItem(STORAGE_KEY, newLocale)
  }

  const t = translations[locale]

  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, hasChosenLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
