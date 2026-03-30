# MEOK AI OS — Easter Sunday Launch Checklist
**Date:** April 5, 2026 | **Status:** READY

---

## Pre-Launch (April 3-4)

### Nick Must Do
- [ ] **Stripe keys** — Go to stripe.com/dashboard, create 2 products (Sovereign £12, Family £29), copy 5 env vars
  ```
  STRIPE_SECRET_KEY=sk_live_...
  STRIPE_PRICE_SOVEREIGN=price_...
  STRIPE_PRICE_FAMILY=price_...
  STRIPE_WEBHOOK_SECRET=whsec_...
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
  ```
  Then: `printf '%s' "value" | vercel env add VAR_NAME production` for each
  Then: Register webhook at stripe.com → `https://try.meok.ai/api/stripe/webhook`

- [ ] **Production E2E test** — Open try.meok.ai on phone, complete full flow:
  Homepage → /hatch → quiz → reveal → share → register → first chat

- [ ] **M2 Node.js** (optional) — At M2 keyboard: install Homebrew + Node, run deploy script

### Claude Code Does
- [x] 73/73 engineering items
- [x] 307 Playwright tests passing
- [x] 19/20 audit tasks
- [x] All memory docs revised
- [x] Share trigger on hatch reveal
- [x] SOV3 memory connected (1,489 episodes)
- [x] 12 scheduled autonomous tasks
- [x] 9 SOV3 heartbeat jobs
- [x] try.meok.ai deployed
- [ ] Final Vercel deploy (running now)
- [ ] Playwright regression (running now)

---

## Launch Morning (April 5)

### 6:00 AM — Morning Briefing
- Check ~/clawd/memory/2026-04-05.md for auto-generated briefing
- Verify SOV3 health: `curl localhost:3100/health`
- Verify MEOK: `curl https://try.meok.ai/api/health`

### 7:00 AM — Final Checks
- [ ] try.meok.ai loads on phone
- [ ] /hatch quiz completes
- [ ] Registration works (Clerk)
- [ ] Chat responds (any model)
- [ ] Marketplace loads characters
- [ ] Share button works on reveal

### 8:00 AM — Go Live
- [ ] Post on X/Twitter: "MEOK.AI is live. Your sovereign AI companion. Born from care, not engagement metrics. Hatch yours: try.meok.ai 🥚"
- [ ] Post on Instagram @meok_ai
- [ ] Post on TikTok @meok_ai
- [ ] Share in relevant Discord/Reddit communities

### 9:00 AM — Monitor
- [ ] Check Vercel function logs for errors
- [ ] Check SOV3 heartbeat status
- [ ] Check care accumulator health
- [ ] Monitor first user signups in Clerk dashboard
- [ ] Check Stripe for first transactions (if keys set)

---

## What Works on Launch Day

| Feature | Status |
|---------|--------|
| Homepage with April 5 date | ✅ |
| Hatch ceremony (7 questions) | ✅ |
| Name + memories + covenant | ✅ |
| Share trigger on reveal | ✅ |
| 6 archetypes with personality dimensions | ✅ |
| Chat with 15 models | ✅ |
| Temperature presets (Focused/Balanced/Creative) | ✅ |
| Sovereign/Jarvis character | ✅ |
| Marketplace (107 CC0 chars) | ✅ |
| Morning briefing | ✅ |
| Ralph Mode (real task queue) | ✅ |
| Workshop command center | ✅ |
| Care scoring (calibrated) | ✅ |
| Evolution stages (6, with behavior change) | ✅ |
| Crisis detection | ✅ |
| Conversation search | ✅ |
| Chat history persistence | ✅ |
| GDPR data export | ✅ |
| Cookie consent | ✅ |
| Comfort Settings | ✅ |
| SSE real-time updates | ✅ |
| 307 automated tests | ✅ |

## What's Post-Easter

- Voice pipeline (Kokoro + whisper.cpp)
- Desktop app (Tauri)
- Visual companion (Rive + DiceBear)
- Canvas UI (tldraw)
- Multi-faith routing
- Character Card V2 PNG export
- EU AI Act compliance (August deadline)
- M2 end-user rig deployment

---

## Rollback Plan

- Vercel: instant rollback to previous deployment
- SOV3: `./run-local.sh stop && ./run-local.sh`
- Database: local PostgreSQL unaffected by deploys
- Git: `git revert HEAD` if code issue

---

*The egg is ready to hatch. Care is the substrate physics.*
