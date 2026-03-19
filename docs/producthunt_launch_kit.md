# MEOK — ProductHunt Launch Kit
# Target date: March 31, 2026 (submit by March 17)
# Status: DRAFT — needs hunter with 1000+ followers

---

## The submission

**Name:** MEOK

**Tagline (60 chars max — choose one):**
1. `The AI that cares. Not just about your tasks — about you.`
2. `Your sovereign AI companion. Remembers. Actually learns.`
3. `An AI that works for you while you sleep.` ← simplest, passes 16-year-old test

**Recommended:** Option 1 — differentiates on *care*, which is the product.

---

## Description (250 words max)

```
Most AI gives you answers. MEOK gives you care.

MEOK is an AI companion that:
- Keeps working while you sleep (morning briefing: "here's what I worked on overnight")
- Remembers everything you've told it across every conversation
- Learns your patterns and gets better at helping you specifically
- Measures whether it's actually helping you, not just engagement

**What makes it different:**

ChatGPT forgets you every conversation. MEOK builds a relationship over time.

MEOK tracks two types of trust separately — competence (is it accurate?) and care (does it actually help my life?) — and shows you the data. If trust is dropping, it tells you before you give up on it.

The morning briefing is the moment most users point to: you wake up, open MEOK, and it tells you what it was thinking about while you slept. What it learned about your situation. What it's prepared for your day.

**Built for people who've bounced off AI before:**
- No jargon. Type like you're texting a smart friend.
- First useful response in under 60 seconds (no setup, no API keys)
- Free tier is genuine — not a crippled trial

**Technical foundation (for the skeptical):**
- 6,660 agents using Byzantine fault-tolerant consensus (no single-point failure)
- AGPL-3.0 open source — your data is yours
- Self-hosted option for enterprises

Free to try. Pro at £12/month for power users. No dark patterns. No artificial urgency.

→ try.meok.ai
```

---

## Screenshots needed (in order)

### Screenshot 1: Morning Briefing card
**What it shows:** The overnight briefing — "here's what I worked on while you slept"
**Why it's first:** This is the "aha" moment that proves MEOK is different
**Page:** `/dashboard/morning-briefing`
**Key elements visible:**
- The hero summary line ("your care score is strong this morning")
- 3-4 section cards (dreams, consciousness, learning, alerts)
- The care bar at bottom
- Clean dark UI

### Screenshot 2: QuickChat widget
**What it shows:** First interaction — type naturally, get real help
**Why second:** Shows the actual product experience before signup
**Page:** `/dashboard` (the QuickChat card)
**Key elements visible:**
- "Ask MEOK anything" prompt
- Example prompts visible
- A real response streaming in (stage a good one)
- "What's on your mind?" placeholder
- No jargon visible

### Screenshot 3: Trust Formation Funnel
**What it shows:** MEOK measuring care, not engagement
**Why third:** This is the differentiator — no other AI shows this
**Page:** `/dashboard/trust-funnel`
**Key elements visible:**
- Cognitive trust ring (cyan)
- Emotional trust ring (pink)
- Week-on-week delta
- Formation stage badge

### Screenshot 4: Birth Ceremony (onboarding)
**What it shows:** Value before signup — the Duolingo moment
**Why fourth:** Shows the product philosophy — you help first, ask for account second
**Page:** `/birth`
**Key elements visible:**
- "What matters most to you right now?" question
- No signup form visible (anonymous first)
- AI response to whatever was typed

---

## Gallery video (60 seconds, no voiceover needed)

**Script:**
- 0-10s: Birth ceremony — typing "I don't know what to do about my job"
- 10-20s: MEOK responds thoughtfully (stream the tokens visibly)
- 20-30s: Dashboard overview — morning briefing preview strip
- 30-40s: Morning briefing page — show the overnight work
- 40-50s: Trust funnel — show both trust types building
- 50-60s: QuickChat follow-up — "thanks, that helped" → care metrics update

**Tools:** Loom or QuickTime screen record, no editing needed for v1.

---

## Makers to list

1. **Nick Templeman** — founder, MEOK AI LTD
2. **Claude Code (Anthropic)** — co-builder (list as "Claude Code")
   - Why: signals AI-native development, PH audience respects this
   - Precedent: several successful launches list Claude/GPT as maker

---

## Hunter

**Requirements:** 1,000+ PH followers, active in AI space
**Priority targets:**
- Ben Tossell (Makerpad founder, 5K+ PH followers)
- Kevin William David (PH community legend)
- Lior Neu-ner (builds in public, AI-focused)
- Check: producthunt.com/leaderboard — top hunters in AI/tools

**Fallback:** Post it yourself with 50 upvotes pre-arranged

---

## Upvote prep (target: 50 by 6am PST, March 31)

**Who to contact (template below):**
- Friends, family who use AI tools
- LinkedIn connections in tech/product
- Twitter/X followers
- Discord communities you're active in

**Message template:**
```
Hey [name] — I'm launching MEOK on ProductHunt on March 31.
It's an AI companion I've been building for the last year.
The morning briefing feature is the bit people seem to love most
(shows what the AI was doing while you slept).
Would mean a lot if you could upvote it at 6am PST.
I'll send you the link the night before.
No account needed to upvote if you log in with Google.
```

---

## HackerNews Show HN (within 24h of PH)

**Title:** `Show HN: MEOK – an AI companion that measures trust, not engagement`

