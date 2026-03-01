import { TrendingUp, Database, Shield } from "lucide-react"

const cases = [
  {
    icon: TrendingUp,
    tag: "Performance",
    title: "Finance Platform Redesign",
    description:
      "Complete redesign of a profitability analysis platform for an engineering company. The new architecture delivered a 3x improvement in decision-making speed, reporting directly to C-level executives.",
    metrics: [
      { label: "Performance", value: "3x" },
      { label: "Stack", value: "React + FastAPI" },
      { label: "Infrastructure", value: "Docker + Sentry" },
    ],
    stack: ["React", "PostgreSQL", "FastAPI", "Docker", "Sentry", "GitHub Actions"],
  },
  {
    icon: Database,
    tag: "Big Data",
    title: "Big Data & ETL System (JuMP)",
    description:
      "Built ETL pipelines for data mining in a Big Data environment for the JuMP project (Vlab UFPE). Implemented asynchronous processing with RabbitMQ and Flask backends, ensuring resilience and continuous delivery for the research team.",
    metrics: [
      { label: "Type", value: "ETL Pipeline" },
      { label: "Messaging", value: "RabbitMQ" },
      { label: "Data", value: "Big Data" },
    ],
    stack: ["Python", "Flask", "RabbitMQ", "PostgreSQL", "MongoDB", "Redis", "Docker"],
  },
  {
    icon: Shield,
    tag: "Open Source",
    title: "Code Smell Prevention Tool",
    description:
      "Open-source contribution to a tool for detecting and preventing code smells in software repositories. Part of research on Software Quality and Mining Software Repositories at UFPE.",
    metrics: [
      { label: "Type", value: "Open Source" },
      { label: "Research", value: "UFPE" },
      { label: "Focus", value: "Quality" },
    ],
    stack: ["Python", "Git", "AST Analysis"],
  },
]

export function CaseStudies() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center gap-3">
          <Database className="h-5 w-5 text-primary" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Case Studies
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={i}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                    {c.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {c.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {c.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 rounded-lg bg-secondary/50 p-4">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="text-center">
                      <p className="font-mono text-lg font-bold text-primary">
                        {m.value}
                      </p>
                      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wide">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-primary tracking-wide"
                    >
                      {tech}
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
