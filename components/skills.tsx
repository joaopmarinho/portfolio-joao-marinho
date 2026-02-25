import { Code2, Layout, Brain, Container } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "REST APIs",
      "RabbitMQ",
      "Pytest",
      "Async Systems",
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Cypress",
      "Componentização",
    ],
  },
  {
    icon: Brain,
    title: "IA & Dados",
    skills: [
      "IA Generativa",
      "ETL Pipelines",
      "Big Data",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Data Mining",
    ],
  },
  {
    icon: Container,
    title: "DevOps",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Sentry",
      "Observabilidade",
      "Linux",
      "Git",
      "Microsserviços",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center gap-3">
          <Code2 className="h-5 w-5 text-primary" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Skills
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-mono text-sm font-semibold text-foreground tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground transition-colors hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
