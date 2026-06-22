import { getAuthUserId } from '@/lib/api-auth'
import { NextRequest, NextResponse } from 'next/server'

// POST /api/chat/stream — streaming chat endpoint
// Full implementation in /api/chat/route.ts
// This route exists for future WebSocket/SSE migration

export async function POST(req: NextRequest) {
  try {
    const userId = await getAuthUserId()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Delegate to main chat route
    const body = await req.text()
    const mainRoute = new URL('/api/chat', req.url)

    return fetch(mainRoute.toString(), {
      method: 'POST',
      headers: req.headers,
      body,
    })
  } catch (err) {
    console.error('[chat/stream] error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
