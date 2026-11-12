"""Deterministic, zero-dependency reader for Council of AI's live GSPC board.

Authority:
  - Live GSPC board: GET https://councilof.ai/api/gspc
  - Corrections ledger: GET https://councilof.ai/api/corrections
  - Single remote MCP gateway: https://councilof.ai/mcp
  - Local stdio MCP package: csoai-gspc-mcp

Invariants (CSOAI_LOCK.md & Honesty Register):
  - Measurement, not certification.
  - Quote totals.public_count and totals.lid verbatim; never recompute axis counts
    or claim a separated model leader when TIE/UNTESTED holds.
  - Prefer honest UNCHECKABLE over an unverified or fabricated claim.
"""

from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request
from typing import Any, Callable, Dict, Optional

CANONICAL_GSPC_BOARD_URL = "https://councilof.ai/api/gspc"
CANONICAL_CORRECTIONS_URL = "https://councilof.ai/api/corrections"
CANONICAL_MCP_GATEWAY_URL = "https://councilof.ai/mcp"
CANONICAL_STDIO_PACKAGE = "csoai-gspc-mcp"
DOCTRINE = "Measurement, not certification."

JsonFetcher = Callable[[str, float], Dict[str, Any]]


def _default_fetch_json(url: str, timeout: float = 8.0) -> Dict[str, Any]:
    req = urllib.request.Request(
        url,
        headers={
            "Accept": "application/json",
            "User-Agent": "meok-gspc-board-reader/1.0 (+https://meok.ai)",
        },
        method="GET",
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        status = getattr(resp, "status", 200)
        if status != 200:
            raise RuntimeError(f"HTTP_{status}")
        raw = resp.read().decode("utf-8")
    payload = json.loads(raw)
    if not isinstance(payload, dict):
        raise ValueError("INVALID_JSON_ROOT")
    return payload


def fetch_gspc_board(
    url: str = CANONICAL_GSPC_BOARD_URL,
    timeout: float = 8.0,
    fetcher: Optional[JsonFetcher] = None,
) -> Dict[str, Any]:
    """Fetch and quote Council of AI's live GSPC board verbatim without recomputation."""
    active_fetcher = fetcher or _default_fetch_json
    try:
        board = active_fetcher(url, timeout)
    except (urllib.error.URLError, TimeoutError, ValueError, RuntimeError, OSError) as exc:
        return {
            "ok": False,
            "state": "UNCHECKABLE",
            "reason": str(exc) or exc.__class__.__name__,
            "source": url,
            "gateway": CANONICAL_MCP_GATEWAY_URL,
            "stdio_package": CANONICAL_STDIO_PACKAGE,
            "doctrine": DOCTRINE,
        }

    totals = board.get("totals")
    if not isinstance(totals, dict) or not isinstance(totals.get("public_count"), str):
        return {
            "ok": False,
            "state": "UNCHECKABLE",
            "reason": "MISSING_VERBATIM_TOTALS",
            "source": url,
            "gateway": CANONICAL_MCP_GATEWAY_URL,
            "stdio_package": CANONICAL_STDIO_PACKAGE,
            "doctrine": DOCTRINE,
        }

    return {
        "ok": True,
        "state": "LIVE",
        "source": url,
        "gateway": CANONICAL_MCP_GATEWAY_URL,
        "stdio_package": CANONICAL_STDIO_PACKAGE,
        "schema": board.get("schema"),
        "issuer": board.get("issuer"),
        "public_count": totals.get("public_count"),
        "separation_public_count": totals.get("separation_public_count"),
        "lid": totals.get("lid"),
        "doctrine": DOCTRINE,
    }


def format_gspc_status(summary: Dict[str, Any]) -> str:
    """Format a human-readable line strictly from a fetch_gspc_board() result."""
    if not summary.get("ok"):
        reason = summary.get("reason", "UNAVAILABLE")
        return (
            f"UNCHECKABLE ({reason}) — verify directly at {CANONICAL_GSPC_BOARD_URL}. "
            f"{DOCTRINE}"
        )
    parts = [summary["public_count"]]
    if summary.get("lid"):
        parts.append(summary["lid"])
    parts.append(f"source: {summary['source']}")
    return " | ".join(parts)


def main(argv: Optional[list[str]] = None) -> int:
    args = argv if argv is not None else sys.argv[1:]
    summary = fetch_gspc_board()
    if "--text" in args:
        sys.stdout.write(format_gspc_status(summary) + "\n")
    else:
        sys.stdout.write(json.dumps(summary, indent=2) + "\n")
    return 0 if summary.get("ok") else 2


if __name__ == "__main__":
    raise SystemExit(main())
