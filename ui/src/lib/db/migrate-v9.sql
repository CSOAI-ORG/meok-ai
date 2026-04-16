-- MEOK AI LABS — Schema migration v9
-- Adds: ai_squads, ai_squad_members, ai_squad_messages, gaming_sessions, user_achievements
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v9.sql
--
-- All operations are idempotent (IF NOT EXISTS).

-- ── 1. AI Squads ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_squads (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  purpose     TEXT NOT NULL DEFAULT 'general'
                CHECK (purpose IN ('gaming', 'creative', 'productivity', 'learning', 'general')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_squads_user
  ON ai_squads (user_id, created_at DESC);

-- ── 2. AI Squad Members ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_squad_members (
  squad_id            TEXT NOT NULL REFERENCES ai_squads(id) ON DELETE CASCADE,
  character_id        TEXT NOT NULL,
  role                TEXT NOT NULL DEFAULT 'member'
                        CHECK (role IN ('leader', 'specialist', 'support', 'analyst', 'member')),
  joined_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  contribution_score  INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (squad_id, character_id)
);

-- ── 3. AI Squad Messages ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_squad_messages (
  id            TEXT PRIMARY KEY,
  squad_id      TEXT NOT NULL REFERENCES ai_squads(id) ON DELETE CASCADE,
  character_id  TEXT NOT NULL,
  content       TEXT NOT NULL,
  timestamp     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_squad_messages_squad_time
  ON ai_squad_messages (squad_id, timestamp DESC);

-- ── 4. Gaming Sessions (AI Squad tools) ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS gaming_sessions (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  game        TEXT NOT NULL,
  start_time  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  end_time    TIMESTAMPTZ,
  duration    INTEGER NOT NULL DEFAULT 0,
  notes       TEXT,
  rating      INTEGER
);

CREATE INDEX IF NOT EXISTS idx_gaming_sessions_user
  ON gaming_sessions (user_id, start_time DESC);

-- ── 5. User Achievements (AI Squad tools) ───────────────────────────────────
CREATE TABLE IF NOT EXISTS user_achievements (
  user_id         TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  achievement_id  TEXT NOT NULL,
  unlocked_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, achievement_id)
);

-- ── 6. Push Subscriptions (Web Push notifications) ──────────────────────────
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id         SERIAL PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  endpoint   TEXT NOT NULL UNIQUE,
  p256dh     TEXT NOT NULL,
  auth       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_push_subscriptions_user
  ON push_subscriptions (user_id);

-- ── 7. Verify ───────────────────────────────────────────────────────────────
SELECT 'Migration v9 (AI Squad persistence + Push Subscriptions) applied successfully' AS status;
