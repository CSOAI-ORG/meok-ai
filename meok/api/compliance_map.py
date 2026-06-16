"""
RegGeoInt — Regulatory Geospatial Intelligence
==============================================
The core strategic moat: every AI regulation is a map of where rules apply.
No one is building the map. MEOK is.

Phase 2 Expansion: 50+ jurisdictions (27 EU Member States, US states, APAC)
"""
from fastapi import APIRouter
from typing import Dict, List, Any

router = APIRouter(prefix="/v1/compliance-map", tags=["compliance-map"])

# ═══════════════════════════════════════════════════════════════════════════════
# JURISDICTION DATABASE — 50+ regions
# ═══════════════════════════════════════════════════════════════════════════════

REGULATORY_MAP: Dict[str, Dict[str, Any]] = {
    # ── EU Member States (27) ──────────────────────────────────────────────────
    "AT": {
        "name": "Austria",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "Bundesrechenzentrum / DSB",
        "risk_tiers": {"minimal": "self-assess", "limited": "self-assess", "high-risk": "conformity-assessment", "unacceptable": "prohibited"},
    },
    "BE": {
        "name": "Belgium",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2", "belgium-ai-ethics"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "APD / Centre de Cybersecurité",
    },
    "BG": {
        "name": "Bulgaria",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "CPDP",
    },
    "HR": {
        "name": "Croatia",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "AZOP",
    },
    "CY": {
        "name": "Cyprus",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "Commissioner for PD",
    },
    "CZ": {
        "name": "Czech Republic",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "ÚOOÚ / NÚKIB",
    },
    "DK": {
        "name": "Denmark",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "Datatilsynet",
    },
    "EE": {
        "name": "Estonia",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "AKI",
        "notes": "Digital-first jurisdiction. E-residency program.",
    },
    "FI": {
        "name": "Finland",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "Traficom / DPA",
    },
    "FR": {
        "name": "France",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2", "cnil-ai"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "CNIL",
        "notes": "Aggressive GDPR enforcement. CNIL AI guidelines published.",
    },
    "DE": {
        "name": "Germany",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2", "bsi-ai-guidelines"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "BSI / BfDI",
        "notes": "Highest GDPR fines globally. BSI publishes AI security guidelines.",
    },
    "GR": {
        "name": "Greece",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "HDPA",
    },
    "HU": {
        "name": "Hungary",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "NAIH",
    },
    "IE": {
        "name": "Ireland",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "DPC",
        "notes": "GDPR lead supervisory authority for most US tech companies.",
    },
    "IT": {
        "name": "Italy",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2", "italy-ai-strategy"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "Garante Privacy",
        "notes": "Banned ChatGPT (March 2023). Strong AI enforcement precedent.",
    },
    "LV": {
        "name": "Latvia",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "DVI",
    },
    "LT": {
        "name": "Lithuania",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "ADA",
    },
    "LU": {
        "name": "Luxembourg",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "CNPD",
    },
    "MT": {
        "name": "Malta",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "IDPC",
        "notes": "AI sandbox regulatory hub.",
    },
    "NL": {
        "name": "Netherlands",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2", "netherlands-algorithm-register"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "AP / RDI",
        "notes": "Mandatory algorithm register for government AI.",
    },
    "PL": {
        "name": "Poland",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "UODO",
    },
    "PT": {
        "name": "Portugal",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "CNPD",
    },
    "RO": {
        "name": "Romania",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "ANSPDCP",
    },
    "SK": {
        "name": "Slovakia",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "ÚDZS",
    },
    "SI": {
        "name": "Slovenia",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "IP",
    },
    "ES": {
        "name": "Spain",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2", "spain-ai-strategy"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "AEPD / AESIA",
        "notes": "AESIA = Agencia Española de Supervisión de IA. First dedicated AI agency.",
    },
    "SE": {
        "name": "Sweden",
        "region": "EU",
        "eu_member": True,
        "frameworks": ["eu-ai-act", "gdpr", "dora", "nis2"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "IMY",
    },
    # ── EFTA / EEA ─────────────────────────────────────────────────────────────
    "IS": {
        "name": "Iceland",
        "region": "EEA",
        "eu_member": False,
        "frameworks": ["gdpr", "eea-agreement"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "Persónuvernd",
    },
    "LI": {
        "name": "Liechtenstein",
        "region": "EEA",
        "eu_member": False,
        "frameworks": ["gdpr", "eea-agreement"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "DSSC",
    },
    "NO": {
        "name": "Norway",
        "region": "EEA",
        "eu_member": False,
        "frameworks": ["gdpr", "eea-agreement", "norway-ai-regulation"],
        "enforcement_date": "2026-08-02",
        "competent_authority": "Datatilsynet",
    },
    "CH": {
        "name": "Switzerland",
        "region": "EFTA",
        "eu_member": False,
        "frameworks": ["fadp", "swiss-ai-strategy"],
        "enforcement_date": "2025-09-01",
        "competent_authority": "FDPIC",
    },
    # ── United Kingdom ─────────────────────────────────────────────────────────
    "GB": {
        "name": "United Kingdom",
        "region": "UK",
        "eu_member": False,
        "frameworks": ["uk-ai-regulation", "gdpr-uk", "dsa", "osb", "ai-white-paper"],
        "enforcement_date": "2026-12-01",
        "competent_authority": "ICO / Ofcom / DSIT",
        "notes": "Pro-innovation approach. Sector-specific rather than horizontal AI law.",
    },
    # ── United States (Federal + Key States) ───────────────────────────────────
    "US": {
        "name": "United States (Federal)",
        "region": "North America",
        "eu_member": False,
        "frameworks": ["nist-ai-rmf", "eo-14110", "algorithmic-accountability"],
        "enforcement_date": "varies-by-state",
        "competent_authority": "NIST / FTC / OMB",
        "notes": "No federal AI law. State patchwork emerging.",
    },
    "US-CA": {
        "name": "California",
        "region": "North America",
        "eu_member": False,
        "frameworks": ["ccpa", "cpra", "colorado-ai-act", "california-sb1047"],
        "enforcement_date": "2025-01-01",
        "competent_authority": "California AG / CPPA",
        "notes": "SB-1047: most restrictive AI safety bill in US history (vetoed Sept 2024, returning).",
    },
    "US-NY": {
        "name": "New York",
        "region": "North America",
        "eu_member": False,
        "frameworks": [ "ny-local-law-144", "ny-shield-act", "ny-bias-audit"],
        "enforcement_date": "2023-07-05",
        "competent_authority": "NYC DCWP / NY AG",
        "notes": "Local Law 144: mandatory bias audits for AI hiring tools.",
    },
    "US-CO": {
        "name": "Colorado",
        "region": "North America",
        "eu_member": False,
        "frameworks": ["colorado-ai-act", "ccpa-colorado"],
        "enforcement_date": "2026-02-01",
        "competent_authority": "Colorado AG",
        "notes": "First comprehensive AI consumer protection law in US.",
    },
    "US-IL": {
        "name": "Illinois",
        "region": "North America",
        "eu_member": False,
        "frameworks": ["illinois-bipa", "illinois-ai-video"],
        "enforcement_date": "2008-10-03",
        "competent_authority": "Illinois AG",
        "notes": "BIPA: biometric privacy law with private right of action. $650M+ in settlements.",
    },
    "US-VA": {
        "name": "Virginia",
        "region": "North America",
        "eu_member": False,
        "frameworks": ["vcdpa", "virginia-ai-ethics"],
        "enforcement_date": "2023-01-01",
        "competent_authority": "Virginia AG",
    },
    "US-TX": {
        "name": "Texas",
        "region": "North America",
        "eu_member": False,
        "frameworks": ["tdpsa", "texas-ai-executive-order"],
        "enforcement_date": "2024-07-01",
        "competent_authority": "Texas AG",
    },
    # ── APAC ───────────────────────────────────────────────────────────────────
    "SG": {
        "name": "Singapore",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["singapore-ai-verify", "pdpa", "mas-featan"],
        "enforcement_date": "voluntary",
        "competent_authority": "IMDA / PDPC",
        "notes": "AI Verify: voluntary framework rapidly becoming market standard.",
    },
    "JP": {
        "name": "Japan",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["japan-ai-guidelines", "apip", "meti-governance"],
        "enforcement_date": "voluntary",
        "competent_authority": "MIC / METI",
        "notes": "Principles-based approach. METI guidelines most influential.",
    },
    "KR": {
        "name": "South Korea",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["korea-ai-act", "k-pia", "kisa-guidelines"],
        "enforcement_date": "2025-01-01",
        "competent_authority": "KISA / PIPC",
        "notes": "Comprehensive AI Act passed 2024. Risk-based like EU.",
    },
    "CN": {
        "name": "China",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["china-algorithm-regulation", "deep synthesis", "gen-ai-measures", "dsl", "pips"],
        "enforcement_date": "2023-01-10",
        "competent_authority": "CAC / MIIT / SAMR",
        "notes": "Most aggressive algorithm regulation globally. Mandatory algorithm filing.",
    },
    "AU": {
        "name": "Australia",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["australia-ai-ethics", "privacy-act", "oaic-guidance", "australia-ai-safety"],
        "enforcement_date": "2026-09-01",
        "competent_authority": "OAIC / DISR",
        "notes": "Mandatory guardrails for high-risk AI under consultation.",
    },
    "IN": {
        "name": "India",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["india-dpdp-act", "india-ai-advisory", "meity-guidelines"],
        "enforcement_date": "2024-08-12",
        "competent_authority": "MeitY / DPDP Authority",
        "notes": "DPDP Act 2023. AI Advisory requires consent + labeling.",
    },
    "NZ": {
        "name": "New Zealand",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["nz-privacy-act", "nz-ai-framework"],
        "enforcement_date": "2023-06-01",
        "competent_authority": "OPC",
    },
    "TH": {
        "name": "Thailand",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["thailand-pdpa", "thailand-ai-ethics"],
        "enforcement_date": "2022-06-01",
        "competent_authority": "PDPC Thailand",
    },
    "MY": {
        "name": "Malaysia",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["malaysia-pdpa", "my-ai-governance"],
        "enforcement_date": "2025-01-01",
        "competent_authority": "MCMC / PDPA Commissioner",
    },
    "ID": {
        "name": "Indonesia",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["indonesia-pdp-law", "indonesia-ai-strategy"],
        "enforcement_date": "2024-10-17",
        "competent_authority": "KOMINFO",
    },
    "VN": {
        "name": "Vietnam",
        "region": "APAC",
        "eu_member": False,
        "frameworks": ["vietnam-cybersecurity-law", "vietnam-decree-13"],
        "enforcement_date": "2023-07-01",
        "competent_authority": "MIC / MPS",
    },
    # ── Middle East & Africa ───────────────────────────────────────────────────
    "AE": {
        "name": "United Arab Emirates",
        "region": "MENA",
        "eu_member": False,
        "frameworks": ["uae-ai-strategy", "dubai-ai-ethics", "adgm-dfsa"],
        "enforcement_date": "voluntary",
        "competent_authority": "OICT / DFSA",
        "notes": "Dubai AI Ethics Guidelines. ADGM sandbox for fintech AI.",
    },
    "IL": {
        "name": "Israel",
        "region": "MENA",
        "eu_member": False,
        "frameworks": ["israel-privacy-law", "israel-ai-ethics"],
        "enforcement_date": "voluntary",
        "competent_authority": "PPA",
        "notes": "Strong tech sector. Self-regulatory approach.",
    },
    "ZA": {
        "name": "South Africa",
        "region": "Africa",
        "eu_member": False,
        "frameworks": [ "popia", "south-africa-ai-plan"],
        "enforcement_date": "2021-07-01",
        "competent_authority": "IR",
    },
    "NG": {
        "name": "Nigeria",
        "region": "Africa",
        "eu_member": False,
        "frameworks": ["ndpr", "nigeria-ai-strategy"],
        "enforcement_date": "2019-01-25",
        "competent_authority": "NITDA",
    },
    "BR": {
        "name": "Brazil",
        "region": "LATAM",
        "eu_member": False,
        "frameworks": ["lgpd", "brazil-ai-bill"],
        "enforcement_date": "2020-09-18",
        "competent_authority": "ANPD",
        "notes": "AI Bill (PL 2338/2023): risk-based, EU-aligned.",
    },
    "CA": {
        "name": "Canada",
        "region": "North America",
        "eu_member": False,
        "frameworks": ["aida", "pipeda", "directive-on-automated-decision-making"],
        "enforcement_date": "2027-01-01",
        "competent_authority": "OPC / Treasury Board",
        "notes": "AIDA: Artificial Intelligence and Data Act. Federal.",
    },
    "MX": {
        "name": "Mexico",
        "region": "LATAM",
        "eu_member": False,
        "frameworks": ["mexico-data-law", "mexico-ai-strategy"],
        "enforcement_date": "2023-01-01",
        "competent_authority": "INAI",
    },
}

# ═══════════════════════════════════════════════════════════════════════════════
# FRAMEWORK METADATA
# ═══════════════════════════════════════════════════════════════════════════════

FRAMEWORKS: Dict[str, Dict[str, Any]] = {
    "eu-ai-act": {"name": "EU AI Act", "scope": "EU + EEA", "status": "enforced", "penalties_max": "EUR 35M or 7% global turnover"},
    "gdpr": {"name": "GDPR", "scope": "EU + EEA", "status": "enforced", "penalties_max": "EUR 20M or 4% global turnover"},
    "dora": {"name": "DORA", "scope": "EU Financial Sector", "status": "enforced", "penalties_max": "EUR 10M or 1% daily turnover"},
    "nis2": {"name": "NIS2", "scope": "EU Critical Infrastructure", "status": "enforced", "penalties_max": "EUR 10M or 2% global turnover"},
    "uk-ai-regulation": {"name": "UK AI Regulation", "scope": "UK", "status": "draft", "penalties_max": "TBD"},
    "nist-ai-rmf": {"name": "NIST AI RMF", "scope": "US (voluntary)", "status": "active", "penalties_max": "N/A"},
    "eo-14110": {"name": "EO 14110", "scope": "US Federal", "status": "active", "penalties_max": "N/A"},
    "singapore-ai-verify": {"name": "AI Verify", "scope": "Singapore", "status": "voluntary", "penalties_max": "N/A"},
    "japan-ai-guidelines": {"name": "Japan AI Governance Guidelines", "scope": "Japan", "status": "voluntary", "penalties_max": "N/A"},
    "korea-ai-act": {"name": "Korea AI Act", "scope": "South Korea", "status": "enforced", "penalties_max": "KRW 3% revenue"},
    "china-algorithm-regulation": {"name": "Algorithm Recommendation Regulations", "scope": "China", "status": "enforced", "penalties_max": "CNY 100M or 5% revenue"},
    "deep-synthesis": {"name": "Deep Synthesis Provisions", "scope": "China", "status": "enforced", "penalties_max": "CNY 100M or 5% revenue"},
    "gen-ai-measures": {"name": "Generative AI Measures", "scope": "China", "status": "enforced", "penalties_max": "CNY 100M or 5% revenue"},
    "australia-ai-safety": {"name": "Australia AI Safety Framework", "scope": "Australia", "status": "draft", "penalties_max": "TBD"},
    "india-dpdp-act": {"name": "DPDP Act 2023", "scope": "India", "status": "enforced", "penalties_max": "INR 250 Cr"},
    "uae-ai-strategy": {"name": "UAE AI Strategy 2031", "scope": "UAE", "status": "active", "penalties_max": "N/A"},
    "lgpd": {"name": "LGPD", "scope": "Brazil", "status": "enforced", "penalties_max": "BRL 50M or 2% revenue"},
    "aida": {"name": "AIDA", "scope": "Canada", "status": "draft", "penalties_max": "CAD 25M or 3% revenue"},
    "colorado-ai-act": {"name": "Colorado AI Act", "scope": "Colorado (US)", "status": "enforced", "penalties_max": "Statutory damages"},
    "california-sb1047": {"name": "SB-1047", "scope": "California (US)", "status": "draft", "penalties_max": "Civil penalties"},
    "illinois-bipa": {"name": "BIPA", "scope": "Illinois (US)", "status": "enforced", "penalties_max": "$1,000-$5,000 per violation"},
    "ny-local-law-144": {"name": "NYC Local Law 144", "scope": "New York City", "status": "enforced", "penalties_max": "$500-$1,500 per violation"},
    "ccpa": {"name": "CCPA", "scope": "California (US)", "status": "enforced", "penalties_max": "$7,500 per violation"},
    "cpra": {"name": "CPRA", "scope": "California (US)", "status": "enforced", "penalties_max": "$7,500 per violation"},
    "popia": {"name": "POPIA", "scope": "South Africa", "status": "enforced", "penalties_max": "ZAR 10M or imprisonment"},
    "ndpr": {"name": "NDPR", "scope": "Nigeria", "status": "enforced", "penalties_max": "NGN 10M or 2% revenue"},
    "fadp": {"name": "FADP", "scope": "Switzerland", "status": "enforced", "penalties_max": "CHF 250,000"},
    "gdpr-uk": {"name": "UK GDPR", "scope": "UK", "status": "enforced", "penalties_max": "GBP 17.5M or 4% revenue"},
    "dsa": {"name": "DSA", "scope": "EU + EEA", "status": "enforced", "penalties_max": "6% global turnover"},
    "osb": {"name": "Online Safety Bill", "scope": "UK", "status": "enforced", "penalties_max": "GBP 18M or 10% revenue"},
    "pdpa": {"name": "PDPA", "scope": "Singapore", "status": "enforced", "penalties_max": "SGD 1M or 10% revenue"},
    "apip": {"name": "APPI", "scope": "Japan", "status": "enforced", "penalties_max": "JPY 100M"},
    "k-pia": {"name": "K-PIA", "scope": "South Korea", "status": "enforced", "penalties_max": "KRW 50M"},
    "dsl": {"name": "Data Security Law", "scope": "China", "status": "enforced", "penalties_max": "CNY 10M"},
    "pips": {"name": "PIPS", "scope": "China", "status": "enforced", "penalties_max": "CNY 50M or 5% revenue"},
    "pipeda": {"name": "PIPEDA", "scope": "Canada", "status": "enforced", "penalties_max": "CAD 100,000"},
    "vcdpa": {"name": "VCDPA", "scope": "Virginia (US)", "status": "enforced", "penalties_max": "$7,500 per violation"},
    "tdpsa": {"name": "TDPSA", "scope": "Texas (US)", "status": "enforced", "penalties_max": "$7,500 per violation"},
    "ny-shield-act": {"name": "NY SHIELD Act", "scope": "New York", "status": "enforced", "penalties_max": "$20 per failed instance"},
    "thailand-pdpa": {"name": "PDPA Thailand", "scope": "Thailand", "status": "enforced", "penalties_max": "THB 5M"},
    "malaysia-pdpa": {"name": "PDPA Malaysia", "scope": "Malaysia", "status": "enforced", "penalties_max": "MYR 500K or imprisonment"},
    "indonesia-pdp-law": {"name": "PDP Law", "scope": "Indonesia", "status": "enforced", "penalties_max": "IDR 100B"},
    "vietnam-decree-13": {"name": "Decree 13/2023", "scope": "Vietnam", "status": "enforced", "penalties_max": "VND 50M"},
}

# ═══════════════════════════════════════════════════════════════════════════════
# COORDINATES FOR HEATMAP
# ═══════════════════════════════════════════════════════════════════════════════

_COORDS: Dict[str, tuple] = {
    "AT": (47.5, 14.5), "BE": (50.8, 4.5), "BG": (42.7, 25.5), "HR": (45.1, 15.2),
    "CY": (35.1, 33.4), "CZ": (49.8, 15.5), "DK": (56.0, 10.0), "EE": (58.6, 25.0),
    "FI": (61.9, 25.7), "FR": (46.0, 2.0), "DE": (51.0, 10.0), "GR": (39.0, 22.0),
    "HU": (47.2, 19.5), "IE": (53.4, -8.0), "IT": (41.9, 12.5), "LV": (56.9, 24.6),
    "LT": (55.2, 23.9), "LU": (49.6, 6.1), "MT": (35.9, 14.4), "NL": (52.1, 5.3),
    "PL": (51.9, 19.1), "PT": (39.4, -8.2), "RO": (45.9, 24.9), "SK": (48.7, 19.7),
    "SI": (46.1, 14.9), "ES": (40.4, -3.7), "SE": (60.1, 18.6),
    "IS": (64.9, -19.0), "LI": (47.1, 9.5), "NO": (60.5, 8.5), "CH": (46.8, 8.2),
    "GB": (54.0, -2.0), "US": (39.0, -98.0), "US-CA": (36.7, -119.4), "US-NY": (42.6, -75.5),
    "US-CO": (39.0, -105.5), "US-IL": (40.0, -89.0), "US-VA": (37.5, -78.0), "US-TX": (31.0, -100.0),
    "SG": (1.35, 103.8), "JP": (36.0, 138.0), "KR": (36.5, 127.9), "CN": (35.8, 104.1),
    "AU": (-25.0, 133.0), "IN": (20.6, 78.9), "NZ": (-40.9, 174.9), "TH": (15.9, 100.9),
    "MY": (4.2, 101.9), "ID": (-0.8, 113.9), "VN": (14.0, 108.0),
    "AE": (23.4, 53.8), "IL": (31.0, 34.8), "ZA": (-29.0, 24.0), "NG": (9.0, 8.0),
    "BR": (-14.2, -51.9), "CA": (56.0, -106.0), "MX": (23.6, -102.5),
}


def _get_lat(code: str) -> float:
    return _COORDS.get(code.upper(), (0.0, 0.0))[0]


def _get_lon(code: str) -> float:
    return _COORDS.get(code.upper(), (0.0, 0.0))[1]


# ═══════════════════════════════════════════════════════════════════════════════
# API ENDPOINTS
# ═══════════════════════════════════════════════════════════════════════════════

@router.get("/jurisdictions")
async def list_jurisdictions(region: str = None, eu_only: bool = False):
    """List all mapped jurisdictions with optional filtering."""
    results = []
    for code, data in REGULATORY_MAP.items():
        if region and data["region"] != region:
            continue
        if eu_only and not data.get("eu_member"):
            continue
        results.append({
            "code": code,
            "name": data["name"],
            "region": data["region"],
            "eu_member": data.get("eu_member", False),
            "framework_count": len(data["frameworks"]),
            "enforcement_date": data.get("enforcement_date"),
        })
    return {
        "total": len(results),
        "eu_member_states": sum(1 for r in results if r["eu_member"]),
        "jurisdictions": results,
    }


@router.get("/jurisdiction/{code}")
async def get_jurisdiction(code: str):
    """Get full regulatory profile for a jurisdiction."""
    data = REGULATORY_MAP.get(code.upper())
    if not data:
        return {"error": "Jurisdiction not mapped yet", "code": code}
    return {"jurisdiction": code.upper(), **data}


@router.get("/framework/{fw_id}")
async def get_framework(fw_id: str):
    """Get framework metadata."""
    data = FRAMEWORKS.get(fw_id.lower().replace("-", "-"))
    if not data:
        # Try normalized lookup
        normalized = fw_id.lower().replace("_", "-")
        data = FRAMEWORKS.get(normalized)
    if not data:
        return {"error": "Framework not catalogued yet", "id": fw_id}
    return {"framework_id": fw_id.lower(), **data}


@router.get("/deploy/{from_code}/to/{to_code}")
async def cross_border_advisory(from_code: str, to_code: str):
    """Advisory for deploying an AI system from one jurisdiction to another."""
    src = REGULATORY_MAP.get(from_code.upper())
    dst = REGULATORY_MAP.get(to_code.upper())
    if not src or not dst:
        return {"error": "Unknown jurisdiction(s)", "from": from_code, "to": to_code}

    src_fw = set(src["frameworks"])
    dst_fw = set(dst["frameworks"])
    new_requirements = dst_fw - src_fw
    shared = src_fw & dst_fw

    # Risk escalation logic
    risk_change = "neutral"
    if dst.get("eu_member") and not src.get("eu_member"):
        risk_change = "elevated"
    elif src.get("eu_member") and not dst.get("eu_member"):
        risk_change = "reduced"

    return {
        "deployment": f"{src['name']} → {dst['name']}",
        "shared_frameworks": list(shared),
        "new_requirements": list(new_requirements),
        "new_framework_count": len(new_requirements),
        "risk_change": risk_change,
        "additional_compliance_cost_estimate": f"${len(new_requirements) * 15000}-{len(new_requirements) * 45000}",
        "advisory": f"Deploying to {dst['name']} requires compliance with {len(new_requirements)} additional framework(s)." if new_requirements else f"No new frameworks — {dst['name']} shares all requirements with {src['name']}.",
        "competent_authority": dst.get("competent_authority"),
        "enforcement_date": dst.get("enforcement_date"),
        "notes": dst.get("notes"),
    }


@router.get("/heatmap")
async def compliance_heatmap(region: str = None):
    """Generate compliance heat map data for visualization."""
    data = []
    for code, jd in REGULATORY_MAP.items():
        if region and jd["region"] != region:
            continue
        lat, lon = _COORDS.get(code, (0.0, 0.0))
        data.append({
            "code": code,
            "name": jd["name"],
            "lat": lat,
            "lon": lon,
            "intensity": len(jd["frameworks"]),
            "frameworks": jd["frameworks"],
            "eu_member": jd.get("eu_member", False),
        })
    return {
        "type": "heatmap",
        "metric": "framework_density",
        "total_jurisdictions": len(data),
        "data": data,
    }


@router.get("/stats")
async def compliance_stats():
    """Aggregate compliance statistics."""
    total = len(REGULATORY_MAP)
    eu_count = sum(1 for j in REGULATORY_MAP.values() if j.get("eu_member"))
    frameworks_all = set()
    for j in REGULATORY_MAP.values():
        frameworks_all.update(j["frameworks"])
    region_counts = {}
    for j in REGULATORY_MAP.values():
        region_counts[j["region"]] = region_counts.get(j["region"], 0) + 1

    return {
        "total_jurisdictions": total,
        "eu_member_states": eu_count,
        "unique_frameworks": len(frameworks_all),
        "framework_list": sorted(list(frameworks_all)),
        "region_breakdown": region_counts,
        "coverage_phase": "Phase 2 — 50+ Jurisdictions",
    }
