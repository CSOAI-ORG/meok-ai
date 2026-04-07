#!/usr/bin/env python3
"""
Unit Tests — MEOKEntity
Pure unit tests requiring no server or database.

Tests:
  - health_score computation (0-100)
  - dominant_trait derivation from attributes
  - care_alignment EMA update
  - hatch_level progression logic
  - VAD emotional_score formula (via MemoryEpisode)
  - CPM care style recommendation

Usage: python tests/unit_test_entity.py
"""

import sys
import os
import traceback

# Add meok package to path (clawd/ parent so `import meok` resolves)
_tests_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(_tests_dir, "..", ".."))  # clawd/
sys.path.insert(1, os.path.join(_tests_dir, ".."))  # meok/ (fallback)

PASS = "✅"
FAIL = "❌"
results = []


def run_test(name: str, fn, *args, **kwargs):
    try:
        result = fn(*args, **kwargs)
        if result is False:
            print(f"  {FAIL} {name}")
            results.append(False)
        else:
            detail = f": {result}" if isinstance(result, str) else ""
            print(f"  {PASS} {name}{detail}")
            results.append(True)
    except AssertionError as ae:
        print(f"  {FAIL} {name}: {ae}")
        results.append(False)
    except Exception as exc:
        print(f"  {FAIL} {name}: {type(exc).__name__}: {exc}")
        traceback.print_exc()
        results.append(False)


# ── MemoryEpisode VAD Tests ───────────────────────────────────────────────────

print("\n[MemoryEpisode.compute_emotional_score]")

def test_vad_neutral():
    from meok.memory.enhanced_memory import MemoryEpisode
    score = MemoryEpisode.compute_emotional_score(0.0, 0.0, 0.0)
    assert abs(score - 50.0) < 0.01, f"neutral should be 50, got {score}"
    return f"score={score}"

def test_vad_positive():
    from meok.memory.enhanced_memory import MemoryEpisode
    # Very positive, excited, in-control
    score = MemoryEpisode.compute_emotional_score(1.0, 1.0, 1.0)
    expected = 50 + 30 + 15 + 5  # = 100
    assert abs(score - expected) < 0.01, f"expected {expected}, got {score}"
    return f"score={score} (max positive)"

def test_vad_distress():
    from meok.memory.enhanced_memory import MemoryEpisode
    # Very negative, very calm, submissive
    score = MemoryEpisode.compute_emotional_score(-1.0, 0.0, -1.0)
    expected = 50 + (-30) + 0 + (-5)  # = 15
    assert abs(score - expected) < 0.01, f"expected {expected}, got {score}"
    assert score < 30, f"distress score should be < 30, got {score}"
    return f"score={score} (distress zone < 30)"

def test_vad_high_arousal_negative():
    from meok.memory.enhanced_memory import MemoryEpisode
    # Moderately negative, very aroused, neutral dominance
    score = MemoryEpisode.compute_emotional_score(-0.5, -1.0, 0.0)
    expected = 50 + (-0.5 * 30) + (abs(-1.0) * 15) + 0  # = 50 - 15 + 15 = 50
    assert abs(score - expected) < 0.01, f"expected {expected}, got {score}"
    return f"score={score} (arousal compensates valence)"

def test_vad_fields_on_episode():
    from meok.memory.enhanced_memory import MemoryEpisode
    from datetime import datetime
    ep = MemoryEpisode(
        id="test",
        content="test content",
        timestamp=datetime.now(),
        importance_score=0.7,
        care_weight=0.8,
        source_agent="test",
        memory_type="insight",
        related_episodes=[],
        tags=[],
        emotional_valence=0.5,
        emotional_arousal=0.3,
        emotional_dominance=0.1,
        emotional_score=MemoryEpisode.compute_emotional_score(0.5, 0.3, 0.1),
        granularity_level=1,
    )
    expected = 50 + (0.5 * 30) + (abs(0.3) * 15) + (0.1 * 5)
    assert abs(ep.emotional_score - expected) < 0.01, f"ep.emotional_score={ep.emotional_score}"
    assert ep.granularity_level == 1
    return f"episode VAD fields: score={ep.emotional_score:.1f}, granularity={ep.granularity_level}"

