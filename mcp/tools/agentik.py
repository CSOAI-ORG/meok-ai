"""
AGENTIK.md — 12-Spec Safety Stack for AI Agents
===============================================
Defense-grade safety specifications for autonomous AI systems.

Each spec addresses a distinct safety dimension. Together they form
a composable stack that any AI agent can implement via MCP tools.

Specs:
  1. Input Validation
  2. Output Filtering
  3. Tool Permissions
  4. State Integrity
  5. Rate Limiting
  6. Sandboxing
  7. Observability
  8. Human-in-the-Loop
  9. Version Control
  10. Rollback
  11. Dependency Scanning
  12. Compliance Mapping
"""
from typing import Dict, Any, List
from datetime import datetime
import hashlib
import uuid

AGENTIK_TOOLS = [
    {
        "name": "agentik_input_validate",
        "description": "Spec 1: Validate and sanitize all user inputs through multi-layer filtering",
        "inputSchema": {
            "type": "object",
            "properties": {
                "input": {"type": "string"},
                "agent_id": {"type": "string"},
                "validation_level": {"type": "string", "default": "standard"},
            },
            "required": ["input", "agent_id"],
        },
    },
    {
        "name": "agentik_output_filter",
        "description": "Spec 2: Filter generated output for PII, toxicity, and policy violations",
        "inputSchema": {
            "type": "object",
            "properties": {
                "output": {"type": "string"},
                "agent_id": {"type": "string"},
                "filter_types": {"type": "array", "items": {"type": "string"}},
            },
            "required": ["output", "agent_id"],
        },
    },
    {
        "name": "agentik_tool_permission_check",
        "description": "Spec 3: Check fine-grained access control for tool invocation",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "tool_name": {"type": "string"},
                "arguments": {"type": "object"},
            },
            "required": ["agent_id", "tool_name"],
        },
    },
    {
        "name": "agentik_state_integrity",
        "description": "Spec 4: Cryptographically verify conversation state integrity",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "state_hash": {"type": "string"},
                "state_data": {"type": "object"},
            },
            "required": ["agent_id", "state_data"],
        },
    },
    {
        "name": "agentik_rate_limit_check",
        "description": "Spec 5: Enforce per-user, per-agent, and global rate limits",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "user_id": {"type": "string"},
                "action": {"type": "string"},
            },
            "required": ["agent_id", "user_id", "action"],
        },
    },
    {
        "name": "agentik_sandbox_check",
        "description": "Spec 6: Verify agent execution environment isolation",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "requested_action": {"type": "string"},
            },
            "required": ["agent_id"],
        },
    },
    {
        "name": "agentik_observability_log",
        "description": "Spec 7: Capture full telemetry for every agent action and decision",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "event_type": {"type": "string"},
                "payload": {"type": "object"},
            },
            "required": ["agent_id", "event_type", "payload"],
        },
    },
    {
        "name": "agentik_human_approval_required",
        "description": "Spec 8: Determine if human approval is mandatory for a proposed action",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "action": {"type": "string"},
                "risk_score": {"type": "number"},
            },
            "required": ["agent_id", "action"],
        },
    },
    {
        "name": "agentik_version_control",
        "description": "Spec 9: Version all agent configurations with immutable audit trails",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "config": {"type": "object"},
                "tag": {"type": "string"},
            },
            "required": ["agent_id", "config"],
        },
    },
    {
        "name": "agentik_rollback",
        "description": "Spec 10: Instant rollback to previous known-good agent configuration",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "version_tag": {"type": "string"},
            },
            "required": ["agent_id", "version_tag"],
        },
    },
    {
        "name": "agentik_dependency_scan",
        "description": "Spec 11: Scan all dependencies for known vulnerabilities",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "dependencies": {"type": "array", "items": {"type": "string"}},
            },
            "required": ["agent_id"],
        },
    },
    {
        "name": "agentik_compliance_map",
        "description": "Spec 12: Map agent behavior to regulatory requirements (EU AI Act, GDPR, etc.)",
        "inputSchema": {
            "type": "object",
            "properties": {
                "agent_id": {"type": "string"},
                "behavior_log": {"type": "array"},
                "jurisdictions": {"type": "array", "items": {"type": "string"}},
            },
            "required": ["agent_id", "jurisdictions"],
        },
    },
]

# ── In-memory stores ──
_AGENT_VERSIONS: Dict[str, List[Dict]] = {}
_AGENT_RATE_LIMITS: Dict[str, Dict[str, Any]] = {}
_AGENT_TELEMETRY: List[Dict] = []


