export type Locale = "pt" | "en"

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiencia",
      projects: "Projetos",
      lab: "Lab",
      skills: "Skills",
      contact: "Contato",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      subtitle: "Software Engineer",
      name: "Joao Pedro Marinho",
      descriptionStart: "Construindo ",
      descriptionScalable: "sistemas escalaveis",
      descriptionMiddle: " e explorando ",
      descriptionAI: "IA Generativa",
      descriptionEnd:
        ". Especialista em backends assincronos em Python, com foco em performance, seguranca e lideranca de SDLC.",
      viewExperience: "Ver Experiencia",
      caseStudies: "Case Studies",
      scrollDown: "Rolar para baixo",
    },
    experience: {
      title: "Experiencia Profissional",
      items: [
        {
          role: "Engenheiro de Software",
          company: "Interest Engenharia",
          period: "Ago 2025 - Fev 2026",
          location: "Recife, PE",
          highlights: [
            "Redesenho de plataforma de analise de lucratividade com ganho de 3x na velocidade de tomada de decisao.",
            "Desenvolvimento e manutencao de APIs REST em Python (Flask) com foco em codigo testavel e performance.",
            "Lideranca tecnica: consultoria estrategica, direcionamento do time de TI e code reviews.",
            "Conteinerizacao com Docker para agilizar onboarding e reduzir bugs de ambiente.",
            "Implementacao de componentes Angular responsivos e modulares.",
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
            "Desenvolvimento em Python (Flask) e processamento assincrono com RabbitMQ.",
            "Mineracao de dados em Big Data e engenharia de pipelines de ETL.",
            "Lideranca de refatoracao em Angular com foco em modularizacao e UX.",
            "Automacao de CI/CD com GitHub Actions e conteinerizacao Docker.",
            "Remodelagem da suite de testes antiga em Pytest.",
            "Entrega de sistemas resilientes e aumento da produtividade do time de pesquisa.",
          ],
          stack: ["Python", "FastAPI", "Flask", "TypeScript", "RabbitMQ", "PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub Actions"],
        },
        {
          role: "Estagiario em Engenharia de Software",
          company: "Vlab - UFPE (Escolas Pelo Mundo)",
          period: "Mai 2023 - Set 2023",
          location: "Recife, PE",
          highlights: [
            "Desenvolvimento de ferramenta open-source para prevencao de code smells.",
            "Monitoria de Arquitetura de Computadores e Introducao a Computacao.",
            "Mentoria em C e integracao hardware-software.",
          ],
          stack: ["Python", "C", "Git"],
        },
      ],
    },
    caseStudies: {
      title: "Case Studies",
      items: [
        {
          tag: "Performance",
          title: "Redesenho de Plataforma Financeira",
          description:
            "Redesenho completo de uma plataforma de analise de lucratividade para uma empresa de engenharia. A nova arquitetura resultou em um ganho de 3x na velocidade de tomada de decisao, com reporte direto a executivos C-level.",
          metrics: [
            { label: "Performance", value: "3x" },
            { label: "Stack", value: "React + FastAPI" },
            { label: "Infra", value: "Docker + Sentry" },
          ],
          stack: ["React", "PostgreSQL", "FastAPI", "Docker", "Sentry", "GitHub Actions"],
        },
        {
          tag: "Big Data",
          title: "Sistema de Big Data & ETL (JuMP)",
          description:
            "Engenharia de pipelines de ETL para mineracao de dados em Big Data no projeto JuMP (Vlab UFPE). Processamento assincrono com RabbitMQ e backends em Flask, garantindo resiliencia e entrega continua para o time de pesquisa.",
          metrics: [
            { label: "Tipo", value: "ETL Pipeline" },
            { label: "Mensageria", value: "RabbitMQ" },
            { label: "Dados", value: "Big Data" },
          ],
          stack: ["Python", "Flask", "RabbitMQ", "PostgreSQL", "MongoDB", "Redis", "Docker"],
        },
        {
          tag: "Open Source",
          title: "Ferramenta de Prevencao de Code Smells",
          description:
            "Contribuicao open-source no desenvolvimento de uma ferramenta para deteccao e prevencao de code smells em repositorios de software. Parte da pesquisa em Qualidade de Software e Mineracao de Repositorios na UFPE.",
          metrics: [
            { label: "Tipo", value: "Open Source" },
            { label: "Pesquisa", value: "UFPE" },
            { label: "Foco", value: "Qualidade" },
          ],
          stack: ["Python", "Git", "AST Analysis"],
        },
      ],
    },
    personalProjects: {
      title: "Projetos Pessoais",
      comingSoon: "Em breve",
      linksComingSoon: "Links em breve",
      previousPage: "Pagina anterior",
      nextPage: "Proxima pagina",
      goToPage: "Ir para pagina",
      items: [
        {
          title: "Em breve",
          description:
            "Novos projetos pessoais serao adicionados aqui em breve. Fique atento para explorar experimentos com IA Generativa, automacoes e ferramentas open-source.",
          technologies: ["Python", "React", "AI"],
        },
        {
          title: "Em breve",
          description:
            "Projeto pessoal em desenvolvimento. Este espaco sera atualizado com detalhes, imagens e links assim que disponivel.",
          technologies: ["FastAPI", "Docker", "PostgreSQL"],
        },
        {
          title: "Em breve",
          description:
            "Mais um espaco reservado para projetos futuros. Acompanhe para novidades sobre ferramentas e contribuicoes open-source.",
          technologies: ["TypeScript", "Next.js", "Tailwind"],
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          title: "Backend",
          skills: ["Python", "FastAPI", "Flask", "Django", "REST APIs", "RabbitMQ", "Pytest", "Sistemas Assincronos"],
        },
        {
          title: "Frontend",
          skills: ["React", "Angular", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Cypress", "Componentizacao"],
        },
        {
          title: "IA & Dados",
          skills: ["IA Generativa", "ETL Pipelines", "Big Data", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Mineracao de Dados"],
        },
        {
          title: "DevOps",
          skills: ["Docker", "CI/CD", "GitHub Actions", "Sentry", "Observabilidade", "Linux", "Git", "Microsservicos"],
        },
      ],
    },
    footer: {
      contact: "Contato",
      letsChat: "Vamos conversar?",
      description: "Interessado em colaborar ou tem alguma oportunidade? Fique a vontade para entrar em contato.",
      copyright: "\u00a9 2026 Joao Pedro Marinho",
      location: "Recife, Pernambuco - Brasil",
    },
    languageModal: {
      title: "Which language do you choose?",
      pt: "Portugues (BR)",
      en: "English (US)",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      lab: "Lab",
      skills: "Skills",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      subtitle: "Software Engineer",
      name: "Joao Pedro Marinho",
      descriptionStart: "Building ",
      descriptionScalable: "scalable systems",
      descriptionMiddle: " and exploring ",
      descriptionAI: "Generative AI",
      descriptionEnd:
        ". Specialist in asynchronous Python backends, focused on performance, security, and SDLC leadership.",
      viewExperience: "View Experience",
      caseStudies: "Case Studies",
      scrollDown: "Scroll down",
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          role: "Software Engineer",
          company: "Interest Engenharia",
          period: "Aug 2025 - Feb 2026",
          location: "Recife, PE",
          highlights: [
            "Redesign of profitability analysis platform with 3x improvement in decision-making speed.",
            "Development and maintenance of REST APIs in Python (Flask) with focus on testable code and performance.",
            "Technical leadership: strategic consulting, IT team direction, and code reviews.",
            "Containerization with Docker to speed up onboarding and reduce environment bugs.",
            "Implementation of responsive and modular Angular components.",
            "Automated testing with Cypress (frontend) and Pytest (backend).",
          ],
          stack: ["Python", "Flask", "Angular", "PostgreSQL", "Docker", "Sentry", "Pytest", "Cypress"],
        },
        {
          role: "Software Engineer (JuMP Project)",
          company: "Vlab - UFPE",
          period: "Sep 2023 - Aug 2025",
          location: "Recife, PE",
          highlights: [
            "Development in Python (Flask) and asynchronous processing with RabbitMQ.",
            "Big Data mining and ETL pipeline engineering.",
            "Led Angular refactoring focused on modularization and UX.",
            "CI/CD automation with GitHub Actions and Docker containerization.",
            "Remodeling of legacy test suite in Pytest.",
            "Delivery of resilient systems and increased research team productivity.",
          ],
          stack: ["Python", "FastAPI", "Flask", "TypeScript", "RabbitMQ", "PostgreSQL", "MongoDB", "Redis", "Docker", "GitHub Actions"],
        },
        {
          role: "Software Engineering Intern",
          company: "Vlab - UFPE (Escolas Pelo Mundo)",
          period: "May 2023 - Sep 2023",
          location: "Recife, PE",
          highlights: [
            "Development of open-source tool for code smell prevention.",
            "Teaching assistant for Computer Architecture and Introduction to Computing.",
            "Mentoring in C and hardware-software integration.",
          ],
          stack: ["Python", "C", "Git"],
        },
      ],
    },
    caseStudies: {
      title: "Case Studies",
      items: [
        {
          tag: "Performance",
          title: "Financial Platform Redesign",
          description:
            "Complete redesign of a profitability analysis platform for an engineering company. The new architecture resulted in a 3x improvement in decision-making speed, reporting directly to C-level executives.",
          metrics: [
            { label: "Performance", value: "3x" },
            { label: "Stack", value: "React + FastAPI" },
            { label: "Infra", value: "Docker + Sentry" },
          ],
          stack: ["React", "PostgreSQL", "FastAPI", "Docker", "Sentry", "GitHub Actions"],
        },
        {
          tag: "Big Data",
          title: "Big Data & ETL System (JuMP)",
          description:
            "ETL pipeline engineering for Big Data mining in the JuMP project (Vlab UFPE). Asynchronous processing with RabbitMQ and Flask backends, ensuring resilience and continuous delivery for the research team.",
          metrics: [
            { label: "Type", value: "ETL Pipeline" },
            { label: "Messaging", value: "RabbitMQ" },
            { label: "Data", value: "Big Data" },
          ],
          stack: ["Python", "Flask", "RabbitMQ", "PostgreSQL", "MongoDB", "Redis", "Docker"],
        },
        {
          tag: "Open Source",
          title: "Code Smell Prevention Tool",
          description:
            "Open-source contribution in developing a tool for detecting and preventing code smells in software repositories. Part of the Software Quality and Repository Mining research at UFPE.",
          metrics: [
            { label: "Type", value: "Open Source" },
            { label: "Research", value: "UFPE" },
            { label: "Focus", value: "Quality" },
          ],
          stack: ["Python", "Git", "AST Analysis"],
        },
      ],
    },
    personalProjects: {
      title: "Personal Projects",
      comingSoon: "Coming soon",
      linksComingSoon: "Links coming soon",
      previousPage: "Previous page",
      nextPage: "Next page",
      goToPage: "Go to page",
      items: [
        {
          title: "Coming soon",
          description:
            "New personal projects will be added here soon. Stay tuned to explore experiments with Generative AI, automations, and open-source tools.",
          technologies: ["Python", "React", "AI"],
        },
        {
          title: "Coming soon",
          description:
            "Personal project in development. This space will be updated with details, images, and links once available.",
          technologies: ["FastAPI", "Docker", "PostgreSQL"],
        },
        {
          title: "Coming soon",
          description:
            "Another space reserved for future projects. Follow along for news about tools and open-source contributions.",
          technologies: ["TypeScript", "Next.js", "Tailwind"],
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          title: "Backend",
          skills: ["Python", "FastAPI", "Flask", "Django", "REST APIs", "RabbitMQ", "Pytest", "Async Systems"],
        },
        {
          title: "Frontend",
          skills: ["React", "Angular", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Cypress", "Componentization"],
        },
        {
          title: "AI & Data",
          skills: ["Generative AI", "ETL Pipelines", "Big Data", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Data Mining"],
        },
        {
          title: "DevOps",
          skills: ["Docker", "CI/CD", "GitHub Actions", "Sentry", "Observability", "Linux", "Git", "Microservices"],
        },
      ],
    },
    footer: {
      contact: "Contact",
      letsChat: "Let's chat?",
      description: "Interested in collaborating or have an opportunity? Feel free to get in touch.",
      copyright: "\u00a9 2026 Joao Pedro Marinho",
      location: "Recife, Pernambuco - Brazil",
    },
    languageModal: {
      title: "Which language do you choose?",
      pt: "Portugues (BR)",
      en: "English (US)",
    },
  },
} as const

export type Translations = (typeof translations)["pt"]
