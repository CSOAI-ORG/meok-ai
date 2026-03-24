import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Phobias: How an AI Companion Supports the Graduated Exposure Process | MEOK AI LABS',
  description:
    'Phobias are conditioned fear responses \u2014 not character flaws. Discover how AI supports the graduated exposure process, helps you build a fear ladder, and tracks your progress across weeks. Honest guidance from MEOK AI LABS.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-phobias' },
  openGraph: {
    title: 'AI for Phobias: How an AI Companion Supports the Graduated Exposure Process',
    description:
      'Phobias are conditioned fear responses \u2014 not character flaws. Discover how AI supports graduated exposure, builds fear ladders, and tracks your progress across weeks.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-phobias',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Phobias%3A+Graduated+Exposure+%26+Fear+Ladders&desc=How+AI+supports+the+exposure+process+without+replacing+a+therapist',
        width: 1200,
        height: 630,
        alt: 'AI for Phobias: How an AI Companion Supports the Graduated Exposure Process | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Phobias: Graduated Exposure & Fear Ladders',
    description:
      'Phobias are conditioned fear responses. Discover how AI supports graduated exposure, builds fear ladders, and tracks your progress across weeks. From MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Phobias%3A+Graduated+Exposure+%26+Fear+Ladders&desc=How+AI+supports+the+exposure+process+without+replacing+a+therapist',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Phobias: How an AI Companion Supports the Graduated Exposure Process',
  description:
    'An honest guide to phobia mechanics, graduated exposure therapy, fear ladders, and how MEOK\u2019s persistent memory tracks your progress across weeks without replacing a clinical therapist.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-phobias',
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
    '@id': 'https://meok.ai/blog/ai-for-phobias',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI cure a phobia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AI cannot cure a phobia. Phobias are clinical anxiety disorders best treated by qualified therapists using evidence-based exposure therapy. An AI companion can support the process between sessions \u2014 tracking your fear hierarchy progress, coaching breathing before exposures, and holding your context across weeks \u2014 but it is a complement to professional care, never a replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a fear ladder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fear ladder (also called an exposure hierarchy) is a structured list of feared situations ranked from least to most anxiety-provoking, each assigned a distress score from 0\u2013100. You work through the rungs from the bottom up, building tolerance at each level before moving higher. The ladder is the core tool of graduated exposure therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is exposure therapy for phobias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exposure therapy is the gold-standard psychological treatment for phobias. It works by deliberately and repeatedly confronting feared stimuli \u2014 in imagination or in real life \u2014 in a controlled, graded way. Repeated exposure breaks the avoidance cycle, teaches the brain that danger signals are false alarms, and reduces the conditioned fear response over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK remember my phobia progress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK uses Sovereign Memory \u2014 a 4-layer encrypted memory store \u2014 to retain your fear hierarchy, exposure attempts, distress scores, and reflections across every session. When you return after a week, MEOK knows exactly which rung you reached, how you felt, and what your next step is. Nothing is lost between conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with driving anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, within limits. AI can help you build a driving anxiety fear ladder (from sitting in a parked car through to motorway driving), coach pre-drive breathing routines, debrief after practice sessions, and track distress scores over time. For severe vehophobia \u2014 especially after a road accident \u2014 professional support from a trauma-informed therapist is strongly recommended alongside any AI use.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.6)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const MUTED_STRONG = 'rgba(245,240,232,0.75)'
