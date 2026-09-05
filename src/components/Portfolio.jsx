import { PORTFOLIO_ITEMS } from "../data/content"

export default function Portfolio({ t }) {
  return (
    <section id="portfolio" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-bold uppercase tracking-wider text-terracotta">
          {t.portfolio.eyebrow}
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{t.portfolio.title}</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item) => {
            const copy = t.portfolio.items[item.key]
            return (
              <a
                key={item.key}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-xl border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`h-36 bg-linear-to-br ${item.gradient}`} />
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <div className="font-display text-base font-bold">{copy.name}</div>
                    <div className="mt-1 text-sm text-sub">{copy.desc}</div>
                  </div>
                  <span className="mt-1 text-terracotta transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
