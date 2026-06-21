# Stripe setup — action checklist (human-gated)

These are the Stripe/Vercel dashboard actions that code cannot do. Generated
2026-06-19 from an audit of the live `ui` app. Do **#1 first** — it's a
revenue-integrity bug, not just a missing key.

---

## 1. 🔴 CRITICAL — three payment links are reused across differently-priced tiers

`src/app/pricing/page.tsx` points multiple tiers at the **same** Stripe Payment
Link, so the higher-priced tier silently charges the lower price (or the wrong
billing model entirely). Each conflict needs its **own** new Payment Link.

| Shared link (suffix) | Currently correct for | Also (wrongly) used by | What the wrong tier charges today | Fix |
|---|---|---|---|---|
| `…8k91S` | Sovereign **£9/mo** (line 51) | **Sovereign Starter £29/mo** (line 75) | £9 instead of £29 | New £29/mo link → line 75 |
| `…8k91T` | Sovereign Pro **£19/mo** (line 58) | **Pro £199/mo** (line 82) | **£19 instead of £199 (10× underprice)** | New £199/mo link → line 82 |
| `…8k91R` | Family **£29/mo** (line 65) | **LAUNCH50 £499 kit** (line 106) | £29/mo recurring instead of £499 one-time | New £499 one-time link → line 106 |

**Steps**

1. In Stripe → Payment Links, create three new links:
   - **Sovereign Starter** — £29/mo recurring (compliance tier).
   - **Pro (compliance)** — £199/mo recurring.
   - **LAUNCH50** — £499 **one-time** (not recurring) for the Article 50 Kit.
2. Paste each new URL into the line shown above in `src/app/pricing/page.tsx`.
3. (Optional) add `?prefilled_promo_code=LAUNCH50` to the LAUNCH50 link if you
   want the discount pre-applied.

Until done, the pricing page **under-charges three tiers** — the Pro tier by 10×.

---

## 2. 🔴 Vercel env — replace placeholder secrets (all server checkout 500s without these)

`.env.production` currently has these as literal `REPLACE…` placeholders. Set the
**real live values** in the Vercel dashboard for project `ui` → Settings →
Environment Variables → **Production** (do NOT commit live keys to the repo):

| Var | Status | Note |
|---|---|---|
| `STRIPE_SECRET_KEY` | ❌ placeholder `REPLACE…` | Live `sk_live_…`. The #1 blocker — every server-side checkout/webhook 500s without it. (As of 2026-06-19 the checkout routes now degrade to a graceful 503 instead of 500, but no checkout completes until this is set.) |
| `STRIPE_PUBLISHABLE_KEY` | ❌ placeholder `REPLACE…` | Live `pk_live_…` |
| `STRIPE_WEBHOOK_SECRET` | ⚠️ `whsec_d…` present | Confirm it matches the **production** webhook endpoint's signing secret. |

Quickest path: `keystone sync-vercel` if these live in Keystone, otherwise paste
in the dashboard.

---

## 3. 🟠 Vercel env — propagate the price IDs

These have real `price_…` values in `.env.production` but the audit found them
**absent from the Vercel-pulled env** — i.e. they're not in the dashboard, so the
consumer tiers throw "price ID not configured" → 503 (was 500). Push each to
Vercel Production:

```
STRIPE_PRICE_SOVEREIGN_MONTHLY
STRIPE_PRICE_SOVEREIGN_ANNUAL
STRIPE_PRICE_FAMILY_MONTHLY
STRIPE_PRICE_FAMILY_ANNUAL
STRIPE_PRICE_BYOK_MONTHLY
STRIPE_PRICE_PRO
STRIPE_PRICE_PREMIUM
STRIPE_PRICE_GOVERNANCE_SMB_MONTHLY
STRIPE_PRICE_GOVERNANCE_PRO_MONTHLY
STRIPE_PRICE_GOVERNANCE_ENTERPRISE_MONTHLY
```

(Values are already in `.env.production` lines ~19–40.)

---

## 4. 🟡 Decision — `governance-defence` tier

`STRIPE_PRICE_GOVERNANCE_DEFENCE_MONTHLY` is referenced in code but set nowhere,
and `governance-defence` is excluded from `PAID_TIERS` in
`src/app/api/checkout/route.ts`, so it can't be checked out today (clean 400).

Decide one of:
- **Self-serve**: create the £2,499/mo price, set the env var, add
  `'governance-defence'` to `PAID_TIERS`.
- **Sales-led** (recommended): leave as-is — selecting it routes to contact/sales.

No code change needed for the sales-led option; the route already rejects it
cleanly.

---

## Verify after setup

```bash
# from ui/ with the live env loaded
curl -s -o /dev/null -w '%{http_code}\n' -X POST http://localhost:3000/api/checkout \
  -H 'Content-Type: application/json' -d '{"tier":"sovereign","interval":"month"}'
# expect 200 with a checkout URL once price IDs + secret key are set (503 = still unconfigured)
```
