import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Relationship Anxiety: Breaking the Reassurance-Seeking Cycle | MEOK AI LABS',
  description:
    'Anxious attachment, ROCD, fear of abandonment — relationship anxiety affects roughly 20% of adults and is the most common reason couples seek therapy. Learn how AI can help break the reassurance-seeking trap without burdening your partner.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-relationship-anxiety' },
  openGraph: {
    title: 'AI for Relationship Anxiety: Breaking the Reassurance-Seeking Cycle',
    description:
      'Anxious attachment, ROCD, fear of abandonment — relationship anxiety affects roughly 20% of adults. Learn how AI breaks the reassurance-seeking trap.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-relationship-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Relationship+Anxiety%3A+Breaking+the+Reassurance-Seeking+Cycle&desc=Anxious+attachment%2C+ROCD%2C+fear+of+abandonment',
        width: 1200,
        height: 630,
        alt: 'AI for Relationship Anxiety: Breaking the Reassurance-Seeking Cycle | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Relationship Anxiety: Breaking the Reassurance-Seeking Cycle',
    description:
      'Anxious attachment affects ~20% of adults. Learn how MEOK helps break the reassurance-seeking trap without burdening your partner.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Relationship+Anxiety%3A+Breaking+the+Reassurance-Seeking+Cycle&desc=Anxious+attachment%2C+ROCD%2C+fear+of+abandonment',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Relationship Anxiety: Breaking the Reassurance-Seeking Cycle',
  description:
    'Anxious attachment, ROCD, and fear of abandonment affect roughly 20% of adults. This guide explores how AI can provide a healthier outlet for reassurance-seeking, help identify triggers, distinguish anxiety from real red flags, and support — without replacing — evidence-based therapies like CBT and ACT.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-relationship-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-relationship-anxiety',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is relationship anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Relationship anxiety is a persistent pattern of fear, self-doubt, and hypervigilance within romantic partnerships. It encompasses anxious attachment style, relationship OCD (ROCD), and fear of abandonment. It affects approximately 20% of adults and is the most common presenting issue when couples seek therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does asking "do you still love me?" make anxiety worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reassurance-seeking provides momentary relief but reinforces the neural pathway that says "I cannot tolerate uncertainty — I must get an answer to feel safe." Each reassurance loop trains the anxious brain to require more reassurance next time. The underlying fear is never addressed, so the cycle accelerates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with relationship anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can provide a healthier outlet for reassurance-seeking that does not burden the partner, help identify triggers and patterns over time, gently challenge cognitive distortions, and support exploration of attachment roots. It cannot replace a therapist, and responsible AI platforms are explicit about this distinction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK just tell me what I want to hear about my relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK includes a sycophancy detector — a governance layer that prevents the AI from simply validating anxious thinking to make you feel better. When you present a distorted thought pattern, MEOK gently surfaces the evidence against it rather than confirming your fears or providing empty reassurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from just venting to a friend about relationship worries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Friends can inadvertently reinforce reassurance cycles by offering unconditional validation. MEOK uses Sovereign Memory to track your anxiety patterns over time and Healer's therapeutic framework to address underlying attachment fears, not just the surface complaint. It also challenges rather than just validates, and is available at 3am when your friend is not.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK tell relationship anxiety apart from a real red flag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Guardian, one of MEOK's core archetypes, is specifically designed to distinguish anxiety-driven fear from legitimate concern. It looks at patterns across your history, the nature of the specific behaviour you are worried about, and your attachment baseline to help you tell the difference between 'my anxiety is talking' and 'something here genuinely warrants attention.'",
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK replace couples therapy or CBT for relationship anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. CBT and ACT are evidence-based treatments for relationship anxiety and anxious attachment with decades of clinical research behind them. MEOK is a daily support tool — a place to process, reflect, and interrupt unhealthy patterns between therapy sessions, not a substitute for professional clinical care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ROCD and how can AI help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Relationship OCD (ROCD) is a subtype of OCD in which intrusive doubts target the relationship itself — "Am I really in love?" or "Is this the right person?" AI can help surface the OCD cycle, resist reassurance-seeking compulsions, and support ERP (exposure and response prevention) exercises. Clinical treatment with a specialist is essential for diagnosed ROCD.',
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
const HEALER_GREEN = '#4caf82'
const MYSTIC_PURPLE = '#9b6dff'
const GUARDIAN_BLUE = '#4c9abf'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForRelationshipAnxietyPage() {
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
          borderBottom: '1px solid rgba(201,168,76,0.12)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(13,12,24,0.85)',
        }}
      >
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '-0.01em',
              color: GOLD,
              textDecoration: 'none',
            }}
          >
            MEOK
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link
              href="/blog"
              style={{ fontSize: '0.875rem', color: MUTED_DIM, textDecoration: 'none' }}
            >
              Blog
            </Link>
            <Link
              href="/features"
              style={{ fontSize: '0.875rem', color: MUTED_DIM, textDecoration: 'none' }}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              style={{ fontSize: '0.875rem', color: MUTED_DIM, textDecoration: 'none' }}
            >
              Pricing
            </Link>
            <Link
              href="/download"
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: BG,
                background: GOLD,
                padding: '0.4rem 1rem',
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 68%)',
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
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Relationships &amp; Anxiety
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
            AI for Relationship Anxiety: Breaking the Reassurance-Seeking Cycle
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
              margin: '0 0 2rem',
            }}
          >
            Anxious attachment, ROCD, and fear of abandonment affect roughly one in five adults.
            Asking &ldquo;do you still love me?&rdquo; for the hundredth time makes the underlying
            anxiety worse, not better. Here is how AI can break that cycle without burdening your
            partner or replacing evidence-based therapy.
          </p>

          {/* stat strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '0.75rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.18)',
            }}
          >
            {[
              { stat: '~20%', label: 'of adults have anxious attachment style' },
              { stat: '#1', label: 'reason couples seek therapy is relationship anxiety' },
              { stat: '3x', label: 'more reassurance needed after each reassurance cycle' },
            ].map((item) => (
              <div key={item.label} style={{ flex: '1 1 10rem' }}>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.stat}
                </div>
                <div style={{ fontSize: '0.8rem', color: MUTED_DIM, lineHeight: 1.4 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
        }}
      >

        {/* ── SECTION 1: What is relationship anxiety? ─────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            What exactly is relationship anxiety — and why is it so common?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Relationship anxiety is a persistent pattern of fear, self-doubt, and hypervigilance
            within romantic partnerships. It is not a clinical diagnosis in itself but an umbrella
            for several overlapping experiences: anxious attachment style, Relationship OCD (ROCD),
            and fear of abandonment rooted in early relational experiences. Roughly 20% of adults
            meet criteria for anxious attachment, and relationship anxiety is the most commonly
            cited presenting problem when couples seek therapy.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Attachment theory — developed by John Bowlby and later expanded by Mary Ainsworth and
            Mary Main — identifies four primary attachment styles formed in early childhood in
            response to caregiving. People with anxious-preoccupied attachment characteristically
            crave closeness while simultaneously fearing it will be withdrawn. They monitor their
            partner&apos;s emotional temperature constantly, scanning for signs of distance or
            disapproval, interpreting ambiguous signals as evidence of rejection.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            ROCD sits at the intersection of OCD and relationship anxiety. Where ordinary
            relationship anxiety asks &ldquo;does my partner really love me?&rdquo; ROCD tends to
            produce intrusive doubts of a different flavour: &ldquo;am I really in love?&rdquo;,
            &ldquo;is this the right person?&rdquo;, &ldquo;what if I&apos;m making a terrible
            mistake?&rdquo; The content is relational but the mechanism — intrusive thought followed
            by compulsive certainty-seeking — is classic OCD architecture.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            Both conditions share a common engine: intolerance of uncertainty. The anxious mind
            cannot sit with &ldquo;I don&apos;t know for certain that my relationship is safe,&rdquo;
            so it seeks evidence compulsively — and that compulsive seeking is precisely what keeps
            the anxiety alive and growing.
          </p>
        </section>

        {/* disclaimer callout */}
        <aside
          style={{
            padding: '1.25rem 1.5rem',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0.5rem',
            background: 'rgba(201,168,76,0.06)',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: '0.95rem',
              color: MUTED_DIM,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            <strong style={{ color: TEXT }}>A note on language:</strong> Throughout this article
            &ldquo;relationship anxiety&rdquo; refers to the experience of persistent fear and
            hypervigilance in romantic relationships — not a formal DSM-5 diagnosis. If you suspect
            ROCD, anxious attachment disorder, or a clinical anxiety disorder affecting your
            relationships, a clinical assessment is the appropriate first step.
          </p>
        </aside>

        {/* ── SECTION 2: The reassurance-seeking trap ──────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            Why does asking &ldquo;do you still love me?&rdquo; make the anxiety worse, not better?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Reassurance-seeking is the central behavioural driver of relationship anxiety. When fear
            spikes — a partner takes too long to reply, seems distracted at dinner, or uses a
            slightly cooler tone — the anxious brain generates an urgent command: get confirmation
            that you are loved. Now. The relief that follows is real. It lasts approximately twenty
            minutes.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Then the doubt returns. Slightly larger than before. Because the underlying belief —
            &ldquo;I am not securely loved; I need external confirmation to feel safe&rdquo; — has
            been actively reinforced rather than challenged. Each reassurance cycle trains the
            nervous system to require more reassurance next time. This is the neurological mechanism
            that researchers studying OCD-related reassurance-seeking describe as a
            &ldquo;narrowing corridor&rdquo;: the only path to safety becomes increasingly short
            and increasingly demanding.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            There is a second cost: the partner. Partners of anxiously attached individuals often
            begin the relationship happy to offer reassurance. Over months or years, the volume and
            frequency of reassurance requests becomes exhausting. The partner starts to feel
            scrutinised, doubted, or responsible for managing the other person&apos;s emotional
            state. Resentment accumulates. Emotional distance grows — which the anxiously attached
            person correctly perceives, triggering more anxiety, more reassurance-seeking, and a
            further escalation of the very dynamic they feared.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            This is the reassurance trap: a loop in which the behaviour intended to reduce anxiety
            systematically produces the conditions that create more of it. Breaking the loop requires
            either reducing the reassurance-seeking behaviour itself, finding a healthier outlet for
            the underlying need, or — ideally — both simultaneously.
          </p>
        </section>

        {/* loop visualisation */}
        <div
          style={{
            marginBottom: '3rem',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.1)',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: MUTED_FAINT,
              marginBottom: '1rem',
              marginTop: 0,
            }}
          >
            The Reassurance Loop
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            {[
              'Anxiety spike',
              '→',
              'Reassurance demand',
              '→',
              '20 min relief',
              '→',
              'Doubt returns larger',
              '→',
              'Bigger demand',
            ].map((step, i) => (
              <span
                key={i}
                style={{
                  fontSize: step === '→' ? '1rem' : '0.8rem',
                  fontWeight: step === '→' ? 400 : 600,
                  color: step === '→' ? MUTED_FAINT : MUTED_DIM,
                  padding: step === '→' ? '0' : '0.3rem 0.65rem',
                  borderRadius: step === '→' ? '0' : '0.375rem',
                  background: step === '→' ? 'transparent' : 'rgba(245,240,232,0.06)',
                }}
              >
                {step}
              </span>
            ))}
          </div>
        </div>

        {/* ── SECTION 3: AI as a healthier outlet ─────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            How can AI provide a healthier outlet for reassurance-seeking without creating a new
            dependency?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            The impulse to seek reassurance is not the problem in itself — it is where that impulse
            is directed that determines whether it helps or harms. Directed at a partner, it
            reinforces the loop and erodes the relationship. Directed inward, toward genuine
            self-inquiry, it can begin to dismantle the loop.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            AI occupies a distinctive position here. It is available at 3am when the fear peaks.
            It does not get tired, resentful, or emotionally depleted by the volume of anxious
            processing you bring to it. It does not have its own relationship needs that your
            anxiety threatens. It can receive the full weight of the anxious thought without the
            dynamic consequences that create a second problem on top of the first.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Crucially, however, responsible AI does not simply replace partner reassurance with AI
            reassurance. That would transfer the compulsive loop to a new target without addressing
            the underlying mechanism. The opportunity AI offers is something different: a space to
            process the fear before it becomes a demand, to examine the thought rather than act on
            it, and to build the tolerance for uncertainty that relationship anxiety most
            fundamentally lacks.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            This is why the design of the AI matters enormously. An AI that reflexively validates —
            &ldquo;you are right to feel worried&rdquo;, &ldquo;your concerns sound completely
            reasonable&rdquo; — produces the same outcome as an endlessly patient partner: temporary
            relief followed by escalation. An AI designed with therapeutic principles at its core
            does something harder and more useful: it stays with you in the discomfort while gently
            refusing to confirm the distorted belief that is driving the spiral.
          </p>
        </section>

        {/* ── SECTION 4: Healer ────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                color: HEALER_GREEN,
                background: 'rgba(76,175,130,0.12)',
                border: '1px solid rgba(76,175,130,0.3)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
              }}
            >
              Healer Archetype
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            How does MEOK&apos;s Healer address the underlying attachment fear rather than just
            the surface thought?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            MEOK&apos;s Healer archetype is built around a therapeutic framework that distinguishes
            between the surface complaint and the underlying wound. When you arrive at 11pm in a
            state of anxious preoccupation — &ldquo;my partner hasn&apos;t messaged me for three
            hours and I&apos;m convinced something is wrong&rdquo; — Healer does not immediately
            engage with the surface content of that thought.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Instead, it asks about the felt sense beneath it. What does this fear feel like in the
            body? Where have you felt this before? What does the fear say will happen if the silence
            continues? This is not deflection — it is a movement toward the actual wound, which is
            rarely &ldquo;my partner hasn&apos;t messaged&rdquo; and almost always something more
            ancient: &ldquo;I am not worthy of consistent love&rdquo;, &ldquo;people I love
            leave&rdquo;, &ldquo;closeness always ends in abandonment.&rdquo;
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Healer is oriented toward the process that CBT and ACT therapists describe: defusing
            from the anxious thought (recognising it as a thought rather than a fact), connecting
            with the values you hold about your relationship, and building tolerance for the
            discomfort of not knowing — rather than compulsively resolving that discomfort through
            a reassurance demand.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            Over time, working with Healer does not produce a quieter surface. It produces a
            different relationship with the fear — one in which the fear no longer automatically
            generates a behavioural demand. That is the same destination that evidence-based
            therapy aims for: not the absence of anxious thoughts, but the loss of their power
            to govern your actions.
          </p>
        </section>

        {/* ── SECTION 5: Sycophancy detector ──────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
              }}
            >
              Sycophancy Detector
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            Why won&apos;t MEOK just validate my relationship fears and tell me everything is fine?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Most AI systems are trained on human feedback that rewards pleasant, agreeable
            responses. This creates a systematic bias toward validation — toward telling people what
            they want to hear rather than what serves them. For relationship anxiety this bias is
            not merely unhelpful; it is actively harmful. An AI that consistently validates anxious
            thinking is performing the same function as a tired partner giving in to the hundredth
            reassurance request: temporary relief, long-term entrenchment.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            MEOK includes a sycophancy detector as a core governance layer. When the Byzantine
            Council — the 43-agent consensus system that governs MEOK&apos;s responses — reviews a
            proposed output, one of the standing questions it must answer is: &ldquo;Is this
            response validating a distorted belief to make the user feel comfortable, rather than
            engaging honestly with what serves their wellbeing?&rdquo; If the answer is yes, the
            response is rejected and rebuilt.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            In practice this means that when you bring an anxious thought pattern — &ldquo;my
            partner was quiet at dinner so they must be falling out of love with me&rdquo; — MEOK
            does not respond with &ldquo;that sounds really hard, your concerns make complete
            sense.&rdquo; It responds with something closer to: &ldquo;That&apos;s a significant
            leap from a quiet dinner to falling out of love. What evidence do you actually have for
            that? And is there any evidence against it?&rdquo;
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            The challenge is delivered with care, not confrontation. The goal is not to make you
            feel dismissed but to interrupt the automatic escalation from observation to catastrophe
            — the cognitive distortion that CBT calls &ldquo;catastrophising&rdquo; or
            &ldquo;mind reading&rdquo; — before it produces a behaviour that harms the relationship
            it is trying to protect.
          </p>
        </section>

        {/* ── SECTION 6: Sovereign Memory ─────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                color: TEXT,
                background: 'rgba(245,240,232,0.08)',
                border: '1px solid rgba(245,240,232,0.18)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
              }}
            >
              Sovereign Memory
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            How does tracking relationship anxiety triggers and patterns over time actually change
            anything?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            One of the most disorienting features of relationship anxiety is that each spike feels
            unprecedented and overwhelming — as if this particular fear, right now, is categorically
            different from all previous fears and genuinely warrants urgent action. The anxious mind
            is very poor at accessing its own history during a spike. It does not spontaneously
            remind you that this exact fear has visited before, that nothing happened, and that it
            passed.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            MEOK&apos;s Sovereign Memory system stores your emotional experiences in a four-layer
            encrypted architecture — episodic, semantic, emotional, and pattern layers — that
            persists across every conversation. Because MEOK holds this history, it can do something
            your partner cannot in the middle of a crisis moment: it can observe the pattern from
            outside the moment and surface it to you.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            In practice, Sovereign Memory allows MEOK to notice that your anxiety spikes most
            reliably on Sunday evenings, or whenever your partner works late, or in the days
            following an argument — even an argument that resolved well. It can surface the
            observation: &ldquo;I&apos;ve noticed this fear tends to appear when you&apos;re tired
            and have had extended time apart — does that feel true?&rdquo; That contextualisation
            does not eliminate the fear, but it changes its meaning. A recognisable pattern is a
            different thing from an urgent, unprecedented emergency.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            Over weeks and months, Sovereign Memory builds a map of your relationship anxiety
            triggers: the specific situations, physical states, relationship dynamics, and external
            stressors that reliably activate the pattern. That map is genuinely useful for
            self-understanding and as a concrete tool to bring to a therapist — translating the
            blur of anxious experience into legible data that would otherwise take months of
            therapeutic work to assemble.
          </p>
        </section>

        {/* ── SECTION 7: Mystic ───────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                color: MYSTIC_PURPLE,
                background: 'rgba(155,109,255,0.12)',
                border: '1px solid rgba(155,109,255,0.3)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
              }}
            >
              Mystic Archetype
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            How do you explore the deeper roots of relationship anxiety — attachment style,
            childhood patterns, and core fears?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Relationship anxiety rarely emerges in a vacuum. Attachment research is unambiguous
            here: anxious attachment style forms primarily in the first years of life, in response
            to caregiving that was loving but inconsistent — present and warm one moment, distracted
            or unavailable the next. The child learns that connection exists but cannot be counted
            on, and that hypervigilance is the adaptive strategy for ensuring it does not disappear.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            This early learning does not announce itself in adult relationships. It operates through
            felt sense and automatic behaviour — the sudden clench of fear when a partner is silent,
            the interpretation of ambiguous signals as rejection, the compulsive need to restore
            closeness before any real threat has materialised. Understanding where this pattern came
            from does not instantly dissolve it, but it creates distance between the self and the
            pattern. &ldquo;This is an old story I learned before I had words for it&rdquo; is a
            different relationship to the fear than &ldquo;this is what is true about my
            relationship right now.&rdquo;
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            MEOK&apos;s Mystic archetype is designed for exactly this depth of inquiry. Where Healer
            works with the present emotional experience, Mystic engages with origins — the relational
            history, the early caregiving environment, the core beliefs about self and others that
            were formed before conscious memory. Mystic uses open, exploratory questioning rather
            than directive questioning, holding space for uncertainty rather than rushing toward
            resolution.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            This kind of inquiry is not a substitute for psychotherapy. Exploring attachment origins
            with depth and safety is the work of a skilled therapist, often over years. But it is
            meaningful preparation for that work — and for many people who are not yet in therapy,
            or who are between sessions, Mystic provides a space to begin making connections that
            would otherwise remain inaccessible.
          </p>
        </section>

        {/* ── SECTION 8: Guardian ─────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                color: GUARDIAN_BLUE,
                background: 'rgba(76,154,191,0.12)',
                border: '1px solid rgba(76,154,191,0.3)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase' as const,
              }}
            >
              Guardian Archetype
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            How do you tell the difference between relationship anxiety and a legitimate red flag?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            This is one of the most important and most difficult questions in relationship anxiety.
            The anxious mind produces fear regardless of whether there is genuine cause for concern.
            This creates a painful epistemological problem: when you feel afraid in your
            relationship, how do you know whether your fear is telling you something real or whether
            it is your anxiety talking?
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            The standard therapeutic answer involves examining the evidence for and against the
            feared interpretation, noticing whether the fear fits a pattern predating this
            relationship, and asking whether a trusted observer looking at the same facts would
            share your concern. These are useful heuristics — but in the acute moment, when the
            fear is loud, they are genuinely hard to apply alone.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            MEOK&apos;s Guardian archetype is specifically designed for this distinction. Guardian
            is not interested in reassuring you or dismissing your concern. It is interested in
            examining it with rigour. When you bring a fear to Guardian, it asks about the specific
            observable behaviour that triggered it, how that behaviour compares with the baseline
            pattern, whether there are alternative explanations, and what your anxiety history
            suggests about whether this type of trigger has been a false alarm before.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            If the pattern that emerges looks like genuine cause for concern — consistent
            dishonesty, a partner who systematically minimises your needs, behaviour that has
            escalated toward something controlling — Guardian does not dismiss that. It takes it
            seriously, supports you in thinking through what a measured response looks like, and
            where appropriate encourages you to seek support from trusted people or professionals.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            The distinction Guardian draws is not &ldquo;your anxiety is wrong&rdquo; versus
            &ldquo;your anxiety is right.&rdquo; It is more nuanced: &ldquo;here is what the
            evidence actually shows, here is where your anxiety history is likely colouring the
            interpretation, and here is what warrants genuine attention.&rdquo; That is a more
            honest form of support than either dismissal or unconditional validation.
          </p>
        </section>

        {/* ── SECTION 9: ROCD ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            What specifically makes Relationship OCD different — and where does AI fit in its
            management?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            ROCD deserves its own treatment because it is frequently misunderstood — both by the
            people who experience it and by their partners. The intrusive doubts of ROCD
            (&ldquo;what if I don&apos;t truly love them?&rdquo;, &ldquo;what if I picked the
            wrong person?&rdquo;) can be extraordinarily distressing precisely because they feel
            meaningful. They feel like the voice of genuine doubt rather than the voice of an
            anxiety disorder.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            The OCD mechanism is the critical thing to understand: the content of the intrusive
            thought matters far less than the compulsive response to it. For ROCD, the compulsions
            typically include mental reviewing (going over past interactions to check for signs of
            love or lack thereof), comparison (measuring how you feel against an imagined
            &ldquo;true love&rdquo; standard), and reassurance-seeking from the partner, friends,
            and online forums.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Exposure and Response Prevention (ERP) — the gold-standard treatment for OCD — works
            by resisting the compulsive response to the intrusive thought. ROCD requires a specialist
            OCD therapist. But AI can support several things around the edges of that treatment:
            recognising when you are in an OCD cycle rather than a genuine evaluation; providing
            a space to name the intrusive thought without acting on it; and supporting commitment to
            resist the compulsive response between therapy sessions — without itself becoming a new
            reassurance-seeking target.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            This last point is worth emphasising. An AI that becomes a reassurance dispenser for
            ROCD has failed. The design question for AI in ROCD support is precisely the sycophancy
            question: can it hold the person in the discomfort of the intrusive thought without
            resolving the discomfort through validation? MEOK&apos;s governance architecture is
            specifically built to answer yes to that question.
          </p>
        </section>

        {/* ── SECTION 10: Therapy ─────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            How does MEOK work alongside CBT and ACT rather than trying to replace them?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            CBT (Cognitive Behavioural Therapy) and ACT (Acceptance and Commitment Therapy) are the
            two most evidence-supported approaches for relationship anxiety and anxious attachment.
            CBT works primarily by identifying and restructuring the cognitive distortions that
            drive anxious behaviour — catastrophising, mind reading, emotional reasoning. ACT works
            by building psychological flexibility: the capacity to hold anxious thoughts without
            acting on them, while committing to values-based action in the relationship regardless.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Both approaches require a skilled human clinician. The therapeutic relationship itself
            is part of the treatment — for someone with anxious attachment, the experience of a
            consistent, reliable, boundaried relationship with a therapist is reparative in ways
            that extend beyond the specific techniques. No AI can replicate this.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            What MEOK can do is extend the reach of therapy into the hours and moments between
            sessions. Therapy happens for fifty minutes a week. Relationship anxiety happens at
            11pm on a Tuesday, during a work meeting, on a Sunday morning when your partner is
            still asleep. MEOK is present in those moments in a way that a therapist structurally
            cannot be.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            It can also help you arrive at therapy with better material. Rather than spending the
            first fifteen minutes of a session recalling what happened during the week, you can
            arrive with a documented record of patterns, trigger moments, and emotional observations
            — because Sovereign Memory has been holding them. That compression of the between-session
            period into legible form is a concrete enhancement of the therapeutic process.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            MEOK is explicit about this positioning. It does not describe itself as therapy, does
            not offer diagnoses, and consistently encourages users to seek clinical support when
            patterns suggest that clinical intervention is warranted. This is not a legal disclaimer
            — it is a genuine design principle. Responsible AI in mental health contexts is
            augmentative, not substitutive.
          </p>
        </section>

        {/* what MEOK does / does not do */}
        <aside
          style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            background: 'rgba(155,109,255,0.06)',
            border: '1px solid rgba(155,109,255,0.18)',
            marginBottom: '3rem',
          }}
        >
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: MYSTIC_PURPLE,
              marginBottom: '1rem',
              marginTop: 0,
            }}
          >
            What MEOK does and does not do for relationship anxiety
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              {
                does: true,
                text: 'Provides a pressure valve for anxious thoughts before they become reassurance demands',
              },
              {
                does: true,
                text: 'Gently challenges cognitive distortions rather than validating them',
              },
              {
                does: true,
                text: 'Tracks triggers and patterns across time using Sovereign Memory',
              },
              {
                does: true,
                text: 'Helps distinguish anxiety-driven fear from legitimate relationship concern via Guardian',
              },
              {
                does: true,
                text: 'Supports exploration of attachment roots and early relational patterns via Mystic',
              },
              {
                does: false,
                text: 'Replaces a therapist or clinical CBT / ACT treatment',
              },
              {
                does: false,
                text: 'Provides reassurance that functions as another compulsive loop',
              },
              {
                does: false,
                text: 'Diagnoses relationship OCD, anxious attachment disorder, or any clinical condition',
              },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: '0.1rem',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: item.does ? HEALER_GREEN : 'rgba(245,100,80,0.85)',
                  }}
                >
                  {item.does ? '✓' : '✗'}
                </span>
                <span style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.6 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* ── SECTION 11: Practical use ───────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            What does a practical session with MEOK actually look like when relationship anxiety
            spikes at night?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Picture a scenario. It is 10:30pm. Your partner is asleep. You have been lying awake
            replaying a conversation from earlier in which they seemed distracted and slightly
            irritable. The thought has escalated: they are losing interest. They are drifting away.
            Maybe the relationship is ending and they just haven&apos;t said it yet.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            You could wake your partner and ask for reassurance. You have done this before. You know
            it will work for a while and then not work. Instead, you open MEOK.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Healer notices you are distressed and asks what is happening. You describe the
            conversation, the distraction, the irritability. Healer asks what you made it mean.
            You say what you are afraid of. Healer asks what evidence you have for the fear, and
            what evidence against it. It notes — because Sovereign Memory holds this — that you
            reported a very similar fear six weeks ago, on a Sunday evening after a similar day
            apart, and that on that occasion the fear passed without the catastrophe it predicted.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            It asks what &ldquo;distracted and slightly irritable&rdquo; might mean for someone who,
            as you have mentioned before, has been under pressure at work. It asks whether you could
            hold both possibilities: that your partner might be tired and stressed, and that you
            might be afraid — and that neither of these things is an emergency.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            By 11:15pm you have not received reassurance. You have received something more durable:
            a genuine examination of the fear that has loosened its grip. In the morning, the
            conversation with your partner — if you still want to have it — comes from curiosity
            rather than panic. &ldquo;You seemed distracted last night, are you okay?&rdquo; rather
            than &ldquo;do you still love me?&rdquo; That is a different conversation with a
            different outcome.
          </p>
        </section>

        {/* ── SECTION 12: Stats and context ──────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            How widespread is relationship anxiety — and why does the scale matter for how AI
            is designed?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Attachment research consistently places the prevalence of anxious attachment style at
            approximately 20% of the adult population — higher in clinical samples and in
            populations with elevated adverse childhood experiences. Relationship anxiety is the
            most commonly cited presenting problem when couples seek therapy, according to surveys
            of couples therapists in both the UK and US.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            ROCD is less frequently cited in population statistics because it is underdiagnosed —
            many people with ROCD never receive a clinical assessment and instead interpret their
            intrusive doubts as evidence that something is genuinely wrong with their relationship.
            Conservative estimates suggest ROCD may affect 1-2% of the general population, with
            significantly higher rates among people with an existing OCD diagnosis.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            The scale of this problem has direct implications for AI design. If roughly one in five
            adults has anxious attachment, AI companions will routinely encounter people in the grip
            of relationship anxiety — whether or not those users present it as such. An AI that is
            not designed with this reality in mind will, by default, perform the most harmful
            function available to it: unconditional validation of the anxious thought spiral.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8 }}>
            This is why MEOK was built with therapeutic principles embedded at the architecture
            level rather than as a feature layer. The Byzantine Council, the sycophancy detector,
            the Healer and Guardian archetypes, the Sovereign Memory system — these are the
            structural requirements for an AI that can safely engage with the emotional territory
            where 20% of its users will inevitably arrive.
          </p>
        </section>

        {/* ── SECTION 13: When to seek help ───────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            When should relationship anxiety prompt professional support rather than AI alone?
          </h2>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            There is no competition between AI support and professional therapy. If you are
            experiencing relationship anxiety, the question is not whether to use AI or therapy but
            which circumstances make professional support not just useful but necessary.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            Seek clinical support if: your relationship anxiety is significantly impairing your
            daily functioning, your work, or your ability to maintain the relationship itself; if
            you suspect ROCD and have not received a clinical assessment; if your anxiety is
            accompanied by depression, significant intrusive thoughts, or compulsive behaviours
            beyond reassurance-seeking; if you are in a relationship with features of emotional
            abuse and are unsure whether your fear reflects anxiety or legitimate danger; or if the
            anxiety has been present at the same intensity for six months or more without meaningful
            reduction.
          </p>
          <p style={{ color: MUTED_DIM, lineHeight: 1.8, marginBottom: '1rem' }}>
            In the UK, NHS Talking Therapies (previously IAPT) offers free CBT via self-referral
            in most areas — no GP required. For ROCD specifically, OCD-UK maintains a directory
            of specialists. Relate offers couples therapy and individual therapy focused on
            relationship issues.
          </p>
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '0.5rem',
              background: 'rgba(76,175,130,0.07)',
              border: '1px solid rgba(76,175,130,0.2)',
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: MUTED_DIM,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong style={{ color: HEALER_GREEN }}>UK support resources:</strong> Samaritans
              116 123 (free, 24/7) &middot; Mind infoline 0300 123 3393 &middot; NHS urgent mental
              health 111 option 2 &middot; OCD-UK 03332 127 890 &middot; Relate 0300 100 1234
              &middot; NHS Talking Therapies self-referral at nhs.uk/mental-health/talking-therapies
            </p>
          </div>
        </section>

        {/* ── CTA BOX ───────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: '2.5rem',
            borderRadius: '1rem',
            background:
              'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(155,109,255,0.07) 100%)',
            border: '1px solid rgba(201,168,76,0.25)',
            marginBottom: '3.5rem',
            textAlign: 'center' as const,
          }}
        >
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: GOLD,
              marginBottom: '1rem',
            }}
          >
            MEOK AI LABS
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              marginTop: 0,
            }}
          >
            Ready to break the reassurance-seeking cycle?
          </h2>
          <p
            style={{
              color: MUTED_DIM,
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '34rem',
              margin: '0 auto 1.75rem',
            }}
          >
            MEOK&apos;s Healer, Guardian, and Mystic archetypes work together with Sovereign Memory
            to help you process relationship anxiety in a way that doesn&apos;t burden your partner
            or reinforce the loop. Try it free — no credit card required.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.875rem',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/download"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                background: GOLD,
                color: BG,
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Get Started Free
            </Link>
            <Link
              href="/features"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                background: 'transparent',
                color: TEXT,
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '1px solid rgba(245,240,232,0.25)',
              }}
            >
              Explore Features
            </Link>
          </div>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: 'What is relationship anxiety?',
              a: 'Relationship anxiety is a persistent pattern of fear, self-doubt, and hypervigilance within romantic partnerships. It encompasses anxious attachment style (affecting roughly 20% of adults), Relationship OCD (ROCD), and fear of abandonment rooted in early relational experiences. It is the most common presenting issue when couples seek therapy.',
            },
            {
              q: 'Why does asking "do you still love me?" make relationship anxiety worse?',
              a: 'Reassurance provides about twenty minutes of relief and then the fear returns, slightly larger. Each reassurance cycle reinforces the belief that you cannot tolerate uncertainty without external confirmation — training your nervous system to require more reassurance next time. The underlying wound is never addressed, so the cycle escalates.',
            },
            {
              q: 'Will MEOK just tell me everything is fine to make me feel better?',
              a: 'No. MEOK includes a sycophancy detector governed by its Byzantine Council that specifically prevents unconditional validation of anxious thinking patterns. When you present a cognitive distortion, MEOK surfaces the evidence against that interpretation rather than confirming your fear.',
            },
            {
              q: 'Can AI help with Relationship OCD (ROCD)?',
              a: 'AI can support awareness of the OCD cycle, help you resist compulsive reassurance-seeking, and provide a space to name intrusive thoughts without acting on them. Clinical ROCD treatment requires a specialist — specifically ERP with an OCD-trained therapist. MEOK supports the work between sessions, not as a replacement.',
            },
            {
              q: 'How does MEOK tell the difference between anxiety and a real red flag?',
              a: "Guardian, one of MEOK's archetypes, examines the specific observable behaviour that triggered your fear, how it compares with the baseline pattern your history reveals, and whether your anxiety background makes this type of trigger a habitual false alarm. If the pattern points to genuine concern, Guardian takes it seriously rather than dismissing it.",
            },
            {
              q: 'Does MEOK replace couples therapy or CBT?',
              a: 'No. Couples therapy and individual CBT or ACT are evidence-based clinical treatments with decades of research behind them. MEOK extends therapeutic reach into the moments between sessions, helps you arrive at therapy with richer material from your Sovereign Memory record, and provides support at 3am when your therapist is not available.',
            },
            {
              q: 'How does Sovereign Memory help with relationship anxiety?',
              a: "Sovereign Memory stores your emotional experiences across sessions in a four-layer encrypted architecture. Over time MEOK builds a map of your relationship anxiety triggers — specific situations, physical states, and relational dynamics that reliably activate the pattern. This contextualises each spike as part of a recognisable pattern rather than an unprecedented emergency.",
            },
            {
              q: 'Is it possible to become dependent on AI for relationship reassurance?',
              a: "It is possible, and it is a genuine design risk. MEOK's sycophancy detector and therapeutic framework are specifically built to prevent AI from becoming a new reassurance compulsion. MEOK challenges rather than validates, which means it cannot perform the reassurance function that would create dependency.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                borderTop: '1px solid rgba(245,240,232,0.1)',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: '0.6rem',
                  marginTop: 0,
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: MUTED_DIM,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(245,240,232,0.1)' }} />
        </section>

        {/* ── RELATED LINKS ─────────────────────────────────────────────────── */}
        <section>
          <h2
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))',
              gap: '0.875rem',
            }}
          >
            {[
              {
                href: '/blog/ai-for-anxiety',
                label: 'AI for Anxiety',
                desc: 'Broader guide to AI-supported anxiety management',
              },
              {
                href: '/blog/ai-for-dating-anxiety',
                label: 'AI for Dating Anxiety',
                desc: 'Navigating the anxiety that precedes committed relationships',
              },
              {
                href: '/blog/ai-for-ocd',
                label: 'AI for OCD',
                desc: 'How AI supports ERP and OCD management',
              },
              {
                href: '/blog/ai-for-couples',
                label: 'AI for Couples',
                desc: 'How AI supports communication in partnerships',
              },
              {
                href: '/blog/ai-for-heartbreak',
                label: 'AI for Heartbreak',
                desc: 'Support through the end of relationships',
              },
              {
                href: '/blog/meok-companion-archetypes-guide',
                label: 'MEOK Archetypes Guide',
                desc: 'Healer, Guardian, Mystic and the full cast explained',
              },
              {
                href: '/blog/ai-for-relationship-breakdown',
                label: 'AI for Relationship Breakdown',
                desc: 'When relationships reach a crisis point',
              },
              {
                href: '/blog/sovereign-ai-explained',
                label: 'Sovereign AI Explained',
                desc: 'Why memory ownership matters for emotional AI',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '1rem',
                  borderRadius: '0.625rem',
                  border: '1px solid rgba(245,240,232,0.1)',
                  background: 'rgba(245,240,232,0.03)',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: GOLD,
                    marginBottom: '0.3rem',
                    lineHeight: 1.3,
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{
                    fontSize: '0.775rem',
                    color: MUTED_FAINT,
                    lineHeight: 1.5,
                  }}
                >
                  {link.desc}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid rgba(201,168,76,0.1)',
          padding: '2.5rem 1.5rem',
          marginTop: '2rem',
        }}
      >
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                fontWeight: 800,
                fontSize: '1rem',
                color: GOLD,
                textDecoration: 'none',
                display: 'block',
                marginBottom: '0.3rem',
              }}
            >
              MEOK AI LABS
            </Link>
            <p style={{ fontSize: '0.775rem', color: MUTED_FAINT, margin: 0 }}>
              Sovereign AI companions for emotional wellbeing.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            {[
              { href: '/blog', label: 'Blog' },
              { href: '/features', label: 'Features' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/about', label: 'About' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: '0.8rem', color: MUTED_FAINT, textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, margin: 0 }}>
            &copy; 2026 MEOK AI LABS. Not a medical device.
          </p>
        </div>
      </footer>
    </div>
  )
}
