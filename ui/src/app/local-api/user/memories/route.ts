/**
 * MEOK AI LABS — User Memories API
 * 
 * GET /api/user/memories?q=searchterm
 * 
 * Returns user memories from SOV3 or DB fallback.
 * Uses caching for non-search queries.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { sql } from '@/lib/db';
import { apiCache, cacheControl } from '@/lib/cache';

const SOV3_BASE = process.env.NEXT_PUBLIC_SOV3_ENDPOINT ?? 'http://localhost:3101';

async function fetchDbMemories(userId: string): Promise<Record<string, unknown>[]> {
  if (!sql) return [];
  try {
    const rows = await sql`
      SELECT id, companion_id, content, importance, source_agent, tags, care_weight, created_at
      FROM short_term_memory
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
      LIMIT 50
    `;
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
    }));
  } catch { return [] }
}

function normalise(raw: Record<string, unknown>, index: number) {
  const metadata = (raw.metadata ?? {}) as Record<string, unknown>;
  const id = (raw.id ?? raw.memory_id ?? `mem-${index}`) as string;
  const content = (raw.text ?? raw.content ?? '') as string;
  const importance = Number(raw.importance ?? metadata.importance ?? 70);
  const recency_decay = Number(raw.recency_decay ?? metadata.recency_decay ?? 0.8);
  const retrieval_count = Number(raw.retrieval_count ?? raw.referenced_count ?? metadata.retrieval_count ?? 0);
  const emotional_tone = (raw.emotional_tone ?? raw.emotion ?? metadata.emotional_tone ?? 'neutral') as string;
  const type = (raw.type ?? metadata.type ?? 'general') as string;

  let topics: string[] = [];
  if (Array.isArray(raw.topics)) topics = raw.topics as string[];
  else if (Array.isArray(metadata.topics)) topics = metadata.topics as string[];
  else if (typeof raw.topics === 'string') topics = (raw.topics as string).split(',').map((t: string) => t.trim()).filter(Boolean);
  else topics = [type];

  const rawDate = raw.created_at ?? raw.date ?? raw.timestamp ?? metadata.created_at ?? null;
  const date = rawDate ? new Date(rawDate as string).toISOString() : new Date().toISOString();

  return { id, content, date, topics, emotional_tone, importance, recency_decay, retrieval_count };
}

export async function GET(req: NextRequest) {
  const requestId = crypto.randomUUID().slice(0, 8);
  const startTime = Date.now();

  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'UNAUTHORIZED', message: 'Unauthorized' }, { 
      status: 401, 
      headers: { 'Cache-Control': 'no-store', 'X-Request-ID': requestId } 
    });
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: 'RATE_LIMITED', message: 'Too many requests' },
      { status: 429 }
    );
  }

  const q = req.nextUrl.searchParams.get('q')?.trim() ?? '';

  // Cache key for non-search queries
  if (!q) {
    const cacheKey = `memories:${userId}`;
    const cached = await apiCache.get(cacheKey);
    if (cached && !cached.stale) {
      return NextResponse.json(cached.data, {
        headers: {
          'Cache-Control': cacheControl({ maxAge: 15 }),
          'X-Cache': 'HIT',
          'X-Request-ID': requestId,
        },
      });
    }
  }

  try {
    let raw: Record<string, unknown>[] = [];

    if (q) {
      const res = await fetch(`${SOV3_BASE}/api/memory/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection: 'conversations', query: q, top_k: 50 }),
        signal: AbortSignal.timeout(8000),
      });

      if (res.ok) {
        const json = await res.json();
        raw = Array.isArray(json.results) ? json.results : [];
      }
    } else {
      const res = await fetch(`${SOV3_BASE}/api/memory/recent/conversations?limit=50`, {
        signal: AbortSignal.timeout(8000),
      });

      if (res.ok) {
        const json = await res.json();
        raw = Array.isArray(json.recent) ? json.recent : [];
      } else {
        const mcpRes = await fetch(`${SOV3_BASE}/mcp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0', id: 1, method: 'tools/call',
            params: { name: 'list_memories', arguments: { limit: 50 } },
          }),
          signal: AbortSignal.timeout(8000),
        });

        if (mcpRes.ok) {
          const mcpJson = await mcpRes.json();
          const text = mcpJson?.result?.content?.[0]?.text;
          if (text) {
            const parsed = JSON.parse(text);
            raw = Array.isArray(parsed) ? parsed : (parsed?.memories ?? []);
          }
        }
      }
    }

    const responseData = raw.length > 0 
      ? { memories: raw.map((r, i) => normalise(r, i)) }
      : { memories: (await fetchDbMemories(userId)).map((r, i) => normalise(r, i)), source: 'db' };

    // Cache non-search results
    if (!q && raw.length > 0) {
      await apiCache.set(`memories:${userId}`, responseData, { ttl: 15 });
    }

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': q ? 'no-store' : cacheControl({ maxAge: 15 }),
        'X-Request-ID': requestId,
        'X-Response-Time': `${Date.now() - startTime}ms`,
      },
    });
  } catch (err) {
    console.error(`[user/memories ${requestId}] error:`, err);

    try {
      const dbRaw = await fetchDbMemories(userId);
      if (dbRaw.length > 0) {
        return NextResponse.json(
          { memories: dbRaw.map((r, i) => normalise(r, i)), source: 'db' },
          { headers: { 'X-Request-ID': requestId } }
        );
      }
    } catch (dbErr) {
      console.error(`[user/memories ${requestId}] DB fallback failed:`, dbErr);
    }

    return NextResponse.json(
      { error: 'SERVICE_UNAVAILABLE', message: 'Memory backend unavailable', memories: [] },
      { status: 502, headers: { 'Cache-Control': 'no-store', 'X-Request-ID': requestId } }
    );
  }
}