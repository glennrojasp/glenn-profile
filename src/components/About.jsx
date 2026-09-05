export default function About({ t }) {
  return (
    <section id="about" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-terracotta">
            {t.about.eyebrow}
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">{t.about.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-sub">{t.about.body}</p>
        </div>
      </div>
    </section>
  )
}
