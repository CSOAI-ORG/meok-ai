#!/usr/bin/env python3
"""
Completion-Survival Loop — ATLAS-style autoresearch for the Ralph agent fleet.

Pattern (from chrisworsey55/atlas-gic): the agent's PROMPT is the weight, an
outcome METRIC is the loss, and a change to the prompt survives a `git commit`
only if the metric improves — otherwise it's `git revert`-ed.

Here the metric is REAL TASK COMPLETIONS (ralph_tasks.status='complete' in a
rolling window), not a self-report. This gives the multi-agent fleet the
selection pressure it lacks: edits to how Ralph picks/executes work are kept
only if they actually raise completions — and self-revert if they regress
(the discipline that was missing when an agent shipped 110 broken packages).

The WEIGHT is meok/agents/ralph_pickup_prompt.md (versioned in git).

Usage:
  python -m meok.agents.completion_survival status       # current rate vs baseline
  python -m meok.agents.completion_survival evaluate      # commit-if-better / revert-if-worse
  python -m meok.agents.completion_survival baseline      # (re)set baseline to current
"""
from __future__ import annotations
import json, os, subprocess, sys, asyncio
from datetime import datetime, timezone

DB_URL = os.getenv("DATABASE_URL", "postgresql://meok:meok@localhost:5432/meok")
HERE = os.path.dirname(os.path.abspath(__file__))
WEIGHT = os.path.join(HERE, "ralph_pickup_prompt.md")          # the "weight"
STATE = os.path.join(HERE, ".completion_survival_state.json")  # baseline + history (gitignored)
WINDOW_DAYS = 7
IMPROVE_EPS = 0.0  # require strictly-not-worse to survive (raise to demand real gains)

def _git(*args):
    return subprocess.run(["git", "-C", HERE, *args], capture_output=True, text=True)

def _load():
    try: return json.load(open(STATE))
    except Exception: return {"baseline": None, "history": []}

def _save(s): json.dump(s, open(STATE, "w"), indent=2)

async def _completion_rate() -> float | None:
    """Completions per day over the rolling window. None if DB unreachable."""
    try:
        import asyncpg
    except ImportError:
        return None
    try:
        conn = await asyncpg.connect(DB_URL, timeout=8)
    except Exception:
        return None
    try:
        n = await conn.fetchval(
            "SELECT count(*) FROM ralph_tasks "
            "WHERE status IN ('complete','done') "
            f"AND completed_at >= NOW() - INTERVAL '{WINDOW_DAYS} days'"
        )
        return (n or 0) / WINDOW_DAYS
    except Exception:
        return None
    finally:
        await conn.close()

def _weight_dirty() -> bool:
    """Is there an uncommitted change to the pickup prompt (a candidate mutation)?"""
    r = _git("status", "--porcelain", os.path.basename(WEIGHT))
    return bool(r.stdout.strip())

def status():
    s = _load()
    rate = asyncio.run(_completion_rate())
    print(f"completion rate (7d): {('%.2f/day' % rate) if rate is not None else 'DB unreachable'}")
    print(f"baseline:             {('%.2f/day' % s['baseline']) if s['baseline'] is not None else 'unset'}")
    print(f"candidate change staged: {_weight_dirty()}")
    if s["history"]:
        last = s["history"][-1]
        print(f"last decision: {last['decision']} @ {last['at']} (rate {last['rate']})")

def baseline():
    rate = asyncio.run(_completion_rate())
    if rate is None:
        print("DB unreachable — cannot set baseline."); return
    s = _load(); s["baseline"] = rate; _save(s)
    print(f"baseline set to {rate:.2f}/day")

def evaluate():
    """The survival step. If a prompt mutation is staged, keep it (commit) only if
    completions did not regress vs baseline; otherwise revert it."""
    s = _load()
    rate = asyncio.run(_completion_rate())
    if rate is None:
        print("DB unreachable — skipping evaluation (no blind decisions)."); return
    if s["baseline"] is None:
        s["baseline"] = rate; _save(s); print(f"baseline initialised to {rate:.2f}/day"); return
    if not _weight_dirty():
        # no candidate change — just track the rate, drift baseline gently up to current best
        s["baseline"] = max(s["baseline"], rate); _save(s)
        print(f"no candidate change. rate {rate:.2f}/day, baseline {s['baseline']:.2f}/day"); return

    improved = rate >= s["baseline"] * (1 + IMPROVE_EPS)
    now = datetime.now(timezone.utc).isoformat()
    if improved:
        _git("add", os.path.basename(WEIGHT))
        _git("commit", "-m", f"survival: keep pickup-prompt mutation (rate {rate:.2f} >= baseline {s['baseline']:.2f}/day)")
        s["baseline"] = rate
        decision = "COMMIT (survived)"
    else:
        _git("checkout", "--", os.path.basename(WEIGHT))
        decision = "REVERT (died)"
    s["history"].append({"at": now, "rate": round(rate, 3), "baseline": round(s["baseline"], 3), "decision": decision})
    _save(s)
    print(f"{decision}: rate {rate:.2f}/day vs baseline {s['baseline']:.2f}/day")

if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "status"
    {"status": status, "evaluate": evaluate, "baseline": baseline}.get(cmd, status)()