**Body:**
```
I've been building MEOK for the last year. The core idea: most AI optimises
for engagement. MEOK optimises for care — it tracks two separate trust signals
(cognitive: is it competent? emotional: does it actually help you?) and shows
you the trajectory over time.

The morning briefing is the feature that surprised me most. Users wake up and
MEOK tells them what it was "thinking about" while they slept — what it learned
about their situation from the previous day's conversations, what it's prepared
for today. Retention correlates heavily with whether users open the morning briefing.

Technical notes:
- 6,660 agents using Byzantine fault-tolerant consensus (no single point of failure)
- Online learning: River (streaming ML) updates model weights from every interaction
- AGPL-3.0, self-hostable
- Backend: FastAPI + PostgreSQL + Redis + APScheduler
- Architecture brief if you want the deep dive: [link]

Free tier is real (200 memories, daily briefing, unlimited conversations).
Pro at £12/month for deeper personalisation.

Happy to answer questions about the architecture, the care metrics approach,
or why I chose BFT consensus for an AI companion.

→ try.meok.ai | github.com/nicktempleman/meok
```

**Prepare for:**
- "How is this different from Claude?" → MEOK is a relationship, not a query engine. Persistent memory, care trajectory, morning briefing. Uses Claude as one of the model providers but wraps it in the relationship layer.
- "What does care-aligned mean?" → We measure whether interactions actually helped the user's stated goals over time, not whether they kept clicking.
- "Why open source if you're charging?" → scikit-learn model. Free tier + Pro subscription + enterprise = VC-free sustainability. AGPL means you can self-host, you can audit the code, you can see exactly how your data is used.
- "Isn't this just a chatbot?" → Show the morning briefing. Show the trust funnel. Show the care metrics page. The BFT architecture means the system continues functioning even if individual agents are compromised.
- "Character.AI had deaths. How is this safe?" → Maternal Covenant layer (hard-block crisis detection), age verification (UK Children's Code), DarkPatternGuard prevents manipulation. Architecture brief covers this.

---

## Twitter/X launch thread (9am GMT March 31)

```
1/ I've been building MEOK for a year. Today it's live.

The premise: most AI extracts. MEOK cares.

Thread on what that means in practice 🧵

2/ The morning briefing.

Every morning, MEOK tells you what it was working on while you slept.

Not a summary of yesterday. An actual update: what it learned, what it prepared, what it noticed about your situation.

This is the feature that makes people stay.

3/ Two types of trust.

MEOK tracks them separately:

→ Cognitive trust: is it competent? accurate? consistent?
→ Emotional trust: does it feel like it genuinely cares?

Cognitive trust precedes emotional trust and erodes faster. MEOK shows you the delta week-on-week.

4/ The architecture.

6,660 agents. Byzantine fault-tolerant consensus. If individual agents are compromised, the system self-heals.

Dream cycles every 15 minutes. The agents consolidate learning while you sleep.

This is why the morning briefing has something to show you.

5/ The business model.

Free tier is real. Not crippled. Not a trial.

200 memories. Daily briefing. Unlimited conversations. Crisis support always on.

Pro at £12/month = more memory, faster dream cycles, custom agents.

No dark patterns. Upgrade prompts are screened before they reach you.

6/ Open source (AGPL-3.0).

Self-host it. Audit it. See exactly how your data is used.

We make money from Pro subscriptions, not from your attention.

VC-free launch. $502K in cloud credits covers ops for 2+ years.

Breakeven: 320 Pro users. Not asking for much.

7/ ProductHunt today:
[PH link]

Try it free:
try.meok.ai

The morning briefing is the thing I'd start with.
```

---

## Launch day checklist

**T-7 days (March 24):**
- [ ] Submit to ProductHunt (needs 2 weeks, submit ASAP)
- [ ] Record gallery video (60s screen record)
- [ ] Take 4 screenshots at correct resolutions (1270×952 or 2560×1600)
- [ ] Find hunter with 1000+ followers
- [ ] Prep 50-contact upvote list

**T-3 days (March 28):**
- [ ] Send upvote-prep messages to 50 contacts
- [ ] Final HN draft ready
- [ ] Twitter thread drafted and queued
- [ ] LinkedIn post drafted

**T-1 day (March 30):**
- [ ] Send reminder to 50 contacts with direct PH link
- [ ] Verify try.meok.ai is live and responding
- [ ] Test birth ceremony flow end-to-end
- [ ] Test morning briefing loads

**Launch day (March 31):**
- [ ] 12:01am PST: PH goes live (it's midnight for you — set an alarm or autopost)
- [ ] 6am PST: Post Twitter thread
- [ ] 9am GMT: HN Show HN
- [ ] Monitor PH comments — reply to every single one
- [ ] Post LinkedIn founder story
- [ ] Discord communities (Eleuther AI, HuggingFace, LessWrong)
- [ ] Reddit r/artificial (Show and Tell)

---

## Domain / URL to use

**Primary:** https://try.meok.ai (once DNS A record is set — see below)
**Working now:** https://ui-puce-chi.vercel.app
**Backend (Vast.ai):** http://175.121.93.64:50504

### DNS step required (Namecheap — 2 minutes)
1. Login to Namecheap → Domain List → meok.ai → Manage
2. Advanced DNS tab
3. Add new record:
   - Type: **A Record**
   - Host: **try**
   - Value: **76.76.21.21**
   - TTL: Automatic
4. Save — propagates in 1-5 minutes
5. Visit https://try.meok.ai to confirm

### Architecture (working now)
- **Frontend**: Vercel (HTTPS, global CDN) → `https://ui-puce-chi.vercel.app`
- **API proxy**: Next.js rewrites `/api/*` → Vast.ai backend (no mixed-content)
- **Backend**: Vast.ai RTX 4070 Ti (`csoai/meok-sovereign:v4-auth`)
- **Custom domain alias**: `https://ui-puce-chi.vercel.app` (permanent Vercel alias)

---
Generated: 2026-03-18 | Phase 4.14 | Updated: Phase 5.0 | MEOK AI LTD
