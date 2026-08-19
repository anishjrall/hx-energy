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
