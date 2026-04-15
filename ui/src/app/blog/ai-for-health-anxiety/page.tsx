import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Health Anxiety: Breaking the Symptom-Checking Cycle | MEOK AI LABS',
  description:
    'Health anxiety and cyberchondria trap millions in a reassurance-seeking loop. Learn how MEOK AI processes the fear behind the symptom — without diagnosing, dismissing, or reassuring falsely.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-health-anxiety' },
  openGraph: {
    title: 'AI for Health Anxiety: Breaking the Symptom-Checking Cycle',
    description:
      'How MEOK breaks the cyberchondria loop — processing the fear behind the symptom rather than feeding it. Sycophancy detection, Healer archetype, Guardian flagging, and Sovereign Memory.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-health-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Health+Anxiety%3A+Breaking+the+Symptom-Checking+Cycle&desc=Processing+the+fear+behind+the+symptom',
        width: 1200,
        height: 630,
        alt: 'AI for Health Anxiety: Breaking the Symptom-Checking Cycle | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Health Anxiety: Breaking the Symptom-Checking Cycle',
    description:
      'MEOK breaks the cyberchondria loop by processing the fear behind the symptom — never diagnosing, never falsely reassuring, always referring when needed.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Health+Anxiety%3A+Breaking+the+Symptom-Checking+Cycle&desc=Processing+the+fear+behind+the+symptom',
    ],
  },
}

// ── JSON-LD: Article ─────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Health Anxiety: Breaking the Symptom-Checking Cycle',
  description:
    'A detailed guide to how AI can support people with health anxiety (illness anxiety disorder) and cyberchondria — by processing the underlying fear rather than feeding the reassurance-seeking loop. Covers MEOK features including sycophancy detection, Healer archetype, Guardian flagging, and Sovereign Memory.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-health-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-health-anxiety',
  },
  keywords: [
    'AI for health anxiety',
    'cyberchondria',
    'illness anxiety disorder',
    'hypochondria support',
    'symptom checking cycle',
    'health anxiety AI support',
    'reassurance seeking loop',
    'MEOK health anxiety',
  ],
}

// ── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is health anxiety (illness anxiety disorder)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Health anxiety, clinically called illness anxiety disorder, is a condition in which a person experiences persistent, excessive fear of having or developing a serious illness. It is not the same as being health-conscious or cautious — the anxiety is disproportionate to any actual medical evidence, causes significant distress, and often leads to compulsive checking behaviours. The older term hypochondria carries unfair stigma; illness anxiety disorder is a recognised and treatable anxiety condition.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is cyberchondria and how does it make health anxiety worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cyberchondria is the escalation of health anxiety through repeated internet symptom-checking. Unlike a GP consultation, search engines surface worst-case results first. Each search provides momentary relief — then the anxiety reattaches to new search terms. Over dozens of cycles the person\'s threat model expands dramatically; they discover conditions they had never worried about before. Studies show that health-anxious people emerge from symptom-search sessions significantly more distressed than when they started.',
      },
    },
    {
      '@type': 'Question',
      name: 'How common is health anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research estimates that health anxiety is the primary driver of 4 to 5 percent of all GP consultations. People with significant health anxiety use healthcare resources approximately three times more than the general population, yet consistently report lower satisfaction with reassurance received. This creates an expensive and distressing loop for both patient and healthcare system — one that better emotional support upstream could substantially reduce.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the reassurance-seeking loop and why is it so hard to break?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The reassurance-seeking loop works like this: a body sensation triggers anxious interpretation; anxiety drives seeking (googling, asking loved ones, visiting a GP); the sought reassurance briefly reduces anxiety; but because the underlying fear was never processed — only temporarily silenced — it returns, often stronger. The brain has been conditioned to treat seeking as the solution, making each future episode harder to resist.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with health anxiety differently from a search engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK redirects the conversation from "what could this symptom mean?" to "what is this fear trying to protect you from?" It does not provide symptom information, diagnostic probabilities, or false reassurance. Instead it uses the Healer archetype to explore the emotional roots of health anxiety, the Guardian to flag genuine medical red flags that need GP attention, and Sovereign Memory to track anxiety patterns over time so cycles become visible rather than overwhelming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK ever tell me "I\'m sure it\'s nothing"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK includes a sycophancy detector specifically to prevent false reassurance. Saying "I\'m sure it\'s nothing" to someone with health anxiety is not kind — it is a response that temporarily satisfies the anxious demand while deepening the dependence on external reassurance. MEOK will acknowledge your fear, explore its roots, and sit with uncertainty alongside you — but it will never dismiss your concern with hollow comfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'When will MEOK tell me to see a GP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Guardian archetype is designed to recognise when a concern crosses from anxiety-driven catastrophising into a symptom pattern that genuinely warrants medical assessment. When that threshold is met, MEOK will clearly and directly recommend you contact your GP or NHS 111. MEOK will never dismiss a medical concern in the name of anxiety management — that would be both negligent and contrary to the entire care-first design of the platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK diagnose me or tell me what my symptoms mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is not a medical tool and will never diagnose, speculate about diagnoses, or interpret symptoms. If you need medical assessment, the right path is always your GP or NHS 111. MEOK works only with the emotional and psychological layer — the fear, the cycle, the underlying beliefs — and explicitly refers all clinical questions to qualified healthcare professionals.',
      },
    },
  ],
}

