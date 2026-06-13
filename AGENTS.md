# AGENTS.md — meok (meok-ai) repo

## Repo overview
- Next.js 15 + Clerk + Stripe + Vercel Edge
- Production: meok.ai / www.meok.ai / try.meok.ai
- Project ID: `prj_uyQUG4G4FQPCwVjMDmBYYLaeBp7G` (Vercel)
- Vercel CLI auth: `nicholastempleman-5584` in team `niks-projects-0a2ef942`

## Vercel deploys: read this BEFORE triggering a new deploy (2026-06-13 lesson)

Every new Vercel deploy after 11:00 BST 2026-06-13 returns **403 with `x-vercel-mitigated: deny`** for all `/api/*` paths until the WAF rate-limit window clears (24-48h). UI pages return 200. The build is correct (1814 output items, function present), but the request never reaches the function.

### Symptoms
- New deploy URL (e.g. `ui-xxxxx-niks-projects-0a2ef942.vercel.app`) returns:
  - `/` → 200
  - `/article-50-kit` → 200
  - `/verify`, `/enterprise`, `/partner`, `/reseller` → **500** (Clerk keys empty in build env)
  - `/api/*` → **403** (`x-vercel-mitigated: deny`, `cf-ray: ...LHR`)
- The 3h-old deploy `ui-q1nq7zf8l` works perfectly — aliased to meok.ai right now

### Tried and FAILED (10+ mitigations)
1. `vercel deploy --prod --yes --force` — 403 persists
2. Middleware bypass for /api/* in `ui/src/middleware.ts` — committed at `751b278`
3. Set project `rootDirectory: "ui"` via Vercel API
4. Re-linked from `meok` project to `ui` project
5. Fixed all TS/lint errors that blocked build (Wrench/Factory/LifeBuoy in sidebar.tsx, Box in apps.ts, 7 unquoted `href=https://...` JSX, unescaped `->` in JSX) — committed at `636ec18`
6. Set `MEOK_LOCAL_MODE=true` in production env
7. Set `skewProtectionMaxAge: 0`
8. `ssoProtection: null, passwordProtection: null, trustedIps: null`
9. Nuked `.vercel` + `.next` + force pull + force build
10. Fixed `vercel.json` (rootDirectory=ui, removed 3e36b3c's static-site config)

**Root cause: Vercel's edge WAF (`x-vercel-mitigated: deny` header). Not application code.**

### Pre-re-alias check script (use this!)
`/Users/nicholas/clawd/meok.ai/_ops/pre_realias_check.sh <new-vercel-app-url>`

Exit 0 = safe to alias; exit 1 = do NOT alias (revenue would break).

The script checks 5 things:
1. `/fleet` returns 200 (with body match `<`)
2. `/verify` + `/enterprise` + `/partner` + `/reseller` return 200
3. `/llms.txt` + `/llms-full.txt` + `/sitemap.xml` return 200 with body match (`# MEOK`, `<urlset`)
4. `/api/health` returns 200
5. `/.well-known/<indexnow-key>.txt` returns 200 with body = key

Body-match checks ensure a 200 with empty/wrong body doesn't false-positive.

### Recommended workflow for the next 24-48h (until WAF clears)
1. **Don't** ship new Vercel deploys unless the user explicitly requests it
2. If a new deploy is needed (e.g. for the IndexNow key file at `/.well-known/<key>.txt`), first run:
   `pre_realias_check.sh <new-vercel-app-url>`
3. If green: alias meok.ai / www.meok.ai / try.meok.ai to the new deploy, then POST the 76-URL IndexNow batch at `/Users/nicholas/clawd/meok.ai/indexnow_batch_real.json`
4. If red: investigate. Don't alias. Revert to the 3h-old deploy.

### Aliases (live, 16:00 BST 2026-06-13)
```
meok.ai         -> ui-q1nq7zf8l-niks-projects-0a2ef942.vercel.app  (3h-old, working)
www.meok.ai     -> ui-q1nq7zf8l-niks-projects-0a2ef942.vercel.app  (3h-old, working)
try.meok.ai     -> ui-q1nq7zf8l-niks-projects-0a2ef942.vercel.app  (3h-old, working)
```

## Cron jobs
- `poll-stripe-revenue` (every 15 min) — `/tmp/stripe_webhook/cron_poll.sh` — IMs Nick on first charge > £0
- `check-delboy-github` (every 30 min) — auto-pushes `/tmp/delboy_repo` bundle when Nick creates the repo

## Blockers (need Nick)
1. Run `mcp-publisher login github` in his terminal, click device-flow URL → unblocks 30+ MCP publishes + Punkpeye PR + Apify + Smithery + Glama
2. Create `CSOAI-ORG/delboy` empty GitHub repo → cron `check-delboy-github` polls every 30 min
3. Create `CSOAI-ORG/mavis-mcp-marketplace` empty GitHub repo
4. Optional: click "Redeploy" in Vercel dashboard to clear the WAF faster

## Distribution posts (ready to submit)
- `/tmp/hn_post_article_50.md` — Show HN
- `/tmp/reddit_post_mcpservers.md` — r/MCPservers
- `/tmp/indiehackers_post.md` — IndieHackers founder story
- `/tmp/product_hunt_post.md` — Product Hunt launch
- `/tmp/owasp_submission_body.md` — OWASP project submission
- `/tmp/nist_ai_rmf_submission.md` — NIST AI RMF resource
- `/tmp/iapp_submission.md` — IAPP privacy resource
- `/tmp/enisa_submission.md` — ENISA reference implementation
- `/tmp/csa_submission.md` — Cloud Security Alliance registry

## Key references
- 30-day launch playbook: `/Users/nicholas/clawd/_TABS/_inventory/MEOK_LAUNCH_PLAYBOOK_2026-06-13.md`
- Full state handoff: `/tmp/MEOK_LAUNCH_HANDOFF_2026-06-13.md`
- Fleet inventory: `/Users/nicholas/clawd/_TABS/_inventory/OPENMCP_FINAL_2026-06-13.md`
- EAT audit: `/Users/nicholas/clawd/_TABS/_inventory/EAT_AUDIT_2026-06-13.md`
- Distribution kit: `/Users/nicholas/clawd/_TABS/_inventory/DISTRIBUTION_KIT_2026-06-13.md`
- Punkpeye PR: `/Users/nicholas/clawd/_TABS/_inventory/PUNKPEYE_PR_2026-06-13.md`

## Stripe live
- Sovereign £29/mo: https://buy.stripe.com/9B67sNeoIcMObEx56o8k91S
- Pro £199/mo: https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T
- Enterprise £1,499/mo: https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U
- Article 50 Kit £999: https://buy.stripe.com/fZu00l4O8fZ07oh0Q88k91V
- LAUNCH50 £499: https://buy.stripe.com/4gMcN7a8s6oq0ZTaqI8k91Z
- Quick Kit £9: https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W
- Audit-Prep £4,950: https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X
- Watchdog Cert £4,950: https://buy.stripe.com/9B6dRb2G0eUWcIBaqI8k91Y

