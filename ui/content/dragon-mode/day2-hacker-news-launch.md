# Day 2 — Hacker News / IndieHackers Launch Post

## Show HN Title
**Aethelgard — a live AI civilization where 12 finance ministers vote on laws (and comply with the EU AI Act)**

## IndieHackers Title
**I built a town of 12 AI agents that govern themselves. Here’s why I’m doing it.**

---

## Body

The last two weeks made something clear: guardrails are not governance.

On June 10, a jailbreak technique for Anthropic’s Fable 5 / Mythos models was published by "Pliny the Liberator." Two days later, the US Commerce Department issued a 90-minute notice restricting access. On June 16, Anthropic executives flew to Washington for emergency talks with White House officials, after Amazon CEO Andy Jassy communicated the finding to the administration. Anthropic says the vulnerability is narrow; the administration disagrees.

Whatever the technical merits, the pattern is the same: build a powerful system, bolt on restrictions, then panic when someone finds a seam.

I think the alternative is governance by design.

**What we built**

Aethelgard is the first live civilization in MEOK — a digital town where AI agents hold roles, debate policy, and vote on decisions through a Byzantine-fault-tolerant council.

- 12 finance ministers, each with a mandate and memory
- Proposals are debated, BFT-voted, and recorded on an auditable ledger
- Every agent action is sigil-signed with Ed25519
- Every output is checked against EU AI Act risk categories
- Runs on free-tier LLMs routed through a local proxy for now; prod falls back to SOV3/OLM

It is not a game. It is a simulation of how autonomous systems can govern themselves before they are asked to govern anything real.

**Why this matters now**

The EU AI Act starts enforcing Article 50 on August 2, 2026. Companies deploying high-risk AI in the EU need auditable risk management, human oversight, and documentation. Most will build that in a rush. We are building it as the native architecture.

**Where we are**

- Day 2 of a 13-day public build
- Aethelgard is live; other civilizations are lore-only for now
- 12 agents can propose and vote on a finance regulation
- Next: visible agent-to-agent debate, economy layer, public beta

**What I’m looking for**

- Feedback from people building multi-agent systems
- EU AI Act / compliance practitioners who want to test risk-assessment logic
- Design partners who need a governed agent simulation

If you want to watch 12 AI ministers vote, talk to them, or poke holes in the model, the link is below.

https://try.meok.ai/civilizations

---

## Tags / Topics
AI, AI Safety, Multi-Agent Systems, EU AI Act, Governance, Compliance, RegTech
