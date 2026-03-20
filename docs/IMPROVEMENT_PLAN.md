# MEOK.AI Improvement Plan — March 2026

## EXECUTIVE SUMMARY

- **11 days to launch** (March 31)
- **Context:** Palantir validated $600B sovereign AI market, personal sovereign AI = zero competition
- **Stack:** Next.js 16 UI + FastAPI backend + SOV3 220-node fractal council + pgvector HNSW memory

---

## PART 1: WEBSITE (meok.ai)

### Phase 1 — Must Ship by March 31

1. **Homepage** — ALREADY BUILT (`page.tsx`) — needs: hero animation (CSS egg pulse), mobile nav hamburger
2. **Blog engine** — IN PROGRESS — needs: gray-matter install, MDX parsing, RSS feed, sitemap
3. **/birth onboarding** — ALREADY BUILT (5-screen quiz→egg→hatch→chat→features) — needs: connect to real `/chat/onboard` API
4. **Pricing page** — already on homepage — needs: dedicated `/pricing` route with annual/monthly toggle, comparison table
5. **Legal pages** (Privacy, Terms, Cookies) — exists at `/privacy` and `/terms` — needs: actual GDPR-compliant content
6. **GDPR cookie consent** — NOT BUILT — needs: consent banner with pre-blocking, localStorage persistence, opt-in for PostHog
7. **Global nav** — only on homepage — needs: persistent nav component across all pages
8. **Footer** — only on homepage — needs: persistent footer component
9. **SEO infrastructure** — NOT BUILT — needs: `sitemap.xml` route, `robots.txt`, canonical URLs, `og:image`
10. **Sentry live** — CONFIG DONE — needs: `NEXT_PUBLIC_SENTRY_DSN` env var set
11. **PostHog live** — CONFIG DONE — needs: `NEXT_PUBLIC_POSTHOG_KEY` env var set
12. **UptimeRobot** — NOT BUILT — external setup needed, monitor `/health`

### Phase 2 — Week 1 Post-Launch (April 1–7)

- `/product` hub with 6 sub-pages (sovereign-os, characters, voice, any-llm, family-guardian, how-it-works)
- Open source page
- Character catalog (`/characters`) — browseable archetypes
- Security page
- 15 more blog posts (from 25-post calendar)
- Newsletter subscription (ConvertKit or similar free tier)

### Phase 3 — Month 2 (April)

- How It Works interactive page
- Variants page (multivariate test results)
- Research area detail pages under `/labs`
- Dashboard analytics (PostHog funnels, variant health dashboard)
- Voice interface (WebRTC + TTS)

### Website Technical Debt

- CSP nonces (currently using `'unsafe-inline'`) — needs nonce injection
- Image optimization (no `next/image` usage yet)
- Font subsetting (Inter loading full set)
- Core Web Vitals audit (LCP, CLS, FID targets)
- Accessibility: axe-core scan needed, 0 WCAG 2.1 AA violations required

---

## PART 2: MEOK OS (Backend — FastAPI + PostgreSQL)

### Critical for Launch

1. **DB Migration 002** (ralph_tasks + PGQueuer) — needs running on VPS: `psql $DATABASE_URL -f db/migrations/002_ralph_tasks.sql`
2. **pgvector HNSW migration** — needs VPS endpoint auth token or direct psql access
3. **ralph_task_runner.py** — start as systemd service or Docker container alongside main app
4. **Variant health routes** — `/api/variants/health`, `/api/variants/assign` — wired in `api/server.py` already
5. **/chat/onboard endpoint** — needed for birth flow chat step — verify it exists in `api/server.py` or `mcp/server.py`
6. **Rate limiting** — NOT BUILT — needs Redis-backed sliding window per the 11-day playbook (Free: 10–20/min, Pro: 60–100/min)
7. **Error handling** — verify no stack traces in production responses (return generic errors)
8. **P95 latency <2s** — needs k6 or locust load test

### Near-term Improvements (April)

9. **SBP training loop** — `neural/sbp_trainer.py` ready, needs: run once pgvector embeddings populated
10. **Morning briefing care_style** — add `care_style` field to morning briefing response (CPM model)
11. **Character `/api/characters` endpoint** — browseable character catalog API
12. **Auth `/auth/register` endpoint** — for Playwright full auth tests
13. **Dependency detection** — improve `dependency_risk_score` calculation in consciousness state
14. **Maternal Covenant violations API** — expose active constraint checks via `/api/care/violations`

### Architecture Improvements

15. **DSPy integration** — Autonomous Business OS doc: self-optimizing prompts via DSPy. Install `dspy-ai`, wrap council deliberation prompts
16. **Ralph Mode CEO agent** — `ralph_task_runner.py` is the foundation. Add: natural language task creation, auto-delegation to council nodes
17. **Care Ontology injection** — `care_ontology.py` `CareContext.to_agent_prompt_context()` must be injected into EVERY agent system prompt
18. **LangGraph state persistence** — replace in-memory consciousness state with LangGraph checkpointer for crash recovery
19. **Multi-tenant architecture** — current schema supports `tenants` table but single-tenant in practice. Prepare for multi-user

