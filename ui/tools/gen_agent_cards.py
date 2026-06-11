#!/usr/bin/env python3
"""
MEOK A2A Flagship Agent Card generator
======================================
Generates one A2A-spec agent card per flagship MCP at
`public/.well-known/agent-cards/<slug>.json` so A2A directories
(agentcard.json, wellknown.cards, A2A registries) can discover
and index them. Run from meok/ui/: `python3 tools/gen_agent_cards.py`

Source: hardcoded list of 15 flagship MCPs (the highest-leverage
A2A + compliance surfaces). Update the FLAGShips list when the
fleet changes.
"""
from __future__ import annotations
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public/.well-known/agent-cards"
OUT.mkdir(parents=True, exist_ok=True)

# Canonical meok-ai-labs provider block
PROVIDER = {
    "organization": "MEOK AI Labs (CSOAI LTD, UK Companies House 16939677)",
    "url": "https://meok.ai",
}

REGISTRY = "https://meok.ai/.well-known/agents.json"
VERIFIER = "https://proofof.ai/verify"
PYPI_USER = "https://pypi.org/user/MEOK_AI_Labs/"
GITHUB_ORG = "https://github.com/CSOAI-ORG"

# 15 flagships — A2A primitives + compliance cornerstones
# slug, pypi, protocol stage, one_liner, skills
FLAGS = [
    # ── A2A substrate (7 of 12 primitives) ─────────────────────────────────
    ("agent-identity-trust-mcp",
     "W3C DID + verifiable credentials → trust score",
     ["identity", "trust", "did", "w3c-vc"],
     "https://mcp.meok.ai/agent-identity-trust-mcp"),
    ("agent-data-residency-mcp",
     "GDPR Chapter V transfer-basis runtime guard",
     ["gdpr", "data-residency", "transfer-basis", "schrems-ii"],
     "https://mcp.meok.ai/agent-data-residency-mcp"),
    ("agent-policy-enforcement-mcp",
     "Per-agent-pair IAM via evaluate_call",
     ["policy", "iam", "rbac", "evaluate-call"],
     "https://mcp.meok.ai/agent-policy-enforcement-mcp"),
    ("agent-prompt-injection-firewall-mcp",
     "OWASP LLM01 scan on prompts + RAG + tool args",
     ["owasp-llm01", "prompt-injection", "firewall", "rag-scan"],
     "https://mcp.meok.ai/agent-prompt-injection-firewall-mcp"),
    ("agent-rate-limiter-mcp",
     "Sliding window + concurrency grants",
     ["rate-limit", "throttle", "concurrency"],
     "https://mcp.meok.ai/agent-rate-limiter-mcp"),
    ("agent-handoff-certified-mcp",
     "Signed provenance chain on each handoff",
     ["handoff", "provenance", "signature"],
     "https://mcp.meok.ai/agent-handoff-certified-mcp"),
    ("agent-audit-logger-mcp",
     "Hash-chained HMAC-signed log",
     ["audit", "hash-chain", "tamper-evident", "sigil"],
     "https://mcp.meok.ai/agent-audit-logger-mcp"),
    # ── Compliance cornerstones (8 of 47) ─────────────────────────────────
    ("eu-ai-act-compliance-mcp",
     "EU AI Act risk classification + Article 50 + Annex IV across all 410 articles",
     ["eu-ai-act", "risk-classification", "annex-iv", "article-50"],
     "https://mcp.meok.ai/eu-ai-act-compliance-mcp"),
    ("dora-compliance-mcp",
     "DORA ICT risk + Article 17 incident reporting + Article 28 third-party register",
     ["dora", "ict-risk", "incident-reporting"],
     "https://mcp.meok.ai/dora-compliance-mcp"),
    ("nis2-compliance-mcp",
     "NIS2 essential-entity obligations + NCSC-NL/BSI register + 24h incident clock",
     ["nis2", "ncsc-nl", "bsi", "incident-clock"],
     "https://mcp.meok.ai/nis2-compliance-mcp"),
    ("cra-compliance-mcp",
     "Cyber Resilience Act Annex I essential-cyber-requirements + 5-year support clock",
     ["cra", "annex-i", "support-clock"],
     "https://mcp.meok.ai/cra-compliance-mcp"),
    ("ai-bom-mcp",
     "AI Bill of Materials — every model + dataset + tool in the stack, signed",
     ["ai-bom", "supply-chain", "sbom", "model-lineage"],
     "https://mcp.meok.ai/ai-bom-mcp"),
    ("watermark-attest-mcp",
     "C2PA + EU AI Act Article 50 watermarking + AI-content manifest emitter",
     ["c2pa", "watermark", "ai-content-marking", "article-50"],
     "https://mcp.meok.ai/watermark-attest-mcp"),
    ("meok-attestation-verify",
     "Independent verifier — pip install meok-attestation-verify, no account needed",
     ["verify", "auditor", "offline", "ed25519"],
     "https://pypi.org/project/meok-attestation-verify/"),
    ("councilof-ai-cert",
     "CSOAI Council of AI certifications — Practitioner / Engineer / Lead Auditor / Fellowship",
     ["certification", "councilof-ai", "auditor", "fellowship"],
     "https://councilof.ai/certify"),
]


def make_card(slug: str, one_liner: str, tags: list[str], mcp_url: str) -> dict:
    return {
        "name": f"MEOK AI Labs — {slug}",
        "version": "1.2.1",
        "url": mcp_url,
        "capabilities": {
            "streaming": True,
            "pushNotifications": False,
            "stateTransitionHistory": True,
        },
        "protocolVersion": "0.3.0",
        "description": f"{one_liner}. Part of the MEOK 294-server A2A + compliance fleet "
                       f"(official MCP Registry, certified June 2026). Each tool emits an "
                       f"HMAC + Ed25519 signed attestation with a public verify URL — your "
                       f"auditor validates offline, no account, no contact with MEOK.",
        "provider": PROVIDER,
        "defaultInputModes": ["application/json", "text/plain"],
        "defaultOutputModes": ["application/json", "text/plain"],
        "documentationUrl": f"https://meok.ai/mcp/{slug.split('-mcp')[0]}",
        "skills": [
            {
                "id": slug,
                "name": slug,
                "description": one_liner,
                "tags": tags,
            }
        ],
        "x-meok": {
            "registry": REGISTRY,
            "verifier": VERIFIER,
            "pypi_user": PYPI_USER,
            "github_org": GITHUB_ORG,
            "flagship": True,
            "ed25519": True,
            "hmac": True,
        },
    }


def main() -> int:
    written = []
    for slug, one_liner, tags, mcp_url in FLAGS:
        card = make_card(slug, one_liner, tags, mcp_url)
        out = OUT / f"{slug}.json"
        out.write_text(json.dumps(card, indent=2) + "\n")
        written.append(out.name)
    # Also write the flagship index (for A2A directories that want one file)
    index = {
        "registry": "MEOK A2A Flagships",
        "version": "1.0",
        "count": len(FLAGS),
        "provider": PROVIDER,
        "url": "https://meok.ai/.well-known/agent-cards/",
        "protocolVersion": "0.3.0",
        "cards": [f"{slug}.json" for slug, *_ in FLAGS],
        "x-meok": {
            "verifier": VERIFIER,
            "pypi_user": PYPI_USER,
            "github_org": GITHUB_ORG,
        },
    }
    (OUT / "_index.json").write_text(json.dumps(index, indent=2) + "\n")
    print(f"wrote {len(written)} flagship cards to {OUT}/")
    print("plus _index.json with {0} entries".format(len(FLAGS)))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