run_test("VAD neutral (0,0,0) → 50", test_vad_neutral)
run_test("VAD max positive (1,1,1) → 100", test_vad_positive)
run_test("VAD distress (-1,0,-1) → 15 (< 30)", test_vad_distress)
run_test("VAD high negative arousal (-0.5,-1,0) → 50", test_vad_high_arousal_negative)
run_test("MemoryEpisode has VAD + granularity fields", test_vad_fields_on_episode)


# ── TemporalMemoryChain Emotion Query ─────────────────────────────────────────

print("\n[TemporalMemoryChain.query_by_emotion]")

def test_emotion_query_filter():
    from meok.memory.enhanced_memory import TemporalMemoryChain, MemoryEpisode
    from datetime import datetime

    chain = TemporalMemoryChain()

    def make_ep(id_: str, valence: float, arousal: float, dominance: float):
        score = MemoryEpisode.compute_emotional_score(valence, arousal, dominance)
        return MemoryEpisode(
            id=id_, content=f"episode {id_}", timestamp=datetime.now(),
            importance_score=0.5, care_weight=0.5, source_agent="test",
            memory_type="interaction", related_episodes=[], tags=[],
            emotional_valence=valence, emotional_arousal=arousal,
            emotional_dominance=dominance, emotional_score=score,
        )

    episodes = [
        make_ep("happy", 0.8, 0.5, 0.3),    # score ~85
        make_ep("neutral", 0.0, 0.0, 0.0),  # score = 50
        make_ep("distress", -0.8, -0.3, -0.5),  # score ~22
        make_ep("excited", 0.5, 1.0, 0.2),  # score ~80
    ]

    # Query for distress (score < 35)
    distress_eps = chain.query_by_emotion(episodes, score_min=0, score_max=35)
    assert len(distress_eps) == 1, f"expected 1 distress ep, got {len(distress_eps)}"
    assert distress_eps[0].id == "distress"

    # Query for positive (valence > 0.5)
    positive_eps = chain.query_by_emotion(episodes, valence_min=0.5)
    assert len(positive_eps) == 2, f"expected 2 positive eps, got {len(positive_eps)}"

    return f"distress={len(distress_eps)}, positive={len(positive_eps)}"

run_test("query_by_emotion filters distress and positive correctly", test_emotion_query_filter)


# ── CarePreferenceModel ───────────────────────────────────────────────────────

print("\n[CarePreferenceModel]")

def test_cpm_import():
    from meok.core.care_preference_model import CarePreferenceModel, get_cpm
    cpm = get_cpm()
    assert isinstance(cpm, CarePreferenceModel)
    return "CPM singleton created"

def test_cpm_warrior_trait():
    from meok.core.care_preference_model import CarePreferenceModel
    cpm = CarePreferenceModel()
    rec = cpm.recommend_care_style(dominant_trait="warrior", care_alignment=0.8, recent_mood=0.7)
    assert rec.care_style == "challenger", f"warrior → expected challenger, got {rec.care_style}"
    assert rec.intensity == "high"
    return f"warrior→{rec.care_style}/{rec.intensity}/{rec.proactivity}"

def test_cpm_scholar_trait():
    from meok.core.care_preference_model import CarePreferenceModel
    cpm = CarePreferenceModel()
    rec = cpm.recommend_care_style(dominant_trait="scholar", care_alignment=0.75, recent_mood=0.6)
    assert rec.care_style == "explorer", f"scholar → expected explorer, got {rec.care_style}"
    return f"scholar→{rec.care_style}/{rec.intensity}/{rec.proactivity}"

def test_cpm_low_care_alignment():
    from meok.core.care_preference_model import CarePreferenceModel
    cpm = CarePreferenceModel()
    # Any trait with low care_alignment → supporter
    rec = cpm.recommend_care_style(dominant_trait="warrior", care_alignment=0.3, recent_mood=0.6)
    assert rec.care_style == "supporter", f"low ca → expected supporter, got {rec.care_style}"
    assert rec.proactivity == "high"
    assert len(rec.adjustments_applied) > 0
    return f"warrior+ca=0.3→{rec.care_style}, adjustments={len(rec.adjustments_applied)}"

def test_cpm_distress_mood():
    from meok.core.care_preference_model import CarePreferenceModel
    cpm = CarePreferenceModel()
    rec = cpm.recommend_care_style(dominant_trait="scholar", care_alignment=0.7, recent_mood=0.2)
    assert rec.care_style == "supporter", f"distress mood → expected supporter, got {rec.care_style}"
    assert rec.intensity == "gentle", f"expected gentle, got {rec.intensity}"
    return f"distress_mood(0.2)→{rec.care_style}/{rec.intensity}"

