# Ralph: root-cause of "zero completed tasks" + the completion-survival loop
*2026-06-03 — Step 2 of the Odysseus/ATLAS integration.*

## Root cause (why #10 has never been fixed)
`ralph_tasks` had **two incompatible schemas for the same table name**:
- **Executor** (`agents/ralph_task_runner.py` + `db/migrations/002_ralph_tasks.sql`): columns `task_name, payload, result`; status `pending|running|done|failed|cancelled`.
- **UI** (`ui/src/app/api/ralph/tasks/route.ts`): columns `user_id, title, description, agent, project_id, input_data, output_data, requires_approval`; status `queued|running|blocked|complete`.

So UI-created tasks were invisible to the executor (no `task_name`/handler), executor tasks didn't match the UI's `complete` filter, and the two never shared state → the dashboard always showed **0 completed**. It was never an "empty queue" — it was a split brain.

## The fix (this changeset)
1. **`db/migrations/003_ralph_tasks_reconcile.sql`** — makes `ralph_tasks` a SUPERSET (both column sets), keeps `title`↔`task_name` + `payload`↔`input_data` in sync via a trigger, and normalises status to ONE canonical vocabulary `queued|running|blocked|complete|failed|cancelled` (legacy `pending`→`queued`, `done`→`complete`). Idempotent + non-destructive.
2. **`agents/ralph_task_runner.py`** — aligned to the canonical vocab (`queued`/`complete`) and now **dispatches UI tasks (which carry `agent`+`title`) to the real SOV3 agent runtime** (`orion_riri_hourman`). Critically: if the agent runtime isn't wired, it **fails honestly (no fake completion)** — because faking completions would poison the survival signal below.
3. **`agents/completion_survival.py`** + **`agents/ralph_pickup_prompt.md`** — the ATLAS pattern.

## The completion-survival loop (the ATLAS pattern, adapted)
- **Weight** = `ralph_pickup_prompt.md` (how Ralph picks + executes tasks), versioned in git.
- **Loss** = real completions: `count(status='complete' AND completed_at >= now()-7d)` per day.
- **Survival** = a staged edit to the pickup prompt is kept (`git commit`) only if the completion rate did not regress vs baseline; otherwise `git checkout --` reverts it. The fleet's instructions can only evolve in directions that actually raise completions.

```
python -m meok.agents.completion_survival status     # rate vs baseline
python -m meok.agents.completion_survival evaluate    # commit-if-better / revert-if-worse
```

## TO APPLY (needs the live DB — I did NOT blind-apply)
```
pg_dump "$DATABASE_URL" -t ralph_tasks > /tmp/ralph_tasks.bak.sql   # backup first
psql "$DATABASE_URL" -f db/migrations/003_ralph_tasks_reconcile.sql
python -m meok.agents.completion_survival baseline                  # seed baseline
```
The real DB creds weren't reachable from this session (TCP up, `meok/meok` rejected; socket elsewhere) — get the live `DATABASE_URL` from `meok/ui/.env.local`, back up, apply, verify `\d ralph_tasks` shows the superset + canonical status.

## Honest follow-on (the real lever)
The schema is now unified and the loop is wired — but completions only grow once the **agent runtime actually executes UI tasks**. `_dispatch_agent` targets `orion_riri_hourman.{execute_task,run_task,handle}`; if those methods don't exist yet, UI tasks will `fail` (honestly) until that entrypoint is implemented. That's the next build, and it's the thing that turns the loop from scaffolding into real selection pressure.
