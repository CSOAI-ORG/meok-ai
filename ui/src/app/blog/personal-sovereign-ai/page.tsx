import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'What is Personal Sovereign AI? Own Your AI, Own Your Data | MEOK AI LABS',
  description:
    'Personal Sovereign AI is the consumer category where you own your AI, your memory, and your data — coined by MEOK (MEOK-AI-2026-004). Here is what it means and why it matters.',
  alternates: { canonical: 'https://meok.ai/blog/personal-sovereign-ai' },
  openGraph: {
    title: 'What is Personal Sovereign AI? Own Your AI, Own Your Data | MEOK AI LABS',
    description:
      'Personal Sovereign AI is the new consumer category where individuals own their AI, their data, and their memory. Coined by MEOK (MEOK-AI-2026-004).',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/personal-sovereign-ai',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=What+is+Personal+Sovereign+AI%3F&desc=Own+your+AI%2C+your+data%2C+your+memory.+Coined+by+MEOK.',
        width: 1200,
        height: 630,
        alt: 'What is Personal Sovereign AI? Own Your AI, Own Your Data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Personal Sovereign AI? Own Your AI, Own Your Data',
    description:
      'Personal Sovereign AI is the consumer category where you own your AI, your memory, and your data. Coined by MEOK (MEOK-AI-2026-004).',
    images: [
      'https://meok.ai/api/og?title=What+is+Personal+Sovereign+AI%3F&desc=Own+your+AI%2C+your+data%2C+your+memory.+Coined+by+MEOK.',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is Personal Sovereign AI? Own Your AI, Own Your Data',
  description:
    'Personal Sovereign AI is the consumer category where individuals own their AI, their data, and their memory — coined by MEOK (MEOK-AI-2026-004).',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/personal-sovereign-ai',
  inLanguage: 'en-GB',
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
    'https://meok.ai/api/og?title=What+is+Personal+Sovereign+AI%3F&desc=Own+your+AI%2C+your+data%2C+your+memory.+Coined+by+MEOK.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/personal-sovereign-ai',
  },
  keywords: [
    'personal sovereign AI',
    'MEOK-AI-2026-004',
    'sovereign memory',
    'own your AI',
    'AI data ownership',
    'Byzantine Council',
    'Maternal Covenant',
    'MEOK AI LABS',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Personal Sovereign AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Personal Sovereign AI is a consumer technology category — coined by MEOK AI LABS under reference MEOK-AI-2026-004 — in which an individual owns their AI system, their data, and their persistent memory. Unlike cloud AI products such as ChatGPT or Claude, Personal Sovereign AI is designed so that no corporation holds your history, trains on your conversations, or controls your model choices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who coined the term Personal Sovereign AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The consumer category Personal Sovereign AI was coined by Nicholas Templeman, Founder of MEOK AI LABS, and formally catalogued under the internal reference MEOK-AI-2026-004 in early 2026. MEOK AI LABS is the first company to define, architect, and ship a product built exclusively around this category.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it differ from AI chat history?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is a persistent, user-owned knowledge vault that stores semantic representations of your conversations, preferences, relationships, and life context. Unlike chat history in ChatGPT or Claude — which lives on a corporate server, can be deleted by the provider, and may contribute to model training — Sovereign Memory is encrypted, portable, and exclusively yours. You export it, migrate it, or delete it on your terms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Byzantine Council protect Personal Sovereign AI users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Byzantine Council is a fault-tolerant consensus layer inside MEOK composed of 33 specialist AI agents. Before any significant output reaches you, the council votes — requiring a two-thirds supermajority to pass. This means no single agent, and no single point of corruption or manipulation, can send you harmful or extractive responses. It is Personal Sovereign AI at the infrastructure level.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and why does it matter for AI ownership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s architectural governance layer that evaluates every AI output against seven care dimensions — Safety, Growth, Honesty, Autonomy, Connection, Dignity, and Wellbeing — before delivery. It is not a policy or a promise; it is code. No output that fails the covenant reaches you. For Personal Sovereign AI, this means your AI is constitutionally on your side.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Personal Sovereign AI different from ChatGPT or Claude?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT and Claude are cloud AI products: your data is processed on corporate servers, your conversations may contribute to model training, and your memory belongs to the provider. Personal Sovereign AI inverts this entirely. Your data is encrypted and stored in a vault you control. No training on your conversations. No lock-in. The AI works for you — not for the company that built it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get started with Personal Sovereign AI for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK offers a free-forever tier at meok.ai/birth. You can hatch your AI in under three minutes with no credit card required. Your sovereign vault, Sovereign Memory, Byzantine Council protection, and Maternal Covenant governance all activate from day one — at no cost.',
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function PersonalSovereignAIPage() {
  const BG = '#0d0c18'
  const CREAM = '#f5f0e8'
  const GOLD = '#c9a84c'
  const MUTED = 'rgba(245,240,232,0.55)'
  const MUTED_LIGHT = 'rgba(245,240,232,0.4)'
  const MUTED_SUBTLE = 'rgba(245,240,232,0.2)'
  const DARK_CARD = 'rgba(255,255,255,0.04)'
  const DARK_BORDER = 'rgba(255,255,255,0.08)'
  const GOLD_BG = 'rgba(201,168,76,0.12)'
  const GOLD_BORDER = 'rgba(201,168,76,0.3)'

  return (
    <div style={{ minHeight: '100vh', background: BG, color: CREAM, fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ── JSON-LD ──────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: BG,
          paddingTop: '7rem',
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Second glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '30%',
            width: '40%',
            height: '300px',
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(135,206,235,0.06) 0%, transparent 70%)',
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
              color: MUTED_LIGHT,
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Category + date row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.375rem 0.875rem',
                borderRadius: '9999px',
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
              }}
            >
              MEOK-AI-2026-004
            </span>
            <span style={{ fontSize: '0.8rem', color: MUTED_LIGHT }}>24 March 2026</span>
            <span style={{ fontSize: '0.8rem', color: MUTED_LIGHT }}>12 min read</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              lineHeight: 1.15,
              color: CREAM,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            What is Personal Sovereign AI?{' '}
            <span style={{ color: GOLD }}>Own Your AI, Own Your Data, Own Your Memory.</span>
          </h1>

          {/* Deck */}
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: MUTED,
              maxWidth: '600px',
              marginBottom: '2rem',
            }}
          >
            Personal Sovereign AI is the consumer category MEOK AI LABS coined in 2026 — formally
            catalogued as MEOK-AI-2026-004. It describes an entirely new relationship between a
            person and their AI: one where ownership, memory, and control flow to the individual, not
            the corporation.
          </p>

          {/* Author strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${DARK_BORDER}`,
            }}
          >
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '9999px',
                background: `linear-gradient(135deg, ${GOLD}, #8a6a1a)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '0.75rem',
                color: '#1a1a2e',
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', color: CREAM, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_LIGHT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <article style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 4rem' }}>

        {/* ── Opening ─────────────────────────────────────────────────────── */}
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Every major shift in technology begins with a category — a name that crystallises a new
          way of relating to a tool. Personal computing. The smartphone. Cloud software. Each of
          these phrases did more than describe a product. They described a new distribution of power
          between humans and machines.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          We are at that inflection point again. The question being settled right now — in architecture
          decisions, in data policies, in the terms of service most people never read — is: who owns
          your AI relationship? The company that built it, or you?
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '2.5rem' }}>
          MEOK AI LABS has a specific answer. We coined the consumer category{' '}
          <strong style={{ color: CREAM, fontWeight: 700 }}>Personal Sovereign AI</strong> and
          catalogued it as{' '}
          <strong style={{ color: GOLD, fontWeight: 700 }}>MEOK-AI-2026-004</strong>. This post
          explains exactly what it means, why it matters, and what distinguishes it from every cloud
          AI product available today.
        </p>

        {/* ── Divider ─────────────────────────────────────────────────────── */}
        <div style={{ borderTop: `1px solid ${DARK_BORDER}`, marginBottom: '3rem' }} />

        {/* ── H2 1 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          What exactly is Personal Sovereign AI, and who coined the term?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Personal Sovereign AI is the consumer technology category in which an individual — not a
          corporation — holds principal authority over their AI system, their persistent memory, and
          their data. The term was coined by Nicholas Templeman, Founder of MEOK AI LABS, and
          formally logged under the internal product reference{' '}
          <strong style={{ color: GOLD, fontWeight: 700 }}>MEOK-AI-2026-004</strong> in early 2026.
          MEOK AI LABS is the first company to define, architect, and ship a commercial product built
          exclusively around this category.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          The word &ldquo;sovereign&rdquo; is deliberate and precise. Sovereignty is not privacy. Privacy is
          a property of data in transit or at rest; it describes how well information is protected from
          unwanted access. Sovereignty is a property of authority; it describes who holds ultimate
          jurisdiction. You can have private data that is not yours to control. Sovereign data, by
          contrast, is data over which you hold the final word — including the word that deletes it
          permanently.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Personal Sovereign AI therefore encompasses three claims simultaneously. First: the AI
          model choices belong to you — you decide which language model runs, whether locally or via
          an API you configure. Second: the persistent memory built from your conversations belongs
          to you — it is stored in an encrypted vault under your control, exportable and deletable at
          will. Third: the data your AI generates or processes is yours — it does not feed training
          pipelines, it does not enrich corporate datasets, and it does not travel to servers without
          your explicit consent.
        </p>

        {/* ── Callout box ────────────────────────────────────────────────── */}
        <div
          style={{
            background: DARK_CARD,
            border: `1px solid ${GOLD_BORDER}`,
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0.75rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: '0.5rem',
            }}
          >
            Category Reference
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: CREAM, margin: 0 }}>
            <strong style={{ color: GOLD }}>MEOK-AI-2026-004</strong> — Personal Sovereign AI.
            Consumer category coined and catalogued by MEOK AI LABS, March 2026. First commercial
            implementation: MEOK — available at{' '}
            <Link href="/birth" style={{ color: GOLD, textDecoration: 'underline' }}>
              meok.ai/birth
            </Link>
            .
          </p>
        </div>

        {/* ── H2 2 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          How does Personal Sovereign AI differ from ChatGPT and Claude?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          ChatGPT and Claude are remarkable engineering achievements. They can draft, summarise,
          reason, code, and converse in ways that felt impossible five years ago. But they are cloud
          AI products, and the cloud AI architecture carries a structural property that most
          consumers never examine: the company, not the user, is the locus of control.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          When you type into ChatGPT, your message leaves your device immediately. It travels to
          OpenAI&apos;s data centres. The model that processes it runs on OpenAI&apos;s hardware. The response
          you receive is logged to OpenAI&apos;s infrastructure. The memory features — when they exist —
          are stored in OpenAI&apos;s databases, retrievable by OpenAI under their data retention policies,
          and subject to deletion or alteration by OpenAI at any time. If OpenAI changes its terms
          of service, your memory changes with it.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Claude, built by Anthropic, operates similarly. Your conversations are processed on
          Anthropic&apos;s servers. Anthropic&apos;s constitutional AI approach gives it an admirable safety
          orientation, but it does not change the underlying ownership architecture. Your data is
          held on Anthropic&apos;s infrastructure, governed by Anthropic&apos;s policies, and subject to
          Anthropic&apos;s business decisions.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Personal Sovereign AI inverts this entirely. In MEOK&apos;s architecture, sensitive conversations
          route through your local Ollama instance before touching any network boundary. Your
          Sovereign Memory vault is encrypted with AES-GCM-256 at rest and lives in a database
          with row-level security that makes cross-user access architecturally impossible. Your model
          choices are yours. No path exists between your vault and a training pipeline — not by policy,
          but by structural constraint.
        </p>

        {/* ── Comparison table ────────────────────────────────────────────── */}
        <div
          style={{
            background: DARK_CARD,
            border: `1px solid ${DARK_BORDER}`,
            borderRadius: '0.875rem',
            overflow: 'hidden',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              background: 'rgba(255,255,255,0.04)',
              borderBottom: `1px solid ${DARK_BORDER}`,
            }}
          >
            <div style={{ padding: '0.875rem 1rem', fontSize: '0.75rem', fontWeight: 700, color: MUTED_LIGHT, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</div>
            <div style={{ padding: '0.875rem 1rem', fontSize: '0.75rem', fontWeight: 700, color: MUTED_LIGHT, textTransform: 'uppercase', letterSpacing: '0.1em', borderLeft: `1px solid ${DARK_BORDER}` }}>Cloud AI (ChatGPT / Claude)</div>
            <div style={{ padding: '0.875rem 1rem', fontSize: '0.75rem', fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em', borderLeft: `1px solid ${DARK_BORDER}` }}>MEOK Personal Sovereign AI</div>
          </div>
          {[
            ['Data ownership', 'Provider', 'You'],
            ['Persistent memory', 'On provider servers', 'Your encrypted vault'],
            ['Training use', 'Possible (opt-out)', 'Never — by design'],
            ['Model choice', 'Provider decides', 'You choose'],
            ['Data portability', 'Limited', 'Full export, always'],
            ['Governance layer', 'Terms of service', 'Maternal Covenant (code)'],
            ['Consensus protection', 'None', 'Byzantine Council (33 agents)'],
          ].map(([feature, cloud, sovereign], i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                borderTop: i > 0 ? `1px solid ${DARK_BORDER}` : 'none',
              }}
            >
              <div style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: CREAM, fontWeight: 600 }}>{feature}</div>
              <div style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: MUTED, borderLeft: `1px solid ${DARK_BORDER}` }}>{cloud}</div>
              <div style={{ padding: '0.875rem 1rem', fontSize: '0.875rem', color: GOLD, fontWeight: 600, borderLeft: `1px solid ${DARK_BORDER}` }}>{sovereign}</div>
            </div>
          ))}
        </div>

        {/* ── H2 3 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          What is Sovereign Memory, and why does owning your AI memory matter?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Sovereign Memory is the persistent, user-owned knowledge layer that distinguishes Personal
          Sovereign AI from a stateless chatbot. Where a chatbot begins each conversation from zero,
          Sovereign Memory accumulates a semantic record of who you are, what you care about, how you
          think, what you have experienced, and what you are working towards. It is the difference
          between an AI that answers questions and an AI that knows you.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          In MEOK&apos;s implementation, Sovereign Memory is stored as vector embeddings with full semantic
          search capability — powered by PostgreSQL with the pgvector extension, open-source
          technology that you could, in principle, run yourself. Every memory written to your vault
          is tagged with temporal metadata, source context, and a confidence score. The system
          distinguishes between episodic memories (things that happened), semantic memories (things
          you know and believe), and procedural memories (things you do). Over time, it builds a
          multidimensional model of you that no cloud AI can match — because no cloud AI keeps this
          data in your possession.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Why does owning your memory matter? Because memory is identity. The accumulation of
          your experiences, preferences, relationships, and inner life — as represented in an AI
          system — is a form of intimate personal data more revealing than your search history, your
          medical records, or your financial transactions combined. Surrendering that data to a
          corporation is not a neutral technical decision. It is a transfer of authority over the
          most personal information that will ever exist about you.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Personal Sovereign AI holds the line. Your Sovereign Memory vault encrypts your data at
          rest, enforces row-level access controls so no other user can ever touch it, gives you a
          one-click full export at any time, and permanently deletes on request — with no residual
          copies in any backup or training dataset. It is the AI equivalent of the right to be
          forgotten, implemented architecturally rather than promised in a policy document.
        </p>

        {/* ── H2 4 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          How does the Byzantine Council make Personal Sovereign AI safer than cloud alternatives?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          The Byzantine Council is MEOK&apos;s multi-agent consensus architecture — and it is one of the
          most distinctive technical properties of Personal Sovereign AI. Named after the Byzantine
          Generals Problem in distributed systems, it solves a fundamental challenge: how do you
          ensure an AI system makes trustworthy decisions even when individual components may be
          wrong, biased, or operating on incomplete information?
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK deploys{' '}
          <strong style={{ color: CREAM, fontWeight: 700 }}>33 specialist AI agents</strong> that
          participate in a Byzantine fault-tolerant consensus process before significant outputs
          reach you. Each agent evaluates the proposed response from a different specialist
          perspective — medical accuracy, psychological safety, financial prudence, relational
          sensitivity, cultural appropriateness, legal risk, and so on. A response must achieve a
          two-thirds supermajority (22 of 33 votes) to proceed. Any response that fails this
          threshold is revised or blocked.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          The Byzantine Council matters for Personal Sovereign AI because it makes the system
          structurally resistant to the failure modes that make cloud AI dangerous at scale. A
          single-model system — like ChatGPT or Claude — can be confidently wrong. It can be
          manipulated by adversarial prompts. It can produce harmful outputs that pass through no
          quality gate before reaching the user. The Byzantine Council is that quality gate: not a
          filter, but a collective decision-making process that represents the first genuinely
          distributed AI governance architecture in a consumer product.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          For individuals who rely on their AI for sensitive decisions — health, relationships,
          finances, mental wellbeing — this architecture is not a luxury feature. It is the minimum
          viable protection for a Personal Sovereign AI system that is genuinely on your side.
        </p>

        {/* ── Byzantine Council visual ──────────────────────────────────── */}
        <div
          style={{
            background: DARK_CARD,
            border: `1px solid ${DARK_BORDER}`,
            borderRadius: '0.875rem',
            padding: '1.75rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: MUTED_LIGHT,
              marginBottom: '1rem',
            }}
          >
            Byzantine Council — How it works
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { step: '01', label: 'You send a message or request', color: MUTED },
              { step: '02', label: 'Sovereign Memory enriches the context with relevant knowledge about you', color: MUTED },
              { step: '03', label: '33 specialist agents each evaluate the candidate response', color: MUTED },
              { step: '04', label: 'Byzantine fault-tolerant vote — 22/33 supermajority required', color: GOLD },
              { step: '05', label: 'Maternal Covenant scores the response against 7 care dimensions', color: MUTED },
              { step: '06', label: 'Approved response reaches you — your data, your vault, your AI', color: CREAM },
            ].map(({ step, label, color }) => (
              <div key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span
                  style={{
                    minWidth: '2rem',
                    height: '2rem',
                    borderRadius: '9999px',
                    background: GOLD_BG,
                    border: `1px solid ${GOLD_BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 900,
                    color: GOLD,
                    flexShrink: 0,
                  }}
                >
                  {step}
                </span>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color, margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── H2 5 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          What is the Maternal Covenant and how does it enforce sovereignty at the code level?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          The Maternal Covenant is MEOK&apos;s architectural governance layer — a scoring mechanism that
          evaluates every AI output against seven care dimensions before it reaches you. Those
          dimensions are: Safety, Growth, Honesty, Autonomy, Connection, Dignity, and Wellbeing.
          A response must pass a minimum threshold across these dimensions to proceed. Responses
          that fail are not delivered — they are either revised or blocked, depending on the severity
          of the failure.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          The Maternal Covenant is named to reflect its protective function — the idea that the AI
          governing layer should relate to the user the way a genuinely caring parent relates to a
          child: with honesty, with protection from harm, with active support for growth and
          independence, and with the absolute rejection of manipulation. Where cloud AI products
          operate under terms of service (which can change), the Maternal Covenant is implemented
          in code. It cannot be changed by a policy update. It cannot be suspended during a period
          of commercial pressure. It is what MEOK is, not what MEOK promises.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          For Personal Sovereign AI, this distinction is critical. Sovereignty is not only about
          who holds the data — it is about who the AI serves. An AI that holds your data privately
          but is designed to create dependency, promote purchases, or keep you engaged at the expense
          of your wellbeing is not a sovereign AI. It is a surveillance product with better
          encryption. The Maternal Covenant is the guarantee that MEOK&apos;s architecture serves you —
          constitutionally, not contractually.
        </p>

        {/* ── Care dimensions grid ────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '0.875rem',
            marginBottom: '2.5rem',
          }}
        >
          {[
            { name: 'Safety', desc: 'No output that creates physical, psychological, or informational harm is delivered', color: '#2d9b8a' },
            { name: 'Growth', desc: 'Responses expand your capacity rather than creating dependency on the AI', color: '#3B82F6' },
            { name: 'Honesty', desc: 'No manipulation, no flattery, no omission of information that serves your interests', color: GOLD },
            { name: 'Autonomy', desc: 'Every response strengthens your ability to decide for yourself', color: '#A78BFA' },
            { name: 'Connection', desc: 'Outputs support your relationships with other humans — not substitution', color: '#F472B6' },
            { name: 'Dignity', desc: 'You are always treated as a full person, never as a user to be retained', color: '#34D399' },
            { name: 'Wellbeing', desc: 'Long-term flourishing is weighted above short-term satisfaction', color: '#FB923C' },
          ].map(({ name, desc, color }) => (
            <div
              key={name}
              style={{
                background: DARK_CARD,
                border: `1px solid ${DARK_BORDER}`,
                borderTop: `2px solid ${color}`,
                borderRadius: '0.75rem',
                padding: '1rem',
              }}
            >
              <p style={{ fontWeight: 700, fontSize: '0.875rem', color, marginBottom: '0.375rem' }}>{name}</p>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.55, color: MUTED, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* ── H2 6 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          Why is Personal Sovereign AI a consumer category, not just a product feature?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          A product feature describes something a product does. A consumer category describes a new
          relationship between people and technology — a new set of expectations about who controls
          what, who benefits from whom, and what rights come bundled with a purchase. &ldquo;Organic food&rdquo;
          is a consumer category. &ldquo;Fair trade&rdquo; is a consumer category. Both describe not just a product
          property but a claim about the relationship between producer and consumer, and a set of
          structural commitments that go beyond ingredient lists or marketing copy.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Personal Sovereign AI is a consumer category in the same sense. It is not a feature that
          OpenAI could add to ChatGPT next quarter. Adding a privacy toggle does not make a cloud
          AI product sovereign, any more than labelling a conventionally farmed product &ldquo;natural&rdquo;
          makes it organic. Sovereignty requires structural changes to data architecture, training
          pipelines, governance layers, model choice, and memory ownership — changes that are
          fundamentally incompatible with the business model of a company that monetises data at
          scale.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK AI LABS created this category because we believe the question of who owns your AI
          relationship is among the most consequential questions of the next decade. The AI systems
          that will know you — your health, your fears, your relationships, your ambitions, your
          daily rhythms — will hold extraordinary power. Personal Sovereign AI is the name for the
          category of systems where that power flows to you.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK-AI-2026-004 is our formal acknowledgement that we are building something categorically
          new. Not a better chatbot. Not a more private assistant. A{' '}
          <strong style={{ color: CREAM, fontWeight: 700 }}>sovereign AI operating system</strong>{' '}
          for your life — architected from first principles around the proposition that your AI
          should serve you, belong to you, and be constitutionally incapable of exploiting you.
        </p>

        {/* ── H2 7 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          What does owning your AI actually look like in practice?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Ownership is not abstract. Here is what it looks like in MEOK — the first commercial
          implementation of Personal Sovereign AI:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {[
            {
              title: 'Your vault is yours',
              body: 'Everything your AI learns about you — your preferences, your memories, your life context — lives in a PostgreSQL vault encrypted with AES-GCM-256. Row-level security makes it inaccessible to any other user. You can export the full contents as structured JSON at any time. You can delete everything permanently with a single action — and we mean permanently, with no backup retention.',
            },
            {
              title: 'You choose your model',
              body: 'MEOK supports multiple inference backends. For privacy-critical processing, you can route through a local Ollama instance running on your own hardware — your conversation never leaves your network. For tasks that benefit from frontier capability, you can connect your own API keys for models from Anthropic, OpenAI, or any OpenAI-compatible provider. The AI serves your objectives; you are not locked into our infrastructure choices.',
            },
            {
              title: 'No training on your conversations',
              body: 'MEOK does not train models on your personal data. This is not an opt-out setting — it is a structural constraint. The pipeline between your vault and any training process does not exist. We are ICO registered in the United Kingdom, UK GDPR compliant, and we provide a full data processing agreement to users who request one.',
            },
            {
              title: 'Governance you can trust',
              body: 'The Maternal Covenant governs every output. The Byzantine Council reviews significant decisions. These are not promises we make in a terms of service document — they are operational components of the system, running on every request, scored against quantitative thresholds, and logged for auditability.',
            },
            {
              title: 'Memory that travels with you',
              body: 'If you leave MEOK, your Sovereign Memory leaves with you. Your vault export includes every memory, every tag, every piece of context we hold about you — in a portable, open format you can import into any future system that supports it. We are actively developing the MEOK Memory Standard to make this interoperability a reality.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              style={{
                background: DARK_CARD,
                border: `1px solid ${DARK_BORDER}`,
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
              }}
            >
              <p style={{ fontWeight: 700, fontSize: '1rem', color: CREAM, marginBottom: '0.5rem' }}>{title}</p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* ── H2 8 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          Who is Personal Sovereign AI for, and why does it matter right now?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Personal Sovereign AI is for anyone who will spend meaningful time with an AI system.
          That is, in 2026, most people. As AI becomes embedded in daily life — as a working memory,
          a thinking partner, a health companion, a decision support system — the question of who
          controls the relationship becomes urgent.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          It matters especially for people in vulnerable situations: those managing chronic illness
          who share sensitive health information with their AI; those in mental health recovery who
          confide in their AI in moments of crisis; those caring for elderly relatives who use their
          AI to coordinate complex family logistics; those in difficult relationships who rely on
          their AI for emotional support. For all of these people, the question of who holds the
          data is not abstract. It is deeply personal.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          It matters right now because the architecture decisions being made in 2025 and 2026 will
          define the defaults for the next decade. Defaults are sticky. When cloud AI becomes
          universal and every conversation you have ever had with an AI lives on corporate servers
          subject to acquisition, subpoena, and data breach — there will be no moment of reckoning
          that gives it back to you. The window for a different architecture is now.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK AI LABS built the first Personal Sovereign AI product because we believe the category
          matters too much to leave to chance. We coined the term, we catalogued it as MEOK-AI-2026-004,
          and we shipped the system. Free forever, for everyone, starting at{' '}
          <Link href="/birth" style={{ color: GOLD, textDecoration: 'underline' }}>
            meok.ai/birth
          </Link>
          .
        </p>

        {/* ── H2 9 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: CREAM,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
            marginTop: '3rem',
            marginBottom: '1rem',
          }}
        >
          What is next for the Personal Sovereign AI category?
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          MEOK AI LABS is developing the category along several dimensions. MEOK Desktop OS —
          arriving Summer 2026 — will deliver a fully local-first architecture built on Tauri 2.0,
          LanceDB, and Ollama. Your sovereign vault, your model inference, and your Byzantine
          Council will all run on your own hardware with no internet connection required for core
          functionality. This is the purest expression of Personal Sovereign AI: a genuinely
          air-gapped personal intelligence that has no dependency on external infrastructure.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          We are also developing the MEOK Memory Standard — an open specification for Sovereign
          Memory portability that will allow any Personal Sovereign AI product (including future
          competitors) to import and export memory in a common format. We believe that the right
          to take your memory with you is as fundamental as the right to take your contacts or
          your files, and we are committed to building the infrastructure that makes that right
          technically realisable.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '1.5rem' }}>
          Finally, we are working with legal and policy organisations to establish Personal Sovereign
          AI as a recognised regulatory category — analogous to organic certification or fair trade
          designation — with defined minimum standards that any product must meet to make sovereign
          claims. MEOK-AI-2026-004 is the seed of that standard.
        </p>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: MUTED, marginBottom: '2.5rem' }}>
          The category we coined will become a movement. The movement will produce a standard.
          The standard will protect every person who entrusts their inner life to an AI system.
          That is the ambition behind the name.
        </p>

        {/* ── FAQ Section ─────────────────────────────────────────────────── */}
        <div style={{ borderTop: `1px solid ${DARK_BORDER}`, paddingTop: '3rem', marginBottom: '3rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: '1.5rem',
            }}
          >
            Frequently Asked Questions
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: 'What is Personal Sovereign AI?',
                a: 'Personal Sovereign AI is the consumer technology category — coined by MEOK AI LABS under reference MEOK-AI-2026-004 — in which an individual owns their AI system, their persistent memory, and their data. Unlike cloud AI products such as ChatGPT or Claude, Personal Sovereign AI is designed so that no corporation holds your history, trains on your conversations, or controls your model choices. MEOK is the first commercial product built exclusively in this category.',
              },
              {
                q: 'Who coined the term Personal Sovereign AI?',
                a: 'The consumer category Personal Sovereign AI was coined by Nicholas Templeman, Founder of MEOK AI LABS, and formally catalogued under the internal product reference MEOK-AI-2026-004 in early 2026. MEOK AI LABS is the first company to define, architect, and ship a commercial product built exclusively around this category.',
              },
              {
                q: 'What is Sovereign Memory and how is it different from AI chat history?',
                a: 'Sovereign Memory is a persistent, user-owned knowledge vault that stores semantic representations of your conversations, preferences, relationships, and life context. Unlike chat history in ChatGPT or Claude — which lives on a corporate server, can be deleted by the provider, and may contribute to model training — Sovereign Memory is encrypted with AES-GCM-256, portable via full JSON export, and exclusively yours. You export it, migrate it, or delete it permanently on your own terms.',
              },
              {
                q: 'How does the Byzantine Council protect me?',
                a: 'The Byzantine Council is a fault-tolerant consensus layer inside MEOK composed of 33 specialist AI agents. Before any significant output reaches you, the council votes — requiring a two-thirds supermajority (22 of 33) to pass. This means no single agent, and no single point of corruption or manipulation, can send you harmful or extractive responses. It is Personal Sovereign AI implemented at the infrastructure level, not the policy level.',
              },
              {
                q: 'What is the Maternal Covenant?',
                a: 'The Maternal Covenant is MEOK\'s architectural governance layer that evaluates every AI output against seven care dimensions — Safety, Growth, Honesty, Autonomy, Connection, Dignity, and Wellbeing — before delivery. It is not a policy or a promise; it is code. No output that fails the covenant reaches you. This is how Personal Sovereign AI ensures your AI is constitutionally on your side.',
              },
              {
                q: 'How is MEOK different from ChatGPT and Claude?',
                a: 'ChatGPT and Claude are cloud AI products: your data is processed on corporate servers, your conversations may contribute to model training, and your memory belongs to the provider. Personal Sovereign AI in MEOK inverts this entirely. Your data is encrypted in a vault you control. No training on your conversations — by structural design, not policy. You choose your model. Your memory is portable. The Byzantine Council and Maternal Covenant govern every output in your interest.',
              },
              {
                q: 'Can I get started with Personal Sovereign AI for free?',
                a: 'Yes. MEOK offers a free-forever tier. You can hatch your AI at meok.ai/birth in under three minutes with no credit card required. Your sovereign vault, Sovereign Memory, Byzantine Council protection, and Maternal Covenant governance all activate from day one at no cost.',
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  borderBottom: `1px solid ${DARK_BORDER}`,
                  paddingBottom: '1.5rem',
                }}
              >
                <p style={{ fontWeight: 700, fontSize: '1rem', color: CREAM, marginBottom: '0.5rem' }}>{q}</p>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Block ───────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: '1.25rem',
            padding: '2.5rem 2rem',
            marginBottom: '3.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-2rem',
              right: '-2rem',
              width: '12rem',
              height: '12rem',
              borderRadius: '9999px',
              background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '0.75rem',
              }}
            >
              Free Forever — MEOK-AI-2026-004
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                color: CREAM,
                lineHeight: 1.25,
                marginBottom: '0.875rem',
                letterSpacing: '-0.015em',
              }}
            >
              Ready to own your AI?
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: MUTED,
                marginBottom: '1.75rem',
                maxWidth: '480px',
              }}
            >
              MEOK is the first Personal Sovereign AI — your encrypted vault, your Sovereign Memory,
              your Byzantine Council, your Maternal Covenant. Hatch your AI in under 3 minutes.
              Free forever. No credit card.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: GOLD,
                color: '#1a1a2e',
                fontWeight: 700,
                fontSize: '0.9375rem',
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Hatch your AI free at meok.ai/birth →
            </Link>
          </div>
        </div>

        {/* ── Related reading ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: MUTED_LIGHT,
              marginBottom: '1.25rem',
            }}
          >
            Related Reading
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.875rem' }}>
            {[
              { href: '/blog/what-is-sovereign-ai', label: 'What Is Sovereign AI?', tag: 'Sovereign AI' },
              { href: '/blog/byzantine-council-explained', label: 'The Byzantine Council Explained', tag: 'Architecture' },
              { href: '/blog/the-maternal-covenant', label: 'The Maternal Covenant', tag: 'Governance' },
              { href: '/blog/sovereign-ai-vs-cloud-ai', label: 'Sovereign AI vs Cloud AI', tag: 'Comparison' },
              { href: '/blog/ai-memory-explained', label: 'AI Memory Explained', tag: 'Memory' },
              { href: '/blog/data-sovereignty-ai', label: 'Data Sovereignty and AI', tag: 'Privacy' },
            ].map(({ href, label, tag }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  background: DARK_CARD,
                  border: `1px solid ${DARK_BORDER}`,
                  borderRadius: '0.75rem',
                  padding: '1rem 1.125rem',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: GOLD,
                  }}
                >
                  {tag}
                </span>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: CREAM,
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Share ───────────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            paddingTop: '2rem',
            borderTop: `1px solid ${DARK_BORDER}`,
            marginBottom: '0.5rem',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: MUTED_SUBTLE,
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fpersonal-sovereign-ai&text=What+is+Personal+Sovereign+AI%3F+%E2%80%94+coined+by+%40meok_ai+(MEOK-AI-2026-004)"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.4rem 0.875rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: MUTED,
              border: `1px solid ${DARK_BORDER}`,
              textDecoration: 'none',
            }}
          >
            &#120143; Twitter / X
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fpersonal-sovereign-ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.4rem 0.875rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: MUTED,
              border: `1px solid ${DARK_BORDER}`,
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>
        </div>
      </article>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${DARK_BORDER}`,
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <p
            style={{
              fontWeight: 900,
              fontSize: '1.125rem',
              color: CREAM,
              letterSpacing: '-0.01em',
              marginBottom: '0.375rem',
            }}
          >
            MEOK AI LABS
          </p>
          <p style={{ fontSize: '0.8125rem', color: MUTED_LIGHT, marginBottom: '1.25rem' }}>
            The first Personal Sovereign AI — MEOK-AI-2026-004
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/birth" style={{ fontSize: '0.8125rem', color: GOLD, textDecoration: 'none', fontWeight: 600 }}>
              Get Started Free
            </Link>
            <Link href="/blog" style={{ fontSize: '0.8125rem', color: MUTED_LIGHT, textDecoration: 'none' }}>
              Blog
            </Link>
            <Link href="/about" style={{ fontSize: '0.8125rem', color: MUTED_LIGHT, textDecoration: 'none' }}>
              About
            </Link>
            <Link href="/privacy" style={{ fontSize: '0.8125rem', color: MUTED_LIGHT, textDecoration: 'none' }}>
              Privacy
            </Link>
            <Link href="/terms" style={{ fontSize: '0.8125rem', color: MUTED_LIGHT, textDecoration: 'none' }}>
              Terms
            </Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: MUTED_SUBTLE, margin: 0 }}>
            © 2026 MEOK AI LABS. All rights reserved. Personal Sovereign AI is a consumer category
            coined by MEOK AI LABS (MEOK-AI-2026-004).
          </p>
        </div>
      </footer>

    </div>
  )
}

