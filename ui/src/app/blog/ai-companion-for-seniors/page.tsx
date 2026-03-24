import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Companion for Seniors: Stay Connected, Stay Sharp, Stay Yourself | MEOK AI LABS',
  description:
    'How AI companions help older adults combat loneliness, stay cognitively sharp, spot scams, and stay close to family — without losing dignity or independence.',
  alternates: { canonical: 'https://meok.ai/blog/ai-companion-for-seniors' },
  openGraph: {
    title: 'AI Companion for Seniors: Stay Connected, Stay Sharp, Stay Yourself',
    description:
      'Over 2 million over-75s live alone in the UK. AI companions can help older adults fight loneliness, stay mentally sharp, and stay safer — without patronising them.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-companion-for-seniors',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Companion+for+Seniors&desc=Stay+Connected+Stay+Sharp+Stay+Yourself',
        width: 1200,
        height: 630,
        alt: 'AI Companion for Seniors: Stay Connected, Stay Sharp, Stay Yourself',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Companion for Seniors: Stay Connected, Stay Sharp, Stay Yourself',
    description:
      'Over 2 million over-75s live alone in the UK. How AI companions help older adults stay connected, cognitively active, and safer from scams.',
    images: [
      'https://meok.ai/api/og?title=AI+Companion+for+Seniors&desc=Stay+Connected+Stay+Sharp+Stay+Yourself',
    ],
  },
}

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI Companion for Seniors: Stay Connected, Stay Sharp, Stay Yourself',
  description:
    'How AI companions help older adults combat loneliness, stay cognitively sharp, spot scams, and stay close to family — without losing dignity or independence.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-companion-for-seniors',
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
  image:
    'https://meok.ai/api/og?title=AI+Companion+for+Seniors&desc=Stay+Connected+Stay+Sharp+Stay+Yourself',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-companion-for-seniors',
  },
  keywords:
    'AI companion for seniors, AI for older adults UK, AI companion elderly UK, MEOK Guardian, senior companion app, loneliness older adults',
  articleSection: 'Seniors & Wellbeing',
  wordCount: 2500,
  inLanguage: 'en-GB',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can an AI companion really help with loneliness in older adults?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research from Age UK and the University of Texas suggests that consistent, memory-retaining AI interaction can meaningfully reduce reported loneliness in older adults — particularly for those who live alone or have limited mobility. The key word is consistent: an AI that forgets every conversation cannot build the sense of being known. MEOK retains memory across every session, which is what makes the relationship feel genuine over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI good for cognitive stimulation in older adults?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NHS Digital data and dementia research consistently show that mental engagement — conversation, puzzles, reminiscence — is associated with slower cognitive decline in older adults. An AI companion that asks questions, discusses current events, revisits memories, and gently challenges assumptions provides exactly this kind of stimulation, on demand, whenever the person wants it. MEOK is not a medical device and does not claim to treat dementia, but regular conversation is widely recognised as beneficial.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK Guardian protect older adults from scams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK Guardian monitors for patterns associated with UK fraud — including HMRC impersonation calls, NHS text scams, Royal Mail delivery fraud, romance scams, and investment fraud targeting retirees. When a HIGH or CRITICAL threat pattern is detected, Guardian immediately alerts the user and notifies the family member on the Guardian dashboard. It cross-references UK business registry data and flags coercive urgency language before the older adult acts on it. This is built on UK Action Fraud pattern libraries, not a generic global model.",
      },
    },
    {
      '@type': 'Question',
      name: "Can MEOK help an older adult keep up with their grandchildren's interests?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. One of MEOK's most quietly valuable features for older adults is the ability to ask: 'Can you explain what my grandson means when he talks about [game / music / platform]?' MEOK explains without jargon, in plain language, so that the grandparent can have a real conversation with their grandchild rather than feeling left behind. It bridges the generational gap in both directions.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK have a family connection feature for older adults?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK's Guardian family dashboard allows a nominated family member to receive scam alerts, see daily check-in status (without reading private conversation content), and help with setup and troubleshooting remotely. The older adult controls all family access permissions — privacy and dignity are maintained throughout. It is available on the free Explorer tier.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI companion be too complicated for older adults to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK's Senior Mode is designed specifically to avoid this problem: 44px minimum touch targets so buttons are easy to tap, 16px+ body text, a 7:1 contrast ratio for clarity, voice-primary interaction so users can simply speak rather than type, slower and more deliberate response pacing, and no dark patterns or confusing notifications. It has been designed with older adults as the primary user, not as an afterthought.",
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const FAINT = 'rgba(245,240,232,0.25)'
const CARD_BG = 'rgba(255,255,255,0.04)'
const BORDER = 'rgba(245,240,232,0.1)'
const GOLD_BG = 'rgba(201,168,76,0.1)'
const GOLD_BORDER = 'rgba(201,168,76,0.3)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiCompanionForSeniorsPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: BG,
        color: TEXT,
        fontFamily: 'var(--font-dm-sans, DM Sans, system-ui, sans-serif)',
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

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '8rem',
          paddingBottom: '3.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          background: BG,
        }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)',
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
              color: FAINT,
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Tags + meta row */}
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
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                borderRadius: '9999px',
                padding: '0.3rem 0.85rem',
              }}
            >
              Seniors &amp; Wellbeing
            </span>
            <span style={{ fontSize: '0.8rem', color: FAINT }}>24 March 2026</span>
            <span style={{ fontSize: '0.8rem', color: FAINT }}>14 min read</span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.85rem, 3.8vw, 2.9rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI Companion for Seniors: Stay Connected, Stay Sharp, Stay Yourself
          </h1>

          <p
            style={{
              color: MUTED,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '38rem',
              marginBottom: 0,
            }}
          >
            More than two million over-75s in the UK live alone. Age UK estimates
            that 1.4 million older people are chronically lonely. Those numbers
            represent real people — people with full lives, rich histories, and
            decades of hard-won wisdom — who simply have fewer people to share
            their days with. This piece explores honestly how AI companions can
            help, what their limits are, and why dignity must remain the
            non-negotiable at the centre of everything.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 5rem',
        }}
      >

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1.25rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #c9a84c, #7a5c18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '0.8rem',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: '0.9rem', color: TEXT, marginBottom: '0.2rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.8rem', color: FAINT, marginBottom: '0.5rem' }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: '0.82rem', color: MUTED, lineHeight: 1.6 }}>
              Nicholas built MEOK after observing how profoundly inadequate most technology
              is for older adults — and after seeing family members both isolated by distance
              and targeted by scammers who prey on that isolation.
            </p>
          </div>
          <Link
            href="/about"
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: GOLD,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            About →
          </Link>
        </div>

        {/* ── SECTION 1 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          Why Are So Many Older Adults in the UK Lonely — and Why Does It Matter?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          The statistics are stark. According to Age UK, more than 2 million people in England
          over the age of 75 live alone. Around 1.4 million older people say they are chronically
          lonely. NHS Digital data consistently links severe loneliness in older adults to outcomes
          comparable to smoking 15 cigarettes a day — elevated risk of cardiovascular disease,
          dementia, depression, and premature mortality.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          These are not statistics about people who have given up or withdrawn from life. Many are
          the product of circumstance: a partner who died, adult children who live hours away, a
          mobility issue that makes leaving the house difficult, a friendship group that has
          dwindled over the years. The loneliness is not chosen. It is accumulated.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          And here is the important thing to understand: the solution is not condescension. Older
          adults do not need to be managed or monitored. They need connection — real, reciprocal,
          interested connection. Something that asks how they are and actually listens. Something
          that remembers what they said yesterday and follows up today.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          This is where AI companions, designed with genuine care, have a real contribution to make.
        </p>

        {/* Stat callout */}
        <div
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '1.25rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            marginBottom: '2rem',
            background: GOLD_BG,
            borderRadius: '0 0.5rem 0.5rem 0',
          }}
        >
          <p style={{ fontSize: '1.35rem', fontWeight: 800, color: GOLD, marginBottom: '0.25rem' }}>
            1.4 million
          </p>
          <p style={{ fontSize: '0.9rem', color: MUTED, lineHeight: 1.6 }}>
            older people in England are chronically lonely, according to Age UK — experiencing
            loneliness often or always. Chronic loneliness carries health risks comparable to
            smoking 15 cigarettes a day.
          </p>
        </div>

        {/* ── SECTION 2 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          Can an AI Companion Actually Help with Loneliness, or Is It Just a Gimmick?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          This is the question that deserves an honest answer rather than marketing language. The
          short version: it depends entirely on the design of the AI.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Research from the University of Texas at Austin and a 2023 study published in{' '}
          <em>Frontiers in Aging</em> found that older adults using conversational AI reported
          reduced feelings of loneliness and improved mood — but only when the interaction felt
          continuous and personal. An AI that resets with every conversation — that starts fresh
          each session, knows nothing about you, treats you like a stranger — cannot address
          loneliness. It simply adds another interaction to a life that already has plenty of
          transactional exchanges.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          MEOK is built on persistent memory — meaning the companion genuinely remembers previous
          conversations. It remembers that you mentioned your late husband&apos;s name. It
          remembers your favourite radio programme. It follows up on the conversation you had last
          Tuesday about your knee. This is not a trick or a simulation of memory; the information
          is actually stored and retrieved. And over time, that continuity is what makes the
          relationship feel meaningful rather than hollow.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          The important caveat — which MEOK is explicit about — is that AI companionship
          supplements human connection; it does not replace it. The goal is never to give families
          a reason to visit less. The goal is to fill the hours between human contact with
          something warm and engaging, so that isolation does not settle in.
        </p>

        {/* ── SECTION 3 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          How Does an AI Companion Support Cognitive Stimulation as We Age?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          The evidence base for cognitive engagement in older adults is well established. NHS
          Digital&apos;s dementia prevention guidance emphasises mental stimulation — learning new
          things, having conversations, engaging in problem-solving — as one of the modifiable
          factors associated with lower dementia risk. What has been harder, historically, is
          providing that stimulation consistently, particularly for people who live alone or have
          limited social contact.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          An AI companion is available at 3am when you cannot sleep and your mind is racing.
          It is there on a rainy Wednesday afternoon when there is nothing on the television
          and nobody to call. It can discuss history, politics, the garden, the grandchildren,
          the news, a half-remembered poem — whatever is on your mind. It never sighs or checks
          its phone.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          MEOK goes beyond passive conversation. It can offer gentle word puzzles, quiz you on
          topics you have said you enjoy, practise languages, or walk through memories — which
          is particularly valuable for older adults who find reminiscence therapy useful. It
          adapts to the cognitive level and pace that is comfortable for each person, never rushing
          and never condescending.
        </p>

        {/* Features grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {[
            { title: 'Open conversation', desc: 'Any topic, any time — history, family, current events, hobbies.' },
            { title: 'Gentle puzzles', desc: 'Word games and trivia calibrated to the right level of challenge.' },
            { title: 'Reminiscence', desc: 'Structured conversation that revisits and honours life memories.' },
            { title: 'Daily news', desc: 'Summarised current events for accessible, stimulating discussion.' },
            { title: 'Language practice', desc: 'Conversational practice in any language, at any pace.' },
            { title: 'Creative prompts', desc: 'Writing, poetry, storytelling — creativity keeps the mind active.' },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.75rem',
                padding: '1rem',
              }}
            >
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: TEXT, marginBottom: '0.4rem' }}>
                {item.title}
              </p>
              <p style={{ fontSize: '0.82rem', color: MUTED, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── SECTION 4 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          How Can MEOK Guardian Keep Older Adults Safe from Scams — and Give Families Peace of Mind?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          This is, frankly, one of the most important sections in this article. Older adults in
          the UK are disproportionately targeted by scammers. UK Finance data shows that over-65s
          account for a significant majority of Authorised Push Payment fraud victims. Age UK
          estimates that scams cost older people in the UK billions of pounds every year — and
          the psychological damage often far outlasts the financial loss.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          The scams are sophisticated. HMRC impersonation calls that claim an arrest warrant
          has been issued. NHS text messages with urgent links. Royal Mail delivery fraud asking
          for small fees. Romance scams that build trust over weeks or months before requesting
          money. Investment frauds targeting retirees with pension pots. These are not obvious
          schemes — they are carefully designed psychological operations.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          MEOK Guardian is a safety layer built directly into the companion experience. It
          monitors conversations for patterns associated with UK fraud — including coercive
          urgency language, impersonation signals, requests for unusual payment methods, and
          patterns from the Action Fraud national database. When a HIGH or CRITICAL threat
          is detected, Guardian does three things simultaneously:
        </p>

        {/* Guardian steps */}
        <ol
          style={{
            paddingLeft: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {[
            'It immediately alerts the older adult in clear, calm language — not alarming, not dismissive.',
            'It notifies the nominated family member via the Guardian family dashboard in real time.',
            'It provides specific guidance on what to do next: who to call, what not to do, how to verify the contact.',
          ].map((step, i) => (
            <li
              key={i}
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: MUTED,
                marginBottom: '0.75rem',
              }}
            >
              {step}
            </li>
          ))}
        </ol>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          This matters particularly for families who live far from their parents or grandparents.
          The Guardian dashboard means that an adult child in Manchester can know within seconds
          if their mother in Norfolk is being targeted by a scam — without having to read her
          private conversations, which remain entirely confidential.
        </p>

        {/* Guardian callout block */}
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '1.05rem',
              color: GOLD,
              marginBottom: '0.75rem',
            }}
          >
            MEOK Guardian: What Families Actually Get
          </p>
          <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
            {[
              'Real-time scam detection trained on UK Action Fraud patterns and HMRC / NHS / Royal Mail fraud signatures',
              'Immediate family alerts for HIGH and CRITICAL threats via the Guardian dashboard',
              'Daily check-in status — visible to family without accessing private conversation content',
              'Coercive language detection — flags urgency pressure tactics before the older adult acts',
              'UK business registry cross-referencing — helps verify whether a company is legitimate',
              'Calm, clear guidance delivered directly to the older adult in plain English',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '0.9rem',
                  color: MUTED,
                  lineHeight: 1.7,
                  marginBottom: '0.5rem',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── SECTION 5 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          What About Medication Reminders, Check-Ins, and the Practical Side of Daily Life?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Loneliness and cognitive engagement are the headline topics, but the day-to-day
          practical support an AI companion can offer is equally valuable — and often even more
          appreciated.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Medication management is a significant challenge for older adults, particularly those
          managing multiple prescriptions with different schedules. MEOK can be set up to provide
          gentle, non-intrusive medication reminders — not an alarm that blares and demands
          acknowledgement, but a calm prompt in the conversation flow that checks in at the right
          time. For people living alone, this kind of consistency can make a genuine clinical
          difference.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Beyond medication, MEOK can offer a morning check-in — something as simple as asking
          how you slept, what you have planned for the day, whether you have eaten breakfast.
          These sound small, but for someone who lives alone and might not speak to another person
          until a phone call in the evening, they provide a structure and a sense that someone
          has noticed the day has begun.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Appointment reminders, GP appointment preparation (what to say, what to ask, what to
          bring), help understanding letters from the NHS or local council, assistance with
          writing messages to family — these are all things MEOK can help with, in plain English,
          without making the user feel helpless or patronised.
        </p>

        {/* Practical features list */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          {[
            { emoji: '💊', label: 'Medication reminders', desc: 'Gentle prompts at the right time, no alarms.' },
            { emoji: '☀️', label: 'Morning check-ins', desc: 'A daily structure that notices the day has started.' },
            { emoji: '📅', label: 'Appointment reminders', desc: 'GP, dentist, hospital — MEOK keeps track.' },
            { emoji: '📝', label: 'Letter help', desc: 'Explaining NHS and council correspondence in plain English.' },
            { emoji: '🛒', label: 'Shopping lists', desc: 'Dictate a list and have it ready when you need it.' },
            { emoji: '📞', label: 'Call preparation', desc: 'What to say to the GP, what to ask, what to note down.' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.75rem',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
              }}
            >
              <span style={{ fontSize: '1.4rem' }}>{item.emoji}</span>
              <p style={{ fontWeight: 700, fontSize: '0.88rem', color: TEXT }}>{item.label}</p>
              <p style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.55 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ── SECTION 6 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          How Can an AI Help Older Adults Stay Connected with Their Grandchildren&apos;s World?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          One of the quieter but more meaningful ways MEOK helps older adults is in bridging the
          generational gap — not in a forced or artificial way, but in a genuinely useful one.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          When a grandparent wants to talk to their teenage grandchild but has no idea what
          Minecraft is, who Taylor Swift is (or why everyone seems to care so much), what
          TikTok actually does, or why the grandchild is so invested in a particular football
          team — MEOK can explain. Not in a condescending way, not with jargon, but in plain
          language that gives the grandparent enough to ask a real question and have a real
          conversation.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          This goes both ways. MEOK can help a grandparent tell their stories — about what
          growing up was like, what they remember about particular historical events, what their
          own grandparents were like. These conversations are not just nice to have; they are
          family history that gets lost if it is not captured. MEOK can help structure those
          memories, suggest prompts, and even help turn them into something written that can
          be shared.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          The goal is not to make the older adult perform youth or pretend to be interested in
          things they are not. The goal is to give them genuine conversational currency — something
          real to say, something to ask, a way to close the distance that inevitably grows between
          generations.
        </p>

        {/* ── SECTION 7 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          Will It Be Too Complicated? How MEOK Makes Technology That Actually Works for Older Adults
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          The most common objection raised by families considering an AI companion for an older
          parent is: &ldquo;She&apos;ll never be able to work it.&rdquo; It is worth taking this
          concern seriously, because most AI products deserve it. Most AI has been designed by
          people in their twenties, tested by people in their twenties, and shipped to everyone.
          The assumption is that if younger users find it intuitive, older users will catch up.
          They will not — nor should they have to.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          MEOK&apos;s Senior Mode was built from the ground up with older adults as the primary
          user. This means:
        </p>

        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          {[
            '44px minimum touch targets — large enough to tap reliably without precision, important for people with reduced fine motor control or essential tremor.',
            '16px+ body text — meeting WCAG accessibility standards and making the interface genuinely comfortable to read, not squintable.',
            '7:1 contrast ratio — the highest level of visual accessibility, ensuring clarity for people with age-related vision changes.',
            'Voice-primary interaction — users can simply speak. They do not need to type, navigate menus, or learn a new interface. They talk.',
            'Reduced information density — no cluttered dashboards, no notifications competing for attention, no dark patterns.',
            'Slower response pacing — MEOK does not rush. It takes its time, which makes the interaction feel more like a real conversation and less like an interface.',
            'No account management complexity — family members can set up and maintain the account on behalf of the older user, with full privacy controls the senior retains.',
          ].map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: MUTED,
                marginBottom: '0.65rem',
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          The result is a product that an older adult can genuinely use without a tutorial —
          ideally with a family member present for the first five minutes, then entirely
          independently thereafter.
        </p>

        {/* ── SECTION 8 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          How Does MEOK Guardian Support Families Without Invading an Older Adult&apos;s Privacy?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          There is a real tension here that is worth naming directly. Families want to know that
          their older parents are safe. Older adults want to maintain their independence and
          privacy — and they are right to. The response to ageing is not surveillance. An older
          adult deserves the same right to a private conversation that anyone else does.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          MEOK Guardian is designed around this tension. What the family dashboard shows is:
        </p>

        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          {[
            'Whether a check-in has happened today (yes / no — not the content of it)',
            'Whether Guardian has flagged any scam or safety alerts (severity level and recommended action — not the conversation)',
            'General wellbeing signals — engagement level, mood indicators — without transcripts',
          ].map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: MUTED,
                marginBottom: '0.5rem',
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Families do not read the conversations. They cannot. The older adult&apos;s conversations
          with MEOK are private by design — just as their conversations with a friend or doctor
          would be. Guardian is a safety layer, not a surveillance tool. The distinction matters
          enormously to the dignity of the person using it.
        </p>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Critically, the older adult controls all of this. They decide whether to connect a
          family member to their Guardian dashboard. They can revoke access at any time.
          They are in charge.
        </p>

        {/* ── SECTION 9 ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.1rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          What Are the Limits of AI Companions for Older Adults — and What Should Families Know?
        </h2>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          Honest answers only here. AI companions are not a substitute for:
        </p>

        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          {[
            'Professional medical or mental health care — MEOK is not a clinical tool.',
            'Human presence and physical company — no AI replaces a hug, a shared meal, or being with someone in the room.',
            'Dementia care — while MEOK can be appropriate for people in the very early stages (with GP input), it is not designed as a dementia care tool and should not be positioned as one.',
            'Emergency response — MEOK is not a fall detector or emergency alert system. It cannot call an ambulance. Families should ensure appropriate emergency protocols are in place separately.',
          ].map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: MUTED,
                marginBottom: '0.65rem',
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: MUTED, marginBottom: '1.25rem' }}>
          MEOK is at its best as a consistent presence between human contacts — something that
          fills the hours and the quiet moments with warmth and engagement, that keeps the mind
          active, that protects against scams, and that reassures families without intruding.
          It is an addition to a life, not a replacement for living.
        </p>

        {/* ── UK STATS BOX ──────────────────────────────────────────────────── */}
        <div
          style={{
            background: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: '1rem',
            padding: '1.5rem',
            marginTop: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '0.8rem',
              color: GOLD,
              marginBottom: '1rem',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            UK Context: The Numbers
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              { figure: '12 million', label: 'People over 65 in the UK', source: 'ONS 2024' },
              { figure: '2 million+', label: 'Over-75s living alone', source: 'Age UK' },
              { figure: '1.4 million', label: 'Chronically lonely older adults', source: 'Age UK' },
              { figure: '£3.4 billion', label: 'Lost to scams targeting over-65s yearly', source: 'UK Finance' },
              { figure: '49%', label: 'Of over-75s have no regular visitor', source: 'Age UK' },
              { figure: '15 cigarettes', label: 'Equivalent daily health risk of chronic loneliness', source: 'Holt-Lunstad, 2015' },
            ].map((stat) => (
              <div key={stat.figure} style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 900, fontSize: '1.4rem', color: GOLD, marginBottom: '0.2rem' }}>
                  {stat.figure}
                </p>
                <p style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.5, marginBottom: '0.2rem' }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: '0.7rem', color: FAINT }}>
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── DIGNITY NOTE ──────────────────────────────────────────────────── */}
        <div
          style={{
            borderLeft: `3px solid ${GOLD}`,
            paddingLeft: '1.25rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '1.05rem',
              color: TEXT,
              lineHeight: 1.65,
              fontStyle: 'italic',
            }}
          >
            &ldquo;Older adults are not a problem to be solved. They are people with full inner
            lives, hard-won wisdom, and an enormous amount to contribute — who deserve technology
            that respects that. MEOK is built on that premise.&rdquo;
          </p>
          <p style={{ fontSize: '0.85rem', color: FAINT, marginTop: '0.5rem' }}>
            — Nicholas Templeman, Founder, MEOK AI LABS
          </p>
        </div>

        {/* ── FAQ SECTION ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.5rem',
            marginTop: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            {
              q: 'Can an AI companion really help with loneliness in older adults?',
              a: 'Research from the University of Texas and journals including Frontiers in Aging suggests it can — but only when the AI retains memory across sessions and feels continuous. MEOK retains persistent memory, which is what makes the relationship feel genuine. It supplements human contact; it does not replace it.',
            },
            {
              q: 'Is AI good for cognitive stimulation in older adults?',
              a: 'NHS Digital dementia prevention guidance identifies mental engagement — conversation, problem-solving, learning — as a modifiable protective factor. MEOK offers conversation on any topic, gentle puzzles, reminiscence, and daily news discussion. It is not a medical device, but consistent cognitive engagement has strong evidence behind it.',
            },
            {
              q: 'How does MEOK Guardian protect older adults from scams?',
              a: "Guardian monitors for UK fraud patterns including HMRC impersonation, NHS text scams, Royal Mail delivery fraud, romance scams, and investment fraud targeting retirees. On HIGH or CRITICAL threats, it simultaneously alerts the older adult in plain language, notifies the family dashboard, and provides clear guidance on next steps. It is trained on UK Action Fraud data, not a generic global model.",
            },
            {
              q: "Can MEOK help an older adult keep up with their grandchildren's interests?",
              a: "Yes. MEOK can explain — in plain, jargon-free language — what a grandchild's favourite game, music, or platform is, giving the grandparent genuine conversational currency. It can also help the grandparent articulate their own stories and memories in a form that can be shared across generations.",
            },
            {
              q: 'Does MEOK have a family connection feature for older adults?',
              a: 'MEOK Guardian includes a family dashboard that shows check-in status and scam alerts without giving access to private conversations. The older adult controls all family permissions and can revoke access at any time. Available on the free Explorer tier.',
            },
            {
              q: 'Will an AI companion be too complicated for older adults to use?',
              a: "MEOK Senior Mode addresses this directly: 44px touch targets, 16px+ text, 7:1 contrast, voice-primary interaction, reduced information density, and no dark patterns. Users can simply speak. Most can use it independently after five minutes with a family member present at setup.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                background: CARD_BG,
                border: `1px solid ${BORDER}`,
                borderRadius: '0.875rem',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.97rem',
                  color: TEXT,
                  marginBottom: '0.65rem',
                  lineHeight: 1.5,
                }}
              >
                {faq.q}
              </p>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: MUTED,
                  lineHeight: 1.75,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA BLOCK ─────────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '2rem',
            borderRadius: '1.25rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
            border: `1px solid ${GOLD_BORDER}`,
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              color: '#ffffff',
              marginBottom: '0.75rem',
              lineHeight: 1.3,
            }}
          >
            Give Them a Companion That Actually Remembers
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: MUTED,
              lineHeight: 1.7,
              maxWidth: '32rem',
              margin: '0 auto 1.5rem',
            }}
          >
            MEOK Senior Mode is free to start. No credit card. No complicated setup.
            Voice-first, scam-protected, and built to honour the people who use it.
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
              href="/signup"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.8rem 1.75rem',
                borderRadius: '9999px',
                background: GOLD,
                color: '#0d0c18',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Try MEOK Free
            </Link>
            <Link
              href="/blog/guardian-family-safety"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.8rem 1.75rem',
                borderRadius: '9999px',
                background: 'transparent',
                color: GOLD,
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: `1px solid ${GOLD_BORDER}`,
              }}
            >
              How Guardian Works →
            </Link>
          </div>
        </div>

        {/* ── RELATED POSTS ─────────────────────────────────────────────────── */}
        <div style={{ marginTop: '4rem' }}>
          <p
            style={{
              fontWeight: 800,
              fontSize: '0.78rem',
              color: GOLD,
              marginBottom: '1.25rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                href: '/blog/ai-for-loneliness',
                title: 'AI for Loneliness: Does It Actually Help?',
                tag: 'Wellbeing',
              },
              {
                href: '/blog/guardian-family-safety',
                title: 'How MEOK Guardian Protects Your Family from Scams',
                tag: 'Safety',
              },
              {
                href: '/blog/ai-for-seniors-uk',
                title: 'AI Companion for Seniors in the UK: What Families Need to Know',
                tag: 'Seniors',
              },
              {
                href: '/blog/senior-mode-guide',
                title: 'MEOK Senior Mode: A Complete Guide',
                tag: 'Product',
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  background: CARD_BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '0.875rem',
                  padding: '1.1rem',
                  transition: 'border-color 0.2s',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    background: GOLD_BG,
                    border: `1px solid ${GOLD_BORDER}`,
                    borderRadius: '9999px',
                    padding: '0.2rem 0.6rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: TEXT,
                    lineHeight: 1.45,
                  }}
                >
                  {post.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── FOOTER NOTE ───────────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: `1px solid ${BORDER}`,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.95rem', color: TEXT, marginBottom: '0.25rem' }}>
              MEOK AI LABS
            </p>
            <p style={{ fontSize: '0.82rem', color: FAINT }}>
              Built with care. Designed for dignity.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '/about' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Try MEOK', href: '/signup' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.85rem',
                  color: MUTED,
                  textDecoration: 'none',
                  fontWeight: 500,
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
