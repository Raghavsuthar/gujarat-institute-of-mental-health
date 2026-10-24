# Architecture Decisions

## 2026-10-24 — Production API runtime and analytics storage

**Status:** Proposed in PR `improve/p0-api-security`; do not treat as production-active until deployment and environment configuration are verified.

### Decision

- Keep the Vite-built React SPA on Vercel.
- Implement production endpoints as Vercel Functions under the root `api/` directory.
- Keep `server.ts` as the Express entry point for Docker/self-host deployments.
- Use Upstash Redis REST as the durable aggregate analytics store and shared rate-limit store for both API runtimes.
- Share validation, crisis detection, token verification, rate limiting, and analytics storage helpers from `server/shared/analytics.ts`.
- Exclude `/api/*` from the SPA fallback rewrite.
- If Upstash configuration is missing or storage is unavailable, API handlers return an explicit error instead of reporting fake analytics or silently treating HTML as JSON.

### Rationale

The current Vercel project is configured as a Vite SPA and does not automatically run the Express server. Vercel Functions fit the existing hosting model; Upstash Redis REST avoids adding a database SDK and supports serverless use. Keeping Express preserves the self-host/Docker option.

### Required server-side environment

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `ADMIN_PASSWORD` (unique, at least 32 characters)
- `GEMINI_API_KEY` (optional; the Q&A endpoint has a non-personalized educational fallback)
- `RATE_LIMIT_SALT` (recommended; used to hash transient rate-limit identifiers)

Never add these values to source control or prefix them with `VITE_`.

### Data and privacy

- Analytics values are aggregate counters only.
- No raw IP address or user query is written to the analytics store.
- Rate-limit identifiers are hashed before being used as temporary Redis keys; the keys expire.
- Daily analytics buckets expire after 90 days.
- The app does not claim that analytics are durable until the required Redis environment is configured and a production write/read test passes.

### Consequences and follow-up

- Local Vite development keeps a separate development-only analytics file, initialized at zero.
- Self-hosted Express deployments require the same Upstash credentials for analytics and shared rate limits.
- A missing Redis configuration intentionally makes analytics endpoints return HTTP 503.
- Verify live `/api/health`, `/api/analytics/ping`, `/api/analytics/summary`, and `/api/qa` after deployment.
- Confirm the selected Upstash database's retention, access control, and billing settings in the owner account.
- This PR does not provision an Upstash database or set production secrets.


## 2026-10-24 — Dependency audit and build baseline

**Status:** Findings confirmed by GitHub Actions CI run #72; remediation not yet applied.

The report-only `npm audit` step found **10 advisories** in the installed dependency graph: 1 critical, 5 high, 3 moderate, and 1 low. npm reports compatible fixes available for the listed packages.

| Package | Severity | Finding / note |
|---|---|---|
| `proxy-addr` | Critical | IP spoofing through IPv4-mapped IPv6 trusted subnet handling; GHSA-jqcg-44mw-7w3h |
| `body-parser` | High | Denial of service with trailing bytes after a compressed request body; GHSA-27r3-jxmh-p828 |
| `brace-expansion` | High | Multiple CPU/stack exhaustion advisories; GHSA-q2hr-2g5m-vwhr, GHSA-qhr7-859c-m2p7, GHSA-6j4f-fj2g-mc7p |
| `vite` | High | Multiple advisories affecting versions up to 6.4.3; includes custom middleware cross-origin script execution and path access issues |
| `sharp` | High | librsvg dependency vulnerability CVE-2026-96889; GHSA-wq5f-xc86-pv6w |
| `source-map-js` | High | Event-loop denial of service via indexed source-map offsets; GHSA-68fv-2mgg-jv7q |
| `fast-uri` | Moderate | Multiple URI normalization / scheme / host confusion advisories |
| `qs` | Moderate | Array-limit bypass and denial of service advisories |
| `express` | Moderate | Inherits the `qs` advisory in the installed dependency graph |
| `serialize-javascript` | Low | Script-termination/XSS serialization advisories |

**Decision:** Do not run `npm audit fix --force` or blindly upgrade major versions. Prepare a dedicated dependency-remediation PR using compatible fixes, then run content validation, typecheck, unit tests, production build, and a fresh `npm audit`. Review whether the Vite advisories affect production-only deployment or development tooling separately; do not dismiss them solely because some apply to the dev server.

