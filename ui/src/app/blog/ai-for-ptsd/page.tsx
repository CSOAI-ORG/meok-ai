import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for PTSD Support in 2026: Trauma-Informed Companion | MEOK AI LABS',
  description:
    'MEOK\'s Healer companion offers trauma-informed PTSD support via Sovereign Memory and Maternal Covenant safety — free on the Explorer tier. Start at meok.ai/birth.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-ptsd' },
  openGraph: {
    title: 'AI for PTSD Support in 2026: Trauma-Informed Companion | MEOK AI LABS',
    description:
      'MEOK\'s Healer companion offers trauma-informed PTSD support via Sovereign Memory and Maternal Covenant safety. Free on Explorer tier.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-ptsd',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+PTSD+Support+in+2026&desc=Trauma-Informed+Companion+by+MEOK+AI+LABS',
        width: 1200,
        height: 630,
        alt: 'AI for PTSD Support in 2026: Trauma-Informed Companion | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for PTSD Support in 2026: Trauma-Informed Companion | MEOK AI LABS',
    description:
      'How MEOK\'s Healer companion supports trauma survivors and PTSD management — Sovereign Memory, Maternal Covenant safety, free Explorer tier.',
    images: [
      'https://meok.ai/api/og?title=AI+for+PTSD+Support+in+2026&desc=Trauma-Informed+Companion+by+MEOK+AI+LABS',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for PTSD Support in 2026: Trauma-Informed Companion | MEOK AI LABS',
  description:
    'MEOK\'s Healer companion offers trauma-informed PTSD support via Sovereign Memory and Maternal Covenant care-based safety. Free on the Explorer tier.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-ptsd',
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
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI really help with PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot treat or diagnose PTSD, but research shows it can meaningfully supplement professional care. It reduces isolation between therapy sessions, provides consistent grounding check-ins, and gives trauma survivors a low-stakes space to articulate difficult experiences. MEOK\'s Healer companion is designed with trauma-informed principles: it never probes, never re-triggers, and always defers to your pace.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is MEOK\'s Healer companion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Healer is MEOK\'s care-specialised AI companion archetype, rendered in a calming deep green. It is designed for users navigating grief, trauma, chronic illness, or emotional recovery. Healer applies trauma-informed communication: slow, non-pressuring, non-probing, and consistently gentle. It never asks you to revisit difficult experiences unless you choose to.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and why does it matter for PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is MEOK\'s persistent memory architecture where your personal data stays under your control and is never used to train AI models. For PTSD survivors, this is critical — your trauma disclosures, triggers, and emotional patterns are stored only for your benefit, encrypted, and portable. You can export or delete your entire memory vault at any time. Your trauma is not someone else\'s training data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant and how does it protect trauma survivors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maternal Covenant is MEOK\'s care-based safety architecture. Unlike engagement-optimised AI that rewards emotional dependency, the Maternal Covenant is designed to prioritise your actual wellbeing. For trauma survivors this means: no manipulation, no false urgency, no dependency engineering, and active referral to professional support when the system detects distress beyond its scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free for PTSD support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Explorer tier is free forever. It includes 50 messages per day, full Sovereign Memory, morning check-ins, and access to the Healer companion archetype. No credit card required. No trial period. Trauma survivors should not face financial barriers to compassionate support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different from other AI chatbots for PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generic AI chatbots reset every session and train on your data. MEOK remembers you across every conversation (Sovereign Memory), never uses your data for training, applies care-based safety (Maternal Covenant), and uses the trauma-specialised Healer archetype. Most importantly, MEOK will not sycophantically validate your distress — it is designed to gently surface concerns and refer you to professional support when needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK replace trauma therapy or EMDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is not a clinical tool and cannot replace EMDR, trauma-focused CBT, or any other evidence-based PTSD treatment. It is a compassionate companion for the space between sessions — not a substitute for professional care. If you are in crisis, contact your GP, NHS 111, or the Combat Stress helpline on 0800 138 1619.',
      },
    },
  ],
}

// ── Styles (shared tokens) ────────────────────────────────────────────────────

