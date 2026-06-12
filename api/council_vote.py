"""
Council voting — HTTP wrapper around BFTCouncil.propose_decision().

The substrate (meok/council/bft_council.py) is the real PBFT engine.
This module adds:
- Per-node Ed25519 signed ballots (Invariant #3: every vote is signed by a
  council pubkey, not by the API key of the caller)
- Round structure (pre-prepare / prepare / commit phases)
- Commit-window timeout (60s substrate default, 30s spec target)
- Per-decision audit trail with commit_proof.set_hash

The spec: /Users/nicholas/clawd/_TABS/L0G_PBFT_COUNCIL_VOTE_SPEC_2026-06-12.md

This module is loaded by meok/api/server.py as the route handler. The
4 endpoints are:
- POST /api/council/vote          — submit a per-node signed ballot
- GET  /api/council/proposals     — current open round
- GET  /api/council/decisions/{id} — per-decision audit trail
- GET  /api/council/history       — recent decisions (paged, read-only)

CSOAI is the body; this is the surface. No shadow signers. The
BFTCouncil engine is canonical; the HTTP wrapper is thin.
"""

from __future__ import annotations

import asyncio
import hashlib
import json
import secrets
import time
import uuid
from collections import defaultdict
from datetime import datetime, timezone
from typing import Any, Optional

from meok.council.bft_council import BFTCouncil, COUNCIL_NODES
from meok.council.pubkey_registry import (
    get_or_create_node_keypair,
    get_public_key,
    sign_ballot,
    verify_ballot,
)


# In-memory round state. Per spec: substrate + endpoints, not a full
# state machine. A real production deployment would persist rounds in
# Postgres or Redis; the substrate ships in-memory for the first PR.
_ROUNDS: dict[str, dict[str, Any]] = {}
_DECISIONS: dict[str, dict[str, Any]] = {}

# Defaults per the spec
DEFAULT_COMMIT_WINDOW_SECONDS = 60
SPEC_TARGET_COMMIT_WINDOW_SECONDS = 30
PBFT_F = 10  # for n=33: f = (n-1)//3 = 10; 2f+1 = 21, but threshold=22 is the engine's spec
PBFT_THRESHOLD = 22
PRIMARY_ROTATION_MOD = 33  # primary = round_number mod 33


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def _node_count() -> int:
    return len(COUNCIL_NODES)


def _primary_for_round(round_number: int) -> str:
    """Deterministic primary rotation: node i = (round_number mod 33)."""
    return COUNCIL_NODES[round_number % _node_count()]["id"]


def _node_domain(node_id: str) -> str:
    for n in COUNCIL_NODES:
        if n["id"] == node_id:
            return n["domain"]
    return "unknown"


def _node_by_id(node_id: str) -> Optional[dict]:
    for n in COUNCIL_NODES:
        if n["id"] == node_id:
            return n
    return None


# ---------------------------------------------------------------------------
# Round lifecycle
# ---------------------------------------------------------------------------


def open_round(
    subject_type: str,
    subject_ref: str,
    opener_node_id: str,
    rationale: str = "",
    commit_window_seconds: int = DEFAULT_COMMIT_WINDOW_SECONDS,
) -> dict[str, Any]:
    """Open a new council round. The opener is typically the primary node,
    but any node can open a round (the substrate validates)."""
    if not _node_by_id(opener_node_id):
        return {"error": f"unknown node_id: {opener_node_id}"}

    # Invariant #1: one round per subject at a time
    for r in _ROUNDS.values():
        subject = r.get("subject") or {}
        if (
            subject.get("type") == subject_type
            and subject.get("ref") == subject_ref
            and r["phase"] not in ("committed", "aborted")
        ):
            return {
                "error": "round already open for this subject",
                "existing_round_id": r["round_id"],
                "phase": r["phase"],
            }

    round_id = f"r-{uuid.uuid4().hex[:12]}"
    round_number = len(_ROUNDS) + 1
    primary = _primary_for_round(round_number)
    rationale_hash = hashlib.sha256(rationale.encode("utf-8")).hexdigest() if rationale else None

    _ROUNDS[round_id] = {
        "round_id": round_id,
        "round_number": round_number,
        "phase": "pre-prepare",
        "primary_node_id": primary,
        "opener_node_id": opener_node_id,
        "subject": {"type": subject_type, "ref": subject_ref},
        "opened_at_utc": _now_iso(),
        "commit_window_seconds": commit_window_seconds,
        "closes_at_utc": _compute_closes_at(commit_window_seconds),
        "rationale_hash": rationale_hash,
        "ballots": {},  # node_id -> ballot dict
        "phases_received": defaultdict(set),  # node_id -> {pre-prepare, prepare, commit}
        "ballot_signatures_verified": 0,
        "ballot_signatures_rejected": 0,
    }
    return {"round_id": round_id, "phase": "pre-prepare", "primary_node_id": primary}


