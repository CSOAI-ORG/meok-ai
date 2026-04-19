#!/bin/bash
# Post-Deployment Verification Script

BASE_URL="${1:-https://meok.ai}"

echo "🔍 Verifying MEOK Deployment"
echo "Base URL: $BASE_URL"
echo ""

# Test endpoints
endpoints=(
  "/api/health:API Health"
  "/api/usage/limits?tier=explorer:Usage Limits"
  "/api/referrals/track?code=TEST123:Referral Validation"
)

for endpoint in "${endpoints[@]}"; do
  IFS=':' read -r path desc <<< "$endpoint"
  echo -n "Testing $desc... "
  
  status=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${path}")
  
  if [ "$status" = "200" ] || [ "$status" = "401" ] || [ "$status" = "404" ]; then
    echo "✅ ($status)"
  else
    echo "❌ ($status)"
  fi
done

echo ""
echo "Manual verification steps:"
echo "1. Visit $BASE_URL/start - Homepage loads"
echo "2. Visit $BASE_URL/pricing - Pricing page loads"
echo "3. Sign up test account - Auth working"
echo "4. Test checkout flow - Stripe redirect works"
echo ""
echo "Check dashboards:"
echo "- Vercel: https://vercel.com/dashboard"
echo "- Stripe: https://dashboard.stripe.com"
echo "- Resend: https://resend.com"
echo "- Neon: https://console.neon.tech"
