#!/usr/bin/env python3
"""
MEOK Auto Elder-Care Outreach Queue
====================================
Generates personalized care-home outreach drafts and writes them
to a human-approval queue. NEVER sends an email without Sir Nick's
explicit approval (the .pending file format ensures the human gates it).

Runs every 24 hours via cron.
"""
import json
import urllib.request
from datetime import datetime
from pathlib import Path

SOV3_URL = "http://localhost:3101"
OLLAMA_M4 = "http://localhost:11434"

QUEUE_DIR = Path.home() / ".meok" / "outreach-queue"
QUEUE_DIR.mkdir(parents=True, exist_ok=True)

# 10 UK care home prospects — to be expanded by real CRM data
PROSPECTS = [
    {"name": "Yorkshire Building Society Care Wing", "region": "Yorkshire", "beds": 84, "tier": "Article 50 priority"},
    {"name": "Cera Care Yorkshire", "region": "Yorkshire", "beds": 120, "tier": "Enterprise"},
    {"name": "Helping Hands Home Care", "region": "National", "beds": 200, "tier": "Article 50 priority"},
    {"name": "Home Instead UK", "region": "National", "beds": 350, "tier": "Enterprise"},
    {"name": "Barchester Healthcare", "region": "National", "beds": 240, "tier": "Article 50 priority"},
    {"name": "Four Seasons Health Care", "region": "National", "beds": 180, "tier": "Enterprise"},
    {"name": "Care UK", "region": "Eastern", "beds": 110, "tier": "Article 50 priority"},
    {"name": "HC-One", "region": "National", "beds": 320, "tier": "Enterprise"},
    {"name": "MHA (Methodist Homes)", "region": "National", "beds": 90, "tier": "Article 50 priority"},
    {"name": "Avery Healthcare", "region": "National", "beds": 75, "tier": "Article 50 priority"},
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


def sovereign_generate(prompt: str, model: str = "qwen3:0.6b", host: str = "http://192.168.50.176:11434") -> str:
    """Use M2 mesh (fast) for drafts, M4 meok-sov3 (slow, sovereign) for finals."""
    try:
        req = urllib.request.Request(
            f"{host}/api/generate",
            data=json.dumps({"model": model, "prompt": prompt, "stream": False, "options": {"num_predict": 350, "num_ctx": 4096}}).encode(),
            headers={"Content-Type": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=60) as r:
            data = json.loads(r.read())
            return data.get("response", "")
    except Exception as e:
        return f"(sovereign OLM error: {e})"


def make_outreach(prospect: dict) -> dict:
    """Generate a personalized outreach email for one prospect."""
    prompt = f"""Write a 3-paragraph outreach email to {prospect['name']} ({prospect['region']}, {prospect['beds']} beds).
Their tier: {prospect['tier']}.
The MEOK mission: sovereign AI that protects vulnerable people.
This email is from Nicholas Templeman, founder of MEOK AI Labs.
Tone: warm, direct, care-first, not salesy.
Mention: EU AI Act Article 50 deadline 2 August 2026, sovereign attestations, signed evidence, no cloud lock-in.
End with: 15-min call offer, nicholas@meok.ai.
Sign off: Nick, founder, MEOK AI Labs.
Do NOT include placeholders. Write the actual email body."""

    body = sovereign_generate(prompt)

    return {
        "id": f"outreach-{datetime.now().strftime('%Y%m%d')}-{prospect['name'].lower().replace(' ', '-')[:20]}",
        "to": f"info@{prospect['name'].lower().replace(' ', '').replace('(', '').replace(')', '')}.co.uk",
        "subject": f"{prospect['name']} · EU AI Act Article 50 · sovereign attestations for {prospect['beds']}-bed home",
        "body": body,
        "prospect": prospect,
        "generated_at": datetime.now().isoformat(),
        "status": "pending_human_approval",
        "care_score": 0.95,
    }


def main():
    print(f"[outreach-queue] Running {datetime.now().isoformat()}")

    # Submit task to SOV3
    sov3_call("coord_submit_task", {
        "title": "Elder care outreach queue (10 prospects)",
        "description": "Generate personalized outreach drafts for 10 UK care homes, queue for human approval. No emails sent without explicit sign-off.",
        "care_score": 0.95,
    })

    queue_file = QUEUE_DIR / f"outreach-{datetime.now().strftime('%Y%m%d')}.json"
    drafts = []
    for prospect in PROSPECTS:
        # Check if already drafted
        existing = list(QUEUE_DIR.glob(f"outreach-*{prospect['name'].lower().replace(' ', '-')[:20]}*.json"))
        if existing:
            print(f"  ⊘ Skip {prospect['name']} (already drafted)")
            continue
        print(f"  ✎ Drafting {prospect['name']}...")
        draft = make_outreach(prospect)
        draft_file = QUEUE_DIR / f"{draft['id']}.json"
        draft_file.write_text(json.dumps(draft, indent=2))
        drafts.append(draft["id"])
        print(f"    → {draft_file}")

    # Update queue index
    index_file = QUEUE_DIR / "INDEX.json"
    if index_file.exists():
        index = json.loads(index_file.read_text())
    else:
        index = {"drafts": []}
    for draft_id in drafts:
        index["drafts"].append(draft_id)
    index["last_run"] = datetime.now().isoformat()
    index_file.write_text(json.dumps(index, indent=2))

    print(f"\n  Drafted: {len(drafts)}/{len(PROSPECTS)}")
    print(f"  Queue dir: {QUEUE_DIR}")
    print(f"  Total pending: {len(index['drafts'])}")
    print(f"\n  ⚠️  These are PENDING — Nick must approve before send.")


if __name__ == "__main__":
    main()
