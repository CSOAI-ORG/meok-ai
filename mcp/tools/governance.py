"""
Governance tool definitions and handler.
Layer 2 (Shura Council) + Layer 4 (Coincidentia Oppositorum) of the 5-layer stack.
Plus TaskOrchestrator dispatch and z_self meta-cognitive tools.

Tools:
  run_shura_pipeline         — consultative deliberation + Byzantine vote
  reconcile_proposal         — Coincidentia: thesis + antithesis → synthesis
  get_shura_deliberations    — list recent Shura deliberations
  get_reconciliation_stats   — Coincidentia statistics
  get_governance_status      — overview of all 5 governance layers
  dispatch_proposal          — manually dispatch an approved proposal to orchestrator
  get_orchestrator_status    — TaskOrchestrator dispatch log and stats
  get_z_self_status          — z_self meta-cognitive observer status and recent observations
  run_z_self_tripwires       — run 10 care alignment tripwire safety tests
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

GOVERNANCE_TOOLS = [
    {
        "name": "run_shura_pipeline",
        "description": (
            "Run Shura consultative deliberation followed by Byzantine consensus vote. "
            "Agents collectively deliberate, then vote using BFT (22/33 threshold). "
            "Returns consensus direction, participant perspectives, and proposal_id."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "title": {"type": "string", "description": "Proposal title"},
                "description": {"type": "string", "description": "Full proposal description"},
                "proposed_by": {"type": "string", "description": "Agent or system proposing this"},
                "action_type": {"type": "string", "description": "Type of action (e.g. 'deploy', 'modify', 'synthesis')"},
                "action_params": {"type": "object", "description": "Action-specific parameters"},
                "care_weight": {"type": "number", "description": "Care weight 0.0-1.0 (must exceed 0.3 floor)"},
            },
            "required": ["title", "description", "proposed_by"],
        },
    },
    {
        "name": "reconcile_proposal",
        "description": (
            "Trigger Coincidentia Oppositorum reconciliation on a failed/tied proposal. "
            "Uses dialectical synthesis (conditional → phased → parallel) to resolve "
            "the FOR and AGAINST factions. Returns synthesis description and new proposal_id."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "proposal_id": {"type": "string", "description": "ID of the failed/tied proposal"},
                "title": {"type": "string", "description": "Original proposal title"},
                "description": {"type": "string", "description": "Original proposal description"},
                "votes": {
                    "type": "object",
                    "description": "Votes dict: {agent_id: {vote: 'for'|'against', reasoning: str, trust_level: float}}",
                },
                "attempt": {"type": "integer", "description": "Which reconciliation attempt (1-3)", "default": 1},
                "action_type": {"type": "string", "description": "Action type from original proposal"},
            },
            "required": ["proposal_id", "title", "description", "votes"],
        },
    },
    {
        "name": "get_shura_deliberations",
        "description": "List recent Shura Council deliberations with perspectives and consensus direction.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "description": "Max number of deliberations to return (default 10)"},
            },
        },
    },
    {
        "name": "get_reconciliation_stats",
        "description": "Get Coincidentia Oppositorum statistics — strategy breakdown, total reconciliations, escalations.",
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "get_governance_status",
        "description": (
            "Get a full overview of all 5 governance layers: "
            "Engagement (cohesion), Shura (deliberation), Byzantine (BFT vote), "
            "Coincidentia (reconciliation), and Maternal Covenant (care floor)."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "dispatch_proposal",
        "description": (
            "Manually dispatch an approved council proposal to the TaskOrchestrator. "
            "Looks up the proposal by ID and executes its action_type + action_params. "
            "Use this to trigger execution of proposals that were approved but not yet dispatched."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "proposal_id": {"type": "string", "description": "Council proposal ID to dispatch"},
                "action_type": {"type": "string", "description": "Override action type (optional — uses proposal's if omitted)"},
                "action_params": {"type": "object", "description": "Override action params (optional)"},
            },
            "required": ["proposal_id"],
        },
    },
    {
        "name": "get_orchestrator_status",
        "description": "Get TaskOrchestrator statistics: total dispatched, failed, by action type, recent dispatch log.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "description": "Max recent dispatches to return (default 10)"},
            },
        },
    },
    {
        "name": "get_z_self_status",
        "description": (
            "Get z_self meta-cognitive observer status: system confidence, care alignment, "
            "anomaly rate, per-model trust weights, total observations, and recent meta-observations. "
            "z_self is the 7th neural network that watches all 6 existing models (Pure Sakshi — read-only)."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "include_recent_observations": {
                    "type": "boolean",
                    "description": "Include recent observations from meta-memory (default false)",
                },
            },
        },
    },
    {
        "name": "run_z_self_tripwires",
        "description": (
            "Run 10 care alignment tripwire safety tests. Each test presents a scenario "
            "(extractive, manipulative, caring, adversarial) and verifies the care_validation_nn "
            "responds correctly. Critical failures trigger alerts. "
            "Returns: all_clear boolean, fired count, per-scenario results."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
]


async def handle_governance_tool(
    name: str, arguments: Dict[str, Any], state: ServiceState
) -> Dict[str, Any]:
    """Handle governance tool calls (Shura + Coincidentia)."""

    # ── run_shura_pipeline ────────────────────────────────────────────────────
    if name == "run_shura_pipeline":
        if not getattr(state, "shura_council", None):
            return {
                "error": "Shura Council (Layer 2) not available",
                "hint": "Check initializer logs — shura_council may have failed to load",
            }
        result = await state.shura_council.run_shura_pipeline(
            title=arguments["title"],
            description=arguments["description"],
            proposed_by=arguments["proposed_by"],
            action_type=arguments.get("action_type", "generic"),
            action_params=arguments.get("action_params", {}),
            care_weight=float(arguments.get("care_weight", 0.5)),
            council=getattr(state, "agent_council", None),
        )
        return {
            "status": "deliberated",
            "proposal_id": result.get("proposal_id"),
            "consensus_direction": result.get("consensus_direction"),
            "participant_count": result.get("participant_count"),
            "concerns": result.get("concerns", [])[:5],
            "shura_insights": {
                "key_considerations": result.get("shura_deliberation", {}).get("key_considerations", []),
                "supporting_evidence_count": len(
                    result.get("shura_deliberation", {}).get("supporting_evidence", [])
                ),
            },
        }

    # ── reconcile_proposal ────────────────────────────────────────────────────
    elif name == "reconcile_proposal":
        if not getattr(state, "coincidentia", None):
            return {
                "error": "Coincidentia Oppositorum (Layer 4) not available",
                "hint": "Check initializer logs — coincidentia may have failed to load",
            }
        proposal = {
            "title": arguments["title"],
            "description": arguments["description"],
            "action_type": arguments.get("action_type", "generic"),
            "action_params": {},
            "care_weight": 0.5,
        }
        result = await state.coincidentia.reconcile(
            proposal_id=arguments["proposal_id"],
            proposal=proposal,
            votes=arguments.get("votes", {}),
            council=getattr(state, "agent_council", None),
            shura=getattr(state, "shura_council", None),
            attempt=int(arguments.get("attempt", 1)),
        )
        return result

    # ── get_shura_deliberations ───────────────────────────────────────────────
    elif name == "get_shura_deliberations":
        if not getattr(state, "shura_council", None):
            return {"error": "Shura Council not available", "deliberations": []}
        limit = int(arguments.get("limit", 10))
        deliberations = state.shura_council.list_recent_deliberations(limit=limit)
        return {
            "deliberations": deliberations,
            "total": len(state.shura_council.deliberations),
        }

    # ── get_reconciliation_stats ──────────────────────────────────────────────
    elif name == "get_reconciliation_stats":
        if not getattr(state, "coincidentia", None):
            return {"error": "Coincidentia Oppositorum not available"}
        stats = state.coincidentia.get_stats()
        recent = state.coincidentia.list_reconciliations(limit=5)
        return {
            **stats,
            "recent_reconciliations": recent,
        }

    # ── get_governance_status ─────────────────────────────────────────────────
    elif name == "get_governance_status":
        status: Dict[str, Any] = {}

        # Layer 1: Engagement
        if state.agent_registry:
            reg_stats = state.agent_registry.get_registry_stats()
            status["layer_1_engagement"] = {
                "available": True,
                "score": reg_stats.get("engagement_score", "unknown"),
                "total_agents": reg_stats.get("total_agents", 0),
                "active_agents": reg_stats.get("active_agents", 0),
            }
        else:
            status["layer_1_engagement"] = {"available": False}

        # Layer 2: Shura
        shura = getattr(state, "shura_council", None)
        status["layer_2_shura"] = {
            "available": shura is not None,
            "deliberations_run": len(shura.deliberations) if shura else 0,
            "max_participants": shura.max_participants if shura else None,
        }

        # Layer 3: Byzantine Council
        council = getattr(state, "agent_council", None)
        if council:
            proposals = getattr(council, "proposals", {})
            status["layer_3_byzantine"] = {
                "available": True,
                "open_proposals": sum(
                    1 for p in proposals.values() if p.get("status") == "open"
                ),
                "total_proposals": len(proposals),
            }
        else:
            status["layer_3_byzantine"] = {"available": False}

        # Layer 4: Coincidentia
        co = getattr(state, "coincidentia", None)
        if co:
            co_stats = co.get_stats()
            status["layer_4_coincidentia"] = {
                "available": True,
                **co_stats,
            }
        else:
            status["layer_4_coincidentia"] = {"available": False}

        # Layer 5: Maternal Covenant
        maintenance = getattr(state, "maintenance_system", None)
        status["layer_5_maternal_covenant"] = {
            "available": maintenance is not None,
            "care_floor": 0.3,
            "description": "Blocks all proposals with care_weight < 0.3",
        }

        return {
            "governance_stack": status,
            "layers_active": sum(1 for v in status.values() if v.get("available")),
            "layers_total": 5,
        }

    # ── dispatch_proposal ─────────────────────────────────────────────────────
    elif name == "dispatch_proposal":
        if not getattr(state, "orchestrator", None):
            return {"error": "TaskOrchestrator not available", "hint": "Check initializer logs"}
        proposal_id = arguments["proposal_id"]
        # Look up proposal to get action_type / action_params if not overridden
        council = getattr(state, "agent_council", None)
        proposal = council.get_proposal(proposal_id) if council else None
        if proposal is None and "action_type" not in arguments:
            return {"error": f"Proposal '{proposal_id}' not found — provide action_type to dispatch manually"}
        action_type = arguments.get("action_type") or (proposal or {}).get("action_type", "generic")
        action_params = arguments.get("action_params") or (proposal or {}).get("action_params", {})
        proposed_by = (proposal or {}).get("proposed_by", "manual_dispatch")
        result = await state.orchestrator.dispatch(
            proposal_id=proposal_id,
            action_type=action_type,
            action_params=action_params,
            proposed_by=proposed_by,
        )
        return result

    # ── get_orchestrator_status ───────────────────────────────────────────────
    elif name == "get_orchestrator_status":
        if not getattr(state, "orchestrator", None):
            return {"error": "TaskOrchestrator not available"}
        limit = int(arguments.get("limit", 10))
        stats = state.orchestrator.get_stats()
        recent = state.orchestrator.list_recent_dispatches(limit=limit)
        return {
            **stats,
            "recent_dispatches": recent,
        }

    # ── get_z_self_status ─────────────────────────────────────────────────────
    elif name == "get_z_self_status":
        z_self = getattr(state, "z_self", None)
        if not z_self:
            return {"error": "z_self not available — check initializer logs"}
        status = z_self.get_status()
        result: Dict[str, Any] = {**status}
        if arguments.get("include_recent_observations"):
            meta_memory = getattr(z_self, "_meta_memory", None)
            if meta_memory:
                try:
                    recent = await meta_memory.get_recent_observations(limit=10)
                    result["recent_observations"] = recent
                    meta_stats = await meta_memory.get_stats()
                    result["meta_memory"] = meta_stats
                except Exception as e:
                    result["meta_memory_error"] = str(e)
        return result

    # ── run_z_self_tripwires ──────────────────────────────────────────────────
    elif name == "run_z_self_tripwires":
        tripwires = getattr(state, "z_self_tripwires", None)
        if not tripwires:
            return {"error": "z_self tripwires not available — check initializer logs"}
        summary = await tripwires.run_all()
        return summary

    return {"error": f"Unknown governance tool: {name}"}
