/**
 * MEOK AI LABS — Character Search API
 *
 * GET /api/characters/search?q=wisdom&archetype=sage&tier=explorer&pack=mythological&semantic=1
 *
 * Searches across all MEOK character packs (originals + mythological + historical
 * + archetypes + literary) by name, tagline, personality traits, and tags.
 *
 * v2: DB-backed via PostgreSQL full-text search + optional pgvector semantic search.
 * Falls back to in-process TS data when database is unavailable.
 *
 * Query params:
 *   q          — text search query
 *   archetype  — filter by archetype (challenger|nurturer|explorer|sage|...)
 *   tier       — filter by tier (explorer|sovereign|family)
 *   pack       — filter by pack (mythological|historical|archetypes|literary|original)
 *   semantic   — set to '1' to use bge-m3 semantic search via M2 Ollama
 *   limit      — max results (default 20, max 50)
 *
 * Returns up to limit results sorted by relevance score.
 * No auth required — public endpoint.
 */

import { NextRequest, NextResponse } from 'next/server';
import { dbSearchCharacters, dbSemanticSearch } from '@/lib/db/characters';

export const runtime = 'nodejs';

// ── Semantic embedding via M2 Ollama bge-m3 ──────────────────────────────────

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

// ── Route handler ─────────────────────────────────────────────────────────────

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const query     = (searchParams.get('q') ?? '').trim().toLowerCase();
  const archetype = searchParams.get('archetype') ?? undefined;
  const tier      = searchParams.get('tier') ?? undefined;
  const pack      = searchParams.get('pack') ?? undefined;
  const semantic  = searchParams.get('semantic') === '1';
  const limit     = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 50);

  // ── Semantic search path (bge-m3 + pgvector) ──────────────────────────────
  if (semantic && query) {
    const embedding = await getQueryEmbedding(query);
    if (embedding) {
      const results = await dbSemanticSearch({ embedding, archetype, tier, limit });
      return NextResponse.json({
        results: results.map(r => ({
          id:          r.id,
          name:        r.name,
          title:       r.title,
          tagline:     r.tagline,
          archetype:   r.archetype,
          tier:        r.tier,
          emoji:       r.emoji,
          color:       r.color,
          personality: r.personality.slice(0, 4),
          tags:        (r.tags ?? []).slice(0, 5),
          license:     r.license,
          score:       r.similarity,
        })),
        total:    results.length,
        matched:  results.length,
        query:    query || null,
        mode:     'semantic',
        filters:  { archetype: archetype ?? null, tier: tier ?? null, pack: pack ?? null },
      });
    }
    // Fall through to text search if embedding fails
  }

  // ── Text / filter search path (PostgreSQL full-text → TS fallback) ─────────
  const results = await dbSearchCharacters({ query, archetype, tier, pack, limit });

  return NextResponse.json({
    results: results.map(r => ({
      id:          r.id,
      name:        r.name,
      title:       r.title,
      tagline:     r.tagline,
      archetype:   r.archetype,
      tier:        r.tier,
      emoji:       r.emoji,
      color:       r.color,
      personality: r.personality.slice(0, 4),
      tags:        (r.tags ?? []).slice(0, 5),
      license:     r.license,
      score:       r.score,
    })),
    total:    results.length,
    matched:  results.length,
    query:    query || null,
    mode:     'text',
    filters:  { archetype: archetype ?? null, tier: tier ?? null, pack: pack ?? null },
  });
}
