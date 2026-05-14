# ONG VAHATRA Premium Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Next.js institutional demo site for ONG VAHATRA.

**Architecture:** Use App Router with server-first pages, focused reusable components, centralized mock data, and isolated client components for interaction-heavy areas. Keep the site static-friendly and fast.

**Tech Stack:** Next.js, TypeScript, TailwindCSS, Framer Motion, Radix UI, shadcn-style components, Recharts, Embla, react-hook-form, zod, Lenis, next/image, lucide-react.

---

### Task 1: Project Foundation

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `app/globals.css`
- Create: `app/layout.tsx`

- [ ] Add dependencies and scripts.
- [ ] Configure Tailwind theme tokens for VAHATRA.
- [ ] Configure global metadata and app shell.
- [ ] Run dependency install.

### Task 2: Content Data

**Files:**
- Create: `data/site.ts`
- Create: `data/impact.ts`
- Create: `data/news.ts`
- Create: `data/gallery.ts`
- Create: `lib/utils.ts`
- Create: `lib/seo.ts`

- [ ] Normalize source contact, mission, activities, and mock impact data.
- [ ] Add SEO helpers and structured page metadata.
- [ ] Add utility helpers for class merging and formatting.

### Task 3: UI System

**Files:**
- Create: `components/ui/button.tsx`
- Create: `components/ui/card.tsx`
- Create: `components/ui/badge.tsx`
- Create: `components/ui/input.tsx`
- Create: `components/ui/textarea.tsx`
- Create: `components/ui/dialog.tsx`
- Create: `components/motion/reveal.tsx`

- [ ] Implement shadcn-style primitives.
- [ ] Add accessible focus states and variants.
- [ ] Add reusable reveal/stagger animation helpers.

### Task 4: Layout Components

**Files:**
- Create: `components/layout/site-header.tsx`
- Create: `components/layout/site-footer.tsx`
- Create: `components/layout/smooth-scroll.tsx`
- Create: `components/sections/page-hero.tsx`
- Create: `components/sections/cta-band.tsx`
- Create: `components/sections/stat-grid.tsx`

- [ ] Build responsive navigation with Radix dialog for mobile.
- [ ] Build footer and global CTA areas.
- [ ] Add Lenis smooth scroll as a lightweight client enhancement.

### Task 5: Feature Sections

**Files:**
- Create: `components/sections/home-hero.tsx`
- Create: `components/sections/activity-card.tsx`
- Create: `components/sections/testimonial-carousel.tsx`
- Create: `components/sections/impact-dashboard.tsx`
- Create: `components/sections/contact-form.tsx`

- [ ] Build cinematic home hero with `next/image`.
- [ ] Build cards, carousel, charts, counters, and contact form.
- [ ] Use zod validation for contact form feedback.

### Task 6: Pages and SEO Files

**Files:**
- Create: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/activities/page.tsx`
- Create: `app/impact/page.tsx`
- Create: `app/news/page.tsx`
- Create: `app/gallery/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] Compose every page from reusable sections.
- [ ] Add dynamic metadata per page.
- [ ] Add sitemap and robots output.

### Task 7: Verification

**Files:**
- Create: `tests/content.test.ts`
- Create: `vitest.config.ts`

- [ ] Add data integrity tests for required pages, activities, and contact details.
- [ ] Run tests, lint, and build.
- [ ] Start the local app and verify visually in the browser.
