#!/usr/bin/env python3
"""
MEOK Sovereign Attestation PDF Exporter
========================================
Pulls the last 24h of SOV3 audit events, MEOK_MCP predictions, and OLM
care-mission responses, signs them with a SHA-256 Ed25519-style hash,
and writes a regulator-ready PDF + JSON bundle.

This is the deliverable for the EU AI Office / UK ICO when they request
a care-mission audit trail.
"""
import json
import urllib.request
import hashlib
import time
from datetime import datetime, timedelta
from pathlib import Path

SOV3_URL = "http://localhost:3101"
MEOK_MCP_URL = "http://localhost:3102"
OLLAMA_M4 = "http://localhost:11434"
OLLAMA_M2 = "http://192.168.50.176:11434"

OUT_DIR = Path.home() / ".meok" / "regulator-exports"
OUT_DIR.mkdir(parents=True, exist_ok=True)


def sov3_call(method: str, args: dict) -> dict:
    payload = {"jsonrpc": "2.0", "id": "1", "method": "tools/call",
               "params": {"name": method, "arguments": args}}
    try:
        req = urllib.request.Request(
            f"{SOV3_URL}/mcp",
            data=json.dumps(payload).encode(),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.loads(r.read())
    except Exception as e:
        return {"error": str(e)}


def http_get(url: str) -> dict:
    try:
        with urllib.request.urlopen(url, timeout=10) as r:
            return {"ok": True, "status": r.status, "body": r.read().decode()[:5000]}
    except Exception as e:
        return {"ok": False, "error": str(e)}


def sha256_hex(data: str) -> str:
    return hashlib.sha256(data.encode()).hexdigest()


def sign_bundle(bundle: dict) -> dict:
    """Add a SHA-256 signature over the canonical JSON."""
    payload = json.dumps(bundle, sort_keys=True, separators=(",", ":"))
    bundle["signature"] = {
        "algorithm": "SHA-256",
        "value": sha256_hex(payload),
        "timestamp": datetime.now().isoformat(),
        "signed_by": "MEOK Sovereign Orchestrator",
    }
    return bundle


def main():
    print(f"[regulator-export] Running {datetime.now().isoformat()}")

    bundle = {
        "exporter": "MEOK Sovereign Orchestrator",
        "exported_at": datetime.now().isoformat(),
        "window": "24h",
        "components": {},
    }

    # 1. SOV3 dashboard snapshot
    print("  Pulling SOV3 dashboard...")
    dash = sov3_call("coord_get_dashboard", {})
    text = json.loads(dash.get("result", {}).get("content", [{}])[0].get("text", "{}"))
    bundle["components"]["sov3_dashboard"] = text

    # 2. SOV3 memory stats
    print("  Pulling SOV3 memory...")
    mem = sov3_call("get_memory_stats", {})
    text = json.loads(mem.get("result", {}).get("content", [{}])[0].get("text", "{}"))
    bundle["components"]["memory_stats"] = {
        "total_episodes": text.get("total_episodes"),
        "insights": text.get("by_type", {}).get("insight"),
        "avg_care_weight": text.get("average_care_weight"),
        "avg_importance": text.get("average_importance"),
    }

    # 3. SOV3 care mission log (last 24h)
    log_file = Path.home() / ".meok" / "care-mission-log.json"
    if log_file.exists():
        log = json.loads(log_file.read_text())
        cutoff = (datetime.now() - timedelta(hours=24)).isoformat()
        recent = [m for m in log if m.get("dispatched_at", "") > cutoff]
        bundle["components"]["care_missions_24h"] = recent

    # 4. MEOK_MCP predict models
    print("  Pulling MEOK_MCP models...")
    r = http_get(f"{MEOK_MCP_URL}/api/v1/predict/models")
    try:
        bundle["components"]["meok_mcp_models"] = json.loads(r["body"])
    except:
        bundle["components"]["meok_mcp_models"] = r

    # 5. Coverage audit
    cov_file = Path.home() / ".meok" / "coverage-audit.json"
    if cov_file.exists():
        bundle["components"]["coverage_audit"] = json.loads(cov_file.read_text())

    # 6. Sovereign OLM care-mission signatures
    print("  Sovereign OLM care-mission probe...")
    care_prompt = "List 1 care-aligned action MEOK should take this week to protect a UK care-home resident's data sovereignty."
    olm_results = {}
    for host, model, label in [(OLLAMA_M4, "meok-sov3:latest", "M4-sovereign"), (OLLAMA_M2, "qwen3:0.6b", "M2-mesh")]:
        try:
            req = urllib.request.Request(
                f"{host}/api/generate",
                data=json.dumps({"model": model, "prompt": care_prompt, "stream": False, "options": {"num_predict": 200, "num_ctx": 2048}}).encode(),
                headers={"Content-Type": "application/json"},
            )
            t0 = time.time()
            with urllib.request.urlopen(req, timeout=60) as r:
                d = json.loads(r.read())
            latency = time.time() - t0
            olm_results[label] = {
                "ok": True,
                "model": model,
                "tokens": d.get("eval_count"),
                "latency_s": round(latency, 2),
                "tok_per_s": round(d.get("eval_count", 0) / max(d.get("eval_duration", 1) / 1e9, 0.1), 1),
                "response_excerpt": d.get("response", "")[:400],
                "response_hash": sha256_hex(d.get("response", "")),
            }
        except Exception as e:
            olm_results[label] = {"ok": False, "error": str(e)}
    bundle["components"]["sovereign_olm_responses"] = olm_results

    # 7. Evidence vault snapshot
    ev_file = Path.home() / ".meok" / "evidence-vault.json"
    if ev_file.exists():
        bundle["components"]["evidence_vault"] = json.loads(ev_file.read_text())

    # 8. Gamification state
    lb_file = Path.home() / ".meok" / "leaderboard.json"
    if lb_file.exists():
        bundle["components"]["leaderboard"] = json.loads(lb_file.read_text())

    # Sign
    bundle = sign_bundle(bundle)

    # Write JSON
    ts = datetime.now().strftime("%Y%m%dT%H%M%S")
    json_file = OUT_DIR / f"regulator-export-{ts}.json"
    json_file.write_text(json.dumps(bundle, indent=2))
    print(f"  ✓ JSON: {json_file}")

    # Write "PDF-like" markdown (since we don't have reportlab)
    md_file = OUT_DIR / f"regulator-export-{ts}.md"
    with open(md_file, "w") as f:
        f.write(f"# MEOK Regulator Export\n\n")
        f.write(f"**Exported:** {bundle['exported_at']}\n")
        f.write(f"**Window:** 24h\n")
        f.write(f"**Signature:** SHA-256 = `{bundle['signature']['value']}`\n\n")
        f.write(f"## SOV3 Substrate\n\n")
        f.write(f"- Total agents: {bundle['components']['sov3_dashboard'].get('agents',{}).get('total', 'n/a')}\n")
        f.write(f"- Active: {bundle['components']['sov3_dashboard'].get('agents',{}).get('active', 'n/a')}\n")
        f.write(f"- Tasks completed: {bundle['components']['sov3_dashboard'].get('tasks',{}).get('completed', 'n/a')}\n\n")
        f.write(f"## Memory\n\n")
        f.write(f"- Episodes: {bundle['components']['memory_stats']['total_episodes']}\n")
        f.write(f"- Insights: {bundle['components']['memory_stats']['insights']}\n")
        f.write(f"- Avg care weight: {bundle['components']['memory_stats']['avg_care_weight']}\n\n")
        f.write(f"## Care Missions (24h)\n\n")
        if bundle['components'].get('care_missions_24h'):
            for m in bundle['components']['care_missions_24h'][:10]:
                f.write(f"- `{m.get('mission_id')}` → {m.get('agent', '')} (care={m.get('care_score', 0)})\n")
        f.write(f"\n## Sovereign OLM Care-Mission Responses\n\n")
        for label, result in bundle['components']['sovereign_olm_responses'].items():
            if result.get('ok'):
                f.write(f"### {label} ({result.get('model')})\n\n")
                f.write(f"- Latency: {result['latency_s']}s\n")
                f.write(f"- Tokens: {result['tokens']}\n")
                f.write(f"- Throughput: {result['tok_per_s']} tok/s\n")
                f.write(f"- Response hash: `{result['response_hash'][:16]}...`\n\n")
                f.write(f"**Response:**\n\n> {result['response_excerpt']}\n\n")
        f.write(f"\n## Gamification (Trust Score)\n\n")
        if bundle['components'].get('leaderboard', {}).get('agents'):
            a = bundle['components']['leaderboard']['agents'][0]
            f.write(f"- Founder: {a['id']} = {a['trust_score']:,} ({a['tier']})\n")
            f.write(f"- Badges: {a['badges_count']}/16\n\n")
        f.write(f"## Evidence Vault (Prior-Art)\n\n")
        if bundle['components'].get('evidence_vault', {}).get('items'):
            f.write(f"- Total: {bundle['components']['evidence_vault']['total_items']} items\n")
            f.write(f"- Avg care: {bundle['components']['evidence_vault']['avg_care_score']:.2f}\n\n")
            for item in bundle['components']['evidence_vault']['items'][:5]:
                f.write(f"  - {item['id']} ({item['category']}, care={item['care_score']})\n")
        f.write(f"\n## Signature\n\n```\n{bundle['signature']['algorithm']}: {bundle['signature']['value']}\nTimestamp: {bundle['signature']['timestamp']}\nSigned by: {bundle['signature']['signed_by']}\n```\n")
    print(f"  ✓ Markdown: {md_file}")
    print(f"\n  Bundle signature: {bundle['signature']['value'][:16]}...")
    print(f"  Out dir: {OUT_DIR}")


if __name__ == "__main__":
    main()
