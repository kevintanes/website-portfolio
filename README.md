# Website Portfolio

A single-page personal portfolio. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

Sections: hero, bio/philosophy, tech stack, featured projects, work experience, endorsements, technical writing, and contact — all on one page, navigated via anchor scroll rather than separate routes.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens (colors, radius, etc.) defined as CSS variables in `src/app/globals.css`
- **shadcn/ui** (`base-nova` style) — built on top of `@base-ui/react`, not Radix
- **next-themes** — dark/light mode
- **next-intl** — English/Indonesian i18n, locale stored in a cookie (not `/en` or `/id` in the URL, since this is a single-page site)
- **lucide-react** for UI icons, **react-icons/si** for brand/tech logos in the tech stack section

## Running the project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

No test runner is set up in this repo yet.

## Project structure

- `src/app` — routes (App Router)
- `src/components/sections` — each section of the page (hero, stack, projects, etc.)
- `src/components/ui` — shadcn primitives (wrappers around `@base-ui/react`)
- `src/lib/site-config.ts` — structural data shared across the app: nav links, social links, identity. Anything that needs translated copy (projects, experience, etc.) gets a stable `id` here, with the actual copy living in `messages/`
- `messages/en.json` & `messages/id.json` — all translatable copy; keys must stay in sync between the two files
- `design-reference/` — design mockups (light/dark, desktop/mobile) used as the visual reference

## Adding shadcn components

Through the CLI, not copy-paste:

```bash
npx shadcn add <component>
```

## Note for anyone developing here

This Next.js version (16) diverges quite a bit from what most AI training data assumes — if you're using an AI assistant to write code here, have it read `node_modules/next/dist/docs/` first before calling any Next.js API (this is already enforced via `AGENTS.md`).
