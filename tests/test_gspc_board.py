"""Unit tests for the deterministic GSPC board reader across both Python trees."""

from __future__ import annotations

from pathlib import Path
import unittest

from council import gspc_board as root_gspc
from meok.council import gspc_board as nested_gspc


def _find_repo_root() -> Path:
    here = Path(__file__).resolve()
    for parent in here.parents:
        if (parent / "council" / "gspc_board.py").exists() and (
            parent / "meok" / "council" / "gspc_board.py"
        ).exists():
            return parent
    raise RuntimeError("Could not locate repository root")


SAMPLE_FIXTURE = {
    "schema": "csoai.gspc-axes/0.5",
    "issuer": "CSOAI Ltd (GB, Companies House 16939677)",
    "totals": {
        "public_count": "fixture axes · fixture measured",
        "separation_public_count": "0 separated · TIE",
        "lid": "fixture lid · TIE is TIE · not a certificate.",
    },
}


class GspcBoardReaderTests(unittest.TestCase):
    def test_root_and_nested_modules_stay_byte_identical(self) -> None:
        repo_root = _find_repo_root()
        root_bytes = (repo_root / "council" / "gspc_board.py").read_bytes()
        nested_bytes = (repo_root / "meok" / "council" / "gspc_board.py").read_bytes()
        self.assertEqual(root_bytes, nested_bytes)

    def test_quotes_verbatim_totals_without_recomputation(self) -> None:
        for mod in (root_gspc, nested_gspc):
            res = mod.fetch_gspc_board(fetcher=lambda _url, _t: dict(SAMPLE_FIXTURE))
            self.assertTrue(res["ok"])
            self.assertEqual(res["state"], "LIVE")
            self.assertEqual(res["gateway"], "https://councilof.ai/mcp")
            self.assertEqual(res["stdio_package"], "csoai-gspc-mcp")
            self.assertEqual(res["public_count"], "fixture axes · fixture measured")
            self.assertEqual(res["lid"], "fixture lid · TIE is TIE · not a certificate.")
            rendered = mod.format_gspc_status(res)
            self.assertIn("fixture axes · fixture measured", rendered)
            self.assertIn("not a certificate.", rendered)

    def test_returns_honest_uncheckable_on_network_or_schema_failure(self) -> None:
        def failing_fetcher(_url: str, _t: float):
            raise TimeoutError("UPSTREAM_TIMEOUT")

        res = nested_gspc.fetch_gspc_board(fetcher=failing_fetcher)
        self.assertFalse(res["ok"])
        self.assertEqual(res["state"], "UNCHECKABLE")
        self.assertIn("UPSTREAM_TIMEOUT", res["reason"])
        self.assertIn("UNCHECKABLE", nested_gspc.format_gspc_status(res))

        bad_schema = nested_gspc.fetch_gspc_board(fetcher=lambda _u, _t: {"schema": "x"})
        self.assertFalse(bad_schema["ok"])
        self.assertEqual(bad_schema["reason"], "MISSING_VERBATIM_TOTALS")


if __name__ == "__main__":
    unittest.main()
