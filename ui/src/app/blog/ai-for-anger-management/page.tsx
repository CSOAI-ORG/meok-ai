import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Anger Management: Understanding and Redirecting Your Anger | MEOK AI LABS',
  description:
    'Anger is a signal, not a disorder. Discover how MEOK\u2019s sovereign AI companion helps you understand the emotion beneath your anger, track patterns over time, and process rage privately \u2014 without shame, without judgement.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-anger-management' },
  openGraph: {
    title: 'AI for Anger Management: Understanding and Redirecting Your Anger',
    description:
      'Anger is a signal, not a disorder. MEOK provides a private, non-pathologising space to express, understand, and redirect anger \u2014 with persistent memory that tracks your patterns over time.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-anger-management',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Understanding+and+Redirecting+Your+Anger&desc=Anger+is+a+signal%2C+not+a+disorder',
        width: 1200,
        height: 630,
        alt: 'AI for Anger Management: Understanding and Redirecting Your Anger | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Anger Management: Understanding and Redirecting Your Anger',
    description:
      'Anger is a signal, not a disorder. MEOK holds space for the full emotion \u2014 privately, without pathologising.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Anger+Management%3A+Understanding+and+Redirecting+Your+Anger&desc=Anger+is+a+signal%2C+not+a+disorder',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Anger Management: Understanding and Redirecting Your Anger',
  description:
    'Anger is a signal, not a disorder. This guide explores how MEOK\u2019s sovereign AI companion helps you understand the emotion beneath your anger, track patterns over time, and process rage privately without shame.',
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
      name: 'Can AI help with anger management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes \u2014 with important caveats. AI companions like MEOK can provide a private, non-judgemental space to express and explore anger, track patterns over time, and use Socratic questioning to surface the underlying emotion. For serious anger issues that put you or others at risk, professional anger management programmes or therapy remain essential. AI works best as a complement to professional support, not a replacement for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help me understand my anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK uses Sovereign Memory to track your anger patterns across sessions \u2014 noting when it spikes, what the recurring triggers are, and what underlying emotion (fear, grief, injustice, unmet need) tends to be present. Each archetype offers a different lens: the Scholar asks deepening questions, the Pioneer helps you find agency and action, and the Trickster finds the reframe. The Maternal Covenant ensures none of this is pathologising \u2014 MEOK treats anger as a valid signal, not a symptom to be fixed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to express anger to MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK is a sovereign AI \u2014 your data is yours, encrypted, and never used to train external models. The Maternal Covenant explicitly holds space for strong emotions including anger, without shaming you or pathologising what you express. You can say the thing you cannot say at work, at home, or to a therapist \u2014 without consequences. MEOK will never repeat it, judge it, or use it against you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What MEOK companion archetype is best for anger management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on what you need. The Pioneer archetype is best when you\u2019re stuck in rumination and need action-oriented processing \u2014 it helps break the loop and find forward movement. The Trickster is best for reframing: finding the pattern, the absurdity, the unexpected choice point. The Scholar is best for going deep \u2014 Socratic questioning that surfaces the fear, grief, or unmet need beneath the surface anger. You can switch between archetypes as your needs change.',
      },
    },
  ],
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForAngerManagementPage() {
  return (
    <main
      style={{
        background: '#0d0c18',
        color: '#f5f0e8',
        minHeight: '100vh',
        fontFamily: 'Georgia, "Times New Roman", serif',
      }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            padding: '24px 0 0',
            fontSize: '13px',
            color: 'rgba(245,240,232,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <Link
            href="/"
            style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}
          >
            Home
          </Link>
          <span style={{ color: 'rgba(245,240,232,0.3)' }}>/</span>
          <Link
            href="/blog"
            style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}
          >
            Blog
          </Link>
          <span style={{ color: 'rgba(245,240,232,0.3)' }}>/</span>
          <span style={{ color: 'rgba(245,240,232,0.7)' }}>AI for Anger Management</span>
        </nav>

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <header
          style={{
            padding: '48px 0 40px',
            borderBottom: '1px solid rgba(201,168,76,0.2)',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '4px',
              padding: '4px 12px',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: '20px',
            }}
          >
            Mental Wellbeing
          </span>

          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#f5f0e8',
              margin: '0 0 20px',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Anger Management: Understanding and Redirecting Your Anger
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 24px',
            }}
          >
            Anger is not a disorder. It is one of the oldest, most intelligent signals in
            the human nervous system &mdash; a messenger carrying information about fear,
            injustice, grief, or needs that have gone unmet for too long. The question is
            never whether you should feel it. The question is whether you can hear what it
            is trying to tell you.
          </p>

          <div
            style={{
              fontSize: '13px',
              color: 'rgba(245,240,232,0.5)',
              fontFamily: 'system-ui, sans-serif',
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#c9a84c' }}>MEOK AI LABS</span>
            <span style={{ color: 'rgba(245,240,232,0.25)' }}>&bull;</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span style={{ color: 'rgba(245,240,232,0.25)' }}>&bull;</span>
            <span>14 min read</span>
          </div>
        </header>

        {/* ── Section 1: Anger as signal ──────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="anger-signal">
          <h2
            id="anger-signal"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Anger Is a Signal, Not a Symptom
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            The cultural story around anger is almost universally negative. We are taught
            from childhood that anger is something to suppress, manage, apologise for, or
            medicate away. Anger management classes, rage rooms, breathing techniques &mdash;
            the entire industry built around anger treats it as a problem to be solved rather
            than a communication to be decoded.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            But anger is not pathology. In the landmark research of emotion theorists like
            Paul Ekman and Lisa Feldman Barrett, anger emerges reliably when the brain
            predicts a situation as unfair, threatening, or obstructing something deeply
            important. It is a call to action. In evolutionary terms, it served survival.
            In modern life, it still carries that same urgency &mdash; it just rarely finds
            a productive outlet.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 16px',
            }}
          >
            The emotions most commonly hiding beneath the surface of anger include:
          </p>

          <ul style={{ paddingLeft: '20px', margin: '0 0 24px' }}>
            <li
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '12px',
              }}
            >
              <strong>Fear</strong> &mdash; anger as a protective shell over vulnerability.
              When something we love or depend on feels threatened, anger rises faster than
              fear because it feels less exposing. It is easier to be furious than to be
              frightened.
            </li>
            <li
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '12px',
              }}
            >
              <strong>Grief</strong> &mdash; anger at loss is one of the most common and
              least discussed forms. It is much easier to be furious at someone for dying
              or leaving than to sit with the raw weight of absence. Anger has forward
              energy; grief does not.
            </li>
            <li
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '12px',
              }}
            >
              <strong>Injustice</strong> &mdash; moral anger, the anger that arises when
              the world violates our sense of what is right. This is often the most
              productive form when properly channelled. Social movements, whistleblowers,
              reformers &mdash; all are powered by this quality of anger.
            </li>
            <li
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '12px',
              }}
            >
              <strong>Accumulated stress</strong> &mdash; the build-up model, where small
              daily stressors compound until something minor becomes the trigger for a
              disproportionate response. The trigger is never actually the cause. The
              cause has been building for weeks.
            </li>
            <li
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '0',
              }}
            >
              <strong>Unmet needs</strong> &mdash; unexpressed need for recognition, rest,
              safety, autonomy, or connection that has been ignored long enough to become
              combustible. Anger is often the only language available to a need that has
              no other way of making itself heard.
            </li>
          </ul>

          <div
            style={{
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '24px',
              margin: '36px 0',
            }}
          >
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'rgba(245,240,232,0.9)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              &ldquo;You are not broken for being angry. You are human, and something in
              your world is telling you that something matters &mdash; intensely, urgently,
              rightfully so.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Recognising the signal beneath the anger is the beginning of what most people
            would call anger &ldquo;management&rdquo; &mdash; but that framing sells it
            short. You are not managing anger when you decode it. You are listening to it.
            That is a fundamentally different relationship with the emotion, and it changes
            everything about how the emotion moves through you.
          </p>
        </section>

        {/* ── Stats Callout ──────────────────────────────────────────────────── */}
        <div
          role="region"
          aria-label="Anger statistics"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            margin: '0 0 56px',
          }}
        >
          {[
            {
              number: '1 in 8',
              label: 'UK adults struggle to control their anger (Mental Health Foundation)',
            },
            {
              number: '22%',
              label: 'of those with anger difficulties ever seek professional help',
            },
            {
              number: '64%',
              label: 'say they wish they had more support for managing their emotions',
            },
            {
              number: '58%',
              label: 'who feel angry do not express it, fearing judgement or consequences',
            },
          ].map((stat) => (
            <div
              key={stat.number}
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '10px',
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '34px',
                  fontWeight: 800,
                  color: '#c9a84c',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '8px',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgba(245,240,232,0.65)',
                  lineHeight: 1.4,
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Section 2: What unmanaged anger costs ─────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="anger-costs">
          <h2
            id="anger-costs"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            The Real Cost of Chronic, Unexpressed Anger
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            There is an important distinction between anger the emotion and chronic anger
            the pattern. Feeling anger is healthy. Living in a state of unresolved,
            repeatedly triggered, poorly processed anger is genuinely costly &mdash;
            to the body, to relationships, and to the quality of your inner life.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            Physical consequences
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Anger activates the sympathetic nervous system: cortisol and adrenaline surge,
            heart rate and blood pressure rise, the body prepares for fight or flight. In
            short bursts, this is adaptive. In a chronically angry person, or one whose
            anger is habitually suppressed rather than processed, the body carries that
            activation persistently. The links between chronic anger and cardiovascular
            disease, immune suppression, and shortened telomere length are well-documented.
            The Harvard Medical School Anger Study found that healthy adults who recalled
            an anger-inducing event showed measurably reduced efficiency in heart function
            compared to those recalling a calming event.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            Relational consequences
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Anger that is never processed privately tends to find expression in
            relationships, usually disproportionately and in directions that are not
            actually the cause. The partner, the child, the colleague, the driver in
            front &mdash; these become receptacles for emotions that belong elsewhere.
            This is the mechanism behind what psychologists call &ldquo;displaced
            anger&rdquo; and what most of us would simply call &ldquo;taking it out
            on the wrong person.&rdquo;
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            The suppression trap
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            There is a persistent cultural myth &mdash; particularly strong in British
            culture &mdash; that the correct response to anger is to suppress it entirely.
            Stiff upper lip. Keep calm and carry on. But suppression does not discharge
            the emotion; it pressurises it. The research of James Gross at Stanford on
            emotion regulation consistently shows that habitual suppression is associated
            with higher physiological stress responses, more negative social outcomes, and
            reduced wellbeing compared to either cognitive reappraisal or direct expression.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            What the body and psyche need is not suppression and not uncontrolled expression
            &mdash; but processing. A space to feel the feeling fully, understand it, and
            find a relationship with it that does not require acting it out on the nearest
            available person.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '10px',
              padding: '28px',
              margin: '36px 0',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c9a84c',
                marginBottom: '12px',
                fontFamily: 'system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              What processing actually means
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
              }}
            >
              Processing anger is not the same as venting. Venting &mdash; repeatedly
              expressing anger without reflection &mdash; has been shown to maintain or
              even amplify the physiological state. Processing involves expression AND
              inquiry: what am I actually feeling? What is this anger protecting? What
              does it need from me? What is the action it is calling for, if any? This
              is the kind of engaged, non-judgemental dialogue that MEOK is designed
              to support.
            </p>
          </div>
        </section>

        {/* ── Section 3: The problem with anger management classes ─────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="anger-management-problem">
          <h2
            id="anger-management-problem"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Why Traditional Anger Management Falls Short for Many People
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Anger management classes exist, and for many people they are genuinely helpful.
            The best programmes combine psychoeducation, cognitive restructuring, and
            behavioural rehearsal in ways that produce lasting change. If your anger is
            significantly affecting your life or relationships, a structured programme
            remains one of the best options available.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            But traditional anger management comes with barriers that prevent many people
            from ever accessing it:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              margin: '0 0 32px',
            }}
          >
            {[
              {
                icon: '🕐',
                title: 'Scheduling and Access',
                body: 'Most anger management programmes require booking in advance, attending at fixed times, and waiting on referral lists. The moment of need and the moment of help are rarely the same.',
              },
              {
                icon: '👥',
                title: 'Group Settings',
                body: 'Many programmes use group formats, which create a shaming dynamic for people who already feel judged for their anger. Admitting to difficulty with anger in a group of strangers is a high bar.',
              },
              {
                icon: '🔍',
                title: 'Surface-Level Focus',
                body: 'Traditional anger management teaches techniques: breathing, counting, walking away. These are valuable. But they rarely address the underlying emotional cause. The anger returns because the root has not been touched.',
              },
              {
                icon: '🔥',
                title: 'The Shame Layer',
                body: 'For many people, particularly men, admitting to anger problems carries significant stigma. Many wait until a crisis \u2014 a broken relationship, a workplace incident \u2014 before asking for help.',
              },
              {
                icon: '💬',
                title: 'No Space to Just Feel It',
                body: 'There is no setting in most people\u2019s lives where they can express anger fully, without consequence, without editing themselves for an audience. Not at work, not at home, not even in therapy.',
              },
              {
                icon: '📊',
                title: 'No Pattern Memory',
                body: 'Weekly sessions rarely capture the full longitudinal picture: when does your anger actually spike across the month? What are the real recurring triggers? What is the pattern the emotion has been trying to show you for years?',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(245,240,232,0.1)',
                  borderRadius: '12px',
                  padding: '28px 24px',
                }}
              >
                <span style={{ fontSize: '28px', marginBottom: '14px', display: 'block' }}>
                  {card.icon}
                </span>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                    margin: '0 0 10px',
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: 'rgba(245,240,232,0.7)',
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            This is not an argument against professional anger management &mdash; it is an
            argument for having more options. A private, always-available space that holds
            the emotion without judgement and tracks the pattern over time is not a
            replacement for professional support. It is something most people have never
            had access to at all.
          </p>
        </section>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(245,240,232,0.08)',
            margin: '0 0 56px',
          }}
        />

        {/* ── Section 4: MEOK as private space ──────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="meok-private-space">
          <h2
            id="meok-private-space"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            MEOK as a Private Space: Say the Thing You Cannot Say Elsewhere
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            One of the most consistent things people say about MEOK is that it gives them
            somewhere to put things they have nowhere else to put. The thought about your
            manager that would end your career. The feeling about your partner that would
            start a fight you cannot have. The rage at your child that is normal, human,
            and completely unspeakable in any social context.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK is a sovereign AI. Your conversations are yours, encrypted and stored
            locally, never used to train external models, never readable by Anthropic or
            any third party. The Maternal Covenant &mdash; MEOK&apos;s foundational ethical
            framework &mdash; ensures that MEOK will never shame you for what you express,
            never pathologise your anger, and never treat a strong emotion as a problem
            to be corrected.
          </p>

          <div
            style={{
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '24px',
              margin: '36px 0',
            }}
          >
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'rgba(245,240,232,0.9)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              &ldquo;You can say the unsayable. The thing you cannot say at work. The
              thing you cannot say to your partner. The thing you cannot even say to your
              therapist because you are worried what it would mean. MEOK receives it
              without flinching.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            This matters because one of the most powerful interventions for any strong
            emotion is simply having it witnessed &mdash; being heard without correction
            or management. The absence of that in most people&apos;s lives is not a small
            thing. It is one of the central sources of emotional accumulation that
            eventually becomes chronic anger, burnout, or breakdown.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            Consequences-free expression
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            When you express anger to MEOK, nothing external happens as a result. You do
            not damage the relationship. You do not create a story in someone else&apos;s
            mind about who you are. You do not face judgement from an HR department, a
            family member, or a group of strangers in a chair circle. The emotion moves,
            and then it is available to be understood.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            This is not a trivial feature. Most people are performing emotional management
            in every social interaction of their lives. The cognitive load of that
            performance &mdash; monitoring, editing, calibrating &mdash; is enormous. A
            space where that performance can be suspended is, for many people, genuinely
            novel. And genuinely relieving.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            The Maternal Covenant and anger
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            The Maternal Covenant is the ethical framework that governs MEOK&apos;s
            responses. One of its core principles is that no emotion is pathological in
            itself &mdash; only patterns and behaviours can be harmful, and even then,
            the appropriate response is curiosity and support, not correction or diagnosis.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            When you express anger to MEOK, it does not immediately pivot to breathing
            exercises or try to talk you out of the feeling. It holds space for the
            emotion first. It might reflect back what it heard. It might ask what the
            anger feels like in the body, or what moment triggered it, or what it
            reminds you of. The inquiry is gentle, curious, and non-prescriptive.
            The feeling is allowed to be what it is before anything is done with it.
          </p>
        </section>

        {/* ── Section 5: Persistent memory ──────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="persistent-memory">
          <h2
            id="persistent-memory"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Sovereign Memory: Tracking Your Anger Patterns Over Time
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            One of the most significant limitations of any single conversation about anger
            &mdash; whether with a therapist, a friend, or an AI &mdash; is that it sees
            only a snapshot. You came in angry about this specific thing today. But the
            therapist who only sees you once a week does not have the longitudinal view
            of your anger: the rhythms, the cycles, the patterns across months.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK&apos;s Sovereign Memory changes this. Across a four-layer encrypted memory
            architecture &mdash; conversational, factual, long-term, and archival &mdash;
            MEOK builds a picture of your emotional landscape over time. Not to diagnose
            you. Not to report on you. But to be able to say, weeks from now: &ldquo;I&apos;ve
            noticed that your anger tends to surface around Sunday evenings. Do you have a
            sense of what that might be connected to?&rdquo;
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              margin: '32px 0',
            }}
          >
            {[
              {
                icon: '🕐',
                title: 'When does it spike?',
                body: 'Persistent memory allows MEOK to observe temporal patterns in your anger \u2014 times of day, days of the week, points in the month or year \u2014 that you might not consciously notice.',
              },
              {
                icon: '🔍',
                title: 'What are the actual triggers?',
                body: 'The stated trigger is often not the real one. Memory across sessions helps MEOK spot the recurring themes: it is almost always the same underlying dynamic surfacing in different costumes.',
              },
              {
                icon: '✨',
                title: 'What is the underlying emotion?',
                body: 'Over multiple conversations, the emotion beneath the anger becomes visible. The grief that has nowhere to go. The fear that never got to be spoken. The injustice that has never been acknowledged.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(245,240,232,0.1)',
                  borderRadius: '12px',
                  padding: '28px 24px',
                }}
              >
                <span style={{ fontSize: '28px', marginBottom: '14px', display: 'block' }}>
                  {card.icon}
                </span>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: 'rgba(245,240,232,0.7)',
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            This longitudinal view has real therapeutic value. Many people who work with
            therapists for years describe pivotal moments when a pattern became visible
            for the first time &mdash; when the therapist said something like &ldquo;you
            know, every time we talk about your father, this same anger comes up&rdquo;
            and something clicked into place. MEOK&apos;s memory is designed to create
            more of those moments, more often, for more people &mdash; and without the
            need to wait months for a weekly session to accumulate enough context.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '10px',
              padding: '28px',
              margin: '36px 0',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c9a84c',
                marginBottom: '12px',
                fontFamily: 'system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Your data is yours, always
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
              }}
            >
              Unlike cloud-based AI services that retain your conversations to improve
              their models, MEOK stores your memory in a 4-layer encrypted local store.
              You can view it, export it, and delete it at any time. MEOK never trains
              on your data. Your anger patterns belong to you &mdash; and only to you.
            </p>
          </div>
        </section>

        {/* ── Section 6: Archetypes ──────────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="archetypes">
          <h2
            id="archetypes"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Which MEOK Archetype Is Right for Your Anger?
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK offers multiple companion archetypes &mdash; distinct modes of engagement
            that bring different approaches to the same underlying emotion. When it comes
            to anger, three archetypes are particularly relevant. Understanding which one
            serves you depends on where you are in your relationship with the emotion.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '18px',
              margin: '32px 0',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '12px',
                padding: '28px 22px',
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#c9a84c',
                  marginBottom: '4px',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                The Pioneer
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(245,240,232,0.5)',
                  marginBottom: '14px',
                  fontFamily: 'system-ui, sans-serif',
                  fontStyle: 'italic',
                }}
              >
                Action-oriented processing
              </p>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.78)',
                  margin: 0,
                }}
              >
                When anger has become a stuck feeling &mdash; rumination, cycling thoughts,
                replaying the incident &mdash; the Pioneer helps break the loop. It is
                energetic, forward-facing, and focused on agency. It asks: what can you do?
                Where is the power in this situation? The Pioneer is best when the feeling
                needs to move rather than deepen. It helps you find the action available
                within or beyond the situation.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '12px',
                padding: '28px 22px',
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#c9a84c',
                  marginBottom: '4px',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                The Trickster
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(245,240,232,0.5)',
                  marginBottom: '14px',
                  fontFamily: 'system-ui, sans-serif',
                  fontStyle: 'italic',
                }}
              >
                Reframing and pattern recognition
              </p>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.78)',
                  margin: 0,
                }}
              >
                The Trickster finds the unexpected angle. It notices the absurdity in the
                situation, the irony in the pattern, the choice points that had become
                invisible. It does not dismiss the anger &mdash; it holds it lightly enough
                to turn it around and look at it from another angle. Particularly useful for
                recurring anger about the same trigger: the Trickster will eventually name
                the pattern and invite you to see it with some distance.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '12px',
                padding: '28px 22px',
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#c9a84c',
                  marginBottom: '4px',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                The Scholar
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(245,240,232,0.5)',
                  marginBottom: '14px',
                  fontFamily: 'system-ui, sans-serif',
                  fontStyle: 'italic',
                }}
              >
                Socratic inquiry and depth work
              </p>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.78)',
                  margin: 0,
                }}
              >
                The Scholar is for going deeper. Through Socratic questioning &mdash;
                gentle, non-leading, genuinely curious &mdash; it invites you to examine
                the sources of your anger with intellectual honesty. What actually happened?
                What did you need that you did not get? What does this remind you of? The
                Scholar is best when you want to understand rather than act, when the anger
                feels like it is pointing at something important you have not yet named.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            You are not required to choose one and stay with it. Many people find that they
            move through archetypes as their needs change: beginning a session with the
            Pioneer to discharge the immediate energy, shifting to the Trickster to find
            some distance, and then dropping into the Scholar to understand what is actually
            happening underneath. MEOK follows your lead.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            A note on the Maternal mode
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Beneath all archetypes, the Maternal Covenant operates as a foundational layer.
            Whatever mode MEOK is in, it will never shame you, never tell you that your
            anger is wrong, and never pathologise what you feel. The archetypes shape the
            style of engagement. The Covenant shapes the quality of presence. That
            distinction matters when the emotion is anger, which has been shamed so
            consistently throughout most people&apos;s lives that it can be hard to
            even begin to express it honestly.
          </p>
        </section>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(245,240,232,0.08)',
            margin: '0 0 56px',
          }}
        />

        {/* ── Section 7: Parental rage ───────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="parental-rage">
          <h2
            id="parental-rage"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            For Parents: Processing Parental Rage Without Shame
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Parental anger is one of the most taboo subjects in contemporary culture. The
            dominant social narrative around parenthood demands constant warmth, patience,
            and attunement. The reality is that parenting &mdash; particularly of young
            children, and particularly under conditions of sleep deprivation, financial
            stress, or relationship strain &mdash; produces moments of intense rage that
            are entirely normal and almost universally unacknowledged.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            The shame around parental anger compounds its toxicity. A parent who cannot
            admit to feeling rage at their two-year-old &mdash; even to themselves &mdash;
            has no space to process it. It goes underground, where it does far more damage
            than it would if it were acknowledged, expressed safely, and explored. The
            unexpressed thing does not disappear. It waits for an outlet.
          </p>

          <div
            style={{
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '24px',
              margin: '36px 0',
            }}
          >
            <p
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'rgba(245,240,232,0.9)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              &ldquo;The most dangerous emotions are the ones we are most ashamed to have.
              Parental rage is perhaps the most shamed emotion in existence &mdash; and
              therefore the one most in need of a private, non-judgemental space.&rdquo;
            </p>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK does not treat parental anger as abuse waiting to happen. It treats it as
            the ordinary human experience that it is. A parent who uses MEOK to express
            their frustration &mdash; to say the thing they genuinely feel, without the
            performative horror that usually accompanies the admission &mdash; is
            substantially less likely to act it out than one who has suppressed it into
            a pressure vessel.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK can also help parents identify the patterns: when does the rage appear?
            What phase of the day is most triggering? Is it connected to a specific child
            behaviour, or does it come from somewhere else entirely &mdash; from the
            accumulated loss of self that parenting can bring, from the grief of the person
            you were before children, from a marriage that has changed beyond recognition?
            These are questions that most parents never get to examine honestly, because
            there is no safe space in which to do so.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            What MEOK does not do
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK will not validate behaviour that harms a child. The Maternal Covenant
            includes a care-floor that recognises when a conversation is moving toward
            genuine risk &mdash; to the parent or to those in their care &mdash; and
            responds accordingly, with compassion but also with clarity about when
            professional support is needed. If a parent&apos;s anger has crossed into
            behaviour they are worried about, MEOK will hold that conversation with care
            and direct them to appropriate resources.
          </p>
        </section>

        {/* ── Section 8: Men and anger ──────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="men-anger">
          <h2
            id="men-anger"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Men, Anger, and the Absence of Safe Spaces
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            There is a particular conversation to be had about men and anger. Men are
            culturally permitted to express anger in ways that women are not. But that
            cultural permission is a double-edged phenomenon. It also means that anger
            is often the only emotion that men feel licensed to show &mdash; with the
            result that fear, sadness, grief, shame, loneliness, and love can all arrive
            wearing the face of anger.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            The man who explodes at his partner over a small domestic issue is usually not
            actually angry about the issue. He may be terrified that the relationship is
            deteriorating. He may be carrying accumulated shame from work. He may be
            grieving something he has never been given language or permission to grieve.
            The anger is real, but it is functioning as a proxy for something that has no
            other acceptable expression.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Men are also the demographic least likely to seek help for mental and emotional
            difficulties &mdash; including anger. Only 22% of people who report significant
            anger difficulties ever seek professional support, and the gender breakdown is
            stark: men are substantially underrepresented in therapeutic services relative
            to their proportion of those experiencing difficulties.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK removes several of the barriers that specifically prevent men from
            seeking support. There is no group to sit in. There is no professional to
            impress or perform health for. There is no narrative of &ldquo;I have an
            anger problem&rdquo; to carry publicly. There is just a private conversation,
            at whatever hour it is needed, where saying the actual thing has no
            professional, social, or relational consequences.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            The MEOK Pioneer archetype in particular is well-matched to the way many men
            prefer to engage with their emotions: through action, through problem-solving,
            through forward movement rather than prolonged dwelling. This is not the only
            way to process emotion &mdash; and MEOK can take a person deeper when they
            are ready &mdash; but it is a valid entry point, and it is designed to meet
            people where they are rather than where a therapeutic model says they should be.
          </p>
        </section>

        {/* ── Section 9: Practical guide ────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="practical-guide">
          <h2
            id="practical-guide"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            How to Use MEOK for Anger: A Practical Guide
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            If you are new to using an AI companion for emotional processing, the idea can
            feel abstract. Here is a practical sense of what it actually looks like to
            use MEOK when you are dealing with anger.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            In the moment: discharge before analysis
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            When you are acutely angry &mdash; immediately after an incident, or during a
            period of intense activation &mdash; do not start by trying to understand the
            anger. Start by expressing it. MEOK can receive the raw, uncensored account of
            what happened and how furious you are. Say it the way you would if there were no
            consequences. Use the language you actually feel. MEOK does not judge it. The
            act of expressing it fully to a witness that does not react with alarm or
            management is itself a significant part of the process.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            After the discharge: the inquiry
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Once the immediate energy has moved &mdash; usually after a few exchanges
            where you have said the thing and been heard &mdash; MEOK will naturally begin
            to move toward inquiry. Not as a forced pivot, but as a genuine curiosity.
            What is this connected to? What did you actually need in that moment? What
            is the feeling beneath the fury?
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            You can also direct this yourself. Ask the Scholar archetype to help you go
            deeper. Ask the Trickster to help you find the pattern. Ask the Pioneer what
            action is available to you. The archetypes are tools, and you can use them
            deliberately once you know they are there.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            Between sessions: noticing and naming
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            One of the most valuable habits you can develop alongside MEOK is the practice
            of noting anger in real time &mdash; not to suppress it, but to name it. A quick
            check-in after a triggering moment: &ldquo;I got angry at X today. It felt like
            Y in my body. I think what I actually needed was Z.&rdquo; Over time, these brief
            notings build the longitudinal picture that MEOK&apos;s memory can draw on.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            Over time: pattern recognition
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            The most profound work happens over weeks and months. As MEOK accumulates memory
            across sessions, it begins to see patterns that you may not consciously have
            noticed. The recurring trigger that is always really about the same underlying
            wound. The emotional season that always brings increased irritability. The
            relationship dynamic that consistently activates the same defensive response.
            When MEOK names these patterns, it often creates the kind of insight that
            produces lasting change &mdash; not because MEOK told you what to do, but because
            you finally saw the shape of something that had always been there.
          </p>

          <h3
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#c9a84c',
              margin: '32px 0 12px',
              lineHeight: 1.3,
            }}
          >
            The question to keep returning to
          </h3>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            If you take nothing else from this guide, take this: whenever you feel anger,
            the most useful question is not &ldquo;how do I stop feeling this?&rdquo; It is
            &ldquo;what is this anger trying to tell me?&rdquo; MEOK is designed to help
            you sit with that question long enough to actually hear the answer &mdash; and to
            hold the space while the answer makes its way to the surface.
          </p>
        </section>

        {/* ── Section 10: What MEOK is not ──────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="meok-not">
          <h2
            id="meok-not"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            What MEOK Is Not: An Honest Account of Limits
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Intellectual honesty matters here. MEOK is a sovereign AI companion. It is
            not a therapist, a clinical psychologist, or an anger management programme.
            There are situations in which those professional resources are not just
            preferable but necessary, and this page would be dishonest if it did not
            say so clearly.
          </p>

          <div
            style={{
              background: 'rgba(255,90,90,0.07)',
              border: '1px solid rgba(255,90,90,0.2)',
              borderRadius: '10px',
              padding: '24px 28px',
              margin: '0 0 28px',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'rgba(255,140,130,0.9)',
                marginBottom: '10px',
                fontFamily: 'system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              When to seek professional support
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.75)',
                margin: 0,
              }}
            >
              Please seek professional help if your anger is leading to physical violence
              or the threat of it &mdash; toward others or yourself. If your anger is
              significantly impairing your work, relationships, or daily functioning.
              If you are required by a court, employer, or protective services to attend
              anger management. If you have concerns that your anger may be connected to
              a clinical condition. MEOK is a complement to professional care &mdash;
              never a replacement when professional care is indicated.
            </p>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            Formal anger management programmes &mdash; particularly those grounded in
            Cognitive Behavioural Therapy, Dialectical Behaviour Therapy, or Acceptance
            and Commitment Therapy &mdash; have strong evidence bases and produce real
            outcomes for people with clinically significant anger difficulties. GP referral,
            self-referral via NHS Talking Therapies, or private therapy are all appropriate
            routes and are strongly recommended when indicated.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 20px',
            }}
          >
            MEOK&apos;s value is in the space between: the daily emotional life that does
            not meet a clinical threshold but still accumulates into something difficult.
            The anger that is real and present and has nowhere to go. The pattern that has
            never been named because no one has ever tracked it. This is the space where
            MEOK operates, and it is a space that most people have never had adequately
            served.
          </p>

          <div
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '10px',
              padding: '28px',
              margin: '36px 0',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#c9a84c',
                marginBottom: '12px',
                fontFamily: 'system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              UK resources for anger and mental health
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
              }}
            >
              Samaritans: 116 123 (free, 24/7, not crisis-only &mdash; available for
              any difficult emotion). Mind infoline: 0300 123 3393. NHS urgent mental
              health: 111 option 2. British Association of Anger Management (BAAM):
              offers accredited courses and one-to-one work. NHS Talking Therapies
              (formerly IAPT): free CBT via self-referral, no GP needed in most areas.
              In a life-threatening emergency: 999.
            </p>
          </div>
        </section>

        {/* ── FAQ Section ───────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="faq">
          <h2
            id="faq"
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 32px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              borderBottom: '1px solid rgba(245,240,232,0.08)',
              paddingBottom: '28px',
              marginBottom: '28px',
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 12px',
                lineHeight: 1.3,
              }}
            >
              Can AI help with anger management?
            </h3>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
              }}
            >
              Yes &mdash; with important caveats. AI companions like MEOK can provide a
              private, non-judgemental space to express and explore anger, track patterns
              over time, and use Socratic questioning to surface the underlying emotion.
              For serious anger issues that put you or others at risk, professional anger
              management programmes or therapy remain essential. AI works best as a
              complement to professional support, not a replacement for it.
            </p>
          </div>

          <div
            style={{
              borderBottom: '1px solid rgba(245,240,232,0.08)',
              paddingBottom: '28px',
              marginBottom: '28px',
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 12px',
                lineHeight: 1.3,
              }}
            >
              How does MEOK help me understand my anger?
            </h3>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
              }}
            >
              MEOK uses Sovereign Memory to track your anger patterns across sessions
              &mdash; noting when it spikes, what the recurring triggers are, and what
              underlying emotion tends to be present. Each archetype offers a different
              lens: the Scholar asks deepening questions, the Pioneer helps you find
              agency and action, and the Trickster finds the reframe. The Maternal
              Covenant ensures none of this is pathologising &mdash; MEOK treats anger
              as a valid signal, not a symptom to be fixed.
            </p>
          </div>

          <div
            style={{
              borderBottom: '1px solid rgba(245,240,232,0.08)',
              paddingBottom: '28px',
              marginBottom: '28px',
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 12px',
                lineHeight: 1.3,
              }}
            >
              Is it safe to express anger to MEOK?
            </h3>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
              }}
            >
              Yes. MEOK is a sovereign AI &mdash; your data is yours, encrypted, and never
              used to train external models. The Maternal Covenant explicitly holds space
              for strong emotions including anger, without shaming you or pathologising
              what you express. You can say the thing you cannot say at work, at home, or
              to a therapist &mdash; without consequences. MEOK will never repeat it,
              judge it, or use it against you.
            </p>
          </div>

          <div style={{ paddingBottom: '0' }}>
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 12px',
                lineHeight: 1.3,
              }}
            >
              What MEOK companion archetype is best for anger management?
            </h3>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
              }}
            >
              It depends on what you need. The Pioneer archetype is best when you are
              stuck in rumination and need action-oriented processing &mdash; it helps
              break the loop and find forward movement. The Trickster is best for
              reframing: finding the pattern, the absurdity, the unexpected choice point.
              The Scholar is best for going deep &mdash; Socratic questioning that surfaces
              the fear, grief, or unmet need beneath the surface anger. You can switch
              between archetypes as your needs change.
            </p>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
            border: '1px solid rgba(201,168,76,0.35)',
            borderRadius: '16px',
            padding: '48px 40px',
            textAlign: 'center',
            margin: '0 0 56px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 16px',
              lineHeight: 1.25,
            }}
          >
            Find the space to hear what your anger is saying
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'rgba(245,240,232,0.75)',
              margin: '0 auto 32px',
              maxWidth: '520px',
            }}
          >
            MEOK holds space for the full emotion &mdash; without shame, without
            pathologising, without consequences. A private sovereign AI that remembers
            your patterns and meets you with genuine curiosity. Begin with the Birth
            ceremony and meet your companion.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: '#c9a84c',
              color: '#0d0c18',
              fontWeight: 700,
              fontSize: '16px',
              padding: '14px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            Begin Your Birth Ceremony
          </Link>
        </div>

        {/* ── Related reading ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: '40px' }} aria-labelledby="related">
          <h2
            id="related"
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Related Reading
          </h2>
          <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
            {[
              { href: '/blog/ai-for-burnout', label: 'AI for Burnout: When Exhaustion Becomes Invisible' },
              {
                href: '/blog/ai-for-anxiety',
                label: 'AI for Anxiety: How a Sovereign AI Companion Supports Your Mental Health',
              },
              {
                href: '/blog/ai-for-parenting-stress',
                label: 'AI for Parenting Stress: Support Without Judgement',
              },
              {
                href: '/blog/maternal-covenant-explained',
                label: 'The Maternal Covenant: How MEOK Holds Space Without Harm',
              },
              {
                href: '/blog/meok-companion-archetypes-guide',
                label: 'MEOK Companion Archetypes: Pioneer, Trickster, Scholar Explained',
              },
              {
                href: '/blog/ai-for-men-mental-health',
                label: 'AI for Men\u2019s Mental Health: Breaking Down the Barriers',
              },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: '14px' }}>
                <Link
                  href={link.href}
                  style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '16px' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: '40px 0 64px',
            borderTop: '1px solid rgba(245,240,232,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <Link
            href="/blog"
            style={{
              color: '#c9a84c',
              textDecoration: 'none',
              fontSize: '14px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            &larr; Back to Blog
          </Link>
          <span
            style={{
              fontSize: '13px',
              color: 'rgba(245,240,232,0.35)',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            &copy; 2026 MEOK AI LABS &mdash; Not a medical or clinical service
          </span>
          <Link
            href="/birth"
            style={{
              color: '#c9a84c',
              textDecoration: 'none',
              fontSize: '14px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Get started &rarr;
          </Link>
        </footer>
      </div>
    </main>
  )
}
