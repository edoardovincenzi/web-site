# CLAUDE.md

## Project Overview

Personal portfolio website for Edoardo Vincenzi (Senior Front-end Developer).
Single-page application with anchor-based navigation, bilingual support (Italian/English), and heavy use of scroll-driven animations.

**Live site:** https://www.edoardovincenzi.com

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19
- **Styling:** Tailwind CSS 4 (utility-first, dark theme only)
- **Animations:** Motion (modern Framer Motion) — `motion.div`, `useScroll`, `useTransform`
- **i18n:** next-intl 4 — cookie-based locale (`"it"` default, `"en"` alternate)
- **Package Manager:** pnpm

## Commands

```bash
pnpm run dev      # Start dev server (localhost:3000)
pnpm run build    # Production build
pnpm run start    # Start production server
pnpm run lint     # Run ESLint (next/core-web-vitals + typescript)
```

There are no tests configured. Linting is the primary code quality check.

## Project Structure

```
app/
  layout.tsx          # Root layout: fonts, metadata, NextIntlClientProvider, analytics
  page.tsx            # Home page: JSON-LD structured data, section composition
  globals.css         # Tailwind import, CSS variables, custom animations
  icon.tsx            # Dynamic favicon (ImageResponse)
  opengraph-image.tsx # Dynamic OG image for social sharing
  robots.ts           # Robots.txt config
  sitemap.ts          # Sitemap config

components/           # All UI components (10 files)
  Header.tsx          # Fixed nav with skip-to-content link, language switcher
  LanguageSwitcher.tsx# EN/IT toggle with cookie persistence
  HeroSection.tsx     # Animated hero with gradient blobs, floating particles
  AboutSection.tsx    # Bio with scroll-driven accent line animation
  SkillsSection.tsx   # 6 skill categories with mouse-follow glow cards
  ExperienceSection.tsx # Career timeline with sticky card stacking
  ExperienceCard.tsx  # Individual timeline entry with sticky positioning
  ContactSection.tsx  # CTA with animated ambient glow, email/social links
  CvModal.tsx         # PDF viewer modal (iframe, ESC to close)
  Footer.tsx          # Social icons, copyright, back-to-top

i18n/
  request.ts          # Server-side locale resolution (reads "locale" cookie, defaults to "it")

locales/
  en.json             # English translations
  it.json             # Italian translations

public/               # Static assets: CV PDF, favicons, webmanifest
```

## Key Conventions

### Path Aliases

`@/*` maps to the project root. Always use `@/components/Foo` instead of relative paths like `../../components/Foo`.

### Component Patterns

- All components live in `components/` as flat files (no nested directories).
- Components are default-exported and named after their file (`Header.tsx` exports `Header`).
- Client components use `"use client"` directive at the top of the file.
- Server components (layout, page) use async functions with `next-intl/server` for translations.
- Client components use `useTranslations` from `next-intl` for translations.

### Styling

- Dark theme only — enforced via `color-scheme: dark` on `<html>`.
- CSS variables defined in `globals.css` and exposed to Tailwind via `@theme inline` block:
  - `--background: #0a0a0a`, `--foreground: #ededed`, `--accent: #6366f1`
  - `--card-bg`, `--card-border`, `--muted`, `--accent-light`
- Fonts: Geist (sans) and Geist Mono loaded via `next/font/google`.
- Mobile-first responsive design. Primary breakpoint: `sm:` (640px).

### Animations

- Uses the `motion` package (not `framer-motion` — the import path is `"motion/react"`).
- Scroll-driven animations via `useScroll` and `useTransform` hooks.
- Entrance animations via `initial` / `animate` / `whileInView` props.
- Mouse-follow glow effects tracked with `onMouseMove` handlers.
- Staggered delays for sequential element entrances.

### Internationalization

- Two locales: `"it"` (Italian, default) and `"en"` (English).
- Locale stored in a cookie named `"locale"`.
- Translation files at `locales/en.json` and `locales/it.json`.
- All user-visible strings must be translated — never hardcode display text.
- Translation keys are namespaced: `metadata.*`, `hero.*`, `about.*`, `skills.*`, `experience.*`, `contact.*`, `footer.*`.

### SEO

- Dynamic metadata generated in `layout.tsx` using `generateMetadata`.
- JSON-LD structured data (ProfilePage schema) in `page.tsx`.
- Dynamic OG image and favicon generators in `app/`.
- Sitemap and robots.txt configured as Next.js route handlers.

### Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Skip-to-content link in Header targeting `#main-content`.
- ARIA attributes (`aria-label`, `aria-labelledby`, `aria-hidden`, `role`) used throughout.
- Keyboard navigation support (ESC to close modals).
- Section IDs for anchor navigation: `#about`, `#skills`, `#experience`, `#contact`.

## Configuration Files

| File | Purpose |
|---|---|
| `tsconfig.json` | TypeScript: strict, ES2017 target, bundler resolution, `@/*` alias |
| `eslint.config.mjs` | ESLint 9 flat config: next/core-web-vitals + typescript |
| `postcss.config.mjs` | PostCSS with `@tailwindcss/postcss` plugin |
| `next.config.ts` | Next.js config with next-intl plugin and catch-all redirect to `/` |

## Adding New Content

### New Section

1. Create `components/NewSection.tsx` with `"use client"` if it uses hooks/animations.
2. Add translation keys under a new namespace in both `locales/en.json` and `locales/it.json`.
3. Import and place the component in `app/page.tsx` within `<main>`.
4. Add a section `id` for anchor navigation and update Header if needed.

### New Experience Entry

Add the entry to the `experience.jobs` array in both `locales/en.json` and `locales/it.json` with: `period`, `role`, `company`, `description`, and `tags` (comma-separated string).

### New Skill Category

Add the category to the `skills.categories` array in both locale files with: `title` and `items` (array of strings).