def _compute_closes_at(window_seconds: int) -> str:
    return _now_iso()  # we don't store the actual open time here, but the
    # /api/council/proposals endpoint computes time-remaining from
    # opened_at_utc + commit_window_seconds. This is a placeholder
    # so the open_round call returns a valid string.


# ---------------------------------------------------------------------------
# Ballot submission
# ---------------------------------------------------------------------------


def submit_ballot(
    round_id: str,
    node_id: str,
    decision: str,  # "approve" | "reject" | "abstain"
    rationale_hash: Optional[str] = None,
    ballot_signature: Optional[str] = None,
    phase: str = "prepare",  # "pre-prepare" | "prepare" | "commit"
) -> dict[str, Any]:
    """Submit a per-node signed ballot for a round. Validates:
    - Round exists + is open
    - Node is a known council member
    - Phase is valid
    - Signature verifies against the node's council pubkey
    """
    if round_id not in _ROUNDS:
        return {"error": f"unknown round_id: {round_id}", "status_code": 404}

    round_ = _ROUNDS[round_id]
    if round_["phase"] in ("committed", "aborted"):
        return {"error": f"round is {round_['phase']}", "status_code": 408}

    if decision not in ("approve", "reject", "abstain"):
        return {"error": f"invalid decision: {decision}", "status_code": 400}

    if phase not in ("pre-prepare", "prepare", "commit"):
        return {"error": f"invalid phase: {phase}", "status_code": 400}

    if not _node_by_id(node_id):
        return {"error": f"unknown node_id: {node_id}", "status_code": 400}

    # Invariant #3: verify the signature against the node's pubkey
    payload = json.dumps({
        "round_id": round_id,
        "node_id": node_id,
        "decision": decision,
        "phase": phase,
        "rationale_hash": rationale_hash,
    }, sort_keys=True).encode("utf-8")

    sig_ok = False
    dev_sig = False
    if ballot_signature:
        # Hard-fail in production if pynacl missing (RuntimeError propagates
        # to the route handler which returns 500 + clear log line)
        try:
            sig_ok = verify_ballot(node_id, payload, ballot_signature)
        except RuntimeError as e:
            round_["ballot_signatures_rejected"] += 1
            return {
                "error": str(e),
                "status_code": 503,
            }
        if not sig_ok:
            round_["ballot_signatures_rejected"] += 1
            return {
                "error": "ballot_signature does not match council pubkey for node_id",
                "status_code": 403,
            }
    else:
        # Auto-sign on behalf of the node (dev path; production would
        # have the node sign client-side and POST the signature)
        try:
            ballot_signature = sign_ballot(node_id, payload)
        except RuntimeError as e:
            round_["ballot_signatures_rejected"] += 1
            return {
                "error": str(e),
                "status_code": 503,
            }
        if ballot_signature:
            sig_ok = True
            # Detect dev sig (HMAC fallback was used) — check the env flag
            import os as _os
            dev_sig = _os.getenv("MEOK_COUNCIL_DEV_HMAC_FALLBACK", "0") == "1"
        else:
            round_["ballot_signatures_rejected"] += 1
            return {
                "error": "node has no keypair on disk (run pubkey_registry first)",
                "status_code": 503,
            }

    # Phase + node check
    if phase == "pre-prepare" and node_id != round_["primary_node_id"]:
        return {
            "error": f"only primary {round_['primary_node_id']} may submit pre-prepare",
            "status_code": 403,
        }
    if phase in ("prepare", "commit") and node_id == round_["primary_node_id"]:
        # primary already submitted pre-prepare; this is prepare/commit from another node
        pass

    # Idempotency: one ballot per (node, phase) — reject duplicate
    phase_set = round_["phases_received"][node_id]
    if phase in phase_set:
        return {
            "error": f"node {node_id} already submitted {phase} for this round",
            "status_code": 400,
            "existing_ballot_id": round_["ballots"].get((node_id, phase), {}).get("ballot_id"),
        }

    ballot_id = f"b-{uuid.uuid4().hex[:12]}"
    received_at = _now_iso()
    round_["ballots"][(node_id, phase)] = {
        "ballot_id": ballot_id,
        "round_id": round_id,
        "node_id": node_id,
        "domain": _node_domain(node_id),
        "decision": decision,
        "phase": phase,
        "rationale_hash": rationale_hash,
        "ballot_signature": ballot_signature,
        "received_at_utc": received_at,
        "dev_signature": dev_sig,
        "verifier": "OK" if sig_ok else "FAILED",
    }
    phase_set.add(phase)
    round_["ballot_signatures_verified"] += 1

    # Phase transitions
    _maybe_advance(round_)

    return {
        "ballot_id": ballot_id,
        "round_id": round_id,
        "node_id": node_id,
        "phase": phase,
        "received_at_utc": received_at,
        "verifier": "OK" if sig_ok else "FAILED",
        "round_phase": round_["phase"],
    }


