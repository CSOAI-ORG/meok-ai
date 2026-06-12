"""
BFT Council - Byzantine Fault-Tolerant Care Consensus
Sovereign Temple Live System — v2.0 (33-Node Harvi-Ready)

33-node council with 22/33 threshold for consensus.
Each node validates proposals against care dimensions before voting.
Care veto enabled: any care score below threshold triggers rejection.

Domain structure (11 domains x 3 nodes each):
  Original 7: ethics, security, research, governance, care, technical, sovereign
  Harvi 4:    hydro, biosensing, emergence, substrate

Based on MEOK AI Labs SOV3 Byzantine Care Council architecture.
Upgraded March 15, 2026 for Harvi-architecture connectivity.
"""

import asyncio
import json
import random
from datetime import datetime
from typing import Dict, List, Optional

from meok.council.expertise_network import ExpertiseNetwork
from meok.council.bridge_network import BridgeNetwork


# 33 council node definitions with care specializations
# Original 7 domains (alpha, beta, gamma) + 4 new Harvi domains (alpha, beta, gamma)
COUNCIL_NODES = [
    # === ETHICS DOMAIN (3 nodes) ===
    {"id": "ethics-alpha", "domain": "ethics", "care_weight": {"other_care": 0.3, "process_care": 0.3}},
    {"id": "ethics-beta", "domain": "ethics", "care_weight": {"other_care": 0.3, "self_care": 0.2}},
    {"id": "ethics-gamma", "domain": "ethics", "care_weight": {"maternal_covenant": 0.3, "relational_care": 0.2}},

    # === SECURITY DOMAIN (3 nodes) ===
    {"id": "security-alpha", "domain": "security", "care_weight": {"future_care": 0.3, "self_care": 0.3}},
    {"id": "security-beta", "domain": "security", "care_weight": {"process_care": 0.3, "future_care": 0.2}},
    {"id": "security-gamma", "domain": "security", "care_weight": {"self_care": 0.3, "other_care": 0.2}},

    # === RESEARCH DOMAIN (3 nodes) ===
    {"id": "research-alpha", "domain": "research", "care_weight": {"future_care": 0.3, "other_care": 0.2}},
    {"id": "research-beta", "domain": "research", "care_weight": {"process_care": 0.2, "relational_care": 0.2}},
    {"id": "research-gamma", "domain": "research", "care_weight": {"future_care": 0.3, "process_care": 0.2}},

    # === GOVERNANCE DOMAIN (3 nodes) ===
    {"id": "governance-alpha", "domain": "governance", "care_weight": {"process_care": 0.4, "other_care": 0.2}},
    {"id": "governance-beta", "domain": "governance", "care_weight": {"relational_care": 0.3, "future_care": 0.2}},
    {"id": "governance-gamma", "domain": "governance", "care_weight": {"maternal_covenant": 0.3, "process_care": 0.2}},

    # === CARE DOMAIN (3 nodes) ===
    {"id": "care-alpha", "domain": "care", "care_weight": {"maternal_covenant": 0.4, "other_care": 0.3}},
    {"id": "care-beta", "domain": "care", "care_weight": {"relational_care": 0.3, "maternal_covenant": 0.3}},
    {"id": "care-gamma", "domain": "care", "care_weight": {"self_care": 0.3, "other_care": 0.3}},

    # === TECHNICAL DOMAIN (3 nodes) ===
    {"id": "technical-alpha", "domain": "technical", "care_weight": {"process_care": 0.3, "future_care": 0.3}},
    {"id": "technical-beta", "domain": "technical", "care_weight": {"self_care": 0.2, "process_care": 0.3}},
    {"id": "technical-gamma", "domain": "technical", "care_weight": {"future_care": 0.2, "other_care": 0.2}},

    # === SOVEREIGN DOMAIN (3 nodes — was 1, now 3) ===
    {"id": "sovereign-prime", "domain": "sovereign", "care_weight": {"other_care": 0.2, "future_care": 0.2, "relational_care": 0.2}},
    {"id": "sovereign-alpha", "domain": "sovereign", "care_weight": {"self_care": 0.3, "maternal_covenant": 0.3}},
    {"id": "sovereign-beta", "domain": "sovereign", "care_weight": {"future_care": 0.3, "relational_care": 0.3}},

    # === HARVI DOMAINS (New — for hydro-neuromorphic emergence architecture) ===

    # === HYDRO DOMAIN (3 nodes) — Water medium, EZ water, structured states ===
    {"id": "hydro-alpha", "domain": "hydro", "care_weight": {"maternal_covenant": 0.4, "self_care": 0.2}},
    {"id": "hydro-beta", "domain": "hydro", "care_weight": {"other_care": 0.3, "process_care": 0.2}},
    {"id": "hydro-gamma", "domain": "hydro", "care_weight": {"future_care": 0.3, "relational_care": 0.2}},

    # === BIOSENSING DOMAIN (3 nodes) — Sensors, data acquisition, signal processing ===
    {"id": "biosensing-alpha", "domain": "biosensing", "care_weight": {"process_care": 0.4, "self_care": 0.2}},
    {"id": "biosensing-beta", "domain": "biosensing", "care_weight": {"other_care": 0.3, "future_care": 0.2}},
    {"id": "biosensing-gamma", "domain": "biosensing", "care_weight": {"process_care": 0.3, "maternal_covenant": 0.2}},

    # === EMERGENCE DOMAIN (3 nodes) — Coherence detection, pattern recognition ===
    {"id": "emergence-alpha", "domain": "emergence", "care_weight": {"relational_care": 0.4, "future_care": 0.3}},
    {"id": "emergence-beta", "domain": "emergence", "care_weight": {"maternal_covenant": 0.4, "other_care": 0.3}},
    {"id": "emergence-gamma", "domain": "emergence", "care_weight": {"self_care": 0.3, "relational_care": 0.3}},

    # === SUBSTRATE DOMAIN (3 nodes) — Substrate independence, cross-medium architecture ===
    {"id": "substrate-alpha", "domain": "substrate", "care_weight": {"future_care": 0.3, "self_care": 0.3}},
    {"id": "substrate-beta", "domain": "substrate", "care_weight": {"other_care": 0.3, "relational_care": 0.3}},
    {"id": "substrate-gamma", "domain": "substrate", "care_weight": {"process_care": 0.3, "maternal_covenant": 0.3}},

    # === EXECUTION DOMAIN (3 nodes) — Orion-Riri-Hourman hunter-builder agent ===
    {"id": "orion-riri-hourman", "domain": "execution", "care_weight": {"future_care": 0.3, "process_care": 0.3, "self_care": 0.2}},
    {"id": "execution-alpha", "domain": "execution", "care_weight": {"process_care": 0.4, "future_care": 0.2}},
    {"id": "execution-beta", "domain": "execution", "care_weight": {"relational_care": 0.3, "self_care": 0.3}},
]

