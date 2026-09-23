# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Personal portfolio website (single-page) built to showcase projects for HR/recruiters and clients. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config via `eslint-config-next`)

No test runner is configured in this repo yet.

Component installation goes through the shadcn CLI (`components.json` is already configured), not manual copy-paste — e.g. `npx shadcn add <component>`.

## Architecture

- **App Router**: routes/pages live in `src/app`. This Next.js version (16.3.5) may differ from training data — see `AGENTS.md` for the rule on consulting `node_modules/next/dist/docs/` before using any Next.js API.
- **Path alias**: `@/*` → `src/*` (`tsconfig.json`).
- **UI primitives are built on `@base-ui/react`, not Radix.** Components in `src/components/ui` (e.g. `button.tsx`) wrap `@base-ui/react/*` primitives with `class-variance-authority` for variants.
- **`cn` is the npm package `cn`, not a hand-rolled clsx+tailwind-merge helper.** `src/lib/utils.ts` just re-exports it: `export { cn } from "cn"`.
- **shadcn config** (`components.json`): style `base-nova`, base color `neutral`, CSS variables on, no class prefix, icon library `lucide-react`, RSC enabled. Aliases map to `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.
- **Two icon libraries, different purposes**: `lucide-react` is the shadcn-configured icon library for generic UI icons; `react-icons` (specifically the `react-icons/si` Simple Icons subpath) is used for brand/tech logos, e.g. the Tech Stack section's pill icons (`src/components/sections/stack.tsx`). Prefer `lucide-react` for UI chrome and `react-icons/si` only when a recognizable brand mark is needed.
- **Theming**: `src/app/globals.css` defines the whole design system as OKLCH CSS variables on `:root` and `.dark` (background, foreground, card, primary, border, chart colors, sidebar colors, radius scale), consumed by Tailwind v4 via `@theme inline`. Dark mode is a `.dark` class variant (`@custom-variant dark (&:is(.dark *))`), not `prefers-color-scheme`. Imports: `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`.
  - **Dark/light toggle** uses `next-themes`. `src/components/theme-provider.tsx` re-exports `ThemeProvider` from `next-themes`; it's mounted in `src/app/layout.tsx` wrapping `{children}` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange` (and `<html>` has `suppressHydrationWarning`).
  - The toggle component is `src/components/theme-toggle.tsx` (`ThemeToggle`) — reads/writes theme via the `useTheme()` hook (`resolvedTheme`, `setTheme`) from `next-themes`, and guards the pre-hydration render with `useSyncExternalStore` to avoid a mismatch (renders a disabled button until mounted).
  - Convention: always go through `useTheme()` from `next-themes` to read or change the theme — never read/toggle the `.dark` class on `document.documentElement` manually.
  - `--brand` token holds the orange accent color used for CTAs and highlights.
  - `--font-sans` and `--font-mono` are now wired to the Geist font variables via `@theme inline`.
  - `--background` and `--card` tokens are tuned to match the off-white palette from the design mockup.
- **Fonts**: Geist Sans and Geist Mono, loaded via `next/font/google` in `src/app/layout.tsx`, exposed as `--font-geist-sans` / `--font-geist-mono` CSS variables on `<html>`.
- **`src/lib/site-config.ts`** is the shared data source for nav links, social links, and identity data, used across sections. Read/update this data here — don't hardcode it in individual components.
- **Navigation** uses anchor scroll (`#section-id`) to sections within the single page, not separate routing.

## Design reference

`design-reference/` holds the target visual design as static mockups (light/dark, desktop/mobile) — check these before building UI. The design is a single-page portfolio with numbered, monospace-labeled sections (e.g. `01 / BIO`, `02 / STACK`) in this order: Hero (name/title/tagline + CV/GitHub CTAs + photo), Philosophy/Bio, Tech Stack (pill badges), Featured Projects (card grid), Work Experience (timeline), Endorsements (quotes), Technical Writing/Journal (article list), Contact footer. Visual language: sharp/minimal cards, thin dividing rules between sections, an orange accent color for primary CTAs and highlights, generous whitespace.
