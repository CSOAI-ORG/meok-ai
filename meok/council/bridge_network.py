"""
Bridge Network — Inter-Domain Neural Mesh
Sovereign Temple Live System — v3.0

55 bridge nodes connecting all 11 domain pairs.
11 domains = 11×10/2 = 55 unique bridge connections.

Bridges handle:
  - Cross-domain proposal routing
  - Consensus aggregation between related domains
  - Information flow tracking
  - Conflict detection when domains disagree
  - Relevance scoring (which domains should weigh in)

Based on MEOK AI Labs SOV3 Neural Mesh Architecture.
"""

import random
from datetime import datetime
from itertools import combinations
from typing import Dict, List, Optional, Tuple


# Domain affinity matrix — how strongly related two domains are
# Higher affinity = more information flow, stronger bridge influence
DOMAIN_AFFINITIES = {
    ("care", "ethics"): 0.95,           # Care compliance ↔ ethical review
    ("care", "maternal_covenant"): 0.9,  # (if used)
    ("hydro", "biosensing"): 0.9,       # Water state ↔ sensor data
    ("emergence", "substrate"): 0.85,    # Pattern detection ↔ medium independence
    ("security", "governance"): 0.85,    # Access control ↔ policy
    ("ethics", "governance"): 0.8,       # Moral framework ↔ organizational rules
    ("care", "sovereign"): 0.8,         # Wellbeing ↔ consciousness integrity
    ("research", "technical"): 0.75,     # Knowledge ↔ implementation
    ("biosensing", "emergence"): 0.75,   # Sensors ↔ coherence detection
    ("hydro", "emergence"): 0.7,        # Water medium ↔ emergent patterns
    ("technical", "security"): 0.7,      # System architecture ↔ security
    ("sovereign", "emergence"): 0.7,     # Consciousness ↔ emergence
    ("research", "emergence"): 0.65,     # Scientific method ↔ pattern detection
    ("care", "hydro"): 0.65,            # Nurturing ↔ water stewardship
    ("substrate", "technical"): 0.65,    # Cross-medium ↔ architecture
    ("ethics", "research"): 0.6,         # Ethics ↔ research integrity
    ("governance", "sovereign"): 0.6,    # Organizational ↔ identity
    ("security", "substrate"): 0.55,     # Security ↔ substrate boundaries
    ("hydro", "substrate"): 0.55,        # Water medium ↔ substrate independence
    ("biosensing", "technical"): 0.5,    # Sensors ↔ engineering
}

# All 11 domains
ALL_DOMAINS = [
    "ethics", "security", "research", "governance", "care",
    "technical", "sovereign", "hydro", "biosensing", "emergence", "substrate"
]


