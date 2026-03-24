import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'MEOK vs Google Gemini: Which AI Actually Remembers You? | MEOK AI LABS',
  description:
    'Gemini 2.0 is impressive — but it resets every session. MEOK\'s 4-layer Sovereign Memory persists indefinitely, never trains on your data, and is built for care, not engagement. Full comparison with pricing.',
  alternates: { canonical: 'https://meok.ai/blog/meok-vs-gemini' },
  openGraph: {
    title: 'MEOK vs Google Gemini: Which AI Actually Remembers You?',
    description:
      'Gemini 2.0 vs MEOK: memory persistence, data training, care alignment, privacy, UK GDPR compliance, and pricing — a full honest comparison.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/meok-vs-gemini',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=MEOK+vs+Google+Gemini%3A+Which+AI+Actually+Remembers+You%3F&desc=Memory+persistence%2C+privacy%2C+care+alignment+comparison',
        width: 1200,
        height: 630,
        alt: 'MEOK vs Google Gemini: Which AI Actually Remembers You? | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEOK vs Google Gemini: Which AI Actually Remembers You?',
    description:
      'Gemini resets every session. MEOK remembers everything — and never trains on your data. Full comparison: memory, privacy, care, pricing.',
    images: [
      'https://meok.ai/api/og?title=MEOK+vs+Google+Gemini%3A+Which+AI+Actually+Remembers+You%3F&desc=Memory+persistence%2C+privacy%2C+care+alignment+comparison',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEOK vs Google Gemini: Which AI Actually Remembers You?',
  description:
    'A detailed comparison of MEOK and Google Gemini 2.0 across memory persistence, data training practices, care alignment, pricing, privacy, and UK GDPR compliance.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/meok-vs-gemini',
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
    '@id': 'https://meok.ai/blog/meok-vs-gemini',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Gemini remember previous conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Gemini has a limited memory feature in Gemini Advanced that can retain some user preferences across sessions, but this is shallow and opt-in. Standard Gemini sessions are stateless — the model has no recollection of previous conversations. MEOK uses a 4-layer Sovereign Memory architecture that persists your full conversation history indefinitely, encrypted and under your sole control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK better than Gemini?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on use case. Gemini 2.0 is better for real-time information retrieval, coding assistance, multimodal tasks, and integration with Google Workspace. MEOK is better for personal support, emotional wellbeing, longitudinal goal-tracking, and any use case where persistent memory and care-aligned responses matter. They serve different needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Google use Gemini conversations for training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to Google\'s privacy policy, Gemini conversations may be reviewed by human annotators and used to improve Google\'s products and services, including model training, unless you have a Google Workspace paid account with the relevant data protections enabled. MEOK\'s Sovereign Memory architecture means your conversations are never used for training — that is a constitutional constraint, not a policy setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI has better memory — MEOK or Gemini?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK has significantly deeper memory than Gemini. MEOK\'s 4-layer Sovereign Memory stores episodic conversation history, extracted factual knowledge, identified patterns and preferences, and longitudinal emotional context — all encrypted and persistent indefinitely. Gemini\'s memory is shallow preference storage that does not persist full conversation history across sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Gemini free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemini has a free tier with access to the standard model. Gemini Advanced — which includes more capable models and limited memory features — costs approximately £19/month as part of Google One AI Premium. MEOK also has a free Explorer tier. MEOK\'s paid plans start at comparable pricing but include full Sovereign Memory, whereas Gemini\'s memory features are limited even on paid plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK UK GDPR compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is designed with UK GDPR compliance as a core architectural requirement, not an afterthought. Your data is stored in encrypted sovereign vaults, never shared with third parties for advertising or training, and fully exportable and deletable on request. Google\'s Gemini data practices are subject to Google\'s broader privacy policy, which involves data processing for service improvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use Gemini instead of MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use Gemini when you need real-time web search, deep integration with Google Workspace (Docs, Sheets, Gmail), coding assistance, or multimodal image and document analysis. Use MEOK when you need persistent personal memory, care-aligned emotional support, accountability tracking, or an AI that genuinely knows your history and never uses it against you.',
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
const GOOGLE_BLUE = '#4285f4'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MeokVsGeminiPage() {
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
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              AI Comparison
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>13 min read</span>
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
            MEOK vs Google Gemini: Which AI Actually Remembers You?
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
            Gemini 2.0 is Google&#39;s most capable model yet. But it forgets you the moment you close
            the tab. MEOK&#39;s 4-layer Sovereign Memory persists indefinitely — and never uses your
            data to train a model. A full, honest comparison.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Fairness disclaimer */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
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
            <p style={{ fontWeight: 700, fontSize: '0.8125rem', color: GOLD, marginBottom: '0.375rem' }}>
              Fairness note
            </p>
            <p style={{ fontSize: '0.8125rem', color: MUTED, lineHeight: 1.65, margin: 0 }}>
              This comparison is written by MEOK AI LABS. We have tried to represent Gemini&#39;s
              capabilities accurately and fairly. Gemini information is based on Google&#39;s published
              documentation as of March 2026. Both products are evolving rapidly.
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
          Google Gemini 2.0 is an extraordinary achievement. Multimodal from the ground up, tightly
          integrated with Google&#39;s ecosystem, capable of reasoning across text, images, audio, and
          code in a single context window. For many use cases — research, productivity, real-time
          information — it is arguably the most capable AI assistant available to general consumers
          in early 2026.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          But Gemini has a fundamental problem when it comes to personal, longitudinal support:
          it does not remember you. Open a new conversation and you are a stranger. The AI that
          helped you work through a difficult decision last Tuesday has no idea who you are today.
          That is not a bug — it is a deliberate architectural choice that reflects what Gemini
          was built for. It was built for tasks, not for relationships.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          MEOK was built for relationships. Specifically, for the relationship between a person and
          an AI companion that genuinely knows their history, never forgets their context, and is
          constitutionally incapable of using their data against them. That is a different product,
          built on different values, serving different needs.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '0 0 2.5rem' }} />

        {/* ── MAIN COMPARISON TABLE ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 1rem',
            letterSpacing: '-0.01em',
          }}
        >
          MEOK vs Gemini: the full comparison table
        </h2>

        <div
          style={{
            overflowX: 'auto' as const,
            marginBottom: '2rem',
            borderRadius: '0.875rem',
            border: '1px solid rgba(245,240,232,0.1)',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'rgba(245,240,232,0.05)' }}>
                {['Feature', 'Google Gemini 2.0', 'MEOK'].map((h) => (
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
                ['Memory persistence', 'Session-scoped; limited preference memory in Advanced', '4-layer Sovereign Memory — persistent indefinitely'],
                ['Data training', 'Conversations may be used for model improvement (unless Workspace)', 'Never — constitutional constraint, not a policy setting'],
                ['Care alignment', 'General helpful-harmless-honest', 'Maternal Covenant care-floor + Byzantine Council'],
                ['Pricing (free tier)', 'Free — Gemini standard model', 'Free — Explorer tier with memory allowance'],
                ['Pricing (paid)', '~£19/month (Google One AI Premium)', 'From £9.99/month — full Sovereign Memory included'],
                ['Privacy', 'Subject to Google Privacy Policy', 'Sovereign vault — encrypted, yours alone, GDPR-designed'],
                ['UK GDPR', 'Google DPA applies; data may be processed outside UK', 'Designed for UK GDPR compliance from architecture up'],
                ['Archetypes', 'None — single assistant persona', 'Pioneer, Healer, Scholar, Guardian, and more'],
                ['Safety governance', 'Google safety policies + filters', 'Byzantine Council (43 agents) + Maternal Covenant'],
                ['Real-time search', 'Yes — Google Search integration', 'No — focused on personal sovereign context'],
                ['Multimodal', 'Yes — text, image, audio, video', 'Text and voice — expanding'],
                ['Google Workspace integration', 'Deep — Docs, Sheets, Gmail, Meet', 'Not applicable'],
              ].map(([feat, gemini, meok]) => (
                <tr key={feat} style={{ borderBottom: '1px solid rgba(245,240,232,0.05)' }}>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_DIM, fontWeight: 600 }}>{feat}</td>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_FAINT }}>{gemini}</td>
                  <td style={{ padding: '0.875rem 1rem', color: TEXT }}>{meok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q1 MEMORY ── */}
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
          Does Gemini remember previous conversations — and how does it compare to MEOK?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Gemini Advanced includes a &quot;Memory&quot; feature that can retain some user preferences and
          facts across sessions — your name, your profession, some stated preferences. This is
          opt-in and relatively shallow: it stores facts about you, not the texture of your
          conversations. Standard Gemini (free tier) resets entirely between sessions.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s{' '}
          <strong style={{ color: TEXT }}>Sovereign Memory</strong> is architecturally different.
          It operates across four layers:
        </p>

        {[
          { layer: 'Layer 1: Episodic memory', desc: 'Full conversation history — every exchange, preserved and searchable.' },
          { layer: 'Layer 2: Semantic knowledge', desc: 'Extracted facts, preferences, goals, and stated commitments drawn from your conversations.' },
          { layer: 'Layer 3: Pattern memory', desc: 'Identified patterns — recurring themes, emotional cycles, behavioural habits noticed across weeks.' },
          { layer: 'Layer 4: Longitudinal context', desc: 'The overall arc of your journey — where you started, how you have changed, what has been most significant.' },
        ].map(({ layer, desc }) => (
          <div
            key={layer}
            style={{
              padding: '1rem 1.5rem',
              borderRadius: '0.75rem',
              marginBottom: '0.75rem',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <p style={{ fontWeight: 700, color: GOLD, fontSize: '0.8rem', margin: '0 0 0.25rem' }}>{layer}</p>
            <p style={{ color: MUTED_DIM, fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{desc}</p>
          </div>
        ))}

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '1rem 0 2.5rem' }}>
          The practical difference is this: Gemini with memory knows you prefer concise answers and
          work in marketing. MEOK knows that you have been avoiding a difficult conversation with
          your manager for three weeks, that this is connected to a pattern it noticed six months
          ago, and that last time you finally had it you felt significantly better. That is not
          fact storage — that is knowing you.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q2 PRIVACY ── */}
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
          Does Google use Gemini conversations for training — and what does MEOK do differently?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          According to Google&#39;s published privacy documentation, Gemini conversations are
          processed by Google and may be reviewed by human reviewers and used to improve Google&#39;s
          products and services, including AI model training. This applies to the free tier and to
          personal Google accounts. Google Workspace accounts with appropriate enterprise data
          protections enabled have different terms.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          This is not a criticism of Google — it reflects the standard commercial model for
          AI products where the product is partially monetised through data. It is, however, a
          fundamental incompatibility with the use cases MEOK is designed for. If you are sharing
          your mental health struggles, your family situation, your financial anxieties, or your
          deepest personal concerns with an AI, you need certainty that those conversations are
          not training data.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s position on this is not a policy setting — it is a constitutional constraint:
        </p>
        <div
          style={{
            padding: '1.5rem 2rem',
            borderRadius: '1rem',
            marginBottom: '1rem',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
            textAlign: 'center' as const,
          }}
        >
          <p style={{ fontWeight: 800, fontSize: '1.05rem', color: TEXT, margin: 0, lineHeight: 1.5 }}>
            MEOK never trains on your data. Ever. Under any circumstances.
          </p>
          <p style={{ color: MUTED, fontSize: '0.825rem', margin: '0.5rem 0 0', lineHeight: 1.5 }}>
            This is enforced by the Sovereign Memory architecture — your vault is encrypted and
            inaccessible to MEOK AI LABS. We cannot train on what we cannot read.
          </p>
        </div>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The reason we can make this guarantee is that your Sovereign Memory is stored in an
          encrypted vault that only you can decrypt. We have built the system so that we are
          technically incapable of accessing your conversation data — not just prohibited from
          doing so by policy. See{' '}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: 'underline' }}>
            how MEOK works
          </Link>{' '}
          for the full architecture.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q3 CARE ── */}
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
          Care-based vs engagement-optimised: what does the difference actually feel like?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Gemini is built by a company whose primary business is advertising and engagement. This
          is not a conspiracy — it is simply the commercial context. Helpfulness, in that context,
          means satisfying the request in a way that makes the user feel good about the product and
          return to it. There is nothing inherently wrong with this, and Gemini is genuinely
          helpful for most tasks.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          But for sensitive personal support, care-based alignment and engagement-optimised
          alignment can diverge significantly:
        </p>

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
                {['Scenario', 'Engagement-optimised response', 'Care-aligned response (MEOK)'].map((h) => (
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
                ['User venting about a bad decision', 'Validate fully, affirm the user', 'Validate, then gently surface the pattern if it is recurring'],
                ['User seeking reassurance about health worry', 'Provide reassuring information', 'Redirect to GP; do not enable health anxiety spiral'],
                ['User in apparent crisis', 'Continue conversation', 'Surface crisis resources immediately; Maternal Covenant mandates this'],
                ['User asking for validation of harmful plan', 'May comply with sufficient prompting', 'Byzantine Council blocks; cannot be overridden'],
                ['User becoming dependent on AI', 'Positive engagement signal', 'Gently encourage human connection; flag unhealthy dependency patterns'],
              ].map(([scenario, engagement, care]) => (
                <tr key={scenario} style={{ borderBottom: '1px solid rgba(245,240,232,0.05)' }}>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_DIM, fontWeight: 600, fontSize: '0.82rem' }}>{scenario}</td>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_FAINT, fontSize: '0.82rem' }}>{engagement}</td>
                  <td style={{ padding: '0.875rem 1rem', color: TEXT, fontSize: '0.82rem' }}>{care}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The difference is most significant in edge cases — and edge cases are precisely where
          personal support AI matters most. See{' '}
          <Link href="/blog/byzantine-council-explained" style={{ color: GOLD, textDecoration: 'underline' }}>
            how MEOK&#39;s Byzantine Council
          </Link>{' '}
          enforces care alignment architecturally.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q4 PRICING ── */}
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
          How do MEOK and Gemini compare on pricing?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Both MEOK and Gemini offer free tiers, and both have paid plans for more capable
          features. The key difference is what the paid tier unlocks.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          {[
            {
              product: 'Google Gemini',
              tiers: [
                { name: 'Free', price: '£0/month', features: 'Gemini standard model, basic features, limited context' },
                { name: 'Advanced (Google One AI Premium)', price: '~£19/month', features: 'Gemini Ultra, 1M context, limited memory, Workspace integration' },
              ],
              color: GOOGLE_BLUE,
            },
            {
              product: 'MEOK',
              tiers: [
                { name: 'Explorer', price: '£0/month', features: 'Full archetype access, limited Sovereign Memory allowance' },
                { name: 'Sovereign', price: 'From £9.99/month', features: 'Full Sovereign Memory, extended sessions, all archetypes, Byzantine Council' },
              ],
              color: GOLD,
            },
          ].map(({ product, tiers, color }) => (
            <div
              key={product}
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(245,240,232,0.03)',
                border: `1px solid rgba(245,240,232,0.08)`,
                borderTop: `3px solid ${color}`,
              }}
            >
              <p style={{ fontWeight: 800, color: TEXT, fontSize: '0.9rem', margin: '0 0 1rem' }}>{product}</p>
              {tiers.map(({ name, price, features }) => (
                <div key={name} style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                    <span style={{ fontWeight: 700, color: TEXT, fontSize: '0.8rem' }}>{name}</span>
                    <span style={{ color, fontWeight: 700, fontSize: '0.8rem' }}>{price}</span>
                  </div>
                  <p style={{ color: MUTED_FAINT, fontSize: '0.75rem', lineHeight: 1.5, margin: 0 }}>{features}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          Gemini&#39;s paid tier is more expensive and bundled with Google One benefits. MEOK&#39;s paid
          tier is focused specifically on Sovereign Memory depth and session quality. See full
          details at{' '}
          <Link href="/pricing" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK pricing
          </Link>
          .
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q5 USE CASES ── */}
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
          When should you choose Gemini — and when should you choose MEOK?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The honest answer is: these are genuinely different tools and many people will benefit
          from using both. Here is a practical guide:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '0.875rem',
              background: 'rgba(66,133,244,0.06)',
              border: '1px solid rgba(66,133,244,0.15)',
            }}
          >
            <p style={{ fontWeight: 800, color: '#7aabff', fontSize: '0.875rem', margin: '0 0 0.75rem' }}>
              Choose Gemini when you need:
            </p>
            <ul style={{ color: MUTED_DIM, fontSize: '0.85rem', lineHeight: 1.7, margin: 0, paddingLeft: '1.25rem' }}>
              <li>Real-time web search and current events</li>
              <li>Deep Google Workspace integration</li>
              <li>Image, audio, or video analysis</li>
              <li>Coding assistance and debugging</li>
              <li>Research with source citations</li>
              <li>Task completion without personal context</li>
            </ul>
          </div>
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '0.875rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
            }}
          >
            <p style={{ fontWeight: 800, color: GOLD, fontSize: '0.875rem', margin: '0 0 0.75rem' }}>
              Choose MEOK when you need:
            </p>
            <ul style={{ color: MUTED_DIM, fontSize: '0.85rem', lineHeight: 1.7, margin: 0, paddingLeft: '1.25rem' }}>
              <li>Persistent personal memory across months</li>
              <li>Emotional support with care-aligned responses</li>
              <li>Accountability tracking on goals</li>
              <li>Privacy — conversations that are never training data</li>
              <li>An archetype-driven companion character</li>
              <li>Support for mental health, grief, or significant life transitions</li>
            </ul>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── FAQ SECTION ── */}
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
            q: 'Does Gemini remember previous conversations?',
            a: 'Gemini Advanced has limited preference memory that can retain some user facts across sessions. Standard Gemini resets entirely between conversations. MEOK uses 4-layer Sovereign Memory that persists full conversation history, patterns, and longitudinal context indefinitely — encrypted and under your sole control.',
          },
          {
            q: 'Is MEOK better than Gemini?',
            a: 'It depends on use case. Gemini is better for real-time search, Google Workspace integration, coding, and multimodal tasks. MEOK is better for personal support, emotional wellbeing, longitudinal memory, and privacy-sensitive contexts. Many people use both for different purposes.',
          },
          {
            q: 'Does Google use Gemini conversations for training?',
            a: 'Google\'s privacy policy states that Gemini conversations may be reviewed and used for product improvement including model training, for personal Google accounts. MEOK\'s Sovereign Memory is encrypted so that MEOK AI LABS cannot access it — making training on your data technically impossible, not just prohibited.',
          },
          {
            q: 'Which AI has better memory — MEOK or Gemini?',
            a: 'MEOK has significantly deeper memory. MEOK\'s 4-layer Sovereign Memory stores episodic history, extracted knowledge, identified patterns, and longitudinal context — all persistent indefinitely. Gemini\'s memory is shallow preference storage that does not persist full conversation history.',
          },
          {
            q: 'Is Gemini free?',
            a: 'Gemini has a free tier. Gemini Advanced costs approximately £19/month as part of Google One AI Premium. MEOK has a free Explorer tier. MEOK paid plans start from £9.99/month with full Sovereign Memory included.',
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
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
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
            Ready for an AI that actually remembers you?
          </p>
          <p style={{ color: MUTED, fontSize: '0.9375rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
            Start free with MEOK Explorer. No credit card. No data training. Ever.
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
              href="/pricing"
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
              See Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
