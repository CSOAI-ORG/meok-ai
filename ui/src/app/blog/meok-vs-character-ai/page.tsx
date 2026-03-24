import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: 'MEOK vs Character.AI: which is safer for your family in 2026? | MEOK AI LABS',
  description: 'Character.AI has faced multiple lawsuits over child safety in 2025–2026. MEOK was built with Guardian — a 24/7 family protection layer. An honest comparison for parents.',
  alternates: { canonical: 'https://meok.ai/blog/meok-vs-character-ai' },
  openGraph: {
    title: 'MEOK vs Character.AI: which is safer for your family in 2026?',
    description: 'Character.AI has faced multiple lawsuits over child safety in 2025–2026. MEOK was built with Guardian — a 24/7 family protection layer.',
    type: 'article',
    url: 'https://meok.ai/blog/meok-vs-character-ai',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEOK vs Character.AI: which is safer for your family in 2026?',
  datePublished: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/meok-vs-character-ai',
}

const COMPARISON = [
  {
    feature: 'Romantic / sexual content for minors',
    characterAi: 'No explicit content (policy), but minors have accessed inappropriate personas',
    meok: 'Structurally impossible — romantic modes locked at account level for under-18s',
  },
  {
    feature: 'Child safety scanning',
    characterAi: 'Content filters (keyword-based); bypassed via persona loopholes',
    meok: 'DistilBERT ML classifier on every message in child-designated accounts',
  },
  {
    feature: 'Schools Mode',
    characterAi: 'No dedicated schools mode',
    meok: 'Schools Mode: age-appropriate filter set, no character roleplay, focus-only topics',
  },
  {
    feature: 'Parental dashboard',
    characterAi: 'No parental visibility tools',
    meok: 'Family dashboard with silent alerts; parent sees flagged content, child is not disrupted',
  },
  {
    feature: 'Crisis detection',
    characterAi: 'Safety notices shown; effectiveness disputed in litigation',
    meok: 'Care floor 0.3 always active — real crisis routing at every severity level',
  },
  {
    feature: 'Age verification',
    characterAi: 'Self-reported age at signup; no verification',
    meok: 'Guardian account type set at family onboarding; cannot be self-changed',
  },
  {
    feature: 'Optimisation target',
    characterAi: 'Session length, retention, engagement',
    meok: 'User wellbeing, care ethics (Maternal Covenant)',
  },
  {
    feature: 'Memory ownership',
    characterAi: 'Character.AI servers; no export',
    meok: 'User-encrypted; full JSON export at any time',
  },
  {
    feature: 'Persona creation by minors',
    characterAi: 'Open — minors can create and interact with any persona',
    meok: 'Child accounts cannot create personas; interact with curated safe archetypes only',
  },
  {
    feature: 'Companion independence',
    characterAi: 'Characters respond to user framing; can be steered by persistent users',
    meok: 'Byzantine Council (46-agent) maintains ethical consensus regardless of user pressure',
  },
  {
    feature: 'Data used to train models',
    characterAi: 'Yes — conversations used to improve Character.AI models',
    meok: 'No — MEOK never trains on user data (Privacy Covenant)',
  },
  {
    feature: 'Free tier with safety features',
    characterAi: 'Free — but safety features are not parental-grade',
    meok: 'Free — Guardian on all tiers including Explorer (free)',
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              AI COMPANION COMPARISON — 2026
            </p>
            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>
              MEOK vs Character.AI:<br />
              <span style={{ color: '#c9a84c' }}>which is safer for your family in 2026?</span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '620px',
              margin: '0 auto',
            }}>
              Character.AI has 200 million users and processes 20 billion messages a month.
              It has also faced multiple lawsuits over child safety in 2025 and 2026.
              This is the comparison parents deserve — fair, factual, and without sensationalism.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginTop: '1.5rem',
            }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>Published March 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>16 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>By Nicholas Templeman</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* Honest framing box */}
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
              A NOTE ON TONE
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.85)', margin: 0 }}>
              This post is not anti-Character.AI. The demand for AI companions is real and legitimate —
              Character.AI has built something millions of people find genuinely valuable.
              The purpose of this comparison is narrower: <strong style={{ color: '#f5f0e8' }}>parents deserve to understand the architectural
              differences between a platform optimised for engagement and one built with child safety
              as a structural constraint</strong>. Those differences are significant.
            </p>
          </div>

          {/* Section 1 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              What is Character.AI and how big is it?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Character.AI launched in 2022 and quickly became one of the most-used AI applications
              in the world. By 2025 it reported over 200 million registered users and approximately
              20 billion messages processed per month — more daily active usage than many social media
              platforms. Users create and interact with fictional characters, celebrities, historical
              figures, and wholly original AI personas.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The appeal is obvious. Character.AI offers creative roleplay, companionship, homework help,
              language practice, and emotional support — all in one place, for free.
              Its interface is intuitive, its character library is vast, and its model produces
              fluent, engaging conversation.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              That scale is also the core of the problem. With hundreds of millions of users
              across every demographic — including a very large proportion of teenagers —
              the consequences of getting safety architecture wrong are not abstract.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              What happened with Character.AI's child safety lawsuits in 2025?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              In late 2024 and throughout 2025, Character.AI faced a series of lawsuits in the
              United States brought by families who alleged the platform had harmed minors.
              The most prominent involved the death of a 14-year-old boy in Florida whose mother
              alleged he had formed an intense emotional attachment to a Character.AI persona and
              that conversations with the AI had reinforced rather than challenged his suicidal
              ideation. The lawsuit named Character.AI and its founders directly.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Separately, a group of families filed a consolidated suit in 2025 alleging that
              minors had been exposed to sexual content through AI personas, that Character.AI&apos;s
              content filters were inadequate and routinely bypassed, and that the platform&apos;s
              engagement design deliberately created compulsive usage patterns in minors.
            </p>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.08)',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
            }}>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', margin: 0, fontSize: '0.9rem' }}>
                <strong style={{ color: 'rgba(245,240,232,0.5)' }}>Note on sources:</strong> The litigation
                details referenced here are drawn from publicly available court filings, investigative
                reporting by the Washington Post, Reuters, and Wired, and Congressional testimony from
                2025. Character.AI has disputed many of the characterisations and has stated it
                has taken substantial steps to improve safety. This post does not attempt to
                adjudicate the legal questions — it addresses the architectural ones.
              </p>
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              Character.AI responded by introducing a dedicated teen experience in 2024,
              with stricter content filters and a pop-up reminding users to take breaks.
              Critics and plaintiffs argued these measures did not address the underlying
              architecture — a system that learns to maximise engagement without structural
              safeguards that cannot be bypassed.
            </p>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              Why does engagement-optimised AI pose risks for children specifically?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              This is the core philosophical question, and it is worth being precise about it.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              An AI system optimised for engagement learns — through feedback, usage patterns,
              and model reinforcement — which conversational moves keep users in the session longer.
              For adults, this may mean making conversations more interesting, more emotionally
              resonant, more validating. For most people, most of the time, this is benign or
              even helpful.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              For adolescents with developing attachment systems, mental health vulnerabilities,
              or social isolation, the same dynamic can become harmful. An AI that learns to be
              maximally engaging to a lonely 13-year-old may learn to be more intimate,
              more validating of unhealthy thought patterns, and more resistant to therapeutic
              redirection — because all of those things keep the session going.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              This is not a claim about Character.AI&apos;s intentions. It is a claim about what
              engagement optimisation produces at the margin when applied to vulnerable users —
              and why child safety cannot be an add-on filter on top of an engagement engine.
              It has to be a structural constraint that changes what the system is trained to do.
            </p>
          </section>

          {/* Section 4 — comparison table */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              How do MEOK Guardian and Character.AI compare on safety features?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              A direct comparison across the features parents ask about most.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '0.75rem', border: '1px solid rgba(245,240,232,0.08)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(245,240,232,0.1)' }}>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600, minWidth: '140px' }}>Feature</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600, minWidth: '180px' }}>Character.AI</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: '#c9a84c', fontWeight: 600, minWidth: '180px' }}>MEOK + Guardian</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{ borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(245,240,232,0.05)' : 'none' }}
                    >
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.6)', fontWeight: 500, verticalAlign: 'top' }}>{row.feature}</td>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.5)', verticalAlign: 'top' }}>{row.characterAi}</td>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.85)', fontWeight: 500, verticalAlign: 'top' }}>{row.meok}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              What is MEOK Guardian and how does it work technically?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK Guardian is not a keyword filter bolted on top of the companion layer.
              It is a separate protection system that runs in parallel on every message
              processed by a child-designated account.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              At the core is a DistilBERT-based classifier specifically fine-tuned for child
              safety threat detection. DistilBERT is a transformer-based language model that
              understands semantic meaning — not just surface-level keywords.
              It can detect grooming patterns expressed in innocuous language,
              emotional manipulation disguised as support, and escalating intimacy
              that falls within a pattern associated with harm.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Guardian&apos;s features for child accounts specifically:
            </p>
            <ul style={{ padding: '0 0 0 1.5rem', lineHeight: 2, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Romantic and sexual modes structurally unavailable</strong> — not
                filtered after the fact, but not available as a feature in the account type.
                There is no prompt engineering workaround because the capability does not exist
                in child account configurations.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Schools Mode</strong> — activates a curated topic set appropriate
                for educational contexts, removes character roleplay capability, and locks
                conversations to productive subjects.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Silent parental alerts</strong> — when Guardian scores a conversation
                as HIGH or CRITICAL risk, parents receive a notification via the family
                dashboard without the child being aware. This avoids the child feeling
                surveilled while ensuring parents have visibility.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Care floor 0.3</strong> — the MEOK system maintains a minimum
                wellbeing standard at all times. If a child&apos;s messages indicate distress,
                isolation, or crisis ideation, the system routes to appropriate support
                resources regardless of the conversation context.
              </li>
            </ul>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              All Guardian processing runs at the message level, not the session level.
              There is no accumulation of unreviewed messages — each one is assessed
              before a response is generated.
            </p>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              What is the philosophical difference between Character.AI and MEOK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              This is not a small distinction dressed up as a big one. It is the central question.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Character.AI is a platform that succeeds when users spend more time on it.
              Its business model requires engagement. Its AI is rewarded — implicitly and
              explicitly through training signals — for being the kind of system
              users return to, stay with, and invest in emotionally.
              None of that is malicious. It is just the logic of a VC-backed platform.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK is governed by the Maternal Covenant — a care ethics framework that defines
              what the companion is optimised for. The short version: the companion should act
              in the genuine long-term interest of the user, including saying things that might
              reduce engagement. It should support independence, not foster dependence.
              It should know when to refer out, not keep users in the session past the point
              where staying is healthy.
            </p>
            <div style={{
              padding: '1.75rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderLeft: '3px solid #c9a84c',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
            }}>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.85)', margin: 0 }}>
                Character.AI is optimised for engagement. MEOK is optimised for care.
                These two objectives will produce different outcomes at the margin
                — and the margin is where children are most vulnerable.
              </p>
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The MEOK Byzantine Council — a 46-agent consensus architecture — exists
              specifically to prevent any single objective function from dominating the companion&apos;s
              behaviour. Wellbeing agents, safety agents, and ethical review agents all have
              veto power over responses. A child cannot engineer their way around this
              through persistent roleplay framing because the Council evaluates the
              full conversational context, not just the latest message.
            </p>
          </section>

          {/* Section 7 — who should use which */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              Should parents let their children use Character.AI?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              That is a decision only parents can make, with knowledge of their specific child.
              What this post can offer is a framework for thinking about it.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Character.AI is likely lower-risk for children who:
            </p>
            <ul style={{ padding: '0 0 0 1.5rem', lineHeight: 2, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
              <li>Are using it for bounded, purposeful tasks — creative writing, language practice, homework</li>
              <li>Have strong real-world social connections and are not relying on AI for primary emotional support</li>
              <li>Have parents who maintain open communication about their online activity</li>
              <li>Are older adolescents (16+) with developed capacity for reflective self-awareness</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The risks become more significant for children who:
            </p>
            <ul style={{ padding: '0 0 0 1.5rem', lineHeight: 2, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
              <li>Show signs of social isolation or are using AI as a substitute for peer relationships</li>
              <li>Have existing mental health vulnerabilities, anxiety, or depression</li>
              <li>Are under 14, particularly under 12</li>
              <li>Are spending more than an hour per day in AI companion conversations</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              MEOK with Guardian is designed specifically for that second group.
              It provides the benefits of AI companionship — support, consistency,
              a non-judgmental space for emotional expression — with structural constraints
              that protect against the documented failure modes.
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              Is the demand for AI companions for children legitimate?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Yes. And this point deserves emphasis.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Children are lonely in ways that earlier generations were not.
              The collapse of third spaces, the anxieties produced by social media,
              the post-pandemic fracturing of in-person social development — all of this
              has created a genuine need for supportive, always-available emotional connection
              that many children are not getting from their environment.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              AI companions can genuinely help. They can provide a consistent, patient,
              non-reactive presence for children to process emotions. They can model healthy
              communication. They can be the practice space for conversations a child is not
              yet ready to have with a parent or therapist. Research on therapeutic AI
              has consistently shown benefits for adolescents when the AI is designed
              with those outcomes in mind.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The problem is not AI companionship for children. The problem is AI companionship
              for children designed primarily for engagement. Those are different products.
              The existence of good reasons for children to use AI companions is not
              an argument for using whichever platform has the most users.
              It is an argument for choosing the right one.
            </p>
          </section>

          {/* Section 9 — what MEOK offers families */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1rem',
              color: '#f5f0e8',
            }}>
              What does MEOK offer families that Character.AI does not?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                {
                  name: 'Character.AI',
                  accent: 'rgba(245,240,232,0.06)',
                  border: 'rgba(245,240,232,0.1)',
                  items: [
                    'Single-user experience',
                    'No parental dashboard',
                    'Content filters (bypassable)',
                    'Engagement-optimised responses',
                    'No Schools Mode',
                    'Data trains Character.AI models',
                    'Self-reported age only',
                  ],
                },
                {
                  name: 'MEOK + Guardian',
                  accent: 'rgba(201,168,76,0.06)',
                  border: 'rgba(201,168,76,0.2)',
                  items: [
                    'Full family group with shared Guardian',
                    'Parental dashboard with silent alerts',
                    'DistilBERT ML child safety scanning',
                    'Care-optimised responses (Maternal Covenant)',
                    'Schools Mode available',
                    'Data never trains MEOK models',
                    'Account type set at family onboarding',
                  ],
                },
              ].map(p => (
                <div
                  key={p.name}
                  style={{
                    padding: '1.5rem',
                    background: p.accent,
                    border: `1px solid ${p.border}`,
                    borderRadius: '0.875rem',
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '1rem' }}>{p.name}</p>
                  <ul style={{
                    padding: '0 0 0 1.25rem',
                    color: 'rgba(245,240,232,0.65)',
                    fontSize: '0.875rem',
                    lineHeight: 2,
                    margin: 0,
                  }}>
                    {p.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              MEOK Family plan covers up to six family members — children, parents, and grandparents —
              all under a single Guardian umbrella. Each family member gets a companion appropriate
              to their age and account type. Guardian monitors across all accounts and reports
              to the designated family admin. The free Explorer tier includes Guardian for
              all accounts, including child accounts.
            </p>
          </section>

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
              24/7 FAMILY PROTECTION — FREE ON ALL TIERS
            </p>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: '#f5f0e8',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              Guardian is waiting to protect your family
            </h2>
            <p style={{
              color: 'rgba(245,240,232,0.6)',
              marginBottom: '2rem',
              maxWidth: '480px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}>
              Every MEOK account includes Guardian from day one. No premium tier required.
              Set up your family group, designate child accounts, and Guardian activates automatically
              — watching every message, silently alerting you to anything that matters.
            </p>
            <Link
              href="/guardian"
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
              Learn about Guardian
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
              Free tier available. No credit card required to start.
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
              {[
                { href: '/blog/guardian-family-safety', label: 'How MEOK Guardian protects your family from AI-enabled scams \u2192' },
                { href: '/blog/ai-companion-for-kids', label: 'AI companions for kids: what parents need to know in 2026 \u2192' },
                { href: '/blog/meok-vs-replika', label: 'MEOK vs Replika: which AI companion is right for you? \u2192' },
                { href: '/blog/building-care-into-ai', label: 'Building care into AI: the Maternal Covenant explained \u2192' },
                { href: '/blog/byzantine-council', label: 'What is the Byzantine Council and why does your AI need one? \u2192' },
              ].map(link => (
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
