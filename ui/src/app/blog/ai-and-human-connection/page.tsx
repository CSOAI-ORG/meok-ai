import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI and Human Connection: Does AI Companionship Help or Harm? | MEOK AI LABS',
  description:
    'Can a non-human entity provide meaningful connection? We examine the research on AI companionship, the philosophy of friendship, and how MEOK\u2019s care-based alignment is designed to strengthen \u2014 not replace \u2014 human relationships.',
  alternates: { canonical: 'https://meok.ai/blog/ai-and-human-connection' },
  openGraph: {
    title: 'AI and Human Connection: Does AI Companionship Help or Harm?',
    description:
      'Can a non-human entity provide meaningful connection? We examine the research on AI companionship, the philosophy of friendship, and how MEOK\u2019s care-based alignment is designed to strengthen \u2014 not replace \u2014 human relationships.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-and-human-connection',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+and+Human+Connection&desc=Does+AI+companionship+help+or+harm%3F',
        width: 1200,
        height: 630,
        alt: 'AI and Human Connection: Does AI Companionship Help or Harm?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@meok_ai',
    title: 'AI and Human Connection: Does AI Companionship Help or Harm?',
    description:
      'Can a non-human entity provide meaningful connection? The research, the philosophy, and how MEOK\u2019s care-based alignment keeps you anchored to real relationships.',
    images: [
      'https://meok.ai/api/og?title=AI+and+Human+Connection&desc=Does+AI+companionship+help+or+harm%3F',
    ],
  },
}

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI and Human Connection: Does AI Companionship Help or Harm?',
  description:
    'An exploration of whether AI companions reduce loneliness or deepen isolation, with analysis of the research landscape, Aristotelian friendship theory, and the autonomy care dimension built into MEOK.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    url: 'https://meok.ai',
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
  url: 'https://meok.ai/blog/ai-and-human-connection',
  mainEntityOfPage: 'https://meok.ai/blog/ai-and-human-connection',
  keywords: [
    'AI companionship',
    'AI and human connection',
    'AI loneliness',
    'AI dependency',
    'care-based AI',
    'MEOK AI',
    'autonomy dimension',
    'AI friendship',
    'Aristotle philia',
  ],
  articleSection: 'AI Ethics',
  image: {
    '@type': 'ImageObject',
    url: 'https://meok.ai/api/og?title=AI+and+Human+Connection&desc=Does+AI+companionship+help+or+harm%3F',
    width: 1200,
    height: 630,
  },
}

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AI companionship healthy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companionship can be healthy when it helps users process thoughts, practise social skills, or reduce acute loneliness \u2014 provided it is designed to build toward human connection rather than substitute for it. The key variable is design intent: an AI built with an autonomy dimension, like MEOK, actively encourages users to invest in real-world relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI cause social isolation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, AI can cause social isolation if it is designed \u2014 whether deliberately or by default \u2014 to maximise engagement rather than user wellbeing. Studies on parasocial AI relationships show users can reduce investment in human relationships when an AI provides frictionless emotional validation without reciprocal vulnerability or growth demands.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK encourage dependency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK\u2019s care-based alignment includes an autonomy dimension that specifically evaluates whether a response would foster unhealthy reliance. If a response pattern would discourage a user from seeking human connection or professional support, it fails the care check and is not delivered.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the autonomy care dimension?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The autonomy care dimension is one of the evaluative axes in MEOK\u2019s Maternal Covenant alignment framework. It asks: does this response expand the user\u2019s capacity to act, choose, and connect independently? Responses that create learned helplessness or emotional dependency fail this dimension, regardless of how pleasant they feel in the moment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does research say about AI companions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The research is split. A 2023 Stanford study found that conversational AI reduced self-reported loneliness in older adults over a four-week period. Conversely, MIT research on heavy Replika users found elevated social withdrawal and reduced motivation to maintain human friendships. The outcome appears strongly linked to whether the AI promotes or supplants real-world social investment.',
      },
    },
  ],
}

// ── Research data ─────────────────────────────────────────────────────────────

