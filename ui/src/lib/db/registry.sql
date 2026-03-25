-- MEOK AI LABS — AI Registry Schema
-- Run against Neon Postgres to create the registry tables.

CREATE TABLE IF NOT EXISTS registry_models (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  provider TEXT NOT NULL,
  source TEXT NOT NULL,
  context_length INTEGER,
  pricing_prompt NUMERIC,
  pricing_completion NUMERIC,
  open_source BOOLEAN DEFAULT FALSE,
  capabilities TEXT[] DEFAULT '{}',
  downloads INTEGER,
  size_bytes BIGINT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_registry_source ON registry_models (source);
CREATE INDEX IF NOT EXISTS idx_registry_open_source ON registry_models (open_source) WHERE open_source = TRUE;
CREATE INDEX IF NOT EXISTS idx_registry_provider ON registry_models (provider);
CREATE INDEX IF NOT EXISTS idx_registry_updated ON registry_models (updated_at DESC);
