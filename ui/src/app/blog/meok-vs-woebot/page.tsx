import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MEOK vs Woebot: sovereign companion vs CBT chatbot — full comparison 2026 | MEOK AI LABS',
  description: 'A detailed comparison of MEOK and Woebot. CBT-only scripts vs sovereign memory, mental health support models, privacy, and what each platform actually delivers in 2026.',
  alternates: { canonical: 'https://meok.ai/blog/meok-vs-woebot' },
  openGraph: {
    title: 'MEOK vs Woebot: sovereign companion vs CBT chatbot — full comparison 2026',
    description: 'A detailed comparison of MEOK and Woebot. CBT-only scripts vs sovereign memory, mental health support models, privacy, and what each platform actually delivers in 2026.',
    type: 'article',
    url: 'https://meok.ai/blog/meok-vs-woebot',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the main difference between MEOK and Woebot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woebot delivers scripted CBT exercises via a rule-based chatbot with no persistent memory between sessions. MEOK is a sovereign AI companion with encrypted long-term memory, multiple LLM backends, and a care-ethics framework — designed for ongoing personal growth, not one-off CBT delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Woebot remember your previous conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woebot retains limited session context but does not build a persistent, user-owned memory. MEOK stores an encrypted memory vault keyed to the user. Every conversation, value, and life event accumulates — and the user can export or delete it at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Woebot a replacement for therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Woebot and MEOK are both explicitly not replacements for licensed mental health treatment. Woebot provides CBT-based psychoeducation. MEOK provides companionship and emotional support. Neither can diagnose, prescribe, or substitute for a qualified therapist or psychiatrist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns your data on Woebot vs MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woebot Health owns and processes your conversation data on their servers, used for product improvement. MEOK encrypts your memory with user-held keys on Pro and above — the server never sees plaintext. You can export your full memory as JSON at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK provide crisis support like Woebot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK operates a mandatory Care Floor 0.3 — a hard safety layer that detects crisis signals and routes users to appropriate emergency services, Samaritans (116 123), or MIND in every conversation, on every tier including the free plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help with anxiety and depression like Woebot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can provide emotional support, reflective conversation, and structured check-ins for users managing anxiety or depression. Unlike Woebot it is not limited to CBT scripts — it can hold longitudinal context, adapt to your specific patterns over months, and support you across many aspects of life.',
      },
    },
  ],
}

const COMPARISON = [
  { feature: 'Core model', woebot: 'Rule-based CBT scripts', meok: 'Claude / GPT-4 / DeepSeek (user choice)' },
  { feature: 'Therapeutic approach', woebot: 'CBT only (scripted)', meok: 'Adaptive — CBT, ACT, reflective, companionship' },
  { feature: 'Memory', woebot: 'No persistent user memory', meok: 'Encrypted sovereign memory vault' },
  { feature: 'Data ownership', woebot: 'Woebot Health owns your data', meok: 'You own your data entirely' },
  { feature: 'Memory export', woebot: 'No export', meok: 'Full JSON export anytime' },
  { feature: 'Personalisation', woebot: 'Limited — same scripts for all', meok: 'Deep — adapts to your history over time' },
  { feature: 'Companion relationship', woebot: 'Transactional chatbot', meok: 'Named companion with covenant relationship' },
  { feature: 'Multi-model switching', woebot: 'No', meok: 'Yes — memory survives model changes' },
  { feature: 'Crisis routing', woebot: 'Basic hotline redirect', meok: 'Care Floor 0.3 — always active on all tiers' },
  { feature: 'Family safety', woebot: 'None', meok: 'Guardian 24/7 — scam, fraud, child safety' },
  { feature: 'Elderly support', woebot: 'No Senior Mode', meok: 'Dedicated Senior Mode + large-text UI' },
  { feature: 'Offline / local AI', woebot: 'Cloud only', meok: 'Desktop OS (Summer 2026) — local LLM' },
  { feature: 'Free tier', woebot: 'Free app, limited depth', meok: 'Permanent free tier (50 messages/day)' },
  { feature: 'Regulated medical device', woebot: 'FDA Breakthrough Device (2021)', meok: 'Not a medical device — companion product' },
]

