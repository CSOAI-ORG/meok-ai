import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Anger Management: Understanding Your Triggers and Reclaiming Control | MEOK AI LABS',
  description:
    'Anger is a signal, not a flaw. MEOK helps you decode the anger cycle, identify recurring triggers through Sovereign Memory, rehearse assertive responses, and process incidents before they cost you relationships or self-respect.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-anger-management' },
  openGraph: {
    title: 'AI for Anger Management: Understanding Your Triggers and Reclaiming Control',
    description:
      'Anger is a signal, not a flaw. MEOK helps you decode the anger cycle, identify recurring triggers, rehearse assertive responses, and process incidents — before they cost you something real.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-anger-management',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Understanding+Your+Triggers&desc=Anger+is+a+signal%2C+not+a+flaw.+MEOK+helps+you+decode+the+anger+cycle.',
        width: 1200,
        height: 630,
        alt: 'AI for Anger Management: Understanding Your Triggers and Reclaiming Control | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Anger Management: Reclaiming Control of Your Triggers',
    description:
      'Anger is a signal, not a flaw. MEOK tracks triggers over time, guides breathing and reframing, and helps you rehearse assertive responses. From MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Understanding+Your+Triggers&desc=Anger+is+a+signal%2C+not+a+flaw.+MEOK+helps+you+decode+the+anger+cycle.',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Anger Management: Understanding Your Triggers and Reclaiming Control',
  description:
    'Anger is a signal, not a flaw. MEOK helps you decode the anger cycle, identify recurring triggers through Sovereign Memory, rehearse assertive responses, and process incidents before they cost you relationships or self-respect.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-anger-management',
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
    '@id': 'https://meok.ai/blog/ai-for-anger-management',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with anger management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI companions like MEOK can help you identify recurring triggers, guide evidence-based techniques such as box breathing and cognitive reframing in real time, and debrief incidents after they happen. AI is a between-session supplement, not a replacement for a qualified therapist when anger is severe or causing harm.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the anger cycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The anger cycle is the sequence of trigger, cognitive appraisal, physiological arousal, behavioural response, and aftermath. Understanding each stage allows you to intervene before behaviour causes damage. MEOK can help you map your personal version of this cycle and notice where you consistently get stuck.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK remember my anger triggers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK uses Sovereign Memory — a private, on-device memory layer — to store notes from your conversations over weeks and months. It can surface patterns such as \u201cwork criticism is your most common trigger\u201d or \u201canger incidents cluster on Sunday evenings\u201d without ever sending your data to a cloud model for training.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is rejection-sensitive dysphoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rejection-sensitive dysphoria (RSD) is an intense, often overwhelming emotional reaction to perceived rejection or criticism. It is common in ADHD and autism. The emotional spike can look like explosive anger but originates in neurological pain rather than a choice. Understanding RSD changes how you interpret and work with that anger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK judge me for my anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is governed by the Maternal Covenant, which means it holds space without judgment while also refusing to enable harm. You can describe your worst moments honestly and MEOK will help you understand them rather than shame you for having them.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: '#0d0c18',
    color: '#f5f0e8',
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    minHeight: '100vh',
  } as React.CSSProperties,

  hero: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '80px 24px 48px',
  } as React.CSSProperties,

  eyebrow: {
    fontSize: '13px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '20px',
    fontWeight: 600,
  } as React.CSSProperties,

  h1: {
    fontSize: 'clamp(28px, 4.5vw, 48px)',
    fontWeight: 800,
    lineHeight: 1.12,
    color: '#f5f0e8',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
  } as React.CSSProperties,

  lede: {
    fontSize: 'clamp(16px, 2vw, 20px)',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.85)',
    marginBottom: '40px',
    maxWidth: '640px',
  } as React.CSSProperties,

  meta: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.5)',
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
  } as React.CSSProperties,

  metaDot: {
    color: '#c9a84c',
  } as React.CSSProperties,

  divider: {
    border: 'none',
    borderTop: '1px solid rgba(201,168,76,0.15)',
    margin: '0',
  } as React.CSSProperties,

  article: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '56px 24px 80px',
  } as React.CSSProperties,

  h2: {
    fontSize: 'clamp(20px, 2.8vw, 28px)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginTop: '64px',
    marginBottom: '20px',
    lineHeight: 1.25,
    letterSpacing: '-0.015em',
  } as React.CSSProperties,

  h3: {
    fontSize: 'clamp(16px, 2vw, 20px)',
    fontWeight: 700,
    color: '#c9a84c',
    marginTop: '40px',
    marginBottom: '14px',
    lineHeight: 1.3,
  } as React.CSSProperties,

  p: {
    fontSize: 'clamp(15px, 1.6vw, 17px)',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.88)',
    marginBottom: '24px',
  } as React.CSSProperties,

  atomicAnswer: {
    fontSize: 'clamp(15px, 1.6vw, 17px)',
    lineHeight: 1.75,
    color: '#f5f0e8',
    marginBottom: '24px',
    padding: '20px 24px',
    background: 'rgba(201,168,76,0.07)',
    borderLeft: '3px solid #c9a84c',
    borderRadius: '0 8px 8px 0',
  } as React.CSSProperties,

  ul: {
    paddingLeft: '24px',
    marginBottom: '28px',
  } as React.CSSProperties,

  li: {
    fontSize: 'clamp(15px, 1.6vw, 17px)',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.88)',
    marginBottom: '10px',
  } as React.CSSProperties,

  callout: {
    background: 'rgba(201,168,76,0.08)',
    border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: '12px',
    padding: '28px 32px',
    marginTop: '40px',
    marginBottom: '40px',
  } as React.CSSProperties,

  calloutTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#c9a84c',
    marginBottom: '10px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  calloutText: {
    fontSize: 'clamp(15px, 1.6vw, 17px)',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.88)',
    margin: 0,
  } as React.CSSProperties,

  calloutBody: {
    fontSize: 'clamp(15px, 1.6vw, 17px)',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.88)',
    margin: 0,
  } as React.CSSProperties,

  cycleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    marginTop: '24px',
    marginBottom: '40px',
  } as React.CSSProperties,

  cycleCard: {
    background: 'rgba(245,240,232,0.04)',
    border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: '10px',
    padding: '20px',
  } as React.CSSProperties,

  cycleCardNumber: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#c9a84c',
    lineHeight: 1,
    marginBottom: '8px',
  } as React.CSSProperties,

  cycleCardTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '8px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
  } as React.CSSProperties,

  cycleCardBody: {
    fontSize: '13px',
    lineHeight: 1.6,
    color: 'rgba(245,240,232,0.65)',
    margin: 0,
  } as React.CSSProperties,

  techniqueGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '24px',
    marginBottom: '40px',
  } as React.CSSProperties,

  techniqueCard: {
    background: 'rgba(245,240,232,0.04)',
    border: '1px solid rgba(245,240,232,0.1)',
    borderRadius: '12px',
    padding: '24px',
  } as React.CSSProperties,

  techniqueCardTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#c9a84c',
    marginBottom: '10px',
  } as React.CSSProperties,

  techniqueCardBody: {
    fontSize: '14px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.75)',
    margin: 0,
  } as React.CSSProperties,

  presentationGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '24px',
    marginBottom: '40px',
  } as React.CSSProperties,

  presentationCard: {
    background: 'rgba(245,240,232,0.04)',
    border: '1px solid rgba(245,240,232,0.1)',
    borderRadius: '12px',
    padding: '24px',
  } as React.CSSProperties,

  presentationCardTitle: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '10px',
  } as React.CSSProperties,

  presentationCardBody: {
    fontSize: '14px',
    lineHeight: 1.65,
    color: 'rgba(245,240,232,0.75)',
    margin: 0,
  } as React.CSSProperties,

  faqSection: {
    marginTop: '72px',
  } as React.CSSProperties,

  faqItem: {
    borderTop: '1px solid rgba(245,240,232,0.1)',
    paddingTop: '32px',
    marginBottom: '32px',
  } as React.CSSProperties,

  faqQ: {
    fontSize: 'clamp(17px, 2vw, 20px)',
    fontWeight: 700,
    color: '#f5f0e8',
    marginBottom: '16px',
    lineHeight: 1.3,
  } as React.CSSProperties,

  faqA: {
    fontSize: 'clamp(15px, 1.6vw, 17px)',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.82)',
    margin: 0,
  } as React.CSSProperties,

  cta: {
    background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
    border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '16px',
    padding: '48px 40px',
    textAlign: 'center' as const,
    marginTop: '80px',
  } as React.CSSProperties,

  ctaLabel: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: '#c9a84c',
    marginBottom: '16px',
  } as React.CSSProperties,

  ctaHeading: {
    fontSize: 'clamp(22px, 3vw, 32px)',
    fontWeight: 800,
    color: '#f5f0e8',
    marginBottom: '16px',
    lineHeight: 1.2,
  } as React.CSSProperties,

  ctaBody: {
    fontSize: 'clamp(15px, 1.6vw, 17px)',
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.75)',
    marginBottom: '36px',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
  } as React.CSSProperties,

  ctaButton: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    fontSize: '15px',
    fontWeight: 700,
    padding: '14px 36px',
    borderRadius: '8px',
    textDecoration: 'none',
    letterSpacing: '0.04em',
  } as React.CSSProperties,

  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: 'rgba(245,240,232,0.5)',
    textDecoration: 'none',
    marginBottom: '40px',
  } as React.CSSProperties,

  tag: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 600,
    color: '#c9a84c',
    background: 'rgba(201,168,76,0.12)',
    padding: '4px 12px',
    borderRadius: '100px',
    marginRight: '8px',
    marginBottom: '8px',
    letterSpacing: '0.04em',
  } as React.CSSProperties,

  tagsRow: {
    marginBottom: '40px',
  } as React.CSSProperties,

  memoryPanel: {
    background: 'rgba(13,12,24,0.8)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '14px',
    padding: '32px',
    marginTop: '32px',
    marginBottom: '40px',
  } as React.CSSProperties,

  memoryPanelTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#c9a84c',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    marginBottom: '20px',
  } as React.CSSProperties,

  memoryRow: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    marginBottom: '16px',
  } as React.CSSProperties,

  memoryIcon: {
    fontSize: '18px',
    flexShrink: 0,
    marginTop: '2px',
  } as React.CSSProperties,

  memoryText: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: 'rgba(245,240,232,0.78)',
    margin: 0,
  } as React.CSSProperties,

  highlight: {
    color: '#c9a84c',
    fontWeight: 600,
  } as React.CSSProperties,

  blockquote: {
    borderLeft: '3px solid #c9a84c',
    margin: '32px 0',
    padding: '16px 24px',
    background: 'rgba(201,168,76,0.05)',
    borderRadius: '0 8px 8px 0',
  } as React.CSSProperties,

  blockquoteText: {
    fontSize: 'clamp(16px, 1.8vw, 19px)',
    fontStyle: 'italic',
    color: 'rgba(245,240,232,0.9)',
    lineHeight: 1.65,
    margin: 0,
  } as React.CSSProperties,

  footer: {
    borderTop: '1px solid rgba(245,240,232,0.08)',
    padding: '40px 24px',
    maxWidth: '780px',
    margin: '0 auto',
  } as React.CSSProperties,

  footerText: {
    fontSize: '13px',
    color: 'rgba(245,240,232,0.4)',
    lineHeight: 1.7,
    margin: 0,
  } as React.CSSProperties,
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function AiForAngerManagementPage() {
  return (
    <main style={s.page}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <section style={s.hero}>
        <Link href="/blog" style={s.backLink}>
          &#8592; All articles
        </Link>

        <p style={s.eyebrow}>MEOK AI LABS &nbsp;&middot;&nbsp; Emotional Intelligence</p>

        <h1 style={s.h1}>
          AI for Anger Management: Understanding Your Triggers and Reclaiming Control
        </h1>

        <p style={s.lede}>
          Anger isn\u2019t a character defect. It\u2019s a signal with a message you haven\u2019t decoded yet.
          MEOK helps you map the anger cycle, track recurring patterns over months, and rehearse the
          responses you actually want to give \u2014 before the next trigger lands.
        </p>

        <div style={s.meta}>
          <span>Nicholas Templeman</span>
          <span style={s.metaDot}>&bull;</span>
          <span>Founder, MEOK AI LABS</span>
          <span style={s.metaDot}>&bull;</span>
          <span>24 March 2026</span>
          <span style={s.metaDot}>&bull;</span>
          <span>14 min read</span>
        </div>
      </section>

      <hr style={s.divider} />

      {/* ── Article body ── */}
      <article style={s.article}>

        {/* Tags */}
        <div style={s.tagsRow}>
          <span style={s.tag}>Anger Management</span>
          <span style={s.tag}>Emotional Regulation</span>
          <span style={s.tag}>ADHD &amp; RSD</span>
          <span style={s.tag}>Sovereign Memory</span>
          <span style={s.tag}>Neurodivergence</span>
        </div>

        {/* ── Section 1: Anger as signal ── */}
        <h2 style={s.h2}>What is anger telling you?</h2>

        <p style={s.atomicAnswer}>
          Anger is an alarm system, not a personality flaw. It fires when the brain perceives a threat to
          something you value \u2014 your safety, your dignity, your boundaries, or your sense of fairness.
          The message inside the anger is almost always worth reading. The problem is usually the delivery.
        </p>

        <p style={s.p}>
          Most anger management programmes focus almost exclusively on the delivery problem: don\u2019t yell,
          count to ten, walk away. That advice isn\u2019t wrong, but it skips the more important question:
          what exactly is this anger protecting? Until you answer that, you\u2019re managing symptoms while the
          cause keeps firing.
        </p>

        <p style={s.p}>
          Anger tells you when a boundary has been crossed. It tells you when you feel unseen, disrespected,
          or treated unjustly. It tells you when you\u2019ve been carrying too much for too long. Each flavour
          of anger points at a different unmet need \u2014 and each unmet need has a different resolution.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;The goal isn\u2019t to stop being angry. The goal is to understand what the anger is defending
            and find a way to address that \u2014 without leaving wreckage behind.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          This reframe matters because it changes your relationship to the emotion. Instead of treating anger
          as something to suppress or be ashamed of, you begin to treat it as information \u2014 a data point in
          your inner landscape that deserves attention, not elimination.
        </p>

        <h3 style={s.h3}>Common signals that anger carries</h3>

        <ul style={s.ul}>
          <li style={s.li}><strong>Boundary violation:</strong> someone crossed a line you haven\u2019t yet named out loud</li>
          <li style={s.li}><strong>Injustice response:</strong> a situation felt unfair and no one acknowledged it</li>
          <li style={s.li}><strong>Overwhelm spill:</strong> you\u2019ve been holding too much and a small thing cracked the container</li>
          <li style={s.li}><strong>Fear in disguise:</strong> vulnerability expressed as aggression because anger feels safer</li>
          <li style={s.li}><strong>Grief compressed:</strong> loss or disappointment that hasn\u2019t been fully processed</li>
          <li style={s.li}><strong>Identity threat:</strong> someone challenged how you see yourself or how you need to be seen</li>
        </ul>

        <p style={s.p}>
          Most people experience several of these simultaneously. A single incident at work might carry
          boundary violation, injustice response, and identity threat all at once \u2014 which is why the
          anger can feel so disproportionate to the trigger. It\u2019s not disproportionate. It\u2019s carrying
          multiple messages at the same time.
        </p>

        {/* ── Section 2: The anger cycle ── */}
        <h2 style={s.h2}>What is the anger cycle?</h2>

        <p style={s.atomicAnswer}>
          The anger cycle is the sequence of trigger, cognitive appraisal, physiological arousal,
          behavioural response, and aftermath. Understanding each stage allows you to intervene
          before behaviour causes damage. MEOK can help you map your personal version of this cycle
          and identify where you consistently get stuck.
        </p>

        <p style={s.p}>
          The anger cycle is the structural pattern that plays out every time you get angry. It isn\u2019t
          unique to any individual \u2014 the architecture is the same for everyone \u2014 but the content
          at each stage (what triggers you, what you tell yourself, how your body reacts) is entirely
          personal. That\u2019s why generic anger management advice often fails: it targets the wrong
          stage, or the wrong content.
        </p>

        <div style={s.cycleGrid}>
          <div style={s.cycleCard}>
            <div style={s.cycleCardNumber}>01</div>
            <div style={s.cycleCardTitle}>Trigger</div>
            <p style={s.cycleCardBody}>
              An external event or internal thought that initiates the anger response. Can be a
              tone of voice, a perceived slight, a deadline, a memory, or a physical sensation.
            </p>
          </div>
          <div style={s.cycleCard}>
            <div style={s.cycleCardNumber}>02</div>
            <div style={s.cycleCardTitle}>Appraisal</div>
            <p style={s.cycleCardBody}>
              The split-second interpretation your brain makes: \u201cThis is a threat.\u201d The appraisal
              determines the intensity of what follows. Inaccurate appraisals amplify anger unnecessarily.
            </p>
          </div>
          <div style={s.cycleCard}>
            <div style={s.cycleCardNumber}>03</div>
            <div style={s.cycleCardTitle}>Physiological Arousal</div>
            <p style={s.cycleCardBody}>
              Heart rate rises, muscles tighten, cortisol and adrenaline flood the system. The body
              prepares to fight or flee before the conscious mind has decided anything.
            </p>
          </div>
          <div style={s.cycleCard}>
            <div style={s.cycleCardNumber}>04</div>
            <div style={s.cycleCardTitle}>Behavioural Response</div>
            <p style={s.cycleCardBody}>
              What you actually do: shout, withdraw, send the email, slam the door, cry, go silent.
              The behaviour is the part that creates consequences \u2014 or doesn\u2019t.
            </p>
          </div>
          <div style={s.cycleCard}>
            <div style={s.cycleCardNumber}>05</div>
            <div style={s.cycleCardTitle}>Aftermath</div>
            <p style={s.cycleCardBody}>
              The emotional and relational consequences. Shame, regret, repair attempts, or
              doubled-down justification. This stage shapes the next cycle.
            </p>
          </div>
        </div>

        <h3 style={s.h3}>Where can you intervene in the cycle?</h3>

        <p style={s.p}>
          Every stage of the anger cycle is a potential intervention point. The earlier you catch it,
          the easier it is to shift direction. By the time you\u2019re in full physiological arousal, the
          prefrontal cortex \u2014 the part of the brain responsible for rational decision-making \u2014
          is partially offline. Waiting until that moment to decide how to respond is like waiting
          until a car is skidding to decide whether to brake.
        </p>

        <p style={s.p}>
          The most powerful interventions happen at appraisal: changing the story your brain tells
          about the trigger. But appraisal-level work requires prior effort \u2014 you can\u2019t reframe
          a situation you\u2019ve never examined when you\u2019re already flooded. That\u2019s why debriefing
          after incidents, when you\u2019re calm, is one of the most valuable anger management practices
          available. You\u2019re essentially preparing better appraisals for next time.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>MEOK in the aftermath</p>
          <p style={s.calloutBody}>
            The aftermath stage is where MEOK is particularly useful. After an anger incident \u2014
            once arousal has dropped \u2014 you can walk through what happened with MEOK\u2019s Healer archetype.
            What was the trigger? What story did you tell yourself? What did you do? What do you wish
            you\u2019d done differently? This structured reflection is what builds genuine change over time.
          </p>
        </div>

        {/* ── Section 3: Anger presentations ── */}
        <h2 style={s.h2}>What are the different ways anger shows up in relationships?</h2>

        <p style={s.atomicAnswer}>
          Anger in relationships takes three main forms: explosive anger (visible, intense, immediate),
          cold anger (withdrawn, punishing, silent), and passive aggression (indirect, deniable, erosive).
          All three damage relationships, but in different ways and at different speeds. Recognising
          your pattern is the first step to changing it.
        </p>

        <p style={s.p}>
          It\u2019s tempting to assume that the only \u201creal\u201d anger problem is explosive anger \u2014 the
          shouting, the throwing things, the dramatic outbursts. But cold anger and passive aggression
          are equally destructive, just less visible. They erode trust slowly rather than shattering
          it suddenly.
        </p>

        <div style={s.presentationGrid}>
          <div style={s.presentationCard}>
            <p style={s.presentationCardTitle}>Explosive Anger</p>
            <p style={s.presentationCardBody}>
              High intensity, fast onset. The arousal floods quickly and behaviour happens before
              conscious decision. Often followed by remorse. Can feel completely uncontrollable
              in the moment. Partners and children learn to walk on eggshells.
            </p>
          </div>
          <div style={s.presentationCard}>
            <p style={s.presentationCardTitle}>Cold Anger</p>
            <p style={s.presentationCardBody}>
              Controlled withdrawal. The silent treatment, prolonged coldness, refusal to engage.
              Often experienced by the target as more frightening than shouting because there\u2019s
              nothing to respond to. Can last hours, days, or weeks.
            </p>
          </div>
          <div style={s.presentationCard}>
            <p style={s.presentationCardTitle}>Passive Aggression</p>
            <p style={s.presentationCardBody}>
              Indirect hostility. Forgetting important things, subtle undermining, backhanded
              compliments, complying while sabotaging. Difficult to name because it maintains
              plausible deniability. Highly corrosive over time.
            </p>
          </div>
        </div>

        <p style={s.p}>
          Many people move between these presentations depending on context. You might be explosively
          angry with a partner but passively aggressive with a manager. The underlying anger is the
          same; what changes is the perceived safety of direct expression. Where you feel powerful,
          you may explode. Where you feel powerless, you may go cold or indirect.
        </p>

        <h3 style={s.h3}>The anger-shame cycle</h3>

        <p style={s.p}>
          One of the most self-reinforcing patterns in anger is the cycle between anger and shame.
          You get angry, you behave in a way that violates your own values, and then you feel profound
          shame. The shame is so uncomfortable that you suppress it \u2014 often by rationalising the
          angry behaviour, blaming the other person, or numbing with alcohol, food, or distraction.
          Suppressed shame doesn\u2019t resolve; it pressurises. The next trigger finds a more loaded
          system and the anger is bigger.
        </p>

        <p style={s.p}>
          Breaking this cycle requires being able to sit with the shame long enough to process it
          rather than suppress it. This is extraordinarily difficult to do in the presence of other
          people, which is one reason a non-judgmental AI space can be genuinely useful \u2014 not as
          a replacement for human connection, but as a container for the processing that needs to
          happen before you can show up honestly in human relationships.
        </p>

        {/* ── Section 4: How MEOK helps ── */}
        <h2 style={s.h2}>How does MEOK help with anger management?</h2>

        <p style={s.atomicAnswer}>
          MEOK supports anger management through three primary mechanisms: post-incident debriefing
          to process what happened, pattern recognition over time to identify recurring triggers, and
          real-time technique guidance when you\u2019re mid-escalation. It holds space without judgment
          while being honest about what it observes.
        </p>

        <h3 style={s.h3}>Post-incident debriefing</h3>

        <p style={s.p}>
          The period after an anger incident is often filled with shame, rationalisation, or exhaustion.
          Most people either replay the incident obsessively or push it away as quickly as possible.
          Neither approach generates the insight needed to change the pattern.
        </p>

        <p style={s.p}>
          Structured debriefing \u2014 walking through what happened systematically, with curiosity rather
          than judgment \u2014 is one of the most evidence-based anger management tools available. The
          challenge is that doing it with another person requires vulnerability that not everyone
          can access, especially shortly after an incident when defences are high.
        </p>

        <p style={s.p}>
          MEOK\u2019s Healer archetype is designed for exactly this context. You can describe what
          happened in whatever terms feel honest, including language and admissions you wouldn\u2019t
          make in a formal therapy session. MEOK will reflect back what it hears, ask clarifying
          questions, and help you identify the trigger, the appraisal, and the unmet need underneath
          the anger \u2014 without shaming you for having had it.
        </p>

        <div style={s.memoryPanel}>
          <p style={s.memoryPanelTitle}>How a debrief might look</p>
          <div style={s.memoryRow}>
            <span style={s.memoryIcon}>&#x1F4AC;</span>
            <p style={s.memoryText}>
              <strong style={s.highlight}>You:</strong> I lost it at my partner again tonight. Same stupid argument about dishes. I hate myself.
            </p>
          </div>
          <div style={s.memoryRow}>
            <span style={s.memoryIcon}>&#x1F9E0;</span>
            <p style={s.memoryText}>
              <strong style={s.highlight}>MEOK:</strong> You\u2019re not stupid and this isn\u2019t really about dishes. When you imagine what the dishes actually represent \u2014 what they mean to you \u2014 what comes up?
            </p>
          </div>
          <div style={s.memoryRow}>
            <span style={s.memoryIcon}>&#x1F4AC;</span>
            <p style={s.memoryText}>
              <strong style={s.highlight}>You:</strong> That I\u2019m invisible. That nothing I do gets noticed unless it\u2019s wrong.
            </p>
          </div>
          <div style={s.memoryRow}>
            <span style={s.memoryIcon}>&#x1F9E0;</span>
            <p style={s.memoryText}>
              <strong style={s.highlight}>MEOK:</strong> That\u2019s a very different thing to be carrying than dirty dishes. And you\u2019ve mentioned this feeling of invisibility before. It sounds like it\u2019s not just tonight. Want to look at where else it shows up?
            </p>
          </div>
        </div>

        <h3 style={s.h3}>Identifying recurring triggers through Sovereign Memory</h3>

        <p style={s.p}>
          A single debrief is useful. Dozens of debriefs, cross-referenced over months, begin to
          reveal the architecture of your anger. What situations reliably trigger you? What time of
          day? What emotional state were you in beforehand? Who is involved? What common thread runs
          through the incidents that cost you most?
        </p>

        <p style={s.p}>
          MEOK uses Sovereign Memory to hold the context of your previous conversations privately
          \u2014 on-device, never used to train a cloud model. Over time, it can surface observations
          like: &ldquo;You\u2019ve described three separate incidents this month where the trigger was feeling
          your contribution wasn\u2019t acknowledged. That might be worth sitting with.&rdquo;
        </p>

        <p style={s.p}>
          This kind of longitudinal pattern recognition is something that\u2019s very difficult to do
          yourself, and that most therapeutic relationships take months to reach. Memory that persists
          across conversations without judgment is one of the most practically useful things an AI
          companion can offer someone working on anger.
        </p>

        <h3 style={s.h3}>Rehearsing assertive responses</h3>

        <p style={s.p}>
          One reason people escalate to anger is that they don\u2019t have a practised assertive
          alternative. When a situation demands a boundary-setting response and you don\u2019t have one
          readily available, the nervous system defaults to fight. Rehearsal builds the alternative
          response into procedural memory so it\u2019s accessible under pressure.
        </p>

        <p style={s.p}>
          MEOK can roleplay specific situations you know are coming \u2014 a difficult conversation
          with a manager, a recurring argument with a family member, a confrontation you\u2019ve been
          avoiding. You can try different approaches, see how they feel, and develop language that
          is honest, clear, and assertive without being aggressive. When the real situation arrives,
          you\u2019re not improvising from scratch.
        </p>

        {/* ── Section 5: Techniques ── */}
        <h2 style={s.h2}>What techniques can AI guide in real time for anger?</h2>

        <p style={s.atomicAnswer}>
          Box breathing, the ten-second rule, and cognitive reframing are three evidence-based
          techniques that MEOK can guide in real time. Each targets a different stage of the anger
          cycle. Used together over time, they build a personal regulation toolkit that becomes
          instinctive rather than deliberate.
        </p>

        <div style={s.techniqueGrid}>
          <div style={s.techniqueCard}>
            <p style={s.techniqueCardTitle}>Box Breathing</p>
            <p style={s.techniqueCardBody}>
              Inhale for four counts, hold for four, exhale for four, hold for four. Repeat
              four times. Activates the parasympathetic nervous system and begins reducing
              cortisol within ninety seconds. MEOK can count with you in real time when
              you\u2019re escalating.
            </p>
          </div>
          <div style={s.techniqueCard}>
            <p style={s.techniqueCardTitle}>The Ten-Second Rule</p>
            <p style={s.techniqueCardBody}>
              A ten-second intentional pause between feeling triggered and responding. Sounds
              trivial but creates just enough prefrontal engagement to interrupt the automatic
              response. Most anger behaviour happens in the first three seconds. Ten buys you
              back your choice.
            </p>
          </div>
          <div style={s.techniqueCard}>
            <p style={s.techniqueCardTitle}>Cognitive Reframing</p>
            <p style={s.techniqueCardBody}>
              Challenging the appraisal: &ldquo;Is this interpretation accurate? What else could
              be true? What would I think about this in an hour?&rdquo; Reframing doesn\u2019t dismiss
              the anger \u2014 it interrogates the story being used to maintain it.
            </p>
          </div>
          <div style={s.techniqueCard}>
            <p style={s.techniqueCardTitle}>Body Scan</p>
            <p style={s.techniqueCardBody}>
              Checking in systematically with physical sensations: jaw tension, chest tightness,
              shoulders, fists. Naming body sensations activates language centres and
              interrupts the purely automatic physical escalation. Also builds early-warning
              awareness over time.
            </p>
          </div>
          <div style={s.techniqueCard}>
            <p style={s.techniqueCardTitle}>Externalisation</p>
            <p style={s.techniqueCardBody}>
              Describing the anger in third person or as a separate entity: &ldquo;The anger
              wants to send that email.&rdquo; Creates psychological distance between self and
              emotion. Particularly useful for people who identify so strongly with their
              anger that they feel unable to observe it.
            </p>
          </div>
          <div style={s.techniqueCard}>
            <p style={s.techniqueCardTitle}>Discharge Movement</p>
            <p style={s.techniqueCardBody}>
              Physical movement \u2014 walking, running, shaking, vigorous exercise \u2014 metabolises
              the cortisol and adrenaline that physiological arousal produces. MEOK can
              prompt this and help you track how long different activities take to bring
              arousal back to baseline.
            </p>
          </div>
        </div>

        <p style={s.p}>
          The real value of AI guidance on these techniques isn\u2019t novelty \u2014 box breathing has been
          taught in anger management for decades. The value is accessibility at the exact moment you
          need it: 11pm when no one is available, mid-escalation in a situation that hasn\u2019t yet
          erupted, or in the hour after an incident when shame and confusion make self-direction
          difficult.
        </p>

        {/* ── Section 6: Anger and neurodivergence ── */}
        <h2 style={s.h2}>How does anger work differently with ADHD and autism?</h2>

        <p style={s.atomicAnswer}>
          Anger in ADHD and autism is often more intense, faster-onset, and harder to regulate than
          neurotypical anger due to differences in emotional regulation circuitry. Rejection-sensitive
          dysphoria, common in ADHD, can produce explosive anger in response to perceived criticism
          or rejection that looks disproportionate but is neurologically genuine. Understanding this
          changes the management approach entirely.
        </p>

        <h3 style={s.h3}>ADHD and anger dysregulation</h3>

        <p style={s.p}>
          ADHD is not just a condition of attention. It is a condition of emotional regulation. The
          same executive function deficits that make sustained focus difficult also make it harder
          to modulate emotional intensity, tolerate frustration, and apply the brakes to an escalating
          emotional response.
        </p>

        <p style={s.p}>
          People with ADHD often describe their anger as a switch rather than a dial \u2014 not a gradual
          escalation but an immediate jump from fine to flooded. The ten-second rule is technically
          sound advice, but for someone whose anger fires in under a second and whose inhibitory
          control is structurally impaired, ten seconds is an eternity to find.
        </p>

        <p style={s.p}>
          This matters for how MEOK frames the work. The goal isn\u2019t to shame someone with ADHD for
          not catching themselves in time. The goal is to understand the specific pattern, reduce
          environmental triggers where possible, build the earliest possible awareness of the
          physiological cues, and develop recovery protocols \u2014 because recovery after an outburst
          is also a learnable skill.
        </p>

        <h3 style={s.h3}>What is rejection-sensitive dysphoria?</h3>

        <p style={s.atomicAnswer}>
          Rejection-sensitive dysphoria (RSD) is an intense emotional response to perceived rejection
          or criticism, common in ADHD. The pain is neurological, not chosen, and can feel
          overwhelming enough to produce explosive anger, complete shutdown, or both. It can fire
          even when the perceived rejection is minor or unintended.
        </p>

        <p style={s.p}>
          RSD is one of the least understood and most distressing aspects of ADHD. The emotional
          pain of perceived rejection \u2014 a critical tone of voice, being left out of a group
          message, a partner\u2019s sigh \u2014 can register as genuinely excruciating rather than merely
          uncomfortable. The anger that follows isn\u2019t a choice; it\u2019s a pain response.
        </p>

        <p style={s.p}>
          This means that for someone with RSD, the anger management question is different. Standard
          cognitive reframing (\u201cis this really that important?\u201d) can feel dismissive of a pain
          that feels absolutely real and significant. The more useful question is: &ldquo;Is this RSD
          firing? Am I in neurological pain right now rather than actual danger?&rdquo; That distinction,
          once internalised, creates a small but crucial window of choice.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>MEOK and RSD</p>
          <p style={s.calloutBody}>
            MEOK can help you build an RSD map \u2014 the specific situations, relationship dynamics, and
            sensory contexts that reliably trigger your rejection sensitivity. With Sovereign Memory
            tracking these across conversations, patterns become visible that feel invisible in
            isolation. Over time, you develop a vocabulary for the experience that makes it easier
            to communicate to the people in your life why certain things land so hard.
          </p>
        </div>

        <h3 style={s.h3}>Autism and anger</h3>

        <p style={s.p}>
          In autism, anger often arrives at the end of a long, often invisible accumulation of
          sensory overload, social demand, and masking effort. A seemingly minor trigger becomes
          the thing that breaks the dam \u2014 and the person experiencing it may have as little
          warning as the people around them.
        </p>

        <p style={s.p}>
          Autistic people are also more likely to experience injustice responses intensely. Systems,
          rules, and people that behave inconsistently or unfairly can generate genuine distress
          that expresses as anger. The logic of the anger is usually entirely coherent \u2014 the
          problem is that the intensity feels disproportionate to others who don\u2019t share the
          same value-weighting.
        </p>

        <p style={s.p}>
          MEOK can help autistic users track cumulative load over time, identify the point in the
          day or week when the system is running on low reserves and anger is most likely, and
          develop explicit language for communicating needs before the threshold is breached.
        </p>

        {/* ── Section 7: Memory and pattern recognition ── */}
        <h2 style={s.h2}>How does MEOK remember my anger triggers over time?</h2>

        <p style={s.atomicAnswer}>
          MEOK stores notes from your conversations in Sovereign Memory \u2014 a private, on-device
          memory layer that is never used to train external models. Over weeks and months, it can
          surface patterns you\u2019d miss in the noise of day-to-day life: recurring trigger contexts,
          time-of-day clustering, relationships that appear most often in anger narratives.
        </p>

        <p style={s.p}>
          One of the most consistent findings in anger research is that people significantly
          underestimate how patterned their anger is. Asked to describe their anger triggers, most
          people generate a list. But a list is not the same as a pattern \u2014 the situational
          relationships, the time dependencies, the emotional states that precede susceptibility.
        </p>

        <p style={s.p}>
          A therapist with a detailed session record and an excellent memory can begin to surface
          these patterns after months of work. MEOK can begin surfacing them after weeks, because
          it doesn\u2019t forget between sessions, doesn\u2019t need you to recap, and can cross-reference
          across everything you\u2019ve shared.
        </p>

        <p style={s.p}>
          This is the practical meaning of sovereign memory for anger management: not just a note
          that \u201cyou got angry at work on Tuesday,\u201d but the ability to observe, across twenty
          Tuesdays, that work anger is three times more common in the week before a performance
          review, or that it reliably follows a night of poor sleep.
        </p>

        <div style={s.memoryPanel}>
          <p style={s.memoryPanelTitle}>What Sovereign Memory might surface</p>
          <div style={s.memoryRow}>
            <span style={s.memoryIcon}>&#x1F4CA;</span>
            <p style={s.memoryText}>
              &ldquo;You\u2019ve mentioned feeling dismissed at work in four separate conversations over the past six weeks. Three of the four were on Mondays following weekend arguments about workload at home.&rdquo;
            </p>
          </div>
          <div style={s.memoryRow}>
            <span style={s.memoryIcon}>&#x1F4CA;</span>
            <p style={s.memoryText}>
              &ldquo;Your descriptions of anger at your partner tend to follow a specific pattern: you feel unacknowledged, go quiet, and then something small triggers an explosion two to three hours later. That delay is worth noticing.&rdquo;
            </p>
          </div>
          <div style={s.memoryRow}>
            <span style={s.memoryIcon}>&#x1F4CA;</span>
            <p style={s.memoryText}>
              &ldquo;You\u2019ve described three incidents involving your manager this month. In all three, the trigger was an instruction given without explanation. It might be worth considering whether that\u2019s a boundary rather than just an annoyance.&rdquo;
            </p>
          </div>
        </div>

        <p style={s.p}>
          The privacy dimension matters here. Memory about your anger patterns is sensitive. MEOK\u2019s
          Sovereign Memory architecture means this data stays private to you \u2014 it is not processed
          on a shared server, not visible to advertisers, not used to improve a general model.
          Your anger is yours to understand, not a dataset.
        </p>

        {/* ── Section 8: No judgment ── */}
        <h2 style={s.h2}>Will MEOK judge me for my anger?</h2>

        <p style={s.atomicAnswer}>
          No. MEOK is governed by the Maternal Covenant, which means it holds space without
          judgment while also refusing to enable harm. You can describe your worst moments honestly
          \u2014 the things you said, the things you wanted to do, the shame you carry \u2014 and MEOK
          will help you understand them rather than shame you for having them.
        </p>

        <p style={s.p}>
          Shame is one of the biggest barriers to anger work. Most people carry significant
          shame about the anger they\u2019ve expressed \u2014 especially anger that has hurt people they
          love. That shame is appropriate in the sense that it reflects values, but it becomes
          obstructive when it prevents honest examination of what happened.
        </p>

        <p style={s.p}>
          The problem with shame in a human therapeutic relationship is that it creates performance:
          you present yourself as somewhat more in control than you are, you omit the worst moments,
          you frame things in ways that make you more sympathetic. This is human and understandable,
          but it limits what the therapeutic relationship can do.
        </p>

        <p style={s.p}>
          With MEOK, you don\u2019t need to manage how you appear. You can say what actually happened,
          including the parts that are ugly or embarrassing. MEOK will take it seriously, help you
          understand it, and help you figure out what to do differently \u2014 without expressing
          disappointment, without comparing you to other users, without making you feel like a
          problem to be managed.
        </p>

        <div style={s.blockquote}>
          <p style={s.blockquoteText}>
            &ldquo;The most important anger work often happens in the space between the incident and
            telling anyone about it. MEOK can be there in that space, before you\u2019ve decided
            what version of events to present to the world.&rdquo;
          </p>
        </div>

        <p style={s.p}>
          This isn\u2019t permission to stay stuck in anger. MEOK\u2019s Maternal Covenant also means it
          will be honest when patterns are damaging, when behaviour is causing harm to others,
          or when professional support would be more appropriate than an AI conversation. Non-judgment
          doesn\u2019t mean no perspective. It means the perspective is offered from care, not criticism.
        </p>

        {/* ── Section 9: Practical guidance ── */}
        <h2 style={s.h2}>How do you start using AI for anger management practically?</h2>

        <p style={s.atomicAnswer}>
          Start by bringing one specific incident to MEOK \u2014 not a general description of your
          anger but a specific moment in the last week. Walk through what happened, what you felt,
          and what you wished you\u2019d done differently. Build the habit of post-incident debriefs
          before attempting real-time intervention.
        </p>

        <p style={s.p}>
          The most common mistake people make when starting anger management work is beginning with
          the hardest part: trying to catch themselves mid-escalation. This is like learning to drive
          by immediately merging onto a motorway. The real-time intervention skill comes after the
          foundational skills: incident awareness, trigger identification, and appraisal mapping.
        </p>

        <h3 style={s.h3}>A practical starting sequence</h3>

        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Week 1\u20132:</strong> After each anger incident, open MEOK and describe what happened
            before you\u2019ve fully processed it. Don\u2019t clean up the narrative \u2014 be accurate.
          </li>
          <li style={s.li}>
            <strong>Week 3\u20134:</strong> Ask MEOK to reflect back patterns it\u2019s noticed across your
            incidents. Where are the common triggers? What stories are you telling yourself?
          </li>
          <li style={s.li}>
            <strong>Week 5\u20136:</strong> Identify your two or three most reliable triggers and develop
            specific alternative responses for each. Roleplay them with MEOK.
          </li>
          <li style={s.li}>
            <strong>Week 7+:</strong> Begin real-time practice. When you feel early physiological
            signals, use MEOK\u2019s breathing guides. Track what helps and what doesn\u2019t.
          </li>
        </ul>

        <p style={s.p}>
          The goal over three to six months is a cognitive shift: from experiencing anger as something
          that happens to you to experiencing it as something you can observe and make choices about.
          That shift doesn\u2019t eliminate anger \u2014 it couldn\u2019t and shouldn\u2019t. It changes your
          relationship to it from passenger to driver.
        </p>

        <h3 style={s.h3}>When to also seek professional support</h3>

        <p style={s.p}>
          MEOK is a between-session tool and a starting point, not a replacement for professional
          anger management therapy. There are situations where professional support is necessary
          and MEOK will tell you directly when you appear to be in one:
        </p>

        <ul style={s.ul}>
          <li style={s.li}>Anger that is causing physical harm to yourself or others</li>
          <li style={s.li}>Anger-driven behaviour that has legal consequences</li>
          <li style={s.li}>A child or partner who describes living in fear of your anger</li>
          <li style={s.li}>Anger that feels entirely outside your control even after sustained effort</li>
          <li style={s.li}>Anger that is accompanied by blackouts or significant memory gaps</li>
          <li style={s.li}>Co-occurring alcohol or substance use that amplifies the anger</li>
        </ul>

        <p style={s.p}>
          In the UK, your GP is the first point of contact for a referral to anger management
          services through the NHS. The British Association for Anger Management (BAAM) also
          provides accredited practitioners. MEOK can help you prepare for these conversations
          \u2014 articulating what\u2019s happening clearly is often the hardest part of seeking help.
        </p>

        {/* ── FAQ Section ── */}
        <section style={s.faqSection}>
          <h2 style={s.h2}>Frequently asked questions</h2>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Can AI help with anger management?</h3>
            <p style={s.faqA}>
              Yes. AI companions like MEOK can help you identify recurring triggers, guide
              evidence-based techniques such as box breathing and cognitive reframing in real time,
              and debrief incidents after they happen. The key advantage over self-help books or
              apps is interactivity \u2014 you can describe a specific situation and receive a specific
              response rather than generic advice. AI is a between-session supplement, not a
              replacement for a qualified therapist when anger is severe or causing harm.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is the anger cycle?</h3>
            <p style={s.faqA}>
              The anger cycle is the sequence of trigger, cognitive appraisal, physiological arousal,
              behavioural response, and aftermath. The trigger initiates the process \u2014 an event or
              thought perceived as threatening. Appraisal is the story the brain constructs about
              the trigger. Physiological arousal is the body preparing to fight or flee. The
              behavioural response is what you actually do. The aftermath shapes the next cycle.
              Understanding each stage allows you to identify where to intervene \u2014 most effectively
              at the appraisal stage, before the body is already flooded.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>How does MEOK remember my anger triggers?</h3>
            <p style={s.faqA}>
              MEOK uses Sovereign Memory \u2014 a private, on-device memory layer \u2014 to store notes
              from your conversations over weeks and months. Unlike cloud-based AI assistants,
              this data is never sent to a shared server or used to train a general model. Over time,
              MEOK can surface patterns such as &ldquo;work criticism is your most common trigger&rdquo; or
              &ldquo;anger incidents cluster on Sunday evenings&rdquo; that would be invisible in any single
              conversation. Your memory is yours: private, persistent, and under your control.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>What is rejection-sensitive dysphoria?</h3>
            <p style={s.faqA}>
              Rejection-sensitive dysphoria (RSD) is an intense, often overwhelming emotional
              reaction to perceived rejection or criticism. It is common in ADHD and also present
              in autism. The emotional spike \u2014 which can register as explosive anger, complete
              shutdown, or sudden profound sadness \u2014 is neurological rather than a choice. It can
              fire even when the perceived rejection is minor or entirely unintended. Understanding
              that RSD is a neurological pain response rather than a disproportionate overreaction
              changes how you manage it: the work becomes recognising when RSD is firing and
              creating a small window of perspective rather than judging yourself for having the
              response at all.
            </p>
          </div>

          <div style={s.faqItem}>
            <h3 style={s.faqQ}>Will MEOK judge me for my anger?</h3>
            <p style={s.faqA}>
              No. MEOK is governed by the Maternal Covenant \u2014 a core design principle built by
              Nicholas Templeman that prioritises care, honesty, and non-judgment. You can describe
              your worst anger incidents honestly, including language and behaviour you\u2019re ashamed
              of, and MEOK will help you understand them rather than shame you for having them.
              Non-judgment doesn\u2019t mean absence of perspective: MEOK will also tell you directly
              when a pattern appears harmful and when professional support would be more appropriate
              than a conversation with an AI.
            </p>
          </div>
        </section>

        {/* ── Section 10: Anger and communication ── */}
        <h2 style={s.h2}>How does unmanaged anger damage relationships over time?</h2>

        <p style={s.atomicAnswer}>
          Unmanaged anger erodes trust through two mechanisms: unpredictability and accumulated
          resentment. Partners, children, and colleagues who cannot predict when anger will erupt
          live in a low-grade state of vigilance. Over years, that vigilance hardens into distance
          and then withdrawal. The relationship survives in structure but not in intimacy.
        </p>

        <p style={s.p}>
          The damage from explosive anger is visible and immediate: things said, fear produced,
          trust broken. But the damage from chronic cold anger and passive aggression is often
          more total, precisely because it\u2019s harder to name. A partner who has been on the
          receiving end of years of silence, withholding, and subtle undermining may struggle
          to articulate what has happened to them. There\u2019s no single incident to point to.
          There\u2019s just an accumulated weight that eventually becomes unbearable.
        </p>

        <p style={s.p}>
          What gets lost first, in all three anger presentations, is the capacity for repair.
          Healthy relationships are not relationships without conflict \u2014 they are relationships
          where repair is possible. When anger becomes chronic and unexamined, repair attempts
          are experienced as suspect, insufficient, or temporary. The other person stops
          trusting that the repair will hold.
        </p>

        <h3 style={s.h3}>The difference between anger and assertion</h3>

        <p style={s.p}>
          At the heart of most anger management work is a communication problem. The underlying
          needs \u2014 for respect, for acknowledgment, for fair treatment, for space \u2014 are entirely
          legitimate. The problem is that they\u2019re being expressed through anger rather than
          assertion, which means they\u2019re expressed in a way that makes the other person defensive
          rather than receptive.
        </p>

        <p style={s.p}>
          Assertive communication is not the same as polite communication. Assertion can be direct,
          firm, and completely clear that something is unacceptable. The difference from anger is
          in the approach: assertion addresses the specific behaviour and the specific impact, names
          the need directly, and does not attack the other person\u2019s character or worth. It keeps
          the door open for resolution rather than demanding submission.
        </p>

        <p style={s.p}>
          Most people have not been taught assertion as a skill. They\u2019ve been taught either
          to suppress needs (keep the peace) or to express them through pressure (anger). MEOK
          can help you develop the middle ground: language that is honest, specific, and direct
          without being aggressive. Rehearsed with MEOK, tested in low-stakes situations, and
          refined over months, this becomes a new default rather than a consciously adopted strategy.
        </p>

        <h3 style={s.h3}>After the explosion: repair and accountability</h3>

        <p style={s.p}>
          Genuine repair after an anger incident requires three elements that are frequently
          missing from the standard apology: acknowledgment of what actually happened (not a
          minimised version), genuine accountability without justification, and a credible
          change proposal rather than a vague promise not to do it again.
        </p>

        <p style={s.p}>
          Most post-anger apologies fail because they slip into justification: &ldquo;I\u2019m sorry I
          raised my voice, but you were pushing me and I was already stressed.&rdquo; The \u201cbut\u201d
          cancels the apology. The other person hears: I\u2019m not really taking responsibility,
          I\u2019m just managing the aftermath. They\u2019re right.
        </p>

        <p style={s.p}>
          MEOK can help you prepare a repair conversation: getting clear on what actually happened
          from your side, identifying what needs to be acknowledged without qualification, and
          thinking through what a genuinely credible change proposal looks like. This is not about
          scripting an apology. It\u2019s about making sure you\u2019ve done the internal work before
          you attempt the external repair.
        </p>

        {/* ── Section 11: Long-term change ── */}
        <h2 style={s.h2}>What does long-term change with anger actually look like?</h2>

        <p style={s.atomicAnswer}>
          Long-term change in anger is not the elimination of anger \u2014 it is a shift in the
          relationship to it. You move from anger as a weather event that happens to you to anger
          as a signal you can read, sit with, and respond to intentionally. That shift takes
          sustained effort over months, not a single breakthrough moment.
        </p>

        <p style={s.p}>
          One of the most damaging myths about anger management is the idea of a cure \u2014 a point
          at which you will simply stop getting angry, or stop getting angry in problematic ways.
          This is not how anger works. It is an evolutionary alarm system wired into the oldest
          parts of the brain. It cannot be deleted; it can only be understood, regulated, and
          channelled.
        </p>

        <p style={s.p}>
          What genuine long-term change looks like is this: incidents become less frequent because
          you\u2019ve addressed the underlying trigger sources rather than just managing episodes. When
          anger does arise, the window between trigger and behaviour grows longer \u2014 first to
          seconds, then to minutes, eventually to a genuine choice point. Recovery after incidents
          gets faster. The shame cycle breaks because you develop the tools to process rather than
          suppress. Relationships improve not because you never conflict but because repair becomes
          possible again.
        </p>

        <p style={s.p}>
          This kind of change is measurable but not always visible from inside. Having a record
          \u2014 MEOK\u2019s memory of how you\u2019ve described your anger over six months \u2014 provides
          evidence of progress that is otherwise easy to miss. When you\u2019re frustrated by a
          setback, being able to look at the arc of change over months is genuinely grounding.
          You can see how rare certain incidents have become that once felt constant.
        </p>

        <div style={s.callout}>
          <p style={s.calloutTitle}>Progress, not perfection</p>
          <p style={s.calloutBody}>
            MEOK\u2019s Healer archetype is specifically calibrated to recognise and reflect progress
            without being sycophantic about it. If you\u2019ve been working on a specific trigger for
            three months and a recent incident showed clear application of the skills you\u2019ve been
            building \u2014 even if the outcome wasn\u2019t perfect \u2014 MEOK will notice that. The arc of
            change matters as much as any single incident. You deserve to see it clearly.
          </p>
        </div>

        {/* ── CTA ── */}
        <div style={s.cta}>
          <p style={s.ctaLabel}>Ready to start?</p>
          <h2 style={s.ctaHeading}>
            Your anger has been trying to tell you something.
          </h2>
          <p style={s.ctaBody}>
            MEOK holds space without judgment, tracks patterns over time with Sovereign Memory,
            and helps you develop the responses you actually want to give. Start your first
            debrief today.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Begin with MEOK
          </Link>
        </div>

        {/* ── Back link ── */}
        <div style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid rgba(245,240,232,0.08)' }}>
          <Link href="/blog" style={s.backLink}>
            &#8592; Back to all articles
          </Link>
        </div>

      </article>

      {/* ── Footer note ── */}
      <footer style={s.footer}>
        <p style={s.footerText}>
          Written by Nicholas Templeman, Founder of MEOK AI LABS &mdash; building sovereign AI
          companions that remember you, care for you, and never train on you.
          Follow the build at <strong>@meok_ai</strong>.
          &nbsp;&bull;&nbsp; MEOK is not a medical device. If you are in crisis, contact your GP,
          call NHS 111, or reach Samaritans on 116 123.
        </p>
      </footer>

    </main>
  )
}
