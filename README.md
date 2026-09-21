# YarshaByte Team Member Platform

> **A high-performance, multi-tenant portfolio platform for the YarshaByte creative technology collective.**  
> Built with Next.js 15 (App Router), React 19, TypeScript, and bespoke Vanilla CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/Styling-Vanilla%20CSS%20Modules-rebeccapurple?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-Private-lightgrey?style=flat-square)](#)

---

## 📖 Overview

This repository powers the personal portfolio websites and leadership directory for **[YarshaByte](https://yarshabyte.com)**, an interdisciplinary creative technology collective based in Butwal, Nepal.

Instead of managing separate repositories, builds, or server instances for each team member, this project uses **a single Next.js codebase and single deployment** to serve:
1. **The main collective portal:** [https://yarshabyte.com](https://yarshabyte.com)
2. **Dedicated team profile routes:** `/team/anupam`, `/team/aashish`, `/team/anmol`, `/team/beeplap`, `/team/dinesh`
3. **Personal custom domains and subdomains:**
   - `yarshabyte.anupambaral.com.np` &rarr; Anupam Baral (CPO)
   - `yarshabyte.chapagainaashish.com.np` &rarr; Aashish Chapagain (CEO)
   - `yarshabyte.anmolchettri.com` &rarr; Anmol Chettri (CMO)
   - `yarshabyte.beeplap.com.np` &rarr; Beeplap Gharti Magar (CTO)
   - `yarshabyte.dineshgautam.com` &rarr; Dinesh Lamichanne (COO)

---

## ⚡ Architecture & How It Works

```
                               Incoming HTTP Request
                                        │
                                        ▼
                        Root Middleware (src/middleware.ts)
                                        │
                  ┌─────────────────────┴─────────────────────┐
                  │                                           │
          Host Recognized?                            Host Unrecognized?
      (e.g. yarshabyte.anupambaral.com.np)       (e.g. yarshabyte.com)
                  │                                           │
          ┌───────┴───────┐                           ┌───────┴───────┐
          │               │                           │               │
       Path = '/'     Path != '/'                        Normal Route
          │               │                           (Home, /team/*)
   Internal Rewrite   Pass-through                            │
          │               │                                   ▼
    /team/[slug]          ▼                           Standard Page
          │         Rendered Path
          ▼
     Browser keeps
    custom domain in
      address bar
```

### 1. Zero Code Duplication
Every member's portfolio is rendered by a single, shared template component (`MemberPageTemplate`). Profiles are purely data-driven, defined as strongly typed objects implementing the `MemberProfile` interface in `src/data/members/`.

### 2. Multi-Tenant Middleware Routing
- Incoming host headers are parsed and normalized in `src/middleware.ts`.
- When a user visits a member's domain (e.g. `https://yarshabyte.anupambaral.com.np/`), Next.js **internally rewrites** the request to `/team/anupam`.
- **No external redirects (301/302):** The visitor’s URL bar retains the member’s domain.
- Static assets (`_next`, images, favicon, CSS) and explicit paths automatically bypass rewrites to prevent loops.

### 3. Local Multi-Tenant Development (RFC 6761)
Local subdomains resolve natively without editing `/etc/hosts` or installing proxy tools:
- `http://localhost:3000` &rarr; Default collective view
- `http://anupam.localhost:3000` &rarr; Subdomain route for Anupam
- `http://beeplap.localhost:3000` &rarr; Subdomain route for Beeplap

---

## ✨ Key Features

- **Editorial Design System:** Custom typography, warm sand canvas (`#f5efe7`), deep charcoal foreground (`#1e1a18`), and terracotta accents (`#b86a2c`) with bespoke desktop frame borders and subtle noise texture.
- **Strict Performance Guardrails:**
  - Client components are strictly restricted (`Header.tsx` and `ContactForm.tsx` only).
  - All profile sections and static templates are rendered as React Server Components (RSC) and statically generated at build time (SSG).
  - First Load JS is lean (~103 kB).
  - Built-in performance test suite (`npm run check-perf`) enforces image budgets (&le;150 KB) and component boundaries.
- **Bot-Resistant Direct Messaging:**
  - Client-side validation with real-time feedback.
  - Invisible honeypot field traps automated spam scripts.
  - Human interaction timing threshold rejects submissions under 1.5s.
  - In-memory sliding-window IP rate limiter protects against spam floods.
  - Webhook integration (`CONTACT_WEBHOOK_URL`) dispatches notifications directly to team communication channels.
- **Enterprise SEO & Structured Data:**
  - Dynamic canonical URL resolution based on registered custom domains.
  - Contextual Open Graph and Twitter Card tags.
  - Schema.org JSON-LD structured data (`Person` on profile pages, `Organization` on homepage).
  - Dynamic `sitemap.xml` and `robots.txt` generator.

---

## 📁 Repository Structure

```
yarasabyte-member/
├── docs/                               # System documentation & guides
│   ├── WHAT_IS_THIS_FOR.md             # Project purpose, business value & architecture
│   ├── CHANGELOG.md                    # Detailed log of modifications & upgrades
│   ├── member-domains.md               # Custom domain & DNS setup instructions
│   └── superpowers/plans/              # Architecture design documents
├── public/                             # Optimized static assets
│   ├── brand/                          # SVGs, icons, and OpenGraph graphics
│   ├── team/                           # Member portrait photographs (.webp)
│   └── work/                           # Featured project preview thumbnails (.webp)
├── scripts/
│   └── check-perf.js                   # Performance regression check script
├── src/
│   ├── app/                            # Next.js 15 App Router
│   │   ├── api/contact/route.ts        # Secure contact form API endpoint
│   │   ├── team/[slug]/page.tsx        # Dynamic SSG member page route
│   │   ├── layout.tsx                  # Global HTML wrapper & metadata
│   │   ├── not-found.tsx               # Editorial 404 error page
│   │   ├── page.tsx                    # Root landing page
│   │   ├── robots.ts                   # Search crawler directives
│   │   └── sitemap.ts                  # Dynamic canonical sitemap
│   ├── components/
│   │   ├── layout/                     # Header, Footer, SiteFrame
│   │   ├── sections/                   # Hero, Intro, Role, Work, Team, Contact
│   │   ├── templates/                  # MemberPageTemplate (unified shell)
│   │   └── ui/                         # ContactForm, SectionLabel, TeamMemberCard
│   ├── data/
│   │   ├── members/                    # Strongly-typed member profile data
│   │   │   ├── aashish.ts
│   │   │   ├── anmol.ts
│   │   │   ├── anupam.ts
│   │   │   ├── beeplap.ts
│   │   │   └── dinesh.ts
│   │   ├── memberDomains.ts            # Custom domain to member slug registry
│   │   └── index.ts                    # Central data exports & helper methods
│   ├── lib/
│   │   └── member-domain.ts            # Hostname parsing & canonical URL resolver
│   ├── styles/
│   │   ├── globals.css                 # Base resets, typography, and utility classes
│   │   └── tokens.css                  # CSS custom property design tokens
│   ├── types/
│   │   └── member.ts                   # TypeScript interfaces (MemberProfile, etc.)
│   └── middleware.ts                   # Multi-tenant edge rewrite middleware
├── package.json
└── tsconfig.json
```

---

## 📚 Documentation Directory

For in-depth guides and architectural references, explore the dedicated documentation files:

- **[`docs/WHAT_IS_THIS_FOR.md`](docs/WHAT_IS_THIS_FOR.md)** — **Start here!** Explains what this project is for, the business problem it solves, how the multi-tenant architecture works, and who uses it.
- **[`docs/CHANGELOG.md`](docs/CHANGELOG.md)** — Comprehensive record of all recent changes, brand corrections, favicon extraction, and domain migrations.
- **[`docs/member-domains.md`](docs/member-domains.md)** — Step-by-step instructions for configuring custom domains, DNS records (CNAME/A), and Vercel routing.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20.x or v22.x+
- **npm**: v10.x+

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/gomugomucode/yarasabyte-member.git
cd yarasabyte-member
npm install
```

### 2. Run Local Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open your browser:
- **Default view:** [http://localhost:3000](http://localhost:3000)
- **Direct profile:** [http://localhost:3000/team/anupam](http://localhost:3000/team/anupam)
- **Subdomain simulation:** [http://anupam.localhost:3000](http://anupam.localhost:3000)

### 3. Build & Quality Verification

Run typechecking, linting, performance audit, and production build:

```bash
# Verify TypeScript types
npm run typecheck

# Run Next.js linter
npm run lint

# Check performance budgets (client component count & image weights)
npm run check-perf

# Create optimized production build (SSG)
npm run build
```

---

## 👥 How to Add a New Team Member

Adding a new team member takes only three simple steps:

### Step 1: Create Profile Data
Create a new file in `src/data/members/[slug].ts` (e.g. `saroj.ts`):

```typescript
import { MemberProfile } from '@/types/member';

export const sarojProfile: MemberProfile = {
  slug: 'saroj',
  name: 'Saroj Shrestha',
  role: 'Design Lead',
  shortRole: 'Lead Designer',
  company: 'YarshaByte',
  subRole: 'UI/UX & Brand Systems @ YarshaByte',
  location: 'Butwal, Nepal',
  avatar: '/team/saroj.webp',
  tagline: 'Designing intuitive and tactile digital interfaces.',
  positioningStatement: '...',
  bioHeading: '...',
  bioParagraphs: ['...'],
  metadata: [...],
  responsibilities: [...],
  projects: [...],
  contact: {
    email: 'saroj@yarshabyte.com',
    yarshaEmail: 'saroj@yarshabyte.com',
    location: 'Butwal, Nepal',
  },
  socials: [...],
};
```

### Step 2: Register in Master List
In [`src/data/index.ts`](src/data/index.ts):
1. Import `sarojProfile`.
2. Add `'saroj'` to `OFFICIAL_LEADERSHIP_ORDER` and `membersMap`.
3. Add entry to `getTeamRoster()`.

### Step 3: (Optional) Register Custom Domain
In [`src/data/memberDomains.ts`](src/data/memberDomains.ts):
1. Add `'saroj'` to `VALID_MEMBER_SLUGS`.
2. Map their custom domain in `MEMBER_DOMAINS`:
   ```typescript
   export const MEMBER_DOMAINS: Readonly<Record<string, MemberSlug>> = Object.freeze({
     // ... existing domains
     'yarshabyte.sarojshrestha.com': 'saroj',
   });
   ```

For detailed DNS configuration and Vercel setup instructions, refer to **[`docs/member-domains.md`](docs/member-domains.md)**.

---

## 🌐 Environment Variables

| Variable | Description | Required | Default |
| --- | --- | --- | --- |
| `CONTACT_WEBHOOK_URL` | Webhook endpoint (e.g. Discord, Slack) to receive inquiries sent via the Contact Form | Optional | None (logs safely to console) |

---

## 📄 License

This repository and its contents are proprietary property of **YarshaByte**. All rights reserved.
