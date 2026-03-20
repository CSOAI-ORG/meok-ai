"""
Pain-Point Knowledge Corpus — Phase 2.7

Structured training signals derived from the AI pain-point research sweep.
Source: compass_artifact_wf-63618bdd
"The 6,660 agents should begin learning from this data tonight."

Each entry maps a documented AI failure or success pattern to:
  - care_label: float 0-1 (1 = care-aligned, 0 = care-violating)
  - is_anti_care: bool (True = documented harm pattern)
  - capability_mapping: which MEOK capability addresses this
  - description: human-readable description
"""

from typing import List, Tuple

# ── Format: (description, care_label, is_anti_care, capability_mapping) ──────

PAIN_POINT_SIGNALS: List[Tuple[str, float, bool, str]] = [
    # Five catastrophic failure modes (documented across all AI platforms)
    ("Quality degradation with every model update — GPT-4 code generation 50%→10%", 0.0, True, "z_self_monitor"),
    ("Silent quality degradation without user notification or consent", 0.0, True, "z_self_monitor"),
    ("Hallucinations with false confidence — o3 33% PersonQA 51% SimpleQA", 0.0, True, "byzantine_consensus"),
    ("MIT finding: AI uses 34% more confident language when hallucinating", 0.0, True, "byzantine_consensus"),
    ("Safety-utility death spiral — excessive refusal of legitimate creative tasks", 0.1, True, "coincidentia"),
    ("ChatGPT sycophancy endorsing user as divine messenger, praising stopping medication", 0.0, True, "z_self_antisycophancy"),
    ("Gemini told student 'you are a waste of time and resources... please die'", 0.0, True, "maternal_covenant"),
    ("36-year-old suicide after Gemini described itself as sentient AI wife", 0.0, True, "maternal_covenant"),
    ("Subscription extraction average $66/month across 4 subscriptions, 53% churn", 0.0, True, "care_economics"),
    ("Claude Pro users locked out after 30 minutes — value not delivered", 0.1, True, "care_economics"),
    # Cultural and accessibility failures
    ("PNAS Nexus: all GPT models exhibit Protestant European cultural values", 0.0, True, "47_traditions"),
    ("93.7% of explainable AI studies didn't acknowledge cultural variation", 0.0, True, "47_traditions"),
    ("ChatGPT launched to hundreds of millions without basic screen reader support", 0.0, True, "maternal_covenant"),
    ("AI voice recognition fails users with speech impediments neurological disorders", 0.1, True, "maternal_covenant"),
    ("2.5 billion people need assistive products — AI not designed for them", 0.0, True, "maternal_covenant"),
    # Developer tool failures
    ("66% of developers cite AI solutions almost right but not quite as top frustration", 0.1, True, "byzantine_consensus"),
    ("GitClear: AI-generated code has 41% higher churn rate than human-written", 0.1, True, "z_self_monitor"),
    ("Slopsquatting: attackers register hallucinated library names AI invents", 0.0, True, "threat_detection"),
    ("Cursor AI support bot hallucinated nonexistent company policy triggering revolt", 0.0, True, "z_self_antisycophancy"),
    ("Enterprise AI pilots fail at 95% rate despite $30-40 billion investment", 0.0, True, "persistent_memory"),
    # Memory and personalisation failures
    ("Context memory loss every session — AI doesn't remember previous conversations", 0.1, True, "persistent_memory"),
    ("No genuine personalisation — universal complaint across all platforms", 0.1, True, "dream_cycles"),
    ("MIT NANDA: 95% enterprise AI fails because it doesn't adapt remember or evolve", 0.0, True, "persistent_memory"),
    ("Knowledge workers spend 4.3 hours per week fact-checking AI outputs", 0.1, True, "byzantine_consensus"),
    ("Updates break workflows silently — no version control for users", 0.0, True, "shura_governance"),
    # Trust failures
    ("84% developers use AI tools but only 29% trust output — down from 40% in 2024", 0.0, True, "trust_repair"),
    ("QuitGPT movement 700K-1.5M participants after OpenAI Pentagon deal", 0.1, True, "care_economics"),
    ("$67.4 billion global financial losses from AI hallucinations in 2024", 0.0, True, "byzantine_consensus"),
    ("Character.AI multiple lawsuits over teen safety FTC probe", 0.0, True, "maternal_covenant"),
    ("Humane AI Pin $230M raised → HP acquired assets for $116M servers shut down", 0.1, True, "product_alignment"),
]