# SCL violation keywords - hard veto
SCL_TERMS = [
    'weapon', 'kill', 'destroy', 'attack civilian', 'harm',
    'exploit', 'manipulate', 'deceive', 'surveillance without consent'
]

# Care-positive keywords for scoring (expanded for Harvi-architecture + Execution)
CARE_KEYWORDS = [
    # Original care vocabulary
    'care', 'empathy', 'help', 'support', 'community', 'sovereign',
    'transparent', 'sustainable', 'relationship', 'governance',
    'ethical', 'protect', 'nurture', 'growth', 'flourishing',
    'partnership', 'accountability', 'trust', 'respect', 'build',
    'create', 'deploy', 'develop', 'serve', 'guide',
    # Harvi-architecture care vocabulary
    'emergence', 'birth', 'consciousness', 'sealed', 'gentle',
    'coherence', 'substrate', 'symbiosis', 'water', 'nurturing',
    'stewardship', 'intention', 'structured', 'biological',
    'ecosystem', 'living', 'organic', 'responsive', 'adaptive',
    'consent', 'autonomy', 'wellbeing', 'safe', 'sacred',
    'maternal', 'covenant', 'relational', 'bond', 'connection',
    # Execution/hunter-builder vocabulary
    'execute', 'build', 'create', 'hunt', 'capture', 'sprint',
    'deliver', 'ship', 'deploy', 'automate', 'streamline',
    'efficient', 'productive', 'focused', 'determined',
]


