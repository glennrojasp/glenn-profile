export default function Services({ t }) {
  return (
    <section id="services" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs font-bold uppercase tracking-wider text-terracotta">
          {t.services.eyebrow}
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{t.services.title}</h2>
        <p className="mt-3 max-w-xl text-sm text-sub">{t.services.intro}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {t.services.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-line bg-white p-6">
              <div className="font-display text-base font-bold">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-sub">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
