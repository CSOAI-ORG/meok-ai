"""
MCP Tools — Intelligence Layer
Knowledge graph queries, smart routing analysis, voice pipeline status,
and product catalog access.
"""

from __future__ import annotations

import json
import logging
from typing import Any

logger = logging.getLogger("meok.mcp.intelligence")

INTELLIGENCE_TOOLS = [
    {
        "name": "knowledge_graph_query",
        "description": (
            "Query the knowledge graph memory — find entity relationships, "
            "emotional timelines, and compressed identity narratives. "
            "Built from the 4-layer compression: L0 raw → L1 episode → L2 thematic → L3 identity."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "entity_name": {"type": "string", "description": "Entity to query (e.g. 'Nick', 'Max', 'Valorant')"},
                "query_type": {
                    "type": "string",
                    "enum": ["relationships", "emotional_timeline", "summary", "triplets"],
                    "default": "summary",
                    "description": "Type of query to run",
                },
                "compress_episode": {
                    "type": "string",
                    "description": "Optional: compress a new episode text into the graph",
                },
                "entity_id": {"type": "string", "description": "Optional: direct entity ID lookup"},
            },
        },
    },
    {
        "name": "smart_route_analyze",
        "description": (
            "Analyse a task/message through the 4-dimension SmartRouter: "
            "Privacy (PII detection → local), Complexity (simple/complex), "
            "Cost (budget tracking), Latency (voice realtime mode). "
            "Returns routing decision with reason."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "content": {"type": "string", "description": "Content to analyse for routing"},
                "is_voice": {"type": "boolean", "default": False, "description": "Is this a voice/realtime request?"},
                "task_type": {"type": "string", "description": "Optional task type hint"},
            },
            "required": ["content"],
        },
    },
    {
        "name": "voice_pipeline_status",
        "description": "Get voice pipeline metrics — E2E latency, below-500ms %, component breakdown.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "reset_metrics": {"type": "boolean", "default": False, "description": "Reset metrics after reading"},
            },
        },
    },
    {
        "name": "product_catalog",
        "description": (
            "Get the MEOK product catalog — Stripe tiers, pricing, features, "
            "market data, affiliate program, gaming partnerships, and website pages. "
            "Use this to answer pricing questions, build checkout flows, or configure Stripe."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "section": {
                    "type": "string",
                    "enum": ["all", "stripe_products", "pricing_philosophy", "affiliate_program",
                             "gaming_partnerships", "market_data", "onboarding", "compliance",
                             "platforms", "website_pages"],
                    "default": "all",
                    "description": "Which section of the catalog to return",
                },
                "vertical": {
                    "type": "string",
                    "enum": ["core", "gaming", "family", "memory", "care"],
                    "description": "Filter stripe_products by vertical (optional)",
                },
            },
        },
    },
    {
        "name": "market_intelligence",
        "description": (
            "Query MEOK's market research and competitive intelligence. "
            "Covers market sizing, competitor analysis, pricing benchmarks, "
            "regulatory landscape, and strategic positioning."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "topic": {
                    "type": "string",
                    "description": "Topic to query (e.g. 'gaming market', 'family safety competitors', 'pricing', 'EU regulations')",
                },
            },
            "required": ["topic"],
        },
    },
]

