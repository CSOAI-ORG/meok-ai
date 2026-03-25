import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getUserById } from '@/lib/db/user'
import { TIERS } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const { userId } = await auth()

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
      next_billing: null, // TODO: fetch from Stripe when needed
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
