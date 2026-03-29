import { NextRequest, NextResponse } from 'next/server'
import { getAuthUserId } from '@/lib/api-auth'
import { checkRateLimit } from '@/lib/rate-limit'
import { sql } from '@/lib/db'

const SOV3_BASE = process.env.NEXT_PUBLIC_SOV3_ENDPOINT ?? 'http://localhost:3101'

/** Fetch recent short-term memories from the DB as a fallback when SOV3 is offline. */
async function fetchDbMemories(userId: string): Promise<Record<string, unknown>[]> {
  if (!sql) return []
  try {
    const rows = await sql`
      SELECT id, companion_id, content, importance, source_agent, tags, care_weight, created_at
      FROM short_term_memory
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT 50
    `
    return (rows as Record<string, unknown>[]).map(r => ({
      id: r.id,
      content: r.content,
      text: r.content,
      topics: Array.isArray(r.tags) ? r.tags : [],
      emotional_tone: 'neutral',
      importance: Math.round((Number(r.importance ?? 0.5)) * 100),
      recency_decay: 0.9,
      retrieval_count: 0,
      created_at: r.created_at,
      source: 'db',
    }))
  } catch { return [] }
}

// Normalise a raw SOV3 memory record into the shape the UI expects
function normalise(raw: Record<string, unknown>, index: number) {
  // SOV3 /api/memory/search returns items with: id, text, metadata, score, created_at
  // MCP list_memories may return different shapes — handle both
  const metadata = (raw.metadata ?? {}) as Record<string, unknown>

  const id = (raw.id ?? raw.memory_id ?? `mem-${index}`) as string
  const content = (raw.text ?? raw.content ?? '') as string
  const importance = Number(raw.importance ?? metadata.importance ?? 70)
  const recency_decay = Number(raw.recency_decay ?? metadata.recency_decay ?? 0.8)
  const retrieval_count = Number(
    raw.retrieval_count ?? raw.referenced_count ?? metadata.retrieval_count ?? 0,
  )
  const emotional_tone = (raw.emotional_tone ?? raw.emotion ?? metadata.emotional_tone ?? 'neutral') as string
  const type = (raw.type ?? metadata.type ?? 'general') as string

  // topics: prefer array, fall back to splitting a string, or wrapping type
  let topics: string[] = []
  if (Array.isArray(raw.topics)) {
    topics = raw.topics as string[]
  } else if (Array.isArray(metadata.topics)) {
    topics = metadata.topics as string[]
  } else if (typeof raw.topics === 'string') {
    topics = (raw.topics as string).split(',').map((t: string) => t.trim()).filter(Boolean)
  } else {
    topics = [type]
  }

  // date: prefer ISO string fields
  const rawDate =
    raw.created_at ?? raw.date ?? raw.timestamp ?? metadata.created_at ?? null
  const date = rawDate ? new Date(rawDate as string).toISOString() : new Date().toISOString()

  return { id, content, date, topics, emotional_tone, importance, recency_decay, retrieval_count }
}

// ── GET /api/user/memories[?q=searchterm] ─────────────────────────────────
export async function GET(req: NextRequest) {
  const userId = await getAuthUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer')
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
  }

  const q = req.nextUrl.searchParams.get('q')?.trim() ?? ''

  try {
    let raw: Record<string, unknown>[] = []

    if (q) {
      // Semantic search via SOV3 REST
      const res = await fetch(`${SOV3_BASE}/api/memory/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection: 'conversations', query: q, top_k: 50 }),
        signal: AbortSignal.timeout(8_000),
      })

      if (res.ok) {
        const json = await res.json()
        raw = Array.isArray(json.results) ? json.results : []
      }
      // If search fails, fall through to empty (no results rather than crash)
    } else {
      // First try: SOV3 REST recent memories
      const res = await fetch(`${SOV3_BASE}/api/memory/recent/conversations?limit=50`, {
        signal: AbortSignal.timeout(8_000),
      })

      if (res.ok) {
        const json = await res.json()
        raw = Array.isArray(json.recent) ? json.recent : []
      } else {
        // Second try: MCP list_memories tool
        const mcpRes = await fetch(`${SOV3_BASE}/mcp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'tools/call',
            params: { name: 'list_memories', arguments: { limit: 50 } },
          }),
          signal: AbortSignal.timeout(8_000),
        })

        if (mcpRes.ok) {
          const mcpJson = await mcpRes.json()
          const text = mcpJson?.result?.content?.[0]?.text
          if (text) {
            const parsed = JSON.parse(text)
            raw = Array.isArray(parsed) ? parsed : (parsed?.memories ?? [])
          }
        }
      }
    }

    if (raw.length > 0) {
      const memories = raw.map((r, i) => normalise(r, i))
      return NextResponse.json({ memories })
    }

    // SOV3 returned empty — fall back to DB short-term memory
    const dbRaw = await fetchDbMemories(userId)
    const memories = dbRaw.map((r, i) => normalise(r, i))
    return NextResponse.json({ memories, source: 'db' })
  } catch (err) {
    console.error('[api/user/memories] SOV3 unavailable, falling back to DB:', err)

    // Fall back to DB memories instead of returning 502
    try {
      const dbRaw = await fetchDbMemories(userId)
      if (dbRaw.length > 0) {
        const memories = dbRaw.map((r, i) => normalise(r, i))
        return NextResponse.json({ memories, source: 'db' })
      }
    } catch (dbErr) {
      console.error('[api/user/memories] DB fallback also failed:', dbErr)
    }

    return NextResponse.json(
      { error: 'Memory backend unavailable', memories: [] },
      { status: 502 },
    )
  }
}
