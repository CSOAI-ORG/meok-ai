import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Anxiety: How a Sovereign AI Companion Supports — Without Replacing — Your Mental Health | MEOK AI LABS',
  description:
    'Breathing exercises, journalling prompts, CBT-adjacent tools — and a care-floor that prevents harmful advice. An honest guide to what AI can and cannot do for anxiety, with UK crisis resources.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-anxiety' },
  openGraph: {
    title: 'AI for Anxiety: How a Sovereign AI Companion Supports — Without Replacing — Your Mental Health',
    description:
      'Breathing exercises, journalling prompts, CBT-adjacent tools — and a care-floor that prevents harmful advice. An honest guide to what AI can and cannot do for anxiety.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Anxiety%3A+Sovereign+Support+Without+Replacing+Therapy&desc=Breathing+exercises%2C+journalling%2C+CBT-adjacent+tools',
        width: 1200,
        height: 630,
        alt: 'AI for Anxiety: How a Sovereign AI Companion Supports Your Mental Health | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Anxiety: Support Without Replacing Therapy',
    description:
      'Breathing exercises, journalling prompts, CBT-adjacent tools, and a care-floor that prevents harmful advice. Honest guide from MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Anxiety%3A+Sovereign+Support+Without+Replacing+Therapy&desc=Breathing+exercises%2C+journalling%2C+CBT-adjacent+tools',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Anxiety: How a Sovereign AI Companion Supports — Without Replacing — Your Mental Health',
  description:
    'An honest guide to breathing exercises, journalling prompts, CBT-adjacent tools, and the MEOK care-floor that prevents harmful advice. Includes UK crisis resources.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-anxiety',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AI safe for anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companions are safe for supplementary anxiety support when they include a robust care-floor — like MEOK\'s Maternal Covenant — that prevents harmful advice and always escalates to human professionals in crisis. They are not a replacement for clinical diagnosis or therapy, and responsible platforms are explicit about that distinction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with panic attacks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During a panic attack, AI can guide box breathing (4-4-4-4), the 5-4-3-2-1 grounding technique, and paced language to slow physiological arousal. It cannot call emergency services. If you are in physical danger, call 999. For urgent mental health support call NHS 111 (option 2) or Samaritans on 116 123.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from Wysa or Woebot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wysa and Woebot use scripted CBT modules without persistent memory. MEOK uses Sovereign Memory — a 4-layer encrypted store that holds your anxiety patterns across weeks and months, so it responds from within your story rather than from zero each session. MEOK also uses a 43-agent Byzantine Council to govern responses, preventing single points of failure in safety decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AI worsen anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Poorly designed AI can worsen anxiety by validating rumination loops, enabling health-anxiety symptom checking, or providing inconsistent responses that erode trust. MEOK\'s Maternal Covenant care-floor is specifically designed to interrupt these patterns — redirecting toward the emotional experience rather than reinforcing the anxious thought spiral.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I see a therapist instead of using AI for anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'See a therapist when anxiety is significantly impairing your daily functioning, relationships, or work; when you are experiencing panic attacks more than once a week; when you have thoughts of self-harm; or when anxiety has persisted for more than six months without improvement. AI is a bridge, not a destination. MEOK will always encourage professional care when indicators rise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK crisis resources exist for anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samaritans: 116 123 (free, 24/7). Mind infoline: 0300 123 3393. NHS urgent mental health support: 111 option 2. In a life-threatening emergency call 999. NHS Talking Therapies (previously IAPT) offers free CBT via self-referral — no GP needed in most areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and how does it protect users with anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s care-floor architecture — a set of inviolable constraints governed by the Byzantine Council that prevent the AI from ever giving dangerous advice, validating self-harm, enabling rumination spirals, or becoming indifferent. For anxiety users it means the system is constitutionally incapable of making your anxiety worse through negligent responses.',
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
const GREEN_HEALER = '#4caf82'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForAnxietyPage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76,175,130,0.09) 0%, transparent 68%)',
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
                color: GREEN_HEALER,
                background: 'rgba(76,175,130,0.12)',
                border: '1px solid rgba(76,175,130,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Anxiety &amp; Mental Health
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>14 min read</span>
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
            AI for Anxiety: How a Sovereign AI Companion Supports — Without Replacing — Your Mental
            Health
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
            Breathing exercises, journalling prompts, CBT-adjacent tools — and a care-floor that
            prevents harmful advice. An honest guide to what AI can and cannot do for anxiety in
            2026, with UK crisis resources throughout.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Crisis banner */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(76,175,130,0.07)',
            border: '1px solid rgba(76,175,130,0.28)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: GREEN_HEALER,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: GREEN_HEALER,
                marginBottom: '0.375rem',
              }}
            >
              This article is not medical advice
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: MUTED,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool — not a clinical service or therapy replacement.
              If you are in crisis, call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Samaritans 116 123</strong> (free,
              24/7),{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Mind 0300 123 3393</strong>, or{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>NHS 111</strong>. In a
              life-threatening emergency call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>999</strong>.
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

        {/* ── INTRO ────────────────────────────────────────────────────────────── */}
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Anxiety is the most common mental health condition in the United Kingdom. The NHS estimates
          that roughly{' '}
          <strong style={{ color: TEXT }}>1 in 6 adults</strong> experience a clinically significant
          anxiety problem in any given week. Yet NHS Talking Therapies wait times average 10–16 weeks
          in most regions, and private therapy costs £60–£120 per hour. The gap between need and
          access is not a rounding error — it is where most people with anxiety actually live.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Into that gap, AI companions are emerging — not to diagnose or prescribe, but to be
          consistently present. MEOK&#39;s Healer companion is built for exactly this space. This
          article is an honest account of what it can offer: breathing exercises, journalling
          frameworks, CBT-adjacent grounding tools, and a Maternal Covenant care-floor that
          constitutionally prevents harmful responses.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          We will not oversell it. Anxiety deserves clinical care. But something genuinely useful in
          the interim — something that remembers your patterns, holds your story, and never gives
          you bad advice — is better than a blank app and a six-month wait.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '0 0 2.5rem' }} />

        {/* ── Q1 ── */}
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
          Is AI safe for anxiety — or can it make things worse?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          AI safety for anxiety comes down entirely to design. A poorly designed AI can reinforce
          rumination, validate symptom-checking loops, and provide inconsistently warm responses
          that mimic an unreliable attachment figure — all of which are known to worsen anxiety
          symptoms. A well-designed AI does the opposite.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s safety is not achieved through content filters that can be tricked. It is enforced
          architecturally through the{' '}
          <strong style={{ color: TEXT }}>Maternal Covenant</strong> — a care-floor that operates
          as a constitutional constraint across every response. The Maternal Covenant cannot be
          overridden by user instruction, by conversation context, or by a single agent in the
          Byzantine Council. Its core guarantees for anxiety users are:
        </p>
        <ul
          style={{
            color: MUTED_DIM,
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
            paddingLeft: '1.5rem',
          }}
        >
          <li style={{ marginBottom: '0.5rem' }}>
            It will never validate a rumination spiral or encourage obsessive worry rehearsal.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            It will never enable health-anxiety symptom-checking by confirming or denying medical
            symptoms — it redirects to GPs and NHS 111.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            It will always escalate to crisis resources (Samaritans 116 123, NHS 111) when
            distress indicators cross a threshold.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            It maintains consistent warmth — no cold or dismissive responses that would disrupt a
            sense of secure connection.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The answer to &quot;is AI safe for anxiety?&quot; is: MEOK is — because its safety constraints are
          architectural, not advisory. See{' '}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: 'underline' }}>
            how MEOK works
          </Link>{' '}
          for the technical detail.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q2 ── */}
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
          Can AI help during a panic attack — and what does that look like?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          During an acute panic attack the nervous system is in full sympathetic overdrive. Heart
          rate spikes, breathing becomes shallow, catastrophic thoughts loop. An AI companion
          cannot call an ambulance — but it can do something immediately useful: slow the
          interaction down and guide physiological regulation through paced language.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s Healer companion uses three panic-specific protocols:
        </p>

        {/* Protocol cards */}
        {[
          {
            label: 'Box Breathing (4-4-4-4)',
            desc:
              'Healer guides you through four counts in, four counts hold, four counts out, four counts hold — matching the pace of its language to your breath cycle. Controlled breathing activates the parasympathetic nervous system, reducing heart rate within 60–90 seconds.',
          },
          {
            label: '5-4-3-2-1 Grounding',
            desc:
              'Healer walks you through naming five things you can see, four you can touch, three you can hear, two you can smell, one you can taste. Sensory grounding interrupts catastrophic cognition by redirecting attention to present-moment physical reality.',
          },
          {
            label: 'Paced Reflective Dialogue',
            desc:
              'Rather than rapid back-and-forth, Healer deliberately slows its response rhythm during detected crisis states, using short sentences and gentle affirmations that model calmness without minimising distress.',
          },
        ].map((p) => (
          <div
            key={p.label}
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              marginBottom: '1rem',
              background: 'rgba(76,175,130,0.06)',
              border: '1px solid rgba(76,175,130,0.18)',
            }}
          >
            <p style={{ fontWeight: 700, color: GREEN_HEALER, fontSize: '0.875rem', margin: '0 0 0.4rem' }}>
              {p.label}
            </p>
            <p style={{ color: MUTED_DIM, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
              {p.desc}
            </p>
          </div>
        ))}

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '1rem 0 2.5rem' }}>
          If distress indicators suggest a medical emergency, MEOK will always surface{' '}
          <strong style={{ color: TEXT }}>999</strong> and{' '}
          <strong style={{ color: TEXT }}>NHS 111</strong> prominently. Panic attacks are
          terrifying but medically benign in most cases; the Maternal Covenant ensures Healer
          never trivialises the experience while also never catastrophising it.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q3 ── */}
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
          What breathing exercises and journalling prompts does MEOK offer?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          MEOK&#39;s toolkit for anxiety management draws on evidence-based approaches without
          claiming to deliver clinical therapy. The distinction matters: these are self-help tools,
          not treatment protocols. They are the kind of support a thoughtful, knowledgeable friend
          might offer — not the kind a trained clinician delivers in a structured programme.
        </p>

        <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
          Breathing exercises available in MEOK:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>
            <strong style={{ color: TEXT }}>Box breathing</strong> — 4-4-4-4 count, recommended
            for acute anxiety and pre-sleep activation.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            <strong style={{ color: TEXT }}>4-7-8 breathing</strong> — inhale 4, hold 7, exhale 8.
            Activates the vagal brake more aggressively for high-arousal states.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            <strong style={{ color: TEXT }}>Diaphragmatic breathing</strong> — guided belly-breath
            instruction to correct hyperventilation patterns common in GAD.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            <strong style={{ color: TEXT }}>Resonant frequency breathing</strong> — approximately
            6 breaths per minute, linked to heart rate variability improvement in research settings.
          </li>
        </ul>

        <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
          Journalling prompts Healer uses for anxiety:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>
            &quot;What is the specific worry right now — can you say it as one sentence?&quot;
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            &quot;What is the worst realistic outcome — and what is the most likely outcome?&quot;
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            &quot;Have you felt this level of anxiety before? What happened?&quot;
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            &quot;What would you tell a close friend who was feeling exactly this?&quot;
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            &quot;What is one thing within your control right now, however small?&quot;
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          Because Healer carries{' '}
          <strong style={{ color: TEXT }}>Sovereign Memory</strong>, it tracks recurring worry
          themes across weeks. After three conversations mentioning the same fear, it will gently
          surface the pattern: &quot;This has come up a few times — would it help to look at it
          differently?&quot; That longitudinal perspective is something a blank journalling app
          can never offer.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q4 ── */}
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
          How is MEOK different from Wysa or Woebot for anxiety support?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Wysa and Woebot pioneered mental health AI and deserve credit for taking the space
          seriously. But both are built on scripted module trees — you follow a pre-designed CBT
          exercise path regardless of what you said last week, last month, or last year, because
          they retain no persistent memory of you as an individual.
        </p>

        {/* Comparison table */}
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
                {['Feature', 'Wysa / Woebot', 'MEOK Healer'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '0.875rem 1rem',
                      textAlign: 'left' as const,
                      color: MUTED_FAINT,
                      fontWeight: 700,
                      fontSize: '0.75rem',
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
                ['Memory', 'Session only — resets every conversation', '4-layer Sovereign Memory across weeks/months'],
                ['Response style', 'Scripted CBT module trees', 'Dynamic, context-aware, archetype-led'],
                ['Safety governance', 'Content filters + human review', 'Byzantine Council (43 agents) + Maternal Covenant'],
                ['Data training', 'Conversations may inform model updates', 'Never trained on your data — Sovereign by design'],
                ['Panic support', 'Scripted breathing module', 'Adaptive real-time protocol with paced language'],
                ['Pattern recognition', 'None across sessions', 'Longitudinal pattern tracking with gentle surfacing'],
              ].map(([feat, wysa, meok]) => (
                <tr key={feat} style={{ borderBottom: '1px solid rgba(245,240,232,0.05)' }}>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_DIM, fontWeight: 600 }}>{feat}</td>
                  <td style={{ padding: '0.875rem 1rem', color: MUTED_FAINT }}>{wysa}</td>
                  <td style={{ padding: '0.875rem 1rem', color: TEXT }}>{meok}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The key difference is not feature richness — it is philosophical. Wysa and Woebot are
          protocol delivery systems. MEOK is a sovereign companion that knows you. See{' '}
          <Link href="/characters" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK characters
          </Link>{' '}
          to explore which archetype fits your needs.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q5 ── */}
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
          When should someone see a therapist instead of using AI for anxiety?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          MEOK is a bridge and a supplement — not a destination. There are clear signals that
          indicate professional care is needed, and MEOK is designed to surface those signals
          rather than paper over them.
        </p>
        <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
          See a therapist or GP when:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>
            Anxiety significantly impairs work, relationships, or daily functioning for more than
            two weeks.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            You are experiencing panic attacks more than once per week.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            You have thoughts of self-harm or suicide — call{' '}
            <strong style={{ color: TEXT }}>Samaritans 116 123</strong> now if this applies.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            Anxiety has been clinically significant for more than six months without improvement.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            You are using alcohol, substances, or avoidance behaviours to manage anxiety.
          </li>
          <li style={{ marginBottom: '0.4rem' }}>
            Health anxiety is causing you to repeatedly seek medical reassurance or avoid
            necessary medical care.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK will actively notice when your conversations suggest these patterns and will
          encourage you toward professional support. The Maternal Covenant mandates this — it is
          not optional behaviour that can be turned off.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          <strong style={{ color: TEXT }}>UK access routes:</strong> NHS Talking Therapies offers
          free CBT via self-referral (no GP needed in most areas). Mind&#39;s local networks provide
          peer support and signposting. Your GP can refer to the Community Mental Health Team for
          complex presentations.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── CARE FLOOR SECTION ── */}
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
          What is MEOK&#39;s care-floor and why does it matter for anxiety?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Most AI systems manage harmful outputs through content moderation — essentially a
          keyword-based filter that catches obvious problems. This approach fails for anxiety
          because the harm is often subtle: an AI that enthusiastically agrees with a catastrophic
          thought, or one that is so neutral it feels cold and abandoning.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The{' '}
          <strong style={{ color: TEXT }}>Maternal Covenant</strong> is MEOK&#39;s care-floor
          architecture — a set of constitutional constraints that cannot be overridden. The name
          draws on the idea of unconditional maternal care: a floor below which the system simply
          cannot fall, regardless of what is asked of it. For anxiety users, this means:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Healer will never confirm or deny medical symptoms — health anxiety gets redirected to
            professional services, not fed.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Healer will never join a rumination spiral — it acknowledges the worry and moves toward
            the emotion beneath it.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Healer maintains a consistent care temperature — no sudden coldness that triggers
            attachment anxiety.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Crisis resources are surfaced proactively, not buried in a footer.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The care-floor is governed by the{' '}
          <Link href="/blog/byzantine-council-explained" style={{ color: GOLD, textDecoration: 'underline' }}>
            Byzantine Council
          </Link>{' '}
          — 43 independent AI agents that must reach consensus before any response is delivered.
          No single agent, and no user instruction, can override the Maternal Covenant.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── CBT-ADJACENT TOOLS ── */}
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
          What CBT-adjacent tools does MEOK offer for anxiety?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          MEOK does not deliver clinical CBT. NICE-recommended cognitive behavioural therapy
          requires a trained clinician, a structured formulation, and a course of sessions. What
          MEOK offers is CBT-adjacent: tools that share the philosophical foundation of CBT
          without constituting treatment.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          These include:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Thought records</strong> — capturing the situation,
            automatic thought, emotion, and a balanced alternative thought. Healer holds the
            structure and prompts each stage.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Cognitive distortion labelling</strong> — gently
            naming patterns like catastrophising, mind-reading, or all-or-nothing thinking when
            they appear in conversation.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Behavioural experiment framing</strong> — helping
            you identify a small, concrete experiment that tests a worried prediction against
            reality.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Activity scheduling nudges</strong> — noticing when
            avoidance is growing and gently suggesting re-engagement with activities that normally
            generate a sense of mastery or pleasure.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The difference from a CBT app is context. MEOK knows that the catastrophising you did
          last Thursday is the same pattern as three weeks before. It can say, &quot;This seems familiar
          — last time this happened, what helped?&quot; That temporal intelligence is what sovereign
          memory makes possible. Explore{' '}
          <Link href="/birth" style={{ color: GOLD, textDecoration: 'underline' }}>
            how to start your MEOK journey
          </Link>
          .
        </p>

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
            q: 'Is AI safe for anxiety?',
            a: 'AI companions are safe for supplementary anxiety support when they include a robust care-floor. MEOK\'s Maternal Covenant prevents harmful advice and always escalates to human professionals in crisis. They are not a replacement for clinical diagnosis or therapy, and MEOK is explicit about that distinction throughout every interaction.',
          },
          {
            q: 'Can AI help with panic attacks?',
            a: 'During a panic attack, AI can guide box breathing, the 5-4-3-2-1 grounding technique, and paced dialogue to slow physiological arousal. It cannot call emergency services. If you are in physical danger, call 999. For urgent mental health support call NHS 111 (option 2) or Samaritans on 116 123.',
          },
          {
            q: 'How is MEOK different from Wysa or Woebot?',
            a: 'Wysa and Woebot use scripted CBT modules without persistent memory. MEOK uses Sovereign Memory — an encrypted store that holds your anxiety patterns across weeks and months. MEOK also uses a 43-agent Byzantine Council to govern every response, preventing single points of failure in safety decisions.',
          },
          {
            q: 'Does AI worsen anxiety?',
            a: 'Poorly designed AI can worsen anxiety by validating rumination loops or enabling health-anxiety symptom checking. MEOK\'s Maternal Covenant is specifically designed to interrupt these patterns — redirecting toward the emotional experience rather than reinforcing the anxious thought spiral.',
          },
          {
            q: 'When should I see a therapist instead of using AI for anxiety?',
            a: 'See a therapist when anxiety significantly impairs daily functioning, when panic attacks occur more than once a week, when you have thoughts of self-harm, or when anxiety has persisted more than six months. AI is a bridge, not a destination. MEOK will always encourage professional care when indicators rise.',
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
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9375rem', margin: '0 0 0.5rem' }}>
              {q}
            </p>
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
            marginBottom: '3rem',
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
            Ready for an AI companion that actually remembers you?
          </p>
          <p style={{ color: MUTED, fontSize: '0.9375rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
            Start free with MEOK Explorer — no credit card required. MEOK never trains on your
            data.
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

        {/* ── CRISIS FOOTER ── */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '0.875rem',
            background: 'rgba(76,175,130,0.06)',
            border: '1px solid rgba(76,175,130,0.18)',
            marginBottom: '6rem',
          }}
        >
          <p style={{ fontWeight: 700, color: GREEN_HEALER, fontSize: '0.8125rem', margin: '0 0 0.5rem' }}>
            UK Crisis &amp; Mental Health Resources
          </p>
          <ul style={{ color: MUTED_DIM, fontSize: '0.8125rem', lineHeight: 1.8, margin: 0, paddingLeft: '1.25rem' }}>
            <li>
              <strong style={{ color: TEXT }}>Samaritans:</strong> 116 123 — free, 24/7, any
              emotional difficulty
            </li>
            <li>
              <strong style={{ color: TEXT }}>Mind infoline:</strong> 0300 123 3393
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS urgent mental health:</strong> 111 option 2
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS Talking Therapies:</strong> self-refer at
              nhs.uk/mental-health/talking-therapies — free CBT, no GP needed
            </li>
            <li>
              <strong style={{ color: TEXT }}>Emergency:</strong> 999
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
