"""
Gaming tool definitions and handler.
Tools: start_game_session, end_game_session, get_gaming_insights, get_companion_mode

Every game session is recorded against the user's MEOK entity, growing their digital self
through interaction and building a picture of their playstyle over time.
"""

from __future__ import annotations

import json
import sqlite3
import os
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from meok.mcp.state import ServiceState

# ── SQLite session store ───────────────────────────────────────────────────────

_GAMING_DB = os.environ.get("MEOK_GAMING_DB", "/tmp/meok-gaming.db")


def get_gaming_db_path() -> str:
    """Return the path to the gaming SQLite DB (used by morning briefing)."""
    return _GAMING_DB


def _get_conn() -> sqlite3.Connection:
    conn = sqlite3.connect(_GAMING_DB)
    conn.row_factory = sqlite3.Row
    conn.execute("""
        CREATE TABLE IF NOT EXISTS game_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            game TEXT NOT NULL,
            started_at TEXT NOT NULL,
            ended_at TEXT,
            duration_minutes REAL,
            mood_before TEXT,
            mood_after TEXT,
            notes TEXT,
            care_score REAL DEFAULT 0.7
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS active_sessions (
            user_id TEXT PRIMARY KEY,
            game TEXT NOT NULL,
            started_at TEXT NOT NULL,
            mood_before TEXT
        )
    """)
    conn.commit()
    return conn


# ── Tool schemas ───────────────────────────────────────────────────────────────

GAMING_TOOLS = [
    {
        "name": "start_game_session",
        "description": "Record the start of a gaming session. Tracks which game the user is playing and how they felt going in.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "game": {
                    "type": "string",
                    "description": "Game name e.g. 'Valorant', 'Fortnite', 'League of Legends', 'CS2', 'Minecraft'"
                },
                "user_id": {
                    "type": "string",
                    "description": "User identifier (defaults to 'default' for single-user installs)"
                },
                "mood_before": {
                    "type": "string",
                    "description": "How the user feels going into the session (e.g. 'focused', 'tired', 'hyped')"
                }
            },
            "required": ["game"]
        }
    },
    {
        "name": "end_game_session",
        "description": "Record the end of a gaming session. Calculates duration, records mood and notes, and updates the entity's interaction count.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string",
                    "description": "User identifier (defaults to 'default')"
                },
                "mood_after": {
                    "type": "string",
                    "description": "How the user feels after the session (e.g. 'satisfied', 'frustrated', 'on fire')"
                },
                "notes": {
                    "type": "string",
                    "description": "Any notes about the session — memorable moments, what went well, what to improve"
                }
            }
        }
    },
    {
        "name": "get_gaming_insights",
        "description": "Get insights about the user's gaming patterns — best times, favourite games, session lengths, mood trends.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string",
                    "description": "User identifier (defaults to 'default')"
                },
                "days": {
                    "type": "integer",
                    "description": "Number of days to look back (default 30)"
                }
            }
        }
    },
    {
        "name": "get_companion_mode",
        "description": "Get the current gaming companion context — is a session active? Which game? How long have they been playing? What's their entity's game affinity?",
        "inputSchema": {
            "type": "object",
            "properties": {
                "user_id": {
                    "type": "string",
                    "description": "User identifier (defaults to 'default')"
                }
            }
        }
    },
]


# ── Handlers ───────────────────────────────────────────────────────────────────

async def handle_gaming_tool(name: str, args: Dict[str, Any], state: ServiceState) -> str:
    user_id = args.get("user_id", "default")

    if name == "start_game_session":
        return _start_session(user_id, args)
    elif name == "end_game_session":
        return _end_session(user_id, args, state)
    elif name == "get_gaming_insights":
        return _get_insights(user_id, args)
    elif name == "get_companion_mode":
        return _get_companion_mode(user_id)
    else:
        return json.dumps({"error": f"Unknown gaming tool: {name}"})


def _start_session(user_id: str, args: Dict[str, Any]) -> str:
    game = args.get("game", "Unknown")
    mood_before = args.get("mood_before", "")
    now = datetime.now(timezone.utc).isoformat()

    with _get_conn() as conn:
        # Check if session already active
        existing = conn.execute(
            "SELECT * FROM active_sessions WHERE user_id = ?", (user_id,)
        ).fetchone()

        if existing:
            # End the previous session silently before starting new one
            _end_session_internal(user_id, conn, mood_after="", notes="", care_score=0.7)

        conn.execute(
            "INSERT OR REPLACE INTO active_sessions (user_id, game, started_at, mood_before) VALUES (?, ?, ?, ?)",
            (user_id, game, now, mood_before),
        )
        conn.commit()

    return json.dumps({
        "status": "session_started",
        "game": game,
        "started_at": now,
        "message": f"🎮 Gaming session started — {game}. Let's go!",
    })


def _end_session(user_id: str, args: Dict[str, Any], state: ServiceState) -> str:
    mood_after = args.get("mood_after", "")
    notes = args.get("notes", "")

    with _get_conn() as conn:
        active = conn.execute(
            "SELECT * FROM active_sessions WHERE user_id = ?", (user_id,)
        ).fetchone()

        if not active:
            return json.dumps({
                "status": "no_active_session",
                "message": "No active gaming session found. Start one with start_game_session.",
            })

        result = _end_session_internal(user_id, conn, mood_after=mood_after, notes=notes, care_score=0.7)

    # Also record an interaction on the entity for this game session
    try:
        from meok.core.entity import record_interaction
        game = result.get("game", "")
        entity, evolved = record_interaction(user_id=user_id, game=game, care_score=0.7)
        result["entity_evolved"] = evolved
        result["entity_level"] = entity.hatch_level
        result["entity_interactions"] = entity.interactions_count
        if evolved:
            result["evolution_message"] = (
                f"✨ {entity.name} evolved to {entity.hatch_name}! "
                f"({entity.hatch_label})"
            )
    except Exception:
        pass

    return json.dumps(result)


