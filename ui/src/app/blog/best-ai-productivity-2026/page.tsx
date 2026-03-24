import type { Metadata } from 'next';
import Link from 'next/link';

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Best AI Productivity Tools in 2026: ChatGPT vs Notion AI vs MEOK — Full Comparison | MEOK AI LABS',
  description:
    'A no-fluff comparison of the best AI productivity tools in 2026. ChatGPT Plus, Notion AI, Perplexity Pro, and MEOK Sovereign rated across 10 capabilities — persistent memory, overnight agents, privacy, price, and more.',
  alternates: { canonical: 'https://meok.ai/blog/best-ai-productivity-2026' },
  openGraph: {
    title: 'Best AI Productivity Tools in 2026: ChatGPT vs Notion AI vs MEOK — Full Comparison',
    description:
      'A no-fluff comparison of the best AI productivity tools in 2026. ChatGPT Plus, Notion AI, Perplexity Pro, and MEOK Sovereign rated across 10 capabilities.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/best-ai-productivity-2026',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=Best+AI+Productivity+Tools+in+2026%3A+ChatGPT+vs+Notion+AI+vs+MEOK&desc=Full+comparison+across+10+capabilities',
        width: 1200,
        height: 630,
        alt: 'Best AI Productivity Tools in 2026: ChatGPT vs Notion AI vs MEOK — Full Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Productivity Tools in 2026: ChatGPT vs Notion AI vs MEOK — Full Comparison',
    description:
      'A no-fluff comparison of the best AI productivity tools in 2026. ChatGPT Plus, Notion AI, Perplexity Pro, and MEOK Sovereign rated across 10 capabilities.',
    images: [
      'https://meok.ai/api/og?title=Best+AI+Productivity+Tools+in+2026%3A+ChatGPT+vs+Notion+AI+vs+MEOK&desc=Full+comparison+across+10+capabilities',
    ],
  },
};

// ── JSON-LD — Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Best AI Productivity Tools in 2026: ChatGPT vs Notion AI vs MEOK — Full Comparison',
  description:
    'A no-fluff comparison of the best AI productivity tools in 2026. ChatGPT Plus, Notion AI, Perplexity Pro, and MEOK Sovereign rated across 10 capabilities — persistent memory, overnight agents, privacy, price, and more.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/best-ai-productivity-2026',
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
    'https://meok.ai/api/og?title=Best+AI+Productivity+Tools+in+2026%3A+ChatGPT+vs+Notion+AI+vs+MEOK&desc=Full+comparison+across+10+capabilities',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/best-ai-productivity-2026',
  },
};

// ── JSON-LD — FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes an AI tool genuinely productive in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Genuine productivity in 2026 requires three things from an AI tool: persistent memory (so you never re-explain your context), proactive output (so the AI delivers results without you asking), and context-awareness (so it understands your goals, standards, and working style across sessions). Most AI tools — including ChatGPT Plus — excel at one-off tasks but fail at sustained, compounding productivity because they reset every session.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an AI assistant and an AI OS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI assistant is a stateless chat interface: it helps when you show up, then resets. An AI OS is persistent infrastructure: it holds memory of your goals and standards, runs autonomous agents on your behalf, delivers proactive briefings, and compounds value over time. MEOK is built on a 6-layer architecture — multi-model router, sovereign memory vault, Mem0 semantic layer, Byzantine Council governance, the Maternal Covenant care layer, and the Orion/Riri/Hourman agent trio — making it an AI OS rather than a chat assistant.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI for knowledge workers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For knowledge workers who juggle multiple projects, delegate research, and need their AI to remember their context across weeks and months, MEOK Sovereign is the most capable system in 2026. It combines a persistent memory vault, overnight agents (Orion for research, Riri for building, Hourman for sprint planning), and a Morning Briefing that delivers completed work each day. For one-off tasks, ChatGPT Plus and Claude are excellent — but neither compounds across sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI productivity tool remembers you between sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Of the major AI productivity tools in 2026, only MEOK maintains genuine persistent memory between sessions. ChatGPT\'s memory feature stores a short list of manually saved facts but does not retain semantic context, project history, or working style. Notion AI has workspace context but it is document-scoped, not user-scoped. Perplexity Pro has no persistent user memory. MEOK\'s sovereign memory vault accumulates everything — goals, standards, style, project history — and is encrypted, owned by the user, and never used for model training.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK better than ChatGPT for productivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is better than ChatGPT for sustained, contextual productivity — the kind where you need your AI to remember what you worked on last week, understand your current priorities, and execute tasks overnight. ChatGPT Plus is better for one-off, high-capability tasks where you want frontier-model performance on a single prompt. The honest answer: they solve different problems. If you are juggling multiple projects and want an AI that compounds rather than resets, MEOK is the better investment at £12/month for the Sovereign tier.',
      },
    },
  ],
};

