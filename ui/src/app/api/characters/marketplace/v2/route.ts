/**
 * MEOK AI LABS — Character Marketplace API v2
 * 
 * Enhanced marketplace with categories, featured, trending
 * 
 * GET /api/characters/marketplace/v2?action=featured
 * GET /api/characters/marketplace/v2?action=categories
 * GET /api/characters/marketplace/v2?action=trending
 */

import { NextRequest, NextResponse } from 'next/server';
import { getFeaturedCharacters, getCharacterCategories, getTrendingCharacters } from '@/lib/character-marketplace';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const requestId = crypto.randomUUID().slice(0, 8);
  const startTime = Date.now();
  const { searchParams } = new URL(req.url);
  
  const action = searchParams.get('action');
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);

  try {
    switch (action) {
      case 'featured': {
        const featured = await getFeaturedCharacters();
        return NextResponse.json({ featured }, {
          headers: { 
            'Cache-Control': 'public, max-age=300, s-maxage=600', 
            'X-Request-ID': requestId,
          },
        });
      }
      
      case 'categories': {
        const categories = await getCharacterCategories();
        return NextResponse.json({ categories }, {
          headers: { 
            'Cache-Control': 'public, max-age=3600, s-maxage=7200', 
            'X-Request-ID': requestId,
          },
        });
      }
      
      case 'trending': {
        const trending = await getTrendingCharacters(limit);
        return NextResponse.json({ trending }, {
          headers: { 
            'Cache-Control': 'public, max-age=60, s-maxage=300', 
            'X-Request-ID': requestId,
          },
        });
      }
      
      default: {
        const [featured, categories, trending] = await Promise.all([
          getFeaturedCharacters(),
          getCharacterCategories(),
          getTrendingCharacters(10),
        ]);
        
        return NextResponse.json({
          featured,
          categories,
          trending,
          _meta: {
            requestId,
            took: `${Date.now() - startTime}ms`,
          },
        }, {
          headers: { 
            'Cache-Control': 'public, max-age=60', 
            'X-Request-ID': requestId,
            'X-Response-Time': `${Date.now() - startTime}ms`,
          },
        });
      }
    }
  } catch (err) {
    console.error(`[characters/marketplace/v2 ${requestId}] error:`, err);
    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: 'Failed to fetch marketplace' },
      { status: 500, headers: { 'Cache-Control': 'no-store', 'X-Request-ID': requestId } }
    );
  }
}