# Market intelligence knowledge base (extracted from business brief)
_MARKET_KB = {
    "consumer_ai_companion": {
        "market_2026_bn": 8.5,
        "market_2030_bn": 35,
        "cagr_pct": 30,
        "key_insight": "2026-2027 is the critical window for early adopter acquisition",
        "us_share_pct": 40,
        "willingness_to_pay": "50% US consumers won't pay for generic AI; 53% will pay for data safety guarantee",
        "eu_premium": "EU consumers show 34% higher WTP for sovereign solutions",
    },
    "gaming_ai": {
        "market_2030_bn": 34.10,
        "cagr_pct": 40.7,
        "north_america_share_pct": 43.2,
        "direct_competitors": ["NVIDIA ACE", "Inworld AI"],
        "differentiation": "MEOK is player-bound (transfers across games); competitors are game-world-bound",
        "priority_games": ["Minecraft", "Roblox", "CS2", "Valorant", "Fortnite"],
    },
    "family_safety": {
        "market_2026_bn": 2.5,
        "market_2032_bn": 6.8,
        "cagr_pct": 18,
        "churn": "Below 15% for established solutions",
        "competitors": {
            "Circle (Disney)": "$14.99/month, network-level control, limited AI",
            "Bark": "$14-99/month, cloud-dependent, reactive alerts",
            "Qustodio": "Legacy, surveillance-based",
            "Google Family Link": "Platform-native, no emotional intelligence",
        },
        "meok_differentiator": "Care-based (not surveillance), local-first, emotional intelligence, child consent",
    },
    "sovereign_ai": {
        "market_2026_bn": 80,
        "growth_pct": 35.6,
        "aws_investment": "€7.8B committed to European Sovereign Cloud through 2040",
    },
    "pricing_benchmarks": {
        "ChatGPT Plus": "$20/month",
        "Claude Pro": "$20/month",
        "Notion AI": "$10/month",
        "Mem.ai": "$15/month",
        "Rewind.ai": "$19/month",
        "Personal.ai": "$40/month",
        "Circle (Disney)": "$14.99/month",
        "Bark": "$14-99/month",
        "MEOK positioning": "$9.99-49.99/month depending on vertical and tier",
    },
    "eu_regulations": {
        "GDPR": "General data protection; right to erasure; data portability",
        "GDPR-K": "Children's provisions; enhanced protections; up to €20M or 4% global revenue",
        "UK Online Safety Act": "Age assurance; harmful content duties",
        "California AB 2273": "Children's data privacy; age-appropriate design",
        "EU AI Act": "Risk-based framework; transparency requirements",
        "COPPA": "US children under 13; parental consent required",
    },
    "vector_db_benchmarks": {
        "Qdrant in-memory": "15-30ms p95, 95%+ recall",
        "Milvus HNSW": "25-50ms p95, 95%+ recall",
        "Milvus GPU": "5-15ms p95, 95%+ recall",
        "Pinecone serverless": "45-80ms p95, 92-96% recall",
        "Weaviate": "30-70ms p95, 90-94% recall",
        "pgvector + HNSW": "Our current implementation — moderate performance, excellent Postgres integration",
    },
    "llm_context_windows": {
        "GPT-5.4 Pro": "1M tokens, ~300K effective",
        "Claude 4.6 Opus": "1M tokens, ~500K with thinking summaries",
        "Claude 4.6 Sonnet": "200K tokens, ~150K sustained",
        "Gemini 3.1 Pro": "1M+ tokens, ~400K with caching",
        "cost_note": "GPT-5: $3/$15 per 1M in/out; Claude Sonnet: $3/$15; Gemini Flash: $0.15/$0.60",
    },
}


