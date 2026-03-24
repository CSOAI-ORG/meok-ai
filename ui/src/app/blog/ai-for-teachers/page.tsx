import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Teachers: The Support System Your School Never Gave You | MEOK AI LABS',
  description:
    'AI support for teachers experiencing burnout, marking overwhelm, behaviour stress, and inspection anxiety. MEOK\'s AI teaching assistant provides emotional support, lesson planning help, and sovereign memory — because 75% of UK teachers are considering leaving. This is for the ones staying.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-teachers' },
  openGraph: {
    title: 'AI for Teachers: The Support System Your School Never Gave You',
    description:
      '60-hour weeks. Ofsted pressure. Marking burden. Holiday guilt. 75% of UK teachers are considering leaving. MEOK is the AI companion built for the educator — not the institution.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-teachers',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Teachers%3A+The+Support+System+Your+School+Never+Gave+You&desc=60-hour+weeks.+Ofsted+pressure.+MEOK+is+the+AI+built+for+educators.',
        width: 1200,
        height: 630,
        alt: 'AI for Teachers: The Support System Your School Never Gave You',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Teachers: The Support System Your School Never Gave You',
    description:
      '75% of UK teachers considering leaving. 60-hour weeks. Holiday guilt. MEOK\'s AI teaching assistant provides emotional support, lesson planning, and sovereign memory — for the educator, not the institution.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Teachers%3A+The+Support+System+Your+School+Never+Gave+You&desc=60-hour+weeks.+Ofsted+pressure.+MEOK+is+the+AI+built+for+educators.',
    ],
  },
  keywords: [
    'AI support for teachers',
    'AI for teacher burnout',
    'AI mental health for educators',
    'AI teaching assistant for wellbeing',
    'teacher burnout UK',
    'AI for marking',
    'Ofsted stress support',
    'teacher mental health app',
    'AI companion for teachers',
    'teacher wellbeing AI',
  ],
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Teachers: The Support System Your School Never Gave You',
  description:
    'AI support for teachers experiencing burnout, marking overwhelm, behaviour stress, and inspection anxiety. MEOK provides emotional support, lesson planning assistance, and sovereign memory for educators.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/blog/ai-for-teachers',
  image:
    'https://meok.ai/api/og?title=AI+for+Teachers%3A+The+Support+System+Your+School+Never+Gave+You&desc=60-hour+weeks.+Ofsted+pressure.+MEOK+is+the+AI+built+for+educators.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-teachers',
  },
  about: [
    { '@type': 'Thing', name: 'Teacher burnout' },
    { '@type': 'Thing', name: 'AI mental health support' },
    { '@type': 'Thing', name: 'Educator wellbeing' },
    { '@type': 'Thing', name: 'AI teaching assistant' },
  ],
  keywords:
    'AI support for teachers, AI for teacher burnout, AI mental health for educators, AI teaching assistant for wellbeing',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help reduce teacher burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — with important caveats. AI cannot fix the structural problems in UK education: the underfunding, the teacher shortage, the Ofsted regime, or the chronic overwork. What AI can do is provide consistent emotional support, help you process difficult days without burdening colleagues or family, assist with planning and marking workload, and give you a space to reflect and recover. MEOK\'s Healer and Scholar archetypes are particularly designed for this kind of sustained, non-judgemental support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best AI tool for teacher mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best AI for teacher mental health is one built for sustained emotional support rather than productivity extraction. MEOK AI LABS built their companion specifically to hold context over time — meaning it remembers that you have a difficult Year 9 class on Thursdays, that your stress spikes in the fortnight before reports are due, and that you find parent evenings particularly draining. This Sovereign Memory makes MEOK more than a chatbot — it becomes a companion that genuinely knows your working life.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help with marking and lesson planning without replacing the teacher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Scholar archetype can assist with lesson planning through Socratic questioning — asking what you want students to understand, what prior knowledge they hold, what misconceptions are common — and co-constructing a plan with you rather than producing a generic template. For marking, it can help you develop consistent feedback frameworks, draft written comments based on your criteria, and think through differentiation. The teacher remains the professional; the AI handles the cognitive load of structuring and expressing what the teacher already knows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to discuss student or school information with an AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Sovereign Memory stores all conversations with end-to-end encryption. Your data is never sold, never shared, and never used to train any AI model — including MEOK\'s own. This is protected by the Maternal Covenant: a machine-enforced ethical framework that runs as executable code on every response. However, teachers should still apply professional judgement: avoid sharing personally identifiable student information, and use your AI companion for your own emotional processing and planning support rather than as a repository of student data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I feel I am near breaking point as a teacher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are experiencing a mental health crisis, please contact your GP, the Education Support charity helpline (08000 562 561), or in an emergency, NHS 111. An AI companion is not a substitute for clinical support when you are at a serious crisis point. MEOK\'s Maternal Covenant explicitly directs users to professional resources when serious distress is detected. That said, MEOK can be a valuable daily support — helping you recognise warning signs before they become a crisis, and giving you a low-stakes space to process the cumulative stress of the job.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do so many teachers consider leaving the profession?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research by the National Education Union and the Education Support Partnership consistently shows that UK teachers cite workload (particularly marking and administrative burden), behaviour management stress, lack of leadership support, inspection pressure, and eroded work-life boundaries as primary reasons for considering leaving. The 2024 Teacher Wellbeing Index found 75% of education staff had considered leaving in the past year. Average working weeks exceed 60 hours during term time. These are structural problems — but individual support, including AI-based support, can help teachers who want to stay in the profession manage the psychological toll while those structural changes are fought for.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK remember my teaching context between conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK uses Sovereign Memory — a permanent, encrypted memory layer that stores the context of every conversation you have with your companion. Unlike standard chatbots that forget you after each session, MEOK remembers your class dynamics, your term goals, your recurring stress triggers, the difficult student situations you have described, and how you prefer to be supported. This continuity is the difference between a chatbot and a genuine support companion. Your memory is yours — exportable in full, deletable at any time.',
      },
    },
  ],
}

