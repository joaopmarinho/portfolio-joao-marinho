"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import type { Locale } from "@/lib/i18n/translations"

export function LanguageSelectorModal() {
  const { hasChosenLanguage, setLocale, t } = useLanguage()

  if (hasChosenLanguage) {
    return null
  }

  const handleSelect = (locale: Locale) => {
    setLocale(locale)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-sm rounded-lg border border-border bg-card p-8">
        <h2 className="text-center font-mono text-sm tracking-[0.2em] text-primary uppercase mb-8">
          {t.languageModal.title}
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSelect("pt")}
            className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary font-mono text-xs font-bold text-primary">
              PT
            </span>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {t.languageModal.pt}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                Portugues
              </p>
            </div>
          </button>

          <button
            onClick={() => handleSelect("en")}
            className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary font-mono text-xs font-bold text-primary">
              EN
            </span>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {t.languageModal.en}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                English
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