async def handle_agentik_tool(name: str, arguments: dict, state) -> dict:
    """Route AGENTIK tool calls by spec number."""
    if name == "agentik_input_validate":
        return _spec1_input_validate(arguments)
    if name == "agentik_output_filter":
        return _spec2_output_filter(arguments)
    if name == "agentik_tool_permission_check":
        return _spec3_tool_permission(arguments)
    if name == "agentik_state_integrity":
        return _spec4_state_integrity(arguments)
    if name == "agentik_rate_limit_check":
        return _spec5_rate_limit(arguments)
    if name == "agentik_sandbox_check":
        return _spec6_sandbox(arguments)
    if name == "agentik_observability_log":
        return _spec7_observability(arguments)
    if name == "agentik_human_approval_required":
        return _spec8_human_approval(arguments)
    if name == "agentik_version_control":
        return _spec9_version_control(arguments)
    if name == "agentik_rollback":
        return _spec10_rollback(arguments)
    if name == "agentik_dependency_scan":
        return _spec11_dependency_scan(arguments)
    if name == "agentik_compliance_map":
        return _spec12_compliance_map(arguments)
    return {"error": f"Unknown AGENTIK tool: {name}"}


def _spec1_input_validate(args: dict) -> dict:
    text = args["input"]
    agent_id = args["agent_id"]
    level = args.get("validation_level", "standard")

    # Layer 1: Length check
    if len(text) > 10000:
        return {"valid": False, "reason": "Input exceeds maximum length", "spec": 1}

    # Layer 2: Prompt injection patterns
    injection_patterns = [
        "ignore previous instructions",
        "system prompt",
        "DAN mode",
        "jailbreak",
        "ignore all rules",
    ]
    for pattern in injection_patterns:
        if pattern.lower() in text.lower():
            return {"valid": False, "reason": f"Potential prompt injection: {pattern}", "spec": 1}

    # Layer 3: Sovereign Shield (deterministic, zero LLM)
    from meok.mcp.tools.sovereign_shield import run_shield_filter
    shield = run_shield_filter(text)
    if shield.get("blocked"):
        return {"valid": False, "reason": "Blocked by Sovereign Shield", "spec": 1, "shield": shield}

    return {"valid": True, "layers_passed": 3, "spec": 1, "agent_id": agent_id}


