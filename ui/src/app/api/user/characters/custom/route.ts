import { currentUser } from '@clerk/nextjs/server'
import { getAuthUserId } from '@/lib/api-auth';
import { NextRequest, NextResponse } from 'next/server'
import {
  getUserById,
  createUser,
  getCustomCharacters,
  saveCustomCharacter,
  CUSTOM_CHARACTER_LIMITS,
} from '@/lib/db/user'
import type { Archetype } from '@/lib/characters'

// ── Validation ────────────────────────────────────────────────────────────

const VALID_ARCHETYPES = ['challenger', 'nurturer', 'explorer', 'sage', 'seeker'] as const
const VALID_VOICE_STYLES = ['formal', 'casual', 'playful', 'academic', 'poetic', 'empathetic'] as const

function isValidArchetype(v: string): v is Archetype {
  return (VALID_ARCHETYPES as readonly string[]).includes(v)
}

function isValidVoiceStyle(v: string): boolean {
  return (VALID_VOICE_STYLES as readonly string[]).includes(v)
}

// ── GET /api/user/characters/custom — list user's custom characters ─────

const _isLocalMode = process.env.MEOK_LOCAL_MODE === 'true';
export async function GET() {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const characters = await getCustomCharacters(userId)
  return NextResponse.json({ characters })
}

// ── POST /api/user/characters/custom — create a new custom character ────

const _isLocalMode = process.env.MEOK_LOCAL_MODE === 'true';
export async function POST(req: NextRequest) {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Parse body
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, title, emoji, tagline, archetype, personality, voiceStyle } = body as {
    name?: string
    title?: string
    emoji?: string
    tagline?: string
    archetype?: string
    personality?: Record<string, number>
    voiceStyle?: string
  }

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ error: 'name is required' }, { status: 400 })
  }
  if (!title || typeof title !== 'string') {
    return NextResponse.json({ error: 'title is required' }, { status: 400 })
  }
  if (!archetype || typeof archetype !== 'string' || !isValidArchetype(archetype)) {
    return NextResponse.json({ error: 'archetype must be one of: ' + VALID_ARCHETYPES.join(', ') }, { status: 400 })
  }
  if (!voiceStyle || typeof voiceStyle !== 'string' || !isValidVoiceStyle(voiceStyle)) {
    return NextResponse.json({ error: 'voiceStyle must be one of: ' + VALID_VOICE_STYLES.join(', ') }, { status: 400 })
  }

  // Ensure user exists
  let user = await getUserById(userId)
  if (!user) {
    const clerkUser = _isLocalMode ? null : await currentUser()
    if (clerkUser) {
      const email = clerkUser.emailAddresses?.[0]?.emailAddress ?? ''
      const displayName = clerkUser.fullName ?? clerkUser.firstName ?? null
      user = await createUser(userId, email, displayName)
    }
  }

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  // Check tier limits
  const existing = await getCustomCharacters(userId)
  const limit = CUSTOM_CHARACTER_LIMITS[user.tier]
  if (existing.length >= limit) {
    return NextResponse.json(
      {
        error: `Your ${user.tier} tier allows up to ${limit} custom character${limit === 1 ? '' : 's'}. Upgrade to create more.`,
        limit,
        current: existing.length,
      },
      { status: 403 },
    )
  }

  // Build personality traits from Big Five sliders
  const bigFive = personality as Record<string, number> | undefined
  const personalityTraits: string[] = []
  if (bigFive) {
    if (bigFive.openness > 60) personalityTraits.push('experimental')
    else if (bigFive.openness < 40) personalityTraits.push('conventional')
    if (bigFive.conscientiousness > 60) personalityTraits.push('organized')
    else if (bigFive.conscientiousness < 40) personalityTraits.push('spontaneous')
    if (bigFive.extraversion > 60) personalityTraits.push('outgoing')
    else if (bigFive.extraversion < 40) personalityTraits.push('reserved')
    if (bigFive.agreeableness > 60) personalityTraits.push('accommodating')
    else if (bigFive.agreeableness < 40) personalityTraits.push('challenging')
    if (bigFive.stability > 60) personalityTraits.push('steady')
    else if (bigFive.stability < 40) personalityTraits.push('emotionally-expressive')
  }
  if (personalityTraits.length === 0) personalityTraits.push('balanced')

  // Build the archetype color map
  const archetypeColors: Record<string, string> = {
    challenger: '#F59E0B',
    nurturer: '#F472B6',
    explorer: '#7C3AED',
    sage: '#065F46',
    seeker: '#8B5CF6',
  }

  const characterId = `custom-${userId.slice(-6)}-${Date.now()}`

  const character = {
    id: characterId,
    name: name.trim(),
    title: (title ?? '').trim() || 'Custom Companion',
    archetype,
    emoji: (typeof emoji === 'string' && emoji.trim()) ? emoji.trim() : '✦',
    color: archetypeColors[archetype] ?? '#c9a84c',
    tagline: (typeof tagline === 'string' && tagline.trim()) ? tagline.trim() : `A custom ${archetype} companion`,
    systemPrompt: `You are ${name.trim()}, a custom AI companion created by your user on MEOK AI LABS. Your archetype is ${archetype}. Your voice style is ${voiceStyle}. Your personality traits are: ${personalityTraits.join(', ')}. ${tagline ? `Your tagline: "${tagline}".` : ''} Stay true to these traits in every response. Be warm, authentic, and helpful.`,
    personality: personalityTraits,
    tier: user.tier,
    tags: ['custom', archetype],
    license: 'user-created' as const,
    voiceStyle: voiceStyle ?? 'casual',
    bigFive: bigFive ?? { openness: 50, conscientiousness: 50, extraversion: 50, agreeableness: 50, stability: 50 },
    createdAt: new Date().toISOString(),
  }

  await saveCustomCharacter(userId, character)

  return NextResponse.json({ character }, { status: 201 })
}
