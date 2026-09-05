import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { content } from "./data/content"

function App() {
  const [lang, setLang] = useState("es")
  const t = content[lang]

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar t={t} lang={lang} onToggleLang={() => setLang((l) => (l === "es" ? "en" : "es"))} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Portfolio t={t} />
        <Services t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
