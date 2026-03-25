import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

const SOV3_BASE = process.env.NEXT_PUBLIC_SOV3_ENDPOINT ?? 'http://localhost:3101'

// GET /api/user/memories
// Returns the user's memory episodes from SOV3
export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const res = await fetch(`${SOV3_BASE}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/call',
        params: { name: 'list_memories', arguments: { limit: 50 } },
      }),
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch memories from SOV3', memories: [] },
        { status: 502 },
      )
    }

    const json = await res.json()
    const text = json?.result?.content?.[0]?.text

    if (!text) {
      return NextResponse.json({ memories: [] })
    }

    const parsed = JSON.parse(text)
    const memories = Array.isArray(parsed) ? parsed : (parsed?.memories ?? [])

    return NextResponse.json({ memories })
  } catch (err) {
    console.error('[api/user/memories] Failed to fetch memories:', err)
    return NextResponse.json(
      { error: 'Failed to connect to SOV3', memories: [] },
      { status: 502 },
    )
  }
}
