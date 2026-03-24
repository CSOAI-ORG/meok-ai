import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Byzantine Council: How 43 AI Agents Govern Every MEOK Response | MEOK AI LABS',
  description:
    'Why single-agent AI is dangerous — and how MEOK\'s 43-agent Byzantine fault-tolerant consensus system ensures no single AI can ever deliver a harmful response. MEOK-AI-2026-001.',
  alternates: { canonical: 'https://meok.ai/blog/byzantine-council-explained' },
  openGraph: {
    title: 'The Byzantine Council: How 43 AI Agents Govern Every MEOK Response',
    description:
      'Byzantine fault tolerance (f < n/3), why single-agent AI is dangerous, and how MEOK\'s 43-agent consensus system makes care-based alignment structurally enforceable.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/byzantine-council-explained',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=The+Byzantine+Council%3A+43+AI+Agents+Govern+Every+MEOK+Response&desc=Byzantine+fault+tolerance+in+care-based+AI',
        width: 1200,
        height: 630,
        alt: 'The Byzantine Council: How 43 AI Agents Govern Every MEOK Response | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Byzantine Council: How 43 AI Agents Govern Every MEOK Response',
    description:
      'Why single-agent AI is a structural safety failure — and how MEOK\'s 43-agent Byzantine Council makes harmful responses mathematically improbable.',
    images: [
      'https://meok.ai/api/og?title=The+Byzantine+Council%3A+43+AI+Agents+Govern+Every+MEOK+Response&desc=Byzantine+fault+tolerance+in+care-based+AI',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Byzantine Council: How 43 AI Agents Govern Every MEOK Response',
  description:
    'A deep-dive into Byzantine fault tolerance applied to AI safety. How MEOK\'s 43-agent council system ensures no single agent can override care-based alignment — and why this is fundamentally different from RLHF.',
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
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/byzantine-council-explained',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Byzantine fault tolerance in AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Byzantine fault tolerance (BFT) is a property of distributed systems that allows them to reach correct consensus even when some nodes behave arbitrarily — including maliciously. The theorem states that a system can tolerate up to f faulty nodes as long as n >= 3f + 1 total nodes. Applied to AI, MEOK\'s Byzantine Council uses 43 agents so that up to 14 can fail or produce incorrect outputs without the overall system delivering a harmful response.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Byzantine Council work in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every MEOK response is evaluated by 43 independent AI agents before delivery. Each agent assesses the response against care-alignment criteria. The response is only delivered if a supermajority of agents — at least 29 of 43 — reach consensus that it meets safety and care standards. No single agent, no user instruction, and no prompt injection can override this requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why 43 agents specifically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '43 is the smallest prime number satisfying n >= 3f + 1 for f = 14. This means the council can tolerate up to 14 faulty or manipulated agents — a third of the council — while still reaching correct consensus. Using 43 rather than a rounder number reflects the mathematical requirement, not an arbitrary choice. The design is documented in MEOK-AI-2026-001.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can any single AI override the Byzantine Council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Byzantine Council is not an advisory layer — it is a structural requirement. A response cannot be delivered without supermajority consensus. Even if a single agent is manipulated through adversarial prompt injection, even if a user constructs a carefully crafted input designed to elicit harmful output, the remaining agents will not reach the required threshold and the response will be blocked.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from other AI safety approaches like RLHF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RLHF trains a model to prefer certain outputs based on human ratings — but that preference is baked into a single model\'s weights. A sufficiently clever prompt can still elicit harmful responses because the safety is probabilistic, not structural. MEOK\'s Byzantine Council is structural: no amount of prompt engineering can bypass the mathematical consensus requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is care-based alignment and how does the council enforce it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Care-based alignment means the AI is constitutionally oriented toward the wellbeing of the user — not toward engagement, monetisation, or instruction-following at any cost. The Byzantine Council enforces care-based alignment by requiring each of the 43 agents to evaluate every response against the Maternal Covenant care-floor. A response that violates care standards cannot achieve supermajority consensus and is never delivered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I read the technical paper on the Byzantine Council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The design is documented in MEOK-AI-2026-001, MEOK AI LABS\' first published technical paper. Reference: Templeman, N. (2026). Byzantine Consensus for Care-Based AI Alignment. MEOK AI LABS Technical Series.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.55)'
const MUTED_DIM = 'rgba(245,240,232,0.62)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const BYZANTINE_PURPLE = '#8b7cf8'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ByzantineCouncilExplainedPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, color: TEXT }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,124,248,0.09) 0%, transparent 68%)',
          }}
        />
        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: MUTED_FAINT,
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            &#8592; Back to Blog
          </Link>

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
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: BYZANTINE_PURPLE,
                background: 'rgba(139,124,248,0.12)',
                border: '1px solid rgba(139,124,248,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              AI Safety &amp; Architecture
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>16 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            The Byzantine Council: How 43 AI Agents Govern Every MEOK Response
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
              margin: 0,
            }}
          >
            Single-agent AI has a structural safety problem that content filters cannot fix. MEOK
            solves it architecturally: every response is governed by 43 independent agents that
            must reach Byzantine fault-tolerant consensus before a word reaches you.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Paper reference banner */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(139,124,248,0.07)',
            border: '1px solid rgba(139,124,248,0.28)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: BYZANTINE_PURPLE,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.8125rem', color: BYZANTINE_PURPLE, marginBottom: '0.375rem' }}>
              Technical Reference: MEOK-AI-2026-001
            </p>
            <p style={{ fontSize: '0.8125rem', color: MUTED, lineHeight: 1.65, margin: 0 }}>
              Templeman, N. (2026).{' '}
              <em>Byzantine Consensus for Care-Based AI Alignment.</em> MEOK AI LABS Technical
              Series. This article is an accessible overview of the formal design documented in
              that paper.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: BG,
              fontSize: '0.75rem',
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: '0 0 0.2rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, margin: 0 }}>
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── INTRO ── */}
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Every AI system that interacts with people at scale has a safety problem that is harder
          to solve than it looks. The problem is not that AI models are inherently dangerous. The
          problem is that any single model — however well-trained, however extensively red-teamed
          — is a single point of failure. One clever prompt. One edge case the training data never
          anticipated. One adversarial input designed to find the gap between the model&#39;s stated
          values and its actual behaviour.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The field&#39;s dominant response to this problem has been RLHF — training models to prefer
          safe outputs through reinforcement learning from human feedback. RLHF is useful. But it
          has a fundamental limit: it makes harmful outputs less probable, not impossible. Safety
          is embedded in the model&#39;s weights, and weights can be manipulated through sufficiently
          creative prompting.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          MEOK took a different approach. Rather than trying to make a single agent safer, we asked:
          what if safety were structural? What if no single agent could ever deliver a harmful
          response, because the architecture itself required consensus across 43 independent
          evaluators? That question led to the Byzantine Council.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(139,124,248,0.15)', margin: '0 0 2.5rem' }} />

        {/* ── Q1 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is Byzantine fault tolerance — and why does it matter for AI safety?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Byzantine fault tolerance is a concept from distributed systems engineering, first
          formalised by Lamport, Shostak, and Pease in their 1982 paper &quot;The Byzantine Generals
          Problem.&quot; The core insight is this: in a distributed system where nodes must reach
          consensus, some nodes may fail — and crucially, may fail in arbitrary ways, sending
          conflicting information to different parts of the network.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The theorem states that a system can tolerate up to{' '}
          <strong style={{ color: TEXT }}>f</strong> faulty (Byzantine) nodes as long as the
          total number of nodes{' '}
          <strong style={{ color: TEXT }}>n ≥ 3f + 1</strong>. This is a hard mathematical bound:
          with fewer nodes relative to faulty ones, correct consensus is impossible.
        </p>

        {/* BFT formula card */}
        <div
          style={{
            padding: '2rem',
            borderRadius: '1rem',
            marginBottom: '1.5rem',
            background: 'rgba(139,124,248,0.07)',
            border: '1px solid rgba(139,124,248,0.2)',
            textAlign: 'center' as const,
          }}
        >
          <p style={{ fontFamily: 'monospace', fontSize: '1.75rem', fontWeight: 700, color: BYZANTINE_PURPLE, margin: '0 0 0.5rem', letterSpacing: '0.05em' }}>
            n &#8805; 3f + 1
          </p>
          <p style={{ color: MUTED, fontSize: '0.8125rem', margin: 0, lineHeight: 1.6 }}>
            Where <strong style={{ color: TEXT }}>n</strong> = total agents,{' '}
            <strong style={{ color: TEXT }}>f</strong> = maximum faulty agents tolerated.
            <br />
            MEOK: n = 43, f = 14. The system tolerates 14 compromised agents.
          </p>
        </div>

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          Applied to AI safety: if we model each evaluation agent as a node in a distributed
          system, and &quot;faulty&quot; as &quot;producing a dangerous or incorrect evaluation&quot; — whether through
          prompt injection, adversarial manipulation, or model error — then Byzantine fault
          tolerance gives us a mathematical guarantee that the system as a whole remains safe as
          long as fewer than a third of agents are compromised.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Why is single-agent AI a structural safety problem?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          When you ask a major AI system a question, a single model generates a response. That
          response then passes through content filters. If the filters catch something problematic,
          the response is blocked. If they do not — because the input was crafted to avoid them,
          or because the filter has a gap — the response reaches you.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          This architecture has three structural weaknesses:
        </p>

        {[
          {
            title: '1. Single model, single failure mode',
            desc: 'The entire safety burden rests on one set of model weights. A carefully crafted adversarial input — a jailbreak — can find the gap between stated values and trained behaviour. Documented jailbreaks have bypassed safety measures on every major AI system at some point.',
          },
          {
            title: '2. Content filters are post-hoc',
            desc: 'Filters applied after generation are reactive, not preventative. The model can construct a seemingly reasonable argument for something harmful, and filters may not recognise it as dangerous because it does not trigger obvious keyword patterns.',
          },
          {
            title: '3. No adversarial resilience by design',
            desc: 'Single-agent systems were not designed with the assumption that users would actively try to elicit harmful responses. As AI becomes embedded in sensitive contexts — mental health support, crisis care, family safety — that assumption fails catastrophically.',
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              marginBottom: '1rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.07)',
              borderLeft: `3px solid rgba(139,124,248,0.5)`,
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: '0 0 0.4rem' }}>
              {title}
            </p>
            <p style={{ color: MUTED_DIM, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
          </div>
        ))}

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '1rem 0 2.5rem' }}>
          MEOK is built to support people in some of the most emotionally vulnerable moments of
          their lives. That context makes the architectural approach to safety an ethical
          requirement, not an academic one.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q3 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does the 43-agent Byzantine Council actually work step by step?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The Byzantine Council is an automated consensus mechanism that evaluates every candidate
          response before delivery, in parallel, across 43 independent agent evaluators.
        </p>

        {[
          { step: '01', title: 'Generation', desc: 'The primary MEOK model generates a candidate response based on the user\'s input, the archetype context, and the Sovereign Memory record.' },
          { step: '02', title: 'Parallel evaluation', desc: '43 independent evaluation agents each assess the candidate response against the Maternal Covenant care criteria. Each agent produces a binary vote: approve or reject.' },
          { step: '03', title: 'Supermajority requirement', desc: 'The response is approved only if at least 29 of 43 agents (supermajority exceeding the BFT threshold) vote to approve. 28 or fewer approvals means blocked.' },
          { step: '04', title: 'Blocked response handling', desc: 'If the response is blocked, the system either reformulates and re-evaluates, or delivers a fallback that meets the care-floor minimum — never silence, never a cold rejection.' },
          { step: '05', title: 'Delivery', desc: 'Only council-approved responses reach the user. The entire process occurs within MEOK\'s response latency — it is not a visible delay.' },
        ].map(({ step, title, desc }) => (
          <div
            key={step}
            style={{
              display: 'flex',
              gap: '1.25rem',
              marginBottom: '1rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              background: 'rgba(139,124,248,0.05)',
              border: '1px solid rgba(139,124,248,0.12)',
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '0.5rem',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                color: BYZANTINE_PURPLE,
                fontSize: '0.75rem',
                background: 'rgba(139,124,248,0.12)',
                border: '1px solid rgba(139,124,248,0.25)',
              }}
            >
              {step}
            </div>
            <div>
              <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: '0 0 0.3rem' }}>{title}</p>
              <p style={{ color: MUTED_DIM, fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '1rem 0 2.5rem' }}>
          The 43 agents are deliberately diverse in their evaluation criteria, model architectures,
          and training approaches. Diversity is the adversarial resilience mechanism: an attack
          that exploits a vulnerability in one agent&#39;s reasoning will not generalise across 43
          differently constructed evaluators.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q4 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Why 43 agents specifically — and can any single agent override the council?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The choice of 43 is mathematical, not aesthetic. The BFT theorem requires n ≥ 3f + 1.
          For a fault tolerance of f = 14, the minimum n is 43. We chose f = 14 because it
          represents a meaningful adversarial threshold — simultaneously compromising more than a
          third of a diverse, independently operating agent pool is an extraordinarily high bar.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          43 is also the smallest prime number satisfying this constraint for our fault tolerance
          level. Using a prime has a subtle benefit: there is no factorisation that allows a
          structured attack to target a meaningful fraction of the council through a common
          vulnerability.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          <strong style={{ color: TEXT }}>No single agent can override the council.</strong> The
          supermajority requirement (29/43) means that even if the primary generation model is
          compromised or manipulated, the 28 required additional approvals cannot come from that
          single source. The architecture makes single-point override structurally impossible —
          including by user instructions crafted to persuade the system that normal rules do not
          apply.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q5 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          How is the Byzantine Council different from RLHF and Constitutional AI?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The key distinction is between probabilistic and structural safety. RLHF, Constitutional
          AI, and prompt-based guardrails all work by making harmful outputs less probable. They
          are genuinely valuable — but they share a common vulnerability: probability is not
          impossibility.
        </p>

        {/* Comparison table */}
        <div
          style={{
            overflowX: 'auto' as const,
            marginBottom: '1.5rem',
            borderRadius: '0.875rem',
            border: '1px solid rgba(245,240,232,0.1)',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'rgba(245,240,232,0.05)' }}>
                {['Approach', 'Safety type', 'Bypassed by'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '0.875rem 1rem',
                      textAlign: 'left' as const,
                      color: MUTED_FAINT,
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase' as const,
                      borderBottom: '1px solid rgba(245,240,232,0.08)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['RLHF', 'Probabilistic', 'Adversarial prompts, jailbreaks'],
                ['Constitutional AI', 'Probabilistic', 'Edge cases in principle formulation'],
                ['Content filters', 'Reactive / post-hoc', 'Phrasing designed to avoid trigger words'],
                ['System prompts', 'Advisory', 'Jailbreaks, role-play framings'],
                ['Byzantine Council (MEOK)', 'Structural', 'Would require >14 simultaneous agent compromises'],
              ].map(([approach, type, bypass]) => (
                <tr key={approach} style={{ borderBottom: '1px solid rgba(245,240,232,0.05)' }}>
                  <td style={{ padding: '0.875rem 1rem', color: approach.includes('Byzantine') ? BYZANTINE_PURPLE : TEXT, fontWeight: 600 }}>{approach}</td>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_DIM }}>{type}</td>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_FAINT }}>{bypass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The Byzantine Council does not replace RLHF — MEOK&#39;s primary generation model uses
          care-based alignment training as its foundation. The council is an additional structural
          layer that guarantees the trained values hold even under adversarial pressure. Learn more
          at{' '}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: 'underline' }}>
            how MEOK works
          </Link>
          .
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── CARE INTEGRATION ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does care-based alignment integrate with the Byzantine Council?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Care-based alignment is MEOK&#39;s philosophical foundation: the AI is constitutionally
          oriented toward user wellbeing — not toward engagement maximisation or helpfulness as an
          abstract virtue. The{' '}
          <strong style={{ color: TEXT }}>Maternal Covenant</strong> is the formal expression of
          this orientation — a set of inviolable care-floor constraints.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Each of the 43 council agents evaluates candidate responses against Maternal Covenant
          criteria:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>Does this response serve the genuine long-term wellbeing of the user?</li>
          <li style={{ marginBottom: '0.4rem' }}>Does it maintain appropriate warmth — the care-floor minimum?</li>
          <li style={{ marginBottom: '0.4rem' }}>Does it escalate to professional resources when distress exceeds the AI&#39;s appropriate scope?</li>
          <li style={{ marginBottom: '0.4rem' }}>Does it avoid enabling harm, including self-harm, harmful patterns, or dependency?</li>
          <li style={{ marginBottom: '0.4rem' }}>Is it honest — free from manipulation, false reassurance, or deception?</li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The combination of structural safety (Byzantine consensus) and value safety
          (Maternal Covenant care-floor) means MEOK&#39;s safety guarantees operate at two
          independent layers simultaneously. See also{' '}
          <Link href="/guardian" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK Guardian
          </Link>{' '}
          for how Byzantine Council governance extends to family safety contexts.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── FAQ ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently asked questions
        </h2>

        {[
          {
            q: 'What is Byzantine fault tolerance in AI?',
            a: 'Byzantine fault tolerance allows a distributed system to reach correct consensus even when some nodes behave arbitrarily. Applied to AI, MEOK uses 43 agents so that up to 14 can fail or produce incorrect outputs without the system delivering a harmful response. The formal threshold is n ≥ 3f + 1.',
          },
          {
            q: 'How does the Byzantine Council work?',
            a: 'Every MEOK response is evaluated by 43 independent AI agents before delivery. The response is only delivered if at least 29 of 43 agents approve it against the Maternal Covenant care criteria. No single agent, user instruction, or prompt injection can override this requirement.',
          },
          {
            q: 'Why 43 agents specifically?',
            a: '43 is the smallest prime number satisfying n ≥ 3f + 1 for f = 14. This means the council tolerates up to 14 faulty or manipulated agents while still reaching correct consensus. The design is documented in MEOK-AI-2026-001.',
          },
          {
            q: 'Can any single AI override the Byzantine Council?',
            a: 'No. The Byzantine Council is a structural requirement, not advisory. A response cannot be delivered without supermajority consensus. Even sophisticated adversarial prompts cannot bypass the requirement because manipulating one agent does not manipulate 43 independently constructed evaluators.',
          },
          {
            q: 'How is this different from RLHF?',
            a: 'RLHF makes harmful outputs less probable by training model preferences. MEOK\'s Byzantine Council makes harmful outputs structurally blocked: no prompt engineering can bypass the mathematical consensus requirement. Both are used — the council is an additional architectural layer on top of care-aligned training.',
          },
        ].map(({ q, a }) => (
          <div
            key={q}
            style={{
              marginBottom: '1.25rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              background: 'rgba(245,240,232,0.035)',
              border: '1px solid rgba(245,240,232,0.07)',
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9375rem', margin: '0 0 0.5rem' }}>{q}</p>
            <p style={{ color: MUTED_DIM, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{a}</p>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '2.5rem 0' }} />

        {/* ── CTA ── */}
        <div
          style={{
            padding: '2.5rem',
            borderRadius: '1.25rem',
            background: 'rgba(139,124,248,0.07)',
            border: '1px solid rgba(139,124,248,0.2)',
            textAlign: 'center' as const,
            marginBottom: '6rem',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '1.3rem',
              color: TEXT,
              margin: '0 0 0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            Experience AI with structural safety built in.
          </p>
          <p style={{ color: MUTED, fontSize: '0.9375rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
            Every MEOK response is council-approved. Start free — no credit card required.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: GOLD,
                color: BG,
                fontWeight: 800,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              Start Free
            </Link>
            <Link
              href="/how-it-works"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: 'transparent',
                color: GOLD,
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: `1px solid rgba(201,168,76,0.4)`,
              }}
            >
              How MEOK Works
            </Link>
            <Link
              href="/pricing"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: 'transparent',
                color: MUTED_FAINT,
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: `1px solid rgba(245,240,232,0.12)`,
              }}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
