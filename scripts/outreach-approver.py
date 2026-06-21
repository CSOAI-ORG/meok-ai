#!/usr/bin/env python3
"""
MEOK Outreach Approver CLI
===========================
Sir Nick's one-stop tool for reviewing + approving elder-care outreach drafts.
Scans ~/.meok/outreach-queue/, shows a digest, approves / rejects each one.
Approved drafts are written to ~/.meok/outreach-approved.json — the actual
SMTP send happens via the meok auto-fire-emails cron once Resend env is set.

Usage:
    python3 ~/clawd/meok/scripts/outreach-approver.py list
    python3 ~/clawd/meok/scripts/outreach-approver.py show <id>
    python3 ~/clawd/meok/scripts/outreach-approver.py approve <id>
    python3 ~/clawd/meok/scripts/outreach-approver.py reject <id>
    python3 ~/clawd/meok/scripts/outreach-approver.py bulk  # interactively approve all
"""
import json
import sys
from pathlib import Path
from datetime import datetime

QUEUE_DIR = Path.home() / ".meok" / "outreach-queue"
APPROVED_FILE = Path.home() / ".meok" / "outreach-approved.json"


def load_approved() -> dict:
    if APPROVED_FILE.exists():
        return json.loads(APPROVED_FILE.read_text())
    return {"approved": [], "rejected": [], "last_updated": None}


def save_approved(data: dict):
    data["last_updated"] = datetime.now().isoformat()
    APPROVED_FILE.write_text(json.dumps(data, indent=2))


def list_drafts():
    drafts = sorted(QUEUE_DIR.glob("outreach-*.json"))
    approved = load_approved()
    approved_ids = {d["id"] for d in approved["approved"]}
    rejected_ids = {d["id"] for d in approved["rejected"]}

    print(f"\n{'='*80}")
    print(f"OUTREACH QUEUE — {len(drafts)} drafts in {QUEUE_DIR}")
    print(f"  Approved: {len(approved_ids)} | Rejected: {len(rejected_ids)} | Pending: {len(drafts) - len(approved_ids) - len(rejected_ids)}")
    print(f"{'='*80}\n")

    for f in drafts:
        d = json.loads(f.read_text())
        status = "✓ APPROVED" if d["id"] in approved_ids else "✗ REJECTED" if d["id"] in rejected_ids else "○ PENDING"
        print(f"  {status:12} {d['id']:50}")
        print(f"    to: {d['to']}")
        print(f"    subject: {d['subject'][:80]}")
        print()


def show_draft(draft_id: str):
    matches = list(QUEUE_DIR.glob(f"outreach-*{draft_id}*"))
    if not matches:
        matches = [f for f in QUEUE_DIR.glob("outreach-*.json") if draft_id in f.read_text()]
    if not matches:
        print(f"  ✗ No draft found matching: {draft_id}")
        return
    d = json.loads(matches[0].read_text())
    print(f"\n{'='*80}")
    print(f"DRAFT: {d['id']}")
    print(f"TO: {d['to']}")
    print(f"SUBJECT: {d['subject']}")
    print(f"GENERATED: {d['generated_at']}")
    print(f"CARE_SCORE: {d['care_score']}")
    print(f"PROSPECT: {d['prospect']['name']} ({d['prospect']['region']}, {d['prospect']['beds']} beds, {d['prospect']['tier']})")
    print(f"{'='*80}")
    print()
    print(d["body"])
    print()


def approve_draft(draft_id: str):
    matches = [f for f in QUEUE_DIR.glob("outreach-*.json") if draft_id in f.read_text()]
    if not matches:
        print(f"  ✗ No draft found matching: {draft_id}")
        return
    d = json.loads(matches[0].read_text())
    state = load_approved()
    if any(a["id"] == d["id"] for a in state["approved"]):
        print(f"  ⊘ Already approved: {d['id']}")
        return
    state["approved"].append({"id": d["id"], "to": d["to"], "subject": d["subject"], "approved_at": datetime.now().isoformat()})
    state["rejected"] = [r for r in state["rejected"] if r["id"] != d["id"]]
    save_approved(state)
    print(f"  ✓ APPROVED: {d['id']} → {d['to']}")
    print(f"    Will be sent by meok auto-fire-emails cron once Resend SMTP is configured")


def reject_draft(draft_id: str):
    matches = [f for f in QUEUE_DIR.glob("outreach-*.json") if draft_id in f.read_text()]
    if not matches:
        print(f"  ✗ No draft found matching: {draft_id}")
        return
    d = json.loads(matches[0].read_text())
    state = load_approved()
    state["rejected"].append({"id": d["id"], "rejected_at": datetime.now().isoformat()})
    state["approved"] = [a for a in state["approved"] if a["id"] != d["id"]]
    save_approved(state)
    print(f"  ✗ REJECTED: {d['id']}")


def bulk_approve():
    drafts = sorted(QUEUE_DIR.glob("outreach-*.json"))
    state = load_approved()
    already = {a["id"] for a in state["approved"]} | {r["id"] for r in state["rejected"]}
    pending = [d for d in drafts if json.loads(d.read_text())["id"] not in already]
    print(f"\n  {len(pending)} drafts pending")
    if not pending:
        print("  All drafts already processed")
        return
    print("\n  Showing all drafts (one per page):\n")
    for i, f in enumerate(pending, 1):
        d = json.loads(f.read_text())
        print(f"  --- Draft {i}/{len(pending)}: {d['id']} ---")
        show_draft(d["id"])
        if i < len(pending):
            print("  Press Enter for next (or Ctrl-C to exit)...")
            try:
                input()
            except KeyboardInterrupt:
                print("\n  Exited.")
                return


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return

    cmd = sys.argv[1]
    if cmd == "list":
        list_drafts()
    elif cmd == "show":
        if len(sys.argv) < 3:
            print("  Usage: outreach-approver.py show <id>")
            return
        show_draft(sys.argv[2])
    elif cmd == "approve":
        if len(sys.argv) < 3:
            print("  Usage: outreach-approver.py approve <id>")
            return
        approve_draft(sys.argv[2])
    elif cmd == "reject":
        if len(sys.argv) < 3:
            print("  Usage: outreach-approver.py reject <id>")
            return
        reject_draft(sys.argv[2])
    elif cmd == "bulk":
        bulk_approve()
    else:
        print(f"  Unknown command: {cmd}")
        print(__doc__)


if __name__ == "__main__":
    main()