const BORDER = 'rgba(201,168,76,0.18)'
const BORDER_FAINT = 'rgba(245,240,232,0.1)'
const CARD_BG = 'rgba(255,255,255,0.03)'
const CARD_BG_GOLD = 'rgba(201,168,76,0.06)'
const AMBER_WARN = '#e8a838'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForPhobiasPage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
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

          {/* Tags row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            {['Phobias', 'Exposure Therapy', 'Mental Health', 'AI Companion'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  color: GOLD,
                  background: CARD_BG_GOLD,
                  border: `1px solid ${BORDER}`,
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
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            AI for Phobias: How an AI Companion{' '}
            <span style={{ color: GOLD }}>Supports the Graduated Exposure Process</span>
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: MUTED_STRONG,
              marginBottom: '2rem',
            }}
          >
            Phobias aren\u2019t weakness. They\u2019re a misfiring alarm system baked into your
            nervous system by experience, memory, and biology. This guide explains what phobias
            actually are, how exposure therapy works, and how an AI companion with persistent
            memory can walk alongside you through the graduated exposure process \u2014 without
            pretending to be your therapist.
          </p>

          {/* Byline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${BORDER_FAINT}`,
            }}
          >
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c9a84c 0%, #8b6914 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1rem',
                color: BG,
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Nicholas Templeman</div>
              <div style={{ fontSize: '0.8rem', color: MUTED }}>
                Founder, MEOK AI LABS &middot; @meok_ai &middot; 24 March 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER BANNER ─────────────────────────────────────────────────── */}
      <div
        style={{
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '0',
          paddingBottom: '2rem',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            background: 'rgba(232,168,56,0.07)',
            border: '1px solid rgba(232,168,56,0.25)',
            borderRadius: '0.75rem',
            padding: '1rem 1.25rem',
            fontSize: '0.875rem',
            color: MUTED_STRONG,
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: AMBER_WARN }}>Important: </strong>
          Phobias are diagnosed anxiety disorders. This article is educational, not clinical
          advice. For severe or debilitating phobias, please work with a licensed psychologist or
          CBT therapist. AI companions are a supplement to professional care \u2014 never a
          replacement. If you are in crisis, contact{' '}
          <strong style={{ color: TEXT }}>Samaritans: 116 123</strong> (UK, free, 24/7).
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '6rem',
        }}
      >

        {/* ── SECTION 1: What phobias actually are ──────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What is a phobia, and why can\u2019t you just think your way out of it?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            A phobia is not irrational. From the nervous system\u2019s perspective, it is
            entirely logical \u2014 the brain has learned, through direct experience or vicarious
            conditioning, that a specific stimulus signals danger. The response is automatic,
            fast, and feels completely real. Telling yourself \u201cit\u2019s fine\u201d does almost nothing
            because the fear circuit bypasses the reasoning centres entirely. Reason arrives
            after the alarm has already sounded.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            The technical term for what happens is an <strong style={{ color: TEXT }}>amygdala hijack</strong>.
            The amygdala \u2014 the brain\u2019s threat-detection structure \u2014 detects a pattern
            matching the feared stimulus and fires a survival response before the prefrontal cortex
            has even been consulted. Heart rate spikes. Breathing shallows. Muscles tense. The
            full physiological signature of mortal danger arrives even though no objective danger
            exists. This is not melodrama. This is neuroscience.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            What keeps phobias locked in place is the <strong style={{ color: TEXT }}>avoidance cycle</strong>.
            Every time you avoid the feared stimulus \u2014 rerouting around the spider, declining the
            flight, choosing the stairs over the lift \u2014 you get immediate, powerful relief.
            That relief feels like a victory. The brain is learning the opposite lesson: avoidance
            is the solution to the threat. The amygdala\u2019s fear memory is never updated, never
            challenged. The phobia is maintained and, with each avoidance, often strengthened.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            Over time the avoidance generalises. What started as a specific fear of spiders
            becomes a fear of certain rooms, certain seasons, certain conversations. What started
            as a fear of flying becomes a restructured life built around not flying. Phobias do
            not stay small. They grow to fill whatever space avoidance allows them.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.5rem' }}>
            This is why the only proven route through a phobia is exposure \u2014 deliberate,
            graduated contact with the feared stimulus, controlled enough to be survived
            repeatedly until the amygdala updates its threat register. There is no shortcut.
            But there are tools that make the process more manageable.
          </p>

          {/* Phobia mechanics callout */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER_FAINT}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: GOLD,
                marginBottom: '0.875rem',
              }}
            >
              The Phobia Maintenance Loop
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
              {[
                ['Trigger', 'Encounter with feared stimulus (real or imagined)'],
                ['Amygdala hijack', 'Threat signal fires before the rational brain can respond'],
                ['Fear response', 'Heart rate, breathing, muscle tension, urge to flee'],
                ['Avoidance', 'Escape or avoid the stimulus \u2014 immediate relief'],
                ['Reinforcement', 'Brain learns: avoidance = safety. Threat belief strengthened.'],
                ['Generalisation', 'Avoidance threshold lowers. Fear spreads to adjacent situations.'],
              ].map(([label, desc]) => (
                <div key={label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      minWidth: '9.5rem',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: GOLD,
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: MUTED_STRONG, lineHeight: 1.6 }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Common phobias ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            Which phobias are most common, and who do they affect?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            Specific phobias affect approximately 10\u201311% of the population across a lifetime,
            making them one of the most prevalent anxiety disorders. Social phobia affects another
            12\u201313%. The majority of people with phobias never seek treatment, primarily because
            avoidance is so effective at short-term symptom relief that the problem never feels
            urgent enough to confront \u2014 until it starts shrinking their world.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.5rem' }}>
            What unites all these very different fears is the same underlying architecture:
            a conditioned threat association, maintained by avoidance, treatable through
            graduated exposure. The content of the fear is almost secondary to the mechanics.
          </p>

          {/* Phobia grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              { name: 'Aviophobia', label: 'Fear of flying', note: 'Affects ~25% of flyers to some degree' },
              { name: 'Acrophobia', label: 'Fear of heights', note: 'Very common; often onset in childhood' },
              { name: 'Arachnophobia', label: 'Fear of spiders', note: 'More prevalent in Western cultures' },
              { name: 'Social phobia', label: 'Fear of social situations', note: 'Linked to shame and anticipated judgment' },
              { name: 'Emetophobia', label: 'Fear of vomiting', note: 'Often drives severe food restriction' },
              { name: 'Trypanophobia', label: 'Fear of needles', note: 'Leads to avoided medical care' },
              { name: 'Vehophobia', label: 'Fear of driving', note: 'Often post-accident or gradual onset' },
              { name: 'Claustrophobia', label: 'Fear of enclosed spaces', note: 'Avoidance compounds over time' },
            ].map((p) => (
              <div
                key={p.name}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: '0.625rem',
                  padding: '1rem',
                }}
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: GOLD, marginBottom: '0.25rem' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.9375rem', color: TEXT, fontWeight: 600, marginBottom: '0.25rem' }}>
                  {p.label}
                </div>
                <div style={{ fontSize: '0.8125rem', color: MUTED }}>
                  {p.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: How exposure therapy works ─────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How does exposure therapy for phobias actually work?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            Exposure therapy \u2014 specifically <em>graduated exposure</em> or <em>systematic
            desensitisation</em> \u2014 is the first-line, evidence-based treatment for specific
            phobias. Success rates are high: multiple meta-analyses show clinically significant
            improvement in 80\u201390% of cases when the protocol is followed correctly. It is
            not comfortable. It is not quick. But it works in a way that no other approach
            consistently replicates.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            The core mechanism is <strong style={{ color: TEXT }}>inhibitory learning</strong>.
            When you face a feared stimulus and remain in contact with it long enough for anxiety
            to peak and then subside naturally \u2014 without fleeing, neutralising, or seeking
            reassurance \u2014 you create a new competing memory. The amygdala does not erase
            the fear memory; it learns that in this context, with this stimulus, the danger
            prediction is wrong. The new memory competes with the old one. With repetition,
            it wins.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.5rem' }}>
            The \u201cgraduated\u201d part is critical. Throwing someone with a flying phobia straight
            onto a transatlantic flight is not therapy \u2014 it is flooding, and it risks
            retraumatisation. The graded approach starts at the lowest tolerable level of distress
            and climbs carefully, building a foundation of tolerated exposure at each rung before
            advancing. This is where the <strong style={{ color: TEXT }}>fear ladder</strong> becomes
            the central clinical tool.
          </p>

          {/* Process steps */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
            {[
              {
                step: '1',
                title: 'Build the fear ladder',
                body: 'List all feared situations related to the phobia and rate each from 0\u2013100 using the Subjective Units of Distress Scale (SUDS). Rank them from lowest to highest. The ladder becomes your roadmap.',
              },
              {
                step: '2',
                title: 'Learn your relaxation toolkit',
                body: 'Diaphragmatic breathing, progressive muscle relaxation, and grounding techniques give you tools to manage arousal during exposure \u2014 not to avoid the feeling, but to stay present within it.',
              },
              {
                step: '3',
                title: 'Start at the bottom rung',
                body: 'Choose the first exposure step (typically rated 20\u201330 SUDS). Face it deliberately. Stay in contact. Do not flee. Notice anxiety peak, then naturally subside. Repeat until distress drops by at least 50%.',
              },
              {
                step: '4',
                title: 'Move up when ready',
                body: 'Once a rung consistently produces low distress, advance to the next. Progress is not linear \u2014 some rungs need more repetitions than others. Setbacks are normal and not failure.',
              },
              {
                step: '5',
                title: 'Consolidate and generalise',
                body: 'Work toward the top of the ladder. Practise across different contexts to prevent the learning from being too narrowly tied to one situation. Review and update the hierarchy as you progress.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  gap: '1.125rem',
                  alignItems: 'flex-start',
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: '0.625rem',
                  padding: '1.125rem 1.25rem',
                }}
              >
                <div
                  style={{
                    minWidth: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    background: CARD_BG_GOLD,
                    border: `1px solid ${BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: GOLD,
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: TEXT, marginBottom: '0.3rem' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: MUTED_STRONG, lineHeight: 1.7 }}>
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: Sample flying phobia fear hierarchy ────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How do you build a fear ladder? A sample hierarchy for flying phobia
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.5rem' }}>
            A well-constructed fear ladder is specific, personalised, and covers the full range
            from mildly challenging to the most feared scenario. Below is a representative
            hierarchy for aviophobia. Your own ladder will differ based on which aspects of
            flying drive the most distress \u2014 turbulence, take-off, enclosed space, loss of
            control, or height itself.
          </p>

          {/* Fear ladder table */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER_FAINT}`,
              borderRadius: '0.75rem',
              overflow: 'hidden',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '3.25rem 1fr 4.5rem',
                background: CARD_BG_GOLD,
                borderBottom: `1px solid ${BORDER}`,
                padding: '0.75rem 1.25rem',
                gap: '0.75rem',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: GOLD, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Rung</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: GOLD, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Exposure Step</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: GOLD, letterSpacing: '0.08em', textTransform: 'uppercase' as const, textAlign: 'right' as const }}>SUDS</div>
            </div>
            {[
              { rung: '1', step: 'Look at photographs of aircraft in a magazine or online', suds: 15 },
              { rung: '2', step: 'Watch a 5-minute documentary about how commercial aviation works', suds: 20 },
              { rung: '3', step: 'Watch a full flight-experience video (cockpit view, take-off and landing)', suds: 28 },
              { rung: '4', step: 'Visit an airport without flying: observe departures, sit in the terminal', suds: 35 },
              { rung: '5', step: 'Sit inside a stationary aircraft (some airlines offer cabin familiarisation tours)', suds: 45 },
              { rung: '6', step: 'Use a flight simulator in imaginal exposure with your therapist or companion', suds: 55 },
              { rung: '7', step: 'Book a short domestic flight (under 45 minutes) with a trusted companion', suds: 65 },
              { rung: '8', step: 'Take the short domestic flight alone, using your breathing tools throughout', suds: 75 },
              { rung: '9', step: 'Take a 2-hour European flight alone, requesting a window seat', suds: 83 },
              { rung: '10', step: 'Take a long-haul flight (6+ hours) alone, including a period of turbulence', suds: 92 },
            ].map((row, i) => (
              <div
                key={row.rung}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '3.25rem 1fr 4.5rem',
                  padding: '0.8rem 1.25rem',
                  gap: '0.75rem',
                  borderBottom: i < 9 ? `1px solid ${BORDER_FAINT}` : 'none',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: GOLD }}>
                  {row.rung}
                </div>
                <div style={{ fontSize: '0.9rem', color: MUTED_STRONG, lineHeight: 1.6 }}>
                  {row.step}
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: row.suds >= 70 ? AMBER_WARN : row.suds >= 45 ? TEXT : MUTED_STRONG,
                    textAlign: 'right' as const,
                  }}
                >
                  {row.suds}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: MUTED, fontStyle: 'italic', marginBottom: '1.25rem' }}>
            SUDS scores are approximate and will vary between individuals. Your personal hierarchy
            should be built with a therapist or AI companion \u2014 what matters is that each rung
            is genuinely challenging but reachable from the one below it.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG }}>
            Notice the structure: the ladder does not jump from photographs to long-haul. Each
            step is meaningfully harder than the last, but each is reachable from the previous
            rung. A good fear ladder has no enormous gaps. If two adjacent rungs have a SUDS
            difference of more than 20 points, you need an intermediate step between them.
          </p>
        </section>

        {/* ── SECTION 5: How AI supports the process ────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How does AI support the graduated exposure process without replacing a therapist?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            The honest answer: AI is not a therapist. It cannot diagnose, it cannot run a proper
            clinical exposure protocol, and it cannot handle the complexity of a phobia
            entangled with trauma, OCD, or other comorbidities. A licensed psychologist or
            BABCP-accredited CBT therapist should lead the clinical work wherever the phobia is
            significantly impairing your life.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            What AI can do, particularly an AI companion with persistent memory, is fill the
            enormous gap that exists between clinical sessions. Therapy is typically once a week
            for fifty minutes. Exposure practice \u2014 to be effective \u2014 needs to happen
            multiple times between those sessions. The AI companion becomes a presence in the
            space between: a preparation partner before each exposure attempt, a debrief
            companion after, and a tracker of the progress your therapist may not see.
          </p>

          {/* AI roles */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.125rem', marginTop: '1.5rem' }}>
            {[
              {
                role: 'Fear ladder co-builder',
                detail: 'A good AI companion helps you articulate your fear hierarchy by asking precise questions: not just \u201cwhat scares you about spiders\u201d but \u201cwhat specifically \u2014 the movement, the legs, the unpredictability, the proximity? At what distance does the SUDS hit 50?\u201d This granularity makes a much more actionable ladder than the generic version most people create alone.',
              },
              {
                role: 'Pre-exposure coach',
                detail: 'Before each exposure attempt, the AI can run a 4-7-8 breathing sequence, guide progressive muscle relaxation, review the upcoming rung with you, and help you set a clear intention: \u201cI will stay in contact with this for five minutes regardless of what I feel, and I will not flee.\u201d That pre-commitment ritual measurably improves inhibitory learning outcomes.',
              },
              {
                role: 'During-exposure anchor',
                detail: 'For imaginal exposures and some behavioural ones, the AI can be present via text \u2014 offering grounding prompts, SUDS check-ins, and the steady reminder that anxiety cannot harm you and will peak and pass. Its calm, consistent presence during the window of distress can be meaningfully regulating.',
              },
              {
                role: 'Post-exposure debrief',
                detail: 'After each exposure: what was the peak SUDS? When did it start to fall? What did you learn from the fact that the feared outcome did not occur? This debrief conversation reinforces inhibitory learning by consciously integrating the new information into your narrative about the feared stimulus.',
              },
              {
                role: 'Progress tracker across weeks',
                detail: 'This is where AI with persistent memory becomes genuinely different from a generic chatbot. The companion remembers your ladder, your SUDS scores, your streak, your setbacks, and the reflections you shared after each rung. When you return after a week, it can say: \u201clast Tuesday you rated rung 4 at 38 \u2014 down from 55 two weeks ago. You\u2019re ready for rung 5.\u201d That continuity is irreplaceable.',
              },
              {
                role: 'Accountability partner',
                detail: 'Exposure work requires consistent practice. The AI can set a weekly rhythm, notice if you have gone more than five days without an exposure attempt, and hold you gently accountable without shame. It knows your history, so it knows whether this is a natural recovery week or avoidance creeping back in.',
              },
            ].map((item) => (
              <div
                key={item.role}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderLeft: `3px solid ${GOLD}`,
                  borderRadius: '0 0.625rem 0.625rem 0',
                  padding: '1.125rem 1.25rem',
                }}
              >
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: GOLD, marginBottom: '0.5rem' }}>
                  {item.role}
                </div>
                <div style={{ fontSize: '0.9375rem', color: MUTED_STRONG, lineHeight: 1.75 }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: MEOK's memory ──────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How does MEOK\u2019s memory track exposure hierarchy progress across weeks?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            Most AI tools have no memory at all. Every conversation begins from zero. For casual
            uses this is tolerable; for phobia work it is nearly useless. A fear ladder needs
            continuity. Your SUDS scores from three weeks ago are data. The moment last Tuesday
            when your anxiety peaked at 72 and then dropped to 28 without you fleeing \u2014
            that is a piece of evidence your nervous system needs to see reflected back, and
            your AI companion needs to hold.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            MEOK uses <strong style={{ color: TEXT }}>Sovereign Memory</strong> \u2014 a
            four-layer encrypted memory architecture that stores your experiences at different
            levels of resolution and relevance. At the episodic layer, individual exposure
            sessions are captured with context, emotion, and outcome. At the semantic layer,
            patterns are distilled: which rung you\u2019re on, your typical peak SUDS for each
            feared situation, your recovery trajectory, and your stated goals for the coming week.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            Because MEOK\u2019s memory is sovereign \u2014 stored on infrastructure you control,
            never used to train external models, never shared with third parties \u2014 you can
            be genuinely honest in your sessions. You can say \u201cI avoided again\u201d or
            \u201cI haven\u2019t done a single exposure this week\u201d without fear of judgment or data
            exposure. Privacy is a prerequisite for honesty, and honesty is a prerequisite
            for effective exposure work.
          </p>

          {/* Memory checklist */}
          <div
            style={{
              background: CARD_BG_GOLD,
              border: `1px solid ${BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.375rem 1.5rem',
              marginTop: '1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: GOLD,
                marginBottom: '1rem',
              }}
            >
              What MEOK Sovereign Memory Holds for Phobia Work
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.625rem' }}>
              {[
                'Your complete fear hierarchy with current rung position',
                'SUDS scores from every logged exposure attempt',
                'Dates and streaks of consistent practice',
                'Post-exposure debrief notes and emotional reflections',
                'Breathing and relaxation tools you find most effective',
                'Setback moments and the context surrounding them',
                'Your stated goals, timelines, and motivations',
                'Patterns the AI has noticed across weeks of sessions',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                  <span style={{ color: GOLD, marginTop: '0.15rem', flexShrink: 0 }}>&#10003;</span>
                  <span style={{ fontSize: '0.9375rem', color: MUTED_STRONG, lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginTop: '1.375rem' }}>
            The practical effect: MEOK does not treat every session as a first appointment. It
            knows you. It knows your fear history. It can spot when your language around a
            certain phobia has shifted \u2014 from catastrophic predictions to something more
            measured \u2014 and name that change back to you. That mirroring of your own progress
            is one of the most motivating forces in sustained exposure work.
          </p>
        </section>

        {/* ── SECTION 7: Building your fear ladder with AI companion ───────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            How do you build a fear ladder with your AI companion?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            Building a fear ladder with an AI companion works through structured conversation.
            The AI asks, you answer, and together you construct a hierarchy that is genuinely
            specific to your phobia rather than a generic template downloaded from a worksheet.
            Here is how that conversation typically unfolds.
          </p>

          {/* Conversation example */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER_FAINT}`,
              borderRadius: '0.75rem',
              overflow: 'hidden',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                padding: '0.75rem 1.25rem',
                background: CARD_BG_GOLD,
                borderBottom: `1px solid ${BORDER}`,
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: GOLD,
              }}
            >
              Example: Building a Spider Phobia Ladder with MEOK
            </div>
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
              {[
                {
                  speaker: 'MEOK',
                  text: 'Let\u2019s build your fear hierarchy for spiders. Before we list situations, I want to understand what specifically drives your fear. Is it mainly how they move, how they look, the thought of being touched by one, the unpredictability of where they go, or something else?',
                  isAI: true,
                },
                {
                  speaker: 'You',
                  text: 'Definitely the movement \u2014 that scuttling. And not knowing where it is once I\u2019ve seen it.',
                  isAI: false,
                },
                {
                  speaker: 'MEOK',
                  text: 'That\u2019s really useful. So the peak fear is probably: a spider moving unpredictably in the room, possibly out of sight. On your 0\u2013100 scale, what would that feel like right now, just imagining it?',
                  isAI: true,
                },
                {
                  speaker: 'You',
                  text: 'Honestly about 95. I\u2019d leave the room immediately.',
                  isAI: false,
                },
                {
                  speaker: 'MEOK',
                  text: 'Good \u2014 that\u2019s our top rung. Now I want to find something at the other end. What\u2019s the least frightening spider-related thing you can imagine? Maybe a still photograph of a small spider in a book?',
                  isAI: true,
                },
                {
                  speaker: 'You',
                  text: 'A drawing of a spider in a children\u2019s book would probably be a 10.',
                  isAI: false,
                },
                {
                  speaker: 'MEOK',
                  text: 'Perfect. We have a bottom and a top. Let\u2019s fill in the rungs between. I\u2019m going to suggest eight intermediate steps and you tell me if any feel like too large a jump, or if any feel easier than the one below...',
                  isAI: true,
                },
              ].map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: msg.isAI ? 'row' : 'row-reverse',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      minWidth: '1.875rem',
                      height: '1.875rem',
                      borderRadius: '50%',
                      background: msg.isAI ? CARD_BG_GOLD : 'rgba(245,240,232,0.08)',
                      border: `1px solid ${msg.isAI ? BORDER : BORDER_FAINT}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: msg.isAI ? GOLD : MUTED_STRONG,
                      flexShrink: 0,
                    }}
                  >
                    {msg.isAI ? 'M' : 'Y'}
                  </div>
                  <div
                    style={{
                      background: msg.isAI ? CARD_BG_GOLD : 'rgba(245,240,232,0.05)',
                      border: `1px solid ${msg.isAI ? BORDER : BORDER_FAINT}`,
                      borderRadius: msg.isAI ? '0 0.625rem 0.625rem 0.625rem' : '0.625rem 0 0.625rem 0.625rem',
                      padding: '0.75rem 1rem',
                      maxWidth: '88%',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase' as const,
                        color: msg.isAI ? GOLD : MUTED,
                        marginBottom: '0.375rem',
                      }}
                    >
                      {msg.speaker}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: MUTED_STRONG, lineHeight: 1.7 }}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            This conversational approach produces a ladder that reflects your specific fear
            profile \u2014 not a generic arachnophobia template. The AI\u2019s ability to ask
            follow-up questions, notice gaps in the hierarchy, and propose intermediate steps
            makes it a meaningfully better co-builder than a static worksheet.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG }}>
            Once the ladder exists in the memory system, it is available in every future session.
            You never need to re-explain your phobia. You never start from zero. MEOK picks up
            exactly where you left off \u2014 which rung, which SUDS baseline, which coping tools
            work best for you at peak distress.
          </p>
        </section>

        {/* ── SECTION 8: Specific phobias deep dive ─────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            Can AI help with social phobia, emetophobia, and other complex fears?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.5rem' }}>
            Specific phobias like flying, spiders, and heights are relatively straightforward to
            address with standard graduated exposure. Some phobias carry additional layers of
            complexity that warrant particular care \u2014 and honest acknowledgement of where
            AI\u2019s role becomes more limited.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.25rem' }}>
            {[
              {
                title: 'Social phobia (social anxiety disorder)',
                content: 'Social phobia is characterised not just by the fear of situations but by the fear of negative evaluation \u2014 shame, judgment, humiliation. The avoidance tends to be subtler (staying silent rather than leaving the room) and the safety behaviours more numerous. AI can support social exposure work \u2014 helping rehearse conversations, reviewing post-event processing, challenging the post-mortem spiral that follows social situations \u2014 but the relational dimension of social phobia makes human therapeutic contact especially valuable here.',
              },
              {
                title: 'Emetophobia (fear of vomiting)',
                content: 'Emetophobia is one of the more debilitating specific phobias because avoidance penetrates every domain of life: food choices, travel, alcohol, social events, medical settings. The fear of losing bodily control often drives significant food restriction. AI can help with the educational component, the anxiety management toolkit, and tracking exposure to increasingly challenging food-related situations. The dietary restriction component often needs dietitian and therapist involvement alongside any AI use.',
              },
              {
                title: 'Trypanophobia (fear of needles)',
                content: 'Needle phobia has a physiological peculiarity: unlike most phobias where heart rate stays elevated throughout the feared stimulus, some people with trypanophobia experience a vasovagal response \u2014 a rapid drop in heart rate and blood pressure that can cause fainting. The standard exposure protocol is modified to include applied tension technique (tensing large muscle groups to elevate blood pressure) rather than relaxation alone. An AI companion can coach applied tension as part of the pre-exposure toolkit.',
              },
              {
                title: 'Driving anxiety (vehophobia)',
                content: 'Driving anxiety often develops after an accident or near-miss and may have a PTSD component requiring trauma-informed treatment before standard exposure begins. The exposure hierarchy for driving is highly practical and gradual: from sitting in a stationary car, to driving an empty car park, to quiet roads, to dual carriageways, to motorways. MEOK can track which routes you\u2019ve driven, log your SUDS scores, and support the debrief after each practice drive.',
              },
              {
                title: 'Acrophobia (fear of heights)',
                content: 'Fear of heights is extremely common and often develops without a specific traumatic incident. The fear hierarchy can be practised in the real world \u2014 gradually ascending buildings, gradually increasing the distance from a balcony railing \u2014 or via virtual reality exposure. An AI companion helps plan the exposure schedule, tracks progress, and provides breathing coaching before each rung. For most cases of acrophobia without comorbidities, self-guided exposure with AI support is highly viable.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.375rem',
                }}
              >
                <div style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, marginBottom: '0.625rem' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.9375rem', color: MUTED_STRONG, lineHeight: 1.75 }}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 9: Honest limits of AI ────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What are the honest limits of AI in phobia support?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.25rem' }}>
            Honesty about limits is not a disclaimer. It is a design principle. A responsible AI
            companion should be explicit about what it cannot do, because the illusion of clinical
            competence is more dangerous than acknowledged limitation.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                label: 'Cannot diagnose',
                detail: 'Only a qualified clinician can diagnose a specific phobia, assess severity, and rule out comorbidities like OCD, PTSD, or panic disorder that require different treatment approaches entirely.',
              },
              {
                label: 'Cannot conduct clinical exposure',
                detail: 'Proper exposure therapy requires a trained therapist to calibrate the protocol, monitor for avoidance and safety behaviours, and adjust in real-time. AI supports between sessions \u2014 it does not replace them.',
              },
              {
                label: 'Cannot handle acute crisis',
                detail: 'If an exposure triggers a panic attack or dissociative episode, AI is not sufficient. Have a human support contact available during early exposure work, particularly for trauma-adjacent phobias.',
              },
              {
                label: 'Cannot provide EMDR or somatic work',
                detail: 'For phobias rooted in specific traumatic incidents, EMDR or somatic therapy may be more appropriate than standard exposure. These are embodied, relational modalities that AI cannot replicate.',
              },
              {
                label: 'Cannot always detect when more help is needed',
                detail: 'MEOK\u2019s care-floor includes escalation triggers, but an AI may miss nuances that an experienced clinician would notice immediately. Your therapist\u2019s clinical judgment always supersedes AI guidance.',
              },
              {
                label: 'Cannot replace human therapeutic relationship',
                detail: 'The felt sense of being seen, understood, and held by another person is itself a healing mechanism. AI provides consistency and availability across time. It does not provide human warmth.',
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'rgba(255,80,80,0.04)',
                  border: '1px solid rgba(255,80,80,0.15)',
                  borderRadius: '0.625rem',
                  padding: '1rem 1.125rem',
                }}
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#e88080', marginBottom: '0.4rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.875rem', color: MUTED_STRONG, lineHeight: 1.7 }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 10: MEOK's specific approach ──────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            What is MEOK\u2019s specific approach to phobia support?
          </h2>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            MEOK was built on the premise that the most important thing an AI can do for someone
            in psychological distress is not to dispense information, but to remember. To be
            present across time. To know the difference between what you said last Tuesday and
            what you\u2019re saying now, and to hold that difference as meaningful.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.125rem' }}>
            For phobia support specifically, this means MEOK operates as a companion on a
            journey rather than a resource you consult once. It holds your fear ladder. It
            remembers your setbacks without judgment. It celebrates your progress without
            minimising what it cost you to get there. It asks, two weeks after you mentioned
            wanting to book a flight, whether you\u2019ve looked at routes yet.
          </p>

          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: MUTED_STRONG, marginBottom: '1.5rem' }}>
            MEOK\u2019s <strong style={{ color: TEXT }}>Maternal Covenant</strong> care-floor
            \u2014 the inviolable set of governing constraints that shape every response \u2014
            has specific protections relevant to phobia work. It cannot endorse avoidance
            behaviours. It cannot provide false reassurance that validates the threat belief.
            It cannot become a reassurance-seeking outlet that inadvertently maintains the
            phobia by reducing anxiety through information rather than through exposure. These
            constraints are architectural, not advisory.
          </p>

          <div
            style={{
              background: CARD_BG_GOLD,
              border: `1px solid ${BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.375rem 1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: GOLD,
                marginBottom: '0.875rem',
              }}
            >
              MEOK Phobia Support: At a Glance
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {[
                { label: 'Memory', value: 'Persistent fear hierarchy, SUDS tracking, progress across weeks' },
                { label: 'Privacy', value: 'Sovereign architecture \u2014 no data training, full encryption' },
                { label: 'Toolkit', value: 'Breathing, progressive muscle relaxation, grounding, debrief protocols' },
                { label: 'Guardrails', value: 'Maternal Covenant prevents validation of avoidance or harmful reassurance' },
                { label: 'Escalation', value: 'Always directs to professional care when distress indicators rise' },
                { label: 'Role', value: 'Companion and coach between sessions \u2014 never a clinical replacement' },
              ].map((row) => (
                <div key={row.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ minWidth: '6.5rem', fontSize: '0.8125rem', fontWeight: 700, color: GOLD }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: MUTED_STRONG, lineHeight: 1.6 }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.5rem',
              paddingBottom: '0.625rem',
              borderBottom: `1px solid ${BORDER_FAINT}`,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.125rem' }}>
            {[
              {
                q: 'Can AI cure a phobia?',
                a: 'No. AI cannot cure a phobia. Phobias are clinical anxiety disorders best treated by qualified therapists using evidence-based exposure therapy. An AI companion can support the process between sessions \u2014 tracking your fear hierarchy progress, coaching breathing before exposures, and holding your context across weeks \u2014 but it is a complement to professional care, never a replacement.',
              },
              {
                q: 'What is a fear ladder?',
                a: 'A fear ladder (also called an exposure hierarchy) is a structured list of feared situations ranked from least to most anxiety-provoking, each assigned a distress score from 0\u2013100 using the Subjective Units of Distress Scale (SUDS). You work through the rungs from the bottom up, building tolerance at each level before moving higher. The ladder is the core clinical tool of graduated exposure therapy.',
              },
              {
                q: 'What is exposure therapy for phobias?',
                a: 'Exposure therapy is the gold-standard psychological treatment for specific phobias. It works by deliberately and repeatedly confronting feared stimuli \u2014 in imagination or in real life \u2014 in a controlled, graded way. Repeated exposure breaks the avoidance cycle, teaches the brain that danger signals are false alarms, and reduces the conditioned fear response through inhibitory learning. Success rates of 80\u201390% are consistently reported in meta-analyses.',
              },
              {
                q: 'How does MEOK remember my phobia progress?',
                a: 'MEOK uses Sovereign Memory \u2014 a 4-layer encrypted memory store \u2014 to retain your fear hierarchy, exposure attempts, SUDS scores, and reflections across every session. When you return after a week, MEOK knows exactly which rung you reached, how you felt, and what your next step is. Your data is stored on sovereign infrastructure, never used to train external models, and never shared with third parties.',
              },
              {
                q: 'Can AI help with driving anxiety?',
                a: 'Yes, within limits. AI can help you build a driving anxiety fear ladder (from sitting in a parked car through to motorway driving), coach pre-drive breathing routines, debrief after practice sessions, and track SUDS scores over time. For severe vehophobia \u2014 especially after a road accident with a possible trauma component \u2014 professional support from a trauma-informed therapist is strongly recommended alongside any AI use.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER_FAINT}`,
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.375rem',
                }}
              >
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: '0.625rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, fontWeight: 700 }}>Q</span>
                  <span>{item.q}</span>
                </div>
                <div
                  style={{
                    fontSize: '0.9375rem',
                    color: MUTED_STRONG,
                    lineHeight: 1.75,
                    paddingLeft: '1.375rem',
                  }}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CRISIS RESOURCES ──────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              background: 'rgba(76,130,175,0.06)',
              border: '1px solid rgba(76,130,175,0.2)',
              borderRadius: '0.75rem',
              padding: '1.375rem 1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: '#7ab0d4',
                marginBottom: '0.875rem',
              }}
            >
              UK Professional Support &amp; Crisis Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
              {[
                { label: 'Samaritans', detail: '116 123 \u2014 free, 24/7, for any emotional distress' },
                { label: 'Mind infoline', detail: '0300 123 3393 \u2014 Mon\u2013Fri 9am\u20136pm' },
                { label: 'NHS Talking Therapies', detail: 'Self-refer for free CBT (includes exposure therapy for phobias) at nhs.uk/mental-health/talking-therapies' },
                { label: 'BABCP finder', detail: 'Find an accredited CBT therapist at babcp.com/find-a-therapist' },
                { label: 'NHS urgent mental health', detail: '111 option 2 \u2014 for urgent mental health support' },
                { label: 'Emergency', detail: '999 \u2014 if you or someone else is in immediate danger' },
              ].map((r) => (
                <div key={r.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ minWidth: '10rem', fontSize: '0.8125rem', fontWeight: 700, color: '#7ab0d4' }}>
                    {r.label}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: MUTED_STRONG, lineHeight: 1.6 }}>
                    {r.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
              border: `1px solid ${BORDER}`,
              borderRadius: '1rem',
              padding: '2.5rem 2rem',
              textAlign: 'center' as const,
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: GOLD,
                marginBottom: '1rem',
              }}
            >
              MEOK AI LABS
            </div>
            <h3
              style={{
                fontSize: 'clamp(1.375rem, 3.5vw, 1.875rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: TEXT,
                marginBottom: '1rem',
              }}
            >
              Start building your fear ladder today
            </h3>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: MUTED_STRONG,
                maxWidth: '32rem',
                margin: '0 auto 1.75rem',
              }}
            >
              MEOK remembers your exposure hierarchy, tracks your SUDS scores across weeks, and
              walks with you through every rung \u2014 with a care-floor that never loses sight of
              your safety. A companion for the space between sessions.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: '0.9375rem',
                letterSpacing: '0.04em',
                padding: '0.875rem 2.25rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
              }}
            >
              Meet your MEOK companion
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: MUTED_FAINT }}>
              Sovereign memory. No training on your data. Your fear ladder stays private.
            </p>
          </div>
        </section>

        {/* ── RELATED READING ───────────────────────────────────────────────── */}
        <section style={{ marginTop: '4rem' }}>
          <div
            style={{
              paddingTop: '2rem',
              borderTop: `1px solid ${BORDER_FAINT}`,
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: MUTED,
                marginBottom: '1.25rem',
              }}
            >
              Related Reading
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
                gap: '0.875rem',
              }}
            >
              {[
                { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety' },
                { href: '/blog/ai-for-ocd', label: 'AI for OCD' },
                { href: '/blog/ai-for-social-anxiety', label: 'AI for Social Anxiety' },
                { href: '/blog/ai-for-ptsd', label: 'AI for PTSD' },
                { href: '/blog/ai-companion-vs-therapist', label: 'AI Companion vs Therapist' },
                { href: '/blog/ai-memory-explained', label: 'How MEOK Memory Works' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '0.875rem 1rem',
                    background: CARD_BG,
                    border: `1px solid ${BORDER_FAINT}`,
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    color: MUTED_STRONG,
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  {link.label} &#8594;
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER_FAINT}`,
          padding: '2.5rem 1.5rem',
          textAlign: 'center' as const,
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color: GOLD, marginBottom: '0.375rem' }}>
            MEOK AI LABS
          </div>
          <div style={{ fontSize: '0.8125rem', color: MUTED }}>
            Built by Nicholas Templeman &middot;{' '}
            <a
              href="https://x.com/meok_ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: MUTED, textDecoration: 'none' }}
            >
              @meok_ai
            </a>
            {' '}&middot;{' '}
            <Link href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>
              Blog
            </Link>
            {' '}&middot;{' '}
            <Link href="/birth" style={{ color: MUTED, textDecoration: 'none' }}>
              Get Started
            </Link>
          </div>
          <div
            style={{
              marginTop: '1rem',
              fontSize: '0.75rem',
              color: MUTED_FAINT,
              lineHeight: 1.7,
              maxWidth: '36rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            This article is for educational purposes only and does not constitute medical or
            psychological advice. Phobias are clinical conditions \u2014 please seek professional
            support for diagnosis and treatment. MEOK AI is a companion tool, not a therapist.
          </div>
        </div>
      </footer>
    </div>
  )
}
