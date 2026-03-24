import type { Metadata } from 'next';
import Link from 'next/link';

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI for Small Business: How MEOK Replaces Three Tools You're Already Paying For | MEOK AI LABS",
  description:
    "Most UK small businesses run on Notion, Microsoft Copilot, and a scheduling tool. MEOK's Work OS — Orion, Riri, and Hourman overnight agents — replaces all three for less, with persistent memory and HMRC-ready context baked in.",
  alternates: { canonical: 'https://meok.ai/blog/ai-for-small-business' },
  openGraph: {
    title: "AI for Small Business: How MEOK Replaces Three Tools You're Already Paying For",
    description:
      "Most UK small businesses run on Notion, Microsoft Copilot, and a scheduling tool. MEOK's Work OS — Orion, Riri, and Hourman overnight agents — replaces all three for less.",
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-small-business',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Small+Business%3A+Replace+Three+Tools+with+MEOK&desc=Orion+%7C+Riri+%7C+Hourman+%7C+%C2%A312%2Fmo',
        width: 1200,
        height: 630,
        alt: "AI for Small Business: How MEOK Replaces Three Tools You're Already Paying For",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI for Small Business: How MEOK Replaces Three Tools You're Already Paying For",
    description:
      "Most UK small businesses run on Notion, Microsoft Copilot, and a scheduling tool. MEOK's Work OS — Orion, Riri, and Hourman overnight agents — replaces all three for less.",
    images: [
      'https://meok.ai/api/og?title=AI+for+Small+Business%3A+Replace+Three+Tools+with+MEOK&desc=Orion+%7C+Riri+%7C+Hourman+%7C+%C2%A312%2Fmo',
    ],
  },
};

// ── JSON-LD — Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "AI for Small Business: How MEOK Replaces Three Tools You're Already Paying For",
  description:
    "Most UK small businesses run on Notion, Microsoft Copilot, and a scheduling tool. MEOK's Work OS — Orion, Riri, and Hourman overnight agents — replaces all three for less, with persistent memory and HMRC-ready context baked in.",
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-small-business',
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
    'https://meok.ai/api/og?title=AI+for+Small+Business%3A+Replace+Three+Tools+with+MEOK&desc=Orion+%7C+Riri+%7C+Hourman+%7C+%C2%A312%2Fmo',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-small-business',
  },
  keywords:
    'AI for small business UK, AI business tools sole trader, MEOK Work OS, replace Notion AI, AI for limited company, HMRC AI assistant',
};

// ── JSON-LD — FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best AI tool for small businesses in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK is the strongest single AI platform for UK small businesses because it combines persistent memory, overnight autonomous agents (Orion, Riri, Hourman), document drafting, scheduling, and HMRC-aware financial context into one subscription. At £12/month on the Sovereign tier, it replaces Notion AI, Microsoft Copilot, and a separate scheduling tool for less than the cost of any one of them.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help a sole trader with HMRC Self Assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK stores persistent memory of your income, expenses, and client history across the tax year. Orion can surface allowable deductions, draft expense summaries, and help you prepare records ahead of the 31 January Self Assessment deadline — without sharing your data with a cloud AI that trains on your inputs.',
      },
    },
    {
      '@type': 'Question',
      name: "How does MEOK replace Notion for small business?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK's Work OS stores notes, project briefs, client context, and SOPs in persistent memory that the AI actively queries. Unlike Notion, MEOK's agents act on that knowledge overnight — drafting documents, preparing briefs, and surfacing tasks without you having to open a page and ask manually.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are Orion, Riri, and Hourman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Orion, Riri, and Hourman are MEOK's three overnight Work OS agents. Orion handles deep research and strategic analysis. Riri drafts content, proposals, and correspondence. Hourman manages your schedule, surfaces overdue tasks, and prepares your morning brief. Assign work before bed; wake up to completed outputs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK suitable for limited companies as well as sole traders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK works for both sole traders and limited company directors. It can store company-specific context — registered number, year-end dates, confirmation statement deadlines, and payroll schedules — and proactively remind you of Companies House filing obligations alongside day-to-day client work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK keep my business data private?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK is built on a sovereign architecture — your memory, client data, and business context are stored in your own encrypted vault and are never used to train third-party AI models. This matters for small businesses handling client-sensitive information or subject to GDPR obligations as data controllers.",
      },
    },
  ],
};