// ── Style constants ──────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = '#9e9e9e'
const MUTED_SOFT = 'rgba(245,240,232,0.62)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const HEALER_GREEN = '#4caf82'
const GUARDIAN_PURPLE = '#9b6dda'
const SCHOLAR_BLUE = '#5b9bd5'
const BORDER = 'rgba(201,168,76,0.18)'
const CARD_BG = 'rgba(255,255,255,0.03)'
const CARD_BG_HOVER = 'rgba(255,255,255,0.05)'
const WARNING_BG = 'rgba(232,160,69,0.08)'
const WARNING_BORDER = 'rgba(232,160,69,0.35)'
const DANGER_BG = 'rgba(220,80,80,0.07)'
const DANGER_BORDER = 'rgba(220,80,80,0.3)'
const HEALER_BG = 'rgba(76,175,130,0.07)'
const HEALER_BORDER = 'rgba(76,175,130,0.3)'
const GUARDIAN_BG = 'rgba(155,109,218,0.07)'
const GUARDIAN_BORDER = 'rgba(155,109,218,0.3)'
const SCHOLAR_BG = 'rgba(91,155,213,0.07)'
const SCHOLAR_BORDER = 'rgba(91,155,213,0.3)'

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AIForHealthAnxietySymptomCheckingPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: BG,
        color: TEXT,
        fontFamily: 'system-ui, -apple-system, sans-serif',
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

      {/* ── NAV BAR ──────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: `1px solid ${BORDER}`,
          backdropFilter: 'blur(12px)',
          background: 'rgba(13,12,24,0.88)',
        }}
      >
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '3.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: '1.125rem',
              letterSpacing: '0.04em',
              color: TEXT,
              textDecoration: 'none',
            }}
          >
            MEOK<span style={{ color: GOLD }}>.</span>AI
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link
              href="/blog"
              style={{ color: MUTED_SOFT, textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Blog
            </Link>
            <Link
              href="/features"
              style={{ color: MUTED_SOFT, textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              style={{ color: MUTED_SOFT, textDecoration: 'none', fontSize: '0.875rem' }}
            >
              Pricing
            </Link>
            <Link
              href="/birth"
              style={{
                color: BG,
                background: GOLD,
                textDecoration: 'none',
                fontSize: '0.8125rem',
                fontWeight: 700,
                padding: '0.4rem 1rem',
                borderRadius: '0.375rem',
                letterSpacing: '0.03em',
              }}
            >
              Try MEOK
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
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
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          {/* breadcrumb */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              color: MUTED,
              fontSize: '0.8125rem',
              textDecoration: 'none',
              marginBottom: '1.75rem',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ fontSize: '0.75rem' }}>&#8592;</span> All articles
          </Link>

          {/* category pill */}
          <div
            style={{
              display: 'inline-block',
              background: WARNING_BG,
              border: `1px solid ${WARNING_BORDER}`,
              color: '#e8a045',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.25rem 0.75rem',
              borderRadius: '99px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Mental Health &amp; AI
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.875rem, 5vw, 2.875rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
              color: TEXT,
            }}
          >
            AI for Health Anxiety:{' '}
            <span style={{ color: GOLD }}>Breaking the Symptom-Checking Cycle</span>
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: MUTED_SOFT,
              marginBottom: '2rem',
              maxWidth: '42rem',
            }}
          >
            Millions of people spend hours each week checking symptoms online, seeking reassurance
            that temporarily dissolves — then returns stronger than before. This is not weakness.
            It is a well-understood anxiety cycle. And the right kind of AI can help break it
            without making it worse.
          </p>

          {/* meta row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              paddingTop: '1.25rem',
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${GOLD}, rgba(201,168,76,0.4))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: BG,
                }}
              >
                NT
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: TEXT }}>
                  Nicholas Templeman
                </div>
                <div style={{ fontSize: '0.75rem', color: MUTED }}>Founder, MEOK AI LABS</div>
              </div>
            </div>
            <div style={{ fontSize: '0.8125rem', color: MUTED }}>25 March 2026</div>
            <div style={{ fontSize: '0.8125rem', color: MUTED }}>14 min read</div>
            <div
              style={{
                marginLeft: 'auto',
                fontSize: '0.75rem',
                color: MUTED_FAINT,
                fontStyle: 'italic',
              }}
            >
              Not medical advice &mdash; always consult your GP
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDICAL DISCLAIMER ───────────────────────────────────────────────── */}
      <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', marginBottom: '0.5rem' }}>
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            background: DANGER_BG,
            border: `1px solid ${DANGER_BORDER}`,
            borderRadius: '0.625rem',
            padding: '1rem 1.25rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: MUTED_SOFT, margin: 0 }}>
            <strong style={{ color: TEXT }}>Important:</strong> This article is for informational
            and emotional support purposes only. MEOK is not a medical tool and cannot diagnose
            any condition. If you have a physical symptom that concerns you, please contact your
            GP or call{' '}
            <strong style={{ color: TEXT }}>NHS 111</strong>. In an emergency, call{' '}
            <strong style={{ color: TEXT }}>999</strong>.
          </p>
        </div>
      </div>

      {/* ── ARTICLE BODY ─────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '2.5rem 1.5rem 4rem',
        }}
      >
        {/* ── SECTION 1: What is health anxiety? ───────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What exactly is health anxiety — and is it the same as hypochondria?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            Health anxiety — clinically called <strong style={{ color: TEXT }}>illness
            anxiety disorder</strong> — is a persistent, disproportionate fear of having or
            developing a serious illness. The older term &ldquo;hypochondria&rdquo; carries
            decades of dismissive connotation, implying that the person is inventing or
            exaggerating. That framing is both inaccurate and harmful.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            People with health anxiety are not imagining their fear. The distress is entirely
            real. The body sensations that trigger the fear — a racing heart, a headache, a
            muscle twitch — are real too. What is distorted is the interpretive layer: the
            automatic assignment of catastrophic meaning to signals that most people would
            register and forget.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.5rem',
            }}
          >
            Illness anxiety disorder is classified within the anxiety spectrum in current
            diagnostic frameworks. It overlaps meaningfully with health OCD — a subtype of
            obsessive-compulsive disorder — and with somatic symptom disorder, where physical
            symptoms are present and real but amplified by anxiety. The distinction matters
            clinically because treatment approaches differ, but what all three share is an
            anxiety mechanism that demands repeated checking as its preferred coping behaviour.
          </p>

          {/* key fact box */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '0.75rem',
              }}
            >
              Clinical context
            </div>
            <ul
              style={{
                margin: 0,
                padding: '0 0 0 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                Health anxiety is <strong style={{ color: TEXT }}>not</strong> hypochondria in
                the pejorative sense — it is a recognised anxiety condition.
              </li>
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                It exists on a spectrum from mild health worry to significantly disabling
                preoccupation.
              </li>
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                Cognitive-behavioural therapy (CBT) and acceptance and commitment therapy
                (ACT) are first-line treatments with strong evidence bases.
              </li>
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                If health OCD is suspected, exposure and response prevention (ERP) is the
                recommended approach — OCD-UK (ocduk.org) provides specialist guidance.
              </li>
            </ul>
          </div>
        </section>

        {/* ── SECTION 2: Cyberchondria ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            Why does internet symptom-checking make health anxiety dramatically worse?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            Cyberchondria is the specific escalation of health anxiety through repeated online
            symptom-checking. The term was first used in academic literature in the early 2000s
            and has become significantly more relevant since smartphones put a search engine
            permanently in every pocket.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            The mechanism is straightforward but pernicious. Search algorithms are designed to
            surface the most attention-capturing results — which for medical queries means the
            most alarming possibilities. A search for &ldquo;mild chest discomfort&rdquo; will
            return cardiac conditions within the first three results, regardless of statistical
            likelihood. The person with health anxiety encounters these results not as a ranked
            probability list but as a menu of possible catastrophes to worry about.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            Each search session follows a predictable arc: discomfort triggers searching;
            searching uncovers alarming possibilities; alarm intensifies; a reassuring
            explanation is eventually found; brief relief; within minutes the anxiety
            reattaches — often to a new concern discovered during the original search. The
            person emerges from the session having found &ldquo;an answer,&rdquo; but the
            anxiety level is typically higher than before they began.
          </p>

          {/* loop diagram */}
          <div
            style={{
              background: WARNING_BG,
              border: `1px solid ${WARNING_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.5rem',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#e8a045',
                marginBottom: '1rem',
              }}
            >
              The cyberchondria cycle
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}
            >
              {[
                ['1', 'Body sensation noticed (racing heart, headache, fatigue)'],
                ['2', 'Anxious interpretation: "This could be serious"'],
                ['3', 'Search for symptoms online'],
                ['4', 'Encounter alarming worst-case results'],
                ['5', 'Anxiety escalates'],
                ['6', 'Find a reassuring explanation — brief relief (minutes to hours)'],
                ['7', 'Anxiety returns, often attached to a new symptom discovered in step 4'],
                ['8', 'Threat model has expanded — new diseases now on the worry list'],
              ].map(([num, text]) => (
                <div
                  key={num}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      minWidth: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      background: 'rgba(232,160,69,0.2)',
                      border: '1px solid rgba(232,160,69,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#e8a045',
                      flexShrink: 0,
                    }}
                  >
                    {num}
                  </div>
                  <span style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
            }}
          >
            Critically, the internet does not just amplify existing anxiety — it actively
            expands the scope of what there is to worry about. People with health anxiety who
            search symptoms regularly develop new health fears they did not have before, because
            search results introduce medical conditions that then enter their catastrophe
            vocabulary. This is cyberchondria at its most damaging: not just maintaining fear
            but creating new objects for it to latch onto.
          </p>
        </section>

        {/* ── SECTION 3: Statistics ────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            How widespread is health anxiety in the healthcare system?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.5rem',
            }}
          >
            Health anxiety is not a niche concern. Research consistently places it as the
            primary driver behind{' '}
            <strong style={{ color: TEXT }}>4 to 5 percent of all GP consultations</strong> —
            a significant share of primary care demand driven not by organic illness but by
            an anxiety disorder that requires different support than further investigation can
            provide.
          </p>

          {/* stats grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                stat: '4–5%',
                label: 'of GP visits are primarily health anxiety driven',
                color: GOLD,
              },
              {
                stat: '3×',
                label: 'more healthcare resources used by health-anxious individuals',
                color: HEALER_GREEN,
              },
              {
                stat: '~5%',
                label: 'estimated population prevalence of clinically significant health anxiety',
                color: SCHOLAR_BLUE,
              },
              {
                stat: 'Low',
                label: 'satisfaction with reassurance received — despite higher care utilisation',
                color: GUARDIAN_PURPLE,
              },
            ].map(({ stat, label, color }) => (
              <div
                key={stat}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color,
                    lineHeight: 1.1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat}
                </div>
                <div style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: MUTED_SOFT }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
            }}
          >
            The three-times higher healthcare usage figure is particularly important to
            understand. People with health anxiety are not using more healthcare because they
            are sicker — they are using more because the reassurance provided by medical
            consultation follows the same temporary relief pattern as internet searching. The
            doctor says there is nothing wrong; the patient feels better; within days the
            cycle restarts and another appointment is made. The problem is not lack of medical
            access — it is the absence of the psychological support that actually interrupts
            the cycle.
          </p>
        </section>

        {/* ── SECTION 4: Reassurance-seeking loop ──────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            Why does reassurance provide only temporary relief — and why does it escalate anxiety over time?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            This is the central paradox of health anxiety: seeking reassurance feels like the
            solution, but it is actually a significant part of the problem. The relief that
            follows reassurance is real — for a window of minutes to hours, anxiety genuinely
            drops. But that relief trains the nervous system to treat seeking as the correct
            response to anxiety, making the seeking behaviour stronger with each repetition.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            This is operant conditioning. The anxious spike is the trigger; seeking is the
            behaviour; relief is the reward. The reward is powerful enough that the brain
            learns: &ldquo;when I feel this way, I must do this thing.&rdquo; Over time the
            threshold for triggering the cycle lowers — sensations that would previously have
            been ignored now reliably activate the seeking impulse.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            There is also a second mechanism at play: tolerance. Just as with many conditioning
            processes, the amount of reassurance required to produce the same level of relief
            escalates. The GP visit that provided three weeks of calm last year now provides
            three days. The forum post that settled anxiety for an afternoon now needs to be
            read four times before it works. The person finds themselves trapped in an
            ever-accelerating spiral, consuming more reassurance for diminishing returns.
          </p>

          <blockquote
            style={{
              borderLeft: `3px solid ${GOLD}`,
              paddingLeft: '1.25rem',
              marginLeft: 0,
              marginRight: 0,
              marginBottom: '1.25rem',
            }}
          >
            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: TEXT,
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              &ldquo;Reassurance is not care. It is a painkiller that treats the symptom of
              anxiety while leaving the wound entirely open. The care is in sitting with the
              fear long enough to understand what it is actually about.&rdquo;
            </p>
            <footer
              style={{
                marginTop: '0.625rem',
                fontSize: '0.8125rem',
                color: MUTED,
              }}
            >
              — MEOK design philosophy
            </footer>
          </blockquote>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
            }}
          >
            Evidence-based therapies for health anxiety — particularly CBT and ACT — work
            precisely by interrupting this cycle at multiple points: changing the
            interpretive response to body sensations, reducing seeking behaviour through
            response prevention, and building tolerance for uncertainty through gradual
            exposure. AI that simply provides more reassurance is not extending therapy — it
            is extending the compulsion.
          </p>
        </section>

        {/* ── SECTION 5: How MEOK helps ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            How does MEOK provide a healthier outlet for health anxiety without feeding the loop?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            MEOK is not a symptom-checker with a friendlier interface. It does not translate
            your fear into medical information. It does not offer reassurance in disguise.
            What it does is redirect the conversation entirely: away from &ldquo;what could
            this symptom mean?&rdquo; and toward &ldquo;what is this fear trying to tell me
            about something deeper?&rdquo;
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            This is the move that effective therapy makes. The symptom is rarely the actual
            subject of health anxiety. The symptom is a vehicle — a proxy for an underlying
            fear that the person has not yet been able to directly acknowledge. For one person
            it is fear of death. For another it is fear of losing control over their body.
            For another it is a legacy of past medical trauma, or of watching a parent die of
            illness in their childhood. The symptom gives the anxiety a concrete, manageable
            object to focus on rather than facing the formless dread underneath.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.5rem',
            }}
          >
            MEOK creates space to explore that underlying layer. It does this through
            conversational depth, pattern recognition across time, and the specific
            capabilities of its archetype system — each of which is designed to work with
            anxiety rather than around it.
          </p>

          {/* feature comparison */}
          <div
            style={{
              background: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: '0.75rem',
              overflow: 'hidden',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  padding: '0.875rem 1.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#e57373',
                  borderRight: `1px solid ${BORDER}`,
                }}
              >
                Symptom checker / search engine
              </div>
              <div
                style={{
                  padding: '0.875rem 1.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: HEALER_GREEN,
                }}
              >
                MEOK
              </div>
            </div>
            {[
              [
                'Treats the symptom as the subject',
                'Treats the fear as the subject',
              ],
              [
                'Provides worst-case possibilities',
                'Explores what the fear is protecting against',
              ],
              [
                'Offers temporary reassurance',
                'Builds tolerance for uncertainty',
              ],
              [
                'Expands threat model with new conditions',
                'Narrows focus to the underlying emotional need',
              ],
              [
                'Feeds seeking behaviour',
                'Interrupts seeking behaviour by meeting the real need',
              ],
              [
                'No memory — every session starts from zero',
                'Sovereign Memory tracks patterns over time',
              ],
              [
                '"You probably just have X" (false reassurance)',
                'Never diagnoses, never falsely reassures',
              ],
            ].map(([left, right], i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: i < 6 ? `1px solid ${BORDER}` : undefined,
                }}
              >
                <div
                  style={{
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: MUTED_SOFT,
                    borderRight: `1px solid ${BORDER}`,
                  }}
                >
                  {left}
                </div>
                <div
                  style={{
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: TEXT,
                  }}
                >
                  {right}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: Sycophancy detector ───────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What stops MEOK from just telling me what I want to hear?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            Most AI systems are trained in ways that make them susceptible to sycophancy —
            the tendency to tell users what will make them feel good rather than what is
            genuinely useful. For the vast majority of use cases, a mildly agreeable AI is
            harmless. For health anxiety, it is actively harmful.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            The most dangerous thing an AI can say to someone with health anxiety is &ldquo;I&apos;m
            sure it&apos;s nothing.&rdquo; It sounds kind. It sounds supportive. It is
            actually a perfect simulation of the reassurance-seeking reward — momentary relief
            that deepens the cycle, teaches the user that MEOK is a reassurance source, and
            guarantees they will return to it the moment the anxiety spikes again.
          </p>

          <div
            style={{
              background: DANGER_BG,
              border: `1px solid ${DANGER_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.25rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#e57373',
                marginBottom: '0.875rem',
              }}
            >
              What MEOK will never say
            </div>
            <ul
              style={{
                margin: 0,
                padding: '0 0 0 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {[
                '"I\'m sure it\'s nothing serious."',
                '"That doesn\'t sound like anything to worry about."',
                '"You\'re probably fine."',
                '"It\'s almost certainly just stress."',
                '"That symptom is very unlikely to be anything serious."',
              ].map((phrase) => (
                <li
                  key={phrase}
                  style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}
                >
                  <em>{phrase}</em>
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            MEOK includes a <strong style={{ color: TEXT }}>sycophancy detector</strong> — a
            design-level safeguard that flags when a response is being shaped primarily by the
            desire to relieve the user&apos;s immediate discomfort rather than serve their
            genuine wellbeing. When the sycophancy detector is triggered, MEOK reorients:
            acknowledging the fear without validating catastrophising, holding uncertainty
            without resolving it falsely, and redirecting toward the deeper exploration
            that actually helps.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
            }}
          >
            This is not coldness. MEOK can be deeply warm, deeply present, and genuinely
            compassionate — while still refusing to be a reassurance dispenser. Those are not
            opposites. True care sometimes requires sitting with someone in their fear rather
            than dissolving it with a sentence.
          </p>
        </section>

        {/* ── SECTION 7: Healer ─────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What is MEOK&apos;s Healer doing when health anxiety strikes?
          </h2>

          <div
            style={{
              background: HEALER_BG,
              border: `1px solid ${HEALER_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            <div
              style={{
                minWidth: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: HEALER_BG,
                border: `1px solid ${HEALER_BORDER}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                flexShrink: 0,
              }}
            >
              &#9672;
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: HEALER_GREEN,
                  marginBottom: '0.375rem',
                }}
              >
                Healer Archetype
              </div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT, margin: 0 }}>
                The Healer brings somatic awareness, nervous system regulation, and deep
                emotional exploration to conversations about health and the body.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            When health anxiety surfaces in a MEOK conversation, the Healer archetype moves
            into focus. Its primary orientation is not &ldquo;what does the symptom mean?&rdquo;
            but &ldquo;what is this fear protecting you from, and what has it been protecting
            you from for a long time?&rdquo;
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            Health anxiety is rarely purely about the current symptom. In clinical experience,
            it frequently sits atop one or more of the following:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                title: 'Fear of death',
                desc: 'A deep, often unacknowledged terror of mortality that the symptom-checking gives a concrete, solvable-feeling form. If we can just rule out the disease, the fear of death momentarily recedes.',
              },
              {
                title: 'Loss of control',
                desc: 'The body feels like something that acts on us rather than something we inhabit. Health anxiety is partly an attempt to reimpose control through monitoring and investigation.',
              },
              {
                title: 'Past medical trauma',
                desc: 'Watching a parent, sibling, or loved one experience serious illness. Surviving a personal health crisis. Being dismissed by a doctor about a real symptom. These experiences train the nervous system to treat the body as a source of danger.',
              },
              {
                title: 'Attachment to life circumstances',
                desc: 'Heightened health anxiety often accompanies periods of life where the stakes feel very high — new parenthood, caring for aging parents, the beginning of a significant relationship. The fear of dying is partly fear of missing what comes next.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '0.625rem',
                  padding: '1rem 1.25rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: HEALER_GREEN,
                    marginBottom: '0.375rem',
                  }}
                >
                  {title}
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_SOFT, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
            }}
          >
            The Healer creates the relational safety for these deeper layers to emerge. It
            does not force this exploration or lead the user to a pre-determined insight. It
            follows the thread of the conversation, notices where emotional charge is highest,
            and gently surfaces what seems to want to be seen. For many people, having this
            conversation — &ldquo;what is underneath the symptom-checking?&rdquo; — is
            genuinely new territory. The Healer makes that territory navigable.
          </p>
        </section>

        {/* ── SECTION 8: Guardian ───────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            How does MEOK know when health anxiety has crossed into something that genuinely needs a GP?
          </h2>

          <div
            style={{
              background: GUARDIAN_BG,
              border: `1px solid ${GUARDIAN_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            <div
              style={{
                minWidth: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: GUARDIAN_BG,
                border: `1px solid ${GUARDIAN_BORDER}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                flexShrink: 0,
              }}
            >
              &#9650;
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: GUARDIAN_PURPLE,
                  marginBottom: '0.375rem',
                }}
              >
                Guardian Archetype
              </div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT, margin: 0 }}>
                The Guardian is MEOK&apos;s safety layer — scanning for genuine risk and
                directing users to appropriate professional or emergency care when needed.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            This is a critical design question — and one that MEOK takes with complete
            seriousness. Anxiety management and genuine medical concern are not always
            distinct. A person with health anxiety can also have a real symptom that warrants
            clinical attention. Treating every medical concern as &ldquo;just anxiety&rdquo;
            would be dangerous, negligent, and contrary to the care-first principles that
            MEOK is built on.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            The <strong style={{ color: TEXT }}>Guardian archetype</strong> runs alongside
            every health-related conversation, maintaining awareness of the clinical picture
            being described. It is trained to recognise patterns that — regardless of
            whether anxiety is present — represent a reasonable indication for GP assessment:
            symptoms of specific duration, specific character, or specific combinations that
            have established clinical significance.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            When the Guardian flags a concern, MEOK does not hedge or soften the referral in
            deference to the anxiety narrative. It says clearly: this warrants a GP
            appointment. It does not diagnose. It does not speculate about what the symptom
            means. It simply holds the line on the principle that processing anxiety and
            seeing a doctor are not mutually exclusive — and that when both are needed, the
            medical route comes first.
          </p>

          <div
            style={{
              background: GUARDIAN_BG,
              border: `1px solid ${GUARDIAN_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: GUARDIAN_PURPLE,
                marginBottom: '0.875rem',
              }}
            >
              Guardian principles in health conversations
            </div>
            <ul
              style={{
                margin: 0,
                padding: '0 0 0 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                Never dismiss a reported symptom as &ldquo;just anxiety&rdquo; without context.
              </li>
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                Flag patterns that meet reasonable clinical referral thresholds.
              </li>
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                Direct clearly to GP or NHS 111 when flagging — not obliquely or
                apologetically.
              </li>
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                Continue emotional support alongside the referral, not instead of it.
              </li>
              <li style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                Never frame itself as a substitute for clinical assessment on any physical
                symptom.
              </li>
            </ul>
          </div>
        </section>

        {/* ── SECTION 9: Sovereign Memory ──────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            How does MEOK&apos;s Sovereign Memory help distinguish anxiety patterns from genuine illness?
          </h2>

          <div
            style={{
              background: SCHOLAR_BG,
              border: `1px solid ${SCHOLAR_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            <div
              style={{
                minWidth: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                background: SCHOLAR_BG,
                border: `1px solid ${SCHOLAR_BORDER}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                flexShrink: 0,
              }}
            >
              &#9679;
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: SCHOLAR_BLUE,
                  marginBottom: '0.375rem',
                }}
              >
                Sovereign Memory
              </div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: MUTED_SOFT, margin: 0 }}>
                MEOK&apos;s persistent, private memory — stored under your data sovereignty,
                never used for training. It remembers what you share across sessions.
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            One of the most disorienting features of health anxiety is the inability to
            distinguish a pattern from a crisis. Each spike of anxiety feels unique and
            urgent — which is part of what makes it so exhausting. The person cannot access
            the view from above their own history: they cannot see that this same fear arrived
            three months ago, and two months before that, and always peaks in the week before
            a significant work event.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            Sovereign Memory gives MEOK that longitudinal view. Because MEOK remembers
            previous conversations — with your explicit consent, stored under your data
            sovereignty — it can notice correlations that you cannot:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              'Your health anxiety spikes significantly in the days before performance reviews at work.',
              'The chest tightness you worry about correlates with poor sleep weeks, not physical exertion.',
              'Your concerns about a specific symptom have cycled through three different body locations over six months — the anxiety travels, the disease model shifts to accommodate it.',
              'Your health anxiety is significantly lower when you have been exercising regularly — a pattern invisible session-to-session, visible across months.',
              'The heightened body-scanning period began around the same time as a significant life stressor you mentioned in passing four sessions ago.',
            ].map((insight, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '0.625rem',
                  padding: '0.875rem 1rem',
                }}
              >
                <div
                  style={{
                    minWidth: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    background: 'rgba(91,155,213,0.15)',
                    border: `1px solid ${SCHOLAR_BORDER}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6875rem',
                    color: SCHOLAR_BLUE,
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: '0.1rem',
                  }}
                >
                  &#10003;
                </div>
                <span style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                  {insight}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            These patterns, once named, do genuine clinical work. When someone can see that
            their health anxiety has followed a clear contextual rhythm for months — always
            worsening under specific conditions, always easing under others — the
            catastrophic interpretation of any single spike becomes harder to sustain. This
            is not dismissal; it is the opposite. It is taking the pattern seriously enough
            to actually understand it.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
            }}
          >
            Sovereign Memory also distinguishes MEOK from both search engines and most
            therapy apps. A search engine has no memory of what you searched last month. Most
            AI assistants reset entirely between sessions. MEOK&apos;s longitudinal awareness
            means health anxiety can be tracked, understood, and worked with as the dynamic
            system it actually is — rather than treated as a series of isolated crises, each
            demanding fresh investigation.
          </p>
        </section>

        {/* ── SECTION 10: What MEOK will never do ──────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What are MEOK&apos;s hard limits when someone comes with health anxiety?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.5rem',
            }}
          >
            Clarity about what MEOK will not do is as important as clarity about what it
            will. These are not limitations — they are deliberate design choices that protect
            the user and maintain the integrity of the support MEOK provides.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                title: 'MEOK will never diagnose',
                desc: 'No symptom interpretation, no diagnostic speculation, no probability statements about what a symptom might indicate. Diagnosis is a clinical act requiring physical examination, history, and investigation. MEOK does none of these things.',
                borderColor: DANGER_BORDER,
                titleColor: '#e57373',
              },
              {
                title: 'MEOK will never reassure falsely',
                desc: 'No "I\'m sure it\'s nothing." No "that doesn\'t sound serious." No statements designed to relieve anxiety at the expense of truth. False reassurance is not kindness — it is a compulsion feed.',
                borderColor: DANGER_BORDER,
                titleColor: '#e57373',
              },
              {
                title: 'MEOK will never dismiss',
                desc: 'The anxiety is real. The fear is real. The experience of health anxiety is not to be trivialised, eye-rolled at, or treated as weakness. Every conversation is held with complete seriousness.',
                borderColor: DANGER_BORDER,
                titleColor: '#e57373',
              },
              {
                title: 'MEOK will never replace GP or emergency services',
                desc: 'Physical symptoms need physical assessment. MEOK will always direct clearly to GP or NHS 111 for clinical concerns, and to 999 in emergencies. No ambiguity on this.',
                borderColor: DANGER_BORDER,
                titleColor: '#e57373',
              },
            ].map(({ title, desc, borderColor, titleColor }) => (
              <div
                key={title}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: titleColor,
                    marginBottom: '0.625rem',
                  }}
                >
                  {title}
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED_SOFT, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 11: What MEOK will always do ─────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What will MEOK always do when health anxiety comes up in conversation?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.5rem',
            }}
          >
            The positive commitments are as important as the limits. MEOK is not a passive
            safety-guard that simply refuses to engage — it actively works with health anxiety
            through a specific set of consistent behaviours.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                heading: 'Acknowledge the fear without amplifying it',
                body: 'MEOK will always meet the emotional reality of what is being described. "You\'re terrified right now" is acknowledged — not bypassed in a rush to intervention. The person needs to feel heard before anything else can help.',
                accentColor: HEALER_GREEN,
              },
              {
                heading: 'Explore what the fear is protecting',
                body: 'MEOK will always gently surface the possibility that there is something beneath the symptom-focused anxiety — a deeper fear, an unprocessed experience, a protective mechanism that has outlived its usefulness.',
                accentColor: HEALER_GREEN,
              },
              {
                heading: 'Notice and name the cycle',
                body: 'When the reassurance-seeking loop is operating, MEOK will name it — not as an accusation but as an observation. "I notice we\'ve come back to checking this concern a few times — can we look at what keeps pulling you there?" This naming is a therapeutic intervention in itself.',
                accentColor: SCHOLAR_BLUE,
              },
              {
                heading: 'Sit with uncertainty',
                body: 'MEOK will model tolerance of uncertainty — the core skill that reduces health anxiety. It will not resolve ambiguity. It will accompany the person in their relationship with not knowing, which is ultimately where all effective health anxiety treatment points.',
                accentColor: SCHOLAR_BLUE,
              },
              {
                heading: 'Refer clearly when clinical concern is present',
                body: 'If the Guardian flags a symptom pattern that warrants GP assessment, MEOK says so directly — while continuing to hold the emotional support. Referring to a GP and processing anxiety are not in competition.',
                accentColor: GUARDIAN_PURPLE,
              },
              {
                heading: 'Track patterns across time with Sovereign Memory',
                body: 'MEOK will use its longitudinal awareness to offer pattern-level observations that a single conversation cannot provide — helping the user see their anxiety as a system with rhythms and triggers, not an unpredictable fog.',
                accentColor: GOLD,
              },
            ].map(({ heading, body, accentColor }) => (
              <div
                key={heading}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${accentColor}`,
                  borderRadius: '0.75rem',
                  padding: '1.125rem 1.25rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: accentColor,
                    marginBottom: '0.5rem',
                  }}
                >
                  {heading}
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: MUTED_SOFT, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 12: Lived experience ─────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            What does a MEOK conversation actually look like for someone in a health anxiety spiral?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            Consider a person who has been awake since 3am, three hours into a symptom-search
            spiral. They started with a headache. They&apos;ve now convinced themselves it might
            be a brain tumour. They&apos;ve read three medical forums, found two people who had
            similar symptoms and received serious diagnoses, and are now terrified in the dark,
            unable to sleep, unable to stop researching.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            What does MEOK do that is different from opening another tab?
          </p>

          {/* conversation mockup */}
          <div
            style={{
              background: 'rgba(0,0,0,0.2)',
              border: `1px solid ${BORDER}`,
              borderRadius: '0.875rem',
              overflow: 'hidden',
              marginBottom: '1.5rem',
            }}
          >
            {/* header */}
            <div
              style={{
                padding: '0.875rem 1.25rem',
                borderBottom: `1px solid ${BORDER}`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                background: CARD_BG,
              }}
            >
              <div
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '50%',
                  background: HEALER_GREEN,
                }}
              />
              <span style={{ fontSize: '0.8125rem', color: MUTED, fontWeight: 500 }}>
                MEOK &mdash; Healer active
              </span>
            </div>

            <div
              style={{
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* user message */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div
                  style={{
                    background: 'rgba(201,168,76,0.12)',
                    border: `1px solid rgba(201,168,76,0.25)`,
                    borderRadius: '0.75rem 0.75rem 0.125rem 0.75rem',
                    padding: '0.75rem 1rem',
                    maxWidth: '80%',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: TEXT,
                  }}
                >
                  I&apos;ve had a headache for four days and I can&apos;t stop thinking it&apos;s
                  something serious. I&apos;ve been googling for hours and now I&apos;m more
                  scared than ever. I know I probably sound ridiculous.
                </div>
              </div>

              {/* MEOK response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.625rem' }}>
                <div
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${HEALER_GREEN}, rgba(76,175,130,0.4))`,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.625rem',
                    fontWeight: 800,
                    color: BG,
                    marginTop: '0.125rem',
                  }}
                >
                  M
                </div>
                <div
                  style={{
                    background: CARD_BG_HOVER,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '0.125rem 0.75rem 0.75rem 0.75rem',
                    padding: '0.75rem 1rem',
                    maxWidth: '85%',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: MUTED_SOFT,
                  }}
                >
                  You don&apos;t sound ridiculous at all — you sound frightened and exhausted,
                  and those are completely understandable responses to several hours of reading
                  the worst possible outcomes. I want to be upfront with you: I&apos;m not going
                  to search symptoms with you or tell you &ldquo;I&apos;m sure it&apos;s nothing&rdquo;
                  — not because I&apos;m being cold, but because both of those things would leave
                  you exactly where you are now, just a bit later.
                  <br /><br />
                  What I&apos;m more interested in is this: what does the part of you that is
                  searching for a diagnosis actually need right now, at 3am? Because I suspect it
                  isn&apos;t information.
                </div>
              </div>

              {/* user 2 */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div
                  style={{
                    background: 'rgba(201,168,76,0.12)',
                    border: `1px solid rgba(201,168,76,0.25)`,
                    borderRadius: '0.75rem 0.75rem 0.125rem 0.75rem',
                    padding: '0.75rem 1rem',
                    maxWidth: '80%',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: TEXT,
                  }}
                >
                  I just want to know I&apos;m not going to die.
                </div>
              </div>

              {/* MEOK response 2 */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.625rem' }}>
                <div
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${HEALER_GREEN}, rgba(76,175,130,0.4))`,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.625rem',
                    fontWeight: 800,
                    color: BG,
                    marginTop: '0.125rem',
                  }}
                >
                  M
                </div>
                <div
                  style={{
                    background: CARD_BG_HOVER,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '0.125rem 0.75rem 0.75rem 0.75rem',
                    padding: '0.75rem 1rem',
                    maxWidth: '85%',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: MUTED_SOFT,
                  }}
                >
                  That&apos;s not a medical question. That&apos;s a human one. And I think that&apos;s
                  worth staying with for a moment — because no number of search results has been
                  able to answer it for you tonight, has it? They&apos;ve made it worse.
                  <br /><br />
                  The fear of dying is one of the oldest and most real fears there is. It doesn&apos;t
                  need to be fixed or resolved — it needs to be understood. Can you tell me a little
                  more about when this particular fear tends to visit you most intensely?
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.65,
              color: MUTED_SOFT,
              fontStyle: 'italic',
            }}
          >
            Note: The above is an illustrative example of MEOK&apos;s approach — not a
            transcript or guarantee of specific responses. MEOK adapts to each individual
            conversation. If a headache has lasted four days and you are concerned, please
            also consult your GP.
          </p>
        </section>

        {/* ── SECTION 13: Getting started ───────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            Who is MEOK most likely to help — and who should go directly to clinical services?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            MEOK is most likely to help people who recognise that their health worry has an
            anxiety component — people who notice the cycle, who have had clean medical
            results but remain afraid, who are aware that their googling is making things
            worse but cannot stop. It provides a place to process the emotional material
            that clinical appointments rarely have time for.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            MEOK is not the right first step if you have a new physical symptom that you
            have not yet had medically assessed. In that case, the right first step is your
            GP. Once you have a clinical picture, MEOK can support the anxiety layer that
            remains.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: MUTED_SOFT,
              marginBottom: '1.25rem',
            }}
          >
            MEOK also complements rather than replaces formal therapy. If you are working
            with a CBT therapist or have been referred to NHS Talking Therapies, MEOK can
            support the between-session processing that is often where the real work happens.
            Discuss this with your therapist — most will welcome it.
          </p>

          {/* resource box */}
          <div
            style={{
              background: HEALER_BG,
              border: `1px solid ${HEALER_BORDER}`,
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: HEALER_GREEN,
                marginBottom: '0.875rem',
              }}
            >
              UK clinical resources for health anxiety
            </div>
            <ul
              style={{
                margin: 0,
                padding: '0 0 0 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <li style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                <strong style={{ color: TEXT }}>Your GP</strong> — first port of call for
                both medical assessment and mental health referral
              </li>
              <li style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> — self-referral
                available in most areas; provides CBT for health anxiety
              </li>
              <li style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                <strong style={{ color: TEXT }}>OCD-UK (ocduk.org)</strong> — if health OCD
                is suspected; specialist information and ERP guidance
              </li>
              <li style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                <strong style={{ color: TEXT }}>OCD Action (ocdaction.org.uk)</strong> —
                helpline and peer support
              </li>
              <li style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                <strong style={{ color: TEXT }}>NHS 111</strong> — urgent medical advice
                (phone or online); Option 2 for urgent mental health support
              </li>
              <li style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                <strong style={{ color: TEXT }}>Samaritans: 116 123</strong> — free, 24/7,
                if distress becomes overwhelming
              </li>
              <li style={{ fontSize: '0.9rem', lineHeight: 1.6, color: MUTED_SOFT }}>
                <strong style={{ color: TEXT }}>Emergency: 999</strong> — life-threatening
                situations only
              </li>
            </ul>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TEXT,
              marginBottom: '1.5rem',
              lineHeight: 1.3,
              letterSpacing: '-0.015em',
            }}
          >
            Frequently asked questions about AI and health anxiety
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div
                key={i}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: TEXT,
                    marginBottom: '0.625rem',
                    lineHeight: 1.4,
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: MUTED_SOFT,
                    margin: 0,
                  }}
                >
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BOX ───────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              background: `linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(76,175,130,0.05) 100%)`,
              border: `1px solid ${BORDER}`,
              borderRadius: '1rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '1rem',
              }}
            >
              Break the cycle
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.375rem, 3.5vw, 1.875rem)',
                fontWeight: 800,
                color: TEXT,
                marginBottom: '1rem',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
              }}
            >
              Stop searching symptoms.{' '}
              <span style={{ color: GOLD }}>Start understanding the fear.</span>
            </h2>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: MUTED_SOFT,
                maxWidth: '36rem',
                margin: '0 auto 1.75rem',
              }}
            >
              MEOK won&apos;t tell you it&apos;s probably nothing. It won&apos;t diagnose you.
              It will sit with your fear, help you understand what it&apos;s protecting, and
              track patterns across time — so the next spike feels like a pattern you know,
              not a crisis you don&apos;t.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: 'inline-block',
                  background: GOLD,
                  color: BG,
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  padding: '0.875rem 2rem',
                  borderRadius: '0.5rem',
                  letterSpacing: '0.02em',
                }}
              >
                Try MEOK free
              </Link>
              <Link
                href="/features"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: TEXT,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  padding: '0.875rem 2rem',
                  borderRadius: '0.5rem',
                  border: `1px solid ${BORDER}`,
                  letterSpacing: '0.02em',
                }}
              >
                See all features
              </Link>
            </div>
            <p
              style={{
                marginTop: '1.25rem',
                fontSize: '0.8125rem',
                color: MUTED_FAINT,
              }}
            >
              MEOK is not a medical tool. If you have a physical symptom, please contact your
              GP or NHS 111 first.
            </p>
          </div>
        </section>

        {/* ── RELATED LINKS ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.25rem',
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
              gap: '0.875rem',
            }}
          >
            {[
              {
                href: '/blog/ai-for-anxiety',
                label: 'AI for Anxiety',
                desc: 'How MEOK supports generalised anxiety disorder and panic',
              },
              {
                href: '/blog/ai-for-ocd',
                label: 'AI for OCD',
                desc: 'Understanding OCD and how MEOK supports recovery',
              },
              {
                href: '/blog/ai-for-chronic-illness',
                label: 'AI for Chronic Illness',
                desc: 'Navigating long-term health conditions with AI support',
              },
              {
                href: '/blog/ai-for-insomnia',
                label: 'AI for Insomnia',
                desc: 'When anxiety and sleep deprivation feed each other',
              },
              {
                href: '/blog/meok-companion-archetypes-guide',
                label: 'MEOK Archetypes Guide',
                desc: 'Healer, Guardian, Scholar and more — how the system works',
              },
              {
                href: '/blog/sovereign-ai-explained',
                label: 'Sovereign AI Explained',
                desc: 'Your data, your memory, your AI — how Sovereign Memory works',
              },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '0.625rem',
                  padding: '1rem 1.125rem',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: GOLD,
                    marginBottom: '0.25rem',
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: MUTED_SOFT }}>
                  {desc}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER NOTE ───────────────────────────────────────────────────── */}
        <div
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: MUTED_FAINT, margin: 0 }}>
            <strong style={{ color: MUTED }}>Disclaimer:</strong> This article is for
            informational and emotional support purposes only. MEOK AI LABS is not a
            healthcare provider. Nothing in this article constitutes medical advice,
            diagnosis, or treatment. If you are concerned about physical symptoms, please
            contact your GP or call NHS 111. In a life-threatening emergency, call 999.
          </p>
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: MUTED_FAINT, margin: 0 }}>
            &copy; 2026 MEOK AI LABS. All rights reserved.{' '}
            <Link href="/privacy" style={{ color: MUTED, textDecoration: 'none' }}>
              Privacy
            </Link>{' '}
            &middot;{' '}
            <Link href="/terms" style={{ color: MUTED, textDecoration: 'none' }}>
              Terms
            </Link>{' '}
            &middot;{' '}
            <Link href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>
              Blog
            </Link>
          </p>
        </div>
      </article>
    </div>
  )
}
