# What is This Project For?

> **YarshaByte Member Platform — Purpose, Architecture, and Business Problem Solved**

---

## 📌 Executive Summary

This project is a **multi-tenant portfolio and identity engine** built for **[YarshaByte](https://yarshabyte.com)**, a creative technology collective based in Butwal, Nepal. 

Instead of maintaining 5 completely separate repositories, 5 deployment pipelines, and 5 hosting configurations for each team member, this project uses **a single Next.js 15 application deployed once** to power:
1. **The Corporate Collective Portal:** [`https://yarshabyte.com`](https://yarshabyte.com) — The central agency homepage showcasing the collective's philosophy, services, leadership roster, and contact channels.
2. **5 Independent Member Websites:** Each founder/member has their own personal website running under their personal custom domain or subdomain (e.g., `yarshabyte.anupambaral.com.np`, `yarshabyte.anmolchettri.com`).
3. **Canonical Team Directory Routes:** Direct routes under the main domain (e.g., `https://yarshabyte.com/team/anupam`).

---

## 💡 The Problem It Solves

### The Old / Traditional Way (Pain Points):
- **Repository Sprawl:** If 5 team members have 5 separate portfolio repositories, any design update, brand refresh, or layout fix has to be manually replicated 5 times.
- **Deployment & Hosting Overhead:** 5 separate Vercel projects, 5 build configs, and 5 sets of environment variables to maintain.
- **Brand Inconsistency:** Over time, each member's personal website drifts in design aesthetic, typography, and color palette, weakening the collective's unified brand identity.
- **Broken Cross-Linking:** When team members update their contact details or project showcases, other members' portfolios have outdated links.
- **High Maintenance:** Updating dependencies (e.g. security patches, React upgrades, Next.js upgrades) requires running updates across 5 separate repositories.

### The YarshaByte Way (This Repository):
- **1 Codebase, 1 Deployment:** All members share the same high-performance codebase and single deployment.
- **5 Custom Domains:** Team members retain their personal identity and custom domains without the maintenance headache.
- **Pure Data-Driven Architecture:** To update a member's portfolio, you only edit a single typed TypeScript data file (`src/data/members/[slug].ts`). No layout or component code changes needed.
- **Zero Design Drift:** A unified editorial aesthetic (Vanilla CSS modules, typography scale, responsive breakpoints) ensures every member's website looks world-class and consistent.
- **Zero Cost Multiplier:** 1 Vercel deployment handles unlimited custom domains and team members.

---

## 🛠️ How It Works (Under the Hood)

### 1. Multi-Tenant Edge Middleware (`src/middleware.ts`)
When a visitor opens a link in their browser:
1. The request hits Next.js Edge Middleware before reaching any page component.
2. Middleware inspects the incoming `Host` or `x-forwarded-host` header.
3. If the hostname matches a registered member domain in `src/data/memberDomains.ts`:
   - An **internal rewrite** (not a 301/302 redirect) is executed to `/team/[slug]`.
   - The visitor's browser **keeps the custom domain in the address bar** (e.g. `yarshabyte.anupambaral.com.np`).
   - The user sees that member's full personal website as the root page (`/`).
4. If the request comes from the primary corporate domain (`yarshabyte.com`) or an unrecognized host, the normal corporate homepage or canonical team routes are served.

```
Incoming Request: https://yarshabyte.anupambaral.com.np/
                          │
                          ▼
            Edge Middleware (middleware.ts)
            - Host: "yarshabyte.anupambaral.com.np"
            - Lookup in MEMBER_DOMAINS -> "anupam"
                          │
                          ▼
            Internal Rewrite -> /team/anupam
                          │
                          ▼
       Browser URL stays: yarshabyte.anupambaral.com.np
       Rendered: Anupam Baral's Personal Portfolio
```

### 2. Single Template Component (`MemberPageTemplate.tsx`)
There are not 5 separate page templates. There is exactly **one template component**:
- [`src/components/templates/MemberPageTemplate.tsx`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/src/components/templates/MemberPageTemplate.tsx)
- It accepts a typed `MemberProfile` and the collective `MemberSummary[]` list.
- It dynamically renders:
  - **Hero Section:** Member title, role, positioning statement, avatar, social links, contact CTA.
  - **Intro / Editorial Statement:** High-impact quote and philosophical perspective.
  - **Core Responsibilities:** Detailed breakdown of executive competencies and operational domains.
  - **Featured Work:** Client case studies, deliverables, impact metrics, and project screenshots.
  - **Collective Roster:** Cross-links to fellow YarshaByte team members.
  - **Contact & Booking:** Interactive contact form, availability badge, and location details.

### 3. Strongly Typed Profile Data (`src/data/members/`)
Each team member's content is completely isolated in their own TypeScript file implementing the `MemberProfile` interface:
- [`aashish.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/src/data/members/aashish.ts) — Aashish Chapagain (CEO & Strategy Director)
- [`anupam.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/src/data/members/anupam.ts) — Anupam Baral (CPO & Creative Producer)
- [`anmol.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/src/data/members/anmol.ts) — Anmol Chettri (CMO & Brand Strategist)
- [`beeplap.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/src/data/members/beeplap.ts) — Beeplap Gharti Magar (CTO & Systems Architect)
- [`dinesh.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/src/data/members/dinesh.ts) — Dinesh Lamichanne (COO & Operations Lead)

### 4. Search Engine Optimization (SEO) & Schema.org
- **Canonical URLs:** Prevents duplicate content penalties by automatically mapping canonical tags to the member's custom domain if configured, or `/team/[slug]` on `yarshabyte.com`.
- **Structured Data:** Generates dynamic Schema.org JSON-LD for both `Person` and `Organization`, connecting each member to YarshaByte with corporate metadata and logo.
- **Dynamic Sitemap:** Automatically compiles canonical URLs for all indexable pages at [`/sitemap.xml`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/src/app/sitemap.ts).

---

## 👥 Who Is This For?

| Audience | Use Case |
|---|---|
| **Clients & Enterprise Partners** | Review individual executive profiles, verify leadership credibility, and reach out for consultations. |
| **YarshaByte Founders / Members** | Share personal portfolios under their own vanity domains with zero maintenance burden. |
| **Recruiters & Media** | Explore verified bios, case studies, and official company attributions. |
| **Engineering Team** | Add new members or update agency branding in seconds with strict type safety and automated performance checks. |

---

## 🚀 How to Maintain or Add a New Team Member

1. **Add Profile Data:** Create `src/data/members/<slug>.ts` implementing `MemberProfile`.
2. **Register in Registry:** Add the slug to `VALID_MEMBER_SLUGS` in `src/data/memberDomains.ts`.
3. **Register Custom Domain (Optional):** Add their domain mapping to `MEMBER_DOMAINS` in `src/data/memberDomains.ts`.
4. **Export in Index:** Export the member in `src/data/index.ts`.
5. **Verify:** Run `npm run typecheck` and `npm run check-perf`.
