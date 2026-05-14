---
title: "How we shipped 38 governance MCPs in 3 weeks (and why we did it solo)"
date: 2026-05-13
author: Nicholas Templeman
description: "Behind the scenes of MEOK AI Labs' governance MCP suite — what we built, why it's MIT-licensed, and what we learned about EU AI Act tooling along the way."
canonical: https://meok.ai/blog/38-governance-mcps-in-3-weeks
category: governance
tags: [eu-ai-act, dora, nis2, cra, gdpr, mcp, governance]
---

Three weeks ago, MEOK AI Labs had 15 governance MCP servers on PyPI covering EU AI Act, DORA, NIS2, CRA, and basic agent-to-agent infrastructure.

Today we have 38.

This post is the honest behind-the-scenes of how that happened, what we learned, and what's still broken.

## Why governance MCPs at all

Every conversation with a compliance team last quarter rhymed:

> "We have policies on paper. We have spreadsheets for evidence. When the auditor asks how I prove this Article 26(9) FRIA wasn't written last week, my answer is 'trust me' — and they don't."

That's the problem MEOK solves. Not "AI-powered audit tools" (those exist), not "compliance dashboards" (those exist) — but **runtime tooling for the AI agents now drafting most compliance documents anyway**. With cryptographic proof.

MCP is the right primitive for this because:
1. The AI agent doing the drafting can call the compliance MCP directly
2. Each tool emits an HMAC-signed artifact with a public verify URL
3. Free tier = no friction; paid tier = unlimited + signed certs
4. Distribution is `pip install <name>` or `npx meok-setup`

## What we shipped

### The flagship: `eu-ai-act-compliance-mcp` v1.4.0

- **410 verbatim articles** across 6 regulations (EU AI Act, DORA, NIS2, CRA, CSRD, GDPR) in SQLite FTS5
- Daily sync from EUR-Lex Cellar API via GitHub Actions
- `search_regulation(query, regulation)` returns 64-token snippets with relevance scores
- Plus the original 8 tools: quick_scan, deadline_check, classify_ai_risk, check_compliance, generate_annex_iv_docs, assess_penalties, multi_jurisdiction_map, neural insights

### 17 more governance MCPs

DORA, NIS2, CRA, CSRD, GDPR, UK AI Bill, bias detection, AI-BOM, AI incident reporting, DORA×NIS2 crosswalk, watermarking + C2PA 2.1, ISO 42001 — every major AI regime has a dedicated MCP.

### 6 A2A MCPs (agent-to-agent governance)

policy enforcement, audit logger, rate limiter, handoff certified, prompt injection firewall, data residency. These are the boring infrastructure that lets enterprises actually deploy multi-agent systems with governance.

### 7 UK trade vertical MCPs

haulage compliance (Operator Licence, tachograph, drivers' hours), skip hire (Waste Carrier + EWC), construction (ISO 19650), NRSWA, CHAS Elite, crane hire (CPCS + BS 7121), concrete pumping (CPA + BS EN 12001).

The thesis: every industry needs its own governance moat. Horizontal compliance tools commoditize fast. Vertical ones stick.

### 6 cybersecurity MCPs

CISA KEV catalog, SBOM (CycloneDX + SPDX), MITRE ATT&CK + MITRE ATLAS (adversarial AI), SLSA supply chain levels, Sigstore cosign verification.

Open data + open standards wrapped in MCP. Every one of these has an active public feed nobody else has packaged into MCP yet.

### 8 industry vertical MCPs

MiCA crypto, MDR/IVDR medical devices, FDA AI/ML SaMD, COPPA + FERPA children's privacy, Basel III + SR 11-7 banking AI, MiFID II algo trading, AML/6AMLD, FSA food safety.

### Plus: `meok-setup` CLI

One command:
```bash
npx meok-setup --pack governance
```

Installs the pack and writes Claude Desktop / Cursor / Windsurf configs.

## What we learned

### 1. Verbatim text wins over LLM-summarized text

We started with LLM-summarized regulation references. Customers immediately asked "is this the actual text?" Then auditors pushed back: "you can't cite a summary." Now we ship verbatim, FTS5-indexed text from EUR-Lex's canonical SPARQL endpoint. Every quote is auditor-defensible.

### 2. HMAC > "trust us"

We tried two approaches to attestation:
- (a) "Email us your audit and we'll sign it" — slow, bottleneck on us
- (b) HMAC-signed certs with a public verify URL — anyone verifies independently

(b) is the right answer. The customer's auditor never has to contact MEOK. Trust through math.

### 3. Free tier is the moat, paid tier is the revenue

10 calls/day is enough for a developer to try every tool. 100 calls/day is enough for a small team. 1000 calls/day is unlimited in practice. The free tier gets MEOK installed; the Pro tier emits signed certs your auditor verifies — which is a different product entirely.

### 4. Vertical > horizontal

The big realization halfway through: every utility MCP (csv-tools, json-formatter, regex-helper) is undifferentiated. But `haulage-uk-compliance-mcp` for a specific UK Operator Licence workflow has 5 buyers per 1,000 UK haulage operators. Vertical compliance is where the moat lives.

### 5. One CLI changes everything

We had 38 MCPs on PyPI for two weeks before realizing nobody was installing them at scale because the setup was 38 `pip install` commands + manual config editing. We shipped `npx meok-setup` and downloads jumped overnight.

## What's still broken

Honest list:
- **9 MCPs still rate-limited on PyPI publish** (the smart_publish.sh in our scripts dir handles retry)
- **haulage.app DNS still pending** (deployed to Vercel, needs Namecheap A-record swap)
- **No customer testimonials yet** (working on first paid customers)
- **Cloudflare Worker hosted endpoint** still not deployed — planned this week
- **Notified Body partnership** in conversation with 5 NBs, no signed deals yet

## What's next

- Cloudflare Worker remote MCP endpoint at `mcp.councilof.ai`
- Slack ChatOps: `@meok run audit` in your support channel
- White-label Trust Centers (Enterprise tier)
- 10 more industry MCPs (FedRAMP, ISO 27701, CIS Controls, Solvency II, IDD, REMIT, EECC, IRMA, IMO, EASA Part-CAT)
- Open-sourced compliance attestation protocol so others can build on top

## Try it

```bash
# Install the governance pack
npx meok-setup --pack governance

# Or one package at a time
pip install eu-ai-act-compliance-mcp

# Search the actual EU AI Act
# (via Claude or your MCP client)
> Use search_regulation to find Article 50 text on watermarking
```

Free tier: 10 calls/day, no key. Pro: £79/mo. Enterprise: £1,499/mo.

**Catalogue:** [councilof.ai/catalogue](https://councilof.ai/catalogue)
**Code:** github.com/meok-ai-labs
**Email:** hello@meok.ai

— Nick
Founder, MEOK AI Labs
London, May 2026
