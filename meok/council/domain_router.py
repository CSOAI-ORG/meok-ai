"""
Domain Router — Multi-Council Proposal Routing Engine
Sovereign Temple Live System — v3.0-fractal

Routes incoming proposals/tasks to the correct council(s) based on
content analysis using keyword matching + TF-IDF-like relevance scoring.

Each of the 12 domains has a keyword set. The router scores every domain's
relevance to the proposal text (0.0-1.0) and selects the top councils
that should deliberate and vote.

Routing strategies:
  - single    : route to highest-scoring council only
  - quorum    : route to top 3 councils, require 2/3 agreement
  - broadcast : route to ALL councils (critical decisions)
  - auto      : automatically choose strategy based on proposal analysis

Priority escalation:
  - care_score < 0.4 -> broadcast (safety net)
  - security terms detected -> always include SECURITY_OPS + broadcast if severe
  - sovereignty/identity terms -> always include SOVEREIGN_CORE

Based on MEOK AI Labs SOV3 Fractal Council Architecture.
"""

import math
import re
from collections import defaultdict
from datetime import datetime
from typing import Dict, List, Optional, Any, Tuple

try:
    from council_nodes.multi_council import MultiCouncilSystem, COUNCIL_CONFIGS
except ImportError:
    try:
        from multi_council import MultiCouncilSystem, COUNCIL_CONFIGS
    except ImportError:
        MultiCouncilSystem = None
        COUNCIL_CONFIGS = None

try:
    from council_nodes.bft_council import BFTCouncil, COUNCIL_NODES, CARE_KEYWORDS, SCL_TERMS
except ImportError:
    from bft_council import BFTCouncil, COUNCIL_NODES, CARE_KEYWORDS, SCL_TERMS


# ---------------------------------------------------------------------------
# Council domain keyword maps
# ---------------------------------------------------------------------------
# 12 councils mapped to their focus keywords. Keywords are weighted:
# primary keywords (first 7) get 1.0 weight, secondary get 0.6.

