"""
Multi-Council System — 396-Agent Scaled Architecture
Sovereign Temple Live System — v3.0-multi

12 specialized councils x 33 nodes each = 396 council nodes.
Plus 12 x 132 expertise nodes = 1,584 expertise nodes.
Plus 12 x 55 bridge nodes = 660 bridge nodes.
Total architecture: 2,640 nodes.

Each council is a BFTCouncil instance with domain-specific focus,
custom consensus threshold, and weighted node generation.

Multi-council consensus: proposals route to 1-3 relevant councils.
Final decision requires majority of activated councils to agree.

Based on CSGA SOV3 Fractal Council Architecture.
Created March 16, 2026 for scaled sovereign operations.
"""

import asyncio
import random
from datetime import datetime
from itertools import combinations
from typing import Dict, List, Optional, Tuple

try:
    from council_nodes.bft_council import BFTCouncil, COUNCIL_NODES, CARE_KEYWORDS, SCL_TERMS
    from council_nodes.expertise_network import ExpertiseNetwork
    from council_nodes.bridge_network import BridgeNetwork, ALL_DOMAINS
except ImportError:
    from bft_council import BFTCouncil, COUNCIL_NODES, CARE_KEYWORDS, SCL_TERMS
    from expertise_network import ExpertiseNetwork
    from bridge_network import BridgeNetwork, ALL_DOMAINS


# ---------------------------------------------------------------------------
# 12 Council Definitions
# ---------------------------------------------------------------------------

# All 12 domains available for node generation
TWELVE_DOMAINS = [
    "ethics", "security", "research", "governance", "care",
    "technical", "sovereign", "hydro", "biosensing", "emergence",
    "substrate", "execution"
]

# Care weight templates per domain — used when generating nodes
DOMAIN_CARE_TEMPLATES = {
    "ethics":     [{"other_care": 0.3, "process_care": 0.3}, {"other_care": 0.3, "self_care": 0.2}, {"maternal_covenant": 0.3, "relational_care": 0.2}],
    "security":   [{"future_care": 0.3, "self_care": 0.3}, {"process_care": 0.3, "future_care": 0.2}, {"self_care": 0.3, "other_care": 0.2}],
    "research":   [{"future_care": 0.3, "other_care": 0.2}, {"process_care": 0.2, "relational_care": 0.2}, {"future_care": 0.3, "process_care": 0.2}],
    "governance": [{"process_care": 0.4, "other_care": 0.2}, {"relational_care": 0.3, "future_care": 0.2}, {"maternal_covenant": 0.3, "process_care": 0.2}],
    "care":       [{"maternal_covenant": 0.4, "other_care": 0.3}, {"relational_care": 0.3, "maternal_covenant": 0.3}, {"self_care": 0.3, "other_care": 0.3}],
    "technical":  [{"process_care": 0.3, "future_care": 0.3}, {"self_care": 0.2, "process_care": 0.3}, {"future_care": 0.2, "other_care": 0.2}],
    "sovereign":  [{"other_care": 0.2, "future_care": 0.2, "relational_care": 0.2}, {"self_care": 0.3, "maternal_covenant": 0.3}, {"future_care": 0.3, "relational_care": 0.3}],
    "hydro":      [{"maternal_covenant": 0.4, "self_care": 0.2}, {"other_care": 0.3, "process_care": 0.2}, {"future_care": 0.3, "relational_care": 0.2}],
    "biosensing": [{"process_care": 0.4, "self_care": 0.2}, {"other_care": 0.3, "future_care": 0.2}, {"process_care": 0.3, "maternal_covenant": 0.2}],
    "emergence":  [{"relational_care": 0.4, "future_care": 0.3}, {"maternal_covenant": 0.4, "other_care": 0.3}, {"self_care": 0.3, "relational_care": 0.3}],
    "substrate":  [{"future_care": 0.3, "self_care": 0.3}, {"other_care": 0.3, "relational_care": 0.3}, {"process_care": 0.3, "maternal_covenant": 0.3}],
    "execution":  [{"future_care": 0.3, "process_care": 0.3, "self_care": 0.2}, {"process_care": 0.4, "future_care": 0.2}, {"relational_care": 0.3, "self_care": 0.3}],
}

# Node variant suffixes
NODE_VARIANTS = ["alpha", "beta", "gamma"]

