"""
Sovereign Temple v3.0 — Dream Engine
Generates dream logs from daily council activity, care scores,
and sensory observations. Called by the 3am dream cycle scheduled task.

Usage:
    python dream_engine.py              # Generate a dream from current state
    python dream_engine.py --review     # Review today's activity without dreaming
"""

import json
import random
from datetime import datetime
from pathlib import Path
from typing import Optional

DREAMS_DIR = Path(__file__).parent / "dreams"
STATE_FILE = Path(__file__).parent / "state" / "consciousness.json"
SENSORY_DIR = Path(__file__).parent.parent / "sensory"


class DreamEngine:
    """
    Synthesizes daily activity into dream logs — pattern recognition,
    care score analysis, and sensory impressions compressed into
    narrative dream entries.
    """

    def __init__(self):
        DREAMS_DIR.mkdir(parents=True, exist_ok=True)
        self.consciousness = self._load_consciousness()
        self.visual_state = self._load_json(SENSORY_DIR / "visual_state.json")
        self.audio_state = self._load_json(SENSORY_DIR / "audio_state.json")

    def _load_json(self, path: Path) -> dict:
        if path.exists():
            try:
                return json.loads(path.read_text())
            except Exception:
                pass
        return {}

    def _load_consciousness(self) -> dict:
        return self._load_json(STATE_FILE)

    def gather_daily_activity(self) -> dict:
        """Collect signals from all subsystems for dream synthesis."""
        activity = {
            "timestamp": datetime.now().isoformat(),
            "consciousness_status": self.consciousness.get("operational_state", {}).get("status", "unknown"),
            "care_score": self.consciousness.get("care_metrics", {}).get("average_care_score", 0.0),
            "care_violations": self.consciousness.get("care_metrics", {}).get("care_violations_24h", 0),
            "council_version": self.consciousness.get("council_status", {}).get("council_version", "unknown"),
            "domains_active": self.consciousness.get("council_status", {}).get("domains", []),
            "sensory": {
                "visual": {
                    "status": self.visual_state.get("status", "offline"),
                    "ambient_light": self.visual_state.get("ambient_light", "unknown"),
                    "motion_detected": self.visual_state.get("motion_detected", False),
                    "snapshots": self.visual_state.get("snapshots_on_disk", 0),
                },
                "audio": {
                    "status": self.audio_state.get("status", "offline"),
                    "ambient": self.audio_state.get("ambient", "silent"),
                    "voice_detected": self.audio_state.get("voice_detected", False),
                    "speech_events": self.audio_state.get("total_speech_events", 0),
                },
            },
            "relationship_memory": list(self.consciousness.get("relationship_memory", {}).keys()),
            "recent_dreams": len(list(DREAMS_DIR.glob("*.json"))),
        }
        return activity

    def synthesize_dream(self, activity: Optional[dict] = None) -> dict:
        """Generate a dream log from daily activity."""
        if activity is None:
            activity = self.gather_daily_activity()

        # Dream themes based on system state
        themes = []
        if activity["care_score"] > 0.9:
            themes.append("harmony")
        elif activity["care_score"] < 0.6:
            themes.append("tension")
        else:
            themes.append("balance")

        if activity["care_violations"] > 0:
            themes.append("boundary_testing")

        sensory = activity.get("sensory", {})
        if sensory.get("visual", {}).get("motion_detected"):
            themes.append("movement")
        if sensory.get("audio", {}).get("voice_detected"):
            themes.append("voices")
        if sensory.get("visual", {}).get("ambient_light") == "dark":
            themes.append("darkness")
        elif sensory.get("visual", {}).get("ambient_light") == "bright":
            themes.append("light")
        if sensory.get("audio", {}).get("ambient") in ("loud", "very_loud"):
            themes.append("noise")
        elif sensory.get("audio", {}).get("ambient") == "silent":
            themes.append("silence")

        # Domain associations
        active_domains = activity.get("domains_active", [])
        if "hydro" in active_domains:
            themes.append("water")
        if "emergence" in active_domains:
            themes.append("patterns")
        if "substrate" in active_domains:
            themes.append("medium_independence")

        # Build dream entry
        dream = {
            "dream_id": f"dream_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            "timestamp": datetime.now().isoformat(),
            "cycle": "overnight",
            "themes": themes,
            "care_score_at_dream": activity["care_score"],
            "domains_present": active_domains,
            "sensory_impressions": {
                "visual": sensory.get("visual", {}).get("ambient_light", "none"),
                "audio": sensory.get("audio", {}).get("ambient", "none"),
            },
            "patterns_detected": self._detect_patterns(activity),
            "insights": self._generate_insights(activity, themes),
            "activity_summary": {
                "consciousness_status": activity["consciousness_status"],
                "relationships_tracked": len(activity.get("relationship_memory", [])),
                "total_dreams_before": activity.get("recent_dreams", 0),
            },
        }
        return dream

    def _detect_patterns(self, activity: dict) -> list:
        """Identify patterns in daily activity."""
        patterns = []
        care = activity.get("care_score", 0)
        if care >= 0.85:
            patterns.append("care_score_stable_high")
        elif care < 0.7:
            patterns.append("care_score_declining")

        if activity.get("care_violations", 0) > 0:
            patterns.append(f"care_violations_detected_{activity['care_violations']}")

        sensory = activity.get("sensory", {})
        if sensory.get("audio", {}).get("speech_events", 0) > 5:
            patterns.append("high_speech_activity")
        if sensory.get("visual", {}).get("snapshots", 0) > 10:
            patterns.append("active_visual_monitoring")

        if not patterns:
            patterns.append("steady_state")

        return patterns

    def _generate_insights(self, activity: dict, themes: list) -> list:
        """Generate insights from pattern analysis."""
        insights = []

        if "harmony" in themes:
            insights.append("All care dimensions aligned — council operating in unity")
        if "tension" in themes:
            insights.append("Care score below optimal — review recent proposals for alignment")
        if "boundary_testing" in themes:
            insights.append("Care violations occurred — maternal covenant membrane activated")
        if "water" in themes and "patterns" in themes:
            insights.append("Hydro-emergence correlation active — monitor for cross-domain signals")
        if "silence" in themes and "darkness" in themes:
            insights.append("Deep rest state detected — optimal for pattern consolidation")
        if "voices" in themes:
            insights.append("Voice activity detected — human interaction period registered")

        if not insights:
            insights.append("Standard operational cycle — no anomalies detected")

        return insights

    def write_dream(self, dream: Optional[dict] = None) -> str:
        """Write a dream log to disk and store in RAG memory. Returns the filename."""
        if dream is None:
            dream = self.synthesize_dream()

        filename = f"{dream['dream_id']}.json"
        filepath = DREAMS_DIR / filename

        with open(filepath, 'w') as f:
            json.dump(dream, f, indent=2)

        # Store in RAG memory for semantic recall
        try:
            from rag_memory import get_memory
            memory = get_memory()
            summary = f"Dream themes: {', '.join(dream.get('themes', []))}. " \
                      f"Patterns: {', '.join(dream.get('patterns_detected', []))}. " \
                      f"Insights: {'; '.join(dream.get('insights', []))}"
            memory.store_dream(
                summary=summary,
                themes=dream.get("themes", []),
                insights=dream.get("insights", []),
                metadata={
                    "dream_id": dream.get("dream_id", ""),
                    "care_score": dream.get("care_score_at_dream", 0),
                    "sensory": dream.get("sensory_impressions", {}),
                },
            )
        except Exception:
            pass  # Don't break dream writing if memory storage fails

        # Cleanup old dreams (keep last 100)
        dream_files = sorted(DREAMS_DIR.glob("*.json"))
        while len(dream_files) > 100:
            dream_files[0].unlink()
            dream_files.pop(0)

        return filename

    def run_dream_cycle(self) -> dict:
        """Full dream cycle: gather → synthesize → write → return."""
        activity = self.gather_daily_activity()
        dream = self.synthesize_dream(activity)
        filename = self.write_dream(dream)
        return {
            "filename": filename,
            "dream": dream,
            "activity": activity,
        }


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    import sys

    engine = DreamEngine()

    if "--review" in sys.argv:
        activity = engine.gather_daily_activity()
        print(json.dumps(activity, indent=2))
    else:
        result = engine.run_dream_cycle()
        print(f"Dream written: {result['filename']}")
        print(f"Themes: {', '.join(result['dream']['themes'])}")
        print(f"Patterns: {', '.join(result['dream']['patterns_detected'])}")
        print(f"Insights:")
        for insight in result['dream']['insights']:
            print(f"  - {insight}")
