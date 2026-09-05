# Glenn Rojas — Portfolio Site

A bilingual (ES/EN) personal portfolio site for Glenn Rojas, Front End Developer (React, AEM), who also offers web & graphic design.

Built with **Vite + React + Tailwind CSS v4**. Content is based on `Main.pdf` (real bio, skills, portfolio links, services).

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are output to `dist/` — upload that folder's contents to any static host (Vercel, Netlify, GitHub Pages, etc.) to deploy.

## Project structure

```
src/
  components/     Navbar, Hero, About, Skills, Portfolio, Services, Contact, Footer, OrangutanLogo
  data/content.js Bilingual (ES/EN) copy + real links (LinkedIn, GitHub, portfolio projects)
  assets/         Hero artwork (orangutan painting)
  index.css       Tailwind import + fonts + design tokens (color palette, fonts)
public/
  favicon.svg     Orangutan icon mark
```

## Editing content

Everything text-based lives in `src/data/content.js` — both the `es` and `en` dictionaries, plus the `LINKS` (email, LinkedIn, GitHub) and `PORTFOLIO_ITEMS` (project name/url/gradient) objects. Update the placeholder email in `LINKS.email` to your real address before publishing.

## Design tokens

Defined in `src/index.css` under `@theme`:

| Token | Hex | Use |
|---|---|---|
| `terracotta` | `#A6420E` | Primary accent — buttons, links |
| `terracotta-dark` | `#7A2F09` | Hover states |
| `amber` | `#D98A3D` | Gradient highlight |
| `teal` | `#0E7490` | Rare accent |
| `ink` | `#1E1712` | Body text |
| `paper` | `#FAF7F3` | Background |

Fonts: **Space Grotesk** (headings) + **Work Sans** (body), loaded from Google Fonts.
