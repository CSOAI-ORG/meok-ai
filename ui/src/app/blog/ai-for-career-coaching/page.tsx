import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Career Coaching: How MEOK Helps You Land the Job, Change Career, and Own Your Path | MEOK AI LABS',
  description:
    'AI career coaching for job seekers, career changers, and professionals in the UK. MEOK\'s Scholar archetype helps with CV writing, interview prep, goal-setting, and career pivots — with a companion that remembers your whole journey.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-career-coaching' },
  openGraph: {
    title: 'AI Career Coaching: How MEOK Helps You Land the Job, Change Career, and Own Your Path',
    description:
      'AI career coaching for job seekers and career changers. CV writing, interview prep, goal-setting, and career pivots — with an AI that remembers your whole journey.',
    type: 'article',
    publishedTime: '2026-03-24T00:00:00Z',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-career-coaching',
    siteName: 'MEOK AI LABS',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Career+Coaching&desc=Land+the+job%2C+change+career%2C+own+your+path',
        width: 1200,
        height: 630,
        alt: 'AI Career Coaching with MEOK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Career Coaching: How MEOK Helps You Land the Job and Change Career',
    description:
      'CV writing, interview prep, career pivots, and goal-setting — with an AI career coach that remembers where you started.',
  },
}

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI Career Coaching: How MEOK Helps You Land the Job, Change Career, and Own Your Path',
  description:
    'How MEOK\'s Scholar archetype serves job seekers and career changers with CV writing, interview preparation, career pivot planning, goal-setting, and persistent memory that tracks your whole professional journey.',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman',
    url: 'https://meok.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  datePublished: '2026-03-24T00:00:00Z',
  dateModified: '2026-03-24T00:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-career-coaching',
  },
  keywords: [
    'AI career coach',
    'AI for job search',
    'AI CV writer',
    'career coaching AI',
    'AI interview prep',
    'career pivot AI',
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI career coach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI career coach is an AI system that helps you with job searching, CV writing, interview preparation, and career planning. Unlike a one-off chatbot interaction, a real AI career coach remembers your professional history, tracks your applications, and evolves its guidance as your situation changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI write my CV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Scholar archetype can draft, review, and refine your CV — drawing on your stored career history, achievements, and the specific role you\'re targeting. The Orion research agent can also pull live intelligence on the company and tailor your CV accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with interview preparation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK runs mock interviews based on the actual role and company you\'re targeting. It asks role-specific questions, analyses your answers using the STAR method, identifies filler language and hesitation patterns, and tracks your improvement across multiple practice sessions — because it remembers every session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK useful for career pivots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Career pivots require mapping transferable skills, identifying skill gaps, and building a credible narrative. MEOK\'s Scholar archetype does all three — and because it stores your professional history, it can surface strengths you have forgotten or undervalued.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free for career coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Explorer tier is free and includes 50 messages per day with permanent Sovereign Memory — enough for daily job search support, CV drafts, and interview practice. Sovereign (£12/month) unlocks unlimited sessions, deeper goal tracking, and the full Orion research agent for company intelligence.',
      },
    },
  ],
}

const SCHOLAR_FEATURES = [
  {
    icon: '◎',
    title: 'CV Drafting & Refinement',
    description:
      'Scholar draws on your stored career history to draft CVs tailored to specific roles. Tell it the job title and company — it writes, you refine.',
  },
  {
    icon: '🎯',
    title: 'Mock Interview Coaching',
    description:
      'Practice interviews that mirror the real thing. Scholar asks role-specific questions, scores your STAR answers, and flags hesitation patterns.',
  },
  {
    icon: '🗺',
    title: 'Career Pivot Planning',
    description:
      'Map your transferable skills, identify gaps, and build a credible narrative for making the jump — without losing what you have built.',
  },
  {
    icon: '📈',
    title: 'Goal Architecture',
    description:
      'Set 30-, 60-, and 90-day career goals. Scholar tracks them across sessions, nudges you when you drift, and celebrates when you land.',
  },
  {
    icon: '🔍',
    title: 'Job Market Intelligence',
    description:
      'Paired with the Orion research agent, MEOK pulls live data on hiring trends, company culture, and salary benchmarks for your target role.',
  },
  {
    icon: '📝',
    title: 'Cover Letter & LinkedIn',
    description:
      'Beyond the CV — Scholar crafts cover letters, optimises your LinkedIn headline, and helps you articulate your value in writing.',
  },
]

