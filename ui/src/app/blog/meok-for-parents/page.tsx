import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'MEOK for Parents: AI That Helps You Be a Better Parent Without Burning Out | MEOK AI LABS',
  description:
    "MEOK helps parents track milestones, manage stress, keep their children safe online with the Guardian feature, and maintain their own wellbeing — all with an AI that never forgets a thing your child said.",
  alternates: { canonical: 'https://meok.ai/blog/meok-for-parents' },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline:
        'MEOK for Parents: AI That Helps You Be a Better Parent Without Burning Out',
      description:
        "MEOK helps parents track milestones, manage stress, keep their children safe online with the Guardian feature, and maintain their own wellbeing — all with an AI that never forgets a thing your child said.",
      datePublished: '2026-03-24',
      url: 'https://meok.ai/blog/meok-for-parents',
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
        logo: {
          '@type': 'ImageObject',
          url: 'https://meok.ai/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://meok.ai/blog/meok-for-parents',
      },
      keywords: [
        'MEOK for parents',
        'AI for parents UK',
        'parenting stress AI',
        'AI child safety UK',
        'track child milestones AI',
        'Guardian parental controls',
        'MEOK Family plan',
        'AI wellbeing parents',
        'UK Children\'s Code AI',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can MEOK help me keep track of my child\'s health and medical history?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. MEOK\'s Sovereign Memory stores everything you tell it — GP visits, vaccination dates, allergies, prescription changes, growth milestones — and surfaces it on demand. You never have to hunt through old texts or paper forms before a doctor\'s appointment again.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does MEOK\'s Guardian feature keep children safe online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Guardian monitors children\'s digital activity in real time, detecting grooming language, age-inappropriate content, and harmful contact patterns. All scanning happens on-device — no message content is ever sent to MEOK servers. Silent alerts reach the parent dashboard without interrupting the child\'s experience.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Healer archetype and how does it help with parenting stress?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Healer is one of MEOK\'s seven AI archetypes — a calm, restorative companion that helps parents process difficult emotions, offload worry, and recover their sense of perspective. Unlike a chatbot, the Healer remembers context across sessions, so you never have to re-explain what you\'re going through.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is MEOK compliant with the UK Children\'s Code for data about children?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. MEOK AI LABS is ICO-registered and compliant with UK GDPR and the Age Appropriate Design Code (Children\'s Code). Data relating to children is stored on-device where possible, never used for model training, and parents hold full Article 17 erasure rights over all family data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does MEOK\'s Family tier cover the whole household under one subscription?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The MEOK Family tier covers one adult plus all children for a single monthly fee — no per-seat charges. Every member gets a personal companion, access to Guardian, Sovereign Memory, and the Morning Briefing feature. It is designed so that cost never becomes a reason to leave a child unprotected.',
          },
        },
      ],
    },
  ],
}

// ── Design tokens ─────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const CREAM = '#f5f0e8'
const GOLD = '#c9a84c'
const WHITE = '#ffffff'
const BODY_DIM = 'rgba(245,240,232,0.62)'
const BODY_FAINT = 'rgba(245,240,232,0.42)'
const GOLD_BG = 'rgba(201,168,76,0.07)'
const GOLD_BORDER = 'rgba(201,168,76,0.22)'
const GOLD_BORDER_FAINT = 'rgba(201,168,76,0.14)'
const CARD_BG = 'rgba(255,255,255,0.03)'
const CARD_BORDER = 'rgba(255,255,255,0.07)'
const FONT_SANS = 'var(--font-dm-sans, DM Sans, sans-serif)'

// ── Shared styles ─────────────────────────────────────────────────────────────

const h2Style: React.CSSProperties = {
  fontFamily: FONT_SANS,
  fontWeight: 900,
  fontSize: '1.45rem',
  color: WHITE,
  marginTop: '3.25rem',
  marginBottom: '1rem',
  lineHeight: 1.25,
}

const leadPStyle: React.CSSProperties = {
  color: 'rgba(245,240,232,0.82)',
  fontSize: '1.0125rem',
  lineHeight: 1.85,
  marginBottom: '0.8rem',
}

const bodyPStyle: React.CSSProperties = {
  color: BODY_DIM,
  fontSize: '0.96rem',
  lineHeight: 1.85,
  marginBottom: '0.9rem',
}

