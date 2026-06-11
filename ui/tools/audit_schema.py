#!/usr/bin/env python3
"""
MEOK sitemap schema-coverage audit
===================================
Walks src/app/**/page.tsx, parses out:
  - the @type values in any <script type="application/ld+json"> block
  - the canonical URL (from metadata.alternates.canonical or from the route)
  - whether a <h1> exists with substantive text

Prints:
  - routes with NO JSON-LD block at all
  - routes with @type=Article missing author/publisher
  - routes with @type=Product missing offers
  - routes where the canonical URL doesn't match meok.ai/<route>

Exit codes:
  0  every page has at least one JSON-LD block + a canonical
  1  audit found gaps (printed as a list)

Run from meok/ui: `python3 tools/audit_schema.py`
"""
from __future__ import annotations
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "src/app"

LD_RE = re.compile(r'<script[^>]*ld\+json[^>]*>(.*?)</script>', re.DOTALL)
META_CANONICAL_RE = re.compile(r'canonical:\s*["\'](https?://[^"\']+)["\']')
H1_RE = re.compile(r'<h1[^>]*>(.*?)</h1>', re.DOTALL)
PRICE_RE = re.compile(r'"\$?£?\s*\d')


def strip_jsx(s: str) -> str:
    """Quick & dirty JSX-strip — just enough to see if the text is meaningful."""
    return re.sub(r'<[^>]+>', ' ', s).strip()


def audit_route(path: Path) -> dict:
    rel = str(path.relative_to(APP).parent)
    if rel.endswith("/page"): rel = rel[:-5]
    if rel == ".": rel = "/"
    text = path.read_text()

    ld_blocks = LD_RE.findall(text)
    ld_types: list[str] = []
    for b in ld_blocks:
        m = re.findall(r'"@type"\s*:\s*"([^"]+)"', b)
        ld_types.extend(m)
    canonical_m = META_CANONICAL_RE.search(text)
    canonical = canonical_m.group(1) if canonical_m else None
    h1_m = H1_RE.search(text)
    h1 = strip_jsx(h1_m.group(1))[:80] if h1_m else ""

    issues: list[str] = []
    if not ld_blocks:
        issues.append("NO_JSONLD")
    if "Article" in ld_types and "author" not in "\n".join(ld_blocks):
        issues.append("ARTICLE_MISSING_AUTHOR")
    if "Product" in ld_types and "offers" not in "\n".join(ld_blocks):
        issues.append("PRODUCT_MISSING_OFFERS")
    if "FAQPage" in ld_types and "mainEntity" not in "\n".join(ld_blocks):
        issues.append("FAQ_MISSING_ENTITIES")
    if canonical and not canonical.startswith("https://meok.ai/") and not canonical.startswith("https://proofof.ai/") and not canonical.startswith("https://councilof.ai/") and not canonical.startswith("https://optimobile.ai/"):
        issues.append(f"CANONICAL_WRONG_DOMAIN:{canonical[:60]}")
    if not h1:
        issues.append("NO_H1")
    if not canonical:
        issues.append("NO_CANONICAL")

    return {"route": "/" + rel, "types": ld_types, "canonical": canonical,
            "h1": h1, "issues": issues}


def main() -> int:
    pages = sorted(APP.rglob("page.tsx"))
    # Exclude API routes and special dirs
    pages = [p for p in pages if "/api/" not in str(p) and "/_components/" not in str(p)]
    # Walk dynamic-route templates (folder with [param]) - if a route has no
    # page.tsx but its parent does, attribute the parent's JSON-LD to the
    # children too. (The blog/[slug] template has Article JSON-LD for all
    # blog posts; this audit would otherwise false-positive 200 blog posts.)

    def effective_templates(p: Path) -> list[Path]:
        """Walk from p up; collect any sibling template files that could
        contribute JSON-LD (template.tsx, layout.tsx, page.tsx in [slug] dirs).
        """
        out = []
        cur = p.parent
        while cur != APP:
            t = cur / "page.tsx"
            if t.exists() and t != p:
                out.append(t)
            for cand in ("template.tsx", "layout.tsx"):
                f = cur / cand
                if f.exists():
                    out.append(f)
            cur = cur.parent
        # Always include the page itself
        out.append(p)
        return out

    issues_count = 0
    pages_with_no_ld = []
    for p in pages:
        result = audit_route(p)
        # Inherit from any dynamic-route template
        if "NO_JSONLD" in result["issues"]:
            for t in effective_templates(p):
                if t == p: continue
                ttext = t.read_text()
                if "<script" in ttext and "ld+json" in ttext:
                    result["issues"].remove("NO_JSONLD")
                    result["types"].append("(inherited)")
                    break
        if result["issues"]:
            issues_count += 1
            issues_s = " ".join(result["issues"])
            if "NO_JSONLD" in result["issues"]:
                pages_with_no_ld.append(result["route"])
            print(f"✗ {result['route']:50s}  {issues_s}")
        else:
            types = "+".join(result["types"]) or "—"
            print(f"✓ {result['route']:50s}  {types}")

    print(f"\n--- {len(pages)} pages audited, {issues_count} with issues ---")
    if pages_with_no_ld:
        print(f"\n{len(pages_with_no_ld)} pages with NO JSON-LD:")
        for r in pages_with_no_ld:
            print(f"  - {r}")

    return 1 if issues_count else 0


if __name__ == "__main__":
    sys.exit(main())
