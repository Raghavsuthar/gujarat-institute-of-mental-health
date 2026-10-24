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
