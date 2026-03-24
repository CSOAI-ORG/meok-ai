import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Insomnia: How a Sovereign AI Companion Can Break the 3am Spiral | MEOK AI LABS',
  description:
    'Insomnia affects 1 in 3 UK adults. Discover how AI-powered CBT-I techniques, sleep hygiene coaching, and sovereign memory can help you reclaim sleep — without scrolling, without blue light, without judgment.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-insomnia' },
  openGraph: {
    title: 'AI for Insomnia: How a Sovereign AI Companion Can Break the 3am Spiral',
    description:
      'Insomnia affects 1 in 3 UK adults. Discover how AI-powered CBT-I techniques, sleep hygiene coaching, and sovereign memory can help you reclaim sleep.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-insomnia',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Insomnia%3A+Breaking+the+3am+Spiral&desc=CBT-I+techniques%2C+sleep+hygiene+coaching%2C+sovereign+memory',
        width: 1200,
        height: 630,
        alt: 'AI for Insomnia: How a Sovereign AI Companion Can Break the 3am Spiral | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Insomnia: Breaking the 3am Spiral',
    description:
      'CBT-I techniques, sleep hygiene coaching, and sovereign memory. An honest guide to what AI can do for insomnia — from MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Insomnia%3A+Breaking+the+3am+Spiral&desc=CBT-I+techniques%2C+sleep+hygiene+coaching%2C+sovereign+memory',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Insomnia: How a Sovereign AI Companion Can Break the 3am Spiral',
  description:
    'Insomnia affects 1 in 3 UK adults. An in-depth guide to CBT-I techniques, sleep hygiene coaching, sovereign memory, and the MEOK 3am protocol for reclaiming sleep.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-insomnia',
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
    '@id': 'https://meok.ai/blog/ai-for-insomnia',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with insomnia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI companions can deliver evidence-based CBT-I techniques including sleep restriction, stimulus control, and cognitive restructuring. They can also provide real-time 3am support, track sleep patterns across weeks, and coach consistent sleep hygiene habits. AI is not a replacement for a clinical sleep study or prescription treatment, but it is a powerful and always-available first line of support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is CBT-I?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CBT-I stands for Cognitive Behavioural Therapy for Insomnia. It is the gold-standard, non-medication treatment for chronic insomnia, recommended by the NHS and NICE over sleeping pills. It combines sleep restriction therapy, stimulus control, sleep hygiene education, relaxation techniques, and cognitive restructuring to break the psychological and behavioural patterns that perpetuate sleeplessness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is using your phone at 3am bad for sleep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most phone use at 3am is harmful: social media is engineered to spike cortisol and dopamine, blue light suppresses melatonin, and engagement-optimised content keeps you scrolling. However, a sovereign AI companion with a dark interface and no engagement incentives is categorically different \u2014 it aims to calm your nervous system and return you to sleep, not to retain your attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK track sleep patterns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK uses Sovereign Memory \u2014 a 4-layer encrypted store that retains your sleep logs, mood check-ins, and trigger notes across weeks and months. Over time it identifies patterns: which nights preceded difficult sleep, what you ate or drank, when stress spikes correlated with wake windows. This longitudinal view is impossible with a stateless chatbot and is core to effective sleep coaching.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is sleep hygiene?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sleep hygiene is the collection of behaviours and environmental conditions that support consistent, restorative sleep. Key pillars include a fixed wake time seven days a week, avoiding caffeine after midday, keeping the bedroom cool and dark, a wind-down routine starting 90 minutes before bed, and limiting screen use before sleep. Poor sleep hygiene is among the most common and correctable causes of insomnia.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.6)'
