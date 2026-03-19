# MEOK — Compute Credits Applications
# Target: $502,500 total across 5 providers
# Priority: Google Cloud FIRST (48h approval), then the rest

---

## 1. Google Cloud for Startups — $200,000
**Apply at:** https://cloud.google.com/startup
**Approval time:** 48 hours (fastest)
**Status:** NOT YET APPLIED

### Application fields (fill these in at the form)

**Company name:** MEOK AI LTD

**Website:** https://ui-puce-chi.vercel.app (live now) | try.meok.ai (pending DNS A record 76.76.21.21 in Namecheap)

**Description (what does your product do):**
```
MEOK is a care-aligned AI companion with persistent memory, overnight learning cycles,
and measurable trust metrics. It differentiates from ChatGPT/Claude on three dimensions:
(1) persistent cross-session memory and relationship building,
(2) a morning briefing system that shows users what the AI worked on overnight,
(3) a trust formation funnel that measures cognitive trust and emotional trust separately.

Technical foundation: 6,660 agents using Byzantine fault-tolerant consensus,
AGPL-3.0 open source, self-hostable. Free tier is genuine (not crippled).
Pro at £12/month. Breakeven at 320 users.
```

**Stage:** Pre-revenue / Seed

**Use of credits:**
```
Google Cloud credits will fund:
- Cloud Run / GKE for the MEOK API server (Python FastAPI)
- Cloud SQL (PostgreSQL) for persistent memory storage
- Cloud Memorystore (Redis) for session management
- Vertex AI (optional) for model fine-tuning
- Estimated monthly burn at launch: $3,000-5,000/month
- $200K covers 40-66 months of compute at launch scale
```

**Funding status:** Bootstrapped, no VC. Using $502K in cloud credits to operate VC-free until £20K MRR.

**Team size:** 1 (founder) + Claude Code as co-builder

**Industry:** AI / Consumer Tech / Mental Health / Productivity

