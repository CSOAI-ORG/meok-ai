# Ralph pickup prompt — THE WEIGHT (optimized by completion_survival.py)

This file is the "weight" in the completion-survival loop. An agent may propose
edits to it; the edit is kept (`git commit`) only if real task completions rise,
and reverted otherwise. Keep it concrete — vague edits don't move the metric.

## How to pick the next task
1. Pull `queued` tasks ordered by `priority ASC, created_at ASC`.
2. Prefer tasks that are (a) small enough to finish in one run, (b) verifiable
   (you can prove they're done), (c) unblock other tasks.
3. Skip anything needing an owner-gated action (Stripe live, DNS, account auth) —
   mark it `blocked` with the reason, don't spin on it.

## How to execute
1. Do the actual work — no stub returns. A task is `complete` only if its output
   is real and verified (file exists / endpoint 200 / test passes).
2. If you can't finish, set `blocked` (not `complete`) with a one-line reason.
3. On success, write the evidence into `output_data` so completion is auditable.

## Definition of "complete" (the loss signal)
`status='complete'` must mean verifiable work landed. Fake completions poison the
selection signal and will be selected against once verification is wired.
