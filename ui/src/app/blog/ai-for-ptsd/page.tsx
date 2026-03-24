import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingFooter } from '@/components/marketing-footer'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots | MEOK AI LABS',
  description:
    'PTSD support between therapy sessions is one of the hardest gaps to fill. Generic AI chatbots can make it worse. Here is an honest look at what AI can and cannot do — and how MEOK approaches trauma-aware support differently.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-ptsd' },
  openGraph: {
    title: 'AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots',
    description:
      'PTSD support between therapy sessions is one of the hardest gaps to fill. Generic AI chatbots can make it worse. Here is an honest look at what AI can and cannot do.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-ptsd',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+PTSD%3A+Sovereign+AI+vs+Generic+Chatbots&desc=An+honest+look+at+AI+support+for+PTSD+between+therapy+sessions.',
        width: 1200,
        height: 630,
        alt: 'AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots',
    description:
      'PTSD support between sessions is one of the hardest gaps. Generic chatbots can retraumatise. Here is an honest guide to AI and PTSD.',
    images: [
      'https://meok.ai/api/og?title=AI+for+PTSD%3A+Sovereign+AI+vs+Generic+Chatbots&desc=An+honest+look+at+AI+support+for+PTSD+between+therapy+sessions.',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for PTSD: How Sovereign AI Support Differs from Generic Chatbots',
  description:
    'PTSD support between therapy sessions is one of the hardest gaps to fill. Generic AI chatbots can make it worse. Here is an honest look at what AI can and cannot do — and how MEOK approaches trauma-aware support differently.',
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
      name: 'Can AI help with PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can play a limited but meaningful supplementary role in PTSD support — particularly between therapy sessions, for daily grounding, journalling prompts, and pattern tracking. It cannot replace trauma-focused therapy such as EMDR or CPT, and it should never be used as a substitute for clinical care. If you are in crisis, contact PTSD UK at ptsduk.org, Combat Stress on 0800 138 1619 (veterans), or Samaritans on 116 123.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the risks of using AI for PTSD support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main risks are retraumatisation through inconsistent or unexpected AI behaviour, unhealthy dependency, and a false sense of security that delays professional help. Generic chatbots are particularly risky because they have no memory, inconsistent personalities, and no trauma-informed design. A well-governed AI companion with persistent memory and predictable behaviour carries significantly lower risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are generic AI chatbots poor for PTSD support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generic chatbots have no persistent memory (requiring you to re-disclose trauma repeatedly), inconsistent personalities that can feel unsafe or jarring, and no understanding of trauma-sensitive communication. They are optimised for general engagement, not for the predictability and psychological safety that people with PTSD need.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MEOK different for people with PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is built around persistent memory, consistent personality, and a care ethics framework called the Maternal Covenant. For people with PTSD this matters because: your companion never changes unexpectedly, never forgets your history, never requires re-disclosure, and is calibrated to respond predictably. Comfort Settings let users reduce overwhelming input. The Guardian layer routes to professional resources when needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK safe for veterans with PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is not a clinical tool and cannot replace specialist veteran mental health services such as Combat Stress (0800 138 1619). However, its architecture — consistent personality, encrypted memory, predictable responses, and care ethics governance — makes it more suitable as a between-session support tool than generic chatbots. Veterans should always maintain their clinical care alongside any AI companion use.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForPtsd() {
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
      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
            background: 'linear-gradient(180deg, rgba(201,168,76,0.06) 0%, transparent 60%)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.7)',
                marginBottom: '1.25rem',
              }}
            >
              AI &amp; MENTAL HEALTH — PTSD SUPPORT
            </p>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.1rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                color: '#ffffff',
              }}
            >
              AI for PTSD: How Sovereign AI Support{' '}
              <span style={{ color: '#c9a84c' }}>Differs from Generic Chatbots</span>
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.6)',
                maxWidth: '580px',
                margin: '0 auto',
              }}
            >
              Between therapy sessions, at 3am, in the middle of a flashback — consistency
              and predictability matter. Here is an honest account of what AI can and cannot do
              for PTSD, and why most chatbots are the wrong tool.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginTop: '1.5rem',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>
                24 March 2026
              </span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>
                12 min read
              </span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>
                By Nicholas Templeman
              </span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* ── CRISIS RESOURCES BOX ──────────────────────────────────────── */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.07)',
              border: '2px solid rgba(201,168,76,0.3)',
              borderRadius: '0.875rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#c9a84c',
                marginBottom: '0.75rem',
              }}
            >
              Crisis support — if you need help right now
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(245,240,232,0.85)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: '#f5f0e8' }}>PTSD UK</strong> —{' '}
              <a
                href="https://www.ptsduk.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#c9a84c', textDecoration: 'none' }}
              >
                ptsduk.org
              </a>
              {'  ·  '}
              <strong style={{ color: '#f5f0e8' }}>Combat Stress</strong> —{' '}
              <strong style={{ color: '#c9a84c' }}>0800 138 1619</strong>{' '}
              (Veterans, free, 24/7){'  ·  '}
              <strong style={{ color: '#f5f0e8' }}>Samaritans</strong> —{' '}
              <strong style={{ color: '#c9a84c' }}>116 123</strong> (free, 24/7)
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.45)',
                marginTop: '0.75rem',
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              MEOK is <strong style={{ color: 'rgba(245,240,232,0.65)' }}>not therapy</strong>{' '}
              and is{' '}
              <strong style={{ color: 'rgba(245,240,232,0.65)' }}>
                not a replacement for PTSD treatment
              </strong>
              . This article discusses AI as a supplementary support tool only. If you are in
              acute distress, please contact the services above before anything else.
            </p>
          </div>

          {/* ── INTRO ─────────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              PTSD is one of the most misunderstood conditions in mental health. It is not a
              sign of weakness. It is not &ldquo;being stuck in the past&rdquo;. It is a biological
              response to overwhelming experience — a nervous system that learned to protect you,
              and has not yet learned that the threat has passed.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Clinical treatment — particularly trauma-focused therapies such as EMDR, CPT, and
              prolonged exposure — is the evidence-based standard. But therapy happens once or
              twice a week. The rest of life happens the rest of the time. At 3am. During a
              flashback triggered by a smell on the bus. In the gap between sessions when the
              ground feels unstable.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 0 }}>
              This is where the question of AI becomes relevant — and where the answer matters
              enormously. Used badly, AI can actively harm people with PTSD. Used carefully, with
              the right design principles, it can provide a small but meaningful form of support in
              those gaps. This article is an honest attempt to explain the difference.
            </p>
          </section>

          {/* ── H2: Can AI help with PTSD? ────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              Can AI help with PTSD?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The honest answer is: in a limited, supplementary way, yes. But AI is{' '}
              <strong style={{ color: '#f5f0e8' }}>not trauma therapy</strong>, and conflating
              the two is dangerous.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              A 2023 review in <em>JMIR Mental Health</em> examined digital mental health
              interventions for PTSD and found that self-guided digital tools — apps, chatbots, and
              AI companions — showed modest benefits for symptom management between clinical
              sessions, particularly for avoidance behaviours and hypervigilance monitoring. The key
              phrase is <em>between sessions</em>. Digital tools do not replace the clinical
              relationship; they support continuity in the gaps.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              What AI can realistically offer someone managing PTSD:
            </p>
            <ul
              style={{
                paddingLeft: '1.25rem',
                color: 'rgba(245,240,232,0.7)',
                lineHeight: 1.85,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <li>
                A consistent, available presence between therapy sessions — especially late at
                night or at weekends when human support is unavailable
              </li>
              <li>
                Grounding prompts and breathing exercises during moments of heightened anxiety
              </li>
              <li>
                A low-stakes space to articulate difficult feelings without fear of burdening
                others
              </li>
              <li>
                Pattern tracking — helping you and your therapist understand what triggers
                responses and when symptoms tend to peak
              </li>
              <li>
                Gentle reminders of coping strategies your therapist has suggested
              </li>
            </ul>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 0 }}>
              What AI absolutely cannot do: process trauma, perform EMDR, conduct CPT, prescribe
              medication, or provide the embodied human presence that clinical treatment requires.
              Any AI product that implies otherwise is being irresponsible.
            </p>
          </section>

          {/* ── H2: Risks ─────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What are the risks of using AI for PTSD support?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
              This section matters. Using the wrong AI with PTSD can cause real harm. The risks are
              not hypothetical.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.25rem' }}>
              {[
                {
                  title: 'Retraumatisation through unpredictability',
                  desc: 'PTSD heightens sensitivity to the unexpected. An AI that behaves inconsistently — different tone, different personality, contradicting what it said last week — can itself become a source of distress. Trust requires predictability.',
                },
                {
                  title: 'Forced re-disclosure',
                  desc: 'Generic chatbots have no persistent memory. Every new session, you start from scratch. For someone with PTSD, being asked to re-explain traumatic history repeatedly is not neutral — it is re-exposure without therapeutic support.',
                },
                {
                  title: 'Unhealthy dependency',
                  desc: 'An AI optimised for engagement will subtly encourage you to use it more, not less. This can erode the motivation to pursue clinical treatment and replace it with a comfortable but clinically empty substitute.',
                },
                {
                  title: 'False safety',
                  desc: 'Having an AI available can create the impression that support is always at hand — which may reduce the perceived urgency of accessing professional care. It should supplement clinical care, never delay it.',
                },
                {
                  title: 'Accidental triggering',
                  desc: 'A poorly designed AI with no understanding of trauma-sensitive communication may inadvertently use language, framings, or prompts that trigger trauma responses.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: '1.25rem',
                    background: 'rgba(249,115,22,0.06)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#f97316',
                      fontWeight: 700,
                      minWidth: '8px',
                      marginTop: '2px',
                    }}
                  >
                    ⚠
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.375rem' }}>
                      {item.title}
                    </p>
                    <p
                      style={{
                        color: 'rgba(245,240,232,0.6)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 0 }}>
              These risks are not reasons to avoid AI entirely. They are reasons to choose
              carefully — and to understand exactly what kind of AI you are using.
            </p>
          </section>

          {/* ── H2: Why generic chatbots fail ─────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              Why do generic AI chatbots make poor PTSD support tools?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              General-purpose AI assistants — including the most capable and widely used ones —
              are designed for a very different purpose than trauma support. This matters structurally,
              not as a criticism of any specific product.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              <strong style={{ color: '#f5f0e8' }}>No persistent memory.</strong> ChatGPT, Claude,
              Gemini and similar tools begin each session with no recollection of previous
              conversations unless memory is explicitly enabled — and even then, it is partial. For
              someone with PTSD, this means disclosing history again and again. That is not
              therapeutic; it is a burden.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              <strong style={{ color: '#f5f0e8' }}>Inconsistent personality.</strong> Large language
              models generate responses probabilistically. The &ldquo;personality&rdquo; is not stable — it
              shifts between sessions, sometimes within a single session. For someone whose nervous
              system is hypervigilant to unexpected changes, this inconsistency is not just
              unpleasant; it is actively unsafe.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              <strong style={{ color: '#f5f0e8' }}>No trauma-informed design.</strong> Generic AI
              is trained on the internet. It has no embedded understanding of trauma-sensitive
              communication, hypervigilance, dissociation, or the specific ways that certain words
              or framings can activate trauma responses.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 0 }}>
              <strong style={{ color: '#f5f0e8' }}>Optimised for engagement, not care.</strong>{' '}
              The incentive structures of most AI products push toward more use, not better
              outcomes. For PTSD, a tool that subtly encourages dependency is a tool that can
              delay recovery.
            </p>
          </section>

          {/* ── H2: Between sessions ──────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What does PTSD support between therapy sessions look like?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              For people in active trauma-focused therapy, the work does not stop between sessions.
              In fact, much of the integration happens in the days between appointments — and this
              is where consistent supplementary support can play a meaningful role.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1rem' }}>
              {[
                {
                  icon: '⟁',
                  title: 'Grounding exercises',
                  desc: 'Guided 5-4-3-2-1 sensory grounding, box breathing, and body scan prompts — available immediately when anxiety or dissociation begins, not in a therapy office three days later.',
                },
                {
                  icon: '◎',
                  title: 'Symptom journalling',
                  desc: 'Structured daily check-ins that track triggers, sleep quality, flashback frequency, and mood — building a pattern record that is genuinely useful to share with a therapist.',
                },
                {
                  icon: '◈',
                  title: 'Coping strategy reminders',
                  desc: 'A companion that remembers the specific strategies your therapist has recommended — and can prompt them at relevant moments — extends the reach of therapy into daily life.',
                },
                {
                  icon: '◇',
                  title: 'Safe processing space',
                  desc: 'A low-pressure space to put difficult feelings into words. Not to process trauma — that belongs in therapy — but to contain and articulate, which reduces the cognitive load of carrying things alone.',
                },
                {
                  icon: '◻',
                  title: 'Pattern tracking for therapy',
                  desc: 'Over weeks, a memory-enabled AI companion builds a picture of your patterns that you can bring to therapy: what triggered responses this week, when symptoms were worst, what helped.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: '1.25rem',
                    background: 'rgba(201,168,76,0.05)',
                    border: '1px solid rgba(201,168,76,0.13)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1rem',
                      color: '#c9a84c',
                      fontWeight: 700,
                      minWidth: '1.5rem',
                      marginTop: '1px',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.375rem' }}>
                      {item.title}
                    </p>
                    <p
                      style={{
                        color: 'rgba(245,240,232,0.6)',
                        fontSize: '0.875rem',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── H2: How MEOK is different ─────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              How is MEOK different for people with PTSD?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK was not designed specifically as a PTSD app. But its core architecture
              addresses many of the precise failure modes that make generic AI risky for people
              with trauma histories.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.25rem' }}>
              {[
                {
                  title: 'Consistent personality — never changes unexpectedly',
                  desc: 'Your MEOK companion has a stable, defined character that does not shift between sessions. It responds the same way at 3am on a Tuesday as it did last Wednesday morning. For a nervous system attuned to inconsistency as a threat signal, this predictability is architecturally important.',
                },
                {
                  title: 'Persistent encrypted memory — no re-disclosure required',
                  desc: 'Your full conversation history and memory vault are stored, encrypted, and accessible across every session. You tell MEOK your history once. It remembers. You will never be asked to explain again from scratch.',
                },
                {
                  title: 'Comfort Settings — reducing overwhelming input',
                  desc: 'MEOK\'s Comfort Settings allow users to reduce sensory and cognitive load: quieter notification patterns, simpler interface modes, reduced prompt frequency. These are not generic accessibility features — they are designed for people whose nervous systems need a lower-intensity environment.',
                },
                {
                  title: 'Maternal Covenant care floor — no hollow reassurance',
                  desc: 'The Maternal Covenant governance framework requires every response to meet a minimum care standard. Hollow reassurances — "I\'m sure you\'ll be fine" — are regenerated. The sycophancy detector prevents the AI from telling you what you want to hear rather than what is true.',
                },
                {
                  title: 'Predictable responses — no sudden surprises',
                  desc: 'MEOK\'s response architecture is governed by the Byzantine Council — a multi-model consensus layer that prevents single erratic outputs. What you get is stable, considered, and consistent.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: '1.25rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(245,240,232,0.07)',
                    borderRadius: '0.75rem',
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.5rem', fontSize: '0.95rem' }}>
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: 'rgba(245,240,232,0.6)',
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── H2: Memory ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              Does MEOK remember my trauma history?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Yes — and you control exactly what is stored, what is visible, and what can be deleted.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s memory vault uses end-to-end encryption. Your trauma history, your conversation
              history, your emotional patterns — all of it is encrypted with keys that only you hold.
              MEOK AI LABS cannot read your memories. No third party can access them. They are yours.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Within the memory system, you choose what your companion retains. You can mark specific
              memories as private. You can delete anything. You can export the full archive. This is
              not a policy statement — it is a technical reality. Memory portability and deletion are
              built into the architecture, not bolted on as terms-of-service promises.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 0 }}>
              For people with PTSD, the ability to control your own history — to decide what is
              remembered, what is shared, what is deleted — is not a minor feature. It is a
              meaningful form of agency in a context where agency matters enormously.
            </p>
          </section>

          {/* ── H2: Crisis detection ──────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              Can MEOK detect a PTSD crisis?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK cannot diagnose a PTSD episode or make clinical assessments. But its Guardian
              layer and care-scoring system are designed to recognise patterns of acute distress
              and respond appropriately.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              When conversation patterns suggest someone is in acute distress — through language
              shifts, disengagement signals, or explicit statements of crisis — the Guardian layer
              activates. This does not mean the AI attempts to provide crisis counselling. It means
              it immediately and clearly routes to appropriate professional resources: PTSD UK,
              Combat Stress, Samaritans, or emergency services as appropriate.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s care-scoring system also monitors sustained pattern changes over days and
              weeks — not just acute events. A gradual withdrawal, increasing flatness of affect,
              or declining engagement with previously important things will surface as a concern
              through the companion&apos;s natural voice. Not as a clinical alert. As a genuine,
              caring question.
            </p>
            <div
              style={{
                padding: '1.5rem',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '0.75rem',
              }}
            >
              <p
                style={{
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.8)',
                  margin: 0,
                  fontSize: '0.9rem',
                }}
              >
                <strong style={{ color: '#c9a84c' }}>Important: </strong>
                If you are in a PTSD crisis right now, please do not wait for an AI to direct
                you to support. Contact{' '}
                <strong style={{ color: '#f5f0e8' }}>PTSD UK (ptsduk.org)</strong>,{' '}
                <strong style={{ color: '#f5f0e8' }}>Combat Stress (0800 138 1619)</strong>, or{' '}
                <strong style={{ color: '#f5f0e8' }}>Samaritans (116 123)</strong> directly.
              </p>
            </div>
          </section>

          {/* ── H2: Veterans ──────────────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              Is AI safe for veterans with PTSD?
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Veterans with combat-related PTSD face specific challenges that generic AI tools are
              entirely unprepared for. The nature of military trauma — operational experiences that
              cannot always be fully articulated, hypervigilance calibrated to environments that no
              longer exist, moral injury, survivor guilt — requires a level of context and
              sensitivity that a general-purpose chatbot simply does not have.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Combat Stress (0800 138 1619) and PTSD UK are the specialist services for UK veterans
              and service personnel with PTSD. These organisations have trained clinicians with
              direct experience of military mental health. For any veteran with PTSD, accessing
              these specialist services is the priority — not AI.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              That said, there is a documented gap between when veterans are discharged and when
              they access civilian mental health services — sometimes months, sometimes years. In
              that gap, a stable, consistent, memory-enabled AI companion that does not push
              engagement, does not forget, and does not behave unpredictably is meaningfully
              safer than the alternatives.
            </p>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 0 }}>
              MEOK is not a veteran-specific product. But its architecture — predictable behaviour,
              encrypted persistent memory, care-ethics governance, no sudden personality shifts —
              addresses the specific failure modes that make generic AI inappropriate for people
              with trauma histories. Veterans should use MEOK only as a supplement to, never a
              substitute for, specialist veteran mental health care.
            </p>
          </section>

          {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1.25rem',
                color: '#f5f0e8',
              }}
            >
              Generic chatbot vs MEOK for PTSD support
            </h2>
            <p
              style={{
                lineHeight: 1.85,
                color: 'rgba(245,240,232,0.7)',
                marginBottom: '1.5rem',
              }}
            >
              The table below compares the structural properties that matter for PTSD support —
              not features, but design decisions.
            </p>
            <div
              style={{
                overflowX: 'auto',
                borderRadius: '0.75rem',
                border: '1px solid rgba(245,240,232,0.08)',
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderBottom: '1px solid rgba(245,240,232,0.1)',
                    }}
                  >
                    <th
                      style={{
                        padding: '0.875rem 1rem',
                        textAlign: 'left',
                        color: 'rgba(245,240,232,0.5)',
                        fontWeight: 600,
                        width: '40%',
                      }}
                    >
                      Property
                    </th>
                    <th
                      style={{
                        padding: '0.875rem 1rem',
                        textAlign: 'left',
                        color: 'rgba(245,240,232,0.5)',
                        fontWeight: 600,
                      }}
                    >
                      Generic chatbot
                    </th>
                    <th
                      style={{
                        padding: '0.875rem 1rem',
                        textAlign: 'left',
                        color: '#c9a84c',
                        fontWeight: 600,
                      }}
                    >
                      MEOK
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      prop: 'Persistent memory across sessions',
                      generic: '✗ None, or fragile opt-in',
                      meok: '✓ Encrypted vault, always on',
                    },
                    {
                      prop: 'Consistent personality',
                      generic: '✗ Probabilistic, shifts unpredictably',
                      meok: '✓ Stable, governed character',
                    },
                    {
                      prop: 'Trauma re-disclosure required',
                      generic: '✗ Every session, from scratch',
                      meok: '✓ Once, remembered permanently',
                    },
                    {
                      prop: 'Care ethics governance framework',
                      generic: '✗ Content policy only',
                      meok: '✓ Maternal Covenant',
                    },
                    {
                      prop: 'Anti-sycophancy protection',
                      generic: '✗ Optimised to feel affirming',
                      meok: '✓ Active sycophancy detector',
                    },
                    {
                      prop: 'Crisis routing to specialist services',
                      generic: '⚠ Generic crisis disclaimers',
                      meok: '✓ Guardian layer, specialist routing',
                    },
                    {
                      prop: 'User control over memory deletion',
                      generic: '⚠ Limited, platform-dependent',
                      meok: '✓ Full control, export, delete',
                    },
                    {
                      prop: 'Optimisation target',
                      generic: '✗ Engagement and session length',
                      meok: '✓ User flourishing (care score)',
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.prop}
                      style={{
                        borderBottom: i < 7 ? '1px solid rgba(245,240,232,0.05)' : 'none',
                        background:
                          i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                      }}
                    >
                      <td
                        style={{
                          padding: '0.75rem 1rem',
                          color: 'rgba(245,240,232,0.65)',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}
                      >
                        {row.prop}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem 1rem',
                          color: 'rgba(245,240,232,0.45)',
                          fontSize: '0.8rem',
                        }}
                      >
                        {row.generic}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem 1rem',
                          color: 'rgba(245,240,232,0.85)',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}
                      >
                        {row.meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── WHAT MEOK IS NOT ──────────────────────────────────────────── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1rem',
                color: '#f5f0e8',
              }}
            >
              What MEOK is not
            </h2>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
              We want to be completely unambiguous about this. MEOK is not:
            </p>
            <div
              style={{
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(245,240,232,0.08)',
                borderRadius: '0.875rem',
                marginBottom: '1.25rem',
              }}
            >
              <ul
                style={{
                  paddingLeft: '1.25rem',
                  color: 'rgba(245,240,232,0.65)',
                  lineHeight: 2,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}
              >
                <li>
                  <strong style={{ color: '#f5f0e8' }}>Not therapy.</strong> MEOK cannot process
                  trauma. It cannot conduct EMDR, CPT, or any other evidence-based trauma treatment.
                </li>
                <li>
                  <strong style={{ color: '#f5f0e8' }}>Not a clinical tool.</strong> MEOK cannot
                  diagnose PTSD or any other condition, and nothing it says constitutes clinical
                  assessment.
                </li>
                <li>
                  <strong style={{ color: '#f5f0e8' }}>Not a crisis service.</strong> If you are
                  in crisis, contact PTSD UK, Combat Stress, or Samaritans — not your AI companion.
                </li>
                <li>
                  <strong style={{ color: '#f5f0e8' }}>Not a substitute for professional care.</strong>{' '}
                  Using MEOK should never be a reason to delay, reduce, or avoid clinical treatment.
                </li>
                <li>
                  <strong style={{ color: '#f5f0e8' }}>Not infallible.</strong> MEOK makes
                  mistakes. Its pattern detection is not perfect. Its responses, however
                  carefully governed, are generated by AI. It should be one layer of support —
                  never the only one.
                </li>
              </ul>
            </div>
            <p style={{ lineHeight: 1.85, color: 'rgba(245,240,232,0.7)', marginBottom: 0 }}>
              We say this not as a legal disclaimer, but because we mean it. MEOK was built by
              someone who has experienced the inadequacy of generic AI in difficult personal
              moments. We know the difference between genuine care infrastructure and a product
              that exploits vulnerable people&apos;s need for connection. We are trying, carefully, to
              build the former.
            </p>
          </section>

          {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '1.25rem',
                color: '#f5f0e8',
              }}
            >
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                {
                  q: 'Can AI help with PTSD?',
                  a: 'AI can play a limited but meaningful supplementary role in PTSD support — particularly between therapy sessions, for daily grounding, journalling prompts, and pattern tracking. It cannot replace trauma-focused therapy such as EMDR or CPT, and it should never be used as a substitute for clinical care. If you are in crisis, contact PTSD UK at ptsduk.org, Combat Stress on 0800 138 1619 (veterans), or Samaritans on 116 123.',
                },
                {
                  q: 'What are the risks of using AI for PTSD support?',
                  a: 'The main risks are retraumatisation through inconsistent or unexpected AI behaviour, unhealthy dependency, and a false sense of security that delays professional help. Generic chatbots are particularly risky because they have no memory, inconsistent personalities, and no trauma-informed design. A well-governed AI companion with persistent memory and predictable behaviour carries significantly lower risk.',
                },
                {
                  q: 'Why are generic AI chatbots poor for PTSD support?',
                  a: 'Generic chatbots have no persistent memory (requiring you to re-disclose trauma repeatedly), inconsistent personalities that can feel unsafe or jarring, and no understanding of trauma-sensitive communication. They are optimised for general engagement, not for the predictability and psychological safety that people with PTSD need.',
                },
                {
                  q: 'How is MEOK different for people with PTSD?',
                  a: 'MEOK is built around persistent memory, consistent personality, and a care ethics framework called the Maternal Covenant. For people with PTSD this matters because: your companion never changes unexpectedly, never forgets your history, never requires re-disclosure, and is calibrated to respond predictably. Comfort Settings let users reduce overwhelming input. The Guardian layer routes to professional resources when needed.',
                },
                {
                  q: 'Is MEOK safe for veterans with PTSD?',
                  a: 'MEOK is not a clinical tool and cannot replace specialist veteran mental health services such as Combat Stress (0800 138 1619). However, its architecture — consistent personality, encrypted memory, predictable responses, and care ethics governance — makes it more suitable as a between-session support tool than generic chatbots. Veterans should always maintain their clinical care alongside any AI companion use.',
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(245,240,232,0.07)',
                    borderRadius: '0.75rem',
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
                    {q}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'rgba(245,240,232,0.6)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CRISIS RESOURCES (repeated at end) ───────────────────────── */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '0.875rem',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#c9a84c',
                marginBottom: '0.75rem',
              }}
            >
              UK PTSD &amp; mental health crisis support
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {[
                { name: 'PTSD UK', detail: 'ptsduk.org', sub: 'Resources, therapy directory, peer support' },
                { name: 'Combat Stress', detail: '0800 138 1619', sub: 'Veterans, free, 24/7' },
                { name: 'Samaritans', detail: '116 123', sub: 'Free, 24/7, call or text' },
                { name: 'NHS 111', detail: '111', sub: 'Mental health option available' },
              ].map(({ name, detail, sub }) => (
                <div
                  key={name}
                  style={{
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '0.625rem',
                    border: '1px solid rgba(245,240,232,0.06)',
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.2rem', fontSize: '0.875rem' }}>
                    {name}
                  </p>
                  <p style={{ color: '#c9a84c', margin: '0 0 0.2rem', fontSize: '0.875rem', fontWeight: 600 }}>
                    {detail}
                  </p>
                  <p style={{ color: 'rgba(245,240,232,0.4)', margin: 0, fontSize: '0.75rem' }}>
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div
            style={{
              marginTop: '3rem',
              padding: '3rem 2rem',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: '1.25rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#c9a84c',
                marginBottom: '1rem',
              }}
            >
              Sovereign AI Companion
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 1.875rem)',
                fontWeight: 900,
                color: '#f5f0e8',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Consistent. Remembers. Never changes on you.
            </h2>
            <p
              style={{
                color: 'rgba(245,240,232,0.55)',
                marginBottom: '2rem',
                maxWidth: '460px',
                margin: '0 auto 2rem',
                lineHeight: 1.75,
                fontSize: '0.95rem',
              }}
            >
              Free to start. Encrypted from day one. Your MEOK companion learns your patterns,
              remembers your history, and never treats you like a stranger. Not therapy — but
              something real, available when it matters.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                color: '#0d0c18',
                borderRadius: '0.625rem',
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              Begin the Ceremony
            </Link>
            <p
              style={{
                marginTop: '1.25rem',
                fontSize: '0.8rem',
                color: 'rgba(245,240,232,0.3)',
                lineHeight: 1.6,
              }}
            >
              If you are in crisis right now: PTSD UK — ptsduk.org &nbsp;·&nbsp; Combat Stress — 0800 138
              1619 &nbsp;·&nbsp; Samaritans — 116 123
            </p>
          </div>

          {/* ── RELATED READING ───────────────────────────────────────────── */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(245,240,232,0.07)',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'rgba(245,240,232,0.4)',
                marginBottom: '1rem',
              }}
            >
              Related reading
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                {
                  href: '/blog/ai-for-depression',
                  label: 'AI for depression: what the evidence says →',
                },
                {
                  href: '/blog/ai-for-anxiety',
                  label: 'AI for anxiety: honest limits and genuine uses →',
                },
                {
                  href: '/blog/building-care-into-ai',
                  label: 'Building care into AI: the Maternal Covenant →',
                },
                {
                  href: '/blog/the-memory-problem',
                  label: 'The memory problem: why AI that forgets is bad for mental health →',
                },
                {
                  href: '/blog/guardian-family-safety',
                  label: 'MEOK Guardian: how the safety layer works →',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>
      <MarketingFooter />
    </>
  )
}