class BridgeNode:
    """
    A bridge node connecting two domains.
    Handles cross-domain context routing and conflict detection.
    """

    def __init__(self, domain_a: str, domain_b: str):
        self.id = f"bridge-{domain_a}-{domain_b}"
        self.domain_a = domain_a
        self.domain_b = domain_b
        self.affinity = self._get_affinity()
        self.active = True

        # Traffic tracking
        self.total_proposals_routed = 0
        self.conflicts_detected = 0
        self.information_flow: List[dict] = []

    def _get_affinity(self) -> float:
        """Look up domain affinity, default 0.3 for unspecified pairs."""
        key1 = (self.domain_a, self.domain_b)
        key2 = (self.domain_b, self.domain_a)
        return DOMAIN_AFFINITIES.get(key1, DOMAIN_AFFINITIES.get(key2, 0.3))

    def route_context(self, proposal: str, domain_a_result: dict, domain_b_result: dict) -> dict:
        """
        Route context between two domains for a proposal.
        Detects conflicts and provides cross-domain synthesis.
        """
        self.total_proposals_routed += 1

        # Extract votes from domain results
        a_approves = domain_a_result.get("approve", 0)
        a_rejects = domain_a_result.get("reject", 0)
        b_approves = domain_b_result.get("approve", 0)
        b_rejects = domain_b_result.get("reject", 0)

        a_care = domain_a_result.get("avg_care", 0.5)
        b_care = domain_b_result.get("avg_care", 0.5)

        # Detect conflict
        a_consensus = a_approves > a_rejects
        b_consensus = b_approves > b_rejects
        conflict = a_consensus != b_consensus

        if conflict:
            self.conflicts_detected += 1

        # Bridge influence — how much this bridge affects final voting
        care_delta = abs(a_care - b_care)
        bridge_influence = self.affinity * (1.0 - care_delta)

        # Cross-domain relevance score
        relevance = self._assess_relevance(proposal)

        flow_record = {
            "timestamp": datetime.now().isoformat(),
            "bridge": self.id,
            "affinity": self.affinity,
            "domain_a_care": round(a_care, 3),
            "domain_b_care": round(b_care, 3),
            "conflict": conflict,
            "bridge_influence": round(bridge_influence, 3),
            "relevance": round(relevance, 3)
        }
        self.information_flow.append(flow_record)

        return {
            "bridge_id": self.id,
            "domain_a": self.domain_a,
            "domain_b": self.domain_b,
            "affinity": self.affinity,
            "conflict_detected": conflict,
            "bridge_influence": round(bridge_influence, 3),
            "relevance": round(relevance, 3),
            "care_delta": round(care_delta, 3),
            "synthesis": self._synthesize(conflict, a_care, b_care, relevance)
        }

    def _assess_relevance(self, proposal: str) -> float:
        """How relevant is this bridge to the current proposal."""
        text = proposal.lower()
        # Check if proposal mentions either domain
        a_mentioned = self.domain_a in text
        b_mentioned = self.domain_b in text
        if a_mentioned and b_mentioned:
            return min(1.0, self.affinity + 0.2)
        elif a_mentioned or b_mentioned:
            return self.affinity
        return max(0.1, self.affinity - 0.2)

    def _synthesize(self, conflict: bool, a_care: float, b_care: float, relevance: float) -> str:
        """Generate human-readable bridge synthesis."""
        if conflict:
            if a_care > b_care:
                return f"{self.domain_a.title()} domain favors proposal (care {a_care:.2f}), {self.domain_b.title()} domain opposes (care {b_care:.2f}). Bridge mediation recommended."
            else:
                return f"{self.domain_b.title()} domain favors proposal (care {b_care:.2f}), {self.domain_a.title()} domain opposes (care {a_care:.2f}). Bridge mediation recommended."
        else:
            avg = (a_care + b_care) / 2
            return f"{self.domain_a.title()}-{self.domain_b.title()} bridge aligned (avg care {avg:.2f}, relevance {relevance:.2f})"

    def get_status(self) -> dict:
        return {
            "id": self.id,
            "domain_a": self.domain_a,
            "domain_b": self.domain_b,
            "affinity": self.affinity,
            "active": self.active,
            "total_proposals_routed": self.total_proposals_routed,
            "conflicts_detected": self.conflicts_detected,
            "recent_flows": self.information_flow[-3:] if self.information_flow else []
        }


