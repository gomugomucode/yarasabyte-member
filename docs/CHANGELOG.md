# YarshaByte Platform — Changelog & Record of Modifications

This document records the modifications, architectural improvements, and brand updates made to the YarshaByte Member Platform codebase.

---

## 📅 Summary of Modifications

```
┌────────────────────────┬─────────────────────────────────────────────────────────────┐
│ Category               │ Key Accomplishments                                         │
├────────────────────────┼─────────────────────────────────────────────────────────────┤
│ 1. Brand Correction    │ Replaced 'Yarsabyte' with official 'YarshaByte' throughout  │
│ 2. Platform Docs       │ Overhauled README.md and established /docs guides           │
│ 3. Favicon & Logo      │ Extracted authentic emblem assets directly from live site   │
│ 4. Domain Migration    │ Replaced vercel.app references with https://yarshabyte.com  │
│ 5. Performance & Build │ Passed check-perf (<=150KB), typecheck, and production build│
└────────────────────────┴─────────────────────────────────────────────────────────────┘
```

---

## 1. Brand Normalization (`Yarsabyte` ➔ `YarshaByte`)

### Motivation:
The project contained legacy references to `Yarsabyte` (missing the 'h'). The official company name registered in Butwal, Nepal is **YarshaByte**.

### Modifications:
- **TypeScript Data & Schemas:**
  - `src/data/members/*.ts`: Updated member company attribution, email addresses, and bios to `YarshaByte`.
  - `src/types/member.ts`: Updated interface definitions and JSDocs.
  - `src/data/memberDomains.ts`: Updated `MEMBER_DOMAINS` and `MAIN_SITE_URL` keys.
- **Application Pages & Components:**
  - `src/app/layout.tsx`: Updated page titles, templates, and OpenGraph site name.
  - `src/app/page.tsx`: Updated corporate collective landing page titles and copy.
  - `src/app/not-found.tsx`: Updated 404 page labels and recovery links.
  - `src/components/layout/Header.tsx` & `Footer.tsx`: Updated brand headers, copyright, and accessible alt texts.
- **Styles & CSS Custom Properties:**
  - `src/styles/tokens.css` & `src/styles/globals.css`: Corrected font-family and brand variable references.

---

## 2. Authentic Favicon & Logo Extraction (`yarshabyte.com`)

### Motivation:
Replace temporary/placeholder icons with the authentic YarshaByte brand emblem directly extracted from the live corporate website `https://yarshabyte.com`.

### Assets Extracted & Processed:
1. **Official Multi-Resolution Favicon (`public/favicon.ico`)**:
   - Extracted directly from `https://yarshabyte.com/favicon.ico` (4,638 bytes).
   - Features the authentic charcoal `Y`, golden terracotta `B`, and Yarshagumba caterpillar motif.
2. **Official Apple Touch Icon (`public/apple-icon.png` & `public/brand/apple-touch-icon.png`)**:
   - Extracted 180×180 PNG (29,245 bytes) with clean white badge background.
3. **High-Resolution Master Emblem (`public/icon.png`)**:
   - Extracted `ico-bg.png` (1024×1024 master transparent PNG) from `yarshabyte.com`.
   - Processed via `sharp` to a high-resolution 512×512 PNG (60.7 KB), strictly adhering to the `<150 KB` performance budget.
4. **Vector & Raster Brand Marks (`public/brand/yarshabyte-mark.*`)**:
   - Generated `yarshabyte-mark.png` (256×256 transparent PNG, 21.8 KB).
   - Generated `yarshabyte-mark.svg` (vector wrapper embedding the authentic 256×256 emblem, 29.3 KB).

### UI Presentation & Contrast Polish:
- **`Header.module.css`**: Updated `.logoWrapper` and `.drawerLogoWrapper` with white backgrounds (`#ffffff`), subtle borders, and `object-fit: contain` so the deep charcoal 'Y' stroke remains visible and crisp.
- **`Footer.module.css`**: Updated `.logoBox` to have a `#ffffff` background with `padding: 4px` against the dark `#241e1b` footer background.
- **`src/app/not-found.tsx`**: Wrapped the 404 error page logo in a styled white badge.

---

## 3. Canonical Domain Migration (`vercel.app` ➔ `yarshabyte.com`)

### Motivation:
Eliminate hardcoded references to temporary Vercel preview URLs (`yarshabyte.vercel.app`) in favor of the production custom domain `https://yarshabyte.com`.

### Modifications:
- **Central Registry (`src/data/memberDomains.ts`)**:
  - Set `MAIN_SITE_URL = 'https://yarshabyte.com'`.
  - Automatically propagated to Schema.org JSON-LD (`worksFor.url`, corporate logo URL) and `sitemap.ts`.
- **Global Metadata (`src/app/layout.tsx`)**:
  - `metadataBase`: `new URL('https://yarshabyte.com')`
  - `openGraph.url`: `'https://yarshabyte.com'`
- **Security & Media Rules (`next.config.mjs`)**:
  - Added `yarshabyte.com` to `images.remotePatterns`.
  - Added `https://yarshabyte.com` to Content-Security-Policy `img-src`.
- **Member Profiles & Portfolio Links (`src/data/members/`)**:
  - `anupam.ts`: Updated studio production case study link to `https://yarshabyte.com/`.
  - `anmol.ts`: Updated brand project and contact website links to `https://yarshabyte.com`.
  - `aashish.ts`: Updated contact website and socials to `https://yarshabyte.com`.
  - `dinesh.ts`: Updated contact website and socials to `https://yarshabyte.com`.
- **Documentation & Routing**:
  - `README.md`: Updated collective portal links and middleware routing diagram.
  - `docs/member-domains.md`: Updated fallback URLs and Schema.org specifications.

---

## 4. Documentation Overhaul

- **[`README.md`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/README.md)**: Rewrote the root README to clearly document the platform's multi-tenant architecture, file organization, quick start instructions, and performance budgets.
- **[`docs/WHAT_IS_THIS_FOR.md`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/docs/WHAT_IS_THIS_FOR.md)**: Created a dedicated high-level explanation answering what the project is for, what problems it solves, and how it is architected.
- **[`docs/member-domains.md`](file:///c:/Users/Anupam%20Baral/Desktop/yarasabyte-member/docs/member-domains.md)**: Maintained comprehensive DNS and Vercel routing instructions.

---

## 5. Verification & Quality Gates

All automated verification commands continue to pass with 0 errors:
- **Performance Regression Guardrail (`npm run check-perf`)**: Passed (Client components ≤ 2, all images ≤ 150 KB).
- **TypeScript Typecheck (`npm run typecheck`)**: Passed with 0 errors (`tsc --noEmit`).
- **Production Build (`npm run build`)**: Successfully compiled Next.js 15 app router and statically pre-rendered all 12 routes.