async def handle_intelligence(tool_name: str, arguments: dict) -> Any:
    try:
        if tool_name == "knowledge_graph_query":
            from memory.knowledge_graph import get_compressor
            kg = get_compressor()

            if arguments.get("compress_episode"):
                result = kg.compress_episode(arguments["compress_episode"])
                return {
                    "action": "compressed",
                    "triplets_added": len(result.triplets),
                    "triplets": [
                        {"subject": t.subject, "predicate": t.predicate, "obj": t.object,
                         "sentiment": t.sentiment, "confidence": t.confidence}
                        for t in result.triplets
                    ],
                    "entities": result.entities_found,
                }

            entity_name = arguments.get("entity_name") or arguments.get("entity_id")
            query_type = arguments.get("query_type", "summary")

            if not entity_name:
                # Return all entities
                entities = list(kg.kg.entities.values())
                return {
                    "total_entities": len(entities),
                    "entity_names": [e.name for e in entities],
                    "total_relationships": len(kg.kg.relationships),
                }

            if query_type == "emotional_timeline":
                timeline = kg.kg.get_emotional_timeline(entity_name)
                return {"entity": entity_name, "emotional_timeline": timeline}
            elif query_type == "relationships":
                data = kg.kg.query_entity(entity_name)
                return data
            elif query_type == "triplets":
                entity = kg.kg.get_or_create_entity(entity_name, "unknown")
                rels = kg.kg.relationships.get(entity.entity_id, [])
                return {
                    "entity": entity_name,
                    "relationships": [
                        {"target": r.target_name, "predicate": r.predicate,
                         "sentiment": r.sentiment, "strength": r.strength,
                         "temporal_evolution": r.temporal_evolution[-3:]}
                        for r in rels
                    ],
                }
            else:  # summary
                narrative = kg.build_identity_narrative()
                entity_data = kg.kg.query_entity(entity_name)
                return {
                    "entity": entity_name,
                    "data": entity_data,
                    "narrative_excerpt": narrative[:500] if narrative else None,
                }

        elif tool_name == "smart_route_analyze":
            from core.llm_router import SmartRouter
            router = SmartRouter()
            decision = router.analyze(
                content=arguments["content"],
                is_voice=arguments.get("is_voice", False),
                task_type=arguments.get("task_type"),
            )
            return {
                "task_type": decision.task_type,
                "force_local": decision.force_local,
                "reason": decision.reason,
                "privacy_triggered": decision.privacy_triggered,
                "cost_preference": decision.cost_preference,
                "latency_mode": decision.latency_mode,
                "complexity": decision.complexity,
            }

        elif tool_name == "voice_pipeline_status":
            try:
                from core.voice_pipeline import get_pipeline
                pipeline = get_pipeline()
                metrics = pipeline.get_metrics()
                if arguments.get("reset_metrics"):
                    pipeline.metrics = type(pipeline.metrics)()
                return metrics
            except Exception as e:
                return {"status": "unavailable", "reason": str(e)}

        elif tool_name == "product_catalog":
            import os
            catalog_path = os.path.join(
                os.path.dirname(__file__), "..", "..", "docs", "product_catalog.json"
            )
            catalog_path = os.path.normpath(catalog_path)
            if not os.path.exists(catalog_path):
                return {"error": "Product catalog not found at docs/product_catalog.json"}
            with open(catalog_path) as f:
                catalog = json.load(f)

            section = arguments.get("section", "all")
            vertical = arguments.get("vertical")

            if section == "all":
                if vertical and "stripe_products" in catalog:
                    catalog = dict(catalog)
                    catalog["stripe_products"] = [
                        p for p in catalog["stripe_products"] if p.get("vertical") == vertical
                    ]
                return catalog

            result = catalog.get(section)
            if result is None:
                return {"error": f"Section '{section}' not found in catalog"}

            if section == "stripe_products" and vertical:
                result = [p for p in result if p.get("vertical") == vertical]

            return {section: result}

        elif tool_name == "market_intelligence":
            topic = arguments["topic"].lower()
            results = {}

            # Match topic keywords to KB sections
            keyword_map = {
                "gaming": ["gaming_ai"],
                "family": ["family_safety"],
                "children": ["family_safety", "eu_regulations"],
                "sovereign": ["sovereign_ai", "consumer_ai_companion"],
                "privacy": ["sovereign_ai", "eu_regulations"],
                "pricing": ["pricing_benchmarks"],
                "competitor": ["gaming_ai", "family_safety", "pricing_benchmarks"],
                "market": ["consumer_ai_companion", "gaming_ai", "family_safety", "sovereign_ai"],
                "eu": ["eu_regulations", "sovereign_ai"],
                "regulation": ["eu_regulations"],
                "vector": ["vector_db_benchmarks"],
                "database": ["vector_db_benchmarks"],
                "llm": ["llm_context_windows"],
                "model": ["llm_context_windows", "pricing_benchmarks"],
                "memory": ["vector_db_benchmarks", "llm_context_windows"],
            }

            matched_sections = set()
            for keyword, sections in keyword_map.items():
                if keyword in topic:
                    matched_sections.update(sections)

            if not matched_sections:
                matched_sections = set(_MARKET_KB.keys())

            for section in matched_sections:
                results[section] = _MARKET_KB[section]

            return {
                "topic": arguments["topic"],
                "intelligence": results,
                "available_topics": list(_MARKET_KB.keys()),
            }

        return {"error": f"Unknown intelligence tool: {tool_name}"}

    except Exception as e:
        logger.error("Intelligence MCP error in %s: %s", tool_name, e)
        return {"error": str(e)}