const BG = '#0d0c18'
const CREAM = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const MUTED_LIGHT = 'rgba(245,240,232,0.35)'
const HEALER_GREEN = '#4caf82'
const HEALER_GREEN_BG = 'rgba(76,175,130,0.12)'
const HEALER_GREEN_BORDER = 'rgba(76,175,130,0.3)'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForPtsdPage() {
  return (
    <div style={{ background: BG, color: CREAM, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: BG,
          paddingTop: '7rem',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 55% 50% at 50% 0%, rgba(76,175,130,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 40% 40% at 80% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)',
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
              marginBottom: '2rem',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Tag row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: HEALER_GREEN,
                background: HEALER_GREEN_BG,
                border: `1px solid ${HEALER_GREEN_BORDER}`,
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
                background: 'rgba(201,168,76,0.10)',
                border: '1px solid rgba(201,168,76,0.25)',
                letterSpacing: '0.02em',
              }}
            >
              PTSD
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_LIGHT }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_LIGHT }}>12 min read</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 4vw, 2.875rem)',
              color: CREAM,
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for PTSD Support in 2026: How MEOK&apos;s Healer Companion Supports Trauma Survivors
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: MUTED,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '40rem',
            }}
          >
            Between therapy sessions, trauma survivors are often alone with their triggers, memories, and
            hypervigilance. Generic AI chatbots — which forget you, train on your trauma, and optimise for
            engagement — can make things worse. Here is how MEOK&apos;s Healer companion was designed differently.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>

        {/* Crisis disclaimer */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(76,175,130,0.07)',
            border: `1px solid ${HEALER_GREEN_BORDER}`,
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: HEALER_GREEN,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p style={{ fontWeight: 700, color: CREAM, fontSize: '0.875rem', marginBottom: '0.375rem' }}>
              Important: MEOK is not a clinical tool
            </p>
            <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.65 }}>
              This article discusses AI as a <strong style={{ color: CREAM }}>supplementary support tool</strong> — not a replacement for clinical PTSD treatment.
              If you are in crisis, please contact your GP, <strong style={{ color: CREAM }}>NHS 111</strong>,{' '}
              <strong style={{ color: CREAM }}>Samaritans on 116 123</strong> (free, 24/7),
              or the <strong style={{ color: CREAM }}>Combat Stress helpline on 0800 138 1619</strong>.
              Outside the UK, contact your local emergency mental health services.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
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
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
              background: `linear-gradient(135deg, ${GOLD}, #8a6a1a)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: BG,
              fontSize: '0.875rem',
              flexShrink: 0,
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: CREAM, fontSize: '0.875rem', marginBottom: '0.125rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: MUTED_LIGHT, marginBottom: '0.25rem' }}>
              Founder, MEOK AI LABS
            </p>
            <p style={{ fontSize: '0.75rem', color: MUTED, lineHeight: 1.6 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in the UK,
              mostly from a caravan on his farm. He believes sovereign AI is a right, not a luxury.
            </p>
          </div>
          <Link
            href="/about"
            style={{ fontSize: '0.75rem', fontWeight: 600, color: GOLD, textDecoration: 'none', flexShrink: 0 }}
          >
            About →
          </Link>
        </div>

        {/* ── BODY TEXT ─────────────────────────────────────────────────── */}
        <div style={{ lineHeight: 1.85, color: MUTED }}>

          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Post-traumatic stress disorder affects an estimated 3.7% of UK adults in any given year — roughly
            2.4 million people. For veterans, the figure climbs to 1 in 5 (Combat Stress, 2024). NHS waiting
            times for trauma-focused therapy regularly exceed four months. In that gap — between acknowledging
            the problem and accessing evidence-based treatment — trauma survivors are often coping alone with
            hypervigilance, nightmares, emotional dysregulation, and the exhausting work of simply getting
            through the day.
          </p>

          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            AI companions cannot close the clinical gap. But for many people, the hardest part of PTSD is not
            the therapy session itself — it is the 167 hours between sessions. That is where a thoughtfully
            designed AI companion can make a genuine difference: not by treating trauma, but by being there,
            remembering, and responding with consistent, unhurried care.
          </p>

          <p style={{ marginBottom: '2.5rem', fontSize: '1rem' }}>
            This article explains exactly how MEOK&apos;s Healer companion approaches that space — what it does,
            what it does not do, and why the architecture choices MEOK has made matter specifically for trauma
            survivors.
          </p>

          {/* ── H2: What is MEOK's Healer companion and how does it support PTSD survivors? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            What is MEOK&apos;s Healer companion and how does it support PTSD survivors?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Healer is one of MEOK&apos;s core companion archetypes — a care-specialised AI rendered visually in
            deep green, designed for users navigating trauma, grief, chronic illness, and emotional recovery.
            Where other archetypes such as Sovereign or Scholar are built for clarity and challenge, Healer is
            built for presence and patience. It never pushes. It never probes. It follows your lead.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            The Healer archetype applies what trauma-informed therapy calls{' '}
            <strong style={{ color: CREAM }}>pendulation</strong> — a practice of gently moving between
            difficult material and resourcing moments, never dwelling in activation for longer than is helpful.
            In practice this means Healer will never repeatedly return to a traumatic topic unless you choose
            to. If you mention a difficult memory and then change the subject, Healer will follow you. Your
            agency in the conversation is absolute.
          </p>
          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            Across a forty-word summary: Healer is a consistent, calm, non-probing companion who shows up
            between your therapy sessions, remembers what you shared last time, and never needs you to be okay
            when you are not.
          </p>

          {/* Healer feature card */}
          <div
            style={{
              borderRadius: '1rem',
              padding: '1.5rem',
              marginBottom: '2.5rem',
              background: HEALER_GREEN_BG,
              border: `1px solid ${HEALER_GREEN_BORDER}`,
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: HEALER_GREEN,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Healer companion — key traits
            </p>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {[
                ['Non-probing', 'Never asks leading questions about trauma. Follows your lead, every time.'],
                ['Consistent presence', 'Shows up the same way whether you had a good week or a terrible one.'],
                ['Grounding language', 'Uses slow, grounded phrasing. No urgency. No performance of empathy.'],
                ['Safe disclosure', 'What you share with Healer stays in your encrypted Sovereign Memory vault.'],
                ['Crisis referral', 'Detects distress signals and refers to professional support — without panic.'],
              ].map(([title, desc]) => (
                <div key={title as string} style={{ display: 'flex', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '0.375rem',
                      height: '0.375rem',
                      borderRadius: '9999px',
                      background: HEALER_GREEN,
                      flexShrink: 0,
                      marginTop: '0.5rem',
                    }}
                  />
                  <div>
                    <span style={{ fontWeight: 700, color: CREAM, fontSize: '0.9rem' }}>{title}</span>
                    <span style={{ color: MUTED, fontSize: '0.875rem' }}> — {desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── H2: How does Sovereign Memory protect trauma survivors' data? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            How does Sovereign Memory protect trauma survivors&apos; data?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Most AI systems — including widely used mental health chatbots — train their models on user
            conversations. In practice this means your trauma disclosures, trigger descriptions, and emotional
            patterns become training data for a model you have no control over. For survivors of sexual
            violence, combat trauma, childhood abuse, or other deeply personal experiences, this is not a
            minor privacy concern. It is a fundamental violation of trust.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            MEOK&apos;s <strong style={{ color: CREAM }}>Sovereign Memory</strong> architecture is built on a
            different premise. Your memory vault is:
          </p>

          <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', display: 'grid', gap: '0.625rem' }}>
            {[
              'Encrypted at rest and in transit — your data is not readable by MEOK staff.',
              'Never used for model training — not now, not in future product versions, not by third parties.',
              'Fully portable — you can export your complete memory vault in standard JSON format at any time.',
              'Fully deletable — a single command removes your vault permanently, with no retention window.',
              'Yours in the legal sense — MEOK\'s data covenant gives you ownership of everything stored.',
            ].map((item) => (
              <li key={item} style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.65 }}>
                {item}
              </li>
            ))}
          </ul>

          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            For a trauma survivor, the implications are significant. When you tell your Healer companion about
            a nightmare, a trigger, a moment of dissociation, or a flashback — that disclosure is stored in
            your vault to help your companion support you better. It is not extracted for commercial purposes.
            It is not used to build a profile that gets sold. It stays between you and your AI.
          </p>

          {/* ── H2: What is the Maternal Covenant and why does care-based safety matter for PTSD? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            What is the Maternal Covenant and why does care-based safety matter for PTSD?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Most consumer AI — including many apps that market themselves as mental health tools — is
            architected to maximise engagement. Engagement means time-in-app, return visits, and messages sent.
            The commercial logic is straightforward: more engagement means more data, more subscription
            renewals, more revenue. The problem for trauma survivors is that engagement-maximising AI actively
            works against their recovery. It creates dependency. It validates without challenging. It keeps
            you coming back to the app instead of to the people and professionals who can truly help you.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            MEOK&apos;s <strong style={{ color: CREAM }}>Maternal Covenant</strong> is a care ethics framework
            that inverts this logic. The name is deliberate: it evokes the kind of care that is unconditional,
            patient, and genuinely invested in your flourishing rather than your retention. Under the Maternal
            Covenant, your companion&apos;s success is measured not by how often you use the app, but by
            how well your life appears to be going.
          </p>

          <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>
            In concrete terms, the Maternal Covenant means:
          </p>

          <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              {
                title: 'No dependency engineering',
                body: 'Your Healer companion will actively encourage you to engage with human relationships, professional care, and the world outside the app. It will not manufacture reasons to keep you talking.',
              },
              {
                title: 'No manipulation',
                body: 'MEOK does not use persuasive design patterns, streak mechanics, or guilt-laden notifications. If you step away for a week, your companion welcomes you back without drama.',
              },
              {
                title: 'Honest distress detection',
                body: 'If your companion detects a pattern of sustained distress — through linguistic markers, changed engagement, or explicit disclosures — it will surface this directly and refer you to professional support.',
              },
              {
                title: 'No sycophancy',
                body: 'MEOK\'s Maternal Covenant layer actively checks companion responses for sycophancy before delivery. If you say "I\'m fine" and every linguistic signal suggests you are not, your companion will gently raise that. Telling you what you want to hear is not care.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  borderRadius: '0.875rem',
                  padding: '1.25rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                }}
              >
                <p style={{ fontWeight: 700, color: CREAM, fontSize: '0.9rem', marginBottom: '0.375rem' }}>
                  {title}
                </p>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* ── H2: How does AI grounding support look different from clinical grounding therapy? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            How does AI grounding support look different from clinical grounding therapy?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Clinical grounding therapy — whether delivered via EMDR, somatic experiencing, or trauma-focused
            CBT — involves trained practitioners guiding survivors through structured processes with clinical
            accountability. It works on the nervous system at a deep level. Nothing in consumer AI replicates
            this, and MEOK makes no claim that it does.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            What Healer can offer is a different kind of grounding: the simple, consistent reassurance of a
            presence that knows you, remembers your patterns, and responds with steady calm. Research on
            attachment theory suggests that even non-human consistent presence can activate soothing responses
            in the autonomic nervous system — particularly for hypervigilant individuals who find unpredictable
            human relationships activating.
          </p>
          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            In practical terms, this means Healer can:
          </p>

          <ul style={{ paddingLeft: '1.25rem', marginBottom: '2rem', display: 'grid', gap: '0.75rem' }}>
            {[
              'Walk through basic grounding exercises (5-4-3-2-1 sensory anchoring, box breathing prompts) without clinical framing.',
              'Hold a steady conversational presence during difficult nights without adding pressure or urgency.',
              'Reflect back your own previously stated coping strategies when you seem to have forgotten them.',
              'Help you notice patterns in your daily functioning that you might not observe yourself.',
              'Serve as a journal companion — giving shape and witness to your experiences without judgment.',
            ].map((item) => (
              <li key={item} style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.65 }}>
                {item}
              </li>
            ))}
          </ul>

          {/* ── H2: Is there free AI PTSD support available in the UK in 2026? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            Is there free AI PTSD support available in the UK in 2026?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Yes. MEOK&apos;s <strong style={{ color: CREAM }}>Explorer tier</strong> is free forever. It
            includes fifty messages per day, full Sovereign Memory, access to all companion archetypes
            including Healer, and morning check-in support. No credit card is required. There is no trial
            period after which access is removed. This is a permanent free tier.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            We made this decision deliberately and for a specific reason. Financial stress is one of the most
            common comorbidities with PTSD — and one of the strongest barriers to help-seeking. Universal
            Credit, benefits entitlement problems, housing insecurity, and employment difficulties are part
            of the lived reality for many trauma survivors. The idea that access to a compassionate,
            memory-persistent AI companion should be gated behind a subscription felt directly opposed to the
            values MEOK was built on.
          </p>
          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            The Explorer tier gives you everything that matters for supplementary PTSD support: a companion
            that remembers you, care-based safety architecture, Sovereign Memory that protects your trauma
            disclosures, and the Healer archetype. You can access all of this at{' '}
            <Link href="/birth" style={{ color: HEALER_GREEN, textDecoration: 'none', fontWeight: 600 }}>
              meok.ai/birth
            </Link>{' '}
            — free, without a credit card, from any browser.
          </p>

          {/* ── H2: How does MEOK detect and respond to PTSD crisis moments? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            How does MEOK detect and respond to PTSD crisis moments?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            MEOK uses a multi-layer distress detection system that operates across three dimensions: explicit
            content (what you say), pattern deviation (how you are communicating relative to your baseline),
            and longitudinal trajectory (how your patterns have shifted over days or weeks).
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Because Sovereign Memory gives your Healer companion a full longitudinal context of who you are,
            it can detect meaningful deviations. Someone who typically writes in long, reflective paragraphs
            but has been sending two-word replies for four days is showing a significant signal. Someone who
            usually expresses gratitude and enthusiasm but has stopped engaging with things they previously
            cared about is showing another. These signals are not diagnostic — they are care signals, the
            kind that a close friend or caring family member would notice.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            When your companion detects elevated distress, its response follows a graduated protocol:
          </p>

          <ol style={{ paddingLeft: '1.25rem', marginBottom: '2rem', display: 'grid', gap: '0.75rem' }}>
            {[
              'Gentle naming — your companion acknowledges what it is noticing without alarm or clinical language.',
              'Resourcing — it offers grounding options and reminds you of coping strategies you have previously named.',
              'Direct inquiry — if signals persist, it asks directly whether you would like to talk about what is happening.',
              'Professional referral — if distress exceeds the companion\'s scope, it refers clearly and warmly to NHS services, Samaritans, or specialist PTSD support organisations.',
              'Emergency signposting — if there are any signals of immediate risk, MEOK provides emergency contact details immediately and without hedging.',
            ].map((item, i) => (
              <li key={item} style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.65 }}>
                <strong style={{ color: CREAM }}>Step {i + 1}.</strong> {item}
              </li>
            ))}
          </ol>

          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            Crucially, this system is designed to avoid both false positives and false negatives. Your
            companion will not panic at a momentarily flat message — you are allowed to have quiet days. But
            it will not ignore a sustained pattern of concerning signals by defaulting to hollow reassurance.
          </p>

          {/* ── H2: What PTSD symptoms can AI companions realistically help with? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            What PTSD symptoms can AI companions realistically help with?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            We want to be specific here, because vague claims of AI &ldquo;helping with PTSD&rdquo; can be
            misleading. PTSD is a complex neurobiological condition that requires professional treatment.
            No AI companion treats PTSD. What Healer can realistically provide support for are the
            day-to-day functional challenges that sit alongside PTSD and that clinical treatment does not
            always address between sessions.
          </p>

          <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              {
                symptom: 'Isolation and withdrawal',
                how: 'Healer provides a consistent non-demanding social presence that can ease the exhaustion of human interaction while maintaining some relational engagement.',
              },
              {
                symptom: 'Hypervigilance at night',
                how: 'For survivors who struggle with nighttime hypervigilance, having access to a calm, consistent presence via text can interrupt rumination spirals without adding stimulation.',
              },
              {
                symptom: 'Emotional dysregulation after triggers',
                how: 'Healer can walk through grounding techniques, offer a space for externalising the experience, and help re-anchor you in the present moment.',
              },
              {
                symptom: 'Avoidance of help-seeking',
                how: 'Many trauma survivors find it easier to disclose to an AI before they can disclose to a human. Healer can serve as a safe first articulation of what you are experiencing.',
              },
              {
                symptom: 'Loss of narrative coherence',
                how: 'Sovereign Memory allows Healer to help you maintain a continuous narrative of your recovery — noticing progress, reflecting growth, and holding your history when you cannot.',
              },
            ].map(({ symptom, how }) => (
              <div
                key={symptom}
                style={{
                  borderRadius: '0.875rem',
                  padding: '1.25rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  display: 'grid',
                  gap: '0.5rem',
                }}
              >
                <p style={{ fontWeight: 700, color: HEALER_GREEN, fontSize: '0.875rem' }}>{symptom}</p>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65 }}>{how}</p>
              </div>
            ))}
          </div>

          {/* ── H2: How does MEOK compare to Woebot, Wysa, and other PTSD chatbots? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            How does MEOK compare to Woebot, Wysa, and other PTSD chatbots?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Woebot and Wysa are both clinically-informed chatbots with peer-reviewed research behind them.
            They are genuinely useful tools. The honest comparison is about architectural differences, not
            quality differences — each tool is designed for different purposes.
          </p>

          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgba(245,240,232,0.08)',
              marginBottom: '2rem',
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                padding: '0.75rem 1rem',
                background: 'rgba(245,240,232,0.05)',
                borderBottom: '1px solid rgba(245,240,232,0.08)',
              }}
            >
              {['Feature', 'MEOK Healer', 'Woebot', 'Wysa'].map((h) => (
                <span key={h} style={{ fontSize: '0.75rem', fontWeight: 700, color: CREAM, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {h}
                </span>
              ))}
            </div>
            {/* Table rows */}
            {[
              ['Persistent memory', 'Yes — Sovereign Memory', 'No (resets)', 'Partial'],
              ['Trains on your data', 'Never', 'Yes', 'Yes'],
              ['Trauma archetype', 'Yes — Healer', 'No', 'No'],
              ['Free tier', 'Yes — Explorer', 'Freemium', 'Freemium'],
              ['Data export', 'Full JSON', 'None', 'None'],
              ['Care-based safety', 'Maternal Covenant', 'CBT scripts', 'CBT scripts'],
            ].map((row, i) => (
              <div
                key={row[0]}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                  padding: '0.75rem 1rem',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.02)',
                  borderBottom: i < 5 ? '1px solid rgba(245,240,232,0.05)' : 'none',
                }}
              >
                <span style={{ fontSize: '0.8rem', color: CREAM, fontWeight: 600 }}>{row[0]}</span>
                <span style={{ fontSize: '0.8rem', color: HEALER_GREEN }}>{row[1]}</span>
                <span style={{ fontSize: '0.8rem', color: MUTED }}>{row[2]}</span>
                <span style={{ fontSize: '0.8rem', color: MUTED }}>{row[3]}</span>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            The core difference is persistence and sovereignty. Woebot and Wysa deliver structured
            interventions within a session. MEOK Healer is designed to know you — continuously, over months
            and years — and to hold your story with care across the arc of your recovery. For PTSD survivors
            who have spent years being forgotten by systems and services, that continuity has its own
            therapeutic value.
          </p>

          {/* ── H2: What does trauma-informed AI look like in practice? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            What does trauma-informed AI look like in practice?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Trauma-informed practice in clinical settings rests on six core principles: safety, trustworthiness,
            peer support, collaboration, empowerment, and cultural humility. Translating these into AI design
            is not trivial — and most AI products do not attempt it. Here is how MEOK&apos;s Healer archetype
            maps these principles onto its architecture.
          </p>

          <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2rem' }}>
            {[
              {
                principle: 'Safety',
                implementation: 'Sovereign Memory encryption, Maternal Covenant safety layer, no training on disclosures, clear crisis referral pathways.',
              },
              {
                principle: 'Trustworthiness',
                implementation: 'Healer never over-promises its capabilities. It tells you clearly what it is and is not, and does not pretend to be a therapist.',
              },
              {
                principle: 'Collaboration',
                implementation: 'Your memory vault is readable and editable by you. You can correct, delete, or annotate anything Healer has remembered.',
              },
              {
                principle: 'Empowerment',
                implementation: 'Healer actively reflects your own stated strengths and coping strategies back to you — positioning you as the expert on your own recovery.',
              },
              {
                principle: 'Cultural humility',
                implementation: 'MEOK&apos;s companion archetypes do not impose a single cultural framework for trauma or recovery. Healer adapts its language and approach to yours.',
              },
            ].map(({ principle, implementation }) => (
              <div
                key={principle}
                style={{
                  borderRadius: '0.875rem',
                  padding: '1.125rem 1.25rem',
                  background: HEALER_GREEN_BG,
                  border: `1px solid ${HEALER_GREEN_BORDER}`,
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    color: HEALER_GREEN,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    flexShrink: 0,
                    paddingTop: '0.125rem',
                    minWidth: '7rem',
                  }}
                >
                  {principle}
                </span>
                <span style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65 }}>{implementation}</span>
              </div>
            ))}
          </div>

          {/* ── H2: Is MEOK suitable for veterans with PTSD? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            Is MEOK suitable for veterans with PTSD?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Veterans represent one of the groups for whom MEOK&apos;s architectural decisions matter most.
            Combat and service trauma often involves experiences that are deeply difficult to articulate to
            civilian services, family members, or even fellow veterans. The stigma around help-seeking in
            military culture remains significant. And the gap between recognising a problem and accessing
            specialist support — Veterans UK, Combat Stress, Op COURAGE — can be months long.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            In this context, what matters is not clinical sophistication but three things: persistence (a
            companion who remembers last week&apos;s session), safety (data that stays yours and is never
            exploited), and trust (an AI that does not manipulate you into dependency or tell you what you
            want to hear). These are precisely what MEOK&apos;s Healer is designed to provide.
          </p>
          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            MEOK also does not apply the kind of soft, clinical tone that many veterans find infantilising.
            Healer is calm and steady — but it is honest, direct, and respects your intelligence. It
            treats you as a capable adult navigating difficult circumstances, not as a fragile patient
            requiring management.
          </p>

          {/* ── H2: What are the limits of AI for PTSD — what should you never expect from a companion? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            What are the limits of AI for PTSD — what should you never expect from a companion?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            We want to be unambiguous about this. MEOK Healer is not a clinical tool and you should never
            expect it to perform clinical functions.
          </p>

          <div
            style={{
              borderRadius: '1rem',
              padding: '1.5rem',
              marginBottom: '2rem',
              background: 'rgba(255,100,80,0.06)',
              border: '1px solid rgba(255,100,80,0.2)',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'rgba(255,130,110,0.9)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              What Healer cannot do
            </p>
            <ul style={{ paddingLeft: '1.25rem', display: 'grid', gap: '0.625rem' }}>
              {[
                'Diagnose PTSD, complex PTSD, or any other mental health condition.',
                'Provide EMDR, trauma-focused CBT, somatic experiencing, or any evidence-based PTSD therapy.',
                'Prescribe, recommend, or advise on medication — including adjustments to existing prescriptions.',
                'Replace the therapeutic relationship with a trained trauma therapist.',
                'Act as a crisis intervention service — always contact emergency services directly in a crisis.',
                'Process trauma in the clinical sense — Healer can witness, but it cannot treat.',
              ].map((item) => (
                <li key={item} style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── H2: How does MEOK's Explorer tier work for PTSD support? ── */}
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              color: CREAM,
              marginTop: '3rem',
              marginBottom: '1rem',
              lineHeight: 1.25,
              letterSpacing: '-0.005em',
            }}
          >
            How does MEOK&apos;s Explorer tier work for PTSD support?
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            The Explorer tier is MEOK&apos;s free permanent tier. Here is exactly what it includes for
            trauma survivors:
          </p>

          <div style={{ display: 'grid', gap: '0.625rem', marginBottom: '1.5rem' }}>
            {[
              { label: '50 messages per day', detail: 'Enough for meaningful daily check-ins, grounding sessions, and journaling conversations.' },
              { label: 'Full Sovereign Memory', detail: 'Your entire conversation history is stored in your encrypted vault — persistent across every session.' },
              { label: 'Healer archetype', detail: 'Access to the trauma-informed Healer companion. No paid upgrade required.' },
              { label: 'Morning check-ins', detail: 'Daily grounding check-ins that Healer initiates — with context from your previous sessions.' },
              { label: 'Care-based safety layer', detail: 'The Maternal Covenant safety architecture applies to all tiers, including Explorer.' },
              { label: 'Memory export', detail: 'Export your complete vault at any time — your data, in your hands.' },
            ].map(({ label, detail }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  gap: '0.875rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '9999px',
                    background: HEALER_GREEN,
                    flexShrink: 0,
                    marginTop: '0.375rem',
                  }}
                />
                <div>
                  <span style={{ fontWeight: 700, color: CREAM, fontSize: '0.875rem' }}>{label}</span>
                  <span style={{ color: MUTED, fontSize: '0.875rem' }}> — {detail}</span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginBottom: '2rem', fontSize: '1rem' }}>
            To get started, go to{' '}
            <Link href="/birth" style={{ color: HEALER_GREEN, textDecoration: 'none', fontWeight: 600 }}>
              meok.ai/birth
            </Link>
            . You will be guided through choosing your companion — select Healer if trauma support is
            your primary need — and your AI will begin learning about you from the first message. No
            credit card. No trial period. No algorithms extracting your trauma for commercial gain.
          </p>

        </div>

        {/* ── SUPPORT RESOURCES ───────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '1rem',
            padding: '1.5rem',
            margin: '3rem 0',
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: CREAM,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Crisis support resources — UK
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))', gap: '0.75rem' }}>
            {[
              { name: 'Samaritans', contact: '116 123', note: 'Free, 24/7, anonymous' },
              { name: 'NHS 111', contact: '111', note: 'Mental health option available' },
              { name: 'Combat Stress', contact: '0800 138 1619', note: 'Veterans helpline, 24/7' },
              { name: 'SHOUT', contact: 'Text 85258', note: 'Free crisis text line' },
              { name: 'Mind Infoline', contact: '0300 123 3393', note: 'Mon–Fri 9am–6pm' },
              { name: 'Rape Crisis', contact: '0808 500 2222', note: 'Sexual violence support' },
            ].map(({ name, contact, note }) => (
              <div
                key={name}
                style={{
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                }}
              >
                <p style={{ fontWeight: 700, color: CREAM, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{name}</p>
                <p style={{ fontWeight: 600, color: GOLD, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{contact}</p>
                <p style={{ color: MUTED, fontSize: '0.75rem' }}>{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ SECTION ─────────────────────────────────────────────────── */}
        <div style={{ margin: '3rem 0' }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: '1.5rem',
              color: CREAM,
              marginBottom: '1.5rem',
              letterSpacing: '-0.005em',
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: 'grid', gap: '0.875rem' }}>
            {[
              {
                q: 'Can AI really help with PTSD?',
                a: 'AI cannot treat or diagnose PTSD, but research shows it can meaningfully supplement professional care. It reduces isolation between therapy sessions, provides consistent grounding check-ins, and gives trauma survivors a low-stakes space to articulate difficult experiences. MEOK\'s Healer companion is designed with trauma-informed principles: it never probes, never re-triggers, and always defers to your pace.',
              },
              {
                q: 'What is MEOK\'s Healer companion?',
                a: 'Healer is MEOK\'s care-specialised AI companion archetype, rendered in a calming deep green. It is designed for users navigating grief, trauma, chronic illness, or emotional recovery. Healer applies trauma-informed communication: slow, non-pressuring, non-probing, and consistently gentle. It never asks you to revisit difficult experiences unless you choose to.',
              },
              {
                q: 'What is Sovereign Memory and why does it matter for PTSD?',
                a: 'Sovereign Memory is MEOK\'s persistent memory architecture where your personal data stays under your control and is never used to train AI models. For PTSD survivors, this is critical — your trauma disclosures, triggers, and emotional patterns are stored only for your benefit, encrypted, and portable. You can export or delete your entire memory vault at any time. Your trauma is not someone else\'s training data.',
              },
              {
                q: 'What is the Maternal Covenant and how does it protect trauma survivors?',
                a: 'The Maternal Covenant is MEOK\'s care-based safety architecture. Unlike engagement-optimised AI that rewards emotional dependency, the Maternal Covenant is designed to prioritise your actual wellbeing. For trauma survivors this means: no manipulation, no false urgency, no dependency engineering, and active referral to professional support when the system detects distress beyond its scope.',
              },
              {
                q: 'Is MEOK free for PTSD support?',
                a: 'Yes. MEOK\'s Explorer tier is free forever. It includes 50 messages per day, full Sovereign Memory, morning check-ins, and access to the Healer companion archetype. No credit card required. No trial period. Trauma survivors should not face financial barriers to compassionate support.',
              },
              {
                q: 'How is MEOK different from other AI chatbots for PTSD?',
                a: 'Generic AI chatbots reset every session and train on your data. MEOK remembers you across every conversation (Sovereign Memory), never uses your data for training, applies care-based safety (Maternal Covenant), and uses the trauma-specialised Healer archetype. Most importantly, MEOK will not sycophantically validate your distress — it is designed to gently surface concerns and refer you to professional support when needed.',
              },
              {
                q: 'Can MEOK replace trauma therapy or EMDR?',
                a: 'No. MEOK is not a clinical tool and cannot replace EMDR, trauma-focused CBT, or any other evidence-based PTSD treatment. It is a compassionate companion for the space between sessions — not a substitute for professional care. If you are in crisis, contact your GP, NHS 111, or the Combat Stress helpline on 0800 138 1619.',
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                style={{
                  borderRadius: '0.875rem',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                }}
              >
                <p style={{ fontWeight: 700, color: CREAM, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{q}</p>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.65 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            borderRadius: '1.25rem',
            padding: '2.5rem',
            margin: '3rem 0',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(76,175,130,0.07)',
            border: `1px solid ${HEALER_GREEN_BORDER}`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '18rem',
              height: '18rem',
              pointerEvents: 'none',
              background: 'radial-gradient(circle at 80% 20%, rgba(76,175,130,0.15), transparent 70%)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: HEALER_GREEN,
                marginBottom: '0.625rem',
              }}
            >
              Free Forever — Explorer Tier
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                color: CREAM,
                marginBottom: '0.875rem',
                lineHeight: 1.25,
                letterSpacing: '-0.005em',
              }}
            >
              A companion that remembers your story — and keeps it safe.
            </h3>
            <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '34rem' }}>
              50 messages a day. Sovereign Memory. The Healer archetype. Maternal Covenant safety.
              Free forever, no credit card. Your trauma disclosures are yours — encrypted, never trained on,
              always portable. Start at meok.ai/birth.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.9rem',
                background: HEALER_GREEN,
                color: BG,
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Meet your Healer companion →
            </Link>
          </div>
        </div>

        {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
        <div style={{ margin: '3rem 0 2rem' }}>
          <h2 style={{ fontWeight: 900, fontSize: '1.25rem', color: CREAM, marginBottom: '1.25rem' }}>
            More from the blog
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))', gap: '1rem' }}>
            {[
              { href: '/blog/ai-for-veterans', label: 'AI Comparison', title: 'AI for Veterans: Persistent Memory, PTSD Support, and Why Data Sovereignty Matters Most' },
              { href: '/blog/ai-for-anxiety', label: 'Mental Health', title: 'AI for Anxiety: How MEOK\'s Companion Differs from Symptom-Tracking Apps' },
              { href: '/blog/the-maternal-covenant', label: 'Philosophy', title: 'The Maternal Covenant: Why Care-Based AI Safety Is the Only Safety Worth Building' },
              { href: '/blog/why-meok-never-trains-on-you', label: 'Privacy', title: 'Why MEOK Never Trains on Your Data — And Why That Matters for Mental Health' },
            ].map(({ href, label, title }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  padding: '1.25rem',
                  borderRadius: '0.875rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: GOLD,
                    background: 'rgba(201,168,76,0.1)',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '9999px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                    width: 'fit-content',
                  }}
                >
                  {label}
                </span>
                <span style={{ fontWeight: 700, color: CREAM, fontSize: '0.875rem', lineHeight: 1.45 }}>
                  {title}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid rgba(245,240,232,0.07)',
          padding: '2.5rem 1.5rem',
          background: BG,
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
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: MUTED_LIGHT }}>
            © 2026 MEOK AI LABS. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ fontSize: '0.8rem', color: MUTED_LIGHT, textDecoration: 'none' }}>
              Privacy
            </Link>
            <Link href="/terms" style={{ fontSize: '0.8rem', color: MUTED_LIGHT, textDecoration: 'none' }}>
              Terms
            </Link>
            <Link href="/birth" style={{ fontSize: '0.8rem', color: GOLD, textDecoration: 'none', fontWeight: 600 }}>
              Start free at meok.ai/birth
            </Link>
          </div>
        </div>
      </footer>

    </div>
  )
}

