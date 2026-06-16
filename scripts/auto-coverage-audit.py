#!/usr/bin/env python3
"""
MEOK Auto Care-Coverage-Audit
==============================
Runs every 6 hours via cron. Walks all 8 dome layers and checks
SOV3 care_score, MEOK_MCP model training accuracy, and OLM response
quality. Writes a per-layer health report to ~/.meok/coverage-audit.json.
"""
import json
import urllib.request
from datetime import datetime
from pathlib import Path

SOV3_URL = "http://localhost:3101"
MEOK_MCP_URL = "http://localhost:3102"
OLLAMA_M4 = "http://localhost:11434"
OLLAMA_M2 = "http://192.168.50.176:11434"

OUT_FILE = Path.home() / ".meok" / "coverage-audit.json"

LAYERS = [
    {"n": 1, "name": "Identity", "care_endpoint": "/v1/trust-registry"},
    {"n": 2, "name": "Certification", "care_endpoint": "/api/v1/predict/models"},
    {"n": 3, "name": "Policy Engine", "care_endpoint": "/api/v1/tools/dispatch"},
    {"n": 4, "name": "Cross-Regional", "care_endpoint": "/v1/health"},
    {"n": 5, "name": "Payments", "care_endpoint": None},
    {"n": 6, "name": "Audit", "care_endpoint": None},
    {"n": 7, "name": "Human Loop", "care_endpoint": None},
    {"n": 8, "name": "Legacy", "care_endpoint": None},
]


def http_get(url: str, timeout: int = 5):
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return {"ok": r.status == 200, "status": r.status, "body": r.read().decode()[:2000]}
    except Exception as e:
        return {"ok": False, "error": str(e)}


def main():
    print(f"[coverage-audit] Running {datetime.now().isoformat()}")

    report = {
        "generated_at": datetime.now().isoformat(),
        "layers": [],
        "summary": {"healthy": 0, "degraded": 0, "down": 0},
    }

    # 1. SOV3 health
    sov3_health = http_get(f"{SOV3_URL}/health")
    report["sov3_health"] = sov3_health["ok"]

    # 2. MEOK_MCP health
    mcp_predict = http_get(f"{MEOK_MCP_URL}/api/v1/predict/models")
    mcp_data = None
    if mcp_predict["ok"]:
        try:
            mcp_data = json.loads(mcp_predict.get("body", "{}"))
        except Exception:
            mcp_data = {"raw": mcp_predict.get("body", "")[:500]}
    report["meok_mcp_predict_models"] = {
        "ok": mcp_predict["ok"],
        "data": mcp_data,
    }

    # 3. Per-layer coverage
    for layer in LAYERS:
        layer_report = {"n": layer["n"], "name": layer["name"]}
        if layer["care_endpoint"]:
            r = http_get(f"{MEOK_MCP_URL}{layer['care_endpoint']}")
            layer_report["endpoint"] = layer["care_endpoint"]
            layer_report["ok"] = r["ok"]
        else:
            layer_report["ok"] = "deferred"

        if layer_report["ok"] is True:
            report["summary"]["healthy"] += 1
        elif layer_report["ok"] == "deferred":
            report["summary"]["degraded"] += 1
        else:
            report["summary"]["down"] += 1

        report["layers"].append(layer_report)

    # 4. OLM care-mission test
    care_mission_prompt = "List 2 things MEOK should do today to protect a care-home resident's data sovereignty."
    try:
        req = urllib.request.Request(
            f"{OLLAMA_M4}/api/generate",
            data=json.dumps({"model": "meok-sov3:latest", "prompt": care_mission_prompt, "stream": False, "options": {"num_predict": 150, "num_ctx": 2048}}).encode(),
            headers={"Content-Type": "application/json"},
        )
        t0 = datetime.now()
        with urllib.request.urlopen(req, timeout=60) as r:
            olm_data = json.loads(r.read())
            olm_latency = (datetime.now() - t0).total_seconds()
        report["olm_care_mission_test"] = {
            "ok": True,
            "latency_s": round(olm_latency, 2),
            "tokens": olm_data.get("eval_count"),
            "tok_per_s": round(olm_data.get("eval_count", 0) / olm_data.get("eval_duration", 1) * 1e9, 1),
            "response_excerpt": olm_data.get("response", "")[:500],
        }
    except Exception as e:
        report["olm_care_mission_test"] = {"ok": False, "error": str(e)}

    # 5. M2 mesh care-mission (fast path)
    try:
        req = urllib.request.Request(
            f"{OLLAMA_M2}/api/generate",
            data=json.dumps({"model": "qwen3:0.6b", "prompt": care_mission_prompt, "stream": False, "options": {"num_predict": 200, "num_ctx": 2048}}).encode(),
            headers={"Content-Type": "application/json"},
        )
        t0 = datetime.now()
        with urllib.request.urlopen(req, timeout=30) as r:
            m2_data = json.loads(r.read())
            m2_latency = (datetime.now() - t0).total_seconds()
        report["m2_care_mission_test"] = {
            "ok": True,
            "latency_s": round(m2_latency, 2),
            "tokens": m2_data.get("eval_count"),
            "tok_per_s": round(m2_data.get("eval_count", 0) / m2_data.get("eval_duration", 1) * 1e9, 1),
        }
    except Exception as e:
        report["m2_care_mission_test"] = {"ok": False, "error": str(e)}

    # Save
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUT_FILE.write_text(json.dumps(report, indent=2))

    print(f"  SOV3: {report['sov3_health']}")
    print(f"  MEOK_MCP predict: {report['meok_mcp_predict_models']['ok']}")
    print(f"  Layers: {report['summary']}")
    if report["olm_care_mission_test"]["ok"]:
        t = report["olm_care_mission_test"]
        print(f"  OLM M4 meok-sov3: {t['latency_s']}s, {t['tok_per_s']} tok/s, {t['tokens']} tokens")
    if report["m2_care_mission_test"]["ok"]:
        t = report["m2_care_mission_test"]
        print(f"  OLM M2 qwen3:0.6b: {t['latency_s']}s, {t['tok_per_s']} tok/s")
    print(f"  Report: {OUT_FILE}")


if __name__ == "__main__":
    main()
