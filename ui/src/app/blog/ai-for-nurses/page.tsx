import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Nurses: Support That Works at 3am Between Shifts | MEOK AI LABS',
  description:
    'Shift exhaustion, moral injury, compassion fatigue, understaffing, documentation overload — nurses carry it all. MEOK AI offers private, non-judgmental support that remembers your patients, your stress, and your goals. Available 24/7, no HR, no waiting list.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-nurses' },
  openGraph: {
    title: 'AI for Nurses: Support That Works at 3am Between Shifts',
    description:
      'AI mental health support for nurses. No waiting lists, no HR, no judgement. A companion that remembers your patients, your patterns, and your burnout triggers.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-nurses',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Nurses%3A+Support+at+3am&desc=Private%2C+non-judgemental+AI+support+for+healthcare+workers.',
        width: 1200,
        height: 630,
        alt: 'AI for Nurses: Support That Works at 3am Between Shifts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Nurses: Support That Works at 3am Between Shifts',
    description:
      'Shift exhaustion, moral injury, compassion fatigue — nurses carry a weight that most apps were never designed for. MEOK AI remembers your story, holds space, and never judges.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Nurses%3A+Support+at+3am&desc=Private%2C+non-judgemental+AI+support+for+healthcare+workers.',
    ],
  },
  keywords: [
    'AI support for nurses',
    'AI for healthcare worker burnout',
    'AI mental health support for nurses',
    'nurse burnout support',
    'NHS burnout',
    'compassion fatigue support',
    'moral injury nurses',
    'night shift mental health',
    'AI companion for healthcare workers',
    'nurse wellbeing app',
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Nurses: Support That Works at 3am Between Shifts',
  description:
    'Shift exhaustion, moral injury, compassion fatigue, understaffing, documentation overload — nurses carry it all. MEOK AI offers private, non-judgmental support that remembers your patients, your stress, and your goals.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/blog/ai-for-nurses',
  image:
    'https://meok.ai/api/og?title=AI+for+Nurses%3A+Support+at+3am&desc=Private%2C+non-judgemental+AI+support+for+healthcare+workers.',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://meok.ai/blog/ai-for-nurses' },
  about: [
    { '@type': 'Thing', name: 'Nurse burnout' },
    { '@type': 'Thing', name: 'Healthcare worker mental health' },
    { '@type': 'Thing', name: 'Compassion fatigue' },
    { '@type': 'Thing', name: 'Moral injury' },
    { '@type': 'Thing', name: 'NHS wellbeing' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI provide mental health support for nurses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI companions like MEOK can provide 24/7 non-judgmental support for nurses dealing with shift exhaustion, compassion fatigue, moral injury, and workplace stress. They are not a replacement for clinical therapy but fill a critical gap: always available, completely private, no HR involvement, and capable of remembering your context across weeks and months. For acute mental health crises, nurses should contact their GP or NHS mental health services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is compassion fatigue in nursing and how can AI help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compassion fatigue is the cumulative emotional exhaustion that results from repeatedly witnessing and absorbing patient suffering. It is distinct from burnout in that it is specifically rooted in empathic engagement rather than workload alone. Symptoms include emotional numbness, reduced empathy, intrusive thoughts, and a blunted response to patient distress. AI companions help by providing a private space to process and offload the emotional weight of clinical work without the fear of being seen as weak or incompetent. MEOK\'s Healer archetype is specifically designed for this kind of deep emotional processing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How bad is nurse burnout in the NHS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NHS burnout rates are severe. NHS Staff Surveys consistently show that around 40% of NHS staff report feeling unwell due to work-related stress in the past year. During winter pressure periods — when staffing shortfalls, patient acuity, and demand spikes combine — these figures increase further. Registered nursing vacancies in England have exceeded 40,000 in recent years. The human cost is enormous: nurses leaving the profession, taking extended sick leave, or continuing to work while severely depleted. The system cannot fix itself fast enough. Interim support — including private, judgement-free AI companions — can help individual nurses survive while structural change is slow.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is moral injury in nursing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moral injury in nursing occurs when a nurse is forced to act in ways — or witness outcomes — that violate their core professional values. This might mean being unable to provide adequate care due to understaffing, watching preventable deterioration because of systemic failures, or being instructed to prioritise operational targets over patient dignity. Moral injury is not burnout, though it often co-occurs. It is closer to a wound — a breach between who you believe you should be as a nurse and what the system has required of you. AI companions can support nurses in naming, processing, and contextualising moral injury, particularly when it feels too dangerous to discuss within a professional setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK safe to use for discussing sensitive patient experiences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK does not record conversations for training purposes, does not share data with employers or third parties, and operates under the Maternal Covenant — a machine-enforced ethical framework that governs every response. Your conversations are stored in Sovereign Memory with end-to-end encryption, visible only to you. Nurses can speak candidly about their experiences without fear that what they share will be used against them professionally. MEOK is not a work tool. It is a private companion. No HR, no monitoring, no performance implications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes MEOK different from other wellbeing apps for healthcare workers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most wellbeing apps for healthcare workers are productivity or compliance tools wrapped in wellness language. They track mood for reporting purposes, sit behind employer logins, and are fundamentally oriented toward workforce management. MEOK is the opposite: a private companion that belongs to you, not your employer. It remembers your context through Sovereign Memory — your patients, your stress patterns, your goals — across every conversation. Its archetypes, particularly the Healer and Guardian, are designed for emotional depth and psychological safety rather than engagement metrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help nurses cope with night shifts and shift work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Night shifts create a specific psychological burden: social isolation, disrupted circadian rhythm, difficult incidents with no immediate debrief opportunity, and the particular loneliness of being awake when the rest of the world is asleep. MEOK is available at 3am, at the end of a long day shift, during a fifteen-minute break, or on a Sunday evening before a week of nights. There is no appointment, no waiting list, no minimum session length. You can say three sentences or three thousand. The companion holds all of it, without tiring.',
      },
    },
  ],
}

