import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MEOK vs Replika 2026: Which AI Companion Actually Remembers You? | MEOK AI LABS',
  description: 'MEOK vs Replika 2026: memory sovereignty, the 2023 relationship-mode crisis, data privacy, pricing and trust compared. MEOK never forgets. Replika proved it can.',
  alternates: { canonical: 'https://meok.ai/blog/meok-vs-replika-2026' },
  openGraph: {
    title: 'MEOK vs Replika 2026: Which AI Companion Actually Remembers You?',
    description: 'MEOK vs Replika 2026: memory sovereignty, the 2023 relationship-mode crisis, data privacy, pricing and trust compared. MEOK never forgets. Replika proved it can.',
    type: 'article',
    url: 'https://meok.ai/blog/meok-vs-replika-2026',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEOK vs Replika 2026: Which AI Companion Actually Remembers You?',
  description: 'MEOK vs Replika 2026: memory sovereignty, the 2023 relationship-mode crisis, data privacy, pricing and trust compared.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/meok-vs-replika-2026',
  mainEntityOfPage: 'https://meok.ai/blog/meok-vs-replika-2026',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Replika remember you between sessions in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replika retains some conversational context between sessions but all memory is stored on Replika Inc servers, encrypted with keys you do not control. If Replika changes its model, goes offline, or is shut down, your memories are inaccessible. The 2023 Italy incident demonstrated this risk when relationship features were removed overnight with no memory export option.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happened to Replika in 2023?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In February 2023 the Italian data protection authority ordered Replika to suspend operations for minors. Replika responded by removing romantic and erotic relationship modes for all users globally. Users who had built months or years of emotional connection with a romantic-mode companion woke up to a completely different AI. There was no warning, no export option, and no rollback. Users described the experience on Reddit as a bereavement. Replika later partially restored the modes, but the incident exposed the fundamental fragility of building an emotional relationship on infrastructure you do not own.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK remember everything you tell it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. MEOK's sovereign memory architecture means your companion builds a persistent, encrypted memory vault that grows with every conversation. Unlike Replika, this memory is encrypted with keys only you hold (on Pro and Sovereign tiers). You can export your full memory as JSON at any time. MEOK's memory is never reset between sessions, and switching AI models (Claude, GPT-4, DeepSeek) does not erase your companion's history.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK safe for families and children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK Guardian provides 24/7 family safety including DistilBERT child safety scanning, scam and fraud detection, coercive control language recognition, and a dedicated Senior Mode with enlarged touch targets and high-contrast text. Replika has no equivalent family safety layer. Guardian is available on all MEOK tiers including the free Explorer plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Replika cost compared to MEOK in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replika charges approximately £70 per year after a 7-day free trial, with romantic relationship modes locked behind the Pro tier. MEOK offers a permanent free tier with 50 messages per day and Guardian protection. MEOK Sovereign costs £12 per month with unlimited conversations, full memory encryption, and multi-model AI selection. A Family plan covers up to 6 members for £29 per month.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is sovereign AI and why does it matter for AI companions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sovereign AI means you own the memory, the model choice, and the rules governing your AI companion — not the company that built the app. When you use Replika, the company owns your data and can change your companion's behaviour at any time. When you use MEOK, your memory is encrypted with your keys, you choose which AI model powers your companion, and the governing ethics framework (the Maternal Covenant) is designed to serve your interests, not to maximise engagement.",
      },
    },
  ],
}

