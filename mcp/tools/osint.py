"""
MCP Tools — OSINT Collectors
5 tools wrapping the OSINT collector layer for external tool access.
"""

from __future__ import annotations

import logging
from typing import Any

logger = logging.getLogger("meok.mcp.osint")

OSINT_TOOLS = [
    {
        "name": "osint_phone_lookup",
        "description": (
            "Enumerate which platforms a phone number is registered on using the Ignorant tool. "
            "Returns list of platforms where the phone number has an account. "
            "Graceful fallback if Ignorant not installed."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "phone": {
                    "type": "string",
                    "description": "Phone number to look up (include country code, e.g. +447700900000)",
                },
            },
            "required": ["phone"],
        },
    },
    {
        "name": "osint_subdomain_scan",
        "description": (
            "Enumerate subdomains for a domain using Subfinder. "
            "Discovers subdomains that may represent additional attack surface. "
            "Requires Subfinder Go binary to be installed."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "domain": {
                    "type": "string",
                    "description": "Domain to scan for subdomains (e.g. example.com)",
                },
            },
            "required": ["domain"],
        },
    },
    {
        "name": "osint_secret_scan",
        "description": (
            "Scan a local git repository directory for leaked secrets and credentials using Gitleaks. "
            "Checks git history for accidentally committed API keys, tokens, and passwords. "
            "Only operates on local filesystem paths."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "path": {
                    "type": "string",
                    "description": "Local directory path to scan (must be a git repository)",
                },
            },
            "required": ["path"],
        },
    },
    {
        "name": "osint_social_scrape",
        "description": (
            "Scrape public Twitter/X profile data for a username using Snscrape. "
            "Returns profile info and recent public tweets. "
            "Requires snscrape Python library."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "username": {
                    "type": "string",
                    "description": "Twitter/X username to scrape (with or without @)",
                },
            },
            "required": ["username"],
        },
    },
    {
        "name": "osint_url_archive",
        "description": (
            "Fetch all archived URLs for a domain from web archives (Wayback Machine, Common Crawl, etc.) "
            "using the GAU (GetAllURLs) tool. Reveals historical endpoints, admin paths, and API routes. "
            "Requires GAU Go binary to be installed."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "domain": {
                    "type": "string",
                    "description": "Domain to fetch archived URLs for (e.g. example.com)",
                },
            },
            "required": ["domain"],
        },
    },
]


async def handle_osint_tool(tool_name: str, arguments: dict) -> Any:
    try:
        from meok.core.osint_collectors import (
            IgnorantCollector,
            SubfinderCollector,
            GitleaksCollector,
            SnscrapeCollector,
            GauCollector,
        )
        from dataclasses import asdict

        def findings_to_dict(findings):
            return [
                {
                    "severity": f.severity.value,
                    "title": f.title,
                    "description": f.description,
                    "hardening_action": f.hardening_action,
                    "care_note": f.care_note,
                    "evidence": f.evidence,
                    "timestamp": f.timestamp,
                }
                for f in findings
            ]

        if tool_name == "osint_phone_lookup":
            phone = arguments.get("phone", "").strip()
            if not phone:
                return {"error": "phone is required"}
            collector = IgnorantCollector()
            findings = await collector.run(phone)
            return {
                "phone_prefix": phone[:4] + "****" if len(phone) >= 4 else "****",
                "tool_available": collector.is_available(),
                "finding_count": len(findings),
                "findings": findings_to_dict(findings),
            }

        elif tool_name == "osint_subdomain_scan":
            domain = arguments.get("domain", "").strip()
            if not domain:
                return {"error": "domain is required"}
            collector = SubfinderCollector()
            findings = await collector.run(domain)
            return {
                "domain": domain,
                "tool_available": collector.is_available(),
                "finding_count": len(findings),
                "findings": findings_to_dict(findings),
            }

        elif tool_name == "osint_secret_scan":
            path = arguments.get("path", "").strip()
            if not path:
                return {"error": "path is required"}
            collector = GitleaksCollector()
            findings = await collector.run(path)
            return {
                "path": path,
                "tool_available": collector.is_available(),
                "finding_count": len(findings),
                "findings": findings_to_dict(findings),
            }

        elif tool_name == "osint_social_scrape":
            username = arguments.get("username", "").strip().lstrip("@")
            if not username:
                return {"error": "username is required"}
            collector = SnscrapeCollector()
            findings = await collector.run(username)
            return {
                "username": username,
                "tool_available": collector.is_available(),
                "finding_count": len(findings),
                "findings": findings_to_dict(findings),
            }

        elif tool_name == "osint_url_archive":
            domain = arguments.get("domain", "").strip()
            if not domain:
                return {"error": "domain is required"}
            collector = GauCollector()
            findings = await collector.run(domain)
            return {
                "domain": domain,
                "tool_available": collector.is_available(),
                "finding_count": len(findings),
                "findings": findings_to_dict(findings),
            }

        return {"error": f"Unknown OSINT tool: {tool_name}"}

    except Exception as e:
        logger.error("OSINT MCP error in %s: %s", tool_name, e)
        return {"error": str(e)}
