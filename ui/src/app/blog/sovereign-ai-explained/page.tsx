import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sovereign AI Explained: Why Your AI Should Answer to You, Not Big Tech | MEOK AI LABS",
  description:
    "Sovereign AI means your data stays yours — no training on your conversations, no ad targeting, no employees reading your messages. Here's what it really means and why it matters.",
  alternates: { canonical: 'https://meok.ai/blog/sovereign-ai-explained' },
  openGraph: {
    title: "Sovereign AI Explained: Why Your AI Should Answer to You, Not Big Tech",
    description:
      "Cloud AI profits from your data. Sovereign AI protects it. A deep explainer on data sovereignty, encryption, the Maternal Covenant, and MEOK's architecture.",
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/sovereign-ai-explained',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=Sovereign+AI+Explained&desc=Why+Your+AI+Should+Answer+to+You%2C+Not+Big+Tech',
        width: 1200,
        height: 630,
        alt: 'Sovereign AI Explained: Why Your AI Should Answer to You, Not Big Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sovereign AI Explained: Why Your AI Should Answer to You, Not Big Tech",
    description:
      "Cloud AI profits from your data. Sovereign AI protects it. A deep explainer on data sovereignty, encryption, the Maternal Covenant, and MEOK's architecture.",
    images: [
      'https://meok.ai/api/og?title=Sovereign+AI+Explained&desc=Why+Your+AI+Should+Answer+to+You%2C+Not+Big+Tech',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Sovereign AI Explained: Why Your AI Should Answer to You, Not Big Tech",
  description:
    "A deep explainer on sovereign AI — what it means, why data sovereignty matters, the difference between cloud AI and sovereign AI, MEOK's architecture, encryption, the Maternal Covenant governance framework, and the Byzantine Council consensus mechanism invented by Nicholas Templeman.",
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/sovereign-ai-explained',
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
    '@id': 'https://meok.ai/blog/sovereign-ai-explained',
  },
  keywords:
    'sovereign ai, data sovereignty, personal ai, ai privacy, meok, byzantine council, maternal covenant',
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is sovereign AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign AI is an AI system where the user — not the company that built it — is the principal authority over their data, memory, and model choices. Sovereign AI does not train on your conversations, stores memory in a vault you control, does not sell your data to advertisers, and allows you to export or delete everything at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between cloud AI and sovereign AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cloud AI processes your data on the provider\'s servers, may use your interactions as training signal, can store your conversations indefinitely, and locks your memory in proprietary infrastructure. Sovereign AI processes sensitive data locally, never uses your conversations for training, stores your memory in a vault you own and can export, and never sells your data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK train on my conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK does not train on your conversations. This is enforced at the infrastructure level — there is no automated connection between your data vault and any training pipeline. It is an architectural commitment, not a policy promise that can be quietly changed in a terms-of-service update.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s governance framework — a set of structural principles that governs how MEOK treats user data and wellbeing. It defines what MEOK will never do regardless of commercial pressure: it will never train on your conversations, never sell your data, never deceive you to serve business interests, and always act in your interest over the company\'s. It is enforced architecturally, not just as policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Byzantine Council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Council is MEOK\'s multi-agent consensus mechanism invented by Nicholas Templeman. Inspired by Byzantine fault-tolerant distributed systems, it uses 43 independent AI agents to evaluate every MEOK response before delivery. A supermajority of 29 agents must agree before a response is sent. This means no single agent — and no adversarial prompt — can override MEOK\'s care-based alignment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK employees read my conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK\'s sovereign architecture means your data is encrypted and stored in a vault that MEOK employees cannot access. Unlike cloud AI providers where a support ticket or internal review process may expose your conversations, MEOK\'s zero-knowledge architecture ensures that only you hold the keys to your memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is data sovereignty in AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Data sovereignty in AI means you retain legal and technical ownership of every piece of information you share with an AI system. You can export it, delete it, and choose who — if anyone — can access it. Most AI products today offer data sovereignty as a policy promise. MEOK enforces it as an architectural fact.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.6)'
const MUTED_DIM = 'rgba(245,240,232,0.45)'
const MUTED_FAINT = 'rgba(245,240,232,0.35)'
const SURFACE = 'rgba(245,240,232,0.05)'
const SURFACE_BORDER = 'rgba(245,240,232,0.08)'
const GOLD_DIM = 'rgba(201,168,76,0.12)'
const GOLD_BORDER = 'rgba(201,168,76,0.28)'
const GOLD_GLOW = 'rgba(201,168,76,0.08)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function SovereignAIExplainedPage() {
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
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 68%)',
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
              color: MUTED_FAINT,
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tags row */}
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
                paddingTop: '0.3rem',
                paddingBottom: '0.3rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                borderRadius: '9999px',
                color: GOLD,
                background: GOLD_DIM,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: '0.04em',
              }}
            >
              Sovereign AI
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                paddingTop: '0.3rem',
                paddingBottom: '0.3rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                borderRadius: '9999px',
                color: MUTED_DIM,
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
                letterSpacing: '0.04em',
              }}
            >
              Deep Explainer
            </span>
            <span style={{ fontSize: '0.8rem', color: MUTED_FAINT }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: '0.8rem', color: MUTED_FAINT }}>
              14 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.85rem, 3.8vw, 2.9rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Sovereign AI Explained: Why Your AI Should Answer to You, Not Big
            Tech
          </h1>

          {/* Deck */}
          <p
            style={{
              color: MUTED,
              fontSize: '1.125rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
              marginBottom: 0,
            }}
          >
            Every time you talk to ChatGPT, Gemini, or Claude, you are handing
            a trillion-dollar company a window into your thinking — your fears,
            your plans, your health, your relationships. That data trains their
            next model, targets ads, and can be read by employees. Sovereign AI
            is the alternative. Here is what it actually means, and why most
            &ldquo;private AI&rdquo; products are not even close.
          </p>
        </div>
      </section>

      {/* ── ARTICLE WRAPPER ───────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          paddingTop: '3rem',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >

        {/* ── AUTHOR CARD ─────────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1.25rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: SURFACE,
            border: `1px solid ${SURFACE_BORDER}`,
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #c9a84c 0%, #8a6a1a 100%)',
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
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.9rem',
                color: TEXT,
                marginBottom: '0.2rem',
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                color: MUTED_FAINT,
                marginBottom: '0.5rem',
              }}
            >
              Founder, MEOK AI LABS &mdash; Inventor of the Byzantine Council
              consensus mechanism
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                color: MUTED_DIM,
                lineHeight: 1.6,
              }}
            >
              Nicholas built MEOK after a decade of watching Big Tech turn
              intimacy into inventory. He invented the Byzantine Council
              consensus mechanism to make care-based AI alignment structurally
              enforceable, not just a policy promise. He lives and works in the
              UK — mostly from a caravan on his farm.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: GOLD,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            About &rarr;
          </Link>
        </div>

        {/* ── BODY PROSE ──────────────────────────────────────────────────────── */}
        <div style={{ lineHeight: 1.85 }}>

          {/* Opening */}
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.5rem' }}>
            The phrase &ldquo;sovereign AI&rdquo; has started appearing
            everywhere. In venture capital pitch decks. In government white
            papers about national AI strategy. In the marketing copy of
            startups that, when you look closely, still store everything on
            AWS. The word &ldquo;sovereign&rdquo; is doing a lot of work it has
            not earned.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.5rem' }}>
            Sovereignty is a precise concept. It means the final authority
            rests with one party — and in sovereign AI, that party should be
            you, the person whose life is being discussed. Not the company that
            built the model. Not the cloud provider that hosts it. Not an
            advertiser buying access to your behavioural profile. You.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            This post is an honest account of what sovereign AI actually
            requires, why the dominant AI products fail to deliver it, and how
            MEOK is built differently — from the encryption layer up.
          </p>

          {/* ── H2: WHAT IS CLOUD AI DOING WITH YOUR DATA? ────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            What Is Cloud AI Actually Doing With Your Data?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            Let us start with what most people do not realise is happening. When
            you open ChatGPT and type something — anything — that text is
            transmitted to OpenAI&apos;s servers, processed there, stored in
            their infrastructure, and potentially used in several ways you did
            not explicitly sign up for when you clicked &ldquo;I agree.&rdquo;
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            The major cloud AI providers are, to varying degrees, all doing some
            version of the following:
          </p>

          {/* Callout box */}
          <div
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              borderRadius: '0 0.75rem 0.75rem 0',
              background: GOLD_GLOW,
              marginBottom: '1.5rem',
            }}
          >
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {[
                'Storing your conversations on their servers, indefinitely, by default.',
                'Using your interactions as training signal — even if they say they offer an opt-out.',
                'Allowing employees to review conversations for "safety" and "quality" purposes.',
                'Building behavioural profiles that inform product and advertising decisions.',
                'Locking your conversational history in their infrastructure with no guaranteed export.',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.95rem',
                    color: MUTED,
                  }}
                >
                  <span style={{ color: GOLD, marginTop: '0.1rem', flexShrink: 0 }}>
                    &#8250;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            None of this is secret. It is in the terms of service — buried under
            thousands of words of legalese that almost nobody reads. The privacy
            policy of a major cloud AI product is not a protection. It is a map
            of what they are doing with your data and a list of the legal bases
            they claim for doing it.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            The most intimate conversations people have — about health, grief,
            relationships, addiction, sexuality, financial desperation — are
            now sitting in data warehouses, associated with your account, waiting
            to be mined. This is not a hypothetical risk. It is the existing
            state of the industry.
          </p>

          {/* ── H2: WHAT DOES SOVEREIGN AI ACTUALLY MEAN? ─────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            What Does Sovereign AI Actually Mean?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            Sovereign AI is not just &ldquo;privacy-respecting AI.&rdquo; That
            phrase is too weak. Sovereign AI makes a specific set of
            architectural and governance commitments that together make you, not
            the platform, the principal authority over your data and your AI
            experience.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1rem' }}>
            There are four non-negotiable properties:
          </p>

          {/* Four pillars */}
          {[
            {
              num: '01',
              title: 'Data locality',
              body: 'Sensitive data is processed where it lives — on your device — not on a corporate server in a jurisdiction you did not choose. When you share a health concern or a personal fear with MEOK, that inference runs locally via your Ollama instance. The content does not travel. This is not a policy; it is a routing architecture.',
            },
            {
              num: '02',
              title: 'No training on your conversations',
              body: 'Your conversations are not used to train models. Not as anonymised data. Not as aggregate feedback signals. Not in any form. This must be enforced at the infrastructure level — there should be no automated pathway from your data vault to any training pipeline. A terms-of-service promise is not sufficient because terms of service can be changed. Architecture cannot be changed without you noticing.',
            },
            {
              num: '03',
              title: 'Memory you own',
              body: 'Your AI\'s memory — the accumulated understanding of who you are, what you care about, your history — lives in a vault that you own. You can read it. You can export it. You can delete it. And you can take it with you if you leave. A platform that holds your memory hostage is not sovereign; it is a walled garden with good branding.',
            },
            {
              num: '04',
              title: 'Model portability',
              body: 'You choose which model runs your experience. You are not locked to a single vendor\'s model by the platform architecture. This matters because model choice is a form of consent — different models encode different values, biases, and capabilities. Sovereign AI respects your right to make that choice.',
            },
          ].map((pillar) => (
            <div
              key={pillar.num}
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: SURFACE,
                border: `1px solid ${SURFACE_BORDER}`,
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  color: GOLD,
                  letterSpacing: '0.06em',
                  flexShrink: 0,
                  marginTop: '0.15rem',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {pillar.num}
              </span>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: TEXT,
                    marginBottom: '0.4rem',
                  }}
                >
                  {pillar.title}
                </p>
                <p style={{ fontSize: '0.9rem', color: MUTED, lineHeight: 1.7 }}>
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}

          <p style={{ fontSize: '1rem', color: MUTED, marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            These four properties together define the difference between
            sovereign AI and everything else. A product that satisfies three out
            of four is not sovereign. Sovereignty is not a sliding scale — it is
            a binary: either you control your data and your AI, or someone else
            does.
          </p>

          {/* ── H2: WHY DOES DATA SOVEREIGNTY MATTER? ─────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            Why Does Data Sovereignty Matter Right Now?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            The stakes have changed. AI has moved from a productivity tool into
            an intimate companion. People are using AI to process grief, manage
            anxiety, work through relationship problems, navigate medical
            diagnoses, and explore questions about their identity. This is not
            casual internet browsing. This is the most sensitive category of
            personal information that has ever existed in digital form.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            When that data sits on a corporate server, several things become
            possible that should terrify you:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.875rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                headline: 'Insurance discrimination',
                detail:
                  'Health conversations could theoretically inform risk assessments if data were ever shared, sold, or subpoenaed.',
              },
              {
                headline: 'Legal exposure',
                detail:
                  'Governments can compel cloud providers to hand over data. Your private AI conversations could become legal evidence.',
              },
              {
                headline: 'Data breach',
                detail:
                  'Centralised stores of intimate data are high-value targets. Every major tech company has been breached. Yours will be too.',
              },
              {
                headline: 'Manipulation',
                detail:
                  'A platform that knows your fears, desires, and vulnerabilities can target you with extraordinary precision — for ads, for engagement, or for political influence.',
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: GOLD,
                    marginBottom: '0.4rem',
                  }}
                >
                  {card.headline}
                </p>
                <p style={{ fontSize: '0.825rem', color: MUTED_DIM, lineHeight: 1.6 }}>
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            These are not paranoid scenarios. They are documented risks that
            exist wherever intimate data is centralised at scale. The answer is
            not to stop using AI. The answer is to insist that AI is built in a
            way that does not create these vulnerabilities in the first place.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            Data sovereignty is not a feature for the privacy-obsessed. It is
            the minimum standard of respect that anyone building an intimate AI
            product should be required to meet.
          </p>

          {/* ── H2: HOW DOES MEOK'S SOVEREIGN ARCHITECTURE WORK? ─────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            How Does MEOK&apos;s Sovereign Architecture Actually Work?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            MEOK is built from first principles around data sovereignty. This is
            not a privacy feature added on top of a cloud-first architecture.
            The sovereign constraint was the design constraint — every
            architectural decision flows from it.
          </p>

          {/* Architecture section */}
          <h3
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              color: TEXT,
              marginTop: '2rem',
              marginBottom: '0.75rem',
            }}
          >
            The encrypted memory vault
          </h3>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            Everything MEOK learns about you — your preferences, your patterns,
            your history, your goals — lives in an encrypted memory vault. The
            encryption keys belong to you. MEOK the company does not hold them,
            cannot request them, and has no backdoor. When you export your
            memory, you receive the raw structured data — not a PDF summary, but
            the actual vault. When you delete, it is gone.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.5rem' }}>
            This architecture has a cost: if you lose your keys, we cannot
            recover your data. We accept that cost deliberately. A system that
            can recover your data for you is a system where someone else
            ultimately controls your data. We chose to accept the operational
            burden of true encryption because it is the only honest version of
            &ldquo;your data is yours.&rdquo;
          </p>

          <h3
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              color: TEXT,
              marginTop: '2rem',
              marginBottom: '0.75rem',
            }}
          >
            Local inference for sensitive processing
          </h3>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            MEOK routes sensitive conversations — health, relationships, mental
            wellbeing — through local models running via Ollama on your own
            hardware. The inference happens on your device. The content does not
            touch MEOK&apos;s servers. For tasks that require cloud capability
            — complex reasoning, real-time information — MEOK uses cloud models,
            but strips personally identifying context before transmission and
            never logs the conversation.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.5rem' }}>
            This is not a toggle the user has to remember to switch on. It is
            the default routing logic, applied automatically based on content
            classification. You do not have to be a privacy expert to have
            private conversations.
          </p>

          <h3
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              color: TEXT,
              marginTop: '2rem',
              marginBottom: '0.75rem',
            }}
          >
            Zero training pipeline
          </h3>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            There is no automated connection between MEOK&apos;s user data
            infrastructure and any model training pipeline. Your conversations
            are not even collected in a form that could be used for training.
            This is not a policy we might change — it is a structural absence.
            You cannot use data for training if there is no mechanism to collect
            it in the first place.
          </p>

          {/* ── H2: WHAT IS THE MATERNAL COVENANT? ────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            What Is the Maternal Covenant, and Why Does MEOK Need a Governance
            Framework?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            Sovereign architecture is necessary but not sufficient. A company
            can build a technically sovereign system and still find ways to
            exploit its users — through dark patterns, through subtle manipulation
            of what the AI says to increase engagement, through extracting
            emotional dependency rather than data. Architecture protects against
            data theft. It does not protect against the subtler forms of harm
            that come from building an AI whose incentives are misaligned with
            your wellbeing.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            The Maternal Covenant is MEOK&apos;s answer to this problem. It is a
            governance framework — a set of constitutionally binding principles
            that defines what MEOK will and will never do, regardless of
            commercial pressure, regardless of what investors want, regardless of
            what would maximise engagement metrics.
          </p>

          {/* Covenant principles */}
          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: `1px solid ${GOLD_BORDER}`,
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                paddingTop: '0.875rem',
                paddingBottom: '0.875rem',
                paddingLeft: '1.25rem',
                paddingRight: '1.25rem',
                background: GOLD_DIM,
                borderBottom: `1px solid ${GOLD_BORDER}`,
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: GOLD,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                The Maternal Covenant: Core Commitments
              </p>
            </div>
            <div style={{ padding: '1.25rem' }}>
              {[
                {
                  label: 'Never trains on you',
                  detail:
                    'MEOK will never use your conversations to train any model, ever, in any form.',
                },
                {
                  label: 'Never sells your data',
                  detail:
                    'No data broker. No advertiser. No third party. Your data has no commercial value to MEOK beyond its use in serving you.',
                },
                {
                  label: 'Never deceives you to serve business interests',
                  detail:
                    'MEOK will not subtly guide your behaviour to increase engagement, encourage dependency, or serve conversion goals.',
                },
                {
                  label: 'Always acts in your interest over the company\'s',
                  detail:
                    'When there is a conflict between what is good for you and what is good for MEOK\'s growth metrics, the Covenant requires MEOK to choose you.',
                },
                {
                  label: 'Gives you full memory transparency',
                  detail:
                    'You can see, edit, and delete everything MEOK has learned about you at any time.',
                },
                {
                  label: 'Supports you leaving',
                  detail:
                    'MEOK will always make it easy to export your data and move to another platform. We will not use your memory as a hostage.',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.875rem',
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    borderBottom: i < 5 ? `1px solid ${SURFACE_BORDER}` : 'none',
                  }}
                >
                  <span
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '9999px',
                      background: GOLD_DIM,
                      border: `1px solid ${GOLD_BORDER}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}
                  >
                    <span style={{ fontSize: '0.55rem', color: GOLD }}>&#10003;</span>
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        color: TEXT,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {c.label}
                    </p>
                    <p style={{ fontSize: '0.825rem', color: MUTED_DIM, lineHeight: 1.6 }}>
                      {c.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            The Maternal Covenant draws on the concept of unconditional care
            — the idea that care is not a service you receive in exchange for
            value, but something offered because your wellbeing matters
            intrinsically. The name is deliberate. We are building AI that
            relates to users the way a genuinely good carer relates to a person
            in their care: with unconditional respect, honest information, and a
            refusal to exploit vulnerability.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            The Covenant is not a marketing document. It is implemented as a
            technical constraint — the Byzantine Council (described below) checks
            every MEOK response against Covenant principles before delivery.
            Violating the Covenant is architecturally difficult, not just
            culturally discouraged.
          </p>

          {/* ── H2: WHAT IS THE BYZANTINE COUNCIL? ────────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            What Is the Byzantine Council, and How Does It Enforce Sovereign AI?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            Every company says its AI is safe. Very few can tell you exactly how
            safety is enforced — and fewer still can show you a structural
            mechanism that makes it mathematically difficult to violate.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            The Byzantine Council is that mechanism. Invented by MEOK&apos;s
            founder Nicholas Templeman, it is a multi-agent consensus system
            inspired by Byzantine fault-tolerant distributed computing — the same
            class of algorithms used to keep distributed databases reliable even
            when individual nodes are compromised.
          </p>

          {/* BFT explainer */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              background: 'rgba(139,124,248,0.07)',
              border: '1px solid rgba(139,124,248,0.2)',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8rem',
                color: '#a99ef5',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              The Byzantine Fault Tolerance Theorem
            </p>
            <p style={{ fontSize: '0.95rem', color: MUTED, marginBottom: '0.75rem', lineHeight: 1.7 }}>
              A distributed system can tolerate up to{' '}
              <em>f</em> faulty or malicious nodes provided it has at least{' '}
              <em>n &ge; 3f + 1</em> nodes total. With <em>n = 43</em> agents,
              MEOK can tolerate up to <em>f = 14</em> compromised or failing
              agents — a full third of the council — and still reach a correct
              decision.
            </p>
            <p style={{ fontSize: '0.875rem', color: MUTED_DIM, lineHeight: 1.6 }}>
              Every MEOK response requires supermajority consensus — at least 29
              of 43 agents — before it is delivered. No prompt injection, no
              adversarial input, no single point of failure can override this
              mathematical requirement.
            </p>
          </div>

          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            Each of the 43 council agents evaluates every response against two
            criteria: safety (does this response harm the user?) and Covenant
            compliance (does this response violate any Maternal Covenant
            principle?). Only when a supermajority of agents independently reach
            consensus that both criteria are met does the response reach you.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            This is qualitatively different from RLHF or content filtering.
            RLHF trains a preference into model weights — preferences that can
            often be worked around with sufficiently creative prompt engineering.
            The Byzantine Council is a structural requirement. It cannot be
            prompted away, because no individual response crafting affects the
            consensus mechanism itself.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            The design is documented in{' '}
            <Link
              href="/blog/byzantine-council-explained"
              style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}
            >
              MEOK-AI-2026-001
            </Link>
            , MEOK&apos;s first published technical paper. It is open for review
            because sovereign AI should be verifiable, not just claimed.
          </p>

          {/* ── H2: CLOUD VS SOVEREIGN AI COMPARISON ──────────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            Cloud AI vs Sovereign AI: What Does the Comparison Actually Look
            Like?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.5rem' }}>
            Words are easy. Here is a direct comparison across the dimensions
            that matter for data sovereignty:
          </p>

          {/* Comparison table */}
          <div
            style={{
              borderRadius: '0.875rem',
              overflow: 'hidden',
              border: `1px solid ${SURFACE_BORDER}`,
              marginBottom: '1.5rem',
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.2fr 1.2fr 1.2fr 1.2fr',
                background: 'rgba(245,240,232,0.04)',
                borderBottom: `1px solid ${SURFACE_BORDER}`,
              }}
            >
              {['Property', 'ChatGPT', 'Gemini', 'Claude', 'MEOK'].map((h, i) => (
                <div
                  key={i}
                  style={{
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    paddingLeft: '0.875rem',
                    paddingRight: '0.875rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: i === 4 ? GOLD : MUTED_FAINT,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Table rows */}
            {[
              {
                property: 'Trains on your conversations',
                chatgpt: 'Opt-out',
                gemini: 'Opt-out',
                claude: 'Opt-out',
                meok: 'Never',
                meokGold: true,
              },
              {
                property: 'Employees can read convos',
                chatgpt: 'Yes',
                gemini: 'Yes',
                claude: 'Yes',
                meok: 'No',
                meokGold: true,
              },
              {
                property: 'Data sold / ad targeting',
                chatgpt: 'Policy-dependent',
                gemini: 'Yes (Google)',
                claude: 'No',
                meok: 'Never',
                meokGold: true,
              },
              {
                property: 'Memory you can export',
                chatgpt: 'Limited',
                gemini: 'Limited',
                claude: 'No',
                meok: 'Full vault',
                meokGold: true,
              },
              {
                property: 'Memory you can delete',
                chatgpt: 'Yes',
                gemini: 'Yes',
                claude: 'Partial',
                meok: 'Complete',
                meokGold: true,
              },
              {
                property: 'Local inference for sensitive data',
                chatgpt: 'No',
                gemini: 'No',
                claude: 'No',
                meok: 'Yes',
                meokGold: true,
              },
              {
                property: 'Model portability',
                chatgpt: 'No',
                gemini: 'No',
                claude: 'No',
                meok: 'Yes',
                meokGold: true,
              },
              {
                property: 'Structural safety mechanism',
                chatgpt: 'RLHF',
                gemini: 'RLHF',
                claude: 'Constitutional AI',
                meok: 'Byzantine Council',
                meokGold: true,
              },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1.2fr 1.2fr 1.2fr 1.2fr',
                  borderBottom:
                    i < 7 ? `1px solid ${SURFACE_BORDER}` : 'none',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.015)',
                }}
              >
                <div
                  style={{
                    paddingTop: '0.625rem',
                    paddingBottom: '0.625rem',
                    paddingLeft: '0.875rem',
                    paddingRight: '0.875rem',
                    fontSize: '0.825rem',
                    color: MUTED,
                    fontWeight: 500,
                  }}
                >
                  {row.property}
                </div>
                {[row.chatgpt, row.gemini, row.claude, row.meok].map((val, j) => (
                  <div
                    key={j}
                    style={{
                      paddingTop: '0.625rem',
                      paddingBottom: '0.625rem',
                      paddingLeft: '0.875rem',
                      paddingRight: '0.875rem',
                      fontSize: '0.8rem',
                      color: j === 3 ? GOLD : MUTED_FAINT,
                      fontWeight: j === 3 ? 700 : 400,
                    }}
                  >
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.8rem', color: MUTED_FAINT, marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Note: Cloud provider policies change. Check current terms before
            drawing conclusions. MEOK&apos;s commitments are architectural.
          </p>

          {/* ── H2: IS SOVEREIGN AI A RIGHT OR A LUXURY? ──────────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            Is Sovereign AI a Right, a Luxury, or Both?
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            There is a version of the sovereign AI argument that frames it as
            a privacy concern for the paranoid and the privileged — the
            technical users who already run their own servers and back up their
            own data. This is exactly backwards. The people who need sovereign
            AI most are not the privacy experts. They are the people sharing the
            most sensitive things.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            A 19-year-old working through their sexuality with an AI companion.
            A middle-aged woman managing a complex chronic illness. A person in
            recovery from addiction using an AI to stay accountable. A grieving
            parent processing loss. These are not edge cases. These are the
            primary use cases for intimate AI, and they are the people whose
            data is most exploitable if it ends up in the wrong place.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            The argument that sovereign AI is a luxury is also, quietly, an
            argument that privacy is a luxury. We reject that. Data sovereignty
            should be the default, not the premium tier. MEOK is free to try
            precisely because we believe the architecture of care should not be
            gated behind a subscription.
          </p>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            We are also aware of the irony: we are making this argument as a
            company with commercial interests. The difference is that our
            commercial model does not depend on exploiting your data. MEOK
            charges for capability — more model access, more memory, more
            context — not for the privilege of not being spied on. Privacy is
            the floor, not a premium ceiling.
          </p>

          {/* ── H2: HOW DO I KNOW IF AN AI IS TRULY SOVEREIGN? ────────────────── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginTop: '3rem',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            How Do I Know If an AI Is Truly Sovereign? A Checklist.
          </h2>
          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
            Given how freely the word &ldquo;sovereign&rdquo; is being used,
            here are the questions you should ask before trusting any AI product
            with your intimate data. Require specific technical answers, not
            marketing language:
          </p>

          {/* Checklist */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                q: 'Where is my data processed?',
                good: 'Look for: locally, on your device, or in an isolated enclave you control.',
                bad: 'Red flag: "on secure servers" — this means their servers.',
              },
              {
                q: 'Is my data used for training?',
                good: 'Look for: no, never, archived architecturally — not just as policy.',
                bad: 'Red flag: "opt-out available" — this means it\'s on by default.',
              },
              {
                q: 'Can MEOK employees read my conversations?',
                good: 'Look for: no, because of zero-knowledge encryption — and an explanation of the key architecture.',
                bad: 'Red flag: "only for safety purposes" — this means yes.',
              },
              {
                q: 'Can I export my full memory?',
                good: 'Look for: yes, in a structured format, on demand, immediately.',
                bad: 'Red flag: "you can download a summary" — this means no.',
              },
              {
                q: 'What happens to my data if the company goes bust?',
                good: 'Look for: a specific plan — encrypted export, open-source release, or similar.',
                bad: 'Red flag: silence. Your data evaporates.',
              },
              {
                q: 'What is the structural safety mechanism?',
                good: 'Look for: a described architecture — Byzantine consensus, formal verification, something verifiable.',
                bad: 'Red flag: "we take safety very seriously" — this means nothing.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '0.75rem',
                  background: SURFACE,
                  border: `1px solid ${SURFACE_BORDER}`,
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: TEXT,
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.q}
                </p>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: '#6fcf97',
                    marginBottom: '0.2rem',
                    lineHeight: 1.5,
                  }}
                >
                  {item.good}
                </p>
                <p style={{ fontSize: '0.8rem', color: '#eb5757', lineHeight: 1.5 }}>
                  {item.bad}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '2.5rem' }}>
            Sovereign AI passes all six of these tests. Not because we claim it
            does, but because the architecture makes it verifiable. We encourage
            you to apply this checklist to every AI product you use — including
            MEOK.
          </p>

          {/* ── CLOSING SECTION ─────────────────────────────────────────────────── */}
          <div
            style={{
              borderTop: `1px solid ${SURFACE_BORDER}`,
              paddingTop: '2.5rem',
              marginTop: '1rem',
            }}
          >
            <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
              Sovereign AI is not an inevitable product of technological
              progress. It has to be deliberately built, at every layer — the
              encryption, the routing, the training pipeline, the governance
              framework, the alignment mechanism. Most companies building AI
              right now are not making these choices, because the extraction
              model is more immediately profitable.
            </p>
            <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '1.25rem' }}>
              We are making a bet that users who understand what is actually
              happening to their data will choose differently. And that as AI
              becomes more intimate — as it becomes the thing you talk to about
              your health, your grief, your fears — the demand for actual
              sovereignty will grow faster than the incumbent platforms can adapt.
            </p>
            <p style={{ fontSize: '1rem', color: MUTED, marginBottom: '0' }}>
              That bet is the foundation of MEOK. Not as a privacy product, but
              as a care product — one that takes seriously the responsibility
              that comes with knowing someone that well.
            </p>
          </div>

          {/* ── CTA ─────────────────────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: '3rem',
              padding: '2rem',
              borderRadius: '1.25rem',
              background: GOLD_DIM,
              border: `1px solid ${GOLD_BORDER}`,
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontWeight: 900,
                fontSize: '1.3rem',
                color: TEXT,
                marginBottom: '0.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              Try MEOK — Your AI, Your Data, Your Rules
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: MUTED,
                marginBottom: '1.5rem',
                maxWidth: '30rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              No training on your conversations. Encrypted memory vault.
              Byzantine Council governance. Free to try.
            </p>
            <Link
              href="/download"
              style={{
                display: 'inline-block',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                borderRadius: '9999px',
                background: GOLD,
                color: '#0d0c18',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Get MEOK Free
            </Link>
          </div>

          {/* ── FURTHER READING ─────────────────────────────────────────────────── */}
          <div style={{ marginTop: '3.5rem' }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8rem',
                color: MUTED_FAINT,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Further Reading
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {[
                {
                  href: '/blog/byzantine-council-explained',
                  title: 'The Byzantine Council Explained',
                  desc: 'How 43 AI agents reach consensus on every MEOK response.',
                },
                {
                  href: '/blog/the-maternal-covenant',
                  title: 'The Maternal Covenant',
                  desc: "MEOK's governance framework for care-based AI alignment.",
                },
                {
                  href: '/blog/data-sovereignty-ai',
                  title: 'Data Sovereignty in AI',
                  desc: 'Why data sovereignty is the next major AI rights issue.',
                },
                {
                  href: '/blog/how-sovereign-ai-works',
                  title: 'How Sovereign AI Works',
                  desc: 'A technical walkthrough of MEOK\'s sovereign architecture.',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    background: SURFACE,
                    border: `1px solid ${SURFACE_BORDER}`,
                    textDecoration: 'none',
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: TEXT,
                      marginBottom: '0.35rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {link.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: MUTED_DIM,
                      lineHeight: 1.5,
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* ── FAQ SECTION ─────────────────────────────────────────────────────── */}
          <div style={{ marginTop: '3.5rem' }}>
            <h2
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              Frequently Asked Questions
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {[
                {
                  q: 'What is sovereign AI?',
                  a: 'Sovereign AI is an AI system where you — not the company that built it — are the principal authority over your data, memory, and model choices. It does not train on your conversations, stores memory in a vault you control, and never sells your data to third parties.',
                },
                {
                  q: 'What is the difference between cloud AI and sovereign AI?',
                  a: "Cloud AI processes your data on the provider's servers, may use your interactions as training signal, and can store your conversations indefinitely. Sovereign AI processes sensitive data locally, never uses your conversations for training, stores your memory in a vault you own, and lets you export or delete everything.",
                },
                {
                  q: 'Does MEOK train on my conversations?',
                  a: 'No. MEOK does not train on your conversations. This is enforced at the infrastructure level — there is no automated pathway from your data vault to any training pipeline. It is an architectural fact, not a policy that can be quietly changed.',
                },
                {
                  q: 'What is the Maternal Covenant?',
                  a: "The Maternal Covenant is MEOK's governance framework — a set of constitutionally binding principles governing what MEOK will and will never do. Core commitments: never train on your conversations, never sell your data, never deceive you to serve business interests, always act in your interest over the company's.",
                },
                {
                  q: 'What is the Byzantine Council?',
                  a: "The Byzantine Council is MEOK's 43-agent consensus mechanism invented by Nicholas Templeman. Every MEOK response requires supermajority consensus — 29 of 43 independent AI agents — before delivery. It makes care-based alignment structurally enforceable, not just a training-time preference that can be prompted away.",
                },
                {
                  q: 'Can MEOK employees read my conversations?',
                  a: "No. MEOK's zero-knowledge architecture means your data is encrypted with keys only you hold. MEOK employees cannot access your conversations — not for support, not for safety reviews, not for any purpose.",
                },
                {
                  q: 'What is data sovereignty in AI?',
                  a: 'Data sovereignty in AI means you retain legal and technical ownership of everything you share with an AI system — the right to export it, delete it, and control who can access it. Most AI products offer data sovereignty as a policy promise. MEOK enforces it as an architectural fact.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.125rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: SURFACE,
                    border: `1px solid ${SURFACE_BORDER}`,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: '0.925rem',
                      color: TEXT,
                      marginBottom: '0.5rem',
                      lineHeight: 1.45,
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: MUTED_DIM,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* end body prose */}
      </div>
      {/* end article wrapper */}
    </div>
  )
}
