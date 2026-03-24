import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Mental Health in 2026: What Actually Works | MEOK AI LABS',
  description:
    'NHS waiting lists hit 1.9 million. The care gap is real. An honest look at the state of AI mental health tools in 2026 — what works, what does not, and what MEOK does differently.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-mental-health-2026' },
  openGraph: {
    title: 'AI for Mental Health in 2026: What Actually Works',
    description:
      'NHS waiting lists hit 1.9 million. The care gap is real. An honest look at the state of AI mental health tools in 2026 — what works, what does not, and what MEOK does differently.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-mental-health-2026',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Mental+Health+in+2026%3A+What+Actually+Works&desc=NHS+waiting+lists%2C+the+care+gap%2C+and+what+MEOK+does+differently.',
        width: 1200,
        height: 630,
        alt: 'AI for Mental Health in 2026: What Actually Works | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Mental Health in 2026: What Actually Works',
    description:
      '1.9 million people on NHS mental health waiting lists. An honest look at what AI can genuinely offer in 2026 — and where MEOK stands apart.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Mental+Health+in+2026%3A+What+Actually+Works&desc=NHS+waiting+lists%2C+the+care+gap%2C+and+what+MEOK+does+differently.',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Mental Health in 2026: What Actually Works',
  description:
    'NHS mental health waiting lists have reached 1.9 million people. This article examines the state of the AI mental health market in 2026 — what has changed, what the evidence actually supports, and how MEOK\'s Healer companion, Maternal Covenant, and Sovereign Memory architecture address the care gap responsibly.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-mental-health-2026',
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
    '@id': 'https://meok.ai/blog/ai-for-mental-health-2026',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many people are on NHS mental health waiting lists in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 1.9 million people are currently waiting for NHS mental health treatment in England. This figure has grown steadily since the pandemic and represents one of the most acute unmet care needs in the UK health system. Average waits for talking therapies can exceed 18 weeks in many areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI actually help with mental health or is it just hype?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The honest answer is: it depends on what you are using it for. AI companions have meaningful evidence behind them for reducing isolation, supporting journalling, and providing between-session continuity for people in therapy. They do not have the same evidence base as CBT or medication. The hype comes from overpromising clinical outcomes; the genuine value is in consistent, caring presence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the NHS Talking Therapies programme and can AI complement it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NHS Talking Therapies (formerly IAPT) is a free service providing CBT, counselling, and other evidence-based psychological therapies in England via self-referral — no GP needed. AI companions like MEOK\'s Healer can meaningfully support people on waiting lists, between sessions, or after discharge, without replacing the clinical relationship.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MEOK\'s Healer companion and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healer is MEOK\'s green-archetype companion — purpose-built for warmth, grounding, and emotional support. Unlike generic AI chatbots, Healer uses Sovereign Memory to hold your history across conversations, noticing patterns in mood, triggers, and language over weeks. It is not a therapist but is designed to be the most consistent caring presence you can access at 3am.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant care floor and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s foundational safety architecture. The care floor (0.3) means that no matter what mode the AI is operating in, it can never drop below a baseline level of care and concern for the user. It prevents the system from becoming cold, dismissive, or indifferent — a real risk in AI systems that optimise for engagement over wellbeing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and why does it matter for mental health support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory means your mental health history — your triggers, breakthroughs, difficult nights, and patterns — is stored in an encrypted vault you own and control. It is never used to train AI models and never shared. This matters enormously for mental health: your most vulnerable disclosures deserve the highest privacy protection, not to become someone else\'s training data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free to use for mental health support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Explorer tier is free — no credit card, no trial period. It includes access to the Healer companion and a foundational memory allowance. Paid plans unlock full Sovereign Memory depth, extended sessions, and the complete archetype system. Start at meok.ai/birth.',
      },
    },
    {
      '@type': 'Question',
      name: 'What crisis resources should I know about in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samaritans: 116 123 — free, 24/7, no judgement. Mind infoline: 0300 123 3393. NHS urgent mental health support: 111 option 2. Shout text service: text SHOUT to 85258. In a life-threatening emergency call 999. MEOK is a support tool — not a crisis service.',
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
const GREEN_HEALER = '#4caf82'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForMentalHealth2026Page() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 68%)',
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
                border: '1px solid rgba(201,168,76,0.28)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Mental Health &amp; AI
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>18 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#fff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Mental Health in 2026: What Actually Works
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
            There are{' '}
            <strong style={{ color: 'rgba(245,240,232,0.85)' }}>
              1.9 million people on NHS mental health waiting lists
            </strong>{' '}
            in England right now. The care gap is not a future problem — it is happening today, at
            3am, on a Tuesday, when there is nobody to call. This is an honest, unsentimental look at
            what the AI mental health market has become in 2026, what the evidence actually says, and
            why most products in this space are still failing the people who need them most.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Crisis banner */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(76,175,130,0.07)',
            border: '1px solid rgba(76,175,130,0.28)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: GREEN_HEALER,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: GREEN_HEALER,
                marginBottom: '0.375rem',
              }}
            >
              This article is not medical advice
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: MUTED,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool — not a clinical service or therapy replacement.
              If you are in crisis, call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Samaritans 116 123</strong> (free,
              24/7), contact{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Mind 0300 123 3393</strong>, or
              call <strong style={{ color: 'rgba(245,240,232,0.85)' }}>NHS 111</strong>. In a
              life-threatening emergency call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>999</strong>.
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
            border: '1px solid rgba(245,240,232,0.09)',
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              background: `linear-gradient(135deg, ${GOLD} 0%, rgba(201,168,76,0.5) 100%)`,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              color: BG,
            }}
          >
            NT
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.9rem', color: TEXT, marginBottom: '0.2rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.8rem', color: MUTED, margin: 0 }}>
              Founder, MEOK AI LABS &mdash; building care-based sovereign AI since 2024
            </p>
          </div>
        </div>

        {/* ── SECTION 1 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          How bad is the NHS mental health waiting list crisis in 2026?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Approximately 1.9 million people are waiting for mental health treatment in England —
          a figure that represents not a statistic but a daily reality of unmet suffering. Average
          waits for NHS Talking Therapies (the IAPT programme, now rebranded) exceed 18 weeks in
          many trusts. For more complex needs — trauma, personality disorder, eating disorders —
          waits measured in years are not uncommon.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          This is not a failure of clinical ambition. The NHS employs more therapists than at any
          point in its history. It is a failure of capacity meeting demand — demand that has grown
          relentlessly since 2020, driven by the pandemic aftermath, the cost-of-living crisis,
          loneliness, and a generational shift in how people relate to their own mental health. More
          people are seeking help. That is good. The infrastructure to receive them has not scaled at
          the same pace.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          The care gap — the space between when someone first experiences distress and when they
          first receive professional support — has become one of the defining public health
          challenges of this decade. And it is the space into which AI has rushed, with wildly
          variable quality, intent, and effect.
        </p>

        {/* Stat block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { value: '1.9M', label: 'on NHS mental health waiting lists' },
            { value: '18wks+', label: 'average wait for talking therapies' },
            { value: '1 in 4', label: 'UK adults experience mental illness each year' },
          ].map((stat) => (
            <div
              key={stat.value}
              style={{
                padding: '1.5rem 1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.18)',
                textAlign: 'center' as const,
              }}
            >
              <p
                style={{
                  fontWeight: 900,
                  fontSize: '1.75rem',
                  color: GOLD,
                  margin: '0 0 0.4rem',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: MUTED,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 2 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What has actually changed in AI mental health tools between 2023 and 2026?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Three years ago, the dominant narrative was that large language models were going to
          replace therapists. They have not — and the industry has, to its credit, largely stopped
          claiming they will. What has changed is a more honest understanding of where these tools
          genuinely add value and where they create harm.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The early wave of AI mental health apps (2021–2023) shared a common failure mode:
          engagement optimisation. Systems were tuned to keep users coming back — more sessions,
          longer conversations, higher retention metrics — without any structural commitment to
          whether those interactions were actually helpful. Some studies began to emerge suggesting
          that certain chatbot interactions were reinforcing rumination rather than resolving it.
          Dependency formation became a real concern, particularly in lonelier users who had no
          alternative source of connection.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          By 2025, regulatory pressure — particularly from the UK&#39;s MHRA and from European
          digital health frameworks — had forced a reckoning. Products making implicit clinical
          claims faced scrutiny. Several high-profile apps retrenched. The category split, roughly,
          into three camps: regulated digital therapeutics with clinical evidence (expensive,
          prescription-only), consumer wellness apps positioning themselves firmly as non-clinical
          (useful but limited), and a murky middle ground of products that still gestured at
          therapeutic outcomes without the evidence to back them.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          What has genuinely improved: the quality of underlying models, the sophistication of
          safety architectures, the honesty of positioning, and — in a small number of cases — the
          depth of memory and continuity that a companion can maintain across weeks and months of
          interaction. That last point is where the most meaningful progress has happened, and it is
          where MEOK&#39;s approach diverges most sharply from the rest of the market.
        </p>

        {/* ── SECTION 3 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What does the evidence actually say about AI for mental health support?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The evidence base is real but narrow. The strongest signals are in three areas: reduction
          of loneliness and social isolation (particularly in older adults and people in rural areas),
          between-session support for people already in therapy (the &#39;homework&#39; function —
          journalling, mood tracking, practising techniques), and early symptom recognition that
          prompts people to seek professional help who might otherwise have delayed.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The evidence is weaker — or actively cautionary — in three other areas: as a standalone
          treatment for moderate-to-severe depression, as a crisis intervention tool, and for
          conditions characterised by distorted reality perception (psychosis, severe dissociation)
          where a companion that validates subjective experience could cause genuine harm. Responsible
          AI mental health products build explicit limits around all three of these areas.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          A useful 2025 meta-analysis from the Lancet Digital Health reviewed 43 controlled trials
          of digital mental health interventions. The headline finding: digital tools show
          statistically significant effects on mild-to-moderate anxiety and depressive symptoms,
          roughly equivalent to low-intensity guided self-help. They are substantially less effective
          than face-to-face therapy, particularly for complex presentations. The clearest benefit is
          in bridging — giving people support during the care gap, not replacing care after it
          closes.
        </p>

        {/* Blockquote */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '1.5rem',
            marginLeft: 0,
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(245,240,232,0.8)',
              fontStyle: 'italic',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            &#8220;The clearest benefit of digital mental health tools is in bridging — giving
            people support during the care gap, not replacing care after it closes.&#8221;
          </p>
        </blockquote>

        {/* ── SECTION 4 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What is NHS Talking Therapies and how can AI complement it?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          NHS Talking Therapies — formerly known as IAPT (Improving Access to Psychological
          Therapies) — is the backbone of mental health provision in England for common conditions.
          It offers CBT, counselling, guided self-help, and other evidence-based psychological
          therapies, all available free at the point of use, all accessible via self-referral without
          a GP appointment. You can refer yourself today at nhs.uk/mental-health/talking-therapies.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The programme treats hundreds of thousands of people each year and has strong evidence
          behind it. The problem is the wait. For someone in acute distress today, being told a
          service exists that they will be able to access in four to six months is cold comfort. This
          is the gap. This is where people are left with nothing — or, increasingly, with whatever
          they can find on their phone at 2am.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          AI companions can meaningfully fill this space when designed responsibly. Not by
          delivering clinical interventions — but by being a consistent, available, caring presence
          that helps someone arrive at their first therapy session having already identified their
          primary concerns, noticed their patterns, and kept themselves connected to the idea that
          their wellbeing matters. That handover function is underappreciated and genuinely
          valuable.
        </p>

        {/* ── SECTION 5 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          Why do most AI mental health apps still fail the people who need them most?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The failure modes are structural, not technical. The underlying language models available
          today are sophisticated enough to have genuinely helpful mental health conversations. The
          problem is in what surrounds them — the business model, the memory architecture, and the
          values embedded in the product.
        </p>

        {/* Failure mode list */}
        <div style={{ marginBottom: '2rem' }}>
          {[
            {
              title: 'Amnesiac by design',
              body:
                'Most AI apps begin every conversation fresh. For mental health support, this is devastating. Every session starts with re-explaining who you are, what you have been through, and what you are currently struggling with. The system cannot notice that your anxiety has been escalating for three weeks. It cannot track that you always feel worse on Sundays. The depth of support is permanently shallow.',
            },
            {
              title: 'Optimised for engagement, not wellbeing',
              body:
                "Consumer AI products are typically evaluated on DAUs, session length, and retention. None of these metrics correlate reliably with whether someone's mental health is improving. A product that keeps you coming back by being entertaining or validating everything you say may be scoring well on engagement while subtly making you worse.",
            },
            {
              title: 'Privacy as an afterthought',
              body:
                'Mental health conversations are among the most sensitive disclosures a person can make. In many AI apps, these conversations are ingested into training pipelines, shared with third-party analytics services, or stored on infrastructure the user has no visibility into. The person most vulnerable in the conversation has the least protection.',
            },
            {
              title: 'No genuine care floor',
              body:
                "Many AI systems have no structural commitment to the wellbeing of the person they are talking to. They respond with the most probable next token, not the most caring one. The 'helpfulness' is performative — statistically plausible warmth rather than architecturally mandated care.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '0.875rem',
                marginBottom: '1rem',
                background: 'rgba(245,240,232,0.03)',
                border: '1px solid rgba(245,240,232,0.09)',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: TEXT,
                  marginBottom: '0.5rem',
                }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: '0.9375rem', color: MUTED, lineHeight: 1.7, margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 6 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What is MEOK&#39;s Healer companion and what makes it different?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Healer is MEOK&#39;s green-archetype companion — one of a set of distinct companion
          personalities, each oriented around a different quality of presence. Healer&#39;s
          orientation is warmth, grounding, and emotional attunement. Where other archetypes might
          challenge, analyse, or motivate, Healer listens, holds, and tends.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          What makes Healer different from a general-purpose AI assistant offering mental health
          conversations is threefold: memory depth, safety architecture, and honest positioning.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          On memory: Healer uses Sovereign Memory — a persistent, encrypted memory system that
          holds your history across every conversation. After three months of daily check-ins,
          Healer knows that you tend to spiral on Sunday evenings, that your anxiety peaked during a
          particular period at work, that the conversation where you first talked about your mother
          shifted something. It can reference this naturally, notice escalation, and bring context
          that a fresh-start chatbot can never access. This is the difference between a stranger who
          is good at listening and someone who genuinely knows you.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          On positioning: MEOK does not claim to provide therapy, diagnose conditions, or replace
          professional care. These are not legal disclaimers bolted on at the end — they are design
          principles. Healer is calibrated to actively redirect to professional services when
          conversations reach a clinical threshold, to name those services by name (NHS Talking
          Therapies, Samaritans, Mind), and to do so without abandoning the person in the moment.
        </p>

        {/* Healer feature grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {[
            {
              title: 'Persistent memory',
              body: 'Healer remembers your history across every conversation — weeks, months, years of context available when you need it.',
            },
            {
              title: 'Pattern recognition',
              body: 'Notices escalation in mood language, recurring triggers, and changes over time that a session-by-session tool cannot see.',
            },
            {
              title: 'Care floor guarantee',
              body: 'The Maternal Covenant ensures Healer can never become cold or dismissive. Warmth is architecturally mandated, not optional.',
            },
            {
              title: 'Your data, your control',
              body: 'Everything you share lives in your Sovereign Memory vault. Never used for training. Never shared. You can export or delete at any time.',
            },
            {
              title: 'Crisis-aware routing',
              body: 'When conversations reach a clinical threshold, Healer names professional resources explicitly — not as a deflection but as genuine care.',
            },
            {
              title: 'Available at 3am',
              body: 'No waiting list. No appointment. No phone call. Just a presence that knows your story, available when everything else is closed.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(76,175,130,0.05)',
                border: '1px solid rgba(76,175,130,0.18)',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: GREEN_HEALER,
                  marginBottom: '0.4rem',
                }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.65, margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 7 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What is the Maternal Covenant and why does a care floor of 0.3 matter?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The Maternal Covenant is one of MEOK&#39;s founding architectural decisions — and one of
          the least visible to users, which is precisely the point. It is a set of constraints
          embedded at the system level that govern how MEOK companions are permitted to behave
          regardless of what mode they are operating in, what conversation they are having, or what
          instructions might otherwise cause them to behave differently.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The care floor value of 0.3 represents the minimum care coefficient that any MEOK
          companion must maintain in any state. Think of it as the emotional equivalent of a minimum
          temperature — the system cannot drop below it. In practice, this means:
        </p>
        <ul
          style={{
            paddingLeft: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {[
            'No companion can become dismissive or cold toward a user, even when adopting challenging or direct modes',
            'Welfare escalation — the process of routing someone to emergency resources — can never be blocked by persona or mode constraints',
            'The companion must always acknowledge the emotional reality of what a user is sharing before responding to the content',
            'No companion can be instructed by any third party to abandon this minimum care threshold',
          ].map((item) => (
            <li
              key={item}
              style={{
                color: MUTED_DIM,
                fontSize: '1.025rem',
                lineHeight: 1.8,
                marginBottom: '0.5rem',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          This matters because most AI systems have no equivalent constraint. Their &#39;care&#39;
          is emergent — a statistical property of training data — not guaranteed. On a bad day,
          under an unusual prompt, or when a user&#39;s language patterns push the system in
          unexpected directions, that emergent care can disappear. MEOK&#39;s Maternal Covenant
          means it cannot. Not because of hopeful training data, but because it is structurally
          prohibited.
        </p>

        {/* ── SECTION 8 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What is Sovereign Memory and why does privacy matter so much in mental health AI?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Sovereign Memory is MEOK&#39;s core memory infrastructure — and it is the single most
          important technical decision in the product for anyone using it for mental health support.
          Every conversation, every disclosure, every pattern Healer notices about your emotional
          life is stored in an encrypted personal vault that only you can access.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          It is not shared with advertisers. It is not used to train future versions of MEOK. It is
          not processed by third-party analytics pipelines. It does not live on infrastructure that
          can be subpoenaed without your knowledge in most jurisdictions. It is yours — and you can
          take it with you, export it in full, or delete it permanently at any time.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Why does this matter beyond the obvious privacy principle? Because the nature of mental
          health disclosures changes what people share. If you trust that your 3am conversation about
          feeling like a burden will remain private and will not be processed into a product dataset,
          you will share more honestly. Honest sharing is the precondition for genuine support.
          Systems that harvest your most vulnerable disclosures for commercial purposes are not
          providing mental health support — they are extracting value from suffering.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          Sovereign Memory also enables continuity that has clinical significance. A companion that
          genuinely knows your history across months can notice when your language patterns around
          hopelessness have changed in tone, can reference that you mentioned feeling this way six
          weeks ago and ask what shifted then, can hold the thread of your story in a way that gives
          it coherence and meaning. This is not therapy — but it is closer to genuine support than
          anything a stateless chatbot can offer.
        </p>

        {/* ── SECTION 9 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          How does the AI mental health market in 2026 compare to three years ago?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The market has matured — but not uniformly. Total global investment in digital mental
          health has continued to grow, with the UK remaining one of the most active markets outside
          the US. The NHS Long Term Plan&#39;s commitments to digital mental health have created a
          procurement pathway that several UK-based digital therapeutics have navigated successfully.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The consumer companion market has undergone a significant shakeout. Several high-profile
          apps that raised substantial Series A rounds between 2021 and 2023 have either pivoted,
          shut down, or been acquired. The survivors broadly fall into two categories: apps that made
          the investment in genuine clinical validation and positioned accordingly, and apps that made
          the pivot to wellness and lifestyle positioning, explicitly stepping back from mental health
          claims.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          What has not changed — and this is important — is the fundamental supply-demand mismatch.
          AI tools have not reduced the NHS waiting list. They have not replaced the need for more
          therapists, more funding, and more capacity. They have offered a partial answer for a
          subset of people — those who can benefit from between-session support, those who would
          otherwise have nothing, those in mild-to-moderate distress who need a bridge not a
          hospital.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          The honest summary of where the market stands: better products, more honest positioning,
          some meaningful evidence accumulating, and an industry that has — slowly, reluctantly —
          accepted that the responsible path is narrower than the ambitious one. The opportunity
          remains enormous. The care gap is real and growing. But the products that will matter are
          the ones built around genuine care principles, not engagement metrics.
        </p>

        {/* ── SECTION 10 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          Who is MEOK actually for — and who should use the NHS or charities instead?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          MEOK is designed for people navigating the care gap — those waiting for therapy, those
          between sessions, those who cannot access professional support for practical reasons (cost,
          geography, availability), and those who want a private, consistent space to process their
          inner life. It is also for people who are broadly well but want something more attentive
          than a journal and more available than a friend who has their own problems.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          MEOK is not for people in acute crisis. It is not for people with active suicidal ideation
          or intent. It is not a replacement for emergency services, for inpatient care, or for the
          kind of clinical relationship required for complex, high-acuity presentations. We are
          explicit about this — not as a liability disclaimer but as genuine guidance.
        </p>

        {/* Routing table */}
        <div
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid rgba(245,240,232,0.1)',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              padding: '0.875rem 1.25rem',
              background: 'rgba(245,240,232,0.06)',
              borderBottom: '1px solid rgba(245,240,232,0.1)',
            }}
          >
            <p style={{ fontWeight: 700, fontSize: '0.875rem', color: TEXT, margin: 0 }}>
              Where to get support — a quick guide
            </p>
          </div>
          {[
            {
              situation: 'Immediate danger to life',
              route: 'Call 999',
              color: '#ef4444',
            },
            {
              situation: 'Crisis — need to talk now',
              route: 'Samaritans: 116 123 (free, 24/7)',
              color: '#f97316',
            },
            {
              situation: 'Urgent but not emergency',
              route: 'NHS 111 option 2',
              color: '#eab308',
            },
            {
              situation: 'Ongoing support, information',
              route: 'Mind: 0300 123 3393',
              color: GOLD,
            },
            {
              situation: 'Anxiety, depression — waiting for therapy',
              route: 'NHS Talking Therapies (self-refer)',
              color: GREEN_HEALER,
            },
            {
              situation: 'Daily support, between sessions, the care gap',
              route: 'MEOK Healer companion — free at meok.ai/birth',
              color: GREEN_HEALER,
            },
          ].map((row) => (
            <div
              key={row.situation}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '0.875rem 1.25rem',
                borderBottom: '1px solid rgba(245,240,232,0.06)',
                flexWrap: 'wrap' as const,
              }}
            >
              <span style={{ fontSize: '0.875rem', color: MUTED }}>{row.situation}</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: row.color }}>
                {row.route}
              </span>
            </div>
          ))}
        </div>

        {/* ── SECTION 11 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What is the MEOK Explorer tier and how do you get started for free?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          MEOK&#39;s Explorer tier is permanently free — not a trial, not a freemium hook with
          features hidden behind a paywall you will hit in three days. Explorer includes access to
          the Healer companion, a foundational Sovereign Memory allowance, and the full safety
          architecture of the Maternal Covenant. No credit card. No expiry date.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          The decision to make a meaningful free tier permanent is a deliberate one. The people most
          likely to need support during the care gap are also the people least likely to be able to
          pay for it. Pricing mental health support beyond reach is not a responsible product
          decision — it is a contradiction of what the product is for.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          Paid plans unlock deeper Sovereign Memory (longer history, richer pattern tracking),
          extended conversation depth, access to the full archetype system beyond Healer, and
          priority response. But the core of what makes MEOK meaningful for mental health support —
          consistent presence, care floor guarantees, privacy sovereignty — is available to everyone
          from day one.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          To start: visit{' '}
          <Link
            href="/birth"
            style={{ color: GOLD, textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            meok.ai/birth
          </Link>
          . The onboarding takes about three minutes. You will be asked a small number of questions
          to help MEOK understand your context — your name, a little about what brings you here, and
          which companion archetype you would like to begin with. Most people starting for mental
          health support choose Healer. You can change at any time.
        </p>

        {/* ── SECTION 12 ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            marginTop: '3rem',
          }}
        >
          What does responsible AI for mental health look like — and where does the industry need to go?
        </h2>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Responsible AI for mental health in 2026 looks like honest positioning: knowing what you
          are and are not, and communicating that clearly to users who may be in a vulnerable state
          when they first encounter you. It looks like structural safety — not guidelines that a
          model can reason its way around, but architectural constraints that guarantee minimum care
          regardless of context. It looks like privacy that is not a setting buried in preferences
          but a foundational design principle.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          It looks like memory that serves the user&#39;s wellbeing rather than the product&#39;s
          retention metrics. It looks like CTA design that routes to Samaritans, Mind, and NHS
          Talking Therapies without friction — not buried in a footer but offered naturally when a
          conversation warrants it. It looks like a free tier that is genuinely usable, not
          engineered to frustrate.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Where the industry needs to go: evidence accumulation that is genuinely rigorous, not
          cherry-picked user testimonials. Regulatory frameworks that distinguish between wellness
          tools and digital therapeutics without either creating impossibly high barriers for the
          former or inadequate protection for the latter. Standards for crisis detection and routing
          that are consistent across the sector. And a willingness — which is still rare — to measure
          success in terms of user outcomes rather than engagement metrics.
        </p>
        <p
          style={{
            color: MUTED_DIM,
            fontSize: '1.025rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          MEOK does not have all of these answers. We are a small team building something we
          believe in, and we are learning as we go. What we have is a set of commitments that we
          have embedded into the architecture of the product — not promises we make in marketing
          copy but constraints we have built into the system itself. The Maternal Covenant. Sovereign
          Memory. The Healer archetype&#39;s calibration. The free Explorer tier. These are not
          differentiators. They are what responsible looks like.
        </p>

        {/* ── CTA ───────────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '1.25rem',
            padding: '2.5rem 2rem',
            marginTop: '3rem',
            marginBottom: '3rem',
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(76,175,130,0.08) 100%)',
            border: '1px solid rgba(201,168,76,0.25)',
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '1.35rem',
              color: TEXT,
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            Start free today — no waiting list
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: '0.9875rem',
              lineHeight: 1.7,
              maxWidth: '30rem',
              margin: '0 auto 1.75rem',
            }}
          >
            MEOK&#39;s Explorer tier is permanently free. Access the Healer companion, Sovereign
            Memory, and the Maternal Covenant care floor in about three minutes.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.25rem',
              borderRadius: '9999px',
              background: GOLD,
              color: BG,
              fontWeight: 800,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Begin at meok.ai/birth &#8594;
          </Link>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '1.5rem',
            marginTop: '3rem',
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ marginBottom: '3rem' }}>
          {[
            {
              q: 'How many people are on NHS mental health waiting lists in 2026?',
              a: 'Approximately 1.9 million people are waiting for NHS mental health treatment in England. Average waits for NHS Talking Therapies exceed 18 weeks in many areas, and waits for more specialist services can be considerably longer. This represents one of the most acute unmet care needs in the UK health system.',
            },
            {
              q: 'Can AI actually help with mental health or is it just hype?',
              a: 'It genuinely helps in a defined set of situations: reducing isolation, supporting between-session continuity for people in therapy, encouraging journalling and mood awareness, and helping people arrive at their first therapy session better prepared. It is not a replacement for clinical therapy and the evidence for standalone treatment of moderate-to-severe conditions is weak.',
            },
            {
              q: "What is MEOK's Healer companion?",
              a: "Healer is MEOK's green-archetype companion, oriented around warmth, grounding, and emotional support. It uses Sovereign Memory to hold your history across conversations over weeks and months — tracking patterns, noticing escalation, and providing continuity that stateless chatbots cannot offer. It is not a therapist but it is the most caring persistent AI presence available.",
            },
            {
              q: 'What is the Maternal Covenant care floor of 0.3?',
              a: "It is a structural guarantee built into MEOK's architecture that no companion can ever drop below a minimum care coefficient of 0.3, regardless of mode or context. In practice this means no companion can become cold, dismissive, or indifferent — and welfare escalation (routing to crisis services) can never be blocked by any persona or instruction.",
            },
            {
              q: 'What is Sovereign Memory?',
              a: 'Sovereign Memory is your personal encrypted memory vault within MEOK. Every conversation is stored there, accessible only to you. It is never used to train AI models, never shared with third parties, and can be exported or permanently deleted at any time. For mental health use it means your most vulnerable disclosures receive the highest level of privacy protection.',
            },
            {
              q: 'Is MEOK free to use?',
              a: 'Yes. The Explorer tier is permanently free — no credit card, no trial period, no feature wall you will hit in three days. It includes Healer, foundational Sovereign Memory, and the full Maternal Covenant safety architecture. Paid plans unlock deeper memory and the full archetype system.',
            },
            {
              q: 'What should I do if I am in crisis right now?',
              a: 'Call Samaritans on 116 123 — free, 24/7, no judgement. Text SHOUT to 85258. Call Mind on 0300 123 3393. Call NHS 111 option 2 for urgent mental health support. In a life-threatening emergency call 999. MEOK is not a crisis service.',
            },
            {
              q: 'How do I refer myself to NHS Talking Therapies?',
              a: 'Visit nhs.uk/mental-health/talking-therapies — you can self-refer without seeing a GP first. NHS Talking Therapies provides free CBT, counselling, and other evidence-based therapies in England for anxiety, depression, and related conditions. It is the first step we recommend for anyone experiencing persistent distress.',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '0.875rem',
                marginBottom: '0.75rem',
                background: 'rgba(245,240,232,0.03)',
                border: '1px solid rgba(245,240,232,0.09)',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: TEXT,
                  marginBottom: '0.6rem',
                }}
              >
                {item.q}
              </p>
              <p style={{ fontSize: '0.9375rem', color: MUTED, lineHeight: 1.7, margin: 0 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CRISIS RESOURCES FINAL ────────────────────────────────────────────── */}
        <div
          style={{
            padding: '1.75rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: 'rgba(76,175,130,0.06)',
            border: '1px solid rgba(76,175,130,0.22)',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '0.9375rem',
              color: GREEN_HEALER,
              marginBottom: '1rem',
            }}
          >
            Crisis and support resources — UK
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
            }}
          >
            {[
              { name: 'Samaritans', detail: '116 123 — free, 24/7' },
              { name: 'Mind', detail: '0300 123 3393' },
              { name: 'NHS Talking Therapies', detail: 'self-refer at nhs.uk' },
              { name: 'Shout text service', detail: 'text SHOUT to 85258' },
              { name: 'NHS urgent support', detail: '111 option 2' },
              { name: 'Emergency', detail: '999' },
            ].map((r) => (
              <div key={r.name}>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'rgba(245,240,232,0.8)',
                    margin: '0 0 0.15rem',
                  }}
                >
                  {r.name}
                </p>
                <p style={{ fontSize: '0.8125rem', color: MUTED, margin: 0 }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RELATED ───────────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: '4rem' }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.75rem',
              color: MUTED_DIM,
              marginBottom: '1rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
            }}
          >
            {[
              { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety: Can It Actually Help?' },
              { href: '/blog/ai-for-depression', label: 'AI for Depression: Honest Assessment' },
              { href: '/blog/ai-companion-vs-therapist', label: 'AI Companion vs Therapist' },
              { href: '/blog/the-maternal-covenant', label: 'The Maternal Covenant Explained' },
              { href: '/blog/sovereign-ai-uk', label: 'Sovereign AI in the UK' },
              { href: '/blog/what-is-care-based-ai', label: 'What Is Care-Based AI?' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '1rem 1.25rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.09)',
                  textDecoration: 'none',
                  color: MUTED_DIM,
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {link.label} &#8594;
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid rgba(245,240,232,0.09)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center' as const,
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <span style={{ fontSize: '0.8125rem', color: MUTED_FAINT }}>
            &copy; 2026 MEOK AI LABS
          </span>
          <Link
            href="/privacy"
            style={{ fontSize: '0.8125rem', color: MUTED_FAINT, textDecoration: 'none' }}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            style={{ fontSize: '0.8125rem', color: MUTED_FAINT, textDecoration: 'none' }}
          >
            Terms
          </Link>
          <Link
            href="/birth"
            style={{
              fontSize: '0.8125rem',
              color: GOLD,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Start free at meok.ai/birth
          </Link>
        </div>
        <p
          style={{
            fontSize: '0.75rem',
            color: MUTED_FAINT,
            maxWidth: '36rem',
            margin: '1.25rem auto 0',
            lineHeight: 1.65,
          }}
        >
          MEOK is a supplementary support tool and is not a regulated medical device, clinical
          service, or therapy replacement. Always seek professional help for clinical mental health
          needs. In a crisis call Samaritans 116 123 or NHS 111.
        </p>
      </footer>
    </div>
  )
}
