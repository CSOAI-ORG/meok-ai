-- MEOK AI LABS — Schema migration v10
-- Adds: usage_events, usage_quotas, user_add_ons tables for revenue infrastructure
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v10.sql
--
-- All operations are idempotent (IF NOT EXISTS).

-- ── 1. Usage Events (Metered Billing) ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS usage_events (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  event_type   TEXT NOT NULL CHECK (event_type IN (
    'message_sent', 'message_received', 'storage_bytes', 'api_call',
    'voice_minute', 'image_generated', 'character_purchased', 'squad_created'
  )),
  quantity     INTEGER NOT NULL DEFAULT 1,
  cost         INTEGER NOT NULL DEFAULT 0, -- in cents (GBP)
  metadata     JSONB DEFAULT '{}',
  timestamp    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_usage_events_user_time
  ON usage_events (user_id, timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_usage_events_type_time
  ON usage_events (event_type, timestamp);
CREATE INDEX IF NOT EXISTS idx_usage_events_monthly
  ON usage_events (user_id, event_type, timestamp)
  WHERE timestamp >= DATE_TRUNC('month', NOW());

-- ── 2. Usage Quotas (Tier Configuration) ────────────────────────────────────
CREATE TABLE IF NOT EXISTS usage_quotas (
  id                SERIAL PRIMARY KEY,
  tier              TEXT NOT NULL CHECK (tier IN ('explorer', 'sovereign', 'family', 'byok')),
  feature           TEXT NOT NULL,
  limit_amount      INTEGER NOT NULL, -- use -1 for unlimited
  overage_price     INTEGER NOT NULL DEFAULT 0, -- price per unit in cents
  warning_threshold DECIMAL(3,2) NOT NULL DEFAULT 0.80, -- 0.0 - 1.0
  UNIQUE(tier, feature)
);

-- Insert default quotas
INSERT INTO usage_quotas (tier, feature, limit_amount, overage_price, warning_threshold) VALUES
  -- Explorer tier
  ('explorer', 'messages', 50, 2, 0.80),
  ('explorer', 'storage_mb', 10, 10, 0.90),
  ('explorer', 'api_calls', 100, 1, 1.00),
  ('explorer', 'voice_minutes', 0, 5, 0),
  -- Sovereign tier
  ('sovereign', 'messages', 500, 1, 0.90),
  ('sovereign', 'storage_mb', 100, 5, 0.95),
  ('sovereign', 'api_calls', 1000, 0, 1.00),
  ('sovereign', 'voice_minutes', 60, 3, 0.80),
  -- Family tier
  ('family', 'messages', 2000, 0, 1.00),
  ('family', 'storage_mb', 500, 2, 0.95),
  ('family', 'api_calls', 5000, 0, 1.00),
  ('family', 'voice_minutes', 300, 2, 0.90),
  -- BYOK tier (unlimited)
  ('byok', 'messages', -1, 0, 1.00),
  ('byok', 'storage_mb', -1, 0, 1.00),
  ('byok', 'api_calls', -1, 0, 1.00),
  ('byok', 'voice_minutes', -1, 0, 1.00)
ON CONFLICT (tier, feature) DO NOTHING;

-- ── 3. User Add-Ons ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_add_ons (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                 TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  add_on_id               TEXT NOT NULL,
  purchased_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at              TIMESTAMPTZ,
  status                  TEXT NOT NULL DEFAULT 'pending' 
                            CHECK (status IN ('pending', 'active', 'cancelled', 'expired')),
  stripe_subscription_id  TEXT,
  stripe_payment_intent_id TEXT,
  billing_cycle           TEXT CHECK (billing_cycle IN ('monthly', 'yearly', 'one_time')),
  UNIQUE(user_id, add_on_id, status)
);

CREATE INDEX IF NOT EXISTS idx_user_add_ons_user
  ON user_add_ons (user_id, status);
CREATE INDEX IF NOT EXISTS idx_user_add_ons_stripe
  ON user_add_ons (stripe_subscription_id) WHERE stripe_subscription_id IS NOT NULL;

-- ── 4. A/B Test Assignments ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS experiment_assignments (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  experiment_id  TEXT NOT NULL,
  variant        TEXT NOT NULL,
  assigned_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, experiment_id)
);

CREATE INDEX IF NOT EXISTS idx_experiment_assignments_exp
  ON experiment_assignments (experiment_id, variant);

-- ── 5. A/B Test Events ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS experiment_events (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  experiment_id  TEXT NOT NULL,
  variant        TEXT NOT NULL,
  event_type     TEXT NOT NULL, -- e.g., 'conversion', 'upgrade_click', 'page_view'
  value          INTEGER, -- optional numeric value
  timestamp      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_experiment_events_exp
  ON experiment_events (experiment_id, variant, event_type);

-- ── 6. Email Campaign Tracking ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS email_campaigns (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  campaign_id TEXT NOT NULL,
  email_type  TEXT NOT NULL,
  sent_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  opened_at   TIMESTAMPTZ,
  clicked_at  TIMESTAMPTZ,
  converted   BOOLEAN DEFAULT FALSE,
  revenue     INTEGER DEFAULT 0 -- in cents
);

CREATE INDEX IF NOT EXISTS idx_email_campaigns_user
  ON email_campaigns (user_id, campaign_id);
CREATE INDEX IF NOT EXISTS idx_email_campaigns_sent
  ON email_campaigns (sent_at DESC);

-- ── 7. Referral System ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS referrals (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code          TEXT UNIQUE NOT NULL,
  referrer_id   TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  referee_id    TEXT REFERENCES users(id) ON DELETE SET NULL,
  status        TEXT NOT NULL DEFAULT 'pending' 
                  CHECK (status IN ('pending', 'converted', 'expired')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  converted_at  TIMESTAMPTZ,
  reward_applied BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE INDEX IF NOT EXISTS idx_referrals_code
  ON referrals (code);
CREATE INDEX IF NOT EXISTS idx_referrals_referrer
  ON referrals (referrer_id, status);

-- ── 8. Referral Rewards ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS referral_rewards (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  referral_id   UUID NOT NULL REFERENCES referrals(id) ON DELETE CASCADE,
  type          TEXT NOT NULL CHECK (type IN ('referrer_credit', 'referee_discount')),
  amount        INTEGER NOT NULL, -- in cents or percentage
  status        TEXT NOT NULL DEFAULT 'pending' 
                  CHECK (status IN ('pending', 'applied', 'expired')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  applied_at    TIMESTAMPTZ,
  expires_at    TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_referral_rewards_user
  ON referral_rewards (user_id, status);

-- ── 9. Character Purchases ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS character_purchases (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                 TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  character_id            TEXT NOT NULL,
  creator_id              TEXT REFERENCES users(id) ON DELETE SET NULL,
  price                   INTEGER NOT NULL, -- in cents
  creator_share           INTEGER NOT NULL,
  platform_share          INTEGER NOT NULL,
  status                  TEXT NOT NULL DEFAULT 'pending' 
                            CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  stripe_payment_intent_id TEXT,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at            TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_character_purchases_user
  ON character_purchases (user_id, status);
CREATE INDEX IF NOT EXISTS idx_character_purchases_creator
  ON character_purchases (creator_id, status) WHERE creator_id IS NOT NULL;

-- ── 10. User Characters (Owned Characters) ─────────────────────────────────
CREATE TABLE IF NOT EXISTS user_characters (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  character_id  TEXT NOT NULL,
  purchased_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  source        TEXT NOT NULL DEFAULT 'purchase' 
                  CHECK (source IN ('purchase', 'reward', 'gift', 'bundle')),
  UNIQUE(user_id, character_id)
);

CREATE INDEX IF NOT EXISTS idx_user_characters_user
  ON user_characters (user_id);

-- ── 11. Verify ───────────────────────────────────────────────────────────────
SELECT 'Migration v10 (Revenue Infrastructure + Growth Systems) applied successfully' AS status;
