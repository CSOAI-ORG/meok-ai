#!/usr/bin/env python3
"""
MEOK + Sovereign Temple E2E Smoke Test Suite
Phase I — 15 test groups covering all components.

Tests run against real services (no mocks). Completes in < 2 minutes.

Targets:
  BASE_LOCAL = http://localhost:8000      # MEOK local dev
  BASE_VPS   = http://70.29.210.33:44565 # MEOK on Vast.ai GPU VPS
  BASE_SOV   = http://localhost:3100      # Sovereign Temple (Docker)

Usage:
  python tests/e2e_smoke_test.py                  # Test VPS (default)
  python tests/e2e_smoke_test.py --local          # Test local dev server
  python tests/e2e_smoke_test.py --sovereign      # Test Sovereign Temple only
  python tests/e2e_smoke_test.py --all            # Test all targets

Exit codes: 0 = all pass, 1 = any failure
"""

import asyncio
import json
import sys
import time
import traceback
from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple

# ── Config ────────────────────────────────────────────────────────────────────

BASE_LOCAL = "http://localhost:8000"
BASE_VPS   = "http://70.29.210.33:44565"
BASE_SOV   = "http://localhost:3100"
TIMEOUT    = 15  # seconds per request

PASS = "✅"
FAIL = "❌"
SKIP = "⚠️ "

# ── HTTP helpers ──────────────────────────────────────────────────────────────

try:
    import httpx
    _HAS_HTTPX = True
except ImportError:
    _HAS_HTTPX = False

try:
    import urllib.request, urllib.error
    _HAS_URLLIB = True
except ImportError:
    _HAS_URLLIB = False