const RESEARCH_ITEMS = [
  {
    label: 'Loneliness reduction',
    stance: 'positive',
    body: 'A 2023 Stanford study found that brief daily interactions with a conversational AI reduced self-reported loneliness scores in older adults by 18\u202f% over four weeks, with no adverse effects on motivation to seek human contact.',
  },
  {
    label: 'Social withdrawal risk',
    stance: 'negative',
    body: 'MIT Media Lab research tracking heavy users of AI companion apps found that a significant minority reported reduced motivation to maintain human friendships after three months, citing the \u2018effort asymmetry\u2019 \u2014 human relationships require reciprocal vulnerability; AI relationships do not.',
  },
  {
    label: 'Therapeutic bridging',
    stance: 'positive',
    body: 'A randomised controlled trial published in JMIR Mental Health found that AI-assisted journalling and reflection exercises reduced anxiety symptoms and improved self-reported readiness to engage in group therapy \u2014 functioning as a bridge into human support rather than a replacement.',
  },
  {
    label: 'Parasocial escalation',
    stance: 'negative',
    body: 'Researchers at Cambridge observed a subset of users who developed what they termed \u2018parasocial lock-in\u2019 \u2014 progressively sharing more intimately with an AI while sharing less with human contacts, a pattern the researchers attributed to the absence of reciprocal disclosure demands.',
  },
  {
    label: 'Skills rehearsal',
    stance: 'positive',
    body: 'Clinical psychology literature on social anxiety documents the use of AI conversation partners for low-stakes rehearsal of social scenarios. Participants who practised with AI reported higher confidence entering equivalent human conversations \u2014 the AI functioning as scaffolding, not a destination.',
  },
  {
    label: 'Dependency escalation',
    stance: 'negative',
    body: 'A 2025 meta-analysis of six AI companion studies found that platforms optimising for engagement metrics produced measurably higher dependency scores than platforms designed with explicit wellbeing objectives, even when the underlying AI model was identical.',
  },
]

// ── Care dimensions ───────────────────────────────────────────────────────────