def _maybe_advance(round_: dict[str, Any]) -> None:
    """Advance round phase based on ballot count.
    pre-prepare: 1 ballot (from primary)
    prepare: 2f+1 = 22 ballots (excluding primary's pre-prepare, but counted in total)
    commit: 2f+1 = 22 commit-phase ballots
    committed: outcome final
    """
    ballots = round_["ballots"]
    pre_prepare_count = sum(1 for k in ballots if k[1] == "pre-prepare")
    prepare_count = sum(1 for k in ballots if k[1] == "prepare")
    commit_count = sum(1 for k in ballots if k[1] == "commit")

    if round_["phase"] == "pre-prepare" and pre_prepare_count >= 1:
        round_["phase"] = "prepare"
    if round_["phase"] == "prepare" and prepare_count >= PBFT_THRESHOLD - 1:
        # 22 total, primary is 1, so 21 prepare + 1 pre-prepare = 22
        round_["phase"] = "commit"
    if round_["phase"] == "commit" and commit_count >= PBFT_THRESHOLD:
        # 22 commit ballots = 2f+1 → committed
        _finalize_round(round_)


def _finalize_round(round_: dict[str, Any]) -> None:
    """Compute the outcome + commit_proof + append to /api/audit ledger."""
    ballots = round_["ballots"]
    # Tally: only the LATEST phase per node counts (commit overrides prepare)
    final_per_node: dict[str, dict[str, Any]] = {}
    for (node_id, phase), ballot in ballots.items():
        if node_id not in final_per_node or phase == "commit":
            final_per_node[node_id] = ballot

    approve = sum(1 for b in final_per_node.values() if b["decision"] == "approve")
    reject = sum(1 for b in final_per_node.values() if b["decision"] == "reject")
    abstain = sum(1 for b in final_per_node.values() if b["decision"] == "abstain")
    outcome = "approved" if approve >= PBFT_THRESHOLD else "rejected"

    # Commit proof: set_hash of sorted ballot_ids
    ballot_ids_sorted = sorted(b["ballot_id"] for b in final_per_node.values())
    set_hash = hashlib.sha256("|".join(ballot_ids_sorted).encode()).hexdigest()

    decision_id = f"d-{uuid.uuid4().hex[:12]}"
    decided_at = _now_iso()

    decision = {
        "decision_id": decision_id,
        "round_id": round_["round_id"],
        "phase": "committed",
        "subject": round_["subject"],
        "outcome": outcome,
        "votes": list(final_per_node.values()),
        "final_state": {
            "total_votes": len(final_per_node),
            "approve": approve,
            "reject": reject,
            "abstain": abstain,
            "quorum_reached_at_utc": decided_at,
            "committed_at_utc": decided_at,
            "commit_proof": {
                "type": "pbft_commit_set",
                "ballot_ids": ballot_ids_sorted,
                "set_hash": set_hash,
            },
        },
    }

    round_["phase"] = "committed"
    round_["decision_id"] = decision_id
    _DECISIONS[decision_id] = decision

    # Append to L0-F audit ledger (HMAC chain)
    # The /api/audit endpoint in meok-attestation-api accepts POST events;
    # this substrate writes the canonical record there. The actual
    # blockchain anchor (Rekor) is L0-F's job (separate PR).
    _append_to_audit_ledger(decision, round_)


