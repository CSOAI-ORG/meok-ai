-- MEOK AI LABS — Schema migration v5
-- Adds: companions table, pgvector personality embeddings
-- Replaces: inline companion_id/companion_name/companion_stage on users
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v5.sql
--
-- All operations are idempotent (IF NOT EXISTS / ADD COLUMN IF NOT EXISTS).

-- ── 0. Enable pgvector (idempotent) ─────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS vector;

-- ── 1. companions table ──────────────────────────────────────────────────────
-- One row per user+character bond. A user can have multiple companions
-- (explorer = 1, sovereign = 1, family = 5), each with their own state.

CREATE TABLE IF NOT EXISTS companions (
  id                   TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  user_id              TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Character identity
  character_id         TEXT NOT NULL,           -- 'aria' | 'kai' | 'nova' etc.
  custom_name          TEXT,                    -- user-given nickname (overrides character name)

  -- Relationship state
  stage                INTEGER NOT NULL DEFAULT 0,          -- 0=egg → 200=sovereign
  interaction_count    INTEGER NOT NULL DEFAULT 0,
  bond_score           NUMERIC(4,3) NOT NULL DEFAULT 0.500, -- 0.000–1.000
  last_interaction     TIMESTAMPTZ,

  -- Personality evolution (dynamic traits detected from conversation patterns)
  traits               JSONB NOT NULL DEFAULT '{}',
  -- e.g. { "warmth": 0.8, "playfulness": 0.6, "directness": 0.7 }

  -- Quantum/AI personality vector (1536-dim, set by bge-m3 after enough interactions)
  personality_embedding vector(1536),

  -- Care membrane alignment (mirrors SOV3 care dimensions)
  care_weights         JSONB NOT NULL DEFAULT '{
    "self_care": 0.5,
    "other_care": 0.7,
    "process_care": 0.5,
    "future_care": 0.5,
    "relational_care": 0.8,
    "maternal_care": 0.6
  }',

  -- Status
  is_active            BOOLEAN NOT NULL DEFAULT TRUE,
  deleted_at           TIMESTAMPTZ,

  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Each user can only have one active companion per character
CREATE UNIQUE INDEX IF NOT EXISTS idx_companions_user_character
  ON companions (user_id, character_id)
  WHERE deleted_at IS NULL;

-- Fast lookup: all companions for a user
CREATE INDEX IF NOT EXISTS idx_companions_user_id
  ON companions (user_id, updated_at DESC)
  WHERE deleted_at IS NULL;

-- Similarity search on personality vectors (HNSW for fast ANN)
CREATE INDEX IF NOT EXISTS idx_companions_personality_embedding
  ON companions USING hnsw (personality_embedding vector_cosine_ops)
  WHERE personality_embedding IS NOT NULL;

-- ── 2. Backfill existing users → companions ──────────────────────────────────
-- Migrate every user who has a companion_id into the companions table.
-- Safe to run multiple times (ON CONFLICT DO NOTHING).

INSERT INTO companions (
  id, user_id, character_id, custom_name, stage, interaction_count, is_active, created_at, updated_at
)
SELECT
  gen_random_uuid()::TEXT,
  u.id,
  u.companion_id,
  u.companion_name,
  COALESCE(u.companion_stage, 0),
  COALESCE(u.messages_total, 0),
  TRUE,
  u.created_at,
  u.updated_at
FROM users u
WHERE u.companion_id IS NOT NULL
ON CONFLICT DO NOTHING;

-- ── 3. Keep old columns for backwards compatibility ──────────────────────────
-- These stay so existing code doesn't break during migration.
-- Remove in v6 after all code paths updated to use companions table.

ALTER TABLE users ADD COLUMN IF NOT EXISTS companion_id    TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS companion_name  TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS companion_stage INTEGER NOT NULL DEFAULT 0;

-- ── 4. Active companion view ─────────────────────────────────────────────────
-- Convenience: join users with their active companion in one query.

CREATE OR REPLACE VIEW user_active_companion AS
SELECT
  u.id                AS user_id,
  u.email,
  u.name,
  u.tier,
  c.id                AS companion_record_id,
  c.character_id,
  COALESCE(c.custom_name, c.character_id) AS companion_display_name,
  c.stage,
  c.bond_score,
  c.interaction_count,
  c.traits,
  c.care_weights,
  c.last_interaction
FROM users u
LEFT JOIN companions c
  ON c.user_id = u.id
  AND c.is_active = TRUE
  AND c.deleted_at IS NULL;

-- ── 5. Verify ────────────────────────────────────────────────────────────────
SELECT
  (SELECT COUNT(*) FROM companions)                                AS total_companions,
  (SELECT COUNT(*) FROM companions WHERE deleted_at IS NULL)      AS active_companions,
  (SELECT COUNT(DISTINCT user_id) FROM companions)                AS users_with_companions;
