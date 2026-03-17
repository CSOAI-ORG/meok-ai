"""
Civilizational Creativity Engine tool definitions and handler.
Tools: ingest_civilizational_knowledge, assess_creativity, get_asabiyyah_score,
       get_consciousness_mode, compute_novelty, trigger_creativity_cycle,
       get_meta_observations, find_bisociations, get_dream_targets,
       get_bridge_concepts, apply_resonance, get_resonance_profile,
       get_qd_archive_stats, get_empty_niches, suggest_exploration,
       get_domain_distances, kimi_send_task, kimi_build_frontend,
       kimi_review_code, kimi_status, kimi_list_models
"""

from typing import Dict, Any

from meok.mcp.state import ServiceState

CREATIVITY_TOOLS = [
    {
        "name": "ingest_civilizational_knowledge",
        "description": "Ingest the 47-tradition civilizational knowledge corpus into memory. Idempotent — safe to call multiple times.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "force": {"type": "boolean", "description": "Force re-ingestion even if already present", "default": False}
            }
        }
    },
    {
        "name": "assess_creativity",
        "description": "Assess creative quality of content using the CreativityAssessmentNN trained on 47 civilizational traditions",
        "inputSchema": {
            "type": "object",
            "properties": {
                "text": {"type": "string", "description": "Content to assess for creativity"},
                "novelty_score": {"type": "number", "description": "Pre-computed novelty score (0-1)"},
                "domain_distance": {"type": "number", "description": "Cross-domain distance (0-1)"},
                "care_alignment": {"type": "number", "description": "Care principle alignment (0-1)"}
            },
            "required": ["text"]
        }
    },
    {
        "name": "get_asabiyyah_score",
        "description": "Get Ibn Khaldun's asabiyyah (group cohesion) metric for the agent ecosystem",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "get_consciousness_mode",
        "description": "Get the current Vedantic consciousness mode: Jagrat (waking), Svapna (dreaming), Susupti (deep sleep), or Turiya (meta-monitoring)",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "compute_novelty",
        "description": "Compute Kolmogorov complexity novelty score for text against reference corpus",
        "inputSchema": {
            "type": "object",
            "properties": {
                "text": {"type": "string", "description": "Text to score for novelty"},
                "reference_texts": {"type": "array", "items": {"type": "string"}, "description": "Reference corpus (optional — uses recent memories if empty)"}
            },
            "required": ["text"]
        }
    },
    {
        "name": "trigger_creativity_cycle",
        "description": "Manually trigger the creativity nightshift cycle: Susupti consolidation → NREM/REM dreaming → novelty scoring → creative assessment",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "get_meta_observations",
        "description": "Get Turiya meta-monitor observations — meta-cognitive assessment of system coherence across all subsystems",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    # Tier 2: Cross-Domain Bisociation
    {
        "name": "find_bisociations",
        "description": "Find surprising cross-domain connections between civilizational traditions (Koestler bisociation). Returns ranked creative collision opportunities.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "min_distance": {"type": "number", "description": "Minimum semantic distance threshold (0-1, default 0.4)"},
                "top_k": {"type": "integer", "description": "Number of top links to return (default 15)"}
            }
        }
    },
    {
        "name": "get_dream_targets",
        "description": "Get suggested tradition pairs for REM dream creative recombination. Weighted random selection from top bisociation links.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "n": {"type": "integer", "description": "Number of dream targets (default 5)"}
            }
        }
    },
    {
        "name": "get_bridge_concepts",
        "description": "Rank traditions by cross-domain connectivity. Bridge concepts connect many disparate domains and are especially valuable for creative synthesis.",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    # Tier 2: Stochastic Resonance
    {
        "name": "apply_resonance",
        "description": "Apply stochastic resonance noise to creativity features. Amplifies weak creative signals through optimal noise injection.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "features": {"type": "object", "description": "Feature dict (novelty_score, domain_distance, care_alignment, etc.)"},
                "temperature": {"type": "number", "description": "Noise scaling (>1 more noise, <1 less, default auto)"}
            },
            "required": ["features"]
        }
    },
    {
        "name": "get_resonance_profile",
        "description": "Get the current noise resonance profile — per-feature sigma values and optimal temperature.",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    # Tier 2: Quality-Diversity Archive
    {
        "name": "get_qd_archive_stats",
        "description": "Get MAP-Elites quality-diversity archive statistics — coverage, quality distribution, domain breakdown.",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "get_empty_niches",
        "description": "Find unexplored creative territory in the MAP-Elites archive. Returns empty cells = domains × novelty levels × care levels not yet explored.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "limit": {"type": "integer", "description": "Max niches to return (default 20)"}
            }
        }
    },
    {
        "name": "suggest_exploration",
        "description": "Suggest creative directions that would fill empty niches in the quality-diversity archive. Prioritizes niches near existing high-quality outputs.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "n": {"type": "integer", "description": "Number of suggestions (default 5)"}
            }
        }
    },
    {
        "name": "get_domain_distances",
        "description": "Get average semantic distance between each pair of civilizational domains. Shows which domains are most/least related.",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    # Kimi Agent
    {
        "name": "kimi_send_task",
        "description": "Send a task to Kimi (Moonshot AI) — general-purpose code/analysis tasks",
        "inputSchema": {
            "type": "object",
            "properties": {
                "task": {"type": "string", "description": "Task description"},
                "context": {"type": "string", "description": "Additional context (code, specs)"},
                "model": {"type": "string", "description": "Model: 8k, 32k, or 128k (default 32k)"}
            },
            "required": ["task"]
        }
    },
    {
        "name": "kimi_build_frontend",
        "description": "Delegate a frontend build task to Kimi — React, TypeScript, Next.js specialist",
        "inputSchema": {
            "type": "object",
            "properties": {
                "spec": {"type": "string", "description": "What to build"},
                "framework": {"type": "string", "description": "Framework (default: Next.js + TypeScript)"},
                "files": {"type": "object", "description": "Existing files as {filename: content}"}
            },
            "required": ["spec"]
        }
    },
    {
        "name": "kimi_review_code",
        "description": "Send code to Kimi for review — bugs, performance, accessibility",
        "inputSchema": {
            "type": "object",
            "properties": {
                "code": {"type": "string", "description": "Code to review"},
                "language": {"type": "string", "description": "Language (default: typescript)"},
                "focus": {"type": "string", "description": "Review focus areas"}
            },
            "required": ["code"]
        }
    },
    {
        "name": "kimi_status",
        "description": "Get Kimi agent status — connection, task history, success rate",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
    {
        "name": "kimi_list_models",
        "description": "List available Kimi (Moonshot AI) models",
        "inputSchema": {
            "type": "object",
            "properties": {}
        }
    },
]


async def handle_creativity_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle creativity engine tool calls."""

    # --- Civilizational Creativity Engine ---

    if name == "ingest_civilizational_knowledge":
        if state.CREATIVITY_ENGINE_AVAILABLE and state.memory_store and state.ingest_corpus:
            force = arguments.get("force", False)
            result = await state.ingest_corpus(state.memory_store, force=force)
            return result
        return {"error": "Creativity engine not available"}

    elif name == "assess_creativity":
        if state.creativity_pipeline:
            text = arguments.get("text", "")
            context = {}
            for key in ["novelty_score", "domain_distance", "care_alignment"]:
                if key in arguments:
                    context[key] = float(arguments[key])
            # Auto-compute novelty if not provided
            if "novelty_score" not in context and state.memory_store:
                try:
                    recent = await state.memory_store.get_recent_episodes(limit=10)
                    ref = [ep.content for ep in recent if hasattr(ep, 'content')]
                    context["novelty_score"] = state.kolmogorov_novelty(text, ref) if ref else 0.5
                except Exception:
                    context["novelty_score"] = 0.5
            assessment = await state.creativity_pipeline.assess_creative_output(text, context)

            # Archive in QD if available
            if state.qd_archive and assessment.get("scores"):
                domain = arguments.get("domain", "creativity")
                qd_result = state.qd_archive.add(
                    content=text,
                    features=context,
                    scores=assessment.get("scores", {}),
                    overall_quality=assessment.get("overall_creativity", 0),
                    domain=domain,
                    source="assess_creativity_tool",
                )
                assessment["qd_archive_result"] = qd_result

            # Apply stochastic resonance variant if engine available
            if state.resonance_engine and context and state.apply_stochastic_resonance:
                noised = state.apply_stochastic_resonance(context, state.resonance_engine)
                noised_assessment = await state.creativity_pipeline.assess_creative_output(text, noised)
                if noised_assessment.get("overall_creativity", 0) > assessment.get("overall_creativity", 0):
                    assessment["resonance_boost"] = {
                        "noised_score": noised_assessment["overall_creativity"],
                        "improvement": noised_assessment["overall_creativity"] - assessment["overall_creativity"],
                    }
                    state.resonance_engine.update_from_feedback(
                        assessment["overall_creativity"],
                        noised_assessment["overall_creativity"],
                    )

            return assessment
        return {"error": "Creativity pipeline not available"}

    elif name == "get_asabiyyah_score":
        if state.agent_registry:
            return state.agent_registry.compute_asabiyyah()
        return {"error": "Agent registry not available"}

    elif name == "get_consciousness_mode":
        if state.consciousness:
            cs = state.consciousness.get_consciousness_state()
            mode = getattr(state.consciousness, 'consciousness_mode', None)
            return {
                "mode": mode.value if mode else "jagrat",
                "consciousness_level": cs.get("consciousness_level", 0),
                "emotional_state": cs.get("emotional_state", {}),
                "care_intensity": cs.get("emotional_state", {}).get("care_intensity", 0),
            }
        return {"error": "Consciousness not available"}

    elif name == "compute_novelty":
        if state.CREATIVITY_ENGINE_AVAILABLE and state.kolmogorov_novelty:
            text = arguments.get("text", "")
            reference = arguments.get("reference_texts", [])
            if not reference and state.memory_store:
                try:
                    recent = await state.memory_store.get_recent_episodes(limit=20)
                    reference = [ep.content for ep in recent if hasattr(ep, 'content')]
                except Exception:
                    reference = []
            score = state.kolmogorov_novelty(text, reference)
            return {
                "novelty_score": round(score, 4),
                "reference_size": len(reference),
                "interpretation": (
                    "highly redundant" if score < 0.3 else
                    "moderate novelty" if score < 0.6 else
                    "substantially novel" if score < 0.8 else
                    "radically novel"
                ),
            }
        return {"error": "Creativity engine not available"}

    elif name == "trigger_creativity_cycle":
        if state.creativity_pipeline:
            result = await state.creativity_pipeline.run_full_pipeline()
            return result
        return {"error": "Creativity pipeline not available"}

    elif name == "get_meta_observations":
        if state.consciousness:
            meta_monitor = getattr(state.consciousness, 'meta_monitor', None)
            if meta_monitor:
                obs = await meta_monitor.observe(
                    state.consciousness.emotional_state,
                    state.consciousness.reflection_cycle,
                    state.consciousness.dream_state,
                )
                return obs
            return {"mode": "turiya_not_initialized", "message": "MetaMonitor not yet active"}
        return {"error": "Consciousness not available"}

    # --- Tier 2: Cross-Domain Bisociation ---

    elif name == "find_bisociations":
        if state.cross_domain_linker:
            min_dist = arguments.get("min_distance", 0.4)
            top_k = arguments.get("top_k", 15)
            links = state.cross_domain_linker.find_bisociations(min_distance=min_dist, top_k=top_k)
            return {
                "bisociation_links": [l.to_dict() for l in links],
                "count": len(links),
                "stats": state.cross_domain_linker.get_stats(),
            }
        return {"error": "CrossDomainLinker not available"}

    elif name == "get_dream_targets":
        if state.cross_domain_linker:
            n = arguments.get("n", 5)
            targets = state.cross_domain_linker.suggest_dream_targets(n=n)
            return {"dream_targets": targets, "count": len(targets)}
        return {"error": "CrossDomainLinker not available"}

    elif name == "get_bridge_concepts":
        if state.cross_domain_linker:
            connectivity = state.cross_domain_linker.get_tradition_connectivity()
            return {"bridge_concepts": connectivity[:20], "total": len(connectivity)}
        return {"error": "CrossDomainLinker not available"}

    elif name == "get_domain_distances":
        if state.cross_domain_linker:
            return {"domain_distances": state.cross_domain_linker.get_domain_distance_map()}
        return {"error": "CrossDomainLinker not available"}

    # --- Tier 2: Stochastic Resonance ---

    elif name == "apply_resonance":
        if state.resonance_engine and state.apply_stochastic_resonance:
            features = arguments.get("features", {})
            temp = arguments.get("temperature", state.resonance_engine.get_optimal_temperature())
            noised = state.apply_stochastic_resonance(features, state.resonance_engine, temp)

            result = {"original_features": features, "noised_features": noised, "temperature": temp}
            if state.creativity_pipeline:
                try:
                    orig_assessment = await state.creativity_pipeline.assess_creative_output("", features)
                    noised_assessment = await state.creativity_pipeline.assess_creative_output("", noised)
                    result["original_score"] = orig_assessment.get("overall_creativity", 0)
                    result["noised_score"] = noised_assessment.get("overall_creativity", 0)
                    result["improvement"] = result["noised_score"] - result["original_score"]

                    state.resonance_engine.update_from_feedback(
                        result["original_score"], result["noised_score"]
                    )
                except Exception:
                    pass
            return result
        return {"error": "StochasticResonanceEngine not available"}

    elif name == "get_resonance_profile":
        if state.resonance_engine:
            return state.resonance_engine.get_resonance_profile()
        return {"error": "StochasticResonanceEngine not available"}

    # --- Tier 2: Quality-Diversity Archive ---

    elif name == "get_qd_archive_stats":
        if state.qd_archive:
            return state.qd_archive.get_stats()
        return {"error": "QualityDiversityArchive not available"}

    elif name == "get_empty_niches":
        if state.qd_archive:
            limit = arguments.get("limit", 20)
            niches = state.qd_archive.get_empty_niches()
            return {"empty_niches": niches[:limit], "total_empty": len(niches), "coverage": state.qd_archive.coverage()}
        return {"error": "QualityDiversityArchive not available"}

    elif name == "suggest_exploration":
        if state.qd_archive:
            n = arguments.get("n", 5)
            return {"suggestions": state.qd_archive.suggest_exploration(n=n)}
        return {"error": "QualityDiversityArchive not available"}

    # --- Kimi Agent ---

    elif name == "kimi_send_task":
        if state.kimi_agent:
            result = await state.kimi_agent.send_task(
                task_description=arguments["task"],
                context=arguments.get("context", ""),
                model=arguments.get("model"),
            )
            return result
        return {"error": "Kimi agent not available (check KIMI_API_KEY)"}

    elif name == "kimi_build_frontend":
        if state.kimi_agent:
            result = await state.kimi_agent.build_frontend(
                spec=arguments["spec"],
                framework=arguments.get("framework", "Next.js + TypeScript"),
                files=arguments.get("files"),
            )
            return result
        return {"error": "Kimi agent not available"}

    elif name == "kimi_review_code":
        if state.kimi_agent:
            result = await state.kimi_agent.review_code(
                code=arguments["code"],
                language=arguments.get("language", "typescript"),
                focus=arguments.get("focus", "bugs, performance, accessibility"),
            )
            return result
        return {"error": "Kimi agent not available"}

    elif name == "kimi_status":
        if state.kimi_agent:
            return state.kimi_agent.get_status()
        return {"available": False, "error": "Kimi agent not initialized"}

    elif name == "kimi_list_models":
        if state.kimi_agent:
            return await state.kimi_agent.list_models()
        return {"models": ["moonshot-v1-8k", "moonshot-v1-32k", "moonshot-v1-128k"], "status": "agent_not_initialized"}

    return {"error": f"Unknown creativity tool: {name}"}
