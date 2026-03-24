import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// GET /api/user/companions — returns the user's companion info
export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // TODO: load from DB once connected
  // Default response for new users
  return NextResponse.json({
    companion: null,
    has_companion: false,
    evolution_stage: 0,
    available_archetypes: [
      { id: 'timeless', name: 'Timeless', emoji: '⏳', available: true },
      { id: 'elemental', name: 'Elemental', emoji: '🌊', available: true },
      { id: 'legendary', name: 'Legendary', emoji: '⚔️', available: true },
      { id: 'scholar', name: 'Scholar', emoji: '📚', available: true },
      { id: 'guardian', name: 'Guardian', emoji: '🛡️', available: false, unlock_at: 25 },
      { id: 'healer', name: 'Healer', emoji: '💚', available: true },
      { id: 'trickster', name: 'Trickster', emoji: '🎭', available: true },
      { id: 'spiritual', name: 'Seeker', emoji: '✨', available: true },
    ],
    next_step: '/birth',
  })
}
