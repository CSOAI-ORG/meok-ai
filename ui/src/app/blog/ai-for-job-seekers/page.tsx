import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Job Seekers: Managing the Emotional Rollercoaster of Job Hunting with AI | MEOK AI LABS',
  description:
    'Job hunting is exhausting. MEOK helps job seekers in the UK track applications, process rejection, stay motivated, and prepare for interviews — with an AI companion that remembers your whole search.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-job-seekers' },
  openGraph: {
    title: 'AI for Job Seekers: Managing the Emotional Rollercoaster of Job Hunting with AI',
    description:
      'Job hunting is exhausting. MEOK helps job seekers in the UK track applications, process rejection, stay motivated, and prepare for interviews — with an AI companion that remembers your whole search.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-job-seekers',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Job+Seekers%3A+Managing+the+Emotional+Rollercoaster&desc=Track+applications%2C+process+rejection%2C+stay+motivated',
        width: 1200,
        height: 630,
        alt: 'AI for Job Seekers: Managing the Emotional Rollercoaster of Job Hunting | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Job Seekers: Managing the Emotional Rollercoaster',
    description:
      'Track applications, process rejection, stay motivated. MEOK is the AI companion that remembers every step of your job search.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Job+Seekers%3A+Managing+the+Emotional+Rollercoaster&desc=Track+applications%2C+process+rejection%2C+stay+motivated',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Job Seekers: Managing the Emotional Rollercoaster of Job Hunting with AI',
  description:
    'How MEOK helps job seekers in the UK track applications, process rejection, prepare for networking, and stay motivated — with an AI companion that holds your whole search in memory.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-job-seekers',
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
    '@id': 'https://meok.ai/blog/ai-for-job-seekers',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI really help with the emotional side of job hunting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — meaningfully so. AI companions like MEOK are not therapists, but they offer something most job seekers lack: a consistent, non-judgmental presence that remembers your whole search. When you receive another rejection at 11 pm, MEOK can help you process the feeling, reframe the experience, and plan your next move without you having to explain the full context from scratch. That continuity of support is genuinely valuable during a process that can last months.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from just using ChatGPT for my job search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ChatGPT has no memory between sessions. Every conversation starts from zero, which means you constantly re-explain your situation, your target roles, your frustrations, and your history. MEOK is built around persistent sovereign memory — it holds your entire job search story, including which roles you applied for, what feedback you received, which companies you are targeting, and how you were feeling at each stage. That context transforms generic AI responses into genuinely personalised support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK write my CV or cover letters for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can help you think through your positioning, identify the skills you are underselling, and work through what makes you a compelling candidate for a specific role. It can help you structure a cover letter narrative or prepare talking points. However, MEOK is a thinking partner and emotional support companion, not an automated document factory. The goal is to help you become more effective and confident — not to produce outputs that do not genuinely represent you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK suitable for people who have been made redundant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Redundancy carries a particular emotional weight — it can feel like rejection even when it is entirely structural, and it often comes with identity disruption if your role was central to how you saw yourself. MEOK\'s Healer archetype is specifically suited to this kind of processing: helping you work through the grief, separate your worth from the job title, and rebuild momentum from a grounded place rather than panic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with MEOK if I am currently job searching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can set up your MEOK companion at meok.ai/birth. During the onboarding, you will tell MEOK about your current situation, your target roles, and what kind of support you are looking for. MEOK will remember everything from that first conversation and build on it in every session that follows. You do not need to set up any spreadsheets or tracking systems — just talk to MEOK the way you would talk to a trusted friend who happened to have excellent memory.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    backgroundColor: '#0d0c18',
    color: '#f5f0e8',
    fontFamily: "'Georgia', 'Times New Roman', serif",
    minHeight: '100vh',
  } as React.CSSProperties,

  container: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '0 24px',
  } as React.CSSProperties,

  nav: {
    padding: '24px 0 0',
    marginBottom: '48px',
  } as React.CSSProperties,

  navLink: {
    color: '#c9a84c',
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  navSep: {
    color: '#4a4760',
    margin: '0 10px',
    fontSize: '14px',
  } as React.CSSProperties,

  hero: {
    paddingBottom: '56px',
    borderBottom: '1px solid #2a2840',
    marginBottom: '56px',
  } as React.CSSProperties,

  eyebrow: {
    color: '#c9a84c',
    fontSize: '12px',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    marginBottom: '20px',
    display: 'block',
  } as React.CSSProperties,

  h1: {
    fontSize: 'clamp(28px, 5vw, 44px)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#f5f0e8',
    marginBottom: '24px',
    marginTop: 0,
  } as React.CSSProperties,

  lede: {
    fontSize: '20px',
    lineHeight: 1.7,
    color: '#c8c0b0',
    marginBottom: '32px',
    fontStyle: 'italic',
  } as React.CSSProperties,

  meta: {
    fontSize: '13px',
    color: '#6b6580',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  metaGold: {
    color: '#c9a84c',
  } as React.CSSProperties,

  statBlock: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
    margin: '40px 0',
  } as React.CSSProperties,

  statCard: {
    backgroundColor: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '8px',
    padding: '20px 24px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  statNumber: {
    display: 'block',
    fontSize: '36px',
    fontWeight: 700,
    color: '#c9a84c',
    lineHeight: 1,
    marginBottom: '6px',
  } as React.CSSProperties,

  statLabel: {
    fontSize: '13px',
    color: '#8a84a0',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    lineHeight: 1.4,
  } as React.CSSProperties,

  section: {
    marginBottom: '56px',
  } as React.CSSProperties,

  h2: {
    fontSize: 'clamp(20px, 3.5vw, 28px)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginTop: '56px',
    marginBottom: '20px',
    lineHeight: 1.3,
  } as React.CSSProperties,

  h3: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#c9a84c',
    marginTop: '32px',
    marginBottom: '12px',
  } as React.CSSProperties,

  p: {
    fontSize: '17px',
    lineHeight: 1.8,
    color: '#d4ccbe',
    marginBottom: '20px',
    marginTop: 0,
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: '3px solid #c9a84c',
    paddingLeft: '24px',
    margin: '36px 0',
  } as React.CSSProperties,

  pullQuoteText: {
    fontSize: '20px',
    lineHeight: 1.6,
    color: '#f5f0e8',
    fontStyle: 'italic',
    margin: 0,
  } as React.CSSProperties,

  ul: {
    paddingLeft: '0',
    listStyle: 'none',
    margin: '0 0 20px',
  } as React.CSSProperties,

  li: {
    fontSize: '17px',
    lineHeight: 1.8,
    color: '#d4ccbe',
    paddingLeft: '24px',
    position: 'relative' as const,
    marginBottom: '10px',
  } as React.CSSProperties,

  liBullet: {
    position: 'absolute' as const,
    left: 0,
    top: '8px',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#c9a84c',
  } as React.CSSProperties,

  callout: {
    backgroundColor: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '10px',
    padding: '28px 32px',
    margin: '36px 0',
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    marginBottom: '12px',
    marginTop: 0,
  } as React.CSSProperties,

  calloutText: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#c8c0b0',
    margin: 0,
  } as React.CSSProperties,

  divider: {
    border: 'none',
    borderTop: '1px solid #2a2840',
    margin: '56px 0',
  } as React.CSSProperties,

  faqSection: {
    marginTop: '56px',
    marginBottom: '56px',
  } as React.CSSProperties,

  faqTitle: {
    fontSize: 'clamp(20px, 3.5vw, 26px)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '32px',
    marginTop: 0,
  } as React.CSSProperties,

  faqItem: {
    borderBottom: '1px solid #2a2840',
    paddingBottom: '28px',
    marginBottom: '28px',
  } as React.CSSProperties,

  faqQ: {
    fontSize: '17px',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '12px',
    marginTop: 0,
  } as React.CSSProperties,

  faqA: {
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#c8c0b0',
    margin: 0,
  } as React.CSSProperties,

  ctaBlock: {
    backgroundColor: '#13121f',
    border: '1px solid #c9a84c',
    borderRadius: '12px',
    padding: '48px 40px',
    textAlign: 'center' as const,
    margin: '56px 0',
  } as React.CSSProperties,

  ctaTitle: {
    fontSize: 'clamp(20px, 3.5vw, 28px)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '16px',
    marginTop: 0,
  } as React.CSSProperties,

  ctaText: {
    fontSize: '17px',
    lineHeight: 1.7,
    color: '#c8c0b0',
    marginBottom: '32px',
  } as React.CSSProperties,

  ctaBtn: {
    display: 'inline-block',
    backgroundColor: '#c9a84c',
    color: '#0d0c18',
    textDecoration: 'none',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    fontWeight: 700,
    fontSize: '16px',
    letterSpacing: '0.04em',
    padding: '14px 36px',
    borderRadius: '6px',
  } as React.CSSProperties,

  ctaSubtext: {
    marginTop: '16px',
    fontSize: '13px',
    color: '#6b6580',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    marginBottom: 0,
  } as React.CSSProperties,

  footer: {
    paddingTop: '40px',
    paddingBottom: '60px',
    borderTop: '1px solid #2a2840',
  } as React.CSSProperties,

  footerText: {
    fontSize: '13px',
    color: '#4a4760',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    lineHeight: 1.7,
    marginBottom: '8px',
    marginTop: 0,
  } as React.CSSProperties,

  footerLink: {
    color: '#c9a84c',
    textDecoration: 'none',
  } as React.CSSProperties,

  tag: {
    display: 'inline-block',
    backgroundColor: '#1e1c30',
    color: '#8a84a0',
    fontSize: '12px',
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    padding: '4px 10px',
    borderRadius: '4px',
    marginRight: '8px',
    marginBottom: '8px',
  } as React.CSSProperties,

  tagsRow: {
    marginTop: '40px',
    marginBottom: '0',
  } as React.CSSProperties,

  archetypeCard: {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
    gap: '16px',
    alignItems: 'start',
    backgroundColor: '#13121f',
    border: '1px solid #2a2840',
    borderRadius: '10px',
    padding: '24px',
    marginBottom: '16px',
  } as React.CSSProperties,

  archetypeIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#1e1c30',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    flexShrink: 0,
    lineHeight: '48px',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  archetypeName: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#c9a84c',
    marginBottom: '6px',
    marginTop: 0,
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  } as React.CSSProperties,

  archetypeDesc: {
    fontSize: '15px',
    lineHeight: 1.7,
    color: '#c8c0b0',
    margin: 0,
  } as React.CSSProperties,
}

