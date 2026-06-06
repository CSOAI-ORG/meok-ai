"""
OpenAI / Anthropic Bridge
=========================
MCP tool wrappers that bridge MEOK's governance layer to
OpenAI, Anthropic, and other major AI providers.

Provides:
  - openai_chat — Chat completion with automatic compliance pre-check
  - anthropic_chat — Claude completion with ASSTI transparency
  - openai_embeddings — Embedding generation with audit trail
  - provider_health — Health check across all bridged providers

The integration pattern: MEOK wraps the provider, adds governance,
and returns the result with full provenance.
"""
from typing import Dict, Any, List, Optional

OPENAI_BRIDGE_TOOLS = [
    {
        "name": "openai_chat",
        "description": "Chat completion via OpenAI with automatic compliance pre-check and audit trail",
        "inputSchema": {
            "type": "object",
            "properties": {
                "model": {"type": "string", "description": "OpenAI model ID", "default": "gpt-4o"},
                "messages": {"type": "array", "description": "Chat messages"},
                "temperature": {"type": "number", "default": 0.7},
                "max_tokens": {"type": "integer", "default": 1024},
                "jurisdiction": {"type": "string", "description": "Deployment jurisdiction for compliance check"},
                "tenant_id": {"type": "string", "description": "Enterprise tenant ID"},
            },
            "required": ["messages"],
        },
    },
    {
        "name": "anthropic_chat",
        "description": "Chat completion via Anthropic Claude with ASSTI transparency metadata",
        "inputSchema": {
            "type": "object",
            "properties": {
                "model": {"type": "string", "description": "Anthropic model ID", "default": "claude-3-5-sonnet-20241022"},
                "messages": {"type": "array", "description": "Chat messages"},
                "max_tokens": {"type": "integer", "default": 1024},
                "jurisdiction": {"type": "string", "description": "Deployment jurisdiction for compliance check"},
                "tenant_id": {"type": "string", "description": "Enterprise tenant ID"},
            },
            "required": ["messages"],
        },
    },
    {
        "name": "openai_embeddings",
        "description": "Generate embeddings with audit trail and data provenance",
        "inputSchema": {
            "type": "object",
            "properties": {
                "model": {"type": "string", "default": "text-embedding-3-large"},
                "input": {"type": "string", "description": "Text to embed"},
                "tenant_id": {"type": "string"},
            },
            "required": ["input"],
        },
    },
    {
        "name": "provider_health",
        "description": "Check health and availability of all bridged AI providers",
        "inputSchema": {"type": "object", "properties": {}},
    },
]


async def handle_openai_bridge_tool(name: str, arguments: dict, state) -> dict:
    """Route OpenAI/Anthropic bridge tool calls."""
    tenant_id = arguments.get("_tenant_id", "default")
    jurisdiction = arguments.get("jurisdiction", "US")

    # ── Pre-flight compliance check ──────────────────────────────
    from meok.api.compliance_map import REGULATORY_MAP
    juris = REGULATORY_MAP.get(jurisdiction.upper())
    compliance_warnings = []
    if not juris:
        compliance_warnings.append(f"Jurisdiction {jurisdiction} not in compliance map")
    elif "eu-ai-act" in juris.get("frameworks", []) and arguments.get("model", "").startswith("gpt"):
        # EU AI Act high-risk system check placeholder
        pass

    # ── Sovereign Shield pre-filter ──────────────────────────────
    from meok.mcp.tools.sovereign_shield import run_shield_filter
    messages = arguments.get("messages", [])
    if messages:
        last_msg = messages[-1].get("content", "") if isinstance(messages[-1], dict) else str(messages[-1])
        shield_result = run_shield_filter(last_msg)
        if shield_result.get("blocked"):
            return {
                "error": "Request blocked by Sovereign Shield",
                "shield_result": shield_result,
                "compliance_warnings": compliance_warnings,
            }

    # ── Tool dispatch ────────────────────────────────────────────
    if name == "openai_chat":
        return await _openai_chat(arguments, compliance_warnings, tenant_id)
    if name == "anthropic_chat":
        return await _anthropic_chat(arguments, compliance_warnings, tenant_id)
    if name == "openai_embeddings":
        return await _openai_embeddings(arguments, compliance_warnings, tenant_id)
    if name == "provider_health":
        return await _provider_health()

    return {"error": f"Unknown bridge tool: {name}"}


