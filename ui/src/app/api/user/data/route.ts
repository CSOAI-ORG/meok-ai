/**
 * MEOK AI LABS — GDPR Data Export Endpoint
 *
 * GET /api/user/data
 *
 * Returns all data MEOK AI LABS holds about the authenticated user.
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { currentUser } from '@clerk/nextjs/server'
import { getAuthUserId } from '@/lib/api-auth';
import { NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rate-limit'
import { getUserById, getGuardianSettings } from '@/lib/db/user'

export const dynamic = 'force-dynamic'

export async function GET() {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer')
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  const [clerkUser, dbUser, guardianSettings] = await Promise.all([
    currentUser(),
    getUserById(userId),
    getGuardianSettings(userId),
  ])

  // Fetch memories from SOV3 (best-effort, non-blocking on failure)
  let memories: unknown[] = []
  try {
    const sov3Url = process.env.SOV3_URL || process.env.SOV3_API_URL || 'http://localhost:3101'
    const res = await fetch(`${sov3Url}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'tools/call',
        params: { name: 'list_memories', arguments: { user_id: userId } },
      }),
      signal: AbortSignal.timeout(5_000),
    })
    if (res.ok) {
      const json = await res.json() as { result?: unknown }
      if (Array.isArray(json.result)) memories = json.result
    }
  } catch {
    // SOV3 offline — return empty memories rather than failing
  }

  // Extract preferences from guardian_settings JSONB sub-key
  const preferences = (guardianSettings as Record<string, unknown> | null)?.preferences ?? {}

  return NextResponse.json({
    user_id: userId,
    exported_at: new Date().toISOString(),
    data: {
      profile: {
        plan: dbUser?.tier ?? 'explorer',
        created_at: dbUser?.created_at ?? (clerkUser?.createdAt
          ? new Date(clerkUser.createdAt).toISOString()
          : null),
        name: dbUser?.name ?? clerkUser?.fullName ?? null,
        email: dbUser?.email ?? clerkUser?.emailAddresses?.[0]?.emailAddress ?? null,
        streak_days: dbUser?.streak_days ?? 0,
        messages_total: dbUser?.messages_total ?? 0,
      },
      memories,
      companion: dbUser?.companion_id
        ? {
            id: dbUser.companion_id,
            name: dbUser.companion_name,
            stage: dbUser.companion_stage,
          }
        : null,
      guardian_settings: guardianSettings ?? {},
      preferences,
    },
    note: 'This export contains all data MEOK AI LABS holds about you.',
  })
}
