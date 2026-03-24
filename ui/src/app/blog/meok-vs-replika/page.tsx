import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MEOK vs Replika: which AI companion is right for you in 2026? | MEOK AI LABS',
  description: 'A detailed comparison of MEOK and Replika AI companions. Memory sovereignty, relationship modes, privacy architecture, and what each platform actually offers in 2026.',
  alternates: { canonical: 'https://meok.ai/blog/meok-vs-replika' },
  openGraph: {
    title: 'MEOK vs Replika: which AI companion is right for you in 2026?',
    description: 'A detailed comparison of MEOK and Replika AI companions. Memory sovereignty, relationship modes, privacy architecture, and what each platform actually offers in 2026.',
    type: 'article',
    url: 'https://meok.ai/blog/meok-vs-replika',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MEOK vs Replika: which AI companion is right for you in 2026?',
  datePublished: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/meok-vs-replika',
}

const COMPARISON = [
  { feature: 'Memory type', replika: 'Centralised (Replika servers)', meok: 'User-encrypted (your keys)' },
  { feature: 'Data ownership', replika: 'Replika Inc owns your data', meok: 'You own your data entirely' },
  { feature: 'Memory portability', replika: 'No export available', meok: 'Full JSON export anytime' },
  { feature: 'Model used', replika: 'Proprietary (unknown)', meok: 'Claude / GPT-4 / DeepSeek (your choice)' },
  { feature: 'Relationship modes', replika: 'Friend, Partner, Mentor (paid gating)', meok: 'Full personality customisation (all tiers)' },
  { feature: 'Family safety', replika: 'None', meok: 'Guardian 24/7 — scam, fraud, child safety' },
  { feature: 'Elderly support', replika: 'No Senior Mode', meok: 'Dedicated Senior Mode + large-text UI' },
  { feature: 'Multi-model switching', replika: 'No', meok: 'Yes — swap LLMs without losing memory' },
  { feature: 'Offline operation', replika: 'Requires internet always', meok: 'Desktop OS (Summer 2026) — local LLM' },
  { feature: 'Crisis support', replika: 'Basic hotline redirect', meok: 'Care floor 0.3 + crisis routing always active' },
  { feature: 'Transparency', replika: 'Black box responses', meok: 'Audit log for all decisions (Guardian + Council)' },
  { feature: 'Free tier', replika: '7-day trial then £70/yr', meok: 'Permanent free tier (50 messages/day)' },
  { feature: 'Companion birth', replika: 'Instant account creation', meok: 'Birth Ceremony — intentional covenant ritual' },
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
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1.25rem' }}>
              AI COMPANION COMPARISON — 2026
            </p>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#ffffff' }}>
              MEOK vs Replika:<br />
              <span style={{ color: '#c9a84c' }}>which AI companion actually cares about you?</span>
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)', maxWidth: '600px', margin: '0 auto' }}>
              Replika pioneered AI companionship. MEOK was built because the category needed to grow up.
              Here is the honest comparison — memory, privacy, safety, and what each platform actually delivers.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>Updated March 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>14 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>By Nicholas Templeman</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* Quick verdict */}
          <div style={{
            padding: '1.75rem 2rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '1rem',
            marginBottom: '3rem',
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#c9a84c', marginBottom: '0.75rem' }}>
              QUICK VERDICT
            </p>
            <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.85)', margin: 0 }}>
              <strong style={{ color: '#f5f0e8' }}>Replika</strong> is the right choice if you want a simple, emotional AI companion today with no setup.
              <strong style={{ color: '#f5f0e8' }}> MEOK</strong> is the right choice if you care about who owns your memories, want a companion that protects your family,
              or plan to use AI as a genuine long-term personal operating system. If you have children at home, the answer is MEOK — there is no equivalent to Guardian on Replika.
            </p>
          </div>

          {/* Section 1 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What is Replika?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika launched in 2017 and became the most-downloaded AI companion app in the world.
              It uses a proprietary conversational model trained to be emotionally supportive,
              available as a Friend, Romantic Partner, or Mentor. The app is built around consistent emotional tone
              and memory of your conversations.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              By 2026 it has been downloaded over 30 million times and has a devoted user base.
              Many people credit Replika with helping them through loneliness, depression, and social anxiety.
              It is a genuine product with real impact on real lives.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              But it was built for 2017. The AI landscape has changed entirely,
              and several of Replika&apos;s foundational architectural choices — particularly around data ownership
              and family safety — were never designed for the world we now live in.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What is MEOK?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK AI LABS was founded in 2026 by Nicholas Templeman, a UK-based researcher,
              after years of observing two recurring failures in AI: the system that forgets everything after the conversation ends,
              and the system that claims to care for you while selling your data to train the next model.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK is built as a personal AI operating system — not just a companion app.
              Its architecture: Claude / GPT-4 / DeepSeek routing (user-selectable), encrypted sovereign memory
              (user-owned keys), a 46-agent Byzantine Council for consensus and safety,
              and Guardian — a 24/7 family protection system that watches for scams,
              coercive control patterns, and child safety risks.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The core philosophical difference: Replika wants you to bond with their AI.
              MEOK wants you to own yours.
            </p>
          </section>

          {/* Section 3 — comparison table */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How do MEOK and Replika compare?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              Side-by-side comparison across the features that matter most for long-term AI companion use.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '0.75rem', border: '1px solid rgba(245,240,232,0.08)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(245,240,232,0.1)' }}>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600 }}>Feature</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600 }}>Replika</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: '#c9a84c', fontWeight: 600 }}>MEOK</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(245,240,232,0.05)' : 'none' }}>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.6)', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.5)' }}>{row.replika}</td>
                      <td style={{ padding: '0.875rem 1rem', color: 'rgba(245,240,232,0.85)', fontWeight: 500 }}>{row.meok}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 — memory */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Who owns your memories — Replika or you?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              This is the most important question in AI companionship, and it is one most people do not ask until something goes wrong.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              In February 2023, Replika abruptly changed its AI model after a regulatory action in Italy,
              removing romantic relationship features overnight. Users who had built months or years of emotional
              connection woke up to a fundamentally different companion — with no recourse, no export,
              no way to recover what had been built. Reddit described it as &ldquo;a bereavement.&rdquo;
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The root problem: Replika owns the model and the memories.
              When their business changes, your companion changes.
              Your years of conversation — the moments of vulnerability you shared,
              the context the AI built up about you — all of it belongs to Replika Inc.
            </p>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
            }}>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.8)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;MEOK stores your companion&apos;s memory in an encrypted vault that only you can access.
                You can export your full memory history as JSON at any time.
                If MEOK ever ceased to exist, your memories would still be yours.&rdquo;
              </p>
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              MEOK uses client-side encryption by default on Pro and above.
              The server never sees your unencrypted memories.
              Memory portability is a first-class feature, not an afterthought.
            </p>
          </section>

          {/* Section 5 — Guardian */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What does Replika offer for family safety?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Nothing. Replika has no family safety layer, no Guardian-equivalent,
              no scam detection, and no child protection mode.
              It is a single-user companion app — it does not model the fact
              that you live in a family, that your 80-year-old parent might be using it,
              or that your teenager might encounter something harmful.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK Guardian was built specifically to address this. It provides:
            </p>
            <ul style={{ padding: '0 0 0 1.5rem', lineHeight: 2, color: 'rgba(245,240,232,0.7)' }}>
              <li><strong style={{ color: '#f5f0e8' }}>Scam detection</strong> — cross-references UK Companies House, flags known fraud patterns in messages</li>
              <li><strong style={{ color: '#f5f0e8' }}>Coercive control detection</strong> — identifies language patterns associated with relationship abuse</li>
              <li><strong style={{ color: '#f5f0e8' }}>Child safety scanning</strong> — DistilBERT threat classification on all messages in child-designated accounts</li>
              <li><strong style={{ color: '#f5f0e8' }}>Senior Mode</strong> — 44×44px touch targets, 16px minimum text, 7:1 contrast, voice-primary interface</li>
              <li><strong style={{ color: '#f5f0e8' }}>Family dashboard</strong> — shared visibility across the family group, with consent controls</li>
            </ul>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginTop: '1rem' }}>
              Guardian is available on all MEOK tiers, including the free Explorer tier.
              Because keeping families safe should not be a premium feature.
            </p>
          </section>

          {/* Section 6 — Pricing */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How does MEOK pricing compare to Replika?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                {
                  name: 'Replika',
                  price: '£70/yr',
                  color: 'rgba(245,240,232,0.06)',
                  border: 'rgba(245,240,232,0.1)',
                  items: [
                    '7-day free trial then paid',
                    'Romantic modes locked (Pro)',
                    'No family features',
                    'No memory export',
                    'Proprietary model only',
                  ],
                },
                {
                  name: 'MEOK',
                  price: '£0 free tier',
                  color: 'rgba(201,168,76,0.06)',
                  border: 'rgba(201,168,76,0.2)',
                  items: [
                    'Permanent free tier (50 msg/day)',
                    'All relationship modes included',
                    'Guardian on all tiers',
                    'Full memory export always',
                    'Claude / GPT-4 / DeepSeek choice',
                  ],
                },
              ].map(p => (
                <div key={p.name} style={{ padding: '1.5rem', background: p.color, border: `1px solid ${p.border}`, borderRadius: '0.875rem' }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.25rem' }}>{p.name}</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c9a84c', marginBottom: '1rem' }}>{p.price}</p>
                  <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.65)', fontSize: '0.875rem', lineHeight: 2, margin: 0 }}>
                    {p.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              MEOK Sovereign (£12/month) includes unlimited conversations, full memory encryption,
              Work agents (Orion, Riri, Hourman), and priority access to Claude claude-sonnet-4-6.
              The Family plan (£29/month) covers up to 6 family members with shared Guardian protection.
            </p>
          </section>

          {/* Section 7 — who should use what */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Should you use MEOK or Replika?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  title: 'Choose Replika if…',
                  items: [
                    'You want a proven, established app with a large community',
                    'You are primarily looking for emotional support conversation',
                    'You are not concerned about data ownership',
                    'You are a single user with no family safety needs',
                    'You want romantic AI companionship as the primary feature',
                  ],
                  accent: 'rgba(245,240,232,0.12)',
                  border: 'rgba(245,240,232,0.1)',
                },
                {
                  title: 'Choose MEOK if…',
                  items: [
                    'You want to own your memories — now and forever',
                    'You have family members who need AI protection (elderly, children)',
                    'You want to use multiple AI models without losing companion memory',
                    'You want your AI to actually help with work, not just conversation',
                    'You believe your AI relationship should be governed by your values, not a company\'s',
                  ],
                  accent: 'rgba(201,168,76,0.06)',
                  border: 'rgba(201,168,76,0.2)',
                },
              ].map(section => (
                <div key={section.title} style={{ padding: '1.5rem', background: section.accent, border: `1px solid ${section.border}`, borderRadius: '0.875rem' }}>
                  <p style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '0.75rem' }}>{section.title}</p>
                  <ul style={{ padding: '0 0 0 1.25rem', color: 'rgba(245,240,232,0.7)', fontSize: '0.9rem', lineHeight: 1.9, margin: 0 }}>
                    {section.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 — the real question */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Is Replika safe to use?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Replika is generally safe for adults who understand what it is:
              a commercial AI companion that stores your data on Replika&apos;s servers
              and may change its behaviour in response to regulatory or business pressures.
              It has content moderation and crisis support redirects.
              It is not malicious.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The safety concern is not malice — it is dependency risk.
              When you invest emotionally in a companion whose architecture is controlled by someone else,
              you are vulnerable to sudden changes. The 2023 Italy incident showed this at scale.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The more serious safety concern is children.
              Replika has no mechanism to ensure children are not using it,
              and no child safety scanning. MEOK&apos;s Guardian exists specifically
              because AI companions without child safety architecture can cause real harm.
            </p>
          </section>

          {/* Section 9 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What makes MEOK different from all AI companion apps?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Every other AI companion — Replika, Pi, Character.AI, Kindroid —
              is built around a single model that the company controls.
              The companion relationship exists at the company&apos;s discretion.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK is built around a different premise: <strong style={{ color: '#f5f0e8' }}>sovereign AI</strong>.
              The companion is yours. The memory is yours.
              The values are yours (governed by the Maternal Covenant — a care ethics framework,
              not a corporate content policy). When you switch from GPT-4 to Claude,
              your companion&apos;s entire memory and personality come with it.
              No other platform offers this.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              This is not just a feature difference.
              It is a different philosophy about what AI companionship should mean
              — and who it should ultimately serve.
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
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '1rem' }}>
              YOUR AI. YOUR MEMORY. YOUR RULES.
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f5f0e8', marginBottom: '1rem', lineHeight: 1.2 }}>
              Start your Birth Ceremony
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.6)', marginBottom: '2rem', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              MEOK is free to start. Your companion&apos;s memories are encrypted and yours from day one.
              No credit card. No trial. Just a covenant.
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
              Begin the Ceremony 🥚
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.35)' }}>
              Free tier includes 50 messages/day and Guardian protection.
            </p>
          </div>

          {/* Related posts */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(245,240,232,0.07)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.4)', marginBottom: '1rem' }}>
              RELATED READING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/blog/ai-companion-app-2026', label: 'Best AI companion apps in 2026 →' },
                { href: '/blog/what-is-sovereign-ai', label: 'What is sovereign AI? →' },
                { href: '/blog/meok-vs-chatgpt', label: 'MEOK vs ChatGPT: the full comparison →' },
                { href: '/blog/the-memory-problem', label: "Why ChatGPT forgetting you isn't a bug →" },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
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