**Build baseline:** CI run #72 passed content validation, TypeScript checks, API safety tests, and production build. Vite reported a main JS chunk of approximately 3.43 MB uncompressed / 959 KB gzip, plus a warning that a chunk exceeds 600 kB. This is a Phase 4 performance target, not a failed build.


## 2026-10-24 — Phase 3 Calm Aurora visual system

**Status:** Proposed in PR `improve/phase-3-visual-redesign`; merge only after CI and visual review.

### Decision
- Extend the existing Calm Aurora tokens instead of introducing a second CSS framework, remote fonts, or new image dependencies.
- Apply the shared visual language to the sticky header/crisis strip, home storytelling and library tiles, condition listing cards, condition/substance detail shells, and footer notice.
- Replace the unsupported “NMC Registered Specialist” badge with a descriptive public-education label; this is not a credential claim.
- Keep crisis access links visible and preserve their phone targets; reduce persistent pulsing decoration to avoid unnecessary motion.
- Use CSS-only decoration, transform/opacity transitions, and reduced-motion overrides to avoid added network requests and layout shifts.

### Verification limits
- CI is the source of truth for TypeScript, content validation, unit tests, and production build.
- No browser screenshots, cross-width visual comparison, axe scan, or Lighthouse measurement is claimed until those tools actually run against the preview.
- Manual clinical review of the copy and verification of all displayed helplines remain separate sign-off items.


## 2026-10-24 — Phase 3 accessibility and trust-copy follow-up

**Status:** Proposed in PR `improve/phase-3-accessibility-polish`.

- Add programmatic state to language controls and active navigation, and link the mobile menu button to its panel for assistive technology.
- Remove persistent footer crisis-icon pulsing; crisis information should be prominent without a perpetual animation.
- Avoid unsupported professional-registration claims in the footer. Use the descriptive, localized public-education role instead.
- Avoid absolute privacy guarantees that conflict with aggregate analytics. Tell visitors that aggregate page-view analytics may be sent when enabled and not to submit identifying details to the Q&A tool.
- These source changes do not establish runtime accessibility, analytics behavior, or legal privacy-policy compliance; verify separately.


## 2026-10-24 — Phase 4 lazy deep-link dataset loading

**Status:** Proposed in PR `improve/phase-4-defer-content-data`.

- Keep route components and their current schemas unchanged.
- Remove eager dataset imports from `src/App.tsx`; load the relevant content module only when its URL contains a detail slug. Cancel stale effect results when the slug changes and fail closed to a null detail if the module fails to load.
- Rationale: the entry module should not force all deep-link data collections into the initial chunk merely to resolve an optional modal.
- Acceptance requires successful type-check/build, inspection of emitted chunk sizes, and direct-link checks for condition, child topic, women's topic, and substance routes. Performance targets must be measured separately with Lighthouse; this code change alone does not establish them.

- Extend the split to global dialogs: load Search, Crisis, Screener, and detail-dialog components on demand, wrapped in `Suspense` with a null fallback. Render them only when requested or when the corresponding deep-linked record exists. Preserve crisis state handoff from screener/detail dialogs.


### CI evidence update

The Phase 4 build confirms code splitting: the previous 3,437.90 kB `index` chunk is replaced by `index-*` chunks of 421.62 kB, 432.33 kB, and 477.01 kB, while the condition collection is emitted as a separate 1,304.25 kB chunk (372.64 kB gzip). Crisis and screener dialogs are separate chunks. Do not describe this as a Lighthouse improvement or a verified reduction in initial network transfer until browser/network measurements are available. The remaining large conditions chunk should be considered for batch-level splitting.


## 2026-10-24 — Keep home spotlights independent from the full condition library

**Status:** Proposed in PR `improve/phase-4-lightweight-home-spotlights`.

- Use a small presentation-only localized dataset for the four home spotlight cards instead of importing all of `src/data/conditions.ts` into `HomeView`.
- Keep summaries generic and non-clinical; the condition library remains the source for full educational content. The spotlight click only requires the matching slug to navigate to the detail route.
- Correct the stale ADHD spotlight ID to `adhd`, matching the existing condition record.
- Acceptance requires TypeScript/build success and inspection of emitted chunks. Confirm that home spotlights render and that all four links resolve in the preview before considering the optimization complete.
