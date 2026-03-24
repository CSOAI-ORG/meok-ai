import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

// POST /api/chat/stream — streaming chat endpoint
// Full implementation in /api/chat/route.ts
// This route exists for future WebSocket/SSE migration

export async function POST(req: NextRequest) {
  const { userId } = await auth()
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
}