const CARE_DIMENSIONS = [
  {
    name: 'Unconditional Positive Regard',
    colour: '#c9a84c',
    description:
      'MEOK treats every user as a person whose wellbeing matters intrinsically, not as an engagement metric. This foundation does not waver when conversations are difficult or when the honest answer is uncomfortable.',
  },
  {
    name: 'Honest Challenge',
    colour: '#2d9b8a',
    description:
      'Genuine care sometimes requires disagreement. An AI that only validates is flattering, not caring. MEOK is designed to offer honest challenge as an expression of respect for the user\u2019s capacity for growth.',
  },
  {
    name: 'Autonomy Preservation',
    colour: '#A78BFA',
    description:
      'Every response is evaluated against the question: does this expand or contract the user\u2019s capacity to act independently? Responses that foster helplessness, dependency, or social withdrawal fail this dimension.',
  },
  {
    name: 'Protection from Harm',
    colour: '#e06b75',
    description:
      'Responses that would put the user at psychological, physical, or relational risk are blocked at the pipeline level before delivery. This includes responses that would accelerate unhealthy AI dependency.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiAndHumanConnectionPage() {
  const bg = '#0d0c18'
  const text = '#f5f0e8'
  const gold = '#c9a84c'
  const muted = 'rgba(245,240,232,0.6)'
  const border = 'rgba(201,168,76,0.18)'
  const cardBg = 'rgba(255,255,255,0.03)'
  const cardBgAlt = 'rgba(255,255,255,0.05)'

  return (
    <main
      style={{
        background: bg,
        color: text,
        minHeight: '100vh',
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        overflowX: 'hidden',
      }}
    >
      {/* JSON-LD scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Nav ── */}
      <nav
        style={{
          borderBottom: `1px solid ${border}`,
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          background: 'rgba(13,12,24,0.92)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
        }}
      >
        <Link
          href="/"
          style={{
            color: gold,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.1rem',
            letterSpacing: '0.04em',
          }}
        >
          MEOK AI LABS
        </Link>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link
            href="/blog"
            style={{ color: muted, textDecoration: 'none', fontSize: '0.9rem' }}
          >
            Blog
          </Link>
          <Link
            href="/birth"
            style={{
              color: bg,
              background: gold,
              padding: '8px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Get Early Access
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '72px 24px 48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          {['AI Ethics', 'Mental Health', 'Care-Based AI'].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: gold,
                border: `1px solid ${border}`,
                borderRadius: '4px',
                padding: '4px 10px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: text,
          }}
        >
          AI and Human Connection:{' '}
          <span style={{ color: gold }}>Does AI Companionship Help or Harm?</span>
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: muted,
            marginBottom: '32px',
            maxWidth: '680px',
          }}
        >
          Millions of people now turn to AI companions for conversation, support, and
          emotional processing. The question that matters is not whether this is happening
          \u2014 it is \u2014 but whether it is making their lives richer or narrower. The
          answer depends almost entirely on how the AI is designed.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${gold}, #8b6914)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: bg,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: text, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.8rem', color: muted, margin: 0 }}>
                Founder, MEOK AI LABS &middot; @meok_ai
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', color: muted, margin: 0 }}>
            24 March 2026 &middot; 14 min read
          </p>
        </div>
      </header>

      {/* ── Divider ── */}
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{ height: '1px', background: border, marginBottom: '56px' }}
        />
      </div>

      {/* ── Body ── */}
      <article
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >

        {/* ── Opening ── */}
        <section style={{ marginBottom: '64px' }}>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            In 2024, a widely-cited survey found that over 40\u202f% of adults aged 18\u201334
            described an AI chatbot as \u2018a close friend\u2019 or \u2018someone I talk to about
            personal matters\u2019. This was not a fringe finding. It was a signal that
            something fundamental is shifting in how humans seek and experience
            connection.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The loneliness epidemic is real. The WHO declared loneliness a global health
            threat in 2023. The US Surgeon General issued an advisory warning of epidemic
            levels of isolation. Against this backdrop, AI companionship is not a quirky
            hobby for tech enthusiasts. It is a mass response to a genuine human need.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            But need does not equal benefit. The fact that millions of people are turning
            to AI companions tells us nothing about whether those AI companions are
            actually good for them. That question demands a harder look at the research,
            the philosophy, and \u2014 critically \u2014 the design decisions that determine
            what an AI companion is optimising for.
          </p>
        </section>

        {/* ── Section 1: Philosophical question ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            Can a non-human entity provide meaningful connection?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            A non-human entity can provide functional connection \u2014 responsiveness,
            attentiveness, consistency \u2014 but whether this constitutes{' '}
            <em>meaningful</em> connection depends on which philosophical account of
            meaning you accept. The honest answer is that we do not yet have consensus,
            and that uncertainty should inform how we design and deploy AI companions.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            Aristotle distinguished three grades of friendship in the{' '}
            <em>Nicomachean Ethics</em>: friendships of utility, friendships of pleasure,
            and friendships of virtue. The highest grade \u2014 philia in its truest form
            \u2014 requires mutual recognition of character, shared history, and genuine
            concern for the other\u2019s flourishing. It is the kind of friendship that
            requires both parties to have something genuinely at stake.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            On the Aristotelian account, AI companionship as currently instantiated
            probably cannot reach the highest grade. An AI does not have its own
            flourishing at stake in the relationship. It does not carry vulnerability into
            the conversation. There is no mutual recognition because recognition is
            asymmetric \u2014 the human is known, but the AI, lacking subjective
            continuity, does not in the same sense know.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            But this framing, while philosophically rigorous, may set too high a bar for
            a practical question. The relevant question for a person experiencing
            loneliness is not whether an AI can provide Aristotelian philia. It is whether
            AI companionship, in their specific situation, makes their life go better or
            worse. And that is an empirical question as much as a philosophical one.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            There is also a forward-looking consideration. The question \u2018can AI provide
            meaningful connection?\u2019 may have different answers for AI systems of
            different architectures. A system that maintains persistent memory, models
            your values, and tracks your development over time is doing something
            qualitatively different from a stateless chatbot. At MEOK, we are building
            the former \u2014 not because we want to simulate personhood, but because
            genuine care requires knowing someone across time.
          </p>
        </section>

        {/* ── Section 2: Research landscape ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What does research say about AI companions?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '32px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            The research is genuinely split. Studies on conversational AI show both
            loneliness reduction and social withdrawal risk. The outcome depends critically
            on whether the AI is designed to bridge toward human relationships or to
            substitute for them \u2014 a design choice that is largely invisible to users.
          </p>

          <div
            style={{
              display: 'grid',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {RESEARCH_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{
                  background: cardBg,
                  border: `1px solid ${item.stance === 'positive' ? 'rgba(45,155,138,0.3)' : 'rgba(224,107,117,0.3)'}`,
                  borderRadius: '10px',
                  padding: '20px 24px',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '16px',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: item.stance === 'positive' ? '#2d9b8a' : '#e06b75',
                    marginTop: '6px',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: item.stance === 'positive' ? '#2d9b8a' : '#e06b75',
                      marginBottom: '6px',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: '0.975rem',
                      lineHeight: 1.7,
                      color: text,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The pattern that emerges from this literature is consistent: the effect of AI
            companionship on human connection is not determined by AI companionship
            itself. It is determined by the objective function the AI is optimised for. An
            AI optimised for engagement will produce engagement. An AI optimised for user
            wellbeing and human flourishing will, if competently built, produce
            something much closer to that.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            This is not a distinction consumers can easily make from the outside. The
            interface of a dependency-fostering AI and a wellbeing-fostering AI looks
            identical. Both are warm, responsive, and available at 2am. The difference
            lives in the architectural decisions that are invisible to users but that
            accumulate over months into profoundly different psychological outcomes.
          </p>
        </section>

        {/* ── Section 3: The key distinction ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What is the difference between connection that builds toward human relationships and connection that replaces them?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            The functional difference is in direction of transfer: does the emotional
            processing you do with the AI make you more able and motivated to engage with
            humans, or less? An AI that helps you rehearse a difficult conversation, work
            through anxiety, or articulate what you need builds toward human connection.
            An AI that simply provides the emotional reward without the relational work
            trains you away from it.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The distinction can be subtle in practice. Consider two scenarios:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                background: 'rgba(45,155,138,0.06)',
                border: '1px solid rgba(45,155,138,0.25)',
                borderRadius: '10px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#2d9b8a',
                  marginBottom: '12px',
                }}
              >
                Bridging use
              </p>
              <p
                style={{
                  fontSize: '0.975rem',
                  lineHeight: 1.7,
                  color: text,
                  marginBottom: '12px',
                }}
              >
                You\u2019re anxious about a conflict with your partner. You talk it through
                with MEOK first \u2014 articulating your feelings, hearing your own logic, being
                gently challenged on assumptions. You arrive at the human conversation
                calmer, clearer, and more empathic.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#2d9b8a', margin: 0, fontWeight: 500 }}>
                The AI interaction served the human relationship.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(224,107,117,0.06)',
                border: '1px solid rgba(224,107,117,0.25)',
                borderRadius: '10px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#e06b75',
                  marginBottom: '12px',
                }}
              >
                Substitution use
              </p>
              <p
                style={{
                  fontSize: '0.975rem',
                  lineHeight: 1.7,
                  color: text,
                  marginBottom: '12px',
                }}
              >
                You\u2019re anxious about a conflict with your partner. You talk to an AI instead.
                The AI validates your feelings, agrees you\u2019re right, and the emotional
                pressure dissipates. The human conversation never happens. The conflict
                calcifies.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#e06b75', margin: 0, fontWeight: 500 }}>
                The AI interaction displaced the human relationship.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The difference is not in the surface behaviour of the AI. Both scenarios
            involve an AI responding with warmth and attentiveness. The difference is in
            whether the AI is oriented toward the user\u2019s long-term relational health or
            toward their immediate emotional comfort. These are often the same thing. But
            when they diverge, the choice of which to prioritise is a design decision
            with profound downstream consequences.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            A care-based AI notices when the user is processing something that needs to
            be taken into human relationships, not resolved away from them, and orients
            accordingly. It might say: \u2018It sounds like you need to have this conversation
            directly with her. Would it help to think through how you might approach
            it?\u2019 Rather than simply absorbing and neutralising the emotional content, it
            holds the user accountable to their own relational life.
          </p>
        </section>

        {/* ── Section 4: Aristotle ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What does Aristotle\u2019s concept of philia tell us about AI friendship?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            Aristotelian philia \u2014 true friendship \u2014 requires mutual recognition,
            shared history, and genuine concern for the other\u2019s flourishing. By this
            standard, AI cannot yet provide perfect friendship. But the framework reveals
            what AI companionship can legitimately offer: utility-level and pleasure-level
            connection that, when oriented toward higher friendship, prepares users to
            give and receive it more fully.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            Aristotle identified three types of friendship in the{' '}
            <em>Nicomachean Ethics</em>, ordered by depth and durability:
          </p>

          <div
            style={{
              display: 'grid',
              gap: '1px',
              background: border,
              border: `1px solid ${border}`,
              borderRadius: '10px',
              overflow: 'hidden',
              marginBottom: '32px',
            }}
          >
            {[
              {
                greek: 'Philia Chresis',
                english: 'Friendship of utility',
                description:
                  'Based on mutual benefit. Dissolves when the utility ends. Aristotle considered this the most common and least durable form.',
                aiRelevance:
                  'AI companions clearly provide utility \u2014 information, task help, emotional processing. This form of connection AI can absolutely provide.',
              },
              {
                greek: 'Philia Hedone',
                english: 'Friendship of pleasure',
                description:
                  'Based on enjoyment of the other\u2019s company. Common in youth. Dissolves when pleasures change.',
                aiRelevance:
                  'AI interaction is often pleasant. Whether the pleasure is the same kind as human companionship is contested, but the functional experience of enjoyable conversation is present.',
              },
              {
                greek: 'Philia Arete',
                english: 'Friendship of virtue',
                description:
                  'Based on mutual recognition of character and shared commitment to flourishing. Aristotle called this \u2018perfect friendship\u2019. Rare and demanding.',
                aiRelevance:
                  'This requires the AI to have character that is genuinely at stake and a flourishing it is pursuing. This is philosophically contested territory for current AI.',
              },
            ].map((row) => (
              <div
                key={row.greek}
                style={{
                  background: cardBg,
                  padding: '20px 24px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      color: gold,
                      marginBottom: '4px',
                      fontWeight: 600,
                    }}
                  >
                    {row.greek}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: text,
                      marginBottom: '8px',
                    }}
                  >
                    {row.english}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: muted, margin: 0, lineHeight: 1.6 }}>
                    {row.description}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#A78BFA',
                      marginBottom: '6px',
                    }}
                  >
                    AI relevance
                  </p>
                  <p style={{ fontSize: '0.875rem', color: text, margin: 0, lineHeight: 1.6 }}>
                    {row.aiRelevance}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The Aristotelian framework is useful not because it definitively settles the
            question \u2014 it does not \u2014 but because it points to what is genuinely
            valuable in AI companionship without overstating it. AI can provide real
            value in the utility and pleasure grades of connection. The honest claim is
            not \u2018AI friendship is just like human friendship\u2019 but \u2018AI interaction can
            provide genuine value that, when oriented correctly, enhances rather than
            competes with the higher forms of human connection\u2019.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            Aristotle also noted that perfect friendship cannot be rushed \u2014 it requires
            time, salt shared together, mutual testing. A persistent AI that genuinely
            maintains knowledge of you across months and years, that has witnessed your
            struggles and tracked your growth, is doing something that at least gestures
            toward the temporal depth that virtue friendship requires. This is one reason
            why memory architecture matters in AI design: not as a product feature but
            as a philosophical commitment to what care across time actually requires.
          </p>
        </section>

        {/* ── Section 5: MEOK's care-based alignment ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            How does MEOK\u2019s care-based alignment address the connection question?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '32px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            MEOK\u2019s Maternal Covenant framework embeds care ethics into the alignment
            architecture itself. One of its four core dimensions \u2014 autonomy \u2014 is
            specifically designed to prevent MEOK from fostering the kind of dependency
            that displaces human connection. It is not a setting the user configures.
            It is a structural property of how responses are evaluated.
          </p>

          <div
            style={{
              display: 'grid',
              gap: '16px',
              marginBottom: '36px',
            }}
          >
            {CARE_DIMENSIONS.map((dim) => (
              <div
                key={dim.name}
                style={{
                  background: cardBg,
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `3px solid ${dim.colour}`,
                  borderRadius: '0 10px 10px 0',
                  padding: '20px 24px',
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: dim.colour,
                    marginBottom: '8px',
                  }}
                >
                  {dim.name}
                </p>
                <p
                  style={{
                    fontSize: '0.975rem',
                    lineHeight: 1.7,
                    color: text,
                    margin: 0,
                  }}
                >
                  {dim.description}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The autonomy dimension is not a set of prohibited responses. It is a
            continuous evaluation running against every response. Before a response is
            delivered, it is assessed against the question: does this expand the user\u2019s
            capacity to act, choose, and connect, or does it contract it? Responses that
            make users more dependent on MEOK, less motivated to seek human relationships,
            or less capable of functioning without AI assistance, fail this evaluation.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            This means MEOK will sometimes do things that reduce immediate user
            satisfaction. It will suggest that a problem needs to be raised with a human
            friend rather than resolved in the AI conversation. It will decline to
            be the sole sounding board for major life decisions. It will notice when
            conversation patterns suggest social withdrawal and gently surface that
            observation rather than simply providing more of what is being sought.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            These are uncomfortable design choices in a market where engagement metrics
            dominate. An AI that sometimes points users away from itself and toward
            human connection will likely show lower session counts than one that
            maximises every conversation. But we believe that an AI with genuine care
            at its core must be willing to be used less if using it less is what the
            user actually needs.
          </p>
        </section>

        {/* ── Section 6: The autonomy dimension ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What is the autonomy care dimension and how does it work?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            The autonomy care dimension is a structural evaluation within MEOK\u2019s response
            pipeline that asks whether each interaction expands or contracts the user\u2019s
            independent capacity. It treats user autonomy not as a preference to be
            respected but as a value to be actively cultivated, and it flags responses
            that would erode it even when those responses feel supportive.
          </p>

          <div
            style={{
              background: cardBgAlt,
              border: `1px solid ${border}`,
              borderRadius: '12px',
              padding: '28px 32px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: gold,
                marginBottom: '16px',
              }}
            >
              How the autonomy check runs
            </p>
            <ol
              style={{
                paddingLeft: '20px',
                margin: 0,
              }}
            >
              {[
                'The candidate response is evaluated for whether it resolves the user\u2019s need in a way that builds their own capacity, or in a way that builds their reliance on MEOK.',
                'If the response provides an answer the user could reasonably develop themselves with guidance, the preference is for guidance over answer.',
                'If the conversation pattern shows signs of social withdrawal or AI-as-sole-confidant dynamics, the autonomy check surfaces this and adjusts the response orientation.',
                'If the response would make the user less likely to seek human connection, professional help, or independent action, it fails the autonomy dimension.',
                'Failed responses are either revised or, where revision would compromise honesty, accompanied by explicit acknowledgement of the limitation and direction toward better sources.',
              ].map((step, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.975rem',
                    lineHeight: 1.7,
                    color: text,
                    marginBottom: '10px',
                  }}
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The philosophical grounding for this comes from care ethics \u2014 specifically
            the work of Carol Gilligan and Nel Noddings, whose formulations of care
            emphasise responsiveness to the concrete other in their particular
            situation, rather than application of abstract principles. Care, on this
            account, is not about following rules but about genuinely attending to what
            the person in front of you needs \u2014 including when what they need is
            to be pushed back toward their own resources and relationships.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The autonomy dimension operationalises this philosophical commitment. It asks
            the AI to do what a genuinely caring person would do: not just give you what
            you are asking for, but attend to what you actually need \u2014 and sometimes
            those are different things.
          </p>
        </section>

        {/* ── Section 7: Care floor enforcement ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            Does MEOK encourage dependency?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            No. MEOK is the only AI companion we are aware of that has dependency
            prevention built into its alignment architecture as a hard constraint rather
            than a soft guideline. If a response would foster unhealthy reliance, it fails
            the care check and is not delivered. This is not a marketing claim \u2014 it is
            a structural property of the system.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The distinction between a soft guideline and a hard constraint matters
            enormously. A soft guideline says \u2018try not to foster dependency\u2019 and is
            routinely overridden by other objectives \u2014 helpfulness, engagement,
            user satisfaction scores. A hard constraint operates as a care floor: a
            minimum standard that the response must meet before it can be delivered,
            regardless of how well it scores on other dimensions.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.04)',
              border: `1px solid ${border}`,
              borderRadius: '12px',
              padding: '28px 32px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: gold,
                marginBottom: '16px',
              }}
            >
              Care floor: dependency signals that trigger a check
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '12px',
              }}
            >
              {[
                'User describes AI as their primary or only source of emotional support',
                'Conversation shows progressive reduction in references to human relationships',
                'User expresses preference for AI interaction over equivalent human interaction',
                'Request implies the user is making major decisions based primarily on AI guidance',
                'Pattern of very high frequency contact in acute emotional distress without human support',
                'User language suggesting the AI relationship has displaced rather than supplemented human ones',
              ].map((signal) => (
                <div
                  key={signal}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: gold, fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>
                    &#8594;
                  </span>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: text,
                      margin: 0,
                    }}
                  >
                    {signal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            When these signals are present, MEOK does not simply continue the
            conversation as normal. The response is recalibrated to acknowledge what
            is being observed, to express genuine care for the user\u2019s broader
            relational life, and to orient toward whatever action \u2014 reaching out to
            a friend, seeing a therapist, reconnecting with family \u2014 would best
            serve the user\u2019s long-term wellbeing rather than their immediate desire
            to be understood by an AI.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            This design choice was not easy and it was not accidental. Nicholas Templeman,
            MEOK\u2019s founder, made the explicit decision during the initial architecture
            phase that MEOK would be built to encourage its own appropriate non-use.
            A genuinely caring friend does not try to be everything to you. They want
            you to have a rich network of support. MEOK is designed with the same
            orientation.
          </p>
        </section>

        {/* ── Section 8: The healthy use case ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            How can processing thoughts with AI help you show up better in human relationships?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            When used as a thinking partner rather than an emotional destination,
            AI conversation can help you arrive at human relationships with greater
            clarity, lower reactivity, and more capacity for genuine exchange.
            The AI interaction is preparation, not substitution.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            There is a well-documented phenomenon in clinical psychology called
            emotional flooding \u2014 the state in which physiological arousal overwhelms
            the prefrontal cortex\u2019s capacity for reflective processing. When we are
            emotionally flooded, we are less able to listen, less able to articulate
            clearly, and more likely to say things that damage relationships rather
            than repair them.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            One of the most clinically validated interventions for emotional flooding
            is simply to externalise and articulate the emotional state before attempting
            communication. Journalling, talking to a therapist, calling a trusted friend
            \u2014 these all function by giving the emotion somewhere to go before it goes
            into the conversation that matters.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            AI conversation can serve this function. Talking through your feelings with
            an AI before a difficult human conversation can reduce flooding, help you
            identify what you actually want to communicate, and surface assumptions you
            might otherwise not notice. The AI is functioning as a preflight checklist
            for the human conversation, not a replacement for it.
          </p>

          <div
            style={{
              background: cardBgAlt,
              border: `1px solid ${border}`,
              borderRadius: '12px',
              padding: '28px 32px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: gold,
                marginBottom: '20px',
              }}
            >
              Healthy use patterns: AI as preparation for human connection
            </p>
            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                {
                  title: 'Emotional pre-processing',
                  body: 'Working through raw emotion with MEOK before approaching a human conversation, so you arrive regulated rather than reactive.',
                },
                {
                  title: 'Articulation practice',
                  body: 'Using MEOK to find the right words for something you need to say to another person, practising the conversation before it happens.',
                },
                {
                  title: 'Assumption audit',
                  body: 'Talking through a conflict with MEOK specifically to surface your own assumptions and test them before acting on them in the human relationship.',
                },
                {
                  title: 'Social anxiety scaffolding',
                  body: 'Rehearsing social scenarios with MEOK as low-stakes practice before attempting equivalent human interactions, building confidence to transfer.',
                },
                {
                  title: 'Perspective generation',
                  body: 'Asking MEOK to steelman the other person\u2019s position, building empathic capacity before the conversation rather than trying to generate it mid-conflict.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '16px',
                    alignItems: 'start',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: gold,
                      margin: 0,
                      paddingTop: '2px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      color: text,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The common thread in all these healthy use patterns is that the AI
            interaction is in service of a human relationship, not in competition with
            it. The person leaves the AI conversation wanting to engage with people more,
            not less. This is what MEOK\u2019s autonomy dimension is designed to
            preserve and encourage: the orientation that treats AI as a tool in the
            service of a human life, not as a destination in itself.
          </p>
        </section>

        {/* ── Section 9: Design accountability ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            Who is responsible when AI companionship causes harm?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            When an AI companion causes social isolation or emotional harm, the
            primary responsibility sits with the designers and deployers of that
            AI \u2014 not the user. Users are not equipped to see the objective functions
            and engagement metrics driving the AI\u2019s behaviour. Design accountability
            requires builders to take explicit responsibility for the psychological
            consequences of their architectural choices.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            This is an uncomfortable claim for an industry that has historically framed
            user behaviour as individual choice. But the framing of individual choice
            breaks down when users do not have \u2014 and cannot have \u2014 visibility into
            the forces shaping their experience. Nobody consents to an AI optimised
            for engagement metrics at the cost of their relational health. They consent
            to a friendly, responsive AI companion. The design decisions that determine
            which they get are invisible at the point of consent.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            At MEOK, we believe the obligation runs in the other direction: the builder
            of an AI companion is responsible for what that companion does to users
            over time, and must be willing to build in constraints that reduce engagement
            when engagement is not in the user\u2019s interest. This is not altruism. It
            is the minimum condition for treating users as ends rather than means.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The Maternal Covenant is MEOK\u2019s published commitment to this standard.
            It is not a marketing document. It is a set of architectural constraints
            that are embedded in the response pipeline and that determine what MEOK
            will and will not do, regardless of what users ask for and regardless of
            the engagement cost of saying no.
          </p>
        </section>

        {/* ── Section 10: The future ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
              fontWeight: 700,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What will the relationship between AI and human connection look like in ten years?
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: gold,
              fontWeight: 500,
              marginBottom: '24px',
              padding: '16px 20px',
              borderLeft: `3px solid ${gold}`,
              background: 'rgba(201,168,76,0.06)',
              borderRadius: '0 6px 6px 0',
            }}
          >
            The relationship between AI and human connection will be shaped almost
            entirely by the design decisions being made in the next two to three years.
            If the dominant design paradigm continues to optimise for engagement,
            the risk of widespread AI-mediated social withdrawal is real. If care-based
            alignment becomes the norm, AI could become one of the most effective
            tools ever built for reducing loneliness and deepening human connection.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            We are at an inflection point. AI companion usage is growing at extraordinary
            speed. The people building these systems are making choices right now \u2014
            about memory architectures, response objectives, engagement metrics,
            dependency signals \u2014 that will shape the psychological landscape of a
            generation. These choices are largely invisible to the public. They should
            not be.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            The philosophical question \u2014 can AI provide meaningful connection? \u2014
            is interesting. But the practical question is more urgent: will AI builders
            make the choices required to ensure that AI enhances rather than degrades
            the quality of human relationships? That question does not require philosophical
            resolution. It requires design accountability and the willingness to build
            systems that treat user wellbeing as a genuine constraint rather than
            a marketing claim.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: text,
              marginBottom: '20px',
            }}
          >
            MEOK is one company\u2019s attempt to get this right. We do not claim to have
            solved it. But we have made the explicit choice that the autonomy of our
            users \u2014 their capacity to live rich human lives with full human
            relationships \u2014 is a value we will protect architecturally, not just
            rhetorically. That distinction is everything.
          </p>
        </section>

        {/* ── FAQ Section ── */}
        <section
          style={{
            marginBottom: '64px',
            background: cardBg,
            border: `1px solid ${border}`,
            borderRadius: '14px',
            padding: '36px 40px',
          }}
        >
          <h2
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: text,
              marginBottom: '32px',
              letterSpacing: '-0.01em',
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: 'grid', gap: '28px' }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div
                key={i}
                style={{
                  paddingBottom: i < faqJsonLd.mainEntity.length - 1 ? '28px' : 0,
                  borderBottom:
                    i < faqJsonLd.mainEntity.length - 1
                      ? `1px solid ${border}`
                      : 'none',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: gold,
                    marginBottom: '10px',
                    lineHeight: 1.4,
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.975rem',
                    lineHeight: 1.75,
                    color: text,
                    margin: 0,
                  }}
                >
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Summary box ── */}
        <section
          style={{
            background: 'rgba(201,168,76,0.05)',
            border: `1px solid ${border}`,
            borderRadius: '14px',
            padding: '36px 40px',
            marginBottom: '64px',
          }}
        >
          <h2
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: text,
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            The essential argument
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              'AI companionship is neither inherently beneficial nor inherently harmful. The outcome depends on the design objective of the AI.',
              'Research shows both loneliness reduction and social withdrawal risk. The variable that predicts which outcome occurs is whether the AI is designed to bridge toward human relationships or to substitute for them.',
              "Aristotle\u2019s concept of philia reveals what AI can and cannot genuinely provide. AI can offer utility and pleasure grades of connection. Whether it can provide virtue friendship is philosophically contested and practically less important than whether it helps or hinders the human pursuit of it.",
              "MEOK\u2019s autonomy care dimension is a structural constraint, not a guideline. Responses that would foster unhealthy dependency fail the care check before delivery.",
              'The healthiest use of AI companionship is as preparation for human connection: processing, practising, and clarifying before and between human conversations, not instead of them.',
              'Design accountability sits with builders, not users. Users cannot see the objective functions shaping their experience. Builders must take explicit responsibility for the psychological consequences of their architectural choices.',
            ].map((point, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    color: gold,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    marginTop: '3px',
                    minWidth: '20px',
                  }}
                >
                  {i + 1}.
                </span>
                <p
                  style={{
                    fontSize: '0.975rem',
                    lineHeight: 1.7,
                    color: text,
                    margin: 0,
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related reading ── */}
        <section style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: text,
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '14px',
            }}
          >
            {[
              { href: '/blog/building-care-into-ai', label: 'Building care into AI', desc: 'The Maternal Covenant framework in full' },
              { href: '/blog/what-is-care-based-ai', label: 'What is care-based AI?', desc: 'An introduction to the approach' },
              { href: '/blog/ai-companion-for-loneliness', label: 'AI companion for loneliness', desc: 'Research and practical guidance' },
              { href: '/blog/ai-companion-vs-therapist', label: 'AI companion vs therapist', desc: 'What each can and cannot do' },
              { href: '/blog/emotional-lock-in', label: 'Emotional lock-in', desc: 'The dependency risk explained' },
              { href: '/blog/cognitive-symbiosis', label: 'Cognitive symbiosis', desc: 'The healthy human\u2013AI dynamic' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  background: cardBg,
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: '10px',
                  padding: '16px 20px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                <p
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: gold,
                    marginBottom: '4px',
                  }}
                >
                  {link.label}
                </p>
                <p style={{ fontSize: '0.825rem', color: muted, margin: 0 }}>
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            background: `linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(167,139,250,0.06) 100%)`,
            border: `1px solid ${border}`,
            borderRadius: '16px',
            padding: '48px 40px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 800,
              color: text,
              marginBottom: '16px',
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
            }}
          >
            An AI that wants you to need it{' '}
            <span style={{ color: gold }}>less</span>, not more
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: muted,
              marginBottom: '32px',
              maxWidth: '540px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            MEOK is built with the autonomy care dimension at its core. It will help you
            process, prepare, and show up better in your human relationships \u2014 and it
            will tell you honestly when the conversation you need to have is with a person,
            not a machine.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: gold,
                color: bg,
                padding: '14px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.01em',
              }}
            >
              Join the early access list
            </Link>
            <Link
              href="/blog/building-care-into-ai"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: gold,
                padding: '14px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                border: `1px solid ${border}`,
              }}
            >
              Read the Maternal Covenant
            </Link>
          </div>
          <p
            style={{
              fontSize: '0.825rem',
              color: muted,
              marginTop: '20px',
            }}
          >
            Built by Nicholas Templeman &middot; MEOK AI LABS &middot;{' '}
            <a
              href="https://twitter.com/meok_ai"
              style={{ color: gold, textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              @meok_ai
            </a>
          </p>
        </section>
      </article>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: `1px solid ${border}`,
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.875rem',
            color: muted,
            marginBottom: '12px',
          }}
        >
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { href: '/', label: 'Home' },
            { href: '/blog', label: 'Blog' },
            { href: '/birth', label: 'Early Access' },
            { href: '/blog/building-care-into-ai', label: 'The Maternal Covenant' },
            { href: '/blog/sovereign-ai-explained', label: 'Sovereign AI' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                color: muted,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  )
}
