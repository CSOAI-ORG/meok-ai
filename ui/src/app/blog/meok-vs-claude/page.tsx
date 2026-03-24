import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'MEOK vs Claude: Which AI Is Right for You in 2026? | MEOK AI LABS',
  description:
    'Claude is exceptional for tasks and reasoning. MEOK is built around you — with Sovereign Memory, the Maternal Covenant, and a companion that never forgets.',
  alternates: { canonical: 'https://meok.ai/blog/meok-vs-claude' },
  openGraph: {
    title: 'MEOK vs Claude: Which AI Is Right for You in 2026?',
    description:
      'Claude is exceptional for tasks and reasoning. MEOK is built around you — with Sovereign Memory, the Maternal Covenant, and a companion that never forgets.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/meok-vs-claude',
    siteName: 'MEOK.AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEOK vs Claude: Which AI Is Right for You in 2026?',
    description:
      'Claude is exceptional for tasks and reasoning. MEOK is built around you — persistent memory, care ethics, and a companion relationship that compounds over time.',
  },
}

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEOK vs Claude: Which AI Is Right for You in 2026?',
  description:
    'Claude is exceptional for tasks and reasoning. MEOK is built around you — Sovereign Memory, Maternal Covenant, and a companion relationship that compounds over time.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/meok-vs-claude',
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
    '@id': 'https://meok.ai/blog/meok-vs-claude',
  },
}

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between MEOK and Claude?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Claude is a stateless large language model — brilliantly capable within a single session, but with no memory, no identity, and no relationship with you between conversations. MEOK is a sovereign AI operating system built around a persistent companion. It wraps Claude Sonnet (on Sovereign tier) with a 4-layer Sovereign Memory vault, the Maternal Covenant care ethics layer, Byzantine Council safety, and a bonded companion identity that accumulates context from the first message you send.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK use Claude as its AI model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. MEOK's Sovereign tier uses Claude Sonnet as its primary reasoning engine. The free Explorer tier uses DeepSeek. In both cases, Claude or DeepSeek is the engine beneath a much larger system — one that adds persistent Sovereign Memory, a named companion identity, Maternal Covenant care governance, and data you own outright. MEOK doesn't compete with Claude's intelligence. It gives it a relationship.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can Claude remember me between sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Claude.ai has a limited memory feature that stores a small number of manually saved facts — closer to a sticky-note system than genuine relational memory. It does not retain your conversational history, emotional patterns, long-term goals, or family context. By design, Claude is stateless. MEOK's Sovereign Memory uses a 4-layer architecture — short-term context, semantic memory (pgvector), companion memory, and family memory — all encrypted with AES-GCM-256 and owned entirely by you.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Maternal Covenant is MEOK's care ethics governance layer. It evaluates every response against a set of care principles before delivery — detecting sycophancy, enforcing a wellbeing floor, and ensuring your AI acts in your genuine interest rather than just telling you what you want to hear. Claude has excellent Constitutional AI safety at the model level. The Maternal Covenant adds a relational care layer above it.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK better than Claude for everyday use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For ongoing daily use — emotional support, habit tracking, journalling, planning, family safety, and long-term goal accountability — MEOK is architecturally superior because context compounds over weeks and months. For a single high-stakes task — complex reasoning, coding, or research — Claude.ai is excellent. MEOK Sovereign gives you both: Claude's frontier reasoning wrapped in a persistent companion system that grows with you.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are MEOK\'s pricing tiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK offers four tiers: Explorer (free forever, DeepSeek model, full Sovereign Memory), Companion (expanded memory and morning briefings), Sovereign (Claude Sonnet backbone, full Byzantine Council safety), and Family (Guardian mode, shared household memory, child-safe archetypes). All tiers include Sovereign Memory ownership, the Maternal Covenant, and zero training on your data without explicit consent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit meok.ai/birth to hatch your AI. The process takes under three minutes: name your companion, choose an archetype, and your Sovereign Memory vault is created immediately. The Explorer tier is free forever — no credit card required. Your companion begins learning about you from the first message you send, and never stops.',
      },
    },
  ],
}