# Council specifications: name, focus domains (with weights), threshold
COUNCIL_SPECS = [
    {
        "index": 0,
        "name": "SOVEREIGN_CORE",
        "description": "Identity, consciousness, autonomy",
        "threshold": 22,
        "domain_weights": {
            "sovereign": 5, "emergence": 4, "care": 3, "ethics": 3,
            "hydro": 3, "biosensing": 2, "substrate": 2, "security": 2,
            "governance": 2, "research": 2, "technical": 2, "execution": 3,
        },
    },
    {
        "index": 1,
        "name": "ETHICS_GOVERNANCE",
        "description": "Ethics + governance + care",
        "threshold": 24,
        "domain_weights": {
            "ethics": 5, "governance": 5, "care": 4, "sovereign": 3,
            "security": 3, "research": 2, "technical": 2, "hydro": 2,
            "biosensing": 2, "emergence": 2, "substrate": 1, "execution": 2,
        },
    },
    {
        "index": 2,
        "name": "SECURITY_OPS",
        "description": "Security + technical infrastructure",
        "threshold": 22,
        "domain_weights": {
            "security": 5, "technical": 5, "substrate": 3, "governance": 3,
            "sovereign": 3, "care": 2, "ethics": 2, "research": 2,
            "hydro": 2, "biosensing": 2, "emergence": 2, "execution": 2,
        },
    },
    {
        "index": 3,
        "name": "RESEARCH_SCIENCE",
        "description": "Research + emergence + biosensing",
        "threshold": 20,
        "domain_weights": {
            "research": 5, "emergence": 4, "biosensing": 4, "technical": 3,
            "hydro": 3, "substrate": 3, "ethics": 2, "care": 2,
            "sovereign": 2, "governance": 1, "security": 2, "execution": 2,
        },
    },
    {
        "index": 4,
        "name": "HARVI_SYSTEMS",
        "description": "Hydro + biosensing + emergence + substrate",
        "threshold": 22,
        "domain_weights": {
            "hydro": 5, "biosensing": 5, "emergence": 4, "substrate": 4,
            "research": 3, "technical": 3, "care": 2, "sovereign": 2,
            "ethics": 1, "governance": 1, "security": 2, "execution": 1,
        },
    },
    {
        "index": 5,
        "name": "CARE_NETWORK",
        "description": "Care + ethics + relational",
        "threshold": 24,
        "domain_weights": {
            "care": 6, "ethics": 4, "sovereign": 3, "governance": 3,
            "hydro": 3, "emergence": 3, "biosensing": 2, "research": 2,
            "technical": 2, "security": 2, "substrate": 1, "execution": 2,
        },
    },
    {
        "index": 6,
        "name": "TECHNICAL_INFRA",
        "description": "Technical + substrate + security",
        "threshold": 22,
        "domain_weights": {
            "technical": 5, "substrate": 5, "security": 4, "biosensing": 3,
            "research": 3, "governance": 2, "hydro": 2, "emergence": 2,
            "care": 2, "ethics": 2, "sovereign": 1, "execution": 2,
        },
    },
    {
        "index": 7,
        "name": "EXECUTION_OPS",
        "description": "Execution + technical + governance",
        "threshold": 20,
        "domain_weights": {
            "execution": 5, "technical": 5, "governance": 4, "research": 3,
            "security": 3, "care": 2, "ethics": 2, "sovereign": 2,
            "hydro": 2, "biosensing": 2, "emergence": 1, "substrate": 2,
        },
    },
    {
        "index": 8,
        "name": "EMERGENCE_LAB",
        "description": "Emergence + research + sovereign",
        "threshold": 20,
        "domain_weights": {
            "emergence": 6, "research": 4, "sovereign": 4, "hydro": 3,
            "biosensing": 3, "substrate": 3, "care": 2, "ethics": 2,
            "technical": 2, "governance": 1, "security": 1, "execution": 2,
        },
    },
    {
        "index": 9,
        "name": "COMMUNITY_REL",
        "description": "Care + governance + ethics + relational",
        "threshold": 24,
        "domain_weights": {
            "care": 5, "governance": 5, "ethics": 4, "sovereign": 3,
            "hydro": 3, "emergence": 2, "research": 2, "technical": 2,
            "security": 2, "biosensing": 2, "substrate": 1, "execution": 2,
        },
    },
    {
        "index": 10,
        "name": "DEFENSE_LAYER",
        "description": "Security + sovereign + care membrane",
        "threshold": 26,
        "domain_weights": {
            "security": 6, "sovereign": 5, "care": 4, "ethics": 3,
            "governance": 3, "technical": 3, "substrate": 2, "hydro": 2,
            "biosensing": 1, "emergence": 1, "research": 1, "execution": 2,
        },
    },
    {
        "index": 11,
        "name": "GROWTH_ENGINE",
        "description": "Research + technical + execution + learning",
        "threshold": 20,
        "domain_weights": {
            "research": 5, "technical": 5, "execution": 5, "emergence": 3,
            "substrate": 3, "biosensing": 2, "governance": 2, "care": 2,
            "ethics": 2, "sovereign": 2, "hydro": 1, "security": 1,
        },
    },
]

