import type { Metadata } from 'next';
import Link from 'next/link';

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'The Best AI Productivity App in 2026: Beyond Task Lists | MEOK AI LABS',
  description:
    'Most AI productivity apps are just task lists with autocomplete. The best AI app for productivity in 2026 does overnight research, builds while you sleep, plans your day, and remembers everything. That app is MEOK.',
  alternates: { canonical: 'https://meok.ai/blog/ai-productivity-app' },
  openGraph: {
    title: 'The Best AI Productivity App in 2026: Beyond Task Lists',
    description:
      'Most AI productivity apps are just task lists with autocomplete. The best AI app for productivity in 2026 does overnight research, builds while you sleep, plans your day, and remembers everything.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-productivity-app',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=The+Best+AI+Productivity+App+in+2026%3A+Beyond+Task+Lists&desc=Orion+%7C+Riri+%7C+Hourman+%7C+Ralph+Mode+%7C+Morning+Briefing',
        width: 1200,
        height: 630,
        alt: 'The Best AI Productivity App in 2026: Beyond Task Lists — MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Best AI Productivity App in 2026: Beyond Task Lists',
    description:
      'Most AI productivity apps are just task lists with autocomplete. The best AI app for productivity in 2026 does overnight research, builds while you sleep, plans your day, and remembers everything.',
    images: [
      'https://meok.ai/api/og?title=The+Best+AI+Productivity+App+in+2026%3A+Beyond+Task+Lists&desc=Orion+%7C+Riri+%7C+Hourman+%7C+Ralph+Mode+%7C+Morning+Briefing',
    ],
  },
};

// ── JSON-LD — Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Best AI Productivity App in 2026: Beyond Task Lists',
  description:
    'Most AI productivity apps are just task lists with autocomplete. The best AI app for productivity in 2026 does overnight research, builds while you sleep, plans your day, and remembers everything. That app is MEOK.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-productivity-app',
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
    'https://meok.ai/api/og?title=The+Best+AI+Productivity+App+in+2026%3A+Beyond+Task+Lists&desc=Orion+%7C+Riri+%7C+Hourman+%7C+Ralph+Mode+%7C+Morning+Briefing',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-productivity-app',
  },
};

