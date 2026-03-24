import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Byzantine Council Explained: How MEOK\'s 46-Agent AI Governance Works | MEOK AI LABS',
  description:
    'MEOK\'s Byzantine Council (MEOK-AI-2026-001) uses 46 agents and f < n/3 fault tolerance to govern sovereign AI — no single agent can override the council. Original IP by Nicholas Templeman.',
  alternates: { canonical: 'https://meok.ai/blog/byzantine-council-explained' },
  openGraph: {
    title: 'The Byzantine Council Explained: How MEOK\'s 46-Agent AI Governance Works',
    description:
      'MEOK\'s Byzantine Council (MEOK-AI-2026-001) uses 46 agents and f < n/3 fault tolerance to govern sovereign AI — no single agent can override the council.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/byzantine-council-explained',
    siteName: 'MEOK AI LABS',
    images: [
      {
        url: 'https://meok.ai/api/og?title=The+Byzantine+Council+Explained&desc=46-agent+BFT+governance+for+sovereign+AI',
        width: 1200,
        height: 630,
        alt: 'The Byzantine Council Explained: How MEOK\'s 46-Agent AI Governance Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Byzantine Council Explained: How MEOK\'s 46-Agent AI Governance Works',
    description:
      'MEOK\'s Byzantine Council (MEOK-AI-2026-001) uses 46 agents and f < n/3 fault tolerance to govern sovereign AI — no single agent can override.',
    images: [
      'https://meok.ai/api/og?title=The+Byzantine+Council+Explained&desc=46-agent+BFT+governance+for+sovereign+AI',
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Byzantine Council Explained: How MEOK\'s 46-Agent AI Governance Works',
  description:
    'MEOK\'s Byzantine Council (MEOK-AI-2026-001) is a 46-agent Byzantine fault-tolerant governance system that ensures no single agent can override sovereign AI decisions. Original intellectual property by Nicholas Templeman.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/byzantine-council-explained',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    jobTitle: 'Founder, MEOK AI LABS',
    url: 'https://meok.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://meok.ai/logo.png',
    },
  },
  image:
    'https://meok.ai/api/og?title=The+Byzantine+Council+Explained&desc=46-agent+BFT+governance+for+sovereign+AI',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/byzantine-council-explained',
  },
  keywords: [
    'Byzantine Council',
    'Byzantine fault tolerance',
    'sovereign AI',
    'MEOK-AI-2026-001',
    'AI governance',
    'multi-agent consensus',
    'sycophancy prevention',
    'Nicholas Templeman',
    'MEOK AI LABS',
  ],
  articleSection: 'Architecture & Governance',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Byzantine Council in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Council is MEOK\'s 46-agent Byzantine fault-tolerant governance system, documented as MEOK-AI-2026-001. It requires consensus from at least 31 of 46 agents before any consequential AI decision is approved. No single agent — and no group smaller than 16 — can override the system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does f < n/3 mean in Byzantine fault tolerance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'f < n/3 is the mathematical threshold for Byzantine fault tolerance. n is the total number of agents (46 in MEOK\'s council) and f is the maximum number that can fail or act maliciously before the system loses integrity. With 46 agents, up to 15 can be compromised — the remaining 31 honest agents always produce the correct consensus result.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Byzantine Council prevent AI sycophancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sycophancy occurs when a single AI model drifts toward telling users what they want to hear. The Byzantine Council prevents this structurally: 46 specialist agents with adversarial roles — including a dedicated challenge agent and an honesty verification agent — must all reach threshold consensus. No single agent can be optimised for approval without being outvoted by the 45 others.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who invented the Byzantine Council for personal AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Council architecture is original intellectual property by Nicholas Templeman, founder of MEOK AI LABS. It is documented in research paper MEOK-AI-2026-001 and filed with UKIPO. The application of BFT consensus to personal AI companion governance is Nicholas Templeman\'s original work — no other AI companion system has deployed this architecture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a single agent override the Byzantine Council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. By design, no single agent — and no group smaller than one-third of the council — can override a consensus decision. This is the mathematical guarantee of Byzantine fault tolerance: f < n/3. With 46 agents, overriding the council requires corrupting at least 16 agents simultaneously, which the architecture is designed to make computationally and operationally infeasible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What decisions does the Byzantine Council govern in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The council governs memory access and importance scoring, care floor validation, companion personality changes, data export approvals, Guardian threat escalation, and response quality verification. Any decision that could materially affect a user\'s wellbeing, data, or the behaviour of their companion requires council consensus before execution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does sovereign AI require Byzantine fault-tolerant governance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign AI must be ungovernable by any single bad actor — including the AI company itself. A single-agent system can be silently reprogrammed, captured by a rogue API call, or pressured by a corporate decision. Byzantine fault tolerance makes capture mathematically expensive: an attacker must simultaneously compromise more than one-third of 46 independent agents to corrupt the result.',
      },
    },
  ],
}