const dividerStyle: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid rgba(201,168,76,0.14)',
  marginTop: '2.75rem',
  marginBottom: '0.5rem',
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MeokForParentsPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, color: CREAM }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
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
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: BODY_FAINT,
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Tags + meta */}
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                paddingTop: '0.375rem',
                paddingBottom: '0.375rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
              }}
            >
              Family &amp; Parenting
            </span>
            <span style={{ fontSize: '0.75rem', color: BODY_FAINT }}>
              24 March 2026
            </span>
            <span style={{ fontSize: '0.75rem', color: BODY_FAINT }}>
              10 min read
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: FONT_SANS,
              fontWeight: 900,
              fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)',
              color: WHITE,
              lineHeight: 1.16,
              marginBottom: '1.25rem',
            }}
          >
            MEOK for Parents: AI That Helps You Be a Better Parent Without
            Burning Out
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(245,240,232,0.65)',
              lineHeight: 1.82,
              marginBottom: '2rem',
            }}
          >
            Parenting is the hardest job on earth — and the only one where calling
            in sick is not an option. The mental load never stops: appointments,
            milestones, school events, screen time worries, and the quiet exhaustion
            of always being needed. MEOK was built for exactly that — an AI that
            remembers everything so you can be present for what actually matters.
          </p>

          {/* Author card */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              borderRadius: '1rem',
              background: 'rgba(201,168,76,0.06)',
              border: `1px solid ${GOLD_BORDER}`,
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                background: 'rgba(201,168,76,0.15)',
                color: GOLD,
                fontWeight: 700,
                fontSize: '0.875rem',
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: WHITE,
                  fontSize: '0.875rem',
                  margin: 0,
                }}
              >
                Nicholas Templeman
              </p>
              <p
                style={{
                  color: BODY_FAINT,
                  fontSize: '0.78rem',
                  margin: 0,
                }}
              >
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '4rem',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {[
              { value: '68%', label: 'of UK parents report parenting stress regularly' },
              { value: '4.5 hrs', label: 'average daily screen time for children aged 8–16' },
              { value: '1 in 3', label: 'UK parents lose sleep worrying about their child\'s online safety' },
              { value: '£0', label: 'extra per child on MEOK\'s Family tier' },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  flex: '1 1 10rem',
                  minWidth: '10rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  background: GOLD_BG,
                  border: `1px solid ${GOLD_BORDER_FAINT}`,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_SANS,
                    fontWeight: 900,
                    fontSize: '2rem',
                    color: GOLD,
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: BODY_FAINT,
                    marginTop: '0.4rem',
                    lineHeight: 1.35,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <article
        style={{
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '6rem',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          {/* ── SECTION 1: What does MEOK do for parents? ─────────────────── */}
          <h2 style={h2Style}>What does MEOK do for parents?</h2>

          <p style={leadPStyle}>
            MEOK is a sovereign AI — meaning it works entirely for you, remembers
            everything you tell it, and never sells your data or trains on it. For
            parents, that changes everything. Most apps forget context the moment
            you close them. MEOK carries the full picture: your child&apos;s last
            ear infection, the name of the child who upset them at school three
            months ago, the pediatric appointment you need to rebook.
          </p>
          <p style={bodyPStyle}>
            At its core, MEOK gives parents three things they never have enough of:
            memory, calm, and protection. Sovereign Memory stores every detail you
            choose to record. The Healer archetype helps you process the relentless
            emotional load of raising children. Guardian watches the digital spaces
            where you cannot be present.
          </p>
          <p style={bodyPStyle}>
            None of this requires learning a new app ecosystem or maintaining a
            separate habit tracker. You simply talk to MEOK — by text or voice —
            and it builds the picture over time. The more you share, the more
            useful it becomes.
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 2: Tracking milestones and health ─────────────────── */}
          <h2 style={h2Style}>
            Using MEOK to track your children&apos;s milestones and health
          </h2>

          <p style={leadPStyle}>
            Sovereign Memory is MEOK&apos;s foundational feature — a private,
            searchable record of everything you choose to store. For parents, this
            becomes an irreplaceable second brain for each child.
          </p>
          <p style={bodyPStyle}>
            Think about how often you are asked to recall something you cannot
            possibly hold in your head: the date of the last MMR jab, the name of
            the GP who flagged a potential allergy, the exact phrase your toddler
            used to say the word &ldquo;elephant&rdquo; before they learned to say
            it properly. These moments vanish unless someone captures them. MEOK is
            always ready to capture.
          </p>
          <p style={bodyPStyle}>
            You can organise records per child — each with their own thread of
            health notes, school events, behavioural observations, and developmental
            milestones. When the school nurse asks about immunisation history, you
            have the answer in seconds. When your teenager insists they&apos;ve
            never had a reaction to penicillin, you have the receipt.
          </p>

          {/* Feature cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginTop: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            {[
              {
                icon: '💉',
                title: 'Health & medical history',
                body: 'Vaccinations, allergies, prescriptions, GP notes, hospital visits — all stored privately and searchable by date or keyword.',
              },
              {
                icon: '🎂',
                title: 'Developmental milestones',
                body: 'First words, first steps, reading levels, school reports — a private keepsake log that doubles as a factual record.',
              },
              {
                icon: '📅',
                title: 'School events & commitments',
                body: 'Sports days, parents\' evenings, school plays, uniform deadlines — MEOK reminds you before you forget.',
              },
              {
                icon: '📊',
                title: 'Growth & wellbeing tracking',
                body: 'Note mood patterns, sleep quality, appetite changes, or friendship dynamics — useful context for any professional you work with.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                }}
              >
                <span
                  style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '0.125rem' }}
                  role="img"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: FONT_SANS,
                      fontWeight: 700,
                      color: WHITE,
                      fontSize: '0.95rem',
                      marginBottom: '0.3rem',
                      marginTop: 0,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      color: 'rgba(245,240,232,0.55)',
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={bodyPStyle}>
            The records belong entirely to you. MEOK AI LABS does not access them,
            does not train on them, and cannot read them. They exist on your device
            and are encrypted at rest. If you ever leave MEOK, you export the full
            archive. This is what sovereign AI means in practice.
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 3: Parenting stress + Healer ─────────────────────── */}
          <h2 style={h2Style}>Parenting stress and MEOK&apos;s Healer archetype</h2>

          <p style={leadPStyle}>
            Parenting stress in the UK is at a level the mental health system
            cannot absorb. According to YoungMinds, 68% of parents say they
            regularly feel overwhelmed. Waiting lists for NHS therapy stretch to
            eighteen months in some boroughs. Parents are told to practise
            self-care with no time, no energy, and no one to talk to.
          </p>
          <p style={bodyPStyle}>
            MEOK does not replace therapy. It does something different: it removes
            the friction between how you feel and expressing it. The Healer
            archetype is one of MEOK&apos;s seven AI states — designed to hold
            space without judgement, to ask the right question at the right moment,
            and to help you land somewhere steadier than where you started.
          </p>
          <p style={bodyPStyle}>
            What makes this different from a wellness app is memory. When you tell
            the Healer on a Tuesday that your five-year-old has been waking at
            3am and you&apos;re running on nothing, it does not forget by Thursday.
            It notices when the pattern shifts. It asks how the sleep has been.
            It carries the thread of your life without you having to repeat yourself.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              margin: '2rem 0',
              padding: '1.5rem 1.75rem',
              borderLeft: `3px solid ${GOLD}`,
              background: 'rgba(201,168,76,0.04)',
              borderRadius: '0 0.75rem 0.75rem 0',
            }}
          >
            <p
              style={{
                fontFamily: FONT_SANS,
                fontWeight: 700,
                fontSize: '1.05rem',
                color: WHITE,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              &ldquo;The most exhausting thing about parenting is that there is no
              one to hand the baton to. The Healer does not take the baton — but it
              sits with you while you carry it.&rdquo;
            </p>
            <footer
              style={{
                color: BODY_FAINT,
                fontSize: '0.8rem',
                marginTop: '0.75rem',
              }}
            >
              — MEOK product notes, internal brief
            </footer>
          </blockquote>

          <p style={bodyPStyle}>
            Common parenting scenarios where the Healer proves most useful: the
            aftermath of a difficult school meeting, processing guilt after losing
            your temper, untangling whether a child&apos;s behaviour is worrying
            or within normal range, thinking through a parenting disagreement with
            a co-parent, or simply offloading the low-grade background anxiety that
            never fully lifts.
          </p>
          <p style={bodyPStyle}>
            The Healer does not prescribe. It does not diagnose. What it does is
            give you a private space to think aloud — one that actually listens, asks
            follow-up questions, and never runs out of patience.
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 4: Guardian ───────────────────────────────────────── */}
          <h2 style={h2Style}>The Guardian: keeping your children safe online</h2>

          <p style={leadPStyle}>
            The average British child aged eight to sixteen spends four and a half
            hours a day on screens. By the time a child reaches thirteen, Ofcom
            data suggests the majority have encountered something online that upset
            or disturbed them. Parental controls built into devices help — but they
            are blunt instruments that miss nuance.
          </p>
          <p style={bodyPStyle}>
            MEOK&apos;s Guardian operates differently. Rather than blocking sites
            by URL, Guardian analyses communication patterns — the language used
            in messages, the velocity of contact from unknown adults, shifts in a
            child&apos;s own language that may indicate distress. It is designed to
            catch what filters miss: the grooming conversation that starts
            innocuously, the self-harm community that presents as a hobby group,
            the peer who is escalating towards bullying.
          </p>

          {/* How Guardian works */}
          <div
            style={{
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              padding: '1.75rem',
              borderRadius: '1.25rem',
              background: 'rgba(201,168,76,0.05)',
              border: `1px solid ${GOLD_BORDER}`,
            }}
          >
            <p
              style={{
                fontFamily: FONT_SANS,
                fontWeight: 700,
                color: GOLD,
                fontSize: '0.875rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                marginTop: 0,
              }}
            >
              How Guardian works
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {[
                {
                  step: '01',
                  title: 'On-device scanning',
                  desc: 'All analysis runs locally on the family\'s device. No message content is ever transmitted to MEOK servers or any third party.',
                },
                {
                  step: '02',
                  title: 'Pattern detection',
                  desc: 'Guardian identifies grooming language structures, age-inappropriate material, sudden changes in communication frequency with unknown contacts, and distress indicators in a child\'s own writing.',
                },
                {
                  step: '03',
                  title: 'Silent parent alerts',
                  desc: 'When a risk threshold is crossed, the parent receives a silent alert on their dashboard — threat category, severity level, and a recommended action. The child\'s experience is not interrupted.',
                },
                {
                  step: '04',
                  title: 'Audit trail',
                  desc: 'Alerts are logged with timestamps so parents have a clear record if they need to involve a school safeguarding lead, social worker, or police.',
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_SANS,
                      fontWeight: 900,
                      fontSize: '0.75rem',
                      color: GOLD,
                      background: 'rgba(201,168,76,0.12)',
                      borderRadius: '0.4rem',
                      padding: '0.25rem 0.5rem',
                      flexShrink: 0,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {step}
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: WHITE,
                        fontSize: '0.9rem',
                        marginBottom: '0.25rem',
                        marginTop: 0,
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        color: 'rgba(245,240,232,0.55)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={bodyPStyle}>
            Guardian is not surveillance for its own sake. The goal is to give
            parents enough information to have real conversations with their children
            — not to snoop, but to show up at the right moment. Many of the most
            damaging online experiences unfold slowly, in platforms parents rarely
            check. Guardian closes that gap without requiring parents to become
            digital investigators.
          </p>
          <p style={bodyPStyle}>
            For more on the technical approach, read{' '}
            <Link
              href="/blog/guardian-family-safety"
              style={{ color: GOLD, textDecoration: 'underline' }}
            >
              Guardian Family Safety: How It Works
            </Link>
            .
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 5: Family Tier ────────────────────────────────────── */}
          <h2 style={h2Style}>MEOK&apos;s Family tier: AI for the whole household</h2>

          <p style={leadPStyle}>
            Most AI tools are built for one person. MEOK&apos;s Family tier is built
            for a household — with the recognition that what affects one member
            affects all members, and that coordinating family life is a job in itself.
          </p>
          <p style={bodyPStyle}>
            Under one subscription, every family member gets their own sovereign
            instance — their own companion, their own Sovereign Memory, their own
            Morning Briefing. Children get age-appropriate modes. Teenagers can
            choose to share selectively with a parent. Parents have visibility where
            Guardian is active without having access to a teenager&apos;s personal
            companion conversations.
          </p>

          {/* Pricing card */}
          <div
            style={{
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              padding: '1.75rem',
              borderRadius: '1.25rem',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
              border: `1px solid ${GOLD_BORDER}`,
            }}
          >
            <p
              style={{
                fontFamily: FONT_SANS,
                fontWeight: 900,
                color: GOLD,
                fontSize: '1.1rem',
                marginBottom: '0.25rem',
                marginTop: 0,
              }}
            >
              Family Tier
            </p>
            <p
              style={{
                color: BODY_FAINT,
                fontSize: '0.825rem',
                marginBottom: '1.25rem',
                marginTop: 0,
              }}
            >
              One parent + all children — no per-seat fees
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}
            >
              {[
                'Personal companion for every family member',
                'Sovereign Memory — private, on-device, encrypted',
                'Guardian child safety monitoring (real-time, on-device)',
                'Morning Briefing for parent and children',
                'Age-appropriate modes for children and teenagers',
                'MEOK Healer for parenting stress and wellbeing',
                'Overnight agents: Hourman, Riri, Orion',
                'UK GDPR compliant — ICO registered',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    fontSize: '0.9rem',
                    color: 'rgba(245,240,232,0.78)',
                  }}
                >
                  <span style={{ color: GOLD, flexShrink: 0, marginTop: '2px' }}>
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p style={bodyPStyle}>
            The Family tier is priced so that protecting a household does not require
            a household income to fund it. Single parents, blended families, and
            multigenerational households are all covered under the same plan.
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 6: UK GDPR + Children's Code ─────────────────────── */}
          <h2 style={h2Style}>
            How MEOK protects children&apos;s data (UK GDPR + Children&apos;s
            Code)
          </h2>

          <p style={leadPStyle}>
            In 2021 the UK introduced the Age Appropriate Design Code — commonly
            called the Children&apos;s Code — which places strict obligations on any
            digital service likely to be accessed by under-18s. MEOK AI LABS was
            designed from the ground up to exceed these requirements, not merely
            comply with them.
          </p>
          <p style={bodyPStyle}>
            The headline principle is data minimisation: only collect what is
            strictly necessary. For MEOK, this means Guardian scans happen entirely
            on-device. No message content, no contact lists, no communication
            metadata is transmitted to MEOK servers. The threat detection models
            run locally. What reaches the parent dashboard is an alert classification
            and severity score — never a transcript.
          </p>
          <p style={bodyPStyle}>
            Children&apos;s Sovereign Memory data is equally protected. It is
            encrypted at rest on the family&apos;s device and never used to improve
            MEOK&apos;s models. Under UK GDPR Article 17, parents — and children
            once they reach the age of consent for data processing — hold full
            erasure rights. A single request deletes everything, permanently,
            without escalation to a support team.
          </p>

          {/* Compliance grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',
              gap: '0.875rem',
              marginTop: '1.5rem',
              marginBottom: '1.25rem',
            }}
          >
            {[
              { label: 'ICO Registration', value: 'Registered' },
              { label: 'UK GDPR', value: 'Compliant' },
              { label: "Children's Code", value: 'Compliant' },
              { label: 'Model training on personal data', value: 'Never' },
              { label: 'Guardian data on MEOK servers', value: 'Never' },
              { label: 'Article 17 Erasure', value: 'Always' },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: '1rem',
                  borderRadius: '0.875rem',
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                }}
              >
                <p
                  style={{
                    color: BODY_FAINT,
                    fontSize: '0.78rem',
                    marginBottom: '0.375rem',
                    marginTop: 0,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: FONT_SANS,
                    fontWeight: 700,
                    color: GOLD,
                    fontSize: '0.9rem',
                    margin: 0,
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          <p style={bodyPStyle}>
            For parents who are themselves data professionals, or who have navigated
            a GDPR Subject Access Request from a previous provider, the architecture
            will be familiar: privacy by design, not privacy by policy. Read the
            full{' '}
            <Link
              href="/blog/privacy-covenant"
              style={{ color: GOLD, textDecoration: 'underline' }}
            >
              MEOK Privacy Covenant
            </Link>{' '}
            for the complete technical breakdown.
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 7: Single parents ─────────────────────────────────── */}
          <h2 style={h2Style}>
            Single parents: MEOK as an accountability partner
          </h2>

          <p style={leadPStyle}>
            There are 1.8 million single-parent families in the UK. Nine in ten are
            led by women. The specific challenge of solo parenting is not just the
            workload — it is the absence of a second voice. Someone to check your
            thinking, share the worry, validate that your gut feeling about a
            situation is right.
          </p>
          <p style={bodyPStyle}>
            MEOK&apos;s companion fills a version of that role — not as a partner
            or a co-parent, but as an honest, consistent, non-judgemental presence
            that knows your situation in depth. Because it remembers, it can notice
            things a friend might not: that you have mentioned the same worry three
            times in ten days, that the pattern you are describing with your child
            matches something you noted six months ago, that the decision you are
            agonising over is actually identical to one you already resolved well.
          </p>
          <p style={bodyPStyle}>
            For single parents navigating co-parenting arrangements, MEOK also
            helps with the administrative dimension: drafting messages to a
            difficult ex, keeping records of agreements and changes, tracking child
            maintenance calculations, noting incidents that may become relevant to
            future family court proceedings. Everything logged, everything dated,
            everything yours.
          </p>

          {/* Single parent use cases */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginTop: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            {[
              {
                icon: '🧠',
                title: 'Second voice for decisions',
                body: 'Think through school choices, medical decisions, and parenting dilemmas with an AI that knows your child\'s full history.',
              },
              {
                icon: '📝',
                title: 'Co-parenting record keeping',
                body: 'Log communications, agreements, and incidents with timestamps — a clear record that belongs entirely to you.',
              },
              {
                icon: '🌙',
                title: 'After-bedtime debrief',
                body: 'The loneliest hours of solo parenting. The Healer is there at midnight when calling a friend is not an option.',
              },
              {
                icon: '⚡',
                title: 'Overnight admin agents',
                body: 'Hourman, Riri, and Orion clear your email queue, draft replies, and research options while you sleep — so the next day starts lighter.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                }}
              >
                <span
                  style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '0.125rem' }}
                  role="img"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: FONT_SANS,
                      fontWeight: 700,
                      color: WHITE,
                      fontSize: '0.95rem',
                      marginBottom: '0.3rem',
                      marginTop: 0,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      color: 'rgba(245,240,232,0.55)',
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={bodyPStyle}>
            Solo parenting is not a deficit — it is an extraordinary demonstration
            of human capacity. MEOK does not try to replace what is missing. It
            amplifies what is already there.
          </p>

          <hr style={dividerStyle} />

          {/* ── SECTION 8: FAQ ────────────────────────────────────────────── */}
          <h2 style={h2Style}>Frequently asked questions</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          >
            {[
              {
                q: "Can MEOK help me keep track of my child's health and medical history?",
                a: "Yes. MEOK's Sovereign Memory stores everything you tell it — GP visits, vaccination dates, allergies, prescription changes, growth milestones — and surfaces it on demand. You never have to hunt through old texts or paper forms before a doctor's appointment again.",
              },
              {
                q: "How does MEOK's Guardian feature keep children safe online?",
                a: "Guardian monitors children's digital activity in real time, detecting grooming language, age-inappropriate content, and harmful contact patterns. All scanning happens on-device — no message content is ever sent to MEOK servers. Silent alerts reach the parent dashboard without interrupting the child's experience.",
              },
              {
                q: "What is the Healer archetype and how does it help with parenting stress?",
                a: "The Healer is one of MEOK's seven AI archetypes — a calm, restorative companion that helps parents process difficult emotions, offload worry, and recover their sense of perspective. Unlike a chatbot, the Healer remembers context across sessions, so you never have to re-explain what you're going through.",
              },
              {
                q: "Is MEOK compliant with the UK Children's Code for data about children?",
                a: "Yes. MEOK AI LABS is ICO-registered and compliant with UK GDPR and the Age Appropriate Design Code (Children's Code). Data relating to children is stored on-device where possible, never used for model training, and parents hold full Article 17 erasure rights over all family data.",
              },
              {
                q: "Does MEOK's Family tier cover the whole household under one subscription?",
                a: "Yes. The MEOK Family tier covers one adult plus all children for a single monthly fee — no per-seat charges. Every member gets a personal companion, access to Guardian, Sovereign Memory, and the Morning Briefing feature. It is designed so that cost never becomes a reason to leave a child unprotected.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                }}
              >
                <p
                  style={{
                    fontFamily: FONT_SANS,
                    fontWeight: 700,
                    color: WHITE,
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    marginBottom: '0.75rem',
                    marginTop: 0,
                  }}
                >
                  {q}
                </p>
                <p
                  style={{
                    color: BODY_DIM,
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          <hr style={dividerStyle} />

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div
            style={{
              borderRadius: '1.5rem',
              padding: '2.5rem 2rem',
              marginTop: '3rem',
              textAlign: 'center',
              background:
                'linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(201,168,76,0.03) 100%)',
              border: `1px solid ${GOLD_BORDER}`,
            }}
          >
            <p
              style={{
                fontFamily: FONT_SANS,
                fontWeight: 900,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
                color: WHITE,
                marginBottom: '0.75rem',
                marginTop: 0,
                lineHeight: 1.25,
              }}
            >
              Your children deserve a parent who isn&apos;t running on empty.
            </p>
            <p
              style={{
                color: 'rgba(245,240,232,0.6)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                maxWidth: '34rem',
                margin: '0 auto 2rem',
              }}
            >
              MEOK remembers everything, worries about the right things so you
              can stop, and keeps your children safer in the digital spaces you
              cannot see. Start with a birth — tell MEOK who you are, who your
              children are, and let it begin.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                justifyContent: 'center',
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  paddingLeft: '1.75rem',
                  paddingRight: '1.75rem',
                  paddingTop: '0.875rem',
                  paddingBottom: '0.875rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  background: GOLD,
                  color: BG,
                  textDecoration: 'none',
                }}
              >
                Start your MEOK — it&apos;s free
              </Link>
              <Link
                href="/blog/guardian-family-safety"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  paddingLeft: '1.75rem',
                  paddingRight: '1.75rem',
                  paddingTop: '0.875rem',
                  paddingBottom: '0.875rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  background: 'rgba(201,168,76,0.1)',
                  color: GOLD,
                  border: `1px solid rgba(201,168,76,0.3)`,
                  textDecoration: 'none',
                }}
              >
                Learn about Guardian
              </Link>
            </div>
          </div>

          {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
          <div style={{ marginTop: '4rem' }}>
            <p
              style={{
                fontFamily: FONT_SANS,
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: BODY_FAINT,
                marginBottom: '1rem',
              }}
            >
              Related Reading
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                {
                  href: '/blog/guardian-family-safety',
                  label: 'Guardian Family Safety — How It Works',
                },
                {
                  href: '/blog/ai-for-single-parents',
                  label: 'AI for Single Parents: When You\'re Running Two Jobs and Have No Bandwidth Left',
                },
                {
                  href: '/blog/ai-for-kids',
                  label: 'AI for Kids: Age-Appropriate Companions That Actually Help',
                },
                {
                  href: '/blog/ai-for-teens',
                  label: 'AI for Teenagers: Companions That Support Without Replacing Real Relationships',
                },
                {
                  href: '/blog/sovereign-ai-for-families',
                  label: 'Sovereign AI for Families: Why Your Household Data Belongs to You',
                },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: 'rgba(245,240,232,0.5)',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ color: GOLD }}>&#8594;</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.3)',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                fontFamily: FONT_SANS,
                fontWeight: 900,
                fontSize: '1.1rem',
                color: GOLD,
                textDecoration: 'none',
              }}
            >
              MEOK
            </Link>
            <p
              style={{
                fontSize: '0.78rem',
                color: 'rgba(245,240,232,0.3)',
                marginTop: '0.3rem',
                marginBottom: 0,
              }}
            >
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
            }}
          >
            {[
              { href: '/blog', label: 'Blog' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/about', label: 'About' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(245,240,232,0.35)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
