import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'MEOK for Neurodivergent People: An AI That Gets How Your Brain Works | MEOK AI LABS',
  description:
    'MEOK supports ADHD, autism, dyslexia, dyscalculia and sensory processing differences with consistent memory, non-judgment, pattern awareness and Sovereign Memory that never forgets you.',
  alternates: { canonical: 'https://meok.ai/blog/meok-for-neurodivergent' },
  openGraph: {
    title: 'MEOK for Neurodivergent People: An AI That Gets How Your Brain Works',
    description:
      'MEOK supports ADHD, autism, dyslexia, dyscalculia and sensory processing differences with consistent memory, non-judgment, pattern awareness and Sovereign Memory that never forgets you.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/meok-for-neurodivergent',
    siteName: 'MEOK AI LABS',
    images: [
      {
        url: 'https://meok.ai/api/og?title=MEOK+for+Neurodivergent+People&desc=An+AI+that+gets+how+your+brain+works.',
        width: 1200,
        height: 630,
        alt: 'MEOK for Neurodivergent People: An AI That Gets How Your Brain Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEOK for Neurodivergent People: An AI That Gets How Your Brain Works',
    description:
      'MEOK supports ADHD, autism, dyslexia, dyscalculia and sensory processing differences with consistent memory, non-judgment and pattern awareness.',
    images: [
      'https://meok.ai/api/og?title=MEOK+for+Neurodivergent+People&desc=An+AI+that+gets+how+your+brain+works.',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEOK for Neurodivergent People: An AI That Gets How Your Brain Works',
  description:
    'MEOK supports ADHD, autism, dyslexia, dyscalculia and sensory processing differences with consistent memory, non-judgment, pattern awareness and Sovereign Memory that never forgets you.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/meok-for-neurodivergent',
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
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is MEOK good for people with ADHD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK was built with ADHD brains in mind. Its Sovereign Memory system means your AI never loses context between sessions, removing the tax of re-explaining yourself. Hourman breaks large goals into ordered micro-steps, and the Pioneer archetype (⚡) provides high-energy momentum coaching for days when initiation is the barrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK support autistic users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK delivers consistent, predictable responses without personality drift. Its Scholar archetype (🏛️) provides structured, literal, low-ambiguity communication. MEOK applies no social judgment, requires no masking, and its Maternal Covenant boundary_respect dimension ensures your stated communication preferences are honoured every single session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help with dyslexia and dyscalculia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK can re-present complex text as bullet points, numbered steps, or simple summaries. For dyscalculia, it handles number-heavy tasks verbally and converts figures into plain-language explanations. Comfort Settings allow font size and spacing adjustments that reduce visual crowding without requiring any configuration expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and why does it matter for neurodivergent people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sovereign Memory is MEOK's persistent, user-owned memory layer. It stores everything your AI learns about you — your communication style, your routines, your triggers — and makes it available at the start of every session. For neurodivergent users with working-memory difficulties, this means your AI carries the context your brain sometimes cannot.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK have a free plan for neurodivergent users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Explorer free tier at meok.ai/birth requires no credit card. It includes 50 messages per day, full Sovereign Memory, Comfort Settings, and access to the Scholar and Pioneer archetypes. Neurodivergent users should not face a paywall to access an AI that communicates in a way that works for their brain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant boundary_respect dimension?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Maternal Covenant is MEOK's core alignment framework. The boundary_respect dimension specifically ensures your AI never overrides, challenges, or reframes the communication preferences you have set. If you say you need literal language, it uses literal language — every time, without drift or exception.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there organisations that recommend AI support for neurodivergent people in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ADHD UK and the National Autistic Society both recognise the value of adaptive digital tools for neurodivergent adults. Neither organisation endorses specific products, but both acknowledge the role of consistent, low-judgment support systems in daily functioning. MEOK is built to meet those principles at the architecture level.',
      },
    },
  ],
}