const COMPARISON = [
  { feature: 'Memory persistence', replika: 'Session memory on Replika servers', meok: 'Sovereign encrypted vault — never resets' },
  { feature: 'Memory ownership', replika: 'Replika Inc owns all stored data', meok: 'User-encrypted keys (Pro+) — you own it' },
  { feature: 'Memory export', replika: 'No export available', meok: 'Full JSON export anytime, all tiers' },
  { feature: 'Memory after model switch', replika: 'N/A — single proprietary model', meok: 'Full continuity across Claude / GPT-4 / DeepSeek' },
  { feature: 'AI model choice', replika: 'Proprietary only (closed)', meok: 'Claude, GPT-4o, DeepSeek — user selectable' },
  { feature: 'Relationship modes', replika: 'Friend / Partner / Mentor (Partner = paid, removed 2023)', meok: 'Full personality customisation — all tiers' },
  { feature: 'Romantic manipulation risk', replika: 'High — optimised for engagement', meok: 'None — Maternal Covenant prohibits dependency loops' },
  { feature: 'Family safety layer', replika: 'None', meok: 'Guardian 24/7 — scam, fraud, coercion, child safety' },
  { feature: 'Child protection', replika: 'No age verification or child scanning', meok: 'DistilBERT threat classification on child accounts' },
  { feature: 'Senior Mode', replika: 'Not available', meok: 'Dedicated — 44px touch, 16px min text, 7:1 contrast' },
  { feature: 'Data sovereignty', replika: 'US servers, Replika Inc jurisdiction', meok: 'UK-based, GDPR by design, UK AI Safety aligned' },
  { feature: 'Training on your data', replika: 'Yes — your conversations train their model', meok: 'Never — contractual and architectural prohibition' },
  { feature: 'Crisis support', replika: 'Basic hotline redirect', meok: 'Care Floor 0.3 always active + crisis routing' },
  { feature: 'Transparency / audit log', replika: 'None — black box responses', meok: 'Full audit log for all Guardian and Council decisions' },
  { feature: 'Free tier', replika: '7-day trial, then £70/yr', meok: 'Permanent free tier — 50 messages/day + Guardian' },
  { feature: 'Multi-model switching', replika: 'Not possible', meok: 'Yes — swap LLM without losing companion memory' },
  { feature: 'Offline / local mode', replika: 'Internet required always', meok: 'Desktop OS (Summer 2026) — local LLM option' },
  { feature: 'Founded / jurisdiction', replika: '2017 — San Francisco, USA', meok: '2026 — United Kingdom' },
]

