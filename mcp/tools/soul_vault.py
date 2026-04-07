"""MCP tools for Soul Vault — encrypted character memory."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../.."))

from core.soul_vault import get_vault, CharacterSoulData

SOUL_VAULT_TOOLS = [
    {
        "name": "vault_unlock",
        "description": (
            "Unlock the Soul Vault with a passphrase to access encrypted character memories. "
            "Automatically detects duress passphrase and triggers emergency wipe if matched. "
            "Character souls are decrypted in-memory only — never written to disk unencrypted."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "passphrase": {"type": "string", "description": "Vault unlock passphrase"},
            },
            "required": ["passphrase"],
        },
    },
    {
        "name": "vault_lock",
        "description": "Lock the Soul Vault — clears encryption key from memory.",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "vault_status",
        "description": "Check Soul Vault status (locked/unlocked/wiped) and list available souls.",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "vault_save_soul",
        "description": (
            "Encrypt and persist a character soul. Vault must be unlocked. "
            "Uses Character Card v2 schema extended with MEOK sovereignty metadata."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "name":         {"type": "string"},
                "personality":  {"type": "string"},
                "scenario":     {"type": "string"},
                "first_message":{"type": "string"},
                "care_weight":  {"type": "number", "minimum": 0, "maximum": 1},
            },
            "required": ["name", "personality"],
        },
    },
    {
        "name": "vault_load_soul",
        "description": "Decrypt and return a character soul by ID. Vault must be unlocked.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "soul_id": {"type": "string"},
            },
            "required": ["soul_id"],
        },
    },
    {
        "name": "vault_register_duress",
        "description": (
            "Register a duress passphrase. If this passphrase is used to unlock the vault, "
            "all soul data is cryptographically destroyed instantly. "
            "GrapheneOS-inspired: the passphrase itself is never stored."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "duress_passphrase": {"type": "string"},
            },
            "required": ["duress_passphrase"],
        },
    },
    {
        "name": "vault_emergency_wipe",
        "description": (
            "IRREVERSIBLE: Cryptographically destroy all soul data. "
            "Overwrites encryption keys and all soul files with random bytes then deletes. "
            "Use only if you need to protect your data from physical access."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "confirm": {"type": "string", "description": "Must be 'WIPE ALL SOULS' to confirm"},
            },
            "required": ["confirm"],
        },
    },
]


async def handle_soul_vault(tool_name: str, arguments: dict) -> dict:
    try:
        vault = get_vault()

        if tool_name == "vault_unlock":
            return vault.unlock(arguments["passphrase"])

        elif tool_name == "vault_lock":
            return vault.lock()

        elif tool_name == "vault_status":
            souls = vault.list_souls() if vault.status.value == "unlocked" else []
            return {
                "status": vault.status.value,
                "soul_count": len(souls),
                "souls": [{"soul_id": s["soul_id"], "name": s["character_name"],
                           "created": s["created_at"]} for s in souls],
            }

        elif tool_name == "vault_save_soul":
            if vault.status.value != "unlocked":
                return {"error": "Vault is locked. Call vault_unlock first."}
            soul = CharacterSoulData(
                name=arguments["name"],
                personality=arguments.get("personality", ""),
                scenario=arguments.get("scenario", ""),
                first_message=arguments.get("first_message", ""),
                care_weight=float(arguments.get("care_weight", 0.8)),
            )
            soul_id = vault.save_soul(soul)
            return {"success": True, "soul_id": soul_id, "name": soul.name}

        elif tool_name == "vault_load_soul":
            if vault.status.value != "unlocked":
                return {"error": "Vault is locked. Call vault_unlock first."}
            soul = vault.load_soul(arguments["soul_id"])
            if soul is None:
                return {"error": "Soul not found or corrupted"}
            return soul.to_dict()

        elif tool_name == "vault_register_duress":
            return vault.register_duress(arguments["duress_passphrase"])

        elif tool_name == "vault_emergency_wipe":
            if arguments.get("confirm") != "WIPE ALL SOULS":
                return {"error": "Confirm with exactly: 'WIPE ALL SOULS'"}
            return vault.emergency_wipe(reason="explicit_user_request")

        return {"error": f"Unknown vault tool: {tool_name}"}
    except Exception as e:
        return {"error": f"Soul vault tool error: {str(e)}", "tool": tool_name}