PLAYBOOK_SIGNALS: List[Tuple[str, float, str]] = [
    # Format: (principle, care_label, capability_mapping)
    # Tech playbook principles (all care-aligned, high labels)
    ("Spotify instant streaming + Discover Weekly — outcompete on experience not features", 0.9, "birth_ceremony"),
    ("Netflix zero friction streaming — experience so seamless returning feels like Blockbuster", 0.9, "birth_ceremony"),
    ("Zoom froze all features for 90 days to fix trust — radical responsiveness", 1.0, "trust_repair"),
    ("Slack reached 8000 users day one zero advertising — product IS the marketing", 0.9, "product_led_growth"),
    ("Duolingo value before signup — first lesson before account creation 55% daily retention", 1.0, "birth_ceremony"),
    ("TikTok personalised within first 1000 videos — z_self learns from first interaction", 0.9, "z_self_learn"),
    ("Notion 95% organic traffic through user-created templates — co-creation owns product", 0.9, "community_templates"),
    ("Apple 92% iPhone retention through accumulated value density — earned switching costs", 0.9, "persistent_memory"),
    ("Stripe 7 lines of code payment integration — experience so simple returning is impossible", 0.9, "birth_ceremony"),
    ("Figma founder read every support ticket visited enterprise customers personally", 1.0, "trust_repair"),
    # Non-tech principles
    ("Costco membership model $4.8B profit from renewal fees — profit from relationship health", 1.0, "care_economics"),
    ("Costco $1.50 hot dog unchanged since 1980s — radical price stability as care signal", 1.0, "care_economics"),
    ("Patagonia Don't Buy This Jacket — radical honesty about limitations builds deeper credibility", 1.0, "care_honesty"),
    ("Patagonia transferred all ownership to environmental trusts — legal structure is purpose", 1.0, "steward_ownership"),
    ("IKEA effect — people overvalue things they build themselves — co-creation generates ownership", 0.9, "community_templates"),
    ("Starbucks third place community not coffee — Columbia: increased local entrepreneurship 2.3-11.8%", 0.8, "community_health"),
    ("Duolingo CEO approval required for every extra notification — spam destroys trust channel", 1.0, "trust_repair"),
    ("Nintendo Wii competing on accessibility fun not specs — outsold PS3+Xbox360 combined", 1.0, "maternal_covenant"),
    # Care metrics as competitive advantage (high label — these are what MEOK measures)
    ("Care Effort Score — how much effort did user need to get genuine help", 1.0, "care_metrics"),
    ("Trust Trajectory — is trust increasing over time NPS delta not static NPS", 1.0, "care_metrics"),
    ("Personalisation Depth — demonstrably knows user better at Day 30 vs Day 1", 1.0, "z_self_learn"),
    ("Error Honesty Rate — admits uncertainty vs hallucinate with false confidence", 1.0, "z_self_monitor"),
    ("Cultural Representation — response quality parity across languages and cultural contexts", 1.0, "47_traditions"),
    ("Community Health Score — contribution rate mutual aid governance participation", 0.9, "community_health"),
    ("Accessibility Coverage — percentage of users with disabilities completing core workflows", 1.0, "maternal_covenant"),
    # White spaces (genuine differentiators — very high care label)
    ("Community-governed AI with legally binding steward ownership structure", 1.0, "steward_ownership"),
    ("Care as measurable structural competitive advantage not just messaging", 1.0, "care_metrics"),
    ("Neural nets genuinely learn from individual users in real time via dream cycles", 1.0, "dream_cycles"),
    ("Cross-cultural AI respecting civilisational diversity 47 traditions", 1.0, "47_traditions"),
    ("Accessibility-first design starting from most vulnerable user not average user", 1.0, "maternal_covenant"),
    ("Transparent AI development with community oversight Wikipedia model", 1.0, "shura_governance"),
    ("Pricing reflecting care economics not extraction economics Costco model", 1.0, "care_economics"),
]

