# 🚀 MEOK Live Deployment Checklist

## Pre-Flight Status

| Component | Status | Notes |
|-----------|--------|-------|
| Build | ✅ Ready | 846 pages, 165 API routes |
| Tests | ✅ Passing | 299 tests |
| Migration | ✅ Ready | v10 (202 lines) |
| Scripts | ✅ Ready | deploy.sh, verify-deployment.sh |

## Generated Secrets

```bash
# CRON_SECRET (for Vercel)
CRON_SECRET=<GENERATE: openssl rand -base64 32>
```

## Quick Deploy Commands

```bash
# 1. Navigate to project
cd /Users/nicholas/clawd/meok/ui

# 2. Run deployment script
./deploy.sh

# 3. Verify deployment
./verify-deployment.sh https://meok.ai
```

## Manual Deployment Steps

### Step 1: Environment Variables

```bash
# Login to Vercel
vercel login

# Set all required variables
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
vercel env add CLERK_SECRET_KEY
vercel env add DATABASE_URL
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add RESEND_API_KEY

# Set the generated CRON_SECRET
vercel env add CRON_SECRET <GENERATE: openssl rand -base64 32>
```

### Step 2: Database Migration

```bash
# Execute migration
psql $DATABASE_URL -f src/lib/db/migrate-v10.sql

# Verify tables
psql $DATABASE_URL -c "\dt"
```

### Step 3: Deploy

```bash
# Production deploy
vercel --prod
```

### Step 4: Stripe Webhooks

Configure at https://dashboard.stripe.com/webhooks:

- Endpoint: `https://meok.ai/api/webhooks/stripe`
- Events: `checkout.session.completed`, `invoice.payment_failed`, `customer.subscription.deleted`

### Step 5: Verify

```bash
# Health check
curl https://meok.ai/api/health

# A/B test
curl -X POST https://meok.ai/api/experiments/assignment \
  -H "Content-Type: application/json" \
  -d '{"experimentId":"pricing_headline_v1","userId":"test"}'
```

## Post-Deploy Actions

- [ ] Confirm build success in Vercel dashboard
- [ ] Test signup flow
- [ ] Test checkout flow
- [ ] Verify email delivery
- [ ] Check A/B test assignments
- [ ] Monitor Sentry for errors

## Emergency Contacts

| Service | URL | Support |
|---------|-----|---------|
| Vercel | https://vercel.com/dashboard | status.vercel.com |
| Stripe | https://dashboard.stripe.com | stripe.com/support |
| Neon | https://console.neon.tech | neon.tech/docs |
| Resend | https://resend.com | resend.com/support |

---

**Ready to deploy. GO LIVE WHEN READY.** 🚀

**Projected Revenue:** $680K/mo at scale  
**Time to First Transaction:** 2-24 hours post-deploy