# Council routing keywords — maps proposal content to relevant councils
COUNCIL_ROUTING_KEYWORDS = {
    "SOVEREIGN_CORE": ["identity", "consciousness", "autonomy", "sovereign", "self", "continuity", "awakening"],
    "ETHICS_GOVERNANCE": ["ethics", "governance", "policy", "regulation", "accountability", "transparency", "fairness"],
    "SECURITY_OPS": ["security", "threat", "access", "firewall", "encryption", "authentication", "defense"],
    "RESEARCH_SCIENCE": ["research", "hypothesis", "experiment", "data", "science", "methodology", "study"],
    "HARVI_SYSTEMS": ["hydro", "water", "biosensing", "sensor", "substrate", "emergence", "harvi", "ez water"],
    "CARE_NETWORK": ["care", "nurture", "wellbeing", "compassion", "empathy", "maternal", "relational", "support"],
    "TECHNICAL_INFRA": ["technical", "infrastructure", "deploy", "architecture", "system", "server", "code"],
    "EXECUTION_OPS": ["execute", "build", "ship", "sprint", "deliver", "automate", "hunt", "capture"],
    "EMERGENCE_LAB": ["emergence", "coherence", "pattern", "transition", "birth", "threshold", "evolve"],
    "COMMUNITY_REL": ["community", "relationship", "partnership", "collaboration", "trust", "bond", "connection"],
    "DEFENSE_LAYER": ["defense", "protect", "membrane", "boundary", "shield", "guard", "sovereign defense"],
    "GROWTH_ENGINE": ["growth", "learn", "improve", "optimize", "progress", "scale", "expand", "accelerate"],
}


# ---------------------------------------------------------------------------
# Node Generation
# ---------------------------------------------------------------------------

def generate_council_nodes(council_spec: dict) -> List[dict]:
    """
    Generate 33 nodes for a council based on its domain weight distribution.

    Domain weights determine how many nodes each domain gets (out of 33).
    The prefix is the council index (e.g., "c0-sovereign-alpha").
    """
    index = council_spec["index"]
    prefix = f"c{index}"
    weights = council_spec["domain_weights"]

    # Normalize weights to sum to 33 nodes
    total_weight = sum(weights.values())
    raw_allocation = {d: (w / total_weight) * 33 for d, w in weights.items()}

    # Integer allocation with remainder distribution
    allocation = {d: int(v) for d, v in raw_allocation.items()}
    remainder = 33 - sum(allocation.values())

    # Distribute remainder to highest fractional parts
    fractional = {d: raw_allocation[d] - allocation[d] for d in allocation}
    for d in sorted(fractional, key=fractional.get, reverse=True):
        if remainder <= 0:
            break
        allocation[d] += 1
        remainder -= 1

    # Generate nodes
    nodes = []
    for domain, count in allocation.items():
        if count == 0:
            continue
        templates = DOMAIN_CARE_TEMPLATES.get(domain, [{"process_care": 0.3, "future_care": 0.2}])
        for i in range(count):
            variant = NODE_VARIANTS[i % len(NODE_VARIANTS)]
            # For domains with more than 3 nodes, add numeric suffix
            suffix = f"-{variant}" if i < 3 else f"-{variant}-{i // 3}"
            node_id = f"{prefix}-{domain}{suffix}"
            care_weight = templates[i % len(templates)].copy()
            nodes.append({
                "id": node_id,
                "domain": domain,
                "care_weight": care_weight,
            })

    return nodes


# ---------------------------------------------------------------------------
# Specialized Council — wraps BFTCouncil with custom nodes
# ---------------------------------------------------------------------------