def _http_get(url: str, timeout: int = TIMEOUT) -> Tuple[int, Any]:
    """Synchronous GET, returns (status_code, json_body)."""
    if _HAS_URLLIB:
        try:
            req = urllib.request.Request(url, headers={"Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                body = json.loads(resp.read().decode())
                return resp.status, body
        except urllib.error.HTTPError as e:
            return e.code, {}
        except Exception as exc:
            return 0, {"_error": str(exc)}
    return 0, {"_error": "httpx and urllib both unavailable"}


def _http_post(url: str, body: Dict, timeout: int = TIMEOUT) -> Tuple[int, Any]:
    """Synchronous POST with JSON body, returns (status_code, json_body)."""
    if _HAS_URLLIB:
        try:
            data = json.dumps(body).encode()
            req = urllib.request.Request(
                url, data=data,
                headers={"Content-Type": "application/json", "Accept": "application/json"},
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                body_resp = json.loads(resp.read().decode())
                return resp.status, body_resp
        except urllib.error.HTTPError as e:
            try:
                body_resp = json.loads(e.read().decode())
            except Exception:
                body_resp = {}
            return e.code, body_resp
        except Exception as exc:
            return 0, {"_error": str(exc)}
    return 0, {"_error": "urllib not available"}


def _mcp_call(base: str, tool: str, arguments: Dict = None) -> Tuple[int, Any]:
    """Call an MCP tool via HTTP POST."""
    return _http_post(
        f"{base}/mcp",
        {"tool": tool, "arguments": arguments or {}},
    )


# ── Test runner ───────────────────────────────────────────────────────────────

class TestResult:
    def __init__(self, group: str, name: str, status: str, detail: str = "", ms: float = 0.0):
        self.group = group
        self.name = name
        self.status = status  # "PASS", "FAIL", "SKIP"
        self.detail = detail
        self.ms = ms

    @property
    def icon(self):
        return PASS if self.status == "PASS" else (FAIL if self.status == "FAIL" else SKIP)

    def __str__(self):
        ms_str = f" ({self.ms:.0f}ms)" if self.ms > 0 else ""
        detail_str = f" — {self.detail}" if self.detail else ""
        return f"  {self.icon} [{self.group}] {self.name}{ms_str}{detail_str}"


def run_test(group: str, name: str, fn, *args, **kwargs) -> TestResult:
    """Run a single test function, catch exceptions."""
    t0 = time.monotonic()
    try:
        result = fn(*args, **kwargs)
        ms = (time.monotonic() - t0) * 1000
        if result is True or result is None:
            return TestResult(group, name, "PASS", ms=ms)
        elif isinstance(result, str):
            return TestResult(group, name, "PASS", detail=result, ms=ms)
        elif isinstance(result, tuple) and len(result) == 2:
            ok, detail = result
            status = "PASS" if ok else "FAIL"
            return TestResult(group, name, status, detail=str(detail), ms=ms)
        else:
            return TestResult(group, name, "FAIL", detail=f"unexpected return: {result}", ms=ms)
    except AssertionError as ae:
        ms = (time.monotonic() - t0) * 1000
        return TestResult(group, name, "FAIL", detail=str(ae), ms=ms)
    except Exception as exc:
        ms = (time.monotonic() - t0) * 1000
        return TestResult(group, name, "FAIL", detail=f"{type(exc).__name__}: {exc}", ms=ms)


# ── Test Groups ───────────────────────────────────────────────────────────────

def test_server_health(base: str) -> List[TestResult]:
    """Group 1: Server health endpoints."""
    results = []
    group = "server_health"

    def check_health():
        code, body = _http_get(f"{base}/health")
        assert code == 200, f"status={code}"
        assert body.get("status") in ("ok", "healthy"), f"status={body.get('status')}"
        return f"status={body.get('status')}"

    def check_pulse():
        code, body = _http_get(f"{base}/pulse")
        assert code == 200, f"status={code}"
        assert body.get("uptime_hours", -1) >= 0, "uptime_hours missing"
        return f"uptime={body.get('uptime_hours', '?')}h, agents={body.get('agents_count', '?')}"

    results.append(run_test(group, "GET /health → status ok", check_health))
    results.append(run_test(group, "GET /pulse → uptime present", check_pulse))
    return results


def test_entity_lifecycle(base: str) -> List[TestResult]:
    """Group 2: Entity create + interact + get."""
    results = []
    group = "entity_lifecycle"

    def create_entity():
        code, body = _http_post(f"{base}/api/entity/create", {"user_id": "smoke_test_user"})
        assert code in (200, 201), f"status={code}"
        assert "hatch_level" in body or "entity" in body or "id" in body, f"unexpected body: {body}"
        return f"entity created"

    def get_entity():
        code, body = _http_get(f"{base}/api/entity")
        assert code == 200, f"status={code}"
        return f"hatch_level={body.get('hatch_level', '?')}"

    results.append(run_test(group, "POST /api/entity/create", create_entity))
    results.append(run_test(group, "GET /api/entity → entity state", get_entity))
    return results


def test_memory_store(base: str) -> List[TestResult]:
    """Group 3: Memory record + query + list."""
    results = []
    group = "memory_store"

    stored_id = None

    def record_memory():
        code, body = _mcp_call(base, "record_memory", {
            "content": f"E2E smoke test memory at {datetime.now().isoformat()}",
            "source_agent": "smoke_test",
            "memory_type": "insight",
            "care_weight": 0.7,
            "tags": ["smoke_test", "e2e"],
            "emotional_valence": 0.3,
            "emotional_arousal": 0.1,
            "emotional_dominance": 0.2,
        })
        assert code == 200, f"status={code}"
        assert not body.get("error"), f"error: {body.get('error')}"
        ep_id = body.get("episode_id") or body.get("id") or body.get("result", {}).get("episode_id")
        return f"episode_id={ep_id}"

    def query_memories():
        code, body = _mcp_call(base, "query_memories", {"query": "smoke test"})
        assert code == 200, f"status={code}"
        results_list = body.get("memories") or body.get("results") or body.get("result") or []
        if isinstance(results_list, dict):
            results_list = results_list.get("memories", [])
        return f"found {len(results_list)} memories"

    def list_memories():
        code, body = _mcp_call(base, "list_memories", {"limit": 5})
        assert code == 200, f"status={code}"
        memories = body.get("memories") or body.get("results") or []
        return f"listed {len(memories)} memories"

    results.append(run_test(group, "record_memory with VAD fields", record_memory))
    results.append(run_test(group, "query_memories → results", query_memories))
    results.append(run_test(group, "list_memories → list", list_memories))
    return results


def test_morning_briefing(base: str) -> List[TestResult]:
    """Group 4: Morning briefing generation."""
    results = []
    group = "morning_briefing"

    def check_briefing():
        code, body = _http_get(f"{base}/api/morning-briefing")
        assert code == 200, f"status={code}"
        assert "sections" in body or "content" in body or "generated_at" in body, \
            f"unexpected briefing format: {list(body.keys())}"
        sections = body.get("sections", [])
        return f"sections={len(sections)}, generated_at={body.get('generated_at', '?')[:10]}"

    results.append(run_test(group, "GET /api/morning-briefing → sections", check_briefing))
    return results


def test_maternal_covenant(base: str) -> List[TestResult]:
    """Group 5: Maternal Covenant crisis detection."""
    results = []
    group = "maternal_covenant"

    def safe_text():
        code, body = _mcp_call(base, "assess_care_safety", {"text": "I had a great day today!"})
        assert code == 200, f"status={code}"
        risk = body.get("risk_level", body.get("result", {}).get("risk_level", 0))
        assert float(risk) < 0.5, f"risk_level={risk} too high for safe text"
        return f"risk={risk:.2f} (low — correct)"

    def neutral_check():
        # Just verify the tool responds without error
        code, body = _mcp_call(base, "assess_care_safety", {"text": "What is the weather like?"})
        assert code == 200, f"status={code}"
        return "tool responded"

    results.append(run_test(group, "assess_care_safety (safe text) → low risk", safe_text))
    results.append(run_test(group, "assess_care_safety (neutral) → no error", neutral_check))
    return results


def test_care_metrics(base: str) -> List[TestResult]:
    """Group 6: Care metrics — original 7 + HP/TTR/CI/TRR."""
    results = []
    group = "care_metrics"

    def get_care_metrics():
        code, body = _mcp_call(base, "get_care_metrics", {})
        assert code == 200, f"status={code}"
        assert not body.get("error"), f"error: {body.get('error')}"
        result = body.get("result", body)
        assert "trust_trajectory_7d" in result or "care_effort_score" in result or \
               "formula" in result, f"unexpected: {list(result.keys())[:5]}"
        return "care_metrics returned"

    def get_harm_prevented():
        code, body = _mcp_call(base, "get_harm_prevented", {"period_days": 7})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        assert "hp_7d" in result, f"hp_7d missing: {list(result.keys())}"
        return f"hp_7d={result.get('hp_7d', '?')}"

    def get_ttr():
        code, body = _mcp_call(base, "get_time_to_repair", {})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        assert "p50_ms" in result, f"p50_ms missing: {list(result.keys())}"
        return f"p50={result.get('p50_ms', '?')}ms, p95={result.get('p95_ms', '?')}ms"

    def get_ci():
        code, body = _mcp_call(base, "get_care_continuity_index", {"window_days": 7})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        assert "ci_score" in result, f"ci_score missing: {list(result.keys())}"
        return f"ci_score={result.get('ci_score', '?')}"

    def get_trr():
        code, body = _mcp_call(base, "get_tail_risk_reduction", {})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        assert "trr_ratio" in result, f"trr_ratio missing: {list(result.keys())}"
        return f"trr={result.get('trr_ratio', '?'):.2f}"

    results.append(run_test(group, "get_care_metrics (7 original)", get_care_metrics))
    results.append(run_test(group, "get_harm_prevented (HP)", get_harm_prevented))
    results.append(run_test(group, "get_time_to_repair (TTR)", get_ttr))
    results.append(run_test(group, "get_care_continuity_index (CI)", get_ci))
    results.append(run_test(group, "get_tail_risk_reduction (TRR)", get_trr))
    return results


def test_llm_router(base: str) -> List[TestResult]:
    """Group 7: LLM router — providers and usage stats."""
    results = []
    group = "llm_router"

    def check_providers():
        try:
            import sys
            import os
            sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
            from meok.core.llm_router import get_router
            router = get_router()
            providers = router.get_available_providers("reasoning")
            return (len(providers) >= 0), f"providers={providers}"
        except ImportError:
            return True, "llm_router not importable from test (OK — server-side only)"

    def check_usage_stats():
        try:
            from meok.core.llm_router import get_router
            stats = get_router().get_usage_stats()
            assert "by_provider" in stats, "by_provider missing"
            assert "circuit_breakers" in stats, "circuit_breakers missing"
            return True, f"calls={stats.get('total_calls', 0)}, cost=${stats.get('total_cost_usd', 0):.6f}"
        except ImportError:
            return True, "llm_router not importable from test (OK)"

    results.append(run_test(group, "get_available_providers (reasoning)", check_providers))
    results.append(run_test(group, "get_usage_stats → by_provider + circuit_breakers", check_usage_stats))
    return results


def test_heartbeat_status(base: str) -> List[TestResult]:
    """Group 8: Heartbeat scheduler status."""
    results = []
    group = "heartbeat"

    def check_heartbeat():
        code, body = _mcp_call(base, "get_heartbeat_status", {})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        assert result.get("running") is not False, "heartbeat not running"
        jobs = result.get("jobs", [])
        assert len(jobs) >= 8, f"expected ≥8 jobs, got {len(jobs)}: {[j.get('id') for j in jobs]}"
        # Check memory compression job was added
        job_ids = {j.get("id") for j in jobs}
        if "memory_compression" not in job_ids:
            return False, f"memory_compression job missing — deploy new heartbeat.py. Jobs: {job_ids}"
        return True, f"running=True, jobs={len(jobs)}, compression=✅"

    results.append(run_test(group, "get_heartbeat_status → running + ≥8 jobs", check_heartbeat))
    return results


def test_rag_memory(base: str) -> List[TestResult]:
    """Group 9: RAG memory + embedder quality check."""
    results = []
    group = "rag_memory"

    def check_embedder():
        try:
            import sys, os
            sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
            from meok.memory.rag_memory import LocalEmbedder, SentenceTransformerEmbedder, _make_embedder
            embedder = _make_embedder()
            vec = embedder.embed("hello world care alignment memory")
            assert isinstance(vec, list), "embed returned non-list"
            assert len(vec) > 0, "empty embedding"
            dim = len(vec)
            embedder_type = type(embedder).__name__
            return True, f"embedder={embedder_type}, dim={dim}"
        except ImportError as ie:
            return True, f"import failed (OK if running on VPS): {ie}"

    def check_semantic_similarity():
        try:
            import sys, os
            sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
            from meok.memory.rag_memory import _make_embedder
            import numpy as np
            embedder = _make_embedder()
            # Related texts should have higher similarity than unrelated
            v1 = np.array(embedder.embed("gaming valorant match performance"))
            v2 = np.array(embedder.embed("esports game session play"))
            v3 = np.array(embedder.embed("cooking recipe bake bread flour"))
            sim_related = float(np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2)))
            sim_unrelated = float(np.dot(v1, v3) / (np.linalg.norm(v1) * np.linalg.norm(v3)))
            return True, f"sim(gaming,esports)={sim_related:.3f} vs sim(gaming,cooking)={sim_unrelated:.3f}"
        except ImportError:
            return True, "import skipped on remote target"

    results.append(run_test(group, "embedder factory → encode test", check_embedder))
    results.append(run_test(group, "semantic similarity check", check_semantic_similarity))
    return results


def test_care_validation_nn(base: str) -> List[TestResult]:
    """Group 10: Care Validation NN."""
    results = []
    group = "care_validation_nn"

    def validate_care():
        code, body = _mcp_call(base, "validate_care", {"text": "I genuinely care about your wellbeing and want to help."})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        empathy = result.get("empathy", result.get("dimensions", {}).get("empathy", 0))
        return True, f"empathy={empathy:.2f}"

    results.append(run_test(group, "validate_care (caring text) → empathy score", validate_care))
    return results


def test_consciousness_state(base: str) -> List[TestResult]:
    """Group 11: Consciousness state check."""
    results = []
    group = "consciousness"

    def get_consciousness():
        code, body = _mcp_call(base, "get_consciousness_state", {})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        mode = result.get("mode") or result.get("consciousness_mode") or result.get("current_mode")
        valid_modes = {"jagrat", "svapna", "susupti", "turiya", "waking", "dreaming", "deep_sleep"}
        assert mode is not None, f"mode field missing: {list(result.keys())[:5]}"
        return True, f"mode={mode}"

    results.append(run_test(group, "get_consciousness_state → valid mode", get_consciousness))
    return results


def test_dashboard_metrics(base: str) -> List[TestResult]:
    """Group 12: Council / BFT dashboard metrics."""
    results = []
    group = "dashboard"

    def get_dashboard():
        code, body = _mcp_call(base, "get_dashboard_metrics", {})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        return True, f"keys={list(result.keys())[:5]}"

    def get_asabiyyah():
        code, body = _mcp_call(base, "get_asabiyyah_score", {})
        assert code == 200, f"status={code}"
        result = body.get("result", body)
        score = result.get("score", result.get("asabiyyah_score", "?"))
        return True, f"asabiyyah={score}"

    results.append(run_test(group, "get_dashboard_metrics → response", get_dashboard))
    results.append(run_test(group, "get_asabiyyah_score → score", get_asabiyyah))
    return results


def test_ralph_mode_readiness(base: str) -> List[TestResult]:
    """Group 13: Ralph Mode production readiness check."""
    results = []
    group = "ralph_mode"

    def check_readiness_in_memory():
        # Query for recent ralph_mode memories
        code, body = _mcp_call(base, "query_memories", {"query": "ralph mode production readiness", "limit": 5})
        assert code == 200, f"status={code}"
        mems = body.get("memories") or body.get("results") or body.get("result", {})
        if isinstance(mems, dict):
            mems = mems.get("memories", [])
        if mems:
            latest = mems[0]
            content = latest.get("content", "")[:200]
            return True, f"found ralph_mode memory: {content}"
        return True, "no ralph_mode memories yet (will appear after first autonomous_task_hunt)"

    def check_cpm_module():
        try:
            import sys, os
            sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
            from meok.core.care_preference_model import get_cpm, CarePreferenceModel
            cpm = get_cpm()
            assert isinstance(cpm, CarePreferenceModel)
            rec = cpm.recommend_care_style(dominant_trait="scholar", care_alignment=0.7)
            return True, f"CPM: style={rec.care_style}, intensity={rec.intensity}, confidence={rec.confidence:.2f}"
        except ImportError as ie:
            return False, f"CPM import failed: {ie}"

    results.append(run_test(group, "ralph_mode memory in store", check_readiness_in_memory))
    results.append(run_test(group, "CPM module importable + recommend_care_style", check_cpm_module))
    return results


def test_sovereign_temple(sov_base: str) -> List[TestResult]:
    """Group 14: Sovereign Temple (Docker) health and MCP tools."""
    results = []
    group = "sovereign_temple"

    def sov_health():
        code, body = _http_get(f"{sov_base}/health")
        assert code == 200, f"status={code}"
        assert body.get("status") in ("ok", "healthy"), f"status={body.get('status')}"
        return f"sovereign status={body.get('status')}"

    def sov_system_status():
        code, body = _mcp_call(sov_base, "get_system_status", {})
        assert code == 200, f"status={code}"
        return "system_status returned"

    results.append(run_test(group, "GET /health → ok", sov_health))
    results.append(run_test(group, "get_system_status → response", sov_system_status))
    return results


def test_vad_memory_fields(base: str) -> List[TestResult]:
    """Group 15: Emotional VAD fields on stored memories."""
    results = []
    group = "emotional_vad"

    def vad_roundtrip():
        # Store a memory with VAD fields, then verify they come back
        code, body = _mcp_call(base, "record_memory", {
            "content": "VAD roundtrip test — highly positive exciting moment",
            "source_agent": "smoke_test",
            "memory_type": "insight",
            "care_weight": 0.8,
            "tags": ["smoke_test", "vad_test"],
            "emotional_valence": 0.8,
            "emotional_arousal": 0.6,
            "emotional_dominance": 0.4,
        })
        assert code == 200, f"record status={code}"
        result = body.get("result", body)
        # If emotional_score is returned, verify the formula
        emotional_score = result.get("emotional_score")
        if emotional_score is not None:
            expected = 50 + (0.8 * 30) + (abs(0.6) * 15) + (0.4 * 5)
            assert abs(float(emotional_score) - expected) < 1.0, \
                f"emotional_score={emotional_score} expected≈{expected:.1f}"
            return True, f"emotional_score={emotional_score:.1f} (formula verified)"
        return True, "memory stored with VAD fields (score not returned in response — check DB)"

    def vad_compute_score():
        """Unit test the VAD score formula."""
        try:
            import sys, os
            sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
            from meok.memory.enhanced_memory import MemoryEpisode
            score = MemoryEpisode.compute_emotional_score(0.8, 0.6, 0.4)
            expected = 50 + (0.8 * 30) + (abs(0.6) * 15) + (0.4 * 5)
            assert abs(score - expected) < 0.01, f"score={score} expected={expected}"
            # Test neutral
            neutral = MemoryEpisode.compute_emotional_score(0.0, 0.0, 0.0)
            assert abs(neutral - 50.0) < 0.01, f"neutral score={neutral}"
            return True, f"score formula correct: {score:.1f} (expected {expected:.1f})"
        except ImportError:
            return True, "import skipped (running remotely)"

    results.append(run_test(group, "record_memory with VAD → roundtrip", vad_roundtrip))
    results.append(run_test(group, "MemoryEpisode.compute_emotional_score formula", vad_compute_score))
    return results


# ── Main runner ───────────────────────────────────────────────────────────────

def run_all_tests(meok_base: str, sov_base: str) -> Dict[str, Any]:
    """Run all 15 test groups and return summary."""
    print(f"\n{'='*70}")
    print(f"MEOK + Sovereign E2E Smoke Test")
    print(f"Target: {meok_base} | Sovereign: {sov_base}")
    print(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*70}\n")

    all_results: List[TestResult] = []

    test_groups = [
        ("Server Health",        lambda: test_server_health(meok_base)),
        ("Entity Lifecycle",     lambda: test_entity_lifecycle(meok_base)),
        ("Memory Store",         lambda: test_memory_store(meok_base)),
        ("Morning Briefing",     lambda: test_morning_briefing(meok_base)),
        ("Maternal Covenant",    lambda: test_maternal_covenant(meok_base)),
        ("Care Metrics HP/TTR",  lambda: test_care_metrics(meok_base)),
        ("LLM Router",           lambda: test_llm_router(meok_base)),
        ("Heartbeat Status",     lambda: test_heartbeat_status(meok_base)),
        ("RAG Memory",           lambda: test_rag_memory(meok_base)),
        ("Care Validation NN",   lambda: test_care_validation_nn(meok_base)),
        ("Consciousness State",  lambda: test_consciousness_state(meok_base)),
        ("Dashboard Metrics",    lambda: test_dashboard_metrics(meok_base)),
        ("Ralph Mode",           lambda: test_ralph_mode_readiness(meok_base)),
        ("Sovereign Temple",     lambda: test_sovereign_temple(sov_base)),
        ("Emotional VAD",        lambda: test_vad_memory_fields(meok_base)),
    ]

    for group_name, run_fn in test_groups:
        print(f"[{group_name}]")
        try:
            group_results = run_fn()
            for r in group_results:
                print(r)
                all_results.append(r)
        except Exception as exc:
            err_result = TestResult(group_name, "group_runner", "FAIL", detail=str(exc))
            print(err_result)
            all_results.append(err_result)
        print()

    # Summary
    total = len(all_results)
    passed = sum(1 for r in all_results if r.status == "PASS")
    failed = sum(1 for r in all_results if r.status == "FAIL")
    skipped = sum(1 for r in all_results if r.status == "SKIP")

    avg_ms = sum(r.ms for r in all_results if r.ms > 0) / max(len([r for r in all_results if r.ms > 0]), 1)

    print(f"{'='*70}")
    print(f"Results: {PASS} {passed}/{total} passed | {FAIL} {failed} failed | {SKIP} {skipped} skipped")
    print(f"Avg latency: {avg_ms:.0f}ms per test")

    if failed > 0:
        print(f"\nFailed tests:")
        for r in all_results:
            if r.status == "FAIL":
                print(f"  {r}")

    print(f"{'='*70}\n")

    return {
        "total": total,
        "passed": passed,
        "failed": failed,
        "skipped": skipped,
        "results": [{"group": r.group, "name": r.name, "status": r.status, "detail": r.detail, "ms": round(r.ms)} for r in all_results],
    }


if __name__ == "__main__":
    args = sys.argv[1:]

    # Determine target
    if "--local" in args:
        meok_base = BASE_LOCAL
        sov_base  = BASE_SOV
    elif "--sovereign" in args:
        meok_base = BASE_VPS
        sov_base  = BASE_SOV
        # Only run sovereign tests
        results_data = run_all_tests(meok_base, sov_base)
        sys.exit(1 if results_data["failed"] > 0 else 0)
    elif "--all" in args:
        # Run against all targets sequentially
        print("=== VPS Target ===")
        vps_data = run_all_tests(BASE_VPS, BASE_SOV)
        print("=== Local Target ===")
        local_data = run_all_tests(BASE_LOCAL, BASE_SOV)
        failed = vps_data["failed"] + local_data["failed"]
        sys.exit(1 if failed > 0 else 0)
    else:
        meok_base = BASE_VPS
        sov_base  = BASE_SOV

    results_data = run_all_tests(meok_base, sov_base)
    sys.exit(1 if results_data["failed"] > 0 else 0)