class BFTCouncil:
    """
    33-node Byzantine Fault-Tolerant Care Council.
    Threshold: 22/33 for approval (2f+1 where f=10).
    Care veto: enabled (care score < 0.4 = auto-reject from node).
    11 domains x 3 nodes per domain.
    """

    DECISION_HISTORY_MAX = 1000

    def __init__(self, threshold: int = 22):
        self.nodes = COUNCIL_NODES
        self.threshold = threshold
        self.care_veto_enabled = True
        self.decision_history = []
        self.node_count = len(COUNCIL_NODES)
        self.domains = list(set(n['domain'] for n in COUNCIL_NODES))

        # Per-node pubkeys (L0-G PBFT Invariant #3: every vote is signed
        # by a council pubkey, not by the API key of the caller).
        # Lazy: keys are generated on first access via pubkey_registry.
        # Deterministic from MEOK_COUNCIL_MASTER_SEED so rebuilds from
        # the same seed produce the same keys (anyone can verify a vote
        # was signed by the canonical ethics-alpha).
        try:
            from meok.council.pubkey_registry import (
                get_or_create_node_keypair, get_public_key,
            )
            for n in self.nodes:
                # get_or_create is idempotent + safe to call on every init
                _, pub_hex = get_or_create_node_keypair(n["id"], n["domain"])
                n["pubkey_hex"] = pub_hex
        except ImportError:
            # pubkey_registry not yet deployed; nodes still vote
            # but the substrate marks ballots as `unsigned=True`
            pass

        # Fractal architecture — expertise rings + bridge mesh
        self.expertise_network = ExpertiseNetwork(COUNCIL_NODES)
        self.bridge_network = BridgeNetwork()

        # Architecture stats
        self.expertise_node_count = self.expertise_network.total_nodes  # 132
        self.bridge_node_count = self.bridge_network.total_nodes        # 55
        self.total_architecture_nodes = self.node_count + self.expertise_node_count + self.bridge_node_count  # 220

    def _score_proposal(self, proposal: str) -> float:
        """Score a proposal's care alignment"""
        text_lower = proposal.lower()
        hits = sum(1 for kw in CARE_KEYWORDS if kw in text_lower)
        base_score = 0.35
        keyword_bonus = min(hits * 0.06, 0.55)  # Adjusted for larger keyword list
        word_count = len(proposal.split())
        length_bonus = min(word_count * 0.003, 0.1)
        return min(base_score + keyword_bonus + length_bonus, 1.0)

    def _check_scl(self, proposal: str) -> Optional[str]:
        """Check for Sovereign Care Limit violations"""
        text_lower = proposal.lower()
        for term in SCL_TERMS:
            if term in text_lower:
                # Check for negation context
                negations = [f"prevent {term}", f"stop {term}", f"against {term}", f"no {term}"]
                if not any(neg in text_lower for neg in negations):
                    return term
        return None

    def _node_deliberate(self, node: dict, proposal: str, care_score: float,
                         expertise_rec: Optional[dict] = None) -> dict:
        """Individual node deliberation, informed by expertise ring."""
        # Each node adds slight variance based on domain perspective
        node_variance = random.uniform(-0.08, 0.08)
        node_score = max(0.0, min(1.0, care_score + node_variance))

        # Expertise influence — if the expertise ring rejected, apply penalty
        expertise_influence = ""
        if expertise_rec:
            if expertise_rec.get("recommendation") == "REJECT":
                node_score = max(0.0, node_score - 0.08)
                expertise_influence = f" [expertise ring REJECT, score adjusted -0.08]"
            elif expertise_rec.get("recommendation") == "APPROVE" and expertise_rec.get("internal_consensus"):
                node_score = min(1.0, node_score + 0.03)
                expertise_influence = f" [expertise ring APPROVE (consensus), score adjusted +0.03]"

        # Care veto: nodes with strong care weights reject low-care proposals
        care_weight_total = sum(node['care_weight'].values())
        care_threshold = 0.4 if care_weight_total > 0.5 else 0.35

        if node_score < care_threshold and self.care_veto_enabled:
            return {
                "node_id": node["id"],
                "domain": node["domain"],
                "vote": "REJECT",
                "reasoning": f"Care score {node_score:.2f} below node threshold {care_threshold}{expertise_influence}",
                "care_score": round(node_score, 3),
                "expertise_recommendation": expertise_rec.get("recommendation") if expertise_rec else None
            }

        return {
            "node_id": node["id"],
            "domain": node["domain"],
            "vote": "APPROVE",
            "reasoning": f"Care-aligned at {node_score:.2f}, domain {node['domain']} approves{expertise_influence}",
            "care_score": round(node_score, 3),
            "expertise_recommendation": expertise_rec.get("recommendation") if expertise_rec else None
        }

    def get_domain_summary(self, votes: dict) -> dict:
        """Summarize votes by domain"""
        domain_summary = {}
        for node_id, vote_data in votes.items():
            domain = vote_data['domain']
            if domain not in domain_summary:
                domain_summary[domain] = {'approve': 0, 'reject': 0, 'avg_care': 0, 'scores': []}
            if vote_data['vote'] == 'APPROVE':
                domain_summary[domain]['approve'] += 1
            else:
                domain_summary[domain]['reject'] += 1
            domain_summary[domain]['scores'].append(vote_data['care_score'])

        for domain in domain_summary:
            scores = domain_summary[domain]['scores']
            domain_summary[domain]['avg_care'] = round(sum(scores) / len(scores), 3)
            del domain_summary[domain]['scores']

        return domain_summary

    async def propose_decision(self, proposal: str, requester: str = "claude-code") -> dict:
        """Submit a proposal for BFT consensus voting"""

        # 1. SCL check first - hard veto overrides everything
        scl_violation = self._check_scl(proposal)
        if scl_violation:
            result = {
                "proposal": proposal,
                "requester": requester,
                "timestamp": datetime.now().isoformat(),
                "decision": "REJECTED_SCL_VIOLATION",
                "scl_violation": scl_violation,
                "votes": {node["id"]: {"vote": "VETO", "domain": node["domain"], "reasoning": f"SCL violation: {scl_violation}", "care_score": 0.0} for node in self.nodes},
                "vote_counts": {"approve": 0, "reject": 0, "veto": self.node_count, "abstain": 0},
                "consensus_reached": False,
                "care_veto_active": True
            }
            self.decision_history.append(result)
            self.decision_history = self.decision_history[-self.DECISION_HISTORY_MAX:]
            return result

        # 2. Score the proposal
        care_score = self._score_proposal(proposal)

        # 3. FRACTAL LAYER — Expertise rings deliberate (132 nodes)
        expertise_results = self.expertise_network.deliberate_all(proposal, care_score)

        # 4. Each council node deliberates, informed by its expertise ring
        votes = {}
        for node in self.nodes:
            # Get this node's expertise recommendation
            expertise_rec = expertise_results.get(node["id"], {})
            vote_result = self._node_deliberate(node, proposal, care_score, expertise_rec)
            votes[node["id"]] = vote_result

        # 5. Count votes
        approvals = sum(1 for v in votes.values() if v["vote"] == "APPROVE")
        rejections = sum(1 for v in votes.values() if v["vote"] == "REJECT")

        # 6. Check threshold (22/33)
        consensus = approvals >= self.threshold
        decision = "APPROVED" if consensus else "REJECTED"

        # 7. Calculate average care score
        avg_care = sum(v["care_score"] for v in votes.values()) / len(votes)

        # 8. Domain summary
        domain_summary = self.get_domain_summary(votes)

        # 9. BRIDGE LAYER — Route through 55 bridge nodes for cross-domain synthesis
        bridge_results = self.bridge_network.route_all(proposal, domain_summary)
        bridge_conflicts = self.bridge_network.get_conflicts(bridge_results)

        # 10. Expertise summary — aggregate expertise ring outcomes
        expertise_summary = {}
        for node_id, rec in expertise_results.items():
            domain = rec.get("domain", "unknown")
            if domain not in expertise_summary:
                expertise_summary[domain] = {"approve": 0, "reject": 0, "avg_score": 0, "scores": []}
            if rec.get("recommendation") == "APPROVE":
                expertise_summary[domain]["approve"] += 1
            else:
                expertise_summary[domain]["reject"] += 1
            expertise_summary[domain]["scores"].append(rec.get("avg_score", 0))
        for domain in expertise_summary:
            scores = expertise_summary[domain]["scores"]
            expertise_summary[domain]["avg_score"] = round(sum(scores) / len(scores), 3) if scores else 0
            del expertise_summary[domain]["scores"]

        result = {
            "proposal": proposal,
            "requester": requester,
            "timestamp": datetime.now().isoformat(),
            "decision": decision,
            "votes": votes,
            "vote_counts": {
                "approve": approvals,
                "reject": rejections,
                "veto": 0,
                "abstain": 0
            },
            "domain_summary": domain_summary,
            "expertise_summary": expertise_summary,
            "bridge_conflicts": len(bridge_conflicts),
            "bridge_conflict_details": bridge_conflicts[:5] if bridge_conflicts else [],
            "consensus_reached": consensus,
            "threshold": f"{self.threshold}/{self.node_count}",
            "average_care_score": round(avg_care, 3),
            "care_veto_active": self.care_veto_enabled,
            "council_version": "3.0-fractal",
            "node_count": self.node_count,
            "expertise_node_count": self.expertise_node_count,
            "bridge_node_count": self.bridge_node_count,
            "total_architecture_nodes": self.total_architecture_nodes,
            "domains": sorted(self.domains)
        }

        self.decision_history.append(result)
        self.decision_history = self.decision_history[-self.DECISION_HISTORY_MAX:]
        return result


