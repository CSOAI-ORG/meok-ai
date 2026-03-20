-- Migration 001: pgvector HNSW index for semantic memory search
-- Phase D / PROP-001 — O(log n) ANN vs O(n) numpy cosine
-- Run once on VPS: psql $DATABASE_URL -f 001_pgvector_hnsw.sql
-- Idempotent: all statements use IF NOT EXISTS / IF EXISTS guards

-- 1. Enable extension (requires pg_vector installed: apt install postgresql-15-pgvector)
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Add embedding column if not present (384-dim MiniLM-L6-v2 / SentenceTransformer)
ALTER TABLE memory_episodes
  ADD COLUMN IF NOT EXISTS embedding vector(384);

-- 3. Add vector_id column for deduplication
ALTER TABLE memory_episodes
  ADD COLUMN IF NOT EXISTS vector_id TEXT;

-- 4. Create HNSW index for fast cosine ANN search
--    m=16, ef_construction=64 — balanced for <1M memories
--    Upgrade to m=32 ef=128 when store exceeds 500K episodes
CREATE INDEX IF NOT EXISTS memory_episodes_embedding_hnsw
  ON memory_episodes
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- 5. Index on tags array for collection filtering (used in pgvector_search WHERE clause)
CREATE INDEX IF NOT EXISTS memory_episodes_tags_gin
  ON memory_episodes
  USING gin (tags);

-- 6. Verify
DO $$
BEGIN
  RAISE NOTICE 'pgvector migration 001 complete — HNSW index ready';
END $$;
