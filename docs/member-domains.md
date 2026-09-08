# YarsaByte Member Domain & Multi-Tenant Routing Guide

This document outlines the architecture, setup instructions, local development workflows, and deployment procedures for hosting YarsaByte team member websites under their personal domains or subdomains (e.g., `yarasabyte.anupambaral.com.np`, `yarasabyte.anmolchettri.com`).

---

## 1. Architecture Overview

All member websites share a **single codebase, single Next.js application, and single deployment**:

```
                              Incoming HTTP Request
                                       │
                                       ▼
                       Root Next.js Middleware (middleware.ts)
                                       │
                 ┌─────────────────────┴─────────────────────┐
                 │                                           │
         Host Recognized?                            Host Unrecognized?
                 │                                           │
         ┌───────┴───────┐                           ┌───────┴───────┐
         │               │                           │               │
      Path = '/'     Path != '/'                Normal App Routing
         │               │                           │
  Internal Rewrite   Proceeds to path            Default / or 404
         │               │                           │
  /team/[slug]           ▼                           ▼
         │       Rendered Page               Rendered Page
         ▼
    Browser keeps
   custom hostname
  in address bar
```

### Key Highlights:
1. **Zero Duplicate Repositories / Deployments:** A single Next.js 15 project handles all domains.
2. **Internal Rewrites (Not Redirects):** Visiting `https://yarasabyte.anupambaral.com.np/` internally rewrites to `/team/anupam`. The visitor's browser continues to show `yarasabyte.anupambaral.com.np`.
3. **Loop-Proof:** Requests targeting `/team/[slug]` or containing static assets (`_next`, `.png`, `.ico`, `.css`, etc.) bypass rewrite logic.
4. **Safe Fallback:** Unknown domains or main domains (`yarshabyte.vercel.app`) never expose another member's profile accidentally.

---

## 2. Centralized Member Domain Registry

All domain mappings are maintained in:
[`src/data/memberDomains.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/yarasabyte-member/src/data/memberDomains.ts)

```typescript
export const MEMBER_DOMAINS: Record<string, MemberSlug> = {
  'yarasabyte.anupambaral.com.np': 'anupam',
  'yarasabyte.anmolchettri.com': 'anmol',
  // Add additional member domains here once officially registered
};
```

Only production-verified domains should be listed in `MEMBER_DOMAINS`.

---

## 3. Local Development & Testing

You do **not** need to configure DNS, modify `hosts` files, or deploy to test custom domain routing.

RFC 6761 specifies that all subdomains of `.localhost` resolve to `127.0.0.1` natively in modern browsers (Chrome, Firefox, Safari, Edge).

### Running Locally:
```bash
npm run dev
```

### Testing URLs in Browser:
- **Default Site:** `http://localhost:3000`
- **Direct Team Route (Anupam):** `http://localhost:3000/team/anupam`
- **Direct Team Route (Anmol):** `http://localhost:3000/team/anmol`
- **Subdomain Routing (Anupam):** `http://anupam.localhost:3000`
- **Subdomain Routing (Anmol):** `http://anmol.localhost:3000`
- **Subdomain Routing (Other Members):** `http://aashish.localhost:3000`, `http://beeplap.localhost:3000`, `http://dinesh.localhost:3000`
- **Unknown Subdomain (Safe Fallback):** `http://unknown.localhost:3000` (does not match any member slug and safely falls back to normal application root).

---

## 4. How to Add a New Member Domain

When a team member registers or designates their domain (e.g., Aashish with `yarasabyte.aashishpanthi.com`):

1. Open [`src/data/memberDomains.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/yarasabyte-member/src/data/memberDomains.ts).
2. Add the entry to `MEMBER_DOMAINS`:
   ```typescript
   export const MEMBER_DOMAINS: Record<string, MemberSlug> = {
     'yarasabyte.anupambaral.com.np': 'anupam',
     'yarasabyte.anmolchettri.com': 'anmol',
     'yarasabyte.aashishpanthi.com': 'aashish', // <-- New domain
   };
   ```
3. Commit and push the code. Vercel will automatically redeploy the application.
4. Add the domain to Vercel (see Section 5 below).

---

## 5. Vercel Configuration & DNS Setup

All member domains are assigned to the **same single Vercel project**. Do **not** create separate Vercel projects for each member.

### Step 1: Add Custom Domain to Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Navigate to the **YarsaByte Member** project.
3. Go to **Settings** → **Domains**.
4. In the text input, enter the member's custom domain (e.g. `yarasabyte.anupambaral.com.np` or `yarasabyte.anmolchettri.com`).
5. Click **Add**.

### Step 2: Configure DNS Records
When you add the domain, Vercel displays the exact DNS configuration required for that domain (either a `CNAME` record pointing to `cname.vercel-dns.com` or an `A` record pointing to `76.76.21.21`).

> [!IMPORTANT]
> **Use the exact DNS records provided by your Vercel Dashboard for each domain.**
> DNS record types and values can vary depending on whether the domain is an apex domain (e.g., `example.com`) or a subdomain (e.g., `yarasabyte.example.com`). Follow the instructions displayed in Vercel.

6. Open the DNS provider for the member's domain (e.g., Cloudflare, Namecheap, GoDaddy, or register.com.np).
7. Create the DNS record exactly as requested by Vercel.
8. Once DNS propagates (usually 1–10 minutes), Vercel automatically issues and renews an SSL/TLS certificate for that domain.

---

## 6. How to Add a New Team Member

To add a completely new team member to the collective:

1. **Create Profile Data:**
   Create a new file under `src/data/members/[slug].ts` (e.g., `src/data/members/saroj.ts`) implementing the `MemberProfile` interface.
2. **Register in Master Data List:**
   In [`src/data/index.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/yarasabyte-member/src/data/index.ts):
   - Import the profile.
   - Add the slug to `membersMap` and `OFFICIAL_LEADERSHIP_ORDER`.
   - Add roster details to `getTeamRoster()`.
3. **Register Slug in Member Domains:**
   In [`src/data/memberDomains.ts`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/yarasabyte-member/src/data/memberDomains.ts):
   - Add the slug to `VALID_MEMBER_SLUGS`.
   - If they have a custom domain, add it to `MEMBER_DOMAINS`.

---

## 7. SEO, Canonical URLs, and Schema.org JSON-LD

### Dynamic Canonical URLs:
- When a search engine or crawler accesses a member's profile:
  - If the member has a domain in `MEMBER_DOMAINS` (e.g. `anupam`), the canonical URL is:
    `https://yarasabyte.anupambaral.com.np`
  - If the member has no custom domain yet, the canonical URL falls back to:
    `https://yarshabyte.vercel.app/team/[slug]`
- Both `canonical` tag, `og:url`, and Twitter cards match this canonical URL.

### Schema.org JSON-LD:
- The JSON-LD schema is rendered dynamically in `src/app/team/[slug]/page.tsx`:
  - `url`: Points to the member's personal website (`https://yarasabyte.anupambaral.com.np`).
  - `worksFor.url`: Always points to the main company website (`https://yarshabyte.vercel.app`).
  - `jobTitle`: Derived dynamically from the member's profile role (e.g. `"Chief Product Officer"`, `"Chief Marketing Officer"`).