**Key differentiators (for the form's "why should we support you" field):**
```
1. Care-aligned business model: we explicitly prohibit dark patterns (DarkPatternGuard
   screens all upgrade prompts). Free tier delivers genuine value — not a crippled trial.
2. Open source (AGPL-3.0): users can self-host, audit the code, export their data.
3. Safety architecture: Maternal Covenant layer hard-blocks crisis content before any LLM call.
   This is deterministic, not probabilistic — it cannot be bypassed.
4. Academic validation-ready: architecture follows published research (BFT consensus,
   conformal prediction, sleep replay consolidation).
5. VC-free intent: seeking credits to build sustainable business, not to raise at 10x
   before delivering user value.
```

### To apply
1. Go to: https://cloud.google.com/startup
2. Click "Apply now"
3. Fill company info
4. Describe: "Care-aligned AI companion with 6,660 agents, BFT consensus, overnight learning"
5. Expected usage: Cloud Run + Cloud SQL + Memorystore
6. Submit — expect response in 48h

---

## 2. AWS Activate — $100,000
**Apply at:** https://aws.amazon.com/activate/
**Approval time:** 2-3 days
**Status:** NOT YET APPLIED

### Notes
- Requires Activate Portal account (free to create)
- "Founders" tier: $1,000 (no VC needed)
- "Portfolio" tier: $100,000 (requires VC/accelerator backing)
- **For Nick:** Apply at Founders level first ($1K instant), then get into an accelerator (Entrepreneur First, Techstars, YC) for Portfolio level ($100K)

### Workaround for Portfolio without VC:
- **Techstars** has rolling applications — 3-month program, $120K investment + $100K AWS credits
- **Entrepreneur First** UK cohort — £80K + network + AWS credits
- **Apply to Techstars NOW** alongside AWS Founders tier

**For Founders application:**
```
Company: MEOK AI LTD
Stage: Pre-seed
Use: EC2 (GPU inference), RDS (PostgreSQL), ElastiCache (Redis)
Description: Care-aligned AI companion with persistent memory and overnight learning cycles.
```

---

## 3. Microsoft for Startups — $150,000
**Apply at:** https://www.microsoft.com/en-us/startups
**Approval time:** 5-7 days
**Status:** NOT YET APPLIED
**Requirement:** Free to apply, no VC required for up to $150K

### Application notes
```
Company: MEOK AI LTD
Website: meok.ai
Product: AI companion (care-aligned, persistent memory, morning briefing)
Azure use: Azure Container Apps (FastAPI), Azure Database for PostgreSQL,
           Azure Cache for Redis, Azure OpenAI (optional fine-tuning)
```

**Strong match signals for Microsoft:**
- Open source (AGPL-3.0) — Microsoft loves OSS founders
- Mental health adjacency — Microsoft has Accessibility + inclusion programs
- Not a direct Azure OpenAI competitor (we USE LLMs, we don't build them)
- UK startup — Microsoft UK Startup Studio in London actively recruiting

**Apply directly:** https://startups.microsoft.com/en-us/apply
Alternative: Contact Microsoft Reactor London — they run workshops and fast-track referrals

---

## 4. NVIDIA Inception — $50,000
**Apply at:** https://www.nvidia.com/en-us/startups/
**Approval time:** 1 week
**Status:** NOT YET APPLIED

### Application notes
```
Company: MEOK AI LTD
GPU use: RTX 4090 / A100 for:
  - Neural network training (care_validation, z_self metacognitive network)
  - Batch inference (6,660 agent council deliberations)
  - Dream cycle processing (NREM/REM replay consolidation)
Architecture: 6,660 agents using Byzantine fault-tolerant consensus.
              7th metacognitive neural network (z_self) watches 6 domain models.
              Sleep Replay Consolidation (Tadros et al. 2022) for memory consolidation.
```

**Key selling point:** NVIDIA Inception loves GPU-heavy architectures. The "6,660 agents + BFT consensus + neural metacognition" framing is exactly what they want to fund. Use technical language here.

---

## 5. Vast.ai Credits — $2,500
**Status:** ACTIVE — already using Vast.ai, $2,500 in credits from previous application
**Current cost:** ~$0.015-0.09/hour per GPU instance
**Best for:** Development/testing, low-cost inference during launch phase

---

## Application priority order

```
TODAY → Google Cloud (48h turnaround, $200K, no requirements)
TODAY → Microsoft for Startups (5-7d, $150K, no requirements)
TODAY → NVIDIA Inception (1wk, $50K, GPU architecture)
WEEK 2 → AWS Founders ($1K instant)
MONTH 2 → AWS Portfolio ($100K — after accelerator acceptance)
```

**Total available without VC or accelerator:**
- Google: $200,000
- Microsoft: $150,000
- NVIDIA: $50,000
- Vast.ai: $2,500 (active)
- **Immediate total: $402,500**

---

## Supplementary: UK Grants (non-dilutive)

### Innovate UK Smart Grant
- Amount: £25K - £500K
- Eligibility: UK-registered company (✓ MEOK AI LTD)
- Focus: AI + digital health + accessibility
- Apply: https://apply-for-innovation-funding.service.gov.uk
- Timeline: 3-month review

### Wellcome Trust Digital Health
- Amount: £50K - £500K
- Eligibility: Health impact, UK or international
- MEOK angle: mental health companion, care ethics research
- Apply: https://wellcome.org/grant-funding/schemes/digital-technologies-initiative
- Timeline: Rolling applications

### UKRI AI for Science & Society
- Amount: £50K - £2M
- MEOK angle: civilizational knowledge integration, 47-tradition corpus, care ethics in AI
- Apply: https://www.ukri.org/opportunity/

---

## Checklist before applying

- [x] meok.ai domain registered (MEOK AI LTD)
- [x] MEOK AI LTD company registered
- [x] GitHub repo (csoai/meok-sovereign or nicktempleman/meok)
- [ ] Pitch deck or one-pager (needed for some applications)
- [ ] Demo video (60s screen record — Morning Briefing → QuickChat → Trust Funnel)
- [ ] Live URL (try.meok.ai) — helps with approval rates

---
Generated: 2026-03-18 | Phase 4.15 | MEOK AI LTD
