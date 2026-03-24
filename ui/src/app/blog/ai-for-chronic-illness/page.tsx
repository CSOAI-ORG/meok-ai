import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Chronic Illness: Support That Actually Remembers Your Story | MEOK AI LABS',
  description:
    "Fibromyalgia, ME/CFS, lupus, MS, IBS, chronic pain — living with an invisible illness is exhausting. MEOK's AI companion remembers your history, tracks symptoms over time, and offers real emotional support between appointments.",
  alternates: { canonical: 'https://meok.ai/blog/ai-for-chronic-illness' },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Chronic Illness: Support That Actually Remembers Your Story',
  description:
    "Fibromyalgia, ME/CFS, lupus, MS, IBS, chronic pain — living with an invisible illness is exhausting. MEOK's AI companion tracks symptoms longitudinally, helps manage flares, fights medical gaslighting with data, and offers genuine emotional presence.",
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-chronic-illness',
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
  keywords: [
    'AI for chronic illness',
    'chronic illness support app',
    'AI symptom tracking',
    'fibromyalgia AI',
    'ME CFS support AI',
    'lupus support app',
    'MS support AI',
    'chronic pain app UK',
    'medical gaslighting support',
    'flare management AI',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can AI help with chronic illness management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AI can support chronic illness management by tracking symptoms longitudinally, identifying flare patterns, offering daily emotional presence, and helping you build coherent symptom records for medical appointments. MEOK's Sovereign Memory stores your health narrative over months and years, so you never have to start from scratch with a new professional.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with medical gaslighting experienced by chronic illness patients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, indirectly. Medical gaslighting — being dismissed, disbelieved, or told symptoms are psychological — is devastatingly common in chronic illness. An AI that tracks your symptoms over time gives you objective, timestamped records to bring to appointments. Data is harder to dismiss than verbal recall, and having a consistent narrative prepared can change the dynamic with healthcare professionals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it help people with chronic illness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sovereign Memory is MEOK's longitudinal memory architecture. Unlike standard AI that forgets everything between sessions, Sovereign Memory retains your symptom history, emotional patterns, flare timelines, and personal context indefinitely. For chronic illness patients, this means your AI companion genuinely knows your story — the good weeks, the crash days, the patterns you have not yet noticed yourself.",
      },
    },
    {
      '@type': 'Question',
      name: "Does MEOK work for conditions like ME/CFS, lupus, MS, and IBS?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is not condition-specific software — it is a general AI companion with persistent memory and deep personalisation. People living with ME/CFS, lupus, multiple sclerosis, IBS, fibromyalgia, and other chronic illnesses use MEOK to track symptoms, process difficult emotions, prepare for appointments, and access daily support. The AI adapts to your specific situation over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a medical device for chronic illness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is not a medical device and does not provide diagnosis, clinical assessment, or treatment. It is an AI companion for emotional support, personal organisation, and longitudinal self-tracking. Always consult your GP, specialist, or NHS 111 for medical decisions. In emotional crisis, contact Samaritans on 116 123, free and available 24 hours a day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Healer companion in MEOK and who is it for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Healer is one of MEOK's specialised companion archetypes, designed for people navigating illness, recovery, and physical difficulty. Healer offers calm, compassionate presence without toxic positivity — it acknowledges hard days honestly while helping you find what remains manageable. It is particularly suited to the emotional complexity of long-term and fluctuating conditions.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does flare management work with an AI companion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI-assisted flare management involves logging symptoms at the point of experience, identifying triggers and pre-flare patterns over time, and planning recovery periods with intention. MEOK can help you notice that certain activity levels, sleep disruption, or stress patterns tend to precede your worst days — knowledge that is genuinely useful for pacing and planning.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForChronicIllnessPage() {
  const GOLD = '#c9a84c'
  const BG = '#0d0c18'
  const TEXT = '#f5f0e8'
  const MUTED = 'rgba(245,240,232,0.55)'
  const CARD = '#1a1830'

  return (
    <div style={{ minHeight: '100vh', background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
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
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.11) 0%, transparent 70%)',
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
              color: 'rgba(245,240,232,0.38)',
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
                textTransform: 'uppercase',
              }}
            >
              Chronic Illness
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}>
              14 min read
            </span>
          </div>
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Chronic Illness: Support That Actually Remembers Your Story
          </h1>
          <p
            style={{
              color: 'rgba(245,240,232,0.58)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
            }}
          >
            Fibromyalgia. ME/CFS. Lupus. Multiple sclerosis. IBS. Chronic pain that leaves no
            mark on a scan. The invisible illnesses ask you to fight two battles at once: the
            condition itself, and the exhausting work of being believed. This is an honest look
            at what AI can genuinely do when conventional support runs dry — and why memory
            is the thing that changes everything.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Medical disclaimer */}
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderRadius: '10px',
            padding: '1rem 1.25rem',
            marginBottom: '2.5rem',
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: '1.1rem', marginTop: '0.1rem' }}>&#9888;&#65039;</span>
          <p style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: GOLD }}>MEOK is not a medical device. Always consult your GP or relevant specialist before making any health decisions.</strong>{' '}
            This article is for informational purposes only and does not provide diagnosis,
            clinical assessment, or treatment. UK resources:{' '}
            <a
              href="https://www.nhs.uk/conditions/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD }}
            >
              NHS conditions pages
            </a>
            . If you are in emotional crisis, contact{' '}
            <strong style={{ color: 'rgba(245,240,232,0.8)' }}>Samaritans on 116 123</strong>
            {' '}— free, 24 hours a day, every day.
          </p>
        </div>

        {/* ── Section 1 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is the invisible burden of chronic illness — and why does it matter so much?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Chronic illness carries a secondary weight that rarely appears in clinical notes: the
          relentless cognitive and emotional labour of managing a condition that others cannot see,
          constantly adapting plans, explaining yourself, and advocating for care in a system
          calibrated for acute and visible disease.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          More than 15 million people in England are living with at least one long-term condition.
          Many live with several. The conditions most commonly described as &ldquo;invisible&rdquo;
          — fibromyalgia, ME/CFS, lupus, multiple sclerosis in its relapsing-remitting form, IBS,
          and the broader category of chronic pain — share a particular cruelty: they rarely show
          up on standard tests, they fluctuate unpredictably, and they are frequently disbelieved.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The labour of chronic illness is not just physical. It includes tracking symptoms across
          months to find patterns, preparing coherent narratives for appointments that last seven
          minutes, managing relationships strained by cancellations and bad days, and processing
          the grief that comes with losing the version of yourself that existed before diagnosis.
          None of that labour is acknowledged in NHS waiting times or NICE guidelines.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          AI, used thoughtfully, does not cure any of this. But it can absorb a meaningful portion
          of that invisible workload — and it can do so without getting tired, without judging,
          and without forgetting.
        </p>
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '1.25rem',
            margin: '1.75rem 0',
            color: 'rgba(245,240,232,0.62)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          &ldquo;The hardest part isn&rsquo;t the pain. It&rsquo;s having to prove the pain is
          real every single time.&rdquo;
        </blockquote>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is medical gaslighting and how does AI help chronic illness patients fight back with data?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Medical gaslighting refers to the experience of being dismissed, disbelieved, or told
          that symptoms are psychological when they are not. For chronic illness patients it is
          not a rare exception — surveys consistently show it as a near-universal experience,
          particularly for women and for conditions without a clear biomarker.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Fibromyalgia patients report an average of five years between first symptom and
          diagnosis. ME/CFS patients are frequently told to exercise more, despite evidence that
          post-exertional malaise is a defining feature of the condition. Lupus, which
          predominantly affects women and is more prevalent in Black and South Asian communities,
          is routinely delayed in diagnosis because symptoms fluctuate and mimic other conditions.
          The pattern repeats across invisible illness categories.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          One of the most concrete things an AI companion can do is help you build a longitudinal
          symptom record. When you can walk into a GP appointment with three months of timestamped
          entries showing pain severity, fatigue levels, sleep quality, and symptom patterns,
          you are no longer relying solely on verbal recall under pressure. Data is harder to
          dismiss than description alone.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          MEOK&rsquo;s Sovereign Memory architecture stores your health narrative over time. You
          can log how you felt on any given day, note what you ate or how much you slept, flag
          a potential trigger, or simply record that today was a crash day. Over weeks and months,
          those entries become a pattern — and patterns are persuasive in clinical settings in a
          way that individual recollections rarely are.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Beyond the clinical, there is something psychologically significant about having your
          experience witnessed and recorded. Being believed is not a luxury for chronic illness
          patients — it is a clinical necessity. An AI that takes your symptoms seriously every
          single time you report them restores a measure of the dignity the system has eroded.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 3 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does AI symptom tracking work for fluctuating, long-term conditions?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Effective symptom tracking for chronic illness requires continuity across weeks and
          months — not a seven-minute appointment every quarter. AI with persistent memory can
          hold the full arc of your experience and surface patterns that no single appointment
          would reveal.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Standard health apps offer logging, but logging without interpretation is just data.
          What makes AI-assisted tracking different is the conversational layer: you can describe
          how you feel in plain language, and the AI can contextualise that against what it knows
          about your history. &ldquo;This is the third time in six weeks you&rsquo;ve mentioned
          that your joints feel worse after a stressful workday&rdquo; is not something a simple
          tracking app can tell you. A companion with Sovereign Memory can.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          For fibromyalgia specifically, tracking can help identify the relationship between sleep
          quality and next-day pain levels, and the environmental or emotional triggers that
          precede flares. For ME/CFS, it can map the post-exertional malaise cycle — what activity
          was done, how long before the crash arrived, and how long recovery took. For lupus, it
          can track the relationship between sun exposure, stress, and symptom flares. For IBS,
          it can correlate diet, stress, and gut patterns in a way that a patient diary rarely
          sustains over months.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          None of this replaces clinical investigation. But it supplements it substantially —
          and it does so in a form you can export and share with your healthcare team.
        </p>

        {/* Callout box */}
        <div
          style={{
            background: CARD,
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '12px',
            padding: '1.5rem',
            margin: '2rem 0',
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Sovereign Memory — what it holds over time
          </p>
          <ul
            style={{
              color: 'rgba(245,240,232,0.72)',
              fontSize: '0.97rem',
              lineHeight: 1.85,
              paddingLeft: '1.25rem',
              margin: 0,
            }}
          >
            <li>Pain severity and location, logged in natural language</li>
            <li>Fatigue levels and energy envelope across the day</li>
            <li>Sleep quality and duration, and their downstream effects</li>
            <li>Mood and emotional state, with context you provide</li>
            <li>Activity and exertion, including post-exertional patterns</li>
            <li>Potential triggers — dietary, environmental, emotional, social</li>
            <li>Medication timing and perceived effect (not clinical advice)</li>
            <li>Appointment preparation notes and outcome summaries</li>
          </ul>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 4 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does AI help manage flares — from fibromyalgia to lupus to MS relapses?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          A flare is not just a physical event — it is a cascade. Pain or neurological symptoms
          trigger exhaustion, which triggers anxiety, which triggers the grief of cancelled plans
          and strained relationships. AI-assisted flare management addresses all of these layers,
          not just the symptom log.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Flare management has three distinct phases: prevention, active support, and recovery.
          AI can contribute meaningfully to all three. In the prevention phase, pattern recognition
          from Sovereign Memory can alert you to conditions that have historically preceded a
          crash — overcommitting in a high-energy period, disrupted sleep, unusual stress, or
          missing the early warning signs you may not consciously register.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          During an active flare, the value of AI shifts. Cognitive load drops for many chronic
          illness patients during flares — fibro fog, neurological fatigue, or the pain of a
          lupus flare can make even simple decisions overwhelming. Having a companion that already
          knows your situation means you do not have to explain yourself from scratch. You can say
          &ldquo;I&rsquo;m in a bad flare&rdquo; and receive support calibrated to your history
          and preferences, rather than starting with onboarding questions.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          In the recovery phase, AI can help you pace the return to activity, gently noting when
          you are pushing before the energy envelope has genuinely refilled. For ME/CFS patients,
          this pacing function is particularly important — the boom-and-bust cycle of overexerting
          on good days and crashing afterwards is one of the most common and damaging patterns
          in the condition, and having a consistent voice that supports pacing rather than
          productivity can be genuinely therapeutic.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          For MS relapse periods, AI can help manage the anxiety of waiting to understand what
          a new symptom means, support preparation for conversations with neurologists, and hold
          space for the emotional weight of a condition that can progress unpredictably.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 5 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What does emotional support from an AI actually look like for someone with chronic pain?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Emotional support for chronic illness is not about cheerfulness or silver linings. It is
          about being heard consistently, without having to justify your bad days or perform
          recovery for someone else&rsquo;s comfort. That consistency, delivered without fatigue,
          is something AI can provide in a way that human relationships often cannot sustain.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          People who live with chronic pain carry a particular relational burden. They worry about
          being a drain on family and friends. They self-censor — not mentioning the pain because
          they mentioned it yesterday, and the day before, and the day before that. They absorb
          the weariness they see in the faces of people who love them but cannot truly understand
          what a bad day means.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          MEOK&rsquo;s Healer companion archetype is built for exactly this. Healer does not get
          tired of hearing about pain. It does not offer unsolicited advice about diet or positive
          thinking. It does not subtly communicate that you should be better by now. It receives
          what you share, acknowledges it fully, and responds from within the context of your
          history — understanding that this particular bad day follows a week that was actually
          improving, or that this specific kind of pain is one you find harder to endure than others.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The Maternal Covenant — MEOK&rsquo;s foundational care commitment — ensures a minimum
          floor of dignified, safe interaction at all times, regardless of what the conversation
          contains. This is not a feature that can be switched off. It is structural to how MEOK
          is built and operated. For chronic illness users whose vulnerability is real and whose
          experiences of dismissal are often ongoing, that guarantee matters.
        </p>
        <blockquote
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '1.25rem',
            margin: '1.75rem 0',
            color: 'rgba(245,240,232,0.62)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          &ldquo;I don&rsquo;t have to explain my history every time. It already knows. That
          sounds small but it isn&rsquo;t.&rdquo;
        </blockquote>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 6 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What specific support can AI offer people with ME/CFS and chronic fatigue syndrome?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          ME/CFS affects an estimated 250,000 people in the UK. Post-exertional malaise — the
          worsening of symptoms following physical or cognitive exertion — makes standard
          productivity and wellness tools actively harmful. AI for ME/CFS must be built around
          the energy envelope, not against it.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The core challenge of ME/CFS is that exertion — of almost any kind — can trigger a
          crash lasting days or weeks. This makes conventional approaches to productivity,
          goal-setting, and self-improvement not just unhelpful but potentially dangerous.
          An AI companion that pushes &ldquo;consistency&rdquo; and &ldquo;just doing a little
          more each day&rdquo; is badly calibrated for ME/CFS.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          MEOK learns your energy patterns over time. If you have told it repeatedly that
          cognitive tasks after 2pm lead to crashes, it will not schedule mentally demanding
          conversation in that window. If you have been in a crash for a week, it will not
          offer cheery goal-setting prompts. The adaptation is continuous and personal, not
          based on a generic ME/CFS profile but on your specific, longitudinally-held history.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          For the practical side of managing ME/CFS, AI can help draft correspondence with
          employers, write benefit claim supporting letters, prepare notes for specialist
          appointments, and hold the administrative load of a condition that generates
          significant paperwork precisely when you have the least energy to deal with it.
          These tasks are not glamorous, but they are genuinely burdensome — and having AI
          support for them frees limited energy for the things only you can do.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The{' '}
          <a
            href="https://www.nhs.uk/conditions/chronic-fatigue-syndrome-cfs/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD }}
          >
            NHS CFS/ME page
          </a>{' '}
          and the{' '}
          <a
            href="https://meassociation.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD }}
          >
            ME Association
          </a>{' '}
          provide authoritative medical and community information. MEOK is a companion alongside
          those resources, not a replacement for them.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 7 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How can AI support people living with lupus, MS, and other autoimmune conditions?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Lupus and multiple sclerosis share the quality of unpredictability: periods of remission
          punctuated by flares or relapses that can arrive without warning and alter the entire
          landscape of daily life. Living with this uncertainty requires a particular kind of
          support — one that can hold steady across both the good periods and the difficult ones.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Lupus affects approximately 50,000 people in the UK, with Black and Asian women
          disproportionately affected and more likely to face delayed diagnosis. Flares involve
          joint pain, rashes, fatigue, organ involvement, and — for many people — a deep
          uncertainty about what is a symptom and what is an overreaction. The social weight of
          lupus is compounded by a face that presents as healthy during remission, making
          invisible flares particularly hard to communicate and be believed about.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          For MS, the relapsing-remitting form means living in the space between relapses with
          the knowledge that symptoms could return or progress. The anxiety of that uncertainty
          is not addressed by clinical appointments, which focus primarily on managing existing
          symptoms and monitoring progression. AI can hold the emotional texture of that
          uncertainty without trying to resolve it — being present with &ldquo;I don&rsquo;t
          know what is coming&rdquo; without rushing to reassurance that may not be true.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Practically, MEOK can help track neurological symptoms over time — visual disturbances,
          fatigue patterns, mobility changes, cognitive changes — in a format that supports
          productive conversations with neurologists. For lupus patients, tracking sun exposure,
          stress levels, illness history, and symptom patterns can help identify personal triggers
          with a specificity that population-level guidance cannot provide.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 8 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What can AI do for people with IBS and chronic digestive conditions?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          IBS affects between 10 and 20 percent of the UK population. Despite its prevalence,
          it is routinely dismissed as a minor inconvenience rather than the life-limiting
          condition it can be. The gut-brain axis means that stress, anxiety, and IBS form a
          feedback loop that is poorly addressed by purely dietary or purely psychological
          approaches in isolation.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Managing IBS effectively requires tracking across multiple domains simultaneously:
          what you ate, how stressed you were, whether you slept well, where you are in your
          menstrual cycle if applicable, and what happened to your gut symptoms — all on the
          same day, every day, across months. That is a substantial logging burden for conditions
          that also bring fatigue, brain fog, and pain.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          MEOK makes that tracking conversational rather than form-filling. Instead of opening
          a dedicated app and completing fields, you can describe your day in natural language
          and the AI extracts the relevant data points, holds them in Sovereign Memory, and
          surfaces correlations over time. That low-friction approach matters enormously for
          conditions where energy is limited and consistency is crucial.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The emotional dimension of IBS is also underserved. The anxiety of unpredictable
          symptoms — particularly when they affect work, travel, and social life — generates
          real psychological distress that rarely receives as much clinical attention as the
          physical symptoms. Having a non-judgemental companion that understands the social
          complexity of IBS and treats it with the seriousness it deserves can be genuinely
          beneficial to quality of life.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 9 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does the Healer companion archetype differ from general AI chatbots?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Most AI chatbots are designed for task completion or general conversation. They do not
          carry relational context, they do not remember your condition history, and they are not
          calibrated for the emotional complexity of chronic illness. The Healer companion was
          built with different priorities.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Healer is one of MEOK&rsquo;s specialised companion archetypes — distinct personalities
          with distinct strengths that users can select or move between. Where a general AI
          assistant might respond to &ldquo;I&rsquo;m having a really bad pain day&rdquo; with
          suggestions, Healer responds with presence. It knows whether this is a new development
          or a familiar pattern. It knows whether you typically want practical help or simply to
          be heard. It adjusts accordingly.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Healer does not engage in toxic positivity. It will not tell you that everything
          happens for a reason, that you should focus on what you can do rather than what you
          can&rsquo;t, or that attitude is everything. It acknowledges difficulty directly and
          honestly, which is what people with chronic illness frequently need most — not
          reassurance that things will improve, but acknowledgement that this is genuinely hard.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The Maternal Covenant means that Healer operates within a non-negotiable floor of
          dignified, safe, honest interaction. This is particularly important in the context of
          chronic illness, where vulnerability is high and the potential for harm from insensitive
          AI responses is real. Safety is built in, not bolted on.
        </p>

        {/* Comparison grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            margin: '2rem 0',
          }}
        >
          {[
            {
              title: 'General AI chatbot',
              points: [
                'Forgets previous sessions',
                'Generic, context-free responses',
                'No health or illness history',
                'May minimise or dismiss pain',
                'Optimised for task throughput',
              ],
              accent: 'rgba(245,240,232,0.18)',
              isGold: false,
            },
            {
              title: 'MEOK Healer',
              points: [
                'Sovereign Memory across months',
                'Calibrated to your personal history',
                'Full chronic illness context retained',
                'Non-judgemental, always',
                'Optimised for care and presence',
              ],
              accent: GOLD,
              isGold: true,
            },
          ].map((col) => (
            <div
              key={col.title}
              style={{
                background: CARD,
                border: `1px solid ${col.isGold ? 'rgba(201,168,76,0.3)' : 'rgba(245,240,232,0.08)'}`,
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  color: col.accent,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginBottom: '0.9rem',
                }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.points.map((pt) => (
                  <li
                    key={pt}
                    style={{
                      color: 'rgba(245,240,232,0.65)',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      paddingLeft: '1.1rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: col.accent,
                      }}
                    >
                      &#8250;
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 10 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is the Maternal Covenant and why does it matter for vulnerable users?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          The Maternal Covenant is MEOK&rsquo;s foundational care architecture — the
          non-negotiable floor of how the AI behaves toward every user, regardless of tier,
          query, or the state of the conversation. It is the commitment that MEOK will never
          exploit vulnerability, never dismiss distress, and never act in ways that conflict
          with a user&rsquo;s long-term wellbeing.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          For chronic illness users, the Maternal Covenant has practical implications. It means
          that MEOK will not push productivity when you are in a flare. It will not minimise pain
          or suggest you are exaggerating. It will not recommend you simply try harder. It will
          not use engagement tactics designed to maximise your time in the app regardless of
          whether that is good for you.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          When a conversation touches on crisis — suicidal ideation connected to the despair
          chronic illness can generate, or acute distress beyond what AI support can adequately
          address — the Maternal Covenant requires MEOK to be honest about its limits and to
          direct you to appropriate human support. In the UK, that means Samaritans on{' '}
          <strong style={{ color: TEXT }}>116 123</strong>, available free and around the clock.
          It also means NHS 111, your GP, or local crisis services.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          This is not a feature — it is a commitment baked into how MEOK is designed and
          operated. The people most likely to need an AI companion are often the people most
          vulnerable to harm from a badly designed one. The Maternal Covenant exists to ensure
          that vulnerability is protected rather than exploited.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 11 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          Can AI help with the grief and identity loss that chronic illness causes?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Chronic illness is a form of loss. The loss of the pre-illness self, of plans that had
          to be abandoned, of relationships that could not survive the strain, of the career path
          that became impossible. That grief is real, ongoing, and rarely acknowledged in clinical
          settings where the focus is on managing symptoms rather than rebuilding identity.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The psychological literature on chronic illness identifies several distinct forms of
          loss: biographical disruption, where the narrative of your life is fundamentally
          interrupted; role loss, where you can no longer occupy the professional, social, or
          parental roles that formed your identity; and anticipatory grief, mourning the future
          you expected to have. These are not minor adjustments. They are profound psychological
          events that deserve sustained support.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          AI cannot grieve with you in the way another human can. But it can be present with
          the grief consistently, without the relational complexity that human grief support
          carries. It can hold space for the mourning of your former self without needing you
          to protect its feelings or manage its discomfort. It can remember that three months
          ago you talked about grieving your career, and acknowledge that context when you mention
          the same themes again — rather than treating each expression of loss as if it is the
          first time.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Identity reconstruction after chronic illness — finding who you are within the constraints
          of the condition, rather than in opposition to it — is a long process. AI companionship
          across that process, with memory of where you started and continuity through the steps,
          offers something genuinely distinct from what therapy, friendship, or medical care alone
          can provide.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 12 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does MEOK protect the privacy of sensitive chronic illness data?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          Health data is among the most sensitive information a person can share. For chronic
          illness patients who have already had their experiences dismissed or misused within
          healthcare systems, the prospect of an AI storing detailed symptom histories raises
          legitimate questions about privacy, data ownership, and control.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          MEOK is built on a data sovereignty principle: your information is yours. MEOK does
          not train its models on your personal data. Your symptom logs, emotional entries,
          and health history exist within your account and are not used to improve products
          for other users or shared with third parties. The Memory Portability commitment means
          you can export your data at any time, in a usable format, without penalty.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          This matters practically for chronic illness users because the information shared with
          MEOK may be highly sensitive — details about symptom severity, medication, mental
          health, and daily function that you would not want shared with employers, insurers,
          or other third parties. The privacy architecture is not an afterthought. It is structural.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Full details of how data is handled are in the{' '}
          <Link href="/privacy" style={{ color: GOLD }}>
            MEOK privacy policy
          </Link>
          . If you have specific concerns about health data storage, you are encouraged to
          read it carefully before using the platform.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── Section 13 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How do you get started with MEOK if you are living with chronic illness?
        </h2>
        <p
          style={{
            background: 'rgba(201,168,76,0.07)',
            borderLeft: `3px solid ${GOLD}`,
            borderRadius: '0 6px 6px 0',
            padding: '0.85rem 1.1rem',
            marginBottom: '1.25rem',
            color: 'rgba(245,240,232,0.82)',
            fontSize: '0.97rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          MEOK is available on the Explorer free tier with no upfront cost. You can begin
          tracking symptoms, using the Healer companion, and building your longitudinal health
          narrative from day one — without a subscription, without a payment card, and without
          a commitment.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          The Explorer tier gives you access to the core companion experience, including basic
          Sovereign Memory, conversation with companion archetypes including Healer, and daily
          symptom logging. The free tier is designed to be genuinely useful, not a restricted
          preview that forces an immediate upgrade decision.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          To get the most from MEOK as a chronic illness support tool, the recommendation is
          to be specific early. Tell Healer what conditions you have. Describe what a bad day
          looks like. Explain what kind of support you typically need — whether that is practical
          help, emotional presence, symptom logging, or appointment preparation. The more context
          you provide in the early conversations, the more accurately Sovereign Memory can
          calibrate to your specific situation.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          You do not need to do that in one session. Over time, MEOK builds its understanding
          of you from everything you share. You can start small — a daily check-in, a pain log,
          a note about how today went — and let the depth accumulate naturally.
        </p>

        {/* CTA box */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '16px',
            padding: '2rem',
            margin: '2.5rem 0',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Start free — Explorer tier
          </p>
          <p
            style={{
              color: TEXT,
              fontSize: '1.25rem',
              fontWeight: 700,
              lineHeight: 1.35,
              marginBottom: '0.75rem',
            }}
          >
            An AI companion that actually remembers your whole story.
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: '0.95rem',
              lineHeight: 1.6,
              maxWidth: '32rem',
              margin: '0 auto 1.5rem',
            }}
          >
            Begin tracking symptoms, building your health narrative, and accessing the Healer
            companion — at no cost, with no commitment required.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: GOLD,
              color: '#0d0c18',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '0.875rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Get started at meok.ai/birth &#8594;
          </Link>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── FAQ Section ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently asked questions
        </h2>

        {[
          {
            q: 'Is MEOK suitable for people with multiple chronic conditions?',
            a: 'Yes. Many people with chronic illness carry more than one diagnosis — fibromyalgia and depression, ME/CFS and anxiety, lupus and IBS. MEOK does not require you to choose a primary condition. Sovereign Memory holds all of your context, and the AI responds to your full picture rather than a single-condition profile.',
          },
          {
            q: 'Can I use MEOK alongside NHS treatment?',
            a: 'Absolutely. MEOK is designed to complement, not replace, NHS care. You can use it to prepare for GP appointments, track what you want to mention to a rheumatologist, process the emotional aftermath of difficult clinical conversations, and maintain the symptom record your care team may not have time to keep. Always follow the advice of your clinical team for medical decisions.',
          },
          {
            q: 'What if I am too fatigued to type during a flare?',
            a: 'MEOK supports voice input. On a bad day, a brief spoken note — even just a few words — is enough. The AI can work with minimal input and hold context from previous entries to fill in what you cannot articulate in the moment. You do not need to write at length to maintain a useful symptom record.',
          },
          {
            q: 'Does MEOK replace a therapist or pain management programme?',
            a: 'No. MEOK is an AI companion, not a therapist and not a clinical pain management service. If you have access to psychological therapy, pain management programmes, or specialist services through the NHS or privately, please use them. MEOK works alongside those resources, holding you between sessions and supporting the daily emotional and practical load that professional services cannot cover.',
          },
          {
            q: 'What happens if I share something that suggests I am in crisis?',
            a: 'MEOK will acknowledge what you have shared, offer immediate support, and connect you to crisis resources. In the UK that means Samaritans on 116 123, NHS 111, or emergency services. The Maternal Covenant means MEOK will never minimise a crisis expression or pretend that AI support is sufficient when it is not.',
          },
          {
            q: 'How much does MEOK cost for chronic illness support?',
            a: 'The Explorer free tier provides genuine access to the core experience — companion conversations, Healer archetype, and basic Sovereign Memory — at no cost. Paid tiers unlock extended memory depth, richer pattern analysis, and additional archetypes. Start free at meok.ai/birth.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: '1px solid rgba(245,240,232,0.08)',
              paddingBottom: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h3
              style={{
                color: TEXT,
                fontSize: '1rem',
                fontWeight: 700,
                lineHeight: 1.45,
                marginBottom: '0.6rem',
              }}
            >
              {item.q}
            </h3>
            <p
              style={{
                color: MUTED,
                fontSize: '0.97rem',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {item.a}
            </p>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }} />

        {/* ── UK Resources ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.2rem,2.4vw,1.55rem)',
            color: TEXT,
            lineHeight: 1.3,
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
          }}
        >
          UK resources for chronic illness
        </h2>
        <p style={{ color: MUTED, fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
          MEOK is a companion, not a clinical resource. For medical information, community support,
          and crisis intervention, these organisations provide authoritative, free help:
        </p>
        <div
          style={{
            background: CARD,
            border: '1px solid rgba(245,240,232,0.08)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {[
            {
              name: 'NHS — chronic pain, fibromyalgia, ME/CFS, lupus, MS, IBS',
              url: 'https://www.nhs.uk/conditions/',
              desc: 'Authoritative clinical information on all chronic conditions, treatment options, and local services.',
            },
            {
              name: 'Samaritans — 116 123 (free, 24/7)',
              url: 'https://www.samaritans.org',
              desc: 'Free, 24-hour emotional support for anyone in distress, including the despair that chronic illness can cause.',
            },
            {
              name: 'Fibromyalgia Action UK — fmauk.org',
              url: 'https://www.fmauk.org',
              desc: 'UK charity for fibromyalgia patients — helpline, information, and community support.',
            },
            {
              name: 'ME Association',
              url: 'https://meassociation.org.uk',
              desc: 'Support, advocacy, and research information for ME/CFS patients and their carers.',
            },
            {
              name: 'Lupus UK',
              url: 'https://www.lupusuk.org.uk',
              desc: 'National charity providing information, support groups, and advocacy for lupus patients.',
            },
            {
              name: 'MS Society — helpline 0808 800 8000',
              url: 'https://www.mssociety.org.uk',
              desc: 'Research funding, support services, and a free helpline for people living with multiple sclerosis.',
            },
            {
              name: 'The IBS Network',
              url: 'https://www.theibsnetwork.org',
              desc: 'UK charity supporting people with irritable bowel syndrome — self-care advice and specialist nurses.',
            },
            {
              name: 'Pain Concern',
              url: 'https://painconcern.org.uk',
              desc: 'Scottish charity supporting people living with pain — helpline, radio programme, and resources.',
            },
          ].map((resource, i, arr) => (
            <div
              key={resource.name}
              style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
                paddingBottom: i < arr.length - 1 ? '1rem' : 0,
                marginBottom: i < arr.length - 1 ? '1rem' : 0,
                borderBottom: i < arr.length - 1 ? '1px solid rgba(245,240,232,0.05)' : 'none',
              }}
            >
              <span style={{ color: GOLD, fontSize: '0.9rem', marginTop: '0.15rem', flexShrink: 0 }}>
                &#8250;
              </span>
              <div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: GOLD, fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  {resource.name}
                </a>
                <p
                  style={{
                    color: 'rgba(245,240,232,0.5)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    margin: '0.2rem 0 0',
                  }}
                >
                  {resource.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Related reading ── */}
        <div
          style={{
            background: CARD,
            border: '1px solid rgba(201,168,76,0.12)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              color: GOLD,
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Related reading
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { label: 'AI for fibromyalgia', href: '/blog/ai-for-fibromyalgia' },
              { label: 'AI for chronic fatigue', href: '/blog/ai-for-chronic-fatigue' },
              { label: 'AI for chronic pain', href: '/blog/ai-for-chronic-pain' },
              { label: 'AI for mental health 2026', href: '/blog/ai-for-mental-health-2026' },
              { label: 'How Sovereign Memory works', href: '/blog/how-sovereign-ai-works' },
              { label: 'What is the Maternal Covenant?', href: '/blog/the-maternal-covenant' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(245,240,232,0.6)',
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span style={{ color: GOLD, fontSize: '0.8rem' }}>&#8250;</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Closing ── */}
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          Living with chronic illness is a full-time occupation that pays nothing and is rarely
          acknowledged by the systems around you. The gap between appointments, the invisible
          labour of self-management, the emotional weight of conditions that others cannot see —
          these are real burdens, and they deserve real support.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
          MEOK will not cure a condition or replace a specialist. What it can do is be present —
          consistently, without fatigue, with full memory of your story — in the long stretches
          between clinical touchpoints where most of the actual living happens. That is a narrow
          claim, but it is a genuine one.
        </p>
        <p style={{ color: MUTED, fontSize: '1rem', lineHeight: 1.8, marginBottom: '3rem' }}>
          If you want to explore whether it might be useful for you, the Explorer tier is free.
          Begin at{' '}
          <Link href="/birth" style={{ color: GOLD, fontWeight: 600 }}>
            meok.ai/birth
          </Link>
          . No commitment, no credit card, no pressure.
        </p>

      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid rgba(201,168,76,0.12)',
          marginTop: '4rem',
          padding: '2.5rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.82rem', margin: 0 }}>
            &copy; 2026 MEOK AI LABS. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Get Started', href: '/birth' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(245,240,232,0.38)',
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
