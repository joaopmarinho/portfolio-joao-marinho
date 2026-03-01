"use client"

import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-primary uppercase">
          {t.hero.subtitle}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
          {t.hero.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          {t.hero.descriptionStart}
          <span className="text-primary font-medium">{t.hero.descriptionScalable}</span>
          {t.hero.descriptionMiddle}
          <span className="text-primary font-medium">{t.hero.descriptionAI}</span>
          {t.hero.descriptionEnd}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.hero.viewExperience}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {t.hero.caseStudies}
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 font-mono text-xs text-muted-foreground">
          <span>Python</span>
          <span className="text-border">{"/"}</span>
          <span>React</span>
          <span className="text-border">{"/"}</span>
          <span>PostgreSQL</span>
          <span className="text-border">{"/"}</span>
          <span>Docker</span>
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label={t.hero.scrollDown}
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
