# Implementation Plan: YarsaByte Member Profile Website System

Build a premium, production-ready, data-driven personal profile website system for team members of **YarsaByte** ([https://yarshabyte.vercel.app/](https://yarshabyte.vercel.app/)), a creative technology company based in Butwal, Nepal.

The system uses **ONE reusable member website template** (`MemberProfilePage`) driven entirely by typed profile data. Every member shares the identical editorial design system, typography, components, animations, responsive behavior, navigation, and footer.

---

## User Review Required

- **Stack Selection:** Next.js 15 (App Router) + TypeScript + Vanilla CSS / CSS Modules with bespoke CSS variables directly reflecting YarsaByte's live design tokens (`#f5efe7` sand canvas, `#1e1a18` foreground, `#b86a2c` terracotta accent, `#33202a` deep navy).
- **Routing Strategy:**
  - `/team/[slug]` handles dynamic member pages (e.g., `/team/anupam`, `/team/anmol`, `/team/aashish`, `/team/beeplap`).
  - Root `/` defaults to `/team/anupam`, rendering the lead profile while providing seamless deep navigation to any other teammate.
- **Data Separation:** Adding a new member requires only creating a single TypeScript file in `src/data/members/[slug].ts`. Zero component or page duplication.

---

## Proposed Changes

### 1. Foundation & Project Scaffolding
- Initialize Next.js 15 with TypeScript and Vanilla CSS.
- Create `src/styles/tokens.css` with exact YarsaByte color palette, typography tokens, outer desktop frame, and noise texture.
- Create `src/styles/globals.css` with resets and typography.
- Ingest brand assets into `public/brand/`.

### 2. Data Layer (`src/types` & `src/data`)
- Define TypeScript interfaces in `src/types/member.ts`.
- Create data files for `anupam.ts`, `anmol.ts`, `aashish.ts`, `beeplap.ts`.
- Create central registry and helper functions in `src/data/index.ts`.

### 3. Reusable Component Hierarchy
- `SiteFrame`: Outer viewport border/frame on desktop.
- `Header`: Sticky navigation, breadcrumb chip, anchor links, circular CTA, full-screen mobile menu.
- `HeroSection`: 4:5 editorial portrait, bold typography, role badge, quote, CTAs, social links.
- `IntroSection`: `01 — INTRODUCTION`, metadata pills, narrative bio.
- `RoleSection`: `02 — MY ROLE AT YARSABYTE`, categorized responsibilities, domain competencies (no percentage bars), milestones.
- `WorkSection`: `03 — WORK / CONTRIBUTIONS`, real YarsaByte project showcases, role tags, external links.
- `TeamSection`: `04 — THE TEAM`, roster cards with hover transitions, active profile indicator.
- `ContactSection`: `05 — LET'S TALK`, direct reach-out info + interactive accessible contact form with validation and status states.
- `Footer`: Editorial footer anchored in YarsaByte identity.
- `MemberPageTemplate`: Single unified template rendering all sections.

### 4. Next.js Routing & Metadata
- `app/team/[slug]/page.tsx`: Dynamic route handler with `generateStaticParams()`, `generateMetadata()`, Schema.org `Person` JSON-LD.
- `app/page.tsx`: Root page loading default profile (`anupam`).
- `app/not-found.tsx`: Custom editorial 404 page.

---

## Verification Plan
1. `npx tsc --noEmit`
2. `npm run build`
3. `npm run lint`
4. Cross-browser responsive and interaction check.
