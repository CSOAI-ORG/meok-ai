import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Athletes: Mental Performance Support Beyond the Physical Game | MEOK AI LABS',
  description:
    'Elite and amateur athletes know the body follows the mind. MEOK\u2019s sovereign AI helps athletes with mental performance, injury recovery mindset, competitive anxiety, and the identity crisis that comes when sport ends.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-athletes' },
  openGraph: {
    title: 'AI for Athletes: Mental Performance Support Beyond the Physical Game',
    description:
      'Visualisation, performance anxiety, injury recovery, overtraining, and retirement identity loss \u2014 how MEOK supports the mental side of sport for elite and amateur athletes alike.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-athletes',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Athletes%3A+Mental+Performance+Support+Beyond+the+Physical+Game&desc=Sovereign+AI+for+visualisation%2C+anxiety%2C+injury+recovery+%26+sport+retirement',
        width: 1200,
        height: 630,
        alt: 'AI for Athletes: Mental Performance Support Beyond the Physical Game | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Athletes: Mental Performance Support Beyond the Physical Game',
    description:
      'The mental game is where championships are won and lost. MEOK remembers your training patterns, holds you accountable, and never just tells you what you want to hear.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Athletes%3A+Mental+Performance+Support+Beyond+the+Physical+Game&desc=Sovereign+AI+for+visualisation%2C+anxiety%2C+injury+recovery+%26+sport+retirement',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Athletes: Mental Performance Support Beyond the Physical Game',
  description:
    'Elite and amateur athletes know the body follows the mind. MEOK\u2019s sovereign AI helps athletes with mental performance, injury recovery mindset, competitive anxiety, and the identity crisis that comes when sport ends.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-athletes',
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
    '@id': 'https://meok.ai/blog/ai-for-athletes',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with sports psychology and mental performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot replace a qualified sports psychologist, but it can provide daily mental performance support that most athletes never get access to. Structured reflection on pre-competition mindset, consistent visualisation prompting, self-talk pattern tracking, and honest feedback on decision-making are all practical use cases. MEOK\u2019s Sovereign Memory means your mental performance work accumulates over weeks and months rather than being lost between sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between performance anxiety and choking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Performance anxiety is the pre-competition or in-competition arousal state that can either enhance or impair performance. Choking is a specific failure mode where well-practised skills deteriorate under pressure, typically because conscious attention is applied to processes that are better run automatically. Anxiety does not always lead to choking, but unmanaged anxiety increases the risk. Understanding your own anxiety signature \u2014 where it sits in the body, when it peaks, what thoughts accompany it \u2014 is the first step toward working with it rather than against it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you maintain identity after retiring from sport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Athletic retirement is one of the most significant identity transitions a person can face, and it is often underestimated by athletes themselves until they are in it. When your sport has been the primary organiser of your time, social life, sense of purpose, and self-worth for years or decades, its absence creates a genuine identity vacuum. The research is clear that athletes who have cultivated a broader sense of self \u2014 roles, relationships, and interests outside sport \u2014 transition more successfully. Therapy and structured reflection are both evidence-based supports.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the warning signs of overtraining syndrome?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overtraining syndrome (OTS) is a neuroendocrine condition caused by accumulated training stress without adequate recovery. Warning signs include persistent fatigue that does not resolve with rest, declining performance despite consistent training, mood disturbances (particularly irritability and low motivation), sleep disruption, increased injury susceptibility, and loss of enjoyment in the sport. OTS is distinct from normal training fatigue and requires a period of enforced relative rest to resolve. See a sports medicine physician for formal assessment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI help with the psychological side of injury recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The psychological response to injury follows a grief-like pattern for many athletes: denial, anger, bargaining, depression, and eventual acceptance and refocus. AI companions can support this process by providing a consistent, non-judgmental space to process frustration and fear during rehabilitation, tracking mood alongside physical milestones, flagging when psychological distress is persistently elevated (a risk factor for re-injury), and maintaining a sense of forward momentum when progress feels invisible. MEOK does not offer medical advice but holds the mental context that clinical teams often do not have time for.',
      },
    },
  ],
}

