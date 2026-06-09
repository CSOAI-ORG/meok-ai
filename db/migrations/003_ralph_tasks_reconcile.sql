-- Migration 003: reconcile the ralph_tasks SCHEMA SPLIT (root cause of "zero completed tasks").
--
-- THE BUG: two code paths assumed two different shapes for the SAME table:
--   • executor (agents/ralph_task_runner.py + migration 002): task_name, payload, result,
--     status ∈ {pending,running,done,failed,cancelled}
--   • UI (ui/.../api/ralph/tasks/route.ts): title, description, agent, user_id, project_id,
--     input_data, output_data, requires_approval, status ∈ {queued,running,blocked,complete}
-- → UI-created tasks were invisible to the executor and vice-versa; nothing ever showed "complete".
--
-- THE FIX: make ralph_tasks a SUPERSET (both column sets) + ONE canonical status vocabulary.
-- Idempotent + non-destructive — safe to run repeatedly. APPLY WITH A BACKUP + DB REACHABLE:
--   pg_dump "$DATABASE_URL" -t ralph_tasks > /tmp/ralph_tasks.bak.sql
--   psql "$DATABASE_URL" -f 003_ralph_tasks_reconcile.sql

-- 1. UI-shape columns (no-op if already present)
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS user_id          TEXT;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS title            TEXT;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS description      TEXT;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS agent            TEXT;   -- orion|riri|hourman|sovereign
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS project_id       TEXT;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS input_data       JSONB DEFAULT '{}';
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS output_data      JSONB;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS requires_approval BOOLEAN DEFAULT FALSE;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS approved_at      TIMESTAMP;
-- executor-shape columns (no-op if already present — covers the case where UI created the table)
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS task_name        TEXT;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS payload          JSONB DEFAULT '{}';
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS result           JSONB;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS retry_count      INTEGER DEFAULT 0;
ALTER TABLE ralph_tasks ADD COLUMN IF NOT EXISTS max_retries      INTEGER DEFAULT 3;

-- 2. Keep title <-> task_name in sync so BOTH code paths read a populated value
UPDATE ralph_tasks SET task_name = COALESCE(task_name, title) WHERE task_name IS NULL AND title IS NOT NULL;
UPDATE ralph_tasks SET title     = COALESCE(title, task_name) WHERE title IS NULL AND task_name IS NOT NULL;

CREATE OR REPLACE FUNCTION ralph_sync_title_taskname() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.task_name IS NULL THEN NEW.task_name := NEW.title; END IF;
  IF NEW.title     IS NULL THEN NEW.title     := NEW.task_name; END IF;
  IF NEW.payload   IS NULL THEN NEW.payload   := COALESCE(NEW.input_data, '{}'); END IF;
  -- normalise legacy status values to the canonical set
  IF NEW.status = 'pending' THEN NEW.status := 'queued'; END IF;
  IF NEW.status = 'done'    THEN NEW.status := 'complete'; END IF;
  IF NEW.status = 'complete' AND NEW.completed_at IS NULL THEN NEW.completed_at := NOW(); END IF;
  RETURN NEW;
END $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_ralph_sync ON ralph_tasks;
CREATE TRIGGER trg_ralph_sync BEFORE INSERT OR UPDATE ON ralph_tasks
  FOR EACH ROW EXECUTE FUNCTION ralph_sync_title_taskname();

-- 3. Canonical status vocabulary (normalise existing rows, then enforce)
UPDATE ralph_tasks SET status = 'queued'   WHERE status = 'pending';
UPDATE ralph_tasks SET status = 'complete' WHERE status = 'done';
ALTER TABLE ralph_tasks DROP CONSTRAINT IF EXISTS valid_status;
ALTER TABLE ralph_tasks ADD CONSTRAINT valid_status
  CHECK (status IN ('queued','running','blocked','complete','failed','cancelled'));

-- 4. Index the completion signal the survival loop reads
CREATE INDEX IF NOT EXISTS idx_ralph_tasks_completed
  ON ralph_tasks (completed_at) WHERE status = 'complete';

DO $$ BEGIN RAISE NOTICE 'Migration 003: ralph_tasks reconciled — one table, canonical status, UI+executor unified'; END $$;
