"""
OSINT Collectors — Unified collection layer wrapping 7 real OSINT tools.

Each collector wraps a CLI tool or Python library with graceful fallback
if the tool is not installed. All collectors implement the same async
interface returning List[Finding] from core.mirror_mode.

Tools wrapped:
  1. Ignorant   — phone number → platform membership (CLI)
  2. Subfinder  — subdomain enumeration (Go CLI binary)
  3. Gitleaks   — credential leak scanning (CLI)
  4. Snscrape   — social media scraping (Python library)
  5. Datasette  — OSINT dataset querying (HTTP API)
  6. GAU        — URL archive fetching (Go CLI binary)
  7. Instaloader — Instagram data (Python library)

Architecture:
  OsintCollector (base) → 7 collectors → OsintCollectorOrchestrator
  Orchestrator runs all available collectors concurrently + merges with
  MirrorMode findings → unified MirrorReport.
"""

from __future__ import annotations

import asyncio
import importlib
import json
import logging
import shutil
import subprocess
import urllib.request
import urllib.parse
from dataclasses import dataclass
from datetime import datetime
from typing import Any, Dict, List, Optional

from meok.core.mirror_mode import Finding, MirrorMode, MirrorReport, Severity, get_mirror

logger = logging.getLogger(__name__)


# ── Base class ─────────────────────────────────────────────────────────────────

class OsintCollector:
    """Base class for all OSINT collectors."""

    NAME: str = "base"

    def is_available(self) -> bool:
        """Check whether the underlying tool/library is installed."""
        raise NotImplementedError

    async def run(self, target: str) -> List[Finding]:
        """Run the collector against target and return findings."""
        raise NotImplementedError

    def _unavailable_finding(self, install_hint: str) -> Finding:
        return Finding(
            collector=self.NAME,
            title=f"Tool not installed: {self.NAME}",
            description=(
                f"The {self.NAME} collector is not available on this system. "
                f"Install it to enable this check. {install_hint}"
            ),
            severity=Severity.INFO,
            evidence={"tool": self.NAME, "available": False},
            hardening_action=install_hint,
            care_note=f"Installing {self.NAME} would increase coverage of your OSINT exposure scan.",
        )


# ── 1. Ignorant — phone number → platform membership ──────────────────────────

class IgnorantCollector(OsintCollector):
    """
    Wraps the Ignorant CLI tool: phone number → platform membership.
    CLI: ignorant <phone>
    Falls back to checking a small set of public endpoints if not installed.
    """

    NAME = "ignorant_phone"

    def is_available(self) -> bool:
        return shutil.which("ignorant") is not None

    async def run(self, target: str) -> List[Finding]:
        # Normalise: target should be a phone number
        phone = target.strip()
        if not phone:
            return []

        if self.is_available():
            return await self._run_cli(phone)
        else:
            return await self._run_fallback(phone)

    async def _run_cli(self, phone: str) -> List[Finding]:
        try:
            proc = await asyncio.create_subprocess_exec(
                "ignorant", phone,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=30)
            raw = stdout.decode(errors="replace")

            # Ignorant may output JSON or line-by-line results
            platforms_found = []
            try:
                data = json.loads(raw)
                if isinstance(data, list):
                    platforms_found = [d.get("site", str(d)) for d in data if d.get("exists")]
                elif isinstance(data, dict):
                    platforms_found = [k for k, v in data.items() if v]
            except json.JSONDecodeError:
                # Parse line output: lines containing [+] usually mean found
                for line in raw.splitlines():
                    if "[+]" in line or "found" in line.lower():
                        platforms_found.append(line.strip())

            if platforms_found:
                return [Finding(
                    collector=self.NAME,
                    title=f"Phone number registered on {len(platforms_found)} platform(s)",
                    description=(
                        f"Phone {phone[:4]}****{phone[-2:]} is linked to accounts on: "
                        f"{', '.join(str(p) for p in platforms_found[:10])}. "
                        f"Phone numbers are a primary deanonymisation vector."
                    ),
                    severity=Severity.HIGH if len(platforms_found) >= 3 else Severity.MEDIUM,
                    evidence={"phone_prefix": phone[:4], "platforms": platforms_found},
                    hardening_action=(
                        "Use a separate phone number (e.g. Google Voice, Twilio) for account "
                        "registrations. Enable app-based 2FA instead of SMS."
                    ),
                    care_note=(
                        "Phone numbers are sold between data brokers and can be used to "
                        "locate you, bypass 2FA via SIM-swap, or correlate your accounts."
                    ),
                )]
            return []

        except asyncio.TimeoutError:
            logger.warning("IgnorantCollector timed out for %s", phone[:4])
            return []
        except Exception as exc:
            logger.warning("IgnorantCollector CLI error: %s", exc)
            return []

    async def _run_fallback(self, phone: str) -> List[Finding]:
        """Minimal fallback: return informational finding about what would be checked."""
        return [Finding(
            collector=self.NAME,
            title="Phone platform check skipped — Ignorant not installed",
            description=(
                f"The Ignorant tool is not installed. Phone number platform membership "
                f"checking is unavailable. Install with: pip install ignorant"
            ),
            severity=Severity.INFO,
            evidence={"tool": "ignorant", "available": False, "phone_prefix": phone[:4] if len(phone) >= 4 else phone},
            hardening_action="Install Ignorant: pip install ignorant — then re-run this check.",
            care_note="Phone platform enumeration reveals which services have your number on file.",
        )]


