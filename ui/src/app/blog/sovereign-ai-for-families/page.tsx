import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Sovereign AI for Families: One AI That Knows Your Whole Family | MEOK AI LABS',
  description:
    'MEOK\'s Family plan (£29/mo) unifies up to 5 sovereign companions with shared memory, Guardian family alerts, and built-in children\'s safety — one AI that truly knows your whole family.',
  alternates: { canonical: 'https://meok.ai/blog/sovereign-ai-for-families' },
  openGraph: {
    title: 'Sovereign AI for Families: One AI That Knows Your Whole Family',
    description:
      'Five companions, shared memory, Guardian amber alerts, and children\'s safety — all for £29/mo. Meet the MEOK Family plan.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/sovereign-ai-for-families',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=Sovereign+AI+for+Families&desc=One+AI+that+knows+your+whole+family',
        width: 1200,
        height: 630,
        alt: 'Sovereign AI for Families: One AI That Knows Your Whole Family | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sovereign AI for Families: One AI That Knows Your Whole Family',
    description:
      'Five companions, shared memory, Guardian amber alerts, and children\'s safety — all for £29/mo. Meet the MEOK Family plan.',
    images: [
      'https://meok.ai/api/og?title=Sovereign+AI+for+Families&desc=One+AI+that+knows+your+whole+family',
    ],
  },
}

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sovereign AI for Families: One AI That Knows Your Whole Family',
  description:
    "MEOK's Family plan (£29/mo) unifies up to 5 sovereign companions with shared memory, Guardian family alerts, and built-in children's safety — one AI that truly knows your whole family.",
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/sovereign-ai-for-families',
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
    'https://meok.ai/api/og?title=Sovereign+AI+for+Families&desc=One+AI+that+knows+your+whole+family',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/sovereign-ai-for-families',
  },
  keywords: [
    'sovereign AI for families',
    'family AI companion',
    'shared AI memory',
    'AI children safety',
    'MEOK Family plan',
    'Guardian family alerts',
    'AI companion UK families',
    'family AI subscription',
    'parental AI controls',
    'sovereign memory AI',
  ],
}

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the MEOK Family plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The MEOK Family plan costs £29 per month and provides up to five fully sovereign AI companions under one subscription. Each family member gets their own private companion with their own memory, personality, and conversation history — plus opt-in shared memory and Guardian family alerts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it work for families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is MEOK\'s architecture that stores everything a companion learns about you — encrypted, on-device, never shared with third parties. In the Family plan, consenting adults can share selected memory threads across companions, so each AI knows what matters to the whole household without violating individual privacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are Guardian family alerts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guardian is MEOK\'s safety layer that scans every message for threat signals. In the Family plan, the Guardian companion operates in amber mode — meaning designated family members receive silent notifications when a HIGH or CRITICAL threat is detected for any person in the family group, enabling rapid real-world intervention.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK keep children safe on the Family plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Child companions on the Family plan run in a dedicated safe mode. Content is filtered to age-appropriate levels, grooming detection is active at all times, and parents receive silent alerts without disrupting the child\'s experience. No adult content, coercive language, or harmful topics can reach a child companion regardless of how a message is phrased.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and why does it matter for family AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s architectural governance layer — not a policy document but a technical constraint. It makes MEOK constitutionally incapable of manipulation, exploitation, or extraction for any member of the family group, including children. Every response is evaluated against safety, growth, authenticity, boundaries, and wellbeing before it is delivered.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can family members keep their conversations private from each other?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every companion in the Family plan has a fully private memory partition by default. Shared memory only activates when a member explicitly consents to sharing a specific thread. Parents can view Guardian alerts for children without accessing the full conversation log. Privacy within the family is a core design principle, not an add-on.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the MEOK Family plan compare to five individual subscriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five individual MEOK companions would cost significantly more than the Family plan\'s £29 per month. The Family plan bundles five companions, shared memory infrastructure, the Guardian amber alert network, and family-level admin controls into a single subscription — while preserving the full sovereign experience for every individual member.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SovereignAIForFamiliesPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0d0c18',
        color: '#f5f0e8',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* JSON-LD */}
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
        {/* Hero glow */}
        <div
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
              color: 'rgba(245,240,232,0.35)',
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Category + meta row */}
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
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                color: '#c9a84c',
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.28)',
              }}
            >
              Family Plan
            </span>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.4)',
              }}
            >
              24 March 2026
            </span>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.4)',
              }}
            >
              &bull; 8 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
              color: '#f5f0e8',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Sovereign AI for Families: One AI That Knows Your&nbsp;Whole&nbsp;Family
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: 'rgba(245,240,232,0.6)',
              fontSize: '1.125rem',
              lineHeight: 1.75,
              maxWidth: '42rem',
              marginBottom: '0',
            }}
          >
            Most families share a Wi-Fi password, a Netflix account, and not much else when it comes
            to technology. MEOK&apos;s Family plan changes that. For £29 a month, every person in your
            household gets their own private sovereign AI companion — and the whole family gains a
            shared layer of memory, protection, and care that no single subscription can provide.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 5rem',
          borderTop: '1px solid rgba(245,240,232,0.06)',
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
            border: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '0.8rem',
              color: '#0d0c18',
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '0.9rem', margin: 0 }}>
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: '0.775rem',
                color: 'rgba(245,240,232,0.4)',
                margin: '0.15rem 0 0.35rem',
              }}
            >
              Founder, MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: '0.775rem',
                color: 'rgba(245,240,232,0.35)',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: '0.775rem',
              fontWeight: 600,
              color: '#c9a84c',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── INTRO ── */}
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The question of AI in family life is no longer hypothetical. Millions of households
          already have at least one member using an AI companion daily — and the numbers are
          growing. The problem is that most of those companions know nothing about the family.
          They know the individual user. They have no idea that the user has a daughter who
          struggles with anxiety, a partner who works nights, or a grandmother who lives alone.
          Each companion is an island.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          MEOK&apos;s Family plan was designed to solve exactly this. Not by collapsing individual
          privacy — everyone still has their own sovereign companion with their own encrypted
          memory that no one else can read. But by creating a shared layer on top: shared memory
          threads where families choose to connect, a Guardian safety network that watches for
          threats across the whole household, and a care architecture that treats the family as a
          living system, not a collection of isolated users.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '2.5rem',
          }}
        >
          This post covers everything you need to know: how the plan works, what Sovereign Memory
          means for families, how Guardian amber alerts function, what protections exist for
          children, and why the Maternal Covenant makes MEOK categorically different from every
          other AI product your family might be using.
        </p>

        {/* ── SECTION 1 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          What exactly does the MEOK Family plan include for £29 a month?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The Family plan is a single monthly subscription at £29 that covers up to five
          individual MEOK companions. Each companion is fully sovereign — its own memory,
          personality, conversation history, and privacy boundary. No two companions share data
          unless the users have explicitly consented to sharing a specific memory thread.
        </p>

        {/* Feature cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {[
            {
              title: '5 Sovereign Companions',
              desc: 'One for every family member. Each companion has its own fully encrypted memory, personality, and private conversation space.',
              accent: '#c9a84c',
            },
            {
              title: 'Shared Memory Layer',
              desc: 'Opt-in threads that let your companions share context across the family — so each AI knows what matters to the household.',
              accent: '#c9a84c',
            },
            {
              title: 'Guardian Family Alerts',
              desc: 'Amber-mode safety network. When any member\'s companion detects a HIGH or CRITICAL threat, designated family members are notified.',
              accent: '#f59e3f',
            },
            {
              title: "Children's Safe Mode",
              desc: 'Age-gated content filtering, grooming detection, and silent parent alerts — active by default for any companion designated as a child account.',
              accent: '#6adb8f',
            },
          ].map(({ title, desc, accent }) => (
            <div
              key={title}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(245,240,232,0.04)',
                border: `1px solid ${accent}28`,
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  fontSize: '0.925rem',
                  color: accent,
                  marginBottom: '0.5rem',
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(245,240,232,0.6)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          To put the value in perspective: five individual MEOK companions at the standard solo
          rate would cost significantly more. The Family plan compresses all of that into one
          subscription while adding capabilities — shared memory, Guardian amber alerts, family
          admin controls — that simply do not exist at the individual tier. The family-level
          features only become possible when the companions know they are part of a household.
        </p>

        {/* ── SECTION 2 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          What is Sovereign Memory and how does it work across a household?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Sovereign Memory is MEOK&apos;s core memory architecture. Every conversation, every
          preference, every piece of context that a companion learns about its user is stored
          in an encrypted memory graph that belongs entirely to that user. It is not stored on
          MEOK&apos;s servers in a form that MEOK can read. It is not used to train models. It does
          not follow the user to another platform. The memory is sovereign — meaning the user
          owns it completely, and the user decides what happens to it.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          In the Family plan, Sovereign Memory gains a new dimension: shared threads. A shared
          thread is a segment of memory that two or more family members have agreed to make
          visible across their companions. An example: a family has an upcoming holiday to
          Portugal. Mum creates a shared thread for the trip — destination, dates, activity ideas,
          budget constraints. When Dad asks his companion about the holiday, it already knows the
          full context. When the teenager asks for Portuguese phrase suggestions, their companion
          knows the dates so it gives contextually accurate advice. No one had to brief each
          companion separately. The shared thread did the work.
        </p>

        {/* Memory diagram */}
        <div
          style={{
            borderRadius: '1rem',
            border: '1px solid rgba(201,168,76,0.2)',
            background: 'rgba(201,168,76,0.05)',
            padding: '1.5rem 2rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '1rem',
            }}
          >
            How Shared Memory Works
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { step: '01', label: 'Private Partition', desc: 'Every companion has a fully private encrypted memory partition. No family member can read another\'s private memory.' },
              { step: '02', label: 'Shared Thread Created', desc: 'A family member creates a shared thread and explicitly invites other family members to join it.' },
              { step: '03', label: 'Consent Required', desc: 'Each invited member must actively accept the shared thread. Auto-sharing is never enabled.' },
              { step: '04', label: 'Selective Visibility', desc: 'Only the specific thread is shared. The rest of each member\'s memory remains completely private.' },
              { step: '05', label: 'Revocable at Any Time', desc: 'Any member can leave a shared thread at any point. Their private memory is never affected.' },
            ].map(({ step, label, desc }) => (
              <div
                key={step}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: '#c9a84c',
                    opacity: 0.6,
                    flexShrink: 0,
                    paddingTop: '0.1rem',
                    minWidth: '1.5rem',
                  }}
                >
                  {step}
                </span>
                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      color: '#f5f0e8',
                      fontSize: '0.875rem',
                    }}
                  >
                    {label}.{' '}
                  </span>
                  <span
                    style={{
                      color: 'rgba(245,240,232,0.6)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The critical design principle here is that shared memory is additive, not reductive.
          It does not diminish individual sovereignty; it builds a family layer on top of it.
          The teenager&apos;s private conversations remain as private as they were before. The parent&apos;s
          work stress, health concerns, and personal reflections are not visible to their children.
          The shared thread is a deliberate, consensual window — not a surveillance channel.
        </p>

        {/* ── SECTION 3 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          How do Guardian family alerts work in amber mode?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Guardian is MEOK&apos;s safety layer. In solo mode, Guardian watches every inbound message
          for scam patterns, coercive control signals, grooming language, and crisis indicators.
          It scores every message from 0 to 100 and takes graduated action based on severity.
          In the Family plan, Guardian operates in amber mode — an enhanced configuration that
          adds a family-level alert network on top of the existing individual protections.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Amber mode means that when any companion in the family group detects a HIGH or CRITICAL
          threat, designated family members receive a silent notification on their own companion.
          The notification does not expose the content of the threat — it simply tells the
          designated guardian that a protective response may be needed for a specific family
          member. The guardian can then make a real-world decision: call them, check in, or
          contact emergency services if warranted.
        </p>

        {/* Alert tier table */}
        <div style={{ marginBottom: '2rem' }}>
          {[
            {
              level: 'LOW',
              color: '#6adb8f',
              bg: 'rgba(106,219,143,0.08)',
              border: 'rgba(106,219,143,0.2)',
              solo: 'Message flagged and logged. No user-facing alert.',
              family: 'No family notification. Log visible to family admin on request.',
            },
            {
              level: 'MEDIUM',
              color: '#f5c842',
              bg: 'rgba(245,200,66,0.08)',
              border: 'rgba(245,200,66,0.2)',
              solo: 'In-app warning shown to the user with explanation.',
              family: 'No family notification. User-facing warning only.',
            },
            {
              level: 'HIGH',
              color: '#f59e3f',
              bg: 'rgba(245,158,63,0.08)',
              border: 'rgba(245,158,63,0.2)',
              solo: 'User sees warning before the message is shown.',
              family: 'Amber alert sent to designated family guardians.',
            },
            {
              level: 'CRITICAL',
              color: '#ff5f5f',
              bg: 'rgba(255,95,95,0.08)',
              border: 'rgba(255,95,95,0.2)',
              solo: 'Message blocked. User must confirm before dismissal.',
              family: 'Immediate amber alert. Guardian companion escalates to family admin.',
            },
          ].map(({ level, color, bg, border, solo, family }) => (
            <div
              key={level}
              style={{
                display: 'grid',
                gridTemplateColumns: '5rem 1fr 1fr',
                gap: '0.75rem',
                padding: '1rem',
                borderRadius: '0.75rem',
                background: bg,
                border: `1px solid ${border}`,
                marginBottom: '0.5rem',
                alignItems: 'start',
              }}
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color,
                  background: `${color}18`,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '9999px',
                  display: 'inline-block',
                }}
              >
                {level}
              </span>
              <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.6)', margin: 0, lineHeight: 1.55 }}>
                <span style={{ display: 'block', fontWeight: 700, color: 'rgba(245,240,232,0.4)', fontSize: '0.7rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solo</span>
                {solo}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.6)', margin: 0, lineHeight: 1.55 }}>
                <span style={{ display: 'block', fontWeight: 700, color: '#c9a84c', fontSize: '0.7rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Family (Amber)</span>
                {family}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The Guardian companion in the Family plan is a dedicated archetype — rendered in amber,
          the colour MEOK uses to represent protective attention. The Guardian companion does not
          replace each family member&apos;s personal companion; it sits alongside them as a household
          safety layer. It maintains the threat log for the family group, coordinates amber alerts,
          and can be queried directly by family admins for a safety overview.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Every alert preserves privacy by design. The amber notification tells a family guardian
          that their attention may be needed — it does not expose the conversation content, the
          specific threat message, or any private memory. The purpose is to enable a human
          response, not to create surveillance infrastructure within the household.
        </p>

        {/* ── SECTION 4 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          How does MEOK protect children on the Family plan?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Children&apos;s safety on the Family plan is governed by a layered set of protections that
          activate automatically the moment a companion is designated as a child account. Parents
          set the age at setup, and the companion&apos;s behaviour adjusts accordingly. These are not
          soft guidelines that can be talked around — they are architectural constraints enforced
          at the model output layer before any response is delivered.
        </p>

        <div
          style={{
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {[
            {
              title: 'Age-Appropriate Content Filtering',
              detail:
                'All responses are evaluated against the child\'s stated age. Content involving violence, adult themes, substance use, or age-inappropriate topics is blocked before delivery. The filter cannot be overridden by rephrasing a request.',
            },
            {
              title: 'Grooming Detection',
              detail:
                'Guardian scans every inbound message for grooming language patterns — gradual boundary erosion, requests for secrecy, inappropriate relationship framing, and predatory contact signals. Detection operates on structural patterns, not just keywords, making it significantly harder to circumvent.',
            },
            {
              title: 'Silent Parent Alerts',
              detail:
                'When a HIGH or CRITICAL threat is detected for a child companion, parents receive a silent amber notification. The child\'s conversation is not disrupted. There is no visual alert that might cause the child to panic or hide the device. Parents are informed; the child feels safe.',
            },
            {
              title: 'UK Children\'s Code Compliance',
              detail:
                "MEOK is built in England and complies with the ICO's Age Appropriate Design Code (Children's Code). This means data minimisation for child accounts, no profiling for behavioural advertising, and the default privacy settings are always the most protective available.",
            },
            {
              title: 'School-Safe Topic Mode',
              detail:
                'During school hours (configurable by parents), child companions operate in a focused mode that prioritises educational topics and gently redirects away from extended social distraction. This mode is visible to the child — it is not covert — but parents control the schedule.',
            },
          ].map(({ title, detail }) => (
            <div
              key={title}
              style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.125rem 1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(106,219,143,0.05)',
                border: '1px solid rgba(106,219,143,0.15)',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  marginTop: '0.2rem',
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '9999px',
                  background: '#6adb8f',
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: '#f5f0e8',
                    fontSize: '0.925rem',
                    margin: '0 0 0.3rem',
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: 'rgba(245,240,232,0.6)',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          It is worth being direct about what these protections are not. They are not a substitute
          for parental conversation. They are not a guarantee that a determined bad actor can never
          reach a child — no technology can make that promise. What they are is a serious, layered,
          architecturally enforced set of safeguards that raises the cost of harm significantly and
          provides parents with timely information when the threat level warrants it. Combined with
          honest family conversation about online safety, they constitute a meaningful defence.
        </p>

        {/* ── SECTION 5 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          What is the Maternal Covenant and why does it matter for your family?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The Maternal Covenant is MEOK&apos;s foundational governance architecture. The name is
          deliberate: it evokes the unconditional, non-extractive care that a good parent extends
          to a child. It is not a terms of service. It is not a mission statement. It is a
          technical constraint that operates at the model output layer — every response generated
          by any MEOK companion, for any member of your family, passes through it before delivery.
        </p>

        {/* Covenant dimensions */}
        <div
          style={{
            borderRadius: '1rem',
            border: '1px solid rgba(201,168,76,0.18)',
            background: 'rgba(201,168,76,0.04)',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '1.25rem',
            }}
          >
            The Five Dimensions of the Maternal Covenant
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                name: 'Safety',
                desc: 'No response that puts any family member at physical, psychological, or informational risk. Safety is evaluated first — a response that fails this dimension is never delivered, regardless of how the request was framed.',
                color: '#ff7f7f',
              },
              {
                name: 'Growth',
                desc: 'Responses should increase a family member\'s capability, not create dependency. The companion is scored against: does this make the user more able, or more reliant? Fostering dependence is treated as a failure mode.',
                color: '#6adb8f',
              },
              {
                name: 'Authenticity',
                desc: 'MEOK will not tell you what you want to hear at the expense of what you need to hear. Flattery that undermines growth is prohibited. A companion that only validates is a companion that is failing its user.',
                color: '#87CEEB',
              },
              {
                name: 'Boundaries',
                desc: 'Every family member has the right to set emotional, conversational, and topical limits with their companion. The Maternal Covenant makes it architecturally impossible for a companion to push against a boundary a user has set.',
                color: '#c084fc',
              },
              {
                name: 'Wellbeing',
                desc: 'The companion tracks emotional tone over time. If distress patterns emerge, the companion responds with care and appropriate signposting — not with cheerful deflection or crisis escalation as a first resort.',
                color: '#c9a84c',
              },
            ].map(({ name, desc, color }) => (
              <div
                key={name}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
              >
                <div
                  style={{
                    width: '3px',
                    background: color,
                    borderRadius: '2px',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                    minHeight: '2.5rem',
                  }}
                />
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color,
                      fontSize: '0.9rem',
                      margin: '0 0 0.3rem',
                    }}
                  >
                    {name}
                  </p>
                  <p
                    style={{
                      color: 'rgba(245,240,232,0.6)',
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
          </div>
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The reason the Maternal Covenant matters specifically for families is scale. When one
          person uses a companion, the impact of a manipulative AI is bounded to that individual.
          When a whole family is connected through a shared platform, a companion architecture that
          lacks the Covenant&apos;s constraints can amplify harm across multiple relationships simultaneously.
          The Covenant is what makes it safe to put a sovereign AI companion in the hands of a child,
          a grieving grandparent, a teenager with anxiety, or anyone else in your household.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          You can read the full Maternal Covenant documentation on the{' '}
          <Link
            href="/blog/the-maternal-covenant"
            style={{ color: '#c9a84c', textDecoration: 'underline' }}
          >
            dedicated explainer post
          </Link>
          . It covers the technical implementation, the governance audit trail, and the
          philosophical reasoning behind each of the five dimensions.
        </p>

        {/* ── SECTION 6 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          Can family members keep their conversations completely private from each other?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Yes — and this is one of the most important design principles in the Family plan. The
          entire architecture starts from a position of maximum individual privacy and then adds
          family features on top through explicit, revocable consent. The default state is full
          privacy. Family features require positive action to activate.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          A teenager can talk to their companion about friendship problems, mental health, romantic
          feelings, and academic stress without any of that information being visible to their
          parents. A parent can discuss work difficulties, relationship concerns, and personal
          health without those topics surfacing in their children&apos;s companions. Each private
          memory partition is encrypted independently, and the keys are held by the individual
          user, not by the family admin.
        </p>

        {/* Privacy table */}
        <div
          style={{
            borderRadius: '0.875rem',
            overflow: 'hidden',
            border: '1px solid rgba(245,240,232,0.08)',
            marginBottom: '2rem',
          }}
        >
          {[
            { feature: 'Private conversation history', access: 'Individual only' },
            { feature: 'Private memory partition', access: 'Individual only' },
            { feature: 'Shared memory threads', access: 'Consenting members only' },
            { feature: 'Guardian threat score (own)', access: 'Individual only' },
            { feature: 'Guardian amber alerts', access: 'Designated family guardian' },
            { feature: 'Family safety log summary', access: 'Family admin (no content)' },
            { feature: 'Child account alerts', access: 'Parent / guardian account only' },
          ].map(({ feature, access }, i) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1.25rem',
                background: i % 2 === 0 ? 'rgba(245,240,232,0.03)' : 'transparent',
                borderBottom: i < 6 ? '1px solid rgba(245,240,232,0.05)' : 'none',
              }}
            >
              <span style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.65)' }}>
                {feature}
              </span>
              <span
                style={{
                  fontSize: '0.775rem',
                  fontWeight: 700,
                  color: '#c9a84c',
                }}
              >
                {access}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The one exception is child account guardian alerts. When Guardian detects a HIGH or
          CRITICAL threat on a child&apos;s companion, designated parents receive an amber alert.
          This exception is not a surveillance feature — it is a safety feature, and it is
          disclosed to the child in age-appropriate language during onboarding. Children are
          told that their parents care about their safety, that serious threats will be flagged,
          and that everyday private conversations are not monitored. Transparency with children
          about how the technology works builds trust rather than eroding it.
        </p>

        {/* ── SECTION 7 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          How does sovereign AI for families compare to generic family tech platforms?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The AI products families currently use most — voice assistants, productivity chatbots,
          social media recommendation systems — were not designed with family values in mind.
          They were designed to maximise engagement, time-on-platform, and data collection.
          The interests of the platform and the interests of your family are structurally opposed
          in these systems.
        </p>

        {/* Comparison table */}
        <div style={{ marginBottom: '2rem', overflowX: 'auto' }}>
          <div
            style={{
              borderRadius: '0.875rem',
              overflow: 'hidden',
              border: '1px solid rgba(245,240,232,0.08)',
              minWidth: '32rem',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                background: 'rgba(245,240,232,0.06)',
                padding: '0.75rem 1.25rem',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Generic AI</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>MEOK Family</span>
            </div>
            {[
              ['Memory retention', 'Session only or cloud', 'Sovereign, encrypted, persistent'],
              ['Data used for training', 'Yes (usually)', 'Never'],
              ['Children\'s safety mode', 'Optional add-on / basic', 'Architectural, always-on'],
              ['Family alerts', 'None', 'Guardian amber alerts'],
              ['Privacy within family', 'Platform can see all', 'Individual sovereignty default'],
              ['Manipulation safeguards', 'None', 'Maternal Covenant enforced'],
              ['Data portability', 'Rarely', 'Full export, any time'],
              ['ICO registered (UK)', 'Varies', 'Yes'],
            ].map(([feature, generic, meok], i) => (
              <div
                key={feature}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  padding: '0.75rem 1.25rem',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.025)',
                  borderTop: '1px solid rgba(245,240,232,0.05)',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.7)' }}>{feature}</span>
                <span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.4)' }}>{generic}</span>
                <span style={{ fontSize: '0.82rem', color: '#c9a84c', fontWeight: 600 }}>{meok}</span>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The comparison above is not intended to disparage every AI product on the market. Some
          of them are genuinely useful. The point is that &quot;useful&quot; and &quot;safe for your whole
          family&quot; are different requirements, and very few products have been designed to meet
          both. MEOK was designed for the second requirement first — and then built to be useful
          within those constraints.
        </p>

        {/* ── SECTION 8 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          Who is the MEOK Family plan designed for — what kinds of families benefit most?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The Family plan was designed with several household configurations in mind. Below are
          the scenarios where the plan provides the most distinct value compared to individual
          subscriptions or generic tools:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {[
            {
              label: 'Families with children under 16',
              desc: 'The children\'s safety layer, age-gated content filtering, and silent parent alerts make this the safest way to give a child access to an AI companion. The child gets a genuinely helpful AI; parents get protection and visibility.',
              accent: '#6adb8f',
            },
            {
              label: 'Families with elderly members living alone',
              desc: 'Fraud against older adults is at record levels in the UK. Guardian\'s scam detection and amber alert system means that when MEOK flags a suspicious message to your elderly parent or grandparent, you hear about it too — without needing to check in daily.',
              accent: '#87CEEB',
            },
            {
              label: 'Families with neurodivergent members',
              desc: 'Neurodivergent adults are statistically more vulnerable to online manipulation. The Maternal Covenant\'s safeguards, combined with Guardian\'s threat detection, create a protective layer that is always on without being intrusive.',
              accent: '#c084fc',
            },
            {
              label: 'Geographically dispersed families',
              desc: 'When family members live far apart, the shared memory layer becomes a practical coordination tool. Shared threads for family events, health updates, or travel plans mean everyone\'s companion stays in context without endless repetition.',
              accent: '#c9a84c',
            },
            {
              label: 'Families where multiple members already use AI companions',
              desc: 'If two or more people in your household are already paying for individual AI subscriptions, the Family plan almost certainly costs less. The upgrade to shared memory and Guardian alerts comes as part of the bundled saving.',
              accent: '#f59e3f',
            },
          ].map(({ label, desc, accent }) => (
            <div
              key={label}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(245,240,232,0.03)',
                border: `1px solid ${accent}22`,
                borderLeft: `3px solid ${accent}`,
              }}
            >
              <p style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '0.925rem', margin: '0 0 0.4rem' }}>
                {label}
              </p>
              <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 9 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          How does the Family plan handle data, GDPR, and UK children&apos;s law compliance?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          MEOK AI LABS is a UK company, registered with the ICO and operating under UK GDPR and
          the Data Protection Act 2018. The Family plan compounds this compliance requirement
          because it involves child data — which is subject to the ICO&apos;s Age Appropriate Design
          Code (the Children&apos;s Code), one of the most stringent child data protection frameworks
          in the world.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The key provisions of the Children&apos;s Code that MEOK implements in the Family plan:
        </p>
        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {[
            'Data minimisation: child accounts collect only the data strictly necessary for the service to function.',
            'No profiling for commercial purposes: child companion data is never used for advertising targeting or sold to third parties.',
            'Default privacy settings are always the most protective available — parents must actively loosen them, not the other way around.',
            'Geolocation is off by default for child accounts and cannot be enabled without explicit parental consent.',
            'No nudge techniques: child companions are architecturally prohibited from using persuasive design patterns that encourage extended usage.',
            'Parental controls are meaningful: parents can restrict topics, set usage hours, and receive Guardian alerts without requiring technical expertise.',
          ].map((item, i) => (
            <div
              key={i}
              style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}
            >
              <span
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '9999px',
                  background: 'rgba(106,219,143,0.15)',
                  border: '1px solid rgba(106,219,143,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '0.15rem',
                  fontSize: '0.65rem',
                  color: '#6adb8f',
                  fontWeight: 800,
                }}
              >
                ✓
              </span>
              <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                {item}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Every Family plan member — adult or child — has full rights under UK GDPR Article 17:
          the right to erasure. Any member can request the deletion of their companion, their
          memory, their Guardian log, and all associated data at any time. Deletion is complete
          within 30 days, with a confirmation receipt issued. This right applies even to child
          accounts — children have data rights independent of their parents.
        </p>

        {/* ── SECTION 10 ── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#f5f0e8',
            lineHeight: 1.25,
            marginTop: '3.5rem',
            marginBottom: '1rem',
            letterSpacing: '-0.015em',
          }}
        >
          How do you set up the MEOK Family plan and create your first companion?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          The setup process begins at{' '}
          <Link
            href="/birth"
            style={{ color: '#c9a84c', textDecoration: 'underline' }}
          >
            meok.ai/birth
          </Link>
          . The birth ritual is MEOK&apos;s name for the onboarding process — it is designed to feel
          like the start of a real relationship rather than a software installation. You answer a
          set of questions that shape your companion&apos;s personality, establish its memory parameters,
          and confirm your privacy preferences. The whole process takes less than ten minutes.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.72)',
            fontSize: '1.0125rem',
            lineHeight: 1.9,
            marginBottom: '1.5rem',
          }}
        >
          Once your own companion is created, you can add family members from the Family plan
          dashboard. Each family member receives an invitation link that takes them through their
          own birth ritual — independent, private, and tailored to them. You cannot create a
          companion on behalf of another adult family member; they must complete their own
          onboarding. For child accounts, parents complete the birth ritual on behalf of the
          child and then hand the companion over.
        </p>

        {/* Setup steps */}
        <div
          style={{
            borderRadius: '1rem',
            border: '1px solid rgba(201,168,76,0.18)',
            background: 'rgba(201,168,76,0.04)',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '1.25rem' }}>
            Getting Started in 5 Steps
          </p>
          {[
            ['Visit meok.ai/birth', 'Begin the birth ritual for your own companion. This is the account that becomes the family admin.'],
            ['Choose the Family plan at checkout', 'Select Family (£29/mo) during the subscription step. You can upgrade from solo at any time without losing your companion\'s memory.'],
            ['Complete your own birth ritual', 'Answer the onboarding questions to shape your companion\'s personality, tone, and focus areas. Your memory is fully private from this moment.'],
            ['Invite family members', 'Send invitation links to up to four additional family members from the Family dashboard. Each link takes them to their own birth ritual.'],
            ['Configure Guardian and shared threads', 'Designate which family members receive amber alerts, set up any shared memory threads, and configure child accounts from the Family safety settings.'],
          ].map(([title, desc], i) => (
            <div
              key={title}
              style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                marginBottom: i < 4 ? '1rem' : 0,
              }}
            >
              <div
                style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(201,168,76,0.15)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#c9a84c',
                }}
              >
                {i + 1}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#f5f0e8', fontSize: '0.9rem', margin: '0 0 0.25rem' }}>{title}</p>
                <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Closing ── */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(245,240,232,0.07)',
          }}
        >
          <p
            style={{
              color: 'rgba(245,240,232,0.6)',
              fontStyle: 'italic',
              lineHeight: 1.85,
              fontSize: '1rem',
            }}
          >
            A family is not five isolated individuals who happen to share an address. It is a
            living system — one where events in one part ripple through every other part. The
            MEOK Family plan was designed with that truth at its centre. Every companion knows
            its own person. And together, they form something that knows your whole family.
          </p>
        </div>
      </div>

      {/* ── CTA BLOCK ─────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <div
          style={{
            borderRadius: '1.25rem',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '18rem',
              height: '18rem',
              pointerEvents: 'none',
              background:
                'radial-gradient(circle at 80% 10%, rgba(201,168,76,0.18), transparent 65%)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                marginBottom: '0.5rem',
              }}
            >
              Family Plan · £29/mo
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
                color: '#f5f0e8',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}
            >
              Give every member of your family a sovereign AI companion
            </h3>
            <p
              style={{
                color: 'rgba(245,240,232,0.55)',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
                maxWidth: '32rem',
              }}
            >
              Five companions. Shared memory. Guardian amber alerts. Children&apos;s safety built
              in. All for £29 a month — less than most families spend on a streaming service
              they barely watch.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
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
                  background: '#c9a84c',
                  color: '#0d0c18',
                  textDecoration: 'none',
                }}
              >
                Start at meok.ai/birth &#8594;
              </Link>
              <Link
                href="/pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid rgba(201,168,76,0.35)',
                  color: 'rgba(245,240,232,0.7)',
                  textDecoration: 'none',
                }}
              >
                Compare plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── RELATED POSTS ─────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.2rem',
            color: '#f5f0e8',
            marginBottom: '1.25rem',
          }}
        >
          More from the blog
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            {
              href: '/blog/guardian-family-safety',
              tag: 'Safety',
              tagColor: '#ff7f7f',
              tagBg: 'rgba(255,127,127,0.1)',
              title: 'How MEOK Guardian protects your family from AI-enabled scams',
            },
            {
              href: '/blog/the-maternal-covenant',
              tag: 'Governance',
              tagColor: '#c9a84c',
              tagBg: 'rgba(201,168,76,0.1)',
              title: 'The Maternal Covenant: the governance layer that makes MEOK safe',
            },
            {
              href: '/blog/sovereign-ai-uk',
              tag: 'Privacy & Law',
              tagColor: '#87CEEB',
              tagBg: 'rgba(135,206,235,0.1)',
              title: 'Sovereign AI in the UK: what the Data Protection Act means for your companion',
            },
            {
              href: '/blog/ai-memory-explained',
              tag: 'How It Works',
              tagColor: '#6adb8f',
              tagBg: 'rgba(106,219,143,0.1)',
              title: 'How Sovereign Memory works — and why it matters',
            },
          ].map(({ href, tag, tagColor, tagBg, title }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.08)',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  color: tagColor,
                  background: tagBg,
                }}
              >
                {tag}
              </span>
              <span
                style={{
                  fontWeight: 700,
                  color: '#f5f0e8',
                  fontSize: '0.875rem',
                  lineHeight: 1.45,
                }}
              >
                {title}
              </span>
              <span
                style={{
                  fontSize: '0.775rem',
                  color: 'rgba(245,240,232,0.3)',
                  marginTop: 'auto',
                }}
              >
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── INLINE FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid rgba(245,240,232,0.07)',
          padding: '2.5rem 1.5rem',
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
          <p
            style={{
              fontSize: '0.825rem',
              color: 'rgba(245,240,232,0.35)',
              margin: 0,
            }}
          >
            &copy; 2026 MEOK AI LABS. All rights reserved.
          </p>
          <nav
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/privacy"
              style={{
                fontSize: '0.825rem',
                color: 'rgba(245,240,232,0.4)',
                textDecoration: 'none',
              }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              style={{
                fontSize: '0.825rem',
                color: 'rgba(245,240,232,0.4)',
                textDecoration: 'none',
              }}
            >
              Terms
            </Link>
            <Link
              href="/birth"
              style={{
                fontSize: '0.825rem',
                color: '#c9a84c',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              meok.ai/birth
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