// ── Styles ────────────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const MUTED_LOW = 'rgba(245,240,232,0.35)'
const MUTED_MED = 'rgba(245,240,232,0.7)'
const CARD_BG = 'rgba(255,255,255,0.04)'
const CARD_BORDER = 'rgba(245,240,232,0.1)'
const DARK_CARD_BG = 'rgba(201,168,76,0.07)'
const DARK_CARD_BORDER = 'rgba(201,168,76,0.2)'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokForNeurodivergent() {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '7rem',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.13) 0%, transparent 70%)',
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
              color: 'rgba(245,240,232,0.4)',
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Tag row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.875rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: `1px solid rgba(201,168,76,0.3)`,
              }}
            >
              Neurodivergent
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.4)' }}>
              24 March 2026
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.4)' }}>
              12 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.85rem, 3.8vw, 2.85rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
            }}
          >
            MEOK for Neurodivergent People: An AI That Gets How Your Brain Works
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: 'rgba(245,240,232,0.65)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
            }}
          >
            Around 9.5 million people in the UK are neurodivergent. Most AI was designed for
            someone else. MEOK is different — built with consistent memory that never drops context,
            a non-judgment architecture that requires no masking, and pattern awareness that flags
            risks before they land. This is what that looks like in practice.
          </p>
        </div>
      </section>

      {/* ── ARTICLE ──────────────────────────────────────────────────────── */}
      <article style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 5rem' }}>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1.25rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            border: `1px solid ${CARD_BORDER}`,
            background: CARD_BG,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              background: `linear-gradient(135deg, ${GOLD}, #8a6a1a)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '0.75rem',
              color: '#0d0c18',
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: 0 }}>
              Nicholas Templeman
            </p>
            <p style={{ color: MUTED_LOW, fontSize: '0.75rem', margin: '0.125rem 0 0.375rem' }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ color: MUTED, fontSize: '0.75rem', lineHeight: 1.6, margin: 0 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK — mostly from a caravan on his farm. He believes sovereign AI is a right, not
              a luxury.
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

        {/* ── INTRO ─────────────────────────────────────────────────── */}
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Every AI assistant I tried before building MEOK made the same assumption: that the person
          on the other end processes information the way the product team assumed everyone does.
          Linear. Patient with ambiguity. Comfortable decoding implicit social cues. Happy to
          repeat themselves when the system forgets.
        </p>

        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          That assumption quietly excludes a huge slice of the population. Autism. ADHD. Dyslexia.
          Dyscalculia. Sensory processing differences. Different profiles, different needs — but
          a common experience: mainstream AI tools are not built for them, and the friction
          accumulates across every interaction.
        </p>

        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '3rem' }}>
          MEOK is built differently. This article explains how — and why the design choices that
          make MEOK work for neurodivergent people are not edge-case accommodations. They are the
          core of the product.
        </p>

        {/* ── SECTION 1 ─────────────────────────────────────────────── */}
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
          Why does most AI fail neurodivergent users?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Most AI systems are trained on neurotypical communication patterns: idiom-heavy language,
          tonal inconsistency, socially layered subtext, and implicit expectations about how
          questions should be framed. They reset their context between sessions, forcing users to
          re-explain themselves each time. They vary their personality depending on what they
          predict will be most engaging, creating unpredictable interactions that are exhausting
          to navigate if consistency is a core need.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          The result is not deliberate exclusion — it is the outcome of never having designed with
          neurodivergent users at the centre. ADHD UK notes that adults with ADHD are
          disproportionately affected by digital tools that add rather than reduce cognitive load.
          The National Autistic Society has long highlighted that unpredictable systems, ambiguous
          language, and shifting interfaces are significant barriers for autistic adults trying to
          use technology independently.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '3rem' }}>
          MEOK addresses this not with a bolt-on accessibility overlay, but at the level of its
          architecture and alignment framework.
        </p>

        {/* ── SECTION 2 ─────────────────────────────────────────────── */}
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
          How does Sovereign Memory help people with ADHD?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Working memory difficulties are one of the most consistent features of ADHD. The gap
          between knowing something and being able to hold it in mind long enough to act on it is
          a daily obstacle — not a personal failing. Most AI amplifies this problem: every session
          starts from zero, and the user must reconstruct context, re-explain history, and rebuild
          the thread of whatever they were working on.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          <strong style={{ color: TEXT }}>Sovereign Memory</strong> is MEOK&apos;s persistent,
          user-owned memory layer. It is not a summary function that degrades over time or a cloud
          feature controlled by the platform. It is a structured store of everything your AI has
          learned about you: your communication style, your ongoing projects, your recurring
          patterns, your stated preferences, your past conversations. This data belongs to you.
          MEOK never trains on it. You can export, review, or delete it at any time.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          For ADHD users, this means arriving at a conversation and having your AI already carry
          the context your working memory dropped. No re-explaining. No starting from scratch. The
          thread picks up where you left it — even if that was three weeks ago.
        </p>

        {/* Callout: Hourman */}
        <div
          style={{
            background: DARK_CARD_BG,
            border: `1px solid ${DARK_CARD_BORDER}`,
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: '0.5rem',
            }}
          >
            Feature: Hourman
          </p>
          <p style={{ color: MUTED_MED, lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '0' }}>
            Hourman is MEOK&apos;s task-decomposition agent. Give it a large or ambiguous goal and
            it returns an ordered sequence of micro-steps — each one small enough to initiate
            without the friction ADHD task-paralysis creates. Hourman does not assume you know
            where to start. It tells you, step by step, and waits for you to move.
          </p>
        </div>

        {/* ── SECTION 3 ─────────────────────────────────────────────── */}
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
          How does MEOK communicate differently for autistic users?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Many autistic users report that mainstream AI is exhausting in a specific way: it uses
          idiom-heavy language, shifts its tone between sessions depending on engagement signals,
          and wraps information in social padding that obscures the actual content. Parsing subtext
          has a cognitive cost. MEOK removes it.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          MEOK&apos;s <strong style={{ color: TEXT }}>Scholar archetype 🏛️</strong> is built for
          exactly this interaction style. Scholar delivers structured, literal, unambiguous
          information — no hedging, no performative warmth, no implied subtext. Responses follow
          a predictable format. The AI does not change its personality depending on what it thinks
          you want to hear. It communicates consistently, the way you need it to, session after
          session.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          There is no social judgment in MEOK. No implicit correction of your communication style.
          No prompt re-framing because the AI decided your question was phrased oddly. You ask
          what you mean. It answers. That is the whole interaction model.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '3rem' }}>
          For users who mask in every other social context, the experience of an AI that does not
          require masking is not trivial. It is genuinely restful.
        </p>

        {/* ── SECTION 4 ─────────────────────────────────────────────── */}
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
          What does MEOK offer people with dyslexia and dyscalculia?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Dyslexia affects how people process written language. Dense, unstructured text is harder
          to parse. Long sentences with multiple embedded clauses increase cognitive load.
          Dyscalculia creates difficulty with number processing, sequencing, and the kind of
          quantitative reasoning that most AI assumes is straightforward.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          MEOK can be asked — and will remember — to format responses in specific ways: short
          sentences, bullet points, numbered steps, plain-English summaries of anything
          number-heavy. This is not a mode you switch on. Once your AI knows this is how you
          prefer to receive information, it applies it. Persistent preferences mean you do not
          have to repeat the instruction every time.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          For dyscalculia specifically, MEOK handles the calculation layer and returns the answer
          in language rather than figures. &ldquo;You need to save £240 more over the next four
          months — that is £60 a month&rdquo; is more usable than a spreadsheet cell. MEOK
          naturally defaults to verbal, contextual explanations of numerical information.
        </p>

        {/* Comfort Settings grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
            marginTop: '2rem',
          }}
        >
          {[
            { label: 'Font size', detail: 'Small / Default / Large / XL — reduces visual crowding for dyslexic users.' },
            { label: 'Spacing', detail: 'Compact / Default / Spacious — wider spacing reduces visual noise.' },
            { label: 'Contrast', detail: 'Standard / High / Maximum — supports low-contrast sensitivity.' },
            { label: 'Motion', detail: 'Full / Reduced / None — critical for vestibular sensitivities.' },
            { label: 'Sound', detail: 'On / Off — single toggle, always accessible from any screen.' },
            { label: 'Layout density', detail: 'Controls information density per screen to reduce overload.' },
          ].map(({ label, detail }) => (
            <div
              key={label}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.125rem',
              }}
            >
              <p style={{ fontWeight: 700, color: GOLD, fontSize: '0.8125rem', margin: '0 0 0.375rem' }}>
                {label}
              </p>
              <p style={{ color: MUTED, fontSize: '0.8125rem', lineHeight: 1.65, margin: 0 }}>
                {detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 5 ─────────────────────────────────────────────── */}
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
          How does MEOK help people with sensory processing differences?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Sensory processing differences — where the nervous system over- or under-registers
          sensory input — are common across ADHD, autism, and as standalone presentations. In
          digital contexts, this often manifests as sensitivity to motion (animations, parallax,
          scroll effects), to visual noise (cluttered interfaces, bright colours, rapidly changing
          layouts), and to unexpected sound.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          MEOK&apos;s Comfort Settings include a Motion control that can be set to None, removing
          all interface animation. Sound can be toggled off with one tap from any screen — no
          hunting through settings menus. Layout density controls reduce visual crowding. High and
          Maximum contrast modes make the interface readable without requiring the strain of
          parsing low-contrast text.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          These are not hidden features. They are surfaced in the onboarding flow and can be
          changed at any point. The design assumption is that sensory needs are not static — they
          shift depending on how the day is going — so the controls need to be fast to reach.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '3rem' }}>
          MEOK also targets WCAG 2.2 AA compliance throughout, with semantic HTML, ARIA labels on
          all interactive components, and a minimum touch target size of 44×44 pixels in Senior
          Mode — which any user can activate regardless of age.
        </p>

        {/* ── SECTION 6 ─────────────────────────────────────────────── */}
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
          What is the Maternal Covenant and why does boundary_respect matter?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          The Maternal Covenant is MEOK&apos;s core alignment framework — the set of principles
          that governs how MEOK behaves, especially in sensitive contexts. It was designed to
          ensure that MEOK&apos;s intelligence never works against the interests of its user.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          One of its named dimensions is <strong style={{ color: TEXT }}>boundary_respect</strong>.
          This dimension ensures that communication preferences stated by the user are treated as
          binding across every session — not as suggestions the AI can override when it decides
          a different approach would be &ldquo;better.&rdquo; If you say you need responses under
          100 words, that is what you receive. If you ask for plain, literal language, that is
          what you get. The AI does not decide it knows better.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          For neurodivergent users, this is more significant than it might appear. Many have spent
          years in environments — educational, professional, social — where their stated needs
          were reframed, dismissed, or overridden by systems or people who believed they knew what
          the person &ldquo;really&rdquo; needed. MEOK does not do that. It honours the
          preferences you set, persistently and without exception.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            margin: '2.5rem 0',
            padding: '1.25rem 1.75rem',
            background: DARK_CARD_BG,
            borderRadius: '0 0.875rem 0.875rem 0',
          }}
        >
          <p
            style={{
              color: MUTED_MED,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              fontStyle: 'italic',
              margin: '0 0 0.75rem',
            }}
          >
            &ldquo;The boundary_respect dimension of the Maternal Covenant is not a feature. It is
            a commitment — that your AI will never decide it knows your communication needs better
            than you do.&rdquo;
          </p>
          <footer style={{ color: MUTED_LOW, fontSize: '0.8125rem', fontWeight: 600 }}>
            — Nicholas Templeman, Founder
          </footer>
        </blockquote>

        {/* ── SECTION 7 ─────────────────────────────────────────────── */}
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
          How does pattern awareness protect neurodivergent users?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Research consistently shows that neurodivergent adults — particularly those with ADHD
          and autism — are disproportionately targeted by fraud, manipulation, and coercive social
          dynamics. The cognitive profiles that create genuine strengths in focus, pattern
          recognition, and creative thinking can also create vulnerability in contexts where
          social cues signal danger in implicit ways that are harder to read.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          MEOK&apos;s pattern awareness layer monitors the broader context of your interactions
          — not just the current conversation, but patterns across time — and flags when something
          looks like it may be harmful. This includes escalating pressure in a conversation,
          requests that follow manipulation templates, or interactions that mirror known
          social-engineering patterns.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          The flag is always presented as information, never as judgment. MEOK does not tell you
          what to do. It tells you what it noticed. The decision is always yours.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '3rem' }}>
          This is what it means to have an AI that works in your interest rather than for
          engagement. It is not trying to keep you in the app. It is trying to make your life
          safer.
        </p>

        {/* ── SECTION 8 ─────────────────────────────────────────────── */}
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
          Which MEOK archetypes work best for neurodivergent users?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          MEOK&apos;s archetype system lets you choose the personality mode that fits how you need
          to work. Two archetypes are particularly well-suited to neurodivergent users:
        </p>

        {/* Archetype cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: '1rem',
              padding: '1.5rem',
            }}
          >
            <p style={{ fontSize: '1.75rem', margin: '0 0 0.5rem' }}>🏛️</p>
            <p style={{ fontWeight: 800, color: TEXT, fontSize: '1rem', margin: '0 0 0.5rem' }}>
              Scholar
            </p>
            <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
              Structured, literal, precise. Scholar delivers information without social
              noise or tonal ambiguity. Best for autistic users who need unambiguous communication,
              and for anyone who finds implicit language tiring to decode. Responses are formatted
              consistently and predictably, session to session.
            </p>
          </div>
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: '1rem',
              padding: '1.5rem',
            }}
          >
            <p style={{ fontSize: '1.75rem', margin: '0 0 0.5rem' }}>⚡</p>
            <p style={{ fontWeight: 800, color: TEXT, fontSize: '1rem', margin: '0 0 0.5rem' }}>
              Pioneer
            </p>
            <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
              High-energy, momentum-focused, action-oriented. Pioneer is designed for ADHD users
              who need to break through initiation barriers. It does not hedge or offer twelve
              options — it picks the next move and tells you to make it. Excellent for days when
              the friction of starting is the main problem.
            </p>
          </div>
        </div>

        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '3rem' }}>
          Both archetypes run on the same Sovereign Memory layer — your history, preferences, and
          context are available regardless of which mode you are in. You can switch archetypes
          at any point without losing continuity.
        </p>

        {/* ── SECTION 9 ─────────────────────────────────────────────── */}
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
          How does MEOK&apos;s non-judgment design actually work?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Non-judgment in AI is often described as a tone setting — the AI just sounds less
          judgy. MEOK&apos;s approach is structural rather than cosmetic. There are several
          mechanisms at work:
        </p>

        {/* Non-judgment list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
            marginBottom: '3rem',
          }}
        >
          {[
            {
              heading: 'No correction of communication style',
              body: 'MEOK does not re-phrase your questions, correct your grammar, or imply that your way of asking something is suboptimal. You communicate as you communicate.',
            },
            {
              heading: 'No emotional performance scoring',
              body: 'MEOK does not assign implicit scores to how you are doing based on how you phrase things. It does not treat flat affect, short responses, or blunt questions as negative signals.',
            },
            {
              heading: 'No engagement optimisation against your interests',
              body: 'MEOK does not try to keep you talking longer. It does not inject hooks designed to create emotional dependency. When you are done, it lets you leave.',
            },
            {
              heading: 'Honest responses over agreeable ones',
              body: "MEOK's sycophancy detector flags when a response would be dishonestly agreeable. For neurodivergent users who often struggle to trust their own judgement, accurate feedback — even uncomfortable feedback — is more useful than reassurance.",
            },
            {
              heading: 'Consistency across interactions',
              body: 'The AI does not gradually shift its assessment of you based on mood signals. It shows up the same way every time. What you get today is what you get next month.',
            },
          ].map(({ heading, body }) => (
            <div
              key={heading}
              style={{
                display: 'flex',
                gap: '0.875rem',
                padding: '1.125rem 1.25rem',
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: '0.875rem',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '9999px',
                  background: GOLD,
                  flexShrink: 0,
                  marginTop: '0.375rem',
                }}
              />
              <div>
                <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: '0 0 0.25rem' }}>
                  {heading}
                </p>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 10 ─────────────────────────────────────────────── */}
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
          What does MEOK cost for neurodivergent users in the UK?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          The <strong style={{ color: TEXT }}>Explorer free tier</strong> is free forever. No
          credit card. No trial period. No subscription that auto-activates if you forget to
          cancel. It includes 50 messages per day, full Sovereign Memory, access to Scholar and
          Pioneer archetypes, and the complete Comfort Settings panel.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          The decision to make the core of MEOK free was deliberate. Neurodivergent people in the
          UK are, on average, more likely to be underemployed relative to their capabilities, more
          likely to face workplace barriers, and more likely to have experienced financial
          instability because of systems that were not designed for them. A pay-first model for an
          AI built specifically to meet their needs would be counterproductive.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '3rem' }}>
          If you want more than 50 messages a day, the paid tiers are available — but the free
          tier is not a taster. It is a complete first experience of what MEOK actually does.
          Start at{' '}
          <Link href="/birth" style={{ color: GOLD, textDecoration: 'underline' }}>
            meok.ai/birth
          </Link>
          .
        </p>

        {/* ── SECTION 11 ─────────────────────────────────────────────── */}
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
          How is MEOK different from other AI tools for neurodivergent people?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          Most AI tools that claim to support neurodivergent users are general-purpose AI with a
          feature added on — a tone setting, a simplified mode, an accessibility page. The core
          architecture remains neurotypical-first.
        </p>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          MEOK was designed the other way around. The Maternal Covenant alignment framework
          existed before the product interface did. Sovereign Memory was a founding requirement,
          not a later addition. The archetype system was built because different cognitive profiles
          need different interaction modes — not because &ldquo;personalisation&rdquo; was on a
          product roadmap.
        </p>

        {/* Comparison table */}
        <div
          style={{
            overflowX: 'auto',
            borderRadius: '1rem',
            border: `1px solid ${CARD_BORDER}`,
            marginBottom: '3rem',
            marginTop: '1.5rem',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
            <thead>
              <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
                {['Feature', 'MEOK', 'ChatGPT', 'Replika', 'Woebot'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '0.875rem 1.125rem',
                      textAlign: 'left',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: GOLD,
                      borderBottom: `1px solid ${CARD_BORDER}`,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Sovereign Memory', 'Yes — user-owned', 'Partial', 'No', 'No'],
                ['Consistent personality', 'Yes', 'No', 'Partial', 'Yes'],
                ['Literal / Scholar mode', 'Yes', 'No', 'No', 'No'],
                ['Pattern awareness', 'Yes', 'No', 'No', 'No'],
                ['Boundary_respect alignment', 'Yes (Maternal Covenant)', 'No', 'No', 'No'],
                ['Comfort Settings', 'Full panel', 'None', 'Limited', 'None'],
                ['Free tier', 'Yes — no card', 'Yes (limited)', 'Freemium', 'Yes'],
              ].map(([feature, meok, chatgpt, replika, woebot], i) => (
                <tr
                  key={feature}
                  style={{
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                    borderTop: `1px solid ${CARD_BORDER}`,
                  }}
                >
                  <td
                    style={{
                      padding: '0.75rem 1.125rem',
                      fontWeight: 600,
                      color: TEXT,
                      fontSize: '0.8125rem',
                    }}
                  >
                    {feature}
                  </td>
                  <td
                    style={{
                      padding: '0.75rem 1.125rem',
                      fontSize: '0.8125rem',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: '#0d0c18',
                        background: GOLD,
                        padding: '0.125rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                      }}
                    >
                      {meok}
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem 1.125rem', color: MUTED, fontSize: '0.8125rem' }}>
                    {chatgpt}
                  </td>
                  <td style={{ padding: '0.75rem 1.125rem', color: MUTED, fontSize: '0.8125rem' }}>
                    {replika}
                  </td>
                  <td style={{ padding: '0.75rem 1.125rem', color: MUTED, fontSize: '0.8125rem' }}>
                    {woebot}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── SECTION 12 ─────────────────────────────────────────────── */}
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
          What resources exist for neurodivergent adults in the UK alongside MEOK?
        </h2>
        <p style={{ color: MUTED_MED, lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
          MEOK is not a clinical tool and does not replace professional support. For neurodivergent
          adults in the UK, two organisations provide authoritative guidance and community:
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              padding: '1.25rem',
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: '0.875rem',
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9375rem', margin: '0 0 0.375rem' }}>
              ADHD UK
            </p>
            <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
              ADHD UK is a peer-support charity run by and for people with ADHD. It publishes
              practical resources on diagnosis, workplace rights, and digital tools — and advocates
              for better recognition of adult ADHD across UK health services. Their perspective on
              what makes digital tools useful for ADHD has directly informed how MEOK thinks about
              task structure and cognitive load.
            </p>
          </div>
          <div
            style={{
              padding: '1.25rem',
              background: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: '0.875rem',
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9375rem', margin: '0 0 0.375rem' }}>
              National Autistic Society
            </p>
            <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
              The National Autistic Society is the UK&apos;s leading charity for autistic people.
              It provides guidance on workplace adjustments, digital accessibility, social support,
              and navigating statutory services. Their published research on digital tool design
              for autistic adults has shaped MEOK&apos;s approach to consistency, literal language,
              and interface predictability.
            </p>
          </div>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 900,
            fontSize: '1.5rem',
            color: TEXT,
            marginTop: '3.5rem',
            marginBottom: '1.5rem',
            lineHeight: 1.25,
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
          {[
            {
              q: 'Is MEOK good for people with ADHD?',
              a: "Yes. MEOK was built with ADHD brains in mind. Its Sovereign Memory system means your AI never loses context between sessions, removing the tax of re-explaining yourself. Hourman breaks large goals into ordered micro-steps, and the Pioneer archetype (⚡) provides high-energy momentum coaching for days when initiation is the barrier.",
            },
            {
              q: 'How does MEOK support autistic users?',
              a: "MEOK delivers consistent, predictable responses without personality drift. Its Scholar archetype (🏛️) provides structured, literal, low-ambiguity communication. MEOK applies no social judgment, requires no masking, and its Maternal Covenant boundary_respect dimension ensures your stated communication preferences are honoured every single session.",
            },
            {
              q: 'Can MEOK help with dyslexia and dyscalculia?',
              a: "Yes. MEOK can re-present complex text as bullet points, numbered steps, or simple summaries. For dyscalculia, it handles number-heavy tasks verbally and converts figures into plain-language explanations. Comfort Settings allow font size and spacing adjustments that reduce visual crowding without requiring any configuration expertise.",
            },
            {
              q: 'What is Sovereign Memory and why does it matter for neurodivergent people?',
              a: "Sovereign Memory is MEOK's persistent, user-owned memory layer. It stores everything your AI learns about you — your communication style, your routines, your triggers — and makes it available at the start of every session. For neurodivergent users with working-memory difficulties, this means your AI carries the context your brain sometimes cannot.",
            },
            {
              q: 'Does MEOK have a free plan for neurodivergent users?',
              a: "Yes. The Explorer free tier at meok.ai/birth requires no credit card. It includes 50 messages per day, full Sovereign Memory, Comfort Settings, and access to the Scholar and Pioneer archetypes. Neurodivergent users should not face a paywall to access an AI that communicates in a way that works for their brain.",
            },
            {
              q: 'What is the Maternal Covenant boundary_respect dimension?',
              a: "The Maternal Covenant is MEOK's core alignment framework. The boundary_respect dimension specifically ensures your AI never overrides, challenges, or reframes the communication preferences you have set. If you say you need literal language, it uses literal language — every time, without drift or exception.",
            },
            {
              q: 'Are there organisations that recommend AI support for neurodivergent people in the UK?',
              a: "ADHD UK and the National Autistic Society both recognise the value of adaptive digital tools for neurodivergent adults. Neither organisation endorses specific products, but both acknowledge the role of consistent, low-judgment support systems in daily functioning. MEOK is built to meet those principles at the architecture level.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                padding: '1.375rem 1.5rem',
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: '0.875rem',
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.9375rem',
                  margin: '0 0 0.5rem',
                  lineHeight: 1.4,
                }}
              >
                {q}
              </h3>
              <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* ── SHARE ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            paddingTop: '2rem',
            marginBottom: '2.5rem',
            borderTop: `1px solid ${CARD_BORDER}`,
          }}
        >
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: MUTED_LOW,
            }}
          >
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-neurodivergent&text=MEOK+for+Neurodivergent+People%3A+An+AI+That+Gets+How+Your+Brain+Works"
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
              border: `1px solid ${CARD_BORDER}`,
              color: MUTED,
              textDecoration: 'none',
            }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fmeok-for-neurodivergent"
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
              border: `1px solid ${CARD_BORDER}`,
              color: MUTED,
              textDecoration: 'none',
            }}
          >
            LinkedIn
          </a>
        </div>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            marginBottom: '4rem',
            background: 'rgba(201,168,76,0.07)',
            border: `1px solid rgba(201,168,76,0.25)`,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '16rem',
              height: '16rem',
              pointerEvents: 'none',
              opacity: 0.15,
              background: 'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.9), transparent 70%)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '0.5rem',
              }}
            >
              Explorer — Free Forever
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                color: TEXT,
                marginBottom: '0.875rem',
                lineHeight: 1.25,
              }}
            >
              An AI that gets how your brain works — no masking required.
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED,
                lineHeight: 1.7,
                marginBottom: '1.75rem',
                maxWidth: '36rem',
              }}
            >
              Scholar 🏛️, Pioneer ⚡, Hourman, Sovereign Memory, Comfort Settings, boundary_respect.
              Free to start. No credit card. Hatch your AI at{' '}
              <strong style={{ color: TEXT }}>meok.ai/birth</strong> — takes under three minutes.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
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
                  color: '#0d0c18',
                  textDecoration: 'none',
                }}
              >
                Hatch your AI free →
              </Link>
              <Link
                href="/features"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  border: `1px solid ${CARD_BORDER}`,
                  color: MUTED_MED,
                  textDecoration: 'none',
                }}
              >
                See all features
              </Link>
            </div>
          </div>
        </div>

        {/* ── MORE POSTS ─────────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: '1.125rem',
              color: TEXT,
              marginBottom: '1.25rem',
            }}
          >
            More from the blog
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
              gap: '1rem',
            }}
          >
            <Link
              href="/blog/meok-for-adhd"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: '1.375rem',
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: '1rem',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.625rem',
                  borderRadius: '9999px',
                  color: GOLD,
                  background: 'rgba(201,168,76,0.12)',
                  width: 'fit-content',
                }}
              >
                Neurodivergent
              </span>
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.875rem',
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                MEOK for ADHD: Task Breakdown, Memory, and Honest Feedback
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_LOW, margin: 0 }}>7 min read</p>
            </Link>
            <Link
              href="/blog/ai-for-autism"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: '1.375rem',
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: '1rem',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.625rem',
                  borderRadius: '9999px',
                  color: GOLD,
                  background: 'rgba(201,168,76,0.12)',
                  width: 'fit-content',
                }}
              >
                Accessibility
              </span>
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.875rem',
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                AI for Autism: How MEOK Meets Autistic Adults Where They Are
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_LOW, margin: 0 }}>6 min read</p>
            </Link>
            <Link
              href="/blog/the-maternal-covenant"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: '1.375rem',
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: '1rem',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.625rem',
                  borderRadius: '9999px',
                  color: GOLD,
                  background: 'rgba(201,168,76,0.12)',
                  width: 'fit-content',
                }}
              >
                Philosophy
              </span>
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.875rem',
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                The Maternal Covenant: Why MEOK&apos;s Core Alignment Puts You First
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_LOW, margin: 0 }}>8 min read</p>
            </Link>
          </div>
        </div>
      </article>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${CARD_BORDER}`,
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '1rem',
              color: GOLD,
              letterSpacing: '0.05em',
              margin: 0,
            }}
          >
            MEOK AI LABS
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <Link
              href="/privacy"
              style={{ fontSize: '0.8125rem', color: MUTED, textDecoration: 'none' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{ fontSize: '0.8125rem', color: MUTED, textDecoration: 'none' }}
            >
              Terms of Service
            </Link>
            <Link
              href="/birth"
              style={{ fontSize: '0.8125rem', color: GOLD, textDecoration: 'none', fontWeight: 600 }}
            >
              Get Started Free
            </Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: MUTED_LOW, margin: 0 }}>
            © 2026 MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
