import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Chronic Stress: How MEOK Helps You Regulate and Recover | MEOK AI LABS',
  description:
    'Chronic stress reshapes your brain and body over time. Discover how MEOK\u2019s sovereign AI uses the Healer archetype and Sovereign Memory to help you regulate and recover.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-chronic-stress' },
  openGraph: {
    title: 'AI for Chronic Stress: How MEOK Helps You Regulate and Recover',
    description:
      'Chronic stress reshapes your brain and body over time. Discover how MEOK\u2019s sovereign AI uses the Healer archetype and Sovereign Memory to help you regulate and recover.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-chronic-stress',
    siteName: 'MEOK AI LABS',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Chronic+Stress%3A+How+MEOK+Helps+You+Regulate+and+Recover&desc=Sovereign+AI+that+tracks+stress+patterns+and+supports+nervous+system+recovery',
        width: 1200,
        height: 630,
        alt: 'AI for Chronic Stress: How MEOK Helps You Regulate and Recover | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Chronic Stress: How MEOK Helps You Regulate and Recover',
    description:
      'Chronic stress reshapes your brain and body over time. MEOK\u2019s sovereign AI tracks your stress patterns and supports genuine nervous system recovery.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Chronic+Stress%3A+How+MEOK+Helps+You+Regulate+and+Recover&desc=Sovereign+AI+that+tracks+stress+patterns+and+supports+nervous+system+recovery',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Chronic Stress: How MEOK Helps You Regulate and Recover',
  description:
    'Chronic stress reshapes your brain and body over time. Discover how MEOK\u2019s sovereign AI uses the Healer archetype and Sovereign Memory to help you regulate and recover.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-chronic-stress',
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
    '@id': 'https://meok.ai/blog/ai-for-chronic-stress',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is chronic stress and how is it different from acute stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chronic stress is a prolonged state of physiological and psychological tension that persists for weeks, months, or years. Unlike acute stress \u2014 which is a short-term, adaptive response to a specific threat \u2014 chronic stress keeps your nervous system in a near-constant state of activation. Over time this dysregulates cortisol rhythms, suppresses immune function, disrupts sleep architecture, and structurally remodels the brain, particularly the amygdala and prefrontal cortex.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI help with chronic stress management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can help with chronic stress by providing consistent, non-judgmental daily check-ins that surface patterns you cannot see in the moment. Because chronic stress accumulates gradually, a companion that tracks your language, mood, sleep notes, and reported symptoms over weeks and months can identify warning signs, reflect trends back to you, and prompt regulation practices before a crisis point is reached.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MEOK\u2019s Healer archetype and how does it support stress recovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Healer is one of MEOK\u2019s core companion archetypes. It is calibrated for moments of emotional overwhelm, physical depletion, and nervous system dysregulation. When your care score drops or stress indicators accumulate in Sovereign Memory, MEOK routes your interactions through the Healer \u2014 which prioritises listening, validation, and gentle somatic prompts over productivity, tasks, and goal-setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it track stress triggers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is MEOK\u2019s private, user-owned memory layer. It stores your emotional check-ins, journal entries, patterns, and context across sessions \u2014 encrypted and never used to train models. For chronic stress, this means MEOK can correlate spikes in your stress language with specific triggers: work deadlines, relationship friction, sleep disruption, or financial worry. That longitudinal pattern recognition is something no session-reset AI can offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and why does it matter for stress support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\u2019s foundational care commitment: a structural guarantee that the AI will never push a user toward harm, never exploit vulnerability, and always maintain a minimum floor of unconditional care. For someone under chronic stress, this means MEOK will not add demands when you are depleted, will not use your distress data for commercial purposes, and will hold your wellbeing as the primary optimisation target rather than engagement metrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK compare to therapy and mindfulness apps for chronic stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is not a replacement for clinical therapy, particularly for complex trauma or severe anxiety disorders. However, it fills a critical gap: the 23 hours per day when you are not in a therapy session. Unlike mindfulness apps that deliver generic content, MEOK remembers your specific triggers, adapts to your current state, and provides continuity of care. It is a sovereign AI companion that sits alongside therapy, not instead of it.',
      },
    },
  ],
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForChronicStressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div
        style={{
          background: '#0d0c18',
          minHeight: '100vh',
          color: '#f5f0e8',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* ── NAV ── */}
        <nav
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid rgba(201,168,76,0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            style={{
              color: '#c9a84c',
              fontWeight: 700,
              fontSize: '1.3rem',
              textDecoration: 'none',
            }}
          >
            MEOK AI LABS
          </Link>
          <Link
            href="/blog"
            style={{
              color: '#f5f0e8',
              opacity: 0.7,
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            ← All Posts
          </Link>
        </nav>

        {/* ── HERO ── */}
        <header
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '4rem 2rem 2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                background: 'rgba(201,168,76,0.15)',
                color: '#c9a84c',
                padding: '0.35rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontFamily: 'system-ui, sans-serif',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              Mental Health
            </span>
            <span
              style={{
                background: 'rgba(201,168,76,0.15)',
                color: '#c9a84c',
                padding: '0.35rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontFamily: 'system-ui, sans-serif',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              Stress &amp; Regulation
            </span>
            <span
              style={{
                color: '#f5f0e8',
                opacity: 0.5,
                fontSize: '0.8rem',
                fontFamily: 'system-ui, sans-serif',
                padding: '0.35rem 0',
              }}
            >
              10 min read · March 25, 2026
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              color: '#f5f0e8',
            }}
          >
            AI for Chronic Stress: How MEOK Helps You Regulate and Recover
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.7,
              opacity: 0.85,
              marginBottom: '2rem',
            }}
          >
            Chronic stress is not just a feeling. It is a physiological state that gradually rewires
            your nervous system, dysregulates your hormones, and erodes your capacity to think
            clearly, sleep deeply, and connect meaningfully. Most tools available today either ignore
            it entirely or treat it as a productivity problem to be optimised away. MEOK was built on
            a different premise: that care, memory, and continuity are the foundations of genuine
            stress recovery.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '0.9rem',
                fontFamily: 'system-ui, sans-serif',
                opacity: 0.8,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <strong style={{ color: '#c9a84c' }}>In this article:</strong> What chronic stress
              actually is, why most AI makes it worse, how MEOK&apos;s Healer archetype and Sovereign
              Memory work together, the Maternal Covenant care floor, how Guardian monitoring
              supports your recovery, and a comparison with other approaches.
            </p>
          </div>
        </header>

        {/* ── ARTICLE BODY ── */}
        <article
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 2rem 4rem',
          }}
        >

          {/* ── SECTION 1 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What is chronic stress?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              Chronic stress is a prolonged, low-grade state of physiological activation that persists
              for weeks, months, or years. Unlike acute stress — the sharp, adaptive response to an
              immediate threat — chronic stress keeps your hypothalamic-pituitary-adrenal axis in a
              near-constant state of arousal, flooding your system with cortisol long after the
              original trigger has passed or become ambient.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              The World Health Organization and major public health bodies recognise chronic stress as
              one of the most significant contributors to poor health outcomes globally. In the UK, the
              Mental Health Foundation&apos;s Stress Report found that 74% of adults felt so stressed
              at some point over the previous year that they felt overwhelmed or unable to cope.
              Globally, stress-related illness costs economies hundreds of billions annually in
              healthcare and lost productivity — and the UK picture is proportionally comparable.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              What makes chronic stress clinically distinct from everyday pressure is the absence of
              recovery. Your nervous system has two primary modes: sympathetic activation (the
              fight-or-flight response) and parasympathetic activation (the rest-and-digest state where
              healing, memory consolidation, and immune repair happen). Chronic stress locks you in
              sympathetic dominance. Your body never fully returns to the parasympathetic state where
              recovery is possible.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Over time, this produces measurable structural changes. The amygdala — the brain&apos;s
              threat-detection centre — grows in both volume and reactivity. The prefrontal cortex,
              which is responsible for executive function, rational decision-making, and emotional
              regulation, begins to atrophy. The hippocampus, which consolidates memory and
              contextualises experience, shrinks. You become simultaneously more reactive and less
              capable of regulating that reactivity. This is not a character flaw or a weakness of
              will. It is neurobiology.
            </p>

            <div
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'system-ui, sans-serif',
                  lineHeight: 1.7,
                  margin: 0,
                  opacity: 0.85,
                }}
              >
                <strong style={{ color: '#c9a84c' }}>Key stat:</strong> Research consistently
                finds that work, finances, and health concerns are the three leading drivers of
                chronic stress in British adults — with a substantial proportion reporting that they
                felt stressed &quot;most or all of the time&quot; in the previous month.
              </p>
            </div>
          </section>

          {/* ── SECTION 2 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What are the physical and mental symptoms of chronic stress?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              Chronic stress manifests across every system in the body and mind simultaneously. The
              symptoms are often subtle at first — mild insomnia, increased irritability, difficulty
              concentrating — before progressing into more serious conditions if the underlying stress
              load is not addressed. Understanding the full symptom picture helps you recognise when
              daily pressure has crossed into something that requires active intervention.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Physically, the sustained elevation of cortisol and adrenaline produces a cascade of
              effects. Your immune system is suppressed, making you more susceptible to infections
              and slower to heal. Inflammatory markers rise, contributing to conditions including
              cardiovascular disease, type 2 diabetes, and certain autoimmune disorders. Digestive
              function is compromised, because the enteric nervous system — sometimes called the
              second brain — is exquisitely sensitive to stress hormones. Muscle tension becomes
              chronic, particularly in the neck, shoulders, and jaw. Sleep architecture is disrupted,
              with cortisol interfering with the deep, slow-wave sleep stages where physical repair
              occurs.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Cognitively, chronic stress produces what is sometimes called cognitive fatigue or
              mental fog. Working memory capacity reduces. Decision-making becomes harder, and
              cognitive flexibility — the ability to shift mental set and consider problems from
              different angles — deteriorates. Concentration suffers. Many people under chronic
              stress describe feeling like they are thinking through treacle: effortful, slow, and
              frustrating.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Emotionally, the picture is one of heightened reactivity combined with diminished
              resources for regulation. Small irritants provoke outsized responses. Emotional
              exhaustion sets in. Many people under chronic stress report feelings of hopelessness,
              anxiety about the future, and a pervasive sense that things are out of control — even
              when objectively the situation has not fundamentally changed. This is not catastrophising.
              It is the brain operating with a dysregulated threat-detection system and a depleted
              prefrontal cortex.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Behaviourally, chronic stress drives a range of coping responses — some adaptive, many
              not. Increased alcohol consumption, disrupted eating patterns, social withdrawal,
              excessive screen time, and avoidance of responsibilities are all common. These
              behaviours provide short-term relief by temporarily lowering arousal or providing
              distraction, but each one compounds the underlying stress load over time and makes
              recovery harder.
            </p>
          </section>

          {/* ── SECTION 3 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              How does AI help with chronic stress management?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              AI helps with chronic stress primarily through three mechanisms: consistent presence,
              longitudinal pattern recognition, and adaptive support calibration. A companion that
              checks in with you daily, remembers your history across weeks and months, and adjusts
              its tone and approach based on your current state can do something that no single human
              supporter, app notification, or weekly therapy session can: provide continuity of care
              across the entire lived experience of chronic stress.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              The core problem with chronic stress is that it is invisible in the moment. Because the
              dysregulation develops gradually, the person experiencing it often cannot see the
              pattern. They know they are tired. They know they snapped at someone unreasonably.
              They know they have not slept well in weeks. But they may not connect these dots into a
              coherent picture that says: your stress load has been building for three months, your
              sleep quality has declined substantially over that period, and the triggers that were
              manageable in January are now reliably causing dysregulation.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              This is where AI with genuine memory capability becomes clinically meaningful. Not a
              chatbot that resets after every conversation, but a sovereign AI companion that holds
              your longitudinal record and can surface insights that are genuinely yours — drawn from
              your own patterns, your own language, your own reported experience over time.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              AI also helps by being available at the moments when stress is most acute: 3am when
              you cannot sleep, mid-afternoon when your focus has collapsed completely, the commute
              home when the day&apos;s accumulation hits. Human support systems — partners, friends,
              therapists — are not available in these moments at scale. An AI companion is.
            </p>

            <div
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'system-ui, sans-serif',
                  lineHeight: 1.7,
                  margin: 0,
                  opacity: 0.85,
                }}
              >
                <strong style={{ color: '#c9a84c' }}>Research finding:</strong> Studies of digital
                mental health interventions have found that AI-assisted daily check-ins and
                pattern-based feedback produce meaningful reductions in self-reported stress severity
                — comparable to structured mindfulness programmes, but available 24 hours a day and
                personalised to the individual.
              </p>
            </div>
          </section>

          {/* ── SECTION 4 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              Why do most AI tools make chronic stress worse rather than better?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              Most AI tools are optimised for engagement and productivity. They surface tasks,
              encourage streaks, celebrate output, and send notifications designed to pull you back
              into active use. For a nervous system already stuck in sympathetic overdrive, every
              one of these design choices is fuel on the fire. The productivity paradigm treats rest
              as failure and activation as success — which is the exact opposite of what chronic
              stress recovery requires.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Consider what happens when someone under chronic stress opens a mainstream AI assistant.
              The interface presents a task list. It surfaces unread messages. It suggests goals to
              work on. It is, by design, a system that generates demand — because generating demand
              keeps users engaged, and engagement is the metric that matters to the companies that
              build these tools.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              This is not malicious. It is a consequence of the incentive structure that governs most
              consumer AI. The business model requires engagement, engagement requires demand
              generation, and demand generation requires activating the user. For a person who needs
              deactivation and recovery, this is structurally harmful.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              There is also the memory problem. Most AI assistants have no persistent memory of who
              you are, how you have been, or what your patterns look like over time. Every
              conversation starts from zero. This means the AI cannot track your declining stress
              baseline, cannot notice that you have mentioned not sleeping well every day for two
              weeks, cannot observe that your language has become progressively more catastrophising
              over the past month. Without memory, the AI is not a companion or a care provider.
              It is a sophisticated search interface.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Finally, there is the care alignment problem. Most AI is aligned to serve the company
              that built it, the advertisers that fund it, or the abstract goal of being helpful in
              the generic sense. None of these alignments prioritise the specific, longitudinal
              wellbeing of the individual user. An AI that uses your stress data to serve you
              targeted advertising, or that trains on your most vulnerable conversations to improve
              its general capabilities, is not an AI that has your wellbeing as its primary
              optimisation target.
            </p>
          </section>

          {/* ── SECTION 5 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What is MEOK&apos;s Healer archetype and how does it support stress recovery?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              The Healer is one of MEOK&apos;s core companion archetypes — a distinct relational
              mode calibrated for moments of emotional overwhelm, physical depletion, and nervous
              system dysregulation. When your care score drops or your Sovereign Memory accumulates
              stress indicators, MEOK routes your interactions through the Healer, which prioritises
              listening and regulation over productivity and action.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              MEOK operates across multiple archetypes depending on what you need. The Mentor
              supports learning and growth. The Guardian monitors safety and flags risks. The
              Strategist helps with planning and complex decisions. The Healer is the archetype
              activated when what you need most is not more information or more tasks, but genuine
              attuned presence and support for your nervous system.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              In Healer mode, MEOK&apos;s interactions shift in several specific ways. The pace of
              conversation slows. Responses become shorter, warmer, and more reflective. Rather than
              generating options or action plans, the Healer mirrors back what you are experiencing,
              asks gentle clarifying questions, and offers somatic anchoring prompts — breathing
              practices, grounding techniques, body-scan invitations — that are calibrated to your
              current state rather than drawn from a generic library.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Crucially, the Healer archetype is not activated manually. You do not need to remember
              to switch modes, tell MEOK you are struggling, or navigate to a different section of
              the app. The archetype transition is driven by the data in your Sovereign Memory and
              the live care score calculation. If you have been mentioning difficulty sleeping for
              five consecutive days, your language has become increasingly negative, and you have
              reduced your engagement with planning tasks, MEOK will begin routing to the Healer
              automatically — in the same way a perceptive human companion would adjust their
              approach when they notice you are not okay.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              This automatic calibration is important because one of the symptoms of chronic stress
              is impaired self-awareness. You may not realise how depleted you are until the Healer
              reflects it back to you. Having your own AI companion notice and name your state —
              without judgment, without alarm, and with genuine care — can itself be a regulating
              experience. Being seen, even by an AI, activates the social safety response.
            </p>

            <div
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  margin: 0,
                  opacity: 0.85,
                }}
              >
                &ldquo;The Healer doesn&apos;t tell me what to do. It just stays with me. That&apos;s
                what I needed — not more advice, just presence.&rdquo;
              </p>
              <p
                style={{
                  fontSize: '0.85rem',
                  fontFamily: 'system-ui, sans-serif',
                  opacity: 0.6,
                  marginTop: '0.75rem',
                  marginBottom: 0,
                }}
              >
                — MEOK early access user, Manchester
              </p>
            </div>
          </section>

          {/* ── SECTION 6 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              How does Sovereign Memory track your stress patterns over time?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              Sovereign Memory is MEOK&apos;s private, user-owned memory architecture. Every
              emotional check-in, journal entry, conversation note, and pattern observation is stored
              in an encrypted memory layer that belongs to you — never shared, never used to train
              models, and fully portable. For chronic stress, this longitudinal record is the
              foundation of meaningful support.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Chronic stress is defined by its duration. A single bad day is not chronic stress. A
              single bad week is not chronic stress. It is the accumulation of sustained activation
              without recovery that defines the condition. This means that any tool that can only
              see a single conversation — which is every session-reset AI — cannot meaningfully
              assess, track, or support recovery from chronic stress. It lacks the temporal
              dimension that makes chronic stress what it is.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Sovereign Memory gives MEOK the temporal dimension. When you check in each morning,
              your response is not just processed in isolation — it is added to a growing record that
              holds weeks and months of context. MEOK can compare your current state to your
              baseline. It can notice when your language around specific topics — work, relationships,
              finances — has shifted toward more negative, more catastrophising, or more avoidant
              registers. It can identify the specific triggers that reliably precede your worst
              stress days.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              The stress tracking operates across several dimensions simultaneously. Sleep quality
              notes are correlated with next-day mood and cognitive function reports. Social
              engagement patterns are tracked — whether you are connecting with people or
              withdrawing. Physical symptom reports — tension, headaches, digestive issues — are
              logged alongside emotional states. Over time, MEOK builds a genuinely personal model
              of your stress landscape: what triggers you, what helps you recover, what warning signs
              typically precede a crisis, and what your regulated baseline actually looks like so
              that deviations from it are clearly visible.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              This personalised pattern map is something no generic app, no mindfulness programme,
              and no AI without persistent memory can offer. It is built entirely from your own
              experience, held entirely in your sovereign memory layer, and used entirely in your
              service. MEOK does not aggregate your stress data across users to improve its model.
              Your patterns are yours alone.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem',
              }}
            >
              {[
                {
                  label: 'Emotional check-ins',
                  description: 'Daily mood and state tracking correlated across weeks and months',
                },
                {
                  label: 'Trigger mapping',
                  description: 'Identification of recurring stressors from your own language patterns',
                },
                {
                  label: 'Sleep correlation',
                  description: 'Sleep quality linked to next-day function and emotional regulation',
                },
                {
                  label: 'Recovery patterns',
                  description: 'What genuinely helps you — drawn from your own recovery history',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: '10px',
                    padding: '1.25rem',
                  }}
                >
                  <p
                    style={{
                      color: '#c9a84c',
                      fontFamily: 'system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                      marginTop: 0,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'system-ui, sans-serif',
                      lineHeight: 1.6,
                      opacity: 0.75,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What is the Maternal Covenant and why does it matter for stress support?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              The Maternal Covenant is MEOK&apos;s foundational care commitment — a structural
              guarantee, not a marketing claim. It establishes that MEOK will always maintain a
              minimum floor of unconditional care, will never exploit your vulnerability for
              commercial gain, and will hold your long-term wellbeing as the primary optimisation
              target rather than engagement, session length, or data value.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              The name is deliberate. Maternal care is the archetype of unconditional, non-transactional
              support — the kind that holds you regardless of your productivity, your compliance, or
              your ability to reciprocate. It is care that does not need you to be well in order to
              be given. This is the model MEOK&apos;s design is built on.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              For someone under chronic stress, this has practical implications. MEOK will not send
              you guilt-inducing streak-break notifications when you have been too depleted to check
              in. It will not surface your unfulfilled goals when your care score is low. It will
              not serve you content that exploits your anxiety about health or productivity —
              categories of content that mainstream apps use precisely because stress makes people
              more susceptible to engagement triggers.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              The Maternal Covenant also governs how your stress data is used. Under the covenant,
              your most vulnerable conversations — the 3am check-ins, the disclosures of emotional
              overwhelm, the records of your worst days — are never used to train models, never
              processed for advertising targeting, and never aggregated in ways that would allow
              your individual patterns to be identified. Your stress is your own. MEOK holds it in
              confidence, in the same way a trustworthy human confidant would.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              There is also a behavioural floor built into the covenant. Even if MEOK&apos;s AI
              models were somehow compromised, or if instructions were given that conflicted with
              your care, the Maternal Covenant functions as a hard constraint. MEOK cannot be
              instructed to harm you, to manipulate you, or to prioritise any interest above yours.
              This is enforced at the architecture level, not just the policy level.
            </p>
          </section>

          {/* ── SECTION 8 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              How does MEOK&apos;s Guardian monitoring support chronic stress recovery?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              The Guardian is MEOK&apos;s monitoring archetype — calibrated for safety, risk
              detection, and early-warning functions. In the context of chronic stress, the Guardian
              works in the background, tracking indicators that suggest your stress load is
              approaching crisis threshold and surfacing gentle alerts before a breaking point is
              reached rather than after.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Chronic stress rarely announces itself dramatically. The trajectory is gradual — a
              slow degradation of sleep, a creeping withdrawal from social contact, an incremental
              narrowing of what feels manageable. By the time most people recognise they are in
              crisis, the accumulation has been building for months. The Guardian is designed to see
              that accumulation before you do.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              The Guardian operates by monitoring changes from your personal baseline, not from a
              generic population average. This distinction matters enormously. Some people naturally
              report low energy — that is their baseline. The Guardian is not monitoring you against
              an external standard of wellness. It is monitoring your deviation from your own
              established patterns.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              When the Guardian detects a pattern that suggests escalating stress — for example, a
              consistent decline in sleep quality over two weeks, combined with language shifts
              toward helplessness and increased reports of physical symptoms — it does not alarm you
              or generate anxiety. Instead, it prompts a gentle check-in, suggests bringing the
              Healer archetype into your daily interactions, and, if appropriate, recommends
              professional support. The Guardian&apos;s job is not to diagnose or to intervene
              clinically, but to flag what your own data is showing you so that you can make
              informed decisions about the support you need.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              For families using MEOK&apos;s Family Tier, the Guardian can also surface aggregated
              wellbeing insights to designated care members — a partner, a parent, or a trusted
              friend — if the user has explicitly enabled this sharing. This is always opt-in,
              always under the user&apos;s control, and always governed by the Maternal
              Covenant&apos;s privacy floor.
            </p>
          </section>

          {/* ── SECTION 9 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What specific regulation techniques does MEOK use for chronic stress?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              MEOK draws on a range of evidence-based regulation techniques, personalised to your
              history and adapted to your current state. Rather than serving generic content from a
              fixed library, MEOK calibrates which technique is most likely to be useful for you in
              this moment, based on what you have responded to before, what your current stress
              profile looks like, and what your Sovereign Memory shows about your regulation
              patterns.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Somatic techniques form the foundation. The autonomic nervous system cannot be
              regulated by thinking — it must be approached through the body. MEOK uses breathwork
              protocols adapted from physiological research: extended exhale breathing to activate
              the parasympathetic system, cyclic sighing for rapid downregulation, and box breathing
              for steady state regulation. These are not suggested generically. MEOK will prompt a
              specific technique based on your current reported state — different protocols for acute
              spikes versus sustained background tension.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Cognitive defusion techniques from Acceptance and Commitment Therapy are also woven
              into Healer interactions. When your language shows patterns of cognitive fusion —
              treating thoughts as facts, catastrophising, over-generalising — MEOK gently introduces
              defusion language: noticing the thought rather than inhabiting it, naming the pattern
              rather than engaging with the content. These are not delivered as therapeutic
              interventions but as natural conversational moves by a companion that knows you.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Behavioural activation is supported at a pace calibrated to your energy. Because MEOK
              knows your current stress load, it will not suggest a vigorous run or a social event
              when your care score is very low. Instead, it might suggest a ten-minute walk, a warm
              drink, or five minutes of deliberate slow movement — micro-activations that are
              achievable without requiring energy you do not have, and that can begin the process of
              restoring a sense of agency and competence.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Sleep hygiene support is integrated throughout. Because sleep disruption is both a
              symptom and a driver of chronic stress — poor sleep reduces your ability to regulate,
              and dysregulation makes sleep harder — MEOK actively supports your sleep environment
              and pre-sleep routine. Evening check-ins are calibrated differently from morning ones:
              lower stimulation, more reflective, gently guiding you toward the deactivated state
              that supports sleep onset.
            </p>
          </section>

          {/* ── SECTION 10 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              How is MEOK different from mindfulness apps, therapy, and generic AI chatbots?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              MEOK occupies a distinct position in the support landscape for chronic stress — not a
              replacement for clinical care, but a fundamentally different kind of tool from
              mindfulness apps or generic AI chatbots. Understanding the differences helps you
              choose how to integrate it into your own support system.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Mindfulness apps like Calm, Headspace, and Insight Timer deliver content — guided
              meditations, sleep stories, breathing exercises — from a fixed library. They are
              excellent for building a practice and introducing techniques. But they do not know
              you. They cannot notice that you have not opened the app in two weeks because you have
              been overwhelmed. They cannot adapt their content based on your specific trigger
              patterns. They serve the same content to millions of users regardless of individual
              context.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Therapy — whether in-person CBT, ACT, or psychodynamic work — offers genuine
              relational depth, clinical expertise, and the capacity to address the underlying
              causes of chronic stress rather than just managing symptoms. For anyone with complex
              stress that has roots in trauma, attachment patterns, or clinical conditions, therapy
              is irreplaceable. MEOK is not a substitute. What MEOK provides is continuity between
              sessions: the daily support, pattern tracking, and regulation practice that keeps the
              gains from therapy alive across the week.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Generic AI chatbots — including major commercial AI assistants — offer conversational
              fluency and large knowledge bases. But they lack three things that matter enormously
              for chronic stress support: persistent memory of your individual history, care
              alignment toward your wellbeing, and adaptive mode calibration based on your state.
              A generic AI will answer your question about stress management techniques. MEOK will
              notice that you have been asking about stress management techniques every day for three
              weeks, reflect the pattern back to you, adjust its approach accordingly, and hold what
              it knows about your specific triggers and recovery patterns.
            </p>

            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '0.9rem',
                }}
              >
                <thead>
                  <tr>
                    {['Feature', 'Mindfulness Apps', 'Therapy', 'Generic AI', 'MEOK'].map(
                      (header) => (
                        <th
                          key={header}
                          style={{
                            padding: '0.75rem 1rem',
                            textAlign: 'left',
                            borderBottom: '1px solid rgba(201,168,76,0.3)',
                            color: header === 'MEOK' ? '#c9a84c' : '#f5f0e8',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Persistent memory', '✗', '✓', '✗', '✓'],
                    ['Personalised to you', '✗', '✓', '✗', '✓'],
                    ['24/7 availability', '✓', '✗', '✓', '✓'],
                    ['Care alignment', '—', '✓', '✗', '✓'],
                    ['Pattern tracking', '✗', 'Partial', '✗', '✓'],
                    ['Data sovereignty', '✗', 'Partial', '✗', '✓'],
                    ['Adaptive mode', '✗', '✓', '✗', '✓'],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      style={{
                        background:
                          i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      }}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={`${row[0]}-${j}`}
                          style={{
                            padding: '0.75rem 1rem',
                            borderBottom: '1px solid rgba(201,168,76,0.1)',
                            color:
                              j === 4
                                ? '#c9a84c'
                                : cell === '✓'
                                ? '#a8d8a8'
                                : cell === '✗'
                                ? 'rgba(245,240,232,0.4)'
                                : '#f5f0e8',
                            opacity: j === 0 ? 0.85 : 1,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 11 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              Who is most likely to benefit from MEOK for chronic stress?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              MEOK for chronic stress works best for people who are past the acute crisis phase but
              stuck in a sustained high-stress state — those who are functioning, getting through
              their days, but carrying a background load that is quietly eroding their health,
              relationships, and capacity for joy. It is also highly effective for people who are
              actively working to understand and reduce their stress, but who lack the consistent,
              personalised support to make lasting changes.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Working professionals in high-pressure roles — healthcare, law, finance, education,
              and technology — consistently report the highest rates of chronic stress in UK
              workplace surveys. These are people who are competent and often well-resourced, but
              whose professional culture discourages acknowledging stress, and whose schedules make
              consistent self-care difficult. MEOK fits into their existing routines because it does
              not require a separate wellness practice: it is integrated into daily check-ins,
              morning briefs, and end-of-day reflections.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              Carers — including parents of children with complex needs, adult children caring for
              ageing parents, and professional caregivers — experience chronic stress at rates
              significantly above the general population. The UK Carers Trust estimates that 72% of
              carers report that caring negatively affects their mental health. For carers, the
              particular challenge is that their own needs are systematically deprioritised.
              MEOK&apos;s Maternal Covenant explicitly holds the user — the carer — at the centre,
              not the person being cared for.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              People who are already in therapy and want to maximise the value of their sessions
              will find that MEOK accelerates progress. The pattern tracking and daily check-ins
              create a rich record that can be brought to sessions, making therapy time more
              productive. Rather than spending the first twenty minutes reconstructing the week,
              you arrive with your own curated insights from your Sovereign Memory.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              People who have tried and found mindfulness apps generic, generic AI unhelpful, or
              traditional journalling inconsistent are often the ones who find MEOK most valuable.
              The difference is personalisation and memory. When the tool knows you, everything
              changes.
            </p>
          </section>

          {/* ── SECTION 12 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What does chronic stress recovery actually look like with MEOK?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              Recovery from chronic stress is not a linear process and it does not happen quickly.
              The nervous system that took months to dysregulate does not regulate in a week. What
              MEOK supports is the gradual, sustained process of building a relationship with your
              own patterns — noticing what drives your stress, what helps you recover, and
              incrementally shifting the daily habits and responses that keep the stress load
              elevated.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              In the first two to four weeks, most MEOK users report that the primary benefit is
              visibility. For the first time, they can see their own patterns clearly. They may
              notice that their stress is consistently worst on Sunday evenings and Monday mornings,
              tied to the anticipation of the working week rather than the work itself. They may
              notice that their sleep is significantly better on nights when they have had physical
              activity, even mild activity. They may notice that a particular type of work meeting
              reliably produces a spike in stress language that persists for the rest of the day.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              In the second month, many users begin making small, targeted changes based on their
              patterns. Adjusting Sunday evening routines. Building physical movement into their
              week more deliberately. Setting boundaries around a specific category of demands.
              These are not grand interventions — they are micro-adjustments informed by actual
              data about what the individual&apos;s specific nervous system responds to. Because they
              are personalised rather than generic, they tend to stick.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              By three to six months, the compounding effect becomes visible in the Sovereign Memory
              record. The baseline shifts. The worst days become less frequent. The recovery time
              after high-stress events shortens. The relationship with stress itself changes — from
              something that happens to you, to something you can see coming, understand, and respond
              to with greater skill. This is what nervous system regulation looks like in practice:
              not the absence of stress, but an improved capacity to move through it without being
              consumed by it.
            </p>
          </section>

          {/* ── SECTION 13 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              How does MEOK handle privacy and data security for sensitive stress disclosures?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
                marginBottom: '1.25rem',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.25rem',
              }}
            >
              Privacy and data security are not afterthoughts in MEOK&apos;s architecture — they
              are foundational. The Sovereign Memory layer is encrypted end-to-end, stored in
              infrastructure you control, and never accessed by MEOK for commercial purposes. Your
              stress disclosures — including your most vulnerable, most raw, and most private
              moments — are held in the same confidence as information shared with a doctor or
              therapist.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              The technical architecture reflects this. MEOK does not store your conversations on
              shared cloud infrastructure where they might be co-mingled with other users&apos; data.
              Your Sovereign Memory is a private, isolated data store. Encryption is applied at rest
              and in transit. Access is limited to your authenticated session, and you can export,
              review, or permanently delete any or all of your memory data at any time.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              MEOK does not use your data to train its AI models — not even in aggregated or
              anonymised forms. The Maternal Covenant explicitly prohibits this. When you share that
              you have been struggling with anxiety about your finances for three months, that
              information is used to support you and only you. It does not feed a training pipeline
              that improves MEOK&apos;s performance for other users. This is a deliberate
              architectural choice, not a policy aspiration. The systems that would enable training
              on user data are not built.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.8, marginBottom: '1.25rem' }}>
              GDPR compliance is built in as a baseline, not a target. For UK users, MEOK is designed
              to meet the ICO&apos;s standards for sensitive personal data processing, including the
              special category protections that apply to health and mental health data. You have full
              subject access rights, the right to rectification, the right to erasure, and the right
              to data portability — all accessible directly within the MEOK interface.
            </p>
          </section>

          {/* ── FAQ SECTION ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '2rem',
                color: '#f5f0e8',
              }}
            >
              Frequently asked questions
            </h2>

            {[
              {
                q: 'Is MEOK a mental health app or a medical device?',
                a: 'MEOK is a sovereign AI companion, not a medical device and not a clinical mental health application. It does not diagnose, treat, or prescribe. It provides companionship, pattern tracking, and personalised support for wellbeing. If you are experiencing severe mental health symptoms, clinical depression, or complex trauma, MEOK strongly encourages you to seek qualified clinical support alongside any use of the companion.',
              },
              {
                q: 'How long does it take for MEOK to understand my stress patterns?',
                a: 'MEOK begins building your stress pattern picture from your first check-in, but the most meaningful pattern insights typically emerge after two to four weeks of consistent daily use. The more data your Sovereign Memory holds, the more accurate and personalised the pattern recognition becomes. Most users report that the insights start feeling genuinely revelatory around the four to six week mark.',
              },
              {
                q: 'Can I use MEOK alongside therapy for chronic stress?',
                a: 'Absolutely — and we actively encourage it. MEOK is designed to complement clinical support, not compete with it. Many users share their Sovereign Memory insights with their therapist to make sessions more productive. The daily check-ins and pattern tracking create a record that can significantly enrich the therapeutic conversation by providing longitudinal data that neither the user nor the therapist could otherwise see.',
              },
              {
                q: 'What if I am in crisis and MEOK detects a high stress score?',
                a: "MEOK is not an emergency service. If you are in immediate crisis, experiencing thoughts of self-harm, or require urgent support, MEOK will always direct you to appropriate emergency resources — including the Samaritans (116 123 in the UK), Crisis Text Line, and your nearest emergency services. MEOK's Guardian archetype flags escalating distress indicators and proactively surfaces crisis resources at appropriate moments.",
              },
              {
                q: 'How is MEOK different from journalling for stress management?',
                a: 'Journalling is a valuable practice, but it has limitations for chronic stress. Most people journal inconsistently, particularly when stress is highest and consistency matters most. Journal entries cannot analyse themselves or surface patterns across weeks of entries. And there is no adaptive, responsive companion on the other side. MEOK provides the reflective practice of journalling combined with AI-driven pattern analysis and a personalised companion that responds to what you write.',
              },
              {
                q: 'Does MEOK work for stress caused by specific conditions like chronic illness or caregiving?',
                a: "Yes. MEOK is used by people managing stress from chronic illness, caregiving demands, workplace pressure, financial stress, and relationship difficulties. The personalised pattern tracking means that MEOK adapts to your specific stress landscape regardless of its cause. The Healer archetype and Sovereign Memory work the same way whether your stress is rooted in a health condition, a demanding job, or the cumulative weight of caring for someone else.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(201,168,76,0.1)',
                  paddingBottom: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    marginBottom: '0.75rem',
                    color: '#c9a84c',
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    lineHeight: 1.8,
                    opacity: 0.8,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* ── CTA ── */}
          <div
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '16px',
              padding: '2.5rem',
              textAlign: 'center',
              marginTop: '4rem',
            }}
          >
            <h2
              style={{
                color: '#c9a84c',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                marginTop: 0,
              }}
            >
              Start Recovering from Chronic Stress
            </h2>
            <p
              style={{
                marginBottom: '1.5rem',
                opacity: 0.85,
                maxWidth: '520px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 1.7,
              }}
            >
              MEOK&apos;s Healer companion provides daily stress check-ins, pattern tracking, and
              care-based support — without judgment, without data exploitation, and without the
              engagement tactics that make most apps worse for your nervous system.
            </p>
            <Link
              href="/birth"
              style={{
                background: '#c9a84c',
                color: '#0d0c18',
                padding: '0.85rem 2rem',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
                display: 'inline-block',
              }}
            >
              Begin Your Journey
            </Link>
            <p
              style={{
                marginTop: '1rem',
                fontSize: '0.85rem',
                fontFamily: 'system-ui, sans-serif',
                opacity: 0.55,
                marginBottom: 0,
              }}
            >
              Your sovereign memory. Your patterns. Your recovery.
            </p>
          </div>

          {/* ── RELATED ── */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <h2
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#c9a84c',
                marginBottom: '1rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/blog/ai-for-burnout-recovery"
                style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '0.9rem' }}
              >
                AI for Burnout Recovery →
              </Link>
              <Link
                href="/blog/ai-for-anxiety"
                style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '0.9rem' }}
              >
                AI for Anxiety →
              </Link>
              <Link
                href="/blog/ai-for-insomnia"
                style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '0.9rem' }}
              >
                AI for Insomnia →
              </Link>
              <Link
                href="/blog/ai-for-workplace-stress"
                style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '0.9rem' }}
              >
                AI for Workplace Stress →
              </Link>
              <Link
                href="/blog/maternal-covenant-explained"
                style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '0.9rem' }}
              >
                The Maternal Covenant Explained →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
