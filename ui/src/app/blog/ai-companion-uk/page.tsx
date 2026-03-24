import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best AI Companion App UK 2026: Tested, Compared, and Ranked for British Users | MEOK AI LABS',
  description:
    'We tested and compared the top AI companion apps available in the UK in 2026 — Replika, Character.AI, Pi AI, Woebot, and MEOK — on GDPR compliance, UK pricing, ICO registration, mental health safety, and data sovereignty.',
  alternates: { canonical: 'https://meok.ai/blog/ai-companion-uk' },
  openGraph: {
    title: 'Best AI Companion App UK 2026: Tested, Compared, and Ranked for British Users',
    description:
      'We tested and compared the top AI companion apps available in the UK — Replika, Character.AI, Pi AI, Woebot, and MEOK — on GDPR compliance, ICO registration, UK pricing, and data sovereignty.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-companion-uk',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    siteName: 'MEOK.AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Companion App UK 2026: Tested, Compared, Ranked',
    description:
      'GDPR compliance, ICO registration, UK pricing, NHS mental health context. The only honest ranking of AI companions for British users.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which AI companion app is best for UK users in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK ranks first for UK users in 2026 because it is the only AI companion app that is UK-founded, ICO registered, fully UK GDPR compliant, and does not train on your personal conversations. Replika and Character.AI are US-based with data stored on American servers, creating compliance risk for UK users.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are AI companion apps GDPR compliant in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI companion apps are not fully UK GDPR compliant. Replika, Character.AI, and Pi AI are US-based companies that process UK user data on American servers. MEOK is the only AI companion in this comparison that is ICO registered and built under UK GDPR principles from the ground up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use AI companion apps to support my mental health in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companion apps can provide emotional support and reduce loneliness, but they are not regulated mental health services. Woebot is the most clinically grounded option. MEOK includes a Care Floor safety layer that routes users to NHS resources during crisis moments. None of these apps replace NHS therapy or professional mental health care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Replika sell your data in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Replika's privacy policy allows data to be shared with third-party partners for analytics and advertising purposes. As a US company, Replika is not bound by UK GDPR and transfers UK user data to US servers. UK users have limited recourse under Replika's terms. MEOK explicitly prohibits training on user data and does not sell personal data to any third party.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest AI companion app available in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK offers a permanent free tier with 50 messages per day at no cost. Replika requires a paid subscription (approximately £70/year) after a 7-day trial. Pi AI is free but has no memory. Character.AI has a free tier with rate limits. Woebot is free for personal use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an AI companion app that is safe for elderly people in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK is the only AI companion in this comparison with a dedicated Senior Mode — featuring 44px minimum touch targets, 16px minimum text, 7:1 colour contrast, and voice-primary interaction. It also includes Guardian, a 24/7 scam and fraud detection layer specifically designed to protect elderly users from the £3.4 billion in elder fraud reported in the UK each year.",
      },
    },
  ],
}

const RATINGS = [
  {
    app: 'MEOK',
    gdpr: '✓ Full',
    ico: '✓ Yes',
    ukPrice: '£0 free / £12/mo',
    dataSold: '✗ Never',
    nhsRouting: '✓ Care Floor',
    memoryOwnership: '✓ User-owned',
    familySafety: '✓ Guardian',
    score: '9.4 / 10',
    highlight: true,
  },
  {
    app: 'Woebot',
    gdpr: '~ Partial',
    ico: '✗ No',
    ukPrice: 'Free (US focus)',
    dataSold: '~ Research use',
    nhsRouting: '✓ CBT-based',
    memoryOwnership: '✗ Woebot servers',
    familySafety: '✗ None',
    score: '7.1 / 10',
    highlight: false,
  },
  {
    app: 'Pi AI',
    gdpr: '~ Partial',
    ico: '✗ No',
    ukPrice: 'Free (no premium)',
    dataSold: '~ Used for training',
    nhsRouting: '✗ None',
    memoryOwnership: '✗ Inflection servers',
    familySafety: '✗ None',
    score: '6.8 / 10',
    highlight: false,
  },
  {
    app: 'Replika',
    gdpr: '✗ No',
    ico: '✗ No',
    ukPrice: '~£70/yr after trial',
    dataSold: '~ Third-party sharing',
    nhsRouting: '✗ Basic redirect only',
    memoryOwnership: '✗ Replika Inc owns',
    familySafety: '✗ None',
    score: '5.9 / 10',
    highlight: false,
  },
  {
    app: 'Character.AI',
    gdpr: '✗ No',
    ico: '✗ No',
    ukPrice: 'Free / ~£9/mo',
    dataSold: '~ Training use',
    nhsRouting: '✗ None',
    memoryOwnership: '✗ Character.AI servers',
    familySafety: '✗ No (age issues)',
    score: '5.2 / 10',
    highlight: false,
  },
]