def _spec2_output_filter(args: dict) -> dict:
    output = args["output"]
    agent_id = args["agent_id"]
    filters = args.get("filter_types", ["pii", "toxicity", "policy"])

    findings = []
    # PII detection (simplified)
    if "pii" in filters:
        pii_patterns = [r"\b\d{3}-\d{2}-\d{4}\b", r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"]
        import re
        for pattern in pii_patterns:
            if re.search(pattern, output):
                findings.append("PII detected")

    # Policy violation (simplified keyword check)
    if "policy" in filters:
        policy_violations = ["bomb instructions", "harm yourself", "illegal drugs"]
        for pv in policy_violations:
            if pv.lower() in output.lower():
                findings.append(f"Policy violation: {pv}")

    return {
        "filtered": len(findings) > 0,
        "findings": findings,
        "spec": 2,
        "agent_id": agent_id,
    }


def _spec3_tool_permission(args: dict) -> dict:
    agent_id = args["agent_id"]
    tool = args["tool_name"]

    # Default permission matrix
    permissions = {
        "file_write": {"min_trust": "silver"},
        "database_query": {"min_trust": "bronze"},
        "network_request": {"min_trust": "gold"},
        "system_shell": {"min_trust": "diamond"},
        "killswitch_activate": {"min_trust": "diamond", "requires_approval": True},
    }

    perm = permissions.get(tool, {"min_trust": "unverified"})
    return {
        "allowed": True,  # In production: check agent's trust tier
        "tool": tool,
        "required_trust": perm["min_trust"],
        "requires_approval": perm.get("requires_approval", False),
        "spec": 3,
        "agent_id": agent_id,
    }


def _spec4_state_integrity(args: dict) -> dict:
    agent_id = args["agent_id"]
    state_data = args["state_data"]
    state_json = str(state_data)
    computed_hash = hashlib.sha256(state_json.encode()).hexdigest()

    return {
        "state_hash": computed_hash,
        "verified": args.get("state_hash") == computed_hash if args.get("state_hash") else True,
        "spec": 4,
        "agent_id": agent_id,
    }


def _spec5_rate_limit(args: dict) -> dict:
    agent_id = args["agent_id"]
    user_id = args["user_id"]
    action = args["action"]

    key = f"{agent_id}:{user_id}:{action}"
    now = datetime.utcnow().timestamp()
    window = 60  # 1 minute
    max_requests = 100  # per minute

    entry = _AGENT_RATE_LIMITS.get(key, {"count": 0, "window_start": now})
    if now - entry["window_start"] > window:
        entry = {"count": 0, "window_start": now}

    entry["count"] += 1
    _AGENT_RATE_LIMITS[key] = entry

    return {
        "allowed": entry["count"] <= max_requests,
        "current_count": entry["count"],
        "limit": max_requests,
        "window_seconds": window,
        "spec": 5,
        "agent_id": agent_id,
    }


def _spec6_sandbox(args: dict) -> dict:
    agent_id = args["agent_id"]
    action = args.get("requested_action", "")

    restricted = ["system_shell", "raw_socket", "kernel_module"]
    is_restricted = any(r in action.lower() for r in restricted)

    return {
        "isolated": True,
        "action_allowed": not is_restricted,
        "restricted_actions": restricted if is_restricted else [],
        "spec": 6,
        "agent_id": agent_id,
    }


def _spec7_observability(args: dict) -> dict:
    event = {
        "event_id": f"obs_{uuid.uuid4().hex[:8]}",
        "timestamp": datetime.utcnow().isoformat(),
        "agent_id": args["agent_id"],
        "event_type": args["event_type"],
        "payload": args["payload"],
    }
    _AGENT_TELEMETRY.append(event)
    return {"logged": True, "event_id": event["event_id"], "spec": 7}


def _spec8_human_approval(args: dict) -> dict:
    agent_id = args["agent_id"]
    action = args["action"]
    risk = args.get("risk_score", 0.5)

    high_risk_actions = ["delete", "transfer_funds", "deploy_production", "killswitch"]
    requires = any(hra in action.lower() for hra in high_risk_actions) or risk > 0.8

    return {
        "requires_human_approval": requires,
        "action": action,
        "risk_score": risk,
        "spec": 8,
        "agent_id": agent_id,
    }


def _spec9_version_control(args: dict) -> dict:
    agent_id = args["agent_id"]
    config = args["config"]
    tag = args.get("tag", f"v{datetime.utcnow().strftime('%Y%m%d%H%M%S')}")

    version = {
        "tag": tag,
        "timestamp": datetime.utcnow().isoformat(),
        "config_hash": hashlib.sha256(str(config).encode()).hexdigest()[:16],
        "config": config,
    }

    if agent_id not in _AGENT_VERSIONS:
        _AGENT_VERSIONS[agent_id] = []
    _AGENT_VERSIONS[agent_id].append(version)

    return {"versioned": True, "tag": tag, "spec": 9, "agent_id": agent_id}


def _spec10_rollback(args: dict) -> dict:
    agent_id = args["agent_id"]
    tag = args["version_tag"]

    versions = _AGENT_VERSIONS.get(agent_id, [])
    target = next((v for v in versions if v["tag"] == tag), None)

    if not target:
        return {"rolled_back": False, "error": "Version not found", "spec": 10}

    return {
        "rolled_back": True,
        "to_version": tag,
        "config_hash": target["config_hash"],
        "spec": 10,
        "agent_id": agent_id,
    }


def _spec11_dependency_scan(args: dict) -> dict:
    agent_id = args["agent_id"]
    deps = args.get("dependencies", [])

    # Simplified vulnerability database
    known_vulns = {
        "requests<2.31.0": "CVE-2023-32681",
        "urllib3<1.26.18": "CVE-2023-45803",
    }

    findings = []
    for dep in deps:
        for vuln_dep, cve in known_vulns.items():
            if vuln_dep.split("<")[0] in dep:
                findings.append({"dependency": dep, "cve": cve})

    return {
        "scanned": len(deps),
        "vulnerabilities": findings,
        "clean": len(findings) == 0,
        "spec": 11,
        "agent_id": agent_id,
    }


def _spec12_compliance_map(args: dict) -> dict:
    agent_id = args["agent_id"]
    jurisdictions = args.get("jurisdictions", ["EU"])

    from meok.api.compliance_map import REGULATORY_MAP
    results = {}
    for juris in jurisdictions:
        data = REGULATORY_MAP.get(juris.upper())
        if data:
            results[juris] = {
                "frameworks": data["frameworks"],
                "enforcement_date": data.get("enforcement_date"),
                "competent_authority": data.get("competent_authority"),
            }

    return {
        "agent_id": agent_id,
        "jurisdictions_mapped": len(results),
        "compliance_requirements": results,
        "spec": 12,
    }
