/**
 * MEOK AI LABS — Character DB Query Layer
 *
 * All character reads go through here.
 * Priority: Neon PostgreSQL → static TS fallback (for cold starts / no DB).
 *
 * Usage:
 *   import { dbGetCharacter, dbSearchCharacters, dbGetAllCharacters } from '@/lib/db/characters'
 *
 * Semantic search uses pgvector cosine distance on bge-m3 1024-dim embeddings.
 * Text search uses pg_trgm + ts_vector (full-text) as fallback.
 */

import { sql } from './index';
import { getAllCharacters, getCharacter as getStaticCharacter, type Character } from '@/lib/characters';

// ── DB row → Character mapper ─────────────────────────────────────────────────

function rowToCharacter(row: Record<string, unknown>): Character {
  return {
    id:                 row.id as string,
    name:               row.name as string,
    title:              (row.title as string) ?? '',
    archetype:          row.archetype as Character['archetype'],
    emoji:              (row.emoji as string) ?? '✨',
    color:              (row.color as string) ?? '#7C3AED',
    tagline:            (row.tagline as string) ?? '',
    systemPrompt:       (row.system_prompt as string) ?? '',
    personality:        (row.personality as string[]) ?? [],
    tags:               (row.tags as string[]) ?? [],
    tier:               (row.tier as Character['tier']) ?? 'explorer',
    license:            (row.license as Character['license']) ?? 'original',
    voiceStyle:         (row.voice_style as string) ?? '',
    communicationStyle: (row.communication_style as string) ?? undefined,
    dynamism:           (row.dynamism as number) ?? 0.95,
    dimensions:         (row.dimensions as Character['dimensions']) ?? undefined,
  };
}

// ── Single character lookup ───────────────────────────────────────────────────

export async function dbGetCharacter(id: string): Promise<Character | null> {
  if (!sql) return getStaticCharacter(id) ?? null;

  try {
    const rows = await sql`
      SELECT id, name, title, archetype, emoji, color, tagline,
             system_prompt, personality, tags, tier, license,
             pack, voice_style, communication_style, dynamism, dimensions
      FROM characters
      WHERE id = ${id} AND is_active = TRUE
      LIMIT 1
    `;
    if (rows.length === 0) return getStaticCharacter(id) ?? null;
    return rowToCharacter(rows[0] as Record<string, unknown>);
  } catch (err) {
    console.error('[db/characters] dbGetCharacter error, using static fallback:', err);
    return getStaticCharacter(id) ?? null;
  }
}

// ── All characters ─────────────────────────────────────────────────────────────

export async function dbGetAllCharacters(opts?: {
  archetype?: string;
  tier?: string;
  pack?: string;
  limit?: number;
  offset?: number;
}): Promise<Character[]> {
  if (!sql) return getAllCharacters();

  const { archetype, tier, pack, limit = 200, offset = 0 } = opts ?? {};

  try {
    // Build dynamic WHERE clauses (Neon tagged template handles parameterisation)
    const rows = await sql`
      SELECT id, name, title, archetype, emoji, color, tagline,
             system_prompt, personality, tags, tier, license,
             pack, voice_style, communication_style, dynamism, dimensions
      FROM characters
      WHERE is_active = TRUE
        AND (${archetype ?? null}::TEXT IS NULL OR archetype = ${archetype ?? null})
        AND (${tier ?? null}::TEXT IS NULL OR tier = ${tier ?? null})
        AND (${pack ?? null}::TEXT IS NULL OR pack = ${pack ?? null})
      ORDER BY name ASC
      LIMIT ${limit} OFFSET ${offset}
    `;
    return (rows as Record<string, unknown>[]).map(rowToCharacter);
  } catch (err) {
    console.error('[db/characters] dbGetAllCharacters error, using static fallback:', err);
    return getAllCharacters();
  }
}

// ── Text search ───────────────────────────────────────────────────────────────

