"""
Learning MCP Tools — Phase 2.6
Council-to-Neural Learning Pipeline: inspect and control the online learning engine.
"""

from typing import Any, Dict

from meok.mcp.state import ServiceState

LEARNING_TOOLS = [
    {
        "name": "get_learning_stats",
        "description": (
            "Get online learning pipeline statistics: River model accuracy, "
            "z_self calibration score, replay queue depth, samples processed, "
            "and event type breakdown."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "trigger_council_learning",
        "description": (
            "Manually trigger SRC replay: replay the top-N council learning signals "
            "through the online learning pipeline (simulates dream-cycle consolidation). "
            "Useful for testing or forcing a learning update."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "n": {
                    "type": "integer",
                    "description": "Number of top signals to replay (default 50)",
                    "default": 50,
                }
            },
        },
    },
    {
        "name": "get_learning_feed",
        "description": (
            "Return the N most recent council learning signals as formatted training examples. "
            "Inspect what events the system has learned from: event type, features, label, care_score."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "n": {
                    "type": "integer",
                    "description": "Number of recent signals to return (default 10)",
                    "default": 10,
                }
            },
        },
    },
    {
        "name": "reset_online_model",
        "description": (
            "Clear the River online model and reset accuracy counters. "
            "Use for debugging or to start fresh. "
            "Note: previously processed samples count is preserved for audit."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "trigger_synthetic_training",
        "description": (
            "Phase 4.9: Generate 1000+ synthetic training examples for care_validation_nn "
            "(currently 19 samples — statistically meaningless) and threat_detection_nn "
            "(currently 33 samples with 100% accuracy — textbook overfitting). "
            "Uses structured parameter sampling from care/harm archetypes. "
            "Returns examples generated per model and retraining status."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "n_care": {
                    "type": "integer",
                    "description": "Care validation examples to generate (default 1000)",
                    "default": 1000,
                },
                "n_threat": {
                    "type": "integer",
                    "description": "Threat detection examples to generate (default 500)",
                    "default": 500,
                },
            },
        },
    },
]


async def handle_learning_tool(
    name: str,
    arguments: Dict[str, Any],
    state: ServiceState,
) -> Dict[str, Any]:
    """Dispatch learning tool calls."""
    try:
        learner = getattr(state, "council_learner", None)

        if name == "get_learning_stats":
            if learner is None:
                return {"error": "CouncilLearner not initialised", "tip": "Check initializer logs"}
            return learner.get_learning_stats()

        if name == "trigger_council_learning":
            if learner is None:
                return {"error": "CouncilLearner not initialised"}
            n = int(arguments.get("n", 50))
            result = await learner.replay_recent(n=n)
            stats = learner.get_learning_stats()
            return {**result, "stats_after_replay": stats}

        if name == "get_learning_feed":
            if learner is None:
                return {"error": "CouncilLearner not initialised"}
            n = int(arguments.get("n", 10))
            return {
                "signals": learner.get_recent_feed(n=n),
                "total_processed": learner._samples_processed,
            }

        if name == "reset_online_model":
            if learner is None:
                return {"error": "CouncilLearner not initialised"}
            return learner.reset_online_model()

        if name == "trigger_synthetic_training":
            try:
                from meok.learning.synthetic_training import inject_synthetic_data_into_models
                n_care = int(arguments.get("n_care", 1000))
                n_threat = int(arguments.get("n_threat", 500))
                result = await inject_synthetic_data_into_models(state, n_care=n_care, n_threat=n_threat)
                return result
            except Exception as e:
                return {"error": f"Synthetic training failed: {e}"}

        return {"error": f"Unknown learning tool: {name}"}
    except Exception as e:
        return {"error": f"Learning tool error: {str(e)}", "tool": name}
