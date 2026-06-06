"""
AIBOM — AI Bill of Materials
=============================
EuConform-compatible open evidence format for AI compliance.
Generates auditable, exportable compliance artifacts that regulators
and auditors can verify independently.

Integrates with MEOK's HATCH ecosystem and the 47 MCP server registry.
Every AI system gets a machine-readable birth certificate.
"""
import json
import hashlib
from datetime import datetime, timezone
from typing import Dict, Any, List

from meok.mcp.state import ServiceState

AIBOM_TOOLS = [
    {
        "name": "aibom_generate",
        "description": "Generate an AI Bill of Materials (AIBOM) for a system. EuConform-compatible open evidence format.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "system_id": {"type": "string", "description": "Unique system identifier"},
                "system_name": {"type": "string"},
                "system_version": {"type": "string"},
                "risk_classification": {"type": "string", "enum": ["minimal", "limited", "high-risk", "unacceptable"]},
                "ai_model": {"type": "string", "description": "Model identifier (e.g., gpt-4, claude-3, llama-3)"},
                "training_data_sources": {"type": "array", "items": {"type": "string"}},
                "intended_use": {"type": "string"},
                "geographic_scope": {"type": "array", "items": {"type": "string"}, "description": "ISO country codes where deployed"},
                "compliance_frameworks": {"type": "array", "items": {"type": "string"}, "description": "eu-ai-act, iso-42001, nist-ai-rmf, dora, nis2, hipaa, gdpr"},
                "operator": {"type": "string", "description": "Entity operating the system"},
            },
            "required": ["system_id", "system_name", "risk_classification"],
        },
    },
    {
        "name": "aibom_export_bundle",
        "description": "Export a complete compliance bundle (AIBOM + ASSTI score + audit trail + SBOM) as ZIP-ready JSON.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "system_id": {"type": "string"},
                "include_assti": {"type": "boolean", "default": True},
                "include_audit_trail": {"type": "boolean", "default": True},
                "include_sbom": {"type": "boolean", "default": False},
            },
            "required": ["system_id"],
        },
    },
    {
        "name": "aibom_verify",
        "description": "Verify an AIBOM integrity hash and check for tampering.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "aibom_json": {"type": "string", "description": "JSON string of the AIBOM to verify"},
                "expected_hash": {"type": "string"},
            },
            "required": ["aibom_json"],
        },
    },
]


def _generate_aibom(data: Dict[str, Any]) -> Dict[str, Any]:
    """Generate a standard AIBOM document."""
    ts = datetime.now(timezone.utc).isoformat()
    aibom = {
        "schema_version": "1.0.0",
        "schema_url": "https://csoai.org/schemas/aibom/v1",
        "generated_at": ts,
        "generated_by": "MEOK DATA AIBOM Engine",
        "system": {
            "id": data.get("system_id"),
            "name": data.get("system_name"),
            "version": data.get("system_version", "1.0.0"),
            "risk_classification": data.get("risk_classification"),
            "ai_model": data.get("ai_model", "unknown"),
            "training_data_sources": data.get("training_data_sources", []),
            "intended_use": data.get("intended_use", "Not specified"),
            "geographic_scope": data.get("geographic_scope", []),
            "compliance_frameworks": data.get("compliance_frameworks", []),
            "operator": data.get("operator", "Unknown"),
        },
        "evidence": {
            "assti_score": None,  # populated if available
            "audit_trail_hash": None,
            "last_assessment_date": ts,
            "assessor": "MEOK DATA automated assessment",
        },
        "regulatory_mapping": _map_jurisdictions(data.get("geographic_scope", [])),
    }
    # Integrity hash
    canon = json.dumps(aibom, sort_keys=True, separators=(",", ":"))
    aibom["integrity"] = {
        "algorithm": "sha-256",
        "hash": hashlib.sha256(canon.encode()).hexdigest(),
    }
    return aibom


def _map_jurisdictions(countries: List[str]) -> Dict[str, Any]:
    """Map jurisdictions to applicable regulations."""
    mapping = {}
    for cc in countries:
        cc = cc.upper()
        regs = []
        if cc in ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"]:
            regs.extend(["eu-ai-act", "gdpr", "dora", "nis2"])
        if cc == "GB" or cc == "UK":
            regs.extend(["uk-ai-regulation", "gdpr-uk"])
        if cc == "US":
            regs.extend(["nist-ai-rmf", "hipaa", "ccpa", "cpra", "algorithmic-accountability"])
        if cc == "CA":
            regs.extend(["pipeda", "aida"])
        if cc == "SG":
            regs.extend(["singapore-ai-verify", "pdpa"])
        if cc == "JP":
            regs.extend(["japan-ai-guidelines", "apip"])
        if cc == "AU":
            regs.extend(["australia-ai-ethics", "privacy-act"])
        mapping[cc] = list(set(regs))
    return mapping


async def handle_aibom_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Dispatch AIBOM tools."""
    if name == "aibom_generate":
        aibom = _generate_aibom(arguments)
        return {
            "status": "generated",
            "aibom": aibom,
            "download_url": f"/v1/aibom/{arguments.get('system_id')}/download",
            "format": "json",
            "eu_conform_compatible": True,
        }

    if name == "aibom_export_bundle":
        system_id = arguments.get("system_id")
        # In production, fetch from registry
        bundle = {
            "system_id": system_id,
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "artifacts": [],
        }
        if arguments.get("include_assti", True):
            bundle["artifacts"].append({
                "type": "assti_scorecard",
                "description": "AI Self-State Transparency Index",
                "path": f"/v1/aibom/{system_id}/assti.json",
            })
        if arguments.get("include_audit_trail", True):
            bundle["artifacts"].append({
                "type": "audit_trail",
                "description": "Hash-chained Ed25519-signed audit log",
                "path": f"/v1/aibom/{system_id}/audit.json",
            })
        if arguments.get("include_sbom", False):
            bundle["artifacts"].append({
                "type": "sbom",
                "description": "CycloneDX Software Bill of Materials",
                "path": f"/v1/aibom/{system_id}/sbom.json",
            })
        return {
            "status": "bundled",
            "bundle": bundle,
            "total_artifacts": len(bundle["artifacts"]),
        }

    if name == "aibom_verify":
        aibom_json = arguments.get("aibom_json", "{}")
        try:
            aibom = json.loads(aibom_json)
            stored_hash = aibom.get("integrity", {}).get("hash", "")
            # Recompute without integrity field
            clean = {k: v for k, v in aibom.items() if k != "integrity"}
            canon = json.dumps(clean, sort_keys=True, separators=(",", ":"))
            computed_hash = hashlib.sha256(canon.encode()).hexdigest()
            return {
                "verified": stored_hash == computed_hash,
                "stored_hash": stored_hash,
                "computed_hash": computed_hash,
                "tampered": stored_hash != computed_hash,
            }
        except Exception as e:
            return {"error": str(e), "verified": False}

    return {"error": f"Unknown AIBOM tool: {name}"}
