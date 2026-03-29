-- MEOK AI LABS — Schema migration v3
-- Adds: companions table, short_term_memory table, consciousness_state on users
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v3.sql
--
-- All operations are idempotent (IF NOT EXISTS / safe ADD COLUMN).

-- ── 1. Companions table ──────────────────────────────────────────────────────
-- Replaces the single companion_id TEXT column on users with a proper
-- companions table that supports multi-companion relationships, evolution
-- state persistence, and the Phase 2 character marketplace.

CREATE TABLE IF NOT EXISTS companions (
  id                    TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  user_id               TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  character_id          TEXT NOT NULL,               -- e.g. 'aria', 'marcus', 'athena_wisdom'
  name                  TEXT,                        -- user-given name override
  stage                 INTEGER NOT NULL DEFAULT 0,  -- 0-5 evolution stage
  interaction_count     INTEGER NOT NULL DEFAULT 0,
  last_active           TIMESTAMPTZ,
  emotional_weight      NUMERIC(4,3) DEFAULT 0.5,    -- 0.0–1.0 relationship depth
  memory_snapshot       JSONB DEFAULT '{}',          -- dynamic traits + learned patterns
  is_primary            BOOLEAN NOT NULL DEFAULT TRUE,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_companions_user_id
  ON companions (user_id);

CREATE INDEX IF NOT EXISTS idx_companions_user_primary
  ON companions (user_id, is_primary)
  WHERE is_primary = TRUE;

-- ── 2. Short-term memory table ───────────────────────────────────────────────
-- Replaces the in-process Map<string, MemoryEpisode[]> which is wiped on
-- every Vercel cold start. Episodes are loaded into the in-process cache on
-- first request and written back asynchronously (fire-and-forget).

CREATE TABLE IF NOT EXISTS short_term_memory (
  id              TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  user_id         TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  companion_id    TEXT NOT NULL,
  content         TEXT NOT NULL,
  importance      NUMERIC(4,3) DEFAULT 0.5,
  source_agent    TEXT DEFAULT 'user',
  tags            TEXT[] DEFAULT '{}',
  care_weight     NUMERIC(4,3) DEFAULT 0.5,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_short_term_memory_user_companion
  ON short_term_memory (user_id, companion_id, created_at DESC);

-- ── 3. Consciousness state persistence ──────────────────────────────────────
-- Makes the companion's consciousness mode (waking/dreaming/deep_rest/reflecting)
-- globally consistent across all devices and Vercel cold starts.

ALTER TABLE users ADD COLUMN IF NOT EXISTS consciousness_state JSONB DEFAULT '{}'::jsonb;

-- ── 4. Soft-delete index on companions ──────────────────────────────────────
ALTER TABLE companions ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ;

-- ── 5. Mark existing companion_id/name data as migrated (non-destructive) ───
-- The old companion_id/companion_name columns are preserved for backwards
-- compatibility but new code should use the companions table.

-- Verify
SELECT
  (SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'companions') AS companions_table,
  (SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'short_term_memory') AS short_term_table,
  (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'consciousness_state') AS consciousness_col;
