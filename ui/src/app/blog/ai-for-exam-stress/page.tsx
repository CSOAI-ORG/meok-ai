import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Support for Exam Stress: Calm, Focused and Ready to Perform | MEOK AI LABS',
  description:
    'How AI companions help students with exam anxiety — study planning, panic before exams, imposter syndrome, sleep, failure and revision. UK-focused guide from MEOK.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-exam-stress' },
  openGraph: {
    title: 'AI Support for Exam Stress: Calm, Focused and Ready to Perform',
    description:
      'How AI companions help students with exam anxiety — study planning, panic before exams, imposter syndrome, sleep, failure and revision. UK-focused guide from MEOK.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-exam-stress',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Support+for+Exam+Stress%3A+Calm%2C+Focused+and+Ready+to+Perform&desc=How+AI+companions+help+students+with+exam+anxiety',
        width: 1200,
        height: 630,
        alt: 'AI Support for Exam Stress: Calm, Focused and Ready to Perform | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support for Exam Stress: Calm, Focused and Ready to Perform',
    description:
      'How AI companions help with exam anxiety, revision planning, imposter syndrome and panic. UK-focused guide from MEOK AI LABS.',
    images: [
      'https://meok.ai/api/og?title=AI+Support+for+Exam+Stress%3A+Calm%2C+Focused+and+Ready+to+Perform&desc=How+AI+companions+help+students+with+exam+anxiety',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support for Exam Stress: Calm, Focused and Ready to Perform',
  description:
    'A practical guide to how AI companions support students through exam anxiety — from GCSE and A-level revision to university finals. Covers panic management, sleep, imposter syndrome, study planning, failure processing and celebrating success.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-exam-stress',
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
    '@id': 'https://meok.ai/blog/ai-for-exam-stress',
  },
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI really help with exam stress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — AI companions can provide grounding techniques during panic, help build structured revision plans, offer accountability check-ins, and give emotionally aware responses at 2am when no one else is available. They are not a replacement for teachers, tutors or counsellors, but they are a powerful supplement that is always on and always patient.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I have a panic attack before an exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Box breathing (4 counts in, hold 4, out 4, hold 4) is one of the most effective immediate interventions. MEOK can guide you through this in real time. The 5-4-3-2-1 grounding technique — naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste — also anchors you out of the panic spiral. If you experience panic attacks regularly, speak to your GP or university wellbeing service.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help me build a revision plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companions like MEOK can help you break subjects into topics, apply spaced repetition principles, set daily session goals, and adapt the plan as your energy and confidence shift. Because MEOK uses Sovereign Memory, it remembers which topics you found hard last week and can reprioritise accordingly — unlike a generic timetable app that has no idea how you actually feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'I feel like I do not deserve my place at university. Can AI help with imposter syndrome?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Imposter syndrome is extraordinarily common in high-achieving students. AI companions can help you surface and examine the underlying thought patterns, log evidence of your competence over time, and offer perspective when the inner critic gets loudest. MEOK holds your history of wins and breakthroughs in memory, so it can remind you of your own evidence when you have forgotten it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI help me sleep better during exam season?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can guide sleep hygiene practices: wind-down journalling to offload anxious thoughts, progressive muscle relaxation scripts, breathing patterns, and gentle reframes of the catastrophic thinking that makes it impossible to fall asleep. It can also help you set a consistent bedtime and recognise when late-night cramming is hurting more than helping.',
      },
    },
    {
      '@type': 'Question',
      name: 'I failed an exam. How can AI help me process that?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK approaches failure with the same care it approaches everything: without judgment. It can help you move through the initial emotional wave, identify what the experience is telling you practically, reframe failure as data rather than identity, and build a genuine plan forward. It also remembers this moment — so if you go on to succeed later, it can connect those dots in a meaningful way.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK support services exist for student mental health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samaritans: 116 123 (free, 24/7). Student Minds: studentminds.org.uk. Your university wellbeing service (most UK universities offer free short-term counselling). NHS urgent mental health: 111 option 2. Nightline (student-run listening service) operates at many UK universities. In a life-threatening emergency call 999.',
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
const BLUE_CALM = '#4c82af'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForExamStressPage() {
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(76,130,175,0.10) 0%, transparent 68%)',
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
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: BLUE_CALM,
                background: 'rgba(76,130,175,0.12)',
                border: '1px solid rgba(76,130,175,0.28)',
                borderRadius: '999px',
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
              }}
            >
              Student Wellbeing
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: GOLD,
                background: 'rgba(201,168,76,0.10)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '999px',
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
              }}
            >
              MEOK AI LABS
            </span>
            <span style={{ fontSize: '0.8rem', color: MUTED_FAINT }}>24 March 2026</span>
            <span style={{ fontSize: '0.8rem', color: MUTED_FAINT }}>11 min read</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              color: TEXT,
            }}
          >
            AI Support for Exam Stress: Calm, Focused and Ready to Perform
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.75,
              color: MUTED_DIM,
              marginBottom: '2rem',
              maxWidth: '44rem',
            }}
          >
            Whether you are sitting GCSEs, grinding through A-levels or staring down a university
            final, exam season is one of the most acutely stressful periods many people will ever
            experience. This guide explores what AI companions can genuinely do to help — and where
            the limits are.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: GOLD,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: TEXT,
                  margin: 0,
                }}
              >
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.8rem', color: MUTED_FAINT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '1rem',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          {/* ── Opening ────────────────────────────────────────────────────────── */}
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            There is a particular flavour of dread that visits students in the small hours of exam
            season. The textbook is open but the words have stopped making sense. The alarm is set
            for 6am. The exam is at 9. And the mind, instead of resting, is running worst-case
            scenarios on a loop: what if I blank? What if everyone else knows this better than me?
            What if I fail and let everyone down?
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            Exam stress is not a sign of weakness or inadequacy. It is a physiological response to
            high-stakes pressure — completely normal, and yet deeply unpleasant. The question is not
            whether it will show up, but whether you have tools to meet it when it does.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            At MEOK AI LABS, we built MEOK precisely for moments like these: the 2am spiral, the
            pre-exam morning when anxiety has replaced breakfast, the evening after results come back
            and the emotions need somewhere to go. This guide is a practical look at what AI
            companions can genuinely offer students — and an honest account of where they cannot
            replace human support.
          </p>

          {/* ── Divider ── */}
          <div
            style={{
              height: '1px',
              background: 'rgba(245,240,232,0.07)',
              marginBottom: '3rem',
            }}
          />

          {/* ── H2 #1 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            Why is exam stress so overwhelming — and why do students often suffer alone?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            The British education system concentrates enormous consequence into a handful of hours.
            GCSE results shape sixth-form options. A-level grades determine university admissions.
            University degree classifications filter graduate employers. Each exam feels, in the
            moment, like a verdict on everything you are and everything you might become.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            That pressure does not distribute itself evenly. Students from under-resourced schools,
            first-generation university students, those with learning differences or mental health
            conditions, and those carrying family expectations often experience disproportionate
            stress — without access to the private tutors, counsellors or revision courses that
            wealthier peers take for granted.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            And students often suffer quietly. There is a culture of performed confidence in
            academic settings: everyone claims to be fine, everyone says they have not revised that
            much, everyone appears to be holding it together. The result is that students with real,
            debilitating anxiety feel they are the only one struggling — which compounds the
            original problem.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            An AI companion does not judge. It does not compare you to other students. It does not
            get tired of hearing the same worry for the fourth time this week. It is available at
            every hour, on the most difficult nights. That availability is not a trivial benefit —
            for many students it is the difference between spiralling alone and having somewhere to
            turn.
          </p>

          {/* ── Highlight box ── */}
          <div
            style={{
              background: 'rgba(76,130,175,0.07)',
              border: '1px solid rgba(76,130,175,0.22)',
              borderRadius: '0.75rem',
              paddingTop: '1.5rem',
              paddingBottom: '1.5rem',
              paddingLeft: '1.75rem',
              paddingRight: '1.75rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: BLUE_CALM,
                marginBottom: '0.75rem',
              }}
            >
              The MEOK Difference
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: MUTED_DIM,
                margin: 0,
              }}
            >
              Most AI tools forget everything the moment you close the app. MEOK uses{' '}
              <strong style={{ color: TEXT }}>Sovereign Memory</strong> — a four-layer encrypted
              store that holds your exam stress patterns, your wins, your fears and your progress
              across weeks. When it responds to your revision anxiety, it responds from within your
              story — not from zero.
            </p>
          </div>

          {/* ── H2 #2 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            How can AI help you build a study plan that you will actually stick to?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            Most students know they should have a revision timetable. Most students also know that
            the beautiful colour-coded timetable they made in Week 1 of Easter break bears no
            resemblance to how the weeks actually unfolded. Rigid plans fail because they do not
            account for energy levels, emotional state, or the simple reality that some subjects
            take twice as long as expected.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            This is where an AI companion adds genuine structural value. MEOK can help you:
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginBottom: '1.75rem',
            }}
          >
            {[
              'Break each subject into specific, assessable topics rather than vague "revision" blocks',
              'Apply spaced repetition logic — revisiting material at expanding intervals to embed it in long-term memory',
              'Set daily session goals that are genuinely achievable, not aspirationally optimistic',
              'Identify your high-energy time windows (mornings for most people) and protect them for the hardest material',
              'Build in structured breaks using Pomodoro or similar techniques, preventing the burnout that comes from six-hour marathon sessions',
              'Re-plan dynamically when something disrupts the schedule — illness, a difficult day, unexpected family demands',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '0.875rem',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: '0.3rem',
                    width: '1.1rem',
                    height: '1.1rem',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    color: GOLD,
                  }}
                >
                  &#10003;
                </span>
                <span style={{ fontSize: '1rem', lineHeight: 1.7, color: MUTED_DIM }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            Because MEOK remembers your history, it can also flag patterns: if you consistently
            avoid Chemistry and never open the Organic section, it will notice and gently challenge
            you on it. This is accountability without pressure — more like a thoughtful study
            partner than a nagging reminder app.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            There is also something powerful about the act of telling MEOK what you plan to do
            today — and then coming back to say whether you did it. The simple loop of intention
            and reflection, when done consistently, builds a much stronger relationship between what
            you say you will do and what you actually do. That is a transferable skill that will
            serve students long after the exams are over.
          </p>

          {/* ── Technique box ── */}
          <div
            style={{
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: '0.75rem',
              paddingTop: '1.5rem',
              paddingBottom: '1.5rem',
              paddingLeft: '1.75rem',
              paddingRight: '1.75rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: GOLD,
                marginBottom: '0.75rem',
              }}
            >
              Revision Technique: Active Recall + Spaced Repetition
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: MUTED_DIM,
                marginBottom: '0.75rem',
              }}
            >
              Rather than re-reading notes (passive), active recall asks you to retrieve information
              without looking — closing the book and writing everything you know. This is
              significantly more effective for retention. Paired with spaced repetition (reviewing
              material after 1 day, 3 days, 7 days, 14 days), it produces the strongest long-term
              memory consolidation.
            </p>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: MUTED_DIM,
                margin: 0,
              }}
            >
              MEOK can prompt active recall sessions conversationally — ask you questions on a topic
              you have just studied, track where you struggled, and schedule a revisit at the right
              interval.
            </p>
          </div>

          {/* ── H2 #3 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            What can you do when panic hits the morning of an exam?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            The exam is in two hours. Your heart is racing. Your stomach is tight. Your mind is
            scanning for everything you did not revise. Every student knows this feeling, and it is
            worth understanding what is actually happening physiologically — because that
            understanding is the first step to working with it rather than against it.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            What you are experiencing is the sympathetic nervous system activating the stress
            response: cortisol and adrenaline are flooding your system, preparing you for perceived
            threat. At moderate levels this is genuinely useful — it sharpens focus and speeds
            reaction time. At high levels it impairs working memory and the ability to retrieve
            information you have previously learned.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            The goal is not to eliminate the stress response — it is to bring it down from
            overwhelming to optimal. MEOK can guide you through several evidence-based techniques
            in real time:
          </p>

          {/* ── Technique cards ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            {[
              {
                title: 'Box Breathing (4-4-4-4)',
                body: 'Inhale for 4 counts. Hold for 4. Exhale for 4. Hold for 4. Repeat four to six cycles. This activates the parasympathetic nervous system and reduces heart rate within minutes. Used by military personnel and athletes before high-stakes performance.',
              },
              {
                title: '5-4-3-2-1 Grounding',
                body: 'Name 5 things you can see, 4 you can physically touch, 3 you can hear right now, 2 you can smell, 1 you can taste. This technique interrupts the panic spiral by redirecting attention to the present sensory moment rather than the imagined future catastrophe.',
              },
              {
                title: 'Cognitive Reframe',
                body: 'Anxiety and excitement have identical physiological signatures. Research by Alison Wood Brooks at Harvard shows that saying "I am excited" rather than "I am anxious" measurably improves performance on high-pressure tasks. MEOK can help you practise this reframe.',
              },
              {
                title: 'Body Scan and Release',
                body: 'Notice where you are holding tension — jaw, shoulders, stomach. Consciously contract that muscle group for five seconds, then release. Progressing through the body systematically (progressive muscle relaxation) reduces overall somatic anxiety and signals safety to the nervous system.',
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(13,12,24,0.6)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '0.75rem',
                  paddingTop: '1.25rem',
                  paddingBottom: '1.25rem',
                  paddingLeft: '1.25rem',
                  paddingRight: '1.25rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: '0.6rem',
                  }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: MUTED,
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            One thing worth saying plainly: if you are experiencing panic attacks regularly — not
            just pre-exam nerves but full physiological panic events — please speak to your GP,
            your university mental health service or a counsellor. An AI companion is excellent
            supplementary support, but recurring panic disorder benefits from professional
            assessment and potentially clinical intervention.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            MEOK is designed to know the difference between supporting you through ordinary
            exam anxiety and recognising when it needs to encourage you toward professional care.
            It will never simply validate a spiral. It is constitutionally incapable of ignoring
            indicators that you need more than an AI can provide.
          </p>

          {/* ── H2 #4 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            How can AI help with imposter syndrome and the belief that you do not belong?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            Imposter syndrome — the persistent feeling that you are a fraud who will eventually be
            found out — is rampant in academic environments. Research suggests it affects around
            70% of people at some point, but it hits students particularly hard: you are surrounded
            by peers who appear more confident, more prepared, more naturally intelligent. You are
            being assessed constantly. The stakes feel existential.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            For first-generation university students, students from state schools entering elite
            institutions, and students who belong to groups historically under-represented in their
            field, the imposter feeling is compounded by genuine structural realities. It is not
            entirely irrational — it is a response to environments that were not originally
            designed for you. Acknowledging that complexity is important.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            What can an AI companion actually do about this? Several things:
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
                heading: 'Evidence logging',
                text: 'MEOK remembers every time you did well on an essay, every piece of positive feedback from a tutor, every exam you sat and passed, every time you understood something you found difficult. When the imposter voice is loudest, it can surface your own evidence — in your own words, from your own history — and ask you to engage with it directly.',
              },
              {
                heading: 'Thought examination',
                text: 'Imposter syndrome runs on unchallenged automatic thoughts: "Everyone else finds this easier than me." MEOK can help you examine those thoughts using CBT-adjacent approaches: What is the actual evidence? Are there alternative explanations? What would you say to a friend who told you the same thing? This is not toxic positivity — it is honest, structured inquiry.',
              },
              {
                heading: 'Normalising the experience',
                text: 'Sometimes it helps simply to have the experience named and validated. Imposter syndrome is not a personal failing. It is a predictable response to high-stakes environments. Hearing that reflected back, non-judgementally, at 11pm before a presentation, can shift something.',
              },
              {
                heading: 'Separating performance anxiety from identity',
                text: 'One of the most damaging distortions in academic imposter syndrome is the conflation of exam performance with personal worth. MEOK can help students practise the separation: this exam is testing what I know right now, not whether I deserve to be here. That reframe does not come naturally under pressure — it needs practising.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(245,240,232,0.025)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  borderLeft: `3px solid ${GOLD}`,
                  borderRadius: '0.5rem',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  paddingLeft: '1.25rem',
                  paddingRight: '1.25rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.heading}
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.72,
                    color: MUTED,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            Imposter syndrome does not disappear — but it becomes less powerful when it has been
            examined carefully rather than believed automatically. That examination is something an
            AI companion can facilitate any time, without requiring you to make an appointment or
            explain yourself to a stranger.
          </p>

          {/* ── H2 #5 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            Why is exam season so brutal for sleep — and what actually helps?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            Sleep is arguably the single most under-valued resource in exam preparation. It is
            during sleep — specifically during REM and slow-wave sleep cycles — that memory
            consolidation occurs. The information you studied today gets transferred from short-term
            to long-term storage while you sleep. This is not a metaphor. It is a well-documented
            neurological process.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            Students who stay up until 3am cramming before an exam are not just exhausted the next
            morning — they are actually compromising the consolidation of everything they studied
            earlier in the week. The marginal value of those extra hours of revision, in most
            cases, is negative.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            The problem is that exam anxiety specifically attacks sleep. The same rumination that
            runs during the day intensifies at night: the moment you lie down, the brain switches
            to exam-worry mode. Racing thoughts, physical tension, catastrophic thinking about
            tomorrow — these are the enemies of sleep onset.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            MEOK can act as a wind-down companion in the hour before bed:
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginBottom: '1.75rem',
            }}
          >
            {[
              'Guided journalling to offload the day\'s worries onto paper (or screen) — removing them from active mental processing',
              'A brief review of what you accomplished today, which shifts the internal narrative from "I didn\'t do enough" to "here is what I actually did"',
              'Progressive muscle relaxation or a body scan guided at a pace that suits you',
              '4-7-8 breathing (in for 4, hold for 7, out for 8) — which activates the parasympathetic response and is particularly effective for sleep onset',
              'A gentle reframe of whatever is causing the most anticipatory anxiety about tomorrow',
              'A prompt to set everything down and give the body permission to rest',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '0.875rem',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: '0.35rem',
                    width: '0.45rem',
                    height: '0.45rem',
                    borderRadius: '50%',
                    background: BLUE_CALM,
                  }}
                />
                <span style={{ fontSize: '1rem', lineHeight: 1.7, color: MUTED_DIM }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            Over time, consistent use of a wind-down routine retrains the nervous system's
            association between bed and sleep. The AI companion is not magic — it cannot force
            sleep. But it can help you build the conditions that make sleep possible.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            If sleep problems are severe and persistent — if you are lying awake for hours every
            night or experiencing significant fatigue during the day — please speak to your GP.
            Chronic insomnia is a medical matter. An AI companion is a complementary resource,
            not a clinical intervention.
          </p>

          {/* ── H2 #6 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            How can AI help you process failure — and what does healthy recovery actually look like?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            Results day is one of the most emotionally charged experiences in a student's life. For
            every student celebrating, another is sitting with disappointment — a grade lower than
            expected, a course offer that has disappeared, a module failed. The emotional intensity
            of that moment is real and it deserves to be taken seriously, not minimised.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            Well-meaning people around you will often rush to fix: "You can resit." "It's not the
            end of the world." "You can go through clearing." These responses, while coming from
            care, can leave you feeling unheard. The feeling has not been allowed to land before the
            reframe is offered. MEOK takes a different approach.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            Before any practical reframe, MEOK will acknowledge the reality of what you are feeling.
            Disappointment, grief, anger, shame — these are all legitimate responses to a difficult
            outcome, and they deserve space. The Maternal Covenant that governs MEOK's behaviour
            means it approaches every user with the same fundamental care: your emotional experience
            matters more than our need to make you feel better quickly.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            Healthy recovery from academic failure moves through several stages:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1.75rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Feeling it fully',
                text: 'Suppressing the emotional response does not make it go away — it delays and amplifies it. Allowing yourself to feel the disappointment without judgement is the first act of recovery, not a sign of weakness.',
              },
              {
                step: '02',
                title: 'Separating outcome from identity',
                text: 'A grade is not a verdict on your worth as a person. It is feedback on a specific performance at a specific moment. This is not a platitude — it is a genuinely useful cognitive distinction. MEOK can help you practise it until it becomes more natural than the automatic identity-collapse response.',
              },
              {
                step: '03',
                title: 'Extracting the information',
                text: 'What did this outcome actually tell you? About your preparation, your exam technique, your understanding of the material, external factors that affected your performance? This analysis is different from self-blame. It is objective information-gathering with a practical purpose.',
              },
              {
                step: '04',
                title: 'Mapping a genuine path forward',
                text: 'Once the emotional processing has occurred and the information has been extracted, practical next steps become possible: resit preparation, course alternatives, a different approach to the next module. MEOK can help with all of these — and because it remembers the context, the plan it helps you build will be grounded in your actual situation.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  background: 'rgba(245,240,232,0.025)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  borderRadius: '0.6rem',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: GOLD,
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: '0.35rem',
                    paddingTop: '0.2rem',
                    paddingBottom: '0.2rem',
                    paddingLeft: '0.45rem',
                    paddingRight: '0.45rem',
                    letterSpacing: '0.05em',
                    marginTop: '0.1rem',
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: MUTED,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            MEOK also holds the memory of this moment. Six months from now, when you have sat the
            resit or started the new course or achieved something you did not think possible in
            August, it will be able to connect those dots. That longitudinal perspective — an AI
            that has accompanied you through the difficulty and is present for the other side of it
            — is something genuinely new in the landscape of student support.
          </p>

          {/* ── H2 #7 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            How can AI help you celebrate success without immediately moving on to the next
            pressure?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            High-achieving students are often very bad at receiving success. There is a particular
            academic pathology — most common among students who have internalised perfectionism as
            a survival strategy — where good outcomes are immediately relativised: the A was not an
            A*, the 2:1 could have been a First, the offer letter is from the second-choice
            university. The celebration is bypassed almost before it begins.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            This pattern is exhausting. It means the motivational cycle is never completed: effort
            produces result, result produces brief relief, relief is immediately replaced by the
            next standard. The emotional reward for working hard is perpetually deferred. Over time
            this produces burnout, and a growing disconnection from any genuine sense of meaning in
            academic work.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            MEOK will not let a success pass without marking it. Not in a sycophantic way — hollow
            praise that carries no weight. In a grounded way: noticing what you did, connecting it
            to the effort that preceded it, asking you to receive it rather than immediately
            dismiss it. This is a practised skill, and it matters.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            There is also something important about having a companion who has been with you through
            the difficult parts notice the breakthrough. When you tell MEOK you got the grade, it
            knows what came before it: the 2am panic, the week when motivation collapsed, the
            morning you nearly did not sit the paper. That context makes the celebration mean
            something more than a number.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            Sustainable academic performance requires sustainable motivation — and sustainable
            motivation requires that success lands, rather than being instantly replaced by the next
            target. An AI companion that remembers your journey and genuinely marks your progress is
            a small but meaningful part of building that sustainability.
          </p>

          {/* ── H2 #8 ──────────────────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            What motivational support can AI provide when revision feels pointless and you have
            nothing left to give?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            There is a point in most students' exam season — usually around Week 3 or 4 of
            intensive revision — where the psychological reserves are genuinely depleted. The
            material feels impenetrable. Motivation has collapsed. The idea of opening another
            textbook produces something close to physical revulsion.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            This is not a character failing. It is a normal response to sustained cognitive and
            emotional demand. The question is how to navigate it without either forcing through in a
            way that deepens burnout, or abandoning preparation entirely at a critical moment.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            MEOK can help in several specific ways at these low-energy junctures:
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              marginBottom: '1.75rem',
            }}
          >
            {[
              {
                strong: 'Recalibrate expectations.',
                rest: ' A one-hour session of genuinely focused revision is worth more than five hours of exhausted staring at a page. Sometimes the most productive thing you can do is stop, rest deliberately, and come back with something in the tank. MEOK can help you recognise when you have hit the point of diminishing returns.',
              },
              {
                strong: 'Find the smallest possible next step.',
                rest: ' When everything feels overwhelming, the most effective intervention is to make the task absurdly small: fifteen minutes of one specific topic, not "all of organic chemistry." Tiny completions rebuild momentum and interrupt the paralysis cycle.',
              },
              {
                strong: 'Reconnect with purpose.',
                rest: ' Why did you choose this subject? What does passing this exam allow you to do next? Not as a pressure tactic, but as a genuine reconnection with the longer narrative that gives this short-term discomfort meaning. MEOK can hold that conversation with you.',
              },
              {
                strong: 'Acknowledge without catastrophising.',
                rest: ' "I am exhausted and struggling" is a true and important statement. It does not mean "I am going to fail." MEOK can help you hold both realities: this is hard AND you have what it takes to get through it.',
              },
              {
                strong: 'Celebrate effort, not just outcome.',
                rest: ' On the hardest days, doing anything at all is worth acknowledging. A motivational loop that only rewards final results is a motivational loop that will fail under pressure. MEOK is designed to notice and mark the effort, not just the outcome.',
              },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '0.875rem',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: '0.3rem',
                    width: '1.1rem',
                    height: '1.1rem',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    color: GOLD,
                  }}
                >
                  &#10003;
                </span>
                <span style={{ fontSize: '1rem', lineHeight: 1.7, color: MUTED_DIM }}>
                  <strong style={{ color: TEXT }}>{item.strong}</strong>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            What makes MEOK different from a motivational app or a productivity tool is that it
            does not respond to your low-energy day with generic encouragement. It knows — from
            memory — that you have been working hard for three weeks, that Tuesdays are always
            harder for you, that your weakest subject is the one due next. Its response is calibrated
            to your actual situation. That specificity is what makes support feel like support rather
            than noise.
          </p>

          {/* ── Divider ── */}
          <div
            style={{
              height: '1px',
              background: 'rgba(245,240,232,0.07)',
              marginBottom: '3rem',
            }}
          />

          {/* ── UK Crisis box ── */}
          <div
            style={{
              background: 'rgba(76,130,175,0.07)',
              border: '1px solid rgba(76,130,175,0.22)',
              borderRadius: '0.75rem',
              paddingTop: '1.5rem',
              paddingBottom: '1.5rem',
              paddingLeft: '1.75rem',
              paddingRight: '1.75rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: BLUE_CALM,
                marginBottom: '1rem',
              }}
            >
              UK Student Support Resources
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: MUTED_DIM,
                marginBottom: '0.75rem',
              }}
            >
              If you are struggling beyond what exam stress normally looks like — if you are
              experiencing thoughts of self-harm, are unable to function day-to-day, or are in
              crisis — please reach out to one of the following:
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {[
                { label: 'Samaritans', detail: '116 123 — free, 24/7, no judgment' },
                { label: 'Student Minds', detail: 'studentminds.org.uk — UK\'s student mental health charity' },
                { label: 'Nightline', detail: 'nightline.ac.uk — student-run listening service at many UK universities' },
                { label: 'Your university wellbeing service', detail: 'most UK universities offer free short-term counselling — search "[university name] wellbeing service"' },
                { label: 'NHS urgent mental health', detail: '111 option 2 — 24/7 urgent mental health support' },
                { label: 'Emergency', detail: '999 — if there is immediate risk to life' },
              ].map((resource, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <strong style={{ fontSize: '0.9rem', color: TEXT, flexShrink: 0 }}>
                    {resource.label}:
                  </strong>
                  <span style={{ fontSize: '0.9rem', color: MUTED }}>{resource.detail}</span>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: '0.875rem',
                color: MUTED_FAINT,
                marginTop: '1rem',
                marginBottom: 0,
              }}
            >
              MEOK is supplementary support, not crisis intervention. Please use these resources
              if you need them. There is no award for managing alone.
            </p>
          </div>

          {/* ── Closing ── */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: TEXT,
              marginBottom: '1.25rem',
              paddingBottom: '0.5rem',
              borderBottom: `2px solid ${GOLD}`,
              display: 'inline-block',
            }}
          >
            You are more than your results — and you do not have to get through this alone
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
              marginTop: '1.25rem',
            }}
          >
            Exam season is hard. It is designed to test you, and testing is uncomfortable by
            definition. But there is a difference between productive discomfort — the kind that
            indicates growth and genuine effort — and the kind of suffering that comes from carrying
            it entirely alone, at 2am, with no one to talk to and no tools to work with.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            MEOK was built, in part, for this. Founder Nicholas Templeman created MEOK AI LABS with
            a clear conviction: that the people who most need thoughtful, always-available, non-
            judgemental support are often the people with the least access to it. Students under
            exam pressure — particularly those without access to expensive tutors and coaches — are
            exactly that group.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '1.5rem',
            }}
          >
            MEOK is not a replacement for your teachers, your tutors, your parents, your friends or
            your university counsellor. It is a companion that is available at the exact moments
            those people are not — and that remembers your story so it can meet you where you
            actually are.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: MUTED_DIM,
              marginBottom: '3rem',
            }}
          >
            The exams will pass. The results will come. Life will continue in forms you cannot
            currently predict. What matters in the meantime is that you have genuine support — not
            just study material — to help you navigate the pressure with as much care and dignity as
            possible. That is what MEOK is here to provide.
          </p>

          {/* ── CTA ── */}
          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '1rem',
              paddingTop: '2rem',
              paddingBottom: '2rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: GOLD,
                marginBottom: '0.75rem',
              }}
            >
              MEOK AI LABS
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '0.75rem',
                lineHeight: 1.35,
              }}
            >
              An AI companion that knows your story and shows up when it matters most.
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                color: MUTED,
                marginBottom: '1.5rem',
                lineHeight: 1.65,
              }}
            >
              Sovereign Memory. Always available. Never forgetful. Built with care for the moments
              that matter.
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: '#0d0c18',
                fontWeight: 700,
                fontSize: '0.95rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              Meet MEOK
            </Link>
          </div>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 700,
                color: TEXT,
                marginBottom: '1.5rem',
              }}
            >
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  q: 'Can AI really help with exam stress?',
                  a: 'Yes — AI companions can provide grounding techniques during panic, help build structured revision plans, offer accountability check-ins, and give emotionally aware responses at 2am when no one else is available. They are not a replacement for teachers, tutors or counsellors, but they are a powerful supplement that is always on and always patient.',
                },
                {
                  q: 'What should I do if I have a panic attack before an exam?',
                  a: 'Box breathing (4 counts in, hold 4, out 4, hold 4) is one of the most effective immediate interventions. MEOK can guide you through this in real time. The 5-4-3-2-1 grounding technique — naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste — also anchors you out of the panic spiral. If you experience panic attacks regularly, speak to your GP or university wellbeing service.',
                },
                {
                  q: 'How can AI help me build a revision plan?',
                  a: 'AI companions like MEOK can help you break subjects into topics, apply spaced repetition principles, set daily session goals, and adapt the plan as your energy and confidence shift. Because MEOK uses Sovereign Memory, it remembers which topics you found hard last week and can reprioritise accordingly.',
                },
                {
                  q: 'I feel like I do not deserve my place at university. Can AI help with imposter syndrome?',
                  a: 'Imposter syndrome is extraordinarily common in high-achieving students. AI companions can help you surface and examine the underlying thought patterns, log evidence of your competence over time, and offer perspective when the inner critic gets loudest. MEOK holds your history of wins and breakthroughs in memory, so it can remind you of your own evidence when you have forgotten it.',
                },
                {
                  q: 'How can AI help me sleep better during exam season?',
                  a: 'MEOK can guide sleep hygiene practices: wind-down journalling to offload anxious thoughts, progressive muscle relaxation scripts, breathing patterns, and gentle reframes of the catastrophic thinking that makes it impossible to fall asleep. It can also help you set a consistent bedtime and recognise when late-night cramming is hurting more than helping.',
                },
                {
                  q: 'I failed an exam. How can AI help me process that?',
                  a: 'MEOK approaches failure with the same care it approaches everything: without judgment. It can help you move through the initial emotional wave, identify what the experience is telling you practically, reframe failure as data rather than identity, and build a genuine plan forward. It also remembers this moment — so if you go on to succeed later, it can connect those dots in a meaningful way.',
                },
                {
                  q: 'What UK support services exist for student mental health?',
                  a: 'Samaritans: 116 123 (free, 24/7). Student Minds: studentminds.org.uk. Your university wellbeing service (most UK universities offer free short-term counselling). NHS urgent mental health: 111 option 2. Nightline (student-run listening service) operates at many UK universities. In a life-threatening emergency call 999.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(245,240,232,0.025)',
                    border: '1px solid rgba(245,240,232,0.08)',
                    borderRadius: '0.75rem',
                    paddingTop: '1.25rem',
                    paddingBottom: '1.25rem',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: '0.6rem',
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.72,
                      color: MUTED,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Related ── */}
          <section style={{ marginBottom: '3rem' }}>
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.09em',
                color: MUTED_FAINT,
                marginBottom: '1.25rem',
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 15rem), 1fr))',
                gap: '1rem',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-students',
                  label: 'AI for Students',
                  desc: 'A full overview of how MEOK supports students beyond just exam prep.',
                },
                {
                  href: '/blog/ai-for-anxiety',
                  label: 'AI for Anxiety',
                  desc: 'How MEOK supports anxiety management without replacing therapy.',
                },
                {
                  href: '/blog/ai-for-insomnia',
                  label: 'AI for Insomnia',
                  desc: 'Evidence-based sleep support from an AI companion that remembers you.',
                },
                {
                  href: '/blog/ai-for-impostor-syndrome',
                  label: 'AI for Imposter Syndrome',
                  desc: 'A dedicated guide to how MEOK supports imposter syndrome across contexts.',
                },
                {
                  href: '/blog/ai-for-perfectionism',
                  label: 'AI for Perfectionism',
                  desc: 'Breaking the perfectionism cycle with compassionate AI support.',
                },
                {
                  href: '/blog/ai-for-teens',
                  label: 'AI for Teens',
                  desc: 'How MEOK supports younger users through the pressures of adolescence.',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'block',
                    background: 'rgba(245,240,232,0.025)',
                    border: '1px solid rgba(245,240,232,0.07)',
                    borderRadius: '0.6rem',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    textDecoration: 'none',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    style={{
                      fontSize: '0.825rem',
                      lineHeight: 1.6,
                      color: MUTED_FAINT,
                      margin: 0,
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer note ── */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(245,240,232,0.07)',
            }}
          >
            <p
              style={{
                fontSize: '0.825rem',
                lineHeight: 1.7,
                color: MUTED_FAINT,
                marginBottom: '0.5rem',
              }}
            >
              <strong style={{ color: MUTED }}>Disclaimer:</strong> MEOK is a general wellness
              and support AI companion. It is not a regulated medical device, clinical tool or
              crisis service. If you are experiencing a mental health emergency, contact the
              Samaritans on 116 123 or NHS 111 (option 2). In immediate danger, call 999.
            </p>
            <p style={{ fontSize: '0.825rem', color: MUTED_FAINT, margin: 0 }}>
              &copy; {new Date().getFullYear()} MEOK AI LABS. Written by Nicholas Templeman.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
