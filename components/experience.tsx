import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Engenheiro de Software",
    company: "Interest Engenharia",
    period: "Ago 2025 - Fev 2026",
    location: "Recife, PE",
    highlights: [
      "Redesenho de plataforma de análise de lucratividade com ganho de 3x na velocidade de tomada de decisão.",
      "Desenvolvimento e manutenção de APIs REST em Python (Flask) com foco em código testável e performance.",
      "Liderança técnica: consultoria estratégica, direcionamento do time de TI e code reviews.",
      "Conteinerização com Docker para agilizar onboarding e reduzir bugs de ambiente.",
      "Implementação de componentes Angular responsivos e modulares.",
      "Testes automatizados com Cypress (frontend) e Pytest (backend).",
    ],
    stack: ["Python", "Flask", "Angular", "PostgreSQL", "Docker", "Sentry", "Pytest", "Cypress"],
  },
  {
    role: "Engenheiro de Software (Projeto JuMP)",
    company: "Vlab - UFPE",
    period: "Set 2023 - Ago 2025",
    location: "Recife, PE",
    highlights: [
      "Desenvolvimento em Python (Flask) e processamento assíncrono com RabbitMQ.",
      "Mineração de dados em Big Data e engenharia de pipelines de ETL.",
      "Liderança de refatoração em Angular com foco em modularização e UX.",
      "Automação de CI/CD com GitHub Actions e conteinerização Docker.",
      "Remodelagem da suíte de testes antiga em Pytest.",
      "Entrega de sistemas resilientes e aumento da produtividade do time de pesquisa.",
    ],
    stack: ["Python", "FastAPI", "Flask", "TypeScript", "RabbitMQ", "PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub Actions"],
  },
  {
    role: "Estagiário em Engenharia de Software",
    company: "Vlab - UFPE (Escolas Pelo Mundo)",
    period: "Mai 2023 - Set 2023",
    location: "Recife, PE",
    highlights: [
      "Desenvolvimento de ferramenta open-source para prevenção de code smells.",
      "Monitoria de Arquitetura de Computadores e Introdução à Computação.",
      "Mentoria em C e integração hardware-software.",
    ],
    stack: ["Python", "C", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Experiência Profissional
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[11px]" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background md:h-[23px] md:w-[23px] md:top-0.5 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary md:h-2 md:w-2" />
                </div>

                <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-0.5 font-mono text-xs text-muted-foreground shrink-0">
                      <span>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.highlights.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-primary tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
