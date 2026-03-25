import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Anger Management: Processing Rage, Finding Calm, and Rebuilding Control | MEOK AI LABS',
  description:
    'Chronic anger harms your heart, destroys relationships, and costs careers. Discover how AI provides a non-judgmental space to process rage, track triggers, and rebuild control — with UK stats, honest limitations, and when to seek professional help.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-anger-management' },
  openGraph: {
    title: 'AI for Anger Management: Processing Rage, Finding Calm, and Rebuilding Control',
    description:
      'Chronic anger affects ~7% of the UK population. Discover how AI gives you a consequence-free space to process rage, spot triggers, and rebuild emotional control.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-anger-management',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Processing+Rage+%26+Rebuilding+Control&desc=Non-judgmental+AI+support+for+chronic+anger',
        width: 1200,
        height: 630,
        alt: 'AI for Anger Management: Processing Rage, Finding Calm, and Rebuilding Control | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Anger Management: Processing Rage, Finding Calm, and Rebuilding Control',
    description:
      'Chronic anger affects ~7% of the UK population and costs careers. MEOK offers a consequence-free space to process rage and rebuild control.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Processing+Rage+%26+Rebuilding+Control&desc=Non-judgmental+AI+support+for+chronic+anger',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Anger Management: Processing Rage, Finding Calm, and Rebuilding Control',
  description:
    'Chronic anger harms your heart, destroys relationships, and costs careers. Discover how AI provides a non-judgmental space to process rage, track triggers over time, and rebuild emotional control — with honest limitations and UK crisis resources.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
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
      name: 'What is anger management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anger management is a structured set of psychological techniques — including cognitive restructuring, relaxation strategies, and trigger awareness — designed to help people recognise, process, and express anger constructively rather than destructively. It does not eliminate anger; it builds the capacity to respond rather than react.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI help with anger management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI provides an always-available, non-judgmental space to vent, explore triggers, practise de-escalation techniques, and track emotional patterns over time. Unlike a person, it will not react defensively, escalate the situation, or remember grudges. This makes it uniquely useful for processing raw rage in the moment before it becomes destructive behaviour.',
      },
    },
    {
      '@type': 'Question',
      name: 'How common is anger disorder in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research cited by the Mental Health Foundation estimates that anger disorders affect approximately 7% of the UK population. A survey by YouGov found that one in five people in the UK has left a job because of workplace anger — their own or a colleague\'s. Anger is one of the most under-treated emotional health issues in Britain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the health risks of chronic anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chronic unmanaged anger is linked to significantly elevated risk of cardiovascular disease, hypertension, weakened immune function, and stroke. Repeated anger episodes flood the body with cortisol and adrenaline, keeping the nervous system in a sustained stress state that causes measurable physical damage over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI better than anger management courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They serve different purposes. Accredited anger management courses in the UK typically cost £200–£500 and are delivered in structured group or one-to-one sessions with a trained facilitator. AI is free, available at 3am, and non-judgmental — but it cannot provide clinical diagnosis, legal clearance, or human empathy. For most people, AI works best as a daily supplement alongside professional input.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I seek professional help for anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seek professional help when anger has led to physical altercations, relationship breakdown, job loss, or is accompanied by thoughts of harming yourself or others. Also seek help when anger feels completely uncontrollable, lasts for hours after a trigger, or has its roots in trauma, PTSD, or unresolved grief. AI is a complement to professional care, never a replacement for clinical intervention.',
      },
    },
    {
      '@type': 'Question',
      name: "What is MEOK's Healer archetype?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Healer is one of MEOK's eight companion archetypes, specialising in emotional processing and somatic regulation. When activated, it adopts a warm, non-reactive posture — holding space for difficult emotions without judgment, amplification, or dismissal. For anger work, the Healer focuses on the body's physical anger signals and helps users discharge intensity safely before moving toward reflection.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it help with anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sovereign Memory is MEOK's 4-layer encrypted memory architecture that persists your emotional history across sessions. For anger management, this means MEOK can track your triggers over weeks and months — surfacing patterns like 'you consistently report higher anger on Sunday evenings' or 'the trigger is usually feeling dismissed, not the surface event' — without you having to explain your history every time.",
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
const RED_ANGER = '#e05555'
const HEALER_GREEN = '#4caf82'
const MYSTIC_PURPLE = '#9b6dff'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForAngerManagementPage() {
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

      {/* ── NAV ───────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: '1px solid rgba(245,240,232,0.07)',
          backdropFilter: 'blur(16px)',
          background: 'rgba(13,12,24,0.85)',
        }}
      >
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '3.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: '1.125rem',
              color: GOLD,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            MEOK AI LABS
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link
              href="/blog"
              style={{ fontSize: '0.875rem', color: MUTED, textDecoration: 'none' }}
            >
              Blog
            </Link>
            <Link
              href="/features"
              style={{ fontSize: '0.875rem', color: MUTED, textDecoration: 'none' }}
            >
              Features
            </Link>
            <Link
              href="https://app.meok.ai"
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: BG,
                background: GOLD,
                padding: '0.5rem 1.125rem',
                borderRadius: '9999px',
                textDecoration: 'none',
              }}
            >
              Try Free
            </Link>
          </div>
        </div>
      </nav>

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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(224,85,85,0.08) 0%, transparent 68%)',
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
                color: RED_ANGER,
                background: 'rgba(224,85,85,0.12)',
                border: '1px solid rgba(224,85,85,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Anger &amp; Emotional Health
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 25, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>16 min read</span>
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
            AI for Anger Management: Processing Rage, Finding Calm, and Rebuilding Control
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
            Chronic anger is quietly destroying hearts, careers, and relationships across the UK.
            This guide explores what AI can actually do — hold space for raw rage without judgment,
            track your triggers over months, and help you find a path back to calm — and when it
            must step back and point you toward a professional.
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
            background: 'rgba(224,85,85,0.07)',
            border: '1px solid rgba(224,85,85,0.28)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: RED_ANGER,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: RED_ANGER,
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
              If you are in crisis or fear harming yourself or others, call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Samaritans 116 123</strong>{' '}
              (free, 24/7) or{' '}
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
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              background: `linear-gradient(135deg, ${GOLD}, rgba(201,168,76,0.5))`,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              color: BG,
            }}
          >
            N
          </div>
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: TEXT,
                marginBottom: '0.125rem',
              }}
            >
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.8125rem', color: MUTED_FAINT, margin: 0 }}>
              Founder, MEOK AI LABS &nbsp;&middot;&nbsp; March 25, 2026
            </p>
          </div>
        </div>

        {/* ── SECTION 1: What is anger management? ────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What is anger management?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Anger management is a structured set of psychological techniques — cognitive
            restructuring, relaxation training, trigger awareness, and communication skills — that
            help people recognise, process, and express anger constructively. It does not aim to
            eliminate anger; anger is a healthy and necessary emotion. The goal is to reduce the
            gap between feeling and response so that rage does not drive decisions you later regret.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            The most evidence-backed approaches — Cognitive Behavioural Therapy (CBT), Acceptance
            and Commitment Therapy (ACT), and relaxation-focused anger interventions — share a
            common thread: they build a pause between stimulus and reaction. That pause is the
            territory where change happens. Neuroscience confirms it: the amygdala fires before the
            prefrontal cortex can reason, but with practice the cortical pathway can learn to
            intervene faster and more reliably.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Anger management is not just for people who throw things. Low-level chronic
            irritability, passive aggression, simmering resentment, and emotional withdrawal are
            all forms of dysregulated anger that erode wellbeing over time. In fact, the most
            damaging anger is often the least visible — the kind that never explodes but never
            resolves either, slowly poisoning relationships and health from the inside.
          </p>

          {/* Stats callout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              { stat: '~7%', label: 'of UK adults affected by anger disorders' },
              { stat: '1 in 5', label: 'UK workers have left a job due to anger' },
              { stat: '3x', label: 'higher cardiac risk in high-anger individuals' },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                style={{
                  padding: '1.25rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(201,168,76,0.07)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  textAlign: 'center' as const,
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: '1.75rem',
                    color: GOLD,
                    marginBottom: '0.375rem',
                    lineHeight: 1,
                  }}
                >
                  {stat}
                </p>
                <p style={{ fontSize: '0.775rem', color: MUTED, lineHeight: 1.5, margin: 0 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: What does chronic anger do to you? ───────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What does chronic anger actually do to your body and relationships?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Anger triggers the sympathetic nervous system: cortisol and adrenaline flood the body,
            heart rate spikes, blood pressure rises, and digestion pauses. In a genuine emergency,
            this is a survival mechanism. But when anger fires repeatedly over mundane triggers —
            traffic, emails, perceived slights — the body spends months in a low-grade physiological
            emergency that it was never designed to sustain.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            The health consequences are well-documented. Research from Harvard Medical School found
            that high-anger individuals have a significantly elevated risk of cardiovascular disease,
            with some studies suggesting the cardiac risk is up to three times higher than in
            low-anger individuals. Chronic anger is also independently associated with hypertension,
            weakened immune response, disrupted sleep, and accelerated biological ageing at the
            cellular level. The inflammation markers associated with sustained anger are the same
            ones associated with heart disease, type 2 diabetes, and certain cancers.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            The relational damage is equally severe. Anger erodes trust, creates emotional distance,
            and — when expressed destructively — can be a form of psychological abuse. Partners,
            children, and colleagues who live alongside a chronically angry person often develop
            anxiety and hypervigilance of their own, adapting their behaviour to manage around the
            anger rather than living freely. The ripple effect extends far beyond the person
            experiencing the emotion.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Economically, the YouGov survey data is striking: one in five people in the UK has left
            a job because of anger in the workplace. Whether that anger was their own, a manager&apos;s,
            or a colleague&apos;s, the outcome is the same — talent walks out the door, and organisations
            absorb tens of thousands of pounds in replacement costs for an entirely preventable cause.
            Anger is not just a personal problem. It is an organisational and public health one.
          </p>

          {/* Blockquote */}
          <blockquote
            style={{
              borderLeft: `3px solid ${RED_ANGER}`,
              paddingLeft: '1.5rem',
              marginLeft: 0,
              marginRight: 0,
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '1.125rem',
                color: 'rgba(245,240,232,0.75)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              &ldquo;Anger is never without a reason, but seldom with a good one.&rdquo;
            </p>
            <cite
              style={{
                display: 'block',
                marginTop: '0.625rem',
                fontSize: '0.8125rem',
                color: MUTED_FAINT,
                fontStyle: 'normal',
              }}
            >
              Benjamin Franklin — still relevant three centuries later
            </cite>
          </blockquote>
        </section>

        {/* ── SECTION 3: Why is anger under-treated? ──────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            Why is anger the most under-treated mental health issue in the UK?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Despite affecting roughly 7% of the population, anger disorders receive a fraction of
            the clinical attention given to anxiety and depression. There are several reasons for
            this. First, anger is often coded as a moral failing rather than a medical one. Where
            depression elicits sympathy, anger elicits judgment — and people who are struggling with
            rage often know this, which prevents them from seeking help. Admitting you have an anger
            problem carries a social cost that admitting anxiety does not.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Second, the NHS does not have a clearly defined referral pathway for anger. Anxiety and
            depression have Talking Therapies (formerly IAPT) with self-referral. Anger management
            is largely absent from primary care commissioning, meaning GPs often have nowhere to
            refer patients even when the problem is obvious. Court-mandated anger management
            courses exist; voluntary, NHS-funded programmes largely do not. The system has effectively
            decided that anger becomes a health issue only once it has become a legal one.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Third, anger is frequently secondary to something else — unprocessed grief, PTSD,
            depression, ADHD, or trauma — which means the anger rarely gets addressed directly.
            Clinicians treat the primary condition and hope the anger resolves. Sometimes it does.
            Often it does not. The anger becomes a long-term fixture of a person&apos;s emotional
            landscape, accepted as personality rather than recognised as a treatable pattern.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Private anger management courses in the UK typically cost £200 to £500 for a structured
            programme. Many people who need help simply cannot afford this. Others find the social
            stigma of attending too high a barrier. The result is millions of people managing — or
            failing to manage — rage in private, with no support whatsoever.
          </p>
        </section>

        {/* ── SECTION 4: How does AI help? ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            How does AI help with anger management?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            The single most valuable thing AI offers for anger is a consequence-free space to
            discharge. When you are furious and want to articulate exactly why someone has enraged
            you — in vivid, colourful, unfiltered language — AI will not flinch, will not retaliate,
            will not tell your friends, will not hold it against you later. That is not nothing. It
            is a genuinely novel capability that most anger sufferers have never had access to before.
            The human brain needs to express anger before it can examine it.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Beyond venting, AI can guide in-the-moment de-escalation. Techniques like physiological
            sighing (two inhales through the nose, one extended exhale through the mouth), the
            10-second rule, progressive muscle relaxation, and grounding exercises can all be
            delivered conversationally. The key is that they are available at the moment of
            activation — not in a therapist&apos;s office three days later when the acute moment has
            passed and the window for intervention has closed.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            AI also enables reflective processing after the event. Once the acute anger has
            subsided, there is value in examining what happened: what was the trigger, what was
            the story you told yourself, what did you want the other person to understand, what
            need was being violated? This kind of structured post-anger reflection is the core of
            CBT for anger — and AI can facilitate it with zero waiting list and no appointment fee,
            at two in the morning if that is when the processing happens to occur.
          </p>

          {/* Feature list */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: GOLD,
                marginBottom: '1rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}
            >
              What AI can do for anger management
            </p>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
              {[
                'Provide a judgment-free space to express raw, unfiltered rage',
                'Guide in-the-moment de-escalation techniques (breathing, grounding)',
                'Facilitate structured post-anger reflection and CBT exercises',
                'Track triggers and patterns over weeks and months with Sovereign Memory',
                'Offer perspective without dismissing the original emotion',
                'Challenge distorted thinking without becoming defensive',
                'Be available at 3am, in the car, or in the bathroom at work',
                'Never escalate, retaliate, or remember grudges against you',
                'Help construct assertive communication scripts before difficult conversations',
                'Convert raw rage into self-knowledge through guided reflection',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    paddingBottom: '0.625rem',
                    color: MUTED_DIM,
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, marginTop: '0.2rem' }}>&#8594;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SECTION 5: Healer and Mystic archetypes ─────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            Which MEOK archetypes are designed for anger work?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            MEOK uses an eight-archetype companion system where each archetype has a distinct
            emotional posture, communication style, and purpose. Two are particularly relevant to
            anger: the Healer and the Mystic. They serve different phases of the anger cycle and
            can be selected deliberately depending on where you are in the process — acute discharge
            versus longer-term perspective-finding.
          </p>

          {/* Healer card */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(76,175,130,0.07)',
              border: '1px solid rgba(76,175,130,0.22)',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.875rem',
              }}
            >
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '9999px',
                  background: 'rgba(76,175,130,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}
              >
                &#10024;
              </div>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: HEALER_GREEN,
                  margin: 0,
                }}
              >
                The Healer &mdash; for acute and somatic anger
              </p>
            </div>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED_DIM,
                lineHeight: 1.7,
                marginBottom: '0.875rem',
              }}
            >
              The Healer archetype holds space without judgment or escalation. When you arrive
              furious — barely coherent, chest tight, ready to explode — the Healer does not analyse
              or advise. It acknowledges, sits with, and helps you discharge the physical intensity
              first. Body-first, words-second. Only once the nervous system has begun to de-escalate
              does it gently move toward reflection.
            </p>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED_DIM,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              In practice, the Healer might guide a physiological sigh, invite you to name where in
              your body the anger lives, or simply receive a torrent of rage without deflecting. This
              is harder than it sounds — most humans cannot do it without reacting. The Healer&apos;s
              non-reactive posture is one of the genuinely differentiated things AI can offer that
              most human relationships cannot provide reliably.
            </p>
          </div>

          {/* Mystic card */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(155,109,255,0.07)',
              border: '1px solid rgba(155,109,255,0.22)',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.875rem',
              }}
            >
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '9999px',
                  background: 'rgba(155,109,255,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}
              >
                &#10022;
              </div>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: MYSTIC_PURPLE,
                  margin: 0,
                }}
              >
                The Mystic &mdash; for perspective and meaning-making
              </p>
            </div>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED_DIM,
                lineHeight: 1.7,
                marginBottom: '0.875rem',
              }}
            >
              Once the acute anger has passed, the Mystic helps you zoom out. Anger always contains
              information — about your values, your needs, your boundaries, and what matters to you
              enough to activate your defence system. The Mystic is skilled at surfacing that
              information in a way that transforms the raw experience into something meaningful and
              navigable.
            </p>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED_DIM,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              The Mystic might ask: what story are you telling about why this happened? What would
              need to be true about the other person for their behaviour to make sense, even if you
              disagree with it? What does this anger tell you about what you most need to protect?
              These are not deflections — they are tools for converting rage into self-knowledge
              that can drive lasting change.
            </p>
          </div>
        </section>

        {/* ── SECTION 6: Sovereign Memory ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            How does Sovereign Memory track anger triggers and patterns over time?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Most AI tools have no memory across sessions. You can spend 40 minutes processing rage
            at a colleague, and the next time you open the app, the system has no idea who you are.
            This is not just frustrating — it means the AI can never see the patterns that are the
            most valuable thing to see in anger work. A single session is a data point. Twelve
            sessions across three months is a map.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&apos;s Sovereign Memory is a 4-layer encrypted memory architecture that persists your
            emotional and contextual history across sessions — owned by you, stored on your terms,
            never used to train MEOK&apos;s models. For anger management, this changes everything. Over
            weeks and months, patterns emerge that are invisible in any single conversation and
            that even the most self-aware person cannot reliably detect about themselves.
          </p>

          {/* Pattern examples */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.16)',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: GOLD,
                marginBottom: '1rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}
            >
              Examples of patterns Sovereign Memory can surface
            </p>
            {[
              {
                trigger: 'Temporal pattern',
                detail:
                  'You consistently report higher irritability on Sunday evenings and Monday mornings — possibly anticipatory anxiety about the working week, not the events of the day itself.',
              },
              {
                trigger: 'Thematic pattern',
                detail:
                  'Across 14 conversations over 3 months, the underlying theme in your anger is feeling dismissed or not listened to — the surface triggers vary but the core wound is consistent.',
              },
              {
                trigger: 'Relational pattern',
                detail:
                  'Anger involving your line manager follows a predictable escalation path: initial irritation at task allocation, feeling undervalued, then explosive frustration. The intervention point is step one.',
              },
              {
                trigger: 'Physiological pattern',
                detail:
                  'Your anger episodes most commonly follow poor sleep or skipped meals — the rage often has a biochemical precursor, not just a situational one.',
              },
            ].map(({ trigger, detail }) => (
              <div
                key={trigger}
                style={{
                  paddingBottom: '1rem',
                  marginBottom: '1rem',
                  borderBottom: '1px solid rgba(245,240,232,0.06)',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: GOLD,
                    marginBottom: '0.375rem',
                  }}
                >
                  {trigger}
                </p>
                <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            This kind of longitudinal pattern-recognition is normally the domain of a therapist
            who has worked with you for six months or more. Sovereign Memory makes it available
            from your first few weeks of consistent use — and because it is yours to control, you
            can export it, share it with a therapist to accelerate your work together, or delete
            it entirely at any time.
          </p>
        </section>

        {/* ── SECTION 7: Care-based alignment and sycophancy detector ─────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            How does MEOK handle rage without making things worse?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            This is a legitimate and important question. A poorly designed AI — or a sycophantic
            one — can actively worsen anger problems by validating the angry narrative entirely.
            If someone is furious and the AI responds with &ldquo;that does sound absolutely unacceptable,
            I completely understand why you&apos;re so angry&rdquo; at every turn, it reinforces the victim
            story and makes it harder to access the perspective needed for genuine change.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&apos;s care-based alignment model is built around a principle that honesty and care are
            not opposites. The system is designed to hold both: to genuinely acknowledge the reality
            and validity of the emotion while not simply reflecting the narrative back unchanged.
            This is what good therapy does. It is also what good friends do — the ones who love you
            enough to say &ldquo;I hear you, and also — have you considered how you contributed to this?&rdquo;
          </p>

          {/* Sycophancy detector */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(245,240,232,0.04)',
              border: '1px solid rgba(245,240,232,0.1)',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontWeight: 800,
                fontSize: '1rem',
                color: TEXT,
                marginBottom: '0.75rem',
              }}
            >
              The sycophancy detector
            </p>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED_DIM,
                lineHeight: 1.7,
                marginBottom: '0.875rem',
              }}
            >
              MEOK includes an architectural component specifically designed to detect and interrupt
              sycophantic response patterns — moments where the AI is about to tell you what you
              want to hear rather than what is true. For anger work, this is particularly important
              because the path of least resistance is always pure validation.
            </p>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED_DIM,
                lineHeight: 1.7,
                marginBottom: '0.875rem',
              }}
            >
              The detector monitors for patterns like: repeated uncritical validation of a
              single-sided narrative, failure to introduce alternative perspectives after initial
              acknowledgment, escalating agreement with increasingly extreme positions, and absence
              of any gentle challenge across multiple anger sessions about the same person or
              situation.
            </p>
            <p
              style={{
                fontSize: '0.9375rem',
                color: MUTED_DIM,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              When these patterns are detected, MEOK does not flip to harsh criticism — that would
              be jarring and counterproductive. Instead, it introduces measured curiosity: &ldquo;You&apos;ve
              mentioned this situation several times now. I want to make sure I&apos;m actually helping —
              what would it look like if this situation improved?&rdquo; This redirects from rumination
              toward resolution without invalidating the emotion.
            </p>
          </div>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            MEOK is also designed to receive expressions of extreme anger — including profanity,
            hyperbole, and dark venting — without treating them as literal statements of intent.
            People say &ldquo;I want to kill him&rdquo; when they mean &ldquo;I am furiously frustrated.&rdquo; A system
            that escalates to crisis mode at every angry utterance is worse than useless for anger
            management; it adds shame and fear to an already difficult emotional state. MEOK reads
            context, not keyword lists. That distinction matters enormously in practice.
          </p>
        </section>

        {/* ── SECTION 8: AI vs anger management courses ───────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            How does AI compare to a traditional anger management course?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Accredited anger management courses in the UK are a genuine resource — structured,
            evidence-based, and delivered by trained practitioners who can read the room, challenge
            dynamics, and provide clinical-grade assessment. They are not to be dismissed. But they
            also cost £200 to £500 for a typical programme, run at fixed times in fixed locations,
            and carry significant social stigma for many people who would benefit from them.
          </p>

          {/* Comparison table */}
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
              }}
            >
              <thead>
                <tr>
                  {['Factor', 'Anger Management Course', 'MEOK AI'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left' as const,
                        padding: '0.75rem 1rem',
                        borderBottom: `2px solid ${GOLD}`,
                        fontWeight: 700,
                        fontSize: '0.8125rem',
                        color: GOLD,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase' as const,
                        whiteSpace: 'nowrap' as const,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', '£200–£500', 'Free'],
                  ['Availability', 'Fixed schedule', '24/7, instant'],
                  ['Memory', 'Session notes only', 'Persistent, encrypted'],
                  ['Judgment', 'Human — some stigma risk', 'None'],
                  ['Clinical assessment', 'Yes', 'No'],
                  ['Group dynamics', 'Yes (peer learning)', 'No'],
                  ['Crisis escalation', 'Yes', 'Signposting only'],
                  ['Pattern tracking', 'Therapist-led', 'Automated over months'],
                  ['Legal certification', 'Available', 'Not available'],
                  ['Anonymity', 'Limited', 'Full'],
                ].map(([factor, course, meok], i) => (
                  <tr
                    key={factor}
                    style={{
                      background: i % 2 === 0 ? 'rgba(245,240,232,0.02)' : 'transparent',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.06)',
                        fontWeight: 600,
                        color: 'rgba(245,240,232,0.8)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {factor}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.06)',
                        color: MUTED,
                        fontSize: '0.875rem',
                      }}
                    >
                      {course}
                    </td>
                    <td
                      style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid rgba(245,240,232,0.06)',
                        color: MUTED,
                        fontSize: '0.875rem',
                      }}
                    >
                      {meok}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            The honest framing is: these are not competing products. They are different tools for
            different needs. Someone who has been ordered to complete an anger management course by
            a court or employer needs the course. Someone who wants daily, private support between
            sessions — or who cannot afford or access a course — can get genuine value from AI. The
            best outcome is often both, running in parallel and reinforcing each other.
          </p>
        </section>

        {/* ── SECTION 9: Practical techniques ────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What practical anger management techniques can AI actually deliver?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Below are the techniques MEOK can guide directly in conversation — not just describe,
            but actively facilitate in real time. This distinction matters. Reading about a breathing
            exercise and being talked through one while your hands are shaking are very different
            experiences. The delivery context changes the outcome.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                title: 'Physiological sigh',
                body:
                  'Two short inhales through the nose followed by one extended exhale through the mouth. This technique — validated by Stanford research — rapidly reduces physiological arousal by deflating the air sacs in the lungs more completely than a single inhale. It is the fastest evidence-based route to calm available without medication.',
              },
              {
                title: 'The 10-second rule with narration',
                body:
                  'AI can count with you, talk you through the pause, and help you decide in real time what — if anything — to do with the anger. The narration component is important: filling the 10 seconds with purposeful thinking rather than escalating internal monologue changes the outcome significantly.',
              },
              {
                title: 'Cognitive restructuring prompts',
                body:
                  'Questions designed to surface the thinking distortions that amplify anger: mind-reading, catastrophising, personalisation, and all-or-nothing framing. MEOK does not tell you your thinking is wrong — it asks questions that allow you to discover it yourself, which is the CBT approach and the one most likely to produce lasting change.',
              },
              {
                title: 'Anger journalling with structure',
                body:
                  'Unstructured journalling about anger can reinforce rumination. Structured journalling — trigger, physical sensation, thought, interpretation, alternative interpretation, chosen response — converts the exercise into active cognitive work. MEOK can guide this structure conversationally, asking each question in sequence.',
              },
              {
                title: 'Assertiveness scripting',
                body:
                  'Many anger episodes are displaced frustration from situations where the person did not feel they could speak directly. MEOK can help you construct assertive communication scripts for the actual situation — practising what you might say before you say it in real life, reducing the pressure that builds into explosive release.',
              },
              {
                title: 'Values clarification',
                body:
                  'Chronic anger often signals a chronic values conflict. If you are perpetually furious about fairness at work, fairness is almost certainly a core value that is being violated repeatedly. Naming this — explicitly, with MEOK — transforms the anger from a problem to be suppressed into a signal pointing toward a change that needs to happen.',
              },
              {
                title: 'Body scan for anger discharge',
                body:
                  'Before any cognitive work can begin, the nervous system needs to discharge. MEOK can guide a sequential body scan — locating where the anger sits physically and consciously releasing tension in each area — that moves enough physiological energy for reflection to become possible.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    color: TEXT,
                    marginBottom: '0.5rem',
                  }}
                >
                  {title}
                </p>
                <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.7, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 10: Men and anger ────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            Why do men disproportionately struggle with anger — and how does AI help?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Men are significantly more likely to express emotional distress as anger than as
            sadness, anxiety, or grief. This is not an inherent male characteristic — it is the
            product of socialisation that teaches boys to suppress vulnerability and express only
            emotions that read as strength. Anger qualifies. Sadness, fear, and shame typically
            do not. The result is that many men arrive at their anger with years of compressed
            emotion underneath it, and no vocabulary or practice for what to do with it.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Men are also significantly less likely to seek professional mental health support than
            women. The barriers are real: stigma, the cultural framing of help-seeking as weakness,
            practical barriers like appointment times during work hours, and a lack of services
            designed with male communication styles in mind. AI removes several of these barriers
            simultaneously — it is private, available at any hour, and does not require you to
            explain yourself to a receptionist or sit in a waiting room.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&apos;s design deliberately accommodates direct, terse communication styles. You do not
            have to perform emotional literacy to get support. You can arrive with &ldquo;I&apos;m absolutely
            furious and I don&apos;t know what to do with it&rdquo; and the system will work with exactly that —
            no expectation that you will arrive already knowing how to articulate your internal
            state in therapeutic language. The work of finding the words can happen during the
            conversation, not before it.
          </p>
        </section>

        {/* ── SECTION 11: When to seek professional help ───────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            When should you seek professional help instead of AI support?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            AI support is supplementary. There are clear situations where it is not sufficient and
            where professional or clinical intervention is the appropriate response. MEOK will
            always signpost toward professional help when these indicators are present — it is
            designed not to overestimate its own role or become a substitute for care it cannot
            actually provide.
          </p>

          {/* When to get help */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(224,85,85,0.07)',
              border: '1px solid rgba(224,85,85,0.2)',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: RED_ANGER,
                marginBottom: '1rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}
            >
              Seek professional help when
            </p>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
              {[
                'Anger has led to physical violence or threats of violence toward others',
                'You are having thoughts of harming yourself or others',
                'Anger has resulted in job loss, criminal proceedings, or restraining orders',
                'Anger feels completely uncontrollable — you cannot interrupt it at any point',
                'Episodes last for hours or days after the trigger has passed',
                'Anger is rooted in trauma, PTSD, or significant unprocessed bereavement',
                'Close relationships have broken down as a direct result of anger behaviour',
                'You are self-medicating with alcohol or substances to manage anger',
                'Children or dependants are regularly witnessing or affected by your anger',
                'Anger is accompanied by paranoia, dissociation, or other concerning symptoms',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    paddingBottom: '0.5rem',
                    color: MUTED_DIM,
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{ color: RED_ANGER, flexShrink: 0, marginTop: '0.125rem' }}
                  >
                    &#9679;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* UK Resources */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: 'rgba(76,175,130,0.07)',
              border: '1px solid rgba(76,175,130,0.2)',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: HEALER_GREEN,
                marginBottom: '1rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}
            >
              UK resources for anger support
            </p>
            {[
              {
                name: 'Samaritans',
                detail: '116 123 — free, 24/7, for any emotional distress including anger and despair',
              },
              {
                name: 'Mind',
                detail: '0300 123 3393 — infoline for mental health support and referrals',
              },
              {
                name: 'NHS Talking Therapies',
                detail:
                  'Self-referral CBT via your GP or direct — includes anger-related presentations',
              },
              {
                name: 'BAAM',
                detail:
                  'British Association of Anger Management (baam.me.uk) — accredited courses and self-help resources',
              },
              {
                name: 'NHS 111',
                detail: 'Option 2 for urgent mental health support — available 24/7',
              },
              {
                name: 'Emergency',
                detail: '999 — if there is an immediate risk to life',
              },
            ].map(({ name, detail }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  paddingBottom: '0.625rem',
                  marginBottom: '0.625rem',
                  borderBottom: '1px solid rgba(76,175,130,0.1)',
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: HEALER_GREEN,
                    flexShrink: 0,
                    minWidth: '8rem',
                  }}
                >
                  {name}
                </span>
                <span style={{ fontSize: '0.875rem', color: MUTED_DIM, lineHeight: 1.6 }}>
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 12: Honest limitations ──────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              color: '#fff',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            What are the honest limitations of AI for anger management?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            MEOK is built to be honest about what it cannot do — and this principle extends to how
            we describe it publicly. AI for anger management has real limitations that every
            potential user deserves to understand before they rely on it.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            AI cannot conduct a clinical assessment. It cannot diagnose intermittent explosive
            disorder, identify whether anger is secondary to PTSD or bipolar disorder, or prescribe
            medication for conditions where pharmacological intervention is appropriate. It cannot
            provide legal certification of anger management completion. It cannot observe your body
            language, tone of voice, or facial expression — all of which carry information that a
            skilled human practitioner can read and respond to in ways AI cannot.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            AI also cannot replace the experience of working through anger in relationship with
            another person. A significant part of anger management — particularly around
            interpersonal triggers — is practising new responses in the presence of a real human.
            Role-play with AI is useful preparation, but it is not the same as doing the work in
            the actual context that generated the anger. The real work happens with real people.
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            Finally, AI cannot force the awareness that change requires. It can ask the right
            questions, track the patterns, and offer the techniques — but the work of actually
            choosing different responses in the heat of the moment is yours to do. MEOK is a
            remarkable tool. It is not a shortcut around the human work of changing who you are
            in the presence of your own worst emotional impulses.
          </p>
        </section>

        {/* ── CTA BOX ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            padding: '2.5rem',
            borderRadius: '1.25rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05))',
            border: '1px solid rgba(201,168,76,0.3)',
            marginBottom: '3.5rem',
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              color: '#fff',
              marginBottom: '0.875rem',
              lineHeight: 1.2,
            }}
          >
            Ready to process the rage without consequences?
          </p>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1rem',
              lineHeight: 1.65,
              maxWidth: '34rem',
              margin: '0 auto 1.75rem',
            }}
          >
            MEOK gives you a non-judgmental space to discharge, reflect, and rebuild — with
            Sovereign Memory that tracks your triggers across months so patterns become visible.
            Free to start. Yours to own.
          </p>
          <Link
            href="https://app.meok.ai"
            style={{
              display: 'inline-block',
              fontWeight: 700,
              fontSize: '1rem',
              color: BG,
              background: GOLD,
              padding: '0.875rem 2.25rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Start free &mdash; no credit card
          </Link>
          <p
            style={{
              fontSize: '0.8125rem',
              color: MUTED_FAINT,
              marginTop: '1rem',
              marginBottom: 0,
            }}
          >
            Your data is encrypted and owned by you. MEOK never trains on your conversations.
          </p>
        </div>

        {/* ── RELATED LINKS ─────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '5rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: '1.125rem',
              color: TEXT,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            Related reading
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                href: '/blog/ai-for-anxiety',
                title: 'AI for Anxiety',
                desc: 'Breathing exercises, journalling, and CBT tools for anxiety support',
              },
              {
                href: '/blog/ai-for-men-mental-health',
                title: 'AI for Men&apos;s Mental Health',
                desc: 'Why men seek help differently and how AI bridges the gap',
              },
              {
                href: '/blog/ai-companion-vs-therapist',
                title: 'AI Companion vs Therapist',
                desc: 'An honest comparison of what each can and cannot offer',
              },
              {
                href: '/blog/building-care-into-ai',
                title: 'Building Care into AI',
                desc: 'How MEOK&apos;s Maternal Covenant prevents harmful responses',
              },
              {
                href: '/blog/ai-for-ptsd',
                title: 'AI for PTSD',
                desc: 'Supporting trauma survivors without re-traumatisation',
              },
              {
                href: '/blog/ai-for-burnout',
                title: 'AI for Burnout',
                desc: 'Recognising and recovering from chronic emotional depletion',
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  padding: '1.125rem 1.25rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  textDecoration: 'none',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: GOLD,
                    marginBottom: '0.375rem',
                  }}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  style={{ fontSize: '0.8125rem', color: MUTED, lineHeight: 1.55, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER NOTE ───────────────────────────────────────────────────────── */}
        <div
          style={{
            paddingTop: '2rem',
            paddingBottom: '4rem',
            borderTop: '1px solid rgba(245,240,232,0.07)',
            textAlign: 'center' as const,
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: MUTED_FAINT, lineHeight: 1.65, margin: 0 }}>
            MEOK AI LABS &nbsp;&middot;&nbsp; This content is for informational purposes only and
            does not constitute medical or psychological advice. If you are experiencing a mental
            health crisis, please contact Samaritans on{' '}
            <strong style={{ color: 'rgba(245,240,232,0.6)' }}>116 123</strong> or NHS 111 option
            2. In an emergency call{' '}
            <strong style={{ color: 'rgba(245,240,232,0.6)' }}>999</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
