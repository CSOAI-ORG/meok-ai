# KIMI DEEP RESEARCH BRIEF — Autonomous AI Business Operating System
## For MEOK AI LTD / CSGA Sovereign Platform
## Date: 2026-03-20

---

## MISSION

Research and compile everything needed to build a fully autonomous AI business operating system (AI BOS) that can run MEOK AI LTD with minimal human input. This system lives inside the Sovereign terminal as a dedicated tab — a true AI business partner that handles all operational departments, self-trains, and reports to a human CEO (Nick) who interacts with it through SOV (Sovereign AI OS).

The goal: one human (CEO) + one AI OS = a complete, growing, self-maintaining business.

---

## RESEARCH DOMAINS — Cover all of these exhaustively

---

### 1. AGENT ORCHESTRATION FRAMEWORKS

Research all major multi-agent orchestration frameworks. For each, provide:
- Architecture overview
- How agents communicate (graph, sequential, hierarchical, swarm)
- Tool-use capabilities
- Memory / state management
- Self-improvement / feedback mechanisms
- Open source vs API-dependent
- Best fit for our use case

**Frameworks to cover:**
- CrewAI (hierarchical crews with role-based agents)
- AutoGen / AG2 (Microsoft — conversational multi-agent)
- LangGraph (stateful graph-based, best for complex workflows)
- Agency Swarm (OpenAI-compatible, role specialisation)
- OpenAI Swarm (lightweight handoffs)
- Magentic-One (Microsoft — generalist multi-agent)
- BabyAGI / AIGA patterns (task decomposition + execution loops)
- Vertex AI Agent Builder (Google)
- Amazon Bedrock Agents
- Claude Agent SDK (Anthropic — what we're already using)

**CRITICAL:** Find the best framework for a **hierarchical CEO → department heads → workers** structure where:
- The CEO agent has full context of business state
- Department heads (Content, Sales, PR, Finance, Support) each run their own sub-crews
- All agents talk to SOV via MCP tools
- All agents have access to shared memory (PostgreSQL + pgvector)
- Agents improve themselves based on outcome feedback

---

### 2. AI VIDEO CONTENT CREATION (Neuro 6 / OHM Labs style)

OHM Labs on TikTok (@ohm_labs) creates "Neuro 6" — a series of AI-generated video ads that look like real people. Research:

**Video generation:**
- Runway Gen-4 / Gen-4 Turbo (best quality 2026)
- Kling 1.6 / 2.0 (Chinese, high realism)
- Pika 2.1
- Sora (OpenAI, available via API?)
- HeyGen (talking head avatars — can create AI "people" that look real)
- Synthesia (enterprise talking avatars)
- D-ID (real-time talking avatars)
- Luma Dream Machine
- Stable Video Diffusion

**For "Neuro 6" style ads (AI people that look photorealistic):**
- What's the exact pipeline OHM Labs / Neuro 6 uses?
- Find similar creators: @neuro6, @ohm_labs, @aiagentshow, @mattverse
- What model creates the photorealistic AI human faces?
- How is voiceover layered in?
- What editing tool do they use for final cuts?

**AI video pipeline for automated ad creation:**
- Script generation → voiceover → video generation → editing → upload
- Which tools have APIs that can be chained?
- Best open-source alternatives for self-hosting

**Find:** Any open-source "automated video ad pipeline" repos on GitHub

---

### 3. AI VOICE SALES CALLING

We need an AI agent that can call companies, pitch MEOK/SOV services, handle objections, and book demos. Research:

**AI calling platforms:**
- Vapi.ai (most popular, LLM-powered real-time voice calling)
- Bland.ai (enterprise AI calling)
- Retell AI (low-latency conversational AI phone agent)
- Air.ai (autonomous AI sales agent — research their architecture)
- ElevenLabs Conversational AI (most realistic voice)
- Thoughtly (AI call centre)
- Synthflow AI

For each: pricing, API access, latency, voice quality, integration options, CRM sync

**Sales workflow automation:**
- Apollo.io API (lead sourcing — find decision makers by company/role)
- Clay (data enrichment + AI-powered outreach sequences)
- Hunter.io API (email finding)
- Instantly.ai / Smartlead (email sequence automation)
- How to combine: Apollo (leads) → Clay (enrich) → Vapi (call) → CRM (log)

**Website form outreach (automated):**
- Tools that automatically fill and submit contact forms on company websites
- Selenium / Playwright-based form submission agents
- Any SaaS tools for this (FormReach, etc.)
- Legal considerations for automated form submission in UK/EU

**CRM Integration:**
- HubSpot API (free tier — pipeline, contacts, deals)
- Pipedrive API
- How agents update CRM after every call/email

---

### 4. AI PR / PRESS AUTOMATION

We need daily automated PR: press releases written by AI, distributed to journalists, with ongoing relationship management.

**Press release distribution:**
- PR Newswire API
- Business Wire API
- EIN Presswire (cheapest automated distribution)
- Send2Press
- PRWeb
- Which have APIs? Which allow automated daily distribution?

**AI journalist/media relationship management:**
- Muck Rack (journalist database + relationship tracking) — API?
- Cision API (industry standard)
- ResponseSource (UK-focused) — API?
- How to build a journalist CRM that tracks relationships, coverage, preferences

**PR writing automation:**
- GPT-4 / Claude for press release drafting
- Templates + company data → automated daily press releases
- How to personalise for each journalist/outlet

**Partner API/MCP relationship management:**
- Automated check-ins with API partners (Anthropic, Ahrefs, Stripe, Clerk)
- Monitoring for new partnership opportunities in our space
- Automated outreach to potential MCP integrators

---

### 5. AI CUSTOMER SUPPORT

Fully automated customer support that handles MEOK users 24/7.

**Platforms:**
- Intercom (AI-first support — Fin AI agent)
- Zendesk AI (Intelligent triage + resolution)
- Freshdesk Freddy AI
- Sierra AI (YC-backed, enterprise conversational AI for support)
- Forethought AI
- Plain (developer-focused support, API-first)

**For MEOK specifically:**
- Users need support for: billing (Stripe), character issues, MCP connectivity, account
- AI should escalate to Nick only for edge cases
- Should integrate with Clerk (user auth) and Stripe (billing)

**Self-learning support:**
- How to train support AI on past tickets
- Feedback loops: when AI gets it wrong, it learns
- Suggested architecture for a self-improving support agent

---

### 6. AI ACCOUNTING / FINANCIAL AUTOMATION

Automated bookkeeping, invoicing, expense tracking, and financial reporting.

**Platforms:**
- Puzzle.io (AI-native accounting for startups)
- Mercury (banking API — automated financial ops)
- Brex (corporate cards + automated expense categorisation)
- Xero API (UK-standard accounting)
- QuickBooks API
- Ramp (expense management with AI)

**Automation tasks:**
- Auto-reconcile Stripe payments to accounting
- Auto-generate monthly P&L, cash flow statements
- VAT returns (UK — Making Tax Digital API)
- Payroll automation (Deel for contractors, if applicable)
- Automated invoice generation for B2B clients

**Find:** Open-source accounting automation tools / AI bookkeeping agents on GitHub

---

### 7. AEO / SEO MONITORING AND OPTIMISATION

AEO = AI Engine Optimisation (getting cited by ChatGPT, Perplexity, Claude, Gemini)
SEO = traditional search engine optimisation

**AEO tools (2026, cutting edge):**
- Profound (AEO analytics — tracks AI mentions)
- Otterly.ai (AI search visibility)
- Peec.ai
- Ahrefs Brand Radar (tracks AI citations — already have this as MCP tool)
- How to optimise content to be cited by AI systems
- What makes content "AI-citation-worthy"

**SEO monitoring:**
- Ahrefs API (already integrated)
- Google Search Console API
- Semrush API
- Screaming Frog for technical SEO

**Automated content strategy:**
- How AI can identify content gaps and automatically create/publish content
- Internal linking automation
- Schema markup generation

**Daily monitoring → action loop:**
- Monitor rankings, AI mentions, competitor movements
- Auto-generate reports
- Trigger content creation when gaps detected

---

### 8. AI CEO / BUSINESS INTELLIGENCE

The orchestrating CEO agent that reads all department reports, makes decisions, and reports to Nick.

**Business intelligence automation:**
- Automated KPI tracking (revenue, MRR, churn, CAC, LTV, NPS)
- Daily/weekly digest generation for Nick
- Anomaly detection: "MRR dropped 15% — here's why and what I'm doing"
- Competitor monitoring (track competitor pricing, feature launches, funding)

**Research:**
- How does OpenClaw CEO run his AI agent stack? (Find his TikTok, Twitter/X, LinkedIn, any public interviews about his stack — who is he? What exact tools does he use?)
- Find other "AI CEO" projects, "AI co-founder" systems, "autonomous business operator" GitHub repos
- Artisan AI (autonomous AI employees — research architecture)
- 11x.ai (autonomous SDR)
- Cognition AI / Devin (autonomous software engineer — what can we learn from their architecture?)
- AutoGPT / AgentGPT commercial successors

**Reporting structure:**
- What's the best way for CEO agent to synthesise 6 department reports into one executive summary?
- How to handle conflicting priorities across departments?

---

### 9. SELF-TRAINING / CONTINUAL LEARNING ARCHITECTURE

All agents should improve over time without manual retraining.

**Mechanisms:**
- RLHF (Reinforcement Learning from Human Feedback) — how to implement with minimal human input
- Constitutional AI (Anthropic's approach — can we apply to department agents?)
- Preference learning from outcome data (did the sales call convert? Did the press release get coverage?)
- Few-shot prompt evolution (agents improve their own prompts)
- RAG with continuously updated knowledge base (new wins, new losses, new market data)

**Find:**
- Open-source self-improving agent frameworks
- Papers on "agent self-improvement" / "recursive self-improvement" that are actually implementable
- How Devin/SWE-agent handle continuous improvement
- "Prompt evolution" / "prompt optimisation" tools (DSPy, TextGrad, PromberTuner)

---

### 10. INFRASTRUCTURE FOR THE AI BOS

**How to run this inside SOV:**
- All agents connect via MCP to SOV's tool registry
- Shared PostgreSQL + pgvector for agent memory
- Task queue (PGQueuer / Celery) for async work
- Scheduled tasks (cron-like) for daily PR, weekly reports, etc.
- API gateway to route tasks to right department

**Communication patterns:**
- How agents hand off tasks to each other
- How to prevent agents from conflicting (file locks, task ownership)
- Event-driven vs scheduled vs on-demand execution

**Cost management:**
- Estimated API costs for running all agents 24/7
- Which tasks use cheap models (GPT-4o-mini, DeepSeek) vs expensive (Claude 3.5 Sonnet)
- How to route tasks to right model based on complexity/cost

---

## DELIVERABLES FROM KIMI

Provide the following structured output:

### A. RECOMMENDED STACK (with justification)
The single best combination of tools for each department. Be specific — name exact tools, APIs, pricing.

### B. ARCHITECTURE DIAGRAM (text-based)
Show how agents connect: CEO → departments → tools → SOV MCP → shared memory

### C. GITHUB REPOS TO STUDY / FORK
List the 10-15 most relevant open-source repos with stars, last commit, what to learn from each

### D. BUILD SEQUENCE (prioritised)
What to build first? Give a 12-week implementation roadmap with weekly milestones.

### E. COST ESTIMATE
Monthly API costs to run the full AI BOS at:
- MVP scale (just core departments)
- Growth scale (all departments + daily operations)

### F. OHM LABS / NEURO 6 BREAKDOWN
Exact pipeline reconstruction: how do they make those AI human video ads? Step by step.

### G. OPENLAW CEO STACK
Everything you can find about his exact setup.

### H. NOVEL INSIGHTS
What's the most underexplored capability that would give MEOK/SOV competitive advantage in autonomous business operations?

---

## CONTEXT (feed to your understanding)

- MEOK AI LTD is an AI companion platform — "hatch your own sovereign AI" — launching March 31 2026
- SOV (Sovereign AI OS) is the backend: 220-node fractal council, MaternalCovenant care system, 71+ MCP tools
- We already have: Claude API, Ahrefs MCP, Canva MCP, Google Calendar MCP, Vercel MCP, Sentry MCP, Gmail MCP
- Stack: FastAPI + PostgreSQL + pgvector + Docker + Vast.ai VPS + Next.js + Clerk + Stripe
- Budget: lean startup — prioritise open-source and pay-per-use over SaaS subscriptions
- UK-based company, EU-aware (GDPR, EU AI Act August 2025)
- Long-term vision: SOV sells as enterprise sovereign AI OS to defence/government clients (air-gapped Zarf packaging)

---

*End of research brief. Compile findings into a structured report with all sources cited and GitHub links included.*