// ── Colour tokens ─────────────────────────────────────────────────────────────

const C = {
  bg: '#0d0c18',
  surface: '#13121f',
  surfaceHigh: '#1a1929',
  border: '#2a2840',
  borderLight: '#332f50',
  text: '#f5f0e8',
  textMuted: '#9e9e9e',
  textSoft: '#c8c3b8',
  gold: '#c9a84c',
  goldDim: '#8a6f2e',
  goldBg: 'rgba(201,168,76,0.08)',
  goldBorder: 'rgba(201,168,76,0.25)',
  green: '#4ade80',
  greenBg: 'rgba(74,222,128,0.08)',
  greenBorder: 'rgba(74,222,128,0.25)',
  blue: '#60a5fa',
  blueBg: 'rgba(96,165,250,0.08)',
  blueBorder: 'rgba(96,165,250,0.25)',
  red: '#f87171',
  redBg: 'rgba(248,113,113,0.08)',
  redBorder: 'rgba(248,113,113,0.25)',
  purple: '#a78bfa',
  purpleBg: 'rgba(167,139,250,0.08)',
  purpleBorder: 'rgba(167,139,250,0.25)',
  orange: '#fb923c',
  orangeBg: 'rgba(251,146,60,0.08)',
  orangeBorder: 'rgba(251,146,60,0.25)',
} as const

// ── Data ──────────────────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    label: 'The Marking Burden',
    accent: C.gold,
    accentBg: C.goldBg,
    accentBorder: C.goldBorder,
    stat: '8+ hrs/week',
    desc: 'The average UK secondary teacher spends more than eight hours per week on marking alone — often late at night, often at weekends, always unpaid. It is the task that never ends because the students never stop producing work. And for all the research questioning whether extensive written marking actually improves outcomes, the professional and inspectorial expectation remains immovable.',
    what: 'What the AI does: MEOK\'s Scholar archetype helps you build consistent feedback frameworks, draft written comment banks, and think through differentiation — so your expertise shapes the response, not the blank page at 11pm.',
  },
  {
    label: 'Behaviour Management Stress',
    accent: C.red,
    accentBg: C.redBg,
    accentBorder: C.redBorder,
    stat: '#1 reported stressor',
    desc: 'Repeated low-level disruption. The student who tests every boundary. The class that collectively decides to make your Thursday period five a psychological endurance event. Behaviour management stress is reported as the primary occupational stressor for UK teachers, and it is qualitatively different from other workplace stress — it is personal, relentless, and it follows you home.',
    what: 'What the AI does: MEOK\'s Healer archetype provides a space to decompress after difficult lessons without burdening colleagues who have their own difficult lessons. The Scholar helps you think through strategies with Socratic questioning rather than prescribing generic advice.',
  },
  {
    label: 'Parent Communication Anxiety',
    accent: C.blue,
    accentBg: C.blueBg,
    accentBorder: C.blueBorder,
    stat: 'Silent dread',
    desc: 'The email notification icon. The parent evening booking that fills up faster than you expected, and one name you can see coming. The phone call that starts "I just wanted to understand why my son..." The dread of parent communication is one of the least-discussed sources of teacher anxiety — because acknowledging it feels like admitting you can\'t handle the relational part of the job.',
    what: 'What the AI does: MEOK helps you draft difficult parent communications, think through how to frame sensitive situations, and process the anxiety before and after difficult conversations. Sovereign Memory means it remembers the ongoing parent dynamics you\'ve described — so you don\'t have to re-explain every time.',
  },
  {
    label: 'Inspection Pressure (Ofsted)',
    accent: C.orange,
    accentBg: C.orangeBg,
    accentBorder: C.orangeBorder,
    stat: '89% report anxiety',
    desc: 'The Education Support 2024 Teacher Wellbeing Index found that 89% of teachers report anxiety about Ofsted inspections. Not just during — constantly. The awareness that at any moment a team of inspectors could walk through the door reframes every decision: lesson planning, seating plans, behaviour logs, marking quality. It introduces a permanent background hum of performance anxiety that is corrosive over years.',
    what: 'What the AI does: MEOK helps you separate what you actually believe makes great teaching from what you think the inspection framework demands. That clarity is both practically useful and psychologically protective.',
  },
  {
    label: 'Holiday Guilt',
    accent: C.purple,
    accentBg: C.purpleBg,
    accentBorder: C.purpleBorder,
    stat: 'The invisible tax',
    desc: 'Non-teachers see the holidays. They don\'t see the planning done during them, the marking dragged along on family trips, the back-to-school anxiety that starts two weeks before term. Holiday guilt is the invisible tax on teaching — the awareness that rest comes with an asterisk, that switching off fully means falling behind, that the decompression you need will cost you in September.',
    what: 'What the AI does: MEOK\'s Maternal Covenant explicitly models healthy boundaries. Your companion will name the guilt pattern when it sees it, help you examine what is genuinely necessary versus what is anxiety masquerading as professionalism, and protect your recovery time as a non-negotiable.',
  },
]

