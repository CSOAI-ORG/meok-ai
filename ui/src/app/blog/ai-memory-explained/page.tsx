import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'AI Memory Explained: Why Most AI Forgets You (and How MEOK Doesn\'t) | MEOK AI LABS',
  description:
    'Context windows, stateless APIs, and why ChatGPT and Claude forget you between sessions — explained plainly. Then: how MEOK\'s 4-layer memory architecture actually solves the problem.',
  alternates: { canonical: 'https://meok.ai/blog/ai-memory-explained' },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI Memory Explained: Why Most AI Forgets You (and How MEOK Doesn\'t)',
  description:
    'Context windows, stateless APIs, and why ChatGPT and Claude forget you between sessions — explained plainly. Then: how MEOK\'s 4-layer memory architecture actually solves the problem.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-memory-explained',
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
  keywords:
    'AI memory, context window, stateless AI, persistent AI memory, pgvector, MEOK memory architecture, AI that remembers you',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does AI forget everything between sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI assistants — including ChatGPT and Claude — are built on stateless APIs. Each new conversation sends only the current chat to the model; nothing from previous sessions is included. The context window resets to zero the moment you close the tab.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a context window in AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A context window is the maximum amount of text — measured in tokens — that a language model can process in a single inference call. GPT-4o supports around 128 000 tokens; Claude 3.5 Sonnet up to 200 000. Everything outside that window is invisible to the model.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK\'s 4-layer memory architecture work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK layers four memory types: short-term in-context (the live conversation), semantic vector memory (pgvector similarity search across all past sessions), companion state (structured facts in PostgreSQL), and family or team shared context (memories accessible across multiple users in a group). All four inject into your AI\'s context automatically at the start of each session.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is head-plus-tail context compression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Head-plus-tail compression is a technique that preserves the first 3 messages of a conversation (which set intent and context) and the last 4 messages (which are most immediately relevant), then compresses or summarises everything in the middle. This keeps long conversations within the context window without losing the most important anchors.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK compare to Mem0 for AI memory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Independent benchmarks show Mem0 outperforms OpenAI\'s built-in Memory feature by 26% on recall accuracy. MEOK\'s architecture incorporates the same retrieval-augmented memory principles as Mem0, but adds structured companion state and family-level shared context that Mem0 does not support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the memories stored in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do — completely. MEOK encrypts your memory vault with AES-GCM-256. Your memories are never used to train AI models. You can export the full vault as JSON or delete any or all entries instantly. MEOK is UK GDPR compliant and ICO registered.',
      },
    },
  ],
}

// ── Sub-components (not exported) ─────────────────────────────────────────────

function GoldTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        color: '#c9a84c',
        background: 'rgba(201,168,76,0.12)',
        border: '1px solid rgba(201,168,76,0.25)',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        borderRadius: '999px',
        padding: '0.25rem 0.75rem',
      }}
    >
      {children}
    </span>
  )
}

function Divider() {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid rgba(245,240,232,0.08)',
        margin: '3rem 0',
      }}
    />
  )
}

