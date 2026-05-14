# ONG VAHATRA Premium Institutional Site Design

## Goal
Build a polished, sellable demo website for ONG VAHATRA that feels credible to international donors, partners, and social investors while staying fast on mobile connections in Madagascar.

## Direction
The site will use a cinematic editorial style: large human-centered imagery, restrained natural colors, strong typography, and measured motion. It should feel closer to UNICEF, AFD, BRAC, and World Vision than to a generic NGO template.

## Architecture
The application will use Next.js App Router with TypeScript, TailwindCSS, Framer Motion, shadcn-style UI primitives, Radix UI, Recharts, react-hook-form, zod, Embla, Lenis, and next/image. Content from `Info sur Ong Vahatra.txt` will be normalized into reusable data modules under `data/`.

## Pages
- Home: cinematic hero, impact stats, institution story, activity highlights, testimonials, partners, contact CTA.
- About: history, mission, vision, values, team, partners, timeline.
- Activities: microfinance, agriculture, livestock, health, social support, inclusion finance.
- Impact: dashboard cards, chart visualizations, impact map, animated counters.
- News: realistic premium magazine-style articles.
- Gallery: masonry media gallery and video placeholders.
- Contact: accessible form, WhatsApp CTA, email, phone, address, map placeholder.

## Design System
Use a warm institutional palette: deep green, off-white, muted beige, soft earth, charcoal text, and subtle blue accents. Components should be reusable and compact, with 8px radius or less unless a section needs a softer image treatment. Layout is mobile-first, then enhanced for tablet and desktop.

## Performance
Prefer server components by default. Use client components only for animation, charts, carousels, smooth scrolling, and form interactions. Use `next/image`, lazy rendering, optimized font loading, and lightweight motion.

## Accessibility
Keyboard navigation, semantic sections, visible focus styles, clear labels, sufficient contrast, mobile-readable text, and form validation feedback are required.

## Verification
Run linting and production build. Start the local app and verify the main pages in the in-app browser with screenshot checks.
