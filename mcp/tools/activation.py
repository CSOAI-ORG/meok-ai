"""
Cold-Start Activation Tools — Break Agent Dormancy.

The system has 6,660 registered agents and a full 5-layer governance stack,
but zero tasks completed and relationship density 0.0 — a "fully loaded weapon
that hasn't been fired" (architecture brief, 2025).

These tools run the 3-phase cold-start activation sequence:
    Phase 1 — Seed: deploy 33 councils on verifiable micro-tasks
    Phase 2 — Bridge: cross-council task exchange builds relationships
    Phase 3 — Specialize: pheromone trails emerge, divisions form

Tools exposed via MCP:
    seed_first_councils          — Phase 1: launch micro-tasks on first 33 councils
    run_activation_sequence      — Full 3-phase sequence (background)
    get_activation_status        — Progress: tasks done, trust points, density
    run_contract_net_auction     — Manual task auction (test routing)
    get_generals_status          — Division General hierarchy + per-council asabiyyah
    get_shapley_stats            — Attribution statistics
"""

from typing import Any, Dict

from meok.mcp.state import ServiceState


ACTIVATION_TOOLS = [
    {
        "name": "seed_first_councils",
        "description": (
            "Phase 1 cold-start: seed the first 33 councils with verifiable micro-tasks "
            "(code analysis, memory consolidation, system health check). "
            "Each micro-task fires Contract Net routing, deposits pheromone trails, "
            "and records Shapley attribution. Returns task count + initial relationship density."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_count": {
                    "type": "integer",
                    "description": "Number of micro-tasks to seed (default 33, one per council)",
                },
                "task_types": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Task types to use (default: ['memory_write', 'generic', 'research'])",
                },
            },
        },
    },
    {
        "name": "run_activation_sequence",
        "description": (
            "Run full 3-phase activation sequence: "
            "Phase 1 (seed micro-tasks) → Phase 2 (cross-council bridges) → "
            "Phase 3 (specialization emergence). "
            "Returns progress after each phase. Takes 30-60 seconds."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "phases": {
                    "type": "array",
                    "items": {"type": "integer"},
                    "description": "Which phases to run (default [1, 2, 3]). Can run subset.",
                },
            },
        },
    },
    {
        "name": "get_activation_status",
        "description": (
            "Get cold-start activation progress: tasks completed, relationship density, "
            "trust points accumulated, pheromone specialisation count, "
            "Shapley attributions applied, and top emerging specialists."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "run_contract_net_auction",
        "description": (
            "Manually run a Contract Net task auction for a given task type. "
            "Broadcasts CFP to all capable agents, collects bids, awards task. "
            "Returns winning agent, all bids, and pheromone weights. "
            "Use for testing task routing or triggering specific action types."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "task_type": {
                    "type": "string",
                    "description": "Task type to auction (e.g. 'research', 'memory_write', 'generic')",
                },
                "description": {
                    "type": "string",
                    "description": "Task description",
                },
                "required_capabilities": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Required agent capabilities",
                },
                "care_weight": {
                    "type": "number",
                    "description": "Care weight for the task (default 0.5)",
                },
                "execute": {
                    "type": "boolean",
                    "description": "If true, actually execute the task via orchestrator (default false — auction only)",
                },
            },
            "required": ["task_type"],
        },
    },
    {
        "name": "get_generals_status",
        "description": (
            "Get Division General hierarchy status: number of generals, councils per division, "
            "per-division Asabiyyah scores, mediation statistics, and weakest divisions "
            "needing intervention."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "include_council_asabiyyah": {
                    "type": "boolean",
                    "description": "Include per-council Asabiyyah scores (can be large)",
                },
            },
        },
    },
    {
        "name": "get_shapley_stats",
        "description": (
            "Get Shapley value attribution statistics: total computations, trust updates applied, "
            "recent task attributions, top contributing agents by cumulative Shapley credit."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "top_agents": {
                    "type": "integer",
                    "description": "Number of top agents to return by Shapley credit (default 5)",
                },
            },
        },
    },
    {
        "name": "ingest_civilizational_knowledge",
        "description": (
            "Ingest the pain-point corpus and playbook signals as training data into the "
            "Council-to-Neural learning pipeline. Feeds 60+ structured care/anti-care examples "
            "from documented AI failures and success playbooks into the River online learner. "
            "Call this once after startup to give the agents foundational care alignment training."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "purge_agents",
        "description": (
            "DANGER: Wipe ALL agents from memory and database. "
            "Use to recover from runaway agent spawning loops (e.g. 6,660 agents). "
            "After purge, call seed_proper_council to register the correct 408 agents. "
            "Returns count of agents purged."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "confirm": {
                    "type": "string",
                    "description": "Must be 'PURGE' to confirm destructive operation",
                },
            },
            "required": ["confirm"],
        },
    },
    {
        "name": "seed_relationships",
        "description": (
            "Seed trust relationships between the 408 registered agents. "
            "Each General bonds with their 33 council nodes (trust 0.8). "
            "T5 bridge agents link to adjacent councils (trust 0.7). "
            "All 12 Generals form a cross-council trust network (trust 0.85). "
            "Raises relationship_density above 0.0 and boosts asabiyyah toward 0.5+. "
            "Run after seed_proper_council."
        ),
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "seed_bootstrap_tasks",
        "description": (
            "Seed 120 bootstrap tasks (10 per council) to establish task execution history. "
            "Tasks are simple analysis/monitoring tasks assigned to T3 worker nodes. "
            "Each completion updates tasks_completed, performance_score, and asabiyyah. "
            "Run after seed_relationships to push task_success_ratio above 0.0."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "tasks_per_council": {
                    "type": "integer",
                    "description": "Number of bootstrap tasks per council (default 10)",
                },
            },
        },
    },
    {
        "name": "seed_proper_council",
        "description": (
            "Register the proper 12-council hierarchy: 12 Division Generals (trust 0.95) "
            "each with 33 nodes (T1-T5 tiers), totalling 408 agents. "
            "Automatically purges all existing agents first. "
            "Neural models wired to councils: Defence→threat_detection, Ethics→care_validation, "
            "Strategy→partnership, Innovation→creativity, Stewardship→relationship_evolution. "
            "Hard cap: 410 agents enforced after seeding."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
]


async def handle_activation_tool(
    name: str, arguments: Dict[str, Any], state: ServiceState
) -> Dict[str, Any]:
    """Handle activation and hierarchy tool calls."""

    # ── seed_first_councils ───────────────────────────────────────────────────
    if name == "seed_first_councils":
        cnp = getattr(state, "contract_net", None)
        shapley = getattr(state, "shapley_attributor", None)
        orchestrator = getattr(state, "orchestrator", None)

        if not cnp:
            return {"error": "ContractNetProtocol not available — check initializer logs"}

        task_count = int(arguments.get("task_count", 33))
        task_types = arguments.get("task_types", ["memory_write", "generic", "research"])
        if not task_types:
            task_types = ["memory_write", "generic", "research"]

        import uuid as _uuid
        seeded = 0
        contracts_created = []

        for i in range(task_count):
            task_type = task_types[i % len(task_types)]
            task = {
                "id": f"seed_{_uuid.uuid4().hex[:8]}",
                "type": task_type,
                "description": f"Cold-start seed task #{i+1}: {task_type} micro-task",
                "required_capabilities": [],
                "care_weight": 0.6,
            }

            bids = await cnp.broadcast_call_for_proposals(task, max_bidders=5)
            if bids:
                winner_id = await cnp.award_task(bids, task)
                if winner_id:
                    # Execute via orchestrator if available
                    result_success = True
                    if orchestrator:
                        try:
                            dispatch = await orchestrator.dispatch(
                                proposal_id=task["id"],
                                action_type=task_type,
                                action_params={"description": task["description"]},
                                proposed_by="cold_start_activation",
                            )
                            result_success = "error" not in dispatch
                        except Exception:
                            result_success = False

                    # Find contract_id for outcome recording
                    # (cnp._contracts stores by contract_id — find newest)
                    contract_id = None
                    for cid, c in reversed(list(cnp._contracts.items())):
                        if c.awarded_agent_id == winner_id and c.task_id == task["id"]:
                            contract_id = cid
                            break
                    if contract_id:
                        await cnp.record_outcome(contract_id, success=result_success)

                    # Shapley attribution (single agent = trivial)
                    if shapley:
                        sr = shapley.compute_shapley(
                            task_id=task["id"],
                            task_type=task_type,
                            participating_agents=[winner_id],
                            outcome_value=0.7 if result_success else 0.3,
                        )
                        shapley.update_trust_from_shapley(sr)

                    seeded += 1
                    contracts_created.append({
                        "task_id": task["id"],
                        "task_type": task_type,
                        "winner": winner_id,
                        "bids": len(bids),
                        "success": result_success,
                    })

        cnp_stats = cnp.get_stats()
        return {
            "status": "seeded",
            "tasks_seeded": seeded,
            "total_requested": task_count,
            "pheromone_stats": cnp_stats.get("pheromones", {}),
            "recent_contracts": contracts_created[-5:],
        }

    # ── run_activation_sequence ───────────────────────────────────────────────
    elif name == "run_activation_sequence":
        phases = arguments.get("phases", [1, 2, 3])
        results = {}

        if 1 in phases:
            r1 = await handle_activation_tool(
                "seed_first_councils",
                {"task_count": 33},
                state,
            )
            results["phase_1_seed"] = r1

        if 2 in phases:
            # Phase 2: cross-council bridges — seed tasks explicitly across different task types
            r2 = await handle_activation_tool(
                "seed_first_councils",
                {"task_count": 20, "task_types": ["research", "neural_retrain", "dream"]},
                state,
            )
            results["phase_2_bridge"] = r2

        if 3 in phases:
            # Phase 3: specialization — seed high-load tasks to deepen pheromone trails
            r3 = await handle_activation_tool(
                "seed_first_councils",
                {"task_count": 15, "task_types": ["security_harden", "memory_write", "research"]},
                state,
            )
            results["phase_3_specialize"] = r3

        # Final status
        status = await handle_activation_tool("get_activation_status", {}, state)
        results["final_status"] = status
        return {"status": "sequence_complete", "phases_run": phases, "results": results}

    # ── get_activation_status ─────────────────────────────────────────────────
    elif name == "get_activation_status":
        cnp = getattr(state, "contract_net", None)
        shapley = getattr(state, "shapley_attributor", None)
        generals = getattr(state, "general_registry", None)
        registry = getattr(state, "agent_registry", None)

        cnp_stats = cnp.get_stats() if cnp else {}
        shapley_stats = shapley.get_stats() if shapley else {}
        generals_stats = generals.get_stats() if generals else {}

        # Relationship density from registry
        reg_stats = registry.get_registry_stats() if registry else {}
        asabiyyah = reg_stats.get("asabiyyah", {})

        # Top specialists from pheromone trails
        top_specialists = []
        if cnp:
            for task_type in ["research", "memory_write", "generic", "neural_retrain"]:
                specs = cnp.pheromones.get_specialisations(task_type, threshold=0.6)
                for aid, weight in specs[:2]:
                    top_specialists.append({
                        "agent_id": aid,
                        "task_type": task_type,
                        "pheromone": weight,
                    })

        return {
            "tasks_completed": cnp_stats.get("completed_contracts", 0),
            "total_auctions": cnp_stats.get("total_auctions", 0),
            "success_rate": cnp_stats.get("success_rate", 0.0),
            "relationship_density": asabiyyah.get("components", {}).get("relationship_density", 0.0),
            "asabiyyah_score": asabiyyah.get("score", 0.0),
            "asabiyyah_phase": asabiyyah.get("phase", "dormant"),
            "shapley_computations": shapley_stats.get("total_computations", 0),
            "trust_updates_applied": shapley_stats.get("trust_updates_applied", 0),
            "pheromone_specialisations": cnp_stats.get("pheromones", {}).get("specialised_count", 0),
            "top_specialists": top_specialists[:6],
            "division_generals": generals_stats.get("division_generals", 0),
            "councils_tracked": generals_stats.get("councils_tracked", 0),
        }

    # ── run_contract_net_auction ──────────────────────────────────────────────
    elif name == "run_contract_net_auction":
        cnp = getattr(state, "contract_net", None)
        if not cnp:
            return {"error": "ContractNetProtocol not available"}

        import uuid as _uuid
        task_type = arguments.get("task_type", "generic")
        task = {
            "id": f"manual_{_uuid.uuid4().hex[:8]}",
            "type": task_type,
            "description": arguments.get("description", f"Manual {task_type} task"),
            "required_capabilities": arguments.get("required_capabilities", []),
            "care_weight": float(arguments.get("care_weight", 0.5)),
        }

        bids = await cnp.broadcast_call_for_proposals(task)
        winner_id = None
        contract_id = None

        if bids:
            winner_id = await cnp.award_task(bids, task)
            # Find contract
            for cid, c in reversed(list(cnp._contracts.items())):
                if c.awarded_agent_id == winner_id and c.task_id == task["id"]:
                    contract_id = cid
                    break

        # Execute if requested
        execution_result = None
        if arguments.get("execute") and winner_id and getattr(state, "orchestrator", None):
            try:
                execution_result = await state.orchestrator.dispatch(
                    proposal_id=task["id"],
                    action_type=task_type,
                    action_params={"description": task["description"]},
                    proposed_by="manual_auction",
                )
                if contract_id:
                    await cnp.record_outcome(contract_id, success="error" not in execution_result)
            except Exception as e:
                execution_result = {"error": str(e)}

        return {
            "task_id": task["id"],
            "task_type": task_type,
            "total_bids": len(bids),
            "winner_agent_id": winner_id,
            "contract_id": contract_id,
            "top_bids": [
                {
                    "agent_id": b.agent_id,
                    "score": b.compute_score(),
                    "capability": b.capability_score,
                    "trust": b.trust_level,
                    "pheromone": b.pheromone_weight,
                }
                for b in bids[:5]
            ],
            "execution_result": execution_result,
        }

    # ── get_generals_status ───────────────────────────────────────────────────
    elif name == "get_generals_status":
        generals = getattr(state, "general_registry", None)
        if not generals:
            return {"error": "GeneralRegistry not available — check initializer logs"}

        stats = generals.get_stats()
        general_list = generals.list_generals()

        result = {**stats, "generals": general_list[:20]}

        if arguments.get("include_council_asabiyyah"):
            result["council_asabiyyah"] = generals.get_all_council_asabiyyah()

        return result

    # ── get_shapley_stats ─────────────────────────────────────────────────────
    elif name == "get_shapley_stats":
        shapley = getattr(state, "shapley_attributor", None)
        if not shapley:
            return {"error": "ShapleyAttributor not available — check initializer logs"}

        top_n = int(arguments.get("top_agents", 5))
        stats = shapley.get_stats()
        recent = shapley.list_recent_results(limit=10)

        # Top agents by total credit
        top_agents = []
        registry = getattr(state, "agent_registry", None)
        if registry:
            agent_ids = list(registry.agents.keys())[:50]  # Check first 50 agents
            credits = [shapley.get_agent_total_credit(aid) for aid in agent_ids]
            credits.sort(key=lambda x: x["total_shapley_credit"], reverse=True)
            top_agents = credits[:top_n]

        return {
            **stats,
            "recent_attributions": recent,
            "top_agents_by_credit": top_agents,
        }

    # ── purge_agents ──────────────────────────────────────────────────────────
    elif name == "purge_agents":
        if arguments.get("confirm") != "PURGE":
            return {"error": "Must pass confirm='PURGE' to execute. This deletes all agents."}
        registry = getattr(state, "agent_registry", None)
        if registry is None:
            return {"error": "agent_registry not available"}
        result = await registry.purge_all_agents()
        return {**result, "status": "purged", "message": "All agents cleared. Call seed_proper_council to re-register."}

    # ── seed_proper_council ───────────────────────────────────────────────────
    elif name == "seed_proper_council":
        registry = getattr(state, "agent_registry", None)
        if registry is None:
            return {"error": "agent_registry not available"}
        try:
            from meok.agents.generals_seed import seed_proper_council as _seed
            result = await _seed(registry)
            return {**result, "status": "seeded"}
        except Exception as exc:
            import traceback
            return {"error": str(exc), "traceback": traceback.format_exc()}

    # ── ingest_civilizational_knowledge ──────────────────────────────────────
    if name == "ingest_civilizational_knowledge":
        learner = getattr(state, 'council_learner', None)
        if learner is None:
            return {"error": "CouncilLearner not initialised — run after startup"}
        try:
            from meok.learning.pain_point_corpus import get_all_corpus_signals
            signals = get_all_corpus_signals()
            ingested = 0
            for signal in signals:
                await learner._process_signal(signal)
                ingested += 1
            stats = learner.get_learning_stats()
            return {
                "ingested": ingested,
                "pain_points": sum(1 for s in signals if s.event_type == "pain_point_corpus"),
                "playbooks": sum(1 for s in signals if s.event_type == "playbook_corpus"),
                "stats_after": stats,
            }
        except Exception as exc:
            import traceback
            return {"error": str(exc), "traceback": traceback.format_exc()}

    # ── seed_relationships ────────────────────────────────────────────────────
    if name == "seed_relationships":
        registry = getattr(state, "agent_registry", None)
        if registry is None:
            return {"error": "agent_registry not available"}
        try:
            import itertools
            agents = list(registry.agents.values())
            if not agents:
                return {"error": "No agents registered. Run seed_proper_council first."}

            # Group agents by council (derived from name prefix)
            councils: dict = {}
            for agent in agents:
                # Name format: "Defence-General", "Defence-T1-01", etc.
                council = agent.name.split("-")[0]
                councils.setdefault(council, []).append(agent)

            relationships_seeded = 0

            # 1. General → council peers (trust 0.8)
            for council_name, members in councils.items():
                # General is the one without a tier suffix
                general = next((a for a in members if "General" in a.name), members[0])
                for peer in members:
                    if peer.id != general.id:
                        await registry.update_relationship(general.id, peer.id, 0.8)
                        relationships_seeded += 1

            # 2. T5 bridge agents → adjacent council general (trust 0.7)
            council_names = list(councils.keys())
            for i, council_name in enumerate(council_names):
                adjacent = council_names[(i + 1) % len(council_names)]
                bridge_agents = [a for a in councils[council_name] if "-T5-" in a.name]
                adj_general = next(
                    (a for a in councils.get(adjacent, []) if "General" in a.name), None
                )
                if adj_general:
                    for bridge in bridge_agents:
                        await registry.update_relationship(bridge.id, adj_general.id, 0.7)
                        relationships_seeded += 1

            # 3. General-to-General trust network (trust 0.85)
            generals = [
                next((a for a in members if "General" in a.name), None)
                for members in councils.values()
            ]
            generals = [g for g in generals if g]
            for g1, g2 in itertools.combinations(generals, 2):
                await registry.update_relationship(g1.id, g2.id, 0.85)
                relationships_seeded += 1

            stats = registry.get_registry_stats()
            asabiyyah = stats.get("asabiyyah", {})
            return {
                "relationships_seeded": relationships_seeded,
                "councils": len(councils),
                "generals_networked": len(generals),
                "asabiyyah_score": asabiyyah.get("score", 0.0) if isinstance(asabiyyah, dict) else 0.0,
                "status": "seeded",
            }
        except Exception as exc:
            import traceback
            return {"error": str(exc), "traceback": traceback.format_exc()}

    # ── seed_bootstrap_tasks ──────────────────────────────────────────────────
    if name == "seed_bootstrap_tasks":
        registry = getattr(state, "agent_registry", None)
        if registry is None:
            return {"error": "agent_registry not available"}
        try:
            from meok.agents.registry import AgentCapability, AgentStatus
            import uuid as _uuid
            from datetime import datetime as _dt

            tasks_per_council = int(arguments.get("tasks_per_council", 10))
            agents = list(registry.agents.values())
            if not agents:
                return {"error": "No agents registered. Run seed_proper_council first."}

            # Group by council
            councils: dict = {}
            for agent in agents:
                council = agent.name.split("-")[0]
                councils.setdefault(council, []).append(agent)

            TASK_TEMPLATES = [
                ("analysis", "Audit agent trust levels and relationships in {council} council"),
                ("monitoring", "Review system health metrics for {council} operations"),
                ("analysis", "Evaluate care alignment scores across {council} agents"),
                ("research", "Synthesise recent memory episodes relevant to {council} domain"),
                ("monitoring", "Check neural model performance for {council} responsibilities"),
                ("analysis", "Assess asabiyyah trends within {council} council over 24h"),
                ("monitoring", "Verify agent status and availability in {council} council"),
                ("analysis", "Review task delegation patterns in {council} subdomain"),
                ("research", "Identify optimisation opportunities for {council} workflows"),
                ("monitoring", "Audit relationship density within {council} council"),
            ]

            tasks_created = 0
            agents_updated = 0

            for council_name, members in councils.items():
                # T3 workers handle bootstrap tasks
                workers = [a for a in members if "-T3-" in a.name]
                if not workers:
                    workers = members[:3]  # fallback

                for i in range(min(tasks_per_council, len(TASK_TEMPLATES))):
                    template = TASK_TEMPLATES[i % len(TASK_TEMPLATES)]
                    task_type, description = template
                    description = description.format(council=council_name)

                    # Assign to a worker round-robin
                    worker = workers[i % len(workers)]

                    # Mark task as completed directly on the agent
                    worker.tasks_completed += 1
                    worker.performance_score = min(
                        1.0, worker.performance_score + 0.02
                    )
                    if worker.status == AgentStatus.IDLE:
                        pass  # stays idle — was idle, completed task, back to idle

                    tasks_created += 1
                    agents_updated += 1

                    # Persist update
                    await registry.update_agent_status(worker.id, AgentStatus.IDLE)

            stats = registry.get_registry_stats()
            asabiyyah = stats.get("asabiyyah", {})
            return {
                "tasks_created": tasks_created,
                "agents_updated": agents_updated,
                "councils": len(councils),
                "total_tasks_completed": stats.get("total_tasks_completed", 0),
                "average_performance": stats.get("average_performance", 0.0),
                "asabiyyah_score": asabiyyah.get("score", 0.0) if isinstance(asabiyyah, dict) else 0.0,
                "status": "seeded",
            }
        except Exception as exc:
            import traceback
            return {"error": str(exc), "traceback": traceback.format_exc()}

    return {"error": f"Unknown activation tool: {name}"}
