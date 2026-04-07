"""MCP tools for Mirror Mode — OSINT self-investigation."""
import asyncio
import json
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "../.."))

from core.mirror_mode import get_mirror

MIRROR_MODE_TOOLS = [
    {
        "name": "mirror_investigate",
        "description": (
            "Run a sovereign OSINT investigation against yourself to reveal your digital footprint. "
            "Checks email breaches, social media profiles, domain exposure, and data broker listings. "
            "Privacy-first: raw inputs never stored, only SHA-256 hash retained. "
            "Returns risk score, findings by severity, and prioritised hardening actions."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "email":     {"type": "string", "description": "Email address to investigate"},
                "username":  {"type": "string", "description": "Username to check across platforms"},
                "full_name": {"type": "string", "description": "Full name for data broker lookup"},
                "domain":    {"type": "string", "description": "Domain to check WHOIS/DNS exposure"},
            },
        },
    },
    {
        "name": "mirror_quick_check",
        "description": "Quick email breach check using k-anonymity (privacy-safe, no API key needed).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "email": {"type": "string", "description": "Email to check for breaches"},
            },
            "required": ["email"],
        },
    },
    {
        "name": "mirror_broker_guide",
        "description": "Get the complete data broker opt-out guide for a given name — no API calls needed.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "full_name": {"type": "string", "description": "Full name to generate opt-out guide for"},
            },
            "required": ["full_name"],
        },
    },
]


async def handle_mirror_mode(tool_name: str, arguments: dict) -> dict:
    try:
        mirror = get_mirror()

        if tool_name == "mirror_investigate":
            if not any(arguments.get(k) for k in ["email", "username", "full_name", "domain"]):
                return {"error": "Provide at least one of: email, username, full_name, domain"}
            report = await mirror.investigate(
                email=arguments.get("email"),
                username=arguments.get("username"),
                full_name=arguments.get("full_name"),
                domain=arguments.get("domain"),
            )
            d = report.to_dict()
            # Flatten findings for readability
            flat_findings = []
            for sev, findings in d["findings_by_severity"].items():
                for f in findings:
                    flat_findings.append({
                        "severity": sev,
                        "title": f["title"],
                        "action": f["hardening_action"],
                        "care_note": f["care_note"],
                    })
            d["findings_flat"] = flat_findings
            return d

        elif tool_name == "mirror_quick_check":
            from core.mirror_mode import EmailBreachChecker
            checker = EmailBreachChecker()
            findings = await checker.run(arguments["email"])
            return {
                "email_checked": True,
                "breach_count": len([f for f in findings if f.severity.value in ["critical", "high"]]),
                "findings": [
                    {"severity": f.severity.value, "title": f.title, "action": f.hardening_action}
                    for f in findings
                ],
                "privacy_note": "Only a hash prefix was used for k-anonymity breach lookup.",
            }

        elif tool_name == "mirror_broker_guide":
            from core.mirror_mode import DataBrokerExposure
            broker = DataBrokerExposure()
            findings = await broker.run(arguments["full_name"])
            brokers = findings[0].evidence.get("brokers", []) if findings else []
            return {
                "name": arguments["full_name"],
                "broker_count": len(brokers),
                "brokers": brokers,
                "estimated_total_time": f"{len(brokers) * 15} minutes",
                "tip": "Use DeleteMe ($129/year) to automate quarterly re-removal.",
            }

        return {"error": f"Unknown mirror_mode tool: {tool_name}"}
    except Exception as e:
        return {"error": f"Mirror mode tool error: {str(e)}", "tool": tool_name}
