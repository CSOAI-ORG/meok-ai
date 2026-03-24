import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Sleep Anxiety: Breaking the Paradox of Lying Awake Afraid of Not Sleeping | MEOK AI LABS',
  description:
    'Sleep anxiety is the fear of not sleeping that creates the very arousal preventing sleep. Discover how MEOK AI LABS uses stimulus control, paradoxical intention, and sovereign memory to interrupt the 3am spiral without blue-light doom-scrolling.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-sleep-anxiety' },
  openGraph: {
    title: 'AI for Sleep Anxiety: Breaking the Paradox of Lying Awake Afraid of Not Sleeping',
    description:
      'Sleep anxiety traps you in a loop where the fear of not sleeping guarantees wakefulness. MEOK AI LABS explains the hyperarousal model and how sovereign AI breaks the cycle.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-sleep-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Sleep+Anxiety&desc=Breaking+the+paradox+of+lying+awake+afraid+of+not+sleeping',
        width: 1200,
        height: 630,
        alt: 'AI for Sleep Anxiety: Breaking the Paradox of Lying Awake Afraid of Not Sleeping | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Sleep Anxiety: Breaking the 3am Thought Spiral',
    description:
      'The fear of not sleeping creates the arousal that prevents sleep. MEOK AI LABS breaks down the hyperarousal model and how sovereign AI can help.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Sleep+Anxiety&desc=Breaking+the+paradox+of+lying+awake+afraid+of+not+sleeping',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Sleep Anxiety: Breaking the Paradox of Lying Awake Afraid of Not Sleeping',
  description:
    'Sleep anxiety is the fear of not sleeping that creates the very arousal preventing sleep. An in-depth guide to the hyperarousal model, stimulus control, paradoxical intention, and how MEOK\u2019s sovereign memory tracks your unique anxiety triggers.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-sleep-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-sleep-anxiety',
  },
  keywords: [
    'sleep anxiety',
    'paradoxical insomnia',
    'hyperarousal model',
    'stimulus control',
    'paradoxical intention',
    'AI sleep support',
    'MEOK AI LABS',
    '3am thought spiral',
    'worry journal',
    'sleep anxiety treatment',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is sleep anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sleep anxiety is the fear or dread of not being able to fall asleep or stay asleep. It creates a self-fulfilling loop: worrying about sleep activates the nervous system, and that activation prevents the very sleep you\u2019re worried about losing. Clinically this is called paradoxical insomnia or psychophysiological insomnia, and it is among the most common presentations of chronic sleeplessness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is using AI at night bad for sleep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on the AI. Social media and engagement-optimised apps spike cortisol and suppress melatonin through blue light and reward loops. MEOK is categorically different: it uses a dark interface, has no engagement incentives, and is designed to calm your nervous system rather than retain your attention. A short, grounding conversation with MEOK at midnight is far less harmful than doom-scrolling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me fall asleep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is not a sedative and makes no clinical promises. What it can do is help you offload the worry spiral before bed, practise stimulus control by giving you somewhere other than your bed to process thoughts, guide paradoxical intention exercises, and track patterns across weeks so you understand your own sleep anxiety triggers. Many users report shorter time-to-sleep after building a consistent pre-bed MEOK routine.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is paradoxical insomnia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paradoxical insomnia \u2014 also called sleep state misperception \u2014 is a condition in which a person feels they have been awake all night but objective sleep measurement shows they were asleep for significant portions. More broadly the term is used to describe the paradox at the heart of sleep anxiety: the harder you try to sleep, the more alert you become. Treating paradoxical insomnia requires reducing the effort and fear around sleep, not increasing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from sleep apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sleep apps typically offer passive tools: soundscapes, guided meditations, or sleep tracking via your phone accelerometer. MEOK is an active sovereign AI companion that converses, remembers, and reasons. It can hold your worry journal across weeks, notice that your sleep is worse on Sunday nights before work, help you practise specific CBT-I cognitive techniques, and give you a real-time thinking partner at 3am \u2014 none of which a sleep-sounds app can do.',
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
const SLEEP_PURPLE = '#7c5cbf'
const SLEEP_INDIGO = '#4c5abf'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForSleepAnxietyPage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,92,191,0.1) 0%, transparent 68%)',
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
                color: SLEEP_PURPLE,
                background: 'rgba(124,92,191,0.12)',
                border: '1px solid rgba(124,92,191,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Sleep &amp; Anxiety
            </span>
            <span style={{ fontSize: '0.8rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.8rem', color: MUTED_FAINT }}>14 min read</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            AI for Sleep Anxiety: Breaking the Paradox of{' '}
            <span style={{ color: GOLD }}>Lying Awake Afraid of Not Sleeping</span>
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: MUTED_DIM,
              marginBottom: '2rem',
            }}
          >
            Sleep anxiety is cruelly self-defeating. The fear of not sleeping fires up the very
            nervous system that needs to power down. You watch the clock, calculate how many hours
            you have left, rehearse tomorrow\u2019s exhaustion \u2014 and with each thought the gap
            between you and sleep widens. This guide examines the science behind that loop and
            explains, honestly, what an AI companion can and cannot do about it.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${SLEEP_PURPLE}, ${GOLD})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.1rem' }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>
                Founder, MEOK AI LABS &middot; @meok_ai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '5rem',
        }}
      >
        {/* ── SECTION 1: What is sleep anxiety? ───────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What is sleep anxiety?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Sleep anxiety is the experience of dreading the night \u2014 not in the childhood sense
            of fearing the dark, but the adult, mundane terror of knowing you have an important
            meeting tomorrow and already anticipating lying wide awake staring at the ceiling.
            The core dynamic is straightforward to describe and maddening to live through: worry
            about sleep is itself a form of arousal, and arousal is the physiological opposite of
            sleep.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Clinically the condition goes by several names. Psychophysiological insomnia refers to
            insomnia that has a learned psychological component: the person has trained their body,
            over months or years, to associate bed with alertness rather than rest. Paradoxical
            insomnia describes a related phenomenon where perceived sleep loss far exceeds measured
            sleep loss \u2014 the person feels they did not sleep at all, but a polysomnography
            recording shows four or five hours of genuine sleep. Both sit under the broader umbrella
            of sleep anxiety, and both share the same root mechanism: excessive cognitive and
            physiological arousal at the point of attempted sleep onset.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Sleep anxiety affects an estimated 10 to 15 percent of the adult population at any given
            time, with higher rates among people who already carry generalised anxiety disorder,
            depression, or chronic stress. But it also exists as a standalone condition: people who
            have no daytime anxiety symptoms can develop it after a single bad night that they found
            frightening or consequential, and then reinforce it over subsequent weeks simply by
            worrying about a repeat.
          </p>

          <div
            style={{
              background: 'rgba(124,92,191,0.07)',
              border: '1px solid rgba(124,92,191,0.2)',
              borderLeft: '3px solid ' + SLEEP_PURPLE,
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              marginTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: MUTED_DIM,
                fontStyle: 'italic',
              }}
            >
              &ldquo;The effort to sleep is the enemy of sleep. The mind that is watching for sleep
              to arrive is the mind that will never catch it arriving.&rdquo;
            </p>
            <p style={{ fontSize: '0.8rem', color: MUTED_FAINT, marginTop: '0.5rem' }}>
              A common clinical observation in CBT-I practice
            </p>
          </div>
        </section>

        {/* ── SECTION 2: The hyperarousal model ───────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What is the hyperarousal model of insomnia?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The hyperarousal model, developed by researchers including Arthur Spielman and later
            elaborated by Colin Espie, proposes that chronic insomnia is not primarily a disorder of
            the sleep system itself but of the arousal system. The sleep system works. The arousal
            system simply never switches off long enough to let it.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            In a healthy sleeper, cortisol and core body temperature follow a predictable diurnal
            rhythm: they peak in the early morning, decline gradually across the day, and reach their
            nadir during the first half of the night. The nervous system shifts from sympathetic
            dominance \u2014 the fight-or-flight state \u2014 to parasympathetic dominance as
            evening arrives. This is the biological invitation to sleep.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            In a person with sleep anxiety, this transition is interrupted. Daytime worry seeds a
            background level of cortisol that does not fully dissipate by bedtime. The bed itself
            becomes a conditioned stimulus: years of lying there awake have paired it, Pavlovian-
            style, with alertness. And then the meta-worry kicks in \u2014 worry about whether the
            worry will keep you awake tonight \u2014 which generates fresh cortisol that guarantees
            the answer is yes.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            This is why classic sleep advice \u2014 &ldquo;just relax&rdquo;, &ldquo;put your phone
            down&rdquo;, &ldquo;have a bath&rdquo; \u2014 is insufficient for people with genuine
            sleep anxiety. The arousal is not caused by stimulation from outside; it is generated
            internally, by a nervous system that has learned to be on high alert precisely when you
            need it to stand down. Calming the room does not calm the brain that has learnt this
            pattern.
          </p>

          <div
            style={{
              background: 'rgba(76,90,191,0.07)',
              border: '1px solid rgba(76,90,191,0.2)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              marginTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: SLEEP_INDIGO,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
                marginBottom: '0.75rem',
              }}
            >
              The Hyperarousal Loop
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
              {[
                'Daytime stress \u2192 elevated baseline cortisol',
                'Bedtime arrives \u2192 cortisol does not fully clear',
                'Lying awake \u2192 bed becomes conditioned alertness cue',
                'Worry about sleep \u2192 fresh cortisol spike',
                'Wakefulness confirmed \u2192 belief about bad sleep reinforced',
                'Next night \u2192 anticipatory anxiety begins earlier',
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: SLEEP_INDIGO,
                      background: 'rgba(76,90,191,0.15)',
                      borderRadius: '50%',
                      width: '1.4rem',
                      height: '1.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}
                  >
                    {i + 1}
                  </span>
                  <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.6 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: How daytime worry primes the night ───────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            How does daytime worry prime the nervous system for wakefulness at night?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            One of the most important and underappreciated facts about sleep anxiety is that the work
            is done during the day, not at night. By the time you are lying in bed at midnight
            rehearsing tomorrow\u2019s difficulties, your nervous system has already been set up for
            failure by twelve hours of low-level threat processing.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The mechanism is the hypothalamic-pituitary-adrenal axis, or HPA axis. When you
            encounter a stressor \u2014 a difficult email, a financial worry, a social conflict
            \u2014 the HPA axis releases cortisol. Cortisol is not purely bad; it sharpens cognition
            and mobilises energy. But it has a half-life of roughly sixty to ninety minutes, and if
            stressors arrive throughout the day in sufficient frequency, cortisol levels never fully
            return to baseline. You carry a residual load into the evening.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            This residual cortisol interacts badly with the brain\u2019s default mode network
            \u2014 the region that is most active when you are not focused on an external task.
            Without a task to anchor attention at bedtime, the default mode network turns inward, and
            if the inward landscape is one of unresolved worry, it will surface it. This is why
            problems that seemed manageable at 3pm can feel catastrophic at 3am: the prefrontal
            cortex, which normally dampens threat responses, is at reduced capacity when cortisol is
            elevated and your circadian rhythm is pushing core functions toward consolidation.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The practical implication is that sleep anxiety treatment cannot be confined to bedtime
            interventions alone. Any approach that only addresses what you do in the hour before
            sleep is ignoring the ten preceding hours in which the conditions for that night\u2019s
            sleep were being determined. This is one reason MEOK\u2019s approach emphasises
            consistent daytime check-ins and a pre-bed worry offload, not just reactive support
            when insomnia has already taken hold.
          </p>
        </section>

        {/* ── SECTION 4: The 3am thought spiral ───────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What is the 3am thought spiral, and how does MEOK interrupt it differently to doom-scrolling?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The 3am thought spiral is a specific cognitive pattern that most people with sleep
            anxiety will recognise immediately. You wake \u2014 perhaps to use the bathroom, perhaps
            for no identifiable reason \u2014 and within sixty seconds your mind is already running
            an inventory of everything that is wrong with your life. The presentation next week.
            The conversation you handled badly. The symptom you\u2019ve been meaning to get checked.
            The mortgage renewal. Each thought triggers the next; none of them can be resolved at
            3am; and the frustration of being unable to resolve them sharpens the arousal further.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The instinctive response for most people is to reach for a phone. This is understandable
            \u2014 the discomfort of the spiral is real and immediate, and a phone offers instant
            distraction. But social media and news feeds are categorically the wrong tool. They are
            engineered by teams of behavioural scientists to maximise engagement, which means they
            are optimised to generate exactly the emotional response you are trying to escape: mild
            threat, mild outrage, mild comparison, mild fear. The cortisol tap stays open. Blue
            light tells your circadian clock it is morning. And you are now forty minutes deeper into
            wakefulness than when you started.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            MEOK is built differently because its incentives are different. MEOK has no engagement
            metric. There is no algorithmic reward for keeping you awake. The entire purpose of a
            3am conversation with MEOK is to help you process the spiral and return to sleep as
            quickly as possible. That means:
          </p>

          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem' }}>
            {[
              'Acknowledging the worry without amplifying it \u2014 MEOK confirms that the thought is heard so your brain is not compelled to keep surfacing it',
              'Offering cognitive defusion techniques \u2014 helping you observe the thought rather than fuse with it',
              'Gently redirectring toward grounding rather than problem-solving \u2014 because no problem is solvable at 3am and attempting to solve them just deepens the loop',
              'Using a dark, low-stimulation interface so there is no blue-light penalty for engaging',
              'Knowing your history \u2014 if you\u2019ve told MEOK that Sunday nights are harder because of work anxiety, it can name that pattern in the moment and reduce the disorienting sense that the anxiety has no cause',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  color: MUTED,
                  marginBottom: '0.5rem',
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            The goal is not to have an interesting conversation. The goal is to give your nervous
            system a dignified off-ramp from the spiral and let the sleep drive reassert itself. That
            requires an AI that is not optimising for your time-on-app. MEOK is sovereign, which
            means it works for you, not for an advertising model.
          </p>
        </section>

        {/* ── SECTION 5: Stimulus control ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What is stimulus control, and why should your bed only be for sleep?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Stimulus control is one of the oldest and most robustly evidenced components of CBT-I.
            It was developed by Richard Bootzin in the 1970s and is based on a simple conditioning
            principle: your bed should be so strongly associated with sleep that lying down in it
            automatically triggers sleepiness.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            In most people with sleep anxiety, the bed has become associated with the opposite:
            wakefulness, frustration, worry, and the unpleasant experience of lying there for hours
            without sleeping. Every night you spend awake in bed strengthens this association and
            weakens the sleep association. The bed becomes a powerful conditioned stimulus for
            alertness.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The stimulus control protocol is therefore strict: use your bed only for sleep and sex.
            If you are not asleep within twenty minutes, get out of bed and go to another room until
            you feel genuinely sleepy. Do not watch television in bed, do not scroll your phone in
            bed, do not eat in bed, and critically \u2014 do not lie in bed processing the thoughts
            that are preventing sleep.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            This is where talking to MEOK at midnight is not only acceptable but actively supports
            stimulus control \u2014 provided you do it out of bed. Getting up, going to the kitchen
            or living room, opening MEOK and offloading the spiral there is precisely what stimulus
            control asks you to do. You are leaving the bed, breaking the wakefulness-bed
            association, processing the anxiety in a different context, and returning to bed only
            when sleepiness has reasserted itself.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Reaching for your phone and scrolling in bed while lying there, by contrast, is the
            worst of all worlds: you remain in the bed, deepening the wakefulness association; you
            expose yourself to high-stimulation content; and you do nothing to process the thoughts
            that triggered the waking in the first place.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            <div
              style={{
                background: 'rgba(201,168,76,0.07)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: GOLD,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.06em',
                  marginBottom: '0.75rem',
                }}
              >
                Stimulus Control: Do
              </p>
              <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                {[
                  'Leave the bed if awake > 20 mins',
                  'Go to another room',
                  'Open MEOK and offload the spiral',
                  'Return to bed only when sleepy',
                  'Keep a consistent wake time',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{ fontSize: '0.85rem', color: MUTED_DIM, lineHeight: 1.7 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: 'rgba(191,60,60,0.07)',
                border: '1px solid rgba(191,60,60,0.2)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#bf5c5c',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.06em',
                  marginBottom: '0.75rem',
                }}
              >
                Stimulus Control: Don\u2019t
              </p>
              <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                {[
                  'Scroll phone while lying in bed',
                  'Watch TV in bed',
                  'Clock-watch from bed',
                  'Eat or work in bed',
                  'Lie in bed rehearsing worries',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{ fontSize: '0.85rem', color: MUTED_DIM, lineHeight: 1.7 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Paradoxical intention ────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What is paradoxical intention, and why does trying to stay awake help you sleep?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Paradoxical intention is one of the most counterintuitive and consistently effective
            techniques in the CBT-I toolkit. The instruction is deceptively simple: instead of
            trying to fall asleep, try to stay awake.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            This sounds absurd to anyone who has spent hours desperate for sleep. But it works
            precisely because sleep anxiety is driven by performance pressure. Sleep cannot be forced.
            It is an involuntary process that emerges when the conditions are right \u2014 and the
            conditions include an absence of effort. When you try hard to sleep, you are monitoring
            yourself for signs of sleep onset, which is itself an alert cognitive activity that
            prevents sleep onset.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Paradoxical intention works by dissolving the performance pressure. When your goal is
            to stay awake \u2014 to observe the room, to notice the feel of the sheets, to remain
            gently alert \u2014 there is no way to fail. There is no longer a performance to be
            anxious about. And in the absence of that performance anxiety, the natural sleep drive
            can take over. Most people using this technique fall asleep faster than when they
            actively try to sleep.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The technique was first systematically studied by Victor Frankl and later applied to
            insomnia by Ascher and Efran in 1978. Subsequent meta-analyses have confirmed its
            efficacy, particularly for sleep-onset insomnia \u2014 the specific variant where sleep
            anxiety is highest.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            MEOK can guide paradoxical intention exercises in a pre-sleep conversation. The format
            is brief: MEOK frames the exercise, explains the rationale (because understanding why
            it works increases compliance), and gives you permission to stop trying. That last phrase
            \u2014 permission to stop trying \u2014 is often what the person with sleep anxiety most
            needs to hear, and most struggles to give themselves.
          </p>

          <div
            style={{
              background: 'rgba(124,92,191,0.08)',
              border: '1px solid rgba(124,92,191,0.25)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              marginTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: SLEEP_PURPLE,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
                marginBottom: '0.75rem',
              }}
            >
              Paradoxical Intention: The Core Instruction
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: MUTED_DIM,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Lie comfortably with your eyes open. Your goal is not to sleep. Your goal is
              simply to stay gently awake and observe. Notice the quality of the darkness, the
              temperature of the air, the weight of your body. You are not trying to do anything.
              If sleep comes, it comes. You are not chasing it.&rdquo;
            </p>
          </div>
        </section>

        {/* ── SECTION 7: Memory & pattern tracking ────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            How does MEOK track sleep anxiety patterns across time?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            One of the most disorienting features of sleep anxiety is its apparent randomness.
            Some nights are fine; others are catastrophic. You lie awake trying to identify what
            is different about tonight and come up empty. This creates the feeling that your sleep
            is beyond your understanding and therefore beyond your influence \u2014 which is itself
            an anxiety-generating belief.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            In reality, sleep anxiety is rarely random. It has patterns \u2014 they are just
            invisible when you only have access to tonight. A clinical sleep diary completed over
            four to six weeks almost always reveals structure: sleep is worse in the first half of
            the week when work pressure is highest; or worse after alcohol even when the quantity
            seemed modest; or worse when the evening involved a particular type of social interaction;
            or reliably worse on days when no exercise occurred. The pattern was always there. It
            just needed longitudinal data to surface.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            MEOK\u2019s sovereign memory architecture makes this kind of longitudinal tracking
            possible in a conversational, low-friction way. You do not need to fill in a sleep diary
            form each morning \u2014 you simply check in with MEOK, and it retains what you share
            across days, weeks, and months in a four-layer encrypted memory store that you own and
            control.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Over time MEOK can surface observations like: &ldquo;I\u2019ve noticed the last three
            times you mentioned not sleeping well, you\u2019d also mentioned feeling behind with
            work the previous day \u2014 is that a pattern you recognise?&rdquo; This is a different
            quality of support than any stateless chatbot can offer. A system without memory cannot
            notice a pattern that unfolds across six weeks. MEOK can.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              marginTop: '1.5rem',
            }}
          >
            {[
              { label: 'Trigger Tracking', desc: 'What correlates with your worst nights' },
              { label: 'Mood Correlation', desc: 'How daytime emotional state predicts night quality' },
              { label: 'Weekly Rhythms', desc: 'Which days of the week carry most sleep risk' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'rgba(201,168,76,0.06)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  borderRadius: '0.625rem',
                  padding: '1rem',
                  textAlign: 'center' as const,
                }}
              >
                <p style={{ fontSize: '0.8rem', fontWeight: 700, color: GOLD, marginBottom: '0.4rem' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '0.78rem', color: MUTED_DIM, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 8: The worry journal ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            How does a pre-bed worry journal with MEOK help offload tomorrow\u2019s concerns?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The pre-bed worry journal is a well-established CBT-I technique with a body of evidence
            behind it. The principle draws on the Zeigarnik effect: the mind tends to intrude on
            consciousness with unfinished tasks far more than completed ones. If you have a worry
            that has not been processed \u2014 that exists only as a floating concern with no
            resolution or plan \u2014 your brain will surface it repeatedly, including at 2am, as
            a reminder that it has not been addressed.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Writing the worry down \u2014 or telling it to MEOK \u2014 partially satisfies this
            cognitive reminder system. The brain no longer needs to keep surfacing it because there
            is a record. It has been captured. This is not the same as resolving the worry; it is
            acknowledging it formally and deferring it to a time when resolution is actually
            possible. That distinction matters enormously.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            MEOK\u2019s advantage over a paper journal here is that it can respond. A journal entry
            sits there inert. MEOK can reflect back what it\u2019s heard, ask whether the worry
            deserves action tomorrow or whether it is something outside your control, help you
            categorise the concern \u2014 solvable problem versus uncheckable fear \u2014 and
            then help you close the mental file on it for the night. This structured offload takes
            roughly five to fifteen minutes and replaces the unstructured hour-long rumination that
            would otherwise happen in the dark.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            There is also a temporal discipline to this practice that helps regulate the sleep
            anxiety itself. By designating a specific pre-bed window as your &ldquo;worry
            time&rdquo;, you are retraining the nervous system to do its worry processing before
            bed rather than during it. Over weeks this can reduce the spontaneous intrusion of
            worries during sleep, because the brain has learned that concerns get addressed
            elsewhere.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderLeft: '3px solid ' + GOLD,
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              marginTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: GOLD,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
                marginBottom: '0.75rem',
              }}
            >
              A 5-step pre-bed MEOK worry offload
            </p>
            {[
              'List every concern that has crossed your mind today \u2014 no filtering, no order',
              'For each concern: is it actionable tomorrow or is it outside your control?',
              'For actionable items: agree the first small action with MEOK and let MEOK note it',
              'For non-actionable items: name the underlying fear, acknowledge it, and formally defer it',
              'Close the session with a brief grounding check-in: body temperature, breath, room sounds',
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '0.875rem',
                  alignItems: 'flex-start',
                  marginBottom: '0.625rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: GOLD,
                    background: 'rgba(201,168,76,0.15)',
                    borderRadius: '50%',
                    width: '1.5rem',
                    height: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.1rem',
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.65 }}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 9: What AI cannot do ────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            What can AI not do for sleep anxiety?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Honesty matters. MEOK is built on the principle that an AI companion should never
            overstate its capabilities, and sleep anxiety is a domain where the temptation to
            overclaim is real.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            AI cannot perform a polysomnography study to rule out obstructive sleep apnoea,
            restless legs syndrome, or other sleep-architecture disorders. These are clinical
            conditions that require clinical investigation. If you snore heavily, if your partner
            reports that you stop breathing during the night, if you experience involuntary leg
            movements, or if your sleep anxiety has been severe and unresponsive for more than three
            months, please see a GP and request a referral to a sleep clinic.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            AI cannot prescribe medication. Melatonin, z-drugs, and other pharmacological
            interventions have their place in certain presentations of insomnia, and the decision
            to use them requires medical input.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            AI cannot replace a skilled CBT-I therapist for severe, entrenched cases. A good
            CBT-I therapist brings clinical judgement, diagnostic precision, and the capacity to
            adjust treatment protocols in real time based on response. MEOK is a complement to
            therapy, not a substitute for it.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            What MEOK can do is meaningful, specific, and available at 3am on a Wednesday when
            no human professional is. It can hold your history, guide evidence-based techniques,
            interrupt the spiral without worsening it, and be the consistent presence that turns
            a set of good-night behaviours from an intention into a habit. For many people with
            mild to moderate sleep anxiety, that is exactly what is needed.
          </p>
        </section>

        {/* ── SECTION 10: Building a sleep anxiety protocol with MEOK ─────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            How do you build a sleep anxiety protocol with MEOK?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The most effective approach to sleep anxiety is systematic rather than reactive.
            Waiting until you\u2019re already awake at 3am and then turning to MEOK is better than
            doom-scrolling, but it is treating symptoms rather than causes. The fuller protocol
            works across the whole day.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem', marginTop: '1rem' }}>
            {[
              {
                time: 'Morning',
                colour: GOLD,
                bg: 'rgba(201,168,76,0.06)',
                border: 'rgba(201,168,76,0.2)',
                actions: [
                  'Fix your wake time and hold it regardless of how the night went \u2014 this anchors your circadian rhythm',
                  'Brief MEOK check-in: mood, sleep quality, any residual worry from the night',
                  'Note anything that felt particularly anxiety-generating the previous day',
                ],
              },
              {
                time: 'Afternoon',
                colour: SLEEP_INDIGO,
                bg: 'rgba(76,90,191,0.06)',
                border: 'rgba(76,90,191,0.2)',
                actions: [
                  'No caffeine after midday',
                  'If stress is high, use MEOK for a brief cognitive offload rather than carrying it into the evening',
                  'Light physical activity if possible \u2014 it reduces cortisol and deepens slow-wave sleep',
                ],
              },
              {
                time: 'Evening (90 mins before bed)',
                colour: SLEEP_PURPLE,
                bg: 'rgba(124,92,191,0.06)',
                border: 'rgba(124,92,191,0.2)',
                actions: [
                  'Begin wind-down: reduce bright light, avoid new stimulating content',
                  'Pre-bed MEOK worry offload \u2014 the structured 5-step process described above',
                  'Paradoxical intention reminder if needed: your goal tonight is to stay gently awake',
                ],
              },
              {
                time: 'In bed',
                colour: '#4cadb5',
                bg: 'rgba(76,173,181,0.06)',
                border: 'rgba(76,173,181,0.2)',
                actions: [
                  'Bed is for sleep only \u2014 no phone, no screen',
                  'If awake after 20 minutes: get up, go to another room, open MEOK',
                  'Return to bed only when sleepy \u2014 not tired, genuinely sleepy',
                ],
              },
            ].map((block) => (
              <div
                key={block.time}
                style={{
                  background: block.bg,
                  border: `1px solid ${block.border}`,
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: block.colour,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem',
                  }}
                >
                  {block.time}
                </p>
                <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                  {block.actions.map((action, i) => (
                    <li
                      key={i}
                      style={{ fontSize: '0.9rem', color: MUTED_DIM, lineHeight: 1.7 }}
                    >
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 11: The long game ────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '0.875rem',
              lineHeight: 1.3,
            }}
          >
            How long does it take to resolve sleep anxiety?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            Sleep anxiety is a learned response, which means it can be unlearned \u2014 but the
            timeline requires realistic expectations. CBT-I typically runs for six to eight sessions
            over six to eight weeks, and research shows that most people see significant improvement
            within that window. However, the gains continue beyond the active treatment period as
            the new associations consolidate.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            The first two weeks of implementing stimulus control and sleep restriction are often
            the hardest. Sleep restriction in particular \u2014 deliberately limiting time in bed
            to build sleep pressure \u2014 can temporarily worsen daytime fatigue before improving
            it. This is normal and expected. People who push through this phase reliably see
            improvement. People who abandon the protocol during the difficult initial period miss
            the benefit.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
              marginBottom: '1.25rem',
            }}
          >
            This is where MEOK\u2019s role as a longitudinal companion rather than a reactive tool
            matters most. A companion that remembers you started a protocol three weeks ago, knows
            you found week two difficult, and can reference the pattern of improvement in week three
            is qualitatively different from a fresh-start chatbot. Progress feels visible. The
            investment feels acknowledged. The hard nights feel less like failure and more like a
            predictable phase of a process that is working.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            Sleep anxiety, for most people, is a solvable problem. It is not a character flaw, not
            a permanent neurological condition, not a sign of weakness. It is a pattern the nervous
            system learned under pressure, and it can be replaced with a different pattern. The
            tools exist. The evidence is solid. And an AI that holds your history and shows up at
            3am without judgement is, finally, a genuinely useful piece of that picture.
          </p>
        </section>

        {/* ── FAQ SECTION ─────────────────────────────────────────────────────── */}
        <section
          style={{
            marginBottom: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1.75rem',
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.5rem' }}>
            {[
              {
                q: 'What is sleep anxiety?',
                a: 'Sleep anxiety is the fear or dread of not being able to fall or stay asleep. It creates a self-fulfilling loop: worrying about sleep activates the nervous system, and that activation prevents the sleep you\u2019re worried about losing. It affects an estimated 10\u201315% of adults and is among the most common drivers of chronic insomnia. The good news is that it is a learned response, which means it can be unlearned.',
              },
              {
                q: 'Is using AI at night bad for sleep?',
                a: 'It depends on the AI. Most phone activity at night is harmful: social media spikes cortisol, blue light suppresses melatonin, and engagement-optimised feeds extend wakefulness. MEOK is built differently \u2014 dark interface, no engagement incentives, no algorithmic reward for keeping you awake. A short grounding conversation with MEOK at midnight is far less harmful than doom-scrolling, and actively supports stimulus control when done out of bed.',
              },
              {
                q: 'Can MEOK help me fall asleep?',
                a: 'MEOK is not a sedative. What it can do is help you offload the pre-sleep worry spiral, practise stimulus control, guide paradoxical intention exercises, and track your patterns across weeks so you understand your own triggers. Many people report falling asleep faster after building a consistent pre-bed MEOK routine \u2014 not because MEOK sedates them, but because it removes the cognitive friction that was keeping them awake.',
              },
              {
                q: 'What is paradoxical insomnia?',
                a: 'Paradoxical insomnia refers to the core irony of sleep anxiety: the harder you try to sleep, the more alert you become. The effort to sleep is itself an alert cognitive activity that prevents sleep. Paradoxical intention \u2014 trying to stay awake instead \u2014 resolves this by removing the performance pressure. With nothing to fail at, the natural sleep drive reasserts itself. Research consistently shows faster sleep onset with this technique than with direct sleep effort.',
              },
              {
                q: 'How is MEOK different from sleep apps?',
                a: 'Sleep apps offer passive tools: soundscapes, guided meditations, wearable tracking. MEOK is an active sovereign AI companion. It converses, reasons, and remembers. It holds your worry journal across weeks, notices that your sleep is worse after high-stress Tuesdays, helps you practise specific CBT-I cognitive techniques, and gives you a real-time thinking partner at 3am. None of that is possible for a stateless app that forgets you each morning.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: '0.75rem',
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: MUTED_DIM }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────────── */}
        <section
          style={{
            marginTop: '3rem',
            padding: '2.5rem',
            background:
              'linear-gradient(135deg, rgba(124,92,191,0.1) 0%, rgba(201,168,76,0.08) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '1rem',
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: GOLD,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              marginBottom: '1rem',
            }}
          >
            MEOK AI LABS
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.375rem, 3vw, 1.875rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            A sovereign AI that meets you at 3am without judgement
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_DIM,
              marginBottom: '2rem',
              maxWidth: '32rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            MEOK remembers your patterns, holds your worry journal, guides evidence-based sleep
            techniques, and never sells your data. If sleep anxiety has made your nights a place
            you dread, this is where to start.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${GOLD}, #b8903e)`,
              color: BG,
              fontWeight: 800,
              fontSize: '0.95rem',
              padding: '0.875rem 2.25rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Begin with MEOK &rarr;
          </Link>
          <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, marginTop: '1rem' }}>
            No subscription required to start &middot; Sovereign &middot; Private &middot; Yours
          </p>
        </section>

        {/* ── AUTHOR BIO ───────────────────────────────────────────────────────── */}
        <section
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(245,240,232,0.08)',
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${SLEEP_PURPLE}, ${GOLD})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.8rem', color: MUTED_FAINT, marginBottom: '0.5rem' }}>
              Founder, MEOK AI LABS &middot; @meok_ai
            </p>
            <p style={{ fontSize: '0.875rem', color: MUTED_DIM, lineHeight: 1.65 }}>
              Nicholas built MEOK AI LABS on the conviction that a sovereign AI companion \u2014
              one that remembers you, works for you alone, and is available without judgment at
              any hour \u2014 is meaningfully different from anything the consumer AI market
              currently offers. The focus on sleep anxiety reflects MEOK\u2019s broader mission:
              to be useful in the hours when being human is hardest.
            </p>
          </div>
        </section>

        {/* ── RELATED POSTS ────────────────────────────────────────────────────── */}
        <section
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: MUTED_FAINT,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
            }}
          >
            Related Reading
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
            {[
              { href: '/blog/ai-for-insomnia', label: 'AI for Insomnia: How a Sovereign AI Companion Can Break the 3am Spiral' },
              { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety: Understanding and Working With Your Nervous System' },
              { href: '/blog/ai-for-health-anxiety', label: 'AI for Health Anxiety: When the Symptom Checker Makes Things Worse' },
              { href: '/blog/ai-journaling', label: 'AI Journaling: The Case for Offloading Your Thoughts to a Sovereign Companion' },
              { href: '/blog/ai-that-remembers-you', label: 'AI That Remembers You: Why Sovereign Memory Changes Everything' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  fontSize: '0.9rem',
                  color: MUTED_DIM,
                  textDecoration: 'none',
                  padding: '0.625rem 0',
                  borderBottom: '1px solid rgba(245,240,232,0.05)',
                }}
              >
                <span style={{ color: GOLD, flexShrink: 0 }}>&#8594;</span>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