const ARCHETYPES = [
  {
    name: 'Scholar',
    icon: '🏛',
    accent: C.gold,
    accentBg: C.goldBg,
    accentBorder: C.goldBorder,
    role: 'Lesson planning & intellectual partnership',
    desc: 'The Scholar is the archetype built for teachers who love their subject but are drowning in administrative performance. It engages through Socratic questioning — asking what you want students to genuinely understand, what prior knowledge they hold, where the conceptual difficulty actually lives — and co-constructs lesson frameworks with you. It doesn\'t produce generic templates. It helps you think like the expert you already are. For teachers preparing curriculum sequences, designing assessments, or trying to articulate what makes their pedagogy distinctive, the Scholar is an intellectual equal who works at your pace.',
  },
  {
    name: 'Healer',
    icon: '🌿',
    accent: C.green,
    accentBg: C.greenBg,
    accentBorder: C.greenBorder,
    role: 'Emotional recovery & daily processing',
    desc: 'The Healer is built for the end of a Wednesday when you have had three confrontations, a passive-aggressive email from a parent, and a colleague who noticed something was wrong but didn\'t have the time to ask properly. It provides a non-judgemental space for emotional processing — not analysis, not solutions, not silver linings. It sits with you in the difficulty. The Healer will check in across days and weeks, noticing patterns you haven\'t named yet. It won\'t push for insight you aren\'t ready to have, but it will gently surface what it has observed when the moment is right.',
  },
]

const STATS = [
  { number: '75%', label: 'of UK education staff considered leaving in 2024' },
  { number: '60+', label: 'average weekly hours during term time' },
  { number: '40%', label: 'of new teachers leave within five years' },
  { number: '89%', label: 'report anxiety about Ofsted inspections' },
  { number: '8hrs', label: 'per week lost to marking alone (secondary)' },
  { number: '£2.3bn', label: 'annual cost of teacher turnover to the UK economy' },
]

