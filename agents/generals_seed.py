"""
MEOK Council Generals Seed
SOV3 Task P1: Register 12 Generals + 396 nodes = 408 agents total (hard cap: 410)

Architecture (from SOV3_CLAUDE_CODE_TASKS.md):
  12 councils × 1 General (trust 0.95) + 33 nodes = 408 agents
  Node tiers per council:
    T1: 5 nodes, trust 0.90 — Senior analysts, cross-council comms
    T2: 8 nodes, trust 0.85 — Specialist evaluators
    T3: 10 nodes, trust 0.80 — Workers — execute analysis
    T4: 5 nodes, trust 0.75 — Challengers — adversarial, red team
    T5: 5 nodes, trust 0.80 — Bridge agents — cross-domain links
  Naming: {Council}-General, {Council}-T{tier}-{n:02d}
"""

from __future__ import annotations
import logging
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from meok.agents.registry import AgentRegistry

logger = logging.getLogger(__name__)

# ── Council definitions ───────────────────────────────────────────────────────

COUNCIL_GENERALS = [
    {
        "name": "Defence",
        "domain": "NATO, Five Eyes, DEF-1 OS",
        "capabilities": ["security", "analysis", "planning", "monitoring"],
        "neural_model": "threat_detection_nn",
    },
    {
        "name": "Healthcare",
        "domain": "Clinical AI, patient safety",
        "capabilities": ["analysis", "care_validation", "monitoring"],
        "neural_model": None,
    },
    {
        "name": "Finance",
        "domain": "COBOL Bridge, banking",
        "capabilities": ["analysis", "code_execution", "monitoring"],
        "neural_model": None,
    },
    {
        "name": "AI-Governance",
        "domain": "CSOAI certification, ISO/NIST",
        "capabilities": ["analysis", "monitoring", "planning"],
        "neural_model": None,
    },
    {
        "name": "Research",
        "domain": "ArXiv, consciousness, IIT",
        "capabilities": ["neural_inference", "creativity", "analysis"],
        "neural_model": None,
    },
    {
        "name": "Operations",
        "domain": "MCP servers, CI/CD, infra",
        "capabilities": ["code_execution", "monitoring", "planning"],
        "neural_model": None,
    },
    {
        "name": "Ethics",
        "domain": "Maternal Covenant enforcement",
        "capabilities": ["care_validation", "analysis", "monitoring"],
        "neural_model": ["care_validation_nn", "care_pattern_analyzer"],
    },
    {
        "name": "Strategy",
        "domain": "May 26, partnerships, market",
        "capabilities": ["planning", "analysis", "communication"],
        "neural_model": "partnership_detection_ml",
    },
    {
        "name": "Integration",
        "domain": "MCP bridging, ONEOS, APIs",
        "capabilities": ["code_execution", "memory_operations", "monitoring"],
        "neural_model": None,
    },
    {
        "name": "Innovation",
        "domain": "MAP-Elites, dreaming, novelty",
        "capabilities": ["creativity", "neural_inference", "analysis"],
        "neural_model": "creativity_assessment_nn",
    },
    {
        "name": "Stewardship",
        "domain": "IP tracking, provenance",
        "capabilities": ["monitoring", "memory_operations", "analysis"],
        "neural_model": "relationship_evolution_nn",
    },
    {
        "name": "Continuity",
        "domain": "memU, identity persistence",
        "capabilities": ["memory_operations", "planning", "monitoring"],
        "neural_model": None,
    },
]

# T1-T5 node tiers per council (total: 5+8+10+5+5 = 33 per council)
NODE_TIERS = [
    {"tier": 1, "count": 5, "trust": 0.90, "role": "Senior analysts, cross-council comms"},
    {"tier": 2, "count": 8, "trust": 0.85, "role": "Specialist evaluators"},
    {"tier": 3, "count": 10, "trust": 0.80, "role": "Workers — execute analysis and tasks"},
    {"tier": 4, "count": 5, "trust": 0.75, "role": "Challengers — adversarial, red team"},
    {"tier": 5, "count": 5, "trust": 0.80, "role": "Bridge agents — cross-domain links"},
]

GENERAL_TRUST = 0.95
TOTAL_EXPECTED = 12 + 12 * 33  # 12 generals + 396 nodes = 408


# ── Capability name → AgentCapability enum ───────────────────────────────────