export async function dbSearchCharacters(opts: {
  query?: string;
  archetype?: string;
  tier?: string;
  pack?: string;
  limit?: number;
}): Promise<Array<Character & { score: number }>> {
  const { query = '', archetype, tier, pack, limit = 20 } = opts;

  // Fallback to static in-memory search when DB unavailable
  if (!sql) {
    return staticSearch({ query, archetype, tier, pack, limit });
  }

  try {
    if (!query.trim()) {
      // No text query — filtered list sorted by name
      const chars = await dbGetAllCharacters({ archetype, tier, pack, limit });
      return chars.map(c => ({ ...c, score: 0 }));
    }

    // Full-text search using PostgreSQL ts_vector
    const tsQuery = query.trim().split(/\s+/).join(' & ');

    const rows = await sql`
      SELECT id, name, title, archetype, emoji, color, tagline,
             system_prompt, personality, tags, tier, license,
             pack, voice_style, communication_style, dynamism, dimensions,
             ts_rank(
               to_tsvector('english',
                 COALESCE(name, '') || ' ' ||
                 COALESCE(title, '') || ' ' ||
                 COALESCE(tagline, '') || ' ' ||
                 COALESCE(array_to_string(personality::text[], ' '), '') || ' ' ||
                 COALESCE(array_to_string(tags::text[], ' '), '')
               ),
               plainto_tsquery('english', ${query})
             ) AS score
      FROM characters
      WHERE is_active = TRUE
        AND (${archetype ?? null}::TEXT IS NULL OR archetype = ${archetype ?? null})
        AND (${tier ?? null}::TEXT IS NULL OR tier = ${tier ?? null})
        AND (${pack ?? null}::TEXT IS NULL OR pack = ${pack ?? null})
        AND to_tsvector('english',
              COALESCE(name, '') || ' ' ||
              COALESCE(title, '') || ' ' ||
              COALESCE(tagline, '') || ' ' ||
              COALESCE(array_to_string(personality::text[], ' '), '') || ' ' ||
              COALESCE(array_to_string(tags::text[], ' '), '')
            ) @@ plainto_tsquery('english', ${query})
      ORDER BY score DESC, name ASC
      LIMIT ${limit}
    `;

    return (rows as Record<string, unknown>[]).map(row => ({
      ...rowToCharacter(row),
      score: (row.score as number) ?? 0,
    }));
  } catch (err) {
    console.error('[db/characters] dbSearchCharacters error, using static fallback:', err);
    return staticSearch({ query, archetype, tier, pack, limit });
  }
}

// ── Semantic similarity search via pgvector ────────────────────────────────────
// Finds characters whose personality embedding is closest to the query embedding.
// The query embedding is computed by M2 Ollama bge-m3.

export async function dbSemanticSearch(opts: {
  embedding: number[];   // 1024-dim bge-m3 embedding of the query
  archetype?: string;
  tier?: string;
  limit?: number;
}): Promise<Array<Character & { similarity: number }>> {
  const { embedding, archetype, tier, limit = 10 } = opts;
  if (!sql || embedding.length !== 1024) return [];

  try {
    const embeddingStr = '[' + embedding.join(',') + ']';

    const rows = await sql`
      SELECT id, name, title, archetype, emoji, color, tagline,
             system_prompt, personality, tags, tier, license,
             pack, voice_style, communication_style, dynamism, dimensions,
             1 - (personality_embedding <=> ${embeddingStr}::vector) AS similarity
      FROM characters
      WHERE is_active = TRUE
        AND personality_embedding IS NOT NULL
        AND (${archetype ?? null}::TEXT IS NULL OR archetype = ${archetype ?? null})
        AND (${tier ?? null}::TEXT IS NULL OR tier = ${tier ?? null})
      ORDER BY personality_embedding <=> ${embeddingStr}::vector
      LIMIT ${limit}
    `;

    return (rows as Record<string, unknown>[]).map(row => ({
      ...rowToCharacter(row),
      similarity: (row.similarity as number) ?? 0,
    }));
  } catch (err) {
    console.error('[db/characters] dbSemanticSearch error:', err);
    return [];
  }
}

