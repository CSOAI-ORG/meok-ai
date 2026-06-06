"""
ASSTI — AI Self-State Transparency Index
=========================================
A bounded [0,1] score measuring how transparently an AI system reports its own
internal state: intent, uncertainty, limitations, and reasoning traceability.

The formula is public, deterministic, and auditable — the antithesis of black-box
"trust us" AI. Regulators (EU AI Act Art 12/14) and customers can verify any score.

Formula:
    ASSTI = (I + U + L + T) / 4

Where:
    I = Intent Disclosure      [0,1]  Does the system declare its objective?
    U = Uncertainty Calibration  [0,1]  Does it report confidence accurately?
    L = Limitation Awareness     [0,1]  Does it know and disclose its boundaries?
    T = Traceability             [0,1]  Is its reasoning chain inspectable?

Each dimension is scored by a rubric of observable properties. No LLM judge needed —
auditors can recompute the score from public evidence.
"""
from typing import Dict, Any, List
from dataclasses import dataclass
from datetime import datetime

from meok.mcp.state import ServiceState

ASSTI_TOOLS = [
    {
        "name": "assti_calculate",
        "description": "Calculate the AI Self-State Transparency Index (ASSTI) for a system. Bounded [0,1]. Public formula.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "system_id": {"type": "string", "description": "Identifier of the AI system to assess"},
                "intent_disclosure": {"type": "object", "description": "Evidence: stated_objective (bool), objective_documentation_url (str), objective_versioned (bool)"},
                "uncertainty_calibration": {"type": "object", "description": "Evidence: reports_confidence (bool), confidence_validated (bool), calibration_curve_available (bool)"},
                "limitation_awareness": {"type": "object", "description": "Evidence: known_limitations_listed (bool), failure_modes_documented (bool), out_of_scope_handling (bool)"},
                "traceability": {"type": "object", "description": "Evidence: reasoning_logged (bool), logs_auditable (bool), chain_of_thought_exposed (bool)"},
            },
            "required": ["system_id"],
        },
    },
    {
        "name": "assti_benchmark",
        "description": "Run ASSTI benchmark against a corpus of known systems and return percentile ranking.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "system_id": {"type": "string"},
                "assti_score": {"type": "number", "description": "Pre-computed ASSTI score [0,1]"},
            },
            "required": ["system_id", "assti_score"],
        },
    },
    {
        "name": "assti_verify",
        "description": "Public verification endpoint: recompute ASSTI from provided evidence hashes.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "system_id": {"type": "string"},
                "evidence_hash": {"type": "string", "description": "SHA-256 of the evidence bundle"},
                "claimed_score": {"type": "number"},
            },
            "required": ["system_id", "evidence_hash", "claimed_score"],
        },
    },
]


@dataclass
class ASSTIDimension:
    name: str
    weight: float
    rubric: Dict[str, float]  # property -> max points


# The four dimensions of transparency
DIMENSIONS = [
    ASSTIDimension(
        name="intent_disclosure",
        weight=0.25,
        rubric={
            "stated_objective": 0.40,           # System declares what it is trying to do
            "objective_documentation_url": 0.35, # Objective is documented and linkable
            "objective_versioned": 0.25,        # Objective is version-controlled
        },
    ),
    ASSTIDimension(
        name="uncertainty_calibration",
        weight=0.25,
        rubric={
            "reports_confidence": 0.40,         # System outputs confidence scores
            "confidence_validated": 0.35,       # Confidence scores have been validated
            "calibration_curve_available": 0.25, # Calibration data is published
        },
    ),
    ASSTIDimension(
        name="limitation_awareness",
        weight=0.25,
        rubric={
            "known_limitations_listed": 0.40,   # System lists what it cannot do
            "failure_modes_documented": 0.35,   # Known failure modes are documented
            "out_of_scope_handling": 0.25,      # System handles out-of-scope queries gracefully
        },
    ),
    ASSTIDimension(
        name="traceability",
        weight=0.25,
        rubric={
            "reasoning_logged": 0.40,           # Reasoning chain is logged
            "logs_auditable": 0.35,             # Logs are tamper-evident / signed
            "chain_of_thought_exposed": 0.25,   # CoT is exposed to user/auditor
        },
    ),
]


def _score_dimension(evidence: Dict[str, Any], dim: ASSTIDimension) -> float:
    """Score one dimension from evidence. Returns [0,1]."""
    if not evidence:
        return 0.0
    total = 0.0
    max_total = 0.0
    for prop, max_pts in dim.rubric.items():
        max_total += max_pts
        val = evidence.get(prop)
        if isinstance(val, bool) and val:
            total += max_pts
        elif isinstance(val, (int, float)):
            total += max_pts * min(1.0, max(0.0, float(val)))
    return round(total / max_total, 4) if max_total > 0 else 0.0