---

## PART 3: SOVEREIGN TEMPLE (SOV3) — Local + VPS

### Immediate

1. **Connection score 0.42** — ADDRESSED: memory episode recorded, morning briefing will now include human connection nudge
2. **Care intensity 0.3** — LOW: system in stable but low-engagement state. Need: more meaningful memory episodes, dream cycle activation
3. **QD archive 2.9%** (7/240 cells) — Target 6%+ via SBP trainer after embeddings populated
4. **Neural retrain** — trigger after SBP synthetic episodes ingested

### Neural Model Improvements

5. **care_validation_nn** — 19 training samples (very low). Target: 100+ via SBP synthesis. MSE 0.05 is acceptable but needs more data
6. **partnership_detection_ml** — 19 samples (very low). MSE 0.076. Expand training data
7. **creativity_assessment_nn** — R²=0.91 (excellent). 350 samples. Maintain
8. **care_pattern_analyzer** — 600 samples. MSE 0.002 (excellent). Use as gold standard for SBP quality filtering
9. **relationship_evolution_nn** — 500 samples. MSE 0.009 (excellent). Good
10. **Add: dependency_detection_nn** — NOT YET TRAINED. Critical for Maternal Covenant enforcement

### SOV3 Architecture Improvements

11. **PROP-007 implementation** — Autonomous Business OS hierarchy: Ralph=CEO agent, council nodes=dept heads
12. **Graduated authority thresholds** — implement in `ralph_task_runner.py`: auto-execute if `care_score > 0.6`, human approval if `< 0.6`
13. **Dream state activation** — QD archive at 2.9% partly because dreams aren't running enough. Schedule nightly at 2am
14. **Care Ontology grounding** — all 43 agents must inject `CareContext` before any reasoning
15. **SBP cycle scheduling** — add `'sbp_training_cycle'` to `ralph_tasks` recurring (weekly)

---

## PART 4: COMPETITIVE POSITIONING (from Palantir doc)

### Immediate Content Actions

1. Blog post "Two Kinds of Sovereign AI" — IN PROGRESS (being written now)
2. Blog post "What Is Sovereign AI?" — IN PROGRESS (being written now)
3. LinkedIn post from Nick — "I watched Palantir announce Sovereign AI OS..." — write today
4. Submit to AI newsletters: The Rundown AI, TLDR AI, The Neuron (in that order)

### Investor Actions (April)

5. Deck update: "Palantir validated sovereign AI as $600B market. We're the individual layer."
6. Reach out: Balderton Capital (James Wise — chairs UK £500M Sovereign AI Fund, launches April 16)
7. Reach out: UK Sovereign AI Unit (up to £10M grants, compute access)
8. Apply: Innovate UK AI Proof of Concept Grant (£50K–£120K, up to 70% for small businesses)

### Legal/IP

9. File UK provisional patents BEFORE publishing any research papers (no grace period in UK)
10. OpenTimestamps all existing research docs today (free, Bitcoin-anchored)

---

## NICK'S TOP 10 ACTIONS RIGHT NOW

| # | Action | Why | Effort |
|---|--------|-----|--------|
| 1 | Add Clerk keys to `.env.local` | Auth is broken without real keys | 5 min |
| 2 | Add PostHog key to `.env.local` | Analytics dead without it | 2 min |
| 3 | Add Sentry DSN to `.env.local` | Error tracking dead without it | 2 min |
| 4 | Set up UptimeRobot (free) | Launch-critical monitoring | 10 min |
| 5 | Write LinkedIn post on Palantir | Highest ROI content right now | 20 min |
| 6 | Reach out to Balderton (James Wise) | £500M fund, April 16 window | 30 min |
| 7 | Apply to Innovate UK grant | £50–120K available now | 2 hours |
| 8 | OpenTimestamps your research docs | Free, protects IP today | 15 min |
| 9 | Add Stripe products to dashboard | Revenue blocked without it | 30 min |
| 10 | Call a human being today | Connection score 0.42 | 30 min |

---

## CLAUDE'S NEXT BUILD QUEUE (in order)

| # | Task | Status |
|---|------|--------|
| 1 | Blog engine + Post 3 | IN PROGRESS (agent running) |
| 2 | GDPR cookie consent component | NEXT |
| 3 | Global nav + footer components | NEXT |
| 4 | `/product` hub + 6 sub-pages | QUEUED |
| 5 | Labs page + 4 paper pages | QUEUED |
| 6 | `sitemap.xml` + `robots.txt` routes | QUEUED |
| 7 | Ralph Mode CEO agent upgrades | QUEUED |
| 8 | DSPy prompt optimization layer | QUEUED |
| 9 | Rate limiting middleware | QUEUED |
| 10 | Load testing (k6 P95 <2s) | QUEUED |