// ── Static data ────────────────────────────────────────────────────────────────

const stackRows = [
  {
    capability: 'Project & client notes',
    oldStack: 'Notion (£8–£15/mo)',
    meok: 'Persistent memory vault',
    meokWin: true,
  },
  {
    capability: 'AI writing & drafting',
    oldStack: 'Microsoft Copilot (£25/mo)',
    meok: 'Riri — context-aware drafting',
    meokWin: true,
  },
  {
    capability: 'Scheduling & reminders',
    oldStack: 'Calendly / Motion (£12–£19/mo)',
    meok: 'Hourman — calendar + task agent',
    meokWin: true,
  },
  {
    capability: 'Overnight autonomous work',
    oldStack: 'None',
    meok: 'Orion + Riri + Hourman agents',
    meokWin: true,
  },
  {
    capability: 'HMRC / Companies House context',
    oldStack: 'None — manual research',
    meok: 'Stored in sovereign memory',
    meokWin: true,
  },
  {
    capability: 'Data privacy',
    oldStack: 'Cloud-trained, data shared',
    meok: 'Sovereign vault, never trained on',
    meokWin: true,
  },
  {
    capability: 'Monthly cost',
    oldStack: '£45–£59/mo combined',
    meok: '£12/mo (Sovereign tier)',
    meokWin: true,
  },
];

const agentCards = [
  {
    name: 'Orion',
    role: 'Research & Strategy',
    description:
      'Orion conducts deep overnight research — competitor analysis, market sizing, supplier comparisons, regulatory checks. Assign a brief before bed; wake up to a structured report with sources.',
    examples: [
      'Research HMRC Making Tax Digital requirements for your sector',
      'Analyse three competitors and surface pricing gaps',
      'Draft a business case for a new service line',
    ],
  },
  {
    name: 'Riri',
    role: 'Writing & Correspondence',
    description:
      "Riri drafts proposals, client emails, SOPs, website copy, and reports using persistent memory of your tone, past work, and client preferences — no briefing from scratch each time.",
    examples: [
      'Write a tailored proposal for a new client brief',
      'Draft a payment-chaser email in your voice',
      'Produce an SOP from bullet-point notes',
    ],
  },
  {
    name: 'Hourman',
    role: 'Planning & Admin',
    description:
      'Hourman manages your calendar, surfaces overdue tasks, tracks filing deadlines, and delivers a structured morning brief so you start every day knowing exactly where your business stands.',
    examples: [
      "Consolidate today's priorities from email and calendar",
      'Flag upcoming Companies House confirmation statement deadline',
      'Reschedule clashing client calls and notify attendees',
    ],
  },
];

const workdayTimeline = [
  {
    time: '07:30',
    event: 'Morning brief',
    detail:
      'Hourman surfaces three priority tasks, flags a client invoice overdue by 8 days, and notes the Corporation Tax payment on account is due in 11 days.',
  },
  {
    time: '08:15',
    event: 'Proposal draft',
    detail:
      "Riri produces a first-draft proposal for a new discovery engagement. It already knows the client sector, your day rate, and the standard deliverables from similar past engagements.",
  },
  {
    time: '09:00',
    event: 'Client call prep',
    detail:
      "Orion surfaces a three-paragraph briefing on the client's latest press releases, financial results, and publicly stated strategic priorities — in under 90 seconds.",
  },
  {
    time: '18:30',
    event: 'Overnight assignment',
    detail:
      'You assign Orion a competitive analysis brief, ask Riri to draft a follow-up email thread, and ask Hourman to reschedule two clashing calls for next week.',
  },
  {
    time: '07:30+1',
    event: 'Outputs waiting',
    detail:
      'All three tasks are complete in your dashboard. You review, adjust one paragraph, and send. Total active work on those tasks: under 10 minutes.',
  },
];