const COMPARISON_ROWS = [
  {
    feature: 'Remembers your full career history',
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: 'Available at midnight before an interview',
    human: false,
    genericAI: true,
    meok: true,
  },
  {
    feature: 'Tailors CV to specific role and company',
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: 'Tracks application pipeline over weeks',
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: 'Runs scored mock interviews',
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: 'Costs under £15/month',
    human: false,
    genericAI: true,
    meok: true,
  },
  {
    feature: 'Your data never trains other models',
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: 'Spots patterns across months of sessions',
    human: true,
    genericAI: false,
    meok: true,
  },
  {
    feature: 'Industry contacts and referrals',
    human: true,
    genericAI: false,
    meok: false,
  },
]

const INTERVIEW_STEPS = [
  {
    step: '01',
    title: 'Share the job description',
    detail:
      'Paste the full job description into MEOK. Scholar extracts the key competencies, likely interview questions, and any red flags in the role language.',
  },
  {
    step: '02',
    title: 'Run a role-specific mock interview',
    detail:
      'Scholar asks questions drawn from that specific role — not generic questions. For a product manager role, expect product sense, prioritisation, and stakeholder management questions.',
  },
  {
    step: '03',
    title: 'Review your STAR answers',
    detail:
      'After each answer, Scholar scores your Situation, Task, Action, and Result clarity. It flags where you\'re vague, where you\'re burying the impact, and where you\'re over-explaining.',
  },
  {
    step: '04',
    title: 'Identify language patterns',
    detail:
      'Filler language ("um", "sort of", "I think maybe") undermines confidence even in written responses. Scholar tracks these across your sessions.',
  },
  {
    step: '05',
    title: 'Research the company with Orion',
    detail:
      'The Orion agent pulls live intelligence on the company — recent news, leadership changes, product roadmap signals. Arrive knowing things other candidates don\'t.',
  },
  {
    step: '06',
    title: 'Prepare your questions',
    detail:
      'The questions you ask at the end of an interview matter. Scholar helps you craft questions that demonstrate strategic thinking, not just curiosity.',
  },
]

const PIVOT_STEPS = [
  {
    title: 'Audit your transferable skills',
    body: 'Most people underestimate how much of their current role transfers. A secondary school teacher moving into L&D brings curriculum design, assessment, stakeholder management, and performance coaching — skills that take years to develop in corporate settings.',
  },
  {
    title: 'Identify the credibility gap',
    body: 'The gap between where you are and where you want to be is rarely as wide as it feels. Scholar maps the specific qualifications, experiences, or portfolio items you need to close it — and sequences them in a realistic timeline.',
  },
  {
    title: 'Build the bridge narrative',
    body: 'Recruiters are risk-averse. Your cover letter and interview answers need to tell a coherent story — not "I\'m leaving X," but "everything I\'ve done has been leading to this." Scholar helps you construct that narrative from your actual history.',
  },
  {
    title: 'Target adjacent roles first',
    body: 'Direct pivots are hard. Adjacent pivots — roles that combine your current skills with your target domain — are dramatically easier to land. Scholar maps these bridging roles based on your background.',
  },
  {
    title: 'Track momentum across months',
    body: 'Career pivots take 6–18 months. Most people lose motivation at month three when nothing has happened yet. Because MEOK remembers everything, it can remind you how far you\'ve come and recalibrate your plan when circumstances change.',
  },
]

