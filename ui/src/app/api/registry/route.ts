/**
 * MEOK AI LABS — Public Registry API
 *
 * GET /api/registry
 *
 * Returns the full registry snapshot (models + MCP servers).
 * Supports query params:
 *   ?source=openrouter|huggingface|ollama   Filter by source
 *   ?open_source=true|false                 Filter by open-source status
 *   ?search=llama                           Search by name/id
 *   ?limit=50                               Limit results (default 200, max 1000)
 *   ?offset=0                               Pagination offset
 *
 * Response is cached for 1 hour via Cache-Control.
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchFullRegistry, type RegistryModel, type RegistrySnapshot } from '@/lib/registry';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// In-memory cache to avoid hammering upstream APIs on every request
let cachedSnapshot: RegistrySnapshot | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

async function getSnapshot(): Promise<RegistrySnapshot> {
  const now = Date.now();
  if (cachedSnapshot && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedSnapshot;
  }

  cachedSnapshot = await fetchFullRegistry();
  cacheTimestamp = now;
  return cachedSnapshot;
}

function applyFilters(
  models: RegistryModel[],
  params: URLSearchParams,
): RegistryModel[] {
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

  return filtered;
}

function paginate(
  items: RegistryModel[],
  params: URLSearchParams,
): { items: RegistryModel[]; total: number; limit: number; offset: number } {
  const total = items.length;
  const limit = Math.min(Math.max(parseInt(params.get('limit') ?? '200', 10) || 200, 1), 1000);
  const offset = Math.max(parseInt(params.get('offset') ?? '0', 10) || 0, 0);

  return {
    items: items.slice(offset, offset + limit),
    total,
    limit,
    offset,
  };
}

export async function GET(request: NextRequest) {
  try {
    const snapshot = await getSnapshot();
    const params = request.nextUrl.searchParams;

    const filtered = applyFilters(snapshot.models, params);
    const { items, total, limit, offset } = paginate(filtered, params);

    const response = NextResponse.json({
      models: items,
      mcp_servers: snapshot.mcp_servers,
      pagination: { total, limit, offset, has_more: offset + limit < total },
      sources: snapshot.sources,
      fetched_at: snapshot.fetched_at,
    });

    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
    return response;
  } catch (err) {
    console.error('[api/registry] Error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch registry', detail: err instanceof Error ? err.message : 'Unknown' },
      { status: 500 },
    );
  }
}