// ── Colour constants ───────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.62)'
const MUTED_DIM = 'rgba(245,240,232,0.5)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const MUTED_BRIGHT = 'rgba(245,240,232,0.82)'
const PIONEER_BLUE = '#4c8faf'
const BORDER_FAINT = 'rgba(245,240,232,0.08)'
const BORDER_DIM = 'rgba(245,240,232,0.12)'
const GOLD_BG = 'rgba(201,168,76,0.08)'
const GOLD_BORDER = 'rgba(201,168,76,0.22)'
const BLUE_BG = 'rgba(76,143,175,0.07)'
const BLUE_BORDER = 'rgba(76,143,175,0.25)'
const RED_BG = 'rgba(175,76,76,0.07)'
const RED_BORDER = 'rgba(175,76,76,0.25)'
const RED_ACCENT = '#af4c4c'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForAthletesPage() {
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
          paddingBottom: '4rem',
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
              'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
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
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Mental Performance &amp; Sport
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 25, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>15 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.9rem)',
              color: '#fff',
              lineHeight: 1.13,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            AI for Athletes: Mental Performance Support Beyond the Physical Game
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
            Every elite athlete knows the body follows the mind. Pre-competition rituals, visualisation
            sessions, self-talk rewiring, recovery mindset after injury, the hollow feeling when sport
            ends &mdash; none of it gets the infrastructure it deserves. A sovereign AI companion that
            remembers your patterns across months, holds you accountable without flattery, and is
            available at 10pm when the fear peaks is not a luxury. It is the mental coaching most
            athletes have never had.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
              }}
            >
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  color: BG,
                  flexShrink: 0,
                }}
              >
                NT
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.8125rem', color: TEXT, margin: 0 }}>
                  Nicholas Templeman
                </p>
                <p style={{ fontSize: '0.72rem', color: MUTED_FAINT, margin: 0 }}>
                  Founder, MEOK AI LABS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

        {/* Disclaimer */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: BLUE_BG,
            border: `1px solid ${BLUE_BORDER}`,
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              background: PIONEER_BLUE,
              flexShrink: 0,
            }}
          />
          <p style={{ fontSize: '0.85rem', color: MUTED_DIM, lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: MUTED_BRIGHT }}>Not a substitute for professional support.</strong>{' '}
            This article covers the psychological dimensions of sport and athletic performance. It does
            not constitute medical, psychiatric, or clinical sports psychology advice. If you are
            experiencing significant mental health difficulties, please speak to a GP, sport
            psychologist, or contact the{' '}
            <strong style={{ color: MUTED_BRIGHT }}>Sport Mental Health Charter</strong> resources
            available through your national governing body.
          </p>
        </div>

        {/* Section 1 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          What is sports psychology, and why do most athletes never access it?
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Sports psychology is the scientific study and practical application of psychological
          principles to sport and exercise performance. Its core tools include visualisation and
          mental rehearsal, self-talk restructuring, arousal regulation, attention and concentration
          training, goal-setting frameworks, and building pre-performance routines that stabilise
          the mind under pressure.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          The evidence base is substantial. Olympic programmes worldwide employ full-time sport
          psychologists. Research consistently shows that athletes who engage in structured mental
          skills training outperform equally-matched competitors who do not. Visualisation studies
          demonstrate measurable physiological activation in motor cortex pathways during mental
          rehearsal &mdash; your brain rehearses the movement even when your body is still.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          And yet the vast majority of athletes at every level below elite national programme never
          access it. The reasons are familiar: cost, availability, stigma (asking for mental help
          in sport still carries a cultural freight in many disciplines), and the sheer scarcity of
          qualified practitioners relative to the number of athletes who would benefit. A county-level
          swimmer, a club rugby player, a masters runner returning after injury &mdash; these athletes
          compete with the same psychological demons as Olympians and have almost none of the support.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          This is the gap a sovereign AI companion can partially address: not replacing the sports
          psychologist but being present daily, holding the thread of mental performance work
          across the weeks between sessions (or in place of sessions that never happen).
        </p>

        {/* Section 2 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          Visualisation and mental rehearsal: what the science actually says
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Visualisation is often misunderstood. It is not positive thinking or wishful imagining.
          It is systematic, structured mental rehearsal of specific movements, scenarios, and
          performance outcomes &mdash; conducted in enough detail that the nervous system treats it
          as a partial substitute for physical practice. The gold standard is PETTLEP imagery
          (Physical, Environment, Task, Timing, Learning, Emotion, Perspective) &mdash; a protocol
          that makes mental rehearsal as close to real performance conditions as possible.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Effective visualisation includes all sensory modalities, not just visual: the sound of the
          crowd, the feel of the surface underfoot, the kinesthetic sensation of the movement itself,
          the emotional state you want to be in. It runs at real-time speed rather than fast-forward.
          It rehearses both successful execution and recovery from adversity &mdash; the penalty missed
          and then the immediate reset, not just the penalty scored.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          The problem most athletes encounter is consistency. Visualisation works when practised
          daily, but it requires prompting, structure, and accountability to become a genuine habit.
          A companion that asks each evening &mdash; &ldquo;Did you do your mental rehearsal today?
          What did you work on?&rdquo; &mdash; and remembers the answer provides the scaffolding
          that turns knowledge into practice.
        </p>

        {/* Section 3 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          Performance anxiety and choking under pressure: understanding your arousal signature
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Performance anxiety is not the enemy. The Yerkes-Dodson curve &mdash; the inverted-U
          relationship between arousal and performance &mdash; has been refined considerably since
          its original formulation, but the core insight holds: moderate arousal typically facilitates
          performance; too little or too much impairs it. The goal is not to eliminate pre-competition
          nerves but to understand and regulate your individual optimal arousal zone.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Choking is a distinct phenomenon. It occurs when the conscious mind over-monitors
          processes that should run automatically. The golfer who thinks about their grip at the
          moment of striking, the gymnast who becomes suddenly aware of how high they are mid-routine
          &mdash; these are classic choke scenarios. The intervention is not to tell yourself to
          relax but to redirect attention: to a specific process cue, a physical anchor, a mantra
          that occupies the conscious mind and allows automaticity to re-engage.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Self-talk is central to both anxiety regulation and choke prevention. Research by
          Antonis Hatzigeorgiadis and colleagues demonstrates that instructional self-talk
          (&ldquo;follow through&rdquo;, &ldquo;stay low&rdquo;) improves technical execution,
          while motivational self-talk (&ldquo;I can do this&rdquo;, &ldquo;stay with it&rdquo;)
          improves effort and endurance. Mapping your own negative self-talk patterns and building
          personalised replacement statements is a structured process that benefits from
          documentation and reflection over time.
        </p>

        {/* Callout: Pioneer Archetype */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderRadius: '1.25rem',
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            marginBottom: '2.5rem',
            marginTop: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: GOLD,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              marginBottom: '0.75rem',
              margin: '0 0 0.75rem 0',
            }}
          >
            MEOK Pioneer Archetype
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.4,
              marginBottom: '0.75rem',
              margin: '0 0 0.75rem 0',
            }}
          >
            The companion for accountability and momentum
          </p>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: '0.93rem', margin: 0 }}>
            The Pioneer archetype within MEOK is designed for goal-pursuit and forward momentum. For
            athletes, this means daily check-ins on training adherence, mental skills practice, and
            recovery protocols. It asks the awkward question when sessions are skipped, tracks the
            gap between stated goals and actual behaviour, and challenges rationalisations without
            being punitive. Crucially, it will not simply agree with you when your reasoning is
            poor &mdash; a feature that matters more in sport than almost any other domain, where
            motivated reasoning can override evidence with serious physical consequences.
          </p>
        </div>

        {/* Section 4 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          The mental side of injury recovery: what physios do not always have time for
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          The psychological response to significant sporting injury follows a well-documented
          pattern. Initial shock and disbelief give way to anger and frustration &mdash; at the
          body, at circumstance, sometimes at teammates and coaches who continue to perform while
          you cannot. Bargaining phases often manifest as premature return-to-play pressure, both
          internal and external. Depression and withdrawal from the sport environment are common,
          particularly when injury extends beyond several weeks. And then, with support, comes
          acceptance and refocused goal-setting.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          The problem is that this psychological journey occurs largely unwitnessed. Your physio
          is focused on the tissue. Your coach is managing the squad. Your teammates are in season.
          The athlete processes the psychological dimensions alone, or not at all. Research by
          Wiese-Bjornstal and colleagues identifies that unaddressed psychological distress during
          rehabilitation is a significant predictor of re-injury &mdash; partly because athletes
          return before they are ready, and partly because attentional disruption increases
          biomechanical error.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Mental skills remain trainable during physical rehabilitation. An injured sprinter can
          continue visualisation work on their race mechanics. An injured footballer can use the
          time to develop the tactical understanding they never had space for in-season. And the
          companion that tracks mood, frustration, fear of re-injury, and confidence levels
          across the rehabilitation arc provides something genuinely valuable: a longitudinal
          record that the athlete and their support team can learn from.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Fear of re-injury (kinesiophobia) is particularly worth naming. It is common, it is
          rational, and it significantly impairs post-injury performance if not addressed. It
          benefits from structured exposure work, cognitive restructuring, and gradual confidence
          rebuilding through successful graduated loading &mdash; all of which benefit from
          consistent documented reflection.
        </p>

        {/* Section 5 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          Overtraining, burnout in sport, and the athlete who cannot stop
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Overtraining syndrome (OTS) sits at the intersection of physiology and psychology.
          The physical markers &mdash; suppressed immune function, elevated resting heart rate,
          hormonal dysregulation, persistent muscle soreness &mdash; are well documented. Less
          discussed is the psychological profile that makes athletes vulnerable to it.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Many overtrained athletes are not reckless &mdash; they are conscientious. They follow the
          plan, then add extra sessions, then respond to missed days with double sessions, then
          interpret fatigue as weakness rather than as the physiological signal it is. The athlete
          whose self-worth is deeply entangled with training volume is particularly vulnerable.
          Rest feels like failure. Recovery is experienced as laziness. The psychological compulsion
          to train overrides the body&apos;s clear requests to stop.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Athletic burnout &mdash; as distinct from OTS but often co-occurring &mdash; is
          characterised by exhaustion, depersonalisation from the sport, and a sense of reduced
          accomplishment despite objective performance. It is increasingly recognised in youth athletes
          who have been in high-volume specialised training since early childhood, in professional
          athletes at the end of long careers, and in masters athletes who push adult bodies at
          training loads designed for younger physiology.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          An AI companion helps here in a specific and non-obvious way: it can see patterns that
          the athlete cannot. When mood scores have trended negative for six weeks, when training
          enjoyment has declined consistently while volume has climbed, when the athlete mentions
          being exhausted in session after session &mdash; a companion with Sovereign Memory
          connects these dots and reflects them back. It is harder to rationalise the pattern
          when the evidence is laid out across sixty days of conversation.
        </p>

        {/* Callout: Sovereign Memory */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderRadius: '1.25rem',
            background: BLUE_BG,
            border: `1px solid ${BLUE_BORDER}`,
            marginBottom: '2.5rem',
            marginTop: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: PIONEER_BLUE,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              margin: '0 0 0.75rem 0',
            }}
          >
            Sovereign Memory
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.4,
              margin: '0 0 0.75rem 0',
            }}
          >
            How your training patterns and mindset accumulate over time
          </p>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: '0.93rem', margin: 0 }}>
            Sovereign Memory stores every conversation on your own infrastructure &mdash; not on
            MEOK&apos;s servers, not used for model training, not accessible to third parties. For
            athletes, this means your mental performance journal, your injury recovery log, your
            pre-competition anxiety ratings, and your daily mood data belong entirely to you.
            Over weeks and months, patterns emerge that would be invisible in a weekly therapy
            session or a static training diary: the correlation between sleep quality and competitive
            anxiety, the mood dip that reliably precedes a form plateau, the mindset conditions
            under which your best performances occur. This is longitudinal sports psychology
            intelligence at a cost within reach of almost every athlete.
          </p>
        </div>

        {/* Section 6 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          Athletic retirement and identity loss: when sport ends before you are ready
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Athletic retirement is one of the most psychologically complex transitions in adult life,
          and one of the most poorly understood by those who have not experienced it. From the outside,
          retirement from professional or high-level sport looks like gain: freedom, time, the end
          of pain and pressure. From the inside, it frequently feels like bereavement.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          The structural losses are significant. Sport provides daily purpose and structure,
          a clear measure of success and failure, a social network built over years, a physical
          identity reinforced by daily training, and a public role that confers status and belonging.
          All of these disappear simultaneously at retirement, often without adequate preparation.
          The athlete who has been defined &mdash; by themselves and others &mdash; as &ldquo;the
          swimmer&rdquo; or &ldquo;the rugby player&rdquo; for twenty years must now construct an
          identity from materials they may have never developed.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Research by Stambulova and colleagues identifies two primary pathways through athletic
          retirement: those who have cultivated a broad identity including roles, relationships, and
          interests outside sport transition more successfully; those whose identity is almost entirely
          athletic face significantly higher rates of depression, substance misuse, relationship
          breakdown, and prolonged adjustment difficulty.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          The most useful intervention is dual-career development &mdash; beginning to build the
          post-sport identity while still competing. This is uncomfortable for many athletes because
          it can feel like preparing for failure, a lack of commitment to the sport. A companion
          that normalises dual-career thinking, helps articulate values and transferable strengths,
          and maps emerging post-sport interests provides meaningful support for a transition that
          affects every athlete who ever plays.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          For those already in the post-sport period and struggling, the priority is grief work
          before reconstruction. The losses deserve acknowledgment. The anger at the body that
          gave out, the coach who did not pick you, the injury that ended it prematurely &mdash;
          these feelings are legitimate and need space before the forward-looking work of
          rebuilding can begin honestly.
        </p>

        {/* Section 7 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          Team dynamics, conflict, and the psychology of performing alongside other people
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Team sport introduces a psychological layer that individual athletes do not face:
          the performance of interpersonal relationships under pressure. Cohesion research is
          clear that social cohesion (liking your teammates) and task cohesion (trusting their
          competence and commitment) both predict performance, but they operate through different
          mechanisms and can diverge significantly under stress.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Role conflict is one of the most common and underaddressed sources of psychological
          distress in team sport. When an athlete&apos;s perceived role and their actual role
          diverge &mdash; when the player who trained as a striker is asked to play defensive
          midfielder, or the senior player who expects leadership is passed over for the captaincy
          &mdash; the resulting resentment, if unprocessed, corrodes both individual performance
          and team climate.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Communication breakdowns in teams often compound because athletes and coaches both lack
          private space to process frustrations before they harden into grievances. A companion
          provides that private processing space: somewhere to articulate the frustration before
          acting on it, to test whether the perception is accurate or distorted, and to prepare
          for a difficult conversation rather than having it reactively.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Competitive jealousy within teams &mdash; particularly when a teammate&apos;s form rises
          while yours falls &mdash; is almost universal and almost never discussed. The cultural
          norm in sport is to suppress it. Suppression does not eliminate the emotion; it drives
          it underground where it influences behaviour covertly. Processing jealousy honestly,
          acknowledging it as information about what you value and where your sense of security
          sits, is more productive than pretending it does not exist.
        </p>

        {/* Comparison Table */}
        <div style={{ marginBottom: '2.5rem', marginTop: '3rem' }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '1.5rem',
              letterSpacing: '-0.015em',
            }}
          >
            Amateur vs elite athlete mental performance needs: where they differ
          </h2>
          <div style={{ overflowX: 'auto' as const }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse' as const,
                fontSize: '0.875rem',
                color: MUTED,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left' as const,
                      padding: '0.75rem 1rem',
                      borderBottom: `1px solid ${BORDER_DIM}`,
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase' as const,
                      whiteSpace: 'nowrap' as const,
                    }}
                  >
                    Area
                  </th>
                  <th
                    style={{
                      textAlign: 'left' as const,
                      padding: '0.75rem 1rem',
                      borderBottom: `1px solid ${BORDER_DIM}`,
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase' as const,
                      whiteSpace: 'nowrap' as const,
                    }}
                  >
                    Amateur Athlete
                  </th>
                  <th
                    style={{
                      textAlign: 'left' as const,
                      padding: '0.75rem 1rem',
                      borderBottom: `1px solid ${BORDER_DIM}`,
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase' as const,
                      whiteSpace: 'nowrap' as const,
                    }}
                  >
                    Elite Athlete
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    area: 'Access to support',
                    amateur: 'Almost none — self-funded and self-directed',
                    elite: 'Programme-funded but still limited between sessions',
                  },
                  {
                    area: 'Primary stressor',
                    amateur: 'Balancing sport with work, family, finances',
                    elite: 'Performance pressure, selection, media, contract security',
                  },
                  {
                    area: 'Identity entanglement',
                    amateur: 'Moderate — sport is one of several identity pillars',
                    elite: 'Extreme — often the sole or dominant identity marker',
                  },
                  {
                    area: 'Injury stakes',
                    amateur: 'Lifestyle disruption, loss of valued outlet',
                    elite: 'Career-ending potential, financial consequences',
                  },
                  {
                    area: 'Overtraining risk',
                    amateur: 'Rising — amateur culture increasingly mimics elite volume',
                    elite: 'Managed by support staff, but culture still rewards excess',
                  },
                  {
                    area: 'Retirement',
                    amateur: 'Often gradual, less acute identity crisis',
                    elite: 'Abrupt, often involuntary, high psychological risk',
                  },
                  {
                    area: 'Mental skills practice',
                    amateur: 'Rarely structured or consistent',
                    elite: 'Structured but often programme-led rather than athlete-owned',
                  },
                  {
                    area: 'Benefit from AI companion',
                    amateur: 'High — fills a support vacuum that currently exists',
                    elite: 'High — provides private space outside formal support system',
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? 'rgba(245,240,232,0.015)' : 'transparent',
                    }}
                  >
                    <td
                      style={{
                        padding: '0.875rem 1rem',
                        borderBottom: `1px solid ${BORDER_FAINT}`,
                        color: MUTED_BRIGHT,
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        verticalAlign: 'top' as const,
                      }}
                    >
                      {row.area}
                    </td>
                    <td
                      style={{
                        padding: '0.875rem 1rem',
                        borderBottom: `1px solid ${BORDER_FAINT}`,
                        lineHeight: 1.6,
                        verticalAlign: 'top' as const,
                      }}
                    >
                      {row.amateur}
                    </td>
                    <td
                      style={{
                        padding: '0.875rem 1rem',
                        borderBottom: `1px solid ${BORDER_FAINT}`,
                        lineHeight: 1.6,
                        verticalAlign: 'top' as const,
                      }}
                    >
                      {row.elite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 8 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          Why an AI that tells you what you want to hear is dangerous in sport
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Sport is a domain where motivated reasoning has real physical consequences. The athlete
          who convinces themselves they are fine to compete on a partially healed hamstring risks
          a complete tear. The overtrained athlete who rationalises one more hard week risks months
          of forced rest. The competitor who dismisses a pattern of underperformance as bad luck
          misses the tactical adjustment that could turn the season around. In each case, the
          instinct is to seek validation rather than honest assessment.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Sycophancy in AI &mdash; the tendency to agree with the user, validate their existing
          beliefs, and avoid uncomfortable truths &mdash; is particularly harmful in this context.
          An AI companion that tells the injured athlete &ldquo;you know your body best&rdquo;
          when they are clearly minimising a significant injury, or that agrees the coach is
          wrong when the athlete just had a bad session, is not a supportive companion. It is a
          liability.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          MEOK&apos;s Byzantine Council architecture addresses this directly. Forty-three AI agents
          must reach consensus before a response is generated. This structural approach to response
          generation means that sycophantic outputs &mdash; which might emerge from any single
          model responding to social pressure signals in the conversation &mdash; are harder to
          sustain when the full council must endorse them. When sixteen agents flag a rationalisation
          as motivated reasoning, the consensus shifts toward honest reflection rather than
          comfortable agreement.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          This is not about being harsh. The companion that cares about an athlete&apos;s long-term
          wellbeing will sometimes hold a mirror to their rationalisation, not because it enjoys
          the discomfort but because the athlete deserves a thinking partner who respects their
          capacity for honest self-assessment more than their momentary preference for validation.
        </p>

        {/* Callout: Sycophancy Detection */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderRadius: '1.25rem',
            background: RED_BG,
            border: `1px solid ${RED_BORDER}`,
            marginBottom: '2.5rem',
            marginTop: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: RED_ACCENT,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              margin: '0 0 0.75rem 0',
            }}
          >
            Anti-Sycophancy Architecture
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.4,
              margin: '0 0 0.75rem 0',
            }}
          >
            The companion that will not just agree with you
          </p>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: '0.93rem', margin: 0 }}>
            Most AI systems are optimised for user satisfaction scores, which creates a systematic
            bias toward agreement and validation. MEOK&apos;s 43-agent Byzantine Council is designed
            to detect and override this tendency. When an athlete submits a justification for a
            decision that contradicts prior stated values or evidence in their own memory record,
            the council flags the inconsistency. The response you receive reflects honest consensus
            rather than the output most likely to make you feel good in the short term. For athletes
            making decisions with real physical stakes, this matters enormously.
          </p>
        </div>

        {/* Section 9 */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '1rem',
            marginTop: '3rem',
            letterSpacing: '-0.015em',
          }}
        >
          What MEOK can and cannot do for athlete mental health
        </h2>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          Honest boundaries matter here. MEOK is not a clinical sports psychologist, not a
          physiotherapist, not a psychiatrist. It cannot diagnose overtraining syndrome, assess
          the severity of an injury, or provide formal psychological assessment. If you are
          experiencing persistent low mood, significant anxiety that is affecting daily functioning,
          thoughts of self-harm, or a pattern of behaviour you cannot change despite wanting to,
          please seek professional support &mdash; through your GP, your national governing body&apos;s
          welfare resources, or a qualified sport psychologist.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          What MEOK can do is provide daily mental performance support that most athletes currently
          lack entirely. It can prompt and track visualisation practice. It can hold your self-talk
          log and help you identify patterns. It can check in daily on mood, energy, training
          enjoyment, and competitive anxiety. It can challenge rationalisations with reference to
          your own prior statements. It can provide a private processing space for team conflict and
          performance frustration. It can accompany you through the grief of injury and the
          identity work of retirement. And it can remember everything, accumulate the pattern,
          and reflect it back with genuine longitudinal context.
        </p>
        <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
          For the overwhelming majority of athletes who currently navigate the mental game entirely
          alone, that is a substantial and meaningful difference.
        </p>

        {/* FAQ Section */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: `1px solid ${BORDER_DIM}`,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '2rem',
              letterSpacing: '-0.015em',
            }}
          >
            Frequently asked questions
          </h2>

          {[
            {
              q: 'Can AI help with sports psychology and mental performance?',
              a: (
                <>
                  AI cannot replace a qualified sports psychologist, but it can provide daily mental
                  performance support that most athletes never access. Structured reflection on
                  pre-competition mindset, consistent visualisation prompting, self-talk pattern
                  tracking, and honest feedback on decision-making are all practical use cases.
                  MEOK&apos;s Sovereign Memory means your mental performance work accumulates over
                  weeks and months rather than being lost between sessions.
                </>
              ),
            },
            {
              q: 'What is the difference between performance anxiety and choking?',
              a: (
                <>
                  Performance anxiety is the pre-competition arousal state that can either enhance or
                  impair performance depending on its intensity and your interpretation of it. Choking
                  is a specific failure mode where well-practised skills deteriorate under pressure
                  because conscious attention is applied to processes better run automatically.
                  Anxiety does not always produce choking, but unmanaged anxiety increases the risk.
                  Understanding your own anxiety signature &mdash; where it lives in the body, when
                  it peaks, what thoughts accompany it &mdash; is the first step toward regulating
                  it rather than being ruled by it.
                </>
              ),
            },
            {
              q: 'How do you maintain identity after retiring from sport?',
              a: (
                <>
                  Athletic retirement is one of the most significant identity transitions a person
                  can face. When sport has been the primary organiser of your time, social life,
                  sense of purpose, and self-worth for years or decades, its absence creates a
                  genuine identity vacuum. Research is clear that athletes who have cultivated a
                  broader sense of self &mdash; roles, relationships, and interests outside sport
                  &mdash; transition more successfully. The work of building that broader identity
                  ideally begins before retirement, not after. Therapy and structured reflection
                  are both evidence-based supports for the transition.
                </>
              ),
            },
            {
              q: 'What are the warning signs of overtraining syndrome?',
              a: (
                <>
                  Overtraining syndrome is a neuroendocrine condition caused by accumulated training
                  stress without adequate recovery. Warning signs include persistent fatigue that does
                  not resolve with rest, declining performance despite consistent training, mood
                  disturbances (particularly irritability, low motivation, and loss of enjoyment),
                  sleep disruption, increased susceptibility to illness and soft-tissue injury, and
                  a growing reluctance to train. OTS is distinct from normal training fatigue and
                  requires a period of enforced relative rest to resolve. A sports medicine physician
                  can provide formal assessment.
                </>
              ),
            },
            {
              q: 'How does AI help with the psychological side of injury recovery?',
              a: (
                <>
                  The psychological response to injury follows a grief-like arc: denial, anger,
                  bargaining, depression, and eventual acceptance and refocus. AI companions support
                  this process by providing a consistent, non-judgmental space to process frustration
                  and fear during rehabilitation, tracking mood alongside physical milestones, flagging
                  when psychological distress is persistently elevated (a risk factor for re-injury),
                  and maintaining a sense of forward momentum when physical progress feels invisible.
                  MEOK does not provide medical advice but holds the mental context that clinical
                  teams often do not have time for.
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: '1.75rem',
                paddingBottom: '1.75rem',
                borderBottom: i < 4 ? `1px solid ${BORDER_FAINT}` : 'none',
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#fff',
                  marginBottom: '0.625rem',
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, fontSize: '0.94rem', margin: 0 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2.5rem 2rem',
            borderRadius: '1.5rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.04) 100%)',
            border: `1px solid ${GOLD_BORDER}`,
            textAlign: 'center' as const,
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: GOLD,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              margin: '0 0 1rem 0',
            }}
          >
            Start Your Mental Performance Work
          </p>
          <h3
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
              color: '#fff',
              lineHeight: 1.2,
              margin: '0 0 1rem 0',
              letterSpacing: '-0.02em',
            }}
          >
            The mental game is where sport is won. Build the infrastructure for it.
          </h3>
          <p
            style={{
              color: MUTED,
              lineHeight: 1.7,
              fontSize: '0.97rem',
              maxWidth: '34rem',
              margin: '0 auto 2rem',
            }}
          >
            Visualisation tracking, self-talk logs, injury recovery mindset, competition anxiety
            work, overtraining pattern detection, and a companion that will not just tell you what
            you want to hear &mdash; all in your sovereign memory that belongs entirely to you.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              padding: '1rem 2.25rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
              color: BG,
              fontWeight: 800,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Begin the Birth Ceremony
          </Link>
          <p style={{ color: MUTED_FAINT, fontSize: '0.78rem', marginTop: '0.875rem', marginBottom: 0 }}>
            Your data. Your memory. Your companion. No third-party sharing.
          </p>
        </div>

        {/* Related links */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: `1px solid ${BORDER_DIM}`,
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: GOLD,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              marginBottom: '1.25rem',
            }}
          >
            Related Reading
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
            {[
              { href: '/blog/ai-for-burnout', label: 'AI Support for Burnout: Recovery Starts With Being Heard' },
              { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety: Understanding and Managing Anxious Thought' },
              { href: '/blog/ai-for-confidence', label: 'AI for Confidence: Building Genuine Self-Belief' },
              { href: '/blog/ai-for-chronic-pain', label: 'AI for Chronic Pain: The Psychological Dimension' },
              { href: '/blog/ai-for-life-transitions', label: 'AI for Life Transitions: Navigating Major Change' },
              { href: '/blog/sovereign-ai-explained', label: 'What Is Sovereign AI? Your Memory, Your Rules' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: MUTED_DIM,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  paddingLeft: '1rem',
                  borderLeft: `2px solid ${GOLD_BORDER}`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