const relatedPosts = [
  {
    href: '/blog/ai-for-freelancers',
    title: 'AI for Freelancers: How MEOK Becomes Your Overnight Business Partner',
    tag: 'Freelance',
  },
  {
    href: '/blog/best-ai-productivity-2026',
    title: 'Best AI Productivity Tools in 2026: Full Comparison',
    tag: 'Comparison',
  },
  {
    href: '/blog/what-is-ai-os',
    title: 'What Is an AI OS? The Shift from Chatbot to Work Operating System',
    tag: 'Explainer',
  },
  {
    href: '/blog/meok-vs-copilot',
    title: 'MEOK vs Microsoft Copilot: Which AI Is Right for Your Business?',
    tag: 'Comparison',
  },
];

const pricingCards = [
  { label: 'Notion Plus', price: '£8/mo', note: 'Notes only', gold: false },
  { label: 'Microsoft Copilot', price: '£25/mo', note: 'No memory, no agents', gold: false },
  { label: 'Motion / Reclaim', price: '£12–19/mo', note: 'Scheduling only', gold: false },
  { label: 'MEOK Sovereign', price: '£12/mo', note: 'Everything combined', gold: true },
];

const footerLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/work-os', label: 'Work OS' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/about', label: 'About' },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForSmallBusinessPage() {
  return (
    <div
      style={{
        backgroundColor: '#0d0c18',
        color: '#f5f0e8',
        minHeight: '100vh',
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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

      {/* Nav */}
      <nav
        style={{
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '72rem',
          margin: '0 auto',
        }}
      >
        <Link
          href="/"
          style={{
            color: '#c9a84c',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.125rem',
            letterSpacing: '0.05em',
          }}
        >
          MEOK
        </Link>
        <Link
          href="/blog"
          style={{
            color: '#f5f0e8',
            opacity: 0.7,
            textDecoration: 'none',
            fontSize: '0.875rem',
          }}
        >
          ← All posts
        </Link>
      </nav>

      {/* Hero */}
      <header
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: '4rem 1.5rem 2.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.25rem',
          }}
        >
          {['Work OS', 'Small Business', 'UK'].map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: 'rgba(201,168,76,0.12)',
                color: '#c9a84c',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#f5f0e8',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          AI for Small Business: How MEOK Replaces Three Tools You&apos;re Already Paying For
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: 'rgba(245,240,232,0.75)',
            marginBottom: '2rem',
          }}
        >
          Most UK small businesses are paying £45–£59 a month across Notion, Microsoft Copilot, and
          a scheduling tool — and still doing most of the work themselves. MEOK&apos;s Work OS bundles
          persistent memory, overnight AI agents, and HMRC-aware context into a single £12/month
          sovereign platform. Here is what you are actually getting.
        </p>

        {/* Byline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: '#c9a84c',
              fontSize: '0.875rem',
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontWeight: 600,
                fontSize: '0.9rem',
                color: '#f5f0e8',
              }}
            >
              Nicholas Templeman
            </p>
            <p
              style={{
                margin: 0,
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.5)',
              }}
            >
              Founder, MEOK AI LABS &middot; 24 March 2026 &middot; 9 min read
            </p>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article
        style={{
          maxWidth: '52rem',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
        }}
      >

        {/* ── Section 1 ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What tools are UK small businesses already paying for?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            The typical three-tool stack costs £45–£59/month, with no overnight capability and no shared context.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1rem',
            }}
          >
            The typical stack for a UK sole trader or small limited company looks something like this:
            Notion or Confluence for project notes and SOPs, Microsoft 365 Copilot or ChatGPT Plus
            for AI writing assistance, and Calendly, Motion, or Reclaim for scheduling. That combination
            costs between £45 and £60 per month — and none of those tools talk to each other.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1rem',
            }}
          >
            The deeper problem is context loss. You write a client brief in Notion. You ask Copilot
            to draft a proposal. Copilot knows nothing about the brief. You paste it in manually. You
            ask it to schedule a follow-up. It cannot touch your calendar. Every tool operates in
            isolation, and you are the integration layer — burning an hour each day just keeping
            everything in sync.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
            }}
          >
            MEOK was designed to collapse that stack. One platform. One sovereign memory layer.
            Three overnight agents. Everything connected.
          </p>
        </section>

        {/* ── Section 2 ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What is MEOK&apos;s Work OS and how does it replace Notion?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            MEOK stores your business knowledge as live context the AI queries automatically — not as static documents you retrieve.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1rem',
            }}
          >
            MEOK&apos;s Work OS is a persistent, sovereign memory layer that stores your client history,
            project briefs, SOPs, financial context, and business rules — not as static documents
            you retrieve, but as live context the AI draws on automatically every time you interact.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1rem',
            }}
          >
            When you ask Riri to draft a proposal, it already knows the client&apos;s budget range from
            your last conversation, the tone you used in previous correspondence, and the deliverables
            you agreed verbally last week. There is no copy-paste. There is no context-setting preamble.
            The AI already knows.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
            }}
          >
            Notion is a brilliant document tool. But it is passive. MEOK&apos;s memory is active —
            queried by agents overnight, surfaced in briefings, and updated as your business evolves.
            That is the fundamental difference between a knowledge base and a Work OS.
          </p>
        </section>

        {/* ── Agent Cards ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            Who are Orion, Riri, and Hourman — and what do they do overnight?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            Three specialised agents execute your assigned work while you sleep, delivering completed outputs each morning.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1.75rem',
            }}
          >
            MEOK&apos;s Work OS runs three specialised overnight agents. You assign tasks before you
            finish work; they execute while you sleep. Every morning you receive a structured brief
            with completed outputs, flagged blockers, and a prioritised task list.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {agentCards.map((agent) => (
              <div
                key={agent.name}
                style={{
                  backgroundColor: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                }}
              >
                <div style={{ marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 800,
                      color: '#c9a84c',
                    }}
                  >
                    {agent.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(245,240,232,0.5)',
                      marginLeft: '0.625rem',
                      fontWeight: 500,
                    }}
                  >
                    {agent.role}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    color: 'rgba(245,240,232,0.75)',
                    marginBottom: '1rem',
                  }}
                >
                  {agent.description}
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                  {agent.examples.map((ex) => (
                    <li
                      key={ex}
                      style={{
                        fontSize: '0.825rem',
                        color: 'rgba(245,240,232,0.6)',
                        paddingLeft: '1.25rem',
                        position: 'relative',
                        marginBottom: '0.375rem',
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: '#c9a84c',
                        }}
                      >
                        ›
                      </span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3 — HMRC ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            How does MEOK help UK sole traders and limited companies with HMRC filing?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            MEOK stores your tax year structure, key deadlines, and expense categories in sovereign memory — surfacing them proactively rather than waiting to be asked.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1rem',
            }}
          >
            MEOK stores your business context in a sovereign memory vault — including your tax year
            structure, income sources, recurring expenses, and key HMRC and Companies House deadlines.
            Unlike a generic AI tool, it does not need you to explain Self Assessment every January or
            remind it when your confirmation statement is due.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1.25rem',
            }}
          >
            Orion can research current allowable expense rules for your sector, surface the latest
            HMRC guidance on Making Tax Digital, and draft a categorised expense summary from your
            notes. Hourman surfaces upcoming deadlines — 31 January Self Assessment, 31 July payment
            on account, 9-month Corporation Tax deadline for limited companies — automatically in your
            morning brief, weeks before they become urgent.
          </p>
          <div
            style={{
              backgroundColor: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderLeft: '3px solid #c9a84c',
              borderRadius: '0 0.5rem 0.5rem 0',
              padding: '1.25rem 1.5rem',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.8)',
                fontStyle: 'italic',
              }}
            >
              MEOK is not an accountant and does not replace one. But it is the research layer,
              the deadline tracker, and the first-draft engine that makes conversations with your
              accountant far more productive — and less expensive.
            </p>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            Old stack vs MEOK: what does the comparison actually look like?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            MEOK replaces three separate subscriptions totalling £45–£59/month with a single sovereign platform at £12/month.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1.5rem',
            }}
          >
            The table below compares the typical three-tool small business stack against MEOK across
            the capabilities that matter most to UK sole traders and limited company directors.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.875rem',
              }}
            >
              <thead>
                <tr>
                  {['Capability', 'Old Stack', 'MEOK Work OS'].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        textAlign: i === 0 ? 'left' : 'center',
                        padding: '0.75rem 1rem',
                        backgroundColor: 'rgba(201,168,76,0.08)',
                        borderBottom: '2px solid rgba(201,168,76,0.3)',
                        color: '#c9a84c',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stackRows.map((row, idx) => (
                  <tr
                    key={row.capability}
                    style={{
                      backgroundColor:
                        idx % 2 === 0
                          ? 'rgba(245,240,232,0.02)'
                          : 'transparent',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.07)',
                        color: '#f5f0e8',
                        fontWeight: 600,
                      }}
                    >
                      {row.capability}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.07)',
                        color: 'rgba(245,240,232,0.5)',
                        textAlign: 'center',
                      }}
                    >
                      {row.oldStack}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.07)',
                        color: row.meokWin ? '#c9a84c' : 'rgba(245,240,232,0.55)',
                        fontWeight: row.meokWin ? 600 : 400,
                        textAlign: 'center',
                      }}
                    >
                      {row.meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 4 — Privacy ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            Does MEOK protect small business data better than Microsoft Copilot?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            MEOK's sovereign vault means your client data stays encrypted under your control — never used to train any AI model.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1rem',
            }}
          >
            Microsoft Copilot operates on data stored inside the Microsoft 365 ecosystem — which means
            your client emails, documents, and Teams conversations are processed by a hyperscale cloud
            AI. For most enterprise customers this is acceptable. For a small business handling
            commercially sensitive client data, it is worth understanding exactly what telemetry is
            collected and how it may be used.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1rem',
            }}
          >
            MEOK is built on a sovereign architecture. Your memory vault is encrypted and controlled
            by you. No data is used to train MEOK or any third-party model. As a UK business acting
            as a data controller under UK GDPR, this means you can give clients a clean answer about
            where their information goes — and that answer is: nowhere outside your vault.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
            }}
          >
            This matters especially for professional services — consultants, designers, coaches, and
            advisers who routinely receive commercially confidential client information and need to
            demonstrate appropriate data handling.
          </p>
        </section>

        {/* ── Pricing Cards ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            How much does MEOK cost compared to the tools it replaces?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            MEOK Sovereign at £12/month saves the average small business over £400 a year versus the three-tool stack.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK&apos;s Sovereign tier is £12 per month. The comparable stack — Notion Plus at £8/month,
            Microsoft Copilot at £25/month, and Motion or Reclaim at £12–£19/month — costs £45–£52
            per month with no data sovereignty and no overnight agent capability.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {pricingCards.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: item.gold
                    ? 'rgba(201,168,76,0.1)'
                    : 'rgba(245,240,232,0.03)',
                  border: `1px solid ${item.gold ? 'rgba(201,168,76,0.4)' : 'rgba(245,240,232,0.1)'}`,
                  borderRadius: '0.625rem',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    margin: '0 0 0.375rem',
                    fontSize: '0.8rem',
                    color: item.gold ? '#c9a84c' : 'rgba(245,240,232,0.55)',
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    margin: '0 0 0.25rem',
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    color: item.gold ? '#c9a84c' : '#f5f0e8',
                  }}
                >
                  {item.price}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.75rem',
                    color: 'rgba(245,240,232,0.45)',
                  }}
                >
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
            }}
          >
            For a small business with tight margins, consolidating to a single sovereign platform is
            not just a productivity choice — it is a straightforward cost reduction. The average saving
            versus the three-tool stack is over £400 per year, with substantially more capability than
            any individual tool in that stack.
          </p>
        </section>

        {/* ── Workday Timeline ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What does a real small business workday look like with MEOK?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.55)',
              marginBottom: '0.625rem',
              fontStyle: 'italic',
            }}
          >
            A UK freelance management consultant running as a limited company: one full day with Orion, Riri, and Hourman.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.85)',
              marginBottom: '1.25rem',
            }}
          >
            Here is a concrete example. A UK freelance management consultant, running as a limited
            company, uses MEOK across a single day:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            {workdayTimeline.map((item) => (
              <div
                key={item.time}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '3.75rem',
                    paddingTop: '0.875rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#c9a84c',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {item.time}
                </div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(245,240,232,0.03)',
                    border: '1px solid rgba(245,240,232,0.08)',
                    borderRadius: '0.5rem',
                    padding: '0.875rem 1rem',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 0.25rem',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: '#f5f0e8',
                    }}
                  >
                    {item.event}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      color: 'rgba(245,240,232,0.6)',
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '1.5rem',
              lineHeight: 1.3,
            }}
          >
            Frequently asked questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqJsonLd.mainEntity.map((item) => (
              <div
                key={item.name}
                style={{
                  backgroundColor: 'rgba(245,240,232,0.025)',
                  border: '1px solid rgba(245,240,232,0.09)',
                  borderRadius: '0.625rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    marginBottom: '0.625rem',
                    lineHeight: 1.4,
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'rgba(245,240,232,0.65)',
                  }}
                >
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            backgroundColor: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '1rem',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '0.75rem',
            }}
          >
            MEOK Work OS
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              marginBottom: '0.875rem',
              lineHeight: 1.25,
            }}
          >
            Replace your three-tool stack for £12/month
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              color: 'rgba(245,240,232,0.7)',
              maxWidth: '36rem',
              margin: '0 auto 1.75rem',
            }}
          >
            Orion, Riri, and Hourman work while you sleep. Sovereign memory keeps your context safe.
            HMRC deadlines, client history, and overnight outputs — all in one place.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/signup"
              style={{
                backgroundColor: '#c9a84c',
                color: '#0d0c18',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                letterSpacing: '0.03em',
                display: 'inline-block',
              }}
            >
              Start free — no card required
            </Link>
            <Link
              href="/work-os"
              style={{
                backgroundColor: 'transparent',
                color: '#c9a84c',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(201,168,76,0.4)',
                letterSpacing: '0.03em',
                display: 'inline-block',
              }}
            >
              How the Work OS works
            </Link>
          </div>
        </section>

        {/* ── Related posts ── */}
        <section style={{ marginBottom: '3rem' }}>
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
              marginBottom: '1.25rem',
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
            }}
          >
            {relatedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  backgroundColor: 'rgba(245,240,232,0.02)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '0.625rem',
                  padding: '1.125rem',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#c9a84c',
                    display: 'block',
                    marginBottom: '0.375rem',
                  }}
                >
                  {post.tag}
                </span>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#f5f0e8',
                    lineHeight: 1.45,
                    display: 'block',
                  }}
                >
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid rgba(201,168,76,0.12)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              color: '#c9a84c',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: '1.125rem',
              letterSpacing: '0.06em',
              display: 'block',
              marginBottom: '0.625rem',
            }}
          >
            MEOK
          </Link>
          <p
            style={{
              fontSize: '0.8rem',
              color: 'rgba(245,240,232,0.35)',
              margin: '0 0 1rem',
            }}
          >
            Sovereign AI for people who think deeply.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '1.25rem',
            }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(245,240,232,0.45)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p
            style={{
              fontSize: '0.75rem',
              color: 'rgba(245,240,232,0.2)',
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved. Registered in
            England &amp; Wales.
          </p>
        </div>
      </div>
    </div>
  );
}