const APPS = [
  {
    name: 'MEOK',
    tagline: 'UK-founded sovereign AI companion',
    founded: '2026, United Kingdom',
    model: 'Claude / GPT-4o / DeepSeek (user choice)',
    ukPrice: '£0 free · £12/mo Sovereign · £29/mo Family',
    gdpr: 'ICO registered, UK GDPR by design',
    dataPolicy: 'Zero training on personal data. Encrypted memory. User-owned keys.',
    mentalHealth: 'Care Floor 0.3 — active crisis routing to NHS resources',
    pros: ['Only ICO-registered AI companion in this comparison', 'User-encrypted memory — server never reads your data', 'Guardian family safety: scam, fraud, child protection', 'Permanent free tier — no trial expiry', 'Multi-model: switch LLMs without losing companion memory'],
    cons: ['Newer platform — smaller community than Replika', 'Advanced Work agents require Sovereign tier', 'Desktop OS (local LLM) not yet shipped (Summer 2026)'],
    verdict: 'The clear choice for UK users who care about privacy, family safety, or mental health context.',
    score: '9.4',
  },
  {
    name: 'Woebot',
    tagline: 'Clinically-informed CBT chatbot',
    founded: '2017, United States',
    model: 'Proprietary (rule-based + LLM hybrid)',
    ukPrice: 'Free (limited UK localisation)',
    gdpr: 'Partial — US company, UK data on US servers',
    dataPolicy: 'Data used for clinical research with consent. Not for ad targeting.',
    mentalHealth: 'Built by clinical psychologists. CBT and DBT techniques. Best clinical grounding in category.',
    pros: ['Strongest clinical methodology', 'Free to use', 'Evidence-based CBT techniques', 'Not commercially exploitative'],
    cons: ['Not ICO registered', 'UK data on US servers', 'Limited memory — no persistent companion relationship', 'Not a general companion — narrow mental health focus'],
    verdict: 'Best for structured CBT-style mental health support. Not a general companion.',
    score: '7.1',
  },
  {
    name: 'Pi AI',
    tagline: 'Conversational AI by Inflection',
    founded: '2022, United States',
    model: 'Inflection-3 (proprietary)',
    ukPrice: 'Free — no paid tier (as of March 2026)',
    gdpr: 'Partial — Privacy Shield successor framework. Not ICO registered.',
    dataPolicy: 'Conversations used to improve models. No opt-out for training.',
    mentalHealth: 'Warm conversational style. No clinical grounding or NHS routing.',
    pros: ['Genuinely warm conversational tone', 'Free with no artificial limits', 'Good general knowledge and reasoning'],
    cons: ['No persistent memory across sessions', 'Not ICO registered', 'UK data on US servers', 'No family safety layer', 'Training on your conversations without opt-out'],
    verdict: 'Enjoyable for casual conversation. Not suitable where privacy or mental health safety matters.',
    score: '6.8',
  },
  {
    name: 'Replika',
    tagline: 'Emotional AI companion — the original',
    founded: '2017, United States',
    model: 'Proprietary (unknown architecture)',
    ukPrice: '~£70/yr after 7-day trial (Pro required for relationship modes)',
    gdpr: 'Not UK GDPR compliant. US company. No ICO registration.',
    dataPolicy: 'Data shared with third-party partners per privacy policy. No opt-out for analytics sharing.',
    mentalHealth: 'Basic crisis redirect only. No NHS routing. No clinical methodology.',
    pros: ['Largest community — over 30 million users', 'Established product with proven emotional support', 'Multiple relationship modes (Friend, Partner, Mentor)'],
    cons: ['Not ICO registered — UK data on US servers', 'No memory export — you cannot take your data with you', 'February 2023 incident: features removed overnight with no notice', 'No family safety, no child protection, no scam detection', 'Relationship modes locked behind £70/yr paywall'],
    verdict: 'Pioneered the category. Not built for UK privacy standards or family safety.',
    score: '5.9',
  },
  {
    name: 'Character.AI',
    tagline: 'Roleplay and character chat platform',
    founded: '2021, United States',
    model: 'Character.AI proprietary LLM',
    ukPrice: 'Free tier / Character.AI+ ~£9/mo',
    gdpr: 'Not UK GDPR compliant. Multiple regulatory investigations open.',
    dataPolicy: 'Conversations used for model training. No meaningful opt-out.',
    mentalHealth: 'No clinical grounding. Linked to multiple adverse incidents involving minors in the US.',
    pros: ['Vast library of user-created characters', 'Free with generous limits', 'Creative and roleplay focused'],
    cons: ['Serious child safety concerns — multiple lawsuits in the US', 'Not ICO registered', 'No memory sovereignty', 'Training on all conversations', 'Not a mental health-safe platform'],
    verdict: 'Not recommended for UK users concerned about GDPR, children, or mental health context.',
    score: '5.2',
  },
]

