# Architecture Decisions

## 2026-10-24 — Production API runtime and analytics storage

**Status:** Proposed in PR `improve/p0-api-security`; do not treat as production-active until deployment and environment configuration are verified.

### Decision

- Keep the Vite-built React SPA on Vercel.
- Implement production endpoints as Vercel Functions under the root `api/` directory.
- Keep `server.ts` as the Express entry point for Docker/self-host deployments.
- Use Upstash Redis REST as the durable aggregate analytics store and shared rate-limit store for both API runtimes.
- Share validation, crisis detection, token verification, rate limiting, and analytics storage helpers from `api/_lib/analytics.ts`.
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
