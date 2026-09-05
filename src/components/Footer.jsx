import OrangutanLogo from "./OrangutanLogo"

export default function Footer({ t }) {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm text-sub sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 font-display font-bold text-ink">
          <OrangutanLogo size={22} />
          glenn rojas
        </div>
        <div>{t.footer.tagline}</div>
        <div>© {new Date().getFullYear()} Glenn Rojas. {t.footer.rights}</div>
      </div>
    </footer>
  )
}
