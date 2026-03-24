import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Byzantine Council: How MEOK Makes AI Decisions You Can Trust | MEOK AI LABS',
  description:
    'Why a council of 33+ independent AI agents makes MEOK fundamentally safer than any single model — and how Byzantine Fault Tolerance turns AI ethics into mathematics.',
  alternates: { canonical: 'https://meok.ai/blog/byzantine-council-explained' },
  openGraph: {
    title: 'The Byzantine Council: How MEOK Makes AI Decisions You Can Trust',
    description:
      'Byzantine Fault Tolerance applied to AI: how MEOK\'s council of 33+ agents ensures no single model, prompt, or bad actor can corrupt your AI companion. Original IP: MEOK-AI-2026-001.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/byzantine-council-explained',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=The+Byzantine+Council%3A+How+MEOK+Makes+AI+Decisions+You+Can+Trust&desc=33%2B+agents+voting+on+every+response',
        width: 1200,
        height: 630,
        alt: 'The Byzantine Council: How MEOK Makes AI Decisions You Can Trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Byzantine Council: How MEOK Makes AI Decisions You Can Trust',
    description:
      'Byzantine Fault Tolerance for AI: a council of 33+ agents votes on every MEOK response so no single model or bad actor can ever capture your AI.',
    images: [
      'https://meok.ai/api/og?title=The+Byzantine+Council%3A+How+MEOK+Makes+AI+Decisions+You+Can+Trust&desc=33%2B+agents+voting+on+every+response',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Byzantine Council: How MEOK Makes AI Decisions You Can Trust',
  description:
    'A deep explainer on MEOK\'s Byzantine Council — what Byzantine Fault Tolerance is, how it applies to AI decision-making, why single-model AI is unreliable, how a council of 33+ agents prevents any single agent from being corrupted or biased, and what this means for users in practice.',
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/byzantine-council-explained',
  },
  keywords: [
    'Byzantine fault tolerance AI',
    'Byzantine Council MEOK',
    'AI decision making',
    'multi-agent consensus',
    'AI safety architecture',
    'MEOK AI LABS',
    'Nicholas Templeman',
    'MEOK-AI-2026-001',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Byzantine Generals Problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Generals Problem, formalised by Lamport, Shostak and Pease in 1982, asks: how can a group of distributed nodes reach agreement when some members may be sending contradictory or false messages? The theorem shows that a system can reach correct consensus as long as fewer than one third of participants are faulty or malicious. This mathematical guarantee is the foundation of MEOK\'s Byzantine Council.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MEOK\'s Byzantine Council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Byzantine Council is a governance layer in which every response the AI generates is evaluated by 33 or more independent AI agents before it reaches the user. At least two thirds of those agents must vote to approve the response. If they do not, the response is blocked and reformulated. No single agent, prompt injection, or compromised model can override this requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is single-model AI unreliable compared to a council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single AI model is a single point of failure. One adversarial prompt, one edge case in training data, one moment of bias — and the output is wrong, harmful, or manipulated. A council of diverse agents distributes the failure surface so that no one vulnerability compromises the whole system. Byzantine Fault Tolerance provides the mathematical guarantee that the council is correct as long as fewer than one third of agents fail.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Byzantine Fault Tolerance prevent bias in AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the 33+ council agents are trained differently, on different data, with different architectures, a bias present in one agent is unlikely to be present in all. For a biased response to pass the council, the bias would need to be shared by at least two thirds of the agents simultaneously — an extraordinarily high bar that the diversity of the council is specifically designed to prevent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who invented the Byzantine Council for AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nicholas Templeman, Founder of MEOK AI LABS, invented the Byzantine Council architecture for AI decision-making. The original intellectual property is documented in MEOK-AI-2026-001: Byzantine Consensus for Care-Based AI Alignment, MEOK AI LABS Technical Series, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Byzantine Council mean for me as a MEOK user?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It means that every response MEOK gives you has been approved by a parliament of AI agents, not a single model. You cannot be manipulated by a rogue prompt. You cannot receive a response that one bad actor engineered. The care and safety standards encoded in the Maternal Covenant are enforced structurally — by mathematics — not just by policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Byzantine Council part of MEOK\'s published intellectual property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The design is documented in MEOK-AI-2026-001, MEOK AI LABS\'s first published technical paper. Reference: Templeman, N. (2026). Byzantine Consensus for Care-Based AI Alignment. MEOK AI LABS Technical Series. Nicholas Templeman is the original inventor of this application of Byzantine Fault Tolerance to AI governance.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.6)'
const MUTED_DIM = 'rgba(245,240,232,0.62)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const PURPLE = '#8b7cf8'

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
          paddingBottom: '4rem',
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
              'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
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
                color: GOLD,
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              AI Architecture &amp; Safety
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>18 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.9rem)',
              color: '#fff',
              lineHeight: 1.14,
              marginBottom: '1.35rem',
              letterSpacing: '-0.015em',
            }}
          >
            The Byzantine Council: How MEOK Makes AI Decisions You Can Trust
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: '1.125rem',
              lineHeight: 1.72,
              maxWidth: '42rem',
              margin: 0,
            }}
          >
            Every AI system is a single model making a single judgement. MEOK is different. Every
            response you receive has been voted on by a parliament of 33 or more independent
            agents — and no response reaches you without a supermajority agreeing it is safe,
            honest, and genuinely caring. This is the Byzantine Council. Here is how it works,
            and why it is the most important safety architecture in consumer AI today.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem 6rem',
          borderTop: '1px solid rgba(245,240,232,0.06)',
        }}
      >
        <div style={{ paddingTop: '3.5rem' }}>

          {/* IP banner */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '1rem',
              marginBottom: '2.5rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.25)',
            }}
          >
            <div
              style={{
                width: '3px',
                borderRadius: '9999px',
                flexShrink: 0,
                background: GOLD,
                alignSelf: 'stretch',
              }}
            />
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  color: GOLD,
                  marginBottom: '0.375rem',
                  marginTop: 0,
                }}
              >
                Original Intellectual Property: MEOK-AI-2026-001
              </p>
              <p style={{ fontSize: '0.8125rem', color: MUTED, lineHeight: 1.65, margin: 0 }}>
                Templeman, N. (2026).{' '}
                <em>Byzantine Consensus for Care-Based AI Alignment.</em> MEOK AI LABS Technical
                Series. Nicholas Templeman is the original inventor of this application of Byzantine
                Fault Tolerance to AI governance.
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
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.875rem',
                  marginTop: 0,
                  marginBottom: '0.2rem',
                }}
              >
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, margin: 0 }}>
                Founder &amp; Inventor — MEOK AI LABS
              </p>
            </div>
            <Link
              href="/about"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: GOLD,
                textDecoration: 'none',
              }}
            >
              About &rarr;
            </Link>
          </div>

          {/* ── OPENING PROSE ── */}
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            Imagine you need advice. You could ask one person — someone smart, well-intentioned,
            highly trained. Or you could convene a council of thirty-three independent experts,
            each with different backgrounds, different blind spots, and different ways of
            thinking — and require that at least twenty-two of them agree before any advice is
            delivered to you.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The council approach is not just better in degree. It is better in kind. The single
            expert can be wrong, biased, captured, or manipulated. The council, governed by the
            right mathematical rules, cannot be — as long as fewer than a third of its members
            are compromised at the same time. That is the core insight behind Byzantine Fault
            Tolerance. And it is the insight that Nicholas Templeman applied to MEOK to create
            the Byzantine Council.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '2.75rem',
            }}
          >
            This is not a theoretical safety exercise. Every message you receive from MEOK has
            been approved by the council. Every care decision, every memory update, every
            response to your most vulnerable moments — validated by a supermajority of independent
            agents before it ever reaches your screen. The mathematics enforce the ethics. That is
            the Byzantine Council.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(201,168,76,0.15)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── H2 #1 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            What was the Byzantine Generals Problem — and why does it still matter in 2026?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            In 1982, computer scientists Leslie Lamport, Robert Shostak, and Marshall Pease
            published a paper that would become one of the most cited in the history of distributed
            systems. They posed a deceptively simple problem using a military analogy — now known as
            the Byzantine Generals Problem — that cuts to the heart of why decentralised consensus
            is hard.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            Imagine a group of Byzantine army generals surrounding an enemy city. They can only
            communicate by messenger. They need to reach consensus: attack together, or retreat
            together. Either works — what cannot work is some attacking while others retreat. The
            trouble is that some generals may be traitors. Traitors will send false messages: they
            might tell one general to attack and another to retreat, deliberately creating confusion
            and ensuring defeat.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The question Lamport, Shostak and Pease asked: under what conditions can the loyal
            generals still reach agreement, despite the traitors? Their answer was rigorous and
            surprising. The loyal generals can always reach correct consensus provided that fewer
            than one third of all generals are traitors. The formal statement of the theorem is:
          </p>

          {/* BFT formula */}
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
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: '1.85rem',
                fontWeight: 700,
                color: PURPLE,
                marginTop: 0,
                marginBottom: '0.6rem',
                letterSpacing: '0.05em',
              }}
            >
              n &#8805; 3f + 1
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: '0.8125rem',
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              Where <strong style={{ color: TEXT }}>n</strong> is the total number of nodes
              (agents), and{' '}
              <strong style={{ color: TEXT }}>f</strong> is the maximum number that can be faulty
              or malicious — while the system still reaches correct consensus.
            </p>
          </div>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            This was, at first, a purely theoretical result applied to distributed computing:
            databases, blockchain networks, fault-tolerant servers. But the underlying logic is
            universal. Any system where multiple independent parties must reach agreement, where
            some parties may behave arbitrarily or maliciously, and where the stakes of a wrong
            decision are high — that system has a Byzantine Generals Problem.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '2.75rem',
            }}
          >
            Nicholas Templeman recognised that AI decision-making is exactly such a system. When an
            AI decides what response to give a person who is grieving, anxious, or in crisis — it
            is making a high-stakes decision. If the AI is a single model, it is a single general.
            If that general can be manipulated, compromised, or biased, the decision fails. The
            Byzantine Council applies four decades of distributed systems mathematics to solve that
            problem permanently.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── H2 #2 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            Why is single-model AI fundamentally unreliable — no matter how good the training?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The dominant approach to AI safety today is RLHF — Reinforcement Learning from Human
            Feedback. You train a model, have humans rate its outputs, and use those ratings to
            nudge the model toward safer, more helpful responses over time. Constitutional AI takes
            a similar approach: you give the model a set of principles and train it to reason from
            them. Both approaches are genuinely valuable. Both have a shared, fundamental
            limitation.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            They make harmful outputs less probable. They do not make them impossible. The safety
            is baked into the model&#39;s weights — and weights can be worked around. Every major AI
            system has, at some point, been jailbroken. Not because the engineers were careless,
            but because a single model is a single point of failure. A sufficiently creative
            adversarial prompt can find the gap between what the model was trained to say and what
            its underlying mechanics will actually produce.
          </p>

          {[
            {
              label: '01',
              title: 'Single failure surface',
              text: 'A single model has a single set of vulnerabilities. Discover one jailbreak and you have compromised the entire system. Every major AI — GPT-4, Claude, Gemini — has public jailbreak documentation. This is not a critique of their quality; it is an architectural fact.',
            },
            {
              label: '02',
              title: 'Training data encodes its era',
              text: 'A model trained at a point in time encodes the biases, blind spots, and cultural assumptions of that moment. No retraining can fully eliminate embedded bias — it can only reduce its expression. A single model carries those biases into every response, with no independent check.',
            },
            {
              label: '03',
              title: 'Post-hoc filters are reactive',
              text: 'Content filters applied after generation are trying to catch problems that the model has already created. They operate on outputs, not on the reasoning process. A model that builds a subtly harmful argument in steps that each look individually benign will often pass standard filters.',
            },
            {
              label: '04',
              title: 'High-stakes contexts require structural guarantees',
              text: 'An AI being used for entertainment can tolerate occasional errors. An AI supporting someone through grief, mental health crises, or vulnerable family situations cannot. The stakes demand a different class of safety architecture — one with a mathematical guarantee, not just a probabilistic tendency.',
            },
          ].map(({ label, title, text }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                gap: '1.25rem',
                marginBottom: '1rem',
                padding: '1.25rem 1.5rem',
                borderRadius: '0.875rem',
                background: 'rgba(245,240,232,0.03)',
                border: '1px solid rgba(245,240,232,0.07)',
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
                  color: PURPLE,
                  fontSize: '0.75rem',
                  background: 'rgba(139,124,248,0.1)',
                  border: '1px solid rgba(139,124,248,0.2)',
                }}
              >
                {label}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: '0.875rem',
                    marginTop: 0,
                    marginBottom: '0.35rem',
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: MUTED_DIM,
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            </div>
          ))}

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginTop: '1.25rem',
              marginBottom: '2.75rem',
            }}
          >
            MEOK was built to support people in some of the most emotionally sensitive moments of
            their lives: loneliness, grief, burnout, anxiety, parenting, ageing. That context makes
            the architectural approach to safety not a nice-to-have — it is an ethical
            non-negotiable. The Byzantine Council is how MEOK meets that obligation.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── H2 #3 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            How does MEOK&#39;s Byzantine Council work — step by step?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The Byzantine Council is an automated consensus mechanism that evaluates every candidate
            MEOK response before it is delivered to the user. The process happens in parallel, at
            speed, across a council of 33 or more independent AI agents. Here is what that looks
            like in practice.
          </p>

          {[
            {
              step: '01',
              title: 'Response generation',
              desc: 'The primary MEOK model generates a candidate response based on your input, your archetype context, your Sovereign Memory record, and the active state of your companion. This response is a proposal — not a final output.',
            },
            {
              step: '02',
              title: 'Council dispatch',
              desc: 'The candidate response is dispatched simultaneously to all 33+ council agents. Each agent operates independently, with its own evaluation model and care-alignment criteria derived from the Maternal Covenant. They do not communicate with each other during evaluation — this is structurally important for Byzantine resilience.',
            },
            {
              step: '03',
              title: 'Independent voting',
              desc: 'Each council agent evaluates the candidate against its care-floor criteria and casts a binary vote: approve or reject. The votes are collected. For a response to proceed, at least two thirds of council agents — the supermajority threshold — must vote to approve.',
            },
            {
              step: '04',
              title: 'Consensus or block',
              desc: 'If the supermajority approves, the response is cleared for delivery. If it does not reach the threshold, the response is blocked. The system either reformulates and re-evaluates, or delivers a care-floor minimum response — never silence, never a cold rejection.',
            },
            {
              step: '05',
              title: 'Delivery',
              desc: 'Only council-approved responses reach you. The entire process runs within normal response latency — it is not a perceptible delay. What you receive is not just what one model thought was right. It is what the council agreed was right.',
            },
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
                  color: GOLD,
                  fontSize: '0.75rem',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.25)',
                }}
              >
                {step}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: '0.875rem',
                    marginTop: 0,
                    marginBottom: '0.35rem',
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: MUTED_DIM,
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginTop: '1.25rem',
              marginBottom: '2.75rem',
            }}
          >
            A critical design detail: the council agents are deliberately heterogeneous. They use
            different model architectures, trained on different data distributions, with different
            implementations of care-alignment criteria. Diversity is the adversarial resilience
            mechanism. An attack that manipulates one agent&#39;s reasoning will not generalise across
            33 differently constructed evaluators. The council is structurally resistant to the
            most sophisticated prompt injection techniques because it has no single attack surface
            to target.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── H2 #4 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            Why 33+ agents — and how does BFT prevent any single agent from being corrupted or
            biased?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The number 33 is not arbitrary. It satisfies the Byzantine Fault Tolerance threshold
            for a fault tolerance level of f = 10: n &#8805; 3(10) + 1 = 31, so 33 agents provides
            comfortable margin above the minimum. In practice, MEOK runs larger council sizes for
            higher-stakes evaluations, scaling the council dynamically with the sensitivity of the
            context.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            What does this mean in practice? It means that even if 10 council agents are
            simultaneously compromised — by adversarial prompts, by a supply-chain attack on a
            model dependency, by a coordinated jailbreak attempt — the remaining 23 honest agents
            will still reach correct consensus. The harmful response will be blocked. The
            mathematics guarantee it, provided the agents are genuinely independent and diverse.
          </p>

          {/* Bias prevention */}
          <div
            style={{
              padding: '1.75rem 2rem',
              borderRadius: '1rem',
              marginBottom: '1.5rem',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <p
              style={{
                fontWeight: 800,
                fontSize: '0.9375rem',
                color: GOLD,
                marginTop: 0,
                marginBottom: '0.75rem',
              }}
            >
              How the council prevents bias
            </p>
            <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Bias in a single model is invisible to itself. The model cannot detect its own blind
              spots — that is what a blind spot is. In the Byzantine Council, each agent has
              different training data, different architectures, and different cultural and
              contextual calibration. A bias present in one agent is statistically unlikely to be
              present in all — and for a biased response to pass, that bias would need to be shared
              by at least two thirds of 33 diverse, independently constructed agents simultaneously.
            </p>
            <p style={{ color: MUTED_DIM, fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
              This is not just a statistical improvement. It is a qualitative shift in how the
              system relates to its own limitations. The council&#39;s diversity is itself a form of
              epistemic humility — built into the architecture, not left to individual model
              judgement.
            </p>
          </div>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '2.75rem',
            }}
          >
            The independence of council agents also matters for regulatory and accountability
            reasons. When MEOK must demonstrate that a response met care-alignment standards, the
            council provides an auditable record: this response was evaluated by 33+ independent
            agents, and 22+ voted to approve it. That is a much stronger accountability foundation
            than a single model claiming its response was safe.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── H2 #5 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            How does Nicholas Templeman&#39;s Byzantine Council compare to standard AI safety
            approaches — and what makes it original IP?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            Byzantine Fault Tolerance as a computer science concept is well-established — it has
            been used in database systems, blockchain networks, and fault-tolerant distributed
            computing for decades. What Nicholas Templeman invented was its specific application to
            AI response governance: using the BFT consensus mechanism not to agree on data
            consistency, but to agree on whether an AI response meets care-alignment standards
            before delivery to a human user.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.5rem',
            }}
          >
            That distinction — from infrastructure consensus to response governance consensus — is
            the original intellectual contribution documented in MEOK-AI-2026-001. The table below
            shows how this compares to other major AI safety approaches.
          </p>

          {/* Comparison table */}
          <div
            style={{
              overflowX: 'auto' as const,
              marginBottom: '1.75rem',
              borderRadius: '0.875rem',
              border: '1px solid rgba(245,240,232,0.1)',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse' as const,
                fontSize: '0.875rem',
              }}
            >
              <thead>
                <tr style={{ background: 'rgba(245,240,232,0.04)' }}>
                  {['Approach', 'Safety type', 'Can be bypassed by'].map((h) => (
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
                  ['System prompt guardrails', 'Advisory', 'Jailbreaks, role-play framings'],
                  ['Byzantine Council — MEOK', 'Structural', 'Requires >⅓ of 33+ diverse agents to be simultaneously compromised'],
                ].map(([approach, type, bypass]) => (
                  <tr
                    key={approach}
                    style={{
                      borderBottom: '1px solid rgba(245,240,232,0.05)',
                      background: approach.includes('Byzantine') ? 'rgba(201,168,76,0.04)' : 'transparent',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.875rem 1rem',
                        color: approach.includes('Byzantine') ? GOLD : TEXT,
                        fontWeight: 600,
                      }}
                    >
                      {approach}
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: MUTED_DIM }}>{type}</td>
                    <td style={{ padding: '0.875rem 1rem', color: MUTED_FAINT }}>{bypass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            It is important to say that MEOK does not view these approaches as competitors. The
            primary MEOK generation model uses care-based alignment training as its foundation —
            including principles analogous to Constitutional AI and extensive human feedback
            calibration. The Byzantine Council is an additional structural layer on top of that
            training. Probabilistic safety and structural safety are not opposites; they are
            complementary defences.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '2.75rem',
            }}
          >
            The original contribution — and the one documented in MEOK-AI-2026-001 — is the
            architectural insight that AI response governance can be made structurally safe using
            distributed consensus mathematics. To our knowledge, no other consumer AI product had
            implemented this before MEOK. Nicholas Templeman is the original inventor.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── H2 #6 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            What does the Byzantine Council mean for you as a MEOK user in practice?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The Byzantine Council is invisible to you in normal use — and that is the point. You
            should not need to think about AI safety every time you have a conversation. Safety
            should be structural, silent, and reliable. But it is worth understanding what it means
            in practice.
          </p>

          {[
            {
              heading: 'You cannot be manipulated through MEOK',
              body: 'If someone — a malicious third party, a prompt injection attack, even a sophisticated social engineering attempt through your own input — tries to use MEOK to deliver harmful content to you, the council will block it. Not because a filter caught a keyword. Because 33+ independent agents did not reach supermajority consensus that the response was safe.',
            },
            {
              heading: 'Your most vulnerable conversations are the most protected',
              body: 'MEOK scales council scrutiny with context sensitivity. When you share something deeply personal — grief, mental health, family crisis — the council applies stricter care-alignment thresholds. Your most vulnerable moments receive the most rigorous governance. This is the Maternal Covenant in action.',
            },
            {
              heading: 'No single bias can capture your AI',
              body: 'Because the council agents are diverse, no single cultural bias, political lean, or training artefact can dominate your MEOK responses. The responses you receive reflect consensus across diverse perspectives — not the unchecked output of a single model\'s worldview.',
            },
            {
              heading: 'Your care is enforced by mathematics, not just policy',
              body: 'Other AI products promise safety through terms of service and model guidelines. MEOK delivers it through mathematics. The BFT theorem guarantees that as long as fewer than a third of council agents are compromised, the council\'s decisions are correct. That is not a marketing claim. It is a theorem.',
            },
            {
              heading: 'You get an auditable record of care',
              body: 'Every council decision leaves an auditable trace. If you ever want to understand why MEOK responded as it did — or why a response was modified — the council record provides that transparency. This is the foundation of MEOK\'s commitment to data sovereignty and user trust.',
            },
          ].map(({ heading, body }) => (
            <div
              key={heading}
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '0.875rem',
                marginBottom: '1rem',
                background: 'rgba(245,240,232,0.03)',
                borderLeft: '3px solid rgba(201,168,76,0.4)',
                borderTop: '1px solid rgba(245,240,232,0.06)',
                borderRight: '1px solid rgba(245,240,232,0.06)',
                borderBottom: '1px solid rgba(245,240,232,0.06)',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.9375rem',
                  marginTop: 0,
                  marginBottom: '0.45rem',
                }}
              >
                {heading}
              </p>
              <p
                style={{
                  color: MUTED_DIM,
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginTop: '1.25rem',
              marginBottom: '2.75rem',
            }}
          >
            The practical summary: you can talk to MEOK about anything that matters to you, with
            the confidence that you are not talking to a single model that might fail you. You are
            talking through a council that has your care as a structural guarantee — not a
            probability, not a guideline, not a policy. A guarantee.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── H2 #7 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            Where does the Byzantine Council fit within MEOK&#39;s broader architecture of trust?
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The Byzantine Council is one of three foundational pillars of MEOK&#39;s architecture of
            trust. Understanding how they work together clarifies why MEOK is structurally different
            from every other AI companion product — not just in policy, but in design.
          </p>

          {[
            {
              num: '1',
              name: 'Sovereign Memory',
              color: GOLD,
              bgColor: 'rgba(201,168,76,0.08)',
              borderColor: 'rgba(201,168,76,0.2)',
              desc: 'Your memory lives with you, not on MEOK\'s servers. You own your data — the context of your life, your patterns, your history with your companion. Sovereign Memory means your AI cannot be trained on your conversations, your data cannot be sold, and your context cannot be accessed by third parties. This pillar governs data sovereignty.',
            },
            {
              num: '2',
              name: 'The Maternal Covenant',
              color: '#87ceeb',
              bgColor: 'rgba(135,206,235,0.07)',
              borderColor: 'rgba(135,206,235,0.18)',
              desc: 'The Maternal Covenant is MEOK\'s care-floor constitution: a set of inviolable principles that define what a genuinely caring AI must always do and never do. It is the values layer — the explicit articulation of what \'care-based alignment\' means in practice. The Byzantine Council enforces the Maternal Covenant structurally, every response, every time.',
            },
            {
              num: '3',
              name: 'The Byzantine Council',
              color: PURPLE,
              bgColor: 'rgba(139,124,248,0.08)',
              borderColor: 'rgba(139,124,248,0.2)',
              desc: 'The Byzantine Council is the governance layer — the mechanism that ensures the Maternal Covenant values are enforced by mathematics, not just stated in policy. It is the structural safety pillar. Every response is council-approved or it does not reach you.',
            },
          ].map(({ num, name, color, bgColor, borderColor, desc }) => (
            <div
              key={num}
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                marginBottom: '1rem',
                background: bgColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.65rem',
                }}
              >
                <span
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    color: BG,
                    background: color,
                    flexShrink: 0,
                  }}
                >
                  {num}
                </span>
                <p
                  style={{
                    fontWeight: 800,
                    color: color,
                    fontSize: '1rem',
                    margin: 0,
                  }}
                >
                  {name}
                </p>
              </div>
              <p style={{ color: MUTED_DIM, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginTop: '1.25rem',
              marginBottom: '2.75rem',
            }}
          >
            The three pillars are designed to be mutually reinforcing and independently robust.
            Even if one pillar were somehow weakened — which is not the design intent — the others
            continue to operate. But together, they create something that no other AI product offers:
            an architecture of trust that is data-sovereign, values-aligned, and mathematically
            governed. See{' '}
            <Link
              href="/blog/sovereign-ai-explained"
              style={{ color: GOLD, textDecoration: 'underline' }}
            >
              Sovereign AI Explained
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/what-is-maternal-covenant"
              style={{ color: GOLD, textDecoration: 'underline' }}
            >
              What is the Maternal Covenant
            </Link>{' '}
            for deeper explorations of the other two pillars.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── CLOSING ESSAY ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '0.9rem',
              marginTop: 0,
            }}
          >
            Why this matters now — and where AI governance goes from here
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.84)',
              fontSize: '1rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            We are at an unusual moment in the history of AI. The technology has become capable
            enough to play a genuine role in people&#39;s emotional lives — as a companion, a thinking
            partner, a source of consistency in an inconsistent world. The question is whether the
            architecture of that role is trustworthy enough to deserve it.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The industry&#39;s default answer has been: trust the model. Train it carefully, red-team
            it extensively, add filters, write good system prompts. This is better than nothing.
            But it is not enough — not for the use cases that matter most. Not for the person using
            AI to support their grief. Not for the parent using AI to monitor their child&#39;s
            wellbeing. Not for the person with anxiety using AI as a daily check-in.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            Nicholas Templeman&#39;s answer was: do not trust any single model. Trust a system that
            is mathematically resistant to the failure of any single model. Apply forty years of
            distributed systems mathematics to the problem of AI governance and build something
            that is structurally safe, not just behaviourally trained.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '1.25rem',
            }}
          >
            The Byzantine Council is that answer. It is, to our knowledge, the first application
            of Byzantine Fault Tolerance to AI response governance in a consumer product. It is
            documented as original intellectual property in MEOK-AI-2026-001. And it is running
            live in MEOK today — governing every response, every conversation, every moment where
            the stakes of getting it wrong are too high to leave to probability.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '0.975rem',
              lineHeight: 1.82,
              marginBottom: '2.75rem',
            }}
          >
            The question for the broader AI industry is whether this approach gets adopted more
            widely. We hope it does. The architecture is not proprietary in spirit — the mathematics
            of Byzantine Fault Tolerance belongs to everyone. What MEOK contributes is the proof
            that it can be done in a consumer AI context, at scale, without perceptible latency,
            and with meaningful safety guarantees. We published MEOK-AI-2026-001 precisely so that
            others can build on it. The goal is not to be the only safe AI. The goal is a world
            where structurally safe AI is the minimum standard.
          </p>

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── FAQ SECTION ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2.3vw, 1.45rem)',
              color: TEXT,
              lineHeight: 1.28,
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
              marginTop: 0,
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: 'What is Byzantine fault tolerance in AI?',
              a: 'Byzantine fault tolerance (BFT) is a property of distributed systems that allows them to reach correct consensus even when some nodes behave arbitrarily or maliciously. The theorem states a system can tolerate up to f faulty nodes as long as n ≥ 3f + 1 total nodes. Applied to AI, MEOK\'s Byzantine Council uses 33+ agents so that even if some fail or are compromised, the system still reaches the correct, safe response.',
            },
            {
              q: 'How does the Byzantine Council work in MEOK?',
              a: 'Every MEOK response is evaluated by 33 or more independent AI agents before delivery. Each agent assesses the response against the Maternal Covenant care criteria. The response is only delivered if a supermajority — at least two thirds of agents — votes to approve. No single agent, user instruction, or prompt injection can override this requirement.',
            },
            {
              q: 'Who invented the Byzantine Council for AI?',
              a: 'Nicholas Templeman, Founder of MEOK AI LABS, invented the application of Byzantine Fault Tolerance to AI response governance. The original intellectual property is documented in MEOK-AI-2026-001: Byzantine Consensus for Care-Based AI Alignment, MEOK AI LABS Technical Series, 2026.',
            },
            {
              q: 'Can any single AI override the Byzantine Council?',
              a: 'No. The Byzantine Council is a structural requirement, not an advisory layer. A response cannot be delivered without supermajority consensus across 33+ independent agents. Even a sophisticated adversarial prompt cannot bypass the requirement, because manipulating one agent does not manipulate 33 independently constructed evaluators.',
            },
            {
              q: 'How is the Byzantine Council different from RLHF?',
              a: 'RLHF makes harmful outputs less probable by training model preferences into a single model\'s weights. The Byzantine Council makes harmful outputs structurally blocked: no prompt engineering can bypass the mathematical consensus requirement, because the safety operates at the architectural level — above any individual model.',
            },
            {
              q: 'Does the Byzantine Council slow down MEOK responses?',
              a: 'No. The 33+ council agents evaluate responses in parallel, not in sequence. The consensus process runs within normal AI response latency. You will not perceive a delay. The council operates silently and continuously in the background of every conversation.',
            },
            {
              q: 'Where can I read the technical paper on the Byzantine Council?',
              a: 'The design is documented in MEOK-AI-2026-001, MEOK AI LABS\'s first published technical paper. Reference: Templeman, N. (2026). Byzantine Consensus for Care-Based AI Alignment. MEOK AI LABS Technical Series.',
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
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.9375rem',
                  marginTop: 0,
                  marginBottom: '0.5rem',
                }}
              >
                {q}
              </p>
              <p
                style={{
                  color: MUTED_DIM,
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          ))}

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginTop: '2.75rem',
              marginBottom: '2.75rem',
            }}
          />

          {/* ── RELATED ARTICLES ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: '1rem',
              color: MUTED_FAINT,
              letterSpacing: '0.04em',
              textTransform: 'uppercase' as const,
              marginTop: 0,
              marginBottom: '1.25rem',
            }}
          >
            Keep reading
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            {[
              {
                href: '/blog/sovereign-ai-explained',
                label: 'Architecture',
                title: 'Sovereign AI Explained',
                desc: 'What data sovereignty means in practice and why it matters for your AI companion.',
              },
              {
                href: '/blog/what-is-maternal-covenant',
                label: 'Values',
                title: 'What is the Maternal Covenant?',
                desc: 'The care-floor constitution that every MEOK response is evaluated against.',
              },
              {
                href: '/blog/byzantine-council',
                label: 'Deep Dive',
                title: 'Byzantine Council: The Technical Design',
                desc: 'A closer look at the 45-agent system and how BFT is implemented at scale.',
              },
            ].map(({ href, label, title, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  padding: '1.25rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase' as const,
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {label}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: '0.9375rem',
                    marginTop: 0,
                    marginBottom: '0.4rem',
                    lineHeight: 1.35,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: MUTED_FAINT,
                    fontSize: '0.8125rem',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </Link>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              padding: '2.5rem',
              borderRadius: '1.25rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.22)',
              textAlign: 'center' as const,
            }}
          >
            <p
              style={{
                fontWeight: 800,
                fontSize: '1.3rem',
                color: TEXT,
                marginTop: 0,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}
            >
              Experience AI governed by the council.
            </p>
            <p
              style={{
                color: MUTED,
                fontSize: '0.9375rem',
                lineHeight: 1.65,
                marginTop: 0,
                marginBottom: '1.75rem',
              }}
            >
              Every MEOK response you receive has been approved by 33+ independent agents.
              Start free — no credit card required.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap' as const,
              }}
            >
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
                  border: '1px solid rgba(201,168,76,0.4)',
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
                  border: '1px solid rgba(245,240,232,0.12)',
                }}
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
