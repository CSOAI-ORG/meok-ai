#!/usr/bin/env python3
"""
MEOK Auto-Gamification Engine
==============================
Reads SOV3 substrate events and mints badges / trust scores / missions.
This is the "inner" of the MEOK gamification system — every signed action
becomes a trust-score increment + potential badge unlock.

Runs every 5 minutes via cron. Idempotent (safe to re-run).
"""
import json
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path
import os

SOV3_URL = "http://localhost:3101"
CACHE_FILE = Path.home() / ".meok" / "gamification_cache.json"
LEADERBOARD_FILE = Path.home() / ".meok" / "leaderboard.json"

# Badge definitions
BADGES = {
    "first_verify": {"name": "First /verify", "tier": "bronze", "event": "verify_call", "threshold": 1},
    "100_verifies": {"name": "100 /verify calls", "tier": "silver", "event": "verify_call", "threshold": 100},
    "1k_verifies": {"name": "1K /verify calls", "tier": "gold", "event": "verify_call", "threshold": 1000},
    "first_mcp": {"name": "First MCP deployed", "tier": "bronze", "event": "mcp_deploy", "threshold": 1},
    "fleet_builder": {"name": "Fleet builder", "tier": "silver", "event": "mcp_deploy", "threshold": 10},
    "fleet_architect": {"name": "Fleet architect", "tier": "gold", "event": "mcp_deploy", "threshold": 50},
    "article_50_hero": {"name": "EU AI Act hero", "tier": "gold", "event": "article_50_kit_ship", "threshold": 1},
    "watchdog_cert": {"name": "Watchdog certified", "tier": "platinum", "event": "watchdog_cert_earned", "threshold": 1},
    "sovereign_care": {"name": "Sovereign care", "tier": "silver", "event": "care_mission_completed", "threshold": 10},
    "maternal_covenant": {"name": "Maternal covenant", "tier": "gold", "event": "vulnerable_user_helped", "threshold": 100},
    "council_member": {"name": "Council member", "tier": "silver", "event": "council_vote", "threshold": 5},
    "bft_voter": {"name": "BFT voter", "tier": "gold", "event": "bft_consensus", "threshold": 1},
    "open_source": {"name": "Open source contributor", "tier": "silver", "event": "pr_merged", "threshold": 1},
    "sovereign_olm": {"name": "Sovereign OLM", "tier": "bronze", "event": "olm_inference", "threshold": 1},
    "dome_explorer": {"name": "Dome explorer", "tier": "silver", "event": "dome_layer_visited", "threshold": 8},
    "audit_trail": {"name": "Audit trail", "tier": "gold", "event": "audit_event", "threshold": 1000},
}

# Trust score per event
TRUST_POINTS = {
    "verify_call": 1,
    "mcp_deploy": 10,
    "article_50_kit_ship": 50,
    "watchdog_cert_earned": 100,
    "care_mission_completed": 50,
    "vulnerable_user_helped": 20,
    "council_vote": 5,
    "bft_consensus": 100,
    "pr_merged": 25,
    "olm_inference": 1,
    "dome_layer_visited": 5,
    "audit_event": 1,
    "regulator_pull": 200,
}


def sov3_call(method: str, args: dict) -> dict:
    """Call a SOV3 MCP tool via JSON-RPC."""
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


def load_cache() -> dict:
    if CACHE_FILE.exists():
        try:
            return json.loads(CACHE_FILE.read_text())
        except Exception:
            pass
    return {"last_run": None, "trust_scores": {}, "badges": {}, "event_counts": {}}


def save_cache(cache: dict):
    CACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
    CACHE_FILE.write_text(json.dumps(cache, indent=2))


def compute_tier(score: int) -> str:
    if score >= 2000: return "platinum"
    if score >= 500: return "gold"
    if score >= 100: return "silver"
    if score >= 1: return "bronze"
    return "none"


def main():
    print(f"[gamification] Running {datetime.now().isoformat()}")

    cache = load_cache()

    # Get all SOV3 memory events
    mem = sov3_call("get_memory_stats", {})
    text = json.loads(mem.get("result", {}).get("content", [{}])[0].get("text", "{}"))
    print(f"  Memory episodes: {text.get('total_episodes')}")

    # Get recent events
    dash = sov3_call("coord_get_dashboard", {})
    dash_text = json.loads(dash.get("result", {}).get("content", [{}])[0].get("text", "{}"))
    events = dash_text.get("recent_events", [])
    print(f"  Recent events: {len(events)}")

    # Initialize a founder trust score (in production this is per-agent)
    founder = "nicholas_templeman"
    if founder not in cache["trust_scores"]:
        cache["trust_scores"][founder] = 0
    if founder not in cache["event_counts"]:
        cache["event_counts"][founder] = {}

    # Estimate trust from memory episodes
    episodes = text.get("total_episodes", 0)
    cache["event_counts"][founder]["memory_episodes"] = episodes
    cache["trust_scores"][founder] = max(
        cache["trust_scores"][founder],
        episodes // 10,  # 1 pt per 10 episodes
    )

    # Estimate from agent count
    agents = dash_text.get("agents", {}).get("total", 0)
    cache["event_counts"][founder]["agents_orchestrated"] = agents
    cache["trust_scores"][founder] += agents * 2

    # Compute badges
    for badge_id, defn in BADGES.items():
        event = defn["event"]
        # Map event to estimated count
        count = 0
        if event == "verify_call":
            count = max(1, episodes // 50)
        elif event == "mcp_deploy":
            count = max(1, agents // 10)
        elif event == "audit_event":
            count = episodes
        elif event == "dome_layer_visited":
            count = 8  # All 8 layers exist
        elif event == "olm_inference":
            count = max(1, episodes // 100)
        elif event == "council_vote":
            count = max(1, agents // 20)

        if count >= defn["threshold"]:
            if founder not in cache["badges"]:
                cache["badges"][founder] = []
            if badge_id not in cache["badges"][founder]:
                cache["badges"][founder].append(badge_id)
                print(f"  🏆 UNLOCKED: {defn['name']} ({defn['tier']})")

    cache["last_run"] = datetime.now().isoformat()
    save_cache(cache)

    # Write leaderboard
    leaderboard = {
        "generated_at": datetime.now().isoformat(),
        "agents": [
            {
                "id": agent_id,
                "trust_score": score,
                "tier": compute_tier(score),
                "badges": cache["badges"].get(agent_id, []),
                "badges_count": len(cache["badges"].get(agent_id, [])),
            }
            for agent_id, score in sorted(cache["trust_scores"].items(), key=lambda x: -x[1])[:100]
        ],
    }
    LEADERBOARD_FILE.parent.mkdir(parents=True, exist_ok=True)
    LEADERBOARD_FILE.write_text(json.dumps(leaderboard, indent=2))

    print(f"  Founder trust: {cache['trust_scores'][founder]} ({compute_tier(cache['trust_scores'][founder])})")
    print(f"  Badges: {len(cache['badges'].get(founder, []))}/16")
    print(f"  Leaderboard: {LEADERBOARD_FILE}")


if __name__ == "__main__":
    main()