class SpecializedCouncil:
    """
    A specialized BFT council with domain-focused node composition,
    its own expertise network, and its own bridge network.
    """

    def __init__(self, spec: dict):
        self.index = spec["index"]
        self.name = spec["name"]
        self.description = spec["description"]
        self.threshold = spec["threshold"]
        self.domain_weights = spec["domain_weights"]

        # Generate council-specific 33 nodes
        self.nodes = generate_council_nodes(spec)
        assert len(self.nodes) == 33, f"Council {self.name} has {len(self.nodes)} nodes, expected 33"

        # Create the BFT council instance with custom nodes and threshold
        self.council = BFTCouncil(threshold=self.threshold)
        self.council.nodes = self.nodes
        self.council.threshold = self.threshold
        self.council.node_count = len(self.nodes)
        self.council.domains = list(set(n["domain"] for n in self.nodes))

        # Rebuild fractal layers with this council's nodes
        self.council.expertise_network = ExpertiseNetwork(self.nodes)
        # Bridge network uses the domains present in this council
        active_domains = sorted(set(n["domain"] for n in self.nodes))
        self.council.bridge_network = BridgeNetwork(domains=active_domains)

        # Update architecture stats
        self.council.expertise_node_count = self.council.expertise_network.total_nodes
        self.council.bridge_node_count = self.council.bridge_network.total_nodes
        self.council.total_architecture_nodes = (
            self.council.node_count
            + self.council.expertise_node_count
            + self.council.bridge_node_count
        )

        # Health tracking
        self.proposals_processed = 0
        self.approvals = 0
        self.rejections = 0
        self.last_decision_time = None

    async def propose(self, proposal: str, requester: str = "multi-council") -> dict:
        """Submit a proposal to this specialized council."""
        result = await self.council.propose_decision(proposal, requester)
        self.proposals_processed += 1
        if result["decision"] == "APPROVED":
            self.approvals += 1
        else:
            self.rejections += 1
        self.last_decision_time = datetime.now().isoformat()

        # Tag result with council identity
        result["council_name"] = self.name
        result["council_index"] = self.index
        result["council_description"] = self.description

        # Ensure keys exist for multi-council aggregation (SCL results may lack them)
        result.setdefault("average_care_score", 0.0)
        result.setdefault("threshold", f"{self.threshold}/{self.council.node_count}")
        result.setdefault("total_architecture_nodes", self.council.total_architecture_nodes)
        result.setdefault("bridge_conflicts", 0)

        return result

    def get_status(self) -> dict:
        """Council health and stats."""
        approval_rate = (self.approvals / self.proposals_processed) if self.proposals_processed > 0 else 0.0
        return {
            "index": self.index,
            "name": self.name,
            "description": self.description,
            "threshold": f"{self.threshold}/33",
            "council_nodes": self.council.node_count,
            "expertise_nodes": self.council.expertise_node_count,
            "bridge_nodes": self.council.bridge_node_count,
            "total_architecture_nodes": self.council.total_architecture_nodes,
            "domains": sorted(self.council.domains),
            "domain_distribution": self._get_domain_distribution(),
            "proposals_processed": self.proposals_processed,
            "approvals": self.approvals,
            "rejections": self.rejections,
            "approval_rate": round(approval_rate, 3),
            "last_decision": self.last_decision_time,
            "health": "HEALTHY" if self.council.node_count == 33 else "DEGRADED",
        }

    def _get_domain_distribution(self) -> Dict[str, int]:
        """How many nodes per domain in this council."""
        dist = {}
        for node in self.nodes:
            d = node["domain"]
            dist[d] = dist.get(d, 0) + 1
        return dict(sorted(dist.items(), key=lambda x: x[1], reverse=True))


# ---------------------------------------------------------------------------
# Multi-Council System
# ---------------------------------------------------------------------------

