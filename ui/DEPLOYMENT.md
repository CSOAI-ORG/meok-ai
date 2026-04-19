# MEOK Production Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables (Vercel)

```bash
# Core Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...

# Database
DATABASE_URL=postgresql://... (Neon PostgreSQL)

# Payments (Stripe)
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Email (Resend recommended)
RESEND_API_KEY=re_...

# Cron Jobs
CRON_SECRET=your_secure_random_string

# Optional: Feature Flags
EXPERIMENTS_ENABLED=true
ANALYTICS_ENABLED=true
```

### 2. Database Migration

Run migration v10 on production database:

```bash
# Using psql
psql $DATABASE_URL -f src/lib/db/migrate-v10.sql

# Or using drizzle-kit if configured
npx drizzle-kit migrate
```

**Migration v10 includes:**
- `usage_events` - Metered billing tracking
- `usage_quotas` - Tier configuration
- `user_add_ons` - Purchased add-ons
- `push_subscriptions` - Web Push notifications
- `experiment_assignments/events` - A/B testing
- `email_campaigns` - Email attribution
- `referrals/referral_rewards` - Viral growth
- `character_purchases/user_characters` - Marketplace

### 3. Stripe Webhook Configuration

Configure webhook endpoint in Stripe Dashboard:

**Endpoint URL:** `https://meok.ai/api/webhooks/stripe`

**Events to subscribe:**
- `checkout.session.completed`
- `invoice.payment_failed`
- `customer.subscription.deleted`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

### 4. Email Provider Setup

**Resend (Recommended):**
1. Sign up at resend.com
2. Verify domain (meok.ai)
3. Create API key
4. Add to environment variables

**SendGrid (Alternative):**
1. Sign up at sendgrid.com
2. Complete sender verification
3. Create API key with full access
4. Add to environment variables

### 5. Cron Job Verification

Vercel Cron jobs configured in `vercel.json`:

| Path | Schedule | Purpose |
|------|----------|---------|
| `/api/cron/billing-reminders` | 0 9 * * * | Daily billing reminders |
| `/api/cron/update-registry` | 0 4 * * * | Registry updates |
| `/api/cron/consolidate` | 0 3 * * * | Data consolidation |
| `/api/cron/care-signals` | 0 6 * * * | Care signal processing |
| `/api/cron/streak-reset` | 5 0 * * * | Daily streak reset |
| `/api/cron/weekly-summary` | 0 10 * * 1 | Weekly summaries |

### 6. Deploy to Vercel

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy to production
vercel --prod

# Or via git push (if connected)
git push origin main
```

### 7. Post-Deployment Smoke Tests

```bash
# Test health endpoint
curl https://meok.ai/api/health

# Test A/B test assignment
curl -X POST https://meok.ai/api/experiments/assignment \
  -H "Content-Type: application/json" \
  -d '{"experimentId": "pricing_headline_v1", "userId": "test"}'

# Test usage tracking (requires auth)
curl -X POST https://meok.ai/api/usage/track \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ..." \
  -d '{"eventType": "message_sent", "quantity": 1}'
```

### 8. Feature Activation

**A/B Tests (gradual rollout):**
1. Start with 10% traffic
2. Monitor for 24 hours
3. Increase to 50% if stable
4. Full rollout after 48 hours

**Email Campaigns:**
1. Activate welcome sequence first
2. Enable conversion sequence (40 message trigger)
3. Enable retention sequences (streak milestones)
4. Activate reactivation (7-day inactive cron)

**Referral Program:**
1. Enable code generation
2. Test conversion flow
3. Verify reward application
4. Monitor credit balances

## Monitoring & Alerts

### Key Metrics to Watch

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Build Success | 100% | < 100% |
| API Error Rate | < 1% | > 5% |
| Page Load Time | < 3s | > 5s |
| Checkout Conversion | > 3% | < 1% |
| Email Deliverability | > 95% | < 90% |

### Error Tracking

Sentry is configured. Monitor:
- `/api/webhooks/stripe` - Payment failures
- `/api/cron/*` - Cron job failures
- `/api/usage/track` - Usage tracking errors

## Rollback Plan

If critical issues occur:

1. **Revert deployment:** `vercel --rollback`
2. **Database rollback:** Have migration rollback scripts ready
3. **Feature flags:** Disable experiments via environment variables
4. **Communication:** Status page update, user notifications

## Revenue Tracking Validation

Verify these generate revenue:

- [ ] Tier subscription checkout
- [ ] Usage overage billing
- [ ] Add-on purchase
- [ ] Character marketplace purchase
- [ ] Referral reward application

Expected first 24 hours:
- 5-10 test transactions
- 1-2 real user conversions
- Email delivery > 95%
- A/B test assignments > 100

---

**Deployment Status:** READY ✅

**Estimated Time to First Transaction:** 2-24 hours

**Projected Monthly Revenue at Scale:** $680K ARR
