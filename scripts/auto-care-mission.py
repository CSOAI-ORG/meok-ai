#!/usr/bin/env python3
"""
MEOK Auto Care-Mission Runner
==============================
Reads the SOV3 substrate and spawns care-mission tasks for idle agents.
This is the "self-improving" loop — every 10 min, the empire grows by
identifying gaps in the care coverage and dispatching agents to fill them.

Idempotent. Safe to re-run.
"""
import json
import urllib.request
from datetime import datetime
from pathlib import Path

SOV3_URL = "http://localhost:3101"
LOG_FILE = Path.home() / ".meok" / "care-mission-log.json"

CARE_MISSIONS = [
    {
        "id": "care-coverage-audit",
        "title": "Audit care coverage across all 8 dome layers",
        "description": "Run validate_care on every layer endpoint, ensure care_score >= 0.8 across the substrate.",
        "agent": "meok-care-auditor",
        "care_score": 0.85,
    },
    {
        "id": "elder-care-outreach",
        "title": "Send care-home outreach to 10 UK providers",
        "description": "Identify 10 UK care homes not yet onboarded, draft personalised outreach, queue for human approval.",
        "agent": "meok-outreach-care",
        "care_score": 0.9,
    },
    {
        "id": "sovereign-mesh-health",
        "title": "Verify sovereign OLM mesh health across m4 + m2",
        "description": "Test inference latency on m4-local (meok-sov3) and m2-sidekick (qwen3:0.6b). Report if any path degraded.",
        "agent": "ollama-bridge",
        "care_score": 0.8,
    },
    {
        "id": "eu-ai-act-compliance-sweep",
        "title": "Sweep all MCPs for EU AI Act Article 50 compliance",
        "description": "For every MCP in the fleet, check whether the tool emits machine-readable marking (C2PA + watermark). Flag any non-compliant.",
        "agent": "meok-compliance-gateway-bft-seat-1",
        "care_score": 0.92,
    },
    {
        "id": "gamification-leaderboard-refresh",
        "title": "Recompute trust scores and unlock new badges",
        "description": "Read SOV3 events from past 24h, mint new badges, write to ~/.meok/leaderboard.json.",
        "agent": "growth-coordinator",
        "care_score": 0.78,
    },
    {
        "id": "regulator-audit-trail-export",
        "title": "Export the last 7 days of audit chain for regulators",
        "description": "Bundle the Ed25519-signed audit log into a verifiable PDF + JSON, ready to ship to EU AI Office.",
        "agent": "meok-governance-engine-bft-seat-3",
        "care_score": 0.95,
    },
    {
        "id": "guardian-scanner-quotidian",
        "title": "Run predator-stop + threat-detection scan on meok-gaming",
        "description": "Scan gaming safety surfaces for new predator patterns, child-safety gaps, and care-membrane violations.",
        "agent": "guardian-scanner",
        "care_score": 0.93,
    },
    {
        "id": "openpatent-evidence-vault",
        "title": "Index 50 new prior-art items to the IP vault",
        "description": "Auto-discover prior-art evidence in tech journals, mint signed attestations, expose to openpatent.ai.",
        "agent": "meok-ipcastle-bft-seat-2",
        "care_score": 0.82,
    },
]


def sov3_call(method: str, args: dict) -> dict:
    payload = {"jsonrpc": "2.0", "id": "1", "method": "tools/call",
               "params": {"name": method, "arguments": args}}
    req = urllib.request.Request(
        f"{SOV3_URL}/mcp",
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=8) as r:
            return json.loads(r.read())
    except Exception as e:
        return {"error": str(e)}


def load_log() -> list:
    if LOG_FILE.exists():
        try:
            return json.loads(LOG_FILE.read_text())
        except Exception:
            pass
    return []


def save_log(log: list):
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    LOG_FILE.write_text(json.dumps(log, indent=2))


def main():
    print(f"[care-mission] Running {datetime.now().isoformat()}")

    log = load_log()
    last_run_ids = {entry["mission_id"] for entry in log[-len(CARE_MISSIONS):]} if log else set()

    created = 0
    for mission in CARE_MISSIONS:
        # Skip if already dispatched in the last 4 hours
        recent = [e for e in log if e["mission_id"] == mission["id"] and
                  (datetime.now() - datetime.fromisoformat(e["dispatched_at"])).total_seconds() < 4 * 3600]
        if recent:
            continue

        # Submit to SOV3
        result = sov3_call("coord_submit_task", {
            "title": mission["title"][:60],
            "description": mission["description"],
            "care_score": mission["care_score"],
        })

        text = result.get("result", {}).get("content", [{}])[0].get("text", "")
        j = json.loads(text) if text.startswith("{") else {"raw": text}
        ok = j.get("success") or j.get("task_id")

        log.append({
            "mission_id": mission["id"],
            "dispatched_at": datetime.now().isoformat(),
            "agent": mission["agent"],
            "care_score": mission["care_score"],
            "result": j,
        })
        if ok:
            created += 1
            print(f"  ✓ Dispatched: {mission['title'][:50]} → {mission['agent']}")
        else:
            print(f"  ✗ Rejected: {mission['title'][:50]} → {j.get('reason', j.get('error', '?'))[:60]}")

    # Trim log to last 200
    log = log[-200:]
    save_log(log)

    print(f"  Dispatched this run: {created}/{len(CARE_MISSIONS)}")
    print(f"  Total log entries: {len(log)}")


if __name__ == "__main__":
    main()
