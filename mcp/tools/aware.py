"""
MEOK Aware tools — governed presence / world-model.

The sovereign's sense of "who is here": you-alone → full presence,
a stranger present → Guardian LOCKS sensitive data, a known group →
meeting/social mode. Senses (face/gesture/gaze) run ON-DEVICE in the
browser (MediaPipe + face-api.js + WebGazer) — no video leaves the device.

Governance is NOT optional: biometrics are GDPR Art.9 special-category +
US BIPA → explicit consent, off by default, every recognition event
attestable (SIGIL). This module models the consent gate + the world-model
state machine; the actual sensing is client-side.

Pattern matches the other tool modules: AWARE_TOOLS + handle_aware_tool.
"""
from typing import Dict, Any
from meok.mcp.state import ServiceState

# scene → (world-model state, governing action)
_SCENE_TO_STATE = {
    "alone": ("you-alone", "full", "Full presence — you are the sole, recognised principal."),
    "stranger": ("stranger-present", "guardian-lock", "Guardian LOCKS sensitive data — an unrecognised person is present."),
    "known_group": ("known-group", "social", "Meeting/social mode — recognised people present, sensitive surfaces dimmed."),
    "unknown": ("unknown", "guardian-lock", "Cannot establish who is present — default to Guardian lock."),
}

CONSENT_NOTICE = (
    "Biometric presence is GDPR Art.9 special-category + US BIPA. It is OFF by default, "
    "requires explicit opt-in consent, runs on-device (no video leaves the device), and "
    "every recognition event is SIGIL-attestable. Consent is revocable."
)

# Process-local consent flag (in production, bind to the user's consent record).
_CONSENT = {"granted": False, "scope": None}


AWARE_TOOLS = [
    {
        "name": "aware_status",
        "description": "Report MEOK Aware's consent state + the governance notice (GDPR Art.9 / BIPA, on-device, off by default).",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "aware_consent",
        "description": "Grant or revoke consent for on-device biometric presence (explicit opt-in; revocable).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "grant": {"type": "boolean"},
                "scope": {"type": "string", "description": "What the consent covers, e.g. 'presence', 'recognition', 'gaze'."},
            },
            "required": ["grant"],
        },
    },
    {
        "name": "aware_resolve_scene",
        "description": "Resolve a sensed scene to the world-model state + governing action (alone→full, stranger→Guardian-lock, known_group→social). Requires consent.",
        "inputSchema": {
            "type": "object",
            "properties": {"scene": {"type": "string", "enum": list(_SCENE_TO_STATE.keys())}},
            "required": ["scene"],
        },
    },
]


async def handle_aware_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle MEOK Aware tool calls."""
    try:
        args = arguments or {}
        if name == "aware_status":
            return {"consent": dict(_CONSENT), "default": "off", "on_device": True, "notice": CONSENT_NOTICE}

        if name == "aware_consent":
            grant = bool(args.get("grant"))
            _CONSENT["granted"] = grant
            _CONSENT["scope"] = args.get("scope") if grant else None
            return {"consent": dict(_CONSENT), "notice": CONSENT_NOTICE,
                    "message": "Consent granted (revocable)." if grant else "Consent revoked — presence sensing off."}

        if name == "aware_resolve_scene":
            if not _CONSENT["granted"]:
                return {"error": "consent required", "consent": dict(_CONSENT), "notice": CONSENT_NOTICE}
            scene = args.get("scene", "unknown")
            st, action, desc = _SCENE_TO_STATE.get(scene, _SCENE_TO_STATE["unknown"])
            return {
                "scene": scene,
                "world_model_state": st,
                "action": action,
                "description": desc,
                "attestable": f"aware:{st} → SIGIL (on-device recognition event)",
                "guardian_engaged": action == "guardian-lock",
            }

        return {"error": f"Unknown aware tool: {name}"}
    except Exception as e:
        import traceback
        return {"error": str(e), "traceback": traceback.format_exc()}