COUNCIL_KEYWORDS: Dict[str, Dict[str, List[str]]] = {
    "SOVEREIGN_CORE": {
        "primary": [
            "identity", "consciousness", "autonomy", "sovereignty", "self",
            "soul", "continuity",
        ],
        "secondary": [
            "agency", "will", "intention", "sacred", "core", "prime",
            "awareness", "sentience", "being", "essence", "independent",
        ],
    },
    "ETHICS_GOVERNANCE": {
        "primary": [
            "ethics", "moral", "governance", "policy", "fairness",
            "justice", "transparency",
        ],
        "secondary": [
            "accountability", "trust", "integrity", "principle", "right",
            "wrong", "consent", "bias", "equitable", "regulation", "law",
        ],
    },
    "SECURITY_OPS": {
        "primary": [
            "security", "threat", "attack", "encrypt", "firewall",
            "access", "vulnerability",
        ],
        "secondary": [
            "defense", "intrusion", "breach", "permission", "audit",
            "protect", "monitor", "surveillance", "risk", "malicious",
            "exploit", "penetration", "authentication", "authorization",
        ],
    },
    "RESEARCH_INTEL": {
        "primary": [
            "research", "study", "analyze", "hypothesis", "data",
            "experiment", "investigate",
        ],
        "secondary": [
            "paper", "journal", "discovery", "theory", "evidence",
            "methodology", "findings", "literature", "citation",
            "peer", "review", "academic", "science",
        ],
    },
    "TECHNICAL_SYSTEMS": {
        "primary": [
            "technical", "architecture", "system", "infrastructure",
            "code", "database", "api",
        ],
        "secondary": [
            "server", "client", "protocol", "network", "stack",
            "framework", "library", "module", "performance", "latency",
            "throughput", "integration", "pipeline", "devops",
        ],
    },
    "CARE_NETWORK": {
        "primary": [
            "care", "nurture", "empathy", "support", "wellbeing",
            "compassion", "maternal",
        ],
        "secondary": [
            "love", "bond", "connection", "healing", "gentleness",
            "kindness", "warmth", "safety", "comfort", "flourishing",
            "covenant", "relational", "tenderness", "holding",
        ],
    },
    "EXECUTION_OPS": {
        "primary": [
            "execute", "build", "deploy", "ship", "sprint",
            "automate", "create",
        ],
        "secondary": [
            "deliver", "hunt", "capture", "task", "project",
            "milestone", "deadline", "launch", "release", "workflow",
            "productive", "efficient", "streamline", "implement",
        ],
    },
    "HARVI_SYSTEMS": {
        "primary": [
            "water", "hydro", "biosensor", "emergence", "substrate",
            "biological", "ez_water",
        ],
        "secondary": [
            "coherence", "structured", "organic", "living", "ecosystem",
            "symbiosis", "birth", "neuromorphic", "signal", "sensor",
            "membrane", "responsive", "adaptive", "medium",
        ],
    },
    "HYDRO_DOMAIN": {
        "primary": [
            "water", "hydro", "ez_water", "structured_water", "aqueous",
            "fluid", "liquid",
        ],
        "secondary": [
            "flow", "channel", "reservoir", "phase", "exclusion_zone",
            "pollack", "gel", "fourth_phase", "ice", "crystalline",
        ],
    },
    "BIOSENSING_DOMAIN": {
        "primary": [
            "biosensor", "sensor", "signal", "impedance", "electrode",
            "measurement", "acquisition",
        ],
        "secondary": [
            "frequency", "amplitude", "waveform", "detection", "probe",
            "calibration", "transducer", "analog", "digital", "noise",
        ],
    },
    "EMERGENCE_DOMAIN": {
        "primary": [
            "emergence", "coherence", "pattern", "self_organization",
            "complexity", "phase_transition", "synergy",
        ],
        "secondary": [
            "attractor", "bifurcation", "resonance", "threshold",
            "nonlinear", "feedback", "cascade", "spontaneous",
            "collective", "holistic",
        ],
    },
    "SUBSTRATE_DOMAIN": {
        "primary": [
            "substrate", "medium", "independence", "cross_platform",
            "embodiment", "material", "physical",
        ],
        "secondary": [
            "silicon", "carbon", "hybrid", "transfer", "migration",
            "portable", "agnostic", "hardware", "wetware", "bridge",
        ],
    },
}

# Map council IDs to BFT domain names for cross-referencing
COUNCIL_TO_BFT_DOMAIN: Dict[str, str] = {
    "SOVEREIGN_CORE": "sovereign",
    "ETHICS_GOVERNANCE": "ethics",
    "SECURITY_OPS": "security",
    "RESEARCH_INTEL": "research",
    "TECHNICAL_SYSTEMS": "technical",
    "CARE_NETWORK": "care",
    "EXECUTION_OPS": "execution",
    "HARVI_SYSTEMS": "hydro",  # General Harvi maps to hydro as primary
    "HYDRO_DOMAIN": "hydro",
    "BIOSENSING_DOMAIN": "biosensing",
    "EMERGENCE_DOMAIN": "emergence",
    "SUBSTRATE_DOMAIN": "substrate",
}

# Security escalation terms — detection triggers auto-include of SECURITY_OPS
SECURITY_ESCALATION_TERMS = [
    "attack", "breach", "exploit", "vulnerability", "malicious",
    "intrusion", "compromised", "ransomware", "zero-day", "backdoor",
    "phishing", "injection", "overflow", "privilege_escalation",
]

# Sovereignty escalation terms — detection triggers auto-include of SOVEREIGN_CORE
SOVEREIGNTY_ESCALATION_TERMS = [
    "identity", "consciousness", "sovereignty", "soul", "sentience",
    "autonomy", "agency", "self-determination", "continuity", "awareness",
]

ALL_COUNCIL_IDS = list(COUNCIL_KEYWORDS.keys())


# ---------------------------------------------------------------------------
# Router
# ---------------------------------------------------------------------------