def _end_session_internal(
    user_id: str,
    conn: sqlite3.Connection,
    mood_after: str,
    notes: str,
    care_score: float,
) -> Dict[str, Any]:
    active = conn.execute(
        "SELECT * FROM active_sessions WHERE user_id = ?", (user_id,)
    ).fetchone()

    if not active:
        return {"status": "no_active_session"}

    started_at = datetime.fromisoformat(active["started_at"].replace("Z", "+00:00"))
    ended_at = datetime.now(timezone.utc)
    duration_minutes = (ended_at - started_at).total_seconds() / 60

    conn.execute(
        """INSERT INTO game_sessions
           (user_id, game, started_at, ended_at, duration_minutes, mood_before, mood_after, notes, care_score)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        (
            user_id,
            active["game"],
            active["started_at"],
            ended_at.isoformat(),
            round(duration_minutes, 1),
            active["mood_before"],
            mood_after,
            notes,
            care_score,
        ),
    )
    conn.execute("DELETE FROM active_sessions WHERE user_id = ?", (user_id,))
    conn.commit()

    return {
        "status": "session_ended",
        "game": active["game"],
        "duration_minutes": round(duration_minutes, 1),
        "message": (
            f"Session saved — {active['game']}, "
            f"{round(duration_minutes)} min. "
            + (f"Feeling: {mood_after}." if mood_after else "")
        ),
    }


def _get_insights(user_id: str, args: Dict[str, Any]) -> str:
    days = args.get("days", 30)

    with _get_conn() as conn:
        rows = conn.execute(
            """SELECT game, duration_minutes, mood_before, mood_after, started_at
               FROM game_sessions
               WHERE user_id = ?
                 AND ended_at IS NOT NULL
                 AND started_at >= datetime('now', ? || ' days')
               ORDER BY started_at DESC""",
            (user_id, f"-{days}"),
        ).fetchall()

    if not rows:
        return json.dumps({
            "status": "no_data",
            "message": f"No gaming sessions recorded in the last {days} days. Start one with start_game_session.",
        })

    sessions = [dict(r) for r in rows]
    total_sessions = len(sessions)
    total_minutes = sum(s["duration_minutes"] or 0 for s in sessions)

    # Game breakdown
    game_counts: Dict[str, Dict] = {}
    for s in sessions:
        g = s["game"]
        if g not in game_counts:
            game_counts[g] = {"count": 0, "total_minutes": 0.0}
        game_counts[g]["count"] += 1
        game_counts[g]["total_minutes"] += s["duration_minutes"] or 0

    favourite_game = max(game_counts, key=lambda g: game_counts[g]["count"])
    avg_session = total_minutes / total_sessions if total_sessions else 0

    # Mood analysis
    moods = [s["mood_after"] for s in sessions if s.get("mood_after")]
    mood_summary = f"{len(moods)} sessions with mood data"

    return json.dumps({
        "status": "ok",
        "period_days": days,
        "total_sessions": total_sessions,
        "total_hours": round(total_minutes / 60, 1),
        "avg_session_minutes": round(avg_session, 1),
        "favourite_game": favourite_game,
        "games": {
            g: {
                "sessions": v["count"],
                "hours": round(v["total_minutes"] / 60, 1),
            }
            for g, v in sorted(game_counts.items(), key=lambda x: -x[1]["count"])
        },
        "mood_summary": mood_summary,
        "recent_sessions": sessions[:5],
        "insight": _generate_insight(sessions, favourite_game, avg_session),
    })


def _generate_insight(sessions: List[Dict], favourite_game: str, avg_minutes: float) -> str:
    """Generate a simple human-readable insight."""
    if avg_minutes > 120:
        return f"Long sessions — you really commit when you play {favourite_game}. Hydrate."
    elif avg_minutes < 30:
        return f"Quick sessions lately. Perfect for staying sharp in {favourite_game} without grinding."
    else:
        return f"Solid rhythm — ~{round(avg_minutes)} min sessions in {favourite_game}. Your focus window."


def _get_companion_mode(user_id: str) -> str:
    """Get current gaming context for the companion overlay."""
    with _get_conn() as conn:
        active = conn.execute(
            "SELECT * FROM active_sessions WHERE user_id = ?", (user_id,)
        ).fetchone()

        recent = conn.execute(
            """SELECT game, duration_minutes, ended_at FROM game_sessions
               WHERE user_id = ? AND ended_at IS NOT NULL
               ORDER BY ended_at DESC LIMIT 3""",
            (user_id,),
        ).fetchall()

    # Entity context
    entity_ctx: Dict[str, Any] = {}
    try:
        from meok.core.entity import get_entity_summary
        entity_ctx = get_entity_summary(user_id)
    except Exception:
        pass

    result: Dict[str, Any] = {
        "entity": entity_ctx,
        "recent_games": [dict(r) for r in recent],
    }

    if active:
        started_at = datetime.fromisoformat(active["started_at"].replace("Z", "+00:00"))
        elapsed = (datetime.now(timezone.utc) - started_at).total_seconds() / 60
        result["active_session"] = {
            "game": active["game"],
            "started_at": active["started_at"],
            "elapsed_minutes": round(elapsed, 1),
            "status": f"Playing {active['game']} — {round(elapsed)} min in",
        }
    else:
        result["active_session"] = None

    return json.dumps(result)
