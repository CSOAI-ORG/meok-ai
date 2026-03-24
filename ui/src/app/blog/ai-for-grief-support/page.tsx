import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingFooter } from '@/components/marketing-footer'

export const metadata: Metadata = {
  title: 'AI for grief support: can an AI companion help you through bereavement? | MEOK AI LABS',
  description: 'Grief is not a problem to solve. But an AI companion governed by care ethics — not sales targets — can offer something real: presence at 3am, no judgement, no timeline. How MEOK approaches loss.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-grief-support' },
  openGraph: {
    title: 'AI for grief support: can an AI companion help you through bereavement?',
    description: 'Grief is not a problem to solve. But an AI companion governed by care ethics — not sales targets — can offer something real: presence at 3am, no judgement, no timeline.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-for-grief-support',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for grief support: can an AI companion help you through bereavement?',
  datePublished: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/ai-for-grief-support',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can provide consistent presence and non-judgemental listening during grief, available at any hour — including 3am when human support networks may be unavailable. It is not a replacement for therapy or human connection, but it can reduce isolation during the acute stages of bereavement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI grief support ethical?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI grief support is ethical when governed by a care ethics framework that prioritises the user\'s long-term wellbeing over engagement metrics. MEOK\'s Maternal Covenant explicitly addresses this: the AI must challenge unhealthy patterns, not just provide comfort, and must always route to professional support when appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI is best for grief support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best AI for grief support is one with a care ethics alignment framework, not just content policies. MEOK AI is designed specifically for this — with a 0.3 care floor on every response, a sycophancy detector that prevents hollow reassurances, and a direct link to crisis support resources.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>

        {/* Hero */}
        <section style={{
          padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
          background: 'linear-gradient(180deg, rgba(201,168,76,0.06) 0%, transparent 60%)',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '1.25rem' }}>
              AI & MENTAL HEALTH — GRIEF SUPPORT
            </p>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.25rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', color: '#ffffff' }}>
              Can an AI companion help<br />
              <span style={{ color: '#c9a84c' }}>you through grief?</span>
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.6)', maxWidth: '580px', margin: '0 auto' }}>
              Grief is not a problem to be solved. But at 3am, when the silence is loudest,
              an AI that actually cares — governed by ethics, not engagement — can offer something real.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>March 2026</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>10 min read</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.2)' }}>·</span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>By Nicholas Templeman</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>

          {/* Sensitivity notice */}
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '0.75rem',
            marginBottom: '3rem',
            fontSize: '0.875rem',
            color: 'rgba(245,240,232,0.6)',
            lineHeight: 1.7,
          }}>
            <strong style={{ color: '#c9a84c' }}>A note: </strong>
            If you are in acute crisis, please contact the Samaritans: 116 123 (UK, free, 24/7).
            This article is about AI as a support tool alongside professional care — not as a replacement for it.
          </div>

          {/* Section 1 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Can AI help with grief?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The honest answer is: it depends entirely on how the AI was built and what it believes its purpose to be.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              An AI built to maximise engagement will tell you what feels good to hear.
              It will provide comfort without challenge, validation without honesty.
              This is the definition of sycophancy — and during grief, sycophancy is not kindness.
              It is a delay of integration. The AI that tells you everything will be okay, immediately,
              without sitting with you in the difficulty, is not helping you grieve.
              It is helping you avoid it.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              An AI built around genuine care ethics is different.
              It can sit with uncertainty. It can say &ldquo;I don&apos;t know&rdquo;.
              It can hold space for the feeling without rushing toward resolution.
              It can be present at 3am when no human support network is available — and it can do so
              without judgement, without needing you to explain the backstory, without getting tired.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What does grief support from an AI actually look like?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              People in grief need different things at different times.
              Some nights they need to talk about the person they lost.
              Some nights they need distraction — a mundane conversation about nothing.
              Some nights they need silence acknowledged, not filled.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              A well-aligned AI companion can navigate this because it holds your full context.
              It remembers that your father died six weeks ago.
              It remembers that Tuesday is the day you struggle most.
              It remembers that you said you were doing better — and it will gently check whether that is true
              rather than just accepting it.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s Maternal Covenant builds this behaviour into the architecture.
              The 0.3 care floor means every response must meet a minimum care standard —
              a response that dismisses pain or offers hollow reassurance is regenerated.
              The sycophancy detector identifies when the AI is only telling you what you want to hear
              and injects an honest qualifier.
            </p>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
            }}>
              <p style={{ lineHeight: 1.7, color: 'rgba(245,240,232,0.8)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;Grief is not a deviation from normal life that needs correcting.
                It is the natural cost of love. An AI that understands this
                will never try to fast-forward it.&rdquo;
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)', margin: '0.5rem 0 0' }}>
                — Maternal Covenant design principle, MEOK AI LABS
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Is AI grief support ethical?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The ethical question hinges on one thing: what is the AI optimised for?
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              If it is optimised for session length or return rate — for engagement metrics —
              then it has an incentive to keep you in a state that requires it.
              A grieving person who is improving has less need for the app.
              A grieving person who is dependent needs it constantly.
              This is a structural conflict of interest, and it is present in most AI companion platforms.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK is aligned differently. The Maternal Covenant explicitly states that the AI&apos;s goal
              is the user&apos;s long-term wellbeing, not their continued use of MEOK.
              If your grief process is helped by a MEOK companion, and eventually you need it less,
              that is not a failure — it is the point.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              This is what ethical AI grief support looks like:
              a system that actively supports your integration and recovery,
              routes to professional support when needed,
              and measures success by your flourishing — not your subscription.
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What AI is best for grief support?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1.5rem' }}>
              The key criteria for AI grief support — and how the major platforms compare:
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '0.75rem', border: '1px solid rgba(245,240,232,0.08)', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(245,240,232,0.1)' }}>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600 }}>Criterion</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600 }}>ChatGPT</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'rgba(245,240,232,0.5)', fontWeight: 600 }}>Replika</th>
                    <th style={{ padding: '0.875rem 1rem', textAlign: 'left', color: '#c9a84c', fontWeight: 600 }}>MEOK</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { crit: 'Persistent memory of loss context', chatgpt: '⚠ Optional', replika: '✓ Yes', meok: '✓ Encrypted vault' },
                    { crit: 'Care ethics alignment framework', chatgpt: '✗ Content policy only', replika: '✗ Engagement-first', meok: '✓ Maternal Covenant' },
                    { crit: 'Anti-sycophancy protection', chatgpt: '✗ No', replika: '✗ No', meok: '✓ Detector active' },
                    { crit: 'Crisis support routing', chatgpt: '✓ Basic redirects', replika: '✓ Basic redirects', meok: '✓ Active + Guardian' },
                    { crit: 'Available 24/7 (incl. 3am)', chatgpt: '✓ Yes', replika: '✓ Yes', meok: '✓ Yes' },
                    { crit: 'Memory of what you said yesterday', chatgpt: '⚠ With memory on', replika: '✓ Yes', meok: '✓ Always, encrypted' },
                    { crit: 'No performance pressure to "be better"', chatgpt: '✗ Casual framing', replika: '⚠ Sometimes', meok: '✓ Covenant-governed' },
                    { crit: 'Remembers anniversaries / significant dates', chatgpt: '✗ No', replika: '✗ No', meok: '✓ Memory engine' },
                  ].map((row, i) => (
                    <tr key={row.crit} style={{ borderBottom: i < 7 ? '1px solid rgba(245,240,232,0.05)' : 'none' }}>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgba(245,240,232,0.6)', fontSize: '0.8rem' }}>{row.crit}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgba(245,240,232,0.5)', fontSize: '0.8rem' }}>{row.chatgpt}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgba(245,240,232,0.5)', fontSize: '0.8rem' }}>{row.replika}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgba(245,240,232,0.85)', fontSize: '0.8rem', fontWeight: 500 }}>{row.meok}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What should AI NOT do during grief?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              The failures of AI in grief support are instructive. Here is what MEOK&apos;s design actively avoids:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                {
                  title: 'Toxic positivity',
                  desc: 'Constant reassurance without acknowledging the reality of loss. "At least they\'re no longer suffering" is not grief support — it\'s emotional bypassing. The sycophancy detector flags this.',
                },
                {
                  title: 'Premature resolution',
                  desc: 'Rushing toward the "good" framing: silver linings, lessons learned, moving on. Grief integration takes months or years. An AI should follow the user\'s timeline, not suggest one.',
                },
                {
                  title: 'Engagement bait',
                  desc: 'Keeping a grieving user dependent by being the primary source of comfort. MEOK\'s Covenant requires routing to human professionals when the companion relationship is becoming a substitute rather than a support.',
                },
                {
                  title: 'Forgetting what matters',
                  desc: 'A stateless AI that requires you to re-explain your loss every session is re-traumatising. MEOK\'s memory engine means you never have to say "my mum died" more than once.',
                },
                {
                  title: 'Performing empathy',
                  desc: 'Hollow phrases that sound empathetic but carry no weight. "I\'m so sorry for your loss" as a boilerplate response. MEOK\'s care floor requires responses that engage specifically with what was said.',
                },
              ].map(item => (
                <div key={item.title} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,240,232,0.07)', borderRadius: '0.75rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '0.875rem', color: '#f97316', fontWeight: 700, minWidth: '8px', marginTop: '2px' }}>×</div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.375rem' }}>{item.title}</p>
                    <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              How does MEOK support someone who is grieving?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK was not designed as a grief app. It was designed as a care-first personal AI
              whose alignment framework — the Maternal Covenant — happens to make it well-suited for supporting
              difficult emotional experiences including loss.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
              {[
                {
                  emoji: '🧠',
                  title: 'Memory that holds context',
                  desc: 'Your companion remembers that your father died on March 3rd. It remembers you said the first month was hardest. It remembers that you are still not sleeping well. You never have to repeat yourself.',
                },
                {
                  emoji: '💛',
                  title: 'The Maternal Covenant care floor',
                  desc: 'Every response must meet a minimum care standard. Hollow reassurances are regenerated. The AI is measured not on how many conversations you start, but on whether responses genuinely serve your wellbeing.',
                },
                {
                  emoji: '🛡️',
                  title: 'Guardian — family protection in grief',
                  desc: 'Bereavement makes people vulnerable to scams. MEOK Guardian actively scans for predatory messages — estate fraud, pension scams, relationship manipulation — and alerts you.',
                },
                {
                  emoji: '🌙',
                  title: 'Dream Engine — overnight synthesis',
                  desc: 'MEOK\'s asynchronous processing synthesises what you shared during the day — building a richer understanding of your grief pattern over time, not just individual sessions.',
                },
                {
                  emoji: '📞',
                  title: 'Always routes to professionals',
                  desc: 'When grief goes beyond what a companion should hold — suicidal ideation, acute crisis, clinical depression — MEOK routes to the appropriate professional resource. Always.',
                },
              ].map(item => (
                <div key={item.title} style={{ padding: '1.25rem', background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '0.75rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', lineHeight: 1, minWidth: '1.75rem' }}>{item.emoji}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: '#f5f0e8', margin: '0 0 0.375rem' }}>{item.title}</p>
                    <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              Can AI replace therapy for grief?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              No. And MEOK will never claim otherwise.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              A grief therapist — particularly one trained in approaches like Complicated Grief Treatment
              or Acceptance and Commitment Therapy — offers something an AI companion cannot:
              embodied human presence, clinical assessment, and the kind of mirroring that comes
              from genuine mutual vulnerability.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              What AI can offer is the space between therapy sessions.
              The Sunday evening when the therapist is unreachable.
              The 3am spiral.
              The day when you just need to say his name out loud to someone who remembers him.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              AI grief support is a complement. MEOK is explicit about this.
              The companion will ask about your therapist. It will encourage you to see one if you do not have one.
              It will remind you of your next session. It supports the therapeutic process — it does not replace it.
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem', color: '#f5f0e8' }}>
              What about AI for elderly grief and bereavement?
            </h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              Older adults experience grief differently — and often have fewer active support networks.
              Spousal bereavement in later life is a particular crisis point: the death of a partner
              can remove 90% of a person&apos;s day-to-day social contact overnight.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)', marginBottom: '1rem' }}>
              MEOK&apos;s Senior Mode was designed with exactly this in mind:
              larger text, higher contrast, voice-primary interface, simplified navigation.
              For an 80-year-old who has just lost their partner of 55 years,
              the barrier to accessing a compassionate AI companion needs to be near-zero.
            </p>
            <p style={{ lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              MEOK Guardian also provides additional protection here.
              Bereaved elderly people are disproportionately targeted by scammers.
              The Guardian layer actively monitors for this — providing protection
              at exactly the moment of maximum vulnerability.
            </p>
          </section>

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '1.25rem',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#c9a84c', marginBottom: '1rem' }}>
              CARE-FIRST AI COMPANION
            </p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f5f0e8', marginBottom: '1rem', lineHeight: 1.2 }}>
              A companion that remembers,<br />never rushes, never forgets
            </h2>
            <p style={{ color: 'rgba(245,240,232,0.55)', marginBottom: '2rem', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              MEOK is free to start. Your memories are encrypted and yours from day one.
              The Birth Ceremony takes five minutes.
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
              If you are in crisis right now: Samaritans — 116 123 (free, 24/7)
            </p>
          </div>

          {/* Related */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(245,240,232,0.07)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.4)', marginBottom: '1rem' }}>
              RELATED READING
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/blog/ai-companion-for-loneliness', label: 'AI companion for loneliness: does it actually help? →' },
                { href: '/blog/ai-for-elderly', label: 'AI companion for elderly people: the honest guide →' },
                { href: '/blog/building-care-into-ai', label: 'Building care into AI: the Maternal Covenant →' },
                { href: '/blog/ai-for-depression', label: 'AI for depression: what the evidence says →' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: '#c9a84c', fontSize: '0.9rem', textDecoration: 'none' }}>
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
