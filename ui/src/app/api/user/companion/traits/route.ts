/**
 * MEOK AI LABS — Companion Trait History Endpoint
 *
 * GET /api/user/companion/traits
 *
 * Returns current Big Five trait scores and the baseline (creation) scores
 * for the authenticated user's companion. Scores are derived from the
 * companion_dimensions stored in the user_profile JSONB column, then drifted
 * based on interaction count.
 *
 * Response:
 *   {
 *     current:  { openness, conscientiousness, extraversion, agreeableness, neuroticism }
 *     baseline: { openness, conscientiousness, extraversion, agreeableness, neuroticism }
 *     interactions: number
 *   }
 */

import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getUserById, getUserProfile } from '@/lib/db/user'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface BigFive {
  openness:          number
  conscientiousness: number
  extraversion:      number
  agreeableness:     number
  neuroticism:       number
}

/**
 * Derive Big Five proxy scores from companion onboarding dimensions.
 * Dimensions: warmth (0-100), energy (0-100), whimsy (0-100), edge (0-100), complexity (0-100)
 */
function dimensionsToBaseline(dims: Record<string, number> | null): BigFive {
  if (!dims) {
    return { openness: 55, conscientiousness: 60, extraversion: 50, agreeableness: 65, neuroticism: 35 }
  }
  return {
    openness:          Math.round(((dims.whimsy ?? 50) + (dims.complexity ?? 50)) / 2),
    conscientiousness: Math.round(dims.complexity ?? 60),
    extraversion:      Math.round(dims.energy ?? 50),
    agreeableness:     Math.round(dims.warmth ?? 65),
    neuroticism:       Math.round(100 - (dims.edge ?? 50)),
  }
}

/**
 * Trait drift over time — companions gradually become more open, conscientious,
 * and agreeable as the relationship deepens; neuroticism decreases.
 * Max drift reaches full effect at 200+ interactions.
 */
function applyDrift(base: BigFive, interactions: number): BigFive {
  const factor = Math.min(interactions / 200, 1)
  return {
    openness:          Math.min(100, Math.round(base.openness          + factor * 8)),
    conscientiousness: Math.min(100, Math.round(base.conscientiousness + factor * 5)),
    extraversion:      Math.min(100, Math.round(base.extraversion      + factor * 3)),
    agreeableness:     Math.min(100, Math.round(base.agreeableness     + factor * 6)),
    neuroticism:       Math.max(0,   Math.round(base.neuroticism       - factor * 7)),
  }
}

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const [user, profile] = await Promise.all([
      getUserById(userId),
      getUserProfile(userId).catch(() => null),
    ])

    const interactions = user?.messages_total ?? user?.companion_stage ?? 0

    // Extract companion dimensions from the user_profile JSONB
    const rawDims = (profile as Record<string, unknown> | null)?.companion_dimensions
    const dims = rawDims && typeof rawDims === 'object' && !Array.isArray(rawDims)
      ? rawDims as Record<string, number>
      : null

    const baseline = dimensionsToBaseline(dims)
    const current  = applyDrift(baseline, interactions)

    return NextResponse.json({
      current,
      baseline,
      interactions,
    })
  } catch (err) {
    console.error('[api/user/companion/traits] GET failed:', err)
    return NextResponse.json(
      { error: 'Failed to fetch trait data', current: null, baseline: null },
      { status: 500 },
    )
  }
}
