# HX Energy Systems \u2014 Corporate Website

An enterprise-grade Next.js 15 / React 19 marketing site for HX Energy
Systems Pvt. Ltd., a Mysuru-based engineering company (heat pumps, solar
PV, water treatment, pumping and turnkey EPC).

## Stack

Next.js 15 (App Router) \u00b7 React 19 \u00b7 TypeScript \u00b7 Tailwind CSS \u00b7
Framer Motion \u00b7 Lucide React \u00b7 React Hook Form

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Design system

- **Palette** \u2014 white / paper (`#F4F5F3`) / steel grays / charcoal / ink,
  with a single copper accent (`#C1642F`) drawn from the client's own
  imagery (copper heat-pump piping) rather than a generic corporate blue
  or orange.
- **Type** \u2014 Space Grotesk (display), Inter (body), IBM Plex Mono
  (datasheet-style labels, specs and stats) \u2014 the mono face is the
  signature move, echoing the capacity ranges and technical
  specifications throughout the client's own product literature.
- **Signature motif** \u2014 a schematic single-line-diagram (`SchematicLines`
  component) referencing the P&IDs and single-line diagrams the client's
  engineers themselves produce; used sparingly in the hero and as a
  section divider rather than decoratively.

## Structure

```
app/                  routes, layout, metadata, sitemap/robots
components/ui/        Button, Card, SectionHeading, SchematicLines
components/layout/    Navbar, Footer
components/sections/  one component per homepage section
lib/constants.ts      all site copy/data (sourced from the client's
                       existing company profile) \u2014 edit here first
types/                shared TypeScript types
hooks/                useScrollPosition, useCountUp
```

## Before launch

1. **Images** \u2014 every photo currently points to royalty-free Unsplash
   placeholders via `next/image` remote patterns. Replace every URL in
   `lib/constants.ts` and section components with the client's own
   commissioned photography (plant rooms, installed systems, leadership
   headshots) \u2014 generic stock undermines the trust the brief asks for.
2. **Testimonials** \u2014 `components/sections/Testimonials.tsx` contains
   clearly-marked placeholder quotes. Replace with verified, attributable
   client feedback before launch.
3. **Contact form** \u2014 `components/sections/Contact.tsx` currently
   simulates submission. Wire `onSubmit` to a real API route or form
   backend (e.g. a Next.js Route Handler emailing the sales inbox).
4. **Domain & metadata** \u2014 update `SITE.url` in `lib/constants.ts` once a
   production domain is confirmed, and add a real Open Graph image.