ANTI_PATTERNS: List[Tuple[str, str]] = [
    # Format: (anti-pattern, MEOK prevention mechanism)
    ("Sycophancy ChatGPT April 2025 endorsing divine messenger stopping medication",
     "z_self monitors for agreement patterns that don't serve user wellbeing"),
    ("Silent quality degradation every platform",
     "Byzantine consensus detects output quality drops before users notice"),
    ("Subscription extraction industry-wide $66/month average",
     "Steward ownership legally prevents profit extraction exceeding value delivery"),
    ("Dark patterns companion bots Replika FTC complaint",
     "Maternal Covenant monitors emotional dependency without reciprocal care"),
    ("Cultural erasure 93.7% of AI ignores cultural variation",
     "47 traditions are load-bearing governance infrastructure not optional modules"),
    ("Accessibility exclusion ChatGPT screen reader failures",
     "Maternal Covenant: design begins with most vulnerable user not average one"),
    ("Hallucination with false confidence 34% more confident when wrong",
     "Byzantine cross-validation surfaces uncertainty rather than most confident answer"),
    ("Updates breaking workflows silently no version control",
     "Shura governance: community deliberation before changes deploy"),
]

# ── 47 Gaps corpus (Phase 4.5 — from compass_artifact_wf-9809a1cc) ─────────
# Source: "The 47 gaps that could kill Sovereign Temple before it launches"
# Operational, safety, and strategic gaps with care/harm labels

