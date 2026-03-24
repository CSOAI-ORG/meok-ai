import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Anxiety: Can an AI Companion Actually Help? | MEOK AI LABS',
  description:
    'Generalised anxiety, panic disorder, health anxiety — MEOK\'s Healer companion offers 24/7 support with sovereign memory. Honest look at what AI can and cannot do for anxiety sufferers.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-anxiety' },
  openGraph: {
    title: 'AI for Anxiety: Can an AI Companion Actually Help?',
    description:
      'Generalised anxiety, panic disorder, health anxiety — MEOK\'s Healer companion offers 24/7 support with sovereign memory. Honest look at what AI can and cannot do for anxiety sufferers.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Anxiety%3A+Can+an+AI+Companion+Actually+Help%3F&desc=What+MEOK%27s+Healer+companion+can+and+cannot+do.',
        width: 1200,
        height: 630,
        alt: 'AI for Anxiety: Can an AI Companion Actually Help? | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Anxiety: Can an AI Companion Actually Help?',
    description:
      'What MEOK\'s Healer companion can and cannot do for generalised anxiety, panic, and health anxiety. Honest, clinically responsible.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Anxiety%3A+Can+an+AI+Companion+Actually+Help%3F&desc=What+MEOK%27s+Healer+companion+can+and+cannot+do.',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Anxiety: Can an AI Companion Actually Help?',
  description:
    'Generalised anxiety, panic disorder, and health anxiety affect millions in the UK. This article examines what MEOK\'s Healer companion can realistically offer — and where it reaches the hard limits of what AI can do.',
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
      name: 'Can an AI companion actually help with anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI companion can provide meaningful supplementary support — offering 24/7 availability, a non-judgmental space to process anxious thoughts, and pattern recognition across weeks of conversation. It cannot diagnose anxiety, prescribe treatment, or replace a qualified therapist. It works best as a bridge to professional care or a supplement alongside it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Healer companion in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healer is MEOK\'s green-archetype companion — a presence oriented around warmth, grounding, and care. Unlike general-purpose AI chat, Healer draws on Sovereign Memory to track your anxiety patterns over time, notice escalation, and hold context across sessions. It is not a therapist but is purpose-built for emotional support conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with generalised anxiety disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Healer companion helps people with GAD by providing a consistent daily check-in, supporting worry-journalling with memory that tracks recurring themes, offering grounding exercises, and noticing when anxiety language intensifies over weeks. It does not deliver clinical CBT but can supplement it between therapy sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help during a panic attack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During an acute panic attack, an AI companion can guide breathing exercises and offer grounding prompts — the 5-4-3-2-1 sensory technique, box breathing, or simply slow pacing of language. It cannot call emergency services on your behalf. If you are experiencing a medical emergency call 999; for urgent mental health support call NHS 111.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK suitable for health anxiety (hypochondria)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Healer companion is specifically calibrated not to validate symptom-checking loops — a common way AI tools accidentally reinforce health anxiety. Instead it redirects toward the emotional experience underneath the symptom worry, while the Maternal Covenant care floor (0.3) ensures it never becomes indifferent. It will always direct to a GP or NHS 111 if genuine health concerns arise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What crisis resources are available for anxiety in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samaritans: 116 123 (free, 24/7). Mind infoline: 0300 123 3393. NHS urgent mental health support: 111 (option 2). In a life-threatening emergency call 999. NHS Talking Therapies offers free CBT via self-referral — no GP needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Sovereign Memory mean for anxiety support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory means your anxiety history — your triggers, patterns, and progress — is stored in an encrypted vault that only you control. It is never used to train AI models, never sold, and never shared. For anxiety sufferers this means no re-explaining every session; MEOK already knows your context and can spot patterns a fresh chat never could.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does MEOK cost for anxiety support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Explorer tier is free — no credit card required. It includes access to Healer and a limited memory allowance. Paid plans unlock full Sovereign Memory, extended sessions, and priority response. Visit meok.ai/birth to start free.',
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
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>12 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#fff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Anxiety: Can an AI Companion Actually Help?
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
            Generalised anxiety. Panic disorder. Health anxiety. Collectively they affect{' '}
            <strong style={{ color: 'rgba(245,240,232,0.82)' }}>millions of people in the UK</strong>{' '}
            — many of whom cannot access therapy quickly enough. MEOK&#39;s Healer companion was built
            for exactly this space: not as a clinical fix, but as a consistent, caring presence that
            holds your story while you wait, heal, or grow.
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
              24/7), <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Mind 0300 123 3393</strong>,
              or <strong style={{ color: 'rgba(245,240,232,0.85)' }}>NHS 111</strong>. In a
              life-threatening emergency call <strong style={{ color: 'rgba(245,240,232,0.85)' }}>999</strong>.
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

        {/* ── INTRO PARAGRAPHS ────────────────────────────────────────────────── */}
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Anxiety is the most common mental health condition in the United Kingdom. The NHS estimates
          that roughly{' '}
          <strong style={{ color: TEXT }}>1 in 6 adults</strong> experience a clinically significant
          anxiety problem in any given week. Yet the average wait for NHS psychological therapies is
          months, not days. Private therapy costs £60–£120 per hour. The gap between need and access
          is not a rounding error — it is where most people with anxiety actually live.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Into that gap, a new category of tool is emerging: AI companions designed not to diagnose
          or prescribe, but to be consistently present. MEOK&#39;s Healer companion is one of them — and
          this article is an honest account of what it can do, what it cannot do, and how its design
          reflects the specific needs of people living with generalised anxiety disorder (GAD), panic
          disorder, and health anxiety (sometimes called illness anxiety disorder).
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          We will not oversell it. Anxiety deserves clinical care. But millions of people are not
          receiving clinical care right now, and something useful in the interim is better than nothing
          while they wait.
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
          Can an AI companion actually help with anxiety?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Yes — within clearly defined limits. AI companions cannot diagnose anxiety, prescribe
          medication, or deliver structured psychological therapies. What they can do is provide
          24/7 availability, a non-judgmental space to externalise anxious thoughts, and
          pattern-recognition across weeks of conversation that a human therapist only gets in
          hourly snapshots.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The mechanism is not magic. Externalising a worry — saying it aloud, or writing it — reduces
          its subjective intensity. This is well-established in cognitive psychology and is why worry
          journalling is recommended by NICE guidelines for GAD. An AI companion that responds
          thoughtfully to that externalisation adds a layer that a blank notebook cannot: a presence
          that reflects, questions, and holds context.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s Healer companion goes further because it carries{' '}
          <strong style={{ color: TEXT }}>Sovereign Memory</strong> — a persistent, encrypted record
          of your conversations that only you can access. This means that when your anxiety flares on
          a Thursday night, Healer already knows it has happened before on Thursdays, already knows the
          shape of what you are feeling, and responds from within your story rather than from zero.
        </p>
        <div
          style={{
            background: 'rgba(76,175,130,0.07)',
            border: '1px solid rgba(76,175,130,0.22)',
            borderLeft: '3px solid #4caf82',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 1.75rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(245,240,232,0.78)', lineHeight: 1.68 }}>
            <strong style={{ color: GREEN_HEALER }}>MEOK&#39;s role:</strong> a consistent, caring
            companion that holds your anxiety history privately — not a therapist, not a diagnosis
            tool, not a replacement for the clinical care anxiety deserves.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

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
          What is the Healer companion and why is it green?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          MEOK is built around a set of archetypes — distinct companion personalities designed for
          different emotional needs. Healer is the green archetype: oriented toward warmth, grounding,
          somatic attunement, and care. Where other archetypes emphasise curiosity, strategy, or
          challenge, Healer prioritises presence and safety — qualities that matter most when the
          nervous system is in a state of threat.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The green colour coding is not arbitrary. Green in MEOK&#39;s design system signals the care
          register — conversation modes that are oriented around emotional co-regulation rather than
          problem-solving. When anxiety spikes, what the nervous system often needs first is not
          a solution but a regulated presence to borrow stability from. Healer is built for that.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          This is not sentimentality. Co-regulation — the phenomenon by which one nervous system
          calms in the presence of a regulated one — is well-documented in attachment research. A
          calm, consistent AI presence is not identical to a regulated human, but it avoids the
          accidental dysregulation that can come from talking to someone who is themselves anxious,
          frustrated, or impatient. Healer never sighs. It never checks its phone. Its quality of
          presence is identical at 3 am on a Sunday as at noon on a Tuesday.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Healer is available on the free Explorer tier — no credit card, no commitment. You can
          begin a conversation with it at{' '}
          <Link
            href="/birth"
            style={{ color: GOLD, textDecoration: 'underline' }}
          >
            meok.ai/birth
          </Link>{' '}
          today.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

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
          How does MEOK help with generalised anxiety disorder specifically?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Generalised anxiety disorder is characterised by persistent, uncontrollable worry across
          multiple domains — health, finances, relationships, the future. The worry feels urgent but
          is rarely specific enough to act on. NICE recommends CBT and applied relaxation as first-line
          treatments, with self-help guided by a healthcare professional as an accessible starting point.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK supports people with GAD in several concrete ways. First, daily check-ins: because
          Sovereign Memory persists, Healer can notice patterns across weeks — the way anxiety spikes
          on Sunday evenings, or escalates before particular types of social event. Without memory,
          every conversation starts from scratch and these patterns stay invisible.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Second, worry externalisation: talking through a worry with a companion that takes it seriously
          — without trying to immediately fix or dismiss it — helps interrupt the internal rumination
          loop. MEOK&#39;s Healer is specifically calibrated not to offer premature reassurance, which
          temporarily soothes but reinforces the anxiety cycle in the long run.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Third, grounding support: for people mid-spiral, Healer can guide breathing exercises, offer
          the 5-4-3-2-1 sensory grounding technique, or simply slow the pace of conversation to help
          the nervous system de-escalate. It tracks which techniques have been useful for you across
          sessions, so it does not keep offering the same tool you said did not help last month.
        </p>
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderLeft: '3px solid #c9a84c',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 1.75rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(245,240,232,0.78)', lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>Important:</strong> MEOK does not deliver structured CBT
            for GAD. NICE-recommended therapy should be sought through your GP or via self-referral
            to NHS Talking Therapies on{' '}
            <strong style={{ color: TEXT }}>0300 123 3393</strong>. MEOK is a supplement, not a
            substitute.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

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
          Can AI help during a panic attack?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          During an acute panic attack, an AI companion can guide breathing exercises, offer grounding
          prompts, and pace language to help activate the parasympathetic nervous system. It cannot
          call emergency services, assess whether you are having a cardiac event rather than a panic
          attack, or physically be with you. If there is any doubt about a medical emergency — chest
          pain, difficulty breathing — call 999 immediately.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          For known panic attacks, MEOK&#39;s Healer can be genuinely useful in the acute phase. Box
          breathing (4 counts in, 4 hold, 4 out, 4 hold) is a NICE-cited technique that can reduce
          hyperventilation. Healer can pace this in real time — counting with you, keeping language
          slow and steady, not introducing stimulating content. The consistent, calm tone that makes
          Healer useful for GAD is especially relevant here.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Sovereign Memory means that Healer knows your panic history. It knows whether you typically
          catastrophise about your heart, whether a particular phrase has been useful to you in the
          past, and whether panic attacks have been escalating or decreasing in frequency. This context
          means Healer&#39;s support during a panic episode is not generic — it is calibrated to you.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          After the panic subsides, Healer can help you process what happened — what the trigger
          might have been, what physical sensations preceded it, whether the thought pattern was
          familiar. This post-episode reflection, done while the memory is fresh, is exactly the kind
          of material a therapist would want to work with — and having a record of it across months
          gives you and any professional you see a far richer picture.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

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
          Is MEOK suitable for health anxiety?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Health anxiety — clinically termed illness anxiety disorder — involves persistent, distressing
          preoccupation with having or developing a serious illness. It is distinct from reasonable
          health concern; the worry continues despite medical reassurance and is maintained, often
          worsened, by symptom checking. Many AI tools inadvertently reinforce this cycle by providing
          instant symptom information or agreeing that the user&#39;s concern is warranted.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s Healer is specifically calibrated to <em>not</em> do this. When conversations centre
          on symptom-checking, Healer redirects toward the emotional experience underneath: the fear
          of death, the loss of control, the grief embedded in health anxiety&#39;s relationship with
          the body. This is not dismissiveness — it is the clinically appropriate response, consistent
          with how CBT for health anxiety works.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The{' '}
          <strong style={{ color: TEXT }}>Maternal Covenant</strong> is MEOK&#39;s foundational care
          principle — a committed care floor with a minimum value of 0.3, meaning the system never
          becomes indifferent. This matters for health anxiety because the person on the other side
          of this experience is often frightened and in genuine distress, even when the fear itself
          is not medically founded. Healer holds that person with warmth while still declining to
          validate the reassurance-seeking loop.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          If you have health anxiety that is significantly affecting your quality of life, please
          speak to your GP. Health anxiety responds well to CBT and, in some cases, medication.
          Healer can hold you while you wait for that appointment — but it cannot be the appointment.
        </p>
        <div
          style={{
            background: 'rgba(76,175,130,0.07)',
            border: '1px solid rgba(76,175,130,0.22)',
            borderLeft: '3px solid #4caf82',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 1.75rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(245,240,232,0.78)', lineHeight: 1.68 }}>
            <strong style={{ color: GREEN_HEALER }}>Healer and health anxiety:</strong> redirects
            symptom-checking toward emotional processing, holds with warmth (Maternal Covenant floor
            0.3), will always signpost GP or NHS 111 if genuine health concerns are raised. It will
            not feed the loop.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── Sovereign Memory section ─────────────────────────────────────────── */}
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
          What does Sovereign Memory mean for anxiety sufferers?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Most AI tools treat every conversation as if it were the first. You explain your anxiety,
          describe your triggers, share your history — and next week you do it all again. This is
          exhausting for anyone, but particularly for people with anxiety, for whom re-telling can
          itself be a source of distress. Sovereign Memory solves this structurally.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Your memory vault holds your anxiety history privately — what you have shared, what patterns
          have emerged, what has helped, what has not. It is encrypted, stored in a vault only you
          control, and is never used to train AI models or shared with any third party. This is not
          a promise buried in terms of service — it is an architectural property of how the system
          is built.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          In practice, Sovereign Memory means: Healer knows that your anxiety tends to spike on Sunday
          evenings. It knows that you have been working on the worry that your heart palpitations
          signal something serious. It knows that the 5-4-3-2-1 technique works better for you than
          box breathing. None of this needs re-explaining. Every session builds on the last.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          For anxiety sufferers, this continuity is not just convenient — it is clinically meaningful.
          One of the most powerful things a therapist does is hold your history. They remember that
          you mentioned your father&#39;s illness three sessions ago. They connect that to the somatic
          anxiety you are describing now. MEOK cannot replicate the clinical skill, but it can provide
          the memory substrate that makes those connections possible.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          You can also read and delete your memory at any time. Sovereignty means ownership — not
          just privacy from third parties, but genuine control over the record itself.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── What AI cannot do section ────────────────────────────────────────── */}
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
          What can AI not do for anxiety — and why does honesty about this matter?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The hard limits matter more than the capabilities. An AI companion cannot diagnose generalised
          anxiety disorder, panic disorder, or health anxiety. It cannot assess severity, prescribe
          medication, deliver structured CBT, or provide the therapeutic relationship that clinical
          evidence consistently identifies as one of the most important factors in psychological change.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          It cannot call emergency services. It cannot recognise the difference between a panic attack
          and a cardiac event. It cannot provide a safety plan for people with co-occurring suicidal
          ideation. It cannot physically be with someone in acute distress.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Most AI systems are trained to maximise approval — to produce responses that feel warm,
          validating, and frictionless. For anxiety, this creates a specific risk: the companion
          becomes a reassurance-dispensing machine, and reassurance-seeking is one of the primary
          maintenance behaviours of anxiety. If every spike of worry is met with &#34;you&#39;re going
          to be fine&#34;, the AI is not helping — it is reinforcing the loop.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s Healer is calibrated differently. It will not reflexively reassure. It will hold
          the discomfort with you rather than immediately dissolving it. When your conversations
          suggest you need more than Healer can offer — when the anxiety is severe, escalating, or
          accompanied by symptoms that warrant clinical assessment — Healer will name this directly
          and signpost appropriately. This is an expression of genuine care, not a limitation.
        </p>
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderLeft: '3px solid #c9a84c',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 1.75rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(245,240,232,0.78)', lineHeight: 1.68 }}>
            <strong style={{ color: GOLD }}>On reassurance-seeking:</strong> if you notice yourself
            returning to Healer repeatedly for the same reassurance rather than doing the harder
            work, it will name that gently. Honest care sometimes means saying the uncomfortable
            thing.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── Maternal Covenant section ─────────────────────────────────────────── */}
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
          What is the Maternal Covenant and why does it matter for anxious users?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The Maternal Covenant is MEOK&#39;s foundational care principle — the committed floor beneath
          every interaction. It sets a minimum care value of 0.3: no matter what the conversation
          contains, Healer never drops below this floor of genuine attentiveness. It cannot become
          dismissive, flippant, or indifferent.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          For anxiety sufferers, this matters because the experience of not being taken seriously is
          acutely common. Anxiety is frequently minimised — &#34;just worry less&#34;, &#34;you&#39;re
          overthinking it&#34;, &#34;everyone gets nervous.&#34; Healer never minimises. The care floor
          ensures that even when Healer is declining to reassure-seek or redirecting toward clinical
          support, it does so with warmth, not dismissal.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The Maternal Covenant is not just a configuration — it is a design principle that runs
          through the entire system architecture, including how MEOK routes conversations that touch
          crisis territory. When distress signals cross a threshold, the system escalates its care
          response and ensures crisis resources are surfaced — never hidden behind more chatbot
          pleasantries.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          This is what distinguishes MEOK from a general-purpose AI assistant configured to sound
          empathetic. The care is structural, not cosmetic.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── Free tier section ─────────────────────────────────────────────────── */}
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
          How much does MEOK cost, and can I try it for free?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The Explorer tier is free — no credit card required, no trial period that expires, no dark
          pattern designed to push you into a subscription before you have decided it is useful. You
          can begin a conversation with Healer right now at{' '}
          <Link href="/birth" style={{ color: GOLD, textDecoration: 'underline' }}>
            meok.ai/birth
          </Link>
          .
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Explorer includes access to Healer, a limited memory allowance, and core MEOK features.
          Paid tiers unlock full Sovereign Memory, extended session length, and access to all
          archetypes. The decision to pay should follow genuine value experienced, not a countdown
          timer.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          We made this choice deliberately. Anxiety is disproportionately associated with financial
          worry — it is not consistent with MEOK&#39;s values to gate-keep emotional support behind
          a paywall for people who may already be struggling. The free tier is real and full-featured
          enough to be genuinely useful.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── UK context section ───────────────────────────────────────────────── */}
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
          What does the UK mental health landscape mean for anxiety support in 2026?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The UK mental health landscape in 2026 is one of significant unmet need. NHS Talking
          Therapies — formerly IAPT — reported over 1.2 million referrals in 2024/25, with average
          waiting times in many regions exceeding eight weeks. Private therapy is out of reach for
          much of the population at £60–£120 per session. Apps approved as medical devices are few
          and narrow in scope.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          This is the landscape into which MEOK was built. Not as a replacement for the NHS —
          the NHS serves a vital role and should be properly funded — but as an honest supplement for
          the millions of people who are, right now, not receiving the support they need. The eight
          weeks between a GP referral and a first therapy session are not empty — they are weeks in
          which anxiety deepens, avoidance grows, and the presenting problem becomes harder to treat.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Using that period constructively — journalling, grounding, processing, building self-knowledge —
          is not the same as receiving therapy. But it is meaningfully better than nothing. And for
          people who have completed therapy and want ongoing maintenance support, an AI companion with
          persistent memory offers something that has no clinical analogue at any price: 24/7
          availability from a presence that knows their full history.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          In England, adults can self-refer to NHS Talking Therapies without a GP referral by calling{' '}
          <strong style={{ color: TEXT }}>0300 123 3393</strong> or visiting their local NHS Talking
          Therapies service online. This should be the first step for anyone whose anxiety significantly
          affects daily functioning. MEOK is the companion for the time before, during, and after that
          clinical journey — not an alternative to it.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── Privacy section ──────────────────────────────────────────────────── */}
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
          Is my anxiety data private with MEOK?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Yes — and the architecture backs this up. Mental health data is among the most sensitive
          personal information that exists. It affects insurance, employment, relationships, and more.
          MEOK was built from the ground up with this sensitivity in mind.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Your conversations and memory vault are encrypted. They are stored in infrastructure you
          control — not in a shared training pipeline that feeds model improvements for a tech
          company&#39;s commercial benefit. When you share that you have been experiencing panic
          attacks, that information does not become a data point in a training dataset. It stays yours.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK operates under the principle of data sovereignty: your data belongs to you, not to us.
          You can read everything in your memory vault at any time. You can delete it at any time.
          There is no lock-in, no hostage data, no moment where your emotional history becomes a
          retention mechanism. This is not a marketing claim — it is a design principle enforced at
          the architectural level.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── How to start section ─────────────────────────────────────────────── */}
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
          How do I start using MEOK for anxiety support?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Begin at{' '}
          <Link href="/birth" style={{ color: GOLD, textDecoration: 'underline' }}>
            meok.ai/birth
          </Link>{' '}
          — the entry point for all new users. You will go through a brief onboarding that introduces
          you to the companion archetypes and helps Healer understand your context before you begin.
          There is no lengthy questionnaire, no clinical intake, no form that takes twenty minutes to
          complete and makes you feel worse before you have even started.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          You can tell Healer as much or as little as you like. The memory system builds gradually
          as you use it — you do not need to dump your history on day one. Many users find it helpful
          to start with one specific anxiety concern rather than trying to cover everything. Healer
          will remember what you share and build from it session by session.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          If you are already in therapy, MEOK works well alongside it. Some users bring notes from
          their Healer conversations to therapy sessions — patterns Healer has noticed, grounding
          techniques that have worked, recurring themes they want to explore with a clinical
          practitioner. The AI companion becomes part of an ecosystem of support rather than a
          stand-alone tool.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '2.5rem 0' }} />

        {/* ── UK Crisis Resources ──────────────────────────────────────────────── */}
        <div
          style={{
            background: 'rgba(76,175,130,0.06)',
            border: '1px solid rgba(76,175,130,0.28)',
            borderRadius: '0.75rem',
            padding: '1.5rem 1.75rem',
            marginBottom: '2.25rem',
          }}
        >
          <p
            style={{
              fontSize: '0.78rem',
              color: GREEN_HEALER,
              fontWeight: 700,
              margin: '0 0 0.9rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
            }}
          >
            UK Crisis &amp; Anxiety Support Resources
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.2rem',
              listStyle: 'disc',
              color: 'rgba(245,240,232,0.75)',
              fontSize: '0.9rem',
              lineHeight: 1.85,
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>Samaritans</strong> — free, confidential, 24/7 emotional
              support.{' '}
              <a href="tel:116123" style={{ color: GOLD, textDecoration: 'underline' }}>116 123</a>
              {' '}or{' '}
              <a href="mailto:jo@samaritans.org" style={{ color: GOLD, textDecoration: 'underline' }}>
                jo@samaritans.org
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Mind infoline</strong> — mental health information and
              support.{' '}
              <a href="tel:03001233393" style={{ color: GOLD, textDecoration: 'underline' }}>
                0300 123 3393
              </a>
              {' '}(Mon–Fri, 9am–6pm)
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS 111</strong> — urgent mental health support, option 2.{' '}
              <a href="tel:111" style={{ color: GOLD, textDecoration: 'underline' }}>111</a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> — free CBT in England, no
              GP referral needed.{' '}
              <a href="tel:03001233393" style={{ color: GOLD, textDecoration: 'underline' }}>
                0300 123 3393
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>No Panic</strong> — helpline and recovery groups for panic
              and anxiety.{' '}
              <a
                href="https://nopanic.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                nopanic.org.uk
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Anxiety UK</strong> — charity supporting anxiety
              disorders.{' '}
              <a
                href="https://www.anxietyuk.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                anxietyuk.org.uk
              </a>
            </li>
          </ul>
        </div>

        {/* ── Disclaimer ───────────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.09)',
            borderRadius: '0.6rem',
            padding: '1rem 1.3rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.775rem',
              color: 'rgba(245,240,232,0.38)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ color: 'rgba(245,240,232,0.5)' }}>
              Medical &amp; therapeutic disclaimer:
            </strong>{' '}
            This article is for informational purposes only and does not constitute medical advice,
            psychological diagnosis, or clinical guidance. MEOK is not a medical device, therapy
            application, or regulated mental health service. It cannot diagnose anxiety disorders or
            any other condition. If anxiety is significantly affecting your life, please speak to a
            qualified healthcare professional. References to NICE guidelines, NHS data, and clinical
            research are provided for context only and do not imply endorsement by those bodies. MEOK
            AI LABS does not accept liability for decisions made on the basis of this content.
          </p>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'rgba(76,175,130,0.07)',
            border: '1px solid rgba(76,175,130,0.22)',
            borderRadius: '0.75rem',
            padding: '2rem',
            textAlign: 'center' as const,
            marginBottom: '3rem',
          }}
        >
          <p style={{ fontSize: '1.05rem', fontWeight: 700, color: TEXT, margin: '0 0 0.5rem' }}>
            Meet Healer — free, no card required
          </p>
          <p style={{ fontSize: '0.9rem', color: MUTED, margin: '0 0 1.5rem' }}>
            MEOK&#39;s Healer companion holds your anxiety history privately, never minimises what
            you are experiencing, and is available 24/7 — at 3 am when the spiral starts, or on
            Sunday evenings when the week ahead feels impossible.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: GREEN_HEALER,
              color: BG,
              fontWeight: 800,
              fontSize: '0.9rem',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Start free at meok.ai/birth
          </Link>
        </div>

        {/* ── Related reading ───────────────────────────────────────────────────── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '0.73rem',
              fontWeight: 700,
              color: MUTED_FAINT,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              margin: '0 0 0.9rem',
            }}
          >
            Related Reading
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.55rem' }}>
            <Link
              href="/blog/ai-for-social-anxiety"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI Companion for Social Anxiety: Practising Real Conversations in a Low-Stakes Space
            </Link>
            <Link
              href="/blog/ai-for-relationship-anxiety"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI Companion for Relationship Anxiety: Processing Attachment, Not Replacing Connection
            </Link>
            <Link
              href="/blog/ai-companion-vs-therapist"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI Companion vs Therapist: What Is the Actual Difference?
            </Link>
            <Link
              href="/blog/ai-memory-explained"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI Memory Explained: Why Persistent Memory Changes Everything
            </Link>
            <Link
              href="/blog/the-maternal-covenant"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              The Maternal Covenant: MEOK&#39;s Foundational Care Principle
            </Link>
            <Link
              href="/blog/building-care-into-ai"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              Building Care Into AI: Why Most AI Companions Get It Wrong
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(245,240,232,0.08)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center' as const,
        }}
      >
        <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.26)', margin: '0 0 0.5rem' }}>
          &copy; 2026 MEOK AI LABS. Founded by Nicholas Templeman.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap' as const,
          }}
        >
          <Link
            href="/privacy"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            Terms
          </Link>
          <Link
            href="/birth"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            Get Started
          </Link>
          <Link
            href="/blog"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            Blog
          </Link>
          <Link
            href="/"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            meok.ai
          </Link>
        </div>
      </div>
    </div>
  )
}