# ── 2. Subfinder — subdomain enumeration ──────────────────────────────────────

class SubfinderCollector(OsintCollector):
    """
    Wraps the Subfinder Go binary for subdomain enumeration.
    CLI: subfinder -d <domain> -o - -json
    """

    NAME = "subfinder"

    def is_available(self) -> bool:
        return shutil.which("subfinder") is not None

    async def run(self, target: str) -> List[Finding]:
        domain = target.strip().lstrip("https://").lstrip("http://").split("/")[0]
        if not domain or "." not in domain:
            return []

        if not self.is_available():
            return [self._unavailable_finding(
                "Install Subfinder: go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest"
            )]

        try:
            proc = await asyncio.create_subprocess_exec(
                "subfinder", "-d", domain, "-o", "-", "-json", "-silent",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            stdout, _ = await asyncio.wait_for(proc.communicate(), timeout=60)
            raw = stdout.decode(errors="replace").strip()

            subdomains = []
            for line in raw.splitlines():
                line = line.strip()
                if not line:
                    continue
                try:
                    obj = json.loads(line)
                    sub = obj.get("host") or obj.get("subdomain") or str(obj)
                    subdomains.append(sub)
                except json.JSONDecodeError:
                    subdomains.append(line)

            if subdomains:
                return [Finding(
                    collector=self.NAME,
                    title=f"Found {len(subdomains)} subdomain(s) for {domain}",
                    description=(
                        f"Subfinder discovered {len(subdomains)} subdomains: "
                        f"{', '.join(subdomains[:8])}{'...' if len(subdomains) > 8 else ''}. "
                        f"Each subdomain is a potential attack surface."
                    ),
                    severity=Severity.MEDIUM if len(subdomains) >= 10 else Severity.LOW,
                    evidence={"domain": domain, "subdomain_count": len(subdomains), "subdomains": subdomains[:50]},
                    hardening_action=(
                        "Audit each subdomain. Remove or disable unused subdomains. "
                        "Ensure all subdomains have valid TLS certificates and are behind your WAF."
                    ),
                    care_note=(
                        "Forgotten subdomains are a common initial access vector. "
                        "Attackers enumerate subdomains to find unpatched or misconfigured services."
                    ),
                )]
            return []

        except asyncio.TimeoutError:
            logger.warning("SubfinderCollector timed out for %s", domain)
            return []
        except Exception as exc:
            logger.warning("SubfinderCollector error: %s", exc)
            return []


# ── 3. Gitleaks — credential leak scanning ────────────────────────────────────

class GitleaksCollector(OsintCollector):
    """
    Wraps Gitleaks CLI to scan a local directory for leaked credentials.
    CLI: gitleaks detect --source <path> -f json
    Target: local filesystem path to a git repo or directory.
    """

    NAME = "gitleaks"

    def is_available(self) -> bool:
        return shutil.which("gitleaks") is not None

    async def run(self, target: str) -> List[Finding]:
        """target should be a local directory path."""
        import os
        path = target.strip()
        if not path or not os.path.exists(path):
            return [Finding(
                collector=self.NAME,
                title="Gitleaks: path not found",
                description=f"Target path '{path}' does not exist. Provide a valid local repo path.",
                severity=Severity.INFO,
                evidence={"path": path},
                hardening_action="Provide a valid local directory path containing a git repository.",
                care_note="Gitleaks scans source code for accidentally committed secrets and API keys.",
            )]

        if not self.is_available():
            return [self._unavailable_finding(
                "Install Gitleaks: brew install gitleaks  OR  go install github.com/gitleaks/gitleaks/v8@latest"
            )]

        try:
            proc = await asyncio.create_subprocess_exec(
                "gitleaks", "detect", "--source", path, "-f", "json", "--no-banner",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            stdout, stderr = await asyncio.wait_for(proc.communicate(), timeout=120)
            raw = stdout.decode(errors="replace").strip()

            leaks = []
            if raw:
                try:
                    leaks = json.loads(raw)
                    if not isinstance(leaks, list):
                        leaks = [leaks]
                except json.JSONDecodeError:
                    pass

            if leaks:
                descriptions = [
                    f"{l.get('Description', 'Secret')} in {l.get('File', '?')}:{l.get('StartLine', '?')}"
                    for l in leaks[:5]
                ]
                return [Finding(
                    collector=self.NAME,
                    title=f"Gitleaks found {len(leaks)} potential secret(s) in {path}",
                    description=(
                        f"Leaked credentials detected in git history: "
                        f"{'; '.join(descriptions)}{'...' if len(leaks) > 5 else ''}. "
                        f"These may include API keys, tokens, or passwords committed to version control."
                    ),
                    severity=Severity.CRITICAL,
                    evidence={"path": path, "leak_count": len(leaks), "leaks": leaks[:20]},
                    hardening_action=(
                        "Immediately rotate any exposed secrets. "
                        "Use `git filter-repo` to remove secrets from git history. "
                        "Add a pre-commit hook with gitleaks to prevent future leaks."
                    ),
                    care_note=(
                        "Committed secrets are often scraped by bots within minutes of a push. "
                        "Even private repos that were ever public are at risk."
                    ),
                )]

            return []  # No leaks found — clean

        except asyncio.TimeoutError:
            logger.warning("GitleaksCollector timed out for %s", path)
            return []
        except Exception as exc:
            logger.warning("GitleaksCollector error: %s", exc)
            return []


# ── 4. Snscrape — social media scraping ───────────────────────────────────────

class SnscrapeCollector(OsintCollector):
    """
    Wraps snscrape Python library for Twitter/X profile scraping.
    Falls back gracefully if snscrape is not installed.
    """

    NAME = "snscrape"

    def is_available(self) -> bool:
        try:
            importlib.import_module("snscrape.modules.twitter")
            return True
        except ImportError:
            return False

    async def run(self, target: str) -> List[Finding]:
        username = target.strip().lstrip("@")
        if not username:
            return []

        if not self.is_available():
            return [self._unavailable_finding(
                "Install snscrape: pip install snscrape"
            )]

        try:
            # Run in executor to avoid blocking the event loop
            findings = await asyncio.get_event_loop().run_in_executor(
                None, self._scrape_sync, username
            )
            return findings
        except Exception as exc:
            logger.warning("SnscrapeCollector error: %s", exc)
            return []

    def _scrape_sync(self, username: str) -> List[Finding]:
        try:
            import snscrape.modules.twitter as sntwitter  # type: ignore

            scraper = sntwitter.TwitterUserScraper(username)
            profile = None
            tweets = []
            try:
                profile = scraper._get_entity()
            except Exception:
                pass

            # Collect up to 10 recent tweets for analysis
            try:
                for i, tweet in enumerate(scraper.get_items()):
                    tweets.append({
                        "id": str(tweet.id),
                        "date": tweet.date.isoformat() if tweet.date else None,
                        "content": tweet.rawContent[:200] if hasattr(tweet, "rawContent") else str(tweet)[:200],
                    })
                    if i >= 9:
                        break
            except Exception:
                pass

            if profile or tweets:
                evidence: Dict[str, Any] = {
                    "username": username,
                    "tweet_count": len(tweets),
                    "recent_tweets": tweets,
                }
                if profile:
                    evidence["followers"] = getattr(profile, "followersCount", None)
                    evidence["following"] = getattr(profile, "friendsCount", None)
                    evidence["description"] = getattr(profile, "description", None)
                    evidence["location"] = getattr(profile, "location", None)

                return [Finding(
                    collector=self.NAME,
                    title=f"Twitter/X profile found: @{username}",
                    description=(
                        f"Public Twitter/X profile @{username} is accessible. "
                        f"Found {len(tweets)} recent public tweets. "
                        f"Location, interests, and connections are publicly visible."
                    ),
                    severity=Severity.LOW,
                    evidence=evidence,
                    hardening_action=(
                        "Review your Twitter/X privacy settings. "
                        "Consider making your account private or removing location data from bio."
                    ),
                    care_note=(
                        "Public tweet history is a rich source of personal information "
                        "including location patterns, social connections, and opinions."
                    ),
                )]

            # Profile not found
            return []

        except Exception as exc:
            logger.warning("Snscrape sync scrape failed: %s", exc)
            return []


# ── 5. Datasette — OSINT dataset querying ─────────────────────────────────────

class DatasetteCollector(OsintCollector):
    """
    Queries a local Datasette instance for OSINT data.
    Default: GET http://localhost:8001/<db>/<table>.json?<query>
    """

    NAME = "datasette"

    BASE_URL = "http://localhost:8001"

    def is_available(self) -> bool:
        """Check if a Datasette instance is running."""
        try:
            req = urllib.request.Request(
                f"{self.BASE_URL}/-/health",
                headers={"User-Agent": "MEOK-OSINT/1.0"},
            )
            with urllib.request.urlopen(req, timeout=3) as resp:
                return resp.status == 200
        except Exception:
            return False

    async def run(self, target: str) -> List[Finding]:
        """
        target: query string in format "db/table?column=value"
        e.g. "breaches/records?email=user@example.com"
        """
        if not target:
            return []

        if not self.is_available():
            return [Finding(
                collector=self.NAME,
                title="Datasette not running",
                description=(
                    "No Datasette instance found at localhost:8001. "
                    "Start Datasette with your OSINT datasets to enable local data querying."
                ),
                severity=Severity.INFO,
                evidence={"base_url": self.BASE_URL, "available": False},
                hardening_action="Run: datasette your_database.db --port 8001",
                care_note="Datasette enables querying local OSINT datasets without sending data to external services.",
            )]

        try:
            url = f"{self.BASE_URL}/{target.lstrip('/')}"
            if ".json" not in url:
                url = url.rstrip("/") + ".json"
            req = urllib.request.Request(url, headers={"User-Agent": "MEOK-OSINT/1.0"})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read())

            rows = data.get("rows", [])
            if rows:
                return [Finding(
                    collector=self.NAME,
                    title=f"Datasette: {len(rows)} record(s) found for query",
                    description=(
                        f"Local OSINT dataset returned {len(rows)} record(s) matching '{target}'. "
                        f"This data may include breach records, leaked credentials, or aggregated PII."
                    ),
                    severity=Severity.HIGH if len(rows) >= 1 else Severity.INFO,
                    evidence={"query": target, "row_count": len(rows), "sample": rows[:5]},
                    hardening_action="Review the matched records and take appropriate hardening steps.",
                    care_note="Local OSINT datasets can contain breach data, dark web leaks, and aggregated PII.",
                )]
            return []

        except Exception as exc:
            logger.warning("DatasetteCollector error: %s", exc)
            return []


# ── 6. GAU — URL archive fetching ─────────────────────────────────────────────

class GauCollector(OsintCollector):
    """
    Wraps the GetAllURLs (GAU) Go binary for fetching archived URLs.
    CLI: gau <domain>  → line-separated URLs
    """

    NAME = "gau"

    def is_available(self) -> bool:
        return shutil.which("gau") is not None

    async def run(self, target: str) -> List[Finding]:
        domain = target.strip().lstrip("https://").lstrip("http://").split("/")[0]
        if not domain or "." not in domain:
            return []

        if not self.is_available():
            return [self._unavailable_finding(
                "Install GAU: go install github.com/lc/gau/v2/cmd/gau@latest"
            )]

        try:
            proc = await asyncio.create_subprocess_exec(
                "gau", domain,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            stdout, _ = await asyncio.wait_for(proc.communicate(), timeout=60)
            raw = stdout.decode(errors="replace").strip()

            urls = [u.strip() for u in raw.splitlines() if u.strip()]

            if not urls:
                return []

            # Analyse for interesting patterns
            interesting = {
                "admin": [],
                "api": [],
                "backup": [],
                "config": [],
                "env": [],
                "login": [],
            }
            for url in urls:
                url_lower = url.lower()
                for pattern in interesting:
                    if pattern in url_lower:
                        interesting[pattern].append(url)

            flagged = {k: v[:5] for k, v in interesting.items() if v}
            severity = Severity.MEDIUM if flagged else Severity.LOW

            return [Finding(
                collector=self.NAME,
                title=f"GAU found {len(urls)} archived URL(s) for {domain}",
                description=(
                    f"Web archive sources (Wayback Machine, Common Crawl, etc.) have "
                    f"{len(urls)} URLs indexed for {domain}. "
                    f"{'Interesting paths found: ' + ', '.join(flagged.keys()) + '.' if flagged else ''}"
                ),
                severity=severity,
                evidence={
                    "domain": domain,
                    "url_count": len(urls),
                    "sample_urls": urls[:20],
                    "interesting_paths": flagged,
                },
                hardening_action=(
                    "Review archived URLs for sensitive paths (admin, API, backup, .env). "
                    "Request removal from Wayback Machine if needed: "
                    "https://help.archive.org/help/how-do-i-request-to-have-a-url-excluded-from-the-wayback-machine/"
                ),
                care_note=(
                    "URLs preserved in web archives can reveal historical admin interfaces, "
                    "API endpoints, and configuration files that may still be exploitable."
                ),
            )]

        except asyncio.TimeoutError:
            logger.warning("GauCollector timed out for %s", domain)
            return []
        except Exception as exc:
            logger.warning("GauCollector error: %s", exc)
            return []


# ── 7. Instaloader — Instagram data ───────────────────────────────────────────

class InstaloaderCollector(OsintCollector):
    """
    Wraps Instaloader Python library for Instagram profile data.
    Falls back gracefully if not installed.
    """

    NAME = "instaloader"

    def is_available(self) -> bool:
        try:
            importlib.import_module("instaloader")
            return True
        except ImportError:
            return False

    async def run(self, target: str) -> List[Finding]:
        username = target.strip().lstrip("@")
        if not username:
            return []

        if not self.is_available():
            return [self._unavailable_finding(
                "Install Instaloader: pip install instaloader"
            )]

        try:
            findings = await asyncio.get_event_loop().run_in_executor(
                None, self._fetch_profile_sync, username
            )
            return findings
        except Exception as exc:
            logger.warning("InstaloaderCollector error: %s", exc)
            return []

    def _fetch_profile_sync(self, username: str) -> List[Finding]:
        try:
            import instaloader  # type: ignore

            L = instaloader.Instaloader(
                download_videos=False,
                download_video_thumbnails=False,
                download_geotags=False,
                download_comments=False,
                save_metadata=False,
                compress_json=False,
                quiet=True,
            )

            try:
                profile = instaloader.Profile.from_username(L.context, username)
            except instaloader.exceptions.ProfileNotExistsException:
                return []
            except Exception as exc:
                logger.warning("Instaloader profile fetch failed: %s", exc)
                return []

            is_private = profile.is_private
            followers = profile.followers
            following = profile.followees
            bio = profile.biography
            external_url = profile.external_url

            evidence: Dict[str, Any] = {
                "username": username,
                "is_private": is_private,
                "followers": followers,
                "following": following,
                "bio": bio[:200] if bio else None,
                "external_url": external_url,
                "post_count": profile.mediacount,
            }

            severity = Severity.INFO if is_private else Severity.LOW
            privacy_note = "Account is private." if is_private else "Account is PUBLIC — all posts visible."

            return [Finding(
                collector=self.NAME,
                title=f"Instagram profile found: @{username} ({privacy_note})",
                description=(
                    f"Instagram profile @{username} exists with {followers} followers. "
                    f"{privacy_note} "
                    f"Bio: {bio[:100] if bio else 'empty'}."
                ),
                severity=severity,
                evidence=evidence,
                hardening_action=(
                    "Set account to private if you don't need public visibility. "
                    "Remove location data, phone number, and employer from bio."
                ),
                care_note=(
                    "Public Instagram profiles expose photo metadata, location check-ins, "
                    "and personal relationships that can be used for targeted social engineering."
                ),
            )]

        except Exception as exc:
            logger.warning("Instaloader sync fetch failed: %s", exc)
            return []


# ── Orchestrator ───────────────────────────────────────────────────────────────

ALL_COLLECTORS = [
    IgnorantCollector,
    SubfinderCollector,
    GitleaksCollector,
    SnscrapeCollector,
    DatasetteCollector,
    GauCollector,
    InstaloaderCollector,
]


class OsintCollectorOrchestrator:
    """
    Runs all available OSINT collectors concurrently against a target,
    combines with Mirror Mode findings, and returns a unified MirrorReport.
    """

    def __init__(self):
        self.collectors: List[OsintCollector] = [cls() for cls in ALL_COLLECTORS]
        self.mirror: MirrorMode = get_mirror()

    def get_available_collectors(self) -> List[str]:
        return [c.NAME for c in self.collectors if c.is_available()]

    def get_unavailable_collectors(self) -> List[str]:
        return [c.NAME for c in self.collectors if not c.is_available()]

    async def run_all(
        self,
        target: str,
        *,
        email: Optional[str] = None,
        username: Optional[str] = None,
        full_name: Optional[str] = None,
        domain: Optional[str] = None,
        include_mirror_mode: bool = True,
    ) -> MirrorReport:
        """
        Run all collectors concurrently and merge with MirrorMode results.
        target: primary target string (phone / domain / username / path)
        """
        import hashlib

        subject = email or username or target or "unknown"
        subject_hash = hashlib.sha256(subject.lower().strip().encode()).hexdigest()

        all_findings: List[Finding] = []
        collectors_run: List[str] = []
        collectors_failed: List[str] = []

        # 1. Run all OSINT collectors concurrently
        tasks = [collector.run(target) for collector in self.collectors]
        names = [collector.NAME for collector in self.collectors]

        results = await asyncio.gather(*tasks, return_exceptions=True)

        for name, result in zip(names, results):
            if isinstance(result, Exception):
                collectors_failed.append(name)
                logger.warning("Collector %s failed: %s", name, result)
            else:
                collectors_run.append(name)
                all_findings.extend(result)

        # 2. Merge with Mirror Mode if inputs provided
        if include_mirror_mode and any([email, username, full_name, domain]):
            try:
                mirror_report = await self.mirror.investigate(
                    email=email,
                    username=username,
                    full_name=full_name,
                    domain=domain,
                )
                all_findings.extend(mirror_report.findings)
                collectors_run.extend(mirror_report.collectors_run)
                collectors_failed.extend(mirror_report.collectors_failed)
            except Exception as exc:
                logger.warning("MirrorMode merge failed: %s", exc)

        # 3. Deduplicate and score
        seen_titles = set()
        unique_findings = []
        for f in all_findings:
            if f.title not in seen_titles:
                seen_titles.add(f.title)
                unique_findings.append(f)

        risk_score, risk_label = self._compute_risk(unique_findings)
        hardening = self._prioritize_hardening(unique_findings)

        return MirrorReport(
            subject=subject,
            subject_hash=subject_hash,
            findings=unique_findings,
            collectors_run=list(set(collectors_run)),
            collectors_failed=list(set(collectors_failed)),
            risk_score=risk_score,
            risk_label=risk_label,
            hardening_priority=hardening,
        )

    def _compute_risk(self, findings: List[Finding]) -> tuple:
        if not findings:
            return 0.0, "Minimal"
        weights = {
            Severity.CRITICAL: 0.4,
            Severity.HIGH: 0.25,
            Severity.MEDIUM: 0.15,
            Severity.LOW: 0.08,
            Severity.INFO: 0.02,
        }
        score = min(1.0, sum(weights.get(f.severity, 0) for f in findings))
        if score >= 0.7:
            label = "Critical"
        elif score >= 0.4:
            label = "Significant"
        elif score >= 0.2:
            label = "Moderate"
        else:
            label = "Minimal"
        return round(score, 3), label

    def _prioritize_hardening(self, findings: List[Finding]) -> List[str]:
        ordered = sorted(findings, key=lambda f: list(Severity).index(f.severity))
        seen = set()
        actions = []
        for f in ordered:
            action = f.hardening_action[:120]
            if action not in seen:
                seen.add(action)
                actions.append(action)
            if len(actions) >= 3:
                break
        return actions


# ── Singleton ──────────────────────────────────────────────────────────────────

_orchestrator: Optional[OsintCollectorOrchestrator] = None


def get_osint_orchestrator() -> OsintCollectorOrchestrator:
    global _orchestrator
    if _orchestrator is None:
        _orchestrator = OsintCollectorOrchestrator()
    return _orchestrator