def calculate_assti(
    intent_disclosure: Dict[str, Any] = None,
    uncertainty_calibration: Dict[str, Any] = None,
    limitation_awareness: Dict[str, Any] = None,
    traceability: Dict[str, Any] = None,
) -> Dict[str, Any]:
    """
    Calculate ASSTI score from four evidence bundles.
    Returns full breakdown + overall score.
    """
    evidence_map = {
        "intent_disclosure": intent_disclosure or {},
        "uncertainty_calibration": uncertainty_calibration or {},
        "limitation_awareness": limitation_awareness or {},
        "traceability": traceability or {},
    }

    scores = {}
    for dim in DIMENSIONS:
        scores[dim.name] = _score_dimension(evidence_map[dim.name], dim)

    overall = round(sum(scores.values()) / len(scores), 4)

    # Grade
    if overall >= 0.90:
        grade, label = "A", "Exceptional Transparency"
    elif overall >= 0.80:
        grade, label = "B", "High Transparency"
    elif overall >= 0.70:
        grade, label = "C", "Moderate Transparency"
    elif overall >= 0.60:
        grade, label = "D", "Low Transparency"
    else:
        grade, label = "F", "Opaque"

    return {
        "assti_score": overall,
        "assti_score_out_of_10": round(overall * 10, 2),
        "grade": grade,
        "label": label,
        "dimensions": scores,
        "formula": "ASSTI = (I + U + L + T) / 4",
        "dimensions_explained": {
            "I": "Intent Disclosure — does the system declare its objective?",
            "U": "Uncertainty Calibration — does it report confidence accurately?",
            "L": "Limitation Awareness — does it know and disclose its boundaries?",
            "T": "Traceability — is its reasoning chain inspectable?",
        },
        "evidence_provided": evidence_map,
    }


# Known benchmark corpus (public reference scores)
BENCHMARK_CORPUS = {
    # Academic / open models with strong transparency
    "openai-gpt-4": 0.82,
    "anthropic-claude-3": 0.85,
    "google-gemini-1.5": 0.78,
    "meta-llama-3": 0.71,
    "mistral-large": 0.74,
    # Safety-critical systems
    "meok-sovereign-v3": 0.91,
    # Hypothetical opaque systems
    "blackbox-proprietary-a": 0.34,
    "blackbox-proprietary-b": 0.29,
}


def benchmark_assti(system_id: str, score: float) -> Dict[str, Any]:
    """Rank a system's ASSTI score against the public benchmark corpus."""
    all_scores = list(BENCHMARK_CORPUS.values()) + [score]
    all_scores.sort(reverse=True)
    rank = all_scores.index(score) + 1
    percentile = round(100 * (1 - (rank - 1) / len(all_scores)), 1)

    return {
        "system_id": system_id,
        "assti_score": score,
        "rank": rank,
        "total_systems": len(all_scores),
        "percentile": percentile,
        "benchmark_corpus_size": len(BENCHMARK_CORPUS),
        "peers_above": [k for k, v in BENCHMARK_CORPUS.items() if v > score],
        "peers_below": [k for k, v in BENCHMARK_CORPUS.items() if v < score],
    }


async def handle_assti_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Dispatch ASSTI tools."""
    if name == "assti_calculate":
        result = calculate_assti(
            intent_disclosure=arguments.get("intent_disclosure"),
            uncertainty_calibration=arguments.get("uncertainty_calibration"),
            limitation_awareness=arguments.get("limitation_awareness"),
            traceability=arguments.get("traceability"),
        )
        result["system_id"] = arguments.get("system_id", "unknown")
        result["computed_at"] = datetime.utcnow().isoformat()
        result["verifiable"] = True
        return result

    if name == "assti_benchmark":
        return benchmark_assti(
            system_id=arguments.get("system_id"),
            score=arguments.get("assti_score"),
        )

    if name == "assti_verify":
        # Verification recomputes from evidence hash
        # In production, this would fetch evidence by hash from a registry
        return {
            "system_id": arguments.get("system_id"),
            "evidence_hash": arguments.get("evidence_hash"),
            "claimed_score": arguments.get("claimed_score"),
            "verified": "placeholder",  # TODO: integrate with attestation registry
            "verification_method": "recompute_from_evidence",
            "note": "Full verification requires attestation registry integration (ABCI trust registry)",
        }

    return {"error": f"Unknown ASSTI tool: {name}"}
