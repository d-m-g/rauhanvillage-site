# Project conventions

## Architecture

```
src/
  app/         Next.js App Router routes + root layout + globals.css
  components/  Reusable UI primitives + SiteHeader / SiteFooter
  sections/    Page-level composed blocks
  lib/         Content data (content.js) + SEO helpers (seo.js)
public/assets/ Static images and logo
docs/          This file, style guide, etc.
```

## Layers

- **Routes** (`app/`) — thin orchestrators. Import sections, export `metadata`.
- **Sections** (`sections/`) — self-contained page blocks. Import components + content.
- **Components** (`components/`) — reusable primitives with no business logic.
- **Data** (`lib/content.js`) — all copy as exported JS arrays/objects. Hardcoded first.

## Styling

- **Design tokens** in `src/app/globals.css` as CSS custom properties.
- **CSS Modules** co-located with each component/section (`.module.css`).
- No Tailwind, no Sass, no CSS-in-JS.
- Color palette: forest green accent (`--color-accent: #3a7d4a`), dark forest ink (`--color-ink: #1b2e1f`).

## Components

- `Button` — auto-detects: external `http` → `<a target="_blank">`, internal → `next/link`, else `<button>`.
- `Card` — hover lift + accent border ring via `::after`.
- `Container` — responsive width via `min()`.
- `Section` — wraps `Container`, accepts `tone` prop: `default` | `accent` | `solidGreen`.
- `Heading` — eyebrow + heading pair, `align` prop, `as` prop for semantic tag.
- `SiteHeader` — `"use client"`, sticky, `usePathname()` for active nav.

## SEO

- `defaultMetadata` in `src/lib/seo.js` — site-wide title template, OG, Twitter.
- `createPageMetadata({ title, description, path })` — per-page canonical + OG.
- Use `export const metadata = createPageMetadata({...})` at the top of each page.

## Naming conventions

- Components and sections: PascalCase JSX files.
- CSS Modules: camelCase class names.
- Content exports: camelCase arrays/objects (`hotelHighlights`, `activities`, etc.).

## Adding a new page

1. Create `src/app/<route>/page.jsx`.
2. Export `metadata` using `createPageMetadata`.
3. Add `<main>` with `PageHero` + relevant sections.
4. Add the route to `navItems` in `SiteHeader.jsx` if it should appear in nav.