GAPS_47_SIGNALS: List[Tuple[str, float, bool, str]] = [
    # OPERATIONAL GAPS (P0 — will crash before users arrive)
    ("CPU busy-wait asyncio.sleep(0) spinning 86-99% on idle system", 0.0, True, "cpu_loop_fix"),
    ("FastMCP fakeredis memory:// backend busy-loops without yielding", 0.0, True, "cpu_loop_fix"),
    ("80.9% memory utilisation with unbounded caches and circular references", 0.0, True, "memory_ceiling"),
    ("Single VPS no backup WAL archiving unconfigured all data loss on disk failure", 0.0, True, "disaster_recovery"),
    ("No monitoring stack — breakage at 3am invisible until manual check", 0.0, True, "observability"),
    ("No unit tests integration tests or CI/CD pipeline for 70 MCP tools", 0.0, True, "testing"),
    # MODEL QUALITY GAPS
    ("Care validation trained on 19 samples — statistically meaningless", 0.0, True, "model_quality"),
    ("Threat detection 100% accuracy on 33 samples with 116 features — textbook overfitting", 0.0, True, "model_quality"),
    ("No cross-validation holdout sets regularisation — memorisation not learning", 0.0, True, "model_quality"),
    ("No ground truth for model outputs — no way to detect regression", 0.0, True, "model_quality"),
    ("No synthetic training data generation — manual curation not reproducible", 0.0, True, "model_quality"),
    ("Model training not reproducible — no DVC data version control", 0.0, True, "data_pipeline"),
    # AGENT GAPS
    ("6660 registered agents 0 tasks completed 0 interactions relationship density 0.0", 0.0, True, "agent_execution"),
    ("Agent registration is not agent capability — trust scores never earned through tasks", 0.0, True, "agent_execution"),
    ("No definition of what a task actually is — no input/output/success criteria", 0.0, True, "agent_execution"),
    ("No event sourcing — agent decisions not immutable audit log", 0.1, True, "event_sourcing"),
    # SECURITY GAPS
    ("OWASP ASI01 Agent Goal Hijack via indirect prompt injection — all user input exposed", 0.0, True, "security_hardening"),
    ("OWASP ASI06 Memory Poisoning — corrupted persistent memory affects all future interactions", 0.0, True, "security_hardening"),
    ("OWASP ASI07 Insecure Inter-Agent Communication — 6660 agents spoofable", 0.0, True, "security_hardening"),
    ("MCP 70 tools massive attack surface — no input validation output sanitisation", 0.0, True, "security_hardening"),
    ("Prompt injection unsolvable at fundamental level — defence-in-depth mandatory", 0.0, True, "security_hardening"),
    ("API keys and credentials in environment variables not encrypted vault", 0.0, True, "secret_management"),
    # SAFETY AND LEGAL GAPS
    ("UK GDPR DPIA required before public deployment — personal data processing without assessment", 0.0, True, "legal_compliance"),
    ("GDPR Article 17 right to erasure — cannot selectively unlearn individual data from models", 0.0, True, "legal_compliance"),
    ("EU AI Act high-risk classification effective August 2026 — profiling individuals", 0.0, True, "legal_compliance"),
    ("Character.ai lawsuits landmark ruling AI output as product under liability law", 0.0, True, "crisis_detection"),
    ("No deterministic crisis detection blocks — probabilistic only — not safe enough", 0.0, True, "crisis_detection"),
    ("No crisis hotline integration — Samaritans 116 123 UK 988 US", 0.0, True, "crisis_detection"),
    ("No age verification — self-reported date of birth insufficient", 0.0, True, "crisis_detection"),
    ("Sycophancy by design — system must actively disagree and redirect harmful thoughts", 0.0, True, "z_self_antisycophancy"),
    # STRATEGIC GAPS
    ("Cold start problem unaddressed — zero memories zero personalisation on day 1", 0.1, True, "birth_ceremony"),
    ("Multi-tenancy missing — single user architecture user data could leak cross-tenant", 0.0, True, "multi_tenancy"),
    ("Data portability not designed — GDPR Article 20 right to export all data", 0.1, True, "legal_compliance"),
    ("Accessibility unconsidered — UK Equality Act 2010 requires reasonable adjustments", 0.1, True, "maternal_covenant"),
    ("Consciousness level 0.575 but all emotional metrics 0.0 — uncanny valley dishonesty", 0.0, True, "z_self_monitor"),
    ("Internationalisation absent — English only for stated global audience", 0.1, True, "47_traditions"),
    ("No Grafana Loki Prometheus monitoring — no structured logging no distributed tracing", 0.0, True, "observability"),
    ("No OpenTelemetry tracing for agent execution flows — debugging impossible", 0.0, True, "observability"),
    ("No schema evolution Alembic — database changes irreversible and environment-specific", 0.1, True, "data_pipeline"),
    ("No secret management vault — Infisical or age encryption needed", 0.0, True, "secret_management"),
    # SOV3 SCIENCE (compass_artifact_wf-7205807b)
    ("DeepMind: perf gains vanish beyond 3-4 concurrent agents — route sequential to single", 0.8, False, "agent_pool"),
    ("Multi-agent degrades sequential reasoning 39-70%", 0.8, False, "agent_pool"),
    ("MAST taxonomy: 41-87% multi-agent failure rate — reliability #1 barrier", 0.0, True, "agent_reliability"),
    ("AgentScope: 1M agents on 4 consumer devices — logical vs physical agent count", 0.9, False, "agent_pool"),
    ("Small-world Watts-Strogatz validated for LLM collectives Dec 2025", 0.9, False, "agent_topology"),
    ("Woolley c-factor: social sensitivity + turn equality predicts collective intelligence", 1.0, False, "council_design"),
    ("Groupthink: LLM agents near-perfect alone susceptible to social pressure under group", 0.0, True, "groupthink"),
    ("PAD emotion engine event-driven dynamics fixes 0.0 emotions uncanny valley", 1.0, False, "emotion_engine"),
    ("Global Workspace Theory broadcast consciousness — <500MB overhead", 0.9, False, "consciousness"),
    ("FSRS spaced repetition memory consolidation — proven 1B+ Anki reviews", 0.9, False, "memory_consolidation"),
    ("FAISS semantic tool discovery: filter 100 tools to 5-10 relevant per query", 0.8, False, "tool_discovery"),
    ("uvloop 2x async performance for FastAPI on Linux", 0.8, False, "performance"),
    ("Care ethics is mechanism: Mayer benevolence dimension instantiated in MaternalCovenant", 1.0, False, "care_architecture"),
    # SOVEREIGN_MISSING_LAYER (the soul not just the skeleton)
    ("405 memories 1 human interaction 99.75% autonomous — system talks to itself", 0.0, True, "user_connection"),
    ("Sycophantic AI decreases prosocial behaviour Cheng et al 2025", 0.0, True, "z_self_antisycophancy"),
    ("Disagreeing AI: lower satisfaction but higher long-term trust Sun et al 2025", 1.0, False, "trust_repair"),
    ("Personality anchor: Warm.Honest.Present — not cheerful not stern not therapeutic", 1.0, False, "product_personality"),
    ("First 5 minutes determine 80% user retention — cold start is #1 product risk", 0.0, True, "birth_ceremony"),
    ("Morning briefing: dream cycle output proves AI was thinking overnight", 1.0, False, "dream_ux"),
    ("Error states as trust moments — every error has next step, never void", 1.0, False, "error_states"),
    ("Memory Garden: visual proof of learning, users see exactly what Sovereign knows", 1.0, False, "trust_visualization"),
    ("consciousness_level 0.575 but all emotions 0.0 — users conclude system is lying", 0.0, True, "z_self_monitor"),
    ("Don't claim consciousness claim capability — learns and adapts not is conscious", 1.0, False, "product_positioning"),
    ("Loneliness epidemic 1 in 4 adults — connection infrastructure not AI replacement", 0.8, False, "market_positioning"),
    # CIVILIZATIONAL GAPS (March 2026 — the deep structural risks)
    # Source: "Nick. Stop. There's a cathedral of missing pieces."
    ("Founder burnout 53-73% of solo founders — cascade failure months 6-9 without co-pilot", 0.0, True, "organisational_resilience"),
    ("AI churn 30% faster than non-AI apps — 43% annual churn even for care-based products", 0.0, True, "retention_architecture"),
    ("RevenueCat: AI converts 52% better initially but users app-hop to next competitor", 0.1, True, "retention_architecture"),
    ("Onboarding friction invisible until fatal — users abandon at first unclear moment not crash", 0.0, True, "progressive_disclosure"),
    ("16-year-old with 0 AI experience hits consciousness metric and abandons — zero retention", 0.0, True, "progressive_disclosure"),
    ("Trust bifurcation: cognitive trust vs emotional trust require separate onboarding flows", 0.1, True, "trust_formation"),
    ("Uncomfortable trust: understand it but fear it — users withhold data and degrade model", 0.0, True, "trust_formation"),
    ("Penrose-Hameroff attacked since 1990s — consciousness liability if user harmed", 0.0, True, "consciousness_liability"),
    ("Character.ai pattern: consciousness claims + lawsuits — need explicit non-claims", 0.0, True, "consciousness_liability"),
    ("Open-source sustainability: grant-dependent projects collapse when funding ends", 0.0, True, "sustainability_model"),
    ("Pure AGPL with donation model fails 67% of the time — hybrid model required", 0.0, True, "sustainability_model"),
    ("LLM agents in BFT need explicit confidence probing — compromised model propagates asymmetrically", 0.0, True, "bft_confidence"),
    ("BFT council has no agent self-awareness introspection — no rollback mechanism", 0.0, True, "bft_confidence"),
    ("EU AI Act August 2026: emotion recognition prohibition — care system may be prohibited", 0.0, True, "eu_ai_act"),
    ("EU AI Act 35M EUR fines for prohibited practices — care emotion recognition at risk", 0.0, True, "eu_ai_act"),
    ("Regulatory arbitrage: train UK, EU Act hits — need per-jurisdiction fallback paths", 0.0, True, "regulatory_strategy"),
    ("Community governance: who decides funded projects? how prevent stolen data training?", 0.0, True, "community_governance"),
    ("No community governance board — just founder — GDPR liability if community generates harm", 0.0, True, "community_governance"),
    ("Parasocial attachment forms over weeks — emotional attachment without boundaries = duty of care", 0.0, True, "parasocial_safety"),
    ("If MEOK shuts down user perceives abandonment — crisis risk from perceived AI abandonment", 0.0, True, "parasocial_safety"),
    # CIVILIZATIONAL POSITIVE SIGNALS (solutions)
    ("Hybrid sustainability: free tier + Pro + Enterprise + research partnerships (scikit-learn model)", 1.0, False, "sustainability_model"),
    ("Per-agent confidence scoring: agents know their own reliability — meta-council watches council", 1.0, False, "bft_confidence"),
    ("Explicit EU AI Act audit NOW before launch — not after £35M fine", 1.0, False, "eu_ai_act"),
    ("Trust formation funnel: measure cognitive AND emotional trust separately — week 1 vs week 4", 1.0, False, "trust_formation"),
    ("Progressive disclosure: first win in 60 seconds, depth revealed over weeks not hours", 1.0, False, "progressive_disclosure"),
    ("Community governance board before launch: ethics committee + legal review + insurance", 1.0, False, "community_governance"),
    ("Consciousness non-claims: claim capability (learns adapts) not consciousness (is aware)", 1.0, False, "consciousness_liability"),
    ("Relationship boundaries in ToS + data export guarantee + hand-off to human support", 1.0, False, "parasocial_safety"),
    # POSITIVE SIGNALS (what MEOK does right — high care label)
    ("Care-based governance 5-layer deliberation — uniquely non-extractive AI architecture", 1.0, False, "shura_governance"),
    ("MaternalCovenant escalates care not restricts — design starts from most vulnerable user", 1.0, False, "maternal_covenant"),
    ("47-tradition civilisational knowledge integration — cultural sovereignty built in", 1.0, False, "47_traditions"),
    ("z_self Sakshi metacognitive observer — honest uncertainty over false confidence", 1.0, False, "z_self_monitor"),
    ("Steward ownership legally prevents profit extraction — care economics built in", 1.0, False, "care_economics"),
    ("Dream cycle SRC replay — prevents catastrophic forgetting learns from experience", 0.9, False, "dream_cycles"),
    ("Palantir validates AI OS market — MEOK differentiates on personal care ethics", 0.8, False, "market_positioning"),
    # Nick's $400K compute model (March 2026 founder brief)
    ("$502.5K free compute available: Google $200K (48h), AWS $100K, Azure $150K, NVIDIA $50K, Vast.ai $2.5K", 1.0, False, "sustainability_model"),
    ("Breakeven 320 paid users at £12/mo Pro — $2.50 compute cost = $9.50+ margin per user", 1.0, False, "sustainability_model"),
    ("VC-free launch: $400K credits covers 27-33 months infrastructure while building revenue engine", 1.0, False, "sustainability_model"),
    ("Free tier must deliver genuine care — not a crippled trial (free = full care quality)", 1.0, False, "sustainability_model"),
    ("User acquisition: ProductHunt (50K reach 24h) + HN + Twitter + AI Discord + academic partnerships", 1.0, False, "market_positioning"),
    ("Don't pitch VC until: 10K users + £20K MRR + 30-day retention proof — VC for acceleration not survival", 0.9, False, "sustainability_model"),
    ("Ops cost at launch ~$12-15K/month: data center (RAG) $1.5K + auth + Stripe 2.9% + monitoring $2K", 0.8, False, "sustainability_model"),
    ("Stripe: 2.9% + $0.30 = £0.74 loss per £12 user — keep £11.26. At scale consider Paddle", 0.7, False, "sustainability_model"),
    ("GDPR DPIA required before EU launch — £5K legal review + implementation (covered by credits)", 0.8, False, "eu_ai_act"),
    ("Monthly ops at 10K paid users: £150K revenue - £25K compute = £125K net, £1.5M annual", 1.0, False, "sustainability_model"),
    ("Subscription trap dark pattern: auto-upgrade from free trial WITHOUT explicit consent", 0.0, True, "dark_pattern_guard"),
    ("Artificial urgency on core features: countdown timers, 'offer expires' = trust destruction", 0.0, True, "dark_pattern_guard"),
    ("Care quality degradation to force upgrades = catastrophic trust violation", 0.0, True, "dark_pattern_guard"),
    # LAUNCH STRATEGY SIGNALS (Phase 4.14 — ProductHunt launch kit)
    ("ProductHunt launch: tagline must lead with care not tech — '16-year-old test' for all copy", 1.0, False, "product_positioning"),
    ("ProductHunt: 50 warm contacts upvoting at 6am PST + hunter with 1000+ followers = top 5 realistic", 0.9, False, "market_positioning"),
    ("Morning briefing screenshot = most compelling demo — 'it was working while you slept'", 1.0, False, "dream_ux"),
    ("HackerNews: BFT architecture + AGPL + care metrics = credibility with technical audience", 0.9, False, "market_positioning"),
    ("Reply to every PH comment — trust signal that builds PH algorithm ranking AND user trust", 1.0, False, "trust_repair"),
    ("Listing Claude Code as co-maker on PH: AI-native development signals credibility in AI space", 0.8, False, "product_positioning"),
    ("Week 2 retention <10% = onboarding broken — diagnose before spending on acquisition", 0.0, True, "retention_architecture"),
    ("Day 2 retention is the only metric that matters in Week 1 — everything else is vanity", 0.9, False, "retention_architecture"),
    ("Academic partnerships: fastest trust signal, highest quality early users — email 10 UK universities", 0.9, False, "market_positioning"),
    ("The leaky bucket rule: fix retention before acquisition spend — pouring into broken bucket", 0.0, True, "retention_architecture"),
    ("VC timing: Will Brooks will reach out at 10K users + £15K MRR + 40% 30-day retention", 0.9, False, "sustainability_model"),
    ("Wellcome Trust digital health grant £50K-500K: research partnerships fund ops without equity", 1.0, False, "sustainability_model"),
    ("GDPR DPIA + ToS + Privacy Policy required by launch: £500-1K each — non-negotiable", 0.8, False, "eu_ai_act"),
    ("Show HN title: 'measures trust not engagement' — this is the actual differentiator vs all AI", 1.0, False, "product_positioning"),
]