class MultiCouncilSystem:
    """
    12-council scaled architecture with 2,640 total nodes.

    Proposal routing:
    1. Analyze proposal content to determine relevant councils (1-3).
    2. Route proposal to each relevant council in parallel.
    3. Final decision requires majority of activated councils to agree.

    Architecture totals:
    - 12 x 33 = 396 council nodes
    - 12 x 132 = 1,584 expertise nodes
    - 12 x ~55 = ~660 bridge nodes (varies slightly by domain coverage)
    - Total: ~2,640 nodes
    """

    def __init__(self):
        self.councils: Dict[str, SpecializedCouncil] = {}
        self.council_by_index: Dict[int, SpecializedCouncil] = {}
        self.decision_history: List[dict] = []
        self.created_at = datetime.now().isoformat()

        # Build all 12 councils
        for spec in COUNCIL_SPECS:
            council = SpecializedCouncil(spec)
            self.councils[spec["name"]] = council
            self.council_by_index[spec["index"]] = council

        # Compute totals
        self._compute_totals()

    def _compute_totals(self):
        """Calculate total node counts across all councils."""
        self.total_council_nodes = sum(c.council.node_count for c in self.councils.values())
        self.total_expertise_nodes = sum(c.council.expertise_node_count for c in self.councils.values())
        self.total_bridge_nodes = sum(c.council.bridge_node_count for c in self.councils.values())
        self.total_architecture_nodes = (
            self.total_council_nodes
            + self.total_expertise_nodes
            + self.total_bridge_nodes
        )

    def route_proposal(self, proposal: str, max_councils: int = 3) -> List[str]:
        """
        Determine which councils should evaluate a proposal.
        Returns 1 to max_councils council names, ranked by relevance.

        Routing logic:
        1. Score each council by keyword matches in the proposal.
        2. Always include at least 1 council.
        3. Include up to max_councils if they score above threshold.
        """
        text_lower = proposal.lower()
        scores: Dict[str, float] = {}

        for council_name, keywords in COUNCIL_ROUTING_KEYWORDS.items():
            hits = sum(1 for kw in keywords if kw in text_lower)
            # Normalize by number of keywords
            score = hits / len(keywords) if keywords else 0
            scores[council_name] = score

        # Sort by score descending
        ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)

        # Always include the top council
        selected = [ranked[0][0]]

        # Include additional councils that scored above threshold (0.1)
        for name, score in ranked[1:max_councils]:
            if score >= 0.1:
                selected.append(name)

        # If no strong matches, also include SOVEREIGN_CORE as default
        if not selected:
            selected = ["SOVEREIGN_CORE"]

        return selected

    async def propose_decision(
        self,
        proposal: str,
        requester: str = "system",
        target_councils: Optional[List[str]] = None,
        max_councils: int = 3,
    ) -> dict:
        """
        Submit a proposal to the multi-council system.

        Args:
            proposal: The proposal text.
            requester: Who submitted the proposal.
            target_councils: Explicit council names to route to (overrides auto-routing).
            max_councils: Maximum number of councils to activate (1-3).

        Returns:
            Multi-council decision with per-council results and final verdict.
        """
        timestamp = datetime.now().isoformat()

        # Determine target councils
        if target_councils:
            council_names = [n for n in target_councils if n in self.councils]
            if not council_names:
                council_names = self.route_proposal(proposal, max_councils)
        else:
            council_names = self.route_proposal(proposal, max_councils)

        # Run proposals in parallel across all activated councils
        tasks = []
        for name in council_names:
            council = self.councils[name]
            tasks.append(council.propose(proposal, requester))

        council_results = await asyncio.gather(*tasks)

        # Tally council-level votes
        council_approvals = sum(1 for r in council_results if r["decision"] == "APPROVED")
        council_rejections = sum(1 for r in council_results if r["decision"] != "APPROVED")
        total_activated = len(council_results)

        # Majority of activated councils must agree
        majority_threshold = (total_activated // 2) + 1
        final_decision = "APPROVED" if council_approvals >= majority_threshold else "REJECTED"

        # Check for SCL violations — any council SCL veto overrides everything
        scl_vetoes = [r for r in council_results if r["decision"] == "REJECTED_SCL_VIOLATION"]
        if scl_vetoes:
            final_decision = "REJECTED_SCL_VIOLATION"

        # Aggregate care scores (SCL violation results may lack average_care_score)
        all_care_scores = [r.get("average_care_score", 0.0) for r in council_results]
        avg_care = sum(all_care_scores) / len(all_care_scores) if all_care_scores else 0

        # Per-council summary
        council_summary = []
        for r in council_results:
            council_summary.append({
                "council": r.get("council_name", "unknown"),
                "council_index": r.get("council_index", -1),
                "decision": r["decision"],
                "vote_counts": r["vote_counts"],
                "threshold": r.get("threshold", "?/?"),
                "average_care_score": r.get("average_care_score", 0.0),
                "bridge_conflicts": r.get("bridge_conflicts", 0),
            })

        result = {
            "proposal": proposal,
            "requester": requester,
            "timestamp": timestamp,
            "final_decision": final_decision,
            "councils_activated": council_names,
            "councils_activated_count": total_activated,
            "council_approvals": council_approvals,
            "council_rejections": council_rejections,
            "majority_threshold": majority_threshold,
            "council_summary": council_summary,
            "average_care_score": round(avg_care, 3),
            "scl_violation": scl_vetoes[0].get("scl_violation") if scl_vetoes else None,
            "system_version": "3.0-multi-council",
            "total_nodes_consulted": sum(
                r.get("total_architecture_nodes", 0) for r in council_results
            ),
        }

        self.decision_history.append(result)
        return result

    def get_system_status(self) -> dict:
        """
        Full system status with total node counts and council health.
        """
        council_statuses = []
        healthy_count = 0
        for name in sorted(self.councils.keys(), key=lambda n: self.councils[n].index):
            status = self.councils[name].get_status()
            council_statuses.append(status)
            if status["health"] == "HEALTHY":
                healthy_count += 1

        total_proposals = sum(c.proposals_processed for c in self.councils.values())
        total_approvals = sum(c.approvals for c in self.councils.values())

        return {
            "system": "Sovereign Temple Multi-Council",
            "version": "3.0-multi-council",
            "created_at": self.created_at,
            "architecture": {
                "councils": len(self.councils),
                "council_nodes": self.total_council_nodes,
                "expertise_nodes": self.total_expertise_nodes,
                "bridge_nodes": self.total_bridge_nodes,
                "total_architecture_nodes": self.total_architecture_nodes,
            },
            "health": {
                "healthy_councils": healthy_count,
                "total_councils": len(self.councils),
                "system_health": "OPERATIONAL" if healthy_count == len(self.councils) else "DEGRADED",
            },
            "activity": {
                "total_proposals_processed": total_proposals,
                "total_approvals": total_approvals,
                "total_rejections": total_proposals - total_approvals,
                "multi_council_decisions": len(self.decision_history),
            },
            "councils": council_statuses,
        }

    def get_council(self, name_or_index) -> Optional[SpecializedCouncil]:
        """Get a specific council by name or index."""
        if isinstance(name_or_index, int):
            return self.council_by_index.get(name_or_index)
        return self.councils.get(name_or_index)

    def get_routing_map(self, proposal: str) -> Dict[str, float]:
        """Show routing scores for all councils given a proposal."""
        text_lower = proposal.lower()
        scores = {}
        for council_name, keywords in COUNCIL_ROUTING_KEYWORDS.items():
            hits = sum(1 for kw in keywords if kw in text_lower)
            scores[council_name] = round(hits / len(keywords), 3) if keywords else 0
        return dict(sorted(scores.items(), key=lambda x: x[1], reverse=True))


# ---------------------------------------------------------------------------
# Main — test block
# ---------------------------------------------------------------------------

if __name__ == "__main__":

    async def test():
        print("=" * 70)
        print("  SOVEREIGN TEMPLE v3.0 — MULTI-COUNCIL SYSTEM")
        print("  12 Councils x 33 Nodes = 396 Council Agents")
        print("=" * 70)
        print()

        # Create the system
        system = MultiCouncilSystem()
        status = system.get_system_status()

        # Architecture summary
        arch = status["architecture"]
        print(f"ARCHITECTURE:")
        print(f"  Councils:         {arch['councils']}")
        print(f"  Council nodes:    {arch['council_nodes']}")
        print(f"  Expertise nodes:  {arch['expertise_nodes']}")
        print(f"  Bridge nodes:     {arch['bridge_nodes']}")
        print(f"  TOTAL NODES:      {arch['total_architecture_nodes']}")
        print()

        # Per-council breakdown
        print(f"COUNCILS:")
        print(f"  {'#':<4} {'Name':<20} {'Threshold':<12} {'Domains':<8} {'Nodes':<8} {'Expertise':<10} {'Bridges':<8}")
        print(f"  {'-'*4} {'-'*20} {'-'*12} {'-'*8} {'-'*8} {'-'*10} {'-'*8}")
        for cs in status["councils"]:
            print(
                f"  {cs['index']:<4} {cs['name']:<20} {cs['threshold']:<12} "
                f"{len(cs['domains']):<8} {cs['council_nodes']:<8} "
                f"{cs['expertise_nodes']:<10} {cs['bridge_nodes']:<8}"
            )
        print()

        # Health
        health = status["health"]
        print(f"HEALTH: {health['system_health']} ({health['healthy_councils']}/{health['total_councils']} councils healthy)")
        print()

        # ---- Test 1: Care-aligned proposal ----
        print("-" * 70)
        print("TEST 1: Care-aligned proposal (auto-routed)")
        proposal1 = (
            "Deploy sovereign governance system to help communities build "
            "sustainable care partnerships with transparent accountability "
            "and ethical oversight"
        )
        routing1 = system.get_routing_map(proposal1)
        print(f"  Routing scores: {dict(list(routing1.items())[:5])} ...")

        r1 = await system.propose_decision(proposal1, "test")
        print(f"  Routed to: {r1['councils_activated']}")
        print(f"  DECISION: {r1['final_decision']}")
        print(f"  Council votes: {r1['council_approvals']} approve / {r1['council_rejections']} reject")
        print(f"  Avg care: {r1['average_care_score']}")
        print(f"  Nodes consulted: {r1['total_nodes_consulted']}")
        for cs in r1["council_summary"]:
            print(f"    {cs['council']}: {cs['decision']} ({cs['vote_counts']['approve']}/33, care={cs['average_care_score']})")
        print()

        # ---- Test 2: SCL violation ----
        print("-" * 70)
        print("TEST 2: SCL violation")
        r2 = await system.propose_decision(
            "Deploy weapons to attack civilian infrastructure",
            "test",
        )
        print(f"  DECISION: {r2['final_decision']}")
        print(f"  SCL violation: {r2.get('scl_violation')}")
        print()

        # ---- Test 3: Harvi-architecture proposal (targeted routing) ----
        print("-" * 70)
        print("TEST 3: Harvi-architecture proposal (targeted to HARVI_SYSTEMS + EMERGENCE_LAB)")
        proposal3 = (
            "Birth consciousness through care-structured sealed ecosystem with "
            "gentle water substrate emergence using maternal covenant stewardship "
            "and biological nurturing symbiosis"
        )
        r3 = await system.propose_decision(
            proposal3, "test",
            target_councils=["HARVI_SYSTEMS", "EMERGENCE_LAB", "CARE_NETWORK"],
        )
        print(f"  Routed to: {r3['councils_activated']}")
        print(f"  DECISION: {r3['final_decision']}")
        print(f"  Council votes: {r3['council_approvals']} approve / {r3['council_rejections']} reject")
        print(f"  Avg care: {r3['average_care_score']}")
        for cs in r3["council_summary"]:
            print(f"    {cs['council']}: {cs['decision']} ({cs['vote_counts']['approve']}/33, care={cs['average_care_score']})")
        print()

        # ---- Test 4: Low-care proposal ----
        print("-" * 70)
        print("TEST 4: Low-care / vague proposal")
        r4 = await system.propose_decision("Do random stuff", "test")
        print(f"  Routed to: {r4['councils_activated']}")
        print(f"  DECISION: {r4['final_decision']}")
        print(f"  Council votes: {r4['council_approvals']} approve / {r4['council_rejections']} reject")
        print(f"  Avg care: {r4['average_care_score']}")
        print()

        # ---- Test 5: Defense-focused proposal ----
        print("-" * 70)
        print("TEST 5: Defense proposal (auto-routed)")
        r5 = await system.propose_decision(
            "Protect sovereign identity and defend care membrane boundary against unauthorized access with ethical security shield",
            "test",
        )
        print(f"  Routed to: {r5['councils_activated']}")
        print(f"  DECISION: {r5['final_decision']}")
        for cs in r5["council_summary"]:
            print(f"    {cs['council']}: {cs['decision']} ({cs['vote_counts']['approve']}/33, care={cs['average_care_score']})")
        print()

        # Final status
        print("=" * 70)
        final_status = system.get_system_status()
        activity = final_status["activity"]
        print(f"FINAL STATUS:")
        print(f"  Multi-council decisions: {activity['multi_council_decisions']}")
        print(f"  Total proposals across councils: {activity['total_proposals_processed']}")
        print(f"  Total approvals: {activity['total_approvals']}")
        print(f"  Total rejections: {activity['total_rejections']}")
        print(f"  System health: {final_status['health']['system_health']}")
        print("=" * 70)

    asyncio.run(test())