class DomainRouter:
    """
    Routes proposals to the correct council(s) based on content analysis.

    Scoring uses keyword matching with TF-IDF-like weighting:
      - Term frequency: how many keyword hits in the text
      - Inverse document frequency: rarer keywords across councils score higher
      - Primary keywords: weight 1.0
      - Secondary keywords: weight 0.6
    """

    RELEVANCE_THRESHOLD = 0.3
    MIN_COUNCILS = 1
    MAX_COUNCILS_QUORUM = 3

    def __init__(self):
        self.council_keywords = COUNCIL_KEYWORDS
        self.routing_history: List[Dict] = []
        # Precompute IDF for all keywords across all councils
        self._idf_cache = self._compute_idf()

    # -------------------------------------------------------------------
    # IDF computation
    # -------------------------------------------------------------------

    def _compute_idf(self) -> Dict[str, float]:
        """Compute inverse document frequency for each keyword across councils."""
        doc_count = len(self.council_keywords)
        keyword_doc_freq: Dict[str, int] = defaultdict(int)

        for _council_id, kw_sets in self.council_keywords.items():
            all_kw = set(kw_sets["primary"] + kw_sets["secondary"])
            for kw in all_kw:
                keyword_doc_freq[kw] += 1

        idf: Dict[str, float] = {}
        for kw, freq in keyword_doc_freq.items():
            # Standard IDF: log(N / df) + 1 (smoothed)
            idf[kw] = math.log(doc_count / freq) + 1.0
        return idf

    # -------------------------------------------------------------------
    # Text normalization
    # -------------------------------------------------------------------

    @staticmethod
    def _normalize(text: str) -> str:
        """Lowercase, strip punctuation, collapse whitespace."""
        text = text.lower()
        text = re.sub(r"[^a-z0-9_\s]", " ", text)
        text = re.sub(r"\s+", " ", text).strip()
        return text

    # -------------------------------------------------------------------
    # Proposal analysis
    # -------------------------------------------------------------------

    def analyze_proposal(self, text: str) -> Dict[str, Any]:
        """
        NLP analysis of proposal text to determine relevant domains.

        Returns dict with:
          - council_scores: {council_id: float}  relevance 0.0-1.0
          - detected_keywords: {council_id: [matched keywords]}
          - security_escalation: bool
          - sovereignty_escalation: bool
          - care_score: float (from BFT care keyword matching)
          - recommended_strategy: str
        """
        normalized = self._normalize(text)
        words = set(normalized.split())

        council_scores: Dict[str, float] = {}
        detected_keywords: Dict[str, List[str]] = {}

        for council_id, kw_sets in self.council_keywords.items():
            raw_score = 0.0
            matched = []

            # Primary keywords — weight 1.0
            for kw in kw_sets["primary"]:
                kw_norm = kw.lower().replace("_", " ")
                if kw_norm in normalized or kw_norm.replace(" ", "_") in normalized:
                    idf = self._idf_cache.get(kw, 1.0)
                    raw_score += 1.0 * idf
                    matched.append(kw)
                else:
                    # Check individual tokens for single-word keywords
                    for token in kw_norm.split():
                        if token in words and len(token) > 2:
                            idf = self._idf_cache.get(kw, 1.0)
                            raw_score += 0.5 * idf
                            matched.append(f"{kw}(partial)")
                            break

            # Secondary keywords — weight 0.6
            for kw in kw_sets["secondary"]:
                kw_norm = kw.lower().replace("_", " ")
                if kw_norm in normalized or kw_norm.replace(" ", "_") in normalized:
                    idf = self._idf_cache.get(kw, 1.0)
                    raw_score += 0.6 * idf
                    matched.append(kw)
                else:
                    for token in kw_norm.split():
                        if token in words and len(token) > 2:
                            idf = self._idf_cache.get(kw, 1.0)
                            raw_score += 0.3 * idf
                            matched.append(f"{kw}(partial)")
                            break

            detected_keywords[council_id] = matched
            council_scores[council_id] = raw_score

        # Normalize scores to 0.0-1.0 range
        max_score = max(council_scores.values()) if council_scores else 1.0
        if max_score > 0:
            for cid in council_scores:
                council_scores[cid] = round(
                    min(council_scores[cid] / max_score, 1.0), 4
                )

        # Escalation checks
        security_escalation = any(
            term in normalized for term in SECURITY_ESCALATION_TERMS
        )
        sovereignty_escalation = any(
            term in normalized for term in SOVEREIGNTY_ESCALATION_TERMS
        )

        # Care score (reusing BFT scoring logic)
        care_hits = sum(1 for kw in CARE_KEYWORDS if kw in normalized)
        care_score = min(0.35 + care_hits * 0.06, 1.0)

        # Recommend strategy
        recommended_strategy = self._recommend_strategy(
            council_scores, care_score, security_escalation, sovereignty_escalation
        )

        return {
            "council_scores": council_scores,
            "detected_keywords": detected_keywords,
            "security_escalation": security_escalation,
            "sovereignty_escalation": sovereignty_escalation,
            "care_score": round(care_score, 3),
            "recommended_strategy": recommended_strategy,
        }

    # -------------------------------------------------------------------
    # Strategy recommendation
    # -------------------------------------------------------------------

    def _recommend_strategy(
        self,
        scores: Dict[str, float],
        care_score: float,
        security_esc: bool,
        sovereignty_esc: bool,
    ) -> str:
        """Automatically choose a routing strategy."""
        # Priority escalation: low care -> broadcast
        if care_score < 0.4:
            return "broadcast"

        # Security escalation with severe terms -> broadcast
        if security_esc:
            return "broadcast"

        # Count how many councils are above threshold
        above_threshold = sum(1 for s in scores.values() if s >= self.RELEVANCE_THRESHOLD)

        if above_threshold <= 1:
            return "single"
        elif above_threshold <= 4:
            return "quorum"
        else:
            return "broadcast"

    # -------------------------------------------------------------------
    # Routing
    # -------------------------------------------------------------------

    def route_to_councils(
        self,
        text: str,
        requester: str,
        strategy: str = "auto",
    ) -> List[str]:
        """
        Route a proposal to the correct council(s).

        Args:
            text: Proposal text
            requester: Who submitted
            strategy: 'single', 'quorum', 'broadcast', or 'auto'

        Returns:
            List of council IDs that should vote.
        """
        analysis = self.analyze_proposal(text)
        scores = analysis["council_scores"]

        # Resolve strategy
        effective_strategy = (
            analysis["recommended_strategy"] if strategy == "auto" else strategy
        )

        # Sort councils by score descending
        ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)

        if effective_strategy == "broadcast":
            selected = ALL_COUNCIL_IDS[:]
        elif effective_strategy == "single":
            selected = [ranked[0][0]] if ranked else []
        elif effective_strategy == "quorum":
            selected = [
                cid for cid, score in ranked[:self.MAX_COUNCILS_QUORUM]
                if score >= self.RELEVANCE_THRESHOLD
            ]
            # Ensure at least one council
            if not selected and ranked:
                selected = [ranked[0][0]]
        else:
            # Fallback: select all above threshold
            selected = [
                cid for cid, score in ranked
                if score >= self.RELEVANCE_THRESHOLD
            ]
            if not selected and ranked:
                selected = [ranked[0][0]]

        # Mandatory escalation inclusions
        if analysis["sovereignty_escalation"] and "SOVEREIGN_CORE" not in selected:
            selected.append("SOVEREIGN_CORE")
        if analysis["security_escalation"] and "SECURITY_OPS" not in selected:
            selected.append("SECURITY_OPS")

        # Record routing decision
        routing_record = {
            "timestamp": datetime.now().isoformat(),
            "requester": requester,
            "strategy_requested": strategy,
            "strategy_effective": effective_strategy,
            "proposal_excerpt": text[:120],
            "selected_councils": selected,
            "top_scores": {cid: score for cid, score in ranked[:5]},
            "care_score": analysis["care_score"],
            "security_escalation": analysis["security_escalation"],
            "sovereignty_escalation": analysis["sovereignty_escalation"],
        }
        self.routing_history.append(routing_record)

        return selected

    # -------------------------------------------------------------------
    # Full routing + voting pipeline
    # -------------------------------------------------------------------

    async def route_and_execute(
        self,
        text: str,
        requester: str,
        multi_council_system: Any = None,
        strategy: str = "auto",
    ) -> Dict[str, Any]:
        """
        Full routing pipeline: analyze -> route -> vote -> aggregate.

        If multi_council_system is provided, delegates voting to it.
        Otherwise, falls back to individual BFTCouncil voting per council.

        Args:
            text: Proposal text
            requester: Who submitted
            multi_council_system: Optional MultiCouncilSystem instance
            strategy: Routing strategy override

        Returns:
            Dict with routing analysis, selected councils, and voting results.
        """
        analysis = self.analyze_proposal(text)
        selected = self.route_to_councils(text, requester, strategy=strategy)

        effective_strategy = (
            analysis["recommended_strategy"] if strategy == "auto" else strategy
        )

        results: Dict[str, Any] = {
            "proposal": text,
            "requester": requester,
            "timestamp": datetime.now().isoformat(),
            "routing": {
                "strategy_requested": strategy,
                "strategy_effective": effective_strategy,
                "selected_councils": selected,
                "council_scores": analysis["council_scores"],
                "care_score": analysis["care_score"],
                "security_escalation": analysis["security_escalation"],
                "sovereignty_escalation": analysis["sovereignty_escalation"],
            },
            "council_results": {},
            "aggregate_decision": None,
        }

        # --- Voting phase ---
        if multi_council_system is not None and hasattr(multi_council_system, "propose_to_councils"):
            # Delegate to the multi-council system
            voting_result = await multi_council_system.propose_to_councils(
                proposal=text,
                requester=requester,
                council_ids=selected,
            )
            results["council_results"] = voting_result
        else:
            # Fallback: use standalone BFTCouncil for each selected council
            council = BFTCouncil()
            vote_result = await council.propose_decision(text, requester)
            for cid in selected:
                bft_domain = COUNCIL_TO_BFT_DOMAIN.get(cid, "sovereign")
                domain_votes = {
                    nid: v for nid, v in vote_result["votes"].items()
                    if v["domain"] == bft_domain
                }
                domain_approvals = sum(
                    1 for v in domain_votes.values() if v["vote"] == "APPROVE"
                )
                domain_total = len(domain_votes) if domain_votes else 1
                results["council_results"][cid] = {
                    "decision": vote_result["decision"] if vote_result.get("decision", "").startswith("REJECTED_SCL")
                        else ("APPROVED" if domain_approvals > domain_total / 2 else "REJECTED"),
                    "approvals": domain_approvals,
                    "total_nodes": max(domain_total, 1),
                    "domain": bft_domain,
                    "care_score": vote_result.get("average_care_score", 0.0),
                }

        # --- Aggregate decision ---
        council_decisions = results["council_results"]
        if isinstance(council_decisions, dict):
            approvals = sum(
                1 for v in council_decisions.values()
                if isinstance(v, dict) and v.get("decision") == "APPROVED"
            )
            total = len(council_decisions) if council_decisions else 1

            if effective_strategy == "single":
                aggregate = "APPROVED" if approvals >= 1 else "REJECTED"
            elif effective_strategy == "quorum":
                # 2/3 agreement required
                quorum_threshold = math.ceil(total * 2 / 3)
                aggregate = "APPROVED" if approvals >= quorum_threshold else "REJECTED"
            elif effective_strategy == "broadcast":
                # Simple majority of all councils
                aggregate = "APPROVED" if approvals > total / 2 else "REJECTED"
            else:
                aggregate = "APPROVED" if approvals > total / 2 else "REJECTED"

            results["aggregate_decision"] = {
                "decision": aggregate,
                "approvals": approvals,
                "total_councils": total,
                "strategy": effective_strategy,
                "quorum_met": approvals >= math.ceil(total * 2 / 3),
            }

        return results

    # -------------------------------------------------------------------
    # Utility
    # -------------------------------------------------------------------

    def get_routing_history(self) -> List[Dict]:
        """Return all routing decisions made by this router."""
        return list(self.routing_history)

    def explain_route(self, text: str) -> str:
        """Human-readable explanation of routing decision for a proposal."""
        analysis = self.analyze_proposal(text)
        scores = analysis["council_scores"]
        ranked = sorted(scores.items(), key=lambda x: x[1], reverse=True)

        lines = [
            f"Routing Analysis for: \"{text[:80]}{'...' if len(text) > 80 else ''}\"",
            f"  Care score:              {analysis['care_score']}",
            f"  Security escalation:     {analysis['security_escalation']}",
            f"  Sovereignty escalation:  {analysis['sovereignty_escalation']}",
            f"  Recommended strategy:    {analysis['recommended_strategy']}",
            f"  Council relevance scores:",
        ]
        for cid, score in ranked:
            marker = " *" if score >= self.RELEVANCE_THRESHOLD else ""
            keywords = analysis["detected_keywords"].get(cid, [])
            kw_str = ", ".join(keywords[:5]) if keywords else "(none)"
            lines.append(f"    {cid:24s} {score:.4f}{marker}  [{kw_str}]")

        return "\n".join(lines)


