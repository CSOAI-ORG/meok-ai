import { NextResponse } from 'next/server'
import { getAuthUserId } from '@/lib/api-auth'

// POST /api/morning-briefing/regenerate
// Triggers a fresh morning briefing by calling the main GET endpoint internally.
export async function POST(req: Request) {
  const userId = await getAuthUserId()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Call the main morning-briefing GET route to produce a fresh briefing
  const origin = new URL(req.url).origin
  try {
    const res = await fetch(`${origin}/api/morning-briefing`, {
      method: 'GET',
      headers: {
        // Forward cookies so Clerk auth passes through
        cookie: req.headers.get('cookie') ?? '',
      },
    })

    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json(
        { error: 'Regeneration failed', detail: text },
        { status: res.status },
      )
    }

    const briefing = await res.json()
    return NextResponse.json({
      success: true,
      regenerated_at: new Date().toISOString(),
      briefing,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Regeneration failed', detail: message },
      { status: 502 },
    )
  }
}
