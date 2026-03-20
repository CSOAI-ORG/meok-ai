-- Migration 002: ralph_tasks table + PGQueuer integration
-- Autonomous task queue for Ralph mode and background agents
-- Run: psql $DATABASE_URL -f 002_ralph_tasks.sql

-- 1. ralph_tasks: persistent task definitions
CREATE TABLE IF NOT EXISTS ralph_tasks (
    id BIGSERIAL PRIMARY KEY,
    task_id TEXT UNIQUE NOT NULL DEFAULT gen_random_uuid()::text,
    tenant_id TEXT NOT NULL DEFAULT 'default',
    task_name TEXT NOT NULL,
    task_type TEXT NOT NULL DEFAULT 'one_shot', -- one_shot | recurring | scheduled
    status TEXT NOT NULL DEFAULT 'pending',      -- pending | running | done | failed | cancelled
    priority INTEGER NOT NULL DEFAULT 5,         -- 1=highest, 10=lowest
    payload JSONB NOT NULL DEFAULT '{}',
    result JSONB,
    error_message TEXT,
    retry_count INTEGER NOT NULL DEFAULT 0,
    max_retries INTEGER NOT NULL DEFAULT 3,
    scheduled_at TIMESTAMP,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by TEXT NOT NULL DEFAULT 'ralph',    -- agent that created this task
    assigned_to TEXT,                            -- agent assigned to execute
    tags TEXT[] DEFAULT '{}',
    care_score FLOAT,                            -- maternal covenant score for this task
    CONSTRAINT valid_status CHECK (status IN ('pending','running','done','failed','cancelled')),
    CONSTRAINT valid_priority CHECK (priority BETWEEN 1 AND 10)
);

-- 2. Indexes for PGQueuer polling pattern
CREATE INDEX IF NOT EXISTS idx_ralph_tasks_status_priority
    ON ralph_tasks (status, priority, created_at)
    WHERE status = 'pending';

CREATE INDEX IF NOT EXISTS idx_ralph_tasks_tenant
    ON ralph_tasks (tenant_id, status);

CREATE INDEX IF NOT EXISTS idx_ralph_tasks_scheduled
    ON ralph_tasks (scheduled_at)
    WHERE status = 'pending' AND scheduled_at IS NOT NULL;

-- 3. PGQueuer job_queue (pgqueuer native schema — idempotent)
CREATE TABLE IF NOT EXISTS pgqueuer_jobs (
    id BIGSERIAL PRIMARY KEY,
    queue TEXT NOT NULL DEFAULT 'default',
    status TEXT NOT NULL DEFAULT 'queued',
    payload JSONB NOT NULL DEFAULT '{}',
    priority INTEGER NOT NULL DEFAULT 5,
    entrypoint TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    dequeued_at TIMESTAMP,
    completed_at TIMESTAMP,
    heartbeat_at TIMESTAMP,
    error TEXT,
    execute_after TIMESTAMP DEFAULT NOW(),
    CONSTRAINT valid_pgq_status CHECK (status IN ('queued','picked','successful','exception'))
);

CREATE INDEX IF NOT EXISTS idx_pgqueuer_jobs_queue_status
    ON pgqueuer_jobs (queue, status, priority DESC, execute_after)
    WHERE status = 'queued';

-- 4. Seed default recurring tasks (idempotent)
INSERT INTO ralph_tasks (task_name, task_type, priority, payload, tags, created_by)
VALUES
    ('memory_compression', 'recurring', 3, '{"interval_hours": 24, "max_episodes": 5000}', '{"memory","maintenance"}', 'system'),
    ('dream_cycle', 'scheduled', 4, '{"trigger": "sleep_detected", "min_episodes": 10}', '{"consciousness","synthesis"}', 'system'),
    ('care_metric_refresh', 'recurring', 2, '{"interval_minutes": 15}', '{"care","monitoring"}', 'system'),
    ('morning_briefing_prep', 'scheduled', 1, '{"trigger_hour": 6, "timezone": "Europe/London"}', '{"briefing","ralph"}', 'ralph'),
    ('variant_health_score_update', 'recurring', 5, '{"interval_hours": 1}', '{"variants","metrics"}', 'system')
ON CONFLICT (task_name) DO NOTHING;

DO $$
BEGIN
  RAISE NOTICE 'Migration 002 complete — ralph_tasks + PGQueuer ready';
END $$;
