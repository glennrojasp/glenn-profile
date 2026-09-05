import { SKILL_BADGES, TECHNOLOGIES } from "../data/content"

export default function Skills({ t }) {
  return (
    <section id="skills" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-bold uppercase tracking-wider text-terracotta">
          {t.skills.eyebrow}
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{t.skills.title}</h2>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {SKILL_BADGES.map((b) => (
            <div key={b.key} className="flex flex-col items-center gap-3 text-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-bold text-white"
                style={{ backgroundColor: b.color }}
              >
                {b.code}
              </div>
              <div className="text-sm font-semibold">{t.skills.badgeLabels[b.key]}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sub">
            {t.skills.techEyebrow}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {TECHNOLOGIES.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
