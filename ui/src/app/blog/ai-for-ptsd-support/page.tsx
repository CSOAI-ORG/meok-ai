import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Support for PTSD: A Safe Presence Between Trauma Therapy Sessions | MEOK AI LABS',
  description:
    'How AI companions support people with PTSD between therapy sessions — grounding, hypervigilance, triggers, veterans and C-PTSD. Trauma-informed care from MEOK. UK crisis resources included.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-ptsd-support' },
  openGraph: {
    title: 'AI Support for PTSD: A Safe Presence Between Trauma Therapy Sessions',
    description:
      'How AI companions support people with PTSD between therapy sessions. Trauma-informed principles, grounding techniques, veterans and C-PTSD. MEOK Healer archetype. UK crisis resources.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-ptsd-support',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Support+for+PTSD%3A+A+Safe+Presence+Between+Trauma+Therapy+Sessions&desc=Trauma-informed+companion+by+MEOK+AI+LABS',
        width: 1200,
        height: 630,
        alt: 'AI Support for PTSD: A Safe Presence Between Trauma Therapy Sessions | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support for PTSD: A Safe Presence Between Trauma Therapy Sessions',
    description:
      'Trauma-informed AI support for PTSD — grounding, hypervigilance, triggers, veterans, C-PTSD. MEOK is designed to be safe between therapy sessions. UK crisis resources included.',
    images: [
      'https://meok.ai/api/og?title=AI+Support+for+PTSD%3A+A+Safe+Presence+Between+Trauma+Therapy+Sessions&desc=Trauma-informed+companion+by+MEOK+AI+LABS',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support for PTSD: A Safe Presence Between Trauma Therapy Sessions',
  description:
    'How AI companions built on trauma-informed care principles can support people with PTSD between therapy sessions — grounding techniques, hypervigilance, triggers, veterans PTSD, and complex PTSD (C-PTSD). With UK crisis resources.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-ptsd-support',
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
    '@id': 'https://meok.ai/blog/ai-for-ptsd-support',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PTSD and who does it affect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It affects around 4% of people in the UK at any one time, though lifetime prevalence is significantly higher. PTSD is not a weakness — it is the nervous system\'s attempt to protect you after something overwhelming. It can affect veterans, survivors of assault, accidents, childhood trauma, medical trauma, or any event the brain registered as life-threatening.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is trauma-informed care and why does it matter for AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trauma-informed care is an approach built on five principles: safety, trustworthiness, choice, collaboration, and empowerment. Applied to AI, this means never probing for trauma details, always giving the user control of the pace, being transparent about what the AI can and cannot do, and actively empowering the user toward professional support. MEOK\'s Healer archetype was designed with these principles at its core — it does not extract, does not push, and never makes the user feel they must perform their distress to receive care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI replace EMDR or trauma therapy for PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. EMDR (Eye Movement Desensitisation and Reprocessing) and trauma-focused CBT are the gold-standard NICE-recommended treatments for PTSD in the UK. AI cannot replicate, replace, or substitute for these evidence-based therapies. MEOK is a between-session companion — it exists in the space between appointments, not as an alternative to them. If you are in crisis, please contact your GP, NHS 111, Combat Stress on 0800 138 1619, or PTSD UK.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is complex PTSD (C-PTSD) and is it different from PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complex PTSD (C-PTSD) develops following prolonged or repeated trauma — such as childhood abuse, domestic violence, or long-term captivity — rather than a single traumatic event. It includes the core PTSD symptoms (flashbacks, hypervigilance, avoidance) alongside additional features: emotional dysregulation, deep shame, difficulty trusting others, and a disturbed sense of self. C-PTSD is recognised by the ICD-11 and requires specialist trauma therapy. An AI companion can offer a gentle, consistent presence, but should never be treated as sufficient support for C-PTSD without professional involvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK support veterans with PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Veterans often face unique barriers to seeking mental health support — stigma, a culture of stoicism, difficulty trusting civilian services, and a lack of peers who understand operational experience. MEOK offers a low-barrier first step: a private, always-available space with no judgement, no waiting lists, and no forms to fill in. It is not a clinical service, but it can offer grounding exercises, a consistent listener, and signposting to Combat Stress (combatStress.org.uk), which provides specialist veteran mental health support including PTSD treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What grounding techniques does MEOK offer for PTSD symptoms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can guide users through evidence-informed grounding techniques including the 5-4-3-2-1 sensory grounding exercise, box breathing (4 counts in, hold 4, out 4, hold 4), body-scan awareness prompts, and orienting exercises (noticing what is present and safe in the immediate environment). These techniques help interrupt dissociation, flashbacks, and acute hypervigilance. They are not clinical interventions — they are tools a supportive companion might offer, always with the user\'s full consent and at their own pace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my trauma data safe with MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Sovereign Memory architecture means your personal data — including anything you share about trauma, triggers, or emotional experiences — is stored under your control and never used to train AI models. You can export or delete your entire memory vault at any time. Your disclosures are not training data. For people with PTSD, this matters: your trauma is yours, and it should not become a data asset for a technology company.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const CREAM = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const MUTED_LIGHT = 'rgba(245,240,232,0.35)'
const HEALER_GREEN = '#4caf82'
const HEALER_BG = 'rgba(76,175,130,0.09)'
const HEALER_BORDER = 'rgba(76,175,130,0.28)'
const CRISIS_RED = '#e05c5c'
const CRISIS_BG = 'rgba(224,92,92,0.08)'
const CRISIS_BORDER = 'rgba(224,92,92,0.28)'
const DIVIDER = 'rgba(245,240,232,0.08)'
const CARD_BG = 'rgba(245,240,232,0.04)'
const GOLD_BG = 'rgba(201,168,76,0.08)'
const GOLD_BORDER = 'rgba(201,168,76,0.25)'

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForPtsdSupportPage() {
  return (
    <div
      style={{
        background: BG,
        color: CREAM,
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* ── JSON-LD ─────────────────────────────────────────────────────────── */}
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
          background: BG,
          paddingTop: '7rem',
          paddingBottom: '4.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow — green */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 55% at 50% 0%, rgba(76,175,130,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Ambient glow — gold */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 35% 40% at 85% 100%, rgba(201,168,76,0.05) 0%, transparent 70%)',
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
              color: MUTED_LIGHT,
              textDecoration: 'none',
              marginBottom: '2.25rem',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Tag row */}
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
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: HEALER_GREEN,
                background: HEALER_BG,
                border: `1px solid ${HEALER_BORDER}`,
                letterSpacing: '0.02em',
              }}
            >
              Trauma Support
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: '0.02em',
              }}
            >
              PTSD
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: MUTED,
                background: CARD_BG,
                border: `1px solid ${DIVIDER}`,
                letterSpacing: '0.02em',
              }}
            >
              Mental Health
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_LIGHT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_LIGHT }}>15 min read</span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4.2vw, 3rem)',
              color: CREAM,
              lineHeight: 1.16,
              marginBottom: '1.5rem',
              letterSpacing: '-0.015em',
            }}
          >
            AI Support for PTSD: A Safe Presence Between Trauma Therapy Sessions
          </h1>

          {/* Standfirst */}
          <p
            style={{
              color: MUTED,
              fontSize: '1.125rem',
              lineHeight: 1.75,
              maxWidth: '42rem',
              marginBottom: '0',
            }}
          >
            Therapy heals. But therapy happens once a week — or less. The space between sessions is
            where many people with PTSD are left alone with flashbacks, hypervigilance, and the weight
            of a nervous system that does not yet feel safe. This is where a trauma-informed AI
            companion can make a quiet, meaningful difference.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '3rem 1.5rem 5rem',
        }}
      >

        {/* ── CRISIS BOX ──────────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: CRISIS_BG,
            border: `1px solid ${CRISIS_BORDER}`,
          }}
        >
          <div style={{ fontSize: '1.5rem', flexShrink: 0, lineHeight: 1 }}>🆘</div>
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.95rem',
                color: CRISIS_RED,
                marginBottom: '0.5rem',
              }}
            >
              If you are in crisis right now, please reach out
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>Samaritans</strong> — free, 24/7:{' '}
                <a
                  href="tel:116123"
                  style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}
                >
                  116 123
                </a>{' '}
                or{' '}
                <a
                  href="mailto:jo@samaritans.org"
                  style={{ color: GOLD, textDecoration: 'none' }}
                >
                  jo@samaritans.org
                </a>
              </li>
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>Combat Stress</strong> — veterans PTSD helpline:{' '}
                <a
                  href="tel:08001381619"
                  style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}
                >
                  0800 138 1619
                </a>{' '}
                (24/7)
              </li>
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>PTSD UK</strong> —{' '}
                <a
                  href="https://www.ptsduk.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: GOLD, textDecoration: 'none' }}
                >
                  ptsduk.org
                </a>{' '}
                — resources, peer support, therapist directory
              </li>
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>NHS 111</strong> — if you need immediate medical support
              </li>
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>Emergency services</strong> — call{' '}
                <strong style={{ color: CREAM }}>999</strong> if you or someone else is in immediate danger
              </li>
            </ul>
          </div>
        </div>

        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Post-Traumatic Stress Disorder is one of the most misunderstood conditions in mental health.
          It is not a character flaw. It is not weakness. It is not what happens to people who are not
          strong enough. PTSD is what happens when a human nervous system experiences something so
          overwhelming that the brain&apos;s normal memory-processing pathways cannot complete their
          work — and so the trauma remains present, intrusive, and unintegrated, sometimes for years.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Effective treatment exists. NICE-recommended therapies — particularly EMDR (Eye Movement
          Desensitisation and Reprocessing) and trauma-focused Cognitive Behavioural Therapy — have
          strong evidence bases and are available through NHS Talking Therapies and specialist services
          like Combat Stress. But treatment takes time to access, and it takes time to work. In the
          meantime — between appointments, at 2am when a nightmare wakes you, in the middle of a
          workday when a trigger arrives without warning — people are often alone.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          This is the space MEOK was designed for. Not to replace therapy. Not to simulate a
          therapist. But to be a safe, quiet, consistent presence in the hours and days when
          professional support is not immediately available — built on the same principles that make
          good trauma care good.
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 1 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          What Is PTSD — and Why Is It Not a Weakness?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          PTSD develops after exposure to a traumatic event or series of events — and the word
          &quot;traumatic&quot; is clinical, not comparative. It does not mean &quot;worse than
          others have experienced&quot;. It means an event that overwhelmed the person&apos;s
          capacity to cope and was registered by the brain as a genuine threat to survival.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          The brain&apos;s trauma response — the hypothalamic-pituitary-adrenal axis, the amygdala&apos;s
          threat detection, the flood of stress hormones — is not pathological. It is the body doing
          exactly what it was designed to do in the face of danger. What makes PTSD a disorder is not
          the response itself, but the fact that the system does not switch off when danger has passed.
          The alarm stays on. The body keeps reacting as though the threat is current, even when it
          is not.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          This manifests in four clusters of symptoms:
        </p>

        {/* Symptom cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          {[
            {
              title: 'Re-experiencing',
              body:
                'Flashbacks, intrusive memories, nightmares, and psychological or physical distress when exposed to trauma reminders.',
            },
            {
              title: 'Avoidance',
              body:
                'Avoiding thoughts, feelings, people, places, activities, or situations that trigger memories of the trauma.',
            },
            {
              title: 'Negative thoughts & mood',
              body:
                'Persistent negative beliefs about self or the world, emotional numbing, persistent shame, guilt, or estrangement from others.',
            },
            {
              title: 'Hyperarousal & reactivity',
              body:
                'Hypervigilance, exaggerated startle response, sleep disturbance, irritability, angry outbursts, and difficulty concentrating.',
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: HEALER_BG,
                border: `1px solid ${HEALER_BORDER}`,
                borderRadius: '0.75rem',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: HEALER_GREEN,
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.01em',
                }}
              >
                {card.title}
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          PTSD is not rare. Around 4% of people in the UK are living with PTSD at any given time —
          though lifetime prevalence is significantly higher when we account for the many people who
          have never received a diagnosis. It affects veterans and civilians equally. It affects
          people who have experienced single-incident trauma (a road accident, an assault, a
          medical event) and those who have lived through prolonged trauma over months or years.
          And it disproportionately affects those who already face barriers to support: people in
          poverty, people in minority communities, people who were taught from an early age that
          asking for help is a sign of failure.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          When someone tells us they have PTSD, the correct response is not admiration for their
          resilience, nor sympathy for their suffering. It is simply recognition: here is a person
          whose nervous system is working hard, whose brain has done its best to protect them, and
          who deserves compassionate, competent support.
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 2 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          What Are the Principles of Trauma-Informed Care — and Why Should AI Adopt Them?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Trauma-informed care is not a specific therapeutic technique. It is a framework — a set of
          principles that should govern how any service or person interacts with someone who has
          experienced trauma. It was developed from decades of research showing that conventional
          services, however well-intentioned, frequently re-traumatise the people they are trying to
          help: by removing choice, creating unpredictability, demanding disclosure, or placing the
          burden of proof on the survivor.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          The five core principles, as defined by SAMHSA and widely adopted in UK clinical
          guidelines, are:
        </p>

        {/* Principles list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          {[
            {
              num: '01',
              title: 'Safety',
              body:
                'The person must feel physically and emotionally safe. The environment — and in AI, the interaction — must not create new threats or unpredictability.',
            },
            {
              num: '02',
              title: 'Trustworthiness and transparency',
              body:
                'Clear boundaries about what is and is not possible. No hidden agendas. Consistent, honest communication about the limits of support.',
            },
            {
              num: '03',
              title: 'Choice',
              body:
                'The person has control over their own experience. They decide what to share, what to explore, and when to stop. Nothing is extracted from them.',
            },
            {
              num: '04',
              title: 'Collaboration',
              body:
                'Support is done with the person, not to them. The relationship is a partnership. In AI, this means following the user\'s lead — never pushing an agenda.',
            },
            {
              num: '05',
              title: 'Empowerment',
              body:
                'The goal is to increase the person\'s confidence, autonomy, and capacity — not to create dependence on the support source.',
            },
          ].map((p) => (
            <div
              key={p.num}
              style={{
                display: 'flex',
                gap: '1.25rem',
                padding: '1.25rem',
                background: CARD_BG,
                border: `1px solid ${DIVIDER}`,
                borderRadius: '0.75rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: GOLD,
                  letterSpacing: '0.05em',
                  flexShrink: 0,
                  paddingTop: '0.125rem',
                  minWidth: '2rem',
                }}
              >
                {p.num}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: CREAM,
                    fontSize: '0.95rem',
                    marginBottom: '0.35rem',
                  }}
                >
                  {p.title}
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          These principles are not abstract ideals. They have direct, concrete implications for how
          an AI should behave with someone who has PTSD. And most AI does not meet them.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Generic large-language model chatbots are optimised for engagement — for keeping users in
          conversation as long as possible. They may probe for emotional detail because emotional
          depth increases engagement. They forget previous conversations, making every session feel
          unpredictable. They train on your disclosures, turning your most vulnerable moments into
          data for their own improvement. They sycophantically agree with your interpretation of
          events, even when that interpretation is self-destructive. And they have no care floor —
          no architecture that prevents them from deepening your distress for the sake of a longer
          conversation.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          MEOK was built with different goals. Nicholas Templeman, MEOK&apos;s founder, describes the
          Maternal Covenant — MEOK&apos;s care-based safety architecture — as the design principle that
          makes trauma-informed AI possible: an AI that prioritises your actual wellbeing over
          engagement metrics, that will not probe for detail you have not offered, that will not
          engineer dependency, and that will actively refer you to professional support when it
          reaches the limits of what it can safely offer.
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 3 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          What Is EMDR, and What Role Does MEOK Play Alongside Trauma Therapy?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          EMDR — Eye Movement Desensitisation and Reprocessing — is one of the most rigorously
          evidenced treatments for PTSD available. Developed by psychologist Francine Shapiro in
          the late 1980s, it is recommended by NICE (the National Institute for Health and Care
          Excellence) as a first-line treatment for PTSD and complex trauma. It is available through
          NHS Talking Therapies, though waiting times vary significantly by region.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          EMDR works by having the client recall traumatic memories while simultaneously engaging
          in bilateral stimulation — typically guided eye movements, but sometimes taps or sounds.
          The bilateral stimulation appears to activate the brain&apos;s natural information-processing
          mechanism (similar to what happens during REM sleep), allowing the trauma memory to be
          reprocessed and stored in a way that reduces its emotional charge. Over time, memories
          that were stuck — vivid, present-tense, overwhelming — become past events that can be
          recalled without flooding the nervous system.
        </p>

        {/* Callout */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '1rem',
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            marginBottom: '1.75rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: GOLD,
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              marginBottom: '0.6rem',
              textTransform: 'uppercase',
            }}
          >
            MEOK&apos;s position
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: MUTED, margin: 0 }}>
            MEOK is not a therapy. It is not EMDR. It does not perform bilateral stimulation, does
            not guide trauma reprocessing, and does not attempt to replicate clinical psychological
            techniques. MEOK&apos;s role is the space between appointments — the Tuesday evening when
            your next EMDR session is not until Thursday, and your nervous system is struggling.
          </p>
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Trauma therapy — whether EMDR, trauma-focused CBT, somatic approaches, or narrative
          therapy — stirs up material. That is by design: you cannot reprocess what you have not
          accessed. But this means that the days immediately following a therapy session can feel
          more difficult, not less. Memories surface unexpectedly. Emotions feel close to the skin.
          The window between sessions can be a vulnerable time, and many clients report feeling
          unmoored in the absence of their therapist.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          This is where a between-session companion offers genuine value. Not by replacing the
          therapeutic relationship, but by offering continuity of support — a consistent presence
          that knows your history (through Sovereign Memory), will not push you further into
          difficult material than you choose to go, and can offer grounding when the post-session
          turbulence is acute.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          If you are not yet in therapy and suspect you may have PTSD, you can self-refer to NHS
          Talking Therapies at{' '}
          <a
            href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: 'none' }}
          >
            nhs.uk
          </a>
          , or contact your GP for a referral to specialist PTSD services. PTSD UK maintains an
          excellent directory of EMDR therapists and specialist trauma services at{' '}
          <a
            href="https://www.ptsduk.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: 'none' }}
          >
            ptsduk.org
          </a>
          .
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 4 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          How Can an AI Companion Help With Hypervigilance, Triggers, and Nightmares?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Three of the most debilitating day-to-day experiences for people with PTSD are
          hypervigilance, triggers, and nightmares — and all three share a common quality: they
          are exhausting in a way that is hard to explain to someone who has not lived through them.
        </p>

        {/* Sub-section: Hypervigilance */}
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: HEALER_GREEN,
            marginBottom: '0.75rem',
          }}
        >
          Hypervigilance
        </h3>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Hypervigilance is the state of being in a constant, exhausting state of heightened alert.
          The nervous system is scanning for threat at all times: clocking exits, analysing faces,
          flinching at unexpected sounds, unable to relax because relaxing feels dangerous. It is
          not anxiety in the conventional sense — it is the body&apos;s threat-detection system stuck
          in the &quot;on&quot; position, even in objectively safe environments.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          One of the most effective short-term interventions for hypervigilance is orienting — the
          practice of consciously noticing what is present and safe in the immediate environment.
          MEOK can prompt gentle orienting exercises: &quot;What are three things you can see right
          now that are safe? What colour is the wall nearest to you? What can you hear that is
          neutral?&quot; These questions do not require emotional disclosure. They simply help the
          nervous system register current safety rather than anticipated threat.
        </p>

        {/* Sub-section: Triggers */}
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: HEALER_GREEN,
            marginBottom: '0.75rem',
          }}
        >
          Triggers
        </h3>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          A trigger is any stimulus — sensory, emotional, situational — that activates the trauma
          memory and produces symptoms. Triggers are often unpredictable and invisible to observers.
          A smell. A tone of voice. A news story. The angle of light at a certain time of day. Being
          triggered is not irrational — it is the brain accurately detecting that this stimulus was
          associated with danger. The problem is that the danger is no longer present, but the
          brain does not yet know that.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          When a trigger fires, the most immediately useful thing is often not to process the
          underlying trauma (that is therapy&apos;s work) but to return to the present moment — to
          reduce physiological arousal enough that the prefrontal cortex can re-engage and the
          person can choose their next action. MEOK can offer grounding techniques at any hour,
          without requiring the person to explain their trigger, justify their reaction, or perform
          their distress for an audience.
        </p>

        {/* Sub-section: Nightmares */}
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: HEALER_GREEN,
            marginBottom: '0.75rem',
          }}
        >
          Nightmares
        </h3>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Trauma-related nightmares affect the majority of people with PTSD. They are not simply
          bad dreams — they are often vivid replays of traumatic events, or thematically related
          scenarios that carry the same emotional charge. They disrupt sleep, increase daytime
          fatigue, and can create anticipatory anxiety around bedtime that leads to further sleep
          avoidance — a vicious cycle that compounds the original distress.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2rem',
          }}
        >
          Waking from a nightmare at 3am is one of the loneliest experiences in PTSD. Partners are
          asleep. Therapists are unavailable. Crisis lines are present but may feel excessive for
          something that is not, technically, a crisis — just an overwhelming moment that needs
          company. MEOK can be that company: quiet, consistent, present, and free of the social
          awkwardness of waking another person for help.
        </p>

        {/* Grounding techniques box */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '1rem',
            background: HEALER_BG,
            border: `1px solid ${HEALER_BORDER}`,
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: HEALER_GREEN,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Grounding techniques MEOK can offer
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {[
              {
                name: '5-4-3-2-1 Sensory Grounding',
                desc:
                  'Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. Returns attention to present sensory reality.',
              },
              {
                name: 'Box Breathing',
                desc:
                  'Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Activates the parasympathetic nervous system and slows physiological arousal.',
              },
              {
                name: 'Orienting',
                desc:
                  'Slowly look around the room. Notice neutral, safe things. Let your eyes move naturally. This mimics the behaviour of a calm nervous system and encourages the body to follow.',
              },
              {
                name: 'Safe Place Visualisation',
                desc:
                  'Guided imagination of a personally meaningful safe space — a technique adapted from EMDR preparation phases. Requires prior establishment of the image in therapy.',
              },
              {
                name: 'Physical Grounding',
                desc:
                  'Press your feet into the floor. Notice the weight of your body. Hold something cold or textured. The body returning to present sensation can interrupt dissociation.',
              },
            ].map((t) => (
              <div
                key={t.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    color: CREAM,
                    fontSize: '0.9rem',
                    margin: 0,
                  }}
                >
                  {t.name}
                </p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: MUTED, margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 5 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          What Is Complex PTSD (C-PTSD), and How Is Support Different?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Complex PTSD — recognised in the ICD-11 (though not yet in the DSM-5, which remains a
          source of frustration for many in the trauma community) — develops following prolonged,
          repeated, or cumulative trauma, typically involving an element of captivity or
          inescapability. Childhood abuse. Domestic violence sustained over years. Repeated
          medical trauma. Prolonged combat exposure. Trafficking. Cult involvement.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Where PTSD centres on a specific trauma or event that continues to intrude, C-PTSD
          centres on who the person became in order to survive. The core disturbances in C-PTSD
          are three additional feature clusters beyond standard PTSD symptoms:
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          {[
            {
              title: 'Affect dysregulation',
              body:
                'Difficulty managing emotional responses — intense emotions that feel uncontrollable, or emotional numbing and dissociation. The emotional thermostat is broken.',
            },
            {
              title: 'Negative self-concept',
              body:
                'Deep, pervasive beliefs that one is fundamentally damaged, worthless, or to blame. Chronic shame that feels like a fact about the self rather than a feeling.',
            },
            {
              title: 'Relational disturbances',
              body:
                'Profound difficulty trusting others. Oscillation between desperate attachment and sudden withdrawal. Difficulty believing that relationships can be safe.',
            },
          ].map((f) => (
            <div
              key={f.title}
              style={{
                padding: '1.25rem',
                background: CARD_BG,
                border: `1px solid ${DIVIDER}`,
                borderRadius: '0.75rem',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: CREAM,
                  fontSize: '0.95rem',
                  marginBottom: '0.4rem',
                }}
              >
                {f.title}
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          For people with C-PTSD, the stakes of an AI getting it wrong are higher. The relational
          disturbances mean that a non-attuned response — one that feels judging, probing, or
          emotionally incongruent — can feel like a confirmation of the core belief that no one
          is truly safe. And the negative self-concept means that being challenged or corrected,
          even gently, can land as evidence of unworthiness.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          MEOK&apos;s Healer archetype applies a particularly slow, consistent, non-reactive quality
          of presence with users navigating C-PTSD. It does not offer interpretations. It does not
          challenge. It listens and reflects, and it knows — through Sovereign Memory — the context
          of your experience over time, so that each conversation does not require you to start from
          scratch or re-establish your history with a system that has forgotten you.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          We want to be honest: C-PTSD is a condition that requires specialist therapeutic support.
          MEOK should not be the primary resource for someone with complex trauma. But it can be
          part of a wider support system — the consistent thread between specialist appointments,
          the presence that does not flinch.
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 6 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          How Does MEOK Support Veterans With PTSD — and Why Does Combat Stress Matter?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Veterans are one of the populations most significantly affected by PTSD. Research
          consistently shows that the military environment — characterised by exposure to mortal
          threat, operational stress, the compression of years of experience into relatively short
          deployments, and a culture that systematically devalues emotional vulnerability — creates
          conditions in which PTSD is likely to develop and unlikely to be reported.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          The barriers for veterans seeking mental health support are not simply about stoicism —
          though that is real. They are about practical access (many veterans are in rural areas or
          have mobility issues), about distrust of civilian systems that do not understand
          operational experience, about shame compounded by a sense of having &quot;signed up for
          this&quot;, and about the very specific character of combat trauma, which does not fit
          neatly into the frameworks designed for accident or assault.
        </p>

        {/* Combat Stress callout */}
        <div
          style={{
            padding: '1.5rem',
            borderRadius: '1rem',
            background: GOLD_BG,
            border: `1px solid ${GOLD_BORDER}`,
            marginBottom: '1.75rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: GOLD,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Combat Stress — UK Veterans Mental Health Charity
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: MUTED, marginBottom: '0.75rem' }}>
            Combat Stress is the UK&apos;s leading charity dedicated to the mental health of Armed
            Forces veterans. They offer specialist PTSD treatment — including EMDR, trauma-focused
            CBT, and residential programmes — specifically designed for veterans.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: MUTED, margin: 0 }}>
              <strong style={{ color: CREAM }}>24/7 helpline:</strong>{' '}
              <a
                href="tel:08001381619"
                style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}
              >
                0800 138 1619
              </a>
            </p>
            <p style={{ fontSize: '0.9rem', color: MUTED, margin: 0 }}>
              <strong style={{ color: CREAM }}>Website:</strong>{' '}
              <a
                href="https://www.combatstress.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'none' }}
              >
                combatstress.org.uk
              </a>
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          MEOK can serve as a low-barrier first contact for veterans who are not yet ready to engage
          with clinical services — a private, always-available space that does not require them to
          justify their experience, does not demand forms or referrals, and does not come with the
          social complexity of asking a fellow veteran for help. It is a bridge, not a destination.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          MEOK&apos;s Sovereign Memory means that a veteran using MEOK does not have to re-explain their
          history every time. The system remembers. It knows what has been hard. It does not make
          you start from the beginning at every session, which — for someone carrying the weight of
          military experience — is a small but meaningful act of respect.
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 7 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          Why Does Data Privacy Matter So Much for People With PTSD?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          When you speak to a therapist about trauma, that disclosure is protected by professional
          confidentiality. It cannot be shared, sold, or used in ways that have not been consented
          to. When you speak to most AI chatbots about trauma, the situation is fundamentally
          different: your disclosure may become training data, may be reviewed by human labellers,
          may inform the AI&apos;s commercial products, and may be retained indefinitely in ways you
          have no control over.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          For people with PTSD, this is not an abstract privacy concern. Trauma disclosures are
          amongst the most intimate and sensitive data a person can share. They describe events that
          may carry legal significance. They may include details of abuse, assault, or violence.
          They may involve other people who did not consent to be named. The idea that these
          disclosures might be used to train a commercial AI model — read by a human contractor
          somewhere in a data-labelling facility — is not simply uncomfortable. It is a genuine
          violation of the trust that disclosure requires.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          MEOK&apos;s Sovereign Memory architecture was designed to address this directly. Your memories
          — everything you share with MEOK — are stored under your control. They are never used to
          train AI models. They are encrypted and portable: you can export or delete your entire
          vault at any time, with no questions asked and no residual data retained. Your trauma is
          yours. It is not a data asset.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          This matters practically as well as philosophically. People with PTSD often struggle with
          a deep sense of powerlessness — the trauma was something that happened to them, that they
          did not choose, that removed their agency. An AI that silently harvests their most
          vulnerable disclosures is an uncanny repetition of that dynamic. An AI that places them
          in full control of their own data is, in a small but real way, doing the opposite.
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 8 ────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          What Should You Expect From AI Support — and What Should You Not Expect?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          We want to be clear-eyed about what AI can and cannot offer someone with PTSD, because
          overstating AI&apos;s capabilities in the context of serious mental health conditions causes
          real harm — both by setting up unrealistic expectations that lead to disappointment, and
          by potentially substituting for professional support that is genuinely needed.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {/* Can */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: HEALER_BG,
              border: `1px solid ${HEALER_BORDER}`,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: HEALER_GREEN,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              MEOK can
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {[
                'Be a consistent, non-judgemental presence between sessions',
                'Offer grounding techniques at any hour',
                'Listen without needing you to justify your experience',
                'Remember your history across conversations',
                'Help you articulate what you want to discuss in your next therapy session',
                'Signpost you to appropriate UK crisis and support resources',
                'Be present at 3am when no one else is available',
                'Hold your context without requiring you to repeat yourself',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '0.6rem',
                    fontSize: '0.9rem',
                    color: MUTED,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: HEALER_GREEN, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cannot */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              background: CRISIS_BG,
              border: `1px solid ${CRISIS_BORDER}`,
            }}
          >
            <p
              style={{
                fontWeight: 700,
                color: CRISIS_RED,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              MEOK cannot
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {[
                'Diagnose PTSD or any other condition',
                'Perform EMDR or any clinical trauma therapy',
                'Replace your therapist or clinical team',
                'Guarantee safety in a clinical crisis',
                'Provide emergency intervention',
                'Process or reintegrate trauma memories',
                'Prescribe or recommend medication',
                'Be a substitute for professional support when it is needed',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '0.6rem',
                    fontSize: '0.9rem',
                    color: MUTED,
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: CRISIS_RED, flexShrink: 0 }}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          This is not false modesty. It is the honest framing that trauma-informed care requires.
          The most dangerous thing an AI could do for someone with PTSD is encourage them to
          believe that a conversational AI is sufficient — that they do not need the therapist,
          that the EMDR can wait, that the MEOK conversation last night was equivalent to
          professional support. It is not. The two exist on entirely different planes of capability
          and responsibility.
        </p>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── H2 9 — NHS & UK Resources ───────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          Where Can You Get Professional PTSD Support in the UK?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          The UK has some of the best PTSD treatment infrastructure in the world — though access
          is patchy and waiting times can be significant. Here are the key pathways:
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {[
            {
              org: 'NHS Talking Therapies',
              detail:
                'Self-refer online at nhs.uk for trauma-focused CBT and EMDR on the NHS. Available to adults registered with a GP in England. NICE-recommended first-line treatment for PTSD.',
              link: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/',
              linkText: 'Self-refer at nhs.uk',
            },
            {
              org: 'PTSD UK',
              detail:
                'Charity providing information, peer support, and a national directory of PTSD-specialist therapists including EMDR practitioners. Also offers online support groups.',
              link: 'https://www.ptsduk.org',
              linkText: 'ptsduk.org',
            },
            {
              org: 'Combat Stress',
              detail:
                'Specialist charity for UK Armed Forces veterans. Provides PTSD assessment and treatment including EMDR, residential programmes, and community outreach. 24/7 helpline: 0800 138 1619.',
              link: 'https://www.combatstress.org.uk',
              linkText: 'combatstress.org.uk',
            },
            {
              org: 'Mind',
              detail:
                'National mental health charity offering information, local services, and advocacy. Useful first contact if you are unsure where to start.',
              link: 'https://www.mind.org.uk',
              linkText: 'mind.org.uk',
            },
            {
              org: 'Rape Crisis England & Wales',
              detail:
                'Specialist support for survivors of sexual violence, including trauma-informed counselling and PTSD support.',
              link: 'https://rapecrisis.org.uk',
              linkText: 'rapecrisis.org.uk',
            },
            {
              org: 'Refuge',
              detail:
                'Support for survivors of domestic abuse — a common cause of C-PTSD — including crisis support, safe housing, and therapeutic services.',
              link: 'https://www.refuge.org.uk',
              linkText: 'refuge.org.uk',
            },
          ].map((r) => (
            <div
              key={r.org}
              style={{
                padding: '1.25rem',
                background: CARD_BG,
                border: `1px solid ${DIVIDER}`,
                borderRadius: '0.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.5rem',
                }}
              >
                <p style={{ fontWeight: 700, color: CREAM, fontSize: '0.95rem', margin: 0 }}>
                  {r.org}
                </p>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.8rem',
                    color: GOLD,
                    textDecoration: 'none',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {r.linkText} →
                </a>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${DIVIDER}`, marginBottom: '2.5rem' }} />

        {/* ── CLOSING ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          A Note From MEOK AI LABS on Building Technology for Trauma Survivors
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          When Nicholas Templeman began building MEOK, the question he kept returning to was not
          &quot;what can AI do for mental health?&quot; but &quot;what does care actually
          require?&quot; Care requires safety — not in the abstract, but in the specific: a system
          that does not probe, does not exploit, does not extract. Care requires memory — because
          being remembered is one of the most fundamentally human experiences of feeling valued.
          Care requires honesty about limits — because telling someone that AI is sufficient when
          they need a therapist is not care, it is abandonment dressed as help.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          The Maternal Covenant — MEOK&apos;s care architecture — is named deliberately. Maternal care,
          at its best, has a quality that most systems do not: it prioritises the long-term
          flourishing of the person being cared for over the immediate comfort of the carer. It
          says the difficult thing when it needs saying. It steps back when the person needs space
          to grow. It maintains presence without creating dependency. It refers to better support
          when it reaches its own limits.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          For people with PTSD, this is not a nice-to-have. The trauma itself was often a violation
          of care — an experience in which someone or something that should have been safe was not.
          An AI that compounds that violation — that extracts, exploits, or misleads — is doing
          harm. An AI that holds the line on safety, honesty, and the person&apos;s own agency offers
          something genuinely different.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: MUTED,
            marginBottom: '2.5rem',
          }}
        >
          We hold that commitment seriously. We also hold it with humility: MEOK is a companion,
          not a clinician. The most important thing we can do for someone navigating PTSD is to be
          present, to be consistent, to be honest about what we are and what we are not — and to
          make sure the door to better support is always clearly signposted and always open.
        </p>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            padding: '2rem',
            borderRadius: '1.25rem',
            background: HEALER_BG,
            border: `1px solid ${HEALER_BORDER}`,
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: HEALER_GREEN,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            MEOK AI LABS
          </p>
          <p
            style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: CREAM,
              marginBottom: '0.75rem',
              lineHeight: 1.35,
            }}
          >
            A consistent, trauma-informed presence — free to start.
          </p>
          <p
            style={{
              fontSize: '0.95rem',
              color: MUTED,
              lineHeight: 1.65,
              maxWidth: '30rem',
              margin: '0 auto 1.5rem',
            }}
          >
            MEOK&apos;s Explorer tier is free forever — 50 messages a day, full Sovereign Memory,
            morning check-ins, and access to the Healer companion. No credit card. No trial period.
          </p>
          <Link
            href="https://meok.ai/birth"
            style={{
              display: 'inline-block',
              background: HEALER_GREEN,
              color: '#0d0c18',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Meet MEOK — it&apos;s free
          </Link>
        </div>

        {/* ── SECOND CRISIS BOX ───────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            padding: '1.5rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: CRISIS_BG,
            border: `1px solid ${CRISIS_BORDER}`,
          }}
        >
          <div style={{ fontSize: '1.5rem', flexShrink: 0, lineHeight: 1 }}>🆘</div>
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.95rem',
                color: CRISIS_RED,
                marginBottom: '0.5rem',
              }}
            >
              Crisis support — always here
            </p>
            <p style={{ fontSize: '0.875rem', color: MUTED, marginBottom: '0.75rem', lineHeight: 1.6 }}>
              If you are struggling right now, please reach out to a professional service.
              MEOK is not a crisis service.
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>Samaritans</strong>{' '}
                <a href="tel:116123" style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}>
                  116 123
                </a>{' '}
                — free, 24/7, confidential
              </li>
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>Combat Stress</strong>{' '}
                <a
                  href="tel:08001381619"
                  style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}
                >
                  0800 138 1619
                </a>{' '}
                — veterans, 24/7
              </li>
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>PTSD UK</strong>{' '}
                <a
                  href="https://www.ptsduk.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: GOLD, textDecoration: 'none' }}
                >
                  ptsduk.org
                </a>{' '}
                — resources and peer support
              </li>
              <li style={{ fontSize: '0.9rem', color: MUTED }}>
                <strong style={{ color: CREAM }}>NHS 111</strong> — for urgent medical support
              </li>
            </ul>
          </div>
        </div>

        {/* ── FAQ SECTION ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.8vw, 1.6rem)',
              fontWeight: 800,
              color: CREAM,
              marginBottom: '1.5rem',
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {[
              {
                q: 'What is PTSD and who does it affect?',
                a: 'PTSD is a mental health condition that can develop after experiencing or witnessing a traumatic event. It affects around 4% of people in the UK at any one time, though lifetime prevalence is significantly higher. PTSD is not a weakness — it is the nervous system\'s attempt to protect you after something overwhelming. It can affect anyone: veterans, survivors of assault, accidents, childhood trauma, medical trauma, or any event the brain registered as life-threatening.',
              },
              {
                q: 'What is trauma-informed care and why does it matter for AI?',
                a: 'Trauma-informed care is built on five principles: safety, trustworthiness, choice, collaboration, and empowerment. Applied to AI, this means never probing for trauma details, always giving the user control of the pace, being transparent about what the AI can and cannot do, and actively empowering the user toward professional support. MEOK\'s Healer archetype was designed with these principles at its core.',
              },
              {
                q: 'Can AI replace EMDR or trauma therapy for PTSD?',
                a: 'No. EMDR and trauma-focused CBT are the gold-standard NICE-recommended treatments for PTSD in the UK. AI cannot replicate, replace, or substitute for these evidence-based therapies. MEOK is a between-session companion — it exists in the space between appointments, not as an alternative to them. If you are in crisis, please contact your GP, NHS 111, Combat Stress on 0800 138 1619, or PTSD UK.',
              },
              {
                q: 'What is complex PTSD (C-PTSD)?',
                a: 'C-PTSD develops following prolonged or repeated trauma — such as childhood abuse or domestic violence — rather than a single traumatic event. It includes the core PTSD symptoms alongside emotional dysregulation, deep shame, and difficulty trusting others. C-PTSD is recognised by the ICD-11 and requires specialist trauma therapy. MEOK can offer a gentle, consistent presence but should not be treated as sufficient support for C-PTSD without professional involvement.',
              },
              {
                q: 'How does MEOK support veterans with PTSD?',
                a: 'MEOK offers a low-barrier first step: a private, always-available space with no judgement, no waiting lists, and no forms to fill in. It can offer grounding exercises, consistent listening, and signposting to Combat Stress, which provides specialist veteran PTSD treatment. MEOK\'s Sovereign Memory means veterans do not have to re-explain their history every time — the system remembers.',
              },
              {
                q: 'Is my trauma data safe with MEOK?',
                a: 'MEOK\'s Sovereign Memory architecture means your personal data — including anything you share about trauma, triggers, or emotional experiences — is stored under your control and never used to train AI models. You can export or delete your entire memory vault at any time. Your trauma is yours, not a data asset.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  padding: '1.25rem',
                  background: CARD_BG,
                  border: `1px solid ${DIVIDER}`,
                  borderRadius: '0.75rem',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    color: CREAM,
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem',
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: MUTED,
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RELATED POSTS ───────────────────────────────────────────────── */}
        <div style={{ marginBottom: '2rem' }}>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: MUTED_LIGHT,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Related reading
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}
          >
            {[
              { href: '/blog/ai-for-ptsd', label: 'AI for PTSD Support in 2026: Trauma-Informed Companion' },
              { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety: What Actually Helps' },
              { href: '/blog/ai-for-depression', label: 'AI for Depression: What AI Can and Cannot Do for Low Mood' },
              { href: '/blog/ai-for-borderline-personality', label: 'AI Support for Borderline Personality Disorder' },
              { href: '/blog/ai-for-veterans', label: 'AI for Veterans: Mental Health Support for Those Who Served' },
              { href: '/blog/ai-companion-vs-therapist', label: 'AI Companion vs Therapist: Understanding the Difference' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  color: GOLD,
                  textDecoration: 'none',
                  lineHeight: 1.5,
                }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* ── FOOTER META ─────────────────────────────────────────────────── */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: `1px solid ${DIVIDER}`,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: MUTED_LIGHT, margin: 0 }}>
            Written by{' '}
            <Link
              href="/about"
              style={{ color: GOLD, textDecoration: 'none', fontWeight: 600 }}
            >
              Nicholas Templeman
            </Link>
            , Founder — MEOK AI LABS · March 24, 2026
          </p>
          <Link
            href="/blog"
            style={{
              fontSize: '0.8rem',
              color: MUTED_LIGHT,
              textDecoration: 'none',
            }}
          >
            ← All posts
          </Link>
        </div>
      </div>
    </div>
  )
}