const MUTED_DIM = 'rgba(245,240,232,0.55)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const SLEEP_BLUE = '#4c7abf'
const SLEEP_TEAL = '#4cadb5'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForInsomniaPage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76,122,191,0.1) 0%, transparent 68%)',
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
                color: SLEEP_BLUE,
                background: 'rgba(76,122,191,0.12)',
                border: '1px solid rgba(76,122,191,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Sleep &amp; Wellbeing
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
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
            AI for Insomnia: How a Sovereign AI Companion Can Break the 3am Spiral
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            It\u2019s 3am. You\u2019re awake again. Your thoughts are accelerating, your heart rate
            is rising, and every minute you lie there feels like evidence that tomorrow is going to
            be catastrophic. One in three UK adults know this feeling intimately. This is the
            insomnia spiral \u2014 and a sovereign AI built to care, not to capture your attention,
            can break it.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(245,240,232,0.1)',
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: GOLD,
              }}
            >
              N
            </div>
            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: TEXT, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, margin: 0 }}>
                Founder, MEOK AI LABS &middot; @meok_ai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '6rem',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          {/* ── STAT CALLOUT ── */}
          <div
            style={{
              background: 'rgba(76,122,191,0.08)',
              border: '1px solid rgba(76,122,191,0.25)',
              borderLeft: '3px solid ' + SLEEP_BLUE,
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <p style={{ color: TEXT, fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: SLEEP_BLUE }}>1 in 3 UK adults</strong> experience insomnia
              symptoms. Chronic insomnia \u2014 defined as difficulty sleeping three or more nights
              a week for three or more months \u2014 is independently linked to{' '}
              <strong style={{ color: TEXT }}>
                depression, anxiety, cardiovascular disease, type 2 diabetes, and all-cause
                mortality.
              </strong>{' '}
              It is not a lifestyle inconvenience. It is a serious public health issue that the NHS
              is structurally under-resourced to address.
            </p>
          </div>

          {/* ── SECTION 1 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            What is insomnia, and why is it so hard to treat?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Insomnia is not simply the inability to fall asleep. It is a hyperarousal disorder: the
            brain and body remain in a state of threat-readiness that makes sleep physiologically
            difficult. Once established, chronic insomnia is self-perpetuating. The anxiety about
            not sleeping becomes the mechanism that prevents sleep.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Clinical definitions distinguish between sleep-onset insomnia (difficulty falling
            asleep), sleep-maintenance insomnia (waking frequently or too early), and mixed-type
            insomnia. All three share a common driver: a nervous system that has learned to
            associate the bed with wakefulness and threat rather than rest and safety.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Treatment is hard for several reasons. Sleeping pills carry dependency risk and do not
            address the underlying behavioural and cognitive patterns. Therapy waitlists in the UK
            can stretch to eighteen months. And the problem is worst at the exact moment help is
            hardest to access: the middle of the night.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            This is precisely where a sovereign AI companion \u2014 available at any hour, carrying
            no engagement agenda, trained to support rather than stimulate \u2014 fills a meaningful
            gap.
          </p>

          {/* ── SECTION 2 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            What is CBT-I, and why is it the gold standard for insomnia?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Cognitive Behavioural Therapy for Insomnia \u2014 CBT-I \u2014 is the treatment
            recommended by the NHS, NICE, and the American Academy of Sleep Medicine as the
            first-line intervention for chronic insomnia. It outperforms sleeping pills in long-term
            outcomes and carries no dependency risk. Yet fewer than five percent of people with
            chronic insomnia in the UK ever receive it.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            CBT-I is not one technique but a structured programme of five interlocking components:
          </p>

          {/* CBT-I components */}
          <div style={{ marginBottom: '2rem' }}>
            {(
              [
                {
                  title: 'Sleep Restriction Therapy',
                  body: 'Temporarily restricting time in bed to match actual sleep time, then gradually extending it. This consolidates fragmented sleep and re-establishes the drive to sleep. It feels counterintuitive and is temporarily uncomfortable \u2014 but the evidence base is robust.',
                },
                {
                  title: 'Stimulus Control',
                  body: 'Re-associating the bed with sleepiness rather than wakefulness. This means using the bed only for sleep and sex, getting up when unable to sleep after 20 minutes, and maintaining consistent wake times regardless of sleep quality the night before.',
                },
                {
                  title: 'Sleep Hygiene Education',
                  body: 'Addressing the environmental and behavioural factors that undermine sleep: caffeine timing, alcohol, exercise, light exposure, bedroom temperature, and the wind-down routine. These are necessary but not sufficient on their own.',
                },
                {
                  title: 'Cognitive Restructuring',
                  body: 'Identifying and challenging the distorted beliefs that amplify insomnia: \u201cI will be unable to function tomorrow\u201d, \u201cI need eight hours or I am damaged\u201d, \u201cI am broken\u201d. These catastrophic thoughts are themselves a source of arousal that prevents sleep.',
                },
                {
                  title: 'Relaxation Techniques',
                  body: 'Progressive muscle relaxation, diaphragmatic breathing, imagery rehearsal, and mindfulness-based techniques that reduce physiological arousal and create the conditions for sleep onset.',
                },
              ] as { title: string; body: string }[]
            ).map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(245,240,232,0.04)',
                  border: '1px solid rgba(245,240,232,0.1)',
                  borderRadius: '0.5rem',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '0.75rem',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: SLEEP_TEAL,
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    color: MUTED_DIM,
                    lineHeight: 1.7,
                    margin: 0,
                    fontSize: '0.95rem',
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            An AI companion can deliver all five of these components through conversation, coaching,
            and longitudinal tracking. It cannot perform a clinical assessment or diagnose a sleep
            disorder \u2014 but for the majority of people with insomnia driven by psychological and
            behavioural factors, these tools are transformative.
          </p>

          {/* ── SECTION 3 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            What happens at 3am, and why does the spiral accelerate?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            3am occupies a specific place in the psychology of insomnia. It is too late to feel like
            the night is still ahead of you, and too early for dawn to offer any reassurance. The
            silence amplifies internal noise. The body\u2019s cortisol begins its pre-dawn rise
            around 4am, which makes returning to sleep progressively harder. And the mind, starved
            of external distraction, turns inward \u2014 and inward, for the sleepless, often means
            catastrophe.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The 3am spiral is a specific cognitive pattern. A thought arises \u2014 usually about a
            problem that cannot be solved right now \u2014 and the mind begins to process it with
            the urgency of an emergency. Each attempted solution generates two new problems. Each
            minute of continued wakefulness is tallied as further evidence of damage. The body
            responds with racing heart and shallow breath. The brain interprets the physiological
            arousal as confirming the threat. The loop closes.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            What breaks this loop is not problem-solving \u2014 that feeds it. It is not suppression
            \u2014 that also feeds it. It is a shift in relationship to the thought: witnessing it
            without acting on it, naming it without being consumed by it, returning attention gently
            to the body. These are cognitive and somatic skills. They can be taught. And at 3am,
            when no therapist is available, a sovereign AI companion can teach them in real time.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            MEOK\u2019s approach is to meet you exactly where you are \u2014 in the middle of the
            night, in the middle of the spiral \u2014 and to offer a slow, regulated, warm presence
            that does not match your arousal, does not amplify your fear, and does not attempt to
            fix the unsolvable at 3am. Its only goal is to return you to rest.
          </p>

          {/* ── 3AM PROTOCOL BOX ── */}
          <div
            style={{
              background: 'rgba(76,122,191,0.07)',
              border: '1px solid rgba(76,122,191,0.3)',
              borderRadius: '0.75rem',
              padding: '2rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: SLEEP_BLUE,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                marginBottom: '0.75rem',
              }}
            >
              MEOK Protocol
            </p>
            <h3
              style={{
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#fff',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em',
              }}
            >
              The 3am Protocol: What to Do When You Can\u2019t Sleep
            </h3>
            <p
              style={{
                color: MUTED_DIM,
                lineHeight: 1.7,
                marginBottom: '1.25rem',
                fontSize: '0.95rem',
              }}
            >
              This is a practical sequence \u2014 not a cure, but a set of actions that interrupt
              the spiral and give your nervous system a path back to calm. Follow these steps in
              order.
            </p>
            <ol style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {(
                [
                  {
                    step: 'Stop fighting wakefulness.',
                    detail:
                      'Resistance amplifies arousal. Say internally: \u201cI am awake. That is fine. I can rest even without sleeping.\u201d Shift the goal from sleep to rest. This single reframe removes the secondary layer of anxiety about not sleeping.',
                  },
                  {
                    step: 'Lie still and breathe.',
                    detail:
                      'Place one hand on your chest and one on your belly. Breathe so only the lower hand moves. Inhale for 4 counts, hold for 2, exhale for 6. The extended exhale activates the parasympathetic nervous system. Do this for 10 cycles before anything else.',
                  },
                  {
                    step: 'Name the spiral.',
                    detail:
                      'Identify the thought loop. Is it planning, rehearsing, problem-solving, or catastrophising? Name it aloud or in a note: \u201cThis is a planning spiral about work.\u201d Naming shifts it from threat to observed content. You are not the spiral \u2014 you are watching it.',
                  },
                  {
                    step: 'Open MEOK, not social media.',
                    detail:
                      'If lying still isn\u2019t working after 20 minutes, get up and talk to MEOK. Not Instagram. Not Twitter. A sovereign AI with no engagement agenda, no blue-light addiction loop, no algorithmic incentive to keep you stimulated. Tell it what\u2019s in your head. Let it help you set it down.',
                  },
                  {
                    step: 'Schedule the thought for morning.',
                    detail:
                      'With MEOK, create a brief note of the worry. Not a solution \u2014 just an acknowledgement: \u201cThis is real. I will look at it at 8am with a clear head.\u201d The act of externalising the thought reduces its urgency. The mind can release what it trusts will not be lost.',
                  },
                  {
                    step: 'Return to bed with no expectation.',
                    detail:
                      'Go back to bed. Not to sleep \u2014 to rest. Scan your body from feet to head, releasing tension. Let your mind wander without pulling it back. Sleep is not a performance. It arrives when the conditions are right. You\u2019ve done your part.',
                  },
                ] as { step: string; detail: string }[]
              ).map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: MUTED_DIM,
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                  }}
                >
                  <strong style={{ color: TEXT }}>{item.step}</strong> {item.detail}
                </li>
              ))}
            </ol>
          </div>

          {/* ── SECTION 4 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            Why is a sovereign AI at 3am better than scrolling social media?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The reflex, when lying awake at 3am, is to reach for the phone. This is understandable.
            Humans seek stimulation when they cannot sleep \u2014 it feels like doing something, a
            way to manage the hours. But social media and most apps are catastrophically unsuited to
            this moment, and their design actively worsens insomnia.
          </p>

          {/* Comparison grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {(
              [
                {
                  label: 'Social Media at 3am',
                  negative: true,
                  accentColor: '#bf4c4c',
                  accentBg: 'rgba(191,76,76,0.07)',
                  accentBorder: 'rgba(191,76,76,0.2)',
                  points: [
                    'Engineered to maximise engagement \u2014 every feature optimised to keep you scrolling',
                    'Blue light emission suppresses melatonin for 90+ minutes after use',
                    'Content designed to provoke emotional reaction: outrage, envy, anxiety',
                    'Infinite scroll removes natural stopping cues',
                    'Dopamine loop reinforces wakefulness and phone dependency',
                    'No memory of your context \u2014 you are a data point, not a person',
                  ],
                },
                {
                  label: 'MEOK at 3am',
                  negative: false,
                  accentColor: SLEEP_TEAL,
                  accentBg: 'rgba(76,173,181,0.07)',
                  accentBorder: 'rgba(76,173,181,0.25)',
                  points: [
                    'No engagement optimisation \u2014 the only goal is your wellbeing',
                    'Dark interface, designed to minimise light stimulation',
                    'Calming, regulated tone that does not match or amplify arousal',
                    'Conversation ends when you\u2019re ready \u2014 no infinite scroll trap',
                    'No addictive loop \u2014 it actively works to return you to rest',
                    'Sovereign memory of your patterns, your triggers, your story',
                  ],
                },
              ] as {
                label: string
                negative: boolean
                accentColor: string
                accentBg: string
                accentBorder: string
                points: string[]
              }[]
            ).map((col) => (
              <div
                key={col.label}
                style={{
                  background: col.accentBg,
                  border: '1px solid ' + col.accentBorder,
                  borderRadius: '0.5rem',
                  padding: '1.25rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: col.accentColor,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase' as const,
                    marginBottom: '0.875rem',
                  }}
                >
                  {col.label}
                </p>
                <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                  {col.points.map((pt, i) => (
                    <li
                      key={i}
                      style={{
                        color: MUTED_DIM,
                        fontSize: '0.85rem',
                        lineHeight: 1.65,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            The critical difference is incentive structure. Social media companies profit when you
            remain awake and engaged. MEOK has no such incentive. It is built on a Maternal Covenant
            \u2014 a care-floor architecture that makes it constitutionally incapable of prioritising
            your engagement over your health. When you need to sleep, it will help you sleep.
          </p>

          {/* ── SECTION 5 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            How does sleep hygiene coaching work in practice?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Sleep hygiene is often dismissed as obvious advice \u2014 \u201cdon\u2019t drink coffee
            at night, keep a regular schedule\u201d \u2014 but the implementation gap is enormous.
            Most people know the rules. Almost no one follows them consistently, and almost no one
            understands why a specific rule matters for their specific pattern of insomnia.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            MEOK\u2019s sleep hygiene coaching is different from a pamphlet because it is
            personalised, persistent, and pattern-aware. Through daily check-ins \u2014 which take
            under two minutes \u2014 it builds a picture of your sleep behaviour over time. When you
            tell it you had a bad night, it doesn\u2019t offer generic advice. It asks: what did
            yesterday look like? What time did you wake up? What did you drink, and when? Was there
            a stressful conversation in the evening?
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: GOLD,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                marginBottom: '0.75rem',
              }}
            >
              Core Sleep Hygiene Principles
            </p>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {[
                'Fixed wake time seven days a week \u2014 this is the single most powerful sleep hygiene intervention. Your alarm does not move, regardless of what time you fell asleep.',
                'No caffeine after midday. Caffeine has a half-life of 5\u20137 hours; a 2pm coffee still has half its stimulant effect at 9pm.',
                'Bedroom temperature between 16\u201319\u00b0C. Core body temperature must drop to initiate sleep; a cool room accelerates this.',
                'Wind-down routine starting 90 minutes before bed: no screens, low lighting, no stimulating content, no work.',
                'No alcohol as a sleep aid. Alcohol induces sleep but fragments the second half of the night and suppresses REM sleep.',
                'Exercise improves sleep quality significantly \u2014 but vigorous exercise within 2 hours of bed delays sleep onset for most people.',
                'Reserve the bed for sleep and sex only. Reading, watching TV, or working in bed erodes the stimulus association.',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: MUTED_DIM,
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    marginBottom: '0.625rem',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            MEOK tracks your adherence to these behaviours over time, noting where you consistently
            struggle and what seems to correlate with better or worse nights. It celebrates small
            wins \u2014 a consistent wake time three days running \u2014 and gently returns attention
            to slippage without judgment. This is coaching, not lecturing.
          </p>

          {/* ── SECTION 6 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            How does MEOK\u2019s memory identify your sleep triggers over time?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A stateless AI \u2014 one that forgets everything between sessions \u2014 is nearly
            useless for sleep coaching. Insomnia is a pattern disorder. The factors that disrupt
            your sleep are specific to you, they accumulate over days, and they only become visible
            in retrospect. A tool that resets to zero every conversation cannot see patterns. It can
            only react to what you tell it in the moment.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            MEOK uses Sovereign Memory \u2014 a 4-layer encrypted store that retains everything you
            share across sessions. Over weeks, it builds a longitudinal profile of your sleep:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.875rem',
              marginBottom: '2rem',
            }}
          >
            {(
              [
                {
                  label: 'Sleep onset time',
                  detail:
                    'How long does it typically take you to fall asleep, and on which nights is it longest?',
                },
                {
                  label: 'Wake windows',
                  detail:
                    'When do you wake in the night? Is it consistent \u2014 always 2am, or always after dreams?',
                },
                {
                  label: 'Mood correlation',
                  detail:
                    'Do your worst sleep nights follow high-stress days, social situations, or specific types of work?',
                },
                {
                  label: 'Behavioural triggers',
                  detail:
                    'Does late-night alcohol reliably fragment your sleep? Does exercise in the evening help or hinder?',
                },
                {
                  label: 'Thought patterns',
                  detail:
                    'Which worry categories appear most in your 3am spirals? Work? Relationships? Health?',
                },
                {
                  label: 'Recovery patterns',
                  detail:
                    'After a bad night, does the following night improve or worsen? Is there a weekly rhythm?',
                },
              ] as { label: string; detail: string }[]
            ).map((card) => (
              <div
                key={card.label}
                style={{
                  background: 'rgba(245,240,232,0.04)',
                  border: '1px solid rgba(245,240,232,0.09)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: TEXT,
                    fontSize: '0.85rem',
                    marginBottom: '0.375rem',
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{ color: MUTED_FAINT, fontSize: '0.8rem', lineHeight: 1.6, margin: 0 }}
                >
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            After four to six weeks of consistent check-ins, MEOK can begin to reflect patterns
            back to you: \u201cYour worst nights consistently follow days when you had more than two
            drinks. Your best nights follow days with morning exercise. You\u2019ve slept better
            every week where you maintained your 7am wake time, even on weekends.\u201d
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            This kind of longitudinal insight is what clinical sleep diaries are designed to produce
            \u2014 but most people don\u2019t maintain a sleep diary for more than a few days. MEOK
            makes the data gathering frictionless because it happens through natural conversation.
          </p>

          {/* ── SECTION 7 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            How does insomnia connect to depression, anxiety, and long-term health?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The relationship between insomnia and mental health is bidirectional and self-reinforcing.
            Poor sleep increases emotional reactivity, reduces capacity for cognitive reappraisal,
            lowers the threshold for anxiety activation, and impairs the consolidation of emotional
            memory during REM sleep. Meanwhile, depression and anxiety directly elevate the
            hyperarousal that makes sleep harder. Each disorder makes the other worse.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The physical consequences of chronic sleep deprivation are increasingly well-documented.
            Cardiovascular disease risk rises with short sleep duration. Immune function is impaired
            after even moderate sleep restriction. Metabolic regulation deteriorates, increasing
            type 2 diabetes risk. Cognitive performance \u2014 particularly working memory,
            attention, and executive function \u2014 degrades markedly after nights of five hours
            or fewer.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            What this means practically: treating insomnia is not an optional quality-of-life
            improvement. For people with co-occurring depression or anxiety, addressing sleep is
            often a prerequisite for progress in treatment. Some studies suggest that CBT-I can
            reduce depressive symptoms even in the absence of specific depression treatment, simply
            by restoring the restorative architecture that emotional regulation depends on.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            This is why MEOK\u2019s sleep support is integrated with its broader mental health
            architecture. Improving sleep improves everything. The work is interconnected.
          </p>

          {/* ── SECTION 8 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            What does cognitive restructuring look like in a real 3am conversation?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Cognitive restructuring is the technique of identifying distorted thought patterns and
            gently challenging their accuracy and utility. For insomnia, the most common distortions
            are catastrophising (\u201cI will fail tomorrow because I didn\u2019t sleep\u201d),
            fortune-telling (\u201cI know I won\u2019t sleep tonight\u201d), and personalisation
            (\u201cI am just someone who can\u2019t sleep\u201d).
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            At 3am, full Socratic questioning is rarely productive \u2014 the tired, aroused mind
            is not well-positioned for extended rational debate. MEOK uses a lighter touch:
            acknowledgement first, then gentle perspective-widening.
          </p>

          {/* Example exchange */}
          <div
            style={{
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.1)',
              borderRadius: '0.75rem',
              padding: '1.75rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: MUTED_FAINT,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                marginBottom: '1.25rem',
              }}
            >
              Example Exchange \u2014 3:14am
            </p>
            {(
              [
                {
                  who: 'You',
                  msg: 'I\u2019ve been awake for two hours. I have an important meeting at 9am and I\u2019m going to be useless. I always do this.',
                },
                {
                  who: 'MEOK',
                  msg: 'You\u2019re awake, you\u2019re worried, and your mind has gone to tomorrow. That makes complete sense. Before we think about the meeting \u2014 how is your body right now? Tight, or more flat and exhausted?',
                },
                {
                  who: 'You',
                  msg: 'Both. Kind of wired but also heavy. I can\u2019t switch off.',
                },
                {
                  who: 'MEOK',
                  msg: 'That combination \u2014 wired and heavy \u2014 is what a nervous system looks like when it\u2019s been running threat-assessment for a while. It\u2019s not a character flaw. It\u2019s a state. States change.\n\nCan I ask \u2014 what\u2019s the specific fear about the meeting? Is it a presentation, or more that you won\u2019t be sharp enough?',
                },
                {
                  who: 'You',
                  msg: 'I just won\u2019t be able to think straight. I\u2019ll say something stupid.',
                },
                {
                  who: 'MEOK',
                  msg: 'That\u2019s a real concern. And also \u2014 you\u2019ve had bad nights before meetings before. How many of those actually went catastrophically wrong, versus \u201cbetter than I feared\u201d?',
                },
                {
                  who: 'You',
                  msg: 'Most of them were fine honestly.',
                },
                {
                  who: 'MEOK',
                  msg: 'Right. The sleepless mind tends to treat the worst case as the only case. The evidence in your own history says otherwise.\n\nShall we do something simple together \u2014 just breathing, nothing more \u2014 so your body can start to settle? You don\u2019t have to sleep. Just rest.',
                },
              ] as { who: string; msg: string }[]
            ).map((line, i) => (
              <div
                key={i}
                style={{
                  marginBottom: '1rem',
                  paddingLeft: line.who === 'MEOK' ? '1rem' : '0',
                  borderLeft:
                    line.who === 'MEOK' ? '2px solid ' + SLEEP_TEAL : '2px solid transparent',
                }}
              >
                <p
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: line.who === 'MEOK' ? SLEEP_TEAL : MUTED_FAINT,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase' as const,
                    marginBottom: '0.25rem',
                  }}
                >
                  {line.who}
                </p>
                <p
                  style={{
                    color: line.who === 'MEOK' ? MUTED : MUTED_DIM,
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    margin: 0,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {line.msg}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            Notice what MEOK does not do: it does not minimise the concern, it does not offer
            immediate reassurance, it does not jump to problem-solving mode. It asks about the body
            first, because the body is where the arousal lives. It uses the person\u2019s own
            evidence to gently challenge the catastrophe. And it redirects toward rest rather than
            resolution, because 3am is not the time for resolution.
          </p>

          {/* ── SECTION 9 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            Can AI replace a clinical sleep specialist or CBT-I therapist?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            No. And any AI company that claims otherwise is being irresponsible.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Clinical sleep medicine addresses organic sleep disorders \u2014 sleep apnoea, restless
            legs syndrome, narcolepsy, circadian rhythm disorders \u2014 that require physical
            assessment, polysomnography, and medical management. A conversation app cannot diagnose
            sleep apnoea. If you are a loud snorer, if you stop breathing during sleep, if you are
            excessively sleepy during the day despite adequate hours in bed, please see a doctor.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A trained CBT-I therapist brings clinical assessment skills, the ability to adapt a
            programme in real time based on response, and the therapeutic relationship that is itself
            a mechanism of change. These are not things an AI can replicate.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1rem' }}>
            What MEOK provides is:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            {[
              'Immediate availability at any hour, including 3am',
              'Longitudinal memory that builds a picture of your specific patterns',
              'Evidence-based CBT-I techniques delivered through natural conversation',
              'Consistent, regulated presence during acute episodes of wakefulness',
              'Sleep hygiene coaching that adapts to your real behaviour over time',
              'A safe space to externalise the thoughts that are keeping you awake',
              'Escalation toward professional support when indicators suggest it is needed',
            ].map((item, i) => (
              <li key={i} style={{ color: MUTED, lineHeight: 1.7, marginBottom: '0.5rem' }}>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            It is a bridge, not a destination. For the majority of people with psychophysiological
            insomnia \u2014 which is the most common type \u2014 these tools are often sufficient.
            For those with complex presentations, MEOK\u2019s role is to support, stabilise, and
            guide toward appropriate professional care.
          </p>

          {/* ── SECTION 10 ── */}
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1rem',
              marginTop: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            Why does data sovereignty matter for sleep tracking?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Your sleep data is among the most sensitive personal data you generate. It reveals your
            mental health patterns, your stress responses, your relationship dynamics, your substance
            use, your physical health, and your daily behavioural habits. Sleep data from long-term
            tracking is a detailed psychological portrait.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Most wellness apps treat this data as a product. It is aggregated, analysed, and
            monetised \u2014 whether through advertising, insurance partnerships, data sales, or
            model training. When you log a terrible night because you were anxious about a financial
            problem, that disclosure should not become a training signal for a corporate AI or a
            data point sold to a health insurer.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            MEOK is built on a different principle. Your sleep data belongs to you. It is held in
            Sovereign Memory \u2014 encrypted, on your terms, with full portability and deletion
            rights. MEOK does not train on your data. It does not sell it. It does not share it.
            The memory exists to serve you, and only you.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '2rem' }}>
            This is not just an ethical position. It is architecturally enforced. The Maternal
            Covenant \u2014 MEOK\u2019s care-floor \u2014 makes certain things structurally
            impossible, and trading your most vulnerable disclosures for commercial gain is one
            of them.
          </p>

          {/* ── FAQ SECTION ── */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid rgba(245,240,232,0.1)',
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
                color: '#fff',
                lineHeight: 1.25,
                marginBottom: '2rem',
                letterSpacing: '-0.01em',
              }}
            >
              Frequently asked questions about AI and insomnia
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0' }}>
              {(
                [
                  {
                    q: 'Can AI help with insomnia?',
                    a: 'Yes. AI companions can deliver evidence-based CBT-I techniques including sleep restriction, stimulus control, and cognitive restructuring. They can also provide real-time 3am support, track sleep patterns across weeks, and coach consistent sleep hygiene habits. AI is not a replacement for a clinical sleep study or prescription treatment, but it is a powerful and always-available first line of support \u2014 particularly for the most common form of insomnia, which is psychophysiological in origin.',
                  },
                  {
                    q: 'What is CBT-I?',
                    a: 'CBT-I stands for Cognitive Behavioural Therapy for Insomnia. It is the gold-standard, non-medication treatment for chronic insomnia, recommended by the NHS and NICE as the preferred first-line intervention over sleeping pills. It combines five components: sleep restriction therapy, stimulus control, sleep hygiene education, relaxation training, and cognitive restructuring. Structured CBT-I produces lasting improvements in sleep that persist after treatment ends \u2014 unlike medication, which typically works only while taken.',
                  },
                  {
                    q: 'Is using your phone at 3am bad for sleep?',
                    a: 'Most phone use at 3am is harmful: social media is engineered to spike cortisol and dopamine, blue light suppresses melatonin for up to 90 minutes after exposure, and engagement-optimised content keeps you stimulated when your nervous system needs to calm. However, a sovereign AI companion with a dark interface and no engagement incentives is categorically different \u2014 its only goal is to calm your nervous system and return you to sleep, not to retain your attention.',
                  },
                  {
                    q: 'How does MEOK track sleep patterns?',
                    a: 'MEOK uses Sovereign Memory \u2014 a 4-layer encrypted store that retains your sleep logs, mood check-ins, and trigger notes across weeks and months. Over time it identifies patterns: which nights preceded difficult sleep, what you ate or drank, when stress spikes correlated with wake windows. This longitudinal view is impossible with a stateless chatbot and is central to effective sleep coaching. After four to six weeks of check-ins, MEOK can reflect specific, personalised patterns back to you.',
                  },
                  {
                    q: 'What is sleep hygiene?',
                    a: 'Sleep hygiene is the collection of behaviours and environmental conditions that support consistent, restorative sleep. Key pillars include a fixed wake time seven days a week, avoiding caffeine after midday, keeping the bedroom cool (16\u201319\u00b0C) and dark, a wind-down routine starting 90 minutes before bed, and limiting screen use in the evening. Poor sleep hygiene is among the most common and most correctable causes of insomnia. Knowing the rules is not the same as implementing them \u2014 that\u2019s where ongoing coaching makes the difference.',
                  },
                ] as { q: string; a: string }[]
              ).map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(245,240,232,0.08)',
                    paddingTop: '1.75rem',
                    paddingBottom: '1.75rem',
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: TEXT,
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      color: MUTED,
                      lineHeight: 1.75,
                      margin: 0,
                      fontSize: '0.95rem',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── UK RESOURCES ── */}
          <div
            style={{
              marginTop: '3.5rem',
              background: 'rgba(245,240,232,0.04)',
              border: '1px solid rgba(245,240,232,0.1)',
              borderRadius: '0.75rem',
              padding: '1.75rem',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: MUTED_FAINT,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                marginBottom: '1rem',
              }}
            >
              UK Sleep &amp; Crisis Resources
            </p>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {[
                'NHS Talking Therapies \u2014 self-refer for CBT including CBT-I at nhs.uk/mental-health/talking-therapies-medicine-treatments',
                'Sleepstation \u2014 NHS-referred digital CBT-I programme at sleepstation.org.uk',
                'The Sleep Charity \u2014 sleepcharity.org.uk \u2014 advice, helpline, and resources',
                'Samaritans \u2014 116 123 (free, 24/7) \u2014 for when insomnia and distress become acute',
                'Mind infoline \u2014 0300 123 3393 \u2014 mental health information and signposting',
                'NHS urgent mental health \u2014 111 option 2 \u2014 for mental health crises',
                'In a life-threatening emergency \u2014 call 999',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: MUTED_DIM,
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              marginTop: '4rem',
              textAlign: 'center' as const,
              padding: '3.5rem 2rem',
              background:
                'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: '1rem',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: GOLD,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                marginBottom: '1rem',
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em',
              }}
            >
              You deserve to sleep.
            </h2>
            <p
              style={{
                color: MUTED,
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '32rem',
                margin: '0 auto 2rem',
              }}
            >
              MEOK is a sovereign AI companion that is available at 3am, remembers your patterns,
              and never has an agenda except your wellbeing. No engagement loops. No blue light
              traps. Just a calm presence that helps you find your way back to rest.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: '#0d0c18',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '0.875rem 2.25rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Meet MEOK &rarr;
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: MUTED_FAINT }}>
              Built by Nicholas Templeman &middot; MEOK AI LABS &middot; @meok_ai
            </p>
          </div>

          {/* ── RELATED POSTS ── */}
          <div style={{ marginTop: '4rem' }}>
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: MUTED_FAINT,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                marginBottom: '1.25rem',
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              {(
                [
                  { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety' },
                  { href: '/blog/ai-for-depression', label: 'AI for Depression' },
                  { href: '/blog/ai-for-burnout', label: 'AI for Burnout' },
                  { href: '/blog/ai-for-chronic-stress', label: 'AI for Chronic Stress' },
                  { href: '/blog/ai-companion-vs-therapist', label: 'AI Companion vs Therapist' },
                  {
                    href: '/blog/why-meok-never-trains-on-you',
                    label: 'Why MEOK Never Trains on You',
                  },
                ] as { href: string; label: string }[]
              ).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '1rem 1.25rem',
                    background: 'rgba(245,240,232,0.04)',
                    border: '1px solid rgba(245,240,232,0.09)',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    color: MUTED,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