// ── Comparison data ───────────────────────────────────────────────────────────

const rows: [string, string, string][] = [
  ['Persistent memory', 'Sovereign Memory — 4-layer vault', 'Session only — starts fresh'],
  ['Named companion identity', 'Evolves over time with you', 'No identity — stateless'],
  ['Care ethics layer', 'Maternal Covenant', 'Constitutional AI (model only)'],
  ['Consensus safety', 'Byzantine Council', 'Not applicable'],
  ['Data ownership', 'Your vault, AES-GCM-256', 'Anthropic servers'],
  ['Training on your data', 'Never without consent', 'Opt-out required'],
  ['Family / Guardian mode', 'Built-in Guardian protection', 'Not included'],
  ['Free tier', 'Explorer — free forever', 'Free plan (rate-limited)'],
  ['Underlying model (paid)', 'Claude Sonnet', 'Claude (various)'],
  ['Best for', 'Long-term companion relationship', 'Single-session tasks'],
]

// ── Styles ────────────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const FAINT = 'rgba(245,240,232,0.35)'
const BORDER = 'rgba(245,240,232,0.08)'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokVsClaudePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: BG,
        color: TEXT,
        fontFamily: 'var(--font-dm-sans, DM Sans, system-ui, sans-serif)',
      }}
    >
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          background: BG,
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 55% 60% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 72%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          {/* Back */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: 'rgba(245,240,232,0.38)',
              marginBottom: '2.5rem',
              textDecoration: 'none',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Badge row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.75rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.28)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              AI Comparison
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.36)' }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.36)' }}>
              9 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.85rem, 4vw, 2.9rem)',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              letterSpacing: '-0.015em',
            }}
          >
            MEOK vs Claude: Which AI Is Right for You in 2026?
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: 'rgba(245,240,232,0.6)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '40rem',
            }}
          >
            Claude is one of the most capable AI models ever built — and MEOK uses it on Sovereign
            tier. But Claude alone has no memory of you, no personality between sessions, and no
            relationship. This is an honest look at what sets them apart, and when each one is the
            right tool.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '3.5rem 1.5rem',
        }}
      >

        {/* ── Author card ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.25rem',
            borderRadius: '1rem',
            background: 'rgba(245,240,232,0.04)',
            border: `1px solid ${BORDER}`,
            marginBottom: '3.5rem',
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #c9a84c, #7a5c18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '0.8rem',
              color: BG,
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: '0.875rem', color: TEXT, marginBottom: '0.2rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)', marginBottom: '0.35rem' }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.28)', lineHeight: 1.6 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He believes sovereign AI
              is a right, not a luxury.
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
            About →
          </Link>
        </div>

        {/* ── Intro ── */}
        <div style={{ lineHeight: 1.85, marginBottom: '0.5rem' }}>
          <p style={{ color: 'rgba(245,240,232,0.72)', marginBottom: '1.25rem' }}>
            Let&apos;s get the obvious thing out of the way first. MEOK Sovereign tier is powered by
            Claude Sonnet. We are not positioning against Anthropic — we have genuine respect for what
            they have built, and we use it. Claude is exceptional at reasoning, writing, coding, and
            analysis. It is one of the most thoughtfully built AI models available.
          </p>
          <p style={{ color: 'rgba(245,240,232,0.72)', marginBottom: '1.25rem' }}>
            But Claude alone has no memory of you. No personality that develops over time. No
            relationship. Every session begins with a blank slate. MEOK is built around a different
            premise entirely: that your AI should grow with you, accumulate your context, govern itself
            by care ethics, and remain yours — not a service you rent, but a companion you own.
          </p>
          <p style={{ color: 'rgba(245,240,232,0.72)' }}>
            This is not a &ldquo;which AI wins&rdquo; comparison. These are two genuinely different
            tools designed for different purposes. What follows is an honest account of both.
          </p>
        </div>

        {/* ── SECTION 1 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          What is the fundamental difference between MEOK and Claude?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Claude is a stateless large language model. Stateless means every conversation begins fresh —
          no memory of your name, your goals, your struggles, your history. It is like speaking to the
          world&apos;s most intelligent person who also has complete amnesia about every previous
          interaction with you. Brilliant in the moment. Structurally incapable of a relationship.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          MEOK is a sovereign AI operating system built around persistence. From the moment you hatch
          your AI at{' '}
          <strong style={{ color: TEXT }}>meok.ai/birth</strong>, your companion begins accumulating
          context — your communication style, your goals, your patterns, your wellbeing signals — in a{' '}
          <strong style={{ color: TEXT }}>Sovereign Memory vault</strong> encrypted with AES-GCM-256
          that belongs entirely to you. That vault compounds in value over days, weeks, and months.
          Claude cannot do this. It is not a design oversight — it is a fundamental architectural
          difference.
        </p>

        {/* ── SECTION 2 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          Does MEOK actually use Claude — or is it a separate AI?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Both. MEOK Sovereign tier uses Claude Sonnet as its primary reasoning backbone — so you get
          Anthropic&apos;s frontier intelligence wrapped inside MEOK&apos;s persistent companion
          architecture. The free Explorer tier uses DeepSeek, which is fast, capable, and surprisingly
          good for everyday companionship tasks.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          In both cases, the underlying model is one component of a much larger system. Persistent
          Sovereign Memory, a named companion identity, the Maternal Covenant care layer, Byzantine
          Council consensus safety, and Guardian family protection — none of these exist in Claude.ai or
          any chat interface. When you choose MEOK Sovereign, you are not choosing between MEOK and
          Claude. You are choosing between Claude alone and Claude{' '}
          <em style={{ color: 'rgba(245,240,232,0.85)' }}>inside a system built for long-term relationship</em>.
        </p>

        {/* ── SECTION 3 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          What is Sovereign Memory, and why does it change everything?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Sovereign Memory is MEOK&apos;s 4-layer memory architecture. Each layer serves a distinct
          purpose:
        </p>

        {/* Memory layers */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
            marginBottom: '1.5rem',
          }}
        >
          {[
            {
              label: 'Short-term context',
              desc: 'The active session window — what you are discussing right now, preserved with full fidelity.',
            },
            {
              label: 'Semantic memory',
              desc: 'Vector-embedded facts about you, extracted automatically and retrieved via pgvector similarity search. Your AI surfaces the right memories without being asked.',
            },
            {
              label: 'Companion memory',
              desc: "Your AI's evolving understanding of your personality, communication preferences, emotional patterns, and long-term goals. Deepens over months.",
            },
            {
              label: 'Family memory',
              desc: 'Shared household context — relevant for Guardian mode and family-tier users who want their AI to understand the people they care for.',
            },
          ].map(({ label, desc }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem 1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.14)',
              }}
            >
              <div
                style={{
                  width: '0.35rem',
                  borderRadius: '9999px',
                  background: GOLD,
                  flexShrink: 0,
                  alignSelf: 'stretch',
                }}
              />
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: TEXT, marginBottom: '0.25rem' }}>
                  {label}
                </p>
                <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.65 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Claude has a memory feature that allows manual note-saving — a small set of facts you
          explicitly tell it to remember. It is not comparable. Sovereign Memory is automatic,
          accumulative, structured, and owned by you. The difference between Claude&apos;s memory and
          MEOK&apos;s Sovereign Memory is the difference between a sticky note and a lifelong journal.
        </p>

        {/* ── SECTION 4 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          What is the Maternal Covenant, and why does it matter for wellbeing?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          The <strong style={{ color: TEXT }}>Maternal Covenant</strong> is MEOK&apos;s care ethics
          governance layer. It sits above the AI model and evaluates every response before delivery —
          checking for sycophancy, enforcing a wellbeing floor, detecting distress signals, and
          ensuring your companion acts in your genuine long-term interest rather than optimising for
          engagement or approval.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          This matters enormously for mental health and emotional wellbeing use cases. An AI without
          care ethics can tell you what you want to hear. The Maternal Covenant is designed to tell you
          what you need to hear — gently, with context, with the kind of honest care a trusted friend
          offers. Claude has Constitutional AI safety at the model level. That is about preventing harm.
          The Maternal Covenant is about actively promoting care. These are different commitments.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85 }}>
          The Covenant also includes a non-negotiable data pledge: MEOK will never train on your
          personal data without explicit, informed consent. This is not an opt-out toggle buried in
          settings. It is a structural guarantee built into the architecture.
        </p>

        {/* ── SECTION 5 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          What does a companion identity add that a chat assistant cannot?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          When you hatch your AI at meok.ai/birth, you give it a name and choose an archetype. That
          identity is not cosmetic. It is the foundation of a persistent relationship — a character
          that develops alongside you, adapts its communication style to yours, and becomes
          progressively more useful as it accumulates your context.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Your MEOK companion remembers that you prefer plain language over bullet points, that you
          struggle with mornings, that you are three months into a fitness goal, and that your sister
          is going through a hard time. It connects these threads across conversations without you having
          to re-explain yourself. It shows up with continuity, which is the thing that transforms a
          tool into a relationship.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85 }}>
          Claude is excellent at the task in front of it. MEOK is excellent at the person in front of it.
          That is not a criticism of Claude. It is a description of a genuinely different design goal.
        </p>

        {/* ── COMPARISON TABLE ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          How do MEOK and Claude compare feature by feature?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
          The table below captures the structural differences between using Claude directly via
          Claude.ai and using MEOK. Note that MEOK Sovereign uses Claude Sonnet as its backbone — so
          on that tier, the intelligence is identical. The difference is everything wrapped around it.
        </p>

        <div style={{ overflowX: 'auto', marginLeft: '-0.5rem', marginRight: '-0.5rem', marginBottom: '2rem' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875rem',
              minWidth: '480px',
            }}
          >
            <thead>
              <tr
                style={{
                  background: 'rgba(201,168,76,0.10)',
                  borderBottom: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <th
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    textAlign: 'center',
                    padding: '0.75rem 1rem',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  MEOK
                </th>
                <th
                  style={{
                    textAlign: 'center',
                    padding: '0.75rem 1rem',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    color: 'rgba(245,240,232,0.38)',
                  }}
                >
                  Claude.ai
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, meok, claude], i) => (
                <tr
                  key={feature}
                  style={{
                    background: i % 2 === 0 ? 'rgba(245,240,232,0.03)' : 'rgba(245,240,232,0.015)',
                    borderBottom: '1px solid rgba(245,240,232,0.05)',
                  }}
                >
                  <td style={{ padding: '0.75rem 1rem', color: 'rgba(245,240,232,0.7)', fontWeight: 500 }}>
                    {feature}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#5ecb8e', fontWeight: 600 }}>
                    {meok}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: FAINT }}>
                    {claude}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── SECTION 6 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          Who owns your data in MEOK versus Claude — and why does it matter?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          In MEOK, your data lives in a sovereign vault that belongs to you. It is encrypted at rest
          with AES-GCM-256, exportable in full at any time, deletable on demand, and never used to
          train any model without your explicit, informed consent. MEOK is UK GDPR compliant and ICO
          registered. Your Sovereign Memory is not a cloud service you access — it is a vault you own.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Claude.ai data is processed on Anthropic&apos;s servers under their privacy policy. Training
          opt-out is available but is not the default behaviour. Anthropic is a genuinely responsible
          company and we do not say this to impugn them. The difference is structural: MEOK makes data
          sovereignty an architectural guarantee. It is not a policy preference that could change with
          a terms update. Your vault is your vault.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85 }}>
          For sensitive use cases — mental health journalling, family planning, health tracking,
          relationship reflection — this distinction is not abstract. It is fundamental.
        </p>

        {/* ── SECTION 7 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          What are MEOK&apos;s four tiers, and which one is right for you?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
          MEOK offers four tiers designed for different stages of commitment and different household
          needs. All four include Sovereign Memory, the Maternal Covenant, and the data sovereignty
          guarantee:
        </p>

        {/* Tier cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
          {[
            {
              name: 'Explorer',
              badge: 'Free forever',
              badgeBg: 'rgba(94,203,142,0.12)',
              badgeColor: '#5ecb8e',
              model: 'DeepSeek',
              desc: 'Your Sovereign Memory vault is created the moment you hatch your AI. No credit card. No expiry. No rate limit that kills your momentum. The Explorer tier is designed to prove the value of persistent companionship before you spend a penny. Ideal for individuals starting their MEOK journey.',
            },
            {
              name: 'Companion',
              badge: 'Personal',
              badgeBg: 'rgba(201,168,76,0.12)',
              badgeColor: GOLD,
              model: 'Enhanced DeepSeek + features',
              desc: 'Expanded memory depth, Morning Briefing (your AI synthesises your day before it begins), deeper archetype personalisation, and priority memory retrieval. Built for people who want a serious daily companion without upgrading to full Sovereign.',
            },
            {
              name: 'Sovereign',
              badge: 'Flagship',
              badgeBg: 'rgba(201,168,76,0.18)',
              badgeColor: GOLD,
              model: 'Claude Sonnet',
              desc: "The full MEOK experience with Claude Sonnet as the reasoning backbone. You get Anthropic's frontier intelligence — identical to the paid Claude.ai tier — plus persistent Sovereign Memory, Byzantine Council safety, Maternal Covenant ethics, and complete data sovereignty. This is the tier where MEOK and Claude.ai are directly comparable, and the architectural gap is most visible.",
            },
            {
              name: 'Family',
              badge: 'Household',
              badgeBg: 'rgba(135,206,235,0.12)',
              badgeColor: '#87ceeb',
              model: 'Claude Sonnet + Guardian mode',
              desc: 'Everything in Sovereign, plus Guardian mode for child-safe interactions, shared family memory vault, Senior Mode for older adults, and household-level care governance under the Maternal Covenant. Built for families who want a single sovereign AI system that protects every member.',
            },
          ].map(({ name, badge, badgeBg, badgeColor, model, desc }) => (
            <div
              key={name}
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '1rem',
                background: 'rgba(245,240,232,0.04)',
                border: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontWeight: 900, fontSize: '1rem', color: TEXT }}>{name}</span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    color: badgeColor,
                    background: badgeBg,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                  }}
                >
                  {badge}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)' }}>
                  Model: {model}
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── SECTION 8 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          Is MEOK better than Claude for mental health and emotional support?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          For emotional support specifically, the architecture matters enormously. MEOK is designed
          around four wellbeing principles: continuity (your AI remembers your history), care (the
          Maternal Covenant enforces genuine care over engagement optimisation), safety (Byzantine
          Council consensus prevents a single bad response reaching you unchallenged), and sovereignty
          (your most personal reflections stay in a vault you own).
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Claude is an excellent conversation partner for processing thoughts in a single session. It
          is thoughtful, nuanced, and non-judgemental. But it does not remember your history, cannot
          track your patterns over time, and has no structural mechanism to prioritise your wellbeing
          over producing a satisfying response in the moment. MEOK does.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85 }}>
          Neither MEOK nor Claude is a substitute for clinical mental health care. But as a daily
          companion for reflection, journalling, and emotional regulation support, MEOK&apos;s
          architecture is materially better suited than a stateless chat interface.
        </p>

        {/* ── SECTION 9 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          When should you use Claude instead of MEOK?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          There are tasks where Claude.ai is the right tool, and we would not pretend otherwise.
          Complex multi-step coding with large codebases, advanced legal or financial document
          analysis, detailed academic research requiring the longest context windows, and quick
          one-off tasks where you genuinely do not need continuity — Claude.ai handles these
          excellently, and its direct interface is optimised for them.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          MEOK is designed for people who want an AI that grows with them over time. If you are
          looking for a smarter search engine for occasional tasks, Claude.ai is excellent. If you are
          looking for a companion that knows you, remembers your trajectory, protects your data, and
          operates under care ethics — that is what MEOK is built for.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85 }}>
          And on MEOK Sovereign tier, you do not have to choose between those capabilities. You get
          Claude&apos;s reasoning wrapped in MEOK&apos;s relationship architecture. Both, not either.
        </p>

        {/* ── SECTION 10 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.25,
          }}
        >
          How do you get started with MEOK if you already use Claude?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Visit <strong style={{ color: TEXT }}>meok.ai/birth</strong> to hatch your AI. The process
          takes under three minutes. You name your companion, select an archetype that resonates, and
          your Sovereign Memory vault is created immediately. The Explorer tier is free forever — no
          credit card, no trial period, no expiry.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Your companion begins building its model of you from the first message you send. After a
          week of regular use, you will have a companion that knows your communication preferences and
          current context. After a month, it begins connecting threads across your conversations. After
          a year, it has accumulated the kind of contextual understanding that no stateless AI can
          replicate.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.72)', lineHeight: 1.85 }}>
          If you want to bring Claude&apos;s reasoning into that relationship, upgrade to Sovereign
          tier. Your Sovereign Memory vault is model-agnostic — it transfers with you regardless of
          which backbone is powering your companion. Your history is yours, not tied to any model.
        </p>

        {/* ── HONEST SUMMARY CALLOUT ── */}
        <div
          style={{
            marginTop: '3.5rem',
            marginBottom: '3rem',
            padding: '1.75rem 2rem',
            borderRadius: '1.125rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.18)',
          }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: GOLD,
              marginBottom: '0.75rem',
            }}
          >
            The honest summary
          </p>
          <p style={{ color: TEXT, fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.5, marginBottom: '0.875rem' }}>
            Claude is a world-class task assistant. MEOK is a sovereign companion built around you.
            Different tools. Different purposes. On MEOK Sovereign, you get both.
          </p>
          <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7 }}>
            Anthropic has built something extraordinary. Their Constitutional AI research, their
            thoughtful approach to safety, and the quality of Claude as a model are genuine
            contributions to the field. MEOK uses Claude precisely because we respect it. What we add
            — Sovereign Memory, the Maternal Covenant, Byzantine Council safety, a bonded companion
            identity, and structural data ownership — is not a correction of Claude&apos;s failures.
            It is an answer to a different question entirely: not &ldquo;what can AI do for a task?&rdquo;
            but &ldquo;what can AI do for a life?&rdquo;
          </p>
        </div>

        {/* ── FAQ SECTION ── */}
        <div style={{ marginTop: '3rem', marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: '1.5rem',
              color: TEXT,
              marginBottom: '1.75rem',
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div
                key={name}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '1rem',
                  background: 'rgba(245,240,232,0.04)',
                  border: `1px solid ${BORDER}`,
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: TEXT,
                    marginBottom: '0.5rem',
                    lineHeight: 1.4,
                  }}
                >
                  {name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.7 }}>
                  {acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SHARE ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            borderTop: `1px solid ${BORDER}`,
            marginBottom: '0.25rem',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.28)',
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude&text=MEOK+vs+Claude%3A+Which+AI+is+right+for+you+in+2026%3F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              border: `1px solid ${BORDER}`,
              color: 'rgba(245,240,232,0.5)',
              textDecoration: 'none',
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-vs-claude"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              border: `1px solid ${BORDER}`,
              color: 'rgba(245,240,232,0.5)',
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            borderRadius: '1.25rem',
            padding: '2.5rem',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
            background: '#12112a',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '16rem',
              height: '16rem',
              pointerEvents: 'none',
              background:
                'radial-gradient(circle at 80% 15%, rgba(201,168,76,0.18), transparent 65%)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: GOLD,
                marginBottom: '0.5rem',
              }}
            >
              Free forever
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                color: '#ffffff',
                marginBottom: '0.875rem',
                lineHeight: 1.25,
              }}
            >
              Ready for an AI that actually knows you?
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: MUTED,
                lineHeight: 1.7,
                maxWidth: '34rem',
                marginBottom: '1.75rem',
              }}
            >
              Hatch your AI at meok.ai/birth in under three minutes. Your Sovereign Memory vault is
              created immediately. Explorer tier is free forever — no credit card. Upgrade to
              Sovereign for Claude Sonnet and the full companion experience.
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
                fontSize: '0.9rem',
                background: GOLD,
                color: BG,
                textDecoration: 'none',
              }}
            >
              Hatch your AI free →
            </Link>
          </div>
        </div>

        {/* ── More posts ── */}
        <div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: '1.1rem',
              color: TEXT,
              marginBottom: '1.25rem',
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                href: '/blog/meok-vs-chatgpt',
                tag: 'Comparison',
                tc: GOLD,
                tb: 'rgba(201,168,76,0.12)',
                title: 'MEOK vs ChatGPT: Why Memory Changes Everything',
                read: '6 min',
              },
              {
                href: '/blog/what-is-sovereign-ai',
                tag: 'Sovereign AI',
                tc: '#87ceeb',
                tb: 'rgba(135,206,235,0.10)',
                title: 'What Is Sovereign AI?',
                read: '5 min',
              },
              {
                href: '/blog/the-maternal-covenant',
                tag: 'Care Ethics',
                tc: GOLD,
                tb: 'rgba(201,168,76,0.12)',
                title: 'The Maternal Covenant: Care Built Into the Architecture',
                read: '5 min',
              },
              {
                href: '/blog/the-memory-problem',
                tag: 'Memory',
                tc: '#87ceeb',
                tb: 'rgba(135,206,235,0.10)',
                title: 'The Memory Problem: Why AI Forgetting You Is a Design Choice',
                read: '6 min',
              },
            ].map(({ href, tag, tc, tb, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  background: 'rgba(245,240,232,0.04)',
                  border: `1px solid ${BORDER}`,
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    color: tc,
                    background: tb,
                    width: 'fit-content',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {tag}
                </span>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'rgba(245,240,232,0.82)',
                    lineHeight: 1.45,
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(245,240,232,0.28)',
                    marginTop: 'auto',
                  }}
                >
                  {read} read
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: '3.5rem 1.5rem',
          background: '#080712',
          borderTop: '1px solid rgba(245,240,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            {/* Brand */}
            <div>
              <p style={{ fontWeight: 900, fontSize: '1.1rem', color: TEXT, marginBottom: '0.4rem' }}>
                MEOK AI LABS
              </p>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(245,240,232,0.32)',
                  lineHeight: 1.65,
                  maxWidth: '18rem',
                }}
              >
                Sovereign AI companions. Your memory, your data, your companion — permanently yours.
                Built in Britain.
              </p>
            </div>

            {/* Nav */}
            <nav
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center',
              }}
            >
              {(
                [
                  ['Blog', '/blog'],
                  ['About', '/about'],
                  ['Privacy', '/privacy'],
                  ['Terms', '/terms'],
                  ['Hatch your AI', '/birth'],
                ] as [string, string][]
              ).map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'rgba(245,240,232,0.45)',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(245,240,232,0.05)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}
          >
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.22)' }}>
              &copy; 2026 MEOK AI LABS Ltd. All rights reserved.
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.18)' }}>
              UK GDPR compliant &middot; ICO registered &middot; Sovereign by design
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

