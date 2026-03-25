import { auth, currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { getUserById, createUser } from '@/lib/db/user'
import { sql } from '@/lib/db/index'

// GET /api/user/family — get user's family group
export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await getUserById(userId)
  if (!user?.family_group_id) {
    return NextResponse.json({
      has_family: false,
      family_group_id: null,
      members: [],
    })
  }

  // Fetch family members
  let members: Array<{ id: string; name: string | null; companion_name: string | null; companion_id: string | null }> = []
  if (sql) {
    try {
      const rows = await sql`
        SELECT id, name, companion_name, companion_id
        FROM users
        WHERE family_group_id = ${user.family_group_id}
          AND deleted_at IS NULL
        ORDER BY created_at ASC
        LIMIT 10
      `
      members = rows as typeof members
    } catch (err) {
      console.error('[api/family] Failed to fetch members:', err)
    }
  }

  return NextResponse.json({
    has_family: true,
    family_group_id: user.family_group_id,
    members,
  })
}

// POST /api/user/family — create or join a family group
export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { action?: string; invite_code?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Ensure user exists
  let user = await getUserById(userId)
  if (!user) {
    const clerkUser = await currentUser()
    const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? ''
    const displayName = clerkUser?.fullName ?? clerkUser?.firstName ?? null
    user = await createUser(userId, email, displayName)
  }

  if (body.action === 'create') {
    // Create a new family group
    const familyId = `fam_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`

    if (sql) {
      try {
        await sql`
          UPDATE users
          SET family_group_id = ${familyId},
              tier = 'family',
              updated_at = NOW()
          WHERE id = ${userId}
        `
      } catch (err) {
        console.error('[api/family] Failed to create group:', err)
        return NextResponse.json({ error: 'Failed to create family group' }, { status: 500 })
      }
    }

    return NextResponse.json({
      family_group_id: familyId,
      invite_code: familyId, // Simple invite code = group ID for now
      message: 'Family group created',
    })
  }

  if (body.action === 'join' && body.invite_code) {
    // Join an existing family group
    if (sql) {
      try {
        // Verify the group exists
        const existing = await sql`
          SELECT COUNT(*) as count FROM users
          WHERE family_group_id = ${body.invite_code} AND deleted_at IS NULL
        `
        if (!existing[0] || Number(existing[0].count) === 0) {
          return NextResponse.json({ error: 'Invalid invite code' }, { status: 404 })
        }
        if (Number(existing[0].count) >= 5) {
          return NextResponse.json({ error: 'Family group is full (max 5 members)' }, { status: 400 })
        }

        await sql`
          UPDATE users
          SET family_group_id = ${body.invite_code},
              tier = 'family',
              updated_at = NOW()
          WHERE id = ${userId}
        `
      } catch (err) {
        console.error('[api/family] Failed to join group:', err)
        return NextResponse.json({ error: 'Failed to join family group' }, { status: 500 })
      }
    }

    return NextResponse.json({
      family_group_id: body.invite_code,
      message: 'Joined family group',
    })
  }

  return NextResponse.json({ error: 'action must be "create" or "join"' }, { status: 400 })
}