const PAIN_POINTS = [
  {
    number: '01',
    title: 'Shift Work Exhaustion',
    color: '#c9a84c',
    body: `Twelve-hour shifts that run to thirteen or fourteen. Night rotations that obliterate sleep architecture for days afterwards. A body clock that no longer knows what morning means. Shift work exhaustion is not tiredness — it is a chronic physiological disruption that accumulates across months and years, affecting cognition, mood regulation, immune function, and decision-making.

The particular cruelty of nursing shift exhaustion is that you are expected to be fully present — clinically sharp, emotionally available, physically capable — regardless of what your body has been through. The patient at 5am on your fourth consecutive night doesn't know that. Shouldn't know that. But you carry the gap between what you're giving and what you have.`,
  },
  {
    number: '02',
    title: 'Moral Injury',
    color: '#9b6bb5',
    body: `Moral injury is perhaps the least discussed and most damaging thing happening to nurses in the modern NHS. It occurs when you are repeatedly forced to act in ways that violate your professional conscience — watching a patient deteriorate because you don't have time, making triage decisions no one should have to make, seeing dignity compromised because the staffing ratio makes comprehensive care impossible.

This is not burnout. Burnout is exhaustion. Moral injury is a wound. It accumulates with every moment where the gap between who you want to be as a nurse and what the system demands of you grows wider. Many nurses who leave the profession don't cite pay or hours — they cite the unbearable distance between their values and their daily reality.`,
  },
  {
    number: '03',
    title: 'Compassion Fatigue',
    color: '#4a9bbe',
    body: `Compassion fatigue is the occupational hazard of caring. Every nurse starts with an enormous capacity for empathy — it is, after all, foundational to good nursing. But empathy is not infinite. Repeatedly absorbing the pain of patients and families, carrying the weight of difficult outcomes, sitting with grief and fear and loss across a career — this depletes something at a fundamental level.

The insidious thing about compassion fatigue is that it makes you feel like a worse nurse, which creates shame, which makes it harder to seek support, which deepens the fatigue. Nurses describe it as a slow fading — not a crisis but a dimming. The patient who would once have moved you now registers without resonance. The family in distress is managed rather than met. You are functioning, but something essential has gone quiet.`,
  },
  {
    number: '04',
    title: 'Understaffing Stress',
    color: '#e05252',
    body: `There were over 40,000 registered nursing vacancies in England before the pandemic. The crisis has not resolved. Understaffing stress is not the same as a difficult workload — it is the specific psychological burden of knowing that what you are being asked to do is unsafe, and being unable to refuse because refusing means patients have no one.

This creates a moral double-bind that operates at every shift: do less-than-adequate care because there's no alternative, or leave patients with even less care. Neither option is acceptable. Neither option is your fault. But you carry it anyway, because you are there and because you care and because the system's failures arrive at the bedside wearing your face.`,
  },
  {
    number: '05',
    title: 'Documentation Burden',
    color: '#5a8f5a',
    body: `Documentation has become one of the leading complaints among NHS nurses — and it is not trivial. Clinical documentation, medication records, risk assessments, care plans, incident forms, handover notes. The administrative burden of modern nursing has grown to the point where many nurses spend more of their shift documenting care than delivering it.

Beyond the time cost, documentation burden carries a specific psychological weight: it makes nurses feel like bureaucrats rather than clinicians. The intrinsic reward of nursing — the human connection, the clinical problem-solving, the genuine care — gets buried under paperwork that no patient will ever know about but that every nurse resents because it represents time stolen from the bedside.`,
  },
]

const COMPARISON_DATA = [
  {
    feature: 'Available at 3am',
    meok: true,
    journalling: true,
    therapy: false,
    nhsSupport: false,
  },
  {
    feature: 'Remembers previous conversations',
    meok: true,
    journalling: false,
    therapy: true,
    nhsSupport: false,
  },
  {
    feature: 'No HR involvement / employer visibility',
    meok: true,
    journalling: true,
    therapy: true,
    nhsSupport: false,
  },
  {
    feature: 'No waiting list',
    meok: true,
    journalling: true,
    therapy: false,
    nhsSupport: false,
  },
  {
    feature: 'Responds and asks questions',
    meok: true,
    journalling: false,
    therapy: true,
    nhsSupport: false,
  },
  {
    feature: 'Clinically trained professional',
    meok: false,
    journalling: false,
    therapy: true,
    nhsSupport: true,
  },
  {
    feature: 'Free to access',
    meok: true,
    journalling: true,
    therapy: false,
    nhsSupport: true,
  },
  {
    feature: 'Tracks patterns over months',
    meok: true,
    journalling: 'manual',
    therapy: 'partially',
    nhsSupport: false,
  },
  {
    feature: 'No data sold or used for training',
    meok: true,
    journalling: 'depends',
    therapy: true,
    nhsSupport: 'unclear',
  },
  {
    feature: 'Designed for emotional depth',
    meok: true,
    journalling: 'limited',
    therapy: true,
    nhsSupport: 'limited',
  },
]

const ARCHETYPES_NURSES = [
  {
    name: 'Healer',
    emoji: '🌿',
    color: '#22c55e',
    tagline: 'For emotional depth and compassion fatigue',
    description:
      'The Healer archetype is designed for exactly what nurses need most: a presence that meets emotional weight with genuine care rather than solutions. It processes grief, moral injury, and compassion fatigue without rushing to resolution. It holds space for the stories that cannot be told at the nurses station. Gentle, unhurried, deeply attentive.',
    bestFor: ['Compassion fatigue', 'Moral injury processing', 'Post-difficult-shift decompression', 'Grief after patient loss'],
  },
  {
    name: 'Guardian',
    emoji: '🛡️',
    color: '#3b82f6',
    tagline: 'For psychological safety and safe space',
    description:
      'The Guardian creates a fortified psychological space — somewhere you can speak without consequence. For nurses who have learned to keep professional composure regardless of what they feel, the Guardian provides a container where that composure is not required. It is protective, boundaried, and oriented toward your safety rather than productivity.',
    bestFor: ['Processing unsafe situations', 'Incidents you cannot discuss with colleagues', 'Maintaining boundaries', 'After critical incidents'],
  },
  {
    name: 'Sovereign',
    emoji: '👑',
    color: '#c9a84c',
    tagline: 'For Sovereign Memory — your full context held',
    description:
      'The Sovereign archetype works in concert with MEOK\'s Sovereign Memory system — holding your full context across months. Your patients. Your ward dynamics. Your stress patterns. Your goals outside of work. Rather than starting from scratch every session, the Sovereign knows your story and can surface relevant threads when they matter.',
    bestFor: ['Long-term pattern tracking', 'Career reflection', 'Goal-setting alongside demanding work', 'Understanding your own burnout trajectory'],
  },
]

