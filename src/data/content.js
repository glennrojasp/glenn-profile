// Bilingual content dictionary for the site.
// Source: Glenn Rojas's own content (Main.pdf) + real profile links.

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/glenn-rojas-pineda-99287531",
  github: "https://github.com/glennrojasp",
  email: "hello@glennrojas.com",
}

export const PORTFOLIO_ITEMS = [
   {
    key: "bodaErickVale",
    url: "https://www.bodaericyvale.com/",
    gradient: "from-[#A6420E] to-[#3a1204]",
  },
  {
    key: "pinvar",
    url: "https://pinvar.vercel.app",
    gradient: "from-[#D98A3D] to-[#A6420E]",
  },
  {
    key: "coach",
    url: "https://olympus-iota.vercel.app",
    gradient: "from-[#0E7490] to-[#164e63]",
  },
  {
    key: "crown",
    url: "https://hilarious-sprite-695b8d.netlify.app",
    gradient: "from-[#3a3128] to-[#1E1712]",
  },
]

export const SKILL_BADGES = [
  { key: "react", code: "R", color: "#0E7490" },
  { key: "js", code: "JS", color: "#D98A3D" },
  { key: "java", code: "Jv", color: "#A6420E" },
  { key: "aem", code: "AEM", color: "#7A2F09" },
]

export const TECHNOLOGIES = ["Bootstrap", "Sass", "Git", "Firebase", "MongoDB", "JHipster"]

export const content = {
  es: {
    nav: { about: "Sobre mí", skills: "Habilidades", portfolio: "Portafolio", services: "Servicios", contact: "Contacto" },
    langLabel: "EN",
    ctaNav: "Contacto",
    hero: {
      badge: "Disponible para nuevos proyectos",
      title: "Front End Developer —\nReact, AEM y diseño con cuidado",
      body: "Soy Glenn Rojas. Desarrollo interfaces con React y Adobe Experience Manager, y también diseño sitios y piezas gráficas para quienes buscan algo más personal.",
      ctaWork: "Ver mi trabajo",
      ctaContact: "Contactarme",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Sobre mí",
      body: "Soy Front End Developer con experiencia en Back End, bases de datos y UX. Mi manejo de Adobe Creative Cloud y Adobe Experience Manager (AEM) me permite crear experiencias digitales atractivas y fáciles de usar. He trabajado en todo el ciclo de desarrollo de software y me adapto rápido a nuevos equipos — aprendo rápido y me gusta mantener las cosas simples.",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Habilidades",
      badgeLabels: {
        react: "React Developer",
        js: "JavaScript Developer",
        java: "Java Developer",
        aem: "AEM Front Developer",
      },
      techEyebrow: "Tecnologías",
    },
    portfolio: {
      eyebrow: "Portafolio",
      title: "Portafolio",
      items: {
        pinvar: { name: "PINVAR S.A.", desc: "Sitio de servicios y electrodomésticos para el hogar" },
        coach: { name: "Glenn Personal Coach", desc: "Servicios de fitness y página de gimnasio" },
        bodaErickVale: { name: "Boda Erick y Vale", desc: "Página de Boda y RVSP" },
        crown: { name: "Crown Clothing App", desc: "App y tienda de ropa" },
      },
    },
    services: {
      eyebrow: "También ofrezco",
      title: "También ofrezco",
      intro: "Además de desarrollo, hago diseño web y gráfico para quienes buscan algo más personal que una plantilla.",
      items: [
        { title: "Desarrollo Web", desc: "Sitios rápidos y a la medida, con React o Adobe Experience Manager (AEM)." },
        { title: "Diseño Web & Gráfico", desc: "Identidad visual, logos y sitios de presentación para negocios pequeños." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      body: "¿Tenés un proyecto en mente? Escribime por correo o encontrame en LinkedIn y GitHub.",
      emailLabel: "Correo",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Front End Developer & diseño — con base en Costa Rica.",
    },
  },
  en: {
    nav: { about: "About", skills: "Skills", portfolio: "Portfolio", services: "Services", contact: "Contact" },
    langLabel: "ES",
    ctaNav: "Contact",
    hero: {
      badge: "Available for new projects",
      title: "Front End Developer —\nReact, AEM, and design done with care",
      body: "I'm Glenn Rojas. I build interfaces with React and Adobe Experience Manager, and I also design sites and graphics for people who want something more personal.",
      ctaWork: "See my work",
      ctaContact: "Get in touch",
    },
    about: {
      eyebrow: "About me",
      title: "About me",
      body: "I'm a Front End Developer with experience in Back End, databases, and UX. My command of Adobe Creative Cloud and Adobe Experience Manager (AEM) lets me build digital experiences that are engaging and easy to use. I've worked across the full software development cycle and adapt quickly to new teams — I learn fast and like to keep things simple.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Skills",
      badgeLabels: {
        react: "React Developer",
        js: "JavaScript Developer",
        java: "Java Developer",
        aem: "AEM Front Developer",
      },
      techEyebrow: "Technologies",
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Portfolio",
      items: {
        pinvar: { name: "PINVAR S.A.", desc: "Home appliances & services site" },
        coach: { name: "Glenn Personal Coach", desc: "Fitness services and gym landing page" },
        bodaErickVale: { name: "Boda Erick y Vale", desc: "Página de Boda y RVSP" },
        crown: { name: "Crown Clothing App", desc: "Clothing store app" },
      },
    },
    services: {
      eyebrow: "Also available for",
      title: "Also available for",
      intro: "Besides development, I do web and graphic design for people who want something more personal than a template.",
      items: [
        { title: "Web Development", desc: "Fast, custom sites, with React or Adobe Experience Manager (AEM)." },
        { title: "Web & Graphic Design", desc: "Visual identity, logos, and presentation sites for small businesses." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      body: "Have a project in mind? Email me or find me on LinkedIn and GitHub.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Front End Developer & design — based in Costa Rica.",
    },
  },
}