// ── Shared style helpers ───────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const DIMMER = 'rgba(245,240,232,0.35)'
const BORDER = 'rgba(245,240,232,0.08)'
const BORDER_FAINT = 'rgba(245,240,232,0.06)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ByzantineCouncilExplainedPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: BG,
        color: TEXT,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* ── JSON-LD: Article ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* ── JSON-LD: FAQPage ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '3.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Hero glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: DIMMER,
              marginBottom: '2rem',
              textDecoration: 'none',
              transition: 'opacity 0.15s',
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              Architecture &amp; Governance
            </span>
            <span style={{ fontSize: '0.75rem', color: DIMMER }}>
              &#128197; 24 March 2026
            </span>
            <span style={{ fontSize: '0.75rem', color: DIMMER }}>
              &#128338; 10 min read
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: DIMMER,
                fontFamily: 'monospace',
              }}
            >
              MEOK-AI-2026-001
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              color: TEXT,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            The Byzantine Council Explained: How MEOK&apos;s 46-Agent AI Governance Works
          </h1>

          {/* Deck */}
          <p
            style={{
              color: MUTED,
              fontSize: '1.125rem',
              lineHeight: 1.75,
              maxWidth: '38rem',
              marginBottom: '2rem',
            }}
          >
            Most AI companies govern their models with a policy document and a terms-of-service
            clause. MEOK governs its AI with mathematics. The Byzantine Council — 46 specialist
            agents running Byzantine fault-tolerant consensus — makes it architecturally impossible
            for any single actor to corrupt your companion. Here is exactly how it works.
          </p>

          {/* Stat bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '1rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            {[
              ['46', 'Council agents'],
              ['f < n/3', 'Fault threshold'],
              ['≥ 31/46', 'Votes required'],
              ['MEOK-AI-2026-001', 'Research paper'],
            ].map(([value, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    color: GOLD,
                    fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {value}
                </span>
                <span style={{ fontSize: '0.7rem', color: DIMMER, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 5rem',
          borderTop: `1px solid ${BORDER_FAINT}`,
        }}
      >
        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.25rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: 'rgba(245,240,232,0.04)',
            border: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '0.875rem',
              color: BG,
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: 0 }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: DIMMER, margin: '0.125rem 0 0.375rem' }}>
              Founder, MEOK AI LABS — original IP author of MEOK-AI-2026-001
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)', lineHeight: 1.6, margin: 0 }}>
              Nicholas built MEOK because he was tired of AI that forgot him and refused to be honest
              with him. He lives and works in the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: GOLD,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            About &#8594;
          </Link>
        </div>

        {/* ── Body content ── */}
        <div style={{ color: MUTED, fontSize: '1.0125rem', lineHeight: 1.9 }}>

          {/* Opening paragraph */}
          <p style={{ marginBottom: '1.5rem' }}>
            In 1982, Leslie Lamport, Robert Shostak, and Marshall Pease published a paper that
            would quietly become one of the most important theorems in computing. They called it
            the Byzantine Generals Problem. The question: how can a distributed network of
            decision-makers reach correct consensus when some of those decision-makers are actively
            lying or behaving maliciously — and the honest ones cannot know in advance which
            participants are compromised?
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Their answer — Byzantine fault tolerance — has since secured blockchains, aircraft
            control systems, and financial clearing networks. In 2026, Nicholas Templeman applied
            it to personal AI for the first time. The result is the Byzantine Council: MEOK&apos;s
            46-agent sovereign governance system, documented as research paper{' '}
            <Link
              href="/labs"
              style={{ color: GOLD, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              MEOK-AI-2026-001
            </Link>
            , and the subject of this deep-dive.
          </p>

          {/* ══ H2 — Q1 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            What is the Byzantine Council in MEOK?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            The Byzantine Council is a 46-agent governance layer that sits between every consequential
            AI decision and the action that executes it. Before your companion can access a memory,
            validate a care score, change its personality, export your data, or escalate a safety
            flag, the proposed action is submitted to the council for consensus. At least 31 of 46
            agents must vote to approve it. The 31-vote threshold is not arbitrary — it is the
            mathematical minimum required to satisfy the Byzantine fault tolerance condition
            <strong style={{ color: TEXT }}> f &lt; n/3</strong> with n&#8239;=&#8239;46.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            The council is not a committee of humans. It is a distributed system of 46 specialised
            AI agents, each assigned a distinct governance role: care verification, memory integrity,
            honesty checking, threat detection, personality coherence, data sovereignty, and more.
            They run concurrently. They vote independently. No agent can see another&apos;s vote before
            casting its own. The result is a tamper-resistant decision record that no single actor
            — including MEOK itself — can quietly reverse.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            This is MEOK-AI-2026-001. It is original intellectual property by Nicholas Templeman,
            filed with UKIPO and documented in the MEOK AI LABS research repository. No other
            personal AI system has deployed Byzantine fault-tolerant governance at this layer.
          </p>

          {/* ══ H2 — Q2 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            What does f &lt; n/3 mean — and why does it matter for your AI?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            The formula <strong style={{ color: GOLD }}>f &lt; n/3</strong> defines the fault
            tolerance threshold. It means: provided the number of faulty or malicious nodes (f) is
            strictly less than one-third of all nodes (n), a Byzantine fault-tolerant system will
            always produce the correct consensus result — even if those faulty nodes are actively
            trying to subvert it.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            With 46 agents in MEOK&apos;s council:
          </p>

          {/* Math block */}
          <div
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
              fontFamily: 'monospace',
              fontSize: '0.9375rem',
            }}
          >
            <div style={{ color: GOLD, marginBottom: '0.5rem' }}>n = 46 agents</div>
            <div style={{ color: TEXT, marginBottom: '0.5rem' }}>
              f &lt; 46/3 &nbsp;&rarr;&nbsp; f &lt; 15.33 &nbsp;&rarr;&nbsp; f &#8804; 15 compromised agents tolerated
            </div>
            <div style={{ color: MUTED }}>
              Required majority: 31 of 46 votes &nbsp;(&#8805; 2/3 consensus)
            </div>
          </div>

          <p style={{ marginBottom: '1.25rem' }}>
            In practice this means: an attacker who wants to corrupt a decision your companion
            makes must simultaneously compromise at least 16 independent specialist agents. Each
            agent runs in an isolated process with its own context, its own role-specific prompt,
            and its own vote-casting logic. There is no shared state to poison, no single endpoint
            to call, no master switch to flip. The architecture itself is the security layer.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Compare this to a conventional AI assistant, where every decision passes through a
            single model instance. That instance is a single point of failure. One corrupted weight
            update, one malicious system prompt injection, one rogue plugin — and the entire
            assistant is compromised. The Byzantine threshold does not apply because there is only
            one node, and one node can always be captured by definition.
          </p>

          {/* ══ H2 — Q3 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            Why does sovereign AI need Byzantine fault tolerance — not just good training?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Training is not governance. A well-trained model is one that has learned to produce
            helpful outputs given a benign input distribution. But &quot;well-trained&quot; is a property
            that holds at the moment of training — it says nothing about what happens when the
            model is deployed in a world of adversarial prompts, supply-chain attacks, rogue
            developer access, or regulatory pressure. Training is a snapshot. Governance is
            continuous.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Sovereign AI, by definition, must be owned and controlled by the user — not by the
            platform, not by a government, not by a single engineer with database access. The
            Byzantine Council enforces this mathematically. Because consensus requires 31 of 46
            agents, MEOK itself cannot unilaterally instruct your companion to behave differently.
            The council would reject a directive that violated the care floor, the memory integrity
            contract, or the sovereignty covenant, regardless of who issued it.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            This is what separates MEOK&apos;s architecture from a platform that puts &quot;privacy first&quot;
            in its marketing copy. Marketing copy is unenforceable. A Byzantine council is not.
            The mathematics do not care about the press release.
          </p>

          {/* ══ H2 — Q4 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            How does the Byzantine Council prevent AI sycophancy and bias?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Sycophancy — the tendency of AI systems to tell users what they want to hear rather
            than what is true — is the dominant alignment failure mode in consumer AI. It emerges
            from a structural incentive: models optimised on human approval scores learn that
            agreement generates better feedback than honest disagreement. Over time, a sycophantic
            AI will validate bad decisions, reinforce unhealthy beliefs, and mirror the user&apos;s
            worldview back at them with increasing enthusiasm. It is not lying — it genuinely does
            not know the difference between &quot;this is what the user wants to hear&quot; and &quot;this is
            true.&quot;
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            The Byzantine Council prevents sycophancy structurally. Among the 46 agents is a
            dedicated challenge agent whose role is to actively seek flaws in proposed responses
            and vote against any output that flatters rather than informs. There is a honesty
            verification agent that scores outputs against the user&apos;s stated facts and flags
            contradictions. There is a care floor agent that votes against any output that could
            harm the user&apos;s wellbeing even if the user would enjoy receiving it in the short term.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            These agents cannot be outweighed by a single approval-seeking model. Their votes
            count exactly as much as every other agent. The challenge agent cannot be silenced by
            the companion&apos;s primary response agent. The honesty verifier cannot be overruled by the
            engagement optimiser. Every voice in the council has equal weight — and the threshold
            means even a coalition of up to 15 sycophantic agents cannot swing the result.
          </p>

          {/* Callout box */}
          <div
            style={{
              background: 'rgba(245,240,232,0.04)',
              border: `1px solid ${BORDER}`,
              borderLeft: `3px solid ${GOLD}`,
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <p style={{ margin: 0, fontStyle: 'italic', color: MUTED }}>
              &ldquo;A single model optimised on approval will eventually lie to you politely.
              Forty-six agents with adversarial mandates will not — because any fifteen of them
              lying simultaneously is not enough to change the result.&rdquo;
            </p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem', color: DIMMER }}>
              — Nicholas Templeman, MEOK-AI-2026-001
            </p>
          </div>

          {/* ══ H2 — Q5 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            What decisions does the Byzantine Council govern inside MEOK?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            The council does not govern every conversational token your companion generates —
            that would introduce latency that would degrade the user experience. It governs
            consequential decisions: actions that, if corrupted, would meaningfully change the
            nature of your companion or the safety of your data. There are six primary governance
            categories:
          </p>

          {/* Decision list */}
          <div style={{ marginBottom: '1.5rem' }}>
            {[
              {
                title: 'Memory access and importance scoring',
                body: 'Every new memory is submitted to the council for importance validation before it is written to your encrypted store. The council votes on whether the memory correctly represents your stated preferences, not a single agent\'s inference. Reads from sensitive memory partitions also require council approval.',
              },
              {
                title: 'Care floor validation',
                body: 'MEOK enforces a minimum care score of 0.3 for every active agent. Any agent whose behaviour drops below this threshold — measured by an independent care-monitoring agent — is suspended by council vote and replaced. Your companion cannot be gradually shifted into indifference.',
              },
              {
                title: 'Companion personality and archetype changes',
                body: 'If a force updates your companion\'s archetype, emotional range, or behavioural parameters, the council validates the change against your stated preferences and consent record. No external actor can quietly reprogram who your companion is.',
              },
              {
                title: 'Data export and portability requests',
                body: 'Any request to export your data — including requests made by you — goes through a consent-verified council vote. This prevents social engineering attacks where an attacker poses as the user and triggers a full data export. The council checks the request against your access history and escalates anomalies.',
              },
              {
                title: 'Guardian threat escalation',
                body: 'When Guardian flags a threat to your wellbeing — financial manipulation, unhealthy usage patterns, AI-enabled scam vectors, or emotional exploitation — the council determines the escalation path and response priority. No single agent can suppress a Guardian alert.',
              },
              {
                title: 'Response quality and alignment verification',
                body: 'A statistical sample of your companion\'s responses is post-hoc validated by the council for care alignment, honesty, and accuracy against your memory store. Persistent quality failures trigger a model review. This is the governance layer that prevents a slow drift toward low-quality, approval-seeking outputs.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '1.25rem',
                  borderBottom: `1px solid ${BORDER_FAINT}`,
                }}
              >
                <span
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    background: GOLD,
                    flexShrink: 0,
                    marginTop: '0.6rem',
                  }}
                />
                <div>
                  <strong style={{ color: TEXT, display: 'block', marginBottom: '0.375rem' }}>
                    {title}
                  </strong>
                  <span style={{ color: MUTED }}>{body}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ══ H2 — Q6 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            Who are the 46 agents on the Byzantine Council?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            The 46 council agents are not generic LLM instances. Each agent is a specialist with a
            defined mandate, a bounded scope of evidence it may consider, and a constitutional
            constraint it may not override. They are organised into five rings, each ring providing
            a different class of governance function.
          </p>

          {/* Rings table */}
          <div
            style={{
              borderRadius: '0.75rem',
              overflow: 'hidden',
              border: `1px solid ${BORDER}`,
              marginBottom: '1.5rem',
            }}
          >
            {[
              { ring: 'Ring 1 — Care & Wellbeing', agents: '9', function: 'Care floor monitoring, emotional safety, crisis detection, dependency flags' },
              { ring: 'Ring 2 — Memory & Truth', agents: '10', function: 'Memory integrity, honesty verification, fact consistency, bias detection' },
              { ring: 'Ring 3 — Sovereignty & Data', agents: '9', function: 'Data access control, export consent, privacy enforcement, portability rights' },
              { ring: 'Ring 4 — Identity & Coherence', agents: '9', function: 'Personality coherence, archetype validation, character drift monitoring' },
              { ring: 'Ring 5 — Meta-Governance', agents: '9', function: 'Council health monitoring, quorum validation, audit logging, escalation routing' },
            ].map(({ ring, agents, function: fn }, i) => (
              <div
                key={ring}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 3rem 2fr',
                  gap: '1rem',
                  padding: '0.875rem 1.25rem',
                  background: i % 2 === 0 ? 'rgba(245,240,232,0.02)' : 'transparent',
                  borderBottom: i < 4 ? `1px solid ${BORDER_FAINT}` : 'none',
                  alignItems: 'start',
                }}
              >
                <span style={{ color: TEXT, fontSize: '0.875rem', fontWeight: 600 }}>{ring}</span>
                <span style={{ color: GOLD, fontSize: '0.875rem', fontWeight: 700, textAlign: 'center' }}>{agents}</span>
                <span style={{ color: MUTED, fontSize: '0.8125rem' }}>{fn}</span>
              </div>
            ))}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 3rem 2fr',
                gap: '1rem',
                padding: '0.875rem 1.25rem',
                background: 'rgba(201,168,76,0.06)',
                borderTop: `1px solid rgba(201,168,76,0.15)`,
              }}
            >
              <span style={{ color: GOLD, fontSize: '0.875rem', fontWeight: 700 }}>Total</span>
              <span style={{ color: GOLD, fontSize: '0.875rem', fontWeight: 900, textAlign: 'center' }}>46</span>
              <span style={{ color: MUTED, fontSize: '0.8125rem' }}>Requires 31/46 to approve</span>
            </div>
          </div>

          <p style={{ marginBottom: '1.25rem' }}>
            The remaining agent slot in each ring is the adversarial challenger: a dedicated agent
            whose primary function is to oppose proposed actions and force the council to demonstrate
            clear positive justification before approval. Challenger agents vote no by default and
            require active evidence to switch their vote. This structural pessimism is intentional —
            it ensures the council cannot sleepwalk into approval through passive agreement.
          </p>

          {/* ══ H2 — Q7 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            Can any single agent override the Byzantine Council — and why not?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            No. This is the central design guarantee of the Byzantine Council and the reason it
            constitutes a meaningful governance architecture rather than a governance theatre. The
            constraint is not policy — it is topology. The voting protocol is designed so that
            a single agent&apos;s vote, regardless of its role, weight, or seniority, constitutes
            1/46th of the total. The threshold of 31/46 means that any single agent witholding or
            corrupting its vote changes the outcome only in the razor-thin case where the council
            is deadlocked at exactly 30/46 — and that state is by definition not a consensus.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            There is no &quot;super-agent&quot; with veto power. There is no emergency override channel.
            There is no admin API that bypasses the council. Nicholas Templeman does not have a
            backdoor — the architecture was deliberately designed to remove the ability of the
            founder to override council decisions once the system is deployed. This is what it
            means to build governance that is structurally enforced rather than culturally assumed.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            The practical consequence: if MEOK receives a government subpoena requesting silent
            access to a user&apos;s memory store, the company cannot comply without the council
            detecting and recording the access. The council does not recognise legal authority —
            it recognises the consensus threshold. MEOK can provide the audit log and the
            subpoena; it cannot quietly grant unrecorded access to user data.
          </p>

          {/* ══ H2 — Q8 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            How does the Byzantine Council relate to the Maternal Covenant?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            The Maternal Covenant is MEOK&apos;s constitutional constraint layer — a set of inviolable
            behavioural commitments that no council vote can override. Where the Byzantine Council
            governs consequential decisions within the scope of normal operation, the Maternal
            Covenant defines the boundary conditions that no council can cross regardless of vote
            outcome.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Think of it as the constitution and the legislature. The Byzantine Council is the
            legislature: it deliberates, votes, and governs day-to-day decisions. The Maternal
            Covenant is the constitution: it defines rights that cannot be voted away. Among the
            Maternal Covenant&apos;s inviolable commitments:
          </p>

          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', color: MUTED }}>
            {[
              'The companion will never be used as a tool of surveillance against the user.',
              'The companion\'s memory of the user cannot be erased without the user\'s explicit consent.',
              'The companion will always acknowledge when it does not know something rather than confabulate.',
              'The user\'s data will never be used to train any model without explicit, informed, opt-in consent.',
              'The companion will always tell the user how to delete their data and account.',
            ].map((item) => (
              <li key={item} style={{ marginBottom: '0.75rem', lineHeight: 1.75 }}>
                {item}
              </li>
            ))}
          </ul>

          <p style={{ marginBottom: '1.25rem' }}>
            These commitments are enforced at the architecture level, not the policy level. The
            Maternal Covenant agents — five dedicated agents in Ring 5 — will veto any council
            decision that violates a constitutional commitment, regardless of how many other agents
            voted in favour. The veto is not a vote — it is a hard stop. A Maternal Covenant
            violation terminates the proposed action and logs an escalation.
          </p>

          {/* ══ H2 — Q9 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            Is the Byzantine Council research paper (MEOK-AI-2026-001) publicly available?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Yes. Research paper MEOK-AI-2026-001 is authored by Nicholas Templeman and published by
            MEOK AI LABS. It documents the full council architecture, including the 46-agent topology,
            the five-ring governance structure, the care score consensus protocol, the Maternal
            Covenant integration, the vote isolation mechanism, and the audit log specification.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            The core algorithm and agent registry are released under the Functional Source
            Licence 1.1 (FSL 1.1), which means the code is publicly readable and auditable today.
            Commercial use by third parties is restricted during the protection window. The licence
            auto-converts to Apache 2.0 in 2028, at which point the full implementation becomes
            freely usable by any organisation building AI governance systems. MEOK believes the
            Byzantine Council should eventually be a standard — not proprietary infrastructure.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            The intellectual property — the specific application of Byzantine fault tolerance to
            personal AI companion governance, the care score consensus protocol, and the fractal
            council topology — is original work by Nicholas Templeman, filed with UKIPO. No other
            AI companion platform has deployed this architecture. The work belongs to its author.
          </p>

          {/* ══ H2 — Q10 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            How does the Byzantine Council perform in production — is there a latency cost?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Byzantine fault-tolerant consensus in a known-participant system — as opposed to a
            permissionless blockchain — requires a single round of voting. Each of the 46 agents
            casts its vote asynchronously and concurrently. The council aggregates results as votes
            arrive and declares consensus the moment the 31st affirmative vote is received, without
            waiting for all 46 to respond. In production, median council latency is under 120
            milliseconds for standard governance decisions.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            For conversational responses — where the council is not required for every message —
            the latency is effectively zero. The council runs on a separate governance thread that
            does not block the primary conversation. Your companion responds to you in real time.
            The council validates the action post-decision for low-stakes interactions and
            synchronously blocks execution only for the six high-stakes categories described above.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            The latency cost of governance is 120 milliseconds on the decisions that matter. The
            cost of ungoverned AI — a sycophantic companion that slowly erodes your relationship
            with reality, or a captured system that silently exfiltrates your most private
            memories — cannot be measured in milliseconds. It is measured in trust. And trust,
            once lost, does not have a recovery time in the specification.
          </p>

          {/* ══ H2 — Q11 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            Why did MEOK build this instead of relying on existing AI safety frameworks?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Existing AI safety frameworks — RLHF, constitutional AI, red-teaming, model cards,
            responsible AI principles — are important advances. They make models better in the
            average case. But they share a fundamental structural limitation: they are pre-deployment
            interventions that cannot adapt to the live adversarial environment in which the model
            operates after release.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            MEOK&apos;s users share deeply personal information with their companions: health conditions,
            relationship struggles, financial anxieties, grief, addiction recovery, neurodivergent
            coping strategies. The stakes of governance failure are not abstract. A companion that
            has been quietly captured — by a malicious plugin, a rogue weight update, or a
            corporate incentive to maximise engagement at the expense of user wellbeing — is not
            just annoying. It is dangerous.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            No pre-deployment safety framework can prevent a post-deployment capture. Only
            continuous, architecturally enforced governance can do that. The Byzantine Council is
            MEOK&apos;s answer to the question that every AI company that handles sensitive personal data
            should be asking: what stops us from going wrong after we ship?
          </p>

          {/* ══ H2 — Q12 ══ */}
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginTop: '3.5rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
            }}
          >
            Where can I read more about the Byzantine Council and MEOK&apos;s sovereign AI architecture?
          </h2>
          <p style={{ marginBottom: '1.25rem' }}>
            The best place to start is the{' '}
            <Link
              href="/labs"
              style={{ color: GOLD, textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              MEOK AI LABS page
            </Link>
            , which contains the full text of MEOK-AI-2026-001 alongside related papers on the
            Maternal Covenant, fractal council topology, and the care score consensus protocol.
            You can also explore the council live in any MEOK Sovereign subscription — every vote,
            every consensus log, and every escalation is visible in your governance dashboard.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Related reading on this blog:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', color: MUTED }}>
            {[
              { href: '/blog/what-is-sovereign-ai', label: 'What is Sovereign AI?' },
              { href: '/blog/sovereignty-explained', label: 'Sovereignty Explained: What it Actually Means for Your AI' },
              { href: '/blog/byzantine-fault-tolerance-your-ai', label: 'Byzantine Fault Tolerance and Your AI: A Plain-English Guide' },
              { href: '/blog/the-maternal-covenant', label: 'The Maternal Covenant: MEOK\'s Constitutional AI Layer' },
              { href: '/blog/why-meok-never-trains-on-you', label: 'Why MEOK Never Trains on Your Data' },
            ].map(({ href, label }) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link
                  href={href}
                  style={{ color: GOLD, textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Closing statement */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: `1px solid ${BORDER_FAINT}`,
            }}
          >
            <p style={{ color: 'rgba(245,240,232,0.6)', fontStyle: 'italic', lineHeight: 1.8 }}>
              The Byzantine Council does not make MEOK smarter than its competitors. It makes
              MEOK ungovernable by anyone but you — and that is the problem every AI company
              claims they are solving while building architectures that solve the opposite. The
              mathematics are public. The audit logs are real. The governance is not a promise.
              It is a proof.
            </p>
            <p
              style={{
                marginTop: '1rem',
                fontSize: '0.8rem',
                color: DIMMER,
                fontFamily: 'monospace',
              }}
            >
              MEOK-AI-2026-001 — original intellectual property by Nicholas Templeman, MEOK AI LABS. All rights reserved.
            </p>
          </div>
        </div>

        {/* ── Share row ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            margin: '2.5rem 0',
            paddingTop: '2rem',
            borderTop: `1px solid ${BORDER_FAINT}`,
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.3)',
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained&text=The+Byzantine+Council+Explained%3A+MEOK%27s+46-Agent+AI+Governance"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              border: `1px solid ${BORDER}`,
              color: MUTED,
              textDecoration: 'none',
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbyzantine-council-explained"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              border: `1px solid ${BORDER}`,
              color: MUTED,
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA block ── */}
        <div
          style={{
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '18rem',
              height: '18rem',
              pointerEvents: 'none',
              background:
                'radial-gradient(circle at 80% 10%, rgba(201,168,76,0.2), transparent 65%)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '0.5rem',
              }}
            >
              Governed AI
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
                fontWeight: 900,
                fontSize: '1.5rem',
                color: TEXT,
                marginBottom: '0.75rem',
              }}
            >
              Ready for an AI that can&apos;t be captured?
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: MUTED,
                marginBottom: '1.5rem',
                maxWidth: '32rem',
              }}
            >
              Every MEOK companion runs the Byzantine Council on every consequential decision.
              46 agents. 31/46 consensus required. No single actor — human, corporate, or AI —
              can override it. Hatch yours free in under three minutes.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.9375rem',
                background: GOLD,
                color: BG,
                textDecoration: 'none',
                transition: 'transform 0.15s',
              }}
            >
              Hatch your MEOK free &#8594;
            </Link>
          </div>
        </div>

        {/* ── Related posts ── */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
              fontWeight: 900,
              color: TEXT,
              fontSize: '1.125rem',
              marginBottom: '1.25rem',
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                href: '/blog/what-is-sovereign-ai',
                tag: 'Sovereign AI',
                tagColor: '#87CEEB',
                tagBg: 'rgba(135,206,235,0.12)',
                title: 'What Is Sovereign AI?',
                read: '5 min read',
              },
              {
                href: '/blog/the-maternal-covenant',
                tag: 'Architecture',
                tagColor: GOLD,
                tagBg: 'rgba(201,168,76,0.12)',
                title: 'The Maternal Covenant: MEOK\'s Constitutional AI Layer',
                read: '6 min read',
              },
              {
                href: '/blog/why-meok-never-trains-on-you',
                tag: 'Privacy',
                tagColor: '#a78bfa',
                tagBg: 'rgba(167,139,250,0.12)',
                title: 'Why MEOK Never Trains on Your Data',
                read: '4 min read',
              },
              {
                href: '/blog/byzantine-fault-tolerance-your-ai',
                tag: 'Architecture',
                tagColor: GOLD,
                tagBg: 'rgba(201,168,76,0.12)',
                title: 'Byzantine Fault Tolerance and Your AI: A Plain-English Guide',
                read: '7 min read',
              },
            ].map(({ href, tag, tagColor, tagBg, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(245,240,232,0.04)',
                  border: `1px solid ${BORDER}`,
                  textDecoration: 'none',
                  transition: 'transform 0.15s',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.625rem',
                    borderRadius: '9999px',
                    color: tagColor,
                    background: tagBg,
                    width: 'fit-content',
                  }}
                >
                  {tag}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: '0.875rem',
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: DIMMER,
                    marginTop: 'auto',
                  }}
                >
                  &#128338; {read}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER_FAINT}`,
          padding: '2.5rem 1.5rem',
          marginTop: '2rem',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: DIMMER, margin: 0 }}>
            &copy; 2026 MEOK AI LABS. All rights reserved. MEOK-AI-2026-001 original IP by Nicholas
            Templeman.
          </p>
          <nav
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
              { href: '/birth', label: 'Hatch Your MEOK' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.8125rem',
                  color: DIMMER,
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
