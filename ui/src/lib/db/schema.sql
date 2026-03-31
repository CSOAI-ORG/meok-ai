-- MEOK AI LABS — Users table schema
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/schema.sql
--
-- Or paste into the Neon SQL Editor in the dashboard.

CREATE TABLE IF NOT EXISTS users (
  id                      TEXT PRIMARY KEY,                          -- Clerk user ID
  email                   TEXT NOT NULL,
  name                    TEXT,
  tier                    TEXT NOT NULL DEFAULT 'explorer'
                            CHECK (tier IN ('explorer', 'sovereign', 'family')),
  companion_id            TEXT,
  companion_name          TEXT,
  companion_stage         INTEGER NOT NULL DEFAULT 0,
  guardian_enabled         BOOLEAN NOT NULL DEFAULT FALSE,
  guardian_settings        JSONB,
  family_group_id         TEXT,
  stripe_customer_id      TEXT,
  stripe_subscription_id  TEXT,
  messages_today          INTEGER NOT NULL DEFAULT 0,
  messages_today_reset    TEXT NOT NULL DEFAULT TO_CHAR(NOW() AT TIME ZONE 'UTC', 'YYYY-MM-DD'),
  messages_total          INTEGER NOT NULL DEFAULT 0,
  streak_days             INTEGER NOT NULL DEFAULT 0,
  last_active_date        TEXT,
  custom_characters       JSONB DEFAULT '[]'::jsonb,
  user_profile            JSONB DEFAULT '{}'::jsonb,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at              TIMESTAMPTZ
);

-- Unique index on email (enforces one account per email)
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email
  ON users (email);

-- Lookup by Stripe customer ID (webhook handling)
CREATE INDEX IF NOT EXISTS idx_users_stripe_customer_id
  ON users (stripe_customer_id)
  WHERE stripe_customer_id IS NOT NULL;

-- Lookup by family group (family tier queries)
CREATE INDEX IF NOT EXISTS idx_users_family_group_id
  ON users (family_group_id)
  WHERE family_group_id IS NOT NULL;

-- ── Message Feedback (thumbs up/down on chat messages) ──────────────────
CREATE TABLE IF NOT EXISTS message_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  message_id TEXT,
  conversation_id UUID,
  rating INTEGER NOT NULL CHECK (rating IN (-1, 0, 1)),
  comment TEXT,
  companion_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_feedback_user ON message_feedback(user_id);
CREATE INDEX IF NOT EXISTS idx_feedback_created ON message_feedback(created_at DESC);

-- ── Full-text search GIN index on conversation messages ─────────────────
CREATE INDEX IF NOT EXISTS idx_conv_messages_fts
  ON conversation_messages USING GIN (to_tsvector('english', content));

-- ── Waitlist (pre-launch signups) ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  interest TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist(created_at DESC);
