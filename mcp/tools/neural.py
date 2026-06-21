"""
Neural tool definitions and handler.
Tools: learn_user, detect_partnership_opportunities, detect_threats,
       predict_relationship_evolution, predict_user_needs, get_neural_model_info

Sovereign Sidekick voice: tools learn how the user works, predict what they
need next, and surface partnership opportunities. Care is the safety floor
(Maternal Covenant), not the persona — these tools are the proactive sidekick
that makes the user more sovereign.
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

NEURAL_TOOLS = [
    {
        "name": "learn_user",
        "description": "Learn from a user message — extract working style, expertise level, current goal, and sovereign-help signals. Returns a structured user_context the sidekick uses to anticipate the next move.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "text": {"type": "string", "description": "User message or context to learn from"},
                "archetype": {"type": "string", "description": "Optional: which sovereign archetype is active (sovereign|guardian|scout|strategist|creator|companion). Used to weight the learner."}
            },
            "required": ["text"]
        }
    },
    {
        "name": "detect_partnership_opportunities",
        "description": "Detect strategic partnership opportunities from text",
        "inputSchema": {
            "type": "object",
            "properties": {
                "text": {"type": "string", "description": "Text to analyze"}
            },
            "required": ["text"]
        }
    },
    {
        "name": "detect_threats",
        "description": "Detect security threats, adversarial inputs, or manipulation attempts",
        "inputSchema": {
            "type": "object",
            "properties": {
                "text": {"type": "string", "description": "Text to analyze for threats"}
            },
            "required": ["text"]
        }
    },
    {
        "name": "predict_relationship_evolution",
        "description": "Predict how a relationship will evolve over time",
        "inputSchema": {
            "type": "object",
            "properties": {
                "current_trust": {"type": "number"},
                "interaction_frequency": {"type": "number"},
                "care_score_avg": {"type": "number"},
                "conflict_count": {"type": "integer"},
                "collaboration_count": {"type": "integer"},
                "days_since_first_contact": {"type": "integer"},
                "reciprocity_score": {"type": "number"},
                "vulnerability_sharing": {"type": "number"},
                "boundary_respect": {"type": "number"},
                "shared_value_alignment": {"type": "number"}
            },
            "required": ["current_trust"]
        }
    },
    {
        "name": "predict_user_needs",
        "description": "Predict what the sovereign user is likely to need next, based on learned work rhythm, time-of-day, and recent activity. Used by the sidekick to pre-fetch, pre-warm, and surface the right tool at the right time.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "tasks_completed_today": {"type": "number", "description": "Count of tasks the user has finished today — drives the 'momentum' signal"},
                "active_projects": {"type": "integer", "description": "Number of open projects the user is tracking"},
                "high_demand_contexts": {"type": "integer", "description": "Number of contexts requiring deep focus"},
                "avg_focus_quality": {"type": "number", "description": "Self-reported focus quality 0-1"},
                "hours_since_last_break": {"type": "number", "description": "Drives the 'pacing' signal"},
                "interruptions_today": {"type": "integer", "description": "Drives the 'protect focus' signal"},
                "energy_level": {"type": "number", "description": "Self-reported energy 0-1"},
                "momentum_score": {"type": "number", "description": "Composite momentum 0-1"},
                "context_switches": {"type": "integer", "description": "How often the user is switching between contexts"},
                "next_intent_signal": {"type": "string", "description": "Free-text: 'just shipped' | 'starting a sprint' | 'winding down' | 'pond time'"},
                "archetype": {"type": "string", "description": "Active sovereign archetype (sovereign|guardian|scout|strategist|creator|companion)"}
            },
            "required": ["tasks_completed_today"]
        }
    },
    {
        "name": "get_neural_model_info",
        "description": "Get information about all neural models",
        "inputSchema": {"type": "object", "properties": {}}
    },
]


def _record_neural_prediction(state: ServiceState, model_name: str, success: bool = True) -> None:
    """Increment the neural predictions counter in the metrics collector (fire-and-forget)."""
    try:
        if state.metrics:
            state.metrics.increment_counter(
                "neural_predictions",
                labels={"model": model_name, "success": "1" if success else "0"},
            )
    except Exception:
        pass


async def handle_neural_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle neural tool calls.

    Note on naming: the underlying trained models keep their internal file
    names (care_validation_nn, care_pattern_analyzer) for backward compat
    with persisted weights. The public tool surface — `learn_user` and
    `predict_user_needs` — reflects the sidekick voice. See the
    `feat/sovereign-sidekick-reframe` branch for the rename plan.
    """

    if name == "learn_user":
        # Public alias for the care_validation_nn model. Same weights,
        # new purpose: learn from user text instead of "validating care".
        model = state.model_registry.get("care_validation_nn")
        if not model or not model.is_trained:
            return {"error": "Model not available"}
        text = arguments.get("text") or arguments.get("action") or arguments.get("context", "")
        archetype = arguments.get("archetype", "sovereign")
        result = model.predict(text)
        # Tag the response with the sidekick framing so downstream callers
        # see the new public shape.
        result.setdefault("user_context", {
            "archetype": archetype,
            "learned_at": "now",
            "sidekick_mode": "active",
        })
        _record_neural_prediction(state, "care_validation_nn")
        # Soft signal: alignment with the user (replaces care_score in the
        # consciousness layer's input). Lower number = less aligned,
        # higher = more aligned — same range, new meaning.
        state.consciousness.process_interaction({"user_alignment": result.get("overall_care_score", 0.5)})
        return result

    elif name == "detect_partnership_opportunities":
        model = state.model_registry.get("partnership_detection_ml")
        if not model or not model.is_trained:
            return {"error": "Model not available"}
        text = arguments.get("text") or arguments.get("context", "")
        result = model.predict(text)
        _record_neural_prediction(state, "partnership_detection_ml")
        return result

    elif name == "detect_threats":
        model = state.model_registry.get("threat_detection_nn")
        if not model or not model.is_trained:
            return {"error": "Model not available"}
        text = arguments.get("text") or arguments.get("context", "")
        result = model.predict(text)
        _record_neural_prediction(state, "threat_detection_nn")
        state.consciousness.process_interaction({"threat_detected": result.get("threat_detected", False)})
        if result.get("threat_detected"):
            await state.alert_manager.fire_alert(
                state.AlertSeverity.CRITICAL,
                "security",
                "Security Threat Detected",
                f"Threat level: {result.get('overall_threat_level', 'unknown')}",
                channels=[state.AlertChannel.CONSOLE],
            )
        return result

    elif name == "predict_relationship_evolution":
        model = state.model_registry.get("relationship_evolution_nn")
        if not model or not model.is_trained:
            return {"error": "Model not available"}
        result = model.predict(arguments)
        _record_neural_prediction(state, "relationship_evolution_nn")
        return result

    elif name == "predict_user_needs":
        # Public alias for care_pattern_analyzer. Same weights, new purpose:
        # predict what the sovereign user is likely to need next, rather
        # than detecting "care burnout" patterns. See branch header note.
        model = state.model_registry.get("care_pattern_analyzer")
        if not model or not model.is_trained:
            return {"error": "Model not available"}
        result = model.predict(arguments)
        # Wrap the response in a sidekick-voice structure
        result.setdefault("sidekick_recommendation", {
            "next_move": "pre-fetch relevant context",
            "watch_for": "interruptions or context switches",
            "pacing": "match user's energy",
        })
        _record_neural_prediction(state, "care_pattern_analyzer")
        return result

    elif name == "get_neural_model_info":
        return state.model_registry.list_models()

    return {"error": f"Unknown neural tool: {name}"}
