import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Contact
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
            Let's talk?
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Interested in collaborating or have an opportunity? Feel free to get in touch.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/jpammarinho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:jpammarinho@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            {"© 2026 João Pedro Marinho"}
          </p>
          <p className="font-mono text-xs text-muted-foreground/50">
            {"Recife, Pernambuco - Brazil"}
          </p>
        </div>
      </div>
    </footer>
  )
}
