-- MEOK AI LABS — Schema migration v8
-- Adds: ralph_projects, ralph_tasks tables (Ralph Mode task queue)
--
-- Run against your Neon database:
--   psql $DATABASE_URL -f src/lib/db/migrate-v8.sql
--
-- All operations are idempotent (IF NOT EXISTS).

-- ── 1. Ralph Projects ───────────────────────────────────────────────────────
-- High-level goals that decompose into agent tasks.

CREATE TABLE IF NOT EXISTS ralph_projects (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title             TEXT NOT NULL,
  goal              TEXT NOT NULL,
  status            TEXT NOT NULL DEFAULT 'active'
                      CHECK (status IN ('active', 'complete', 'paused', 'cancelled')),
  task_count        INTEGER NOT NULL DEFAULT 0,
  completed_count   INTEGER NOT NULL DEFAULT 0,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ralph_projects_user
  ON ralph_projects (user_id, updated_at DESC);

-- ── 2. Ralph Tasks ──────────────────────────────────────────────────────────
-- Individual agent tasks within a project (or standalone).

CREATE TABLE IF NOT EXISTS ralph_tasks (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  project_id          UUID REFERENCES ralph_projects(id) ON DELETE SET NULL,
  title               TEXT NOT NULL,
  description         TEXT,
  agent               TEXT NOT NULL CHECK (agent IN ('orion', 'riri', 'hourman', 'sovereign')),
  status              TEXT NOT NULL DEFAULT 'queued'
                        CHECK (status IN ('queued', 'running', 'complete', 'failed', 'blocked', 'cancelled')),
  priority            INTEGER NOT NULL DEFAULT 3 CHECK (priority BETWEEN 1 AND 5),
  input_data          JSONB DEFAULT '{}',
  output_data         JSONB,
  care_score          REAL,
  error_message       TEXT,
  requires_approval   BOOLEAN NOT NULL DEFAULT FALSE,
  approved_at         TIMESTAMPTZ,
  started_at          TIMESTAMPTZ,
  completed_at        TIMESTAMPTZ,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ralph_tasks_user
  ON ralph_tasks (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_ralph_tasks_project
  ON ralph_tasks (project_id)
  WHERE project_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_ralph_tasks_status
  ON ralph_tasks (status, priority DESC);

CREATE INDEX IF NOT EXISTS idx_ralph_tasks_agent
  ON ralph_tasks (agent, status);

-- ── 3. Verify ───────────────────────────────────────────────────────────────
SELECT
  (SELECT COUNT(*) FROM ralph_projects) AS total_projects,
  (SELECT COUNT(*) FROM ralph_tasks)    AS total_tasks;

SELECT 'Migration v8 (Ralph Mode tables) applied successfully' AS status;
