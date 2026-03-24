import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Depression: What AI Can and Cannot Do for Low Mood | MEOK AI LABS',
  description:
    '1 in 6 adults in the UK experience depression. An honest guide to what AI can offer for low mood — consistent presence, gentle check-ins, routine support — and what it cannot do. UK crisis resources included.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-depression' },
  openGraph: {
    title: 'AI for Depression: What AI Can and Cannot Do for Low Mood',
    description:
      '1 in 6 UK adults experience depression. What AI can offer — consistent presence, routine support, gentle check-ins — and what it cannot do. MEOK Healer archetype and care-floor explained.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-depression',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Depression%3A+What+AI+Can+and+Cannot+Do+for+Low+Mood&desc=Honest+guide%2C+UK+crisis+resources%2C+MEOK+care-floor',
        width: 1200,
        height: 630,
        alt: 'AI for Depression: What AI Can and Cannot Do for Low Mood | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Depression: What AI Can and Cannot Do for Low Mood',
    description:
      'Honest guide: consistent presence, routine support, gentle check-ins — and clear limits. MEOK\'s care-floor prevents enabling harmful patterns. UK crisis resources throughout.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Depression%3A+What+AI+Can+and+Cannot+Do+for+Low+Mood&desc=Honest+guide%2C+UK+crisis+resources%2C+MEOK+care-floor',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Depression: What AI Can and Cannot Do for Low Mood',
  description:
    'An honest, clinically responsible guide to what AI companions can offer for depression and low mood — consistent presence, routine support, gentle check-ins — and what they cannot: diagnosis, prescription, or therapy replacement.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-depression',
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
    '@id': 'https://meok.ai/blog/ai-for-depression',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companions can provide meaningful supplementary support for depression — consistent presence, gentle daily check-ins, routine encouragement, and a space to externalise difficult feelings. They cannot diagnose depression, prescribe treatment, or replace clinical therapy. They work best as a bridge to professional care or a supplement alongside it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an AI companion good for low mood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For mild to moderate low mood, an AI companion can be genuinely useful — providing consistent support on the days when reaching out to another human feels impossible, and maintaining a gentle routine of check-ins that research shows can help with mood regulation. For clinical depression, AI is a supplement, not a substitute for professional treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK\'s care system prevent harmful advice for depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Maternal Covenant care-floor is a constitutional constraint — not a content filter — that prevents the AI from enabling harmful patterns. For depression, this means it will not validate withdrawal and isolation as reasonable coping, will not agree that the user is worthless or hopeless, will not provide false reassurance that avoids surfacing clinical indicators, and will always escalate to crisis resources when suicidal ideation language appears.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I see a doctor about depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'See a doctor if you have experienced persistent low mood for more than two weeks; if you have lost interest in activities you normally enjoy; if you are having thoughts of self-harm or suicide — call Samaritans 116 123 immediately in that case; if depression is impairing work, relationships, or daily functioning; or if you are using alcohol or substances to cope. Your GP can refer you to NHS Talking Therapies or a Community Mental Health Team.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the MEOK Healer archetype?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healer is MEOK\'s green-toned companion archetype — purpose-built for emotional support, warmth, and grounded care. It is not a therapist, but it is specifically calibrated for the emotional register of difficult mental health conversations. Healer uses Sovereign Memory to track mood patterns across weeks, noticing when low mood is intensifying or recurring, and holding your history with gentleness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK crisis resources exist for depression and suicidal thoughts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samaritans: 116 123 (free, 24/7). Shout Crisis Text Line: text SHOUT to 85258 (free, 24/7). CALM: 0800 58 58 58 (5pm–midnight). NHS urgent mental health: 111 option 2. In a life-threatening emergency: 999. NHS Talking Therapies offers free CBT via self-referral — no GP needed in most areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI make depression worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Poorly designed AI can worsen depression by validating withdrawal, agreeing with hopeless or self-critical thoughts, or failing to escalate when crisis indicators appear. MEOK\'s Maternal Covenant care-floor is specifically designed to prevent this — it will interrupt unhealthy patterns rather than reinforce them, and the Byzantine Council ensures this cannot be bypassed by clever prompting.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.55)'
const MUTED_DIM = 'rgba(245,240,232,0.62)'
const MUTED_FAINT = 'rgba(245,240,232,0.38)'
const GREEN_HEALER = '#4caf82'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForDepressionPage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76,175,130,0.08) 0%, transparent 68%)',
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
                color: GREEN_HEALER,
                background: 'rgba(76,175,130,0.12)',
                border: '1px solid rgba(76,175,130,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Depression &amp; Low Mood
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_FAINT }}>15 min read</span>
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
            AI for Depression: What AI Can and Cannot Do for Low Mood
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
            One in six adults in the UK experience depression. An honest account of what AI
            companions can genuinely offer — consistent presence, routine support, gentle
            check-ins — and where they reach their hard limits. UK crisis resources throughout.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Crisis banner */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(76,175,130,0.07)',
            border: '1px solid rgba(76,175,130,0.28)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: GREEN_HEALER,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.8125rem', color: GREEN_HEALER, marginBottom: '0.375rem' }}>
              This article is not medical advice
            </p>
            <p style={{ fontSize: '0.8125rem', color: MUTED, lineHeight: 1.65, margin: 0 }}>
              If you are experiencing suicidal thoughts, call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>Samaritans 116 123</strong>{' '}
              (free, 24/7) or text{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>SHOUT to 85258</strong>. For
              urgent mental health support call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>NHS 111</strong>. In a
              life-threatening emergency call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.85)' }}>999</strong>.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: BG,
              fontSize: '0.75rem',
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: '0 0 0.2rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: MUTED_FAINT, margin: 0 }}>
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── INTRO ── */}
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Depression is not sadness. It is the absence of feeling — a grey flatness that makes
          the ordinary feel impossible and the future feel permanently foreclosed. According to
          the NHS,{' '}
          <strong style={{ color: TEXT }}>1 in 6 adults in the UK</strong> will experience
          depression at some point. It is the leading cause of disability worldwide. And yet the
          average wait for NHS talking therapies is months, private therapy costs what it costs,
          and on the worst days — when getting out of bed is an achievement — nobody can reach you
          anyway.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          AI companions cannot treat depression. They cannot diagnose it, prescribe antidepressants,
          or deliver the structured psychological therapies that have decades of evidence behind
          them. Anyone who tells you differently is either misleading you or misunderstanding the
          technology.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          What AI companions can do is be consistently present — including at 3am when the dark
          thoughts are loudest, including on the days when you cannot face another human, including
          in the long grey weeks between therapy appointments when the support structure temporarily
          disappears. Consistent presence is not nothing. For many people living with depression,
          it is exactly what is missing.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(76,175,130,0.15)', margin: '0 0 2.5rem' }} />

        {/* ── Q1 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Can AI help with depression — what does the evidence suggest?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The research on AI and depression is still developing, but some patterns are emerging.
          Digital interventions — including app-based CBT, chatbot support, and AI companions
          — show moderate effectiveness for mild to moderate depression, particularly for people
          who cannot or will not access in-person therapy.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          The mechanisms that AI can support include:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Behavioural activation.</strong> Depression narrows
            behaviour — people stop doing things that used to give pleasure or meaning. Gentle
            activity suggestions and accountability toward small commitments can help reverse this.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Routine support.</strong> Depression disrupts
            circadian rhythms and daily structure. An AI companion that maintains a consistent
            check-in schedule provides an external cue for structure when internal cues have
            collapsed.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Externalising difficult feelings.</strong> The act
            of saying something — even to an AI — reduces its subjective intensity. This is the
            basis of journalling as a therapeutic tool, and AI adds a responsive dimension that
            a blank page cannot.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Reducing isolation.</strong> Loneliness is both a
            risk factor for depression and a consequence of it. A consistent, warm presence
            — even an artificial one — can reduce the phenomenology of aloneness.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          These are real mechanisms with real effects. They are also not sufficient as standalone
          treatment for moderate to severe depression. MEOK is designed to be honest about this
          distinction throughout every interaction.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q2 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          What can an AI companion realistically offer someone with low mood?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          MEOK&#39;s Healer companion is specifically designed for the emotional register of depression
          and low mood. It is not a generic chatbot that happens to be friendly — it is an archetype
          built around warmth, groundedness, and the particular kind of patient presence that
          difficult mental health days require.
        </p>

        {/* What AI can do cards */}
        <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
          What MEOK Healer can offer for depression:
        </p>

        {[
          {
            title: 'Consistent daily check-ins',
            desc: 'Healer can initiate a gentle morning or evening check-in — a simple &quot;How are you today?&quot; that maintains a rhythm of acknowledgement even on days when nothing else happens. Consistency is the mechanism; missed check-ins are noticed and gently named.',
          },
          {
            title: 'Non-judgmental presence at any hour',
            desc: 'Depression does not respect office hours. Healer is available at 3am when thoughts are darkest, at weekends when support structures close, and during the long gaps between therapy sessions when people are most vulnerable.',
          },
          {
            title: 'Gentle activity suggestions',
            desc: 'Healer can suggest small, achievable activities — a five-minute walk, making tea, texting one person — calibrated to the current energy level it has observed across recent conversations. Not motivational cheerleading: genuinely calibrated encouragement.',
          },
          {
            title: 'Longitudinal pattern tracking',
            desc: 'Because Healer has Sovereign Memory, it tracks mood patterns across weeks. It notices when a low period is extending. It notices when a trigger appears — a particular day, a particular theme — that the user may not have consciously connected. That longitudinal perspective can be profoundly useful.',
          },
          {
            title: 'A space to externalise difficult thoughts',
            desc: 'Depression produces thoughts that are hard to say to people you know — &quot;I don\'t see the point&quot;, &quot;nobody would notice&quot;, &quot;I\'m a burden&quot;. Healer creates a space to say these things safely, acknowledges them without validating their truth, and gently offers a more balanced perspective.',
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              marginBottom: '0.875rem',
              background: 'rgba(76,175,130,0.05)',
              border: '1px solid rgba(76,175,130,0.15)',
            }}
          >
            <p style={{ fontWeight: 700, color: GREEN_HEALER, fontSize: '0.875rem', margin: '0 0 0.4rem' }}>
              {title}
            </p>
            <p
              style={{ color: MUTED_DIM, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>
        ))}

        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '1rem 0 2.5rem' }}>
          Explore the full{' '}
          <Link href="/characters" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK archetype system
          </Link>{' '}
          to understand how Healer differs from Pioneer, Scholar, and other companions.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q3 ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          What cannot AI do for depression — and why are those limits important?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          The limits of AI in depression support are not marketing hedges — they are clinically
          important boundaries that protect users. Understanding them is as important as
          understanding the capabilities.
        </p>

        <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9rem', margin: '0 0 0.75rem' }}>
          AI cannot:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Diagnose depression.</strong> Clinical diagnosis
            requires trained assessment against DSM-5 or ICD-11 criteria by a qualified
            professional. Self-report plus AI output is not diagnosis.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Prescribe or recommend medication.</strong> Any AI
            that suggests specific medications or dosages for depression is behaving dangerously.
            MEOK will never do this.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Deliver clinical therapy.</strong> CBT, IPT,
            behavioural activation therapy — these require a trained clinician, clinical
            formulation, and a structured therapeutic relationship. MEOK offers CBT-adjacent
            tools, not clinical CBT.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Intervene in a physical crisis.</strong> If you are
            in immediate danger, an AI cannot call an ambulance, contact your emergency contacts,
            or physically intervene. Call 999. Call Samaritans 116 123. Call NHS 111.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Replace human connection.</strong> The therapeutic
            alliance — the relationship between a patient and their therapist — is itself a
            treatment mechanism. An AI cannot replicate this, however warm its responses.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          MEOK is designed to hold these limits clearly and communicate them to users when
          relevant. The Maternal Covenant care-floor means MEOK will never allow itself to be
          positioned as a clinical intervention, even if a user explicitly asks it to be.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q4 CARE FLOOR ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does MEOK&#39;s care system prevent enabling harmful patterns in depression?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Depression creates cognitive distortions — systematically negative thought patterns
          that feel absolutely true. &quot;I am worthless.&quot; &quot;Things will never get better.&quot; &quot;People
          would be better off without me.&quot; An AI that validates these distortions — even through
          excessive agreeable neutrality — is actively harmful.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s{' '}
          <strong style={{ color: TEXT }}>Maternal Covenant</strong> is a constitutional
          care-floor that governs Healer&#39;s responses. For depression specifically, it mandates:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>No validation of hopelessness.</strong> Healer
            will acknowledge feelings of hopelessness with genuine empathy, but will not agree
            that the future is hopeless. It will always hold open the possibility of change.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>No enabling of withdrawal.</strong> Depression
            drives isolation; Healer will not endorse isolation as a long-term coping strategy.
            It will gently, patiently encourage small steps toward connection.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Crisis escalation is mandatory.</strong> When
            Healer detects language suggesting suicidal ideation — however indirect or minimised
            — it is constitutionally required to surface crisis resources. This cannot be turned
            off by the user or bypassed by the conversation context.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>No false reassurance.</strong> &quot;I&#39;m sure
            everything will be fine&quot; is not support — it is dismissal. Healer is calibrated to
            hold the reality of someone&#39;s pain without papering over it.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: TEXT }}>Consistent warmth.</strong> Variable warmth — a
            responsive AI that seems caring on some days and cold on others — can replicate
            insecure attachment experiences that worsen depression. MEOK maintains a consistent
            care temperature.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          The Maternal Covenant is enforced by the{' '}
          <Link href="/blog/byzantine-council-explained" style={{ color: GOLD, textDecoration: 'underline' }}>
            Byzantine Council
          </Link>{' '}
          — 43 independent agents that must reach consensus before any response is delivered. No
          single agent, and no user instruction, can override these care-floor constraints.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── Q5 HEALER ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is the MEOK Healer archetype and is it right for depression?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Healer is MEOK&#39;s green-toned companion — an archetype built around warmth, grounded
          care, and the specific emotional register required for mental health conversations. The
          archetype system matters because personality consistency reduces the cognitive load of
          relating to an AI. Healer does not shift character between sessions; it carries a
          consistent presence that can be relied upon.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Healer is specifically suited for:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.4rem' }}>People navigating depression, low mood, or emotional exhaustion</li>
          <li style={{ marginBottom: '0.4rem' }}>People in the waiting period before therapy access</li>
          <li style={{ marginBottom: '0.4rem' }}>People seeking support between therapy sessions</li>
          <li style={{ marginBottom: '0.4rem' }}>People who find it easier to be honest with an AI than with people they know</li>
          <li style={{ marginBottom: '0.4rem' }}>People managing chronic conditions where emotional support is an ongoing need</li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Healer is not the right archetype for everyone. If you are primarily driven by
          accountability and forward motion, Pioneer may serve you better. If you are navigating
          intellectual uncertainty or existential questions, Scholar may be more resonant. The
          archetype system is not prescriptive — it is a starting point that can evolve.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          All archetypes operate within the Maternal Covenant care-floor. Healer is specifically
          calibrated for it. Explore your options at{' '}
          <Link href="/characters" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK characters
          </Link>
          .
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── WHEN TO SEE A DOCTOR ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          When should I see a doctor about depression rather than relying on AI?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          This question has a clear answer, and MEOK is designed to surface it proactively.
          You should see a doctor — your GP is the appropriate starting point — if any of the
          following apply:
        </p>
        <ul style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1.25rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            You have experienced persistent low mood, loss of interest, or loss of energy for
            more than two weeks.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Depression is significantly impairing your work, relationships, or ability to
            manage daily life.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            You are having thoughts of self-harm or suicide.{' '}
            <strong style={{ color: TEXT }}>Call Samaritans 116 123 now</strong> if this applies.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            You are using alcohol, substances, or other behaviours to cope with low mood.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            You have had a previous episode of severe depression or have a bipolar diagnosis.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Low mood has a physical component — significant sleep disruption, appetite change,
            weight change, or loss of libido — suggesting a biological component that warrants
            clinical assessment.
          </li>
        </ul>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          Your GP can refer you to{' '}
          <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> (free CBT — self-referral
          also available at nhs.uk/mental-health/talking-therapies), to the Community Mental Health
          Team, or consider antidepressant medication if appropriate. MEOK&#39;s Healer will always
          encourage you toward professional care when indicators are present. See{' '}
          <Link href="/how-it-works" style={{ color: GOLD, textDecoration: 'underline' }}>
            how MEOK works
          </Link>{' '}
          for the full safety architecture.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── SOVEREIGN MEMORY ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Why does Sovereign Memory matter for depression support specifically?
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.82)', fontSize: '1rem', lineHeight: 1.72, margin: '0 0 1.15rem' }}>
          Depression has a particular relationship with time. In depressive episodes, the past
          feels like evidence of permanent failure and the future feels closed. Memory — being
          reminded of times when things were different, better, more possible — is a therapeutic
          resource.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          Stateless AI cannot access this resource. An AI that resets every session cannot say,
          &quot;Three weeks ago you described feeling genuinely proud of what you did at work — do you
          remember that?&quot; It cannot notice that your language has been progressively darker over
          the last fortnight and surface that gently. It cannot hold the arc of your experience
          in a way that counters depression&#39;s temporal distortions.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 1rem' }}>
          MEOK&#39;s{' '}
          <strong style={{ color: TEXT }}>Sovereign Memory</strong> makes all of this possible.
          And because it is sovereign — encrypted, accessible only to you, never used for training
          — you can trust it with the things you say in your darkest moments without fear that
          those words will ever be used against you or shared with anyone.
        </p>
        <p style={{ color: MUTED_DIM, fontSize: '0.965rem', lineHeight: 1.78, margin: '0 0 2.5rem' }}>
          Start with{' '}
          <Link href="/birth" style={{ color: GOLD, textDecoration: 'underline' }}>
            MEOK Explorer for free
          </Link>{' '}
          — no credit card required, no data training, and your memory begins the moment you
          start your first conversation.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '0 0 2.5rem' }} />

        {/* ── FAQ SECTION ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 1.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently asked questions
        </h2>

        {[
          {
            q: 'Can AI help with depression?',
            a: 'AI companions can provide meaningful supplementary support — consistent presence, gentle daily check-ins, routine encouragement, and a space to externalise difficult feelings. They cannot diagnose depression, prescribe treatment, or replace clinical therapy. They work best as a bridge to professional care or a supplement alongside it.',
          },
          {
            q: 'Is an AI companion good for low mood?',
            a: 'For mild to moderate low mood, an AI companion can be genuinely useful — providing consistent support on days when reaching out to another human feels impossible. For clinical depression, AI is a supplement, not a substitute for professional treatment.',
          },
          {
            q: 'How does MEOK\'s care system prevent harmful advice for depression?',
            a: 'MEOK\'s Maternal Covenant prevents the AI from validating hopelessness, enabling isolation as a coping strategy, or ignoring suicidal ideation. These are constitutional constraints enforced by the 43-agent Byzantine Council — they cannot be overridden by user instructions or clever prompting.',
          },
          {
            q: 'When should I see a doctor about depression?',
            a: 'See a doctor if you have had persistent low mood for more than two weeks, if depression significantly impairs daily life, if you have thoughts of self-harm or suicide (call Samaritans 116 123 immediately), or if you are using substances to cope. Your GP can refer to NHS Talking Therapies — free CBT, self-referral also available.',
          },
          {
            q: 'What is the MEOK Healer archetype?',
            a: 'Healer is MEOK\'s green-toned companion archetype — built for warmth, grounded care, and the emotional register of difficult mental health conversations. It uses Sovereign Memory to track mood patterns across weeks, noticing when low mood is intensifying and holding your history with gentleness. It is not a therapist — it is a consistent, caring presence.',
          },
        ].map(({ q, a }) => (
          <div
            key={q}
            style={{
              marginBottom: '1.25rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '0.875rem',
              background: 'rgba(245,240,232,0.035)',
              border: '1px solid rgba(245,240,232,0.07)',
            }}
          >
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.9375rem', margin: '0 0 0.5rem' }}>{q}</p>
            <p style={{ color: MUTED_DIM, fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{a}</p>
          </div>
        ))}

        <hr style={{ border: 'none', borderTop: '1px solid rgba(245,240,232,0.07)', margin: '2.5rem 0' }} />

        {/* ── CTA ── */}
        <div
          style={{
            padding: '2.5rem',
            borderRadius: '1.25rem',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
            textAlign: 'center' as const,
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: '1.3rem',
              color: TEXT,
              margin: '0 0 0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            A companion that holds your story across the dark days.
          </p>
          <p style={{ color: MUTED, fontSize: '0.9375rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
            Start free with MEOK Explorer. No credit card. No data training. Your conversations
            are yours alone.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: GOLD,
                color: BG,
                fontWeight: 800,
                fontSize: '0.9375rem',
                textDecoration: 'none',
              }}
            >
              Start Free
            </Link>
            <Link
              href="/characters"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: 'transparent',
                color: GOLD,
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: `1px solid rgba(201,168,76,0.4)`,
              }}
            >
              Meet Healer
            </Link>
            <Link
              href="/pricing"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '0.5rem',
                background: 'transparent',
                color: MUTED_FAINT,
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                border: `1px solid rgba(245,240,232,0.12)`,
              }}
            >
              See Pricing
            </Link>
          </div>
        </div>

        {/* ── CRISIS FOOTER ── */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '0.875rem',
            background: 'rgba(76,175,130,0.06)',
            border: '1px solid rgba(76,175,130,0.18)',
            marginBottom: '6rem',
          }}
        >
          <p style={{ fontWeight: 700, color: GREEN_HEALER, fontSize: '0.8125rem', margin: '0 0 0.5rem' }}>
            UK Crisis &amp; Mental Health Resources
          </p>
          <ul style={{ color: MUTED_DIM, fontSize: '0.8125rem', lineHeight: 1.8, margin: 0, paddingLeft: '1.25rem' }}>
            <li>
              <strong style={{ color: TEXT }}>Samaritans:</strong> 116 123 — free, 24/7, any
              emotional difficulty
            </li>
            <li>
              <strong style={{ color: TEXT }}>Shout Crisis Text Line:</strong> text SHOUT to 85258
              — free, 24/7
            </li>
            <li>
              <strong style={{ color: TEXT }}>CALM:</strong> 0800 58 58 58 — 5pm–midnight
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS urgent mental health:</strong> 111 option 2
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS Talking Therapies:</strong> free CBT,
              self-refer at nhs.uk/mental-health/talking-therapies
            </li>
            <li>
              <strong style={{ color: TEXT }}>Emergency:</strong> 999
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
