import heroOrangutan from "../assets/hero-orangutan.jpg"
import { LINKS } from "../data/content"

export default function Hero({ t }) {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-sub">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            {t.hero.badge}
          </span>

          <h1 className="whitespace-pre-line font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            {t.hero.title}
          </h1>

          <p className="max-w-md text-base leading-relaxed text-sub">{t.hero.body}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#portfolio"
              className="rounded bg-terracotta px-5 py-3 text-sm font-semibold text-paper transition hover:bg-terracotta-dark"
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="rounded border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:border-terracotta hover:text-terracotta"
            >
              {t.hero.ctaContact}
            </a>

            <div className="flex items-center gap-3 pl-2">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sub transition hover:border-terracotta hover:text-terracotta"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zm7.13 0h4.31v2.02h.06c.6-1.13 2.06-2.33 4.25-2.33 4.55 0 5.39 2.99 5.39 6.88V23h-4.5v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V23h-4.5V8.25z" />
                </svg>
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-sub transition hover:border-terracotta hover:text-terracotta"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.27 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-sm">
            <img
              src={heroOrangutan}
              alt="Retrato de orangután, estilo pintura psicodélica"
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