def test_cpm_challenger_safeguard():
    from meok.core.care_preference_model import CarePreferenceModel
    cpm = CarePreferenceModel()
    # warrior in distress should NOT get challenger
    rec = cpm.recommend_care_style(dominant_trait="warrior", care_alignment=0.3, recent_mood=0.25)
    assert rec.care_style != "challenger", f"challenger in distress — safeguard failed!"
    return f"safeguard: warrior+distress→{rec.care_style} (not challenger)"

def test_cpm_new_entity():
    from meok.core.care_preference_model import CarePreferenceModel
    cpm = CarePreferenceModel()
    rec = cpm.recommend_care_style(
        dominant_trait="explorer", care_alignment=0.6,
        hatch_level=0, interaction_count=3, recent_mood=0.6
    )
    assert rec.proactivity == "high", f"new entity → expected high proactivity, got {rec.proactivity}"
    assert rec.confidence < 0.8, f"new entity → lower confidence expected, got {rec.confidence}"
    return f"new_entity→{rec.care_style}/{rec.proactivity}, confidence={rec.confidence:.2f}"

def test_cpm_to_dict():
    from meok.core.care_preference_model import CarePreferenceModel
    cpm = CarePreferenceModel()
    rec = cpm.recommend_care_style()
    d = rec.to_dict()
    required_keys = {"care_style", "intensity", "proactivity", "empathy_mode", "basis", "confidence"}
    assert required_keys.issubset(d.keys()), f"missing keys: {required_keys - d.keys()}"
    return f"dict_keys={list(d.keys())}"

run_test("CPM import and singleton", test_cpm_import)
run_test("warrior → challenger/high/medium", test_cpm_warrior_trait)
run_test("scholar → explorer", test_cpm_scholar_trait)
run_test("care_alignment=0.3 → supporter/high-proactivity", test_cpm_low_care_alignment)
run_test("recent_mood=0.2 → gentle/supporter", test_cpm_distress_mood)
run_test("challenger safeguard (warrior + distress → not challenger)", test_cpm_challenger_safeguard)
run_test("new entity (hatch=0, interactions=3) → high proactivity + low confidence", test_cpm_new_entity)
run_test("recommendation.to_dict() has all keys", test_cpm_to_dict)


# ── LLM Router ────────────────────────────────────────────────────────────────

print("\n[LLM Router]")

def test_router_import():
    from meok.core.llm_router import get_router, LLMRouter, TASK_ROUTING, PROVIDERS
    router = get_router()
    assert isinstance(router, LLMRouter)
    assert "care" in TASK_ROUTING, "care task type missing"
    assert TASK_ROUTING["care"][0] == "claude", "care must route Claude-first"
    return f"providers={len(PROVIDERS)}, task_types={list(TASK_ROUTING.keys())}"

def test_router_usage_stats():
    from meok.core.llm_router import get_router
    stats = get_router().get_usage_stats()
    assert "by_provider" in stats
    assert "circuit_breakers" in stats
    assert "total_cost_usd" in stats
    # circuit breakers should all be closed (no failures yet)
    for name, cb in stats["circuit_breakers"].items():
        assert not cb["open"], f"circuit breaker open for {name} on fresh router"
    return f"circuit_breakers={list(stats['circuit_breakers'].keys())}"

def test_router_elapsed_ms_in_stat():
    from meok.core.llm_router import UsageStat
    import time
    stat = UsageStat(
        provider="test", model="test-model",
        input_tokens=100, output_tokens=50,
        cost_usd=0.001, task_type="fast",
        elapsed_ms=125.5,
        timestamp=time.time(),
    )
    assert stat.elapsed_ms == 125.5
    return f"UsageStat.elapsed_ms={stat.elapsed_ms}ms"

run_test("LLM Router import + task routing", test_router_import)
run_test("get_usage_stats → circuit_breakers closed", test_router_usage_stats)
run_test("UsageStat has elapsed_ms field (TTFT/TPOT)", test_router_elapsed_ms_in_stat)


# ── Summary ───────────────────────────────────────────────────────────────────

total = len(results)
passed = sum(results)
failed = total - passed

print(f"\n{'='*60}")
print(f"Unit Tests: ✅ {passed}/{total} passed | ❌ {failed} failed")
print(f"{'='*60}")

if failed > 0:
    raise SystemExit(1)
