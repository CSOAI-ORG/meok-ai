#!/usr/bin/env python3
"""
Targeted retrain for the two DEGRADED :3102 neural models:
  - dependency_detection_nn  (was accuracy 0.22 / 50 samples)
  - threat_detection_nn      (was exact-match accuracy 0.45 / 33 samples)

Follows the SOV3 bridge retrain pattern:
  1. Back up the existing .pkl + metadata (real rollback target)
  2. Capture pre-train accuracy from on-disk metadata
  3. Retrain via the (now-expanded) train_model()
  4. Compare pre/post accuracy
  5. Save (overwrite live store) ONLY if accuracy improved; otherwise restore backup
  6. Never touches creativity_assessment_nn / care_pattern_analyzer /
     relationship_evolution_nn / partnership_detection_ml / care_validation_nn.

Live model store (read by meok.mcp.server /health): meok/neural/models
Run with the live venv:
  /Users/nicholas/clawd/sovereign-temple/.venv/bin/python3 \
      /Users/nicholas/clawd/meok/neural/retrain_degraded_models.py
"""
import json
import os
import shutil
import sys
from datetime import datetime

sys.path.insert(0, "/Users/nicholas/clawd")

from meok.neural.dependency_detection_nn import DependencyDetectionNN
from meok.neural.threat_detection_nn import ThreatDetectionNN

MODEL_DIR = os.path.join(os.path.dirname(__file__), "models")
BACKUP_DIR = os.path.join(
    MODEL_DIR, "_backup_" + datetime.now().strftime("%Y%m%d_%H%M%S")
)

# Only these two — the rest are healthy and must not be touched.
TARGETS = [
    ("dependency_detection_nn", DependencyDetectionNN),
    ("threat_detection_nn", ThreatDetectionNN),
]


def _read_disk_accuracy(name: str):
    meta = os.path.join(MODEL_DIR, f"{name}_metadata.json")
    if not os.path.exists(meta):
        return None
    with open(meta) as f:
        m = json.load(f).get("metrics", {})
    return m.get("accuracy")


def _backup(name: str):
    os.makedirs(BACKUP_DIR, exist_ok=True)
    for suffix in (".pkl", "_metadata.json", "_vectorizer.pkl"):
        src = os.path.join(MODEL_DIR, f"{name}{suffix}")
        if os.path.exists(src):
            shutil.copy2(src, os.path.join(BACKUP_DIR, f"{name}{suffix}"))


def _restore(name: str):
    for suffix in (".pkl", "_metadata.json", "_vectorizer.pkl"):
        bak = os.path.join(BACKUP_DIR, f"{name}{suffix}")
        if os.path.exists(bak):
            shutil.copy2(bak, os.path.join(MODEL_DIR, f"{name}{suffix}"))


def main():
    print(f"Live model store: {MODEL_DIR}")
    print(f"Backups -> {BACKUP_DIR}\n")
    results = []

    for name, cls in TARGETS:
        print(f"=== {name} ===")
        pre = _read_disk_accuracy(name)
        print(f"  pre (on-disk) accuracy: {pre}")

        _backup(name)

        model = cls(model_dir=MODEL_DIR)
        post_metrics = model.train_model()
        post = post_metrics.get("accuracy")
        print(f"  post (retrained) accuracy: {post:.4f} "
              f"({post_metrics.get('training_samples')} samples)")

        # SOV3 rule: accept only if strictly better (or no prior baseline).
        improved = pre is None or (post is not None and post > pre)
        if improved:
            ok = model.save_model()
            status = "improved_and_saved" if ok else "save_failed"
            if not ok:
                _restore(name)
                status = "save_failed_restored"
        else:
            _restore(name)
            status = "degraded_rolled_back"

        print(f"  status: {status}\n")
        results.append({
            "model": name,
            "pre_accuracy": pre,
            "post_accuracy": post,
            "improved": bool(improved),
            "status": status,
            "training_samples": post_metrics.get("training_samples"),
        })

    print("=== SUMMARY ===")
    print(json.dumps(results, indent=2))
    return results


if __name__ == "__main__":
    main()
