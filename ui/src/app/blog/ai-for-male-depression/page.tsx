import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Male Depression: Breaking the Silence That Kills | MEOK AI LABS',
  description:
    'Men account for 75% of all UK suicides. Male depression looks different \u2014 irritability, anger, risk-taking \u2014 and GPs miss it constantly. MEOK\u2019s private AI companion meets men where they are, at 3am if needed, with no waiting room and no referral required.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-male-depression' },
  openGraph: {
    title: 'AI for Male Depression: Breaking the Silence That Kills',
    description:
      'Men account for 75% of UK suicides and are the least likely to seek help. MEOK offers a private, asynchronous AI companion with no stigma, no waiting list, and no pressure to perform vulnerability.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-male-depression',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Male+Depression%3A+Breaking+the+Silence+That+Kills&desc=No+stigma%2C+no+waiting+room%2C+available+at+3am',
        width: 1200,
        height: 630,
        alt: 'AI for Male Depression: Breaking the Silence That Kills | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Male Depression: Breaking the Silence That Kills',
    description:
      'Men account for 75% of UK suicides. Male depression looks different and gets missed. MEOK is a private AI companion available at 3am with no referral required.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Male+Depression%3A+Breaking+the+Silence+That+Kills&desc=No+stigma%2C+no+waiting+room%2C+available+at+3am',
    ],
  },
}

// ── JSON-LD: Article ──────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Male Depression: Breaking the Silence That Kills',
  description:
    'Men account for 75% of all UK suicides. Male depression presents differently from textbook descriptions \u2014 as irritability, aggression, substance use and risk-taking rather than sadness. GPs miss it at higher rates. Professional services are closed at 3am. MEOK\u2019s sovereign AI companion removes every barrier: no face-to-face, no referral, no waiting room, and free on Explorer tier.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-male-depression',
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
    '@id': 'https://meok.ai/blog/ai-for-male-depression',
  },
  about: [
    { '@type': 'Thing', name: 'male depression' },
    { '@type': 'Thing', name: 'men\u2019s mental health UK' },
    { '@type': 'Thing', name: 'suicide prevention' },
    { '@type': 'Thing', name: 'AI companion' },
    { '@type': 'Thing', name: 'sovereign AI' },
    { '@type': 'Thing', name: 'MEOK' },
  ],
  keywords:
    'AI for male depression, men depression UK, male suicide UK statistics, male depression symptoms, men mental health app, MEOK Pioneer archetype, AI companion men, depression in men signs, sovereign AI mental health, men therapy alternative UK',
}

// ── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do men not seek help for depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiple barriers converge: cultural conditioning that equates emotional expression with weakness, practical friction of booking a GP or waiting for a referral, and genuine fear of being labelled or medicated. For many men, the moment to reach out comes at 3am when every professional service is closed. AI removes time, access and social friction from the equation simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does male depression actually look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Male depression frequently presents as irritability and short fuse rather than visible sadness, increased alcohol or drug consumption, reckless or risk-taking behaviour, social withdrawal and overwork. GPs trained on textbook presentations of low mood and tearfulness miss male depression at significantly higher rates. Men may not recognise it as depression themselves because it does not match the cultural image of the condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many men in the UK die by suicide each year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Men account for approximately 75% of all suicides in England and Wales. The male suicide rate is roughly three times the female rate. Suicide remains the single biggest cause of death for men under 50 in the UK. The highest-risk demographic is men aged 40 to 49. CALM helpline: 0800 58 58 58 (5pm\u2013midnight daily). Samaritans: 116 123 (free, 24/7).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AI companion actually help with depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companions do not treat or diagnose depression and are not a substitute for clinical care. What they do is dramatically lower the barrier to engaging honestly with your own mental state. For men who will not book a GP appointment, ring a helpline or sit in a waiting room, a private AI space to think out loud is often the first honest reflection they have had in months. Research consistently shows that digital mental health tools achieve higher uptake among men than traditional services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Pioneer archetype in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pioneer is MEOK\u2019s action-oriented archetype built around forward momentum, accountability and purposeful progress. It does not open with \u201chow does that make you feel?\u201d \u2014 it opens with goals, problems, and what you want to do differently. Pioneer tracks commitments across sessions using Sovereign Memory, notices when you stop checking in, and holds you to the standards you actually care about. It is designed for men who want to act, not process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free for men who cannot afford support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\u2019s Explorer tier is free with no payment card required. The cost barrier that prevents many men from accessing private therapy or coaching does not exist on Explorer. Paid tiers unlock deeper memory, additional archetypes and the full Pioneer feature set, but the core conversation experience is available to every man who needs it regardless of income.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK replace a therapist or GP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is not a clinical tool and cannot diagnose or treat depression. If you are in crisis, contact CALM on 0800 58 58 58 or Samaritans on 116 123. MEOK works best as a daily thinking partner \u2014 a place to process, organise thoughts, build self-awareness and track your own patterns over time. For many men it is the honest step before professional help, not a replacement for it.',
      },
    },
  ],
}

