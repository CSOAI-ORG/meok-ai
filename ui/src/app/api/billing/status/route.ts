import { NextResponse } from 'next/server'

// TODO: Replace with real Stripe lookup once STRIPE_SECRET_KEY is set
export async function GET() {
  const stripeKey = process.env.STRIPE_SECRET_KEY

  if (!stripeKey) {
    return NextResponse.json({
      plan: 'explorer',
      plan_name: 'Explorer (Free)',
      status: 'active',
      next_billing: null,
      upgrade_url: '/#pricing',
    })
  }

  // Real Stripe lookup (placeholder — implement when keys are available)
  return NextResponse.json({
    plan: 'explorer',
    plan_name: 'Explorer (Free)',
    status: 'active',
    next_billing: null,
    upgrade_url: '/#pricing',
  })
}