// ── JSON-LD — FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best AI productivity app in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is the best AI productivity app for knowledge workers in 2026. Unlike task managers or writing assistants, MEOK runs overnight agents (Orion, Riri, Hourman) that research, build, and plan while you sleep — then delivers a personalised Morning Briefing so your day starts already done.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does an AI productivity app differ from a task manager?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A task manager shows you a list. An AI productivity app like MEOK acts on that list autonomously. It can research tasks overnight via Orion, draft documents or code via Riri, plan your day in time blocks via Hourman, and remember your work preferences across every session via Sovereign Memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Ralph Mode in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ralph Mode is MEOK\'s deep work feature, available on the Sovereign tier. It locks you into one task at a time, eliminates distractions, and tracks completion with session-level focus. It is designed for single-task flow state — no multitasking, no tab-switching, just sovereign focus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK remember my work preferences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sovereign Memory means MEOK remembers your deadlines, project context, preferred working hours, communication style, and even what you accomplished yesterday. You never have to re-explain your situation — MEOK already knows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does MEOK cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK offers four tiers: Explorer (free, 50 messages per day), Sovereign (£12/month — full agents, Morning Briefing, Ralph Mode), Family (£29/month — up to 5 members), and BYOK (£5/month — bring your own API key). The Sovereign tier unlocks all productivity features.',
      },
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiProductivityAppPage() {
  const BG = '#0d0c18';
  const TEXT = '#f5f0e8';
  const GOLD = '#c9a84c';
  const CARD = '#1a1830';
  const MUTED = '#a09880';
  const BORDER = '#2a2848';

  return (
    <main style={{ background: BG, color: TEXT, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
      <nav style={{ borderBottom: `1px solid ${BORDER}`, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link href="/blog" style={{ color: MUTED, textDecoration: 'none', fontSize: '14px' }}>
          Blog
        </Link>
        <span style={{ color: BORDER }}>›</span>
        <span style={{ color: MUTED, fontSize: '14px' }}>AI Productivity App</span>
      </nav>

      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Header */}
        <header style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ background: GOLD, color: '#0d0c18', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Productivity
            </span>
            <time dateTime="2026-03-24" style={{ color: MUTED, fontSize: '14px' }}>
              March 24, 2026
            </time>
            <span style={{ color: MUTED, fontSize: '14px' }}>· 10 min read</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', color: TEXT }}>
            The Best AI Productivity App in 2026: Beyond Task Lists
          </h1>

          <p style={{ fontSize: '18px', lineHeight: 1.7, color: MUTED, borderLeft: `3px solid ${GOLD}`, paddingLeft: '16px' }}>
            The UK productivity software market is worth £11 billion. The average knowledge worker uses nine productivity apps. And yet most of us still feel behind. The problem is not the number of tools — it is that none of them actually work for you. They wait for instructions. They forget everything between sessions. They are, at best, sophisticated notepads. The best AI productivity app in 2026 does not just organise your work. It does it.
          </p>
        </header>

        {/* Section 1 — What makes an AI app truly productive? */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            What makes an AI app truly productive?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
            True productivity multipliers are rare. Most &ldquo;AI features&rdquo; are autocomplete dressed up as intelligence. Here are five capabilities that actually move the needle — and the gimmicks that masquerade as them.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                label: 'Persistent Memory',
                real: 'Knows your projects, deadlines, and working style across every session',
                fake: '"Chat history" that resets or requires manual prompting',
              },
              {
                label: 'Proactive Work',
                real: 'Acts on tasks autonomously — researches, builds, plans — without being asked',
                fake: 'Suggests tasks you could do yourself',
              },
              {
                label: 'Deep Focus Support',
                real: 'Enforces single-task focus, tracks completion, eliminates decision fatigue',
                fake: 'A Pomodoro timer with a chatbot attached',
              },
              {
                label: 'Daily Contextualisation',
                real: 'Synthesises your schedule, priorities, and yesterday\'s progress into a usable morning brief',
                fake: 'A generic daily digest pulled from the web',
              },
              {
                label: 'Overnight Execution',
                real: 'Runs research, content, or code tasks while you sleep — delivers results at wake-up',
                fake: 'Scheduled email summaries',
              },
            ].map(({ label, real, fake }) => (
              <div key={label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '20px 24px' }}>
                <p style={{ fontWeight: 700, color: TEXT, marginBottom: '8px', fontSize: '15px' }}>{label}</p>
                <p style={{ color: '#4ade80', fontSize: '14px', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600 }}>Real: </span>{real}
                </p>
                <p style={{ color: '#f87171', fontSize: '14px' }}>
                  <span style={{ fontWeight: 600 }}>Gimmick: </span>{fake}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 — Orion-Riri-Hourman */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            What is the Orion-Riri-Hourman system?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '28px' }}>
            MEOK runs three specialised agents overnight. Each has a distinct role, a distinct personality, and a distinct output — delivered to you each morning. Together they form a complete overnight work crew that operates while you rest.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Orion */}
            <div style={{ background: CARD, border: `2px solid #f59e0b`, borderRadius: '12px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '2px solid #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  O
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '18px', color: '#f59e0b', margin: 0 }}>Orion</p>
                  <p style={{ color: MUTED, fontSize: '13px', margin: 0 }}>The Hunter</p>
                </div>
                <span style={{ marginLeft: 'auto', background: 'rgba(245,158,11,0.15)', color: '#f59e0b', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>Research</span>
              </div>
              <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: '12px', fontSize: '15px' }}>
                Orion hunts overnight. You tell MEOK what you need — competitor intelligence, market research, lead lists, industry signals — and Orion goes to work the moment you close your laptop. By morning, the research is waiting in your Morning Briefing, structured and ready to act on.
              </p>
              <p style={{ color: MUTED, fontSize: '14px', fontStyle: 'italic' }}>
                No more losing hours to research rabbit holes. Orion runs them so you do not have to.
              </p>
            </div>

            {/* Riri */}
            <div style={{ background: CARD, border: `2px solid #3b82f6`, borderRadius: '12px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(59,130,246,0.15)', border: '2px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  R
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '18px', color: '#3b82f6', margin: 0 }}>Riri</p>
                  <p style={{ color: MUTED, fontSize: '13px', margin: 0 }}>The Builder</p>
                </div>
                <span style={{ marginLeft: 'auto', background: 'rgba(59,130,246,0.15)', color: '#3b82f6', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>Build</span>
              </div>
              <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: '12px', fontSize: '15px' }}>
                Riri builds while you sleep. Code, content, documents, reports, proposals — if it can be drafted, Riri drafts it. You arrive in the morning to a first draft that is already context-aware, because Riri knows your projects, your tone, and your goals from Sovereign Memory.
              </p>
              <p style={{ color: MUTED, fontSize: '14px', fontStyle: 'italic' }}>
                Start your day editing rather than starting. Riri does the blank-page work so you never face it.
              </p>
            </div>

            {/* Hourman */}
            <div style={{ background: CARD, border: `2px solid #10b981`, borderRadius: '12px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  H
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '18px', color: '#10b981', margin: 0 }}>Hourman</p>
                  <p style={{ color: MUTED, fontSize: '13px', margin: 0 }}>The Planner</p>
                </div>
                <span style={{ marginLeft: 'auto', background: 'rgba(16,185,129,0.15)', color: '#10b981', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '20px' }}>Plan</span>
              </div>
              <p style={{ color: TEXT, lineHeight: 1.7, marginBottom: '12px', fontSize: '15px' }}>
                Hourman plans your day before you wake. It reviews your calendar, your task backlog, your energy patterns, and your project deadlines — then creates a structured daily sprint: time blocks, focus sessions, and a priority stack. Your day arrives pre-organised.
              </p>
              <p style={{ color: MUTED, fontSize: '14px', fontStyle: 'italic' }}>
                Decision fatigue costs knowledge workers two hours a day. Hourman eliminates the planning tax.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Ralph Mode */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            How does Ralph Mode work?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
            Ralph Mode is MEOK&rsquo;s deep work feature, available on the Sovereign tier. It enforces sovereign focus: one task, no distractions, no context-switching, until the work is done.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '16px', color: TEXT }}>
            The average knowledge worker switches tasks every three minutes and twenty seconds. Each switch costs up to twenty-three minutes of recovery time. Ralph Mode exists to end that cycle entirely.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '16px', color: TEXT }}>
            When you activate Ralph Mode, MEOK locks your session to a single declared task. It will not offer alternative topics, will not respond to off-task questions, and will track your session from start to completion. At the end, it logs what you accomplished and feeds that record into Sovereign Memory, so tomorrow&rsquo;s planning is informed by what actually got done today.
          </p>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GOLD}`, borderRadius: '8px', padding: '20px 24px' }}>
            <p style={{ color: GOLD, fontWeight: 700, marginBottom: '8px', fontSize: '15px' }}>Ralph Mode is for Sovereign members</p>
            <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.7 }}>
              Deep work mode is included in the Sovereign tier (£12/month). It pairs naturally with Hourman&rsquo;s daily sprint planning — you arrive knowing exactly what to focus on, and Ralph Mode makes sure you do.
            </p>
          </div>
          <p style={{ lineHeight: 1.8, marginTop: '16px', color: TEXT }}>
            Read the full breakdown in the{' '}
            <Link href="/blog/ralph-mode-guide" style={{ color: GOLD, textDecoration: 'underline' }}>
              Ralph Mode guide
            </Link>
            .
          </p>
        </section>

        {/* Section 4 — Morning Briefing */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            What is a Morning Briefing AI?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
            The Morning Briefing is MEOK&rsquo;s daily synthesis layer. Powered by Hourman, it arrives each morning with everything you need to start working immediately — no context-loading required.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '16px', color: TEXT }}>
            A typical Morning Briefing includes: today&rsquo;s calendar and priorities, a digest of what Orion found overnight, a summary of what Riri built or drafted, a reference to key memories from yesterday, the weather if it affects your plans, and Hourman&rsquo;s recommended sprint structure for the day.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '16px', color: TEXT }}>
            It is not a generic productivity digest. It is personalised to you — your projects, your rhythm, your language. Every briefing is different because every day is different, and MEOK knows the difference.
          </p>
          <p style={{ lineHeight: 1.8, color: TEXT }}>
            The result: instead of spending your first forty-five minutes getting oriented, you open MEOK and are already in motion. See the full overview in our{' '}
            <Link href="/blog/what-is-morning-briefing" style={{ color: GOLD, textDecoration: 'underline' }}>
              Morning Briefing guide
            </Link>
            .
          </p>
        </section>

        {/* Section 5 — Sovereign Memory */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            How does AI memory improve productivity?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
            The single biggest tax on knowledge work is re-establishing context. Every new tool session, every new conversation, you explain who you are and what you are working on. Sovereign Memory eliminates that entirely.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: '16px', color: TEXT }}>
            Sovereign Memory is MEOK&rsquo;s persistent, private memory layer. It stores your work style, your active projects and deadlines, your communication preferences, your preferred working hours, and a rolling log of what you have accomplished. None of this data is used to train AI models. It belongs to you alone.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '20px' }}>
            {[
              { label: 'Work Style', desc: 'How you think, communicate, and make decisions' },
              { label: 'Active Projects', desc: 'Deadlines, status, and stakeholders per project' },
              { label: 'Working Hours', desc: 'When you are sharp, when you need breaks' },
              { label: 'Progress Log', desc: 'What got done, what got deferred, and why' },
            ].map(({ label, desc }) => (
              <div key={label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px' }}>
                <p style={{ color: GOLD, fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>{label}</p>
                <p style={{ color: MUTED, fontSize: '13px', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, color: TEXT }}>
            The practical impact: a Sovereign member who has used MEOK for three weeks never needs to re-brief the system. Orion knows what to hunt. Riri knows your voice. Hourman knows your rhythms. The productivity compound effect is significant — the system gets more useful the longer you use it.
          </p>
        </section>

        {/* Section 6 — Comparison Table */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            How does MEOK compare to other AI productivity apps?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
            There are five broad categories of AI productivity app in 2026. Here is how they compare across the capabilities that actually matter for knowledge workers.
          </p>

          <div style={{ overflowX: 'auto', borderRadius: '10px', border: `1px solid ${BORDER}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '620px' }}>
              <thead>
                <tr style={{ background: '#13122a' }}>
                  <th style={{ textAlign: 'left', padding: '14px 16px', color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>App / Type</th>
                  <th style={{ textAlign: 'center', padding: '14px 10px', color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>Memory</th>
                  <th style={{ textAlign: 'center', padding: '14px 10px', color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>Overnight Agents</th>
                  <th style={{ textAlign: 'center', padding: '14px 10px', color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>Deep Focus</th>
                  <th style={{ textAlign: 'center', padding: '14px 10px', color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>Morning Brief</th>
                  <th style={{ textAlign: 'center', padding: '14px 10px', color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>Work OS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { app: 'Todoist AI / Notion AI', type: 'Task manager', memory: '✗', agents: '✗', focus: '~', brief: '✗', os: '✗', highlight: false },
                  { app: 'Grammarly / Otter', type: 'Writing assistant', memory: '✗', agents: '✗', focus: '✗', brief: '✗', os: '✗', highlight: false },
                  { app: 'Motion / Reclaim', type: 'AI scheduler', memory: '~', agents: '✗', focus: '~', brief: '✗', os: '✗', highlight: false },
                  { app: 'ChatGPT / Claude', type: 'AI assistant', memory: '~', agents: '✗', focus: '✗', brief: '✗', os: '✗', highlight: false },
                  { app: 'Microsoft Copilot', type: 'Office AI', memory: '~', agents: '✗', focus: '✗', brief: '✗', os: '~', highlight: false },
                  { app: 'MEOK (Sovereign)', type: 'Work OS', memory: '✓', agents: '✓', focus: '✓', brief: '✓', os: '✓', highlight: true },
                ].map(({ app, type, memory, agents, focus, brief, os, highlight }, i) => (
                  <tr key={app} style={{ background: highlight ? 'rgba(201,168,76,0.07)' : i % 2 === 0 ? CARD : 'transparent', borderBottom: `1px solid ${BORDER}` }}>
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ color: highlight ? GOLD : TEXT, fontWeight: highlight ? 700 : 400 }}>{app}</span>
                      <span style={{ color: MUTED, fontSize: '12px', display: 'block' }}>{type}</span>
                    </td>
                    {[memory, agents, focus, brief, os].map((val, idx) => (
                      <td key={idx} style={{ textAlign: 'center', padding: '13px 10px', color: val === '✓' ? '#4ade80' : val === '~' ? '#facc15' : '#f87171', fontWeight: 600, fontSize: '15px' }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: MUTED, fontSize: '12px', marginTop: '10px' }}>
            ✓ Full support &nbsp;·&nbsp; ~ Partial / limited &nbsp;·&nbsp; ✗ Not available
          </p>

          <p style={{ lineHeight: 1.8, marginTop: '16px', color: TEXT }}>
            The gap is not marginal. Task managers with AI help you organise work you still have to do. Writing assistants help you with one document at a time. AI schedulers move calendar blocks. General-purpose assistants answer questions when prompted. MEOK is the only category that does proactive, overnight, memory-aware, multi-agent work — and delivers it to you before you have even made your first coffee.
          </p>
        </section>

        {/* Section 7 — Tiers */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            What tier do I need for MEOK productivity features?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
            The short answer: Explorer is free and gives you persistent memory and full chat. Sovereign unlocks the overnight agent system and all productivity features.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                tier: 'Explorer',
                price: 'Free',
                tagline: '50 messages per day',
                features: ['Full MEOK chat', 'Sovereign Memory (basic)', 'All companion archetypes', 'Access to morning brief overview'],
                cta: false,
              },
              {
                tier: 'Sovereign',
                price: '£12/month',
                tagline: 'Full Work OS — recommended',
                features: ['Unlimited messages', 'Orion overnight research', 'Riri overnight builds', 'Hourman daily sprint planning', 'Full Morning Briefing', 'Ralph Mode (deep work)', 'Sovereign Memory (full)', 'Priority support'],
                cta: true,
              },
              {
                tier: 'Family',
                price: '£29/month',
                tagline: 'Up to 5 members',
                features: ['Everything in Sovereign', 'Up to 5 separate profiles', 'Separate memory per member', 'Shared subscription'],
                cta: false,
              },
              {
                tier: 'BYOK',
                price: '£5/month',
                tagline: 'Bring your own API key',
                features: ['Full MEOK interface', 'Your own LLM costs', 'Sovereign Memory', 'Morning Briefing'],
                cta: false,
              },
            ].map(({ tier, price, tagline, features, cta }) => (
              <div key={tier} style={{ background: CARD, border: `1px solid ${cta ? GOLD : BORDER}`, borderRadius: '10px', padding: '22px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <span style={{ color: cta ? GOLD : TEXT, fontWeight: 800, fontSize: '17px' }}>{tier}</span>
                    {cta && <span style={{ marginLeft: '10px', background: GOLD, color: '#0d0c18', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>RECOMMENDED</span>}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: '16px' }}>{price}</span>
                    <span style={{ color: MUTED, fontSize: '13px', display: 'block' }}>{tagline}</span>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {features.map((f) => (
                    <li key={f} style={{ color: MUTED, fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#4ade80', marginTop: '1px', flexShrink: 0 }}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 — Onboarding */}
        <section style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>
            How do I set up MEOK for productivity?
          </h2>
          <p style={{ color: GOLD, fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
            Getting started takes under ten minutes. MEOK builds context progressively — the more you use it, the more useful it becomes. Here is the recommended five-step setup for knowledge workers.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                step: '01',
                title: 'Create your account and choose a tier',
                desc: 'Start with Explorer for free, or go straight to Sovereign to unlock the full agent system. You can upgrade at any time without losing your memory.',
              },
              {
                step: '02',
                title: 'Complete the Work Profile setup',
                desc: 'Tell MEOK your role, your current projects, your deadlines, and your preferred working hours. This seeds Sovereign Memory and immediately improves every interaction.',
              },
              {
                step: '03',
                title: 'Set your first Orion hunt',
                desc: 'Give Orion one research task to run tonight. It might be competitor pricing, market trends, or a list of contacts. Set it, close your laptop, and let Orion work.',
              },
              {
                step: '04',
                title: 'Enable your Morning Briefing',
                desc: 'Set your preferred briefing time (most users choose 7:00–8:30am). Hourman will have your daily sprint ready before you open the app.',
              },
              {
                step: '05',
                title: 'Try Ralph Mode on your first deep work session',
                desc: 'Declare one task, activate Ralph Mode, and work until it is complete. Log the session. MEOK will use this data to optimise your future planning.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '20px 24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span style={{ color: GOLD, fontWeight: 800, fontSize: '22px', minWidth: '36px', flexShrink: 0, lineHeight: 1 }}>{step}</span>
                <div>
                  <p style={{ color: TEXT, fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{title}</p>
                  <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: CARD, border: `1px solid ${GOLD}`, borderRadius: '14px', padding: '40px 32px', textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ color: GOLD, fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Start Today
          </p>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, color: TEXT, marginBottom: '14px', lineHeight: 1.25 }}>
            Stop switching between nine apps. Start with one that does the work.
          </h2>
          <p style={{ color: MUTED, fontSize: '16px', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 28px' }}>
            MEOK is free to start. Explorer gives you 50 messages per day and persistent memory. Sovereign unlocks Orion, Riri, Hourman, Morning Briefing, and Ralph Mode — the full productivity OS.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: GOLD,
              color: '#0d0c18',
              fontWeight: 800,
              fontSize: '16px',
              padding: '14px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Meet MEOK — Free to Start
          </Link>
          <p style={{ color: MUTED, fontSize: '13px', marginTop: '14px' }}>
            No credit card required for Explorer &nbsp;·&nbsp; Sovereign from £12/month
          </p>
        </section>

        {/* Related Posts */}
        <section style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
            Related Reading
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { href: '/blog/best-ai-productivity-2026', label: 'Best AI Productivity Tools in 2026: Full Comparison' },
              { href: '/blog/what-is-morning-briefing', label: 'What Is a Morning Briefing AI? How Hourman Plans Your Day' },
              { href: '/blog/ralph-mode-guide', label: 'Ralph Mode: The Deep Work Feature Built for Sovereign Focus' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '8px',
                  padding: '16px 20px',
                  textDecoration: 'none',
                  color: TEXT,
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                <span>{label}</span>
                <span style={{ color: GOLD, fontSize: '18px', marginLeft: '12px' }}>&rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <p style={{ color: TEXT, fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>MEOK AI LABS</p>
            <p style={{ color: MUTED, fontSize: '13px' }}>
              Founded by Nicholas Templeman &nbsp;·&nbsp;{' '}
              <a
                href="https://x.com/meok_ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'none' }}
              >
                @meok_ai
              </a>
            </p>
          </div>
          <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { href: '/blog', label: 'Blog' },
              { href: '/birth', label: 'Get Started' },
              { href: '/privacy', label: 'Privacy' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: MUTED, textDecoration: 'none', fontSize: '13px' }}>
                {label}
              </Link>
            ))}
          </nav>
        </footer>
      </article>
    </main>
  );
}
