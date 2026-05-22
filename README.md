# Zao Marketing Website

Premium, conversion-focused marketing agency website built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (dark/light mode)

## Build Status

Homepage sections are implemented and globally optimized for:

- SEO (metadata + schema + sitemap + robots)
- Conversion UX (booked call-first flow, WhatsApp, lead capture)
- Performance-aware motion and transitions
- Accessibility improvements

## Features

- Premium dark-first theme system with light mode toggle
- Animated cursor (desktop pointer devices)
- Global cinematic page transitions and loader
- Conversion-focused homepage section system
- Reusable UI primitives and motion patterns
- SEO metadata + Open Graph + Twitter cards
- JSON-LD schema (Organization, LocalBusiness, Service, FAQ, Breadcrumb)
- `sitemap.xml`, `robots.txt`, and `manifest.webmanifest`
- Analytics-ready GA4 + Meta Pixel script hooks

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Set environment variables from `.env.example`.
4. Deploy.

## Production Notes

- Replace placeholder values in `lib/site.ts` and `.env.example`.
- Connect forms to your backend/CRM webhook for real lead capture.
- Set `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, and verification env vars.
- Replace social/profile placeholder links with live brand handles.
