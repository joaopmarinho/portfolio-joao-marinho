"use client"

import { useState } from "react"
import { Rocket, Github, ExternalLink, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"

interface PersonalProject {
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

const PROJECTS_PER_PAGE = 3

const projects: PersonalProject[] = [
  {
    title: "Coming soon",
    description:
      "New personal projects will be added here soon. Stay tuned to explore experiments with Generative AI, automations and open-source tools.",
    technologies: ["Python", "React", "AI"],
  },
  {
    title: "Coming soon",
    description:
      "Personal project in development. This space will be updated with details, images and links once available.",
    technologies: ["FastAPI", "Docker", "PostgreSQL"],
  },
  {
    title: "Coming soon",
    description:
      "Another slot reserved for future projects. Follow for updates about tools and open-source contributions.",
    technologies: ["TypeScript", "Next.js", "Tailwind"],
  },
]

function ProjectCard({ project }: { project: PersonalProject }) {
  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-primary/30">
      {/* Image area */}
      <div className="relative h-44 bg-secondary/30 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <ImageIcon className="h-8 w-8" />
            <span className="font-mono text-[10px] uppercase tracking-widest">
              Preview
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-primary tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 font-mono text-[11px] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="font-mono text-[11px] text-muted-foreground/50 italic">
              Coming up soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function PersonalProjects() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  const currentProjects = projects.slice(
    page * PROJECTS_PER_PAGE,
    (page + 1) * PROJECTS_PER_PAGE
  )

  return (
    <section id="personal-projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Rocket className="h-5 w-5 text-primary" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Personal Projects
            </h2>
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs text-muted-foreground">
                {page + 1}/{totalPages}
              </span>
              <button
                onClick={() =>
                  setPage((p) => Math.min(totalPages - 1, p + 1))
                }
                disabled={page === totalPages - 1}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
                aria-label="Próxima página"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, i) => (
            <ProjectCard key={`${page}-${i}`} project={project} />
          ))}
        </div>

        {/* Page dots */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === page
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Ir para página ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
