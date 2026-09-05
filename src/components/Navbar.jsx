import { useState } from "react"
import OrangutanLogo from "./OrangutanLogo"

const SECTIONS = ["about", "skills", "portfolio", "services", "contact"]

export default function Navbar({ t, lang, onToggleLang }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <OrangutanLogo size={28} />
          glenn rojas
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          {SECTIONS.map((key) => (
            <li key={key}>
              <a href={`#${key}`} className="transition hover:text-terracotta">
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={onToggleLang}
            className="rounded border border-line px-3 py-1.5 text-xs font-semibold tracking-wide text-sub transition hover:border-terracotta hover:text-terracotta"
            aria-label="Toggle language"
          >
            {t.langLabel}
          </button>
          <a
            href="#contact"
            className="rounded bg-terracotta px-4 py-2 text-sm font-semibold text-paper transition hover:bg-terracotta-dark"
          >
            {t.ctaNav}
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {SECTIONS.map((key) => (
              <li key={key}>
                <a href={`#${key}`} onClick={() => setOpen(false)}>
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={onToggleLang}
              className="rounded border border-line px-3 py-1.5 text-xs font-semibold text-sub"
            >
              {t.langLabel}
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded bg-terracotta px-4 py-2 text-sm font-semibold text-paper"
            >
              {t.ctaNav}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
