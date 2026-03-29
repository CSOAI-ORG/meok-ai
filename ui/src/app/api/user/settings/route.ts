/**
 * MEOK AI LABS — User Settings Endpoint
 *
 * POST /api/user/settings
 *
 * Saves companion name and archetype for the authenticated user.
 * Uses the existing updateCompanion DB function.
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { getAuthUserId } from '@/lib/api-auth'
import { type NextRequest, NextResponse } from 'next/server'
import { getUserById, updateCompanion, createUser } from '@/lib/db/user'
import { currentUser } from '@clerk/nextjs/server'
import { checkRateLimit } from '@/lib/rate-limit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Archetype to companion ID mapping (same as companions route)
const ARCHETYPE_MAP: Record<string, string> = {
  pioneer: 'marcus',
  healer: 'shanti',
  scholar: 'sage',
  guardian: 'gabriel',
  trickster: 'ananda',
  mystic: 'luna',
  aria: 'aria',
  marcus: 'marcus',
  luna: 'luna',
  kai: 'kai',
  sage: 'sage',
  ananda: 'ananda',
  gabriel: 'gabriel',
  shanti: 'shanti',
}

const _isLocalMode = process.env.MEOK_LOCAL_MODE === 'true';
export async function POST(req: NextRequest) {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer')
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  let body: { companion_name?: string; archetype?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { companion_name, archetype } = body

  if (!companion_name && !archetype) {
    return NextResponse.json({ error: 'No settings to update' }, { status: 400 })
  }

  try {
    // Ensure user exists
    let user = await getUserById(userId)
    if (!user) {
      const clerkUser = _isLocalMode ? null : await currentUser()
      const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? ''
      const displayName = clerkUser?.fullName ?? clerkUser?.firstName ?? null
      user = await createUser(userId, email, displayName)
    }

    // Resolve companion ID from archetype or keep existing
    const companionId = archetype
      ? (ARCHETYPE_MAP[archetype.toLowerCase()] ?? user.companion_id ?? 'aria')
      : (user.companion_id ?? 'aria')

    const name = companion_name ?? user.companion_name ?? 'Sovereign'

    await updateCompanion(userId, companionId, name)

    return NextResponse.json({
      success: true,
      companion: {
        id: companionId,
        name,
        stage: user.companion_stage,
      },
    })
  } catch (e) {
    console.error('[api/user/settings] Failed to save settings:', e)
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 })
  }
}
