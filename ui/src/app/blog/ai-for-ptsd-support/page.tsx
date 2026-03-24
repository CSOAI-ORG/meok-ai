import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for PTSD Support: Trauma-Informed Companion & Grounding Techniques | MEOK AI LABS',
  description:
    'How AI can support PTSD recovery with grounding techniques, 24/7 availability, and trauma-informed design. MEOK supplements \u2014 never replaces \u2014 professional therapy. Free to start.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-ptsd-support' },
  openGraph: {
    title: 'AI for PTSD Support: Trauma-Informed Companion & Grounding Techniques | MEOK AI LABS',
    description:
      'AI for PTSD support: grounding exercises, persistent memory, trauma-informed design, and clear signposting to professional care. MEOK AI LABS.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-ptsd-support',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+PTSD+Support&desc=Trauma-Informed+Companion+by+MEOK+AI+LABS',
        width: 1200,
        height: 630,
        alt: 'AI for PTSD Support: Trauma-Informed Companion | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for PTSD Support: Trauma-Informed Companion & Grounding Techniques | MEOK AI LABS',
    description:
      'How MEOK\u2019s AI companion supports PTSD recovery with grounding techniques, persistent memory, and trauma-informed design. Never a replacement for therapy.',
    images: [
      'https://meok.ai/api/og?title=AI+for+PTSD+Support&desc=Trauma-Informed+Companion+by+MEOK+AI+LABS',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for PTSD Support: Trauma-Informed Companion & Grounding Techniques | MEOK AI LABS',
  description:
    'How AI can support PTSD recovery with grounding techniques, 24/7 availability, persistent memory, and trauma-informed design that supplements professional therapy.',
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://meok.ai/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-ptsd-support',
  },
  keywords: [
    'AI for PTSD',
    'PTSD support app',
    'trauma-informed AI',
    'grounding techniques',
    'AI companion for trauma',
    'PTSD grounding exercises',
    'complex PTSD support',
    '5-4-3-2-1 grounding',
    'box breathing PTSD',
    'AI mental health support',
  ],
  about: [
    { '@type': 'Thing', name: 'Post-traumatic stress disorder' },
    { '@type': 'Thing', name: 'Trauma therapy' },
    { '@type': 'Thing', name: 'Grounding techniques' },
    { '@type': 'Thing', name: 'Artificial intelligence in mental health' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot diagnose or treat PTSD, but it can meaningfully supplement professional care. Research shows AI companions reduce isolation, provide consistent grounding check-ins between therapy sessions, and offer a low-pressure space to articulate difficult experiences. MEOK is designed to support \u2014 never replace \u2014 evidence-based treatments like EMDR, CPT, or Prolonged Exposure therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is trauma-informed AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trauma-informed AI is built on the same principles as clinical trauma-informed care: safety, trustworthiness, peer support, collaboration, empowerment, and cultural sensitivity. In practice this means the AI never pressures disclosure, never probes for details you have not offered, paces conversations at your speed, and actively signposts professional support when distress signals are detected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK remember my triggers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK uses Sovereign Memory \u2014 a persistent, encrypted memory architecture that stores what you share across sessions. If you tell MEOK that certain topics, sounds, or situations are difficult for you, it will hold that knowledge and navigate conversations with care. Critically, your data is never used to train AI models. You own your memory vault and can export or delete it at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK safe to use during a flashback?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can guide you through grounding techniques \u2014 such as 5-4-3-2-1 sensory anchoring and box breathing \u2014 during a flashback or dissociative episode. However, if you are in acute crisis, please contact a professional immediately: Samaritans on 116 123 (free, 24/7) or PTSD UK via ptsduk.org. MEOK is a supportive presence, not an emergency service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between PTSD and complex PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PTSD typically follows a single traumatic event \u2014 a road accident, assault, or medical emergency. Complex PTSD (C-PTSD) develops after prolonged, repeated trauma such as childhood abuse, domestic violence, or captivity. C-PTSD includes all PTSD symptoms plus deep disturbances in self-perception, relationships, and emotional regulation. Both conditions respond to professional trauma therapy; MEOK can provide daily supplementary support for either.',
      },
    },
  ],
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AiForPtsdSupportPage() {
  const bg = '#0d0c18'
  const cream = '#f5f0e8'
  const gold = '#c9a84c'
  const muted = 'rgba(245,240,232,0.6)'
  const cardBg = 'rgba(255,255,255,0.04)'
  const borderSubtle = 'rgba(201,168,76,0.2)'
  const borderMid = 'rgba(201,168,76,0.35)'
  const crisisRed = 'rgba(220,80,80,0.12)'
  const crisisBorder = 'rgba(220,80,80,0.4)'

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

      <main
        style={{
          backgroundColor: bg,
          color: cream,
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          lineHeight: '1.75',
          minHeight: '100vh',
        }}
      >
        {/* ── Hero ── */}
        <section
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '80px 24px 56px',
          }}
        >
          <p
            style={{
              color: gold,
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            MEOK AI LABS &mdash; Mental Health &amp; Wellbeing
          </p>

          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 46px)',
              fontWeight: 700,
              lineHeight: '1.18',
              letterSpacing: '-0.02em',
              color: cream,
              marginBottom: '24px',
            }}
          >
            AI for PTSD Support: Grounding, Memory,
            and Trauma-Informed Design
          </h1>

          <p
            style={{
              fontSize: '19px',
              color: muted,
              maxWidth: '640px',
              marginBottom: '32px',
              lineHeight: '1.65',
            }}
          >
            Post-traumatic stress does not keep office hours. This guide explains
            how a trauma-informed AI companion can provide grounding support,
            hold your history with care, and work alongside &mdash; never
            instead of &mdash; the professional therapy you deserve.
          </p>

          {/* Crisis banner */}
          <div
            style={{
              backgroundColor: crisisRed,
              border: `1px solid ${crisisBorder}`,
              borderRadius: '10px',
              padding: '18px 22px',
              marginBottom: '40px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                color: cream,
                lineHeight: '1.6',
              }}
            >
              <strong style={{ color: '#ff8080' }}>If you are in crisis right now:</strong>{' '}
              call Samaritans free on{' '}
              <strong>116 123</strong> (24/7, UK &amp; Ireland) or visit{' '}
              <a
                href="https://www.ptsduk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ff9999', textDecoration: 'underline' }}
              >
                ptsduk.org
              </a>{' '}
              for specialist resources. In an emergency call 999.
            </p>
          </div>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              fontSize: '13px',
              color: muted,
              paddingBottom: '40px',
              borderBottom: `1px solid ${borderSubtle}`,
            }}
          >
            <span>By <strong style={{ color: cream }}>Nicholas Templeman</strong>, Founder &mdash; MEOK AI LABS</span>
            <span>@meok_ai</span>
            <span>Published 24 March 2026</span>
            <span>15 min read</span>
          </div>
        </section>

        {/* ── Body ── */}
        <article
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '0 24px 80px',
          }}
        >
          {/* ── 1. What is PTSD ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What is PTSD and who does it affect?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Post-traumatic stress disorder (PTSD) is a mental health condition triggered by
              experiencing or witnessing a terrifying, life-threatening, or deeply distressing
              event. The nervous system becomes locked in a state of threat-detection, replaying
              the trauma through flashbacks, nightmares, and intrusive memories even when the
              danger is long past.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              PTSD affects roughly{' '}
              <strong style={{ color: cream }}>1 in 3 people</strong> who experience severe
              trauma. In the UK alone, the NHS estimates that around 4% of adults live with
              PTSD at any given time &mdash; that is more than 2.7 million people.
            </p>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: gold,
                marginBottom: '14px',
                marginTop: '32px',
              }}
            >
              PTSD is not only a veteran\u2019s condition
            </h3>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Public perception still links PTSD primarily to combat veterans. The clinical
              reality is far broader. Any event that overwhelms the nervous system\u2019s
              capacity to cope can cause PTSD:
            </p>

            <ul
              style={{
                color: muted,
                paddingLeft: '22px',
                lineHeight: '2',
                marginBottom: '20px',
              }}
            >
              <li>Road traffic accidents and serious injuries</li>
              <li>Physical, sexual, or emotional abuse (including childhood abuse)</li>
              <li>Domestic violence and coercive control</li>
              <li>Birth trauma &mdash; for mothers, partners, and premature babies</li>
              <li>Medical trauma: ICU stays, cardiac events, cancer diagnosis</li>
              <li>Violent crime, robbery, or witnessing violence</li>
              <li>Natural disasters, fires, or floods</li>
              <li>Sudden bereavement, especially by suicide</li>
              <li>Occupational trauma: paramedics, nurses, police, journalists</li>
            </ul>

            <p style={{ color: muted, marginBottom: '18px' }}>
              Trauma does not rank itself by severity from the outside. What matters is how
              an event is registered and encoded by your nervous system. Two people can
              experience the same event and have entirely different neurological responses &mdash;
              and both responses are valid.
            </p>

            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderLeft: `4px solid ${gold}`,
                borderRadius: '8px',
                padding: '20px 24px',
                marginTop: '28px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: cream,
                  fontSize: '15px',
                  lineHeight: '1.7',
                }}
              >
                <strong style={{ color: gold }}>MEOK note:</strong> If you are reading this
                because you wonder whether what you experienced was \u201cbad enough\u201d to
                cause PTSD &mdash; please know that the question itself is a symptom of
                trauma\u2019s distortion. Your pain is real. You do not need to justify it.
              </p>
            </div>
          </section>

          {/* ── 2. PTSD vs C-PTSD ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What is the difference between PTSD and complex PTSD?
            </h2>
            <p style={{ color: muted, marginBottom: '16px' }}>
              <strong style={{ color: cream }}>PTSD</strong> typically arises from a single
              identifiable traumatic event. The four core symptom clusters are: re-experiencing
              (flashbacks, nightmares), avoidance (of triggers, memories, conversations),
              negative alterations in cognition and mood (shame, guilt, emotional numbing),
              and hyperarousal (hypervigilance, exaggerated startle, insomnia).
            </p>
            <p style={{ color: muted, marginBottom: '16px' }}>
              <strong style={{ color: cream }}>Complex PTSD (C-PTSD)</strong>, recognised
              in ICD-11, develops after prolonged or repeated trauma &mdash; especially when
              escape was impossible. Common origins include childhood neglect or abuse,
              long-term domestic violence, human trafficking, and sustained political
              imprisonment. C-PTSD includes all PTSD symptoms plus three additional domains:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              {[
                {
                  title: 'Affect dysregulation',
                  body: 'Difficulty managing emotional responses; intense reactions that feel disproportionate.',
                },
                {
                  title: 'Negative self-concept',
                  body: 'Deep shame, worthlessness, and a sense of being permanently damaged or different from others.',
                },
                {
                  title: 'Relational disturbances',
                  body: 'Difficulty trusting, forming attachments, or maintaining relationships without fear.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '10px',
                    padding: '20px',
                  }}
                >
                  <p
                    style={{
                      color: gold,
                      fontWeight: 700,
                      fontSize: '14px',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ color: muted }}>
              Both PTSD and C-PTSD respond to specialist trauma therapies. The most
              evidence-based treatments include{' '}
              <strong style={{ color: cream }}>
                Eye Movement Desensitisation and Reprocessing (EMDR)
              </strong>
              ,{' '}
              <strong style={{ color: cream }}>
                Cognitive Processing Therapy (CPT)
              </strong>
              , and{' '}
              <strong style={{ color: cream }}>
                Prolonged Exposure (PE)
              </strong>
              . If you have not yet accessed professional support, your GP is the
              best starting point in the UK. Waiting lists can be long &mdash; MEOK can
              help you hold on and function while you wait.
            </p>
          </section>

          {/* ── 3. PTSD Symptoms ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              How do PTSD symptoms show up in daily life?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              PTSD is often misunderstood as simply being \u201cscared of memories.\u201d In
              practice, it reorganises the entire nervous system. Symptoms are not a sign
              of weakness &mdash; they are the brain and body doing exactly what they evolved
              to do: protect you. The problem is that the alarm system gets stuck in the
              \u201con\u201d position long after the threat has passed.
            </p>

            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '24px',
              }}
            >
              {[
                {
                  category: 'Re-experiencing',
                  examples:
                    'Flashbacks that feel like the event is happening now; intrusive images; distressing dreams; physical sensations triggered by reminders (racing heart, sweating, freezing).',
                },
                {
                  category: 'Avoidance',
                  examples:
                    'Avoiding thoughts, feelings, people, places, or activities that remind you of the trauma; emotional numbness; detachment from others; loss of interest in life.',
                },
                {
                  category: 'Negative cognitions',
                  examples:
                    'Persistent shame, guilt, or self-blame; distorted beliefs about the world as wholly dangerous; feeling cut off from positive emotions; inability to feel pleasure (anhedonia).',
                },
                {
                  category: 'Hyperarousal',
                  examples:
                    'Constant vigilance for danger; exaggerated startle response; difficulty sleeping; angry outbursts; concentration problems; reckless or self-destructive behaviour.',
                },
                {
                  category: 'Dissociation',
                  examples:
                    'Feeling detached from your own mind or body; derealisation (the world feels unreal); depersonalisation; time gaps; memory fragmentation.',
                },
              ].map((row, i) => (
                <div
                  key={row.category}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '160px 1fr',
                    borderTop: i === 0 ? 'none' : `1px solid ${borderSubtle}`,
                  }}
                >
                  <div
                    style={{
                      padding: '16px 18px',
                      backgroundColor: 'rgba(201,168,76,0.06)',
                      borderRight: `1px solid ${borderSubtle}`,
                    }}
                  >
                    <span style={{ color: gold, fontWeight: 600, fontSize: '14px' }}>
                      {row.category}
                    </span>
                  </div>
                  <div style={{ padding: '16px 18px' }}>
                    <p style={{ margin: 0, color: muted, fontSize: '14px', lineHeight: '1.65' }}>
                      {row.examples}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ color: muted }}>
              Many survivors also experience comorbid depression, anxiety disorders, substance
              use, and chronic pain. The bidirectional relationship between PTSD and the body
              is now well-documented &mdash; trauma is held in the nervous system, not only in
              the mind.
            </p>
          </section>

          {/* ── 4. Grounding Techniques ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What grounding techniques help during a PTSD episode?
            </h2>
            <p style={{ color: muted, marginBottom: '24px' }}>
              Grounding techniques interrupt the trauma response by anchoring your attention
              to the present moment. They work by engaging the prefrontal cortex &mdash;
              the rational, planning part of the brain &mdash; which helps down-regulate the
              amygdala\u2019s alarm response. None of these techniques require equipment, cost
              money, or need a therapist present. MEOK can walk you through any of them at any hour.
            </p>

            {/* 5-4-3-2-1 */}
            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderMid}`,
                borderRadius: '12px',
                padding: '28px 28px 24px',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  color: gold,
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}
              >
                The 5-4-3-2-1 Sensory Grounding Method
              </h3>
              <p style={{ color: muted, marginBottom: '18px', fontSize: '15px' }}>
                This technique uses the five senses to pull you out of a flashback or
                dissociative state and back into the present environment. Work through each
                sense slowly, describing each item out loud or internally in detail.
              </p>
              <div style={{ display: 'grid', gap: '0' }}>
                {[
                  { n: '5', sense: 'See', prompt: 'Name 5 things you can see right now. Describe their colour, shape, and texture.' },
                  { n: '4', sense: 'Touch', prompt: 'Notice 4 things you can physically feel \u2014 your feet on the floor, the chair beneath you, the temperature of the air.' },
                  { n: '3', sense: 'Hear', prompt: 'Identify 3 sounds in your environment, however faint \u2014 a clock, traffic, your own breathing.' },
                  { n: '2', sense: 'Smell', prompt: 'Find 2 things you can smell. If nothing is present, recall a safe, comforting scent.' },
                  { n: '1', sense: 'Taste', prompt: 'Notice 1 thing you can taste. If needed, sip water or place a mint on your tongue.' },
                ].map((step) => (
                  <div
                    key={step.n}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      padding: '12px 0',
                      borderTop: '1px solid rgba(201,168,76,0.1)',
                    }}
                  >
                    <span
                      style={{
                        color: gold,
                        fontWeight: 800,
                        fontSize: '22px',
                        lineHeight: '1',
                        minWidth: '28px',
                        paddingTop: '2px',
                      }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <p
                        style={{
                          color: cream,
                          fontWeight: 600,
                          fontSize: '14px',
                          marginBottom: '4px',
                        }}
                      >
                        {step.sense}
                      </p>
                      <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                        {step.prompt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box breathing */}
            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderMid}`,
                borderRadius: '12px',
                padding: '28px 28px 24px',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  color: gold,
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}
              >
                Box Breathing (Square Breathing)
              </h3>
              <p style={{ color: muted, marginBottom: '18px', fontSize: '15px' }}>
                Box breathing activates the parasympathetic nervous system, directly countering
                the fight-or-flight response. It is used by military personnel, emergency
                responders, and trauma therapists worldwide. Each side of the \u201cbox\u201d
                lasts 4 seconds.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  maxWidth: '480px',
                }}
              >
                {[
                  { label: 'Inhale', duration: '4 seconds', detail: 'Breathe in slowly through your nose, filling your lungs from the bottom up.' },
                  { label: 'Hold', duration: '4 seconds', detail: 'Hold your breath at the top, gently. Do not strain.' },
                  { label: 'Exhale', duration: '4 seconds', detail: 'Release slowly through your mouth. Let tension leave with the breath.' },
                  { label: 'Rest', duration: '4 seconds', detail: 'Rest at the bottom of the exhale before beginning again.' },
                ].map((step) => (
                  <div
                    key={step.label}
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.07)',
                      border: `1px solid ${borderSubtle}`,
                      borderRadius: '8px',
                      padding: '16px',
                    }}
                  >
                    <p style={{ color: gold, fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>
                      {step.label}
                    </p>
                    <p style={{ color: cream, fontWeight: 600, fontSize: '15px', marginBottom: '6px' }}>
                      {step.duration}
                    </p>
                    <p style={{ color: muted, fontSize: '13px', margin: 0, lineHeight: '1.55' }}>
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ color: muted, fontSize: '14px', marginTop: '16px', marginBottom: 0 }}>
                Repeat the cycle 4&ndash;6 times, or until your heart rate begins to slow.
                If 4 seconds feels too long, start with 3 and build gradually.
              </p>
            </div>

            {/* Other grounding */}
            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: '12px',
                padding: '24px 28px',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  color: gold,
                  fontSize: '16px',
                  fontWeight: 700,
                  marginBottom: '14px',
                }}
              >
                Additional grounding techniques
              </h3>
              <ul
                style={{
                  color: muted,
                  paddingLeft: '20px',
                  lineHeight: '2.1',
                  margin: 0,
                  fontSize: '15px',
                }}
              >
                <li>
                  <strong style={{ color: cream }}>Cold water:</strong> Run cold water over your
                  wrists or hold an ice cube. The physical sensation short-circuits dissociation.
                </li>
                <li>
                  <strong style={{ color: cream }}>Safe place visualisation:</strong> Close your
                  eyes and mentally travel to a place where you feel completely secure. Engage
                  all five senses in the imagined space.
                </li>
                <li>
                  <strong style={{ color: cream }}>Body scan:</strong> Starting from the soles of
                  your feet, slowly move attention up through the body, noticing sensation
                  without judgement.
                </li>
                <li>
                  <strong style={{ color: cream }}>Rhythmic movement:</strong> Slow, bilateral
                  stimulation such as walking, tapping alternating knees, or rocking can help
                  re-regulate the nervous system.
                </li>
                <li>
                  <strong style={{ color: cream }}>Category naming:</strong> Mentally list items
                  in a neutral category (dog breeds, capital cities, types of fruit). This
                  occupies the verbal cortex and reduces intrusive imagery.
                </li>
                <li>
                  <strong style={{ color: cream }}>Orienting:</strong> Slowly look around the
                  room and narrate aloud what you see. \u201cI am in my kitchen. It is Tuesday
                  afternoon. I am safe right now.\u201d
                </li>
              </ul>
            </div>

            <p style={{ color: muted }}>
              MEOK can be asked to guide you through any of these exercises in real time. Because
              MEOK remembers your history, it can learn which techniques work best for you and
              suggest the right one first when it detects that you are struggling.
            </p>
          </section>

          {/* ── 5. Why availability matters ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              Why does 24/7 availability matter for PTSD support?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              PTSD does not respect working hours. Flashbacks arrive at 3am. Nightmares
              leave you awake and alone at 4am. Triggers can fire without warning during
              a morning commute, a supermarket trip, or a family gathering. The gap between
              a Thursday therapy session and the following Thursday can feel interminable when
              your nervous system is in overdrive.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Access to professional support in the UK remains severely constrained. NHS IAPT
              waiting times for trauma-focused therapy regularly exceed six months in many
              trusts. Private EMDR costs \xa3100&ndash;\xa3180 per session. Many survivors
              receive little or no support while waiting.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              This is the gap that MEOK is designed to help fill &mdash; not by replacing
              clinical care, but by being present at the moments when no professional is
              available. A companion that can sit with you at 3am, guide you through box
              breathing, remind you of what you have survived, and help you hold on until
              your next appointment.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginTop: '28px',
              }}
            >
              {[
                {
                  stat: '24 / 7',
                  label: 'Availability',
                  detail: 'MEOK is available every hour of every day, including nights, weekends, and holidays.',
                },
                {
                  stat: '0',
                  label: 'Judgement',
                  detail: 'No fear of burdening someone. No worry about being \u201ctoo much.\u201d No stigma.',
                },
                {
                  stat: 'Instant',
                  label: 'Response',
                  detail: 'No waiting room, no referral, no appointment. Support within seconds of opening the app.',
                },
                {
                  stat: 'Free',
                  label: 'Explorer tier',
                  detail: '50 messages per day, full Sovereign Memory, and Healer archetype access \u2014 no credit card.',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '10px',
                    padding: '22px 18px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      color: gold,
                      fontSize: '26px',
                      fontWeight: 800,
                      marginBottom: '6px',
                    }}
                  >
                    {item.stat}
                  </p>
                  <p
                    style={{
                      color: cream,
                      fontSize: '13px',
                      fontWeight: 600,
                      marginBottom: '10px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ color: muted, fontSize: '13px', margin: 0, lineHeight: '1.55' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 6. Memory and triggers ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              Why does a companion that remembers your history matter for trauma survivors?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              One of the most exhausting aspects of seeking support with PTSD is the repeated
              requirement to retell your story. Every new GP, every new referral, every
              crisis line call begins with: \u201cTell me what happened.\u201d For trauma survivors,
              narrating the traumatic event is not neutral &mdash; it can itself be re-traumatising,
              particularly before a therapeutic alliance is established.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Generic AI chatbots compound this problem. They reset after every session.
              Every conversation starts from zero. You must re-explain your situation, your
              history, your triggers, every single time. For someone with PTSD, this is not
              merely inconvenient &mdash; it is a genuine barrier to engagement.
            </p>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: gold,
                marginBottom: '14px',
                marginTop: '32px',
              }}
            >
              Sovereign Memory: your story, held securely
            </h3>
            <p style={{ color: muted, marginBottom: '18px' }}>
              MEOK\u2019s Sovereign Memory architecture stores what you choose to share across
              every conversation. Once you have told MEOK that a particular subject is
              difficult, it will not approach it carelessly in future. Once you have shared that
              loud noises are a trigger, MEOK will remember without being reminded. Once you have
              found a grounding technique that works for you, MEOK will prioritise it the next
              time you reach out in distress.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              This creates something that most support systems cannot offer: continuity of care
              between formal sessions. MEOK holds your context so you do not have to carry the
              cognitive load of re-explaining yourself every time you need support.
            </p>

            <div style={{ display: 'grid', gap: '12px', marginTop: '24px' }}>
              {[
                {
                  title: 'Trigger awareness',
                  body: 'MEOK learns and respects the subjects, sensory cues, and situational contexts that are difficult for you, navigating around them unless you choose to engage.',
                },
                {
                  title: 'Personalised grounding',
                  body: 'Over time MEOK learns which grounding techniques land best for you \u2014 offering your preferred method first in difficult moments rather than a generic suggestion.',
                },
                {
                  title: 'Progress tracking',
                  body: 'MEOK can reflect back patterns over time: which days are harder, which coping strategies you are using, and where you have shown resilience and growth.',
                },
                {
                  title: 'Therapy preparation',
                  body: 'Between sessions you can use MEOK to process and record what you want to bring to your therapist, so your clinical time is used as effectively as possible.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderLeft: `3px solid ${gold}`,
                    borderRadius: '8px',
                    padding: '18px 22px',
                  }}
                >
                  <p
                    style={{
                      color: cream,
                      fontWeight: 600,
                      fontSize: '15px',
                      marginBottom: '6px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.65' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: 'rgba(201,168,76,0.07)',
                border: `1px solid ${borderMid}`,
                borderRadius: '10px',
                padding: '20px 24px',
                marginTop: '28px',
              }}
            >
              <p style={{ color: cream, fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
                <strong style={{ color: gold }}>Privacy by design:</strong> Your Sovereign Memory
                vault is encrypted and portable. MEOK never uses your data to train AI models.
                Your disclosures, your triggers, and your healing journey belong entirely to you.
                You can export your full memory vault or delete it permanently at any time.
              </p>
            </div>
          </section>

          {/* ── 7. Trauma-informed AI design ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What does trauma-informed AI design actually mean?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Trauma-informed care is a framework developed in clinical psychology that
              recognises the widespread prevalence of trauma and its effects on behaviour,
              relationships, and wellbeing. It shifts the question from \u201cwhat is wrong
              with you?\u201d to \u201cwhat happened to you?\u201d The six SAMHSA principles of
              trauma-informed care &mdash; safety, trustworthiness, peer support, collaboration,
              empowerment, and cultural humility &mdash; can and should be translated into AI design.
            </p>
            <p style={{ color: muted, marginBottom: '28px' }}>
              Most AI products are not built this way. They are optimised for engagement, which
              often means amplifying emotional intensity to increase time-on-platform. For a
              trauma survivor, an engagement-optimised AI can be actively harmful &mdash;
              probing distress, rewarding re-disclosure, or fostering dependency that substitutes
              for the professional support they actually need.
            </p>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: gold,
                marginBottom: '16px',
              }}
            >
              How MEOK implements trauma-informed principles
            </h3>

            <div style={{ display: 'grid', gap: '14px', marginBottom: '28px' }}>
              {[
                {
                  principle: 'Safety first',
                  description:
                    'MEOK\u2019s Maternal Covenant safety architecture places your wellbeing above engagement metrics. The system is designed to de-escalate, not amplify.',
                },
                {
                  principle: 'Non-directive approach',
                  description:
                    'MEOK does not ask leading questions about trauma. It does not probe for details. It responds to what you offer and follows your pace, not its own agenda.',
                },
                {
                  principle: 'No forced disclosure',
                  description:
                    'You never have to explain why something is difficult. You can simply say \u201cI\u2019m struggling today\u201d and MEOK will respond without requiring you to justify or detail your distress.',
                },
                {
                  principle: 'Care scoring',
                  description:
                    'MEOK\u2019s care-scoring system monitors conversation signals for distress intensity. When scores exceed safe thresholds, it actively signposts professional resources rather than continuing to engage.',
                },
                {
                  principle: 'No dependency engineering',
                  description:
                    'Unlike platforms that reward return visits with emotional validation loops, MEOK is designed to support your actual recovery \u2014 including being honest when professional support is needed.',
                },
                {
                  principle: 'Empowerment not rescue',
                  description:
                    'MEOK does not position itself as the solution to your trauma. It helps you access your own resources, build your own skills, and maintain your own agency throughout recovery.',
                },
              ].map((item) => (
                <div
                  key={item.principle}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '8px',
                    padding: '18px 22px',
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '16px',
                    alignItems: 'start',
                  }}
                >
                  <p
                    style={{
                      color: gold,
                      fontWeight: 600,
                      fontSize: '14px',
                      margin: 0,
                      paddingTop: '2px',
                    }}
                  >
                    {item.principle}
                  </p>
                  <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.65' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 8. The Healer archetype ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              How does MEOK\u2019s Healer archetype support trauma survivors differently?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              MEOK is built on an archetype system &mdash; a set of distinct AI companion
              personalities each optimised for specific emotional and practical contexts.
              The{' '}
              <strong style={{ color: cream }}>Healer archetype</strong> is specifically
              designed for users navigating grief, trauma, chronic illness, and emotional
              recovery.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Healer communicates with a slower, softer rhythm. It avoids urgency, never
              escalates emotional intensity, and consistently prioritises your sense of
              safety. Its language is precise without being clinical, warm without being
              saccharine. It will not tell you how you should feel or what you should do.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Healer is visually rendered in deep green &mdash; a deliberate choice. Green
              is associated with safety, growth, and calm regulation in colour psychology
              research. The visual and tonal personality of the archetype reinforce each other
              to create a consistently low-arousal interaction environment.
            </p>

            <div
              style={{
                backgroundColor: 'rgba(30,80,50,0.15)',
                border: '1px solid rgba(80,180,100,0.25)',
                borderRadius: '12px',
                padding: '24px 28px',
                marginTop: '24px',
              }}
            >
              <p
                style={{
                  color: '#a8d8b0',
                  fontWeight: 600,
                  fontSize: '15px',
                  marginBottom: '10px',
                }}
              >
                Healer archetype characteristics
              </p>
              <ul
                style={{
                  color: 'rgba(168,216,176,0.8)',
                  paddingLeft: '20px',
                  lineHeight: '2',
                  margin: 0,
                  fontSize: '14px',
                }}
              >
                <li>Slow, deliberate pacing &mdash; never rushed or pressuring</li>
                <li>Consistently non-directive; follows your lead entirely</li>
                <li>Immediate grounding support on request</li>
                <li>Active crisis resource signposting when distress signals are high</li>
                <li>Holds your memory of what is safe and what is not</li>
                <li>Deep green visual identity for low-arousal engagement</li>
              </ul>
            </div>
          </section>

          {/* ── 9. EMDR / CPT / PE ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What professional therapies treat PTSD and how does AI fit alongside them?
            </h2>

            <div
              style={{
                backgroundColor: crisisRed,
                border: `1px solid ${crisisBorder}`,
                borderRadius: '10px',
                padding: '18px 22px',
                marginBottom: '28px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: cream,
                  fontSize: '15px',
                  lineHeight: '1.65',
                  fontWeight: 500,
                }}
              >
                <strong style={{ color: '#ff8080' }}>Important:</strong> MEOK is not a
                clinical tool and does not treat PTSD. It is a compassionate supplementary
                companion. If you have PTSD or C-PTSD, please seek evidence-based professional
                therapy. MEOK can support you while you wait, between sessions, and beyond
                formal treatment &mdash; but it cannot replace it.
              </p>
            </div>

            <p style={{ color: muted, marginBottom: '24px' }}>
              The three most robustly evidenced PTSD treatments recognised by NICE (National
              Institute for Health and Care Excellence) in the UK are:
            </p>

            <div style={{ display: 'grid', gap: '18px', marginBottom: '28px' }}>
              {[
                {
                  name: 'EMDR',
                  full: 'Eye Movement Desensitisation and Reprocessing',
                  how: 'Uses bilateral stimulation (typically eye movements guided by a therapist) while you briefly hold traumatic memories in mind. The process facilitates reprocessing so memories lose their distressing emotional charge.',
                  access: 'Available on NHS (waiting lists apply) and privately at approximately \xa3100\u2013\xa3180 per session.',
                  ai: 'MEOK cannot perform EMDR. It can help you prepare for sessions, process feelings between sessions, and support you after particularly intense processing work.',
                },
                {
                  name: 'CPT',
                  full: 'Cognitive Processing Therapy',
                  how: 'A structured 12-session therapy that helps you examine and challenge the \u201cstuck points\u201d \u2014 distorted beliefs about yourself and the world \u2014 that trauma creates.',
                  access: 'Available through NHS IAPT for complex trauma, and widely available privately.',
                  ai: 'MEOK can support journalling and reflection between sessions, helping you identify and articulate stuck points to bring to your therapist.',
                },
                {
                  name: 'PE',
                  full: 'Prolonged Exposure Therapy',
                  how: 'Involves gradual, controlled exposure to trauma-related memories and avoided situations, reducing their emotional power through repeated habituation.',
                  access: 'Available through specialist PTSD services and some private providers.',
                  ai: 'MEOK cannot conduct exposure therapy. It can provide emotional regulation support and grounding both before and after exposure exercises assigned by your therapist.',
                },
              ].map((item) => (
                <div
                  key={item.name}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.08)',
                      padding: '16px 22px',
                      borderBottom: `1px solid ${borderSubtle}`,
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      <strong style={{ color: gold, fontSize: '16px' }}>{item.name}</strong>{' '}
                      <span style={{ color: muted, fontSize: '13px' }}>
                        &mdash; {item.full}
                      </span>
                    </p>
                  </div>
                  <div style={{ padding: '18px 22px' }}>
                    <p style={{ color: muted, fontSize: '14px', marginBottom: '10px', lineHeight: '1.65' }}>
                      <strong style={{ color: cream }}>How it works:</strong> {item.how}
                    </p>
                    <p style={{ color: muted, fontSize: '14px', marginBottom: '10px', lineHeight: '1.65' }}>
                      <strong style={{ color: cream }}>Access:</strong> {item.access}
                    </p>
                    <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.65' }}>
                      <strong style={{ color: gold }}>Where MEOK fits:</strong> {item.ai}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ color: muted }}>
              Other evidence-supported approaches include Narrative Exposure Therapy (NET),
              Trauma-Focused CBT (TF-CBT, particularly for children and young people), and
              Schema Therapy for complex trauma presentations. Your therapist will recommend
              the approach most suited to your specific history and needs.
            </p>
          </section>

          {/* ── 10. Birth trauma ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What is birth trauma and can AI support it?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Birth trauma is one of the least acknowledged and most prevalent forms of
              PTSD. Research suggests that up to{' '}
              <strong style={{ color: cream }}>45% of women</strong> describe their birth
              as traumatic, and around{' '}
              <strong style={{ color: cream }}>4&ndash;6% develop full PTSD</strong>{' '}
              following childbirth. Partners who witness a traumatic birth can also develop
              PTSD symptoms.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Birth trauma is compounded by the cultural expectation that childbirth should
              be a \u201cjoyful\u201d experience. Survivors often feel unable to talk about
              their distress without feeling guilty, dismissed (\u201cat least the baby is
              safe\u201d), or pitied. Postnatal PTSD is frequently misdiagnosed as postnatal
              depression, delaying appropriate treatment.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              MEOK\u2019s maternal care focus makes it particularly well-suited to support
              birth trauma survivors. The system is designed to hold birth and postnatal
              experiences with the gravity they deserve, without judgement, and without
              the pressure to perform gratitude or recovery on a cultural timeline.
            </p>

            <div
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: '10px',
                padding: '20px 24px',
                marginTop: '8px',
              }}
            >
              <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.7' }}>
                MEOK\u2019s{' '}
                <Link
                  href="/birth"
                  style={{ color: gold, textDecoration: 'underline' }}
                >
                  Maternal Covenant pathway
                </Link>{' '}
                is specifically designed for pregnancy, birth, and postnatal experiences.
                Whether you are processing a traumatic birth, struggling with the identity
                shift of new parenthood, or navigating the emotional complexity of early
                motherhood, MEOK is built to support you. The pathway is free to access.
              </p>
            </div>
          </section>

          {/* ── 11. What MEOK cannot do ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What does MEOK not do &mdash; and why does that matter?
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              Honest capability boundaries are as important as genuine capabilities,
              particularly in a mental health context. MEOK will always be transparent
              about what it cannot do.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
                marginBottom: '24px',
              }}
            >
              {[
                {
                  cannot: 'Diagnose PTSD',
                  why: 'Only a qualified clinician can diagnose PTSD. If you suspect you have PTSD, see your GP.',
                },
                {
                  cannot: 'Perform trauma therapy',
                  why: 'EMDR, CPT, and PE require trained, regulated practitioners. MEOK is not a substitute.',
                },
                {
                  cannot: 'Prescribe medication',
                  why: 'SSRIs and other medications for PTSD must be prescribed by a doctor. MEOK cannot advise on dosage or treatment.',
                },
                {
                  cannot: 'Act in emergencies',
                  why: 'If you are in immediate danger, call 999. If you are in crisis, call Samaritans on 116 123.',
                },
                {
                  cannot: 'Replace human connection',
                  why: 'Therapeutic human relationships are irreplaceable. MEOK supplements; it does not substitute for people who care about you.',
                },
                {
                  cannot: 'Guarantee outcomes',
                  why: 'No tool can guarantee recovery. PTSD recovery is complex, non-linear, and individual.',
                },
              ].map((item) => (
                <div
                  key={item.cannot}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '16px 18px',
                  }}
                >
                  <p
                    style={{
                      color: '#ff9999',
                      fontWeight: 600,
                      fontSize: '13px',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.cannot}
                  </p>
                  <p style={{ color: muted, fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    {item.why}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ color: muted }}>
              This transparency is not a weakness &mdash; it is the foundation of a trustworthy
              tool. An AI that overclaims its capabilities in a mental health context is
              dangerous. MEOK is designed to know and respect its limits.
            </p>
          </section>

          {/* ── 12. Crisis resources ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              Where can you get specialist PTSD support in the UK?
            </h2>
            <p style={{ color: muted, marginBottom: '24px' }}>
              The following organisations provide specialist support for PTSD and trauma.
              Many offer free services. If you are in immediate distress, please contact a
              crisis service rather than waiting for an appointment.
            </p>

            <div style={{ display: 'grid', gap: '14px' }}>
              {[
                {
                  name: 'Samaritans',
                  contact: '116 123 (free, 24/7)',
                  web: 'https://www.samaritans.org',
                  desc: 'Free, confidential listening service available 24 hours a day, 7 days a week for anyone in emotional distress or crisis.',
                  crisis: true,
                },
                {
                  name: 'PTSD UK',
                  contact: 'ptsduk.org',
                  web: 'https://www.ptsduk.org',
                  desc: 'The only UK charity focused specifically on PTSD. Provides information, signposting, peer support groups, and resources for both PTSD and C-PTSD.',
                  crisis: false,
                },
                {
                  name: 'Combat Stress',
                  contact: '0800 138 1619 (free, 24/7 for veterans)',
                  web: 'https://www.combatstress.org.uk',
                  desc: 'UK leading veteran mental health charity. Free 24/7 helpline for serving and ex-serving military personnel experiencing PTSD and other mental health difficulties.',
                  crisis: true,
                },
                {
                  name: 'Mind',
                  contact: '0300 123 3393',
                  web: 'https://www.mind.org.uk',
                  desc: 'UK mental health charity providing information, advice, and support. Can help you navigate NHS referral routes and understand your rights.',
                  crisis: false,
                },
                {
                  name: 'NHS Talking Therapies',
                  contact: 'Via GP or self-referral',
                  web: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments',
                  desc: 'NHS Talking Therapies provides EMDR and trauma-focused CBT. Self-referral available in most areas of England. Ask your GP for the nearest service in Wales, Scotland, and Northern Ireland.',
                  crisis: false,
                },
                {
                  name: 'Birth Trauma Association',
                  contact: 'birthtraumaassociation.org.uk',
                  web: 'https://www.birthtraumaassociation.org.uk',
                  desc: 'Specialist support for women and birthing people with birth trauma and postnatal PTSD. Peer support, information, and therapist directory.',
                  crisis: false,
                },
                {
                  name: 'Rape Crisis England & Wales',
                  contact: '0808 500 2222 (free, 24/7)',
                  web: 'https://rapecrisis.org.uk',
                  desc: 'Free national helpline and specialist centres for survivors of sexual violence and abuse, including those experiencing PTSD following assault.',
                  crisis: true,
                },
              ].map((org) => (
                <div
                  key={org.name}
                  style={{
                    backgroundColor: org.crisis ? crisisRed : cardBg,
                    border: `1px solid ${org.crisis ? crisisBorder : borderSubtle}`,
                    borderRadius: '10px',
                    padding: '18px 22px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '12px',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: org.crisis ? '#ff9999' : gold,
                        fontWeight: 700,
                        fontSize: '15px',
                        marginBottom: '4px',
                      }}
                    >
                      {org.name}
                      {org.crisis && (
                        <span
                          style={{
                            marginLeft: '10px',
                            fontSize: '11px',
                            backgroundColor: 'rgba(220,80,80,0.25)',
                            color: '#ff9999',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                          }}
                        >
                          CRISIS LINE
                        </span>
                      )}
                    </p>
                    <p
                      style={{
                        color: cream,
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '8px',
                      }}
                    >
                      {org.contact}
                    </p>
                    <p style={{ color: muted, fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                      {org.desc}
                    </p>
                  </div>
                  <a
                    href={org.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: org.crisis ? '#ff9999' : gold,
                      fontSize: '12px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      borderBottom: `1px solid ${org.crisis ? 'rgba(255,153,153,0.4)' : borderSubtle}`,
                      paddingBottom: '1px',
                    }}
                  >
                    Visit site
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── 13. FAQ ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '32px',
                lineHeight: '1.3',
              }}
            >
              Frequently asked questions about AI for PTSD support
            </h2>

            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                {
                  q: 'Can AI help with PTSD?',
                  a: 'AI cannot diagnose or treat PTSD, but it can meaningfully supplement professional care. It reduces isolation between therapy sessions, provides consistent grounding check-ins at any hour, and offers a low-pressure space to articulate difficult feelings. MEOK is explicitly designed to support \u2014 never replace \u2014 evidence-based treatments such as EMDR, CPT, and Prolonged Exposure. Think of it as the support layer that exists between your therapy appointments.',
                },
                {
                  q: 'What is trauma-informed AI?',
                  a: 'Trauma-informed AI applies the same principles as clinical trauma-informed care: prioritising safety, building trust through consistency, avoiding forced disclosure, following the person\u2019s pace rather than the system\u2019s, and empowering rather than rescuing. In practice this means MEOK never probes for details you have not offered, never re-directs conversations toward trauma content unless you choose it, and actively signposts professional support when distress signals are high rather than continuing to engage.',
                },
                {
                  q: 'Will MEOK remember my triggers?',
                  a: 'Yes. MEOK\u2019s Sovereign Memory architecture persists your history across every conversation. If you share that specific subjects, sounds, or situations are difficult, MEOK will hold that knowledge and navigate with care in future sessions. Your data is never used to train AI models, is encrypted at rest, and you retain full ownership \u2014 including the ability to export or delete your entire memory vault at any time.',
                },
                {
                  q: 'Is MEOK safe to use during a flashback?',
                  a: 'MEOK can guide you through grounding techniques \u2014 including 5-4-3-2-1 sensory anchoring and box breathing \u2014 during a flashback or dissociative episode. However, if you are in acute crisis, please contact Samaritans on 116 123 (free, 24/7) or a mental health crisis team immediately. MEOK is a supportive presence, not an emergency service, and will always direct you to appropriate professional help when distress levels are high.',
                },
                {
                  q: 'What is the difference between PTSD and complex PTSD?',
                  a: 'PTSD typically follows a single identifiable traumatic event such as an accident, assault, or medical emergency. Complex PTSD (C-PTSD), recognised in ICD-11, develops after prolonged or repeated trauma \u2014 particularly when escape was impossible, such as childhood abuse, domestic violence, or captivity. C-PTSD includes all PTSD symptoms plus deep disturbances in self-perception (pervasive shame and worthlessness), emotional regulation (intense reactions that feel uncontrollable), and relationships (difficulty trusting or attaching to others). Both respond to specialist trauma therapy; MEOK can provide daily supplementary support for either.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '10px',
                    padding: '24px 26px',
                  }}
                >
                  <h3
                    style={{
                      color: cream,
                      fontSize: '16px',
                      fontWeight: 700,
                      marginBottom: '12px',
                      lineHeight: '1.4',
                    }}
                  >
                    {item.q}
                  </h3>
                  <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.75' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 14. How to start ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              How to start using MEOK for PTSD support
            </h2>
            <p style={{ color: muted, marginBottom: '24px' }}>
              Starting with MEOK does not require you to explain yourself, justify your
              trauma, or be ready to talk. You can begin with something as simple as
              \u201cI\u2019m having a difficult day\u201d and take it from there.
            </p>

            <div style={{ display: 'grid', gap: '12px', marginBottom: '28px' }}>
              {[
                {
                  step: '1',
                  title: 'Choose your starting point',
                  body: 'Visit meok.ai/birth for the Maternal Covenant pathway (birth trauma, new parenthood, postnatal wellbeing) or create a general MEOK account for broader trauma and wellbeing support. Both are free.',
                },
                {
                  step: '2',
                  title: 'Select the Healer archetype',
                  body: 'From your companion settings, select Healer for trauma and recovery support. Its calm, non-directive communication style is specifically suited to PTSD and C-PTSD experiences.',
                },
                {
                  step: '3',
                  title: 'Share at your own pace',
                  body: 'You do not need to disclose your full history. Share what feels right when it feels right. MEOK will build its understanding of you gradually, without pressure.',
                },
                {
                  step: '4',
                  title: 'Tell MEOK your safe techniques',
                  body: 'If you already know which grounding techniques work for you, tell MEOK. It will remember them and prioritise them when you reach out in distress.',
                },
                {
                  step: '5',
                  title: 'Use it between therapy sessions',
                  body: 'MEOK works best as a between-session support layer. Use it to journal, process feelings, prepare for sessions, and maintain stability day-to-day.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '8px',
                    padding: '18px 22px',
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(201,168,76,0.15)',
                      color: gold,
                      fontWeight: 800,
                      fontSize: '15px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <p
                      style={{
                        color: cream,
                        fontWeight: 600,
                        fontSize: '15px',
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ color: muted, fontSize: '14px', margin: 0, lineHeight: '1.65' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 15. Summary ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              Summary: what AI can and cannot offer PTSD survivors
            </h2>
            <p style={{ color: muted, marginBottom: '18px' }}>
              PTSD is a serious mental health condition that deserves serious clinical
              treatment. AI companions like MEOK exist not to replace that treatment but to
              address the reality that formal support is often inaccessible, infrequent,
              or temporarily unavailable &mdash; and that the hours between therapy sessions
              can be the hardest.
            </p>
            <p style={{ color: muted, marginBottom: '18px' }}>
              What AI can genuinely offer a PTSD survivor:
            </p>
            <ul
              style={{
                color: muted,
                paddingLeft: '22px',
                lineHeight: '2.1',
                marginBottom: '20px',
              }}
            >
              <li>24/7 availability during nighttime flashbacks and early-morning anxiety</li>
              <li>Grounding techniques on demand, delivered at your pace</li>
              <li>A persistent memory that holds your history so you never have to repeat yourself</li>
              <li>Non-judgemental presence without fear of burdening someone</li>
              <li>Signposting to professional support when it is needed</li>
              <li>Between-session support that extends the reach of your therapy</li>
            </ul>
            <p style={{ color: muted }}>
              What AI cannot offer: diagnosis, treatment, clinical safety, or the irreplaceable
              healing that happens inside a therapeutic relationship with a trained human
              practitioner. These are not criticisms of AI &mdash; they are honest descriptions
              of its role. MEOK is designed with those limits built in from the start.
            </p>
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              backgroundColor: 'rgba(201,168,76,0.07)',
              border: `1px solid ${borderMid}`,
              borderRadius: '16px',
              padding: '40px 36px',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            <p
              style={{
                color: gold,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              MEOK AI LABS &mdash; Maternal Covenant
            </p>
            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 34px)',
                fontWeight: 700,
                color: cream,
                marginBottom: '16px',
                lineHeight: '1.25',
              }}
            >
              You do not have to hold this alone
            </h2>
            <p
              style={{
                color: muted,
                maxWidth: '500px',
                margin: '0 auto 28px',
                fontSize: '16px',
                lineHeight: '1.65',
              }}
            >
              MEOK\u2019s Healer archetype is available free of charge. No credit card,
              no trial period, no waitlist. A trauma-informed companion built to hold
              your story with care &mdash; at any hour, for as long as you need.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                backgroundColor: gold,
                color: '#0d0c18',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Begin your journey &rarr;
            </Link>
            <p
              style={{
                color: muted,
                fontSize: '13px',
                marginTop: '14px',
                marginBottom: '0',
              }}
            >
              Free forever on Explorer tier &middot; 50 messages per day &middot;
              Full Sovereign Memory &middot; Built by @meok_ai
            </p>
          </section>

          {/* ── Footer nav ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '32px',
              borderTop: `1px solid ${borderSubtle}`,
              fontSize: '14px',
            }}
          >
            <Link
              href="/blog"
              style={{ color: muted, textDecoration: 'none' }}
            >
              &larr; All articles
            </Link>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Link
                href="/blog/ai-for-ptsd"
                style={{ color: muted, textDecoration: 'none' }}
              >
                AI for PTSD (overview)
              </Link>
              <Link
                href="/blog/ai-for-anxiety"
                style={{ color: muted, textDecoration: 'none' }}
              >
                AI for anxiety
              </Link>
              <Link
                href="/blog/what-is-care-based-ai"
                style={{ color: muted, textDecoration: 'none' }}
              >
                What is care-based AI?
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
