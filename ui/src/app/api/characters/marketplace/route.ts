/**
 * MEOK AI LABS — Character Marketplace API
 * 
 * GET /api/characters/marketplace?sort=popular&tier=explorer&limit=20&offset=0
 * 
 * Public endpoint with caching.
 */

import { NextRequest, NextResponse } from 'next/server';
import { dbGetMarketplaceCharacters, dbCountMarketplaceCharacters } from '@/lib/db/characters';
import { apiCache, cacheControl } from '@/lib/cache';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const requestId = crypto.randomUUID().slice(0, 8);
  const startTime = Date.now();

  try {
    const { searchParams } = new URL(req.url);
    const sort   = (searchParams.get('sort') ?? 'popular') as 'popular' | 'rating' | 'newest';
    const tier   = searchParams.get('tier') ?? undefined;
    const limit  = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);
    const offset = Math.max(parseInt(searchParams.get('offset') ?? '0', 10), 0);

    // Cache key based on params
    const cacheKey = `char:marketplace:${sort}:${tier || 'none'}:${limit}:${offset}`;
    const cached = await apiCache.get(cacheKey);
    if (cached && !cached.stale) {
      return NextResponse.json(cached.data, {
        headers: {
          'Cache-Control': cacheControl({ maxAge: 60 }),
          'X-Cache': 'HIT',
          'X-Request-ID': requestId,
        },
      });
    }

    const [characters, total] = await Promise.all([
      dbGetMarketplaceCharacters({ sortBy: sort, tier, limit, offset }),
      dbCountMarketplaceCharacters(tier),
    ]);

    const responseData = {
      characters: characters.map((c: any) => ({
        id:            c.id,
        name:          c.name,
        title:         c.title,
        archetype:     c.archetype,
        emoji:         c.emoji,
        color:         c.color,
        tagline:       c.tagline,
        personality:   (c.personality || []).slice(0, 4),
        tags:          (c.tags ?? []).slice(0, 5),
        tier:          c.tier,
        license:       c.license,
        downloadCount: c.downloadCount,
        avgRating:     c.avgRating,
        priceCents:    c.priceCents,
      })),
      total,
      offset,
      limit,
      sort,
    };

    // Cache result
    await apiCache.set(cacheKey, responseData, { ttl: 60 });

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': cacheControl({ maxAge: 60, staleWhileRevalidate: 120 }),
        'X-Cache': cached ? 'STALE' : 'MISS',
        'X-Request-ID': requestId,
        'X-Response-Time': `${Date.now() - startTime}ms`,
      },
    });
  } catch (err) {
    console.error(`[characters/marketplace ${requestId}] error:`, err);
    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: 'Failed to fetch marketplace' },
      { status: 500, headers: { 'Cache-Control': 'no-store', 'X-Request-ID': requestId } }
    );
  }
}