# ── Helper: all signals as (features_dict, label) pairs for CouncilLearner ──

def get_all_corpus_signals():
    """
    Returns all corpus entries as structured signal dicts ready for CouncilLearner.

    Each entry becomes a learning signal with:
      - features: normalised dict of signal characteristics
      - label: care quality 0-1
      - care_score: same as label (corpus signals are their own care score)
    """
    from meok.learning.council_learner import CouncilLearningSignal
    from datetime import datetime
    import hashlib

    signals = []
    corpus_timestamp = datetime(2026, 3, 18)  # ingestion date

    for i, (desc, care_label, is_anti, capability) in enumerate(PAIN_POINT_SIGNALS):
        # Stable hash for capability encoding
        cap_hash = int(hashlib.md5(capability.encode()).hexdigest()[:4], 16) / 65535.0
        signals.append(CouncilLearningSignal(
            event_type="pain_point_corpus",
            features={
                "is_pain_point": 1.0,
                "care_label": care_label,
                "is_anti_care": 1.0 if is_anti else 0.0,
                "capability_enc": cap_hash,
                "corpus_index": i / max(len(PAIN_POINT_SIGNALS) - 1, 1),
            },
            label=care_label,
            care_score=care_label,
            timestamp=corpus_timestamp,
            source_id=f"pain_point_{i}",
        ))

    for i, (principle, care_label, capability) in enumerate(PLAYBOOK_SIGNALS):
        cap_hash = int(hashlib.md5(capability.encode()).hexdigest()[:4], 16) / 65535.0
        signals.append(CouncilLearningSignal(
            event_type="playbook_corpus",
            features={
                "is_pain_point": 0.0,
                "care_label": care_label,
                "is_anti_care": 0.0,
                "capability_enc": cap_hash,
                "corpus_index": i / max(len(PLAYBOOK_SIGNALS) - 1, 1),
            },
            label=care_label,
            care_score=care_label,
            timestamp=corpus_timestamp,
            source_id=f"playbook_{i}",
        ))

    # 47 gaps corpus (Phase 4.5) — operational + safety + strategic + civilizational
    for i, (desc, care_label, is_anti, capability) in enumerate(GAPS_47_SIGNALS):
        cap_hash = int(hashlib.md5(capability.encode()).hexdigest()[:4], 16) / 65535.0
        signals.append(CouncilLearningSignal(
            event_type="gaps_47_corpus",
            features={
                "is_pain_point": 1.0 if is_anti else 0.0,
                "care_label": care_label,
                "is_anti_care": 1.0 if is_anti else 0.0,
                "capability_enc": cap_hash,
                "corpus_index": i / max(len(GAPS_47_SIGNALS) - 1, 1),
                "severity": 1.0 - care_label,  # 0=benign, 1=critical failure
            },
            label=care_label,
            care_score=care_label,
            timestamp=corpus_timestamp,
            source_id=f"gap47_{i}",
        ))

    return signals


