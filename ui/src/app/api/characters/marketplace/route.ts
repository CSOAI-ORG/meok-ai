/**
 * MEOK AI LABS — Character Marketplace API
 *
 * GET /api/characters/marketplace?sort=popular&tier=explorer&limit=20&offset=0
 *
 * Returns approved marketplace characters sorted by popularity, rating, or recency.
 * No auth required — public endpoint.
 *
 * Query params:
 *   sort     — popular (default) | rating | newest
 *   tier     — filter by minimum tier (explorer|sovereign|family)
 *   limit    — results per page (default 20, max 50)
 *   offset   — pagination offset
 *
 * POST /api/characters/marketplace/[id]/download
 *   — increments download_count, requires auth
 */

import { NextRequest, NextResponse } from 'next/server';
import { dbGetMarketplaceCharacters, dbCountMarketplaceCharacters } from '@/lib/db/characters';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const sort   = (searchParams.get('sort') ?? 'popular') as 'popular' | 'rating' | 'newest';
  const tier   = searchParams.get('tier') ?? undefined;
  const limit  = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);
  const offset = Math.max(parseInt(searchParams.get('offset') ?? '0', 10), 0);

  const [characters, total] = await Promise.all([
    dbGetMarketplaceCharacters({ sortBy: sort, tier, limit, offset }),
    dbCountMarketplaceCharacters(tier),
  ]);

  return NextResponse.json({
    characters: characters.map(c => ({
      id:            c.id,
      name:          c.name,
      title:         c.title,
      archetype:     c.archetype,
      emoji:         c.emoji,
      color:         c.color,
      tagline:       c.tagline,
      personality:   c.personality.slice(0, 4),
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
  });
}
