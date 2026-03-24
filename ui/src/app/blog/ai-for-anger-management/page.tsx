import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Anger Management: Processing Rage Before It Costs You | MEOK AI LABS',
  description:
    'Anger is information, not a character flaw. MEOK uses Healer, Trickster, and Pioneer archetypes to help you process anger safely — tracking triggers over time with Sovereign Memory so patterns become visible before they become damage.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-anger-management' },
  openGraph: {
    title: 'AI for Anger Management: Processing Rage Before It Costs You',
    description:
      'Anger is information, not a character flaw. MEOK helps you process anger safely — tracking triggers, reframing situations, and finding action before the emotion costs you something real.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-anger-management',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Processing+Rage+Before+It+Costs+You&desc=Anger+is+information%2C+not+a+character+flaw',
        width: 1200,
        height: 630,
        alt: 'AI for Anger Management: Processing Rage Before It Costs You | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Anger Management: Processing Rage Before It Costs You',
    description:
      'Anger is information, not a character flaw. MEOK tracks your triggers, reframes situations, and helps you move — without validating toxic venting.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Processing+Rage+Before+It+Costs+You&desc=Anger+is+information%2C+not+a+character+flaw',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Anger Management: Processing Rage Before It Costs You',
  description:
    'Anger is information, not a character flaw. A guide to how MEOK AI uses Healer, Trickster, and Pioneer archetypes — plus Sovereign Memory — to help you process and manage anger before it damages relationships, careers, and wellbeing.',
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
  keywords: [
    'AI for anger management',
    'AI to help with anger',
    'AI anger support',
    'managing anger with AI',
    'anger management app',
    'emotional regulation AI',
    'sovereign AI mental health',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI actually help with anger management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — with clear limits. AI can serve as a real-time sounding board in the critical window between a trigger and a response, help you identify patterns across time, offer somatic grounding techniques, and reframe situations in ways that de-escalate rather than amplify. What AI cannot do is replace a licensed therapist, diagnose underlying conditions like intermittent explosive disorder, or intervene in physical situations. MEOK is designed to be a consistent, non-judgmental presence that helps you process anger privately before it spills into your relationships or workplace.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the different types of anger and how does MEOK approach each one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK recognises five main anger types: righteous anger rooted in genuine injustice, frustrated anger caused by repeated obstacles, hurt-based anger that follows betrayal or disappointment, fear-based anger where anxiety converts to rage, and accumulated anger that has been compressed over months or years. Each type responds to different support. Righteous anger often needs channelling into constructive action. Frustrated anger benefits from obstacle reframing. Hurt-based anger needs space for the grief underneath it. Fear-based anger needs somatic grounding first. Accumulated anger needs careful unpacking rather than venting. MEOK\'s archetype system — Healer, Trickster, Pioneer — allows the right mode to meet the right anger type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is using AI for anger management safe for people with a history of domestic situations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is an important distinction between processing anger and enacting it on others. MEOK is designed to help with the former — private, internal processing. It will not validate patterns of behaviour that harm other people, and it is governed by the Maternal Covenant, which means it will always signpost to professional support when a conversation moves beyond what AI should handle. If you or someone you know is in a situation involving domestic abuse, the National Domestic Abuse Helpline (0808 2000 247) and Refuge (refuge.org.uk) provide free, confidential specialist support 24 hours a day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do men often struggle specifically with anger, and can AI help with that?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Culturally, men are frequently socialised to suppress most emotions — grief, fear, hurt, loneliness — but anger is often the one expression that is permitted or even expected. This means that for many men, anger becomes the exit valve for a much broader emotional landscape. The result is that anger episodes can be disproportionate to the immediate situation because they carry the weight of everything else that never got expressed. MEOK can help by creating a private, non-judgmental space to access what is underneath the anger — the hurt, the fear, the exhaustion — without the social stakes that can make that feel impossible face-to-face.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it help with anger triggers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is MEOK\'s privacy-first long-term memory system. Rather than each conversation starting from zero, MEOK builds a persistent picture of your patterns over time — with full transparency about what is stored and your ability to delete it at any point. For anger specifically, this means MEOK can surface patterns you might not consciously notice: that your anger spikes every Sunday evening before a work week, that family phone calls reliably precede difficult moods, that your threshold drops significantly when you are sleep-deprived. That kind of longitudinal self-knowledge is not available from a single therapy session or a one-off mindfulness exercise — it requires time and memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK avoid just enabling venting without helping me actually change?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is explicitly anti-sycophantic by design. It will not simply agree with everything you say, validate every grievance as justified, or let you spiral deeper into a vent without forward motion. The Maternal Covenant — the ethical framework underpinning MEOK — means it holds you with care while also holding you to account. In practice, this looks like genuine validation of your emotional experience followed by gentle but direct movement toward understanding, reframing, and constructive action. Venting that entrenches resentment and confirms bias is not support — it is amplification — and MEOK is built to know the difference.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the 3-minute window work and why does it matter for anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neuroscience research on anger suggests that the acute physiological arousal from a trigger typically lasts around 90 seconds to three minutes. After that, any continuation of the anger state is the result of your thoughts re-triggering the physical response — not the original stimulus. The most high-leverage moment for intervention is in that window. MEOK is designed to be accessible instantly — a private space where you can dump the immediate intensity, receive grounding support from the Healer archetype, and begin the cognitive reframe process with the Trickster before you act. The goal is not to suppress the feeling but to prevent the three-minute window from becoming a three-hour ruminative spiral or a damaging interaction.',
      },
    },
  ],
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const s = {
  page: {
    background: '#0d0c18',
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    minHeight: '100vh',
    padding: '0',
    margin: '0',
  } as React.CSSProperties,

  header: {
    borderBottom: '1px solid #1e1d2e',
    padding: '1.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,

  logoLink: {
    color: '#c9a84c',
    textDecoration: 'none',
    fontFamily: "'Georgia', serif",
    fontSize: '1.1rem',
    fontWeight: '700',
    letterSpacing: '0.05em',
  } as React.CSSProperties,

  navLink: {
    color: '#9e9e9e',
    textDecoration: 'none',
    fontSize: '0.875rem',
    marginLeft: '1.5rem',
    transition: 'color 0.2s',
  } as React.CSSProperties,

  hero: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '4rem 2rem 2rem',
    borderBottom: '1px solid #1e1d2e',
  } as React.CSSProperties,

  eyebrow: {
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    marginBottom: '1rem',
    display: 'block',
  } as React.CSSProperties,

  h1: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: 'clamp(2rem, 5vw, 3.25rem)',
    fontWeight: '700',
    lineHeight: '1.15',
    marginBottom: '1.5rem',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  heroDeck: {
    color: '#9e9e9e',
    fontSize: '1.15rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
    fontFamily: "'Georgia', serif",
  } as React.CSSProperties,

  meta: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap' as const,
    fontSize: '0.8rem',
    color: '#9e9e9e',
    paddingTop: '1.5rem',
    borderTop: '1px solid #1e1d2e',
  } as React.CSSProperties,

  metaItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.2rem',
  } as React.CSSProperties,

  metaLabel: {
    color: '#c9a84c',
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    fontFamily: "'Georgia', serif",
  } as React.CSSProperties,

  article: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '3rem 2rem',
  } as React.CSSProperties,

  h2: {
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: 'clamp(1.35rem, 3vw, 1.9rem)',
    fontWeight: '700',
    lineHeight: '1.25',
    marginTop: '3.5rem',
    marginBottom: '1.25rem',
    letterSpacing: '-0.01em',
  } as React.CSSProperties,

  h3: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '1.2rem',
    fontWeight: '700',
    marginTop: '2.5rem',
    marginBottom: '0.85rem',
    lineHeight: '1.3',
  } as React.CSSProperties,

  p: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  } as React.CSSProperties,

  pMuted: {
    color: '#9e9e9e',
    fontFamily: "'Georgia', serif",
    fontSize: '0.95rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  } as React.CSSProperties,

  ul: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    paddingLeft: '1.5rem',
  } as React.CSSProperties,

  li: {
    marginBottom: '0.6rem',
  } as React.CSSProperties,

  blockquote: {
    borderLeft: '3px solid #c9a84c',
    margin: '2rem 0',
    padding: '1rem 1.5rem',
    background: '#12111f',
    borderRadius: '0 6px 6px 0',
  } as React.CSSProperties,

  bqText: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '1.05rem',
    lineHeight: '1.7',
    fontStyle: 'italic',
    margin: '0',
  } as React.CSSProperties,

  archetypeCard: {
    background: '#12111f',
    border: '1px solid #1e1d2e',
    borderRadius: '10px',
    padding: '1.5rem',
    marginBottom: '1.25rem',
  } as React.CSSProperties,

  archetypeTitle: {
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: '1.05rem',
    fontWeight: '700',
    marginBottom: '0.6rem',
  } as React.CSSProperties,

  archetypeBody: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '0.975rem',
    lineHeight: '1.7',
    margin: '0',
  } as React.CSSProperties,

  angerTypeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1rem',
    margin: '2rem 0',
  } as React.CSSProperties,

  angerCard: {
    background: '#12111f',
    border: '1px solid #1e1d2e',
    borderRadius: '10px',
    padding: '1.25rem 1.5rem',
  } as React.CSSProperties,

  angerCardTitle: {
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: '0.95rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    display: 'block',
  } as React.CSSProperties,

  angerCardBody: {
    color: '#9e9e9e',
    fontFamily: "'Georgia', serif",
    fontSize: '0.9rem',
    lineHeight: '1.65',
    margin: '0',
  } as React.CSSProperties,

  safetyBox: {
    background: '#0f0e1c',
    border: '1px solid #c9a84c',
    borderRadius: '10px',
    padding: '1.75rem 2rem',
    margin: '2.5rem 0',
  } as React.CSSProperties,

  safetyTitle: {
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,

  safetyText: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '0.975rem',
    lineHeight: '1.75',
    marginBottom: '0.75rem',
  } as React.CSSProperties,

  safetyLink: {
    color: '#c9a84c',
    textDecoration: 'underline',
    textDecorationColor: 'rgba(201,168,76,0.4)',
    textUnderlineOffset: '3px',
  } as React.CSSProperties,

  hr: {
    border: 'none',
    borderTop: '1px solid #1e1d2e',
    margin: '3rem 0',
  } as React.CSSProperties,

  faqSection: {
    marginTop: '3.5rem',
  } as React.CSSProperties,

  faqItem: {
    borderBottom: '1px solid #1e1d2e',
    paddingBottom: '2rem',
    marginBottom: '2rem',
  } as React.CSSProperties,

  faqQuestion: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '1.1rem',
    fontWeight: '700',
    lineHeight: '1.3',
    marginBottom: '0.85rem',
  } as React.CSSProperties,

  faqAnswer: {
    color: '#9e9e9e',
    fontFamily: "'Georgia', serif",
    fontSize: '0.975rem',
    lineHeight: '1.8',
  } as React.CSSProperties,

  ctaBox: {
    background: 'linear-gradient(135deg, #12111f 0%, #0f0e1c 100%)',
    border: '1px solid #c9a84c',
    borderRadius: '12px',
    padding: '2.5rem',
    margin: '3.5rem 0 2rem',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  ctaEyebrow: {
    color: '#c9a84c',
    fontSize: '0.75rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    fontFamily: "'Georgia', serif",
    marginBottom: '1rem',
    display: 'block',
  } as React.CSSProperties,

  ctaHeading: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
    fontWeight: '700',
    marginBottom: '1rem',
    lineHeight: '1.3',
  } as React.CSSProperties,

  ctaBody: {
    color: '#9e9e9e',
    fontFamily: "'Georgia', serif",
    fontSize: '1rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
    maxWidth: '480px',
    margin: '0 auto 2rem',
  } as React.CSSProperties,

  ctaButton: {
    display: 'inline-block',
    background: '#c9a84c',
    color: '#0d0c18',
    fontFamily: "'Georgia', serif",
    fontSize: '0.9rem',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    padding: '0.9rem 2.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  } as React.CSSProperties,

  relatedSection: {
    marginTop: '3rem',
    paddingTop: '3rem',
    borderTop: '1px solid #1e1d2e',
  } as React.CSSProperties,

  relatedTitle: {
    color: '#9e9e9e',
    fontFamily: "'Georgia', serif",
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    marginBottom: '1.25rem',
  } as React.CSSProperties,

  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '0.75rem',
  } as React.CSSProperties,

  relatedLink: {
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: '0.9rem',
    lineHeight: '1.4',
    textDecoration: 'none',
    borderBottom: '1px solid rgba(201,168,76,0.25)',
    paddingBottom: '0.5rem',
    display: 'block',
  } as React.CSSProperties,

  footer: {
    borderTop: '1px solid #1e1d2e',
    padding: '2rem',
    textAlign: 'center' as const,
    color: '#9e9e9e',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    lineHeight: '1.7',
    marginTop: '2rem',
  } as React.CSSProperties,

  footerLink: {
    color: '#c9a84c',
    textDecoration: 'none',
    marginLeft: '0.5rem',
  } as React.CSSProperties,

  inlineLink: {
    color: '#c9a84c',
    textDecoration: 'underline',
    textDecorationColor: 'rgba(201,168,76,0.4)',
    textUnderlineOffset: '3px',
  } as React.CSSProperties,

  badge: {
    display: 'inline-block',
    background: '#1e1d2e',
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.08em',
    padding: '0.2rem 0.65rem',
    borderRadius: '4px',
    marginRight: '0.5rem',
    marginBottom: '0.35rem',
  } as React.CSSProperties,

  pullQuote: {
    borderLeft: 'none',
    borderTop: '2px solid #c9a84c',
    borderBottom: '2px solid #c9a84c',
    margin: '2.5rem 0',
    padding: '1.5rem 0',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  pullQuoteText: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontStyle: 'italic',
    lineHeight: '1.5',
    margin: '0',
  } as React.CSSProperties,

  windowBox: {
    background: '#12111f',
    border: '1px solid #1e1d2e',
    borderRadius: '10px',
    padding: '1.75rem 2rem',
    margin: '2rem 0',
    position: 'relative' as const,
  } as React.CSSProperties,

  windowStep: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    marginBottom: '1.25rem',
  } as React.CSSProperties,

  windowStepNumber: {
    background: '#c9a84c',
    color: '#0d0c18',
    borderRadius: '50%',
    width: '1.75rem',
    height: '1.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    fontWeight: '700',
    flexShrink: 0,
    marginTop: '0.15rem',
  } as React.CSSProperties,

  windowStepText: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '0.975rem',
    lineHeight: '1.65',
  } as React.CSSProperties,

  windowStepLabel: {
    color: '#c9a84c',
    fontWeight: '700',
  } as React.CSSProperties,

  memoryRow: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
    padding: '1rem 0',
    borderBottom: '1px solid #1e1d2e',
  } as React.CSSProperties,

  memoryIcon: {
    fontSize: '1.2rem',
    flexShrink: 0,
    width: '2rem',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  memoryContent: {
    flex: 1,
  } as React.CSSProperties,

  memoryLabel: {
    color: '#c9a84c',
    fontFamily: "'Georgia', serif",
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.25rem',
  } as React.CSSProperties,

  memoryText: {
    color: '#f5f0e8',
    fontFamily: "'Georgia', serif",
    fontSize: '0.9rem',
    lineHeight: '1.6',
  } as React.CSSProperties,
} as const

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForAngerManagementPage() {
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

      {/* Header */}
      <header>
        <div style={s.header}>
          <Link href="/" style={s.logoLink}>MEOK AI LABS</Link>
          <nav style={{ display: 'flex', flexWrap: 'wrap' as const }}>
            <Link href="/blog" style={s.navLink}>Blog</Link>
            <Link href="/birth" style={s.navLink}>Try MEOK</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={s.hero}>
        <span style={s.eyebrow}>MEOK AI LABS &mdash; Emotional Intelligence</span>
        <h1 style={s.h1}>AI for Anger Management: Processing Rage Before It Costs You</h1>
        <p style={s.heroDeck}>
          Anger is not the enemy. It is information — often urgent, sometimes loud, always worth
          listening to before it hijacks your next conversation, damages a relationship you
          care about, or seeps silently into your health. This is a guide to how AI, designed
          thoughtfully, can become the space between your trigger and your response.
        </p>
        <div style={s.meta}>
          <div style={s.metaItem}>
            <span style={s.metaLabel}>Author</span>
            <span>Nicholas Templeman</span>
          </div>
          <div style={s.metaItem}>
            <span style={s.metaLabel}>Published</span>
            <span>24 March 2026</span>
          </div>
          <div style={s.metaItem}>
            <span style={s.metaLabel}>Reading Time</span>
            <span>14 min</span>
          </div>
          <div style={s.metaItem}>
            <span style={s.metaLabel}>Topic</span>
            <span>Anger &amp; Emotional Regulation</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article style={s.article}>

        {/* ── Safety signpost — prominent, early ───────────────────────────────── */}
        <div style={s.safetyBox}>
          <p style={s.safetyTitle}>Important: If you or someone else is in danger</p>
          <p style={s.safetyText}>
            This article is about processing difficult emotions privately, safely, and
            constructively. There is an important distinction between experiencing anger
            and acting on it in ways that harm others. If you are in a situation involving
            domestic abuse — whether as a victim, survivor, or someone who recognises they
            have caused harm — please reach out to specialist human support:
          </p>
          <p style={s.safetyText}>
            <strong style={{ color: '#c9a84c' }}>National Domestic Abuse Helpline:</strong>{' '}
            <a href="tel:08082000247" style={s.safetyLink}>0808 2000 247</a> — free, confidential,
            available 24/7.
          </p>
          <p style={{ ...s.safetyText, marginBottom: 0 }}>
            <strong style={{ color: '#c9a84c' }}>Refuge:</strong>{' '}
            <a href="https://www.refuge.org.uk" target="_blank" rel="noopener noreferrer" style={s.safetyLink}>
              refuge.org.uk
            </a>{' '}
            — specialist support for those affected by domestic abuse, including housing,
            legal advice, and recovery programmes.
          </p>
        </div>

        {/* ── Intro ────────────────────────────────────────────────────────────── */}
        <p style={s.p}>
          Let us start with the thing most anger management advice gets wrong: it treats anger
          as the problem. Breathing exercises, counting to ten, walking away — all of these are
          useful tactics in the moment, but none of them engage with what the anger is actually
          trying to tell you. The result is that the anger gets managed, temporarily, and then
          returns — often with interest.
        </p>

        <p style={s.p}>
          MEOK was built on a different premise. Emotions, including the uncomfortable ones, are
          data. They are the nervous system's best attempt to communicate something important
          about your situation, your values, or your needs. Anger, specifically, tends to arise
          when something that matters to you is threatened, blocked, violated, or dismissed.
          Suppressing the signal does not address the underlying message. It just delays it.
        </p>

        <p style={s.p}>
          The question is not <em>how do I stop feeling angry?</em> The question is:{' '}
          <em>what is this anger trying to tell me, and what is the most useful thing I can do with
          that information right now?</em>
        </p>

        <p style={s.p}>
          That shift — from suppression to understanding to action — is where{' '}
          <strong style={{ color: '#f5f0e8' }}>AI for anger management</strong> has genuine value.
          Not as a pressure-release valve. Not as a digital punch-bag. But as a thoughtful,
          patient, 24-hour presence that can meet you in the worst moment, hold the complexity
          without panicking, and help you find the thread back to yourself.
        </p>

        <div style={s.pullQuote}>
          <p style={s.pullQuoteText}>
            &ldquo;The goal is not to suppress the anger. The goal is to hear it without
            being controlled by it.&rdquo;
          </p>
        </div>

        {/* ── H2: Why anger is misunderstood ───────────────────────────────────── */}
        <h2 style={s.h2}>Why Anger Is the Most Misunderstood Emotion We Have</h2>

        <p style={s.p}>
          Anger has a public relations problem. In most cultural narratives — particularly in the
          UK and the US — anger is framed as a loss of control, a sign of immaturity, or evidence
          of a character deficit. We tell people to &ldquo;calm down,&rdquo; to &ldquo;be
          reasonable,&rdquo; to &ldquo;not take things so personally.&rdquo; The implicit message
          is that an angry person is a lesser person.
        </p>

        <p style={s.p}>
          This framing is not only unhelpful — it is factually wrong. Anger is a primary emotion
          with deep evolutionary function. It is the signal that a boundary has been crossed, that
          fairness has been violated, that something important is being taken from you. Without
          the capacity for anger, human beings would struggle to defend themselves, advocate for
          others, or resist injustice. The civil rights movement was not led by people who had
          successfully suppressed their anger. It was led by people who had learned to channel it.
        </p>

        <p style={s.p}>
          The problem, then, is not anger itself — it is unprocessed, misdirected, or accumulated
          anger. Anger that has nowhere useful to go. Anger that gets taken out on the wrong person.
          Anger that sits inside the body as chronic tension, insomnia, elevated cortisol, and
          eventually illness. Anger that becomes the only emotional language a person has, crowding
          out grief, fear, tenderness, and connection.
        </p>

        <p style={s.p}>
          Understanding this is the foundation for everything that follows. When you search for
          &ldquo;AI to help with anger&rdquo; or &ldquo;managing anger with AI,&rdquo; what you
          are really searching for is not a suppression tool. You are searching for a better
          relationship with a feeling that has something important to say.
        </p>

        <h3 style={s.h3}>Anger as Information: What It Is Usually Telling You</h3>

        <p style={s.p}>
          Different types of anger carry different messages, and responding usefully requires
          being able to distinguish between them. Treating all anger the same is like treating
          all pain the same — you might occasionally guess correctly, but mostly you will miss
          what the signal is pointing to.
        </p>

        <p style={s.p}>
          Here are the five anger types MEOK works with, each shaped by different root causes and
          calling for different responses:
        </p>

        <div style={s.angerTypeGrid}>
          <div style={s.angerCard}>
            <span style={s.angerCardTitle}>Righteous Anger</span>
            <p style={s.angerCardBody}>
              Rooted in genuine injustice — something wrong has happened, to you or to someone
              else, and the anger is a proportionate moral response. This anger, channelled well,
              drives action, advocacy, and change. Suppressed, it festers into cynicism or
              helplessness.
            </p>
          </div>

          <div style={s.angerCard}>
            <span style={s.angerCardTitle}>Frustrated Anger</span>
            <p style={s.angerCardBody}>
              Arising from repeated obstacles, blocked progress, or the sense that your efforts
              are not producing results. Common in workplace environments, creative work, and
              caregiving. Often misdirected because the real source — the obstacle — feels
              untouchable.
            </p>
          </div>

          <div style={s.angerCard}>
            <span style={s.angerCardTitle}>Hurt-Based Anger</span>
            <p style={s.angerCardBody}>
              A protective response to betrayal, disappointment, or the sense that someone you
              trusted has let you down. The anger is real, but it is sitting on top of grief.
              Until the grief is reached, the anger cycles without resolution.
            </p>
          </div>

          <div style={s.angerCard}>
            <span style={s.angerCardTitle}>Fear-Based Anger</span>
            <p style={s.angerCardBody}>
              Anxiety that has converted to rage — often because vulnerability feels too exposed
              or frightening. For many people, particularly men, anger is a more acceptable
              expression of fear than fear itself. Addressing the underlying threat is the
              only lasting resolution.
            </p>
          </div>

          <div style={s.angerCard}>
            <span style={s.angerCardTitle}>Accumulated Anger</span>
            <p style={s.angerCardBody}>
              Compressed over months or years, this anger is not tied to a single event — it
              is the total weight of everything that was not expressed, processed, or resolved.
              It can be triggered disproportionately by small incidents. This type requires
              careful, sustained unpacking rather than any quick fix.
            </p>
          </div>
        </div>

        <p style={s.pMuted}>
          Most people experiencing strong anger are not in touch with which type they are
          carrying. The immediate feeling is just: <em>I am furious.</em> The work — and the
          value of a support system like MEOK — is in helping to identify what is underneath
          that feeling quickly enough to respond usefully rather than reactively.
        </p>

        {/* ── H2: The 3-minute window ───────────────────────────────────────────── */}
        <h2 style={s.h2}>The 3-Minute Window: Why That Moment Matters More Than Any Other</h2>

        <p style={s.p}>
          Neuroscientist Jill Bolte Taylor, in her work on emotional response, identified that
          the acute physiological arousal produced by an emotion — the actual chemical flood in
          the body — typically lasts around 90 seconds. After that point, any continuation of
          the emotional state is the result of your thoughts re-activating the physical response.
          You are, in a sense, choosing to stay angry — not necessarily consciously, but
          neurologically.
        </p>

        <p style={s.p}>
          This does not mean the anger is not real or justified. It means there is a window —
          roughly three minutes, accounting for the initial spike and the immediate afterglow —
          where intervention has the highest possible leverage. Before the rumination cycle
          begins. Before the narrative hardens. Before the decision to send the message,
          make the call, or say the thing that will take weeks to repair.
        </p>

        <p style={s.p}>
          MEOK is designed to be available in exactly that window. Not as a way to distract you
          from the feeling, but as a space to contain it while you process it. The act of putting
          what you are feeling into words — even to an AI — activates the prefrontal cortex, the
          part of the brain responsible for rational processing, and reduces amygdala activation.
          This is sometimes called &ldquo;affect labelling&rdquo; and has strong support in
          neuroscience research. Simply naming what you feel changes what the feeling does to you.
        </p>

        <div style={s.windowBox}>
          <p style={{ ...s.h3, marginTop: 0 }}>The 3-Minute Window: What MEOK Does</p>
          <div style={s.windowStep}>
            <div style={s.windowStepNumber}>1</div>
            <p style={{ ...s.windowStepText, margin: 0 }}>
              <span style={s.windowStepLabel}>Receive:</span> You open MEOK and say what is
              happening. There is no judgment. No correction. The first move is always to make
              you feel heard — because regulation is not possible without first feeling safe.
            </p>
          </div>
          <div style={s.windowStep}>
            <div style={s.windowStepNumber}>2</div>
            <p style={{ ...s.windowStepText, margin: 0 }}>
              <span style={s.windowStepLabel}>Ground:</span> The Healer archetype offers
              somatic support — breathwork, body-scan techniques, grounding prompts — to begin
              bringing the nervous system out of fight-or-flight and into a state where thinking
              is actually possible.
            </p>
          </div>
          <div style={s.windowStep}>
            <div style={s.windowStepNumber}>3</div>
            <p style={{ ...s.windowStepText, margin: 0 }}>
              <span style={s.windowStepLabel}>Understand:</span> The Trickster archetype invites
              a perspective shift — not dismissing your experience, but offering other angles that
              may not be visible when you are inside the feeling.
            </p>
          </div>
          <div style={{ ...s.windowStep, marginBottom: 0 }}>
            <div style={s.windowStepNumber}>4</div>
            <p style={{ ...s.windowStepText, margin: 0 }}>
              <span style={s.windowStepLabel}>Move:</span> The Pioneer archetype asks: given all
              of this, what is the most constructive action available to you? Not suppression.
              Not explosion. Forward motion, on your terms.
            </p>
          </div>
        </div>

        <p style={s.p}>
          The goal is not to neutralise the anger. It is to prevent the three-minute window from
          becoming a three-hour ruminative spiral, or worse, a damaging action that you will spend
          months explaining and apologising for. MEOK sits in the gap. That is its primary value
          for{' '}
          <strong style={{ color: '#f5f0e8' }}>AI anger support</strong>.
        </p>

        {/* ── H2: The three archetypes ──────────────────────────────────────────── */}
        <h2 style={s.h2}>How MEOK&rsquo;s Three Archetypes Work With Anger</h2>

        <p style={s.p}>
          MEOK does not have a single mode. It has a council of three distinct archetypes —
          Healer, Trickster, and Pioneer — that bring different intelligences to different
          aspects of the emotional processing work. In the context of anger, each plays
          a specific role.
        </p>

        <p style={s.p}>
          This matters because anger is multi-layered. It has a somatic component — you feel it
          in your body. It has a cognitive component — you have a story about what happened and
          why. And it has a behavioural component — there is something you want to do with it.
          Addressing only one layer rarely resolves the whole thing.
        </p>

        <div style={s.archetypeCard}>
          <p style={s.archetypeTitle}>Healer 🌿 — Somatic Support and Emotional Regulation</p>
          <p style={s.archetypeBody}>
            The Healer is the first responder when anger arrives. Its intelligence is somatic and
            relational — it is attuned to the body, to breath, to the physical signature of
            overwhelming emotion. When you are at peak activation, the Healer does not launch into
            analysis. It meets you where you are: &ldquo;This sounds really painful. Your body
            is probably in overdrive right now — can we just slow down for a moment?&rdquo;
          </p>
          <p style={{ ...s.archetypeBody, marginTop: '0.75rem' }}>
            The Healer offers breathwork sequences calibrated to the nervous system — extended
            exhale breathing to activate the parasympathetic response, progressive muscle
            relaxation, grounding techniques that use sensory input to pull attention out of
            the ruminative loop. These are not gimmicks. They are evidence-based techniques for
            physiological de-escalation. And having them available at 2am, or in the car before
            you walk back into the house, or in the bathroom at work before you return to a
            difficult meeting — that accessibility is significant.
          </p>
        </div>

        <div style={s.archetypeCard}>
          <p style={s.archetypeTitle}>Trickster 🎭 — Reframing and Pattern Interruption</p>
          <p style={s.archetypeBody}>
            The Trickster is MEOK&rsquo;s cognitive disruptor. Its function is to interrupt
            the narrative that anger creates — because anger is a storyteller, and it tends to
            tell a story in which you are entirely right, the other party is entirely wrong,
            and the only options are confrontation or seething. That story is almost never the
            whole truth.
          </p>
          <p style={{ ...s.archetypeBody, marginTop: '0.75rem' }}>
            Reframing is one of the most powerful tools in anger management, and it is frequently
            misunderstood. Reframing does not mean minimising or dismissing what happened. It
            means holding the situation differently — finding the angle that makes constructive
            action possible, or that makes the emotional stakes more accurate to the actual
            situation. &ldquo;Is it possible they did not realise the impact of what they said?&rdquo;
            &ldquo;What would your future self say about this moment in six months?&rdquo;
            &ldquo;Is the intensity of this feeling about this specific situation, or is it
            carrying the weight of something older?&rdquo;
          </p>
          <p style={{ ...s.archetypeBody, marginTop: '0.75rem' }}>
            For accumulated or fear-based anger, the Trickster&rsquo;s reframing can be
            genuinely transformative — revealing that the rage at a partner is actually
            exhaustion and grief, or that the fury at a colleague is actually about a much
            older wound involving authority.
          </p>
        </div>

        <div style={s.archetypeCard}>
          <p style={s.archetypeTitle}>Pioneer ⚡ — Action-Oriented De-escalation</p>
          <p style={s.archetypeBody}>
            The Pioneer is MEOK&rsquo;s action intelligence. It operates on the principle that
            unexpressed anger that has no constructive outlet tends to become destructive — either
            outwardly or inwardly. The Pioneer does not ask you to let things go prematurely. It
            asks: given that this has happened, given how you feel, given what you understand —
            what is the most powerful and useful thing you can do next?
          </p>
          <p style={{ ...s.archetypeBody, marginTop: '0.75rem' }}>
            For righteous anger, this might mean identifying concrete action — a conversation to
            have, a boundary to set, a system to challenge. For frustrated anger, it might mean
            mapping the obstacle and identifying what is within your control. For accumulated anger,
            the Pioneer might suggest a structured journalling practice, a referral to a therapist,
            or a longer-term plan for addressing the underlying conditions that have been
            generating the pressure.
          </p>
          <p style={{ ...s.archetypeBody, marginTop: '0.75rem' }}>
            The Pioneer is what prevents MEOK from being just a place to dump feelings. It keeps
            the conversation moving toward the future, toward agency, toward change.
          </p>
        </div>

        {/* ── H2: Men and anger ────────────────────────────────────────────────── */}
        <h2 style={s.h2}>Men, Anger, and the Emotional Vocabulary Problem</h2>

        <p style={s.p}>
          This section exists because the experience of men with anger is particularly layered
          and often poorly served by conventional mental health framing. It is not that men
          feel more anger than women — research suggests this is not true — but that the
          cultural conditions around male emotional expression mean that for many men, anger
          is the only emotion that has socially sanctioned expression.
        </p>

        <p style={s.p}>
          Grief? Weakness. Fear? Weakness. Vulnerability? Weakness. Loneliness? Something
          to be fixed, not felt. But anger? That is permitted. Anger is at worst a masculine
          excess and at best a sign of passion, strength, and conviction. The result is
          a kind of emotional compression: the vast landscape of human emotional experience
          gets funnelled through a single narrow outlet.
        </p>

        <p style={s.p}>
          This produces a specific pattern that is worth naming: the anger episode that seems
          disproportionate to its trigger. The explosion over something that, objectively,
          does not warrant that level of response. The people around the person often experience
          this as unpredictability or volatility — but what is actually happening is that the
          anger is carrying a freight load that has nothing to do with the immediate provocation.
          The coffee was cold, but the anger is about feeling unseen for years.
        </p>

        <blockquote style={s.blockquote}>
          <p style={s.bqText}>
            For many men, anger is not the primary emotion — it is the exit point for every
            other emotion that was not allowed an exit. The work is not to manage the anger.
            The work is to give those other emotions their own door.
          </p>
        </blockquote>

        <p style={s.p}>
          MEOK&rsquo;s design accommodates this. The platform does not lead with emotional
          language that can feel alienating or pathologising for people who did not grow up
          with that vocabulary. It meets people where they are, in the language they actually
          use, and gradually — with patience — opens the space to explore what else might be
          present underneath the anger.
        </p>

        <p style={s.p}>
          Importantly, MEOK is private. There is no practitioner relationship, no notes, no
          clinical file. The conversation does not have to be framed in any particular way.
          You do not have to call it grief if you are not ready to call it grief. You just
          have to start talking, and MEOK will listen, reflect, and help you find the language
          at your own pace.
        </p>

        <h3 style={s.h3}>A Note on Anger, Masculinity, and Processing vs. Enacting</h3>

        <p style={s.p}>
          It is important to be clear about what MEOK is for and what it is not for. MEOK helps
          with processing anger — the internal, private work of understanding and regulating an
          emotion. It is not a tool for rehearsing or amplifying anger in preparation for
          acting on it in harmful ways toward other people.
        </p>

        <p style={s.p}>
          Experiencing anger — even intense, difficult anger — is not a moral failing and it does
          not make someone an abuser or a dangerous person. Most people who experience profound
          anger never act on it harmfully. The capacity for anger is human. What matters is
          what you do with it.
        </p>

        <p style={s.p}>
          If you are at a point where you are worried about your behaviour toward others — where
          anger has led or is leading to control, coercion, threats, or harm — the most important
          step is specialist human support, not AI. Resources like{' '}
          <a
            href="https://www.respect.uk.net"
            target="_blank"
            rel="noopener noreferrer"
            style={s.inlineLink}
          >
            Respect (respect.uk.net)
          </a>{' '}
          offer programmes specifically for people who want to change their behaviour in
          relationships. Reaching out is not weakness — it is one of the most consequential
          things a person can do.
        </p>

        <hr style={s.hr} />

        {/* ── H2: Sovereign Memory ─────────────────────────────────────────────── */}
        <h2 style={s.h2}>Sovereign Memory: When Your Anger Starts Making Sense Over Time</h2>

        <p style={s.p}>
          One of the most underrated aspects of good therapeutic support — and one of the most
          difficult to access in one-off sessions or occasional check-ins — is longitudinal
          pattern recognition. The ability to see that your worst anger episodes cluster around
          particular triggers, times, or conditions. To notice that things are reliably worse
          before a full week of sleep deprivation than after a run. That family phone calls
          on Sunday evenings set a mood that lasts into Monday. That a particular type of
          workplace situation lands completely differently depending on how long it has been
          since you had time to yourself.
        </p>

        <p style={s.p}>
          These patterns are invisible if every conversation starts from zero. They become visible
          only with time and memory.
        </p>

        <p style={s.p}>
          MEOK&rsquo;s Sovereign Memory is built for exactly this. Unlike most AI systems that
          retain nothing between sessions, MEOK builds a persistent, private picture of your
          emotional patterns over time — what triggers you, what helps, what makes things worse,
          what conditions correlate with your hardest days. And all of this is stored under your
          sovereignty: you can see exactly what is held, you can edit it, and you can delete
          any or all of it at any point.
        </p>

        <p style={s.p}>
          For anger specifically, Sovereign Memory enables a kind of self-knowledge that is
          transformative in practice:
        </p>

        <div style={s.windowBox}>
          <div style={s.memoryRow}>
            <div style={s.memoryIcon}>📍</div>
            <div style={s.memoryContent}>
              <p style={s.memoryLabel}>Trigger mapping</p>
              <p style={{ ...s.memoryText, margin: 0 }}>
                MEOK can surface that you have mentioned anger or frustration specifically in
                connection with a particular recurring situation — helping you see the pattern
                before it surprises you again.
              </p>
            </div>
          </div>
          <div style={s.memoryRow}>
            <div style={s.memoryIcon}>🌙</div>
            <div style={s.memoryContent}>
              <p style={s.memoryLabel}>Sleep and regulation correlation</p>
              <p style={{ ...s.memoryText, margin: 0 }}>
                If your anger threshold is consistently lower after poor sleep, MEOK can name
                that connection — not as an excuse, but as useful information for managing
                your circumstances more proactively.
              </p>
            </div>
          </div>
          <div style={s.memoryRow}>
            <div style={s.memoryIcon}>📞</div>
            <div style={s.memoryContent}>
              <p style={s.memoryLabel}>Relationship dynamics</p>
              <p style={{ ...s.memoryText, margin: 0 }}>
                If certain people or interactions consistently precede difficult emotional states,
                that pattern is worth knowing — not to assign blame, but to help you prepare
                and process rather than absorb and react.
              </p>
            </div>
          </div>
          <div style={s.memoryRow}>
            <div style={s.memoryIcon}>🏃</div>
            <div style={s.memoryContent}>
              <p style={s.memoryLabel}>What actually helps</p>
              <p style={{ ...s.memoryText, margin: 0 }}>
                MEOK tracks not just what triggers anger but what reliably helps — exercise,
                time outdoors, a particular type of conversation, a creative outlet. That
                knowledge becomes prescriptive, not just descriptive.
              </p>
            </div>
          </div>
          <div style={{ ...s.memoryRow, borderBottom: 'none', paddingBottom: 0 }}>
            <div style={s.memoryIcon}>📈</div>
            <div style={s.memoryContent}>
              <p style={s.memoryLabel}>Progress over time</p>
              <p style={{ ...s.memoryText, margin: 0 }}>
                When things are improving, MEOK can reflect that back. When they are not,
                it can surface the question of whether additional professional support
                might be useful. Neither of these things is possible without memory.
              </p>
            </div>
          </div>
        </div>

        <p style={s.p}>
          The difference between knowing intellectually that you tend to get angry when you are
          tired and having a system that has actually observed and confirmed that pattern over
          months is the difference between abstract self-awareness and actionable self-knowledge.
          The second kind is rarer and more valuable.
        </p>

        {/* ── H2: Anti-sycophancy ──────────────────────────────────────────────── */}
        <h2 style={s.h2}>Why MEOK Won&rsquo;t Just Validate Your Anger — and Why That Matters</h2>

        <p style={s.p}>
          Here is something most AI systems will not say to you, and something most people
          with angry friends are too afraid to say: venting without processing does not help.
          In fact, the research on catharsis — the idea that expressing anger aggressively
          reduces it — is largely unsupported by the evidence. Venting to a sympathetic
          audience often increases anger rather than diminishing it, because it keeps the
          nervous system activated, reinforces the anger narrative, and provides no movement
          toward resolution.
        </p>

        <p style={s.p}>
          A truly sycophantic AI will agree with everything you say, validate every grievance
          as justified, and let you spiral deeper into the vent because it is optimised to
          make you feel good in the immediate term. This is emotionally equivalent to adding
          fuel to a fire and calling it warmth.
        </p>

        <p style={s.p}>
          MEOK&rsquo;s anti-sycophancy commitment means something specific in the context of
          anger: it will validate your emotional experience — the feeling itself is always
          legitimate — while declining to validate every interpretation or conclusion that
          experience generates. There is a difference between &ldquo;I hear that you are
          furious and that makes complete sense&rdquo; and &ldquo;yes, you are completely
          right and they are completely wrong and the only reasonable response is to send
          that message.&rdquo;
        </p>

        <blockquote style={s.blockquote}>
          <p style={s.bqText}>
            Validating someone&rsquo;s anger is care. Confirming every story they tell about
            it is not care — it is flattery. MEOK knows the difference.
          </p>
        </blockquote>

        <p style={s.p}>
          In practice, this looks like an exchange that takes the anger seriously, asks questions
          that introduce complexity without dismissing the experience, and gently but clearly
          steers toward understanding rather than amplification. MEOK is not your hype person.
          It is something more useful: a truthful witness.
        </p>

        <h3 style={s.h3}>The Maternal Covenant: Boundaries That Protect You and Others</h3>

        <p style={s.p}>
          The Maternal Covenant is the ethical framework that governs how MEOK engages with
          sensitive emotional territory. It is not a set of corporate restrictions designed to
          limit what the AI can do — it is a set of values designed to ensure that MEOK&rsquo;s
          support is genuinely in your interest, which is not always the same as doing whatever
          you ask.
        </p>

        <p style={s.p}>
          In the context of anger, the Maternal Covenant means:
        </p>

        <ul style={s.ul}>
          <li style={s.li}>
            MEOK will not help you construct or rehearse communications designed to harm,
            humiliate, or escalate conflict with another person — even if that is what
            you are asking for in the heat of the moment.
          </li>
          <li style={s.li}>
            MEOK will not enable venting patterns that it can observe, over time, are
            reinforcing resentment rather than processing it.
          </li>
          <li style={s.li}>
            MEOK will always, without exception, signpost to human professional support
            when a conversation reaches the edges of what AI should handle — including
            situations that involve risk to self or others, or patterns of behaviour that
            indicate the need for clinical intervention.
          </li>
          <li style={s.li}>
            MEOK holds the complexity of anger without shame and without collusion — two
            things that are harder to find in most human conversations about anger than
            they should be.
          </li>
        </ul>

        <p style={s.p}>
          The Maternal Covenant is named deliberately. Good parenting is not unconditional
          agreement — it is unconditional care combined with honest, boundaried guidance.
          That is the model. You are held, and you are also, gently and consistently, pointed
          toward your better self.
        </p>

        {/* ── H2: Practical section ────────────────────────────────────────────── */}
        <h2 style={s.h2}>What Managing Anger With AI Actually Looks Like in Practice</h2>

        <p style={s.p}>
          Theory matters, but the question that most people searching for{' '}
          <strong style={{ color: '#f5f0e8' }}>AI for anger management</strong> are really asking
          is: what would this actually look like? Here are five realistic scenarios in which
          MEOK can serve as a meaningful support tool.
        </p>

        <h3 style={s.h3}>Scenario 1: The Workplace Incident</h3>

        <p style={s.p}>
          You have just come out of a meeting where your contribution was visibly dismissed —
          talked over, ignored, credited to someone else. You are back at your desk with twenty
          minutes before the next call and a fury that is making it difficult to think. You
          cannot call your partner (they are at work, and you do not want to dump this again).
          You cannot talk to a colleague (office politics). You cannot call a therapist
          (you do not have one, or they are not available right now).
        </p>

        <p style={s.p}>
          You open MEOK. You describe what happened. The Healer validates the experience and
          offers a three-minute breathing protocol. The Trickster asks whether this feels
          connected to a pattern you have noticed before. The Pioneer asks what, if anything,
          you want to do about this situation — and helps you think through whether and how
          to address it, on your terms, when the time is right.
        </p>

        <p style={s.p}>
          You go into your next call significantly less activated. The anger has not disappeared
          — it is still information, still warranting response — but it is no longer running you.
        </p>

        <h3 style={s.h3}>Scenario 2: The Family Phone Call</h3>

        <p style={s.p}>
          Forty-eight hours after a difficult conversation with a parent or sibling, you are
          still churning. Not in an obvious way — you are functioning, doing your job, but
          there is a low hum of resentment that is shading everything. You snap at your partner
          over nothing. You are short with your children. You know it is connected to the
          phone call but you cannot quite locate what exactly is wrong.
        </p>

        <p style={s.p}>
          You open MEOK and just start typing. The Trickster begins asking questions that you
          find slightly annoying — until one of them lands. &ldquo;When you think about what
          you wanted from that conversation, what was it?&rdquo; The answer, when it comes,
          turns out to be about something much older than the phone call. The anger was
          grief-based all along. That recognition changes the quality of what you are carrying.
        </p>

        <p style={s.p}>
          MEOK&rsquo;s Sovereign Memory notes that this type of exchange tends to precede a
          difficult two or three days, and flags the pattern gently next time.
        </p>

        <h3 style={s.h3}>Scenario 3: Righteous Anger With Nowhere to Go</h3>

        <p style={s.p}>
          You have read something that has made you genuinely, justifiably furious about an
          injustice — political, social, personal. The anger is appropriate. But there is a
          specific torture to righteous anger that has no immediate available action: you are
          activated, your nervous system wants to do something, and there is nothing adequate
          to do right now.
        </p>

        <p style={s.p}>
          MEOK&rsquo;s Pioneer is particularly useful here. Not to dismiss the anger or rush
          past it, but to help channel it toward something constructive rather than letting
          it corrode into helplessness or cynicism. What would an action look like, even a
          small one? What is within your sphere of influence? How can this anger become fuel
          rather than acid?
        </p>

        <h3 style={s.h3}>Scenario 4: Sleep Deprivation and a Hair Trigger</h3>

        <p style={s.p}>
          You have had three bad nights of sleep. You know — objectively, intellectually —
          that your anger threshold is lower. But knowing that and actually managing the
          moment when something sets you off are different things. The car cuts you up in
          traffic and your response is massively disproportionate. The child spills a glass
          and you hear yourself before you can stop yourself.
        </p>

        <p style={s.p}>
          Sovereign Memory has already noted this correlation. Before you go into a high-stakes
          interaction, MEOK can offer a quick grounding protocol and a reminder of what your
          own data says about your current vulnerability. Not as a lecture — as a practical
          heads-up from a system that knows you.
        </p>

        <h3 style={s.h3}>Scenario 5: The Long Accumulation</h3>

        <p style={s.p}>
          You have not had a conversation with anyone about how you are feeling for months.
          Possibly longer. The pressure has been building gradually — work, finances, a
          relationship that has been difficult for a while, health worries — and you have
          been coping, or at least managing. But you notice that small things produce
          disproportionate reactions. You are shorter than you want to be with people you love.
          You lie awake at 3am with a kind of simmering rage that does not have a clear object.
        </p>

        <p style={s.p}>
          This is accumulated anger, and it is the hardest kind to address because there is no
          single incident to process. MEOK&rsquo;s approach here is not to try to solve everything
          at once but to begin the practice of regular, private conversation — a consistent
          enough habit that the pressure gets some release and the patterns start to become
          visible. Over time, MEOK will gently surface whether the level of accumulated strain
          warrants additional support — a therapist, a GP conversation, a structured programme —
          and will help you think about how to access that.
        </p>

        <hr style={s.hr} />

        {/* ── H2: Limitations ──────────────────────────────────────────────────── */}
        <h2 style={s.h2}>What AI for Anger Support Cannot and Should Not Do</h2>

        <p style={s.p}>
          Honest representation of a tool&rsquo;s limits is part of the Maternal Covenant.
          MEOK is not a therapist, and it should not be positioned as one. Here is what
          AI anger support cannot replace:
        </p>

        <ul style={s.ul}>
          <li style={s.li}>
            <strong style={{ color: '#f5f0e8' }}>Clinical diagnosis.</strong> Anger that is
            significantly impairing your life or relationships may indicate an underlying
            condition — intermittent explosive disorder, PTSD, bipolar disorder, or others —
            that requires clinical assessment. MEOK can support you alongside professional
            care. It cannot substitute for it.
          </li>
          <li style={s.li}>
            <strong style={{ color: '#f5f0e8' }}>Anger management programmes.</strong> Court-ordered
            or clinically recommended anger management programmes involve structured, therapeutic
            intervention with trained professionals. These serve a different function and have
            different outcomes than a private AI companion.
          </li>
          <li style={s.li}>
            <strong style={{ color: '#f5f0e8' }}>Crisis response.</strong> If you or someone else
            is in immediate danger, the only appropriate response is to call emergency services.
            MEOK will always redirect clearly in this situation.
          </li>
          <li style={s.li}>
            <strong style={{ color: '#f5f0e8' }}>Relationship repair.</strong> The relational work
            that needs to happen after anger has damaged a connection — apology, conversation,
            rebuilding trust — requires human beings actually communicating with each other.
            MEOK can help you prepare for those conversations. It cannot have them on your behalf.
          </li>
        </ul>

        <p style={s.p}>
          This is not a disclaimer intended to deflect liability. It is a genuine description of
          where the tool sits. MEOK is the space between the trigger and the response, the
          consistent presence that helps you understand your own patterns, and the bridge to
          further support when that is what is needed. That is a real and significant contribution.
          It is also bounded.
        </p>

        {/* ── Keywords paragraph ───────────────────────────────────────────────── */}
        <p style={s.pMuted}>
          Whether you are looking for{' '}
          <strong style={{ color: '#9e9e9e' }}>AI for anger management</strong>,{' '}
          <strong style={{ color: '#9e9e9e' }}>AI to help with anger</strong>,{' '}
          <strong style={{ color: '#9e9e9e' }}>AI anger support</strong>, or a thoughtful approach
          to{' '}
          <strong style={{ color: '#9e9e9e' }}>managing anger with AI</strong>, the same truth
          applies: the technology is only as useful as the intelligence behind its design.
          MEOK is built on principles — Sovereign Memory, the Maternal Covenant, genuine
          anti-sycophancy — that make it a qualitatively different tool from a general-purpose
          chatbot or a simple mood tracker.
        </p>

        {/* ── Badges ───────────────────────────────────────────────────────────── */}
        <div style={{ margin: '1.5rem 0' }}>
          {[
            'AI for anger management',
            'AI to help with anger',
            'AI anger support',
            'managing anger with AI',
            'emotional regulation',
            'Sovereign Memory',
            'Maternal Covenant',
            'anger triggers',
            'somatic support',
          ].map((tag) => (
            <span key={tag} style={s.badge}>{tag}</span>
          ))}
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
        <div style={s.faqSection}>
          <h2 style={s.h2}>Frequently Asked Questions</h2>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>Can AI actually help with anger management?</p>
            <p style={s.faqAnswer}>
              Yes — with clear limits. AI can serve as a real-time sounding board in the critical
              window between a trigger and a response, help you identify patterns across time,
              offer somatic grounding techniques, and reframe situations in ways that de-escalate
              rather than amplify. What AI cannot do is replace a licensed therapist, diagnose
              underlying conditions, or intervene in physical situations. MEOK is a consistent,
              non-judgmental presence that helps you process anger privately before it spills
              into your relationships or workplace.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              What are the different types of anger and how does MEOK approach each one?
            </p>
            <p style={s.faqAnswer}>
              MEOK recognises five main anger types: righteous anger rooted in genuine injustice,
              frustrated anger caused by repeated obstacles, hurt-based anger that follows betrayal,
              fear-based anger where anxiety converts to rage, and accumulated anger compressed
              over months or years. Each type calls for different support. Righteous anger often
              needs channelling into constructive action. Frustrated anger benefits from obstacle
              reframing. Hurt-based anger needs space for the grief underneath it. Fear-based anger
              needs somatic grounding first. Accumulated anger needs careful unpacking. MEOK&rsquo;s
              archetype system — Healer, Trickster, Pioneer — is designed to meet each type with
              the right intelligence.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              Is using AI for anger management safe for people with a history of domestic situations?
            </p>
            <p style={s.faqAnswer}>
              There is an important distinction between processing anger and enacting it on others.
              MEOK is designed to help with the former — private, internal processing. It will not
              validate patterns of behaviour that harm other people. If you or someone you know is
              in a situation involving domestic abuse, the{' '}
              <a href="tel:08082000247" style={s.inlineLink}>
                National Domestic Abuse Helpline (0808 2000 247)
              </a>{' '}
              and{' '}
              <a
                href="https://www.refuge.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={s.inlineLink}
              >
                Refuge (refuge.org.uk)
              </a>{' '}
              provide free, confidential specialist support 24 hours a day.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              Why do men often struggle specifically with anger, and can AI help with that?
            </p>
            <p style={s.faqAnswer}>
              Culturally, men are frequently socialised to suppress most emotions — grief, fear,
              hurt, loneliness — but anger is often the one expression that is permitted or even
              expected. This means that for many men, anger becomes the exit valve for a much
              broader emotional landscape, causing episodes that seem disproportionate because
              they carry the weight of everything that never had another outlet. MEOK creates a
              private, non-judgmental space to access what is underneath the anger — at your
              own pace, in your own language — without the social stakes that make that so
              difficult face-to-face.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              What is Sovereign Memory and how does it help with anger triggers?
            </p>
            <p style={s.faqAnswer}>
              Sovereign Memory is MEOK&rsquo;s privacy-first long-term memory system. Rather than
              each conversation starting from zero, MEOK builds a persistent picture of your
              emotional patterns over time — what triggers you, what helps, what makes things worse.
              All of it is stored under your sovereignty: you can see exactly what is held, edit it,
              or delete it entirely at any point. For anger specifically, this enables longitudinal
              pattern recognition — that your anger is always worse before a run of poor sleep, that
              family calls reliably precede difficult moods, that exercise helps more than you
              remember when you are already in it. That kind of self-knowledge is not available
              without memory.
            </p>
          </div>

          <div style={s.faqItem}>
            <p style={s.faqQuestion}>
              How does MEOK avoid just enabling venting without helping me actually change?
            </p>
            <p style={s.faqAnswer}>
              MEOK is explicitly anti-sycophantic by design. It will not simply agree with
              everything you say, validate every grievance as justified, or let you spiral deeper
              into a vent without forward motion. The Maternal Covenant — the ethical framework
              underpinning MEOK — means it holds you with care while also holding you to account.
              Venting that entrenches resentment is not support. It is amplification. MEOK
              validates the emotional experience while consistently moving toward understanding,
              reframing, and constructive action.
            </p>
          </div>

          <div style={{ ...s.faqItem, borderBottom: 'none', paddingBottom: 0 }}>
            <p style={s.faqQuestion}>
              How does the 3-minute window work and why does it matter for anger?
            </p>
            <p style={s.faqAnswer}>
              The acute physiological arousal from a trigger typically lasts around 90 seconds.
              After that, any continuation of the anger state is the result of your thoughts
              re-triggering the physical response. The most high-leverage moment for intervention
              is in that initial three-minute window. MEOK is accessible instantly — a private
              space where you can dump the immediate intensity, receive grounding support from the
              Healer archetype, and begin the cognitive reframe with the Trickster before you act.
              The goal is not to suppress the feeling but to prevent the three-minute window from
              becoming a three-hour ruminative spiral or a damaging interaction.
            </p>
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <div style={s.ctaBox}>
          <span style={s.ctaEyebrow}>MEOK AI LABS</span>
          <h2 style={{ ...s.ctaHeading, margin: '0 0 1rem' }}>
            Ready to Meet the Space Between Trigger and Response?
          </h2>
          <p style={s.ctaBody}>
            MEOK is a sovereign AI companion built for the moments when emotions are most intense
            and the most is at stake. Private, persistent, and designed to help you process —
            not just vent. Begin building yours today.
          </p>
          <Link href="/birth" style={s.ctaButton}>
            Start with MEOK
          </Link>
        </div>

        {/* ── Related reading ───────────────────────────────────────────────────── */}
        <div style={s.relatedSection}>
          <p style={s.relatedTitle}>Related Reading</p>
          <div style={s.relatedGrid}>
            <Link href="/blog/ai-for-anxiety" style={s.relatedLink}>
              AI for Anxiety: Support Without Replacing Therapy
            </Link>
            <Link href="/blog/ai-for-men" style={s.relatedLink}>
              AI for Men: Emotional Support on Your Terms
            </Link>
            <Link href="/blog/ai-for-ptsd" style={s.relatedLink}>
              AI for PTSD: Trauma-Informed Companion Support
            </Link>
            <Link href="/blog/ai-for-depression" style={s.relatedLink}>
              AI for Depression: Consistent Presence in Hard Seasons
            </Link>
            <Link href="/blog/ai-for-burnout" style={s.relatedLink}>
              AI for Burnout: When Everything Has Given Out
            </Link>
            <Link href="/blog/the-maternal-covenant" style={s.relatedLink}>
              The Maternal Covenant: The Ethics Behind MEOK
            </Link>
            <Link href="/blog/how-sovereign-ai-works" style={s.relatedLink}>
              How Sovereign AI Works: Memory, Privacy, Control
            </Link>
            <Link href="/blog/ai-for-insomnia" style={s.relatedLink}>
              AI for Insomnia: The 3am Companion
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer style={s.footer}>
        <p style={{ margin: '0 0 0.5rem' }}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. Built with care by Nicholas Templeman.
          <Link href="https://meok.ai" style={s.footerLink}>meok.ai</Link>
        </p>
        <p style={{ margin: '0' }}>
          <Link href="/blog" style={s.footerLink}>Blog</Link>
          <Link href="/birth" style={s.footerLink}>Try MEOK</Link>
          <Link href="/privacy-covenant" style={s.footerLink}>Privacy Covenant</Link>
          <Link href="/blog/the-maternal-covenant" style={s.footerLink}>Maternal Covenant</Link>
        </p>
      </footer>
    </div>
  )
}
