"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { CaseStudies } from "@/components/case-studies"
import { PersonalProjects } from "@/components/personal-projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"
import { LanguageSelectorModal } from "@/components/language-selector-modal"

export default function Home() {
  return (
    <>
      <LanguageSelectorModal />
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-5xl px-0">
          <div className="h-px bg-border" />
        </div>
        <Experience />
        <div className="mx-auto max-w-5xl px-0">
          <div className="h-px bg-border" />
        </div>
        <CaseStudies />
        <div className="mx-auto max-w-5xl px-0">
          <div className="h-px bg-border" />
        </div>
        <PersonalProjects />
        <div className="mx-auto max-w-5xl px-0">
          <div className="h-px bg-border" />
        </div>
        <Skills />
      </main>
      <Footer />
    </>
  )
}