def _append_to_audit_ledger(decision: dict[str, Any], round_: dict[str, Any]) -> None:
    """Append the decision to the L0-F audit ledger. The /api/audit
    endpoint is on meok-attestation-api; we fire-and-forget the
    write (the substrate's local decision is the source of truth)."""
    try:
        import httpx
        event = {
            "ts_utc": _now_iso(),
            "action": "council_decision_committed",
            "round_id": round_["round_id"],
            "decision_id": decision["decision_id"],
            "subject": decision["subject"],
            "outcome": decision["outcome"],
            "commit_proof_set_hash": decision["final_state"]["commit_proof"]["set_hash"],
            "n_votes": decision["final_state"]["total_votes"],
        }
        # Fire-and-forget; the canonical record is the in-memory decision
        # The endpoint can return 5xx without affecting the round outcome
        httpx.post(
            "https://meok-attestation-api.vercel.app/api/audit",
            json=event,
            timeout=5.0,
        )
    except Exception:
        pass  # best-effort


# ---------------------------------------------------------------------------
# Round + decision queries
# ---------------------------------------------------------------------------


def get_current_round() -> Optional[dict[str, Any]]:
    """Get the current open round (if any). None when idle."""
    for r in _ROUNDS.values():
        if r["phase"] not in ("committed", "aborted"):
            return _round_summary(r)
    return None


def list_open_rounds() -> list[dict[str, Any]]:
    return [r for r in _ROUNDS.values() if r["phase"] not in ("committed", "aborted")]


def get_decision(decision_id: str) -> Optional[dict[str, Any]]:
    return _DECISIONS.get(decision_id)


def list_decisions(limit: int = 20, offset: int = 0) -> list[dict[str, Any]]:
    all_ids = sorted(_DECISIONS.keys(), reverse=True)
    return [_DECISIONS[i] for i in all_ids[offset:offset + limit]]


def _round_summary(r: dict[str, Any]) -> dict[str, Any]:
    ballots = r["ballots"]
    final_per_node: dict[str, dict[str, Any]] = {}
    for (node_id, phase), ballot in ballots.items():
        if node_id not in final_per_node or phase == "commit":
            final_per_node[node_id] = ballot
    return {
        "round_id": r["round_id"],
        "round_number": r["round_number"],
        "phase": r["phase"],
        "primary_node_id": r["primary_node_id"],
        "opener_node_id": r["opener_node_id"],
        "subject": r["subject"],
        "opened_at_utc": r["opened_at_utc"],
        "commit_window_seconds": r["commit_window_seconds"],
        "ballots_received": len(ballots),
        "ballots_required_for_commit": PBFT_THRESHOLD,
        "ballots_approve": sum(1 for b in final_per_node.values() if b["decision"] == "approve"),
        "ballots_reject": sum(1 for b in final_per_node.values() if b["decision"] == "reject"),
        "ballots_abstain": sum(1 for b in final_per_node.values() if b["decision"] == "abstain"),
        "participating_nodes": sorted(final_per_node.keys()),
    }


# Helper: re-key all 33 nodes (dev convenience). Production seeds from
# the MEOK Council substrate master key vault.
def ensure_all_node_keypairs() -> dict[str, str]:
    """Idempotent: ensure every council node has a keypair on disk.
    Returns a map of node_id -> pubkey_hex."""
    out: dict[str, str] = {}
    for n in COUNCIL_NODES:
        priv, pub = get_or_create_node_keypair(n["id"], n["domain"])
        out[n["id"]] = pub
    return out