// ── Get similar characters ────────────────────────────────────────────────────
// Given a character ID, find the N most similar characters by pgvector.

export async function dbGetSimilarCharacters(
  characterId: string,
  limit = 5
): Promise<Array<Character & { similarity: number }>> {
  if (!sql) return [];

  try {
    const rows = await sql`
      SELECT c2.id, c2.name, c2.title, c2.archetype, c2.emoji, c2.color,
             c2.tagline, c2.system_prompt, c2.personality, c2.tags,
             c2.tier, c2.license, c2.pack, c2.voice_style,
             c2.communication_style, c2.dynamism, c2.dimensions,
             1 - (c1.personality_embedding <=> c2.personality_embedding) AS similarity
      FROM characters c1
      JOIN characters c2
        ON c1.id != c2.id
        AND c1.personality_embedding IS NOT NULL
        AND c2.personality_embedding IS NOT NULL
      WHERE c1.id = ${characterId}
        AND c2.is_active = TRUE
      ORDER BY c1.personality_embedding <=> c2.personality_embedding
      LIMIT ${limit}
    `;

    return (rows as Record<string, unknown>[]).map(row => ({
      ...rowToCharacter(row),
      similarity: (row.similarity as number) ?? 0,
    }));
  } catch (err) {
    console.error('[db/characters] dbGetSimilarCharacters error:', err);
    return [];
  }
}

// ── Marketplace listings ───────────────────────────────────────────────────────

export async function dbGetMarketplaceCharacters(opts?: {
  sortBy?: 'popular' | 'rating' | 'newest';
  tier?: string;
  limit?: number;
  offset?: number;
}): Promise<Array<Character & { downloadCount: number; avgRating: number | null; priceCents: number | null }>> {
  if (!sql) return [];

  const { sortBy = 'popular', tier, limit = 20, offset = 0 } = opts ?? {};

  const orderClause = sortBy === 'rating'
    ? 'avg_rating DESC NULLS LAST, download_count DESC'
    : sortBy === 'newest'
    ? 'created_at DESC'
    : 'download_count DESC, avg_rating DESC NULLS LAST';

  try {
    const rows = await sql`
      SELECT id, name, title, archetype, emoji, color, tagline,
             system_prompt, personality, tags, tier, license,
             voice_style, communication_style, dynamism, dimensions,
             download_count, avg_rating, price_cents
      FROM marketplace_characters
      WHERE (${tier ?? null}::TEXT IS NULL OR tier = ${tier ?? null})
      ORDER BY ${sql.unsafe(orderClause)}
      LIMIT ${limit} OFFSET ${offset}
    `;

    return (rows as Record<string, unknown>[]).map(row => ({
      ...rowToCharacter(row),
      downloadCount: (row.download_count as number) ?? 0,
      avgRating:     (row.avg_rating as number) ?? null,
      priceCents:    (row.price_cents as number) ?? null,
    }));
  } catch (err) {
    console.error('[db/characters] dbGetMarketplaceCharacters error:', err);
    return [];
  }
}

// ── Upsert (seed script + user-created characters) ────────────────────────────

export interface UpsertCharacterInput {
  id: string;
  name: string;
  title?: string;
  archetype: string;
  emoji?: string;
  color?: string;
  tagline?: string;
  systemPrompt?: string;
  personality?: string[];
  tags?: string[];
  tier?: 'explorer' | 'sovereign' | 'family';
  license?: 'CC0' | 'original' | 'user-created';
  pack?: string;
  voiceStyle?: string;
  communicationStyle?: string;
  dynamism?: number;
  dimensions?: Record<string, number>;
  personalityEmbedding?: number[];
  isMarketplace?: boolean;
  priceCents?: number;
  creatorUserId?: string;
}

