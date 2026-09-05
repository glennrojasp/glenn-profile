import { LINKS } from "../data/content"

export default function Contact({ t }) {
  return (
    <section id="contact" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-bold uppercase tracking-wider text-terracotta">
          {t.contact.eyebrow}
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{t.contact.title}</h2>
        <p className="mt-3 max-w-md text-sm text-sub">{t.contact.body}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${LINKS.email}`}
            className="flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold transition hover:border-terracotta hover:text-terracotta"
          >
            {t.contact.emailLabel} — {LINKS.email}
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold transition hover:border-terracotta hover:text-terracotta"
          >
            {t.contact.linkedinLabel}
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold transition hover:border-terracotta hover:text-terracotta"
          >
            {t.contact.githubLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
