-- MEOK AI LABS — Schema migration v6
-- Adds: characters table with pgvector(1024) semantic embeddings + marketplace fields
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v6.sql
--
-- All operations are idempotent (IF NOT EXISTS / ADD COLUMN IF NOT EXISTS).
-- Requires: pgvector already installed (done in v5).

-- ── 0. Ensure pgvector is available ──────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS vector;

-- ── 1. characters table ───────────────────────────────────────────────────────
-- Stores all MEOK characters: originals, packs, and user-created.
-- Replaces the static TypeScript arrays as source of truth at runtime.
-- Static TS data remains as seed/fallback for cold starts.

CREATE TABLE IF NOT EXISTS characters (
  id                   TEXT PRIMARY KEY,
  name                 TEXT NOT NULL,
  title                TEXT,
  archetype            TEXT NOT NULL,          -- challenger|nurturer|explorer|sage|seeker|creator|trickster|rebel|innocent
  emoji                TEXT,
  color                TEXT,
  tagline              TEXT,
  system_prompt        TEXT,
  personality          JSONB NOT NULL DEFAULT '[]',     -- string[]
  tags                 JSONB NOT NULL DEFAULT '[]',     -- string[]
  tier                 TEXT NOT NULL DEFAULT 'explorer'
                         CHECK (tier IN ('explorer', 'sovereign', 'family')),
  license              TEXT NOT NULL DEFAULT 'original'
                         CHECK (license IN ('CC0', 'original', 'user-created')),
  pack                 TEXT,                   -- null=original, 'mythological'|'historical'|'archetypes'|'literary'
  voice_style          TEXT,
  communication_style  TEXT,
  dynamism             FLOAT NOT NULL DEFAULT 0.95,
  -- Personality dimensions (Big Five mapping, 0–1)
  dimensions           JSONB DEFAULT NULL,
  -- Semantic personality embedding — 1024-dim from bge-m3 via M2 Ollama
  -- Used for: similar character recommendations, companion personalisation, semantic search
  personality_embedding vector(1024),
  -- Marketplace fields
  is_marketplace       BOOLEAN NOT NULL DEFAULT FALSE,
  price_cents          INTEGER,                -- null = free, >0 = paid
  creator_user_id      TEXT REFERENCES users(id) ON DELETE SET NULL,
  marketplace_approved BOOLEAN,               -- null=pending, true=approved, false=rejected
  download_count       INTEGER NOT NULL DEFAULT 0,
  rating_sum           INTEGER NOT NULL DEFAULT 0,
  rating_count         INTEGER NOT NULL DEFAULT 0,
  -- Status
  is_active            BOOLEAN NOT NULL DEFAULT TRUE,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── 2. Indexes ────────────────────────────────────────────────────────────────

-- Archetype filter (most common filter in /api/characters/search)
CREATE INDEX IF NOT EXISTS idx_characters_archetype
  ON characters (archetype)
  WHERE is_active = TRUE;

-- Tier filter
CREATE INDEX IF NOT EXISTS idx_characters_tier
  ON characters (tier)
  WHERE is_active = TRUE;

-- Pack filter
CREATE INDEX IF NOT EXISTS idx_characters_pack
  ON characters (pack)
  WHERE is_active = TRUE AND pack IS NOT NULL;

-- Marketplace listings
CREATE INDEX IF NOT EXISTS idx_characters_marketplace
  ON characters (is_marketplace, marketplace_approved, download_count DESC)
  WHERE is_active = TRUE;

-- User-created characters
CREATE INDEX IF NOT EXISTS idx_characters_creator
  ON characters (creator_user_id, created_at DESC)
  WHERE creator_user_id IS NOT NULL;

-- HNSW semantic similarity index (for pgvector cosine search)
-- Used for "characters similar to X" and semantic tag-based recommendations
CREATE INDEX IF NOT EXISTS idx_characters_personality_embedding
  ON characters USING hnsw (personality_embedding vector_cosine_ops)
  WHERE personality_embedding IS NOT NULL;

-- ── 3. character_ratings table ────────────────────────────────────────────────
-- Tracks per-user ratings for marketplace characters (1 row per user+character)

CREATE TABLE IF NOT EXISTS character_ratings (
  id               TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  character_id     TEXT NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  user_id          TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  rating           INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text      TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_character_ratings_unique
  ON character_ratings (character_id, user_id);

-- ── 4. Helper view: marketplace listings ─────────────────────────────────────

CREATE OR REPLACE VIEW marketplace_characters AS
SELECT
  c.id,
  c.name,
  c.title,
  c.archetype,
  c.emoji,
  c.color,
  c.tagline,
  c.personality,
  c.tags,
  c.tier,
  c.license,
  c.voice_style,
  c.dimensions,
  c.is_marketplace,
  c.price_cents,
  c.creator_user_id,
  c.download_count,
  CASE WHEN c.rating_count > 0
       THEN ROUND(c.rating_sum::NUMERIC / c.rating_count, 2)
       ELSE NULL END AS avg_rating,
  c.rating_count,
  c.created_at
FROM characters c
WHERE c.is_active = TRUE
  AND c.is_marketplace = TRUE
  AND (c.marketplace_approved = TRUE OR c.license = 'original' OR c.license = 'CC0');

-- ── 5. Seed: backfill from static TS data ─────────────────────────────────────
-- Run separately via:  npx tsx scripts/seed-characters.ts
-- The SQL migration only creates the schema; seeding runs as a Node script
-- to avoid embedding 150+ character JSON blobs in SQL.

-- ── 6. Verify ─────────────────────────────────────────────────────────────────
SELECT
  (SELECT COUNT(*) FROM characters)                              AS total_characters,
  (SELECT COUNT(*) FROM characters WHERE is_active = TRUE)       AS active_characters,
  (SELECT COUNT(*) FROM characters WHERE license = 'original')   AS original_characters,
  (SELECT COUNT(*) FROM characters WHERE license = 'CC0')        AS cc0_characters,
  (SELECT COUNT(*) FROM characters WHERE is_marketplace = TRUE)  AS marketplace_characters;
