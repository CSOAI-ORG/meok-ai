-- MEOK AI LABS — Schema migration v2
-- Adds columns for progress tracking, custom characters, and OCEAN profile persistence.
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v2.sql
--
-- Or paste into the Neon SQL Editor in the dashboard.
-- These are all idempotent (IF NOT EXISTS / safe ADD COLUMN).

-- 1. Progress tracking columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS messages_total    INTEGER NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS streak_days       INTEGER NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS last_active_date  TEXT;

-- 2. Custom characters JSONB array
ALTER TABLE users ADD COLUMN IF NOT EXISTS custom_characters JSONB DEFAULT '[]'::jsonb;

-- 3. OCEAN personality profile (Big Five inference, persisted across sessions)
ALTER TABLE users ADD COLUMN IF NOT EXISTS user_profile      JSONB DEFAULT '{}'::jsonb;

-- Verify
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'users'
  AND column_name IN ('messages_total', 'streak_days', 'last_active_date', 'custom_characters', 'user_profile')
ORDER BY ordinal_position;