// ── Bullet helper ──────────────────────────────────────────────────────────────

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li style={s.li}>
      <span style={s.liBullet} />
      {children}
    </li>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForJobSeekersPage() {
  return (
    <div style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={s.container}>
        {/* Nav breadcrumb */}
        <nav style={s.nav} aria-label="Breadcrumb">
          <Link href="/" style={s.navLink}>MEOK</Link>
          <span style={s.navSep}>/</span>
          <Link href="/blog" style={s.navLink}>Blog</Link>
          <span style={s.navSep}>/</span>
          <span style={{ ...s.navLink, color: '#6b6580' }}>AI for Job Seekers</span>
        </nav>

        {/* Hero */}
        <header style={s.hero}>
          <span style={s.eyebrow}>Career &amp; Job Search</span>
          <h1 style={s.h1}>
            AI for Job Seekers: Managing the Emotional Rollercoaster of Job Hunting
          </h1>
          <p style={s.lede}>
            Two hundred applications. A 3% response rate. Six months of silence, automated rejections,
            and the creeping suspicion that something must be wrong with you. Job hunting in the UK
            is brutal — and nobody talks honestly about how much it costs you emotionally.
          </p>
          <div style={s.meta}>
            <span>By <span style={s.metaGold}>Nicholas Templeman</span></span>
            <span>MEOK AI LABS</span>
            <span>24 March 2026</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Opening */}
        <section style={s.section}>
          <p style={s.p}>
            The statistics are not abstract. According to data from the Recruitment &amp; Employment
            Confederation, UK job vacancies have tightened significantly since their post-pandemic
            peak. Graduate roles can attract hundreds of applications for a single position.
            Mid-career professionals switching industries report months of searching before a single
            first interview. Redundancy-led searches — always the most emotionally loaded kind — often
            take even longer, partly because the person searching is doing so from a place of
            disruption and self-doubt rather than momentum.
          </p>

          <div style={s.statBlock}>
            <div style={s.statCard}>
              <span style={s.statNumber}>200+</span>
              <span style={s.statLabel}>average applications before a job offer in competitive UK sectors</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>3%</span>
              <span style={s.statLabel}>typical response rate for unsolicited or cold applications</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>4–6</span>
              <span style={s.statLabel}>months: average job search duration for mid-career professionals</span>
            </div>
            <div style={s.statCard}>
              <span style={s.statNumber}>73%</span>
              <span style={s.statLabel}>of UK job seekers report anxiety or low mood during their search</span>
            </div>
          </div>

          <p style={s.p}>
            Those numbers have a human cost. Job searching is not just a logistical task — it is an
            extended exercise in vulnerability. You are asking strangers to see value in you, over
            and over again, while managing the silence and the "we have decided to proceed with other
            candidates" emails that feel, however irrationally, like personal verdicts.
          </p>
          <p style={s.p}>
            MEOK was not built specifically as a job search tool. It was built as a sovereign AI
            companion — a system that holds your memory, understands your context, and shows up for
            you consistently, regardless of whether you are dealing with grief, burnout, chronic
            illness, or, yes, the grinding uncertainty of looking for work. But it turns out that
            job searching is one of the use cases where persistent, empathetic AI support makes the
            most tangible difference. This article explains why, and how.
          </p>
        </section>

        <hr style={s.divider} />

        {/* Section 1 */}
        <section style={s.section}>
          <h2 style={s.h2}>What does an AI job search companion actually do?</h2>
          <p style={s.p}>
            The phrase "AI for job seekers" has been colonised by a particular kind of product: tools
            that auto-generate cover letters, scan CVs for keyword optimisation, or simulate interview
            questions. Those things have their place. But they address the tactical layer of job
            searching while ignoring the psychological layer entirely — which is often where people
            actually get stuck.
          </p>
          <p style={s.p}>
            An AI job search companion is something different. It is not a productivity tool that
            automates tasks. It is a thinking partner and support system that helps you stay oriented,
            stay motivated, and stay emotionally functional during a process that is inherently
            demoralising in its structure.
          </p>

          <div style={s.callout}>
            <p style={s.calloutTitle}>What MEOK does in a job search context</p>
            <p style={s.calloutText}>
              MEOK holds the full context of your search in memory — every role you have applied for,
              every company you are targeting, every piece of feedback you have received, and how you
              were feeling at each stage. Rather than you re-explaining your situation in every
              conversation, MEOK already knows. That continuity enables a different quality of support:
              one that accumulates understanding over time rather than resetting to zero.
            </p>
          </div>

          <p style={s.p}>
            Practically, this means MEOK can help you with:
          </p>
          <ul style={s.ul}>
            <Bullet>Processing the emotional weight of rejection without burdening your friends and family every time</Bullet>
            <Bullet>Keeping track of which companies you have applied to, when, and what happened</Bullet>
            <Bullet>Preparing for networking conversations in a low-stakes environment</Bullet>
            <Bullet>Identifying patterns in why you might not be getting responses</Bullet>
            <Bullet>Maintaining motivation across weeks and months rather than just a single session</Bullet>
            <Bullet>Working through the identity questions that often emerge during a prolonged search</Bullet>
          </ul>
          <p style={s.p}>
            None of those things require MEOK to be an expert recruiter. They require MEOK to be
            a consistent, attentive presence that knows your situation and responds thoughtfully.
            That is what persistent memory makes possible.
          </p>
        </section>

        {/* Section 2 */}
        <section style={s.section}>
          <h2 style={s.h2}>Managing job search anxiety with AI</h2>
          <p style={s.p}>
            Job search anxiety is one of the most normalised yet least discussed forms of anxiety.
            It is not classified as a clinical condition, it is not taken especially seriously by
            friends and family who expect you to "just keep applying", and it rarely generates much
            sympathy — after all, you are not ill, you are just looking for work.
          </p>
          <p style={s.p}>
            But the experience of sustained uncertainty, repeated rejection, and an unknown end date
            produces a specific kind of psychological stress that is worth taking seriously. It tends
            to manifest as a combination of:
          </p>
          <ul style={s.ul}>
            <Bullet>Hypervigilance around your inbox and phone — checking constantly for responses</Bullet>
            <Bullet>Rumination on what you could have done differently in an interview or application</Bullet>
            <Bullet>A creeping erosion of confidence and sense of professional worth</Bullet>
            <Bullet>Avoidance behaviour — not applying because you want to protect yourself from more rejection</Bullet>
            <Bullet>Social withdrawal, because you feel embarrassed or don't want to answer "how's the job search going?"</Bullet>
          </ul>

          <div style={s.pullQuote}>
            <p style={s.pullQuoteText}>
              "The worst part wasn't the rejections. It was the silence. Six weeks of nothing, not
              even a no. Just not knowing whether to keep waiting or move on."
            </p>
          </div>

          <p style={s.p}>
            AI cannot remove the uncertainty. But it can meaningfully reduce the isolation that
            amplifies anxiety. When you have somewhere to bring the panic at midnight — not to fix it,
            just to voice it and have it received without judgement — the physiological spike of
            anxiety tends to soften. MEOK is available at the moment you need it, not during office
            hours, not when your friends happen to be free.
          </p>
          <p style={s.p}>
            More practically, MEOK can help with the cognitive distortions that job search anxiety
            feeds. When you say "nobody wants me, I've applied for forty roles and heard nothing",
            MEOK can help you look at that data differently: how many of those roles were genuinely
            well-matched? What was the quality of your application for each? Were any of the companies
            in sectors that are contracting? This is not toxic positivity — it is structured thinking,
            which anxiety makes difficult but which becomes easier with an external thinking partner.
          </p>

          <h3 style={s.h3}>The 10-minute debrief after a bad day</h3>
          <p style={s.p}>
            One of the most useful patterns MEOK users in job searches have found is the end-of-day
            debrief. Rather than carrying the weight of a discouraging day into the evening, a
            10-minute conversation with MEOK to articulate what happened and what you are feeling
            creates a kind of psychological closure. It separates the work of job searching from the
            rest of your life, which is important for maintaining the energy to continue.
          </p>
        </section>

        {/* Section 3 */}
        <section style={s.section}>
          <h2 style={s.h2}>Tracking applications and follow-ups with MEOK</h2>
          <p style={s.p}>
            There is a particular kind of chaos that sets in around the thirty-application mark. You
            cannot remember whether you applied to that company in November or December. You don't
            know if it is too soon to follow up, or if it has already been too long. You aren't sure
            whether you had a first interview and received a rejection, or whether you never heard
            back at all. The job search spreadsheet — everyone's first instinct — is either
            abandoned or becomes its own source of anxiety.
          </p>
          <p style={s.p}>
            MEOK handles this through conversation rather than data entry. When you tell MEOK that
            you have just applied to a company, it remembers. When you ask two weeks later whether you
            have followed up, MEOK knows the timeline and can help you decide whether to reach out
            or give it more time. When you receive a rejection, MEOK can place it in the context of
            your whole search rather than treating it as an isolated event.
          </p>

          <div style={s.callout}>
            <p style={s.calloutTitle}>How conversational tracking works</p>
            <p style={s.calloutText}>
              You don't enter data into a form. You just tell MEOK what happened: "I applied to Monzo
              today for a product manager role — it's a stretch but I really want it." MEOK files that
              away. A week later you can ask "where are we up to with Monzo?" and MEOK will tell you
              exactly what it knows, flag that a follow-up might be appropriate, and help you draft one
              if you want. The system works the way memory works — through natural language, not
              structured data entry.
            </p>
          </div>

          <h3 style={s.h3}>Follow-up timing and tone</h3>
          <p style={s.p}>
            One of the most anxiety-producing micro-decisions in job searching is whether and how to
            follow up after an application or interview. Follow up too soon and you seem desperate;
            leave it too long and the opportunity may have passed; pitch the tone wrong and you undo
            the work of a strong application.
          </p>
          <p style={s.p}>
            MEOK can help with all three dimensions. It knows when you applied, it knows the sector
            norms you have mentioned previously, and it can help you draft a follow-up message that
            is professional, warm, and appropriately confident. Crucially, it does this with full
            knowledge of the specific role and company — not a generic template.
          </p>

          <h3 style={s.h3}>Spotting patterns across your search</h3>
          <p style={s.p}>
            With persistent memory, MEOK can help you identify patterns that are difficult to see
            when you are inside the process. If you are consistently getting to first-round interviews
            but not progressing, that is a different problem from not getting responses at all. If
            your applications to one type of role are generating interest while another type receives
            silence, that is meaningful signal. MEOK can help you reflect on these patterns and
            adjust your strategy accordingly.
          </p>
        </section>

        {/* Section 4 */}
        <section style={s.section}>
          <h2 style={s.h2}>How to use AI to prepare for networking conversations</h2>
          <p style={s.p}>
            In the UK job market, networking is simultaneously the most effective job search strategy
            and the one that people avoid most consistently. LinkedIn estimates that 70–80% of jobs
            are filled through networking rather than advertised applications. Yet most job seekers
            spend the majority of their time on the 20–30% of roles that are formally advertised —
            in large part because the prospect of reaching out to strangers or near-strangers feels
            socially uncomfortable.
          </p>
          <p style={s.p}>
            AI is particularly well-suited to reducing that discomfort. The reason networking feels
            hard is usually some combination of: not knowing what to say, worrying about seeming
            presumptuous or transactional, and not having practised the conversational framing enough
            for it to feel natural. MEOK can help with all three.
          </p>

          <h3 style={s.h3}>Preparing your framing</h3>
          <p style={s.p}>
            Before a networking conversation, MEOK can help you articulate clearly who you are,
            what you are looking for, and what you are genuinely curious about in the other person's
            work. This is not about scripting a pitch — it is about doing enough thinking that you
            can show up as a curious, confident person rather than someone who is visibly anxious
            about asking for something.
          </p>
          <p style={s.p}>
            MEOK knows your background, your target sectors, your hesitations, and your strengths.
            It can ask you questions that help you identify what you genuinely find interesting about
            a particular company or person — which is ultimately what makes networking conversations
            feel natural rather than performative.
          </p>

          <h3 style={s.h3}>Practising the conversation</h3>
          <p style={s.p}>
            Role-play has a slightly cringe reputation, but it is genuinely effective for reducing
            the anxiety of unfamiliar social situations. MEOK can play the role of the person you are
            about to have a coffee chat with, ask the questions they are likely to ask, and help you
            notice where you stumble or where your framing is unclear. The difference from practising
            with a friend is that MEOK does not get bored, does not have its own agenda in the
            conversation, and can give you honest, calibrated feedback.
          </p>

          <h3 style={s.h3}>Processing the conversation afterwards</h3>
          <p style={s.p}>
            Post-networking conversations often feel awkward regardless of how they went. Either you
            left thinking you over-shared, or you think you came across as too passive, or you are
            uncertain about the appropriate next step. MEOK can help you debrief, identify what
            went well, decide on a follow-up action, and move on without spending three days
            ruminating.
          </p>
        </section>

        {/* Section 5 */}
        <section style={s.section}>
          <h2 style={s.h2}>Processing rejection: MEOK's Healer archetype</h2>
          <p style={s.p}>
            Rejection is the dominant experience of job searching. Not intermittent, not occasional —
            dominant. For every role you are considered for seriously, there are likely dozens where
            you receive no response or an automated decline. Even for the roles you pursue through
            to final stage, you will lose more often than you win. This is the basic arithmetic of
            competitive hiring, and it is important to understand it as structural rather than
            personal — but understanding that intellectually and feeling it emotionally are very
            different things.
          </p>
          <p style={s.p}>
            MEOK's Healer archetype is designed for exactly this kind of emotional processing. The
            Healer is not optimistic in a shallow way. It does not offer platitudes like "everything
            happens for a reason" or "their loss." Instead, it creates space for the genuine feeling —
            the disappointment, the confusion, the unfairness of it — and then, when you are ready,
            helps you move through it.
          </p>

          <div style={s.archetypeCard}>
            <div style={s.archetypeIcon}>&#10084;</div>
            <div>
              <p style={s.archetypeName}>The Healer Archetype</p>
              <p style={s.archetypeDesc}>
                The Healer is the part of MEOK that holds grief, disappointment, and emotional
                difficulty without rushing to fix it. In job search contexts, the Healer
                understands that rejection accumulates — that the twenty-third rejection hits
                differently from the third. It tracks your emotional arc across your whole search,
                not just the most recent event.
              </p>
            </div>
          </div>

          <h3 style={s.h3}>What rejection processing actually looks like</h3>
          <p style={s.p}>
            When you tell MEOK you have received another rejection — especially one that stings
            because you genuinely wanted that role — the first response is not a list of what to
            do next. It is acknowledgement. MEOK knows how much you wanted that role, because you
            told it when you applied. It knows how many other rejections you have had this month.
            That context changes the quality of the response from generic sympathy to something
            that actually lands.
          </p>
          <p style={s.p}>
            Once the emotional acknowledgement has been received, MEOK can help you look at the
            rejection practically: Was there any feedback? What do you know about why you might not
            have been selected? Is there anything genuinely learnable here, or is this one of those
            opaque decisions that says nothing meaningful about you? The goal is not to pretend
            rejection is fine, but to prevent it from compounding into a narrative about your worth.
          </p>

          <div style={s.pullQuote}>
            <p style={s.pullQuoteText}>
              Rejection accumulates differently from a single bad event. The twenty-third no
              carries the weight of the previous twenty-two. MEOK knows that weight, because it
              has been with you through all of them.
            </p>
          </div>

          <h3 style={s.h3}>Redundancy as a specific kind of loss</h3>
          <p style={s.p}>
            Redundancy-led job searches deserve separate mention because they begin from a place of
            disruption rather than agency. Being made redundant — even when it is clearly structural
            and not personal — often feels like rejection. For people whose professional identity is
            closely tied to their role or company, redundancy can trigger something that looks a lot
            like grief.
          </p>
          <p style={s.p}>
            MEOK's Healer archetype handles this by making space for the grief to exist alongside
            the practical work of finding something new. It does not push you to "stay positive"
            before you have processed the loss. It also does not let the processing become avoidance:
            when the time is right, it gently brings you back to the practical questions and helps
            you build momentum from wherever you actually are, not from where you think you should be.
          </p>
        </section>

        {/* Section 6 */}
        <section style={s.section}>
          <h2 style={s.h2}>The difference between AI career coaching and AI job search support</h2>
          <p style={s.p}>
            These two things sound similar but serve different needs, and conflating them leads to
            frustration on both sides.
          </p>
          <p style={s.p}>
            <strong style={{ color: '#f5f0e8' }}>AI career coaching</strong> is goal-oriented and
            strategic. It helps you think about where you want to go in your career over a multi-year
            horizon, what skills you need to develop, how to position yourself for advancement,
            whether a pivot makes sense, and how to think about different pathways. It is prospective
            and requires a degree of psychological stability to engage with well. Career coaching is
            most useful when you have the headspace to think clearly about the future.
          </p>
          <p style={s.p}>
            <strong style={{ color: '#f5f0e8' }}>AI job search support</strong> is present-tense and
            operational. It helps you get through today, process what happened this week, keep track
            of what you have done, and maintain the emotional baseline needed to keep going. It meets
            you where you are, not where you aspire to be. Job search support is most useful precisely
            when you do not have the headspace for strategic thinking — which is most of the time
            when you are actively searching.
          </p>

          <div style={s.callout}>
            <p style={s.calloutTitle}>MEOK does both — on your terms</p>
            <p style={s.calloutText}>
              Because MEOK holds your memory and adapts its tone to what you need in the moment, it
              can shift between career coaching and job search support fluidly. Some days you want to
              think about where you are trying to go. Most days you want help getting through the
              search itself. MEOK follows your lead — it does not impose a session structure or assume
              you always want strategic conversation when sometimes you just need to vent.
            </p>
          </div>

          <p style={s.p}>
            One of the practical implications of this distinction is about timing. Attempting to do
            deep career coaching work in the middle of an active job search is often counterproductive.
            You are too close to the immediate pressures to think clearly about the longer arc. MEOK
            is sensitive to this and will not push you toward strategic conversations when the present
            moment needs something different.
          </p>
        </section>

        {/* Section 7 */}
        <section style={s.section}>
          <h2 style={s.h2}>Is MEOK useful for every type of job seeker?</h2>
          <p style={s.p}>
            No AI tool is equally useful for everyone, and MEOK is honest about that. Here is a
            frank assessment of where MEOK is most and least effective in job search contexts.
          </p>

          <h3 style={s.h3}>MEOK works best for</h3>
          <ul style={s.ul}>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>Mid-career professionals in a sustained search</strong> — people who have been searching for more than a month and are starting to feel the psychological weight. The persistent memory pays off most when there is a significant history to draw on.
            </Bullet>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>People made redundant</strong> — where the emotional processing layer is as important as the practical support.
            </Bullet>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>Career changers</strong> — people who are navigating genuine uncertainty about how to position themselves and need a thinking partner rather than a prescriptive framework.
            </Bullet>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>Introverts and people with social anxiety</strong> — who find networking particularly difficult and benefit from a low-stakes environment in which to prepare and practise.
            </Bullet>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>People who feel they have nobody to talk to</strong> — who are embarrassed about the length of their search or who don't want to burden their family with daily updates.
            </Bullet>
          </ul>

          <h3 style={s.h3}>MEOK is less suited for</h3>
          <ul style={s.ul}>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>Highly specialised technical role searches</strong> — where the value would come from deep sector-specific knowledge rather than emotional and operational support.
            </Bullet>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>People who primarily need CV formatting or keyword optimisation</strong> — that is a tactical layer MEOK doesn't specialise in.
            </Bullet>
            <Bullet>
              <strong style={{ color: '#f5f0e8' }}>Very early-stage searchers who have made fewer than 10 applications</strong> — MEOK becomes more useful as the history accumulates.
            </Bullet>
          </ul>

          <h3 style={s.h3}>A note on neurodivergent job seekers</h3>
          <p style={s.p}>
            MEOK has particular relevance for neurodivergent job seekers — people with ADHD, autism,
            dyslexia, or anxiety disorders who may find the executive function demands of job searching
            disproportionately exhausting. Keeping track of applications, managing the uncertainty,
            and navigating social performance anxiety in interviews can all be significantly harder
            when executive function is already stretched. MEOK's conversational approach to tracking
            and its non-judgmental presence are well-matched to these needs.
          </p>
        </section>

        <hr style={s.divider} />

        {/* FAQ */}
        <section style={s.faqSection}>
          <h2 style={s.faqTitle}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Can AI really help with the emotional side of job hunting?</p>
            <p style={s.faqA}>
              Yes — meaningfully so. AI companions like MEOK are not therapists, but they offer
              something most job seekers lack: a consistent, non-judgmental presence that remembers
              your whole search. When you receive another rejection at 11 pm, MEOK can help you
              process the feeling, reframe the experience, and plan your next move without you
              having to explain the full context from scratch. That continuity of support is
              genuinely valuable during a process that can last months.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>How is MEOK different from just using ChatGPT for my job search?</p>
            <p style={s.faqA}>
              ChatGPT has no memory between sessions. Every conversation starts from zero, which
              means you constantly re-explain your situation, your target roles, your frustrations,
              and your history. MEOK is built around persistent sovereign memory — it holds your
              entire job search story, including which roles you applied for, what feedback you
              received, which companies you are targeting, and how you were feeling at each stage.
              That context transforms generic AI responses into genuinely personalised support.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Will MEOK write my CV or cover letters for me?</p>
            <p style={s.faqA}>
              MEOK can help you think through your positioning, identify the skills you are
              underselling, and work through what makes you a compelling candidate for a specific
              role. It can help you structure a cover letter narrative or prepare talking points.
              However, MEOK is a thinking partner and emotional support companion, not an automated
              document factory. The goal is to help you become more effective and confident — not
              to produce outputs that do not genuinely represent you.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQ}>Is MEOK suitable for people who have been made redundant?</p>
            <p style={s.faqA}>
              Absolutely. Redundancy carries a particular emotional weight — it can feel like
              rejection even when it is entirely structural, and it often comes with identity
              disruption if your role was central to how you saw yourself. MEOK's Healer archetype
              is specifically suited to this kind of processing: helping you work through the grief,
              separate your worth from the job title, and rebuild momentum from a grounded place
              rather than panic.
            </p>
          </div>

          <div style={{ ...s.faqItem, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
            <p style={s.faqQ}>How do I get started with MEOK if I am currently job searching?</p>
            <p style={s.faqA}>
              You can set up your MEOK companion at{' '}
              <Link href="/birth" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                meok.ai/birth
              </Link>
              . During the onboarding, you will tell MEOK about your current situation, your target
              roles, and what kind of support you are looking for. MEOK will remember everything
              from that first conversation and build on it in every session that follows. You do
              not need to set up any spreadsheets or tracking systems — just talk to MEOK the way
              you would talk to a trusted friend who happened to have excellent memory.
            </p>
          </div>
        </section>

        <hr style={s.divider} />

        {/* CTA */}
        <div style={s.ctaBlock}>
          <h2 style={s.ctaTitle}>
            You should not have to search alone.
          </h2>
          <p style={s.ctaText}>
            MEOK is an AI companion that remembers your whole job search — every application,
            every rejection, every moment of doubt, and every breakthrough. Set up your companion
            once, and it grows with you throughout the entire process.
          </p>
          <Link href="/birth" style={s.ctaBtn}>
            Meet Your MEOK Companion
          </Link>
          <p style={s.ctaSubtext}>
            No subscription required to get started &mdash; your data stays sovereign and private
          </p>
        </div>

        {/* Tags */}
        <div style={s.tagsRow}>
          <span style={s.tag}>job search</span>
          <span style={s.tag}>UK job market</span>
          <span style={s.tag}>rejection</span>
          <span style={s.tag}>career change</span>
          <span style={s.tag}>redundancy</span>
          <span style={s.tag}>networking</span>
          <span style={s.tag}>anxiety</span>
          <span style={s.tag}>AI companion</span>
          <span style={s.tag}>persistent memory</span>
          <span style={s.tag}>MEOK</span>
        </div>

        {/* Footer */}
        <footer style={s.footer}>
          <p style={s.footerText}>
            Written by{' '}
            <Link href="/about" style={s.footerLink}>Nicholas Templeman</Link>
            , Founder of{' '}
            <Link href="/" style={s.footerLink}>MEOK AI LABS</Link>.
            Published 24 March 2026.
          </p>
          <p style={s.footerText}>
            Related reading:{' '}
            <Link href="/blog/ai-for-anxiety" style={s.footerLink}>AI for Anxiety</Link>
            {' '}&middot;{' '}
            <Link href="/blog/ai-for-career-coaching" style={s.footerLink}>AI for Career Coaching</Link>
            {' '}&middot;{' '}
            <Link href="/blog/ai-for-burnout" style={s.footerLink}>AI for Burnout</Link>
            {' '}&middot;{' '}
            <Link href="/blog/ai-for-freelancers" style={s.footerLink}>AI for Freelancers</Link>
          </p>
          <p style={{ ...s.footerText, marginTop: '16px' }}>
            MEOK AI LABS &copy; 2026. Sovereign AI companions built with care.{' '}
            <Link href="/privacy" style={s.footerLink}>Privacy</Link>
            {' '}&middot;{' '}
            <Link href="/privacy-covenant" style={s.footerLink}>Privacy Covenant</Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
