#!/bin/bash
# MEOK Production Deployment Script
# Generated: $(date)

set -e

echo "🚀 MEOK Production Deployment"
echo "=============================="

# Check prerequisites
echo "Checking prerequisites..."
command -v vercel >/dev/null 2>&1 || { echo "Vercel CLI required. Run: npm i -g vercel"; exit 1; }
command -v psql >/dev/null 2>&1 || { echo "psql required for database migration"; exit 1; }

# Verify environment variables
echo "Verifying environment variables..."
required_vars=(
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
  "CLERK_SECRET_KEY"
  "DATABASE_URL"
  "STRIPE_SECRET_KEY"
  "STRIPE_WEBHOOK_SECRET"
  "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"
  "RESEND_API_KEY"
  "CRON_SECRET"
)

for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    echo "❌ Missing: $var"
    exit 1
  fi
  echo "✓ $var"
done

# Step 1: Database Migration
echo ""
echo "Step 1: Database Migration"
echo "--------------------------"
if psql "$DATABASE_URL" -f src/lib/db/migrate-v10.sql; then
  echo "✅ Migration v10 complete"
else
  echo "❌ Migration failed"
  exit 1
fi

# Step 2: Build Verification
echo ""
echo "Step 2: Build Verification"
echo "--------------------------"
npm run build
if [ $? -eq 0 ]; then
  echo "✅ Build successful"
else
  echo "❌ Build failed"
  exit 1
fi

# Step 3: Deploy to Vercel
echo ""
echo "Step 3: Production Deployment"
echo "-----------------------------"
vercel --prod

echo ""
echo "=============================="
echo "✅ DEPLOYMENT COMPLETE"
echo "=============================="
echo ""
echo "Next steps:"
echo "1. Configure Stripe webhooks at https://dashboard.stripe.com/webhooks"
echo "2. Test health endpoint: curl https://meok.ai/api/health"
echo "3. Activate A/B tests: UPDATE experiment_config SET enabled = true"
echo "4. Monitor Sentry for errors"
echo ""
echo "Projected first transaction: 2-24 hours"