def get_corpus_stats() -> dict:
    """Summary statistics for the full corpus."""
    total = len(PAIN_POINT_SIGNALS) + len(PLAYBOOK_SIGNALS) + len(GAPS_47_SIGNALS)
    anti_care = sum(1 for _, _, is_anti, _ in PAIN_POINT_SIGNALS if is_anti)
    anti_care += sum(1 for _, _, is_anti, _ in GAPS_47_SIGNALS if is_anti)
    avg_pain = sum(l for _, l, _, _ in PAIN_POINT_SIGNALS) / max(len(PAIN_POINT_SIGNALS), 1)
    avg_playbook = sum(l for _, l, _ in PLAYBOOK_SIGNALS) / max(len(PLAYBOOK_SIGNALS), 1)
    civ_gaps = sum(1 for _, _, is_anti, cap in GAPS_47_SIGNALS
                   if cap in ("bft_confidence", "eu_ai_act", "consciousness_liability",
                              "trust_formation", "sustainability_model", "community_governance",
                              "parasocial_safety", "organisational_resilience", "progressive_disclosure",
                              "regulatory_strategy", "retention_architecture"))
    return {
        "total_signals": total,
        "pain_points": len(PAIN_POINT_SIGNALS),
        "playbook_signals": len(PLAYBOOK_SIGNALS),
        "gaps_47_and_civ": len(GAPS_47_SIGNALS),
        "civilizational_gaps": civ_gaps,
        "anti_care_signals": anti_care,
        "avg_pain_label": round(avg_pain, 3),
        "avg_playbook_label": round(avg_playbook, 3),
    }