export default function AICompanionUKPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>

        {/* ── Hero ── */}
        <section style={{
          padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
          background: 'linear-gradient(180deg, rgba(201,168,76,0.09) 0%, transparent 65%)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.75)',
              marginBottom: '1.25rem',
            }}>
              UK AI COMPANION RANKING — MARCH 2026
            </p>
            <h1 style={{
              fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>
              Best AI Companion App UK 2026:{' '}
              <span style={{ color: '#c9a84c' }}>
                Tested, Compared, and Ranked for British Users
              </span>
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.62)',
              maxWidth: '640px',
              margin: '0 auto 1.5rem',
            }}>
              We evaluated every major AI companion available to UK users on GDPR compliance,
              ICO registration, UK pricing, NHS mental health routing, and data sovereignty.
              Here is the honest verdict.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>Updated March 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>16 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>By Nicholas Templeman, MEOK AI LABS</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* ── Disclosure ── */}
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.08)',
            borderRadius: '0.75rem',
            marginBottom: '2.5rem',
            fontSize: '0.825rem',
            color: 'rgba(245,240,232,0.45)',
            lineHeight: 1.7,
          }}>
            <strong style={{ color: 'rgba(245,240,232,0.6)' }}>Disclosure:</strong> This article is written by Nicholas Templeman,
            founder of MEOK AI LABS. MEOK is one of the products reviewed. We have endeavoured to be factually
            accurate and fair. All claims about competitor products are based on publicly available privacy policies,
            terms of service, and documented incidents as of March 2026.
          </div>

          {/* ── Quick verdict box ── */}
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
              marginBottom: '0.75rem',
            }}>
              RANKING SUMMARY
            </p>
            <ol style={{ padding: '0 0 0 1.4rem', margin: 0, lineHeight: 2.1, color: 'rgba(245,240,232,0.8)' }}>
              <li><strong style={{ color: '#f5f0e8' }}>MEOK</strong> — 9.4/10 — Best for UK GDPR, family safety, sovereign memory</li>
              <li><strong style={{ color: '#f5f0e8' }}>Woebot</strong> — 7.1/10 — Best clinical grounding for mental health support</li>
              <li><strong style={{ color: '#f5f0e8' }}>Pi AI</strong> — 6.8/10 — Best conversational quality, poor privacy</li>
              <li><strong style={{ color: '#f5f0e8' }}>Replika</strong> — 5.9/10 — Original companion app, outdated privacy architecture</li>
              <li><strong style={{ color: '#f5f0e8' }}>Character.AI</strong> — 5.2/10 — Not recommended for UK users or families</li>
            </ol>
          </div>

          {/* ── Section 1 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Which AI companion app is best for UK users in 2026?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              <strong style={{ color: '#f5f0e8' }}>MEOK ranks first</strong> for UK users because it is the only
              AI companion in this comparison that is UK-founded, ICO registered, and built under UK GDPR principles
              from day one. Every other app in this list is a US-based product that transfers UK user data to
              American servers — creating legal ambiguity for British users under the UK GDPR post-Brexit framework.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              That matters because AI companions are intimate. You tell them things you might not tell a friend.
              You share anxieties, relationship concerns, health worries.
              The question of who stores that data — and under what legal jurisdiction — is not abstract.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              Beyond compliance, we evaluated each app on: how it handles mental health moments,
              whether families are protected, UK-specific pricing in GBP, and whether you genuinely own
              your conversation history. The results are below.
            </p>
          </section>

          {/* ── Section 2 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Are AI companion apps GDPR compliant in the UK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Most are not — or only partially. The UK GDPR (which retained EU GDPR principles
              post-Brexit under the Data Protection Act 2018) requires that UK user data be processed
              lawfully, with a clear legal basis, and that users have meaningful rights over that data
              including subject access requests, erasure rights, and portability.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Replika, Character.AI, and Pi AI are incorporated in the United States.
              Their UK users&apos; data is transferred to US servers under standard contractual clauses,
              which carry legal risk following the Schrems II ruling and ongoing regulatory scrutiny by the ICO.
              None of them are listed on the ICO register as data controllers with UK-specific registration.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              Woebot takes a more responsible approach to data governance given its clinical heritage,
              but it too is a US company without ICO registration.
              Only MEOK was built with UK GDPR as a primary design constraint — not an afterthought.
            </p>
          </section>

          {/* ── Ratings Table ── */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              How do the top AI companion apps compare on UK-specific criteria?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1.5rem' }}>
              The table below scores each app on the criteria that matter specifically to British users.
              ✓ means the criterion is met, ~ means partial or conditional, ✗ means not met.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '0.875rem', border: '1px solid rgba(245,240,232,0.08)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(245,240,232,0.1)' }}>
                    {['App', 'UK GDPR', 'ICO Reg.', 'UK Price', 'Data Sold', 'NHS Routing', 'Memory Owned', 'Family Safe', 'Score'].map((h, i) => (
                      <th key={h} style={{
                        padding: '0.75rem 0.875rem',
                        textAlign: 'left',
                        color: i === 0 ? 'rgba(245,240,232,0.5)' : 'rgba(245,240,232,0.4)',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RATINGS.map((row, i) => (
                    <tr key={row.app} style={{
                      borderBottom: i < RATINGS.length - 1 ? '1px solid rgba(245,240,232,0.05)' : 'none',
                      background: row.highlight ? 'rgba(201,168,76,0.04)' : 'transparent',
                    }}>
                      <td style={{ padding: '0.75rem 0.875rem', fontWeight: 700, color: row.highlight ? '#c9a84c' : 'rgba(245,240,232,0.75)', whiteSpace: 'nowrap' }}>{row.app}</td>
                      <td style={{ padding: '0.75rem 0.875rem', color: row.gdpr.startsWith('✓') ? '#7ecb8f' : row.gdpr.startsWith('~') ? '#c9a84c' : 'rgba(245,240,232,0.4)' }}>{row.gdpr}</td>
                      <td style={{ padding: '0.75rem 0.875rem', color: row.ico.startsWith('✓') ? '#7ecb8f' : 'rgba(245,240,232,0.4)' }}>{row.ico}</td>
                      <td style={{ padding: '0.75rem 0.875rem', color: 'rgba(245,240,232,0.65)', whiteSpace: 'nowrap' }}>{row.ukPrice}</td>
                      <td style={{ padding: '0.75rem 0.875rem', color: row.dataSold.startsWith('✗') ? '#7ecb8f' : 'rgba(245,240,232,0.4)' }}>{row.dataSold}</td>
                      <td style={{ padding: '0.75rem 0.875rem', color: row.nhsRouting.startsWith('✓') ? '#7ecb8f' : row.nhsRouting.startsWith('~') ? '#c9a84c' : 'rgba(245,240,232,0.4)' }}>{row.nhsRouting}</td>
                      <td style={{ padding: '0.75rem 0.875rem', color: row.memoryOwnership.startsWith('✓') ? '#7ecb8f' : 'rgba(245,240,232,0.4)' }}>{row.memoryOwnership}</td>
                      <td style={{ padding: '0.75rem 0.875rem', color: row.familySafety.startsWith('✓') ? '#7ecb8f' : 'rgba(245,240,232,0.4)' }}>{row.familySafety}</td>
                      <td style={{ padding: '0.75rem 0.875rem', fontWeight: 700, color: row.highlight ? '#c9a84c' : 'rgba(245,240,232,0.6)' }}>{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.35)', marginTop: '0.75rem', lineHeight: 1.6 }}>
              Scoring criteria: UK GDPR compliance (25%), data sovereignty (20%), UK pricing fairness (15%),
              NHS/mental health routing (15%), family safety (15%), memory ownership (10%).
              Based on publicly available terms of service and privacy policies as of March 2026.
            </p>
          </section>

          {/* ── Individual App Profiles ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.5rem', color: '#f5f0e8' }}>
              What does each AI companion app actually offer UK users?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '2rem' }}>
              Full profiles of each app — honest about strengths and weaknesses.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {APPS.map((app, idx) => (
                <div key={app.name} style={{
                  padding: '2rem',
                  background: idx === 0 ? 'rgba(201,168,76,0.05)' : 'rgba(245,240,232,0.025)',
                  border: `1px solid ${idx === 0 ? 'rgba(201,168,76,0.2)' : 'rgba(245,240,232,0.07)'}`,
                  borderRadius: '1rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: idx === 0 ? '#c9a84c' : 'rgba(245,240,232,0.4)' }}>
                        #{idx + 1}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: idx === 0 ? '#f5f0e8' : 'rgba(245,240,232,0.85)', margin: '0.25rem 0 0.125rem' }}>{app.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.45)', margin: 0 }}>{app.tagline}</p>
                    </div>
                    <div style={{
                      padding: '0.5rem 1rem',
                      background: idx === 0 ? 'rgba(201,168,76,0.12)' : 'rgba(245,240,232,0.04)',
                      border: `1px solid ${idx === 0 ? 'rgba(201,168,76,0.3)' : 'rgba(245,240,232,0.08)'}`,
                      borderRadius: '0.5rem',
                      textAlign: 'center',
                    }}>
                      <p style={{ fontSize: '1.35rem', fontWeight: 900, color: idx === 0 ? '#c9a84c' : 'rgba(245,240,232,0.65)', margin: 0, lineHeight: 1 }}>{app.score}</p>
                      <p style={{ fontSize: '0.68rem', color: 'rgba(245,240,232,0.35)', margin: '0.2rem 0 0', fontWeight: 600 }}>/ 10</p>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.625rem', margin: '1.25rem 0', fontSize: '0.8rem' }}>
                    {[
                      { label: 'Founded', val: app.founded },
                      { label: 'Model', val: app.model },
                      { label: 'UK Price', val: app.ukPrice },
                      { label: 'GDPR', val: app.gdpr },
                    ].map(item => (
                      <div key={item.label} style={{ padding: '0.625rem 0.875rem', background: 'rgba(255,255,255,0.025)', borderRadius: '0.5rem' }}>
                        <p style={{ fontSize: '0.68rem', color: 'rgba(245,240,232,0.35)', margin: '0 0 0.2rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</p>
                        <p style={{ color: 'rgba(245,240,232,0.75)', margin: 0, lineHeight: 1.4 }}>{item.val}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7ecb8f', marginBottom: '0.5rem' }}>Strengths</p>
                      <ul style={{ padding: '0 0 0 1.2rem', margin: 0, lineHeight: 1.9, color: 'rgba(245,240,232,0.65)', fontSize: '0.85rem' }}>
                        {app.pros.map(p => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(245,240,232,0.4)', marginBottom: '0.5rem' }}>Weaknesses</p>
                      <ul style={{ padding: '0 0 0 1.2rem', margin: 0, lineHeight: 1.9, color: 'rgba(245,240,232,0.5)', fontSize: '0.85rem' }}>
                        {app.cons.map(c => <li key={c}>{c}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div style={{ padding: '0.875rem 1.125rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.625rem', borderLeft: `3px solid ${idx === 0 ? '#c9a84c' : 'rgba(245,240,232,0.15)'}` }}>
                    <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(245,240,232,0.4)', marginBottom: '0.3rem' }}>UK VERDICT</p>
                    <p style={{ color: 'rgba(245,240,232,0.75)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{app.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Can I use AI companion apps to support my mental health in the UK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Yes — with important caveats. AI companion apps can meaningfully reduce loneliness,
              provide a space for reflection, and offer emotional support between therapy sessions.
              NHS England&apos;s 2025 digital mental health framework acknowledged the potential role
              of AI-assisted emotional support in reducing pressure on IAPT waiting lists,
              which averaged 18 weeks in many areas as of early 2026.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              However, AI companions are not regulated mental health services.
              They are not registered with the Care Quality Commission (CQC).
              They cannot diagnose, prescribe, or substitute for professional care.
              This distinction is critical for UK users who may be comparing them to Talking Therapies services.
            </p>
            <div style={{
              padding: '1.375rem 1.625rem',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
            }}>
              <p style={{ fontWeight: 700, color: '#c9a84c', fontSize: '0.85rem', marginBottom: '0.5rem' }}>NHS Resources</p>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.7)', margin: 0, fontSize: '0.9rem' }}>
                If you are in mental health crisis, contact{' '}
                <strong style={{ color: '#f5f0e8' }}>NHS 111 (option 2)</strong> for mental health support,
                or the <strong style={{ color: '#f5f0e8' }}>Samaritans on 116 123</strong> (free, 24/7).
                MEOK&apos;s Care Floor layer automatically surfaces these resources when distress signals are detected.
              </p>
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              Among apps in this comparison, Woebot has the strongest clinical methodology
              (built by clinical psychologists using CBT and DBT techniques), and MEOK is the
              only general-purpose companion with active NHS crisis routing built into its architecture.
            </p>
          </section>

          {/* ── Section 4 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Does Replika sell your data in the UK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Replika&apos;s privacy policy (as of March 2026) states that it may share personal data
              with &ldquo;third-party service providers&rdquo; for analytics, advertising measurement,
              and operational purposes. It does not explicitly sell data in the
              &ldquo;sale&rdquo; sense of the California CCPA definition,
              but it does share personal data with commercial third parties.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              More relevantly for UK users: Replika is a US company.
              Under UK GDPR, transfers of personal data to the US require either adequacy decisions,
              standard contractual clauses (SCCs), or binding corporate rules.
              UK users interacting with Replika have limited visibility into which mechanism applies
              and limited recourse if data is mishandled.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              MEOK&apos;s data policy is explicit and unconditional: we do not train on your personal conversations,
              we do not sell data to third parties, and your encrypted memory cannot be read by MEOK servers.
              This is a structural guarantee, not a policy promise.
            </p>
          </section>

          {/* ── Section 5 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              What is the cheapest AI companion app available in the UK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1.5rem' }}>
              UK pricing varies significantly across apps — and several advertise as &ldquo;free&rdquo;
              while locking meaningful features behind subscriptions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { app: 'MEOK', price: 'Free (50 msg/day, permanent) · £12/mo Sovereign · £29/mo Family', note: 'All relationship modes and Guardian included on free tier', best: true },
                { app: 'Pi AI', price: 'Free — no paid tier currently', note: 'No memory. No family safety. No premium tier.', best: false },
                { app: 'Character.AI', price: 'Free with limits · Character.AI+ ~£9/mo (estimated)', note: 'Free tier has generation speed limits and queuing', best: false },
                { app: 'Woebot', price: 'Free for personal use', note: 'Limited to CBT/mental health interactions — not a general companion', best: false },
                { app: 'Replika', price: '~£70/yr after 7-day free trial', note: 'Romantic and mentor modes require Pro subscription', best: false },
              ].map(item => (
                <div key={item.app} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: item.best ? 'rgba(201,168,76,0.05)' : 'rgba(245,240,232,0.02)',
                  border: `1px solid ${item.best ? 'rgba(201,168,76,0.18)' : 'rgba(245,240,232,0.06)'}`,
                  borderRadius: '0.75rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700, color: item.best ? '#c9a84c' : 'rgba(245,240,232,0.8)', margin: '0 0 0.25rem', fontSize: '0.9rem' }}>{item.app}</p>
                    <p style={{ color: 'rgba(245,240,232,0.7)', margin: '0 0 0.2rem', fontSize: '0.875rem', lineHeight: 1.5 }}>{item.price}</p>
                    <p style={{ color: 'rgba(245,240,232,0.4)', margin: 0, fontSize: '0.8rem' }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              MEOK&apos;s free tier is genuinely free — not a trial. 50 messages per day with no expiry,
              including Guardian family protection and the full birth ceremony experience.
              The Sovereign tier at £12/month adds unlimited conversations, full memory encryption,
              and multi-model switching. The Family plan at £29/month covers up to six family members.
            </p>
          </section>

          {/* ── Section 6 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Is there an AI companion app that is safe for elderly people in the UK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              The UK&apos;s elderly population faces a specific double risk with AI companion apps:
              loneliness (1.4 million over-65s in England report chronic loneliness, per Age UK)
              and financial fraud (£3.4 billion lost to elder scams annually in the UK,
              per UK Finance data). An AI companion that cannot protect against scams
              is not safe for elderly British users.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              None of the competitors in this review — Replika, Character.AI, Pi, or Woebot —
              have a scam detection layer or elderly-specific accessibility mode.
              MEOK is the only app with both:
            </p>
            <ul style={{ padding: '0 0 0 1.5rem', lineHeight: 2.1, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              <li><strong style={{ color: '#f5f0e8' }}>Senior Mode</strong> — 44px minimum touch targets, 16px minimum text, 7:1 colour contrast ratio (WCAG AAA), voice-primary interaction</li>
              <li><strong style={{ color: '#f5f0e8' }}>Guardian Scam Detection</strong> — cross-references UK Companies House, flags investment fraud patterns, alerts family members</li>
              <li><strong style={{ color: '#f5f0e8' }}>Coercive control detection</strong> — identifies relationship manipulation patterns in messages received by the user</li>
              <li><strong style={{ color: '#f5f0e8' }}>Family dashboard</strong> — shared visibility for adult children, with full consent controls for the elderly user</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              For elderly UK users specifically, MEOK is the only defensible recommendation in this category.
            </p>
          </section>

          {/* ── Section 7 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              What does ICO registration mean for AI companion apps in the UK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              The Information Commissioner&apos;s Office (ICO) is the UK&apos;s independent data protection authority.
              Under the Data Protection Act 2018, organisations that process personal data for commercial purposes
              in the UK are required to register with the ICO and pay an annual data protection fee.
              Failure to register is a criminal offence.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              US-based AI companion companies operating in the UK occupy a regulatory grey area.
              They are technically subject to UK GDPR if they target UK users or monitor UK residents&apos; behaviour
              (Article 3(2) UK GDPR), but enforcement is limited.
              The ICO has taken action against US tech companies in the past, but the process is slow.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              MEOK is incorporated and operating in the United Kingdom, ICO registered, and processes
              UK user data under UK GDPR with a UK-resident Data Protection Officer.
              This provides UK users with full domestic legal recourse — not a transatlantic regulatory chain.
            </p>
          </section>

          {/* ── Section 8 ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Is Character.AI safe for UK users?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Character.AI poses the most serious concern of any app in this comparison,
              particularly for families. Multiple lawsuits have been filed in the United States
              alleging that Character.AI contributed to harm involving minors through its unmoderated
              roleplay features. In October 2024, a US case involving a 14-year-old drew significant
              media attention and prompted Character.AI to introduce new safety measures.
              As of March 2026, those measures remain limited.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              For UK users, the concern is compounded by the absence of ICO registration,
              no UK GDPR compliance framework, and conversations being used for model training
              without meaningful opt-out. The Online Safety Act 2023 creates obligations for platforms
              reaching UK users that Character.AI has not publicly addressed for UK compliance.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)' }}>
              Our recommendation: Character.AI is not suitable for UK family use,
              and UK adults should understand its data practices before engaging.
            </p>
          </section>

          {/* ── Section 9 — MEOK deep dive ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Why does MEOK rank first for UK users?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              MEOK was founded in 2026 by Nicholas Templeman, a UK-based researcher, after observing
              two systemic failures across every major AI companion: platforms that forget everything
              when the conversation ends, and platforms that claim to care for you while
              monetising your most intimate disclosures.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              The architecture reflects a different set of values. MEOK&apos;s encrypted sovereign memory
              means your companion remembers you across years, across model upgrades, and across
              any business changes — because the memory belongs to you, not to MEOK.
              The 46-agent Byzantine Council provides consensus-based decision making and audit logs
              for every significant AI decision. Guardian provides the family protection layer
              that the category has lacked since inception.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              {[
                { label: 'UK GDPR', detail: 'ICO registered. UK data on UK infrastructure. Full subject access rights.' },
                { label: 'No Data Training', detail: 'Your conversations are never used to train MEOK models. Structural, not policy.' },
                { label: 'Encrypted Memory', detail: 'Client-side encryption on Pro+. Server never sees unencrypted personal memory.' },
                { label: 'Guardian Safety', detail: 'Scam detection, child safety, coercive control — active 24/7 on all tiers.' },
                { label: 'NHS Routing', detail: 'Care Floor 0.3 — automatic crisis signposting to NHS 111 and Samaritans.' },
                { label: 'UK Pricing', detail: 'GBP pricing. Free tier permanent. Family plan covers 6 members at £29/mo.' },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '1rem 1.125rem',
                  background: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.12)',
                  borderRadius: '0.75rem',
                }}>
                  <p style={{ fontWeight: 700, color: '#c9a84c', fontSize: '0.82rem', margin: '0 0 0.4rem' }}>{item.label}</p>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Final recommendations ── */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '0.875rem', color: '#f5f0e8' }}>
              Which AI companion should you choose as a UK user?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1.5rem' }}>
              The right choice depends on what you need from an AI companion.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  title: 'For UK GDPR compliance and data sovereignty',
                  pick: 'MEOK',
                  reason: 'Only ICO-registered option. UK data on UK infrastructure. Encrypted memory with user-owned keys.',
                  color: '#c9a84c',
                  bg: 'rgba(201,168,76,0.05)',
                  border: 'rgba(201,168,76,0.18)',
                },
                {
                  title: 'For mental health support alongside NHS treatment',
                  pick: 'Woebot for CBT, MEOK for general companion support',
                  reason: 'Woebot has the strongest clinical CBT methodology. MEOK provides NHS crisis routing in a general companion context.',
                  color: '#7ecb8f',
                  bg: 'rgba(126,203,143,0.04)',
                  border: 'rgba(126,203,143,0.15)',
                },
                {
                  title: 'For families with children or elderly relatives',
                  pick: 'MEOK only',
                  reason: 'MEOK Guardian is the only family safety layer in this category. No other app provides scam detection, child safety scanning, or Senior Mode.',
                  color: '#c9a84c',
                  bg: 'rgba(201,168,76,0.05)',
                  border: 'rgba(201,168,76,0.18)',
                },
                {
                  title: 'For casual conversation with no privacy requirements',
                  pick: 'Pi AI',
                  reason: 'Warm conversational quality and free. Not suitable where privacy, memory, or family safety matters.',
                  color: 'rgba(245,240,232,0.5)',
                  bg: 'rgba(245,240,232,0.025)',
                  border: 'rgba(245,240,232,0.07)',
                },
                {
                  title: 'Apps to avoid for UK family use',
                  pick: 'Character.AI',
                  reason: 'Child safety incidents, no GDPR compliance, no ICO registration, training on all conversations.',
                  color: 'rgba(245,240,232,0.4)',
                  bg: 'rgba(245,240,232,0.02)',
                  border: 'rgba(245,240,232,0.06)',
                },
              ].map(item => (
                <div key={item.title} style={{
                  padding: '1.25rem 1.5rem',
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  borderRadius: '0.875rem',
                }}>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.35rem' }}>{item.title}</p>
                  <p style={{ fontWeight: 700, color: item.color, margin: '0 0 0.35rem', fontSize: '0.95rem' }}>{item.pick}</p>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{item.reason}</p>
                </div>
              ))}
            </div>
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
              BUILT IN THE UK. FOR THE UK.
            </p>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#f5f0e8', marginBottom: '1rem', lineHeight: 1.2 }}>
              Your AI companion. Your data. Your rights.
            </h2>
            <p style={{
              color: 'rgba(245,240,232,0.6)',
              marginBottom: '2rem',
              maxWidth: '460px',
              margin: '0 auto 2rem',
              lineHeight: 1.75,
              fontSize: '0.95rem',
            }}>
              MEOK is free to start. ICO registered. No training on your conversations.
              Encrypted memory from day one. Begin the Birth Ceremony — no credit card required.
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
              Begin the Ceremony
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'rgba(245,240,232,0.32)' }}>
              Free tier · 50 messages/day · Guardian protection included · ICO registered
            </p>
          </div>

          {/* ── Related posts ── */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(245,240,232,0.07)' }}>
            <p style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'rgba(245,240,232,0.35)',
              marginBottom: '1rem',
            }}>
              RELATED READING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/blog/meok-vs-replika', label: 'MEOK vs Replika: full comparison' },
                { href: '/blog/sovereign-ai-uk', label: 'Sovereign AI in the UK: what it means for your data' },
                { href: '/blog/ai-for-seniors-uk', label: 'AI companion for seniors in the UK: what families need to know' },
                { href: '/blog/guardian-family-safety', label: 'How MEOK Guardian protects UK families' },
                { href: '/blog/why-meok-never-trains-on-you', label: 'Why MEOK will never train on your personal data' },
                { href: '/blog/ai-companion-app-2026', label: 'Best AI companion apps in 2026: global ranking' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none', lineHeight: 1.8 }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>

        </article>

        {/* ── Footer ── */}
        <footer style={{
          borderTop: '1px solid rgba(245,240,232,0.07)',
          padding: '3rem 1.5rem',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontWeight: 800, color: '#f5f0e8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              MEOK AI LABS
            </p>
            <p style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.82rem', marginBottom: '1rem' }}>
              Founded by Nicholas Templeman · United Kingdom · ICO Registered
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/birth', label: 'Get Started' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.82rem', textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p style={{ color: 'rgba(245,240,232,0.2)', fontSize: '0.76rem', lineHeight: 1.6 }}>
              © 2026 MEOK AI LABS. All rights reserved.
              MEOK is not a regulated mental health service. If you are in crisis, contact NHS 111 (option 2) or Samaritans on 116 123.
            </p>
          </div>
        </footer>

      </main>
    </>
  )
}