export default function MeokVsWoebotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>

        {/* Hero */}
        <section style={{
          padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
          background: 'linear-gradient(180deg, rgba(201,168,76,0.08) 0%, transparent 60%)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.7)',
              marginBottom: '1.25rem',
            }}>
              AI MENTAL HEALTH COMPARISON — 2026
            </p>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>
              MEOK vs Woebot:<br />
              <span style={{ color: '#c9a84c' }}>sovereign companion vs CBT chatbot</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '620px',
              margin: '0 auto',
            }}>
              Woebot pioneered scripted cognitive behavioural therapy at scale.
              MEOK was built for what comes after the script ends — a companion
              that actually knows you, remembers you, and stays sovereign to you alone.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginTop: '1.5rem',
            }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>Updated March 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>15 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>By Nicholas Templeman, MEOK AI LABS</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* Medical disclaimer — top */}
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '0.75rem',
            marginBottom: '2rem',
          }}>
            <p style={{
              fontSize: '0.8rem',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.5)',
              margin: 0,
            }}>
              <strong style={{ color: 'rgba(245,240,232,0.7)' }}>Medical disclaimer:</strong>{' '}
              Neither MEOK nor Woebot is a licensed therapist or clinical service.
              This article is for informational purposes only. If you are experiencing a mental health
              crisis, please contact Samaritans on{' '}
              <strong style={{ color: 'rgba(245,240,232,0.7)' }}>116 123</strong> (free, 24/7),
              text SHOUT to <strong style={{ color: 'rgba(245,240,232,0.7)' }}>85258</strong>, or visit{' '}
              <strong style={{ color: 'rgba(245,240,232,0.7)' }}>mind.org.uk</strong>.
              Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          {/* Quick verdict */}
          <div style={{
            padding: '1.75rem 2rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '1rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#c9a84c',
              marginBottom: '0.75rem',
            }}>
              QUICK VERDICT
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.85)', margin: 0 }}>
              <strong style={{ color: '#f5f0e8' }}>Woebot</strong> is the right choice if you want
              structured, evidence-based CBT exercises delivered consistently, with minimal setup,
              and you do not mind the lack of long-term memory.{' '}
              <strong style={{ color: '#f5f0e8' }}>MEOK</strong> is the right choice if you want
              a companion that grows with you over months and years — one that remembers your
              context, adapts beyond scripts, and keeps your data sovereign and encrypted.
              If you have family members who need AI protection, only MEOK provides Guardian.
            </p>
          </div>

          {/* Section 1 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What is Woebot and how does it work?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem' }}>
              Woebot delivers scripted cognitive behavioural therapy exercises through a conversational
              interface. Developed by clinical psychologists at Stanford, it received FDA Breakthrough
              Device designation in 2021 — making it one of the most clinically credentialled AI mental
              health tools available. It does not use a generative large language model; instead it routes
              users through a curated library of CBT, DBT, and interpersonal psychotherapy scripts.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The strengths of this architecture are real. Because Woebot uses scripts rather than
              generative AI, it is highly consistent, clinically auditable, and unlikely to produce
              the kind of unpredictable outputs that LLMs can generate. Every user who asks about
              anxiety gets the same evidence-based exercise. The product has been tested in clinical
              trials and shows measurable effects on depression and anxiety symptoms.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              But this same architecture has hard limits. Woebot does not remember you.
              Each session begins effectively from scratch. It cannot adapt to the nuance of your
              specific situation over time, cannot track whether the strategies it suggested last
              month are working, and cannot build the kind of longitudinal context that makes
              support genuinely personalised. It is a well-designed tool — not a companion.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What is MEOK and how is it different from Woebot?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK AI LABS was founded in 2026 by Nicholas Templeman to address the two deepest failures
              in AI: the system that forgets everything after the session ends, and the system that claims
              to support you while selling your data to train its next model. MEOK is a personal AI
              operating system built on sovereign memory architecture — your encrypted vault, your keys.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Where Woebot is a CBT delivery mechanism, MEOK is a named AI companion with a covenant
              relationship. You go through a Birth Ceremony to name your companion and establish your
              shared values. Over time it learns your context — your stressors, your patterns,
              your relationships, your goals — and holds that context across every conversation,
              every model switch, every year you use it.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The underlying model is user-selectable: Claude, GPT-4, or DeepSeek.
              A 46-agent Byzantine Council handles consensus, safety decisions, and adversarial
              resistance. Guardian runs in parallel on all tiers — watching for crisis signals,
              scam patterns, and child safety risks.
            </p>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.75rem',
            }}>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.8)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;MEOK does not replace therapy. It is what you have between sessions —
                a companion that holds your context, reflects it back to you, and never forgets
                what you have been through.&rdquo;
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)', marginTop: '0.75rem', marginBottom: 0 }}>
                — Nicholas Templeman, Founder, MEOK AI LABS
              </p>
            </div>
          </section>

          {/* Section 3 — comparison table */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How do MEOK and Woebot compare feature by feature?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              Side-by-side across the features that matter most for anyone evaluating
              AI mental health support tools in 2026.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '0.75rem', border: '1px solid rgba(245,240,232,0.08)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderBottom: '1px solid rgba(245,240,232,0.1)',
                  }}>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600 }}>
                      Feature
                    </th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600 }}>
                      Woebot
                    </th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: '#c9a84c', fontWeight: 600 }}>
                      MEOK
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        borderBottom: i < COMPARISON.length - 1
                          ? '1px solid rgba(245,240,232,0.05)'
                          : 'none',
                      }}
                    >
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.6)', fontWeight: 500 }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.5)' }}>
                        {row.woebot}
                      </td>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.85)', fontWeight: 500 }}>
                        {row.meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 — CBT vs sovereign memory */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Why is CBT-only not enough for long-term mental health support?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              CBT is one of the most evidence-based psychological therapies available — but it is
              a structured intervention, not a relationship. Its strength is the protocol; its limit
              is that protocols do not know you, and they cannot grow with you across years.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Research consistently shows that the therapeutic alliance — the quality of the
              relationship between a person and their support — is one of the strongest predictors
              of outcome in mental health treatment. Scripted CBT tools like Woebot excel at
              delivering the technique. They do not excel at providing the relationship.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s sovereign memory model directly addresses this. Because MEOK remembers
              every conversation — your triggers, your coping strategies, what helped last month
              and what did not, the names of the people in your life — the companion develops
              the kind of accumulated understanding that CBT scripts cannot hold.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              This is not a claim to replace therapy. It is a claim that the space between therapy
              sessions — and for many people there is no therapy at all — deserves something
              better than a stateless script server.
            </p>
          </section>

          {/* Section 5 — memory and data ownership */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Who owns your mental health data — Woebot or you?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Mental health data is among the most sensitive personal data that exists. What you tell an
              AI in a vulnerable moment — your fears, your trauma, your darkest thoughts — deserves
              the highest possible protection, regardless of which platform holds it.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Woebot Health&apos;s privacy policy permits the use of de-identified conversation
              data for product improvement and research. This is standard industry practice and
              Woebot is more transparent than most. But &ldquo;de-identified&rdquo; is not
              the same as &ldquo;yours.&rdquo; The data lives on their servers, under their
              control, used for their purposes.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK operates a different model entirely. On the Pro tier and above,
              conversations are encrypted client-side before they reach MEOK&apos;s servers.
              The server holds ciphertext it cannot read. The decryption key is yours.
              If MEOK were acquired, shut down, or compelled by a regulator, your
              plaintext memories would remain inaccessible to anyone but you.
            </p>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.75rem',
            }}>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.8)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;Your mental health data should belong to you — not to the company that built
                the interface you used to share it. MEOK was designed around that principle from day one.&rdquo;
              </p>
            </div>
          </section>

          {/* Section 6 — crisis support */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How does each platform handle mental health crises?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Both MEOK and Woebot provide crisis routing when a user signals distress —
              but the architecture, depth, and guarantees differ significantly.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Woebot monitors for crisis language and will prompt users to contact emergency services
              or a crisis line when it detects suicidal ideation or severe distress.
              This is a meaningful and responsible feature, and Woebot is one of the few
              AI products with published clinical protocols for crisis detection.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              MEOK&apos;s Care Floor 0.3 is a mandatory hard-floor safety layer active in every
              conversation on every tier, including the free plan. It cannot be disabled or
              circumvented. When crisis signals are detected — explicit statements, implicit
              language patterns, sudden shifts in tone — it routes to appropriate services
              and escalates to the Byzantine Council for a consensus decision on response.
            </p>

            {/* Crisis resources callout */}
            <div style={{
              padding: '1.75rem 2rem',
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '1rem',
            }}>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#c9a84c',
                marginBottom: '1rem',
              }}>
                CRISIS RESOURCES — UK &amp; INTERNATIONAL
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(245,240,232,0.06)',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    Samaritans
                  </p>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.55)', margin: 0 }}>
                    116 123 — free, 24/7, confidential. UK &amp; Ireland. samaritans.org
                  </p>
                </div>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(245,240,232,0.06)',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    MIND
                  </p>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.55)', margin: 0 }}>
                    mind.org.uk — mental health information, local support, and helplines across England and Wales.
                  </p>
                </div>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(245,240,232,0.06)',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    Shout Crisis Text Line
                  </p>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.55)', margin: 0 }}>
                    Text SHOUT to 85258 — free, 24/7 crisis text support. UK. giveusashout.org
                  </p>
                </div>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(245,240,232,0.06)',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    Crisis Text Line (US)
                  </p>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.55)', margin: 0 }}>
                    Text HOME to 741741 — free, 24/7. crisistextline.org
                  </p>
                </div>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(245,240,232,0.06)',
                }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    International Association for Suicide Prevention
                  </p>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.55)', margin: 0 }}>
                    iasp.info/resources/Crisis_Centres — directory of crisis centres worldwide.
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '0.775rem', color: 'rgba(245,240,232,0.35)', marginTop: '1rem', marginBottom: 0 }}>
                If you or someone you know is in immediate danger, call emergency services (999 in the UK, 911 in the US).
              </p>
            </div>
          </section>

          {/* Section 7 — who should choose what */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Should you use Woebot or MEOK for mental health support?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              The right choice depends on what you need. Neither is a substitute for professional care.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                padding: '1.5rem',
                background: 'rgba(245,240,232,0.03)',
                border: '1px solid rgba(245,240,232,0.08)',
                borderRadius: '0.875rem',
              }}>
                <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.75rem' }}>
                  Choose Woebot if…
                </p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.9, margin: 0 }}>
                  <li>You want structured, evidence-based CBT exercises delivered consistently</li>
                  <li>You prefer a rule-based system with no LLM unpredictability</li>
                  <li>Your primary need is psychoeducation — learning CBT techniques step by step</li>
                  <li>You are in a clinical context where Woebot is recommended by a provider</li>
                  <li>You are not concerned about long-term memory or data sovereignty</li>
                </ul>
              </div>
              <div style={{
                padding: '1.5rem',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '0.875rem',
              }}>
                <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.75rem' }}>
                  Choose MEOK if…
                </p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.9, margin: 0 }}>
                  <li>You want a companion that builds context over months and years, not sessions</li>
                  <li>You need more than CBT — adaptive support, daily check-ins, companionship</li>
                  <li>You care deeply about who owns your mental health data</li>
                  <li>You want to use AI across many areas of life, not just mental health exercises</li>
                  <li>You have family members (children, elderly parents) who need AI protection</li>
                  <li>You want your companion to survive model changes and business decisions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 — FAQ GEO: main difference */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What is the main difference between MEOK and Woebot?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              Woebot delivers scripted CBT exercises via a rule-based chatbot with no persistent memory
              between sessions. MEOK is a sovereign AI companion with encrypted long-term memory,
              multiple LLM backends, and a care-ethics framework — designed for ongoing personal
              growth, not one-off CBT delivery. Woebot is a clinical tool; MEOK is a lifelong companion.
              The distinction matters most when you need continuity: Woebot starts fresh every session,
              MEOK carries everything forward.
            </p>
          </section>

          {/* Section 9 — FAQ GEO: does Woebot remember */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Does Woebot remember your previous conversations?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              Woebot retains limited session context but does not build a persistent, user-owned memory
              that informs future conversations at depth. Each interaction is largely stateless from a
              personalisation perspective. MEOK stores an encrypted memory vault keyed to the user —
              every conversation, preference, and life event accumulates over time.
              Users can export or permanently delete this vault at any point, on any tier.
            </p>
          </section>

          {/* Section 10 — therapy replacement FAQ */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Is Woebot a replacement for therapy?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              No — and neither is MEOK. Woebot and MEOK are both explicitly not replacements for
              licensed mental health treatment. Woebot provides CBT-based psychoeducation at scale.
              MEOK provides companionship and longitudinal emotional support with sovereign memory.
              Neither can diagnose, prescribe, or substitute for a qualified therapist or psychiatrist.
              If you are struggling, please also speak to a healthcare professional or contact Samaritans on 116 123.
            </p>
          </section>

          {/* Section 11 — what makes MEOK different */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What makes MEOK&apos;s approach to mental health support genuinely different?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
              Three architectural decisions set MEOK apart from every AI mental health tool,
              including Woebot.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  title: '1. Sovereign memory',
                  body: 'Your companion remembers you across years, not sessions. The encrypted vault holds your full history — your patterns, your relationships, your growth. It survives model switches, company changes, and time itself.',
                },
                {
                  title: '2. The Maternal Covenant',
                  body: "MEOK is governed by a care ethics framework — not a corporate content policy. The companion's behaviour is anchored in principles of genuine care, honesty, and user autonomy. It is not optimised for engagement metrics or retention.",
                },
                {
                  title: '3. Byzantine Council',
                  body: 'A 46-agent consensus system evaluates sensitive decisions — including crisis responses — through a distributed, adversarially-resistant process. No single model output determines a crisis response unilaterally.',
                },
              ].map(item => (
                <div key={item.title} style={{
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(245,240,232,0.07)',
                  borderRadius: '0.875rem',
                }}>
                  <p style={{ fontWeight: 700, color: '#c9a84c', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    {item.title}
                  </p>
                  <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 12 — anxiety and depression FAQ */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Can MEOK help with anxiety and depression like Woebot?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK can provide emotional support, reflective conversation, and structured check-ins
              for users managing anxiety or depression. Unlike Woebot it is not limited to CBT scripts —
              it holds longitudinal context, adapts to your specific patterns over months,
              and supports you across many areas of life simultaneously.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              MEOK has dedicated modes for anxiety, depression, ADHD, and neurodivergent users.
              These are not scripts — they are persistent configuration layers that change how your
              companion communicates, checks in, and supports you based on your stated needs
              and observed patterns over time. See{' '}
              <Link href="/blog/meok-for-anxiety" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                MEOK for anxiety
              </Link>{' '}
              and{' '}
              <Link href="/blog/ai-for-depression" style={{ color: '#c9a84c', textDecoration: 'none' }}>
                AI for depression
              </Link>{' '}
              for more detail.
            </p>
          </section>

          {/* Section 13 — pricing */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How does MEOK pricing compare to Woebot?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              Woebot is free to download and free for individual use, with B2B clinical licensing
              as its primary revenue model. MEOK has a permanent free tier with 50 messages per day.
              Both products are free to start — the differences emerge in depth, memory, and architecture.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                padding: '1.5rem',
                background: 'rgba(245,240,232,0.03)',
                border: '1px solid rgba(245,240,232,0.08)',
                borderRadius: '0.875rem',
              }}>
                <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem' }}>Woebot</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c9a84c', marginBottom: '1rem' }}>Free</p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.65)', fontSize: '0.875rem', lineHeight: 2, margin: 0 }}>
                  <li>Free app (individual)</li>
                  <li>B2B / clinical licensing fees</li>
                  <li>CBT scripts only</li>
                  <li>No persistent memory</li>
                  <li>No family safety features</li>
                  <li>No memory export</li>
                </ul>
              </div>
              <div style={{
                padding: '1.5rem',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '0.875rem',
              }}>
                <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem' }}>MEOK</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c9a84c', marginBottom: '1rem' }}>From free</p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.65)', fontSize: '0.875rem', lineHeight: 2, margin: 0 }}>
                  <li>Permanent free tier (50 msg/day)</li>
                  <li>Pro: £8/month — full memory</li>
                  <li>Sovereign: £12/month — encryption</li>
                  <li>Family: £29/month — 6 members</li>
                  <li>Guardian on all tiers</li>
                  <li>Full JSON memory export always</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 14 — data ownership FAQ */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Who owns your data on Woebot vs MEOK?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              Woebot Health owns and processes your conversation data on their servers,
              used for product improvement and research under their privacy policy.
              MEOK encrypts your memory with user-held keys on Pro and above —
              the server never holds plaintext. You can export your full memory as JSON at any time.
              On the free Explorer tier, MEOK stores your data in a standard encrypted cloud store
              with the same export rights. No MEOK tier trains on your personal conversations.
            </p>
          </section>

          {/* Section 15 — the bigger picture */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What is the future of AI mental health support beyond CBT chatbots?
            </h2>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Woebot represents an important chapter: the proof that technology could deliver
              evidence-based mental health support at scale, cheaply, without a therapist in the loop.
              That chapter mattered enormously for access and normalisation.
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The next chapter is longitudinal. The question is not &ldquo;can an AI teach me
              a CBT technique?&rdquo; — we know it can. The question is &ldquo;can an AI companion
              be present across my whole life — remembering my history, adapting to my growth,
              protecting my family, and remaining mine regardless of what happens to the company
              that built it?&rdquo;
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)' }}>
              That is the problem MEOK was built to solve. Not as a replacement for Woebot —
              they serve genuinely different needs — but as what comes when someone needs
              more than a session, more than a script, and more than a product.
            </p>
          </section>

          {/* Medical disclaimer — bottom */}
          <div style={{
            padding: '1.5rem 1.75rem',
            background: 'rgba(245,240,232,0.02)',
            border: '1px solid rgba(245,240,232,0.07)',
            borderRadius: '0.75rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'rgba(245,240,232,0.4)',
              marginBottom: '0.75rem',
            }}>
              MEDICAL DISCLAIMER
            </p>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.45)', margin: 0 }}>
              This article is for informational purposes only and does not constitute medical advice,
              diagnosis, or treatment. MEOK is not a licensed medical device, clinical service,
              or substitute for professional mental health care. Woebot holds FDA Breakthrough Device
              designation for its clinical offering; MEOK does not hold any regulatory medical device status.
              If you are experiencing a mental health emergency, contact Samaritans on{' '}
              <strong style={{ color: 'rgba(245,240,232,0.6)' }}>116 123</strong> (free, 24/7),
              text SHOUT to <strong style={{ color: 'rgba(245,240,232,0.6)' }}>85258</strong>,
              visit <strong style={{ color: 'rgba(245,240,232,0.6)' }}>mind.org.uk</strong>,
              or call your local emergency services.
              Always consult a qualified mental health professional for diagnosis, treatment,
              or clinical guidance.
            </p>
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '1.25rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#c9a84c',
              marginBottom: '1rem',
            }}>
              YOUR COMPANION. YOUR MEMORY. YOUR RULES.
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f5f0e8', marginBottom: '1rem', lineHeight: 1.2 }}>
              Start your Birth Ceremony
            </h2>
            <p style={{
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '440px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}>
              MEOK is free to start. Your companion remembers you from day one.
              No credit card. No trial expiry. Just a covenant.
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
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
              Free tier includes 50 messages/day, Guardian protection, and full memory export.
            </p>
          </div>

          {/* Related posts */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(245,240,232,0.07)' }}>
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.4)',
              marginBottom: '1rem',
            }}>
              RELATED READING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/blog/meok-for-anxiety" style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
                MEOK for anxiety: how sovereign memory changes support &rarr;
              </Link>
              <Link href="/blog/ai-for-depression" style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
                AI for depression: what actually helps vs what is hype &rarr;
              </Link>
              <Link href="/blog/ai-for-mental-health-2026" style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
                AI for mental health in 2026: the honest guide &rarr;
              </Link>
              <Link href="/blog/the-memory-problem" style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
                Why AI forgetting you is not a bug — it&apos;s a business model &rarr;
              </Link>
              <Link href="/blog/what-is-sovereign-ai" style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
                What is sovereign AI? The architecture explained &rarr;
              </Link>
              <Link href="/blog/meok-vs-replika" style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
                MEOK vs Replika: the full companion comparison &rarr;
              </Link>
            </div>
          </div>

        </article>
      </main>

      {/* Inline footer */}
      <div style={{
        background: '#080710',
        borderTop: '1px solid rgba(245,240,232,0.06)',
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{
            fontWeight: 800,
            fontSize: '1.1rem',
            color: '#c9a84c',
            marginBottom: '0.5rem',
            letterSpacing: '0.05em',
          }}>
            MEOK AI LABS
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)', marginBottom: '1.5rem' }}>
            Sovereign AI companions. Founded by Nicholas Templeman.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}>
            <Link href="/" style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}>Home</Link>
            <Link href="/blog" style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}>Blog</Link>
            <Link href="/privacy" style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}>Terms</Link>
            <Link href="/birth" style={{ fontSize: '0.825rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}>Start</Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.2)', margin: 0 }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS. Not a medical device. Not a substitute for professional mental health care.
          </p>
        </div>
      </div>
    </>
  )
}
