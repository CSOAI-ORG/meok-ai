# MEOK.AI Legal & Compliance Action Tracker
**Source:** Legal & Business Infrastructure Implementation Plan (ingested 2026-03-19)
**Deadline:** March 31, 2026 (11 days)
**Owner:** Nick / MEOK AI LTD

---

## 🔴 CRITICAL — Must complete before March 31

### 1. ICO Data Controller Registration
- [ ] Register at https://ico.org.uk/registration/
- [ ] Expected tier: **Tier 2 (£60/year)** — up to 10 staff, up to £632K turnover
- [ ] Processing activities to declare: AI companion, emotional state processing, Family Guardian child safety
- [ ] Special categories: potentially Article 9 (emotional inferences) — declare
- [ ] DPO: not required yet (under thresholds), but designate privacy contact (privacy@meok.ai)
- [ ] **Note:** Criminal offense to process personal data without registration

### 2. Privacy Policy — Publish by March 31
- [ ] Generate baseline via Termly (£10-50/month) or TermsFeed
- [ ] AI-specific customization layer (Claude/Anthropic + OpenAI subprocessor clauses)
- [ ] Children's section (COPPA + GDPR-K) — separate, age-appropriate language
- [ ] Retention tiers: ephemeral | 28-day | opt-in long-term
- [ ] Data sovereignty architecture disclosure (AES-256, user-held keys)
- [ ] Breach notification procedures (72h to ICO)
- [ ] UK GDPR + GDPR + CCPA/CPRA modular structure
- [ ] File: ui/website/legal/privacy.html ✅ (built tonight)

### 3. Terms of Service — Publish by March 31
- [ ] AI disclosure: "You are interacting with an AI" — prominent (EU AI Act)
- [ ] No professional advice: medical/mental health/legal/financial — context-triggered
- [ ] Subscription: 14-day refund right (EU CRD), easy cancellation
- [ ] Beta disclaimer
- [ ] Open source section: AGPL-3.0 core, MIT functional
- [ ] Governing law: England & Wales
- [ ] File: ui/website/legal/terms.html ✅ (built tonight)

### 4. Cookie Policy — Publish by March 31
- [ ] Essential / Functional / Analytics / No marketing cookies
- [ ] Consent management (no third-party ad tracking)
- [ ] File: ui/website/legal/cookies.html ✅ (built tonight)

---

## 🟠 HIGH — Complete within 30 days

### 5. Trademark Priority Filing — UK IPO
- [ ] Mark: **MEOK** + **MEOK.AI**
- [ ] Classes: 42 (computer software/AI services), 9 (downloadable software), 45 (personal companion services)
- [ ] Cost: £170/mark/class + £50 each additional class
- [ ] URL: https://www.gov.uk/apply-for-a-trademark
- [ ] Sets 6-month Paris Convention priority window for EUIPO/USPTO

### 6. SEIS/EIS Advance Assurance from HMRC
- [ ] Apply before any fundraising conversations
- [ ] Processing: 4-6 weeks — apply NOW
- [ ] Requirements: <25 employees, <£200K gross assets, <2 years trading, qualifying trade
- [ ] Form: EIS/SEIS1 via HMRC
- [ ] Benefit: investor gets 50% income tax relief (SEIS) / 30% (EIS)

### 7. EU Article 27 Representative
- [ ] Required if offering services to EU data subjects without EU establishment
- [ ] Service: DataRep (https://datarep.com) ~€2,000-5,000/year
- [ ] Appoint before EU marketing begins

### 8. Data Protection Impact Assessment (DPIA) — Family Guardian
- [ ] Required before Family Guardian goes live
- [ ] Topics: content analysis for threat indicators, parental notification, law enforcement escalation risk
- [ ] Must document: necessity/proportionality, risk assessment, mitigation measures
- [ ] Internal review + optional ICO consultation

---

## 🟡 MEDIUM — 60-90 days

### 9. Trademark — EUIPO
- [ ] File within 6 months of UK priority date (Paris Convention)
- [ ] Cost: €850/mark/1 class + €50 additional classes
- [ ] Covers all 27 EU member states

### 10. Trademark — USPTO (Intent-to-Use)
- [ ] File intent-to-use (don't need to be in market yet)
- [ ] Cost: $250-350/class
- [ ] Submit specimen when live in US market

### 11. Delaware C-Corp Formation
- [ ] Pre-position before Series A / first US investor
- [ ] Cost: ~$500-2,000 via Stripe Atlas or Clerky
- [ ] IP holding structure: UK Ltd direct ownership now → holding company when IP portfolio grows

### 12. VAT Registration
- [ ] UK: register when taxable turnover approaches £85K (or voluntary earlier)
- [ ] EU OSS: register when EU digital services revenue exceeds €10K
- [ ] Set up Stripe Tax for automatic VAT calculation

---

## 📋 ONGOING

### 13. Annual Accounts & Confirmation Statement
- [ ] Companies House annual confirmation: £13-40/year
- [ ] Annual accounts: 9 months after accounting reference date

### 14. GDPR Records of Processing Activities (ROPA)
- [ ] Document all processing activities, legal basis, retention periods, third parties
- [ ] Review annually or on significant changes

### 15. Employee/Contractor IP Assignment
- [ ] All contractors: work-for-hire clause + prior invention disclosure
- [ ] Employment contracts: explicit IP assignment + invention disclosure

### 16. Open Source CLA
- [ ] Contributor License Agreement for external code contributions
- [ ] License compatibility check for all dependencies

---

## 📁 Key Documents (built tonight)
| Document | Path | Status |
|---|---|---|
| Privacy Policy | ui/website/legal/privacy.html | ✅ Built |
| Terms of Service | ui/website/legal/terms.html | ✅ Built |
| Cookie Policy | ui/website/legal/cookies.html | ✅ Built |
| Legal Hub | ui/website/legal/index.html | ✅ Built |
| ICO Checklist | docs/legal_compliance_tracker.md | ✅ This file |
| Product Catalog | docs/product_catalog.json | ✅ Built |

---

## 🔑 Key Contacts & Resources
- **ICO:** https://ico.org.uk | 0303 123 1113
- **Companies House:** https://companieshouse.gov.uk
- **UK IPO (Trademarks):** https://www.gov.uk/apply-for-a-trademark
- **EUIPO:** https://euipo.europa.eu
- **USPTO:** https://www.uspto.gov
- **HMRC SEIS/EIS:** https://www.gov.uk/guidance/venture-capital-schemes-apply-for-the-enterprise-investment-scheme
- **Termly (privacy policy generator):** https://termly.io
- **DataRep (EU Article 27 rep):** https://datarep.com
- **DPO email:** privacy@meok.ai
- **ICO Registration number:** PENDING

---

## ⚠️ EU AI Act Compliance (Already Required)
The EU AI Act entered into force August 2024. Transparency obligations for "limited risk" AI systems (chatbots) applied 12 months later = **August 2025 — already past**.

**Immediate requirements:**
- [ ] Persistent "You are interacting with an AI" disclosure throughout UI
- [ ] Clear explanation of AI capabilities and limitations
- [ ] Human escalation pathway for safety-critical interactions (Family Guardian)
- [ ] MEOK.AI is classified: **Limited risk** (companion AI/chatbot)
- [ ] Family Guardian threat assessment: **Potential high risk** — evaluate for conformity assessment

---

*Last updated: 2026-03-19 | Next review: 2026-03-31 (launch)*
