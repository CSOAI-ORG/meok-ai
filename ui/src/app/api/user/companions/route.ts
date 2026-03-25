import { auth, currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { getUserById, updateCompanion, createUser } from '@/lib/db/user'
import { getCharacter, getCharactersByArchetype, ARCHETYPES, type Archetype } from '@/lib/characters'

/**
 * Resolve an archetype name or character ID to a valid companion ID.
 * - If the input matches a character ID directly, use it.
 * - If it matches an archetype, return the first character in that archetype.
 * - Falls back to 'aria'.
 */
function resolveCompanionId(input: string): string {
  const lower = input.toLowerCase()

  // Direct character ID match
  if (getCharacter(lower)) return lower

  // Archetype match — pick the first character in that archetype
  if (lower in ARCHETYPES) {
    const chars = getCharactersByArchetype(lower as Archetype)
    if (chars.length > 0) return chars[0].id
  }

  return 'aria'
}

// GET /api/user/companions — returns the user's companion info
export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let user = await getUserById(userId)

  // Auto-create user if missing (webhook may not have fired in dev)
  if (!user) {
    const clerkUser = await currentUser()
    if (clerkUser) {
      const email = clerkUser.emailAddresses?.[0]?.emailAddress ?? ''
      const displayName = clerkUser.fullName ?? clerkUser.firstName ?? null
      user = await createUser(userId, email, displayName)
    }
  }

  if (user?.companion_id) {
    const character = getCharacter(user.companion_id)
    return NextResponse.json({
      companion: {
        id: user.companion_id,
        name: user.companion_name,
        stage: user.companion_stage,
        title: character?.title ?? null,
        archetype: character?.archetype ?? null,
        emoji: character?.emoji ?? null,
        color: character?.color ?? null,
        tagline: character?.tagline ?? null,
      },
      has_companion: true,
      evolution_stage: user.companion_stage,
    })
  }

  // No companion yet
  return NextResponse.json({
    companion: null,
    has_companion: false,
    evolution_stage: 0,
    next_step: '/onboarding/step-1',
  })
}

// POST /api/user/companions — create/update companion from onboarding
export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { name?: string; archetype?: string; memory?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, archetype } = body
  if (!name || !archetype) {
    return NextResponse.json({ error: 'name and archetype are required' }, { status: 400 })
  }

  const companionId = resolveCompanionId(archetype)

  // Ensure user exists in DB (webhook may not have fired in dev/local)
  const existing = await getUserById(userId)
  if (!existing) {
    const clerkUser = await currentUser()
    const email = clerkUser?.emailAddresses?.[0]?.emailAddress ?? ''
    const displayName = clerkUser?.fullName ?? clerkUser?.firstName ?? null
    await createUser(userId, email, displayName)
  }

  await updateCompanion(userId, companionId, name)

  const character = getCharacter(companionId)
  return NextResponse.json({
    companion: {
      id: companionId,
      name,
      stage: 0,
      title: character?.title ?? null,
      archetype: character?.archetype ?? null,
      emoji: character?.emoji ?? null,
      color: character?.color ?? null,
      tagline: character?.tagline ?? null,
    },
    has_companion: true,
    evolution_stage: 0,
  })
}