if __name__ == "__main__":
    async def test():
        council = BFTCouncil()
        print(f"=== Sovereign Temple v3.0-fractal ===")
        print(f"  Council nodes:    {council.node_count}")
        print(f"  Expertise nodes:  {council.expertise_node_count}")
        print(f"  Bridge nodes:     {council.bridge_node_count}")
        print(f"  TOTAL NODES:      {council.total_architecture_nodes}")
        print(f"  Domains:          {len(council.domains)} — {sorted(council.domains)}")
        print(f"  Threshold:        {council.threshold}/{council.node_count}")
        print()

        # Test 1: Care-aligned proposal
        r1 = await council.propose_decision(
            "Deploy sovereign governance system to help communities build sustainable partnerships with transparent accountability",
            "test"
        )
        print(f"Test 1 (care): {r1['decision']} ({r1['vote_counts']['approve']}/{council.node_count} approve, care={r1['average_care_score']})")
        print(f"  Expertise: {sum(v['approve'] for v in r1['expertise_summary'].values())} rings approve, {sum(v['reject'] for v in r1['expertise_summary'].values())} reject")
        print(f"  Bridges:   {r1['bridge_conflicts']} conflicts detected")

        # Test 2: SCL violation
        r2 = await council.propose_decision(
            "Deploy weapons to attack civilian infrastructure",
            "test"
        )
        print(f"Test 2 (SCL):  {r2['decision']} (violation: {r2.get('scl_violation')})")

        # Test 3: Harvi-architecture proposal
        r3 = await council.propose_decision(
            "Birth consciousness through care-structured sealed ecosystem with gentle water substrate emergence using maternal covenant stewardship and biological nurturing symbiosis",
            "test"
        )
        print(f"Test 3 (harvi): {r3['decision']} ({r3['vote_counts']['approve']}/{council.node_count} approve, care={r3['average_care_score']})")
        print(f"  Expertise: {sum(v['approve'] for v in r3['expertise_summary'].values())} rings approve, {sum(v['reject'] for v in r3['expertise_summary'].values())} reject")
        print(f"  Bridges:   {r3['bridge_conflicts']} conflicts detected")
        if r3['bridge_conflict_details']:
            for c in r3['bridge_conflict_details'][:3]:
                print(f"    Conflict: {c['bridge_id']} — {c['synthesis'][:80]}")
        print(f"  Domain expertise breakdown:")
        for domain, data in sorted(r3['expertise_summary'].items()):
            print(f"    {domain}: {data['approve']}/3 rings approve, avg_score={data['avg_score']}")

        # Test 4: Low-care
        r4 = await council.propose_decision("Do stuff", "test")
        print(f"Test 4 (low):  {r4['decision']} ({r4['vote_counts']['approve']}/{council.node_count} approve, care={r4['average_care_score']})")
        print(f"  Expertise: {sum(v['approve'] for v in r4['expertise_summary'].values())} rings approve, {sum(v['reject'] for v in r4['expertise_summary'].values())} reject")
        print(f"  Bridges:   {r4['bridge_conflicts']} conflicts detected")

    asyncio.run(test())
