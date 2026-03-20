"""MCP tools for Voice Guardian pipeline — audio stress analysis + Family Guardian."""
import base64
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../.."))

VOICE_GUARDIAN_TOOLS = [
    {
        "name": "voice_analyse_stress",
        "description": (
            "Analyse raw audio for prosodic stress markers (pitch variance, speaking rate, "
            "tremor, energy). Returns distress_score 0-1. No audio stored — hash only. "
            "Works without Whisper installed (prosodic features only if STT unavailable)."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "audio_base64": {"type": "string", "description": "Base64-encoded 16-bit PCM audio"},
                "sample_rate":  {"type": "integer", "default": 16000},
                "age_group":    {"type": "string", "enum": ["5-8","9-12","13-15","16-17","18+"], "default": "9-12"},
                "child_id":     {"type": "string"},
                "child_baseline": {"type": "object", "description": "Optional baseline dict (rms_mean, speaking_rate, etc)"},
            },
            "required": ["audio_base64"],
        },
    },
    {
        "name": "voice_guardian_full",
        "description": (
            "Full pipeline: audio → Whisper transcription → prosodic stress → Family Guardian analysis. "
            "Returns unified result with transcript, stress score, markers, and guardian alerts."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "audio_base64": {"type": "string"},
                "child_id":     {"type": "string"},
                "age_group":    {"type": "string", "default": "9-12"},
                "sample_rate":  {"type": "integer", "default": 16000},
                "context":      {"type": "string", "description": "What was happening (gaming, homework, etc)"},
                "child_baseline": {"type": "object"},
            },
            "required": ["audio_base64", "child_id"],
        },
    },
    {
        "name": "voice_stress_calibrate",
        "description": "Establish a baseline prosodic profile for a child from calm audio samples.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "child_id":        {"type": "string"},
                "calm_audio_b64":  {"type": "string", "description": "Base64 PCM of calm baseline recording"},
                "sample_rate":     {"type": "integer", "default": 16000},
                "age_group":       {"type": "string", "default": "9-12"},
            },
            "required": ["child_id", "calm_audio_b64"],
        },
    },
]

# In-memory baseline store (persisted to disk in full implementation)
_baselines = {}


async def handle_voice_guardian(tool_name: str, arguments: dict) -> dict:
    import asyncio
    from core.voice_stress import (
        ProsodicExtractor, VoiceStressAnalyser,
        get_voice_guardian_pipeline,
    )

    extractor = ProsodicExtractor()
    analyser  = VoiceStressAnalyser()

    if tool_name == "voice_analyse_stress":
        audio_bytes = base64.b64decode(arguments["audio_base64"])
        sample_rate = int(arguments.get("sample_rate", 16000))
        age_group   = arguments.get("age_group", "9-12")
        child_id    = arguments.get("child_id", "unknown")
        baseline    = arguments.get("child_baseline") or _baselines.get(child_id)

        features = extractor.extract(audio_bytes, sample_rate)
        if features is None:
            return {"error": "Audio too short or empty"}

        result = analyser.analyse(features, baseline, age_group)
        return {
            "distress_score": result.distress_score,
            "confidence": result.confidence,
            "needs_alert": result.needs_guardian_alert,
            "markers": result.markers_detected,
            "note": result.analysis_note,
            "baseline_deviation": result.baseline_deviation,
            "prosodic_features": {
                "rms_energy":    round(features.rms_energy, 4),
                "speaking_rate": round(features.speaking_rate, 2),
                "pause_ratio":   round(features.pause_ratio, 3),
                "tremor_index":  round(features.tremor_index, 3),
                "duration_s":    round(features.duration_seconds, 2),
            },
            "privacy_note": "Raw audio not stored. Hash only.",
        }

    elif tool_name == "voice_guardian_full":
        audio_bytes = base64.b64decode(arguments["audio_base64"])
        child_id    = arguments["child_id"]
        age_group   = arguments.get("age_group", "9-12")
        sample_rate = int(arguments.get("sample_rate", 16000))
        context     = arguments.get("context")
        baseline    = arguments.get("child_baseline") or _baselines.get(child_id)

        pipeline = get_voice_guardian_pipeline()
        result = await pipeline.process_audio(
            child_id=child_id,
            audio_bytes=audio_bytes,
            sample_rate=sample_rate,
            age_group=age_group,
            child_baseline=baseline,
            context=context,
        )
        return result

    elif tool_name == "voice_stress_calibrate":
        audio_bytes = base64.b64decode(arguments["calm_audio_b64"])
        child_id    = arguments["child_id"]
        sample_rate = int(arguments.get("sample_rate", 16000))

        features = extractor.extract(audio_bytes, sample_rate)
        if features is None:
            return {"error": "Calibration audio too short"}

        baseline = {
            "rms_mean":     features.rms_energy,
            "rms_std":      0.04,  # default std until more samples collected
            "speaking_rate": features.speaking_rate,
            "rate_std":     0.8,
            "pause_ratio":  features.pause_ratio,
            "pause_std":    0.10,
        }
        _baselines[child_id] = baseline
        return {
            "success": True,
            "child_id": child_id,
            "baseline": baseline,
            "message": f"Baseline established for {child_id}. Future audio will be compared against this profile.",
        }

    return {"error": f"Unknown voice_guardian tool: {tool_name}"}
