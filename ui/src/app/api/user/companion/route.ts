/**
 * MEOK AI LABS — User Companion Endpoint
 *
 * POST /api/user/companion — Save companion archetype, name, and personality dimensions
 * GET  /api/user/companion — Retrieve the user's current companion data
 *
 * Persists companion data from the onboarding wizard.
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { getAuthUserId } from '@/lib/api-auth'
import { type NextRequest, NextResponse } from 'next/server'
import { getUserById, updateCompanion } from '@/lib/db/user'
import { checkRateLimit } from '@/lib/rate-limit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface CompanionBody {
  companionId: string
  companionName: string
  dimensions?: {
    warmth: number
    energy: number
    whimsy: number
    edge: number
    complexity: number
  }
}

// ---------------------------------------------------------------------------
// GET /api/user/companion
// ---------------------------------------------------------------------------
export async function GET() {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer')
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  try {
    const user = await getUserById(userId)
    if (!user) {
      return NextResponse.json({
        companion: null,
        has_companion: false,
      })
    }

    return NextResponse.json({
      companion: user.companion_id
        ? {
            id: user.companion_id,
            name: user.companion_name,
            stage: user.companion_stage,
          }
        : null,
      has_companion: !!user.companion_id,
    })
  } catch (e) {
    console.error('[api/user/companion] GET failed:', e)
    return NextResponse.json({ error: 'Failed to fetch companion data' }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// POST /api/user/companion
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer')
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  let body: CompanionBody
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { companionId, companionName, dimensions } = body

  if (!companionId || !companionName) {
    return NextResponse.json(
      { error: 'companionId and companionName are required' },
      { status: 400 },
    )
  }

  try {
    await updateCompanion(userId, companionId, companionName)

    // Persist dimensions to user_profile JSONB column (companion_dimensions key)
    if (dimensions) {
      try {
        const { updateUserProfile } = await import('@/lib/db/user');
        await updateUserProfile(userId, { companion_dimensions: dimensions });
        console.log(`[api/user/companion] Dimensions persisted for ${userId}`);
      } catch (dimErr) {
        // Non-fatal: dimensions are still returned in the response
        console.warn(`[api/user/companion] Failed to persist dimensions for ${userId} (non-fatal):`, dimErr);
      }
    }

    return NextResponse.json({
      success: true,
      companion: {
        id: companionId,
        name: companionName,
        dimensions: dimensions ?? null,
      },
    })
  } catch (e) {
    console.error('[api/user/companion] POST failed:', e)
    return NextResponse.json({ error: 'Failed to save companion data' }, { status: 500 })
  }
}
