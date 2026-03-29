/**
 * MEOK AI LABS — Companion Evolution Diary Endpoint
 *
 * GET /api/user/companion/diary
 *
 * Returns the companion's internal diary entries — reflections it has written
 * about the user based on conversations. These are stored as memories in SOV3
 * (collection: "diary") or retrieved via the MCP list_memories tool.
 *
 * Falls back to empty list (client will use localStorage "meok_evolution_diary").
 *
 * Response:
 *   {
 *     entries: DiaryEntry[]
 *     source: 'sov3' | 'mcp' | 'empty'
 *   }
 *
 * DiaryEntry:
 *   id, timestamp, type, content, mood, topics, bondValue
 */

import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SOV3_BASE = process.env.NEXT_PUBLIC_SOV3_ENDPOINT ?? 'http://localhost:3101'

interface DiaryEntry {
  id:        string
  timestamp: string
  type:      string
  content:   string
  mood:      string
  topics:    string[]
  bondValue: number
}

/**
 * Normalise a raw SOV3 memory record into a DiaryEntry.
 * SOV3 returns: id, text, metadata, score, created_at
 */
function normalise(raw: Record<string, unknown>, index: number): DiaryEntry {
  const metadata = (raw.metadata ?? {}) as Record<string, unknown>
  const id        = (raw.id ?? raw.memory_id ?? `diary-${index}`) as string
  const content   = (raw.text ?? raw.content ?? '') as string
  const type      = (raw.type ?? metadata.type ?? 'reflection') as string
  const mood      = (raw.mood ?? metadata.mood ?? metadata.emotional_tone ?? 'thoughtful') as string
  const bondValue = Number(raw.bond_value ?? metadata.bond_value ?? 1)

  let topics: string[] = []
  if (Array.isArray(raw.topics)) {
    topics = raw.topics as string[]
  } else if (Array.isArray(metadata.topics)) {
    topics = metadata.topics as string[]
  } else if (typeof raw.topics === 'string') {
    topics = (raw.topics as string).split(',').map((t: string) => t.trim()).filter(Boolean)
  }

  const rawDate = raw.created_at ?? raw.timestamp ?? raw.date ?? metadata.created_at ?? null
  const timestamp = rawDate ? new Date(rawDate as string).toISOString() : new Date().toISOString()

  return { id, timestamp, type, content, mood, topics, bondValue }
}

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ── Try 1: SOV3 diary collection (recent memories) ──────────────────────
  try {
    const res = await fetch(`${SOV3_BASE}/api/memory/recent/diary?limit=20`, {
      signal: AbortSignal.timeout(6_000),
    })
    if (res.ok) {
      const json = await res.json()
      const raw: Record<string, unknown>[] = Array.isArray(json.recent) ? json.recent : []
      if (raw.length > 0) {
        const entries = raw.map((r, i) => normalise(r, i))
        return NextResponse.json({ entries, source: 'sov3' })
      }
    }
  } catch {
    // fall through
  }

  // ── Try 2: SOV3 memory search for diary entries ──────────────────────────
  try {
    const res = await fetch(`${SOV3_BASE}/api/memory/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ collection: 'conversations', query: 'diary reflection observation', top_k: 20 }),
      signal: AbortSignal.timeout(6_000),
    })
    if (res.ok) {
      const json = await res.json()
      const raw: Record<string, unknown>[] = Array.isArray(json.results) ? json.results : []
      // Filter to diary-like entries
      const diaryLike = raw.filter(r => {
        const meta = (r.metadata ?? {}) as Record<string, unknown>
        const type = (r.type ?? meta.type ?? '') as string
        return ['reflection', 'observation', 'milestone', 'concern', 'gratitude'].includes(type)
      })
      if (diaryLike.length > 0) {
        const entries = diaryLike.map((r, i) => normalise(r, i))
        return NextResponse.json({ entries, source: 'sov3' })
      }
    }
  } catch {
    // fall through
  }

  // ── Try 3: MCP list_memories ─────────────────────────────────────────────
  try {
    const mcpRes = await fetch(`${SOV3_BASE}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id:      1,
        method:  'tools/call',
        params:  { name: 'list_memories', arguments: { limit: 20, collection: 'diary' } },
      }),
      signal: AbortSignal.timeout(6_000),
    })
    if (mcpRes.ok) {
      const mcpJson = await mcpRes.json()
      const text = mcpJson?.result?.content?.[0]?.text
      if (text) {
        const parsed = JSON.parse(text)
        const raw: Record<string, unknown>[] = Array.isArray(parsed)
          ? parsed
          : (Array.isArray(parsed?.memories) ? parsed.memories : [])
        if (raw.length > 0) {
          const entries = raw.map((r, i) => normalise(r, i))
          return NextResponse.json({ entries, source: 'mcp' })
        }
      }
    }
  } catch {
    // fall through
  }

  // ── Fallback: empty (client uses localStorage) ───────────────────────────
  return NextResponse.json({ entries: [], source: 'empty' })
}
