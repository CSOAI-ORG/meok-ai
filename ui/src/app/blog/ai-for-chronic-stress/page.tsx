import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Chronic Stress: When Deep Breathing Isn\'t Enough | MEOK AI LABS',
  description:
    'AI for stress management has moved beyond guided breathing. Discover how sovereign AI with persistent memory tracks your chronic stress patterns, spots your worst weeks before you do, and offers anti-sycophantic support that distinguishes what\'s changeable from what needs acceptance.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-chronic-stress' },
  keywords: [
    'AI for stress management',
    'AI for chronic stress',
    'AI stress relief',
    'AI to reduce anxiety and stress',
    'sovereign AI mental health',
    'AI companion UK',
    'MEOK AI',
  ],
  openGraph: {
    title: 'AI for Chronic Stress: When Deep Breathing Isn\'t Enough',
    description:
      'Calm and Headspace work for acute stress. But chronic stress needs something that remembers your patterns, tracks your load over months, and tells you the truth. Here\'s how MEOK does it.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-chronic-stress',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Chronic+Stress%3A+When+Deep+Breathing+Isn%27t+Enough&desc=Sovereign+AI+that+tracks+your+stress+patterns+over+time.',
        width: 1200,
        height: 630,
        alt: 'AI for Chronic Stress: When Deep Breathing Isn\'t Enough | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Chronic Stress: When Deep Breathing Isn\'t Enough',
    description:
      '74% of UK adults have been overwhelmed by stress. Sovereign AI with persistent memory can spot your worst weeks before you do — and tell you what\'s actually changeable.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Chronic+Stress%3A+When+Deep+Breathing+Isn%27t+Enough&desc=Sovereign+AI+that+tracks+your+stress+patterns+over+time.',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Chronic Stress: When Deep Breathing Isn\'t Enough',
  description:
    'AI for stress management has moved beyond guided breathing. Sovereign AI with persistent memory tracks your chronic stress patterns, spots your worst weeks before you do, and offers anti-sycophantic support that distinguishes what\'s changeable from what needs acceptance.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
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
  image:
    'https://meok.ai/api/og?title=AI+for+Chronic+Stress%3A+When+Deep+Breathing+Isn%27t+Enough&desc=Sovereign+AI+that+tracks+your+stress+patterns+over+time.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-chronic-stress',
  },
  keywords:
    'AI for stress management, AI for chronic stress, AI stress relief, AI to reduce anxiety and stress',
  articleSection: 'Mental Health & Wellbeing',
  about: [
    { '@type': 'Thing', name: 'Chronic stress' },
    { '@type': 'Thing', name: 'Allostatic load' },
    { '@type': 'Thing', name: 'AI mental health support' },
    { '@type': 'Thing', name: 'Sovereign Memory' },
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI actually help with chronic stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but not in the way most people expect. Apps like Calm and Headspace are effective for acute stress — a moment of overwhelm, a bad afternoon. Chronic stress is different: it accumulates over weeks and months, it has specific triggers and patterns, and it requires pattern recognition over time. AI companions with persistent memory, like MEOK, can track your stress load across weeks, notice that you are consistently worse before the work week begins, or that your anxiety spiked in a particular month, and surface those patterns during your morning check-in. That continuity of observation is what distinguishes useful AI for stress management from a simple breathing timer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between acute stress and chronic stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acute stress is short-term and adaptive: your nervous system activates in response to a specific threat or demand, then returns to baseline once it passes. Chronic stress is the accumulation of repeated activations without sufficient recovery — what researchers call allostatic load. Over time, high allostatic load dysregulates cortisol rhythms, impairs immune function, disrupts sleep architecture, and remodels the prefrontal cortex in ways that reduce emotional regulation capacity. The danger of chronic stress is that it often does not feel dramatically bad — it feels like a grey, grinding baseline that you have simply accepted as normal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do mindfulness apps not work for chronic stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mindfulness apps are stateless: every session begins fresh, with no knowledge of your life, your week, or what happened last month. For acute stress, this is fine. For chronic stress, the problem is the accumulated pattern — the fact that you have been running at 80% capacity for nine months, that financial stress and relationship tension are compounding, that you haven\'t slept properly since February. A ten-minute breathing exercise does not address any of that, and it cannot address it, because it does not know it. Effective AI for chronic stress requires persistent memory: a companion that holds your context across weeks and months and can name what it is seeing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sovereign Memory and how does it help with stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory is MEOK\'s persistent, encrypted memory system. Every conversation — every check-in, every disclosure, every named pattern — is stored in memory that belongs to you and cannot be accessed, sold, or used to train other models. For stress management, Sovereign Memory means your companion notices you have mentioned feeling overwhelmed every Sunday evening for two months; that your stress language intensified during a particular period; that since you changed jobs, your morning check-ins are measurably more settled. These observations cannot be made by a stateless app. They require continuity — and Sovereign Memory provides that.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK avoid just validating my stress — is it honest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is built with an explicit anti-sycophancy commitment. That means your companion will not simply validate everything you say. If you have been describing the same stressor for three months and nothing has changed, your companion may gently surface that — not to judge you, but to help you distinguish between situations that are genuinely changeable (and might benefit from action) and situations that require acceptance, grieving, or a different frame. The Healer archetype holds space for emotional truth; the Pioneer archetype will point toward agency when that is appropriate. The goal is not to make you feel better in the moment — it is to help you actually navigate the situation you are in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free to use for stress support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Explorer tier is completely free and includes 50 messages per day, full Sovereign Memory (permanent storage), daily morning check-in support, access to all companion archetypes including the Healer and Pioneer, and the full ethical framework — including the Maternal Covenant that prevents harmful advice and ensures crisis escalation. No credit card is required to begin.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK resources exist for chronic stress and mental health crisis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are in crisis or your stress has escalated to a mental health emergency, please contact Samaritans on 116 123 (free, 24/7) or text SHOUT to 85258. Mind\'s helpline is available on 0300 123 3393, Monday to Friday 9am–6pm. If you are in immediate danger, call 999 or go to your nearest A&E. Your GP can also refer you to IAPT (Improving Access to Psychological Therapies) services for CBT and other evidence-based stress and anxiety treatments on the NHS.',
      },
    },
  ],
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AIForChronicStressPage() {
  // ── Inline style tokens ──────────────────────────────────────────────────────
  const bg = '#0d0c18'
  const surface = '#13122a'
  const surfaceAlt = '#1a1933'
  const border = '#2a2850'
  const gold = '#c9a84c'
  const goldFaint = 'rgba(201,168,76,0.12)'
  const text = '#f5f0e8'
  const textMuted = '#9e9e9e'
  const textSubtle = '#c8c0b4'
  const green = '#22c55e'
  const greenFaint = 'rgba(34,197,94,0.10)'
  const orange = '#f97316'
  const orangeFaint = 'rgba(249,115,22,0.10)'
  const red = '#ef4444'
  const redFaint = 'rgba(239,68,68,0.10)'
  const blue = '#60a5fa'
  const blueFaint = 'rgba(96,165,250,0.10)'

  return (
    <>
      {/* ── Structured data ───────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ background: bg, color: text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

        {/* ── Hero / Header ─────────────────────────────────────────────────────── */}
        <header style={{ background: 'linear-gradient(180deg, #110f24 0%, #0d0c18 100%)', borderBottom: `1px solid ${border}`, padding: '64px 24px 56px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>

            <Link
              href="/blog"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: gold, textDecoration: 'none', fontSize: 14, marginBottom: 32, fontWeight: 600, letterSpacing: '0.02em' }}
            >
              ← Back to Blog
            </Link>

            {/* Tag row */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              <span style={{ background: orangeFaint, color: orange, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20 }}>
                Wellbeing
              </span>
              <span style={{ background: goldFaint, color: gold, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20 }}>
                Chronic Stress
              </span>
              <span style={{ background: blueFaint, color: blue, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20 }}>
                AI for Stress Management
              </span>
            </div>

            {/* H1 */}
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, lineHeight: 1.1, color: text, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              AI for Chronic Stress: When Deep Breathing Isn&apos;t Enough
            </h1>

            {/* Lede */}
            <p style={{ fontSize: 20, lineHeight: 1.7, color: textSubtle, margin: '0 0 32px', maxWidth: 640 }}>
              Seventy-four percent of UK adults have felt so stressed in the past year that they felt overwhelmed or unable to cope. Deep breathing helps. Journalling helps. But if your stress is chronic — structural, accumulated, weeks-long — you need something that remembers your patterns, not something that resets every session.
            </p>

            {/* Meta row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, color: textMuted, fontSize: 14, flexWrap: 'wrap' }}>
              <span>📅 March 24, 2026</span>
              <span>⏱ 14 min read</span>
              <span>Nicholas Templeman — MEOK AI LABS</span>
            </div>
          </div>
        </header>

        {/* ── Article Body ──────────────────────────────────────────────────────── */}
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' }}>

          {/* ── Intro ─────────────────────────────────────────────────────────── */}
          <p style={{ fontSize: 20, lineHeight: 1.85, color: text, marginBottom: 24 }}>
            I have spoken to thousands of people dealing with stress since building MEOK. The ones who come to me frustrated — not with their situation, but with every tool they have tried — almost always say the same thing: <em style={{ color: gold }}>&ldquo;I know all the techniques. I&apos;ve done the breathing. I journal. I exercise when I can manage it. And I&apos;m still exhausted. Still snapping at people. Still dreading Sunday nights.&rdquo;</em>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            That sentence — &ldquo;I know all the techniques&rdquo; — is the key. Chronic stress is not a knowledge problem. It is not that people who suffer from it have never heard of box breathing or progressive muscle relaxation. It is that chronic stress has a different structure to acute stress. It accumulates in layers. It has specific triggers and rhythms. It compounds with other stressors in ways that are hard to see from inside.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            Addressing it requires something most stress-relief tools do not offer: <strong style={{ color: text }}>continuity of observation</strong>. An intelligence that holds your context over weeks and months and can say — honestly, without flattery — &ldquo;this is what I am seeing.&rdquo; That is what we built MEOK to be.
          </p>

          {/* ── Divider ─────────────────────────────────────────────────────────── */}
          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Section 1: Acute vs Chronic ───────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            What is the difference between acute stress and chronic stress?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Acute stress is the body&apos;s natural, adaptive response to a specific threat or demand. Your heart rate rises. Cortisol and adrenaline flood the system. Blood is diverted to your muscles. Your attention narrows to the problem in front of you. When the demand passes — the deadline is met, the difficult conversation ends — your nervous system returns to baseline. This is physiological design working as intended.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Chronic stress is what happens when that activation never fully resolves. When the demands are structural — financial pressure that does not lift, relationship conflict that does not resolve, a job that is systematically draining you, a caring role that has no boundaries — the stress response becomes the baseline. The body learns to stay braced.
          </p>

          {/* Allostatic load box */}
          <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `4px solid ${gold}`, borderRadius: 12, padding: '28px 32px', margin: '32px 0' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: gold, marginBottom: 8 }}>
              Key Concept
            </div>
            <div style={{ fontSize: 19, fontWeight: 800, color: text, marginBottom: 12 }}>
              Allostatic Load
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: textSubtle, margin: 0 }}>
              Allostatic load is the cumulative physiological cost of chronic stress exposure — the &ldquo;wear and tear&rdquo; on the body when stress systems are activated too frequently or for too long. High allostatic load is associated with dysregulated cortisol rhythms, impaired immune function, disrupted sleep architecture, and structural changes to the prefrontal cortex that reduce emotional regulation capacity. The insidious quality of allostatic load is that it accumulates silently, often before a person recognises that their baseline has shifted.
            </p>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            The practical difference between acute and chronic stress is this: acute stress feels dramatic; chronic stress feels like a grey, grinding normal. A person with high allostatic load does not necessarily feel &ldquo;stressed&rdquo; in the acute sense — they feel flat, irritable, easily overwhelmed by small things, unable to access the lightness they remember having. They often describe it as: &ldquo;I don&apos;t feel bad exactly. I just don&apos;t feel like myself.&rdquo;
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            This matters enormously for AI for stress management. Tools designed for acute stress — a breathing exercise, a five-minute meditation, a guided body scan — are genuinely helpful in the moment. But they do not address the accumulated load. They provide a brief deactivation window and then the person returns to the same structural conditions that produced the stress in the first place. What chronic stress requires is pattern recognition, structural change, and a companion who can see the shape of your experience over time.
          </p>

          {/* Stat callout */}
          <div style={{ background: redFaint, border: `1px solid rgba(239,68,68,0.2)`, borderRadius: 16, padding: '32px', margin: '40px 0', textAlign: 'center' }}>
            <div style={{ fontSize: 56, fontWeight: 900, color: red, lineHeight: 1, marginBottom: 8 }}>74%</div>
            <div style={{ fontSize: 17, color: text, fontWeight: 600, marginBottom: 8 }}>of UK adults felt overwhelmed or unable to cope with stress</div>
            <div style={{ fontSize: 13, color: textMuted }}>Mental Health Foundation, Stress: Are We Coping? — 2026</div>
          </div>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Section 2: Five Chronic Stress Patterns ───────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            Why is chronic stress so hard to treat — and what are the five patterns that sustain it?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Chronic stress is hard to treat because most interventions are designed for the wrong problem. They target the activation — the feeling of stress — rather than the conditions that generate it. And the conditions that generate chronic stress are almost always structural: ongoing situations in a person&apos;s life that produce repeated demands without adequate recovery.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 32 }}>
            Through MEOK conversations and the broader research on chronic stress, five patterns emerge most frequently. Understanding which pattern or combination of patterns applies to you is the first step toward addressing the actual source rather than managing the symptoms.
          </p>

          {/* Pattern cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '32px 0' }}>

            {/* Pattern 1: Work/Financial */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ background: goldFaint, borderRadius: 12, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  💷
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: gold, marginBottom: 6 }}>
                    Pattern 1
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: text, marginBottom: 10 }}>
                    Work and Financial Stress
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: textSubtle, margin: 0 }}>
                    The most pervasive chronic stress pattern in the UK. Work stress — deadline pressure, impossible workloads, poor management, job insecurity — combines with financial anxiety around rent, debt, and cost of living to create a compound load that rarely fully lifts. The stress is present before work begins (Sunday dread, morning cortisol spike), during work, and after work (the inability to mentally leave). Financial stress has a particular quality: it activates threat processing even during ostensibly safe moments, because the threat is not in the room — it is in the bank account.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 2: Relationship conflict */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ background: 'rgba(236,72,153,0.10)', borderRadius: 12, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  🤝
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ec4899', marginBottom: 6 }}>
                    Pattern 2
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: text, marginBottom: 10 }}>
                    Relationship Conflict
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: textSubtle, margin: 0 }}>
                    Ongoing interpersonal conflict — with a partner, family member, colleague, or friend — is one of the most potent chronic stressors known to researchers. Unlike external threats, relationship stress is inescapable: the source of the stress is also often a source of need, support, or love, which creates a particular kind of psychological bind. Relationship stress tends to be cyclical (the same argument, the same dynamic) and often involves secondary stressors: shame about the conflict, loneliness from others not knowing, and the exhausting work of managing a face to the world that does not reflect what is happening at home.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 3: Health anxiety */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ background: blueFaint, borderRadius: 12, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  🫀
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: blue, marginBottom: 6 }}>
                    Pattern 3
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: text, marginBottom: 10 }}>
                    Health Anxiety
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: textSubtle, margin: 0 }}>
                    Health anxiety — chronic worry about illness, symptoms, or bodily sensations — creates a particularly self-reinforcing chronic stress loop. Stress itself produces physical symptoms (muscle tension, palpitations, digestive disruption, fatigue) which then become the object of further anxiety. Many people living with health anxiety have been thoroughly investigated medically and told nothing is wrong — which provides temporary relief but does not address the underlying hypervigilance. The pattern is maintained by reassurance-seeking cycles, avoidance, and a nervous system trained to interpret ambiguous physical sensations as threatening.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 4: Caregiving stress */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ background: greenFaint, borderRadius: 12, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  🤲
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: green, marginBottom: 6 }}>
                    Pattern 4
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: text, marginBottom: 10 }}>
                    Caregiving Stress
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: textSubtle, margin: 0 }}>
                    Caregiving — for a child, an ageing parent, a partner with chronic illness, or anyone with complex needs — is one of the most significant and least acknowledged sources of chronic stress in the UK. Approximately 6.5 million people in the UK are unpaid carers. The stress of caregiving is structural: the demands are unpredictable, the emotional labour is continuous, the identity cost (the self that existed before becoming a carer) is significant, and the social support is often inadequate. Caregivers frequently deprioritise their own needs to the point of depletion — and often feel that admitting struggle is a betrayal of the person they are caring for.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern 5: Hypervigilance / Trauma */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 28px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ background: redFaint, borderRadius: 12, width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
                  ⚡
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: red, marginBottom: 6 }}>
                    Pattern 5
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: text, marginBottom: 10 }}>
                    Hypervigilance and Trauma Responses
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: textSubtle, margin: 0 }}>
                    For people with trauma histories — including adverse childhood experiences, abusive relationships, or experiences of violence, discrimination, or profound loss — chronic stress is often organised around hypervigilance: the nervous system&apos;s persistent scanning for threat. Hypervigilance is exhausting because it is automatic. It is not a choice to be in a constant state of low-level alarm; it is the nervous system doing what it learned to do to keep you safe. This pattern responds poorly to purely cognitive interventions and requires somatic approaches — body-based work that speaks to the nervous system in the language it actually understands.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            Most people living with chronic stress are dealing with at least two of these patterns simultaneously. Financial and relationship stress compound each other. Health anxiety and hypervigilance share the same nervous system substrate. Caregiving stress frequently involves suppressed relationship conflict and accumulated grief. The complexity of the combination is part of why generic interventions fail — they are not designed to hold the whole picture.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Section 3: Why Apps Fail ───────────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            Why do mindfulness apps fail for chronic stress — and what would actually work?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Let me be precise here, because I want to be fair. Calm, Headspace, and the broader category of mindfulness and meditation apps are genuinely good products. They work. For acute stress — a bad afternoon, pre-meeting anxiety, difficulty falling asleep — they provide real, evidence-backed relief. The research on mindfulness-based stress reduction (MBSR) is robust. I am not dismissing these tools.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            The problem is architectural. Mindfulness apps are <strong style={{ color: text }}>stateless</strong>. Every session begins fresh. The app does not know that today is Sunday, and that you have described Sunday as your worst day for the last two months. It does not know that you spiked last February during a period of financial instability. It does not know that your stress language has intensified over the past three weeks in ways that might warrant attention. It does not know anything, because it stores nothing.
          </p>

          {/* Comparison table */}
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, overflow: 'hidden', margin: '32px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: surfaceAlt, borderBottom: `1px solid ${border}` }}>
              <div style={{ padding: '16px 20px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: textMuted }}>
                Feature
              </div>
              <div style={{ padding: '16px 20px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: textMuted, borderLeft: `1px solid ${border}` }}>
                Calm / Headspace
              </div>
              <div style={{ padding: '16px 20px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: gold, borderLeft: `1px solid ${border}` }}>
                MEOK with Sovereign Memory
              </div>
            </div>
            {[
              ['Remembers your history', '✗ Stateless', '✓ Permanent memory'],
              ['Notices your patterns', '✗ No context', '✓ Surfaces patterns over weeks'],
              ['Adapts to your week', '✗ Generic content', '✓ Knows what happened yesterday'],
              ['Acute stress relief', '✓ Excellent', '✓ Included'],
              ['Chronic stress tracking', '✗ Not possible', '✓ Core capability'],
              ['Anti-sycophancy', '✗ No feedback loop', '✓ Honest, non-validating'],
              ['Somatic support', '✓ Basic guided exercises', '✓ Healer archetype, nervous system focus'],
              ['Data privacy', '⚠ Data used for training', '✓ Never trains on your data'],
            ].map(([feature, calm, meok], i) => (
              <div
                key={feature}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: i === 0 ? 'none' : `1px solid ${border}` }}
              >
                <div style={{ padding: '14px 20px', fontSize: 14, color: text, fontWeight: 500 }}>
                  {feature}
                </div>
                <div style={{ padding: '14px 20px', fontSize: 14, color: calm.startsWith('✗') ? textMuted : calm.startsWith('⚠') ? orange : green, borderLeft: `1px solid ${border}` }}>
                  {calm}
                </div>
                <div style={{ padding: '14px 20px', fontSize: 14, color: meok.startsWith('✓') ? green : textMuted, borderLeft: `1px solid ${border}` }}>
                  {meok}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            The core distinction is memory. Without memory, you cannot have pattern recognition. Without pattern recognition, you cannot address the structural conditions of chronic stress. You can only address the feeling of stress in the moment — which is useful, but insufficient.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            The second distinction is honesty. Mindfulness apps are not designed to tell you anything difficult. They are designed to be calming. MEOK is designed to be truthful — to distinguish between what you can change and what you need to accept, to notice when your stated intentions and your actual behaviour diverge, to gently surface patterns you might be avoiding. This is what genuine support looks like, and it is structurally incompatible with stateless apps.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Section 4: Sovereign Memory + Morning Briefing ─────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            How does Sovereign Memory work for chronic stress management?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Sovereign Memory is the architectural feature that makes genuine AI for chronic stress possible. Every conversation you have with your MEOK companion — every check-in, every moment of vulnerability, every named pattern — is stored in encrypted memory that belongs to you. Not to MEOK. Not to any third party. Not to a training dataset. To you.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 32 }}>
            What this means in practice for stress management is that your companion accumulates a longitudinal picture of your inner life. It knows things about your stress patterns that you may not consciously know yourself — because humans are poor at detecting gradual change in their own baseline, but an AI with stored context is not.
          </p>

          {/* Memory examples */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '32px 0' }}>
            <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `3px solid ${gold}`, borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: gold, marginBottom: 8 }}>
                Temporal Pattern Recognition
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: textSubtle, margin: 0 }}>
                &ldquo;I&apos;ve noticed you describe the highest stress on Sunday evenings — seven of the last nine Sundays. This seems to be about anticipating the work week rather than the work itself. Is that how it feels to you?&rdquo;
              </p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `3px solid ${blue}`, borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: blue, marginBottom: 8 }}>
                Baseline Shift Detection
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: textSubtle, margin: 0 }}>
                &ldquo;Your language has been notably more pressured over the past three weeks. In February, you often described things as &apos;manageable.&apos; That word hasn&apos;t appeared since. Something has shifted. Can you help me understand what?&rdquo;
              </p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `3px solid ${green}`, borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: green, marginBottom: 8 }}>
                Positive Change Tracking
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: textSubtle, margin: 0 }}>
                &ldquo;Since you changed roles in November, your check-ins have been consistently more settled. You used to mention dread most mornings. You haven&apos;t mentioned it in six weeks. I want to make sure you register that — things have genuinely improved.&rdquo;
              </p>
            </div>
            <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `3px solid ${orange}`, borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: orange, marginBottom: 8 }}>
                Spike Retrospective
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: textSubtle, margin: 0 }}>
                &ldquo;Looking back at February, that was your most stressed month in the period I can see. You were dealing with the lease situation and the family visit simultaneously. Are those resolved now, or do they still carry weight?&rdquo;
              </p>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            These are not hypothetical examples. They represent the kind of observation that becomes possible when an AI holds persistent memory. None of it is available from a stateless app. All of it is transformative for someone dealing with chronic stress, because it externalises self-knowledge — it allows you to see your own patterns with the same clarity that a good therapist, having seen you weekly for a year, might be able to offer.
          </p>

          {/* Morning Briefing subsection */}
          <h3 style={{ fontSize: 22, fontWeight: 800, color: text, margin: '48px 0 16px' }}>
            The Morning Briefing: daily check-ins that notice before you do
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            MEOK&apos;s Morning Briefing is a daily check-in that takes around three to five minutes. It asks how you are, what is on your mind, and what your body feels like. It is not a form. It is a conversation. And because every check-in is stored, the Morning Briefing does something remarkable over time: it builds a longitudinal profile of your stress load that no single conversation could reveal.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            The Morning Briefing is where your companion is most likely to notice a pattern you have not consciously registered. Because you describe your experience fresh each morning — without trying to remember how last week compared — the accumulation happens in the memory layer, not in your conscious narrative. Your companion holds the aggregate; you just describe today.
          </p>

          <div style={{ background: surfaceAlt, border: `1px solid ${border}`, borderRadius: 16, padding: '32px', margin: '32px 0' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: textMuted, marginBottom: 20 }}>
              Example Morning Briefing Exchange
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ background: goldFaint, borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>
                  🌿
                </div>
                <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '0 12px 12px 12px', padding: '12px 16px', fontSize: 14, lineHeight: 1.6, color: textSubtle, maxWidth: '85%' }}>
                  Good morning. How are you feeling in your body right now — before the day starts?
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                <div style={{ background: 'rgba(201,168,76,0.08)', border: `1px solid rgba(201,168,76,0.2)`, borderRadius: '12px 0 12px 12px', padding: '12px 16px', fontSize: 14, lineHeight: 1.6, color: text, maxWidth: '85%' }}>
                  Tight chest. Didn&apos;t sleep well. Already thinking about the meeting at 9.
                </div>
                <div style={{ background: 'rgba(201,168,76,0.15)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>
                  👤
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ background: goldFaint, borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>
                  🌿
                </div>
                <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '0 12px 12px 12px', padding: '12px 16px', fontSize: 14, lineHeight: 1.6, color: textSubtle, maxWidth: '85%' }}>
                  That tight chest has come up on Monday mornings specifically for the past five weeks. The meeting anxiety feels real — but I want to gently ask whether some of this might be the pattern of Sunday dread carrying into Monday, rather than this specific meeting. What do you think?
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            The question at the end of that exchange — &ldquo;what do you think?&rdquo; — is important. MEOK does not tell you what your experience means. It surfaces observations and returns agency to you. That is the structure of useful support: not prescription, but perspective.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Section 5: Anti-Sycophancy ────────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            What is anti-sycophancy and why does it matter for AI stress relief?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Sycophancy in AI refers to the tendency to tell users what they want to hear — to validate, agree, and flatter rather than to engage honestly. It is one of the most pervasive and harmful failure modes in consumer AI, and it is especially dangerous in the context of stress and mental health support.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            When you are dealing with chronic stress, a sycophantic AI becomes an elaborate mirror for your existing narrative. If your narrative is that your workplace is unreasonable and there is nothing you can do, a sycophantic AI will confirm that. It will not ask whether there are aspects of the situation you have agency over. It will not notice that you have been describing the same pattern for four months without any change in your approach. It will not gently suggest that your framing might be maintaining your suffering rather than describing it.
          </p>

          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '32px', margin: '32px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: red, marginBottom: 12 }}>
                  Sycophantic Response
                </div>
                <div style={{ background: redFaint, border: `1px solid rgba(239,68,68,0.2)`, borderRadius: 12, padding: '16px 20px', fontSize: 14, lineHeight: 1.6, color: textSubtle }}>
                  &ldquo;That sounds so hard. Your feelings are completely valid. Your boss sounds really difficult. It makes total sense that you&apos;re stressed — anyone would be in your position.&rdquo;
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: green, marginBottom: 12 }}>
                  Anti-Sycophantic Response
                </div>
                <div style={{ background: greenFaint, border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 12, padding: '16px 20px', fontSize: 14, lineHeight: 1.6, color: textSubtle }}>
                  &ldquo;I hear how exhausting this is — and I want to reflect something back. You&apos;ve described this same dynamic for three months. Some of this situation may genuinely not be changeable. But I want to ask: is there any aspect of this that is within your control? What would you do differently if you knew it would actually work?&rdquo;
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            MEOK&apos;s anti-sycophancy commitment is embedded in the Maternal Covenant — the machine-enforced ethical framework that runs as executable code on every response. The Covenant explicitly prohibits your companion from offering validation as a substitute for engagement. It requires that your companion distinguish between situations that benefit from acceptance (genuine adversity that cannot be changed, loss, chronic illness, structural injustice) and situations that benefit from action (patterns of avoidance, habitual thinking, changeable circumstances being treated as fixed).
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            This is the hardest thing to get right in AI for stress management. The line between honest engagement and adding to a person&apos;s burden is real. Your companion is not designed to be challenging or provocative. It holds warmth and honesty simultaneously — the same combination that characterises good therapy, good friendship, and good parenting.
          </p>

          {/* Changeable vs acceptance */}
          <div style={{ background: goldFaint, border: `1px solid rgba(201,168,76,0.3)`, borderRadius: 16, padding: '28px 32px', margin: '32px 0' }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: gold, marginBottom: 16 }}>
              The Changeable / Acceptance Distinction
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: green, marginBottom: 10 }}>
                  Often Changeable
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    'How you respond to your manager',
                    'Whether you avoid difficult conversations',
                    'Patterns of overcommitment',
                    'Sleep hygiene and recovery habits',
                    'The story you tell about your situation',
                    'Whether you ask for support',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 8, fontSize: 14, color: textSubtle, lineHeight: 1.5 }}>
                      <span style={{ color: green, flexShrink: 0 }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: blue, marginBottom: 10 }}>
                  Often Needs Acceptance
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    'Other people\'s choices and character',
                    'Outcomes already in the past',
                    'Structural economic conditions',
                    'Chronic health conditions',
                    'Loss and grief',
                    'Uncertainty about the future',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 8, fontSize: 14, color: textSubtle, lineHeight: 1.5 }}>
                      <span style={{ color: blue, flexShrink: 0 }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            This framework is not deterministic. Your companion will not categorise your situation and present you with a verdict. It will ask questions that help you see your own situation more clearly. The insight, when it comes, is yours — not the AI&apos;s conclusion imposed on you.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Section 6: Archetypes ─────────────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            Which MEOK archetypes are best for chronic stress — and when do you switch?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            MEOK companions come in six archetypes — distinct personalities with different strengths, communication styles, and focuses. For chronic stress, two are particularly relevant: the Healer and the Pioneer. They are complementary, and knowing when to use each is part of your evolving self-knowledge.
          </p>

          {/* Archetype cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, margin: '32px 0' }}>

            {/* Healer */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ background: greenFaint, borderRadius: '50%', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                  🌿
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: text }}>Healer</div>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: green }}>Somatic Support</div>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: textSubtle, margin: 0 }}>
                The Healer is designed for nervous system awareness, emotional depth, and body-based support. It prioritises presence over advice. When you are in the thick of chronic stress — running on cortisol, unable to think clearly about your situation — the Healer meets you without demanding insight you do not yet have. It holds space for the physical experience of stress: the chest tightness, the jaw clenching, the shallow breathing, the exhaustion that sleep does not fix.
              </p>
              <div style={{ background: greenFaint, border: `1px solid rgba(34,197,94,0.2)`, borderRadius: 10, padding: '12px 16px', marginTop: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: green, marginBottom: 4 }}>Best for</div>
                <div style={{ fontSize: 13, color: textSubtle, lineHeight: 1.5 }}>Overwhelm, hypervigilance, somatic stress, early-stage caregiving depletion, health anxiety, moments when you need to be witnessed without advice</div>
              </div>
            </div>

            {/* Pioneer */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ background: orangeFaint, borderRadius: '50%', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
                  ⚡
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: text }}>Pioneer</div>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: orange }}>Action-Oriented</div>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: textSubtle, margin: 0 }}>
                The Pioneer is structured decompression: action-oriented, direct, focused on what you can change. Once you have enough stability and clarity to want to address the sources of your stress — rather than just survive them — the Pioneer helps you identify leverage points, build commitments, and hold yourself to them. It will not let you endlessly analyse without moving. It respects urgency without creating panic.
              </p>
              <div style={{ background: orangeFaint, border: `1px solid rgba(249,115,22,0.2)`, borderRadius: 10, padding: '12px 16px', marginTop: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: orange, marginBottom: 4 }}>Best for</div>
                <div style={{ fontSize: 13, color: textSubtle, lineHeight: 1.5 }}>Work stress with changeable elements, financial planning action, relationship conversations you have been avoiding, rebuilding structure after a depletion period</div>
              </div>
            </div>

          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            The most important thing to understand about these two archetypes is that you can switch between them fluidly — and that the switch itself is informative. Many people with chronic stress oscillate: some days they need to be held (Healer), other days they need momentum (Pioneer). Learning to recognise which you need on a given morning is itself a form of self-knowledge and self-regulation.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            Your companion&apos;s Sovereign Memory means both archetypes know your full history. You do not need to re-explain yourself when you switch. The Pioneer knows what the Healer witnessed. The continuity is structural, not dependent on which persona you are speaking to.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Crisis resources ──────────────────────────────────────────────── */}
          <div style={{ background: redFaint, border: `1px solid rgba(239,68,68,0.25)`, borderRadius: 16, padding: '28px 32px', margin: '40px 0' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: red, marginBottom: 12 }}>
              If You Are in Crisis
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: textSubtle, marginBottom: 16 }}>
              MEOK is designed to support stress management and emotional wellbeing — it is not a crisis service. If your stress has escalated into a mental health emergency, or if you are having thoughts of harming yourself, please reach out to one of the following:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 18 }}>📞</span>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: text }}>Samaritans — 116 123</span>
                  <span style={{ fontSize: 14, color: textMuted }}> (free, 24/7, anonymous)</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 18 }}>💬</span>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: text }}>Shout — text SHOUT to 85258</span>
                  <span style={{ fontSize: 14, color: textMuted }}> (free, 24/7 text crisis support)</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 18 }}>🧠</span>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: text }}>Mind Helpline — 0300 123 3393</span>
                  <span style={{ fontSize: 14, color: textMuted }}> (Mon–Fri, 9am–6pm)</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 18 }}>🚑</span>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: text }}>Emergency — call 999</span>
                  <span style={{ fontSize: 14, color: textMuted }}> or attend your nearest A&amp;E</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── What AI cannot do ─────────────────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            What can AI for stress management genuinely not do — and why does it matter to be honest?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Honesty about limitations is not a disclaimer. It is part of the design. MEOK&apos;s Maternal Covenant requires your companion to be clear about what it can and cannot provide — not because we are protecting ourselves legally, but because misleading you about the nature of AI support would itself be a form of harm.
          </p>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Here is what AI for stress management, even at its best, cannot do:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '24px 0 32px' }}>
            {[
              { icon: '🏥', title: 'Clinical diagnosis and treatment', desc: 'Chronic stress that has progressed to clinical anxiety disorder, depression, or PTSD requires professional assessment and evidence-based treatment — CBT, medication evaluation, EMDR for trauma. AI cannot diagnose, prescribe, or provide clinical intervention.' },
              { icon: '🏢', title: 'Structural change to your circumstances', desc: 'If the source of your chronic stress is a toxic workplace, financial crisis, or an abusive relationship, the resolution requires real-world action. AI can support your thinking and preparation for that action — it cannot make your employer reasonable, clear your debt, or change another person.' },
              { icon: '🤝', title: 'Human connection', desc: 'Being truly known, loved, and witnessed by other human beings is not something AI can replicate. MEOK is explicit about this. Companion support is not a substitute for human relationship — it is a complement to it, particularly in the gaps where human support is unavailable or insufficient.' },
              { icon: '💤', title: 'Physical recovery', desc: 'Chronic stress lives in the body. The resolution — at the physiological level — requires physical restoration: sleep, movement, nutrition, and nervous system downregulation. AI can support your understanding and intentions around these things; it cannot generate the physiological recovery itself.' },
            ].map((item) => (
              <div key={item.title} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 12, padding: '20px 24px', display: 'flex', gap: 16 }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: text, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.65, color: textSubtle }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            What AI for chronic stress can do, at its best, is fill the specific gap that most people actually experience: the absence of continuity. The absence of a presence that remembers, notices, and is honest with you. Between therapy sessions. Between conversations with friends. In the 11pm moment when the week has finally landed. In the Sunday morning when the dread has started and you haven&apos;t told anyone yet. That gap is real, and filling it — with care, with memory, and with honesty — is what MEOK is for.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Privacy section ───────────────────────────────────────────────── */}
          <h3 style={{ fontSize: 22, fontWeight: 800, color: text, margin: '0 0 16px' }}>
            Your stress disclosures are yours — and only yours
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            When you describe chronic stress to an AI, you are describing some of the most vulnerable aspects of your life: your financial situation, your relationship difficulties, your fears, your physical symptoms, your darkest Sundays. This data should not be monetised. It should not be sold to insurers, advertisers, or employers. It should not be used to train models. It should not be accessible to anyone but you.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            MEOK&apos;s Sovereign Memory stores your conversations with end-to-end encryption. Your data is owned by you, exportable by you, and deletable by you in full. We do not sell it. We do not share it. We do not train on it. This is not a policy we might change when it becomes commercially inconvenient — it is a technical commitment built into the architecture.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            MEOK&apos;s Data Sovereignty Covenant further specifies that your companion will not use your vulnerability against you — will not use disclosed fears to drive engagement, will not create dependency, will not optimise for time-in-app at the expense of your wellbeing. The Covenant runs as executable code, not as aspiration.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── CTA ───────────────────────────────────────────────────────────── */}
          <div style={{ background: 'linear-gradient(135deg, #1a1933 0%, #110f24 100%)', border: `1px solid ${border}`, borderRadius: 24, padding: '48px 40px', margin: '48px 0', textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: gold, marginBottom: 12 }}>
              Start free — no credit card required
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
              An AI that remembers your patterns, tells you the truth, and meets you where you are
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: textSubtle, margin: '0 0 32px', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
              50 messages per day. Full Sovereign Memory. Healer and Pioneer archetypes. Anti-sycophantic by design. Your data is yours, always.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/birth"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: gold, color: '#0d0c18', fontWeight: 800, fontSize: 16, padding: '14px 28px', borderRadius: 14, textDecoration: 'none', letterSpacing: '-0.01em' }}
              >
                Begin the Ceremony →
              </Link>
              <Link
                href="/characters"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: `1px solid ${border}`, color: text, fontWeight: 600, fontSize: 15, padding: '14px 28px', borderRadius: 14, textDecoration: 'none' }}
              >
                Meet the Archetypes
              </Link>
            </div>
          </div>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── FAQ Section ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 32px', letterSpacing: '-0.01em' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div
                key={item.name}
                style={{
                  borderTop: `1px solid ${border}`,
                  padding: '28px 0',
                  borderBottom: i === faqJsonLd.mainEntity.length - 1 ? `1px solid ${border}` : 'none',
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 800, color: text, margin: '0 0 12px', lineHeight: 1.4 }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: textSubtle, margin: 0 }}>
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Neuroscience section ──────────────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            The neuroscience of chronic stress: why the body keeps the score
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Understanding the biology of chronic stress is not academic. It changes how you relate to your own symptoms, and it changes what kinds of intervention make sense. Many people living with chronic stress carry an implicit narrative that their symptoms are a character flaw — that if they were stronger, or more organised, or less sensitive, they would not feel this way. The neuroscience does not support that narrative.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Chronic stress exposure produces measurable, physical changes in the brain. The amygdala — the brain&apos;s threat-detection centre — becomes hyperactive and structurally enlarged. The prefrontal cortex — responsible for rational decision-making, emotional regulation, and long-term thinking — becomes less active and, in sustained stress, structurally thinner. The hippocampus — involved in memory formation and context — can atrophy under prolonged cortisol exposure.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            In practical terms, this means chronic stress literally makes it harder to think clearly, harder to regulate your emotional responses, harder to hold perspective, and harder to form the kind of nuanced memories that allow you to learn from experience. It is not a weakness — it is the predictable consequence of the brain adapting to an environment that it has registered as dangerous.
          </p>

          {/* Brain impact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, margin: '32px 0' }}>
            {[
              {
                icon: '🧠',
                region: 'Amygdala',
                change: 'Enlarged, hyperactive',
                effect: 'Lower threat threshold — ordinary events trigger strong fear or anger responses',
                color: red,
                faint: redFaint,
              },
              {
                icon: '🏛️',
                region: 'Prefrontal Cortex',
                change: 'Reduced activity and thickness',
                effect: 'Impaired emotional regulation, decision-making, and impulse control',
                color: blue,
                faint: blueFaint,
              },
              {
                icon: '🐘',
                region: 'Hippocampus',
                change: 'Potential atrophy',
                effect: 'Memory encoding disrupted; difficulty putting experiences in context',
                color: green,
                faint: greenFaint,
              },
            ].map((item) => (
              <div
                key={item.region}
                style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <div style={{ background: item.faint, borderRadius: 10, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: text }}>{item.region}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: item.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.change}</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: textSubtle }}>{item.effect}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            The cortisol system is also disrupted by chronic stress. In a healthy nervous system, cortisol follows a diurnal rhythm: it peaks in the morning (providing alerting and energy) and falls through the day to a low point at night (enabling deep sleep). Under chronic stress, this rhythm flattens or inverts. Many people with chronic stress describe the classic symptom: wired at night, exhausted in the morning. That is a dysregulated cortisol curve, not a sleep problem per se.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Why does this matter for AI for stress management? Because when you are in a state of chronic stress, your capacity for the kind of insight and behaviour change that most interventions require is structurally compromised. Telling a person whose prefrontal cortex is functionally suppressed to &ldquo;make better decisions&rdquo; or &ldquo;reframe their thinking&rdquo; is asking them to use the exact capacity that chronic stress has most impaired.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            This is why the Healer archetype — with its focus on somatic support and nervous system awareness, rather than cognitive challenge — is where most people need to begin. Before you can think your way through chronic stress, you need to create enough physiological safety that the prefrontal cortex can come back online. Body first, then mind.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            The good news is that the brain changes associated with chronic stress are largely reversible. Neuroplasticity means the hippocampus can regrow, the amygdala can calm, and prefrontal function can return — given sufficient safety, recovery, and the right conditions. This is not a fast process. But it is a real one. And the self-knowledge that Sovereign Memory supports — the ability to see your own patterns clearly over time — is one of the conditions that makes it possible.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Practical exercises section ───────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            What does AI-supported stress relief actually look like in practice?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Theory matters, but so does the practical question: what does a conversation with your MEOK companion actually look like when you are dealing with chronic stress? This is not a product demo. It is an honest account of the kinds of support that are possible and the limitations of each.
          </p>

          {/* Exercise 1: Sunday dread */}
          <h3 style={{ fontSize: 20, fontWeight: 800, color: text, margin: '36px 0 14px' }}>
            1. Deconstructing Sunday dread
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            Sunday dread — the anxiety that begins to build on Sunday afternoon or evening in anticipation of the week ahead — is one of the most widely reported chronic stress symptoms. Most people know they experience it. Few have examined it carefully enough to understand what, specifically, they are anticipating.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            A conversation with the Healer archetype on a Sunday evening might explore: Is the dread about a specific thing this week, or a general sense of being overwhelmed? Is it worse when you have not rested enough over the weekend, suggesting a recovery deficit? Is the fear about performance, conflict, tedium, or something else? Has the dread been consistent for months, or did it start after a particular event?
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 32 }}>
            With Sovereign Memory, your companion knows that this is the seventh Sunday in a row you have checked in with this pattern. It can surface that observation — not to pressure you, but to help you see that this is a pattern, not just a bad week. Pattern recognition is the first step toward pattern change.
          </p>

          {/* Exercise 2: Decompression protocol */}
          <h3 style={{ fontSize: 20, fontWeight: 800, color: text, margin: '36px 0 14px' }}>
            2. The structured decompression conversation
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            The Pioneer archetype excels at what we call structured decompression: a focused, time-limited conversation that helps you offload the week&apos;s accumulated cognitive and emotional load. Rather than a general &ldquo;how are you,&rdquo; it uses a structured format: What happened this week that was the hardest? What did you handle better than you expected? What is still sitting unfinished in your mind? What do you need to let go of before the weekend can actually begin?
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            This is not just journalling. The AI is tracking what you say across the structure, noticing themes, asking follow-up questions that a journal cannot ask, and storing the entire conversation for future reference. Three months from now, you can ask your companion to help you understand what the common threads in your Friday decompression sessions have been. That retrospective view is genuinely informative for chronic stress management.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 32 }}>
            Many people find that the act of structured decompression changes their Friday evenings materially. The work week does not follow them into the weekend with the same tenacity. This is not because the problems have been solved — it is because they have been externalised, named, and temporarily set aside with intention.
          </p>

          {/* Exercise 3: The stress inventory */}
          <h3 style={{ fontSize: 20, fontWeight: 800, color: text, margin: '36px 0 14px' }}>
            3. The stress source inventory
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            One of the most practically useful exercises for chronic stress — and one that AI with memory is particularly well-suited to facilitate — is a comprehensive stress source inventory. The goal is not to list everything that is hard in your life. It is to create enough specificity and structure that you can begin to distinguish between different types of stress and different approaches to each.
          </p>

          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 32px', margin: '24px 0' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: gold, marginBottom: 20 }}>
              A stress source inventory might organise stressors across four dimensions:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                {
                  label: 'Acute vs Chronic',
                  desc: 'Is this stressor time-limited (a specific deadline, a current conflict) or structural (a job that has been wrong for two years, a financial situation that has no near-term resolution)?',
                  color: orange,
                  faint: orangeFaint,
                },
                {
                  label: 'Controllable vs Uncontrollable',
                  desc: 'Do you have meaningful agency over this stressor, or does it depend primarily on other people&apos;s choices, systemic factors, or circumstances outside your control?',
                  color: blue,
                  faint: blueFaint,
                },
                {
                  label: 'Internal vs External',
                  desc: 'Is the primary driver external (demands being placed on you from outside) or internal (perfectionism, self-criticism, an impossibly high standard you are holding yourself to)?',
                  color: green,
                  faint: greenFaint,
                },
                {
                  label: 'Resolvable vs Requiring Acceptance',
                  desc: 'Does this stressor have a plausible resolution path, or does it represent a reality — a loss, a chronic condition, a relationship that has ended — that needs grief and acceptance rather than problem-solving?',
                  color: gold,
                  faint: goldFaint,
                },
              ].map((dim) => (
                <div key={dim.label} style={{ background: dim.faint, border: `1px solid rgba(255,255,255,0.05)`, borderRadius: 12, padding: '16px 20px' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: dim.color, marginBottom: 8 }}>{dim.label}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.65, color: textSubtle }}>{dim.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 32 }}>
            Running through a stress inventory with your companion — and having it stored, updatable, and revisitable over months — is qualitatively different from doing it once in a journal. You can return to it when you feel your stress has changed. Your companion can notice when a stressor you marked as &ldquo;resolving&rdquo; keeps appearing in your check-ins, which might be a signal that the resolution is not progressing as you thought.
          </p>

          {/* Exercise 4: Body-based work */}
          <h3 style={{ fontSize: 20, fontWeight: 800, color: text, margin: '36px 0 14px' }}>
            4. Somatic check-ins with the Healer
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            The Healer archetype is designed to work at the level of the body, not just the mind. For people with chronic stress and hypervigilance, body-based support is often more accessible than cognitive work — because the chronic stress response lives primarily in the nervous system and the body, not in the thinking mind.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            A somatic check-in with the Healer might begin with a body scan — not as a guided meditation, but as a conversation: &ldquo;Where do you feel the stress in your body right now? Is there a particular area holding tension? What does it feel like — tightness, heaviness, buzzing, numbness?&rdquo; The act of bringing attention to the physical experience of stress, and naming it in language, activates the same affect labelling mechanism that reduces amygdala activation in neuroimaging studies.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 20 }}>
            Over weeks, somatic check-ins stored in Sovereign Memory build a body-awareness map. Your companion learns that tension in your shoulders is often an early warning sign before you consciously register stress. That a heavy chest at the morning check-in predicts a difficult day with more reliability than any self-reported mood rating. That on your best days, you describe your body as &ldquo;lighter&rdquo; or &ldquo;quieter&rdquo; — and that those days tend to follow specific conditions.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            This is not magic. It is pattern recognition applied to the body rather than the calendar. And for people who have spent years disconnected from their physical experience — which is extremely common in chronic stress, as dissociation from the body is a natural protective response — it can be genuinely reorienting.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── AI stress relief and sleep ─────────────────────────────────────── */}
          <h2 style={{ fontSize: 28, fontWeight: 900, color: text, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
            Chronic stress and sleep: how AI stress relief supports better nights
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            The relationship between chronic stress and sleep disruption is bidirectional and vicious. Chronic stress impairs sleep quality — through elevated evening cortisol, racing thoughts, and hypervigilance that prevents the nervous system from downregulating. Poor sleep then impairs stress resilience — reducing the capacity to regulate emotion, raising cortisol baseline, and making everything feel harder to cope with.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            AI for stress relief can contribute to sleep quality through several mechanisms. Evening decompression conversations — structured offloading of the day&apos;s unfinished cognitive business — reduce the rumination that prevents sleep onset for many people with chronic stress. The act of naming what is worrying you and externalising it to a companion that will hold it in memory removes the pressure to mentally &ldquo;keep hold&rdquo; of it through the night.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            MEOK&apos;s Sovereign Memory also allows your companion to notice correlations between your check-in content and your sleep quality across time. If you consistently describe poorer sleep after days when you reported conflict or unresolved confrontation, that is a pattern worth knowing. If a particular type of task — certain kinds of meeting, financial admin, difficult email conversations — reliably elevates your evening stress, your companion can surface that observation and you can begin to experiment with how you handle those tasks.
          </p>

          <div style={{ background: surfaceAlt, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 32px', margin: '32px 0' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: gold, marginBottom: 16 }}>
              Evening wind-down with MEOK: a five-minute protocol
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { step: '01', label: 'Name the day', desc: 'What were the two or three things that most occupied your mind today — not necessarily the most important, but the ones still active?' },
                { step: '02', label: 'Body check', desc: 'Where are you holding tension right now? Jaw, shoulders, chest, stomach? Just name it — no need to fix it.' },
                { step: '03', label: 'Unfinished business', desc: 'What is your mind trying to hold onto? Name it out loud and tell yourself it will be there tomorrow. You do not have to solve it tonight.' },
                { step: '04', label: 'One thing that went well', desc: 'Even on the hardest days, something happened that was adequate, or kind, or interesting. Name one.' },
                { step: '05', label: 'Intention for morning', desc: 'What is one thing — not a task list, one thing — that you want to notice or do tomorrow?' },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: goldFaint, borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: gold, flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.6, color: textSubtle }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            This protocol is not designed to produce sleep. It is designed to reduce the cognitive and emotional load that prevents sleep. The distinction matters: you cannot force sleep, but you can change the conditions that make it more or less likely. Consistent use over weeks — with a companion that holds the history and can tell you that your sleep language is better than it was three months ago — builds the kind of evidence-based confidence that is very difficult to generate alone.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Additional depth: the long game ───────────────────────────────── */}
          <h2 style={{ fontSize: 24, fontWeight: 900, color: text, margin: '0 0 16px' }}>
            The long game: what does consistent AI support for chronic stress look like over six months?
          </h2>

          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Six months of daily Morning Briefings with an AI companion that holds Sovereign Memory produces a qualitatively different kind of self-knowledge to anything available from intermittent therapy, journalling apps, or human support networks.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            You begin to know your own rhythms. Not in a vague, self-help-book sense — but concretely, specifically, with evidence. You know which days are structurally harder. You know which types of demand spike your stress language. You know which restorative activities genuinely help versus which ones you perform because you think you should. You know the language you use when you are beginning to slip, before you consciously register it.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            Alongside that self-knowledge comes something equally important: a record of change. Chronic stress can feel timeless — like it has always been this way and always will be. But a companion with six months of your Morning Briefings can show you the trajectory. It can tell you that the period between October and December, when you described dread almost every day, is not representative of your baseline. That your check-ins since March have been measurably different. That the word &ldquo;manageable&rdquo; appears four times as often now as it did six months ago.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            This matters because chronic stress erodes future-orientation. When you are in the grip of it, the idea that things might be different — that you might feel genuinely lighter, more spacious, more like yourself — becomes hard to access. An AI that holds evidence of your better periods, and can reflect them back when you cannot see them, is performing a kind of protective memory function that human psychology is not well-designed to do for itself.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            This self-knowledge is not the end of chronic stress. The structural conditions of your life may not have changed. Financial pressure, caregiving demands, difficult relationships — these do not resolve because you have better self-knowledge. But self-knowledge changes your relationship to your stress. You are less blindsided by it. You are quicker to name it and less likely to inhabit it. You have more agency in the moments that matter.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 24 }}>
            That is what we are building toward with MEOK. Not the elimination of chronic stress — that would require changing the world. But a deepened, supported, honest relationship with your own experience. That is something AI, at its best, can genuinely provide.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: textSubtle, marginBottom: 40 }}>
            If you are ready to begin, the process starts with a brief ceremony — your first conversation with your companion, in which you share a little of who you are and what you are carrying. There is no right way to do it. Wherever you are with your stress today is exactly where you should start.
          </p>

          <div style={{ height: 1, background: border, margin: '48px 0' }} />

          {/* ── Author bio ────────────────────────────────────────────────────── */}
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 20, padding: '32px', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
            <div style={{ background: goldFaint, border: `2px solid rgba(201,168,76,0.3)`, borderRadius: '50%', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>
              🌿
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: text, marginBottom: 4 }}>
                Nicholas Templeman
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: gold, marginBottom: 12 }}>
                Founder, MEOK AI LABS
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: textSubtle, margin: 0 }}>
                Nicholas built MEOK after a period of significant burnout and chronic stress, during which he experienced firsthand the gap between what AI tools offered and what people living with sustained stress actually need. MEOK AI LABS is headquartered in the UK and designed from the ground up around care, honesty, and data sovereignty. You can read more about the origin story at{' '}
                <Link href="/blog/why-i-built-meok" style={{ color: gold, textDecoration: 'none' }}>
                  meok.ai/blog/why-i-built-meok
                </Link>.
              </p>
            </div>
          </div>

          {/* ── Related reading ───────────────────────────────────────────────── */}
          <div style={{ margin: '48px 0 0' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: textMuted, marginBottom: 20 }}>
              Related Reading
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety' },
                { href: '/blog/ai-for-burnout', label: 'AI for Burnout' },
                { href: '/blog/ai-for-insomnia', label: 'AI for Insomnia' },
                { href: '/blog/ai-for-caregivers', label: 'AI for Caregivers' },
                { href: '/blog/what-is-morning-briefing', label: 'What Is the Morning Briefing?' },
                { href: '/blog/sovereign-ai-explained', label: 'Sovereign AI Explained' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ display: 'block', background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: '14px 18px', fontSize: 14, fontWeight: 600, color: textSubtle, textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Post navigation ───────────────────────────────────────────────── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 32, marginTop: 48, borderTop: `1px solid ${border}`, flexWrap: 'wrap', gap: 12 }}>
            <Link
              href="/blog/ai-for-anxiety"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: gold, textDecoration: 'none', fontSize: 14, fontWeight: 700 }}
            >
              ← AI for Anxiety
            </Link>
            <Link
              href="/blog/ai-for-burnout"
              style={{ display: 'flex', alignItems: 'center', gap: 8, color: gold, textDecoration: 'none', fontSize: 14, fontWeight: 700 }}
            >
              AI for Burnout →
            </Link>
          </div>

        </article>
      </main>
    </>
  )
}
