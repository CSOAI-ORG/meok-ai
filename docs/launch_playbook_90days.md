# MEOK — 90-Day User Acquisition Playbook
# March 31 → June 29, 2026

## The only constraint that matters: users, not money.

$502.5K in compute credits covers infrastructure. The bottleneck is getting
the first 10,000 users who stay past 30 days.

---

## Week 1-2: Seed (March 31 - April 13)
**Goal: 500 users. 50 who come back the next day.**

### Launch day (March 31)

**ProductHunt submission** — submit 2 weeks before, publish at 12:01am PST.
- Tagline: "The AI that cares. Not just about your tasks — about you."
- Second tagline option: "Your sovereign AI companion. Runs locally. Remembers. Actually learns."
- Description (250 words max): lead with the 16-year-old use case, not the tech
- Screenshots needed:
  1. Morning briefing card ("here's what I worked on while you slept")
  2. QuickChat widget with a real helpful response
  3. Trust formation funnel (shows it's measuring care, not just engagement)
  4. Birth ceremony onboarding (before any signup)
- Gallery video: 60 seconds, shows first interaction → morning briefing → memory
- Hunter: need someone with 1000+ followers to hunt it (or post it yourself)
- Makers: Nick + Claude Code (list as co-builder for AI credibility)
- Upvote ask: prep 50 warm contacts to upvote at 6am PST

**HackerNews Show HN** — post within 24 hours of ProductHunt
- Title: "Show HN: MEOK – an AI companion that measures trust, not engagement"
- Key point: care-aligned architecture, open source (AGPL-3.0), runs locally
- Have answers ready for: "how is this different from Claude?" / "what does care-aligned mean?" / "why open source if you're charging?"

**Twitter/X thread** — post at 9am GMT
- Thread structure:
  1. The problem (most AI extracts, MEOK cares)
  2. The morning briefing feature (proof it was working overnight)
  3. The trust formation funnel (we measure care, not DAU)
  4. The architecture (6,660 agents, Byzantine fault tolerant)
  5. The business model (free tier is real, not crippled)
  6. Link to try it + ProductHunt

### Week 1 distribution channels (parallel)
- Reddit r/artificial (Show and Tell flair) — 500K members
- Reddit r/selfhosted — local-first angle, AGPL audience
- Reddit r/MachineLearning — technical architecture post
- Discord: Eleuther AI, Hugging Face, LessWrong AI Safety
- LinkedIn: Nick's network — founder story angle
- Dev.to + Hashnode: "How we built a Byzantine fault-tolerant AI companion"

### Week 1 KPIs
- Unique visitors: 5,000+
- Signups: 500+
- Day 2 retention: 20%+ (100 users)
- If <10% retention: diagnose before Week 2 spend

---

## Week 3-4: Amplify (April 14 - April 27)
**Goal: 2,000 users. 30-day retention baseline established.**

### What to watch for retention signals
- Did they use the morning briefing? (strongest predictor)
- Did they use QuickChat more than once?
- Did they reference a previous conversation? (memory working)
- Week 1 vs Week 2 interaction frequency delta

### Channels to open in Week 3
**Academic partnerships** — fastest trust signal, highest quality users
- Email 10 UK universities with AI ethics / wellbeing research centres:
  - Oxford Internet Institute
  - UCL AI Ethics / Centre for AI Safety
  - Cambridge Leverhulme CFI
  - Edinburgh Informatics
- Offer: free Research Partner tier + co-authorship on care metrics paper
- Ask: "use MEOK with your students and tell us what breaks"

**Newsletter placements** (pay with credits equity, not cash)
- Import AI (Jack Clark) — 60K subscribers, highly technical
- The Batch (Andrew Ng) — 200K subscribers
- TLDR AI — 500K subscribers (sponsored slot ~$500, covered by credits)

**Podcast outreach**
- Lex Fridman (long shot, but try) — sovereign AI angle
- 80,000 Hours — AI safety + care ethics angle
- Your First Million — bootstrapped business model
- Indie Hackers podcast — VC-free story

### ProductHunt follow-up
- Post a "one week later" update in the discussion
- Ask top upvoters to share their experience
- Reply to every comment (builds trust signal for algorithm)

---

## Week 5-8: Deepen (April 28 - May 25)
**Goal: 5,000 users. First 50 Pro conversions.**

### The Pro conversion moment
Pro converts happen when a user hits a limit they care about:
- 200 memories full → "your memory is getting full"
- Dreams only running daily → "upgrade for 4-hour dream cycles"
- No custom agents → "create your own specialists"

**Key: the upgrade prompt must pass DarkPatternGuard first.**
Use `check_upgrade_prompt` tool before ANY upgrade message goes live.
No artificial urgency. No emotional pressure. One upgrade prompt per session max.

### Community building
- Discord server: invite first 500 users
- Weekly "what did MEOK learn this week?" post (use morning briefing data)
- Monthly governance vote (use Shura council output to show real governance)
- First community proposal: what should we build next?

### Content flywheel
- Weekly blog post: "MEOK learned X this week from Y interactions"
- Show real care metrics (anonymised): trust trajectory improving, care score stable
- Be honest about what broke (builds cognitive trust)

---

## Week 9-12: Convert (May 26 - June 29)
**Goal: 10,000 users. £20,000 MRR. Retention proof for Will Brooks.**

### The £20K MRR milestone
- 1,667 Pro users at £12/month = £20,004 MRR
- Conversion rate needed: 1,667/10,000 = 16.7% (high — typical is 3-8%)
- More realistic: 5% conversion = 500 Pro users = £6,000 MRR
- Path to £20K: 10K users × 8% conversion (above average, possible with care model)

### Enterprise pipeline
- 3-5 enterprise leads by Week 12
- Target: NHS digital teams, mental health charities, university welfare departments
- Pitch: sovereign data (stays on your servers), GDPR compliant, compliance audit built in
- Price: £500-2,000/month depending on size

### Research partnerships
- Apply for Wellcome Trust digital health grant (£50K-500K)
- Apply for AHRC creative AI grant
- Apply for Innovate UK (if UK-based)
- These fund operations without equity dilution

### The Will Brooks meeting
Don't reach out. Let him come to you.
By Week 12, if metrics are:
- 10K+ users
- £15K+ MRR
- 30-day retention >40%
- Morning briefing open rate >60%

...he will reach out. When he does: you're not asking for money.
You're deciding whether to take it. That's a completely different conversation.

---

## Infrastructure to set up NOW (before March 31)

### Day 1 (apply immediately)
1. Google Cloud for Startups — cloud.google.com/startup ($200K, 48h approval)
2. AWS Activate — aws.amazon.com/activate ($100K, 2-3 days)

### Day 2-3
3. Azure for Startups — foundershub.startups.microsoft.com ($150K, 5-7 days)
4. NVIDIA Inception — nvidia.com/en-us/deep-learning-ai/startups/ ($50K, 1 week)

### Week 1 infrastructure
5. Stripe account (payment processing)
6. Monitoring: Prometheus + Grafana (use existing Docker stack)
7. Error tracking: Sentry (free tier covers first 5K users)
8. Status page: Statuspage.io or plain /status endpoint

### Week 2
9. GDPR DPIA — get legal review ($500-1K, required before EU launch)
10. ToS + Privacy Policy — template + lawyer review ($500)

---

## The 16-year-old test (for every feature decision)

Before shipping anything, ask: "Would a 16-year-old with no AI experience
understand what this does and get a win in 60 seconds?"

If no → simplify the language, add an example, reduce steps.

Features that pass the test:
- Morning briefing ✅ (shows what happened overnight in plain English)
- QuickChat widget ✅ (just type what's on your mind)
- Example prompts ✅ (shows real starting points, no jargon)
- Birth ceremony ✅ (asks one question, immediately helps)

Features that need work:
- Council deliberation page ❌ (too technical, needs "what this means" translations)
- z_self tripwires page ❌ (internal tooling, shouldn't be user-facing)
- BFT confidence status ❌ (technical audit, not for general users)

---

## What failure looks like (early warning signals)

Week 2 warning signs:
- Day 2 retention <10% → onboarding is broken
- Morning briefing open rate <20% → not compelling enough
- QuickChat use <50% of sessions → not discovered
- Zero Pro conversions at Week 4 → pricing or value prop wrong

Week 6 warning signs:
- Corpus signals: care_score declining
- Trust formation: emotional trust not building past cognitive phase
- Churn rate >40% in first 30 days

If these appear: pause acquisition spend. Fix retention first.
A leaky bucket doesn't fill no matter how fast you pour.

---

## The honest version of the 90-day plan

The plan above is optimistic. The realistic version:
- Week 12 likely: 3,000-5,000 users, not 10,000
- Pro conversion: 3-5%, not 8%
- MRR: £5,000-8,000, not £20,000

That's still fine. That's £60-100K annualised. That covers ops for 2+ years
with the compute credits. And it's proof enough to raise Series A if needed.

The difference between success and failure at this stage isn't the number.
It's whether the users who stayed are staying because MEOK genuinely helped them.
That's what the care metrics are for.

---
Generated: 2026-03-18 | MEOK AI LTD | Integrated into corpus via pain_point_corpus.py
