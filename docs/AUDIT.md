# Mindcare Repository Audit

**Audit date:** 2026-10-24  
**Repository:** `Raghavsuthar/Mindcare`  
**Base commit audited:** `2a5f0e46c7d078b6030c62ff2a91ce9ca0318f91`  
**Audit branch:** `improve/audit`  
**Scope:** Source/configuration review through GitHub repository access, plus attempted production deployment/API access. This is not a full browser-based penetration, accessibility, or performance audit.

## Executive summary

The codebase has a meaningful trilingual education library and a CI build/content-validation workflow. The main risks are the mismatch between the Express API implementation and the current static SPA deployment configuration, fabricated analytics seed data, filesystem-based analytics persistence, process-local rate limits, and incomplete automated runtime testing.

The production deployment metadata was retrievable from Vercel and reports a READY production deployment built from the audited commit. However, attempts to fetch the production API endpoints through the available Vercel/web access were denied or unavailable, and direct network probing from this environment failed DNS resolution. Therefore, this audit does **not** claim to have verified the live API responses.

## P0/P1 findings (≤15 lines)

1. **P0 — API hosting mismatch:** `vercel.json:2-6` rewrites every path to `/index.html`; Express endpoints exist in `server.ts:172-288`, but no Vercel `/api` function files were found in the reviewed tree. Production API behavior remains unverified.
2. **P0 — Synthetic analytics:** `server.ts:87-145` and `server/apiPlugin.ts:25-82` generate a fictional 30-day history and traffic breakdown when no store exists.
3. **P0 — Non-durable storage:** `server.ts:67, 147-169` and `server/apiPlugin.ts:5, 85-116` use `.analytics-data.json` on the local filesystem.
4. **P0 — Admin production verification pending:** `server.ts:249-286` has server-side token validation, but deployed API rejection behavior and secret configuration could not be verified through current access.
5. **P1 — Port mismatch:** `server.ts:7, 380-385` hard-codes port 3000 despite README deployment guidance for `PORT`.
6. **P1 — Per-process rate limiting:** `server.ts:17-40` uses an in-memory Map, unsuitable as a shared limit across multiple serverless instances.
7. **P1 — Q&A safety tests missing:** `server.ts:288+` contains English/Hindi/Gujarati crisis matching and a Gemini system instruction, but CI has no API or adversarial prompt tests.
8. **P1 — Validation is narrower than the brief requires:** `scripts/validate-content.ts:10-117` checks selected localized fields; no test suite is configured for browser journeys, accessibility, or API behavior.
9. **P1 — Possible orphaned views:** `src/views/FAQView.tsx`, `GlossaryView.tsx`, and `AccessibilityView.tsx` exist in the repository tree but were not found as imports/routes in `src/App.tsx`.
10. **P1 — Bundle/performance unknown:** `src/App.tsx:32-49` lazy-loads views but imports condition/substance/topic data statically; no Lighthouse or bundle report was available in this audit environment.
11. **P1 — Content governance incomplete:** condition records have `lastReviewed` and references in `src/types/index.ts:47-92`, but reviewer fields are optional and the existing validator does not establish that references are current or independently verified.
12. **P1 — Deployment config ambiguity:** README documents Vercel, Netlify, GitHub Pages, and full-stack Docker, while their backend capabilities differ; no single production API contract is documented.
13. **P1 — Video PR #2 is open/stale:** compare its diff with current `main`; do not merge without review.
14. **Runtime verification gap:** screenshots, Playwright journeys, axe, Lighthouse, and live API JSON-vs-SPA probes could not be completed with the available tools/network access; treat them as unverified, not passed.

## Evidence and findings

### 1. Repository baseline and CI

