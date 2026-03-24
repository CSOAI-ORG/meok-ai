/**
 * MEOK AI LABS — GDPR Data Export Endpoint
 *
 * GET /api/user/data
 *
 * Returns all data MEOK AI LABS holds about the authenticated user.
 * Real database queries will replace the placeholder fields in future.
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const clerkUser = await currentUser()

  return NextResponse.json({
    user_id: userId,
    exported_at: new Date().toISOString(),
    data: {
      profile: {
        plan: 'explorer',
        created_at: clerkUser?.createdAt
          ? new Date(clerkUser.createdAt).toISOString()
          : null,
      },
      memories: [],
      companion: null,
      guardian_settings: {},
      preferences: {},
    },
    note: 'This export contains all data MEOK AI LABS holds about you.',
  })
}