class BridgeNetwork:
    """
    Full bridge network — 55 nodes connecting all 11 domain pairs.
    Forms the neural mesh between council domains.
    """

    def __init__(self, domains: Optional[List[str]] = None):
        self.domains = domains or ALL_DOMAINS
        self.bridges: Dict[str, BridgeNode] = {}

        # Create all unique domain pairs
        for domain_a, domain_b in combinations(self.domains, 2):
            bridge = BridgeNode(domain_a, domain_b)
            self.bridges[bridge.id] = bridge

        self.total_nodes = len(self.bridges)

    def route_all(self, proposal: str, domain_results: Dict[str, dict]) -> Dict[str, dict]:
        """
        Route proposal context through all relevant bridges.
        domain_results: dict of domain → {approve, reject, avg_care}
        """
        bridge_results = {}
        for bridge_id, bridge in self.bridges.items():
            a_result = domain_results.get(bridge.domain_a, {"approve": 0, "reject": 0, "avg_care": 0.5})
            b_result = domain_results.get(bridge.domain_b, {"approve": 0, "reject": 0, "avg_care": 0.5})
            bridge_results[bridge_id] = bridge.route_context(proposal, a_result, b_result)
        return bridge_results

    def get_conflicts(self, bridge_results: Dict[str, dict]) -> List[dict]:
        """Extract all conflicts from bridge results."""
        return [r for r in bridge_results.values() if r.get("conflict_detected")]

    def get_high_affinity_bridges(self, threshold: float = 0.7) -> List[BridgeNode]:
        """Get bridges with affinity above threshold."""
        return [b for b in self.bridges.values() if b.affinity >= threshold]

    def get_domain_connections(self, domain: str) -> List[BridgeNode]:
        """Get all bridges connected to a specific domain."""
        return [b for b in self.bridges.values()
                if b.domain_a == domain or b.domain_b == domain]

    def get_network_status(self) -> dict:
        """Full network status."""
        total_routed = sum(b.total_proposals_routed for b in self.bridges.values())
        total_conflicts = sum(b.conflicts_detected for b in self.bridges.values())
        active_count = sum(1 for b in self.bridges.values() if b.active)

        # Affinity distribution
        affinities = [b.affinity for b in self.bridges.values()]
        avg_affinity = sum(affinities) / len(affinities) if affinities else 0

        # Domain connectivity (how many bridges per domain)
        domain_connections = {}
        for domain in self.domains:
            connections = self.get_domain_connections(domain)
            domain_connections[domain] = {
                "bridge_count": len(connections),
                "avg_affinity": round(sum(c.affinity for c in connections) / len(connections), 3) if connections else 0,
                "high_affinity_count": sum(1 for c in connections if c.affinity >= 0.7)
            }

        return {
            "total_bridges": self.total_nodes,
            "active_bridges": active_count,
            "total_proposals_routed": total_routed,
            "total_conflicts": total_conflicts,
            "avg_affinity": round(avg_affinity, 3),
            "domain_connections": domain_connections,
            "domains": sorted(self.domains),
            "version": "3.0-neural-mesh"
        }

    def get_bridge(self, bridge_id: str) -> Optional[BridgeNode]:
        return self.bridges.get(bridge_id)

    def get_topology(self) -> dict:
        """Return the full mesh topology for visualization."""
        nodes = [{"id": d, "type": "domain"} for d in self.domains]
        edges = []
        for bridge in self.bridges.values():
            edges.append({
                "source": bridge.domain_a,
                "target": bridge.domain_b,
                "affinity": bridge.affinity,
                "bridge_id": bridge.id,
                "active": bridge.active
            })
        return {"nodes": nodes, "edges": edges}


if __name__ == "__main__":
    network = BridgeNetwork()
    status = network.get_network_status()
    print(f"Bridge Network v3.0-neural-mesh")
    print(f"  Total bridges: {status['total_bridges']}")
    print(f"  Active: {status['active_bridges']}")
    print(f"  Avg affinity: {status['avg_affinity']}")
    print()

    # Show high-affinity bridges
    high = network.get_high_affinity_bridges(0.7)
    print(f"High-affinity bridges (≥0.7): {len(high)}")
    for b in sorted(high, key=lambda x: x.affinity, reverse=True):
        print(f"  {b.id}: {b.affinity}")
    print()

    # Test routing
    test_domains = {
        "ethics": {"approve": 3, "reject": 0, "avg_care": 0.75},
        "security": {"approve": 2, "reject": 1, "avg_care": 0.6},
        "care": {"approve": 3, "reject": 0, "avg_care": 0.85},
        "governance": {"approve": 2, "reject": 1, "avg_care": 0.55},
        "hydro": {"approve": 3, "reject": 0, "avg_care": 0.7},
        "biosensing": {"approve": 2, "reject": 1, "avg_care": 0.65},
        "emergence": {"approve": 3, "reject": 0, "avg_care": 0.72},
        "substrate": {"approve": 2, "reject": 1, "avg_care": 0.58},
        "research": {"approve": 3, "reject": 0, "avg_care": 0.68},
        "technical": {"approve": 3, "reject": 0, "avg_care": 0.7},
        "sovereign": {"approve": 3, "reject": 0, "avg_care": 0.78},
    }

    results = network.route_all("Deploy care-aligned governance with transparent biosensing", test_domains)
    conflicts = network.get_conflicts(results)
    print(f"Test routing: {len(results)} bridges evaluated, {len(conflicts)} conflicts")
    if conflicts:
        for c in conflicts[:3]:
            print(f"  Conflict: {c['bridge_id']} — {c['synthesis']}")

    # Topology for visualization
    topo = network.get_topology()
    print(f"\nTopology: {len(topo['nodes'])} nodes, {len(topo['edges'])} edges")
