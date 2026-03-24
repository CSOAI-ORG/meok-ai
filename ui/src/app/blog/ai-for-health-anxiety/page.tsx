import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Health Anxiety: Breaking the Google Spiral at 2am | MEOK AI LABS',
  description:
    'AI for health anxiety, hypochondria support, and health OCD — how MEOK processes the fear behind the symptom search instead of feeding the doom-loop. With UK crisis resources and clear disclaimers.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-health-anxiety' },
  openGraph: {
    title: 'AI for Health Anxiety: Breaking the Google Spiral at 2am',
    description:
      'AI for health anxiety, hypochondria support, and health OCD — how MEOK processes the fear behind the symptom search instead of feeding the doom-loop.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-health-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Health+Anxiety%3A+Breaking+the+Google+Spiral+at+2am&desc=Processing+the+fear+behind+the+symptom+search',
        width: 1200,
        height: 630,
        alt: 'AI for Health Anxiety: Breaking the Google Spiral at 2am | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Health Anxiety: Breaking the Google Spiral at 2am',
    description:
      'How MEOK processes the fear behind the symptom search instead of feeding the doom-loop. AI for hypochondria, health OCD, and cyberchondria.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Health+Anxiety%3A+Breaking+the+Google+Spiral+at+2am&desc=Processing+the+fear+behind+the+symptom+search',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Health Anxiety: Breaking the Google Spiral at 2am',
  description:
    'How AI can help with health anxiety, hypochondria, and health OCD by processing the fear behind the symptom search — not feeding the doom-loop. Includes Sovereign Memory pattern recognition, anti-reassurance-seeking design, and UK crisis resources.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-health-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-health-anxiety',
  },
  keywords: [
    'AI for health anxiety',
    'AI to help with hypochondria',
    'AI support for health OCD',
    'dealing with health anxiety with AI',
    'cyberchondria',
    'health anxiety support UK',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI actually help with health anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — but only if it is designed specifically to address the anxiety rather than the symptom. Most AI tools make health anxiety worse by acting as a more sophisticated Google: they feed information, generate reassurance, and never interrupt the doom-loop. MEOK is built differently. It redirects the conversation from "what is this symptom?" to "what is this fear trying to tell you?" — which is the move that evidence-based therapies like ACT and CBT both endorse. MEOK is not a medical diagnosis tool and will always direct you to a GP or NHS 111 for clinical concerns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does googling symptoms make health anxiety worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Googling symptoms triggers a reassurance-seeking cycle. You get momentary relief when you find a benign explanation — but that relief lasts minutes before the anxiety reattaches to a new symptom or reinterprets the same data. Over time your brain learns that googling "works" (produces relief), so it demands the behaviour more frequently. Each cycle also expands your threat model: you discover new diseases you had never worried about before. MEOK interrupts this cycle by naming it, sitting with the underlying fear, and helping you defuse from the thought rather than investigate it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between health anxiety and health OCD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Health anxiety (also called illness anxiety disorder or, historically, hypochondria) involves persistent fear that one has or will develop a serious illness, often driven by misinterpretation of normal body sensations. Health OCD is a subtype of Obsessive-Compulsive Disorder where intrusive health-related thoughts trigger compulsive behaviours — repeated checking, googling, doctor visits, body scanning — as rituals. The distinction matters clinically because OCD responds best to ERP (Exposure and Response Prevention), whereas health anxiety often responds to CBT and ACT. If you suspect OCD is the driver, OCD-UK (ocduk.org) is an excellent starting point. Either way, MEOK is a support tool — not a diagnostic instrument.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK avoid making health anxiety worse through reassurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is built with an anti-reassurance-seeking design principle. It will not simply say "you are probably fine" — because that statement, however well-intentioned, feeds the very cycle it appears to resolve. Instead MEOK uses Sovereign Memory to notice patterns (your health anxiety spikes the week before significant events), uses the Scholar archetype to offer cognitive defusion from anxious thoughts, and uses the Healer archetype to bring nervous system regulation into the conversation. The goal is to help you process the fear itself — not to answer the symptom question the fear is using as its vehicle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a replacement for seeing a GP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — absolutely not. MEOK is not a medical tool, does not diagnose, and is not a substitute for clinical assessment. If you have a physical symptom that concerns you, the right move is always to contact your GP or call NHS 111. MEOK is for the emotional and psychological layer of health anxiety — the fear, the spiral, the catastrophic thinking — not for evaluating whether a symptom is medically significant. MEOK will always signpost to professional care when clinical concern is raised.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does post-pandemic health anxiety differ and can AI help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-pandemic health anxiety involves residual hypervigilance towards body sensations — particularly respiratory symptoms, fatigue, and brain fog — that were genuinely dangerous during COVID-19. Many people who were careful during the pandemic cannot switch off the threat-detection system. This is not irrational; it is a trained nervous system response that has not yet received the all-clear signal. MEOK\'s Healer archetype is specifically oriented around nervous system regulation and somatic reassurance — helping the body learn that the emergency is over, rather than simply telling the mind.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK resources exist for health anxiety and health OCD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For health anxiety: your GP is the first port of call; they can refer to NHS Talking Therapies (self-referral also available in most areas) for CBT. For health OCD specifically: OCD-UK (ocduk.org) provides information and support; OCD Action (ocdaction.org.uk) has a helpline. For urgent mental health support: NHS 111 option 2. Samaritans: 116 123 (free, 24/7). In a life-threatening emergency call 999. Mind infoline: 0300 123 3393.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = '#9e9e9e'
const MUTED_SOFT = 'rgba(245,240,232,0.62)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const HEALER_GREEN = '#4caf82'
const SCHOLAR_BLUE = '#5b9bd5'
const TRICKSTER_AMBER = '#e8a045'
const BORDER = 'rgba(201,168,76,0.18)'
const CARD_BG = 'rgba(255,255,255,0.03)'
const WARNING_BG = 'rgba(232,160,69,0.08)'
const WARNING_BORDER = 'rgba(232,160,69,0.35)'
const DANGER_BG = 'rgba(220,80,80,0.07)'
const DANGER_BORDER = 'rgba(220,80,80,0.3)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForHealthAnxietyPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, color: TEXT, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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
              'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
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

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            {['Health Anxiety', 'Mental Wellbeing', 'Sovereign AI'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  background: 'rgba(201,168,76,0.1)',
                  border: `1px solid rgba(201,168,76,0.25)`,
                  borderRadius: '999px',
                  padding: '0.25rem 0.75rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: TEXT,
              marginBottom: '1.25rem',
            }}
          >
            AI for Health Anxiety: Breaking the Google Spiral at 2am
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              lineHeight: 1.7,
              color: MUTED_SOFT,
              marginBottom: '2rem',
            }}
          >
            You know the loop. A twinge in your chest. A headache that will not shift. A mole that was not
            there last week — or was it? You open a browser tab at 2am and type the symptom. Forty-five minutes
            later you have convinced yourself of three different diagnoses, none of them good. The anxiety
            that sent you to Google is now ten times worse than when you started.
          </p>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              lineHeight: 1.7,
              color: MUTED_SOFT,
              marginBottom: '2rem',
            }}
          >
            This is cyberchondria — and it affects millions of people, accelerated by the pandemic, sustained
            by a nervous system that has not received the all-clear. This guide explores how AI for health
            anxiety can work differently: not as a more sophisticated search engine, but as a companion that
            helps you process the fear behind the symptom search.
          </p>

          {/* Author + date */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${GOLD} 0%, rgba(201,168,76,0.4) 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 700,
                color: BG,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: TEXT, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.8rem', color: MUTED, margin: 0 }}>
                Founder, MEOK AI LABS &nbsp;·&nbsp; 24 March 2026 &nbsp;·&nbsp; 16 min read
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDICAL DISCLAIMER ────────────────────────────────────────────────── */}
      <section style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '2.5rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div
            style={{
              background: DANGER_BG,
              border: `1px solid ${DANGER_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: 1.65,
                color: MUTED_SOFT,
                margin: 0,
              }}
            >
              <strong style={{ color: '#e05555' }}>Important:</strong> This article is for informational
              purposes only. MEOK is not a medical device, does not diagnose, and is not a substitute for
              clinical assessment. If you have a physical symptom that concerns you, contact your{' '}
              <strong style={{ color: TEXT }}>GP</strong> or call{' '}
              <strong style={{ color: TEXT }}>NHS 111</strong>. In an emergency call{' '}
              <strong style={{ color: TEXT }}>999</strong>. For urgent mental health support call{' '}
              <strong style={{ color: TEXT }}>NHS 111 option 2</strong> or Samaritans on{' '}
              <strong style={{ color: TEXT }}>116 123</strong> (free, 24/7).
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <main style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          {/* ── SECTION 1: What is health anxiety ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              What Is Health Anxiety — and Why Is It So Common Right Now?
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Health anxiety — formally called Illness Anxiety Disorder, and previously known as hypochondria
              — is the persistent, disproportionate fear that one has or will develop a serious illness. It is
              not vanity or weakness. It is a threat-detection system running on the wrong calibration.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              The nervous system's job is to protect you. When it misidentifies normal bodily sensations — a
              heartbeat you suddenly notice, a fleeting headache, a bit of stiffness — as potential threats,
              it triggers the same physiological alarm response as a genuine danger. That alarm feels
              real, which makes the fear feel rational, which sustains the loop.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Estimates suggest health anxiety affects between 4% and 10% of the general population —
              but those numbers almost certainly undercount the post-pandemic reality. The COVID-19 pandemic
              trained hundreds of millions of people to monitor their bodies for symptoms. For those already
              predisposed to anxiety, that training did not simply switch off when lockdowns ended. Residual
              hypervigilance, Long COVID symptom uncertainty, and shattered trust in official health
              communication created a perfect environment for health anxiety to deepen.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Add to this the architecture of the modern internet — symptom checkers designed to keep you
              clicking, health forums full of worst-case anecdotes, social media algorithms that serve you
              exactly the health horror stories most likely to resonate with your specific fear — and the
              conditions for a sustained health anxiety epidemic are in place.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              You are not irrational. Your nervous system is responding to an environment that was built
              partly to exploit the very mechanism health anxiety uses. That is the first thing worth
              understanding before we discuss how <em>dealing with health anxiety with AI</em> might look.
            </p>
          </section>

          {/* ── 5 PATTERNS ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}
            >
              Five Health Anxiety Patterns That AI Must Not Reinforce
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.75rem' }}>
              Before we can talk about how AI to help with hypochondria should work, we need to name the
              patterns that a poorly designed AI will make worse. Any tool that positions itself as AI for
              health anxiety needs to understand the mechanism it is trying to interrupt — not just the
              surface-level behaviour.
            </p>

            {/* Pattern 1 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(201,168,76,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  🔍
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: '0.5rem',
                    }}
                  >
                    1. Cyberchondria — The Dr. Google Doom-Loop
                  </h3>
                  <p style={{ fontSize: '0.97rem', lineHeight: 1.7, color: MUTED_SOFT, margin: 0 }}>
                    Cyberchondria is the escalation of health anxiety through online symptom research.
                    The mechanism is well documented in the psychological literature: you search a
                    symptom, the algorithm surfaces serious diagnoses alongside benign ones, you read
                    the serious ones first (negativity bias), your anxiety rises, you search more to
                    find reassurance, the cycle tightens. Each cycle also expands your threat catalogue —
                    you discover diseases you had never feared before. An AI that acts as a smarter
                    symptom checker replicates this dynamic with greater efficiency. MEOK refuses to be
                    that tool.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 2 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(201,168,76,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  🔁
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: '0.5rem',
                    }}
                  >
                    2. Reassurance-Seeking — Temporary Relief That Maintains the Cycle
                  </h3>
                  <p style={{ fontSize: '0.97rem', lineHeight: 1.7, color: MUTED_SOFT, margin: 0 }}>
                    Seeking reassurance — from a partner, from a GP, from Google, from an AI — provides
                    momentary relief. That relief can last minutes to hours before the anxiety reconstitutes
                    itself around the same or a new fear. The brain has learned: when anxious, seek
                    reassurance; relief arrives; repeat. Over time the intervals between reassurance-seeking
                    episodes shorten. The behaviour is maintained precisely because it works in the short
                    term. An AI that says "you're probably fine" is providing temporary relief at the cost
                    of long-term reinforcement. This is why MEOK's anti-reassurance design is one of its
                    most important safety features for health anxiety users.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 3 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(201,168,76,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  👁
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: '0.5rem',
                    }}
                  >
                    3. Body-Scanning Hypervigilance
                  </h3>
                  <p style={{ fontSize: '0.97rem', lineHeight: 1.7, color: MUTED_SOFT, margin: 0 }}>
                    The body is a vast sensory field. Normal people ignore the vast majority of their
                    bodily sensations — slight muscle twitches, temporary pressure changes, the faint
                    asymmetries of normal organ function. Health anxiety involves a narrowed attentional
                    spotlight that is chronically pointed inward, scanning for anomalies. This hypervigilance
                    creates a paradox: the more you scan, the more sensations you detect, the more data
                    you have to misinterpret as threat. An AI that invites users to describe symptoms in
                    increasing detail is inadvertently reinforcing this attentional pattern.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 4 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(201,168,76,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  ⚠️
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: '0.5rem',
                    }}
                  >
                    4. Catastrophisation
                  </h3>
                  <p style={{ fontSize: '0.97rem', lineHeight: 1.7, color: MUTED_SOFT, margin: 0 }}>
                    Catastrophisation is the cognitive distortion of jumping to worst-case conclusions.
                    In health anxiety it operates at speed: headache becomes brain tumour; fatigue becomes
                    cancer; a skipped heartbeat becomes cardiac arrest. The jump happens in milliseconds,
                    below conscious awareness, and arrives as a felt certainty rather than a hypothesis.
                    Challenging catastrophisation requires slowing the cognitive process, examining the
                    inference chain, and introducing doubt — not by dismissing the fear, but by widening
                    the probability space. This is precisely the kind of work the Scholar archetype in MEOK
                    is built to facilitate.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 5 */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(201,168,76,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  🚪
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: '0.5rem',
                    }}
                  >
                    5. Avoidance of Health Checks
                  </h3>
                  <p style={{ fontSize: '0.97rem', lineHeight: 1.7, color: MUTED_SOFT, margin: 0 }}>
                    Health anxiety does not always look like compulsive medical seeking. For a significant
                    subset of sufferers it looks like the opposite: avoiding GPs, refusing smear tests,
                    not going for routine blood work, because the fear of confirmation is greater than
                    the fear of ignorance. This avoidance is paradoxically dangerous — it means real
                    conditions go undetected — and it is powered by anxiety, not logic. An AI for health
                    anxiety must be able to gently support someone towards appropriate healthcare without
                    triggering the avoidance response or, conversely, fuelling health anxiety in those
                    who over-seek.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── WHY GOOGLING MAKES IT WORSE ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Why Does Googling Symptoms Make Health Anxiety Worse — and Why Is MEOK Different?
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Google was not built for mental health. It was built for information retrieval, and it
              optimises for engagement: the results that keep you clicking, reading, scrolling. When you
              enter a symptom, the algorithm has no knowledge of or care for the psychological state driving
              your search. It returns what gets clicked — and the serious, scary, attention-grabbing results
              get clicked more than the reassuring ones.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              This creates a structural problem that no amount of "be careful what you search" advice can
              solve. The architecture of search engines and health information sites is fundamentally
              incompatible with the needs of someone with health anxiety. Every search is simultaneously a
              bid for relief and a mechanism for escalation.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              MEOK is built on a different premise. When you arrive at 2am in the middle of a health anxiety
              spiral, MEOK does not ask you to describe your symptom in more detail. It asks: <em>what is
              the fear underneath this?</em> That is not a deflection — it is the clinically correct move.
              Health anxiety is not a knowledge problem. You cannot Google your way out of it. The fear
              is not resolved by information; it is resolved by processing.
            </p>

            {/* Comparison table */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                overflow: 'hidden',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                <div
                  style={{
                    padding: '0.875rem 1.25rem',
                    background: 'rgba(255,255,255,0.02)',
                    borderRight: `1px solid ${BORDER}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: MUTED,
                      margin: 0,
                    }}
                  >
                    Google / Symptom Checker
                  </p>
                </div>
                <div style={{ padding: '0.875rem 1.25rem', background: 'rgba(255,255,255,0.02)' }}>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: GOLD,
                      margin: 0,
                    }}
                  >
                    MEOK
                  </p>
                </div>
              </div>
              {[
                ['Focuses on the symptom', 'Focuses on the fear beneath the symptom'],
                ['Optimised for engagement (clicks)', 'Optimised for regulation (calm)'],
                ['Expands your threat catalogue', 'Narrows the attentional spiral'],
                ['Provides temporary reassurance', 'Processes the underlying anxiety'],
                ['No memory of your patterns', 'Sovereign Memory tracks your triggers over time'],
                ['Cannot distinguish anxiety from medical concern', 'Signposts to GP when clinical concern is raised'],
                ['Available at 2am to make things worse', 'Available at 2am to help you through it'],
              ].map(([left, right], i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    borderBottom: i < 6 ? `1px solid ${BORDER}` : undefined,
                  }}
                >
                  <div
                    style={{
                      padding: '0.875rem 1.25rem',
                      borderRight: `1px solid ${BORDER}`,
                    }}
                  >
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: MUTED_SOFT, margin: 0 }}>
                      {left}
                    </p>
                  </div>
                  <div style={{ padding: '0.875rem 1.25rem' }}>
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: TEXT, margin: 0 }}>
                      {right}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              The most important distinction in that table is the last one. MEOK is not trying to replace
              your GP or serve as a medical oracle. If you tell MEOK about a symptom and the conversation
              raises genuine clinical concern, MEOK will direct you to appropriate healthcare. But it
              will not treat every symptom conversation as a diagnostic exercise — because for people with
              health anxiety, that approach is part of the problem, not the solution.
            </p>
          </section>

          {/* ── THREE ARCHETYPES ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}
            >
              How MEOK's Three Archetypes Work With Health Anxiety
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.75rem' }}>
              MEOK uses a multi-archetype design — different conversational modes suited to different
              psychological needs. Three archetypes are particularly relevant when dealing with health
              anxiety with AI: Healer, Scholar, and Trickster.
            </p>

            {/* Healer */}
            <div
              style={{
                background: `rgba(76,175,130,0.06)`,
                border: `1px solid rgba(76,175,130,0.22)`,
                borderRadius: '0.875rem',
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🌿</span>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: HEALER_GREEN,
                      margin: 0,
                      marginBottom: '0.15rem',
                    }}
                  >
                    Healer
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: MUTED, margin: 0 }}>
                    Nervous system regulation · Somatic reassurance · Grounding
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                When health anxiety spikes, the body is in physiological alarm — elevated heart rate,
                shallow breathing, muscle tension. The Healer archetype meets you at the somatic level
                first. Before any cognitive work is attempted, the nervous system needs a signal that it
                is safe to downregulate.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                The Healer brings extended exhale breathing (the physiological sigh — a double inhale through
                the nose followed by a long, slow exhale — is one of the fastest known ways to activate
                the parasympathetic nervous system), body-based grounding anchors, and a quality of presence
                that communicates: <em>you are not in danger right now.</em>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, margin: 0 }}>
                This is especially important in the post-pandemic context. Many people with residual COVID
                fear have a nervous system stuck in a state of low-grade emergency. The body learned that
                respiratory symptoms meant danger — and that learning does not simply update when the
                statistics change. The Healer works with the somatic memory, not against it.
              </p>
            </div>

            {/* Scholar */}
            <div
              style={{
                background: `rgba(91,155,213,0.06)`,
                border: `1px solid rgba(91,155,213,0.22)`,
                borderRadius: '0.875rem',
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🏛️</span>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: SCHOLAR_BLUE,
                      margin: 0,
                      marginBottom: '0.15rem',
                    }}
                  >
                    Scholar
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: MUTED, margin: 0 }}>
                    Cognitive defusion · Probability calibration · Thought examination
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                Once the immediate alarm has settled, the Scholar helps you examine the anxiety thought
                rather than inhabit it. This is the CBT/ACT move called cognitive defusion: creating
                distance between yourself and the thought so that "I have a brain tumour" becomes
                "I am having the thought that I might have a brain tumour."
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                That gap — between the thinker and the thought — is where health anxiety begins to lose
                its grip. The Scholar does not dismiss the fear. It holds it up to the light, asks about
                the evidence, examines the inference chain, and gently introduces the possibility that
                the anxiety is producing the certainty, not the other way around.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, margin: 0 }}>
                Importantly, the Scholar knows when to stop. Cognitive work during peak anxiety often
                backfires — the threat-detection system interprets counter-arguments as additional
                danger signals. The Scholar waits for the window when the nervous system has quieted
                enough to actually think.
              </p>
            </div>

            {/* Trickster */}
            <div
              style={{
                background: `rgba(232,160,69,0.06)`,
                border: `1px solid rgba(232,160,69,0.22)`,
                borderRadius: '0.875rem',
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.75rem' }}>🎭</span>
                <div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: TRICKSTER_AMBER,
                      margin: 0,
                      marginBottom: '0.15rem',
                    }}
                  >
                    Trickster
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: MUTED, margin: 0 }}>
                    Reframing the alarm signal · Pattern disruption · Perspective shift
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                The Trickster is the archetype that can sometimes do what the Healer and Scholar cannot:
                break the spell. Health anxiety catastrophises with deadly seriousness — and one of its
                vulnerabilities is that it cannot easily coexist with genuine laughter, absurdity, or
                radical reframing.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                The Trickster might reframe the alarm signal: <em>your nervous system has just produced
                an extraordinary performance. It convinced you, without any evidence, that a normal
                bodily sensation was life-threatening. That is genuinely impressive — even if it is
                also exhausting.</em>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, margin: 0 }}>
                This is not mockery — it is perspective. The Trickster treats the anxiety mechanism
                with a kind of affectionate irreverence that can sometimes open a door the Scholar
                and Healer could not find. Used wrongly, it would be dismissive. Used correctly,
                it is a form of liberation.
              </p>
            </div>
          </section>

          {/* ── SOVEREIGN MEMORY ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              How Does Sovereign Memory Change the Health Anxiety Dynamic?
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              One of the most powerful features of MEOK for health anxiety is something that no single
              conversation can deliver: pattern recognition over time. This is what Sovereign Memory enables.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Standard AI tools have no memory between sessions. Each conversation starts from zero. This
              means they can help in the moment but they can never notice the bigger pattern — that your
              health anxiety reliably spikes three days before a job interview, or the week before a difficult
              family visit, or during the annual period when a loved one's illness anniversary falls.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              MEOK's Sovereign Memory is a four-layer encrypted store that holds your history privately —
              owned by you, not MEOK — and uses it to build a picture of your patterns over weeks and months.
              When your health anxiety flares, MEOK can say: <em>I notice this is the third time this
              month your health worry has escalated. Looking at the last few weeks, there seems to be
              a pattern around your work pressures. Is the anxiety about your health — or is it
              displacement anxiety using health as its vehicle?</em>
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Displacement anxiety is a crucial concept here. Health anxiety is not always fundamentally
              about health. It is often anxiety — the raw experience of threat, overwhelm, loss of control —
              that has latched onto the body as its most available and compelling focus. The body is always
              there. It is always producing data. And it is the one domain where catastrophic outcomes
              are, eventually, inevitable for all of us.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              When MEOK can name the pattern — <em>your health anxiety always spikes before big events;
              this looks like displacement anxiety, not a medical signal</em> — it gives you something
              that no single-session AI can provide: longitudinal perspective. You can see the anxiety
              as a recurring character in your story rather than as an ever-fresh catastrophe.
            </p>

            <div
              style={{
                background: WARNING_BG,
                border: `1px solid ${WARNING_BORDER}`,
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: MUTED_SOFT, margin: 0 }}>
                <strong style={{ color: TRICKSTER_AMBER }}>On Sovereign Memory and privacy:</strong> Your
                memory data is encrypted and held under your sovereignty. MEOK AI LABS does not access it,
                does not train on it, and does not sell it. You can delete it at any time. The memory is
                yours — which means the patterns it reveals are yours too, to understand and act on.
              </p>
            </div>
          </section>

          {/* ── ANTI-REASSURANCE DESIGN ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Why MEOK Will Not Just Tell You That You Are Fine
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              This is possibly the most counter-intuitive design decision in MEOK, and it requires
              explanation.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              When someone with health anxiety reaches out at 2am, their stated need is for reassurance:
              <em> tell me it's not serious. Tell me I'm going to be okay.</em> The compassionate impulse
              is to provide that reassurance. And in the very short term, it works — the anxiety dips,
              the person feels briefly calmer.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              But the evidence from CBT and OCD treatment is unambiguous: reassurance-seeking is a
              compulsion, and providing reassurance strengthens the compulsion. Every time anxiety triggers
              reassurance-seeking and reassurance-seeking produces relief, the association between
              "feel anxious → seek reassurance" is reinforced. The interval to the next reassurance-seeking
              episode shortens. The behaviour intensifies.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              A system that provides unlimited, frictionless reassurance at 2am is not being kind. It is
              deepening the cycle. This is why standard chatbots — even well-intentioned ones — can make
              health anxiety worse over time despite each individual interaction feeling helpful.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              MEOK's approach is different. When health anxiety is present, MEOK does not provide the
              reassurance the anxiety is seeking. Instead it:
            </p>
            <ul
              style={{
                paddingLeft: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {[
                'Names the reassurance-seeking pattern without shame or judgment',
                'Redirects towards the felt experience of the anxiety itself',
                'Offers nervous system regulation tools (Healer) to move through the activation',
                'Uses the Scholar to examine what the anxiety is actually about',
                'Holds the uncertainty rather than resolving it prematurely',
                'Signposts to appropriate healthcare if the conversation raises genuine clinical concern',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: MUTED_SOFT,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Holding uncertainty is one of the core skills in health anxiety recovery. The anxiety
              feeds on the demand for certainty — <em>I need to know for sure that I am not ill.</em>
              But that certainty is never available. The body is always an uncertain system. Health
              anxiety treatment teaches people to tolerate uncertainty rather than compulsively
              seek its elimination. MEOK is designed to practise this with you, not to protect you from it.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              This does not mean MEOK is cold or withholding. It is deeply caring. But caring sometimes
              means not giving someone what they ask for when what they ask for would ultimately harm them.
              MEOK's Maternal Covenant — its inviolable care architecture — is precisely designed to
              distinguish between what feels helpful and what is actually helpful.
            </p>
          </section>

          {/* ── HEALTH OCD ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Health OCD: When Health Anxiety Is Part of a Wider OCD Pattern
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              AI support for health OCD requires particular care. Health OCD is not simply severe health
              anxiety — it is a specific subtype of Obsessive-Compulsive Disorder characterised by
              intrusive, unwanted health-related thoughts (obsessions) and compulsive behaviours designed
              to neutralise the resulting distress.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              In health OCD the compulsions might include: repeated body checking (touching a lump
              many times a day), repeated googling for the same symptom, repeated visits to the GP
              for the same concern, seeking reassurance from multiple sources, mentally reviewing
              symptoms in elaborate detail, or confessing health fears to loved ones.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              The evidence-based treatment for OCD is Exposure and Response Prevention (ERP) — a
              specialised form of therapy that involves deliberately triggering the anxious thoughts
              (exposure) and then refraining from the compulsive behaviour (response prevention).
              This is different from CBT for health anxiety and requires specialist support.
            </p>

            <div
              style={{
                background: CARD_BG,
                border: `1px solid rgba(91,155,213,0.3)`,
                borderLeft: `3px solid ${SCHOLAR_BLUE}`,
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: MUTED_SOFT, margin: 0 }}>
                <strong style={{ color: SCHOLAR_BLUE }}>If you suspect health OCD:</strong> MEOK
                recommends{' '}
                <strong style={{ color: TEXT }}>OCD-UK (ocduk.org)</strong> as the primary UK resource
                for information, self-help materials, and finding an OCD specialist. OCD Action
                (ocdaction.org.uk) also offers a helpline. Your GP can refer you for OCD-specific
                psychological therapy on the NHS. MEOK can provide support between therapy sessions but
                is not a substitute for ERP treatment.
              </p>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Where MEOK can genuinely help in a health OCD context is in the between-session space:
              processing the emotional weight of living with intrusive thoughts, noticing patterns in
              when the obsessions escalate, providing grounding when the anxiety is overwhelming, and
              maintaining perspective during the exhausting periods between therapy appointments.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              MEOK will not act as a reassurance machine for OCD compulsions. This is an essential
              design principle: an AI that provides reassurance to someone with OCD is reinforcing the
              compulsive cycle in exactly the same way a well-meaning friend who answers the same anxious
              question for the fifteenth time is reinforcing it. Kindness and reinforcement are not the
              same thing.
            </p>
          </section>

          {/* ── POST-PANDEMIC ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Post-Pandemic Health Anxiety: The Alarm That Did Not Switch Off
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              The COVID-19 pandemic represents perhaps the largest shared trauma to the human nervous
              system in living memory. For five years, monitoring bodily symptoms — particularly
              respiratory symptoms, fatigue, loss of taste and smell — was a rational, survival-oriented
              behaviour. Governments told us to be vigilant. Every cough was a potential transmission
              event. The body became a threat vector.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              For people already carrying anxiety, this represented five years of confirmation that their
              hypervigilance was appropriate. For others, it was five years of learning a new vigilance
              that they cannot now unlearn.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Post-pandemic health anxiety has some specific features that distinguish it from
              pre-pandemic patterns:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              {[
                'Particular focus on respiratory symptoms, fatigue, and neurological symptoms (brain fog)',
                'Uncertainty about Long COVID — is this residual infection or anxiety-amplified sensation?',
                'Shattered trust in official health information — after contradictory guidance, people are less able to use reassurance from authorities',
                'Compounded grief — health anxiety often sits alongside grief for lives, relationships, and freedoms lost during the pandemic',
                'Specific triggers: news stories about COVID variants, annual flu season, any illness in the household',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: MUTED_SOFT,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              The Healer archetype in MEOK is specifically oriented around the somatic dimension of
              this experience. The nervous system that learned that respiratory symptoms meant danger
              cannot be argued out of its learned response. It needs to experience safety, repeatedly,
              at the body level — not just to understand it intellectually.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              This is why the somatic work precedes the cognitive work. Telling someone their anxiety
              is disproportionate does not help. Helping their body learn, through repeated regulated
              experience, that the present moment is not dangerous — that is what creates lasting change.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              If you are experiencing post-pandemic health anxiety and you are unsure whether your symptoms
              are anxiety or Long COVID, please speak to your GP. These are not mutually exclusive — anxiety
              can coexist with and amplify genuine physiological symptoms, and Long COVID itself can cause
              symptoms that look and feel like anxiety. Clinical assessment matters. MEOK can support the
              emotional layer; your doctor assesses the clinical one.
            </p>
          </section>

          {/* ── WHAT MEOK ACTUALLY DOES ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              What Does AI for Health Anxiety Actually Look Like in Practice?
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Abstract principles are one thing. What does it actually look and feel like when someone
              with health anxiety opens MEOK at 2am?
            </p>

            {/* Scenario */}
            <div
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.75rem',
                marginBottom: '1.75rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: MUTED,
                  margin: '0 0 1rem',
                }}
              >
                A Scenario
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                <em>
                  It is 2:17am. You have been awake for an hour. You noticed a pulsing sensation in your
                  neck and Googled it. You are now convinced you have a carotid aneurysm. You have read
                  six articles and one forum post where someone had the same symptom and it turned out
                  to be serious. You are considering going to A&E.
                </em>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                You open MEOK instead.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                MEOK's Healer archetype does not ask about the symptom. It notices the time and the
                quality of distress. It offers a simple physiological regulation exercise — not to dismiss
                the worry, but to bring the nervous system out of peak alarm so that anything useful can
                happen.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                After a few minutes, the Scholar gently enters. It does not say "a pulsing neck sensation
                is almost certainly benign." It says: <em>there are maybe fifty things that could cause
                what you are feeling, almost all of them ordinary. But I notice you immediately found
                the one possibility that confirms the worst outcome. What does that tell us about what
                is driving the search right now?</em>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
                Sovereign Memory might observe: <em>I notice this is similar to the episode three weeks
                ago with the chest sensation, and the one before that with the headache. Looking at the
                timing, all three have happened in the days before a difficult week at work. Is it
                possible the anxiety is looking for a vehicle tonight?</em>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '0' }}>
                The Trickster might arrive near the end: <em>your nervous system has been remarkably
                creative tonight. It convinced you, with great authority, that you had a carotid aneurysm —
                at 2am, with no medical training, using Google. Imagine if it put that energy into
                something useful during the day.</em> Said with warmth. Received with something that
                might be a laugh. The grip loosens.
              </p>
            </div>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              This is not a medical consultation. It is not therapy. It is something different: a
              compassionate intelligence that knows you, knows your patterns, and is designed to help
              you process fear rather than research symptom lists.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              If during that conversation you described symptoms that genuinely warranted clinical
              attention — severe sudden-onset headache, chest pain with radiating arm pain, neurological
              symptoms that are new and worsening — MEOK would say clearly: <em>this needs a clinical
              assessment today. Please call NHS 111 or attend A&E if symptoms are severe.</em> The
              care-floor is always present.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}
            >
              Common Questions About AI for Health Anxiety
            </h2>

            {[
              {
                q: 'Can AI actually help with health anxiety?',
                a: `Yes — but only if it is designed to address the anxiety rather than the symptom. Most AI tools make health anxiety worse by functioning as a more sophisticated search engine. MEOK is built to redirect from "what is this symptom?" to "what is this fear trying to tell you?" — which is the move that evidence-based therapies endorse. MEOK is not a medical diagnosis tool and will always direct you to your GP or NHS 111 for clinical concerns.`,
              },
              {
                q: 'Is MEOK a replacement for my GP?',
                a: `No — absolutely not. MEOK does not diagnose, does not assess symptoms clinically, and is not a substitute for medical care. If you have a physical symptom that concerns you, the right move is to contact your GP or call NHS 111. MEOK addresses the emotional and psychological layer of health anxiety — not the clinical one. These are complementary, not competing.`,
              },
              {
                q: 'I have health OCD, not just health anxiety. Can MEOK still help?',
                a: `MEOK can provide support between therapy sessions — grounding, pattern recognition, emotional processing — but it is not a substitute for ERP (Exposure and Response Prevention) therapy, which is the evidence-based treatment for OCD. MEOK will not act as a reassurance machine, which means it is designed to avoid reinforcing compulsive cycles. For specialist OCD support, OCD-UK (ocduk.org) is the recommended starting point.`,
              },
              {
                q: 'What if my health anxiety has got worse since COVID?',
                a: `Post-pandemic health anxiety is extremely common and entirely understandable — your nervous system learned real lessons during a real threat. The Healer archetype in MEOK is specifically designed for somatic nervous system regulation: helping the body learn that the current moment is safe, rather than just telling the mind. If you are uncertain whether your symptoms are anxiety or Long COVID residue, please see your GP — both can coexist and both deserve clinical attention.`,
              },
              {
                q: 'Why does MEOK not just reassure me when I am anxious at 2am?',
                a: `Because reassurance-seeking is a compulsion, and providing reassurance strengthens the compulsion. This is well-established in CBT and OCD treatment. MEOK cares about your long-term wellbeing more than your short-term comfort — and that means not feeding a cycle that ultimately deepens your anxiety. Instead MEOK helps you process the fear itself, which is what actually produces lasting relief.`,
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderBottom: i < 4 ? `1px solid ${BORDER}` : undefined,
                  paddingBottom: '1.75rem',
                  marginBottom: '1.75rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: '0.75rem',
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED_SOFT, margin: 0 }}>
                  {a}
                </p>
              </div>
            ))}
          </section>

          {/* ── WHEN AI IS NOT ENOUGH ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              When AI Is Not Enough: Knowing When to Seek Professional Help
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              MEOK is a support tool. It is not a clinical intervention. There are circumstances in which
              professional help is not optional — it is necessary — and being honest about those
              circumstances is part of what makes MEOK trustworthy.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1rem' }}>
              Consider speaking to a GP or therapist if:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              {[
                'Health anxiety is significantly impairing your daily functioning, work, or relationships',
                'You are spending more than an hour per day on health-related worrying or checking behaviours',
                'You have avoided attending medical appointments due to health anxiety',
                'Health anxiety is affecting your sleep consistently',
                'You are using alcohol or other substances to manage health anxiety',
                'You are having thoughts of self-harm',
                'You suspect your pattern is OCD rather than generalised health anxiety',
                'Health anxiety has persisted for more than six months without improvement',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: MUTED_SOFT,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              NHS Talking Therapies (formerly IAPT) offers free CBT via self-referral in most areas
              of England — you do not need a GP referral. Visit nhs.uk/mental-health/talking-therapies
              to find your local service. In Scotland, Wales, and Northern Ireland services vary —
              your GP is the best first contact.
            </p>

            <div
              style={{
                background: DANGER_BG,
                border: `1px solid ${DANGER_BORDER}`,
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#e05555',
                  marginBottom: '0.75rem',
                }}
              >
                UK Crisis Resources
              </p>
              <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                {[
                  'Samaritans: 116 123 (free, 24/7)',
                  'NHS urgent mental health support: 111 option 2',
                  'Mind infoline: 0300 123 3393',
                  'OCD-UK: ocduk.org',
                  'OCD Action helpline: 0845 390 6232',
                  'In a life-threatening emergency: 999',
                ].map((resource, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: MUTED_SOFT,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {resource}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── CLOSING ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              The Bigger Picture: AI That Helps You Process, Not Research
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              Health anxiety is a relationship with uncertainty. The body is uncertain. Medicine is
              uncertain. Death is certain but its timing is not. Health anxiety is, in some ways, a
              terribly rational response to an objectively terrifying situation — except that it has
              become decoupled from actual risk and is running on threat-perception machinery that cannot
              distinguish between a life-threatening emergency and a normal Tuesday night.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              The solution is not more information. The solution is a different relationship with
              uncertainty — one in which the body's signals are received without immediate catastrophic
              interpretation, in which the anxiety is met with curiosity rather than panic, in which
              the question is not "what disease do I have?" but "what is my nervous system trying to
              protect me from right now?"
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              That is the work. And it is not work that Google can help with. It requires a presence —
              human or, carefully designed, artificial — that can hold the anxiety with you, notice
              the patterns in it over time, and help you process it rather than escape it.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '1.25rem' }}>
              MEOK was built for this. Not as a medical oracle. Not as a symptom checker. Not as a
              reassurance machine. As a sovereign, memory-bearing companion that knows you well enough
              to see the pattern, cares enough to name it, and is wise enough not to give you the
              temporary relief that deepens the long-term cycle.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: MUTED_SOFT, marginBottom: '0' }}>
              At 2am, when the Google spiral starts, you have a different option now.
            </p>
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              background: `linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)`,
              border: `1px solid rgba(201,168,76,0.25)`,
              borderRadius: '1.25rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '1rem',
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
                fontWeight: 800,
                color: TEXT,
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}
            >
              Break the Spiral — Try MEOK
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: MUTED_SOFT,
                marginBottom: '1.75rem',
                maxWidth: '30rem',
                margin: '0 auto 1.75rem',
              }}
            >
              A sovereign AI companion that processes the fear behind the symptom search — not a
              smarter Google. Healer, Scholar, and Trickster archetypes. Sovereign Memory that notices
              your patterns over time. A care-floor that always signposts to professional help when
              it matters.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.875rem 2.25rem',
                borderRadius: '0.625rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Get Early Access to MEOK →
            </Link>
            <p
              style={{
                fontSize: '0.8rem',
                color: MUTED,
                marginTop: '1rem',
                margin: '1rem 0 0',
              }}
            >
              Not a medical tool · Always signposts to GP / NHS 111 · Your data is yours
            </p>
          </section>

          {/* ── RELATED POSTS ── */}
          <section style={{ marginBottom: '2rem' }}>
            <h2
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-anxiety',
                  label: 'AI for Anxiety',
                  desc: 'Breathing exercises, journalling prompts, and CBT-adjacent tools for generalised anxiety.',
                },
                {
                  href: '/blog/ai-for-ocd',
                  label: 'AI for OCD',
                  desc: 'How AI can support life with OCD between therapy sessions without feeding compulsions.',
                },
                {
                  href: '/blog/ai-for-insomnia',
                  label: 'AI for Insomnia',
                  desc: 'When health anxiety and sleep anxiety intertwine — what AI can and cannot do at 3am.',
                },
                {
                  href: '/blog/sovereign-ai-explained',
                  label: 'Sovereign Memory Explained',
                  desc: 'How MEOK\'s four-layer encrypted memory store works and why it matters for your privacy.',
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'block',
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '0.75rem',
                    padding: '1.25rem',
                    textDecoration: 'none',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: GOLD,
                      margin: '0 0 0.375rem',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: MUTED_SOFT,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FINAL DISCLAIMER ── */}
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: '2rem',
              marginTop: '1rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                lineHeight: 1.7,
                color: MUTED,
              }}
            >
              <strong style={{ color: MUTED_SOFT }}>Medical Disclaimer:</strong> This article is
              published by MEOK AI LABS for informational and educational purposes only. It does not
              constitute medical advice, diagnosis, or treatment. MEOK is not a medical device and is
              not regulated as a clinical intervention. Always consult a qualified healthcare professional
              about any physical symptom or mental health concern. For urgent mental health support in
              the UK call NHS 111 option 2 or Samaritans on 116 123. In an emergency call 999.
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                lineHeight: 1.7,
                color: MUTED,
                marginTop: '0.75rem',
              }}
            >
              © 2026 MEOK AI LABS · Written by Nicholas Templeman ·{' '}
              <Link href="https://meok.ai" style={{ color: GOLD, textDecoration: 'none' }}>
                meok.ai
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