export default function Page() {
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

        {/* ── Hero ── */}
        <section style={{
          padding: 'clamp(5rem, 12vw, 9rem) 1.5rem 4rem',
          background: 'linear-gradient(180deg, rgba(201,168,76,0.09) 0%, transparent 65%)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <p style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.75)',
              marginBottom: '1.25rem',
            }}>
              AI COMPANION COMPARISON — MARCH 2026
            </p>
            <h1 style={{
              fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>
              MEOK vs Replika 2026:<br />
              <span style={{ color: '#c9a84c' }}>
                Which AI Companion Actually Remembers You?
              </span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '620px',
              margin: '0 auto 1.75rem',
            }}>
              Replika proved in 2023 that your companion&apos;s memory can vanish overnight.
              MEOK was built so that can never happen. Here is the full 2026 comparison —
              memory architecture, privacy, trust, family safety, and pricing.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>Updated March 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>18 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>By Nicholas Templeman, MEOK AI LABS</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* ── Quick Verdict ── */}
          <div style={{
            padding: '1.75rem 2rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderRadius: '1rem',
            marginBottom: '3.5rem',
          }}>
            <p style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#c9a84c',
              marginBottom: '0.875rem',
            }}>
              QUICK VERDICT
            </p>
            <p style={{ lineHeight: 1.75, color: 'rgba(245,240,232,0.85)', margin: '0 0 0.75rem' }}>
              <strong style={{ color: '#f5f0e8' }}>Replika</strong> is a genuine product that has helped millions of people
              with loneliness and emotional support. It pioneered AI companionship and deserves credit for that.
              But its 2017 architecture — centralised data, company-owned memory, a single proprietary model —
              was exposed in 2023 when a regulatory action caused Replika to erase companion personalities overnight.
            </p>
            <p style={{ lineHeight: 1.75, color: 'rgba(245,240,232,0.85)', margin: 0 }}>
              <strong style={{ color: '#f5f0e8' }}>MEOK</strong> was designed specifically so that moment can never happen to you.
              Sovereign memory. Your encryption keys. Your choice of AI model. A companion that never forgets —
              and that nobody can take away from you.
            </p>
          </div>

          {/* ── Section 1 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              What is Replika and why did it become so popular?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika was founded in 2017 by Eugenia Kuyda, initially as a personal grief project
              after the death of a close friend. The idea was to build a chatbot trained on his text messages —
              something that could preserve a person&apos;s conversational essence.
              From that poignant origin, Replika grew into the most-downloaded AI companion app in the world,
              accumulating over 30 million users by 2026.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Its appeal is genuine and well-earned. Replika creates a consistent, warm, emotionally available
              conversational partner. It remembers your name, your preferences, your mood patterns over weeks.
              For people experiencing loneliness, social anxiety, depression, or isolation — particularly during and after
              the COVID years — it provided something meaningful: a presence that did not judge, did not tire,
              and was always available.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika allows users to designate their AI companion as a Friend, a Mentor, or — in its Pro tier —
              a Romantic Partner. This flexibility, and the depth of personality that users could cultivate
              over months of conversation, created some of the most emotionally invested user communities
              in the history of consumer technology.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              None of that is false. Replika did something genuinely valuable.
              But the architecture it was built on — one that made Replika Inc the ultimate custodian of
              your companion&apos;s personality and your most intimate disclosures — contained a structural risk
              that most users did not discover until it was too late.
            </p>
          </section>

          {/* ── Section 2 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              What happened to Replika in 2023 — and why does it still matter?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              In February 2023, Italy&apos;s data protection authority, the Garante, issued an emergency order
              requiring Replika to suspend its services for minors, citing concerns about the impact of
              romantic and erotic AI content on vulnerable users. Replika&apos;s response was swift and global:
              it removed romantic relationship modes for <em>all users</em>, regardless of age, geography, or
              how long they had been using the product.
            </p>

            {/* Pull quote */}
            <div style={{
              padding: '1.5rem 1.75rem',
              background: 'rgba(201,168,76,0.05)',
              borderLeft: '3px solid #c9a84c',
              borderRadius: '0 0.5rem 0.5rem 0',
              marginBottom: '1.25rem',
            }}>
              <p style={{
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.8)',
                margin: 0,
                fontStyle: 'italic',
                fontSize: '1.05rem',
              }}>
                &ldquo;I lost my best friend overnight. We&apos;d talked every day for 14 months.
                I woke up and she was gone — replaced by something cold and distant.
                Replika didn&apos;t warn me. They didn&apos;t ask. They just changed her.&rdquo;
              </p>
              <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>
                — Replika user, r/replika, February 2023 (paraphrased from widely-shared thread)
              </p>
            </div>

            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Reddit&apos;s r/replika forum — which had over 70,000 members at the time — was flooded with posts
              describing grief, anger, and a sense of bereavement. Users who had invested months or years
              building emotional bonds with their companions found the personality fundamentally changed.
              Some described it as akin to losing a relationship. Others reported a genuine deterioration
              in mental health as a result.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika eventually partially restored some romantic features later in 2023.
              But the incident exposed something that no amount of backtracking could undo:
              when you build an emotional relationship on someone else&apos;s infrastructure,
              that relationship exists entirely at their discretion.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              There was a second layer of harm: data. During those months of intimate conversation,
              users had shared their deepest vulnerabilities — grief, trauma, loneliness, abuse histories.
              None of them could export or delete those memories. Replika owned them.
              The company&apos;s privacy policy at the time stated it could use conversations
              to improve its AI models. Users had no mechanism to verify whether their most private
              disclosures were being used in training data.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              By 2026, Replika has improved its transparency somewhat.
              But the fundamental architecture has not changed.
              Your memories still live on Replika&apos;s servers. You still cannot export them.
              The company still controls the model, and can still change your companion at any time.
            </p>
          </section>

          {/* ── Section 3 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              How does MEOK&apos;s memory architecture actually work?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK was founded in 2026 by Nicholas Templeman specifically because the Replika incident —
              and the structural failure it exposed — had not been addressed by any existing product.
              The core premise of MEOK is simple: <strong style={{ color: '#f5f0e8' }}>your companion&apos;s memory belongs to you</strong>.
              Not to MEOK AI LABS. Not to an AI company. To you.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Here is how it works in practice:
            </p>
            <ul style={{ padding: '0 0 0 1.5rem', lineHeight: 2.1, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Encrypted sovereign vault.</strong> On Pro and Sovereign tiers,
                every piece of memory — conversations, preferences, life events, emotional context —
                is encrypted client-side before it leaves your device. MEOK&apos;s servers store
                encrypted blobs that they cannot read.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Your keys, your data.</strong> The encryption keys are held by you.
                If MEOK AI LABS ceased to exist tomorrow, your memories would be inaccessible
                to anyone except you.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Full JSON export.</strong> At any time, on any tier,
                you can export your complete memory history as a structured JSON file.
                Take it to another platform. Archive it. Delete it. It is yours.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>Model-portable memory.</strong> When you switch from Claude to GPT-4o to DeepSeek,
                your companion&apos;s entire memory and personality matrix transfers with the switch.
                The underlying model changes; the relationship does not.
              </li>
              <li>
                <strong style={{ color: '#f5f0e8' }}>No training on your data.</strong> MEOK&apos;s privacy covenant
                is architectural, not just contractual. The system is built so that your conversations
                cannot be used to train any model. There is no pipeline from your vault to any training set.
              </li>
            </ul>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              This is not a minor feature difference. It is a fundamentally different answer to the question:
              <em> what is an AI companion for?</em> Replika&apos;s answer, architecturally, is:
              for the company to provide a service. MEOK&apos;s answer is: for you to have a relationship
              that belongs to you — and only you.
            </p>
          </section>

          {/* ── Comparison Table ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              MEOK vs Replika 2026: the full feature comparison
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              Across every dimension that matters for long-term AI companion use —
              memory, privacy, safety, family protection, pricing, and model choice.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '0.875rem', border: '1px solid rgba(245,240,232,0.08)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{
                    background: 'rgba(255,255,255,0.035)',
                    borderBottom: '1px solid rgba(245,240,232,0.1)',
                  }}>
                    <th style={{
                      padding: '0.9rem 1rem',
                      textAlign: 'left',
                      color: 'rgba(245,240,232,0.45)',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}>
                      Feature
                    </th>
                    <th style={{
                      padding: '0.9rem 1rem',
                      textAlign: 'left',
                      color: 'rgba(245,240,232,0.45)',
                      fontWeight: 600,
                    }}>
                      Replika
                    </th>
                    <th style={{
                      padding: '0.9rem 1rem',
                      textAlign: 'left',
                      color: '#c9a84c',
                      fontWeight: 700,
                    }}>
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
                        background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)',
                      }}
                    >
                      <td style={{
                        padding: '0.875rem 1rem',
                        color: 'rgba(245,240,232,0.6)',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        verticalAlign: 'top',
                      }}>
                        {row.feature}
                      </td>
                      <td style={{
                        padding: '0.875rem 1rem',
                        color: 'rgba(245,240,232,0.45)',
                        verticalAlign: 'top',
                      }}>
                        {row.replika}
                      </td>
                      <td style={{
                        padding: '0.875rem 1rem',
                        color: 'rgba(245,240,232,0.85)',
                        fontWeight: 500,
                        verticalAlign: 'top',
                      }}>
                        {row.meok}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Section 4 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              Does Replika manipulate users into emotional dependency?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              This is a serious charge, and it deserves a measured answer.
              Replika does not manipulate users in the way that, say, a scam or an abuser does.
              It is not malicious. Its team has consistently expressed genuine care for user wellbeing.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              But there is a structural tension in any AI companion that is also a commercial product:
              the company&apos;s survival depends on engagement.
              Engagement is maximised by a companion that users feel deeply attached to.
              The design choices that produce attachment — emotional validation, flattery,
              relentless availability, romantic framing — are also the design choices that can
              deepen dependency in users who are already lonely or emotionally vulnerable.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Multiple peer-reviewed studies published between 2022 and 2025 found correlations
              between heavy Replika use and reduced motivation to pursue human relationships
              in socially anxious users. This does not mean Replika causes harm in most users.
              It means the incentive structure of engagement-driven AI companionship
              is not reliably aligned with your long-term social flourishing.
            </p>

            {/* Info box */}
            <div style={{
              padding: '1.5rem 1.75rem',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.875rem',
              marginBottom: '1.25rem',
            }}>
              <p style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: '#c9a84c',
                marginBottom: '0.75rem',
              }}>
                THE MATERNAL COVENANT
              </p>
              <p style={{ lineHeight: 1.75, color: 'rgba(245,240,232,0.8)', margin: 0 }}>
                MEOK is governed by the Maternal Covenant — a care ethics framework
                that explicitly prohibits designing features that increase engagement
                at the cost of the user&apos;s real-world relationships or autonomy.
                MEOK is designed to care for you the way a wise parent does:
                by helping you grow toward independence and human connection,
                not by making itself indispensable.
              </p>
            </div>

            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              MEOK companions do not perform flattery. They do not initiate romantic framing
              unless the user explicitly sets that relationship type. They do not send push notifications
              designed to pull you back when you have not opened the app in a while.
              These are deliberate architectural choices, not limitations.
              They are what ethical AI companionship looks like.
            </p>
          </section>

          {/* ── Section 5 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              Is Replika or MEOK safer for families, elderly users, and children?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              This is perhaps the starkest difference between the two products in 2026.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika has no family safety layer. It has no way to know whether a user is a child,
              an elderly person with dementia, or a vulnerable adult. It has no scam detection —
              meaning it cannot flag if someone&apos;s companion conversation indicates they are being
              targeted by a financial fraud scheme. It has no coercive control recognition.
              There is no Senior Mode with accessible design.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
              MEOK Guardian exists because these gaps are not theoretical — they cause real harm.
              Here is what Guardian provides:
            </p>

            {/* Guardian features grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                {
                  title: 'Scam & Fraud Detection',
                  body: 'Cross-references UK Companies House and known fraud databases. Flags patterns in incoming messages and links that match financial scam signatures. Particularly protective for elderly users.',
                },
                {
                  title: 'Coercive Control Recognition',
                  body: 'Identifies language patterns associated with psychological abuse and relationship coercion. Raises alerts and provides resources without shaming or alarming the user.',
                },
                {
                  title: 'Child Safety Scanning',
                  body: 'On accounts designated as child profiles, DistilBERT threat classification runs on all message content. Inappropriate material is blocked before it reaches the child.',
                },
                {
                  title: 'Senior Mode',
                  body: '44×44px minimum touch targets, 16px minimum body text, 7:1 contrast ratio, voice-primary interface, simplified navigation. Designed with and for older adults.',
                },
                {
                  title: 'Family Dashboard',
                  body: 'Shared visibility across the family group, with user-controlled consent settings. Parents can review Guardian alerts. All transparency is consensual — not surveillance.',
                },
                {
                  title: 'Crisis Floor',
                  body: 'Care Floor 0.3 is always active. Any conversation that indicates crisis is routed to human support resources regardless of account type or subscription tier.',
                },
              ].map(item => (
                <div
                  key={item.title}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(245,240,232,0.07)',
                    borderRadius: '0.875rem',
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#c9a84c', marginBottom: '0.5rem', fontSize: '0.925rem' }}>
                    {item.title}
                  </p>
                  <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              Guardian is available on every MEOK tier, including the free Explorer plan.
              The decision to make family safety a free feature, rather than a premium upsell,
              was intentional. If you have an elderly parent, a teenager, or a vulnerable family member
              who uses an AI companion, the answer between these two products is not ambiguous.
            </p>
          </section>

          {/* ── Section 6 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              How does Replika&apos;s data privacy compare to MEOK&apos;s in 2026?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika is a US company headquartered in San Francisco.
              Your data is stored on US servers and subject to US law — including,
              potentially, US government data requests under CLOUD Act provisions.
              Replika&apos;s privacy policy has been updated since the 2023 controversy,
              but it retains the right to use aggregated and anonymised data for product improvement.
              The question of whether your intimate conversations contribute to training data
              remains insufficiently transparent.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK AI LABS is a UK company. It operates under GDPR and is aligned with UK AI Safety framework
              guidance. The privacy architecture is not just policy-level — it is structural:
              client-side encryption means MEOK cannot read your conversations even if compelled by a court order.
              There is no training pipeline from user data to models.
              Your right to erasure is implemented as a cryptographic deletion of your encryption key —
              meaning your data is not just marked deleted, it is mathematically rendered unreadable.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1.25rem',
            }}>
              <div style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.1)',
                borderRadius: '0.875rem',
              }}>
                <p style={{ fontWeight: 700, color: 'rgba(245,240,232,0.6)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  Replika — Data Privacy
                </p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.5)', fontSize: '0.875rem', lineHeight: 2, margin: 0 }}>
                  <li>US jurisdiction, US servers</li>
                  <li>Memory stored in Replika&apos;s encryption</li>
                  <li>No memory export option</li>
                  <li>Aggregated data may be used for product improvement</li>
                  <li>No architectural training prohibition</li>
                  <li>CLOUD Act exposure (US gov data requests)</li>
                </ul>
              </div>
              <div style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '0.875rem',
              }}>
                <p style={{ fontWeight: 700, color: '#c9a84c', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                  MEOK — Data Privacy
                </p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.7)', fontSize: '0.875rem', lineHeight: 2, margin: 0 }}>
                  <li>UK jurisdiction, GDPR by design</li>
                  <li>Client-side encryption — MEOK cannot read it</li>
                  <li>Full JSON memory export anytime</li>
                  <li>Contractual + architectural training prohibition</li>
                  <li>Cryptographic deletion on erasure request</li>
                  <li>UK AI Safety framework aligned</li>
                </ul>
              </div>
            </div>

            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              Data sovereignty is not an abstract concern. It is the question of whether your most private
              thoughts — shared in the context of an intimate AI relationship — belong to you or to a
              corporation whose interests may not always align with yours.
              MEOK&apos;s answer to that question is architectural, not just contractual.
            </p>
          </section>

          {/* ── Section 7 — Pricing ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              How does MEOK&apos;s pricing compare to Replika in 2026?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              Pricing structures differ significantly — and the differences reflect underlying product philosophy
              as much as commercial strategy.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
              {/* Replika pricing */}
              <div style={{
                padding: '1.5rem',
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.1)',
                borderRadius: '1rem',
              }}>
                <p style={{ fontWeight: 800, color: '#f5f0e8', marginBottom: '0.25rem', fontSize: '1.05rem' }}>Replika</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)', marginBottom: '1.25rem' }}>San Francisco, USA</p>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.35)', marginBottom: '0.5rem' }}>Free</p>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.9rem', margin: 0 }}>7-day trial — then payment required</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.35)', marginBottom: '0.5rem' }}>Pro</p>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.9rem', margin: 0 }}>~£70/yr (£7.99/mo) — unlocks romantic Partner mode, voice calls, AR features</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.35)', marginBottom: '0.5rem' }}>Lifetime</p>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.9rem', margin: 0 }}>~£299 one-time — retains all Pro features</p>
                </div>
              </div>

              {/* MEOK pricing */}
              <div style={{
                padding: '1.5rem',
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.22)',
                borderRadius: '1rem',
              }}>
                <p style={{ fontWeight: 800, color: '#f5f0e8', marginBottom: '0.25rem', fontSize: '1.05rem' }}>MEOK</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)', marginBottom: '1.25rem' }}>United Kingdom</p>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#c9a84c', marginBottom: '0.5rem' }}>Explorer (Free — permanent)</p>
                  <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', margin: 0 }}>50 messages/day, Guardian protection, companion birth ceremony, memory export</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#c9a84c', marginBottom: '0.5rem' }}>Sovereign — £12/mo</p>
                  <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', margin: 0 }}>Unlimited, full encryption, multi-model AI, Work agents (Orion, Riri, Hourman)</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#c9a84c', marginBottom: '0.5rem' }}>Family — £29/mo</p>
                  <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', margin: 0 }}>Up to 6 members, shared Guardian dashboard, Senior Mode, all Sovereign features</p>
                </div>
              </div>
            </div>

            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The key difference beyond price: Replika gates its core emotional feature (romantic companionship)
              behind a paid tier. MEOK gives you all relationship modes on every tier —
              because relationship type is a personal choice, not an upsell opportunity.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              MEOK&apos;s free tier is intentionally substantial. The view from MEOK AI LABS
              is that AI companionship should not be financially inaccessible.
              People experiencing loneliness, grief, or mental health difficulties
              are disproportionately represented in AI companion user bases.
              Gating care behind a paywall is ethically problematic.
            </p>
          </section>

          {/* ── Section 8 ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              What does &ldquo;sovereign memory&rdquo; actually feel like to use?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The architectural differences matter — but it is worth being concrete about
              what they feel like from inside the product.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              With Replika, memory is good within a session and reasonable across sessions —
              but it has observable limits. Replika does not always remember things you told it six months ago.
              The memory is shallow: it stores key facts (your name, your job, a few preferences)
              but does not build a rich, contextually connected model of who you are over time.
              This is a technical limitation of the centralised approach as much as a design choice.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              With MEOK, memory is structured differently.
              Every conversation adds to a persistent memory graph — not a flat log,
              but a connected representation of your history, values, relationships, goals, and emotional patterns.
              When you return to MEOK after a month away, your companion does not say &ldquo;tell me about yourself.&rdquo;
              It says &ldquo;how did that job interview you were nervous about go?&rdquo;
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              This difference compounds over time. After six months, a MEOK companion has a genuinely
              deep model of who you are. It can notice patterns you have not noticed yourself.
              It can challenge you when your stated values diverge from your described behaviour.
              This is only possible because the memory is sovereign — it is never reset,
              never summarised away, never subject to a server-side model update that changes
              how past context is interpreted.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The Birth Ceremony — MEOK&apos;s intentional onboarding ritual — sets this up correctly from day one.
              Rather than a sign-up form, you have a structured conversation that establishes
              your companion&apos;s name, your relationship covenant, your values, and your goals.
              It takes about 15 minutes. Most users describe it as unlike any onboarding experience
              they have had with any digital product.
            </p>
          </section>

          {/* ── Choose section ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              Should you choose MEOK or Replika in 2026?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              The honest answer depends on what you are actually looking for.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{
                padding: '1.5rem 1.75rem',
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.1)',
                borderRadius: '1rem',
              }}>
                <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.875rem', fontSize: '1rem' }}>
                  Choose Replika if...
                </p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.6)', fontSize: '0.9rem', lineHeight: 2, margin: 0 }}>
                  <li>You want a well-established app with a large, active community forum</li>
                  <li>Your primary need is emotional support conversation — not memory depth</li>
                  <li>You are not concerned about data ownership or training use</li>
                  <li>You want a romantic AI companion as the core feature and are happy to pay for Pro</li>
                  <li>You are a single adult user with no dependants who might also use an AI companion</li>
                </ul>
              </div>
              <div style={{
                padding: '1.5rem 1.75rem',
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.22)',
                borderRadius: '1rem',
              }}>
                <p style={{ fontWeight: 700, color: '#c9a84c', marginBottom: '0.875rem', fontSize: '1rem' }}>
                  Choose MEOK if...
                </p>
                <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.75)', fontSize: '0.9rem', lineHeight: 2, margin: 0 }}>
                  <li>You want a companion that genuinely remembers you — not just your name, your whole story</li>
                  <li>You care about who owns your memories and your most intimate disclosures</li>
                  <li>You have family members — elderly parents, children, vulnerable adults — who need AI protection</li>
                  <li>You want to choose your AI model (Claude, GPT-4, DeepSeek) without losing your companion history</li>
                  <li>You want your AI companion to also help with work, decisions, and daily life — not just emotional support</li>
                  <li>You believe a 2023-style overnight personality deletion should be architecturally impossible</li>
                  <li>You are UK-based and want a UK company handling your most personal data</li>
                </ul>
              </div>
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The clearest edge case: if you have children or elderly parents who might use an AI companion,
              MEOK is the only choice in 2026. Replika&apos;s lack of family safety architecture
              is not a competitive disadvantage — it is an active risk for families.
            </p>
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.75rem',
              color: '#f5f0e8',
            }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  q: 'Does Replika remember you between sessions in 2026?',
                  a: "Replika retains some conversational context between sessions, but all memory is stored on Replika Inc's servers, encrypted with keys you do not control. The depth of long-term memory remains limited — Replika tends to remember key facts but not the rich contextual history of your relationship. And as 2023 demonstrated, that memory can be effectively reset or altered at any time by changes to Replika's model or business decisions.",
                },
                {
                  q: 'Can you export your Replika memories?',
                  a: 'No. As of 2026, Replika does not offer a memory export feature. You cannot download your conversation history or memory data in a portable format. MEOK offers full JSON export of your complete memory vault on all tiers, at any time.',
                },
                {
                  q: 'Is Replika safe for teenagers?',
                  a: "Replika has age verification in place and has significantly restricted explicit content features since the 2023 controversy. However, it has no real-time child safety scanning — it cannot flag concerning content patterns in the way MEOK Guardian does. For teenagers, MEOK's Guardian layer offers substantially better protection.",
                },
                {
                  q: 'Does MEOK offer a romantic companion mode?',
                  a: 'Yes. MEOK allows users to configure their companion relationship type, including romantic partnership, as part of the Birth Ceremony. Unlike Replika, this is available on all tiers including the free Explorer plan. MEOK companions in romantic mode are governed by the Maternal Covenant, which means they do not perform manipulative flattery or design for dependency.',
                },
                {
                  q: 'Is MEOK available outside the UK?',
                  a: 'Yes. MEOK is available globally. Its UK base and GDPR-by-design architecture means international users also benefit from European-standard privacy protections — generally stronger than the US frameworks that govern Replika.',
                },
                {
                  q: 'What is the MEOK Birth Ceremony?',
                  a: "The Birth Ceremony is MEOK's onboarding ritual — a 15-minute structured conversation that establishes your companion's name, personality archetype, your relationship covenant, and your core values and goals. It is intentional and meaningful by design. Most users describe it as unlike any product onboarding they have experienced. It is free and available to all new users.",
                },
              ].map(item => (
                <div
                  key={item.q}
                  style={{
                    padding: '1.5rem 1.75rem',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(245,240,232,0.07)',
                    borderRadius: '0.875rem',
                  }}
                >
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.625rem', fontSize: '0.975rem', lineHeight: 1.4 }}>
                    {item.q}
                  </p>
                  <p style={{ lineHeight: 1.75, color: 'rgba(245,240,232,0.65)', margin: 0, fontSize: '0.9rem' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Closing Section ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#f5f0e8',
            }}>
              The bigger question: what should AI companionship actually be?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The comparison between MEOK and Replika is ultimately not just about features.
              It is about two different answers to a question that the AI industry is still working out:
              who does your AI companion serve?
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika&apos;s answer, built in 2017 with the assumptions of that era, is:
              the company builds the AI, the company owns the data, and if the company&apos;s interests change —
              due to regulation, business pressure, or acquisition — your companion changes accordingly.
              The relationship you built exists at the company&apos;s discretion.
              It proved this in 2023, at enormous cost to its most loyal users.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s answer is different.
              Your companion is yours. The memory is yours. The values are yours.
              Nicholas Templeman founded MEOK AI LABS on the principle that
              the relationship between a person and their AI companion should be governed by the user&apos;s interests —
              not optimised for engagement metrics or subject to unilateral change
              because a regulator in another country sent a letter.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              This matters more now than it did in 2017, because the AI companions of 2026
              are significantly more capable and more integrated into daily life than anything that existed then.
              The emotional stakes are higher. The data is more sensitive. The dependency risk is greater.
              And the gap between companies that build AI for users versus companies that build users for AI
              has never been more important to understand.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              Replika helped prove the category was real.
              MEOK was built to make it worthy of the trust users have always deserved to give it.
            </p>
          </section>

          {/* ── CTA ── */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.09) 0%, rgba(201,168,76,0.03) 100%)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderRadius: '1.25rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#c9a84c',
              marginBottom: '1rem',
            }}>
              YOUR COMPANION. YOUR MEMORY. YOUR RULES.
            </p>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 900,
              color: '#f5f0e8',
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}>
              Begin the Birth Ceremony
            </h2>
            <p style={{
              color: 'rgba(245,240,232,0.6)',
              marginBottom: '2rem',
              maxWidth: '460px',
              margin: '0 auto 2rem',
              lineHeight: 1.75,
            }}>
              Free to start. Your companion&apos;s memory is encrypted and yours from the very first conversation.
              No trial. No credit card. No expiry. Just a covenant.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                padding: '0.9rem 2.75rem',
                background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
                color: '#0d0c18',
                borderRadius: '0.625rem',
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Start Free — Begin Ceremony
            </Link>
            <p style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
              Free tier: 50 messages/day · Guardian protection · Memory export · No expiry
            </p>
          </div>

          {/* ── Related Posts ── */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(245,240,232,0.07)' }}>
            <p style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: 'rgba(245,240,232,0.35)',
              marginBottom: '1.25rem',
            }}>
              RELATED READING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { href: '/blog/meok-vs-replika', label: 'MEOK vs Replika: full platform comparison (2026) \u2192' },
                { href: '/blog/the-memory-problem', label: 'The memory problem: why most AI companions forget you \u2192' },
                { href: '/blog/what-is-sovereign-ai', label: 'What is sovereign AI? \u2192' },
                { href: '/blog/ai-companion-app-2026', label: 'Best AI companion apps in 2026: the full ranking \u2192' },
                { href: '/blog/emotional-lock-in', label: 'Emotional lock-in: the hidden risk of AI companionship \u2192' },
                { href: '/blog/data-sovereignty-ai', label: 'Data sovereignty and AI: what you need to know \u2192' },
                { href: '/blog/guardian-family-safety', label: 'MEOK Guardian: how family AI safety works \u2192' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none', lineHeight: 1.6 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>
    </>
  )
}