def _resolve_capabilities(names: list[str]):
    """Convert string capability names to AgentCapability enum values."""
    from meok.agents.registry import AgentCapability

    _map = {
        "security": AgentCapability.SECURITY,
        "analysis": AgentCapability.ANALYSIS,
        "planning": AgentCapability.PLANNING,
        "monitoring": AgentCapability.MONITORING,
        "care_validation": AgentCapability.ANALYSIS,   # closest match
        "code_execution": AgentCapability.CODE_EXECUTION,
        "neural_inference": AgentCapability.NEURAL_INFERENCE,
        "creativity": AgentCapability.CREATIVE,
        "communication": AgentCapability.COMMUNICATION,
        "memory_operations": AgentCapability.MEMORY_OPERATIONS,
    }
    seen = set()
    result = []
    for n in names:
        cap = _map.get(n)
        if cap and cap not in seen:
            result.append(cap)
            seen.add(cap)
    return result


# ── Main seed function ────────────────────────────────────────────────────────

async def seed_proper_council(registry: "AgentRegistry") -> dict:
    """
    Purge all existing agents, then register 12 Generals + 396 nodes (408 total).
    Called by MCP tool seed_proper_council.
    """
    # Step 1: Purge
    purge_result = await registry.purge_all_agents()
    logger.info("generals_seed: purged %d agents", purge_result["purged"])

    registered = []
    errors = []

    for council in COUNCIL_GENERALS:
        caps = _resolve_capabilities(council["capabilities"])
        council_name = council["name"]

        # Register General
        try:
            gen = await registry.register_agent(
                name=f"{council_name}-General",
                description=(
                    f"Division General for {council_name} council. "
                    f"Domain: {council['domain']}. Trust: {GENERAL_TRUST}."
                ),
                capabilities=caps,
                trust_level=GENERAL_TRUST,
                metadata={
                    "council": council_name,
                    "tier": "general",
                    "domain": council["domain"],
                    "neural_model": council["neural_model"],
                    "role": "Division General — governs 33 council nodes",
                },
            )
            registered.append(gen.name)
        except Exception as e:
            errors.append(f"General {council_name}: {e}")
            logger.error("generals_seed: failed to register %s General: %s", council_name, e)

        # Register T1–T5 nodes
        for tier_spec in NODE_TIERS:
            tier = tier_spec["tier"]
            for n in range(1, tier_spec["count"] + 1):
                node_name = f"{council_name}-T{tier}-{n:02d}"
                # T5 bridge agents get extra capability
                node_caps = caps.copy()
                if tier == 5:
                    from meok.agents.registry import AgentCapability
                    if AgentCapability.COMMUNICATION not in node_caps:
                        node_caps.append(AgentCapability.COMMUNICATION)
                # T4 challengers (red team) get security capability
                if tier == 4:
                    from meok.agents.registry import AgentCapability
                    if AgentCapability.SECURITY not in node_caps:
                        node_caps.append(AgentCapability.SECURITY)

                try:
                    node = await registry.register_agent(
                        name=node_name,
                        description=(
                            f"{tier_spec['role']} for {council_name} council. "
                            f"Tier {tier}, node {n}."
                        ),
                        capabilities=node_caps,
                        trust_level=tier_spec["trust"],
                        metadata={
                            "council": council_name,
                            "tier": tier,
                            "tier_role": tier_spec["role"],
                            "neural_model": council["neural_model"] if tier <= 2 else None,
                        },
                    )
                    registered.append(node.name)
                except Exception as e:
                    errors.append(f"{node_name}: {e}")
                    logger.error("generals_seed: failed to register %s: %s", node_name, e)

    generals_registered = sum(1 for n in registered if n.endswith("-General"))
    nodes_registered = len(registered) - generals_registered

    result = {
        "registered": len(registered),
        "generals": generals_registered,
        "nodes": nodes_registered,
        "expected": TOTAL_EXPECTED,
        "errors": errors,
        "agent_cap": registry.MAX_AGENTS,
        "agents_in_registry": len(registry.agents),
        "councils": [c["name"] for c in COUNCIL_GENERALS],
    }
    logger.info(
        "generals_seed: complete — %d registered (%d generals + %d nodes), %d errors",
        len(registered), generals_registered, nodes_registered, len(errors),
    )
    return result