// ── Comparison table data ──────────────────────────────────────────────────────

type CellValue = 'yes' | 'no' | 'partial' | string;

interface CompRow {
  feature: string;
  chatgpt: CellValue;
  notionai: CellValue;
  perplexity: CellValue;
  meok: CellValue;
}

const ROWS: CompRow[] = [
  {
    feature: 'Persistent Memory',
    chatgpt: 'partial',
    notionai: 'partial',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Works While You Sleep',
    chatgpt: 'no',
    notionai: 'no',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Knows Your Context',
    chatgpt: 'partial',
    notionai: 'partial',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Multi-Model Routing',
    chatgpt: 'no',
    notionai: 'no',
    perplexity: 'partial',
    meok: 'yes',
  },
  {
    feature: 'Agent Automation',
    chatgpt: 'partial',
    notionai: 'no',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Privacy / No Training on You',
    chatgpt: 'no',
    notionai: 'no',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Family Safety Layer',
    chatgpt: 'no',
    notionai: 'no',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Morning Briefing (proactive)',
    chatgpt: 'no',
    notionai: 'no',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Exportable Memory Vault',
    chatgpt: 'no',
    notionai: 'partial',
    perplexity: 'no',
    meok: 'yes',
  },
  {
    feature: 'Price',
    chatgpt: '$20/mo',
    notionai: '$10/mo (add-on)',
    perplexity: '$20/mo',
    meok: '£12/mo',
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

function Cell({ value }: { value: CellValue }) {
  if (value === 'yes') return <CheckCircle2 style={{ width: 16, height: 16, color: '#22c55e', margin: '0 auto', display: 'block' }} />;
  if (value === 'no') return <XCircle style={{ width: 16, height: 16, color: '#ef4444', margin: '0 auto', display: 'block' }} />;
  if (value === 'partial') return <MinusCircle style={{ width: 16, height: 16, color: '#f59e0b', margin: '0 auto', display: 'block' }} />;
  return <span style={{ fontSize: '0.75rem', color: '#555', display: 'block', textAlign: 'center', lineHeight: 1.3 }}>{value}</span>;
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function BestAiProductivity2026() {
  const h2Style = {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#1a1a2e',
    marginTop: '3rem',
    marginBottom: '0.85rem',
    letterSpacing: '-0.025em',
    lineHeight: 1.25,
  } as React.CSSProperties;

  const pStyle = {
    lineHeight: 1.85,
    color: '#333',
    marginBottom: '1.2rem',
    fontSize: '0.975rem',
  } as React.CSSProperties;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── DARK HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#0d0c18',
          padding: '5.5rem 1.5rem 3.5rem',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '740px', margin: '0 auto', position: 'relative' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'rgba(245,240,232,0.35)',
              fontSize: '0.8rem',
              textDecoration: 'none',
              marginBottom: '1.75rem',
            }}
          >
            <ArrowLeft size={13} /> All posts
          </Link>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {['Productivity', 'AI Comparison', 'Work OS'].map((tag, i) => {
              const colours = [
                { bg: 'rgba(201,168,76,0.12)', border: 'rgba(201,168,76,0.3)', text: '#c9a84c' },
                { bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)', text: '#A78BFA' },
                { bg: 'rgba(135,206,235,0.08)', border: 'rgba(135,206,235,0.2)', text: '#87CEEB' },
              ];
              const c = colours[i];
              return (
                <span
                  key={tag}
                  style={{
                    display: 'inline-block',
                    background: c.bg,
                    color: c.text,
                    border: `1px solid ${c.border}`,
                    borderRadius: '9999px',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#f5f0e8',
              marginBottom: '1.1rem',
            }}
          >
            Best AI Productivity Tools in 2026:{' '}
            <span style={{ color: '#c9a84c' }}>ChatGPT vs Notion AI vs MEOK</span>
            {' '}— Full Comparison
          </h1>

          {/* Lede */}
          <p
            style={{
              color: 'rgba(245,240,232,0.58)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '1.75rem',
              maxWidth: '640px',
            }}
          >
            You are probably subscribed to three or four AI tools right now. Each one does something
            useful. None of them knows who you are. Here is an honest comparison of what they actually
            do — and what the category is missing.
          </p>

          {/* Meta */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.25rem',
              color: 'rgba(245,240,232,0.35)',
              fontSize: '0.8rem',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Calendar size={12} /> 24 March 2026
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={12} /> 12 min read
            </span>
            <span>by Nicholas Templeman</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article style={{ background: '#f5f0e8', color: '#1a1a1a', padding: '3.5rem 1.5rem 1rem' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto' }}>

          {/* Author card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem',
              background: '#fff',
              border: '1px solid rgba(26,26,46,0.08)',
              borderRadius: '0.75rem',
              marginBottom: '3rem',
            }}
          >
            <div
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                color: '#fff',
                fontSize: '0.8rem',
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', margin: '0 0 0.15rem', color: '#1a1a2e' }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(26,26,46,0.45)', margin: 0 }}>
                Founder, MEOK AI LABS — building sovereign AI from a caravan on a farm in the UK
              </p>
            </div>
            <Link
              href="/about"
              style={{ fontSize: '0.75rem', fontWeight: 600, color: '#c9a84c', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              About &rarr;
            </Link>
          </div>

          {/* ── INTRO: The tool sprawl problem ──────────────────────────── */}
          <p style={pStyle}>
            By the start of 2026, an estimated 1.5 million users had cancelled their ChatGPT Plus
            subscriptions. Not because the model got worse — it&apos;s extraordinary — but because
            they found themselves paying for four or five overlapping AI subscriptions and still
            spending the first five minutes of every session re-explaining who they are and what
            they&apos;re working on.
          </p>
          <p style={pStyle}>
            The average knowledge worker in 2026 uses 3.4 AI tools simultaneously. ChatGPT for
            writing. Notion AI for notes. Perplexity for research. Maybe Cursor for code. Each one
            excellent at a narrow slice of the problem. None of them talking to each other. None of
            them accumulating context about you as a person.
          </p>
          <p style={{ ...pStyle, marginBottom: '2.5rem' }}>
            I built MEOK because I was in that situation. This post is an honest comparison of where
            the main tools stand in 2026 — what they actually do well, where they fall short, and
            what a different architecture looks like.
          </p>

          {/* ── H2: What makes an AI tool genuinely productive? ──────────── */}
          <h2 style={h2Style}>What makes an AI tool genuinely productive in 2026?</h2>
          <p style={pStyle}>
            Most AI productivity comparisons focus on the wrong thing: single-prompt quality.
            &ldquo;Which one writes the best cold email?&rdquo; That&apos;s a useful question, but
            it misses the compounding problem.
          </p>
          <p style={pStyle}>
            Genuine productivity from an AI tool in 2026 requires three things:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              {
                n: '1',
                title: 'Persistent memory',
                body: 'Your AI should know your current projects, your priorities, your working style, and your standards — without you re-explaining them every session. Without this, every conversation is ground zero.',
              },
              {
                n: '2',
                title: 'Proactive output',
                body: 'The most valuable AI does not wait to be asked. It delivers insights, completed tasks, and structured briefings on a schedule — because your time is better spent reviewing good work than initiating every query.',
              },
              {
                n: '3',
                title: 'Compounding context',
                body: 'Each interaction should make the next one better. If your AI is not learning from your feedback and building a model of your standards, you are running on a treadmill — productive but not improving.',
              },
            ].map((item) => (
              <div
                key={item.n}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: '#fff',
                  border: '1px solid rgba(26,26,46,0.08)',
                  borderRadius: '0.5rem',
                }}
              >
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: '#c9a84c',
                    minWidth: '1.75rem',
                    flexShrink: 0,
                  }}
                >
                  {item.n}
                </div>
                <div>
                  <p style={{ fontWeight: 700, margin: '0 0 0.3rem', color: '#1a1a2e', fontSize: '0.9rem' }}>
                    {item.title}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.75, color: '#444' }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, marginBottom: '2.5rem' }}>
            Almost every tool on the market today scores well on raw capability (the quality of a
            single response) and poorly on persistence and compounding. That is the gap MEOK is
            designed to close.
          </p>

          {/* ── H2: Which AI tools are people actually using? ────────────── */}
          <h2 style={h2Style}>Which AI tools are people actually using for productivity?</h2>
          <p style={pStyle}>
            Here is the honest state of each major tool as of March 2026:
          </p>

          {[
            {
              name: 'ChatGPT Plus',
              price: '$20/month',
              color: '#10a37f',
              summary:
                'The default choice for most knowledge workers. GPT-4o is excellent at writing, analysis, coding, and multi-modal tasks. The memory feature is real but limited — it stores a flat list of manually saved snippets, not a semantic model of your working context. Operator is their agent framework, still in early access. For one-off tasks, it is the most capable consumer AI available. For sustained, contextual work, it resets every session.',
            },
            {
              name: 'Notion AI',
              price: '$10/month add-on',
              color: '#333',
              summary:
                'Deeply embedded into your Notion workspace, which is its main advantage. If you live in Notion, Notion AI knows your documents — but that is document-scoped context, not user-scoped context. It cannot act autonomously, does not run overnight, and has no memory that persists outside the workspace. Excellent for summarisation and drafting within Notion. Weak as a standalone AI assistant.',
            },
            {
              name: 'Perplexity Pro',
              price: '$20/month',
              color: '#6366f1',
              summary:
                'The best research tool in this comparison. Real-time web search with cited sources, clean summaries, and genuinely useful deep dives. No persistent user memory, no autonomous agents, no proactive delivery. If research is your primary use case, Perplexity is excellent. If you want that research delivered to you overnight without having to ask, it cannot do that.',
            },
            {
              name: 'MEOK Sovereign',
              price: '£12/month',
              color: '#c9a84c',
              summary:
                'The only tool in this list that treats AI as infrastructure rather than a chat interface. Persistent sovereign memory vault (encrypted, user-owned), three autonomous overnight agents (Orion, Riri, Hourman), a proactive Morning Briefing, multi-model routing between Claude and GPT-4o, and a governance layer (the Maternal Covenant and Byzantine Council) that ensures quality and care in every response. Built for knowledge workers who want their AI to compound, not reset.',
            },
          ].map((tool) => (
            <div
              key={tool.name}
              style={{
                padding: '1.5rem',
                background: '#fff',
                border: '1px solid rgba(26,26,46,0.08)',
                borderLeft: `4px solid ${tool.color}`,
                borderRadius: '0 0.5rem 0.5rem 0',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, color: '#1a1a2e', fontSize: '1rem' }}>{tool.name}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: tool.color === '#c9a84c' ? '#c9a84c' : 'rgba(26,26,46,0.4)',
                    background: tool.color === '#c9a84c' ? 'rgba(201,168,76,0.1)' : 'rgba(26,26,46,0.05)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                  }}
                >
                  {tool.price}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: '#444' }}>
                {tool.summary}
              </p>
            </div>
          ))}

          {/* ── H2: AI assistant vs AI OS ─────────────────────────────────── */}
          <h2 style={{ ...h2Style, marginTop: '3.5rem' }}>
            What is the difference between an AI assistant and an AI OS?
          </h2>
          <p style={pStyle}>
            An AI assistant is a stateless chat interface. You show up, you ask, it answers, you
            close the tab. It does not remember yesterday. It will not do anything tomorrow unless
            you return and ask again. ChatGPT, Claude, Perplexity — these are all, at their core, AI
            assistants, however sophisticated the underlying model.
          </p>
          <p style={pStyle}>
            An AI OS is persistent infrastructure. It holds memory across all interactions, runs
            agents autonomously, delivers outputs proactively, and compounds value as it learns your
            context. MEOK is built on a <strong>6-layer architecture</strong>:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.75rem',
              marginBottom: '2rem',
            }}
          >
            {[
              {
                label: 'Layer 1',
                name: 'Multi-Model Router',
                desc: 'Routes each query to the optimal model — Claude Sonnet, GPT-4o, or local Ollama — based on task type, privacy requirements, and your preferences.',
                color: '#c9a84c',
              },
              {
                label: 'Layer 2',
                name: 'Sovereign Memory Vault',
                desc: 'AES-GCM-256 encrypted persistent store of everything your AI knows about you. Owned by you. Exportable. Never used for training.',
                color: '#A78BFA',
              },
              {
                label: 'Layer 3',
                name: 'Mem0 Semantic Layer',
                desc: 'Vector-embedded semantic memory (via pgvector) that automatically surfaces the right context at the right moment — without you having to search or prompt.',
                color: '#87CEEB',
              },
              {
                label: 'Layer 4',
                name: 'Byzantine Council',
                desc: 'A multi-model consensus layer that cross-checks responses for accuracy and consistency. Important outputs are validated across models before delivery.',
                color: '#7BC47F',
              },
              {
                label: 'Layer 5',
                name: 'Maternal Covenant',
                desc: 'A governance layer that evaluates every response against care principles — honesty, wellbeing, emotional safety — before it reaches you.',
                color: '#F97316',
              },
              {
                label: 'Layer 6',
                name: 'Orion / Riri / Hourman',
                desc: 'Three autonomous agents: Orion (overnight research), Riri (overnight building), Hourman (daily sprint planning). They execute on your behalf while you sleep or focus.',
                color: '#EC4899',
              },
            ].map((layer) => (
              <div
                key={layer.label}
                style={{
                  padding: '1.1rem 1.25rem',
                  background: '#fff',
                  border: '1px solid rgba(26,26,46,0.08)',
                  borderTop: `3px solid ${layer.color}`,
                  borderRadius: '0 0 0.5rem 0.5rem',
                }}
              >
                <p
                  style={{
                    margin: '0 0 0.2rem',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: layer.color,
                  }}
                >
                  {layer.label}
                </p>
                <p style={{ margin: '0 0 0.4rem', fontWeight: 700, color: '#1a1a2e', fontSize: '0.875rem' }}>
                  {layer.name}
                </p>
                <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.65, color: '#555' }}>
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ ...pStyle, marginBottom: '2.5rem' }}>
            No other consumer AI product has all six layers operating together. That is not a
            marketing claim — it is an architectural distinction with practical consequences for
            what the system can do and how it compounds over time.
          </p>

          {/* ── H2: Comparison table ──────────────────────────────────────── */}
          <h2 style={h2Style}>
            How do ChatGPT Plus, Notion AI, Perplexity Pro, and MEOK Sovereign actually compare?
          </h2>
          <p style={{ ...pStyle, marginBottom: '1.5rem' }}>
            Ten capabilities that matter for sustained productivity. Green tick = available. Red
            cross = not available. Amber dash = available with significant limitations or manual
            setup only.
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '0.75rem' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.83rem',
                minWidth: '540px',
              }}
            >
              <thead>
                <tr style={{ background: '#0d0c18', color: '#f5f0e8' }}>
                  <th
                    style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontWeight: 700,
                      borderBottom: '2px solid rgba(201,168,76,0.3)',
                      minWidth: '160px',
                    }}
                  >
                    Capability
                  </th>
                  {[
                    { label: 'ChatGPT Plus', gold: false },
                    { label: 'Notion AI', gold: false },
                    { label: 'Perplexity Pro', gold: false },
                    { label: 'MEOK Sovereign', gold: true },
                  ].map((col) => (
                    <th
                      key={col.label}
                      style={{
                        padding: '0.75rem 0.625rem',
                        textAlign: 'center',
                        fontWeight: 700,
                        borderBottom: '2px solid rgba(201,168,76,0.3)',
                        color: col.gold ? '#c9a84c' : '#f5f0e8',
                        whiteSpace: 'nowrap',
                        fontSize: '0.8rem',
                      }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      background: i % 2 === 0 ? '#fff' : '#faf8f3',
                      borderBottom: '1px solid rgba(26,26,46,0.06)',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.625rem 1rem',
                        fontWeight: 600,
                        color: '#1a1a2e',
                        fontSize: '0.83rem',
                      }}
                    >
                      {row.feature}
                    </td>
                    <td style={{ padding: '0.625rem 0.625rem', textAlign: 'center' }}>
                      <Cell value={row.chatgpt} />
                    </td>
                    <td style={{ padding: '0.625rem 0.625rem', textAlign: 'center' }}>
                      <Cell value={row.notionai} />
                    </td>
                    <td style={{ padding: '0.625rem 0.625rem', textAlign: 'center' }}>
                      <Cell value={row.perplexity} />
                    </td>
                    <td
                      style={{
                        padding: '0.625rem 0.625rem',
                        textAlign: 'center',
                        background: 'rgba(201,168,76,0.07)',
                      }}
                    >
                      <Cell value={row.meok} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              fontSize: '0.78rem',
              color: '#888',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            Amber dash indicates the feature exists but requires manual setup, has significant
            limitations, or only works within a single session or workspace. Assessments reflect
            each tool&apos;s published capabilities as of March 2026.
          </p>

          {/* ── H2: Best AI for knowledge workers ───────────────────────────── */}
          <h2 style={h2Style}>What is the best AI for knowledge workers?</h2>
          <p style={pStyle}>
            The honest answer depends on what &ldquo;knowledge work&rdquo; means for you. If your
            work is primarily reactive — answering questions, editing documents, summarising meetings
            — ChatGPT Plus is excellent and hard to beat at $20 per month.
          </p>
          <p style={pStyle}>
            If your work involves managing multiple concurrent projects, building and iterating on
            strategy, staying across a domain, and producing original thinking on a sustained basis
            — MEOK Sovereign is architecturally superior. Here is why:
          </p>
          <p style={pStyle}>
            Knowledge workers do not suffer from a shortage of capable AI responses. They suffer from
            a shortage of <strong>sovereign memory</strong> — an AI that knows their current state
            deeply enough to be genuinely useful without being prompted with context every time.
          </p>

          <blockquote
            style={{
              borderLeft: '3px solid #c9a84c',
              margin: '2rem 0',
              padding: '1rem 1.5rem',
              background: '#fff',
              borderRadius: '0 0.5rem 0.5rem 0',
            }}
          >
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', color: '#1a1a2e' }}>
              &ldquo;The productivity gain from AI does not come from the model quality. It comes
              from not having to re-explain yourself every single time.&rdquo;
            </p>
          </blockquote>

          <p style={{ ...pStyle, marginBottom: '2.5rem' }}>
            MEOK&apos;s sovereign memory vault accumulates a semantic model of your context — your
            projects, your priorities, your writing style, your quality standards — that compounds
            across every interaction. By month two, the AI knows you well enough that a three-sentence
            brief produces work that would have taken an hour to prompt out of a stateless model.
          </p>

          {/* ── H2: Which AI remembers you between sessions? ─────────────── */}
          <h2 style={h2Style}>Which AI productivity tool remembers you between sessions?</h2>
          <p style={pStyle}>
            Of the tools compared here, only MEOK maintains genuine persistent memory between
            sessions. Let me be precise about what the others do:
          </p>

          <ul
            style={{
              paddingLeft: '1.5rem',
              lineHeight: 2.1,
              marginBottom: '1.5rem',
              color: '#333',
              fontSize: '0.9rem',
            }}
          >
            <li>
              <strong>ChatGPT memory:</strong> Stores a flat list of manually saved facts (up to
              a few hundred words). Does not retain conversation history, project context, or
              semantic understanding of your work. You can tell it to remember your name; you cannot
              meaningfully tell it to remember your strategy for Q2.
            </li>
            <li>
              <strong>Notion AI:</strong> Context is document-scoped, not user-scoped. It can
              reference your Notion workspace, but there is no persistent model of you as a user
              across workspaces or sessions outside of Notion.
            </li>
            <li>
              <strong>Perplexity Pro:</strong> No persistent user memory. Each session is
              stateless. Some personalisation of results based on account history, but no memory
              of your projects, goals, or working context.
            </li>
            <li>
              <strong>MEOK Sovereign:</strong> A dedicated sovereign memory vault using a 4-layer
              architecture — session context, Mem0 semantic vectors (pgvector), companion memory,
              and preference memory. Encrypted at rest with AES-GCM-256. Owned by you.
              Exportable. Never used for model training.
            </li>
          </ul>

          <p style={{ ...pStyle, marginBottom: '2.5rem' }}>
            The memory distinction is not a feature comparison — it is an architectural one. You
            cannot bolt genuine persistent memory onto a stateless chat interface with a settings
            toggle. It requires a fundamentally different infrastructure design, which is why no
            other tool in this comparison offers it.
          </p>

          {/* ── H2: How does MEOK help with productivity while you sleep? ─── */}
          <h2 style={h2Style}>How does MEOK help with productivity while you sleep?</h2>
          <p style={pStyle}>
            The three autonomous agents — Orion, Riri, and Hourman — are the most operationally
            distinct feature MEOK has. Nothing else in this comparison comes close.
          </p>

          {[
            {
              name: 'Orion',
              role: 'Overnight research agent',
              color: '#c9a84c',
              body: 'You brief Orion before you go to bed. Overnight, it searches, synthesises, and structures — competitor landscapes, domain deep-dives, market signals, literature reviews. By morning, a research dossier is waiting in your Morning Briefing. Because Orion holds memory of every previous brief, each successive task builds on domain knowledge it has already accumulated about your field. By your twentieth brief, it knows your competitive landscape as well as you do.',
            },
            {
              name: 'Riri',
              role: 'Overnight building agent',
              color: '#A78BFA',
              body: 'Riri builds while you rest. Draft a content strategy, a proposal skeleton, a landing page copy, a code scaffold, a 30-day plan. You provide the spec; Riri executes to your quality bar, in your voice, because it has seen your previous work. The output is not generic — it is yours, produced to your standards, ready for your edit in the morning rather than your creation from scratch.',
            },
            {
              name: 'Hourman',
              role: 'Daily sprint planning',
              color: '#7BC47F',
              body: "Every morning, Hourman reviews your priorities, your overnight agent outputs, your calendar, and your outstanding work — then proposes a day in 90-minute focused blocks. It knows which projects are urgent because you told it, and it remembers. It knows you work best before 11am because it has observed your patterns. Hourman is the difference between starting the day with a plan and starting it with a tab-switching anxiety spiral.",
            },
          ].map((agent) => (
            <div
              key={agent.name}
              style={{
                display: 'flex',
                gap: '1.25rem',
                padding: '1.5rem',
                background: '#fff',
                border: '1px solid rgba(26,26,46,0.08)',
                borderLeft: `4px solid ${agent.color}`,
                borderRadius: '0 0.625rem 0.625rem 0',
                marginBottom: '1rem',
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontWeight: 900, fontSize: '1rem', color: agent.color, marginBottom: '0.15rem' }}>
                  {agent.name}
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    color: 'rgba(26,26,46,0.4)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {agent.role}
                </div>
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.8, color: '#444' }}>
                {agent.body}
              </p>
            </div>
          ))}

          <p style={{ ...pStyle, marginBottom: '2.5rem', marginTop: '1rem' }}>
            The Morning Briefing ties it together: what Orion found, what Riri built, what Hourman
            recommends, and what needs your decision today — delivered every morning before you open
            your inbox. Work happened while you slept. That is not a metaphor. It is infrastructure.
          </p>

          {/* ── H2: Is MEOK better than ChatGPT for productivity? ─────────── */}
          <h2 style={h2Style}>Is MEOK better than ChatGPT for productivity?</h2>
          <p style={pStyle}>
            I want to be honest here, because the answer is not universal.
          </p>
          <p style={pStyle}>
            <strong>ChatGPT Plus is better at:</strong> single-prompt capability on complex tasks,
            image understanding, real-time browsing, code interpreter, and tasks where you need the
            most powerful frontier model on a one-off basis. If you write one document a day and
            want the best possible first draft, ChatGPT is hard to beat.
          </p>
          <p style={pStyle}>
            <strong>MEOK Sovereign is better at:</strong> everything that requires continuity.
            Building on previous work. Delegating research or drafting overnight. Starting the day
            with work already done. Not having to re-explain your context. Operating an AI that
            compounds in usefulness rather than resetting daily.
          </p>
          <p style={pStyle}>
            The practical comparison: a heavy ChatGPT user spends an estimated 15–20 minutes per
            day re-contextualising the AI — explaining projects, repeating preferences, re-supplying
            background that should already be known. Over a working month, that is 5–7 hours of
            context-setting that produces no output. MEOK eliminates that overhead.
          </p>
          <p style={{ ...pStyle, marginBottom: '2.5rem' }}>
            At £12 per month for Sovereign (versus $20 for ChatGPT Plus), MEOK also brings your own
            API key support at £5 per month if cost is the primary concern. The core tier is free
            forever with 50 messages a day and the full memory layer.
          </p>

          {/* ── H2: Limitations ──────────────────────────────────────────── */}
          <h2 style={h2Style}>What are the limitations of AI productivity tools in 2026?</h2>
          <p style={pStyle}>
            A post like this should include an honest limitations section. Here is what none of these
            tools — including MEOK — does well yet:
          </p>

          <ul
            style={{
              paddingLeft: '1.5rem',
              lineHeight: 2.1,
              marginBottom: '1.5rem',
              color: '#333',
              fontSize: '0.9rem',
            }}
          >
            <li>
              <strong>Real-time calendar and task integration:</strong> MEOK&apos;s Hourman
              understands your priorities but does not yet natively integrate with Google Calendar
              or Notion tasks. This is on the roadmap. For now, context is supplied via conversation.
            </li>
            <li>
              <strong>Hallucination in overnight research:</strong> Orion is designed to cite
              sources, but like all LLM-based research, it can confidently produce inaccurate
              information. Treat its output as a structured first draft requiring verification, not
              finished research.
            </li>
            <li>
              <strong>Notion AI&apos;s workspace depth:</strong> If you are entirely within the
              Notion ecosystem, Notion AI&apos;s document-scoped context is genuinely useful in a
              way that MEOK cannot replicate until native Notion integration ships.
            </li>
            <li>
              <strong>ChatGPT&apos;s raw capability ceiling:</strong> GPT-4o is, at time of writing,
              among the strongest models available. MEOK routes to it — but not on every query, and
              the routing overhead adds latency. If you need frontier-model performance on every
              single prompt, ChatGPT has a marginal edge.
            </li>
            <li>
              <strong>All tools:</strong> AI productivity tools amplify your existing thinking —
              they do not replace strategic judgement. The quality of overnight agent output is
              directly proportional to the quality of the brief you give. Garbage in, garbage out
              applies as much here as anywhere.
            </li>
          </ul>

          {/* ── Who should use each tool ──────────────────────────────────── */}
          <h2 style={{ ...h2Style, fontSize: '1.2rem' }}>Who should use each tool — quick verdict</h2>

          {[
            {
              tool: 'ChatGPT Plus',
              icon: '⚡',
              color: '#10a37f',
              verdict: 'Best for',
              users: 'One-off high-capability tasks. Writers, coders, and analysts who need frontier-model quality on individual prompts and do not need cross-session memory.',
              price: '$20/month',
            },
            {
              tool: 'Notion AI',
              icon: '📝',
              color: '#555',
              verdict: 'Best for',
              users: 'Notion-native teams who want AI embedded in their existing workspace. Not useful as a standalone AI assistant.',
              price: '$10/month add-on',
            },
            {
              tool: 'Perplexity Pro',
              icon: '🔍',
              color: '#6366f1',
              verdict: 'Best for',
              users: 'Research-heavy work where you need real-time web search with cited sources. No memory, no agents — a specialised tool for a narrow use case it does very well.',
              price: '$20/month',
            },
            {
              tool: 'MEOK Sovereign',
              icon: '⚙',
              color: '#c9a84c',
              verdict: 'Best for',
              users: 'Founders, freelancers, and knowledge workers managing multiple projects who want AI that compounds, remembers, and works overnight. The choice if you want infrastructure, not just a chat interface.',
              price: '£12/month',
            },
          ].map((card) => (
            <div
              key={card.tool}
              style={{
                padding: '1.5rem',
                background: card.tool === 'MEOK Sovereign' ? '#0d0c18' : '#fff',
                border: `1px solid ${card.tool === 'MEOK Sovereign' ? 'rgba(201,168,76,0.2)' : 'rgba(26,26,46,0.08)'}`,
                borderRadius: '0.625rem',
                marginBottom: '0.75rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {card.tool === 'MEOK Sovereign' && (
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    pointerEvents: 'none',
                    background: 'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.12), transparent 65%)',
                  }}
                />
              )}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '0.5rem',
                    background: `${card.color}18`,
                    border: `1px solid ${card.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        color: card.tool === 'MEOK Sovereign' ? '#f5f0e8' : '#1a1a2e',
                      }}
                    >
                      {card.tool}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: card.color,
                        fontWeight: 700,
                      }}
                    >
                      {card.price}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.85rem',
                      lineHeight: 1.7,
                      color: card.tool === 'MEOK Sovereign' ? 'rgba(245,240,232,0.65)' : '#555',
                    }}
                  >
                    <span style={{ fontWeight: 700, color: card.color }}>{card.verdict}: </span>
                    {card.users}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* ── Share ────────────────────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              margin: '3rem 0 2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(26,26,46,0.08)',
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(26,26,46,0.35)',
              }}
            >
              Share
            </span>
            {[
              {
                label: '&#120143; Twitter',
                href: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbest-ai-productivity-2026&text=Best+AI+Productivity+Tools+in+2026%3A+ChatGPT+vs+Notion+AI+vs+MEOK+%E2%80%94+Full+Comparison',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fbest-ai-productivity-2026',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(26,26,46,0.12)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'rgba(26,26,46,0.6)',
                  textDecoration: 'none',
                }}
                dangerouslySetInnerHTML={{ __html: s.label }}
              />
            ))}
          </div>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0d0c18 0%, #1a0d2e 100%)',
              borderRadius: '0.875rem',
              padding: '2.75rem 2.5rem',
              marginBottom: '3rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '280px',
                height: '280px',
                pointerEvents: 'none',
                background: 'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 65%)',
              }}
            />
            <div style={{ position: 'relative' }}>
              <p
                style={{
                  color: '#c9a84c',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  margin: '0 0 0.6rem',
                }}
              >
                MEOK AI LABS — Sovereign tier from £12/month
              </p>
              <h3
                style={{
                  color: '#f5f0e8',
                  fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                  fontWeight: 900,
                  lineHeight: 1.2,
                  margin: '0 0 0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Your AI should be working while you sleep.
              </h3>
              <p
                style={{
                  color: 'rgba(245,240,232,0.55)',
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  margin: '0 0 1.75rem',
                  maxWidth: '500px',
                }}
              >
                Hatch your AI in under three minutes. Your sovereign memory vault is created
                immediately. Orion, Riri, and Hourman start working the first night. No credit
                card. No reset. No forgetting.
              </p>
              <Link
                href="/birth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#c9a84c',
                  color: '#0d0c18',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '0.5rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Hatch your AI free <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* ── More posts ───────────────────────────────────────────────── */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a1a2e', marginBottom: '1.25rem' }}>
              More from the blog
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                {
                  href: '/blog/meok-vs-chatgpt',
                  tag: 'AI Comparison',
                  tagColor: '#A78BFA',
                  title: 'MEOK vs ChatGPT: Why Memory Changes Everything',
                  time: '6 min read',
                },
                {
                  href: '/blog/what-is-ai-os',
                  tag: 'Technology',
                  tagColor: '#87CEEB',
                  title: 'What is an AI Operating System? MEOK OS Explained',
                  time: '8 min read',
                },
                {
                  href: '/blog/morning-brief-guide',
                  tag: 'Work OS',
                  tagColor: '#c9a84c',
                  title: 'The Morning Brief: how to start every day knowing exactly what matters',
                  time: '5 min read',
                },
                {
                  href: '/blog/the-memory-problem',
                  tag: 'Memory',
                  tagColor: '#7BC47F',
                  title: "The memory problem: why every other AI forgets you and why it can't be fixed with a patch",
                  time: '7 min read',
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.625rem',
                    padding: '1.25rem',
                    background: '#fff',
                    border: '1px solid rgba(26,26,46,0.08)',
                    borderRadius: '0.625rem',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background: `${post.tagColor}18`,
                      color: post.tagColor,
                      borderRadius: '9999px',
                      padding: '0.2rem 0.625rem',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      width: 'fit-content',
                    }}
                  >
                    {post.tag}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      lineHeight: 1.45,
                      color: '#1a1a2e',
                    }}
                  >
                    {post.title}
                  </p>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.75rem',
                      color: 'rgba(26,26,46,0.35)',
                      marginTop: 'auto',
                    }}
                  >
                    <Clock size={11} />
                    {post.time}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center', padding: '1.5rem 0 2rem' }}>
            <Link
              href="/blog"
              style={{ color: '#888', fontSize: '0.85rem', textDecoration: 'none' }}
            >
              &larr; Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <MarketingFooter />
    </>
  );
}