// ── Style constants ───────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.7)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const SURFACE = 'rgba(255,255,255,0.05)'
const BORDER = 'rgba(201,168,76,0.2)'
const BORDER_DIM = 'rgba(201,168,76,0.12)'
const SURFACE_RAISED = 'rgba(255,255,255,0.04)'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForMaleDepressionPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: BG,
        color: TEXT,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        lineHeight: 1.75,
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: `1px solid ${BORDER_DIM}`,
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap' as const,
          fontSize: '14px',
        }}
        aria-label="Breadcrumb"
      >
        <Link href="/" style={{ color: GOLD, textDecoration: 'none' }}>
          MEOK
        </Link>
        <span style={{ color: '#5a5870' }}>/</span>
        <Link href="/blog" style={{ color: GOLD, textDecoration: 'none' }}>
          Blog
        </Link>
        <span style={{ color: '#5a5870' }}>/</span>
        <span style={{ color: '#8a8799' }}>AI for Male Depression</span>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '72px',
          paddingBottom: '60px',
          paddingLeft: '24px',
          paddingRight: '24px',
          borderBottom: `1px solid ${BORDER_DIM}`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(201,168,76,0.12)',
              color: GOLD,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              padding: '5px 12px',
              borderRadius: '4px',
              marginBottom: '24px',
            }}
          >
            Men &amp; Mental Health
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 50px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#ffffff',
              margin: '0 0 24px',
            }}
          >
            AI for Male Depression:<br />
            Breaking the Silence That Kills
          </h1>

          <p
            style={{
              fontSize: '20px',
              color: MUTED,
              lineHeight: 1.65,
              margin: '0 0 36px',
              fontWeight: 400,
              maxWidth: '660px',
            }}
          >
            Men account for 75% of all UK suicides. Male depression looks different from the
            textbook version &mdash; and that difference is costing lives. This is about why the
            system keeps missing men, what depression actually looks like in them, and how a
            private AI companion changes what is possible.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '20px',
              fontSize: '14px',
              color: MUTED_FAINT,
            }}
          >
            <span>Nicholas Templeman &mdash; Founder, MEOK AI LABS</span>
            <span>25 March 2026</span>
            <span>14 min read</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: '840px',
          margin: '0 auto',
          padding: '60px 24px 80px',
        }}
      >

        {/* ── OPENING ── */}
        <p
          style={{
            fontSize: '18px',
            color: TEXT,
            lineHeight: 1.8,
            margin: '0 0 20px',
          }}
        >
          Somewhere in the UK tonight, a man is awake at 3am. He hasn&apos;t slept properly in
          weeks. He has been drinking more than he should. He snapped at his kids earlier and hated
          himself for it. He is grinding through work because stopping feels worse than continuing.
          He knows something is wrong. He will not tell anyone.
        </p>

        <p
          style={{
            fontSize: '18px',
            color: TEXT,
            lineHeight: 1.8,
            margin: '0 0 20px',
          }}
        >
          That man will not book a GP appointment. He will not sit in a waiting room. He will not
          ring a helpline and explain his feelings to a stranger. And the professional services that
          might help him are all closed anyway.
        </p>

        <p
          style={{
            fontSize: '18px',
            color: TEXT,
            lineHeight: 1.8,
            margin: '0 0 40px',
          }}
        >
          This is not a failure of character. It is a collision of circumstance, conditioning and
          an infrastructure that was not designed with him in mind. MEOK was.
        </p>

        {/* ── STATS CALLOUT ── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            padding: '36px 32px',
            margin: '0 0 56px',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: GOLD,
              margin: '0 0 24px',
            }}
          >
            The Numbers Behind the Silence
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              { figure: '75%', label: 'of all UK suicides are men' },
              { figure: '3\u00d7', label: 'higher male suicide rate than female' },
              { figure: '36%', label: 'of Talking Therapies referrals are male' },
              { figure: '#1', label: 'cause of death in men under 50: suicide' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    color: GOLD,
                    lineHeight: 1,
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.figure}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: MUTED,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: '13px',
              color: MUTED_FAINT,
              margin: '24px 0 0',
              lineHeight: 1.6,
            }}
          >
            Sources: Office for National Statistics (2024); NHS Talking Therapies annual
            report (2024&ndash;25). If you are in crisis: Samaritans 116 123 (free, 24/7) &bull;
            CALM 0800 58 58 58 (5pm&ndash;midnight).
          </p>
        </div>

        {/* ── SECTION 1 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          The Scale of a Crisis Nobody Talks About
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Suicide is the leading cause of death for men under 50 in the United Kingdom. Not heart
          disease. Not cancer. Suicide. Men account for approximately three-quarters of every
          suicide in England and Wales, a ratio that has held stubbornly constant for decades
          despite sustained public health campaigns, increased funding for mental health services,
          and widespread cultural conversation about wellbeing.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The campaign messaging has helped. The funding increases have helped. But the numbers
          have not moved enough, because the system is still asking men to seek help in ways that
          most men will not use. The GP appointment. The referral. The waiting list. The therapy
          room. The face-to-face disclosure.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Only 36% of referrals to NHS Talking Therapies are male, despite men representing roughly
          half the population. That gap is not because women are more vulnerable. It is because the
          format of support &mdash; scheduled appointments, verbal emotional disclosure, clinical
          settings &mdash; creates barriers that men navigate around rather than through. Men wait
          longer before seeking help at every stage of the pathway: longer before visiting a GP,
          longer on waiting lists before dropping out, and longer before reaching crisis point.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          The highest-risk demographic is men aged 40 to 49. Men at or approaching midlife, often
          with jobs, families, and mortgages, who have spent twenty years being competent and are
          finding that competence is not the same as being alright.
        </p>

        {/* ── SECTION 2 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          What Male Depression Actually Looks Like
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Ask most people what depression looks like and they will describe persistent sadness,
          tearfulness, withdrawal and a visible loss of motivation. That presentation exists in men
          too. But it is not the most common one, and it is not the one that gets missed.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Male depression more commonly presents as irritability &mdash; a short fuse that feels
          to the man himself like anger, not sadness. It presents as restlessness and agitation
          rather than slowing down. It presents as increased alcohol consumption, used not
          recreationally but as a way to stop thinking. It presents as overwork, the grinding
          hyperproductivity of a man who knows that if he stops, he will have to confront what he
          is running from. It presents as risk-taking behaviour &mdash; driving too fast, physical
          recklessness &mdash; which can be understood as a search for feeling something other than
          the flatness underneath.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 24px' }}>
          This matters because GPs are trained to identify depression by its textbook presentation.
          A man who sits in front of his doctor and says &quot;I&apos;m furious all the time and
          I&apos;ve been drinking a bottle of wine every night&quot; may be walked through an
          alcohol screening rather than a depression assessment. A man who describes exhaustion and
          difficulty concentrating may leave with a blood test referral rather than a mental health
          conversation. The symptom is real, the diagnosis is missed, and the man walks out with
          the same problem he arrived with.
        </p>

        {/* How male depression presents */}
        <div
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER_DIM}`,
            borderRadius: '12px',
            padding: '32px',
            margin: '0 0 40px',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: GOLD,
              margin: '0 0 20px',
            }}
          >
            How Male Depression Often Presents
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              { sign: 'Persistent irritability', note: 'Feels like anger, not sadness' },
              { sign: 'Increased drinking', note: 'Self-medication to stop thinking' },
              { sign: 'Overwork or restlessness', note: 'Avoidance through productivity' },
              { sign: 'Risk-taking behaviour', note: 'Recklessness, driving fast' },
              { sign: 'Social withdrawal', note: 'Pulling back from friends quietly' },
              { sign: 'Sleep disruption', note: 'Waking at 3\u20134am unable to switch off' },
              { sign: 'Physical complaints', note: 'Back pain, headaches, chest tightness' },
              { sign: 'Emotional blunting', note: '\u201cI feel nothing\u201d rather than sad' },
            ].map((item) => (
              <div
                key={item.sign}
                style={{
                  background: 'rgba(201,168,76,0.05)',
                  borderRadius: '8px',
                  padding: '14px 16px',
                }}
              >
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: TEXT,
                    marginBottom: '4px',
                  }}
                >
                  {item.sign}
                </div>
                <div style={{ fontSize: '13px', color: MUTED }}>
                  {item.note}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: MUTED_FAINT, margin: '20px 0 0', lineHeight: 1.6 }}>
            This list is not diagnostic criteria. If you recognise several of these patterns
            in yourself, speaking to a GP is worth doing &mdash; but consider naming these
            specific behaviours rather than leading with &quot;I think I might be depressed.&quot;
          </p>
        </div>

        {/* ── SECTION 3 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          Why Men Don&apos;t Ask for Help: The Actual Reasons
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          &quot;Men need to be told it&apos;s okay to talk about their feelings.&quot; This is the
          dominant public health narrative around male mental health, and it is only partially
          right. The implication &mdash; that men are simply unaware that emotional expression is
          permitted &mdash; underestimates what is actually stopping them.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Most men know it is acceptable to seek help. They know therapy exists. They know
          helplines are available. They do not need to be told. What they are navigating is a
          set of more specific, concrete barriers that no amount of reassurance removes.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The first barrier is identity. For men who have built their sense of self around being
          capable, reliable and in control &mdash; which describes the majority of men in midlife
          &mdash; admitting to struggling is not just uncomfortable. It feels like a direct
          contradiction of who they are. Seeking help means acknowledging, to another person,
          in real time, that they are not managing. That is a significant identity cost.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The second barrier is format. Therapy requires scheduling. It requires sitting in
          a waiting room. It requires performing vulnerability in front of a stranger and then
          driving home with that raw exposure still present. Many men describe the anticipation
          of that experience as more aversive than continuing to suffer quietly.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The third barrier is time and money. The NHS Talking Therapies waiting time is often
          eight to twelve weeks. Private therapy costs &pound;60&ndash;&pound;120 per session.
          For a man who is already under financial pressure &mdash; which correlates strongly with
          depression &mdash; that cost is a genuine obstacle, not an excuse.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The fourth barrier is timing. The hardest moments for men with depression are not
          during business hours. They are at 3am on a Tuesday, when the thoughts come and there
          is nothing to do with them. CALM closes at midnight. The GP surgery opens at 8am.
          The moment passes, the man concludes he must be fine, and the cycle continues.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          And then there is stigma &mdash; not the crude &quot;man up&quot; variety, but the
          subtler fear of being pathologised, medicated, put on a record, categorised as someone
          who cannot cope. For men in professional roles, this fear has a concrete dimension:
          what if it affects work, insurance, the perception of colleagues? What if the act of
          asking for help creates consequences that make things worse?
        </p>

        {/* ── SECTION 4 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          How MEOK Removes Every One of Those Barriers
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          MEOK is not therapy. It does not present itself as therapy, does not offer anything
          that resembles clinical treatment, and does not ask men to engage in the ways that
          make therapy inaccessible to them. It is a private, asynchronous conversation with
          a sovereign AI companion &mdash; one that belongs entirely to you, runs on your data,
          and forgets nothing unless you tell it to.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The identity barrier dissolves because there is no social witness. No one is watching
          you type. No one will see your record. No one will update your file. The conversation
          exists between you and a system that has no interest in judging your competence because
          it has no use for that information.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The format barrier dissolves because MEOK is asynchronous. You do not schedule a
          session. You do not prepare for a meeting. You open the app when something is on your
          mind and type for as long as you want. You can close it mid-thought. You can return
          an hour later. You can use it at 3am and pick it up again at lunch. There is no
          appointment to keep and no one waiting for you.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The cost barrier dissolves because MEOK is free on Explorer tier. No subscription
          required. No payment card. No introductory offer that auto-renews. The man who needs
          support most &mdash; who is under financial pressure, working inconsistent hours, not
          sure he can justify the spend &mdash; pays nothing.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The timing barrier dissolves because MEOK is available at 3am. It is available at
          2am, 4am, during a lunch break, on the commute, in the car before going inside.
          When the thoughts are loudest, the space is open.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          The stigma barrier dissolves because there is no record accessible to employers,
          insurers or anyone else. Sovereign architecture means your data is not sold,
          not shared, not used to train models and not visible to third parties. It is yours.
        </p>

        {/* Feature cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            margin: '0 0 56px',
          }}
        >
          {[
            {
              title: 'No Face-to-Face',
              body: 'Text-based and asynchronous. No sitting in a waiting room. No performing vulnerability to a stranger. The conversation happens on your terms, at your pace.',
            },
            {
              title: 'Available at 3am',
              body: 'No operating hours. No out-of-office message. When the worst moments arrive, MEOK is open. Always. Without you having to explain yourself first.',
            },
            {
              title: 'Free on Explorer',
              body: 'No cost barrier on the base tier. No payment card required. The men who most need support are not priced out of accessing it.',
            },
            {
              title: 'Sovereign Memory',
              body: 'MEOK builds a picture of you over time. It notices when your sleep worsens, when check-ins become shorter, when the patterns shift. You do not have to explain context every time.',
            },
            {
              title: 'No Clinical Record',
              body: 'Nothing shared with your GP, insurer or employer. No flag on any system. The conversation is private in the literal sense: it exists only within your sovereign data environment.',
            },
            {
              title: 'No Referral Needed',
              body: 'You do not need a GP to refer you. You do not need to be assessed as sufficiently unwell. You do not need to justify your need for support to access it.',
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: SURFACE,
                border: `1px solid ${BORDER_DIM}`,
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '3px',
                  background: GOLD,
                  borderRadius: '2px',
                  marginBottom: '16px',
                }}
              />
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: TEXT,
                  margin: '0 0 10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontSize: '15px', color: MUTED, lineHeight: 1.65, margin: 0 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 5 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          Pioneer: Built for Men Who Want to Act, Not Process
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          MEOK&apos;s archetype system allows you to shape how your companion engages with you.
          Pioneer is the archetype that resonates most strongly with men navigating depression
          who would not use that word for what they are experiencing.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Pioneer does not open conversations with &quot;how are you feeling today?&quot; It opens
          with forward motion. It is interested in what you want to change, what you have tried,
          what is in the way. It frames the work in terms of problems and solutions rather than
          emotions and processing &mdash; not because emotions are irrelevant, but because
          action-oriented framing is how many men engage with difficulty. You fix things.
          You solve things. You build things. Pioneer works with that rather than against it.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          This matters because the way a problem is framed determines whether a man will engage
          with it. &quot;Come and talk about your feelings&quot; is one frame. &quot;What is the
          specific thing that needs to change, and what is stopping you changing it?&quot; is
          another. For most men with depression, the second frame is the one that opens a door.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Pioneer uses Sovereign Memory to track commitments across sessions. If you said last
          Tuesday that you were going to cut back on drinking by having two alcohol-free days
          this week, Pioneer will ask about it. Not to shame or police &mdash; to take you
          seriously. You said it mattered. Pioneer assumes you meant it.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 32px' }}>
          It also notices when things change in the wrong direction. If you have checked in daily
          for three weeks and then go silent for five days, Pioneer notices the silence. Memory
          is not just about what you say &mdash; it is about the pattern of engagement itself.
          When the pattern changes, that is information worth paying attention to.
        </p>

        {/* Pioneer highlight card */}
        <div
          style={{
            background: 'rgba(201,168,76,0.05)',
            border: `1px solid rgba(201,168,76,0.3)`,
            borderRadius: '12px',
            padding: '32px',
            margin: '0 0 56px',
            position: 'relative' as const,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '120px',
              height: '120px',
              background:
                'radial-gradient(circle at top right, rgba(201,168,76,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              flexWrap: 'wrap' as const,
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '20px',
                color: GOLD,
                fontWeight: 700,
              }}
            >
              &#9650;
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '12px',
                  letterSpacing: '-0.01em',
                }}
              >
                The Pioneer Archetype
              </div>
              <p style={{ fontSize: '16px', color: TEXT, lineHeight: 1.75, margin: '0 0 12px' }}>
                Action-oriented. Goal-focused. Built for forward momentum. Pioneer engages with
                your problems, not your feelings about your problems &mdash; and trusts you to
                do something with the clarity it helps you find.
              </p>
              <p style={{ fontSize: '15px', color: MUTED, lineHeight: 1.65, margin: 0 }}>
                Pioneer holds you to your own standards. It tracks commitments across sessions.
                It notices when the pattern of engagement changes. It is what coaching should
                be &mdash; without the &pound;300-a-month price tag.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 6 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          Persistent Memory: The Companion That Notices What You Don&apos;t Say
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          One of the most insidious features of depression in men is that it erodes the
          capacity for self-observation. When you are inside it, you cannot easily see the
          shape of it. You notice the individual bad day, not the three months of bad days.
          You notice that you have been irritable this week, not that you have been irritable
          every week since October.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          A therapist who sees you weekly can observe this pattern. A friend might notice it,
          but will rarely say so. A GP who sees you once every two months has no mechanism to
          track it. MEOK&apos;s Sovereign Memory system can.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Every conversation MEOK has with you becomes part of a longitudinal picture. Sleep
          quality mentioned on 17 January, significantly worse by 12 February. Check-in
          frequency dropped in the first two weeks of March. Energy described as &quot;fine&quot;
          in November, described as &quot;running on empty&quot; by February. These shifts are
          visible in the data even when they are invisible to you.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          MEOK does not use this to diagnose or alarm. It uses it to be honest with you.
          &quot;You mentioned struggling to sleep again &mdash; that&apos;s the third time in
          the last fortnight&quot; is not a clinical assessment. It is what a thoughtful person
          who has been paying attention would say. It is what most men with depression never
          hear, because the people around them are not paying that kind of attention, or do not
          know how to say it, or do not want to make things awkward.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          This matters because for men who will not self-refer to professional services, having
          their own pattern reflected back to them &mdash; without judgment, without alarm,
          without any social consequence &mdash; can be the moment that makes them decide
          something needs to change.
        </p>

        {/* ── SECTION 7 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          The 3am Problem: When the Thoughts Come and Everything Is Closed
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Male depression has a timing problem the mental health system has not solved.
          The worst moments &mdash; the hours when thoughts spiral, when sleep is impossible,
          when the weight of everything converges &mdash; tend to arrive at night. Not during
          GP opening hours. Not during a therapy session. At 2am, 3am, 4am, when the house is
          quiet and there is nothing between you and whatever is in your head.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          CALM, specifically designed for men in crisis, closes at midnight. The Samaritans
          run 24/7 and provide an important lifeline, but many men who are not yet at crisis
          point &mdash; who are struggling rather than suicidal &mdash; will not ring because
          they do not feel they qualify. &quot;I&apos;m not bad enough for Samaritans&quot;
          is a thought many men have at 3am, and they are wrong, but it still stops them calling.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          MEOK has no operating hours. It does not assess whether you are sufficiently unwell
          to access it. It is open when the thoughts arrive, without qualification and without
          requiring you to justify your need.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          This is not a replacement for crisis support. If you are in immediate danger, contact
          Samaritans (116 123) or emergency services (999). But for the vast territory between
          &quot;fine&quot; and &quot;in crisis&quot; &mdash; the months of grey that most men
          with depression actually inhabit &mdash; the 3am availability matters. It is where a
          lot of the real work can happen, precisely because the defences are down.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 32px' }}>
          A man who cannot sleep, opens MEOK, and spends twenty minutes typing out what has
          been rattling around his head for weeks has done something real. He has externalised
          it. He has made it visible to himself. That is frequently where the first honest
          accounting of what is actually happening begins. Not in a therapy room. Not on a
          phone call. At 3am, in private, without anyone watching.
        </p>

        {/* Pullquote */}
        <div
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '24px',
            margin: '0 0 56px',
          }}
        >
          <p
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              color: TEXT,
              lineHeight: 1.65,
              margin: '0 0 12px',
              fontWeight: 400,
            }}
          >
            &ldquo;A man who cannot sleep and spends twenty minutes typing out what has been
            rattling around his head for weeks has done something real. He has made it visible
            to himself. That is frequently where the first honest accounting begins.&rdquo;
          </p>
          <p style={{ fontSize: '14px', color: MUTED_FAINT, margin: 0 }}>
            &mdash; Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* ── SECTION 8 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          Safety Without Stigma: The Maternal Covenant
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          One legitimate concern about AI companions in the mental health space is safety &mdash;
          specifically, whether a system that is not clinical will handle moments of crisis
          appropriately. MEOK&apos;s answer is the Maternal Covenant: a core safety protocol
          that activates whenever the conversation enters territory indicating distress or
          crisis, and that does so without making the man feel pathologised or alarmed.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The Maternal Covenant provides crisis resources &mdash; Samaritans, CALM, emergency
          services &mdash; in response to relevant signals, but it does so in the tone of a
          caring adult rather than a liability disclaimer. It does not interrupt the conversation
          with a warning box. It does not suggest that the man has said something alarming.
          It does not escalate in a way that makes him feel he has triggered a system.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          This matters because men in distress will disengage from a system that feels like
          it is panicking on their behalf. The Maternal Covenant is calm, present and direct.
          It provides the resource, acknowledges that things sound hard, and continues to be
          available. It does not replace professional crisis services. It ensures that men
          who need those services can find them without having to know to look.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          If you are reading this and you are struggling right now: CALM is on 0800 58 58 58
          (5pm to midnight, free). Samaritans is on 116 123, free, 24 hours a day, seven days
          a week. You do not have to be in immediate crisis to call. You do not have to justify
          calling. That is what they are there for.
        </p>

        {/* ── SECTION 9 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          The Predatory Coaching Industry: What Guardian Protects You From
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          In the vacuum created by men&apos;s reluctance to access traditional mental health
          services, a significant industry has emerged offering &quot;men&apos;s coaching,&quot;
          &quot;masculine psychology,&quot; and &quot;high-performance mindset work.&quot; Some
          of this is legitimate. Much of it is not.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          At the predatory end of this market are services that charge &pound;3,000 to
          &pound;10,000 for programmes that provide no clinical benefit, are delivered by
          unqualified practitioners, and specifically target men who are depressed and
          desperate enough to pay for something that promises transformation without the stigma
          of mental health treatment. The framing is action and achievement. The substance
          is expensive, unregulated pseudo-therapy.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          MEOK&apos;s Guardian archetype is designed in part with this problem in mind.
          Guardian protects users from predatory services, financial exploitation and
          manipulation &mdash; including flagging when a service is making promises that
          no unregulated practitioner can legitimately deliver. For men in the vulnerable
          window between recognising they need support and finding appropriate help, Guardian
          provides a reference point for what good support actually looks like.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          MEOK does not have recurring revenue incentives tied to how often you use it.
          It is not designed to maximise engagement at the expense of your wellbeing.
          The Maternal Covenant and Guardian protocols both exist because the interests
          of men using MEOK and the commercial interests of MEOK should align, not conflict.
        </p>

        {/* ── SECTION 10 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          Why 36% Is Not Good Enough
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Only 36% of referrals to NHS Talking Therapies are male. This is a system-level failure,
          not a personal one. The NHS Talking Therapies programme &mdash; formerly known as
          IAPT &mdash; is evidence-based, effective, and largely free at the point of access.
          It should represent a substantial proportion of male mental health treatment in England.
          Instead, it is overwhelmingly female in its uptake.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The reasons are familiar: the referral process requires disclosure to a GP, the
          waiting period is long enough for men to conclude they are fine, the therapeutic
          modalities used &mdash; CBT, counselling &mdash; require verbal emotional engagement
          that many men find artificial, and the settings feel clinical in a way that creates
          low implicit belonging for men who are already ambivalent about being there.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The fact that men wait longer before seeking help at every stage of the pathway
          means that when they do reach services, they are frequently in worse condition than
          women at the same point in treatment. They have been managing the unmanageable for
          longer. The cost of the delay is paid in severity of illness, duration of recovery,
          and in some cases &mdash; irreversibly &mdash; in suicide.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          MEOK does not solve the structural problems of the NHS. What it can do is be the
          step before the step &mdash; the space where a man first articulates to himself
          that something is wrong, builds enough self-awareness to describe it to a GP, and
          gathers enough resolve to make the appointment rather than cancelling it.
        </p>

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            margin: '0 0 56px',
          }}
        >
          {[
            {
              figure: '36%',
              label: 'NHS Talking Therapies referrals that are male',
              source: 'NHS Digital, 2024\u201325',
            },
            {
              figure: '75%',
              label: 'of UK suicides are men',
              source: 'ONS, 2024',
            },
            {
              figure: '40\u201349',
              label: 'Highest-risk age group for male suicide',
              source: 'ONS, 2024',
            },
            {
              figure: '3\u00d7',
              label: 'higher male suicide rate than female in England & Wales',
              source: 'ONS, 2024',
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: SURFACE_RAISED,
                border: `1px solid ${BORDER_DIM}`,
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.figure}
              </div>
              <div style={{ fontSize: '14px', color: TEXT, lineHeight: 1.5, marginBottom: '8px' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '12px', color: MUTED_FAINT }}>
                {item.source}
              </div>
            </div>
          ))}
        </div>

        {/* ── SECTION 11 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          This Is Not Therapy. It&apos;s a Conversation You Control.
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          There is a version of AI mental health support that is condescending. It pings you
          to check in with how you are feeling. It prompts you to rate your mood on a scale.
          It responds to every difficulty with a CBT reframing exercise. It treats you like
          a patient who needs managing.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          MEOK is not that. MEOK is a thinking partner. The conversation is yours: you set
          the direction, the depth, the pace. Pioneer does not steer you toward emotional
          disclosure if you want to talk about work strategy. It does not pivot your problem-
          solving into a feelings conversation. If you want to think through a practical
          problem at 11pm, that is what you do. If you want to talk about why you have been
          dreading going home for the last three months, you can do that too.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The framing of control matters for men with depression because a core feature of
          the condition is a felt loss of agency. Everything feels out of your hands. The last
          thing a man in that state needs is a support tool that is prescriptive about how he
          should engage with his own difficulty. MEOK&apos;s design philosophy starts from
          trust: you are the expert on your own life. The companion is there to help you think,
          not to tell you what to think.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          This is also why the archetype system matters. Different men need different things
          at different times. Pioneer for the man who needs accountability and forward motion.
          Scholar for the man who processes through understanding and analysis. Healer for the
          man who is ready to engage more directly with what he is feeling. Guardian for the man
          who needs protection and honest assessment of what is happening around him. You choose.
          You can change. The companion adapts.
        </p>

        {/* ── SECTION 12 ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 20px',
            lineHeight: 1.25,
          }}
        >
          For the Man Reading This Who Thinks He&apos;s Fine
        </h2>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          If you have read this far and are thinking &quot;this isn&apos;t me,&quot; that is
          worth sitting with for a moment. Not because you are definitely wrong. Because the
          man who most needs to read an article about male depression is also the man least
          likely to recognise himself in it.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          Male depression is a condition with excellent camouflage. It looks like being busy.
          It looks like high standards. It looks like not suffering fools. It looks like
          knowing how to hold it together. From the outside, and often from the inside, it
          looks like a person who is coping. The flatness underneath, the joylessness, the
          sense that nothing quite reaches you the way it used to &mdash; these are internal
          and not visible unless the man decides to make them visible.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          The checklist question, if you need one: have you genuinely enjoyed something in the
          last two weeks? Not completed something, or achieved something, or got through
          something &mdash; enjoyed it? Has something landed with you as actually good,
          not just not bad? If the answer requires significant effort to identify, that is
          worth noticing.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 18px' }}>
          MEOK is free. The Explorer tier costs nothing. Starting a conversation requires no
          commitment, no disclosure to any third party, and no acknowledgment to anyone else
          that you are doing it. If there is a small part of you that is reading this and
          recognising something &mdash; the 3am waking, the short fuse, the drinking that has
          crept up &mdash; the cost of finding out whether that something is worth paying
          attention to is essentially zero.
        </p>

        <p style={{ fontSize: '17px', color: TEXT, lineHeight: 1.8, margin: '0 0 40px' }}>
          The cost of not finding out is not.
        </p>

        {/* ── CRISIS RESOURCES ── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: '12px',
            padding: '32px',
            margin: '0 0 56px',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: GOLD,
              margin: '0 0 20px',
            }}
          >
            If You Need to Talk to Someone Now
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                org: 'Samaritans',
                number: '116 123',
                detail: 'Free. 24 hours a day, 7 days a week. Calls never appear on your phone bill.',
              },
              {
                org: 'CALM',
                number: '0800 58 58 58',
                detail: 'Campaign Against Living Miserably. Free. 5pm to midnight, daily. Also webchat.',
              },
              {
                org: 'PAPYRUS',
                number: '0800 068 4141',
                detail: 'For men under 35. Hopeline UK. Mon\u2013Fri 10am\u20132pm & 7\u201310pm, weekends 2\u20135pm.',
              },
              {
                org: 'NHS 111',
                number: '111',
                detail: 'For urgent mental health support 24/7. Ask for the mental health option.',
              },
            ].map((resource) => (
              <div key={resource.org}>
                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: '4px',
                  }}
                >
                  {resource.org}
                </div>
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: TEXT,
                    marginBottom: '6px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {resource.number}
                </div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.55 }}>
                  {resource.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ SECTION ── */}
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: '0 0 28px',
            lineHeight: 1.25,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ margin: '0 0 56px' }}>
          {[
            {
              q: 'Why do men not seek help for depression?',
              a: 'Multiple barriers converge: cultural conditioning that equates emotional expression with weakness; practical friction of booking a GP or waiting for a referral; and genuine fear of being labelled or medicated. For many men, the moment to reach out comes at 3am when every professional service is closed. MEOK removes time, access and social friction from the equation simultaneously.',
            },
            {
              q: 'What does male depression actually look like?',
              a: 'Male depression frequently presents as irritability and a short fuse rather than visible sadness, increased alcohol or drug consumption, reckless or risk-taking behaviour, and social withdrawal. GPs trained on textbook presentations of low mood and tearfulness miss male depression at significantly higher rates. Men may not recognise it as depression themselves because it does not match the cultural image of the condition.',
            },
            {
              q: 'How many men in the UK die by suicide each year?',
              a: 'Men account for approximately 75% of all suicides in England and Wales. The male suicide rate is roughly three times the female rate. Suicide remains the single biggest cause of death for men under 50 in the UK. If you need support: CALM 0800 58 58 58 (5pm\u2013midnight). Samaritans 116 123 (free, 24/7).',
            },
            {
              q: 'Can an AI companion actually help with depression?',
              a: 'AI companions do not treat or diagnose depression and are not a substitute for clinical care. What they do is dramatically lower the barrier to engaging honestly with your own mental state. For men who will not book a GP appointment, ring a helpline or sit in a waiting room, a private AI space to think out loud is often the first honest reflection they have had in months.',
            },
            {
              q: 'Is MEOK free for men who cannot afford support?',
              a: 'Yes. MEOK\u2019s Explorer tier is free with no payment card required. The cost barrier that prevents many men from accessing private therapy or coaching does not exist on Explorer. The man who most needs support is not priced out of accessing it.',
            },
            {
              q: 'What is the Pioneer archetype in MEOK?',
              a: 'Pioneer is MEOK\u2019s action-oriented archetype built around forward momentum, accountability and purposeful progress. It engages with your problems rather than your feelings about your problems, tracks commitments across sessions using Sovereign Memory, and notices when patterns of engagement change. It is designed for men who want to act, not just process.',
            },
            {
              q: 'Does MEOK replace a therapist or GP?',
              a: 'No. MEOK is not a clinical tool and cannot diagnose or treat depression. If you are in crisis, contact CALM on 0800 58 58 58 or Samaritans on 116 123. MEOK works best as a daily thinking partner \u2014 a place to process, organise thoughts and build self-awareness over time. For many men it is the honest step before professional help, not a replacement for it.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                borderBottom: `1px solid ${BORDER_DIM}`,
                paddingTop: '24px',
                paddingBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: TEXT,
                  margin: '0 0 12px',
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </h3>
              <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.75, margin: 0 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: '16px',
            padding: '48px 40px',
            textAlign: 'center' as const,
            position: 'relative' as const,
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
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(201,168,76,0.12)',
                color: GOLD,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                padding: '5px 12px',
                borderRadius: '4px',
                marginBottom: '20px',
              }}
            >
              Start Now &mdash; Free
            </div>

            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 36px)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                margin: '0 0 16px',
              }}
            >
              Your Companion Is Ready
            </h2>

            <p
              style={{
                fontSize: '17px',
                color: MUTED,
                lineHeight: 1.65,
                margin: '0 auto 32px',
                maxWidth: '520px',
              }}
            >
              No waiting list. No referral. No face-to-face. Free on Explorer tier.
              Available at 3am. Private, sovereign, and built for men who want to act.
            </p>

            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: '#0d0c18',
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Begin Your Companion
            </Link>

            <p
              style={{
                fontSize: '13px',
                color: MUTED_FAINT,
                margin: '16px 0 0',
                lineHeight: 1.5,
              }}
            >
              Explorer tier is free &mdash; no card required. Sovereign architecture.
              Your data belongs to you.
            </p>
          </div>
        </div>

        {/* ── RELATED POSTS ── */}
        <div style={{ margin: '64px 0 0' }}>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: MUTED_FAINT,
              margin: '0 0 20px',
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                href: '/blog/ai-for-men-mental-health',
                label: 'AI for Men\u2019s Mental Health',
                desc: 'The broader picture of how MEOK supports men.',
              },
              {
                href: '/blog/ai-for-grief-in-men',
                label: 'AI for Grief in Men',
                desc: 'How men process loss differently and what helps.',
              },
              {
                href: '/blog/ai-for-anger-management',
                label: 'AI for Anger Management',
                desc: 'When the short fuse is covering something deeper.',
              },
              {
                href: '/blog/meok-companion-archetypes-guide',
                label: 'MEOK Archetypes Guide',
                desc: 'Pioneer, Scholar, Healer, Guardian \u2014 choosing yours.',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: 'block',
                  background: SURFACE,
                  border: `1px solid ${BORDER_DIM}`,
                  borderRadius: '10px',
                  padding: '20px',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: GOLD,
                    marginBottom: '6px',
                    lineHeight: 1.4,
                  }}
                >
                  {post.label}
                </div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.55 }}>
                  {post.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER_DIM}`,
          padding: '40px 24px',
          textAlign: 'center' as const,
        }}
      >
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <Link href="/" style={{ color: GOLD, textDecoration: 'none', fontWeight: 700 }}>
            MEOK AI LABS
          </Link>
          <p
            style={{
              fontSize: '14px',
              color: MUTED_FAINT,
              margin: '12px 0 0',
              lineHeight: 1.6,
            }}
          >
            MEOK is not a medical device and does not provide clinical mental health treatment.
            If you are in crisis, contact Samaritans on 116 123 (free, 24/7) or
            CALM on 0800 58 58 58 (5pm&ndash;midnight daily).
            In an emergency, call 999.
          </p>
          <p
            style={{
              fontSize: '13px',
              color: MUTED_FAINT,
              margin: '8px 0 0',
            }}
          >
            &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