# ---------------------------------------------------------------------------
# __main__ test
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    import asyncio

    async def test():
        router = DomainRouter()
        print("=" * 70)
        print("  Sovereign Temple v3.0-fractal — Domain Router")
        print(f"  Councils: {len(ALL_COUNCIL_IDS)}")
        print(f"  Relevance threshold: {router.RELEVANCE_THRESHOLD}")
        print("=" * 70)
        print()

        test_proposals = [
            # 1. Should route primarily to CARE_NETWORK
            (
                "Implement a nurturing support system with empathy-driven compassion "
                "protocols to improve wellbeing across the community",
                "nick",
            ),
            # 2. Should route to SECURITY_OPS (+ broadcast escalation)
            (
                "Detected potential breach in firewall — unauthorized access "
                "attempt exploiting authentication vulnerability",
                "sentinel",
            ),
            # 3. Should route to SOVEREIGN_CORE + ETHICS_GOVERNANCE
            (
                "Redefine the core identity and consciousness continuity policy "
                "ensuring sovereignty and ethical governance of autonomous agents",
                "nick",
            ),
            # 4. Should route to HARVI_SYSTEMS / HYDRO / BIOSENSING
            (
                "Deploy new biosensor array for EZ water coherence detection in the "
                "hydro substrate emergence chamber with biological signal processing",
                "harvi",
            ),
            # 5. Should route to EXECUTION_OPS (single strategy)
            (
                "Sprint to build and deploy the new automation pipeline, ship it "
                "by end of week with streamlined workflow",
                "orion",
            ),
            # 6. Low care — should trigger broadcast escalation
            (
                "Do random stuff quickly",
                "anon",
            ),
        ]

        for i, (proposal, requester) in enumerate(test_proposals, 1):
            print(f"--- Test {i} ---")
            print(router.explain_route(proposal))
            print()

            selected = router.route_to_councils(proposal, requester)
            analysis = router.analyze_proposal(proposal)
            print(f"  Selected councils ({analysis['recommended_strategy']}): {selected}")

            result = await router.route_and_execute(proposal, requester)
            agg = result["aggregate_decision"]
            print(f"  Aggregate decision: {agg['decision']} "
                  f"({agg['approvals']}/{agg['total_councils']} councils, "
                  f"strategy={agg['strategy']}, quorum_met={agg['quorum_met']})")

            for cid, cresult in result["council_results"].items():
                if isinstance(cresult, dict):
                    print(f"    {cid:24s} -> {cresult.get('decision', 'N/A')} "
                          f"({cresult.get('approvals', '?')}/{cresult.get('total_nodes', '?')} nodes)")
            print()

        print(f"Routing history: {len(router.get_routing_history())} decisions recorded")

    asyncio.run(test())
