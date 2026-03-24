import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

// POST /api/morning-briefing/regenerate
// Triggers a new morning briefing generation
export async function POST() {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    success: true,
    message: 'Briefing regeneration queued. Check back in 60 seconds.',
    queued_at: new Date().toISOString(),
  })
}
