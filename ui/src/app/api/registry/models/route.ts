/**
 * MEOK AI LABS — Models Sub-Endpoint
 *
 * GET /api/registry/models
 *
 * Returns only the models array (no MCP servers) with full filtering.
 * Supports query params:
 *   ?source=openrouter|huggingface|ollama   Filter by source
 *   ?open_source=true|false                 Filter by open-source status
 *   ?search=llama                           Search by name/id/provider
 *   ?capability=vision                      Filter by capability
 *   ?sort=name|downloads|context_length|price  Sort field
 *   ?order=asc|desc                         Sort order (default desc)
 *   ?limit=50                               Limit results (default 100, max 500)
 *   ?offset=0                               Pagination offset
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchFullRegistry, type RegistryModel, type RegistrySnapshot } from '@/lib/registry';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Shared in-memory cache
let cachedSnapshot: RegistrySnapshot | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 60 * 60 * 1000;

async function getSnapshot(): Promise<RegistrySnapshot> {
  const now = Date.now();
  if (cachedSnapshot && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedSnapshot;
  }
  cachedSnapshot = await fetchFullRegistry();
  cacheTimestamp = now;
  return cachedSnapshot;
}

function applyFilters(models: RegistryModel[], params: URLSearchParams): RegistryModel[] {
  let filtered = models;

  const source = params.get('source');
  if (source && ['openrouter', 'huggingface', 'ollama'].includes(source)) {
    filtered = filtered.filter((m) => m.source === source);
  }

  const openSource = params.get('open_source');
  if (openSource === 'true') {
    filtered = filtered.filter((m) => m.open_source);
  } else if (openSource === 'false') {
    filtered = filtered.filter((m) => !m.open_source);
  }

  const search = params.get('search')?.toLowerCase().trim();
  if (search) {
    filtered = filtered.filter(
      (m) =>
        m.name.toLowerCase().includes(search) ||
        m.id.toLowerCase().includes(search) ||
        m.provider.toLowerCase().includes(search),
    );
  }

  const capability = params.get('capability');
  if (capability) {
    filtered = filtered.filter((m) => m.capabilities.includes(capability));
  }

  const provider = params.get('provider');
  if (provider) {
    filtered = filtered.filter(
      (m) => m.provider.toLowerCase() === provider.toLowerCase(),
    );
  }

  return filtered;
}

function applySort(models: RegistryModel[], params: URLSearchParams): RegistryModel[] {
  const sortField = params.get('sort');
  const order = params.get('order') === 'asc' ? 1 : -1;

  if (!sortField) return models;

  const sorted = [...models];

  sorted.sort((a, b) => {
    switch (sortField) {
      case 'name':
        return a.name.localeCompare(b.name) * order;

      case 'downloads':
        return ((a.downloads ?? 0) - (b.downloads ?? 0)) * order;

      case 'context_length':
        return ((a.context_length ?? 0) - (b.context_length ?? 0)) * order;

      case 'price': {
        const aPrice = a.pricing?.prompt ?? Infinity;
        const bPrice = b.pricing?.prompt ?? Infinity;
        return (aPrice - bPrice) * order;
      }

      case 'updated':
        return (new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()) * order;

      default:
        return 0;
    }
  });

  return sorted;
}

export async function GET(request: NextRequest) {
  try {
    const snapshot = await getSnapshot();
    const params = request.nextUrl.searchParams;

    let models = applyFilters(snapshot.models, params);
    models = applySort(models, params);

    const total = models.length;
    const limit = Math.min(Math.max(parseInt(params.get('limit') ?? '100', 10) || 100, 1), 500);
    const offset = Math.max(parseInt(params.get('offset') ?? '0', 10) || 0, 0);
    const page = models.slice(offset, offset + limit);

    const response = NextResponse.json({
      models: page,
      pagination: {
        total,
        limit,
        offset,
        has_more: offset + limit < total,
      },
      sources: snapshot.sources,
      fetched_at: snapshot.fetched_at,
    });

    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
    return response;
  } catch (err) {
    console.error('[api/registry/models] Error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch models', detail: err instanceof Error ? err.message : 'Unknown' },
      { status: 500 },
    );
  }
}