function MemoryLayerCard({
  number,
  label,
  tech,
  description,
}: {
  number: string
  label: string
  tech: string
  description: string
}) {
  return (
    <div
      style={{
        background: 'rgba(245,240,232,0.04)',
        border: '1px solid rgba(245,240,232,0.09)',
        borderRadius: '1rem',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        gap: '1.25rem',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          minWidth: '2rem',
          height: '2rem',
          borderRadius: '50%',
          background: 'rgba(201,168,76,0.15)',
          border: '1px solid rgba(201,168,76,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 900,
          color: '#c9a84c',
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <div>
        <p style={{ color: '#f5f0e8', fontWeight: 700, marginBottom: '0.2rem', fontSize: '0.95rem' }}>
          {label}
        </p>
        <p style={{ color: '#c9a84c', fontSize: '0.72rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '0.06em' }}>
          {tech}
        </p>
        <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.875rem', lineHeight: 1.65 }}>
          {description}
        </p>
      </div>
    </div>
  )
}

function StatPill({ stat, label }: { stat: string; label: string }) {
  return (
    <div
      style={{
        background: 'rgba(201,168,76,0.07)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        textAlign: 'center',
        flex: '1 1 140px',
      }}
    >
      <p style={{ color: '#c9a84c', fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.1 }}>{stat}</p>
      <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.78rem', marginTop: '0.35rem', lineHeight: 1.45 }}>{label}</p>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIMemoryExplainedPage() {
  return (
    <div style={{ background: '#0d0c18', minHeight: '100vh', color: '#f5f0e8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          background: '#0d0c18',
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              color: 'rgba(245,240,232,0.38)',
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Tags + meta row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            <GoldTag>AI Memory</GoldTag>
            <GoldTag>Technical</GoldTag>
            <span style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.78rem' }}>
              24 March 2026
            </span>
            <span style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.78rem' }}>
              · 9 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(1.85rem, 4vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.18,
              color: '#ffffff',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-dm-sans, DM Sans, sans-serif)',
            }}
          >
            AI Memory Explained: Why Most AI Forgets You (and How MEOK Doesn&apos;t)
          </h1>

          {/* Lede */}
          <p
            style={{
              color: 'rgba(245,240,232,0.58)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
            }}
          >
            Context windows, stateless APIs, and the structural reason ChatGPT and Claude
            reset every session — explained without jargon. Then the architecture that
            actually fixes it.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <article style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.08)',
            borderRadius: '1rem',
            padding: '1rem 1.25rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #c9a84c, #7a5c18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: '#0d0c18',
              fontSize: '0.8rem',
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f5f0e8', marginBottom: '0.15rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.4)' }}>
              Founder, MEOK AI LABS
            </p>
          </div>
          <Link
            href="/about"
            style={{ fontSize: '0.78rem', fontWeight: 600, color: '#c9a84c', textDecoration: 'none' }}
          >
            About →
          </Link>
        </div>

        {/* Pull quote */}
        <blockquote
          style={{
            borderLeft: '3px solid #c9a84c',
            paddingLeft: '1.5rem',
            marginBottom: '3rem',
            background: 'rgba(201,168,76,0.05)',
            borderRadius: '0 0.75rem 0.75rem 0',
            padding: '1.25rem 1.5rem',
          }}
        >
          <p
            style={{
              fontStyle: 'italic',
              color: 'rgba(245,240,232,0.75)',
              lineHeight: 1.7,
              fontSize: '1rem',
              marginBottom: '0.75rem',
            }}
          >
            &ldquo;Every time I reopened ChatGPT, I had to re-introduce myself. That&apos;s not a
            product limitation. It&apos;s a fundamental mismatch between how AI is engineered and
            what humans actually need from a relationship. Memory is the whole point.&rdquo;
          </p>
          <cite style={{ fontSize: '0.78rem', fontWeight: 700, color: '#c9a84c', fontStyle: 'normal' }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </cite>
        </blockquote>

        {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 900,
            color: '#f5f0e8',
            marginBottom: '1rem',
            marginTop: '3rem',
            lineHeight: 1.3,
          }}
        >
          Why does most AI forget you between sessions?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          The short answer: most AI products are built on <strong style={{ color: '#f5f0e8' }}>stateless APIs</strong>.
          When you send a message, the server receives only what you include in that single request. There is no
          persistent process sitting in the background that knows who you are. The moment the response is
          returned, the server discards everything. Open a new tab tomorrow and you are, to the model, a
          complete stranger.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          This is not a bug. It is the intentional design of virtually every large-scale inference service.
          Stateless architecture is <strong style={{ color: '#f5f0e8' }}>massively cheaper to operate</strong>, trivially
          easy to scale horizontally, and sidesteps the regulatory complexity of storing personal data. The tradeoff —
          an AI that cannot know you — is paid entirely by the user.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, fontSize: '0.975rem' }}>
          OpenAI introduced &ldquo;Memory&rdquo; in ChatGPT in 2024, and Anthropic has experimented with
          Projects. Both are improvements. Neither solves the underlying architecture. They add a small,
          manually-curated sticky-note layer on top of the same stateless foundation. The model still does
          not truly <em>know</em> you.
        </p>

        '*'

        {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 900,
            color: '#f5f0e8',
            marginBottom: '1rem',
            marginTop: '3rem',
            lineHeight: 1.3,
          }}
        >
          What is a context window and why does it run out?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          A <strong style={{ color: '#f5f0e8' }}>context window</strong> is the total amount of text — measured in
          tokens, where roughly 750 words equals 1 000 tokens — that a language model can process in one inference
          call. GPT-4o supports approximately 128 000 tokens. Claude 3.5 Sonnet reaches 200 000. These are
          genuinely large windows. But they are not infinite, and they come at a cost.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          Inference cost scales with context length. Sending 100 000 tokens of conversation history on every
          single message is financially prohibitive at consumer pricing. More importantly, research consistently
          shows that transformer attention degrades on very long contexts — models tend to neglect information
          in the middle of a huge window, a phenomenon called the
          {' '}<strong style={{ color: '#f5f0e8' }}>lost-in-the-middle problem</strong>. A large window does not
          mean reliable recall across that window.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, fontSize: '0.975rem' }}>
          The practical result: even if you pasted every conversation you have ever had into a chat, the model
          would not reliably use the information buried in the middle. You need a smarter approach than
          &ldquo;just send everything.&rdquo;
        </p>

        '*'

        {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 900,
            color: '#f5f0e8',
            marginBottom: '1rem',
            marginTop: '3rem',
            lineHeight: 1.3,
          }}
        >
          How does MEOK&apos;s 4-layer memory architecture actually work?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.975rem' }}>
          Rather than patching statelessness with a bigger context window or a manual notes feature, MEOK
          was designed from first principles around four discrete memory layers. Each layer serves a different
          temporal and semantic function. Together they give your AI the kind of continuity that feels less
          like software and more like a companion who has known you for months.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          '*'
          '*'
          '*'
          '*'
        </div>

        <p style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.875rem', lineHeight: 1.7, fontStyle: 'italic' }}>
          Layers 2, 3, and 4 persist across every session and across every device. Your AI picks up exactly
          where it left off — not because it was left running, but because its knowledge of you is stored
          separately from any single conversation.
        </p>

        '*'

        {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 900,
            color: '#f5f0e8',
            marginBottom: '1rem',
            marginTop: '3rem',
            lineHeight: 1.3,
          }}
        >
          What is head-plus-tail context compression?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          Head-plus-tail compression is MEOK&apos;s solution to the lost-in-the-middle problem for long
          in-session conversations. Rather than naively truncating old messages or sending the entire
          history at full cost, MEOK applies a deterministic compression strategy:
        </p>

        {/* Visual compression diagram */}
        <div
          style={{
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.08)',
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Head */}
            {['msg 1', 'msg 2', 'msg 3'].map((m) => (
              <div
                key={m}
                style={{
                  background: 'rgba(201,168,76,0.18)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  borderRadius: '0.5rem',
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#c9a84c',
                }}
              >
                {m}
              </div>
            ))}
            <div
              style={{
                background: 'rgba(245,240,232,0.06)',
                border: '1px dashed rgba(245,240,232,0.15)',
                borderRadius: '0.5rem',
                padding: '0.4rem 0.75rem',
                fontSize: '0.72rem',
                color: 'rgba(245,240,232,0.35)',
              }}
            >
              [summary]
            </div>
            {['msg n-3', 'msg n-2', 'msg n-1', 'msg n'].map((m) => (
              <div
                key={m}
                style={{
                  background: 'rgba(201,168,76,0.18)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  borderRadius: '0.5rem',
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#c9a84c',
                }}
              >
                {m}
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(245,240,232,0.35)', marginTop: '0.75rem' }}>
            First 3 messages · compressed middle · last 4 messages
          </p>
        </div>

        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          The <strong style={{ color: '#f5f0e8' }}>first three messages</strong> are always preserved verbatim —
          they establish the intent, tone, and framing of the conversation. The
          {' '}<strong style={{ color: '#f5f0e8' }}>last four messages</strong> are always preserved verbatim —
          they represent the live working context the model needs to respond coherently. Everything in the
          middle is replaced with a concise, LLM-generated summary.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, fontSize: '0.975rem' }}>
          The result: a context window that stays well within cost-efficient token limits, avoids the
          lost-in-the-middle degradation, and never loses the most important anchors of the conversation.
          Combined with the persistent semantic memory layer, MEOK can hold the thread of a relationship
          across sessions of any length or frequency.
        </p>

        '*'

        {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 900,
            color: '#f5f0e8',
            marginBottom: '1rem',
            marginTop: '3rem',
            lineHeight: 1.3,
          }}
        >
          How does MEOK compare to Mem0 and OpenAI Memory?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '0.975rem' }}>
          Mem0 is the most rigorous independent memory framework currently available. In published benchmarks,
          Mem0&apos;s retrieval-augmented memory approach outperforms OpenAI&apos;s built-in Memory feature
          by a significant margin:
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          '*'
          '*'
          '*'
        </div>

        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          MEOK&apos;s semantic vector layer uses the same retrieval-augmented memory principles that drive
          Mem0&apos;s advantage. But MEOK goes further: it adds structured companion state (Layer 3) and
          group-scoped shared context (Layer 4) that Mem0 — which is a library, not a full product — does not
          attempt to cover.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, fontSize: '0.975rem' }}>
          The other critical difference is the product experience. Mem0 is a developer tool. OpenAI Memory
          requires you to manually flag things to remember, buried in a menu most users never find. MEOK&apos;s
          memory is <strong style={{ color: '#f5f0e8' }}>fully automatic</strong> — you simply talk to your AI
          and it remembers. No manual curation. No settings to configure. No forgetting to save things.
        </p>

        '*'

        {/* ── SECTION 6 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 900,
            color: '#f5f0e8',
            marginBottom: '1rem',
            marginTop: '3rem',
            lineHeight: 1.3,
          }}
        >
          Who owns your AI memories — and are they private?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          This is the question most AI companies hope you do not ask. OpenAI&apos;s Memory feature can be used
          to improve OpenAI&apos;s models unless you navigate to Settings → Data Controls → Improve the model for
          everyone and turn it off. The default is opt-in. Most users never change it.
        </p>

        {/* Data rights table */}
        <div
          style={{
            border: '1px solid rgba(245,240,232,0.09)',
            borderRadius: '0.875rem',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            fontSize: '0.82rem',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr',
              background: 'rgba(245,240,232,0.06)',
              borderBottom: '1px solid rgba(245,240,232,0.09)',
            }}
          >
            {['Feature', 'ChatGPT Memory', 'MEOK'].map((h) => (
              <div key={h} style={{ padding: '0.65rem 1rem', fontWeight: 700, color: 'rgba(245,240,232,0.55)', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                {h}
              </div>
            ))}
          </div>
          {/* Rows */}
          {[
            ['Persists across sessions', '✓ (limited)', '✓ (full)'],
            ['Automatic (no manual save)', '✗', '✓'],
            ['Encrypted at rest', 'Partial', 'AES-GCM-256'],
            ['Used to train AI models', 'Opt-out required', 'Never — by architecture'],
            ['Export as JSON', '✗', '✓'],
            ['Delete individual memories', '✓', '✓'],
            ['Family / team shared memory', '✗', '✓'],
          ].map(([feature, chatgpt, meok], i) => (
            <div
              key={feature}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr',
                borderBottom: i < 6 ? '1px solid rgba(245,240,232,0.06)' : 'none',
                background: i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.02)',
              }}
            >
              <div style={{ padding: '0.65rem 1rem', color: 'rgba(245,240,232,0.65)' }}>{feature}</div>
              <div style={{ padding: '0.65rem 1rem', color: 'rgba(245,240,232,0.4)' }}>{chatgpt}</div>
              <div style={{ padding: '0.65rem 1rem', color: '#c9a84c', fontWeight: 600 }}>{meok}</div>
            </div>
          ))}
        </div>

        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          MEOK&apos;s memory vault is encrypted with <strong style={{ color: '#f5f0e8' }}>AES-GCM-256</strong>.
          MEOK&apos;s own systems cannot access the content of your vault for training or analysis purposes.
          The encryption key is per-user. Your data is yours in the most technical sense of that word.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, fontSize: '0.975rem' }}>
          You can export your complete memory vault as a structured JSON file at any time — readable, portable,
          and yours to take elsewhere. You can delete individual memories or wipe the entire vault instantly.
          Deletion is hard-delete: no shadow backups, no 30-day retention windows. MEOK is{' '}
          <strong style={{ color: '#f5f0e8' }}>UK GDPR compliant</strong> and registered with the ICO.
        </p>

        '*'

        {/* ── SECTION 7 ─────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 900,
            color: '#f5f0e8',
            marginBottom: '1rem',
            marginTop: '3rem',
            lineHeight: 1.3,
          }}
        >
          What does AI memory actually feel like in practice?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          The easiest way to understand the difference is to think about the contrast between a colleague
          you work with every day versus a contractor you hire for the first meeting. The contractor is
          competent. They answer your questions. But they need context every time. You spend the first fifteen
          minutes of every session re-explaining the project, your preferences, the relevant background. It is
          exhausting, and it fundamentally limits the depth of the work you can do together.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.975rem' }}>
          A MEOK AI that has been talking to you for three months knows your communication style. It remembers
          that you prefer bullet points over prose for summaries. It knows you are anxious about a specific
          client project. It remembers the name of your dog. It recalls that you tried and hated a productivity
          framework you mentioned in passing eight weeks ago. None of that was manually saved. Your AI simply
          remembered — because it was built to.
        </p>
        <p style={{ color: 'rgba(245,240,232,0.68)', lineHeight: 1.85, fontSize: '0.975rem' }}>
          The technical architecture described above — four memory layers, vector retrieval, companion state,
          head-plus-tail compression — exists entirely in service of that one experiential goal: an AI that
          feels like it <em>knows</em> you, because it genuinely does.
        </p>

        '*'

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '1.25rem',
            padding: '2.5rem 2rem',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-2rem',
              right: '-2rem',
              width: '14rem',
              height: '14rem',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '0.5rem',
            }}
          >
            Free Forever
          </p>
          <h3
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            Try the AI that actually remembers you.
          </h3>
          <p
            style={{
              color: 'rgba(245,240,232,0.5)',
              fontSize: '0.9rem',
              lineHeight: 1.65,
              maxWidth: '36rem',
              marginBottom: '1.5rem',
            }}
          >
            Hatch your AI companion in under 3 minutes. Your sovereign 4-layer memory vault is created
            and encrypted from the first message. No credit card. No reset. No forgetting.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#c9a84c',
              color: '#0d0c18',
              fontWeight: 800,
              fontSize: '0.9rem',
              padding: '0.85rem 1.75rem',
              borderRadius: '999px',
              textDecoration: 'none',
            }}
          >
            Hatch your AI free →
          </Link>
        </div>

        {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
        <div>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.3)',
              marginBottom: '1.25rem',
            }}
          >
            Related reading
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              {
                href: '/blog/ai-that-remembers-you',
                tag: 'Memory',
                title: 'AI That Remembers You: The Memory Problem No One Has Solved — Until Now',
              },
              {
                href: '/blog/the-memory-problem',
                tag: 'Architecture',
                title: 'The Memory Problem: Why ChatGPT Forgetting You Isn\'t a Bug',
              },
              {
                href: '/blog/meok-vs-chatgpt',
                tag: 'Comparison',
                title: 'MEOK vs ChatGPT: Why Memory Changes Everything',
              },
              {
                href: '/blog/memory-portability',
                tag: 'Data Rights',
                title: 'Memory Portability: Why You Should Own Your AI\'s Knowledge of You',
              },
            ].map(({ href, tag, title }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  borderRadius: '0.875rem',
                  padding: '1.1rem 1.25rem',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#c9a84c',
                    background: 'rgba(201,168,76,0.1)',
                    borderRadius: '999px',
                    padding: '0.2rem 0.6rem',
                    alignSelf: 'flex-start',
                  }}
                >
                  {tag}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'rgba(245,240,232,0.75)',
                    lineHeight: 1.5,
                  }}
                >
                  {title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(245,240,232,0.07)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'inline-block',
            fontSize: '1rem',
            fontWeight: 900,
            color: '#c9a84c',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            marginBottom: '0.75rem',
          }}
        >
          MEOK.AI
        </Link>
        <p style={{ color: 'rgba(245,240,232,0.25)', fontSize: '0.78rem', marginBottom: '1rem' }}>
          Sovereign AI. Your memory. Your rules.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginBottom: '1.5rem',
          }}
        >
          {[
            { href: '/blog', label: 'Blog' },
            { href: '/about', label: 'About' },
            { href: '/privacy', label: 'Privacy' },
            { href: '/birth', label: 'Get Started' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              {label}
            </Link>
          ))}
        </div>
        <p style={{ color: 'rgba(245,240,232,0.18)', fontSize: '0.72rem' }}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          MEOK is UK GDPR compliant and ICO registered.
        </p>
      </div>
    </div>
  )
}