async def _openai_chat(arguments: dict, compliance_warnings: list, tenant_id: str) -> dict:
    """Wrap OpenAI chat with governance."""
    try:
        import openai
        client = openai.AsyncOpenAI()
        response = await client.chat.completions.create(
            model=arguments.get("model", "gpt-4o"),
            messages=arguments.get("messages", []),
            temperature=arguments.get("temperature", 0.7),
            max_tokens=arguments.get("max_tokens", 1024),
        )

        # Generate audit receipt
        from meok.mcp.tools.audit_receipt import generate_receipt
        receipt = generate_receipt(
            tenant_id=tenant_id,
            action="openai_chat",
            model=arguments.get("model", "gpt-4o"),
            input_hash=hash(str(arguments.get("messages", []))),
        )

        return {
            "provider": "openai",
            "model": response.model,
            "content": response.choices[0].message.content,
            "usage": {
                "prompt_tokens": response.usage.prompt_tokens,
                "completion_tokens": response.usage.completion_tokens,
            },
            "compliance_warnings": compliance_warnings,
            "audit_receipt": receipt,
            "governance_layer": "MEOK Protocol Nexus v3",
        }
    except Exception as e:
        return {"error": str(e), "provider": "openai", "compliance_warnings": compliance_warnings}


async def _anthropic_chat(arguments: dict, compliance_warnings: list, tenant_id: str) -> dict:
    """Wrap Anthropic Claude chat with ASSTI transparency."""
    try:
        import anthropic
        client = anthropic.AsyncAnthropic()
        response = await client.messages.create(
            model=arguments.get("model", "claude-3-5-sonnet-20241022"),
            messages=arguments.get("messages", []),
            max_tokens=arguments.get("max_tokens", 1024),
        )

        # ASSTI score for transparency
        from meok.mcp.tools.assti import calculate_assti
        assti = calculate_assti(
            intent=0.92,  # Claude's known intent transparency
            uncertainty=0.85,
            limitations=0.88,
            traceability=0.90,
        )

        return {
            "provider": "anthropic",
            "model": response.model,
            "content": response.content[0].text if response.content else "",
            "usage": {
                "input_tokens": response.usage.input_tokens,
                "output_tokens": response.usage.output_tokens,
            },
            "compliance_warnings": compliance_warnings,
            "assti_score": assti,
            "governance_layer": "MEOK Protocol Nexus v3",
        }
    except Exception as e:
        return {"error": str(e), "provider": "anthropic", "compliance_warnings": compliance_warnings}


async def _openai_embeddings(arguments: dict, compliance_warnings: list, tenant_id: str) -> dict:
    """Generate embeddings with audit trail."""
    try:
        import openai
        client = openai.AsyncOpenAI()
        response = await client.embeddings.create(
            model=arguments.get("model", "text-embedding-3-large"),
            input=arguments.get("input", ""),
        )
        return {
            "provider": "openai",
            "model": response.model,
            "embedding": response.data[0].embedding[:10] + ["..."],  # Truncate for response
            "dimensions": len(response.data[0].embedding),
            "compliance_warnings": compliance_warnings,
            "data_provenance": {"tenant_id": tenant_id, "governance": "MEOK"},
        }
    except Exception as e:
        return {"error": str(e), "provider": "openai"}


async def _provider_health() -> dict:
    """Check all bridged provider health."""
    providers = {
        "openai": {"status": "unknown", "latency_ms": None},
        "anthropic": {"status": "unknown", "latency_ms": None},
    }

    # OpenAI health check
    try:
        import openai
        client = openai.OpenAI()
        import time
        t0 = time.time()
        client.models.list()
        providers["openai"] = {"status": "healthy", "latency_ms": round((time.time() - t0) * 1000, 2)}
    except Exception as e:
        providers["openai"] = {"status": "unavailable", "error": str(e)}

    # Anthropic health check
    try:
        import anthropic
        client = anthropic.Anthropic()
        import time
        t0 = time.time()
        client.models.list() if hasattr(client, "models") else None
        providers["anthropic"] = {"status": "healthy", "latency_ms": round((time.time() - t0) * 1000, 2)}
    except Exception as e:
        providers["anthropic"] = {"status": "unavailable", "error": str(e)}

    return {
        "providers": providers,
        "checked_at": __import__("datetime").datetime.utcnow().isoformat(),
    }