export default function AICareerCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>

        {/* Nav */}
        <nav
          style={{
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.04em' }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: 'rgba(245,240,232,0.5)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.875rem',
            }}
          >
            ← All Articles
          </Link>
        </nav>

        {/* Hero */}
        <header
          style={{
            maxWidth: 780,
            margin: '0 auto',
            padding: '4.5rem 2rem 3rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: 20,
              padding: '0.3rem 0.9rem',
              marginBottom: '1.75rem',
            }}
          >
            <span style={{ color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              CAREER COACHING
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: '1.5rem',
              color: '#f5f0e8',
              letterSpacing: '-0.02em',
            }}
          >
            AI Career Coaching: How MEOK Helps You Land the Job, Change Career, and Own Your Path
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(245,240,232,0.65)',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}
          >
            The UK job market in 2026 is the most competitive in a generation. Average time-to-hire
            has hit 47 days. Roles at mid-level attract 300+ applications. And for the first time,
            candidates are competing not just against other humans — but against AI-polished CVs,
            AI-coached interview answers, and AI-researched candidates who arrive knowing things
            you don&rsquo;t.
          </p>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(245,240,232,0.65)',
              lineHeight: 1.8,
              marginBottom: '2.25rem',
            }}
          >
            The anxiety is real. But so is the opportunity. Because the same AI technology reshaping
            hiring can work for you — if you use it deliberately. This guide explains exactly how
            MEOK&rsquo;s Scholar archetype helps with job searching, interview preparation, CV writing,
            career pivots, and long-term goal-setting. Not as a gimmick. As a genuine career
            advantage.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.8rem' }}>24 March 2026</span>
            <span style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.8rem' }}>14 min read</span>
            <span style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.8rem' }}>
              By Nicholas Templeman &mdash; MEOK AI LABS
            </span>
          </div>
        </header>

        {/* Body */}
        <article style={{ maxWidth: 780, margin: '0 auto', padding: '0 2rem 5rem' }}>

          {/* ── What is an AI career coach ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              What is an AI career coach?
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              An AI career coach is an AI system that helps you prepare for job applications,
              improve your CV, practise for interviews, plan career transitions, and set
              professional goals — continuously, not just once. Unlike a static tool or a
              one-off session, a genuine AI career coach builds a model of your professional
              history over time and uses that context to give you better, more personalised
              guidance with every conversation.
            </p>
            <div
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 10,
                padding: '1.25rem 1.5rem',
                marginBottom: '1rem',
              }}
            >
              <p
                style={{
                  color: '#c9a84c',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}
              >
                ATOMIC ANSWER
              </p>
              <p style={{ color: 'rgba(245,240,232,0.85)', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
                An AI career coach is an AI system that helps you find jobs, write CVs, prepare
                for interviews, and plan career changes — with memory across sessions so it knows
                your history, tracks your progress, and improves its guidance as your situation
                evolves. It is available 24/7 and costs a fraction of a human coach.
              </p>
            </div>
            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85 }}>
              The distinction that matters is memory. A chatbot that answers your CV question
              is not a career coach. A career coach is someone who remembers that you applied
              for six roles last month, knows you got to final-round interviews twice, and
              understands why the pattern of near-misses matters. That requires persistent,
              structured memory — not just a clever language model.
            </p>
          </section>

          {/* ── How does MEOK help ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              How does MEOK help with career coaching?
            </h2>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              MEOK is built around archetypes — distinct AI personalities, each optimised for
              a different part of your life. The Scholar archetype is MEOK&rsquo;s intellectual and
              professional mode: precise, direct, research-oriented, and deeply invested in your
              growth. When you activate Scholar, you get a career companion that thinks like a
              strategist, prepares you like a coach, and tracks your progress like a trusted mentor.
            </p>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '2rem' }}>
              The difference between Scholar and a generic AI tool is Sovereign Memory. Every
              role you apply for, every interview you practise, every goal you set — it is all
              stored permanently and encrypted. Scholar does not forget you between sessions.
              When you return a fortnight later, it remembers the company you were researching,
              the answer you were struggling to refine, and the decision you had not yet made.
              That continuity is what transforms AI assistance into genuine coaching.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {SCHOLAR_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    borderRadius: 10,
                    padding: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{feat.icon}</span>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f5f0e8', margin: 0 }}>
                      {feat.title}
                    </h3>
                  </div>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginTop: '2rem' }}>
              Scholar works best when it has context. The more you share — your current role,
              your target industry, your timeline, your fears about the process — the more
              precisely it can help. Because it remembers everything, you only have to tell it
              once. From there, every conversation builds on the last.
            </p>
          </section>

          {/* ── AI vs human career coaching ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              AI career coaching vs human career coaching: what&rsquo;s the difference?
            </h2>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Human career coaches bring things AI cannot replicate: genuine industry
              relationships, the ability to read emotional subtext in real time, and the weight
              of a real relationship that makes you accountable. A great human coach costs
              £100–300 per session. Many people cannot afford to see one regularly enough to
              make a difference.
            </p>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '2rem' }}>
              AI career coaching does not replace that. It fills the space between — the daily
              preparation, the late-night anxiety spiral before an interview, the weeks of
              application tracking that a human coach does not have time to support. The
              comparison below reflects what each option genuinely delivers.
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem 1rem',
                        color: 'rgba(245,240,232,0.4)',
                        fontWeight: 600,
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.08em',
                      }}
                    >
                      FEATURE
                    </th>
                    {['Human Coach', 'Generic AI', 'MEOK Scholar'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '0.75rem 1rem',
                          color: h === 'MEOK Scholar' ? '#c9a84c' : 'rgba(245,240,232,0.4)',
                          fontWeight: 700,
                          borderBottom: '1px solid rgba(255,255,255,0.07)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.08em',
                          textAlign: 'center',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                      }}
                    >
                      <td
                        style={{
                          padding: '0.75rem 1rem',
                          color: 'rgba(245,240,232,0.75)',
                          borderBottom: '1px solid rgba(255,255,255,0.04)',
                        }}
                      >
                        {row.feature}
                      </td>
                      {[row.human, row.genericAI, row.meok].map((val, idx) => (
                        <td
                          key={idx}
                          style={{
                            padding: '0.75rem 1rem',
                            textAlign: 'center',
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                            color: val ? '#c9a84c' : 'rgba(245,240,232,0.18)',
                            fontSize: '1rem',
                            fontWeight: 700,
                          }}
                        >
                          {val ? '✓' : '✗'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85 }}>
              The most effective approach combines both. Use MEOK for daily preparation,
              application tracking, and late-night interview panic. Use a human coach for
              senior-level career transitions, negotiation strategy, and the conversations
              that require a human to truly hear you.
            </p>
          </section>

          {/* ── How to prepare for interview with AI ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              How to prepare for a job interview with AI
            </h2>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Candidates who prepare systematically are significantly more likely to progress to
              final rounds. A 2025 LinkedIn Talent Insights study found that structured interview
              preparation — practising answers, researching the company, preparing questions —
              increased offer rates by 34%. AI makes that preparation faster, more targeted, and
              available at any hour.
            </p>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Here is the six-step process MEOK uses to prepare you for any interview:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {INTERVIEW_STEPS.map((s) => (
                <div
                  key={s.step}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(201,168,76,0.1)',
                    borderRadius: 10,
                    padding: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      background: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c9a84c',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '0.4rem', marginTop: 0 }}>
                      {s.title}
                    </h3>
                    <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                      {s.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginTop: '2rem' }}>
              Because MEOK remembers every practice session, it can track your improvement.
              After three sessions, it will show you which question types you still struggle
              with and which you have clearly mastered. That pattern recognition is what
              separates a coaching relationship from a one-off preparation tool.
            </p>

            <div
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: 10,
                padding: '1.25rem 1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <p style={{ color: '#c9a84c', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                PRACTICAL TIP
              </p>
              <p style={{ color: 'rgba(245,240,232,0.8)', lineHeight: 1.75, margin: 0, fontSize: '0.9rem' }}>
                Run your first mock interview without any preparation. Let Scholar baseline where
                you actually are, not where you think you are. Most people discover they bury
                the result in their answers and over-explain the situation. Knowing that early
                gives you a clear target.
              </p>
            </div>
          </section>

          {/* ── Can AI write your CV ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              Can AI write your CV?
            </h2>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Yes — but the quality depends entirely on the context it has. A generic AI tool
              given a job title and three bullet points will produce a generic CV. MEOK Scholar,
              given your stored career history, specific achievements, target role, and the
              company you are applying to, produces something genuinely useful.
            </p>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              The Scholar archetype approaches CV writing in three stages:
            </p>

            <ol style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#f5f0e8' }}>Achievement extraction.</strong>{' '}
                Most people write CVs that describe responsibilities, not achievements. Scholar
                interrogates your experience to surface quantifiable results — revenue generated,
                costs reduced, teams led, projects delivered. Numbers matter.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#f5f0e8' }}>Role alignment.</strong>{' '}
                Every CV should be tailored to the role it is targeting. Scholar compares your
                experience against the job description and restructures your CV to emphasise what
                that specific employer values most. ATS-friendly formatting included.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: '#f5f0e8' }}>Company intelligence via Orion.</strong>{' '}
                The Orion research agent can pull live information on the company — their recent
                hires, current challenges, stated values, and competitive positioning. Scholar
                uses this to surface the most relevant aspects of your background and phrase them
                in language that resonates with that employer.
              </li>
            </ol>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Because Scholar stores your career history, you only build your CV foundation once.
              After that, every application is a tailored variant — not a rewrite from scratch.
              Over a job search spanning months, this compounds into a significant time and
              quality advantage.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1.5rem',
              }}
            >
              <div
                style={{
                  background: 'rgba(34,197,94,0.05)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  borderRadius: 10,
                  padding: '1.25rem',
                }}
              >
                <p style={{ color: '#22c55e', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                  MEOK CV ADVANTAGE
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Remembers every role you have ever described',
                    'Tailors to specific job descriptions in seconds',
                    'ATS keyword optimisation built in',
                    'Tracks which CV versions got responses',
                    'Covers letters drafted in the same session',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.5 }}>
                      <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: 'rgba(201,168,76,0.05)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: 10,
                  padding: '1.25rem',
                }}
              >
                <p style={{ color: '#c9a84c', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
                  WHAT AI CANNOT DO
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Invent achievements you do not have',
                    'Replace insider referrals or personal networks',
                    'Predict exactly what a specific hiring manager values',
                    'Guarantee responses — the market decides',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.5 }}>
                      <span style={{ color: '#c9a84c', flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Career pivot ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              How to make a career pivot using AI
            </h2>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Career pivots are the most emotionally demanding part of a professional life. You
              are asking the market to trust you in a domain where you lack a track record.
              You are asking yourself to abandon an identity you have built over years. And you
              are doing it in a job market where recruiters default to the obvious candidate.
            </p>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              In 2026, 1 in 4 UK workers is considering a career change. The most common barrier
              is not capability — it is narrative. People do not know how to tell their story in
              a way that makes a pivot feel inevitable rather than random. That is precisely where
              Scholar adds value.
            </p>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Here is how Scholar structures a career pivot across five phases:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PIVOT_STEPS.map((step, i) => (
                <div
                  key={step.title}
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    padding: '1.25rem 1.5rem',
                    borderLeft: '3px solid rgba(201,168,76,0.4)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        color: '#c9a84c',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                      }}
                    >
                      PHASE {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f0e8', margin: 0 }}>
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginTop: '2rem' }}>
              The power of persistent memory shows most clearly in career pivots. When you return
              to Scholar three months into your transition, it does not ask you to re-explain your
              situation. It says: &ldquo;You identified three target roles in January. You have applied
              for one. What happened with the other two?&rdquo; That kind of accountability is what
              keeps long transitions from stalling.
            </p>
          </section>

          {/* ── Is MEOK free ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              Is MEOK free for career coaching?
            </h2>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
              Yes. MEOK&rsquo;s Explorer tier is free and includes 50 messages per day with permanent
              Sovereign Memory. For most job seekers — especially those early in a search or
              preparing for one or two interviews — the free tier is enough to get meaningful
              value from Scholar.
            </p>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Here is what each tier includes for career coaching:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                {
                  name: 'Explorer',
                  price: 'Free',
                  highlight: false,
                  features: [
                    '50 messages per day',
                    'Permanent Sovereign Memory',
                    'Scholar archetype',
                    'CV drafting and review',
                    'Mock interview practice',
                    'Goal-setting and tracking',
                  ],
                },
                {
                  name: 'Sovereign',
                  price: '£12/month',
                  highlight: true,
                  features: [
                    'Unlimited daily messages',
                    'All Explorer features',
                    'Orion research agent',
                    'Company intelligence',
                    'Deep application tracking',
                    'Long-arc career planning',
                    'Priority response times',
                  ],
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: tier.highlight
                      ? 'rgba(201,168,76,0.07)'
                      : 'rgba(255,255,255,0.025)',
                    border: tier.highlight
                      ? '1px solid rgba(201,168,76,0.3)'
                      : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: tier.highlight ? '#c9a84c' : '#f5f0e8',
                      }}
                    >
                      {tier.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: tier.highlight ? '#c9a84c' : 'rgba(245,240,232,0.5)',
                      }}
                    >
                      {tier.price}
                    </span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: 'flex',
                          gap: '0.5rem',
                          marginBottom: '0.45rem',
                          fontSize: '0.85rem',
                          color: 'rgba(245,240,232,0.65)',
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: tier.highlight ? '#c9a84c' : 'rgba(245,240,232,0.35)', flexShrink: 0 }}>
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85 }}>
              If you are in active job search mode — applying to multiple roles per week,
              running regular mock interviews, and tracking a pipeline — the Sovereign tier
              at £12/month pays for itself with a single avoided recruiter fee or a salary
              negotiation improved by one percentage point.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0e8',
                marginBottom: '1.5rem',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              Frequently asked questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {jsonLdFaq.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    padding: '1.35rem 1.5rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#f5f0e8',
                      marginBottom: '0.6rem',
                      marginTop: 0,
                    }}
                  >
                    {faq.name}
                  </h3>
                  <p
                    style={{
                      color: 'rgba(245,240,232,0.65)',
                      lineHeight: 1.75,
                      margin: 0,
                      fontSize: '0.9rem',
                    }}
                  >
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04))',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: 16,
              padding: '2.75rem 2.5rem',
              textAlign: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <p
              style={{
                color: '#c9a84c',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                marginBottom: '1rem',
              }}
            >
              START YOUR CAREER COACHING JOURNEY
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                fontWeight: 800,
                color: '#f5f0e8',
                marginBottom: '0.75rem',
                lineHeight: 1.25,
              }}
            >
              The job market rewards those who prepare.
              <br />
              MEOK makes preparation effortless.
            </h2>
            <p
              style={{
                color: 'rgba(245,240,232,0.6)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: 500,
                margin: '0 auto 2rem',
                fontSize: '0.95rem',
              }}
            >
              Free to start. Permanent Sovereign Memory from day one. An AI career coach
              that remembers every role you apply for, every interview you practise, and
              every goal you set — without you ever having to repeat yourself.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/birth"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c, #a8872e)',
                  color: '#0d0c18',
                  padding: '0.9rem 2.25rem',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  letterSpacing: '0.02em',
                }}
              >
                Start Free — No Card Required →
              </Link>
              <Link
                href="/pricing"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(245,240,232,0.8)',
                  padding: '0.9rem 2.25rem',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                View Pricing
              </Link>
            </div>
          </section>

          {/* ── Related Reading ── */}
          <section>
            <p
              style={{
                color: 'rgba(245,240,232,0.35)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              RELATED READING
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {[
                { href: '/blog/ai-life-coach', label: 'AI Life Coach Guide' },
                { href: '/blog/ai-for-entrepreneurs', label: 'AI for Entrepreneurs' },
                { href: '/blog/ai-for-burnout', label: 'AI for Burnout Recovery' },
                { href: '/blog/ai-for-students', label: 'AI for Students' },
                { href: '/blog/archetypes-guide', label: 'MEOK Archetypes Guide' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(201,168,76,0.1)',
                    borderRadius: 8,
                    padding: '0.9rem 1rem',
                    textDecoration: 'none',
                    color: 'rgba(201,168,76,0.85)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
