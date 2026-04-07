-- MEOK AI LABS — Schema migration v7
-- Adds: character_versions table for version history tracking
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v7.sql
--
-- All operations are idempotent (IF NOT EXISTS / ADD COLUMN IF NOT EXISTS).

-- ── 1. Character Versions Table ──────────────────────────────────────────────
-- Stores version history for each character (evolution tracking).

CREATE TABLE IF NOT EXISTS character_versions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id        TEXT NOT NULL,
  version             INTEGER NOT NULL,
  name                TEXT,
  title               TEXT,
  archetype           TEXT,
  system_prompt       TEXT,
  personality         JSONB DEFAULT '[]',
  tags                JSONB DEFAULT '[]',
  dimensions          JSONB,
  change_summary      TEXT DEFAULT 'Updated',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  UNIQUE(character_id, version)
);

CREATE INDEX IF NOT EXISTS idx_character_versions_character_id 
  ON character_versions(character_id);

CREATE INDEX IF NOT EXISTS idx_character_versions_created_at 
  ON character_versions(created_at DESC);

-- ── 2. Character Import Source Tracking ───────────────────────────────────────
-- Track where imported characters came from

ALTER TABLE characters 
  ADD COLUMN IF NOT EXISTS import_source TEXT,
  ADD COLUMN IF NOT EXISTS original_creator TEXT,
  ADD COLUMN IF NOT EXISTS source_url TEXT;

-- ── 3. Character Evolution Metrics ───────────────────────────────────────────
-- Track character growth over time

ALTER TABLE characters 
  ADD COLUMN IF NOT EXISTS evolution_score REAL DEFAULT 0.0,
  ADD COLUMN IF NOT EXISTS interaction_count INTEGER DEFAULT 0,
  ADD COLUMN IF NOT EXISTS last_interaction_at TIMESTAMPTZ;

-- ── 4. Character Relationships ───────────────────────────────────────────────
-- Track relationships between characters (for council/team features)

CREATE TABLE IF NOT EXISTS character_relationships (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id_1  TEXT NOT NULL,
  character_id_2  TEXT NOT NULL,
  relationship_type TEXT NOT NULL,  -- ally, rival, complementary, mentor
  strength        REAL DEFAULT 0.5,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(character_id_1, character_id_2)
);

CREATE INDEX IF NOT EXISTS idx_character_relationships_character_1
  ON character_relationships(character_id_1);

CREATE INDEX IF NOT EXISTS idx_character_relationships_character_2
  ON character_relationships(character_id_2);

-- ── 5. Character Mood States ─────────────────────────────────────────────────
-- Track real-time mood states for sandbox/activity features

CREATE TABLE IF NOT EXISTS character_mood_states (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id        TEXT NOT NULL,
  user_id             TEXT,
  mood                TEXT NOT NULL,  -- idle, thinking, responding, learning, dreaming
  energy_level        REAL DEFAULT 0.5,
  active_context      TEXT,
  last_updated        TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(character_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_character_mood_states_character
  ON character_mood_states(character_id);

CREATE INDEX IF NOT EXISTS idx_character_mood_states_last_updated
  ON character_mood_states(last_updated DESC);

-- Migration complete!
SELECT 'Migration v7 applied successfully' as status;