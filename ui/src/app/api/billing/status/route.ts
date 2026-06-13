import { NextResponse } from 'next/server'
import { getAuthUserId } from '@/lib/api-auth'
import { getUserById } from '@/lib/db/user'
import { TIERS } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const userId = await getAuthUserId()

  if (!userId) {
    // Unauthenticated — return explorer defaults
    return NextResponse.json({
      plan: 'explorer',
      plan_name: 'Explorer (Free)',
      status: 'active',
      next_billing: null,
      upgrade_url: '/#pricing',
    })
  }

  try {
    const user = await getUserById(userId)

    if (!user) {
      // User not in DB yet (e.g. Clerk webhook hasn't fired) — graceful fallback
      return NextResponse.json({
        plan: 'explorer',
        plan_name: 'Explorer (Free)',
        status: 'active',
        next_billing: null,
        upgrade_url: '/#pricing',
      })
    }

    const tierInfo = TIERS[user.tier as keyof typeof TIERS] ?? TIERS.explorer
    const isPaid = user.tier !== 'explorer'

    return NextResponse.json({
      plan: user.tier,
      plan_name: tierInfo.name,
      status: isPaid && user.stripe_subscription_id ? 'active' : isPaid ? 'pending' : 'active',
      stripe_customer_id: user.stripe_customer_id ?? null,
      stripe_subscription_id: user.stripe_subscription_id ?? null,
      companion: user.companion_id
        ? {
            id: user.companion_id,
            name: user.companion_name,
            stage: user.companion_stage,
          }
        : null,
      // Stripe billing period: fetched on-demand when subscription is active
      next_billing: await (async () => {
        try {
          if (user.stripe_subscription_id && process.env.STRIPE_SECRET_KEY) {
            const Stripe = (await import('stripe')).default;
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
            const sub = await stripe.subscriptions.retrieve(user.stripe_subscription_id);
            const periodEnd = (sub as unknown as { current_period_end?: number }).current_period_end;
            return periodEnd
              ? new Date(periodEnd * 1000).toISOString()
              : null;
          }
        } catch (e) {
          console.warn('[billing/status] Stripe billing lookup failed (non-fatal):', e);
        }
        return null;
      })(),
      upgrade_url: isPaid ? null : '/#pricing',
    })
  } catch (err) {
    console.error('[billing/status] Error fetching user:', err)
    // Graceful degradation on DB errors
    return NextResponse.json({
      plan: 'explorer',
      plan_name: 'Explorer (Free)',
      status: 'active',
      next_billing: null,
      upgrade_url: '/#pricing',
    })
  }
}
