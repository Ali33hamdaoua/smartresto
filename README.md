# SmartResto.tech

Marketing website for **SmartResto** — presenting two restaurant solutions:

- **Commande en ligne** ([maisonburger.ca](https://maisonburger.ca)) — online ordering
- **Gestion de stock** ([inventory.maisonburger.ca](https://inventory.maisonburger.ca)) — inventory, suppliers, purchases, accounting & multi-branch management

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui and Framer Motion. Content is in **French**, structured for future FR/EN i18n.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # root <html lang="fr">, fonts, base metadata
│   ├── globals.css             # Tailwind v4 + design tokens (brand color)
│   ├── sitemap.ts / robots.ts  # SEO
│   ├── not-found.tsx
│   └── (marketing)/            # route group: shared navbar + footer
│       ├── layout.tsx
│       ├── page.tsx            # Home
│       ├── solutions/          # overview + 2 detail pages
│       ├── etude-de-cas/maison-burger/
│       ├── tarifs/ contact/ demo/
├── components/
│   ├── layout/                 # navbar, mobile-nav, footer
│   ├── sections/               # homepage + reusable page sections
│   ├── shared/                 # container, reveal, section-heading, page-header, lead-form
│   └── ui/                     # shadcn/ui primitives
├── config/site.ts             # name, url, email, external solution URLs
├── data/                      # navigation, solutions, features, faqs, why, pricing
├── lib/                       # utils (cn), seo (buildMetadata helper)
└── types/                     # shared TypeScript interfaces
```

## Conventions

- Files `kebab-case.tsx`, components `PascalCase`, route folders in **French** (SEO).
- All visible copy lives in `src/data/*` and section components — never hardcode strings elsewhere.
- Server Components by default; `"use client"` only where interactivity/animation is needed (navbar, mobile-nav, hero, reveal, lead-form).
- Per-page SEO via `buildMetadata()` in `src/lib/seo.ts`.

## Future i18n (FR/EN)

The groundwork is in place; when EN is needed:

1. Add an `[locale]` segment: `app/[locale]/(marketing)/...`.
2. Install `next-intl`, move `src/data/*` strings into `messages/fr.json` + `messages/en.json`.
3. The component tree stays unchanged — only the string source changes.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com) — Next.js is auto-detected (no config).
3. Add the domain `smartresto.tech` in **Settings → Domains** (apex + `www`); Vercel manages SSL.
4. `metadataBase` is set in `src/app/layout.tsx` → correct absolute canonical/OG URLs in production.
5. Every PR gets a preview deployment for review before merging to `main`.

> No backend, auth, database or payment is wired up. The contact/demo forms are UI-only
> (`src/components/shared/lead-form.tsx`) — connect them to a Server Action or API route later.