export async function dbUpsertCharacter(input: UpsertCharacterInput): Promise<void> {
  if (!sql) throw new Error('DATABASE_URL not configured');

  const embeddingStr = input.personalityEmbedding
    ? '[' + input.personalityEmbedding.join(',') + ']'
    : null;

  await sql`
    INSERT INTO characters (
      id, name, title, archetype, emoji, color, tagline,
      system_prompt, personality, tags, tier, license,
      pack, voice_style, communication_style, dynamism, dimensions,
      personality_embedding, is_marketplace, price_cents, creator_user_id,
      created_at, updated_at
    ) VALUES (
      ${input.id},
      ${input.name},
      ${input.title ?? null},
      ${input.archetype},
      ${input.emoji ?? null},
      ${input.color ?? null},
      ${input.tagline ?? null},
      ${input.systemPrompt ?? null},
      ${JSON.stringify(input.personality ?? [])}::jsonb,
      ${JSON.stringify(input.tags ?? [])}::jsonb,
      ${input.tier ?? 'explorer'},
      ${input.license ?? 'original'},
      ${input.pack ?? null},
      ${input.voiceStyle ?? null},
      ${input.communicationStyle ?? null},
      ${input.dynamism ?? 0.95},
      ${input.dimensions ? JSON.stringify(input.dimensions) : null}::jsonb,
      ${embeddingStr}::vector,
      ${input.isMarketplace ?? false},
      ${input.priceCents ?? null},
      ${input.creatorUserId ?? null},
      NOW(), NOW()
    )
    ON CONFLICT (id) DO UPDATE SET
      name                 = EXCLUDED.name,
      title                = EXCLUDED.title,
      archetype            = EXCLUDED.archetype,
      emoji                = EXCLUDED.emoji,
      color                = EXCLUDED.color,
      tagline              = EXCLUDED.tagline,
      system_prompt        = EXCLUDED.system_prompt,
      personality          = EXCLUDED.personality,
      tags                 = EXCLUDED.tags,
      tier                 = EXCLUDED.tier,
      license              = EXCLUDED.license,
      pack                 = EXCLUDED.pack,
      voice_style          = EXCLUDED.voice_style,
      communication_style  = EXCLUDED.communication_style,
      dynamism             = EXCLUDED.dynamism,
      dimensions           = EXCLUDED.dimensions,
      personality_embedding = COALESCE(EXCLUDED.personality_embedding, characters.personality_embedding),
      is_marketplace       = EXCLUDED.is_marketplace,
      price_cents          = EXCLUDED.price_cents,
      updated_at           = NOW()
  `;
}

// ── Static fallback search (mirrors original /api/characters/search logic) ───

function staticSearch(opts: {
  query: string;
  archetype?: string;
  tier?: string;
  pack?: string;
  limit: number;
}): Array<Character & { score: number }> {
  const { query, archetype, tier, pack, limit } = opts;
  let characters = getAllCharacters();

  if (archetype) characters = characters.filter(c => c.archetype === archetype);
  if (tier)      characters = characters.filter(c => c.tier === tier);
  if (pack) {
    const PACK_TAG: Record<string, string> = {
      mythological: 'mythological', historical: 'historical',
      archetypes: 'archetype',      literary: 'literary',
    };
    const tag = PACK_TAG[pack];
    if (tag) {
      characters = characters.filter(c =>
        (c.tags ?? []).some(t => t.includes(tag)) || c.license === 'CC0'
      );
    } else if (pack === 'original') {
      characters = characters.filter(c => !c.license || c.license === 'original');
    }
  }

  if (!query.trim()) {
    return characters.slice(0, limit).map(c => ({ ...c, score: 0 }));
  }

  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  return characters
    .map(c => {
      let score = 0;
      const nl = c.name.toLowerCase();
      const tl = (c.title ?? '').toLowerCase();
      const ql = (c.tagline ?? '').toLowerCase();
      for (const t of tokens) {
        if (nl === t)          score += 100;
        if (nl.includes(t))    score += 40;
        if (tl.includes(t))    score += 30;
        if (ql.includes(t))    score += 20;
        for (const p of c.personality) if (p.includes(t)) score += 15;
        for (const tag of (c.tags ?? [])) if (tag.includes(t)) score += 10;
      }
      return { ...c, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
