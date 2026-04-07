/**
 * MEOK AI LABS — Character Search API
 * 
 * GET /api/characters/search?q=wisdom&archetype=sage&tier=explorer
 * 
 * Public endpoint with caching.
 */

import { NextRequest, NextResponse } from 'next/server';
import { dbSearchCharacters, dbSemanticSearch } from '@/lib/db/characters';
import { apiCache, cacheControl } from '@/lib/cache';

export const runtime = 'nodejs';

const M2_OLLAMA_URL = `http://${process.env.M2_OLLAMA_HOST ?? '192.168.1.159'}:${process.env.M2_OLLAMA_PORT ?? '11434'}`;

async function getQueryEmbedding(text: string): Promise<number[] | null> {
  try {
    const res = await fetch(`${M2_OLLAMA_URL}/api/embeddings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'bge-m3', prompt: text }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) return null;
    const data = await res.json() as { embedding: number[] };
    return data.embedding?.length === 1024 ? data.embedding : null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const query     = (searchParams.get('q') ?? '').trim().toLowerCase();
    const archetype = searchParams.get('archetype') ?? undefined;
    const tier      = searchParams.get('tier') ?? undefined;
    const pack      = searchParams.get('pack') ?? undefined;
    const semantic  = searchParams.get('semantic') === '1';
    const limit     = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);

    // Build cache key from filters
    const cacheKey = `char:search:${query}:${archetype || 'none'}:${tier || 'none'}:${pack || 'none'}:${semantic}:${limit}`;
    const bypass = req.headers.get('Cache-Control')?.includes('no-cache');
    const cached = !bypass ? await apiCache.get(cacheKey) : null;
    if (cached && !cached.stale) {
      return NextResponse.json(cached.data, {
        headers: {
          'Cache-Control': cacheControl({ maxAge: 60 }),
          'X-Cache': 'HIT',
          'X-Request-ID': requestId,
        },
      });
    }

    let results: unknown[];
    let mode = 'text';

    // Semantic search path
    if (semantic && query) {
      const embedding = await getQueryEmbedding(query);
      if (embedding) {
        results = await dbSemanticSearch({ embedding, archetype, tier, limit });
        mode = 'semantic';
      } else {
        results = await dbSearchCharacters({ query, archetype, tier, pack, limit });
      }
    } else {
      results = await dbSearchCharacters({ query, archetype, tier, pack, limit });
    }
    
    const responseData = {
      results: results.map((r: any) => ({
        id:          r.id,
        name:        r.name,
        title:       r.title,
        tagline:     r.tagline,
        archetype:   r.archetype,
        tier:        r.tier,
        emoji:       r.emoji,
        color:       r.color,
        personality: (r.personality || []).slice(0, 4),
        tags:        (r.tags ?? []).slice(0, 5),
        license:     r.license,
        score:       r.similarity || r.score,
      })),
      total:    results.length,
      matched:  results.length,
      query:    query || null,
      mode,
      filters:  { archetype: archetype ?? null, tier: tier ?? null, pack: pack ?? null },
    };

    // Cache result (60s for public search)
    await apiCache.set(cacheKey, responseData, { ttl: 60 });

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': cacheControl({ maxAge: 60, staleWhileRevalidate: 120 }),
        'X-Cache': cached ? 'STALE' : 'MISS',
      },
    });
  } catch (err) {
    console.error('[characters/search] error:', err);
    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: 'Search failed' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}