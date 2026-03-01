# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — Start Next.js dev server
- `pnpm build` — Production build
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint

No test runner is configured yet.

## Architecture

Next.js 16 App Router project with React 19, TypeScript (strict mode), and the shadcn/ui component stack.

**Key patterns:**

- **App Router with RSC** — All components are Server Components by default; use `"use client"` only when needed
- **Tailwind CSS v4 (CSS-first)** — Theme tokens are defined in `app/globals.css` via `@theme inline { ... }` and CSS custom properties using `oklch` color space. There is no `tailwind.config.js`
- **shadcn/ui** — Components are added on-demand via `pnpm dlx shadcn@latest add <component>` and live in `components/ui/`. Style: "new-york", icons: Lucide React
- **`cn()` utility** — `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for conditional/merged class names
- **Path alias** — `@/*` maps to the project root (e.g., `@/lib/utils`, `@/components/ui/button`)
- **Fonts** — Geist Sans and Geist Mono via `next/font/google`, exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`
- **Package manager** — pnpm
- Prefer code splitting over overloading one file.
- New components are added in `components` directory.
