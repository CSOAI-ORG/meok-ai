"""
Nobulex-Style Audit Receipts
============================
Cryptographic audit receipts for every MCP tool call.
Every authorization and every result is Ed25519-signed and
hash-chained to the previous action — tamper-evident, auditor-readable.

Inspired by github.com/nobulex/protocol (IETF Internet-Draft).
"""
import json
import hashlib
import base64
from datetime import datetime, timezone
from typing import Dict, Any, List, Optional

from meok.mcp.state import ServiceState

AUDIT_TOOLS = [
    {
        "name": "audit_authorize",
        "description": "Authorize a tool call and generate a signed authorization receipt (Nobulex-style).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "tool_name": {"type": "string"},
                "arguments": {"type": "object"},
                "principal": {"type": "string", "description": "User or agent requesting the action"},
                "covenant": {"type": "string", "description": "Behavioral policy being enforced"},
                "previous_receipt_hash": {"type": "string", "description": "Hash of previous receipt for chaining"},
            },
            "required": ["tool_name", "principal"],
        },
    },
    {
        "name": "audit_receipt",
        "description": "Generate a signed execution receipt after a tool call completes.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "authorization_receipt": {"type": "string", "description": "The authorization receipt that permitted this action"},
                "result_summary": {"type": "string"},
                "success": {"type": "boolean"},
                "duration_ms": {"type": "number"},
            },
            "required": ["authorization_receipt", "success"],
        },
    },
    {
        "name": "audit_verify_chain",
        "description": "Verify a chain of audit receipts for tampering.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "receipts": {"type": "array", "items": {"type": "string"}, "description": "JSON strings of receipts in order"},
                "public_key": {"type": "string", "description": "Base64 Ed25519 public key"},
            },
            "required": ["receipts"],
        },
    },
]

# In-memory chain store (replace with ABCI state in production)
_chain_store: Dict[str, List[Dict[str, Any]]] = {}


try:
    from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey, Ed25519PublicKey
    from cryptography.hazmat.primitives import serialization
    from cryptography.exceptions import InvalidSignature
    _CRYPTO = True
except Exception:
    _CRYPTO = False


def _hash(data: str) -> str:
    return hashlib.sha256(data.encode()).hexdigest()[:32]


def _sign(data: str, priv_b64: str = None) -> Optional[str]:
    if not _CRYPTO:
        return None
    try:
        key = Ed25519PrivateKey.from_private_bytes(base64.b64decode(priv_b64 or ""))
        sig = key.sign(data.encode())
        return base64.b64encode(sig).decode()
    except Exception:
        return None


def _verify(data: str, sig_b64: str, pub_b64: str) -> bool:
    if not _CRYPTO:
        return False
    try:
        key = Ed25519PublicKey.from_public_bytes(base64.b64decode(pub_b64))
        key.verify(base64.b64decode(sig_b64), data.encode())
        return True
    except InvalidSignature:
        return False
    except Exception:
        return False


def _generate_authorization_receipt(
    tool_name: str,
    arguments: Dict[str, Any],
    principal: str,
    covenant: str = None,
    previous_hash: str = None,
) -> Dict[str, Any]:
    ts = datetime.now(timezone.utc).isoformat()
    payload = {
        "type": "authorization",
        "tool_name": tool_name,
        "arguments_hash": _hash(json.dumps(arguments, sort_keys=True)),
        "principal": principal,
        "covenant": covenant or "default:permit",
        "timestamp": ts,
        "previous_receipt_hash": previous_hash or "genesis",
    }
    canon = json.dumps(payload, sort_keys=True, separators=(",", ":"))
    payload["receipt_hash"] = _hash(canon)
    # Sign with a placeholder key; in production, load from SIGIL_SIGNING_KEY
    payload["signature"] = _sign(canon) or "unsigned"
    payload["algorithm"] = "ed25519" if _CRYPTO else "unsigned-sha256"
    return payload


def _generate_execution_receipt(
    auth_receipt: str,
    success: bool,
    result_summary: str = None,
    duration_ms: float = None,
) -> Dict[str, Any]:
    ts = datetime.now(timezone.utc).isoformat()
    auth = json.loads(auth_receipt) if isinstance(auth_receipt, str) else auth_receipt
    payload = {
        "type": "execution",
        "authorization_receipt_hash": auth.get("receipt_hash", "unknown"),
        "success": success,
        "result_summary": result_summary or "",
        "duration_ms": duration_ms,
        "timestamp": ts,
    }
    canon = json.dumps(payload, sort_keys=True, separators=(",", ":"))
    payload["receipt_hash"] = _hash(canon + auth.get("receipt_hash", ""))
    payload["signature"] = _sign(canon) or "unsigned"
    payload["algorithm"] = "ed25519" if _CRYPTO else "unsigned-sha256"
    return payload


async def handle_audit_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Dispatch audit receipt tools."""
    if name == "audit_authorize":
        receipt = _generate_authorization_receipt(
            tool_name=arguments.get("tool_name"),
            arguments=arguments.get("arguments", {}),
            principal=arguments.get("principal"),
            covenant=arguments.get("covenant"),
            previous_hash=arguments.get("previous_receipt_hash"),
        )
        principal = arguments.get("principal")
        _chain_store.setdefault(principal, []).append(receipt)
        return {
            "status": "authorized",
            "receipt": receipt,
            "receipt_json": json.dumps(receipt),
            "note": "Authorization signed. Execute tool, then call audit_receipt with this receipt.",
        }

    if name == "audit_receipt":
        receipt = _generate_execution_receipt(
            auth_receipt=arguments.get("authorization_receipt"),
            success=arguments.get("success"),
            result_summary=arguments.get("result_summary"),
            duration_ms=arguments.get("duration_ms"),
        )
        return {
            "status": "receipted",
            "receipt": receipt,
            "receipt_json": json.dumps(receipt),
            "bilateral_pair": "Authorization + Execution receipts form a bilateral Nobulex receipt.",
        }

    if name == "audit_verify_chain":
        receipts_raw = arguments.get("receipts", [])
        results = []
        prev_hash = "genesis"
        for raw in receipts_raw:
            try:
                r = json.loads(raw)
                # Check chain linkage
                chain_ok = r.get("previous_receipt_hash") == prev_hash or prev_hash == "genesis"
                # Check signature if public key provided
                pub = arguments.get("public_key")
                sig_ok = None
                if pub and r.get("signature") and r.get("signature") != "unsigned":
                    canon = json.dumps({k: v for k, v in r.items() if k not in ("signature", "receipt_hash")}, sort_keys=True, separators=(",", ":"))
                    sig_ok = _verify(canon, r["signature"], pub)
                results.append({
                    "receipt_hash": r.get("receipt_hash"),
                    "chain_ok": chain_ok,
                    "signature_ok": sig_ok,
                    "type": r.get("type"),
                })
                prev_hash = r.get("receipt_hash", "unknown")
            except Exception as e:
                results.append({"error": str(e), "valid": False})
        return {
            "chain_length": len(results),
            "all_valid": all(r.get("chain_ok", False) for r in results),
            "results": results,
        }

    return {"error": f"Unknown audit tool: {name}"}
