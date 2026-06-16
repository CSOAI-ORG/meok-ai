#!/usr/bin/env python3
"""
MEOK Auto Sovereign OLM Care-Mission Responder
================================================
Listens to SOV3 care-mission events and dispatches them to the
right sovereign OLM (M4 for slow+care, M2 for fast+drift).
Writes responses back to SOV3 memory for the empire to learn from.

Runs every 15 minutes via cron.
"""
import json
import urllib.request
import time
from datetime import datetime
from pathlib import Path

SOV3_URL = "http://localhost:3101"
OLLAMA_M4 = "http://localhost:11434"
OLLAMA_M2 = "http://192.168.50.176:11434"

CARE_QUERIES = [
    "What is the MEOK sovereign AI mission in one paragraph?",
    "How should MEOK protect a care-home resident's data sovereignty?",
    "Name one care-aligned action MEOK should take today.",
    "What does the MEOK Maternal Covenant require of all agents?",
    "How would MEOK support an elderly solo-living person?",
    "What is the Article 50 deadline and what does MEOK offer for it?",
    "How does MEOK prevent surveillance overreach?",
    "What is the relationship between sovereign OLM and care ethics?",
]


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
        with urllib.request.urlopen(req, timeout=8) as r:
            return json.loads(r.read())
    except Exception as e:
        return {"error": str(e)}


def olm_query(host: str, model: str, prompt: str, num_predict: int = 200) -> dict:
    try:
        req = urllib.request.Request(
            f"{host}/api/generate",
            data=json.dumps({"model": model, "prompt": prompt, "stream": False, "options": {"num_predict": num_predict, "num_ctx": 2048}}).encode(),
            headers={"Content-Type": "application/json"},
        )
        t0 = time.time()
        with urllib.request.urlopen(req, timeout=90) as r:
            data = json.loads(r.read())
        latency = time.time() - t0
        return {
            "ok": True,
            "response": data.get("response", "")[:500],
            "tokens": data.get("eval_count"),
            "latency_s": round(latency, 2),
            "tok_per_s": round(data.get("eval_count", 0) / max(data.get("eval_duration", 1) / 1e9, 0.1), 1),
        }
    except Exception as e:
        return {"ok": False, "error": str(e)}


def main():
    print(f"[care-mission-responder] Running {datetime.now().isoformat()}")

    results = []
    for i, query in enumerate(CARE_QUERIES, 1):
        # Alternate: M2 fast, then M4 sovereign
        host = OLLAMA_M2 if i % 2 else OLLAMA_M4
        model = "qwen3:0.6b" if host == OLLAMA_M2 else "meok-sov3:latest"
        label = "M2-fast" if host == OLLAMA_M2 else "M4-sovereign"

        r = olm_query(host, model, query)
        if r.get("ok"):
            results.append({"query": query, "label": label, **r})
            print(f"  ✓ {label:13} {r['latency_s']:5.1f}s {r['tok_per_s']:5.1f} tok/s — {query[:50]}")
        else:
            print(f"  ✗ {label:13} {r.get('error')}")

    # SOV3 record
    sov3_call("record_memory", {
        "key": "care_mission_responder",
        "value": f"Auto-responder fired {len(results)} care missions on {datetime.now().isoformat()}",
        "care_weight": 0.9,
        "importance": 0.7,
    })

    # Save
    out_file = Path.home() / ".meok" / "care-mission-responses.json"
    out_data = {
        "generated_at": datetime.now().isoformat(),
        "total": len(results),
        "successful": sum(1 for r in results if r.get("ok")),
        "responses": results,
    }
    out_file.write_text(json.dumps(out_data, indent=2))

    print(f"\n  Successful: {sum(1 for r in results if r.get('ok'))}/{len(CARE_QUERIES)}")
    print(f"  Log: {out_file}")


if __name__ == "__main__":
    main()