- Latest audited commit: [`2a5f0e4`](https://github.com/Raghavsuthar/Mindcare/commit/2a5f0e46c7d078b6030c62ff2a91ce9ca0318f91).
- Vercel deployment metadata reports production target `READY`, project `mindcare`, framework `vite`, and Git commit `2a5f0e46c7d078b6030c62ff2a91ce9ca0318f91`.
- `.github/workflows/ci.yml:1-31` runs Node 22, installs dependencies, runs `npm run validate`, `npm run lint`, and `npm run build`.
- `package.json` declares `lint` as `tsc --noEmit`; it is type-checking, not ESLint.
- The package manifest includes React, TypeScript, Vite, React Router, Tailwind 4, Motion, Lucide, React Markdown, PWA tooling, Express, Google GenAI, and build tooling. The lockfile's resolved versions should be treated as authoritative.

### 2. API inventory

| Endpoint | Client call | Server implementation | Audit status |
|---|---|---|---|
| `GET /api/health` | No first-party client use identified in reviewed snippets | `server.ts:172-179`; `server/apiPlugin.ts:118-130` | Production probe unavailable |
| `POST /api/analytics/ping` | `src/utils/analytics.ts:72-102` | `server.ts:181+`; `server/apiPlugin.ts:132+` | Production probe unavailable |
| `GET /api/analytics/summary` | `src/utils/analytics.ts:164-188` (fetch helper) | `server.ts:249-286` | Production probe unavailable |
| `POST /api/qa` | `src/components/EducationalQAAssistant.tsx:124+` | `server.ts:288+`; corresponding Vite middleware later in `server/apiPlugin.ts` | Production probe unavailable |

**Deployment concern:** `vercel.json:2-6` defines a catch-all rewrite to `/index.html`. The reviewed configuration does not define Vercel Functions for these API endpoints. The Express server and Vite middleware exist, but their existence does not prove they run in the Vercel production deployment.

Attempts to retrieve `https://mindcare-five-delta.vercel.app/api/health` and `/api/analytics/summary` through the available Vercel URL fetcher returned a 403 access-denied error. A direct `curl` attempt could not resolve the host from this environment. Therefore, whether these endpoints return JSON or SPA HTML is **[UNVERIFIED]**.

### 3. Security and privacy

- Admin auth checks a server-side `ADMIN_PASSWORD` with a minimum length of 32 and bearer token validation in `server.ts` (admin endpoint begins at line 249; helper is earlier in the file).
- Rate limiting is process-local and keyed by request IP in `server.ts:17-40`; it is not a distributed limiter.
- The API accepts anonymous aggregate analytics events. The client respects `navigator.doNotTrack === '1'` in `src/utils/analytics.ts`, but no full consent/privacy behavior was tested.
- Q&A input is limited to 2,000 characters in `server.ts:288+`; the server contains a crisis short-circuit before model generation. Coverage for transliteration, colloquial expressions, false negatives, and prompt injection has not been tested.
- Secret rotation status cannot be inferred from source code. Do not expose or request the secret value; verify it in the hosting control panel and rotate any credential that appeared in Git history.

### 4. Routes and data

- Routes are defined in `src/App.tsx` starting at line 277. Conditions use `/:lang/conditions` and `/:lang/conditions/:slug`; child, women's, and substance detail paths also have slug routes.
- The three language codes are `en`, `hi`, and `gu`.
- `src/types/index.ts:47-92` defines the main `Condition` model, localized fields, references, review date/status, related IDs, and optional video IDs.
- `src/data/conditionEvidenceGuides.ts:10-26` defines evidence-guide types and a keyed guide collection.
- The current validator imports condition, substance, treatment, symptom, article, glossary, myth, and FAQ datasets. It checks selected localized fields but does not by itself prove source currency, all related IDs, or all external URLs are valid.
- FAQ/glossary/accessibility view components are present, but were not found as route imports in `src/App.tsx` (no exact import match). Confirm navigation intent before removing or exposing them.

### 5. Performance, accessibility, and visual baseline

- `src/App.tsx:32-49` lazy-loads many views, but also statically imports data needed for deep-link lookups.
- `vite.config.ts:74+` defines manual vendor chunks; no measured bundle sizes or Lighthouse scores were available.
- PWA configuration is in `vite.config.ts`; the service worker includes configured assets and a 5 MB maximum precache-file size. Actual offline crisis behavior was not tested.
- No Playwright, axe, or Lighthouse run was possible from the available environment. No before screenshots were captured. Mobile layout, keyboard flows, modal focus behavior, contrast, font rendering, reduced motion, and offline crisis access remain **[UNVERIFIED]**.

### 6. Clinical content and video governance

- Main condition schema and localized content live in `src/data/conditions.ts` and imported batches, with evidence guides in `src/data/conditionEvidenceGuides.ts`.
- The guide schema includes localized title/introduction/findings/limitations and source links. It does not currently encode GRADE level, effect estimates, guideline recommendation strength, or verified-on/retraction-check metadata.
- `VIDEO_TODO.md` identifies integrated videos and pending topics. PR #2 is open according to current GitHub PR search; review its changes against `main` rather than merging blindly.
- No new clinical claims were added during this audit. Any future clinical additions require source retrieval, source opening, and clinical review before merge.

## Prioritized backlog

| Item | Evidence | Severity | Effort | Suggested phase |
|---|---|---:|---:|---|
| Confirm and repair production API routing | `vercel.json:2-6`, API routes in `server.ts` | P0 | M-L | Phase 2 |
| Remove fictional analytics seed data | `server.ts:87-145`; `server/apiPlugin.ts:25-82` | P0 | S | Phase 2 |
| Replace filesystem analytics with durable store or explicitly disable server analytics | `server.ts:67,147-169` | P0 | M | Phase 2 |
| Verify/rotate admin secret and test deployed rejection | `server.ts` admin auth | P0 | M | Phase 2 |
| Honor `PORT`; align env docs | `server.ts:7,380-385`; README | P1 | S | Phase 2 |
| Shared rate limits and Q&A adversarial tests | `server.ts:17-40,288+` | P1 | M | Phase 2 |
| Add browser, API, accessibility and visual regression tests | `package.json`, CI workflow | P1 | M-L | Phase 7 |
| Capture mobile/desktop before screenshots and Lighthouse baseline | Tool access gap | P1 | M | Phase 1 follow-up |
| Complete route/orphan view review | `src/App.tsx:277+`; `src/views/*` | P1 | S-M | Phase 6 |
| Build condition/reference/reviewer coverage report | `src/types/index.ts:47-92`; validator | P1 | M | Phase 5 |
| Measure and reduce initial data bundle | `src/App.tsx`, `vite.config.ts` | P1 | M-L | Phase 4 |
| Reconcile video PR #2 with current main | PR #2 | P1 | S-M | Phase 6 |
| Design token and responsive visual overhaul | Current UI + missing visual baseline | P2 | L | Phase 3 |
| Add deeper source-reviewed condition guides one PR at a time | Evidence guide schema | P2 | L | Phase 5 |

## What was not completed in this audit

- No local checkout or build/test execution was available through the connected GitHub tools.
- No screenshots were captured.
- No Playwright, axe, or Lighthouse results were produced.
- No live API JSON-vs-SPA result was observed.
- No external clinical sources were retrieved/opened for new content because this phase added no clinical claims.
- No claim is made that the complete site is WCAG 2.2 AA compliant or meets the target Lighthouse scores.

These limitations are explicit to avoid confusing source review with runtime verification.


## Phase 3 UI baseline update — 2026-10-24

- Added Calm Aurora shared design tokens and restrained CSS-only ambient background in `src/index.css`.
- Applied the new hero identity class to the home page and documented token intent/accessibility in `docs/DESIGN_SYSTEM.md`.
- Replaced the home-page author badge's unsupported “MBBS, MD Psychiatry · NMC Registered” claim with “Psychiatry resident · Public education” (localized in English, Hindi, and Gujarati).
- Source-level review only at this point. No screenshots, axe scan, Lighthouse run, or live preview interaction is claimed until CI/preview/browser evidence is available.


## Phase 3 visual redesign update — 2026-10-24

A Calm Aurora styling pass is proposed in `improve/phase-3-visual-redesign`. It applies shared tokens and restrained responsive styles to the header, crisis strip, home hero support panels, library tiles, condition listing cards, condition/substance detail shells, and footer notice. It also removes the unsupported “NMC Registered Specialist” badge wording in favor of a public-education descriptor.

This is a source-level change, not proof of visual acceptance. Screenshots at 360/390/768/1280/1536 px, English/Hindi/Gujarati font rendering, light/dark system behavior, reduced-motion behavior, keyboard checks, axe, and Lighthouse remain **[UNVERIFIED]** until executed against a deployed preview. No performance score or visual regression pass is claimed here.


## Phase 3 follow-up — 2026-10-24

- Follow-up polish in `improve/phase-3-accessibility-polish`: mark the active navigation item with `aria-current`, connect the mobile-menu trigger to its controlled navigation panel, and expose selected language buttons with `aria-pressed`.
- Removed a persistent pulse animation from the footer crisis icon to keep urgent content calm and reduce unnecessary motion.
- Corrected footer profile wording to a localized “Psychiatry resident · Public education” descriptor and removed the unsupported NMC-registration claim.
- Replaced the absolute “zero visitor data collection / strictly confidential” statement with a more qualified, trilingual privacy note that warns users not to enter identifying details into Q&A. This is copy-level risk reduction, not a substitute for a full privacy-policy and data-flow review.
- Source-level review only; browser/axe/mobile keyboard verification remains **[UNVERIFIED]** until a preview can be interacted with using suitable tooling.