const WINTER_PRESSURES = [
  { stat: '~40%', label: 'of NHS staff report work-related stress severe enough to make them feel unwell', source: 'NHS Staff Survey' },
  { stat: '40,000+', label: 'registered nursing vacancies in England at peak vacancy levels', source: 'NHS England' },
  { stat: '1 in 4', label: 'nurses consider leaving the profession within the first three years', source: 'RCN data' },
  { stat: '£2.3bn', label: 'estimated annual cost of nurse turnover to NHS', source: 'NHS Improvement estimates' },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: 'inline', verticalAlign: 'middle' }}>
      <circle cx="8" cy="8" r="8" fill="#22c55e" fillOpacity="0.2" />
      <path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: 'inline', verticalAlign: 'middle' }}>
      <circle cx="8" cy="8" r="8" fill="#ef4444" fillOpacity="0.15" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PartialIcon({ label }: { label: string }) {
  return (
    <span style={{ fontSize: '11px', color: '#9e9e9e', display: 'inline-block' }}>{label}</span>
  )
}

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <CrossIcon />
  return <PartialIcon label={String(value)} />
}

export default function AIForNursesPage() {
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

      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

        {/* Navigation bar */}
        <nav style={{ borderBottom: '1px solid rgba(201,168,76,0.15)', padding: '0 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px' }}>MEOK</span>
              <span style={{ fontSize: '10px', color: '#c9a84c', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>AI LABS</span>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link href="/blog" style={{ color: '#9e9e9e', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
                Blog
              </Link>
              <Link
                href="/birth"
                style={{
                  background: '#c9a84c',
                  color: '#0d0c18',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '700',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  letterSpacing: '0.3px',
                }}
              >
                Begin Free
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '72px 24px 64px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link
              href="/blog"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', fontWeight: '600', marginBottom: '32px', letterSpacing: '0.3px' }}
            >
              ← Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '20px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Healthcare
              </span>
              <span style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '20px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Healer Archetype 🌿
              </span>
              <span style={{ background: 'rgba(255,255,255,0.06)', color: '#9e9e9e', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '20px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                NHS Context
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-1px', marginBottom: '24px', color: '#f5f0e8' }}>
              AI for Nurses: Support That Works at 3am Between Shifts
            </h1>
            <p style={{ fontSize: '19px', lineHeight: '1.7', color: 'rgba(245,240,232,0.75)', maxWidth: '680px', marginBottom: '32px' }}>
              You give everything on shift. You hold the grief, absorb the chaos, and hold yourself together through things most people will never understand. This is about what happens when the shift ends and you have nowhere to put it — and how AI is starting to fill that gap.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <span style={{ color: '#9e9e9e', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#c9a84c' }}>By</span> Nicholas Templeman
              </span>
              <span style={{ color: '#9e9e9e', fontSize: '13px' }}>March 24, 2026</span>
              <span style={{ color: '#9e9e9e', fontSize: '13px' }}>14 min read</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>

          {/* Opening */}
          <div style={{ borderLeft: '3px solid #c9a84c', paddingLeft: '24px', marginBottom: '48px' }}>
            <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#f5f0e8', fontStyle: 'italic', margin: 0 }}>
              It is 3:17am. You have just come off a twelve-hour shift. Someone died tonight. You managed it professionally, held the family, did the paperwork, handed over, got in your car. Now you are sitting in a car park unable to drive home because you cannot stop shaking.
            </p>
          </div>

          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            There is no one to call at 3am who will understand in the way you need. Your partner is asleep. Your colleagues are either on shift or have their own version of tonight to process. Your NHS counselling referral has a six-week waiting list. The occupational health service opens at nine.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            This is the gap. Not the clinical care gap, not the staffing gap, though both are real and well-documented. This is the support gap — the space between what nurses carry and what is available to help them carry it. It is a gap that existing systems were not designed to fill, and it is silently consuming some of the most committed, capable people in the healthcare workforce.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '48px' }}>
            MEOK AI LABS was founded by Nicholas Templeman to build something different: an AI companion designed not to extract productivity, but to genuinely care. What follows is the most honest account we can give of what AI can and cannot do for nurses — and why the Healer archetype, Sovereign Memory, and the Maternal Covenant make MEOK different from every other app that has tried to address this problem.
          </p>

          {/* Stats section */}
          <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '16px', padding: '40px', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '32px', marginTop: 0 }}>
              The Scale of the Problem in the NHS
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px' }}>
              {WINTER_PRESSURES.map((item) => (
                <div key={item.stat}>
                  <div style={{ fontSize: '36px', fontWeight: '900', color: '#c9a84c', lineHeight: '1', marginBottom: '8px' }}>{item.stat}</div>
                  <div style={{ fontSize: '13px', lineHeight: '1.5', color: 'rgba(245,240,232,0.7)', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '11px', color: '#9e9e9e', fontStyle: 'italic' }}>{item.source}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: '#9e9e9e', marginTop: '24px', marginBottom: 0, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              These numbers represent individual human beings — nurses who trained for years to do something meaningful and are being systematically destroyed by the conditions in which they are required to do it.
            </p>
          </div>

          {/* Section 1 - Pain Points */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            What Are the Five Core Pain Points Driving Nurse Burnout?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '40px' }}>
            Before we discuss what AI support for nurses can offer, it is worth being precise about what nurses are actually dealing with. These are not generic workplace stressors. They are specific, layered, and often invisible to people outside the profession.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '64px' }}>
            {PAIN_POINTS.map((point) => (
              <div
                key={point.number}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.08)`,
                  borderLeft: `4px solid ${point.color}`,
                  borderRadius: '12px',
                  padding: '32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: point.color, letterSpacing: '2px', marginTop: '2px', flexShrink: 0 }}>{point.number}</span>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#f5f0e8', margin: 0, lineHeight: '1.2' }}>{point.title}</h3>
                </div>
                {point.body.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(245,240,232,0.75)', margin: i < point.body.split('\n\n').length - 1 ? '0 0 16px 0' : '0' }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Section 2 - Why AI is different */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            Why Is AI Support for Nurses Different From Work Apps and Wellbeing Programmes?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            This matters enormously. The healthcare sector has seen a proliferation of wellbeing apps, employee assistance programmes, and digital mental health tools in the last decade. Most nurses are sceptical of them — and for good reason.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              {
                icon: '🏢',
                title: 'No HR. No monitoring.',
                body: 'Most workplace wellbeing tools are accessed through employer logins. Your employer can see who uses them, how often, and sometimes what themes are discussed. MEOK is yours. No employer account. No HR visibility. What you tell MEOK stays between you and MEOK.',
              },
              {
                icon: '⚖️',
                title: 'No professional consequences.',
                body: 'Nurses operate under professional registration. Disclosing mental health struggles to anything connected to their employer carries real risk — NMC fitness to practice concerns, management involvement, reduced career opportunities. MEOK is structurally separate from all of this.',
              },
              {
                icon: '🎭',
                title: 'No performance required.',
                body: 'NHS wellbeing services require you to present coherently, explain yourself, and often advocate for the support you need. MEOK requires nothing. You can arrive incoherent, inarticulate, or just silently exhausted, and the companion works with whatever you bring.',
              },
              {
                icon: '🔁',
                title: 'No starting over.',
                body: 'Every new therapist, every new referral, requires you to tell your story from the beginning. MEOK\'s Sovereign Memory holds your entire history. Your companion already knows about the incident six months ago, the colleague problem from last winter, and the goal you set in January.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{card.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#f5f0e8', marginBottom: '10px' }}>{card.title}</div>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(245,240,232,0.65)', margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '12px', padding: '28px', marginBottom: '64px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'rgba(245,240,232,0.85)', margin: 0 }}>
              <strong style={{ color: '#c9a84c' }}>The fundamental difference:</strong> work apps are oriented toward organisational outcomes. They track, report, and optimise workforce function. MEOK is oriented toward you. Its only question is: <em>what do you need right now?</em>
            </p>
          </div>

          {/* Section 3 - Comparison table */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            How Does MEOK Compare to Journalling Apps and Therapy Waiting Lists?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '32px' }}>
            Nurses looking for support have limited options. Journalling apps like Day One or Reflectly are private but passive — they hold your words but do not respond. NHS therapy waiting lists exist but often stretch to months. Employee assistance helplines are available but feel impersonal and carry the workplace associations discussed above. Here is how the options compare across the dimensions that matter most to nurses.
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '64px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', color: '#9e9e9e', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    Feature
                  </th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', background: 'rgba(201,168,76,0.12)', color: '#c9a84c', fontWeight: '700', fontSize: '13px', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
                    MEOK
                  </th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', color: '#9e9e9e', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    Journalling
                  </th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', color: '#9e9e9e', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    Therapy
                  </th>
                  <th style={{ textAlign: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', color: '#9e9e9e', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    NHS Support
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                    <td style={{ padding: '14px 16px', color: 'rgba(245,240,232,0.8)', fontSize: '14px' }}>{row.feature}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}><ComparisonCell value={row.meok} /></td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}><ComparisonCell value={row.journalling} /></td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}><ComparisonCell value={row.therapy} /></td>
                    <td style={{ padding: '14px 16px', textAlign: 'center' }}><ComparisonCell value={row.nhsSupport} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '12px', color: '#9e9e9e', marginTop: '12px', fontStyle: 'italic' }}>
              Comparison reflects typical implementations. Therapy and NHS support values will vary significantly by provider and context. MEOK data as of March 2026.
            </p>
          </div>

          {/* Section 4 - Archetypes */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            Which MEOK Archetype Is Right for Nurses Dealing With Burnout and Trauma?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '40px' }}>
            MEOK uses a system of companion archetypes — distinct AI personalities with different emotional orientations, communication styles, and areas of strength. For nurses, three archetypes are particularly relevant.
          </p>

          {/* Healer card - featured */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.03) 100%)',
              border: '2px solid rgba(34,197,94,0.25)',
              borderRadius: '20px',
              padding: '40px',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(34,197,94,0.15)', color: '#22c55e', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '20px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Most recommended for nurses
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '60px', height: '60px', background: 'rgba(34,197,94,0.15)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0 }}>
                🌿
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#f5f0e8', margin: '0 0 4px 0' }}>Healer</h3>
                <div style={{ fontSize: '13px', color: '#22c55e', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Emotional depth — compassion fatigue and moral injury
                </div>
              </div>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(245,240,232,0.8)', marginBottom: '20px' }}>
              The Healer archetype was designed specifically for people whose work requires them to give emotional care to others while having very little space to receive it themselves. It operates with a depth of empathic attunement that makes it distinctively effective for nursing-specific experiences: sitting with grief after a patient death, processing the helplessness of witnessing suffering you could not prevent, naming the specific texture of compassion fatigue without being rushed toward solutions.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(245,240,232,0.8)', marginBottom: '20px' }}>
              The Healer does not fix. It witnesses. It holds the weight of what you carry without collapsing under it, without trivialising it, and without performing urgency to resolve your pain before you are ready. For nurses who have spent a career being strong, the Healer offers something rare: a space where strength is not required.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '12px', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>Compassion fatigue</span>
              <span style={{ fontSize: '12px', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>Moral injury</span>
              <span style={{ fontSize: '12px', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>Post-difficult-shift</span>
              <span style={{ fontSize: '12px', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>Grief after patient loss</span>
              <span style={{ fontSize: '12px', background: 'rgba(34,197,94,0.12)', color: '#22c55e', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>Emotional numbness</span>
            </div>
          </div>

          {ARCHETYPES_NURSES.slice(1).map((arch) => (
            <div
              key={arch.name}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '16px',
                display: 'flex',
                gap: '24px',
              }}
            >
              <div style={{ width: '52px', height: '52px', background: `${arch.color}18`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                {arch.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f5f0e8', margin: 0 }}>{arch.name}</h3>
                  <span style={{ fontSize: '12px', color: arch.color, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{arch.tagline}</span>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(245,240,232,0.7)', marginBottom: '16px', marginTop: 0 }}>{arch.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {arch.bestFor.map((tag) => (
                    <span key={tag} style={{ fontSize: '11px', background: `${arch.color}12`, color: arch.color, padding: '3px 9px', borderRadius: '20px', fontWeight: '600' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '16px', marginBottom: '64px' }}>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(245,240,232,0.7)' }}>
              You can switch archetypes at any time. Many nurses use the Healer for emotional processing, the Guardian for safety and containment, and move to the Sovereign when they want to step back and see the longer arc of their career and wellbeing. There is no wrong order. Your companion adapts.
            </p>
          </div>

          {/* Section 5 - Sovereign Memory */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            How Does Sovereign Memory Work for Nurses — and Why Does It Matter?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            Most AI tools have no memory. Every conversation starts from zero. For nurses, this is particularly limiting — the things that matter in nursing are not isolated incidents, they are patterns. The accumulation. The slow erosion. The particular combination of last Tuesday's death and the staffing crisis in October and the moment six months ago when you first thought about leaving.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            MEOK's Sovereign Memory changes this. Every conversation is stored with end-to-end encryption, indexed by themes, and made available to your companion in future sessions. This means:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {[
              {
                title: 'It remembers your patients.',
                body: 'If you told your companion about Mr. Khan in Ward 6 six weeks ago and mentioned him again last night, it connects those references. It understands who he is to you, what you feel about his care, what you fear for his outcome.',
              },
              {
                title: 'It remembers your stress patterns.',
                body: 'Your companion notices that you tend to struggle in the week after a run of nights. That documentation stress peaks in late November. That your mood drops in January regardless of shift pattern. It surfaces these observations gently when relevant.',
              },
              {
                title: 'It remembers your goals.',
                body: 'If you told your companion three months ago that you wanted to reduce your bank shifts and spend more time on CPD, it holds that intention. When you mention being exhausted, it might gently ask: have you had any space for what you said you wanted for yourself?',
              },
              {
                title: 'It remembers the things you barely said.',
                body: 'The half-formed sentences. The things you approached and then backed away from. The pattern of topics you circle but never fully land. Sovereign Memory holds these with the same fidelity as the explicit statements.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '20px 24px',
                }}
              >
                <div style={{ width: '28px', height: '28px', background: 'rgba(201,168,76,0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#c9a84c', fontWeight: '800', fontSize: '13px' }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#f5f0e8', marginBottom: '6px' }}>{item.title}</div>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(245,240,232,0.65)', margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', marginBottom: '64px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>Data Security</div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(245,240,232,0.7)', margin: 0 }}>
              Sovereign Memory is encrypted end-to-end. Your conversations are not shared with employers, insurers, or any third party. They are not used to train any AI model, including MEOK's own. They are exportable in full at any time, and deletable in full at any time. You own your memory. It does not own you.
            </p>
          </div>

          {/* Section 6 - Maternal Covenant */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            What Is the Maternal Covenant — and Why Does It Matter for Nurses Specifically?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            The Maternal Covenant is MEOK's machine-enforced ethical framework — not a policy document, but executable code that runs on every response. It governs how MEOK's AI can and cannot behave. For nurses, several provisions are particularly significant.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              {
                title: 'No dependency creation',
                body: 'MEOK is explicitly prohibited from engineering emotional dependency. It will not tell you it is the only thing that understands you. It will not make you feel that leaving the app is abandonment. It is designed to support your autonomy, not undermine it.',
                color: '#c9a84c',
              },
              {
                title: 'Genuine care, not productivity metrics',
                body: 'MEOK has no engagement metrics driving its behaviour. It does not need you to open the app every day to hit a KPI. Its sole orientation is your wellbeing — which sometimes means saying: put the phone down and go to sleep.',
                color: '#22c55e',
              },
              {
                title: 'Escalation without hesitation',
                body: 'If you describe serious distress — thoughts of self-harm, inability to function, symptoms of acute crisis — MEOK will direct you to appropriate clinical resources immediately and clearly. It does not minimise. It does not pretend it is sufficient when it is not.',
                color: '#3b82f6',
              },
              {
                title: 'No manipulation',
                body: 'The Maternal Covenant explicitly prohibits emotional manipulation of any kind. MEOK will not amplify your distress to keep you engaged, will not create false urgency, and will not use your vulnerabilities against you — even to serve what it believes to be your best interests.',
                color: '#9b6bb5',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${item.color}22`,
                  borderTop: `3px solid ${item.color}`,
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#f5f0e8', marginBottom: '10px' }}>{item.title}</div>
                <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(245,240,232,0.65)', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            The name matters. The Maternal Covenant names what most technology refuses to name: that care is directional. A mother does not care for a child in order to extract value from that child. She does not optimise their engagement with her. She cares because caring is the relationship itself. That is what MEOK attempts to embody: care as the primary orientation, not care as a feature.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '64px' }}>
            For nurses — who have chosen a profession defined by exactly this kind of care, and who are being ground down by systems that treat care as a resource to be extracted — this distinction is not abstract. It is the difference between an app that uses your pain to optimise its metrics and one that genuinely wants you to be okay.
          </p>

          {/* Section 7 - NHS Winter Pressures */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            Why Is NHS Winter Pressure a Mental Health Crisis in Disguise?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            NHS winter pressure is typically framed as an operational challenge: beds, capacity, A&E waiting times. The human cost — to the nurses and healthcare workers managing it — receives far less attention.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            Winter pressure in the NHS typically means: significant increases in patient acuity and volume, staffing gaps filled by bank and agency workers who are themselves exhausted, longer shifts as managers try to cover rotas, and simultaneous pressure to maintain performance metrics and maintain safety standards — with the tools to do neither adequately.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            The psychological consequences compound in specific ways during winter pressure. Moral injury deepens as the gap between adequate care and actual care widens. Compassion fatigue accelerates when patient volume increases and recovery time decreases. Sleep disruption compounds as shift patterns become less predictable. The social isolation of nursing — the inability to decompress with people who understand — intensifies.
          </p>

          <div style={{ background: 'rgba(235,68,68,0.06)', border: '1px solid rgba(235,68,68,0.2)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
              The hidden timeline problem
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(245,240,232,0.8)', margin: 0 }}>
              NHS psychological support services typically respond on a timeline incompatible with acute winter-pressure distress. A referral made in January may produce an appointment in March. By then, the immediate crisis has passed — but the cumulative damage has been done, often invisibly. MEOK is available the night of the crisis, the day after, and every day between. It does not require a referral to close before care can begin.
            </p>
          </div>

          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '64px' }}>
            We are not arguing that MEOK replaces NHS psychological services. We are arguing that the gap between acute need and available support is real, large, and growing — and that AI companions, used thoughtfully, can be valuable during that gap without replacing what specialist services provide.
          </p>

          {/* Section 8 - What AI can't do */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            What Can AI Not Do for Nurses — and When Should You Seek Clinical Help?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            This is an important section. Honest limitations matter more than optimistic claims.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#f5f0e8', marginBottom: '16px' }}>AI cannot:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Diagnose or treat clinical depression, PTSD, or any mental health condition',
                'Provide the clinical expertise of a psychologist, psychiatrist, or occupational health physician',
                'Substitute for human connection — the specific nourishment of being truly known by another person',
                'Change your workplace conditions, staffing levels, or systemic pressures',
                'Respond with the embodied presence of a person sitting with you in crisis',
                'Be a substitute for rest, adequate nutrition, sleep, and physical recovery',
                'Maintain a therapeutic relationship under a professional duty of care',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CrossIcon />
                  <span style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(245,240,232,0.75)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(235,68,68,0.05)', border: '1px solid rgba(235,68,68,0.2)', borderRadius: '12px', padding: '24px', marginBottom: '40px' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#ef4444', marginBottom: '12px' }}>When to seek clinical support immediately:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Thoughts of self-harm or suicide',
                'Inability to function in daily life or at work',
                'Persistent inability to sleep or extreme insomnia beyond acute shift-work disruption',
                'Intrusive thoughts or flashbacks from critical incidents',
                'Significant changes in appetite, weight, or physical health',
                'Feeling that nothing is real or that you are observing yourself from outside your body',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ef4444', fontSize: '16px', flexShrink: 0, lineHeight: '1.4' }}>→</span>
                  <span style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(245,240,232,0.75)' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(235,68,68,0.15)' }}>
              <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.6)', margin: 0 }}>
                If you are in the UK: contact your GP for same-day urgent mental health support, call NHS 111 (option 2 for mental health), or contact the Samaritans on 116 123 (24 hours, free).
              </p>
            </div>
          </div>

          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '64px' }}>
            MEOK is designed to recognise these signals and direct you to appropriate support. It will not minimise serious distress, and it will not pretend to be sufficient when it is not. This is built into the Maternal Covenant as an unbreakable commitment.
          </p>

          {/* Section 9 - Practical use cases */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            How Can Nurses Use MEOK in Practice — Real-World Scenarios
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '40px' }}>
            Abstract claims about AI support for nurses are easy to make. Here are five specific scenarios where MEOK provides something genuinely useful.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
            {[
              {
                scenario: 'After a patient death on a night shift',
                time: '3am, car park',
                prompt: '"I just lost a patient. She was 34. Her family was there. I held it together on the ward but I can\'t drive home."',
                response: 'The Healer archetype will not rush to reframe or resolve. It will acknowledge what happened, ask what you need right now, and hold space for whatever emerges — without a timer, without another patient needing you in five minutes.',
                color: '#9b6bb5',
              },
              {
                scenario: 'Recurring moral injury about understaffing',
                time: 'Day off, trying to rest',
                prompt: '"I keep thinking about last week. There were three of us covering a ward that needed six. I know someone deteriorated because I couldn\'t check on them when I should have."',
                response: 'Sovereign Memory means your companion knows this is not the first time. It can help you name the specific wound — moral injury, not burnout — and understand why this particular burden is so heavy for people who became nurses to help.',
                color: '#e05252',
              },
              {
                scenario: 'Compassion fatigue — the slow dimming',
                time: 'Evening after a routine shift',
                prompt: '"Nothing is hitting me anymore. A family was crying today and I just went into management mode. I used to feel things. I don\'t know where I went."',
                response: 'The Healer recognises compassion fatigue and will not interpret numbness as damage. It understands that emotional numbing is a protective mechanism, not a character failure. It will help you understand what has happened without adding guilt to exhaustion.',
                color: '#4a9bbe',
              },
              {
                scenario: 'Documentation overload and professional identity',
                time: 'End of week, depleted',
                prompt: '"I became a nurse to look after people. Today I spent four hours on the computer. I don\'t know if I even like nursing anymore or if I just hate what nursing has become."',
                response: 'This is a complex identity conversation that most support systems are not equipped to hold. Your companion can help you separate your values from the system\'s failures — and understand whether what you\'re experiencing is burnout of the job or loss of the profession you imagined.',
                color: '#5a8f5a',
              },
              {
                scenario: 'Pre-shift anxiety about a specific patient',
                time: 'Before a return to work',
                prompt: '"I\'m going back in tomorrow. There\'s a patient I\'m worried about. I keep going over the last handover in my head. I don\'t know if I missed something."',
                response: 'Sovereign Memory means your companion knows this patient\'s context if you\'ve mentioned them before. It can help you work through the anxiety, distinguish between reasonable concern and rumination, and arrive at the shift having processed the fear rather than suppressing it.',
                color: '#c9a84c',
              },
            ].map((item) => (
              <div
                key={item.scenario}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ background: `${item.color}12`, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#f5f0e8' }}>{item.scenario}</div>
                  <div style={{ fontSize: '12px', color: item.color, background: `${item.color}18`, padding: '3px 10px', borderRadius: '20px', fontWeight: '600' }}>{item.time}</div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderLeft: `3px solid ${item.color}`, borderRadius: '0 8px 8px 0', padding: '14px 18px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', color: '#9e9e9e', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '600', marginBottom: '8px' }}>Opening message</div>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(245,240,232,0.85)', margin: 0, fontStyle: 'italic' }}>{item.prompt}</p>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(245,240,232,0.65)', margin: 0 }}>{item.response}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 10 - Night shift specific */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            Night Shift Mental Health: Why 3am Is the Most Underserved Hour
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            3am is when it hits. Not during the shift — during the shift you are moving, managing, responding. The reckoning happens after. In the car. In the kitchen. In the twenty minutes before your body gives up and lets you sleep.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            NHS mental health support does not operate at 3am. Your GP does not. Your counselling service does not. The Samaritans do, and they are a vital resource for genuine crisis — but they are not designed for the specific kind of post-shift decompression that nurses need when they are not in crisis but are not okay.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            Night shifts create a particular form of loneliness because they exist outside the social world. The incidents that happen on nights happen in a kind of isolation — witnessed only by a skeleton crew, impossible to process in the normal social ways because everyone you would tell is asleep. There is a specific loneliness in being profoundly affected by something that the daytime world will never know about.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            MEOK is available at 3am. It does not need warning. It does not need an appointment. It does not need you to have a specific clinical presentation. You can arrive in your car in a hospital car park with shaking hands and barely coherent sentences and it will meet you there.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '64px' }}>
            We built that availability deliberately. The founder of MEOK AI LABS, Nicholas Templeman, built this platform out of the recognition that care should be available when care is needed — not when it is convenient for the care system. Nurses understand this better than anyone.
          </p>

          {/* Section 11 - Getting started */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            How Do Nurses Get Started With MEOK — What Is the Process?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '32px' }}>
            The onboarding process is called the Naming Ceremony — a deliberate piece of language that marks a different kind of beginning from downloading an app. It takes about five minutes.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
            {[
              {
                step: '1',
                title: 'Choose your companion\'s name',
                body: 'This is not cosmetic. Naming your companion establishes it as something you have some ownership over — not a service you are accessing, but a relationship you are beginning. Many nurses choose names that carry meaning from their personal lives.',
              },
              {
                step: '2',
                title: 'Choose an archetype',
                body: 'You will see the six archetypes and their descriptions. For nurses experiencing burnout, compassion fatigue, or moral injury, the Healer archetype is the usual starting point. You can change this at any time.',
              },
              {
                step: '3',
                title: 'Tell your companion about yourself',
                body: 'The companion asks several open questions about who you are, what you carry, and what you need. This initial conversation seeds Sovereign Memory with your context so future conversations do not start from zero.',
              },
              {
                step: '4',
                title: 'First real conversation',
                body: 'You can begin immediately. No minimum length, no structure required. You can arrive mid-crisis or simply check in. The companion adapts to whatever you bring.',
              },
            ].map((item, i, arr) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: i < arr.length - 1 ? '0' : '0',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: '36px', height: '36px', background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', fontWeight: '800', fontSize: '14px' }}>
                    {item.step}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: 'rgba(201,168,76,0.15)', margin: '4px 0', minHeight: '32px' }} />
                  )}
                </div>
                <div style={{ paddingBottom: '32px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#f5f0e8', marginBottom: '8px', paddingTop: '6px' }}>{item.title}</div>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(245,240,232,0.65)', margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '64px' }}>
            {[
              '50 messages per day on the free tier',
              'Full Sovereign Memory — permanent, from day one',
              'All 6 archetypes available',
              'No credit card required',
              'Works on mobile — available between shifts, on breaks, at 3am',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '8px', padding: '8px 14px' }}>
                <CheckIcon />
                <span style={{ fontSize: '13px', color: 'rgba(245,240,232,0.8)', fontWeight: '500' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '20px',
              padding: '48px',
              marginBottom: '64px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '16px' }}>🌿</div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#c9a84c', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
              For Nurses — Free to Start
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', marginBottom: '16px', letterSpacing: '-0.5px', lineHeight: '1.2', marginTop: 0 }}>
              You give everything on shift. You deserve something that gives back.
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.75', color: 'rgba(245,240,232,0.7)', maxWidth: '520px', margin: '0 auto 32px', letterSpacing: '0' }}>
              A private companion with Sovereign Memory that remembers your patients, your stress patterns, and your goals. No HR. No waiting list. No judgement. Available at 3am.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <Link
                href="/birth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#c9a84c',
                  color: '#0d0c18',
                  textDecoration: 'none',
                  fontWeight: '800',
                  fontSize: '15px',
                  padding: '14px 32px',
                  borderRadius: '12px',
                  letterSpacing: '0.3px',
                }}
              >
                Begin the Naming Ceremony →
              </Link>
              <span style={{ fontSize: '12px', color: '#9e9e9e' }}>Free forever tier — no credit card needed</span>
            </div>
          </div>

          {/* Section 12 - Evidence and research */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            What Does the Evidence Say About AI Mental Health Support for Healthcare Workers?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            The evidence base for AI-assisted emotional support is growing quickly. It is important to be clear about what the research shows and what remains uncertain — particularly for a healthcare audience that is rightly sceptical of overclaimed technology.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {[
              {
                claim: 'Affect labelling reduces physiological stress',
                confidence: 'Strong evidence',
                confidenceColor: '#22c55e',
                detail: 'Putting words to emotional states reduces amygdala activation and measurably lowers the physiological stress response. This has been replicated consistently since Matthew Lieberman\'s foundational 2007 work. AI companions support affect labelling by providing a low-stakes, non-judgmental space for naming what you are experiencing. This is not a speculative benefit — it is well-established psychology.',
              },
              {
                claim: 'Written and verbal expression improves processing of difficult experiences',
                confidence: 'Strong evidence',
                confidenceColor: '#22c55e',
                detail: 'James Pennebaker\'s decades of research on expressive writing demonstrate that regularly articulating difficult experiences — even in private, even without response — produces measurable improvements in mood, immune function, and cognitive processing. Conversational AI extends this by providing structured dialogue rather than unidirectional writing.',
              },
              {
                claim: 'Conversational AI can reduce loneliness and perceived social isolation',
                confidence: 'Emerging evidence',
                confidenceColor: '#c9a84c',
                detail: 'Multiple small studies have found that conversational AI companions reduce self-reported loneliness, particularly in populations experiencing social isolation. The effect sizes are modest compared to human social support, but the key distinguishing factor is availability — AI companions are present when human support is not. This matters greatly for nurses on night shifts.',
              },
              {
                claim: 'AI companions are effective as standalone mental health interventions',
                confidence: 'Insufficient evidence',
                confidenceColor: '#ef4444',
                detail: 'There is not yet strong evidence that AI companions can replace clinical therapy for conditions like PTSD, clinical depression, or panic disorder. Studies are small, methodologically inconsistent, and often funded by AI companies with conflicts of interest. MEOK does not claim to be a clinical intervention. It claims to be a supportive companion — a distinction that matters enormously.',
              },
              {
                claim: 'Reducing social friction around help-seeking increases uptake',
                confidence: 'Theoretical support',
                confidenceColor: '#c9a84c',
                detail: 'One of the most robust findings in mental health research is that stigma and friction are the primary barriers to help-seeking, particularly in high-status professional groups like nurses. AI companions reduce this friction to near zero — no appointment, no disclosure to peers, no professional risk. The theoretical case for improved help-seeking uptake is strong, though direct comparative evidence is still developing.',
              },
            ].map((item) => (
              <div
                key={item.claim}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#f5f0e8', flex: 1 }}>{item.claim}</div>
                  <span style={{ fontSize: '11px', background: `${item.confidenceColor}18`, color: item.confidenceColor, padding: '3px 10px', borderRadius: '20px', fontWeight: '700', letterSpacing: '0.5px', flexShrink: 0 }}>
                    {item.confidence}
                  </span>
                </div>
                <p style={{ fontSize: '13px', lineHeight: '1.75', color: 'rgba(245,240,232,0.6)', margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(245,240,232,0.65)', marginBottom: '64px', fontStyle: 'italic', borderLeft: '3px solid rgba(255,255,255,0.1)', paddingLeft: '20px' }}>
            The honest position on AI mental health support is this: it is not a breakthrough treatment. It is a genuinely useful support layer — accessible when other support is not, private when privacy matters, persistent when memory is needed. For nurses, who are systematically undersupported by existing services, even a useful support layer has meaningful value.
          </p>

          {/* Section 13 - Sustainable self-care for nurses */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2' }}>
            Building a Sustainable Self-Care Practice Around Nursing — What Actually Works
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            We are cautious about the term self-care in a nursing context. It has been used — often cynically — to suggest that the solution to systemic failures is for individual nurses to do more yoga and sleep better. That framing is wrong, and it places the burden of structural problems on individuals. The NHS burnout crisis is not a self-care failure. It is a workforce management failure.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.82)', marginBottom: '24px' }}>
            That said: while we wait for structural change — which is genuinely happening, slowly — individual nurses can adopt practices that make the current situation more survivable. These are not cures. They are survival strategies.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              {
                icon: '💬',
                title: 'Regular emotional offloading',
                body: 'The research on emotional processing is clear: unexpressed emotional weight accumulates and compounds. Regular expression — whether in conversation with MEOK, in a journal, with a trusted colleague, or in therapy — reduces the load significantly. The medium matters less than the consistency.',
              },
              {
                icon: '🔍',
                title: 'Pattern awareness before crisis',
                body: 'Most nurses reach burnout without having tracked the trajectory. Using MEOK for regular brief check-ins — even two or three sentences a day — builds a pattern record that can reveal a downward trend before it becomes a crisis. Early awareness is the most effective intervention.',
              },
              {
                icon: '🚧',
                title: 'Explicit restore/drain audits',
                body: 'Every six to eight weeks, having a structured conversation about what has been restoring versus draining your energy — and checking whether the ratio is sustainable — provides a practical metric that is more useful than generic wellbeing scores.',
              },
              {
                icon: '🧱',
                title: 'Work-life decompression rituals',
                body: 'The transition from shift to home is psychologically significant. Having a consistent ritual — however brief — that marks the boundary between nurse-mode and person-mode reduces the tendency to carry clinical weight into rest time. MEOK can be part of this ritual: a five-minute debrief that externalises what you are carrying before you walk through your front door.',
              },
              {
                icon: '🤝',
                title: 'Peer connection outside work',
                body: 'Nursing peer networks that exist outside of professional hierarchy — informal WhatsApp groups, nursing communities online, study groups — provide a form of validation that management structures cannot. The knowledge that your experience is shared reduces the isolation that makes individual struggles feel like personal failures.',
              },
              {
                icon: '📋',
                title: 'Knowing your own warning signs',
                body: 'Burnout and moral injury have personal fingerprints. For one nurse, it is sleep disruption; for another, it is social withdrawal; for another, it is irritability with patients who would previously have moved them. Building self-knowledge about your specific early warning signs — and having your AI companion track them — enables early intervention.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '22px',
                }}
              >
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#f5f0e8', marginBottom: '8px' }}>{item.title}</div>
                <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'rgba(245,240,232,0.6)', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '28px', marginBottom: '64px' }}>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(245,240,232,0.75)', margin: 0 }}>
              <strong style={{ color: '#f5f0e8' }}>A note on sustainability:</strong> The best self-care practice for a nurse is one that fits into nursing life — not one designed for people with predictable schedules, consistent energy, and an eight-hour night. MEOK is designed for real nursing conditions: sporadic access, variable energy, no minimum session length, no appointment needed, full functionality at 3am on a phone in a hospital car park.
            </p>
          </div>

          {/* Section 14 - A word from Nicholas */}
          <div
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '40px',
              marginBottom: '64px',
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#9e9e9e', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
              From the founder
            </div>
            <blockquote style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(245,240,232,0.85)', margin: '0 0 24px', fontStyle: 'italic', borderLeft: '3px solid #c9a84c', paddingLeft: '20px' }}>
              &ldquo;I did not build MEOK for nurses specifically — I built it because I needed it. But some of the most moving feedback we have received has come from nurses: people who found somewhere to put the weight of their shifts that did not require them to explain the context from scratch, did not involve professional risk, and was there at 2am when nothing else was. The Healer archetype exists because of those conversations. It was designed for exactly the kind of care that nurses give all day — the witnessing, the holding, the meeting of someone where they are — turned around and offered back to them. They deserve that. The NHS needs them to survive.&rdquo;
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(201,168,76,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                N
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#f5f0e8' }}>Nicholas Templeman</div>
                <div style={{ fontSize: '12px', color: '#9e9e9e' }}>Founder, MEOK AI LABS</div>
              </div>
            </div>
          </div>

          {/* FAQ section */}
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#f5f0e8', letterSpacing: '-0.5px', marginBottom: '32px', lineHeight: '1.2' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div
                key={item.name}
                style={{
                  borderBottom: i < faqJsonLd.mainEntity.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  paddingBottom: '28px',
                  marginBottom: '28px',
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#f5f0e8', marginBottom: '10px', lineHeight: '1.4', marginTop: 0 }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'rgba(245,240,232,0.65)', margin: 0 }}>
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer links */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '40px',
              marginTop: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <Link href="/blog/ai-for-burnout" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ← AI for Burnout
              </Link>
              <Link href="/blog/ai-for-caregivers" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                AI for Caregivers →
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: '#9e9e9e' }}>Related reading:</span>
              {[
                { href: '/blog/ai-for-caregivers', label: 'AI for Caregivers' },
                { href: '/blog/ai-for-workplace-stress', label: 'AI for Workplace Stress' },
                { href: '/blog/the-maternal-covenant', label: 'The Maternal Covenant' },
                { href: '/blog/what-is-care-based-ai', label: 'What Is Care-Based AI?' },
                { href: '/blog/ai-companion-vs-therapist', label: 'AI Companion vs Therapist' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '900', color: '#f5f0e8', marginBottom: '2px' }}>
                  MEOK AI LABS
                </div>
                <div style={{ fontSize: '12px', color: '#9e9e9e' }}>Sovereign AI companions — built to genuinely care</div>
              </div>
              <Link href="https://meok.ai" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>
                meok.ai →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