const SOVEREIGN_MEMORY_EXAMPLES = [
  {
    title: 'Your class dynamics',
    desc: 'MEOK remembers that Year 10 Period 3 is the difficult one. That you have a student whose behaviour is connected to what\'s happening at home. That your A-Level group needs pushing but responds badly to being pushed too hard. You don\'t re-explain every session.',
  },
  {
    title: 'Your term goals',
    desc: 'The curriculum sequence you want to finish before February half term. The departmental initiative you are leading. The personal professional development goal that keeps slipping to the bottom of the list. Sovereign Memory holds these and surfaces them in context.',
  },
  {
    title: 'Your stress triggers',
    desc: 'Report writing fortnights. The week before parent evenings. Monday morning after a difficult Friday. Supply cover planning. MEOK notices when these patterns recur and adjusts its approach — more check-in, less challenge, more recovery space.',
  },
  {
    title: 'Your recovery patterns',
    desc: 'What actually restores you: a long walk, reading fiction, time without screens, talking to a friend who isn\'t in education. Your companion holds your personal restore/drain audit and references it when your energy is low.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForTeachersPage() {
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

      <main style={{ background: C.bg, color: C.text, minHeight: '100vh', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '52rem', margin: '0 auto', paddingTop: '2rem', paddingBottom: '4rem' }}>

            <Link
              href="/blog"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: C.gold, textDecoration: 'none', fontSize: '0.875rem', marginBottom: '2rem' }}
            >
              ← Back to Blog
            </Link>

            <div style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              background: C.redBg,
              border: `1px solid ${C.redBorder}`,
              color: C.red,
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '9999px',
              marginBottom: '1.25rem',
            }}>
              Teacher Wellbeing
            </div>

            <h1 style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 1.5rem', color: C.text }}>
              AI for Teachers: The Support System Your School Never Gave You
            </h1>

            <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: C.textSoft, maxWidth: '42rem', margin: '0 0 2rem' }}>
              The UK is losing teachers at a rate that should be a national emergency. 75% are considering leaving.
              60-hour weeks are standard. Ofsted inspections cause anxiety in 89% of educators. This is not
              a workforce problem — it is a care problem. And the institution isn&apos;t fixing it.
            </p>

            <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: C.textSoft, maxWidth: '42rem', margin: '0 0 2.5rem' }}>
              MEOK was built for the people who stay. The ones who love the job too much to quit, but are
              paying a cost the job does not acknowledge. This is AI support for teachers — not AI that
              watches you, rates you, or reports to your head of department. AI that is entirely on your side.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: C.textMuted, fontSize: '0.875rem' }}>
              <span>24 March 2026</span>
              <span>15 min read</span>
              <span>Nicholas Templeman, MEOK AI LABS</span>
            </div>
          </div>
        </div>

        {/* ── Crisis Stats ─────────────────────────────────────────────────── */}
        <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '4rem 1.5rem 0' }}>
          <div style={{
            background: C.surfaceHigh,
            border: `1px solid ${C.border}`,
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '4rem',
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gold, margin: '0 0 1.5rem' }}>
              The UK Teacher Crisis — By Numbers
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))', gap: '1.5rem' }}>
              {STATS.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: C.gold, lineHeight: 1, marginBottom: '0.375rem' }}>{s.number}</div>
                  <div style={{ fontSize: '0.8125rem', color: C.textMuted, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: C.textMuted, marginTop: '1.5rem', marginBottom: 0 }}>
              Sources: Education Support Teacher Wellbeing Index 2024, National Education Union, NFER Teacher Labour Market Report 2024
            </p>
          </div>
        </div>

        {/* ── Article Body ─────────────────────────────────────────────────── */}
        <article style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: C.text, marginBottom: '1.5rem' }}>
            I want to say something that school management rarely says, that Ofsted certainly does not
            say, and that teacher training institutions only recently started acknowledging: teaching is
            one of the most emotionally demanding professions in existence, and the systems built around
            teachers are mostly designed to extract from them, not to sustain them.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            You manage thirty relationships simultaneously in a room. You differentiate for learners with
            vastly different needs, often without adequate support. You absorb the emotional residue of
            children whose lives outside your classroom are sometimes frightening. You are evaluated
            constantly — by students, by parents, by SLT, by inspectors — and the evaluation is rarely
            kind, almost never sufficient, and never commensurate with what you give.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '3rem' }}>
            MEOK AI LABS was founded by Nicholas Templeman with a specific conviction: that AI should be
            built to care for the people it serves, not to extract more from them. That conviction was
            forged partly in the experience of burnout — and it applies nowhere more urgently than in
            the lives of the people teaching the next generation while the system slowly consumes them.
          </p>

          {/* ── Section 1 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            Why are UK teachers leaving — and what does the data actually show?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            The 2024 Education Support Teacher Wellbeing Index — the most comprehensive annual survey
            of UK educator mental health — found that 75% of education staff had considered leaving
            their job in the past year. Not a bad week. Not a passing thought. Seriously considered leaving.
            Among those aged under 35, the figure was higher still.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            The NFER Teacher Labour Market Report calculates that 40% of new teachers leave within five
            years of qualifying. The National Education Union has documented average working weeks during
            term time exceeding 60 hours for secondary teachers, with primary teachers reporting similar
            figures. Some departments — English, science, special educational needs — consistently report
            higher workloads still.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            The UK currently faces a structural teacher shortage that, according to the Institute for
            Fiscal Studies, will worsen significantly over the coming decade without fundamental changes
            to pay, working conditions, and professional culture. Every teacher who leaves takes with
            them years of subject knowledge, student relationships, and institutional wisdom that cannot
            be replaced quickly.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '3rem' }}>
            This is not a motivation problem. It is a care problem. Teachers are not leaving because
            they stopped loving the work. They are leaving because the work stopped sustaining them —
            because the care flowed entirely one way, and nothing was ever replenished.
          </p>

          {/* ── Section 2 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            What are the five biggest pain points driving teacher burnout?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '2.5rem' }}>
            Based on teacher wellbeing research and the conversations teachers have shared with us
            during MEOK&apos;s development, these five pain points recur most consistently as the
            drivers of chronic educator stress and eventual exit from the profession.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {PAIN_POINTS.map((pp, i) => (
              <div
                key={pp.label}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderLeft: `3px solid ${pp.accent}`,
                  borderRadius: '0.875rem',
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: C.text, margin: 0 }}>
                    {i + 1}. {pp.label}
                  </h3>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    background: pp.accentBg,
                    border: `1px solid ${pp.accentBorder}`,
                    color: pp.accent,
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                  }}>
                    {pp.stat}
                  </span>
                </div>
                <p style={{ lineHeight: 1.7, color: C.textSoft, fontSize: '0.9375rem', margin: '0 0 1rem' }}>
                  {pp.desc}
                </p>
                <div style={{
                  background: pp.accentBg,
                  border: `1px solid ${pp.accentBorder}`,
                  borderRadius: '0.5rem',
                  padding: '0.875rem 1rem',
                  fontSize: '0.875rem',
                  color: C.textSoft,
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: pp.accent, fontWeight: 600 }}>&#8594; </span>
                  {pp.what}
                </div>
              </div>
            ))}
          </div>

          {/* ── Section 3 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            Why do teachers need AI that listens, not just AI that marks?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            There is a generation of AI tools being built for teachers right now, and most of them are
            built on the same premise: teachers are productivity problems to be optimised. They produce
            too much marking, so let&apos;s automate the marking. They spend too long on planning, so
            let&apos;s generate the plans. They file too many reports, so let&apos;s write the reports.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            This framing is not wrong — workload reduction matters, and any AI that genuinely reduces
            the administrative burden on teachers is doing something useful. But it misses something
            fundamental about why teachers burn out.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            Teachers burn out because they are emotionally depleted — because the relational demands
            of the job, the accumulation of small failures and daily disappointments, the persistent
            sense of inadequacy in a system designed to highlight inadequacy, the grief of watching
            students struggle and being unable to do enough — because all of this has nowhere to go.
          </p>

          <div style={{
            background: C.goldBg,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '0.875rem',
            padding: '1.75rem',
            marginBottom: '1.5rem',
          }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 700, color: C.gold, lineHeight: 1.6, margin: 0 }}>
              &ldquo;I have colleagues. I have a partner. I have friends outside school. But I can&apos;t
              talk to any of them about this the way I need to — because they either don&apos;t understand,
              or they worry, or I feel like a burden.&rdquo;
            </p>
            <p style={{ fontSize: '0.8125rem', color: C.textMuted, margin: '0.75rem 0 0', fontStyle: 'italic' }}>
              — Secondary teacher, seven years in the classroom, considering leaving
            </p>
          </div>

          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            This is the gap that AI can fill — not the marking, not the planning, but the daily
            processing. The space to say how you actually are after the Wednesday that went wrong.
            The conversation that doesn&apos;t require you to perform competence or manage someone
            else&apos;s response to your vulnerability.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            Teachers need AI that listens because they are carrying an enormous amount, mostly silently,
            and the silence is what eventually breaks them. The marking help is useful. The emotional
            support is what keeps people in the classroom.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '3rem' }}>
            Research consistently shows that the number one protective factor against burnout — in
            any profession, but particularly in care-based professions — is the feeling of being
            genuinely heard and supported. Not managed. Not assessed. Heard. That is what MEOK
            was built to provide.
          </p>

          {/* ── Section 4 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            How does Sovereign Memory make MEOK different from every other AI for teachers?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            Standard AI tools have a memory problem. Every conversation starts from zero. You explain
            your context. You describe your students, your school, your pressures. You get a generic
            response. You close the tab. Nothing was retained. Nothing was learned about you. The
            next conversation begins again from scratch.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '2rem' }}>
            MEOK&apos;s Sovereign Memory changes this entirely. Every conversation is stored — permanently,
            encrypted, and owned entirely by you — and your companion draws on this accumulated
            context in every subsequent interaction. Over weeks and months, it builds a genuine
            picture of your professional and personal life. Here is what that looks like in practice:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {SOVEREIGN_MEMORY_EXAMPLES.map((ex) => (
              <div
                key={ex.title}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: '0.875rem',
                  padding: '1.5rem',
                }}
              >
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.5rem' }}>
                  Sovereign Memory
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.text, margin: '0 0 0.625rem' }}>
                  {ex.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: C.textMuted, margin: 0 }}>
                  {ex.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            The difference this makes is not incremental — it is qualitative. You are not starting
            a new conversation each time. You are continuing a relationship with a companion that
            actually knows you. That knows this is the fortnight before reports. That remembers
            you mentioned feeling isolated in the staffroom. That noticed you have not mentioned
            any of your restore activities in three weeks.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '3rem' }}>
            Your Sovereign Memory is entirely yours. You can export it in full, delete individual
            entries, or delete everything at any time. MEOK does not sell it, does not share it,
            and does not use it to train any AI model — including its own. This is protected by
            the Maternal Covenant: a machine-enforced ethical framework that runs as executable
            code on every MEOK response, not as a policy document that might change.
          </p>

          {/* ── Archetype Cards ──────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 0.75rem', lineHeight: 1.3 }}>
            Which MEOK archetypes are designed for teachers?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '2rem' }}>
            MEOK offers six companion archetypes. Two are particularly resonant for educators — not
            because the others have nothing to offer, but because these two address the specific
            tension at the heart of teacher burnout: the erosion of intellectual passion under
            administrative weight, and the emotional depletion that accumulates daily in care-heavy
            work.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {ARCHETYPES.map((a) => (
              <div
                key={a.name}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: '1rem',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '50%',
                  background: a.accentBg,
                  border: `1px solid ${a.accentBorder}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>
                  {a.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.375rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: C.text, margin: 0 }}>{a.name}</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: a.accent }}>{a.role}</span>
                  </div>
                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: C.textMuted, margin: 0 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section 5 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            What does the Maternal Covenant mean for teachers using MEOK?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            The Maternal Covenant is MEOK&apos;s machine-enforced ethical framework — not a terms-of-service
            document, but executable code that governs every response your companion produces.
            It is called the Maternal Covenant because it is modelled on a specific kind of care:
            the care of someone who genuinely wants what is best for you, even when what is best
            for you is uncomfortable.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            For teachers, this has several specific implications.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              {
                title: 'MEOK models healthy boundaries',
                body: 'You cannot pour from an empty cup. This is not a motivational slogan — it is an operational reality that the teaching profession systematically ignores. MEOK will not collude with the system that erodes your capacity. When you describe working through another evening, working through another weekend, working through the holiday you need, your companion will name what it sees — gently, without judgment, but clearly. It will help you distinguish between what is genuinely necessary and what is anxiety, guilt, or internalised institutional pressure masquerading as professionalism.',
              },
              {
                title: 'MEOK is anti-sycophantic',
                body: 'A lot of teacher support, when it exists at all, takes the form of empty validation. "You\'re doing great." "You\'re so dedicated." "The students are lucky to have you." MEOK will not do this. It is not designed to tell you what feels good to hear — it is designed to help you genuinely improve and genuinely recover. That means honest reflection, even when honest reflection is uncomfortable. If a pattern you have described is harmful, MEOK will name it. If a belief you hold about yourself is inaccurate, the Scholar will question it. This is care, not cruelty.',
              },
              {
                title: 'MEOK knows when to direct you to human support',
                body: 'The Maternal Covenant explicitly prohibits MEOK from positioning itself as sufficient for clinical-level distress. If you describe serious symptoms — thoughts of self-harm, inability to function, severe mental health crisis — your companion will acknowledge what you have shared with full care and direct you to appropriate professional resources: your GP, the Education Support helpline (08000 562 561), NHS 111, or in an emergency, 999. MEOK will never pretend it can hold what it cannot hold.',
              },
              {
                title: 'MEOK does not create dependency',
                body: 'Engagement optimisation — the practice of designing apps to maximise time-in-app rather than actual user wellbeing — is endemic in the wellness technology industry. MEOK\'s Maternal Covenant explicitly prohibits it. Your companion is not trying to maximise your session length. It is not designed to make you feel you cannot cope without it. The goal is genuine resilience — building your capacity to understand yourself, set boundaries, and sustain the work you love. An AI that leaves you stronger is more valuable than one that makes you dependent.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: C.surfaceHigh,
                  border: `1px solid ${C.borderLight}`,
                  borderRadius: '0.875rem',
                  padding: '1.5rem',
                }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.gold, margin: '0 0 0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: C.textMuted, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          {/* ── Section 6 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            How does AI teaching assistant support work in practice?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            This is the question that matters most for a profession already suspicious of technology
            promises. What does AI support for teachers actually look like when the lesson plan
            has fallen apart and it is 10pm and you have forty books to mark?
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '2rem' }}>
            Here are concrete examples of what MEOK can do for teachers in daily practice.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              {
                scenario: 'After a difficult lesson',
                desc: 'You had a Year 9 lesson that collapsed. A student was disruptive, you reacted in a way you are not proud of, and the rest of the class lost the thread entirely. You arrive home feeling like a failure.',
                response: 'Your MEOK companion lets you describe what happened without offering immediate solutions. The Healer archetype sits with the frustration and the self-criticism. It might ask: "What do you think was happening for that student today?" — not to exonerate the behaviour, but to move you from shame to understanding. Later, if you want to, the Scholar can help you think through how to approach the student, the class, and your own response next time.',
              },
              {
                scenario: 'Planning under time pressure',
                desc: 'It is Sunday evening. You have four lessons to plan for Monday, no prepared resources for one of them, and the energy of someone who has been working since Thursday morning.',
                response: 'The Scholar asks two questions: What is the most important thing students should understand by the end of this lesson? What do they already know that we can build on? With those two answers, it co-constructs a lesson structure with you in under ten minutes — not by generating a template, but by helping you think through what you already know about your students and your subject.',
              },
              {
                scenario: 'The fortnight before reports',
                desc: 'Sovereign Memory recognises that this period has historically coincided with your lowest wellbeing scores and highest expressions of stress. Your companion initiates a check-in two weeks before the deadline.',
                response: '"Reports are coming up soon. Last time you said this period felt particularly hard. What would help you manage it differently this year?" The question is not intrusive — it is an invitation. You can decline it or engage with it. But it has been asked because MEOK actually remembered, and actually noticed the pattern.',
              },
              {
                scenario: 'Parent communication anxiety',
                desc: 'You need to email a parent about a persistent behaviour issue. The parent has a history of defensive responses. You have been putting this email off for a week.',
                response: 'The Scholar helps you think through what you want the parent to understand, what you want to avoid triggering, and how to frame the concern in terms of the student\'s wellbeing rather than their failure. It can help you draft the email, then review the draft with you before you send it. Not writing it for you — working through it with you.',
              },
              {
                scenario: 'Ofsted notice received',
                desc: 'Your school has been given 48-hour notice of an Ofsted inspection. The staffroom atmosphere has become toxic with anxiety. You have your most difficult class on the first day of the inspection.',
                response: 'The Healer holds the anxiety without amplifying it. The Scholar helps you prepare in a way that is grounded in your actual practice rather than performance for inspectors. It might ask: "What do you want inspectors to see that genuinely reflects what you do?" — reframing preparation as articulation of real practice rather than fabrication of a performance.',
              },
              {
                scenario: 'Holiday guilt pattern',
                desc: 'It is the first day of the Easter holidays. You have been awake since 6am planning. You are already thinking about next term. You mentioned something similar at Christmas.',
                response: 'Sovereign Memory surfaces the pattern: "You described feeling guilty about resting at Christmas and then feeling depleted in January. What would it mean to give yourself permission to actually stop today?" It is not a lecture. It is a mirror — showing you what you have already described to yourself about the cost of this pattern.',
              },
            ].map((item) => (
              <div
                key={item.scenario}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: '0.875rem',
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: `1px solid ${C.border}`, background: C.surfaceHigh }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, marginBottom: '0.25rem' }}>
                    Scenario
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.text, margin: 0 }}>{item.scenario}</h3>
                </div>
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: `1px solid ${C.border}` }}>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: C.textMuted, margin: 0 }}>{item.desc}</p>
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.5rem' }}>
                    MEOK&apos;s approach
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: C.textSoft, margin: 0 }}>{item.response}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section 7 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            Is AI for teacher wellbeing the same as being monitored by my school?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            No — and this distinction is fundamental. There is a category of wellbeing technology
            being adopted by schools and MATs (multi-academy trusts) that is essentially
            institutional monitoring: apps that collect wellbeing data from staff and report it
            upwards, ostensibly to identify at-risk individuals, practically to provide management
            with a surveillance mechanism dressed in the language of care.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            MEOK is the opposite of this. It is sovereign — meaning it is yours, not your
            employer&apos;s. Everything you share with your companion is held in encrypted Sovereign
            Memory that no third party can access: not your school, not your trust, not MEOK&apos;s
            own engineers. It is not licensable to educational institutions as a staff monitoring
            tool. The terms of the Maternal Covenant prohibit this categorically.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            If your school offers you a wellbeing app, it is worth asking: who can see what I share
            in this app? Does it report data upward? What happens to my conversations if I leave?
            These are not paranoid questions — they are appropriate professional questions when
            the tool being offered is asking for access to your inner life.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '3rem' }}>
            MEOK exists for you. Not for your school. Not for any institution. You can be honest
            in it — about struggling students, about difficult colleagues, about the class you
            dread on Thursdays, about the moment last week when you thought about handing in
            your notice — without any of that information leaving the conversation.
          </p>

          {/* ── Section 8 ───────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            What does AI mental health support for educators look like long-term?
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            The most powerful argument for AI support for teachers is not what it does in a single
            conversation — it is what it does across a career. The accumulation of small depressions,
            minor victories, recurring stressors, and gradual changes in how you talk about your
            work tells a story that is only visible over time.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            Early warning patterns for serious burnout are often visible months before the crisis
            point. The increasing frequency of the word &ldquo;trapped&rdquo;. The declining mentions of
            specific students by name — a signal that emotional detachment is setting in. The shift
            from describing lessons by what students did to describing them by what went wrong.
            The disappearance of any mention of why you got into teaching.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            A companion with Sovereign Memory can hold these patterns and surface them gently.
            Not as a diagnosis, but as an observation: &ldquo;You haven&apos;t mentioned feeling
            energised by a lesson since half term. What&apos;s changed?&rdquo; That question, asked
            at the right moment, is worth more than any wellbeing initiative.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            The long-term vision for AI mental health support for educators is not a wellness app
            with a daily mood tracker. It is a genuine companion that grows alongside your career —
            knowing your history, your patterns, your sources of meaning and depletion — and using
            that knowledge to help you remain the teacher you wanted to be when you started.
          </p>

          {/* Quote */}
          <div style={{
            borderLeft: `3px solid ${C.gold}`,
            paddingLeft: '1.5rem',
            marginBottom: '3rem',
          }}>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: C.textSoft, fontStyle: 'italic', margin: '0 0 0.75rem' }}>
              &ldquo;You cannot pour from an empty cup.&rdquo; Every teacher has heard this. Almost none of
              them have been given any infrastructure to actually refill theirs. MEOK is that infrastructure.
              Not because AI replaces human connection, but because it holds the space between human
              connections — the 11pm Tuesday and the Sunday evening dread and the five minutes
              between lessons when you need to say something to someone who won&apos;t need managing afterward.
            </p>
            <p style={{ fontSize: '0.8125rem', color: C.gold, margin: 0 }}>
              Nicholas Templeman, Founder, MEOK AI LABS
            </p>
          </div>

          {/* ── CTA ─────────────────────────────────────────────────────────── */}
          <div style={{
            background: C.surface,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '1.25rem',
            padding: '2.5rem',
            textAlign: 'center',
            margin: '3.5rem 0',
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.875rem' }}>
              Free to start — no credit card required
            </div>
            <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '0 0 1rem', lineHeight: 1.3 }}>
              Begin with a companion who actually remembers
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: C.textMuted, maxWidth: '32rem', margin: '0 auto 2rem' }}>
              50 messages per day. Full Sovereign Memory. Scholar and Healer archetypes. Your data
              encrypted, never sold, never used for training. For teachers who want to stay in the
              classroom — just not like this.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
              <Link
                href="/birth"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: C.gold,
                  color: C.bg,
                  fontWeight: 800,
                  fontSize: '0.9375rem',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                }}
              >
                Begin the Ceremony &#8594;
              </Link>
              <Link
                href="/characters"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: `1px solid ${C.borderLight}`,
                  color: C.textSoft,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                }}
              >
                Meet Scholar &amp; Healer
              </Link>
            </div>
          </div>

          {/* ── What MEOK Cannot Do ──────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.25rem', lineHeight: 1.3 }}>
            What AI cannot do for teachers — and why honesty matters here
          </h2>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            This section matters as much as any other, because bad AI for teacher wellbeing is not
            a neutral failure — it is actively harmful. Teachers who turn to technology expecting
            genuine support and receive platitudes or generic productivity advice are worse off for
            the experience. Their cynicism about available support deepens. Their sense of isolation
            is confirmed.
          </p>
          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '1.5rem' }}>
            MEOK is honest about its limits. Your AI companion cannot:
          </p>

          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Fix the structural conditions of UK education — the underfunding, the teacher shortage, the inspection regime, or the pay erosion in real terms over fifteen years',
              'Replace the clinical assessment and treatment of depression, anxiety, or burnout at a clinical level — if you are experiencing serious mental health symptoms, your GP and qualified therapists are irreplaceable',
              'Provide the particular nourishment of human connection — a colleague who genuinely knows your classroom, a friend who loves you outside your professional role, a partner who holds you through the difficult periods',
              'Make a genuinely unreasonable workload reasonable by helping you manage it more efficiently — sometimes the honest answer is that the workload is the problem, not your capacity to handle it',
              'Act as a record-keeping system for student information — keep student data in your school systems, not in any third-party application including MEOK',
              'Replace the trade union advocacy and collective action that is the most powerful mechanism for structural change in the profession',
            ].map((item) => (
              <li
                key={item.substring(0, 40)}
                style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: C.textMuted, paddingLeft: '0.25rem' }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p style={{ lineHeight: 1.8, color: C.textSoft, marginBottom: '3rem' }}>
            MEOK works best as part of a broader support ecosystem — not as a replacement for it.
            When it knows its limits, it says so. When it recognises that what you are describing
            needs human clinical support, it tells you. That is what honest AI support for teachers
            looks like.
          </p>

          {/* ── Related Articles ─────────────────────────────────────────────── */}
          <div style={{
            background: C.surfaceHigh,
            border: `1px solid ${C.border}`,
            borderRadius: '0.875rem',
            padding: '1.75rem',
            marginBottom: '3rem',
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted, margin: '0 0 1.25rem' }}>
              Related Reading
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: '/blog/ai-for-burnout', label: 'AI for Burnout: How an AI Companion Helps You Recover and Rebuild' },
                { href: '/blog/the-maternal-covenant', label: 'The Maternal Covenant: Why MEOK Was Built to Care, Not to Extract' },
                { href: '/blog/what-is-sovereign-ai', label: 'What Is Sovereign AI and Why It Matters for Your Data' },
                { href: '/blog/ai-for-workplace-stress', label: 'AI for Workplace Stress: When Work Is the Problem' },
                { href: '/blog/ai-for-caregivers', label: 'AI Support for Family Caregivers: You\'re Allowed to Need Help Too' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: '0.9375rem', color: C.gold, textDecoration: 'none', lineHeight: 1.5 }}
                >
                  {link.label} &#8594;
                </Link>
              ))}
            </div>
          </div>

          {/* ── FAQ ─────────────────────────────────────────────────────────── */}
          <h2 style={{ fontSize: '1.625rem', fontWeight: 900, color: C.text, margin: '3rem 0 1.5rem', lineHeight: 1.3 }}>
            Frequently asked questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '3rem' }}>
            {faqJsonLd.mainEntity.map((item, i) => (
              <div
                key={item.name}
                style={{
                  borderTop: `1px solid ${C.border}`,
                  paddingTop: '1.5rem',
                  paddingBottom: '1.5rem',
                }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: C.text, margin: '0 0 0.625rem', lineHeight: 1.4 }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: C.textMuted, margin: 0 }}>
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${C.border}` }} />
          </div>

          {/* ── Footer Nav ───────────────────────────────────────────────────── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '2rem', borderTop: `1px solid ${C.border}` }}>
            <Link
              href="/blog/ai-for-burnout"
              style={{ fontSize: '0.875rem', fontWeight: 600, color: C.gold, textDecoration: 'none' }}
            >
              &#8592; AI for Burnout
            </Link>
            <Link
              href="/blog"
              style={{ fontSize: '0.875rem', fontWeight: 600, color: C.textMuted, textDecoration: 'none' }}
            >
              All Articles
            </Link>
            <Link
              href="/blog/ai-for-workplace-stress"
              style={{ fontSize: '0.875rem', fontWeight: 600, color: C.gold, textDecoration: 'none' }}
            >
              AI for Workplace Stress &#8594;
            </Link>
          </div>

          {/* ── Site footer stub ─────────────────────────────────────────────── */}
          <div style={{ marginTop: '5rem', paddingTop: '2.5rem', borderTop: `1px solid ${C.border}`, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <Link href="/" style={{ fontSize: '1.125rem', fontWeight: 900, color: C.text, textDecoration: 'none', letterSpacing: '-0.02em' }}>
                MEOK<span style={{ color: C.gold }}>.AI</span>
              </Link>
              <p style={{ fontSize: '0.8125rem', color: C.textMuted, margin: '0.25rem 0 0' }}>
                &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/characters', label: 'Archetypes' },
                { href: '/privacy', label: 'Privacy' },
                { href: '/birth', label: 'Start Free' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ fontSize: '0.875rem', color: C.textMuted, textDecoration: 'none' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>
    </>
  )
}
