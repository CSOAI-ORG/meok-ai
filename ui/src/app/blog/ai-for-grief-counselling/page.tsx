import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Grief: How Persistent Memory Supports Long-Term Bereavement (Without Replacing Human Connection) | MEOK AI LABS',
  description: 'Around 600,000 people are bereaved each year in the UK, yet grief support waiting times often stretch to months. MEOK\'s persistent memory remembers who you lost, significant dates, and how you described them — bridging the gap without replacing human care.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-grief-counselling' },
  openGraph: {
    title: 'AI for Grief: How Persistent Memory Supports Long-Term Bereavement (Without Replacing Human Connection)',
    description: 'Around 600,000 people are bereaved each year in the UK. MEOK AI remembers who you lost, the dates that hurt most, and the words you used to describe them — without ever replacing a grief counsellor.',
    type: 'article',
    url: 'https://meok.ai/blog/ai-for-grief-counselling',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Grief: How Persistent Memory Supports Long-Term Bereavement (Without Replacing Human Connection)',
  datePublished: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
  url: 'https://meok.ai/blog/ai-for-grief-counselling',
  description: 'How MEOK\'s persistent memory architecture supports bereaved people over months and years, bridges the gap between professional grief counselling sessions, and actively routes to UK bereavement services without replacing them.',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI support grief counselling in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can complement grief counselling by providing consistent, 24/7 presence between sessions. With around 600,000 people bereaved each year in the UK and professional support waiting times often exceeding several months, AI bridges the gap — but is not a substitute for qualified grief counsellors or organisations like Cruse Bereavement Care.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is grief different from general mental health support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grief is non-linear, can last years, and intensifies around anniversaries, birthdays, and seasonal triggers. Unlike many mental health conditions, it is not a disorder — it is the natural cost of love. Effective support must follow the bereaved person\'s own timeline, not impose recovery milestones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does MEOK\'s persistent memory do for bereaved people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s encrypted memory vault stores who you lost, how you described them, the dates that matter most, and the words you used to talk about your grief. You never have to re-explain your loss. The AI holds context across months and years, proactively acknowledging anniversaries and significant milestones without being prompted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a replacement for Cruse Bereavement Care or grief therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is an AI companion, not a grief counsellor. It actively recommends Cruse Bereavement Care (0808 808 1677), WAY Widowed & Young, and Child Bereavement UK where appropriate. MEOK fills the hours between professional sessions — the 3am moments, the anniversaries, the days when no human support is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does grief last and how does AI adapt to that?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grief has no fixed endpoint. Research suggests acute grief often persists for one to two years, with significant recurrences around anniversaries for much longer. MEOK\'s persistent memory means the companion\'s understanding of your loss deepens over time — it does not reset, does not forget, and does not expect you to be "over it" by any deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'What UK bereavement resources should I know about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key UK bereavement resources include Cruse Bereavement Care (freephone 0808 808 1677), WAY Widowed & Young (waywidowedandyoung.org.uk) for those bereaved under 51, and Child Bereavement UK for families affected by child loss or young people who have lost a parent. The Samaritans (116 123) are available 24/7 for acute distress.',
      },
    },
  ],
}

const s = {
  page: {
    minHeight: '100vh',
    background: '#0d0c18',
    color: '#f5f0e8',
  } as React.CSSProperties,
  hero: {
    padding: 'clamp(5rem, 12vw, 8rem) 1.5rem 4rem',
    background: 'linear-gradient(180deg, rgba(201,168,76,0.06) 0%, transparent 60%)',
    textAlign: 'center' as const,
  },
  heroInner: {
    maxWidth: '720px',
    margin: '0 auto',
  },
  eyebrow: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'rgba(201,168,76,0.7)',
    marginBottom: '1.25rem',
  },
  h1: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  gold: {
    color: '#c9a84c',
  },
  heroPara: {
    fontSize: '1.05rem',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.6)',
    maxWidth: '580px',
    margin: '0 auto',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap' as const,
    marginTop: '1.5rem',
  },
  metaText: {
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.4)',
  },
  metaDot: {
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.2)',
  },
  article: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 1.5rem 6rem',
  },
  notice: {
    padding: '1.25rem 1.5rem',
    background: 'rgba(201,168,76,0.05)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '0.75rem',
    marginBottom: '3rem',
    fontSize: '0.875rem',
    color: 'rgba(245,240,232,0.6)',
    lineHeight: 1.7,
  },
  noticeBold: {
    color: '#c9a84c',
  },
  section: {
    marginBottom: '3rem',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 800,
    lineHeight: 1.3,
    marginBottom: '0.75rem',
    color: '#f5f0e8',
  },
  atomicAnswer: {
    fontSize: '1rem',
    lineHeight: 1.75,
    color: 'rgba(245,240,232,0.85)',
    marginBottom: '1.25rem',
    padding: '1rem 1.25rem',
    background: 'rgba(201,168,76,0.04)',
    border: '1px solid rgba(201,168,76,0.1)',
    borderLeft: '3px solid #c9a84c',
    borderRadius: '0 0.5rem 0.5rem 0',
  },
  para: {
    lineHeight: 1.8,
    color: 'rgba(245,240,232,0.7)',
    marginBottom: '1rem',
  },
  pullQuote: {
    padding: '1.5rem',
    background: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.15)',
    borderRadius: '0.75rem',
    marginBottom: '1rem',
  },
  pullQuoteText: {
    lineHeight: 1.7,
    color: 'rgba(245,240,232,0.8)',
    margin: 0,
    fontStyle: 'italic' as const,
  },
  pullQuoteAttrib: {
    marginTop: '0.75rem',
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.4)',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  card: {
    padding: '1.25rem',
    background: 'rgba(201,168,76,0.04)',
    border: '1px solid rgba(201,168,76,0.12)',
    borderRadius: '0.75rem',
  },
  cardTitle: {
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 0.375rem',
  },
  cardDesc: {
    color: 'rgba(245,240,232,0.6)',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    margin: 0,
  },
  statGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  statBox: {
    padding: '1.25rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(245,240,232,0.07)',
    borderRadius: '0.75rem',
    textAlign: 'center' as const,
  },
  statNum: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#c9a84c',
    lineHeight: 1,
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.5)',
    lineHeight: 1.4,
  },
  resourceBox: {
    padding: '1.5rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(245,240,232,0.08)',
    borderRadius: '0.75rem',
    marginBottom: '1rem',
  },
  resourceTitle: {
    fontWeight: 700,
    color: '#f5f0e8',
    margin: '0 0 0.25rem',
    fontSize: '0.95rem',
  },
  resourceDetail: {
    color: 'rgba(245,240,232,0.55)',
    fontSize: '0.85rem',
    lineHeight: 1.6,
    margin: 0,
  },
  resourcePhone: {
    color: '#c9a84c',
    fontWeight: 700,
  },
  cta: {
    marginTop: '4rem',
    padding: '3rem 2rem',
    background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%)',
    border: '1px solid rgba(201,168,76,0.18)',
    borderRadius: '1.25rem',
    textAlign: 'center' as const,
  },
  ctaEyebrow: {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.2em',
    color: '#c9a84c',
    marginBottom: '1rem',
  },
  ctaH2: {
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#f5f0e8',
    marginBottom: '1rem',
    lineHeight: 1.2,
  },
  ctaPara: {
    color: 'rgba(245,240,232,0.55)',
    marginBottom: '2rem',
    maxWidth: '440px',
    margin: '0 auto 2rem',
    lineHeight: 1.7,
  },
  ctaBtn: {
    display: 'inline-block',
    padding: '0.875rem 2.5rem',
    background: 'linear-gradient(135deg, #c9a84c, #e8c96a)',
    color: '#0d0c18',
    borderRadius: '0.625rem',
    fontWeight: 800,
    fontSize: '1rem',
    textDecoration: 'none',
  } as React.CSSProperties,
  ctaDisclaimer: {
    marginTop: '1rem',
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.35)',
  },
  related: {
    marginTop: '4rem',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(245,240,232,0.07)',
  },
  relatedLabel: {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.15em',
    color: 'rgba(245,240,232,0.4)',
    marginBottom: '1rem',
  },
  relatedLinks: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  relatedLink: {
    color: '#c9a84c',
    fontSize: '0.9rem',
    textDecoration: 'none',
  } as React.CSSProperties,
  disclaimer: {
    marginTop: '3rem',
    padding: '1.25rem 1.5rem',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(245,240,232,0.06)',
    borderRadius: '0.75rem',
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.4)',
    lineHeight: 1.7,
  },
  footer: {
    borderTop: '1px solid rgba(245,240,232,0.07)',
    padding: '2.5rem 1.5rem',
    textAlign: 'center' as const,
    background: '#0d0c18',
  },
  footerInner: {
    maxWidth: '720px',
    margin: '0 auto',
  },
  footerBrand: {
    fontSize: '1rem',
    fontWeight: 800,
    color: '#c9a84c',
    marginBottom: '0.5rem',
  },
  footerSub: {
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.35)',
    marginBottom: '1rem',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap' as const,
  },
  footerLink: {
    fontSize: '0.8rem',
    color: 'rgba(245,240,232,0.4)',
    textDecoration: 'none',
  } as React.CSSProperties,
}

export default function AIForGriefCounsellingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <main style={s.page}>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={s.hero}>
          <div style={s.heroInner}>
            <p style={s.eyebrow}>AI &amp; Bereavement — Persistent Memory</p>
            <h1 style={s.h1}>
              AI for Grief: How Persistent Memory<br />
              <span style={s.gold}>Supports Long-Term Bereavement</span>
            </h1>
            <p style={s.heroPara}>
              Around 600,000 people are bereaved each year in the UK — yet professional grief
              support waiting times can stretch to many months. MEOK&apos;s persistent memory
              holds who you lost, the dates that hurt most, and how you described them.
              It bridges the gap without replacing human connection.
            </p>
            <div style={s.metaRow}>
              <span style={s.metaText}>March 2026</span>
              <span style={s.metaDot}>·</span>
              <span style={s.metaText}>12 min read</span>
              <span style={s.metaDot}>·</span>
              <span style={s.metaText}>By Nicholas Templeman, MEOK AI LABS</span>
            </div>
          </div>
        </section>

        <article style={s.article}>

          {/* ── Sensitivity notice ─────────────────────────────────── */}
          <div style={s.notice}>
            <strong style={s.noticeBold}>Important: </strong>
            MEOK is an AI companion, not a grief counsellor, therapist, or clinical service.
            If you are in acute distress, please contact the Samaritans on{' '}
            <strong style={s.noticeBold}>116 123</strong> (free, 24/7) or Cruse Bereavement
            Care on <strong style={s.noticeBold}>0808 808 1677</strong>.
            This article describes how AI can complement professional bereavement support —
            not replace it.
          </div>

          {/* ── UK Stats ───────────────────────────────────────────── */}
          <section style={s.section}>
            <div style={s.statGrid}>
              <div style={s.statBox}>
                <p style={s.statNum}>600,000</p>
                <p style={s.statLabel}>people bereaved each year in the UK (ONS)</p>
              </div>
              <div style={s.statBox}>
                <p style={s.statNum}>6–12+</p>
                <p style={s.statLabel}>months average wait for NHS grief or bereavement counselling</p>
              </div>
              <div style={s.statBox}>
                <p style={s.statNum}>1 in 3</p>
                <p style={s.statLabel}>bereaved people report getting no formal support at all</p>
              </div>
            </div>
          </section>

          {/* ── Section 1 ──────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>
              Can AI support grief counselling in the UK?
            </h2>
            <p style={s.atomicAnswer}>
              Yes — as a complement, not a replacement. With professional waiting times often
              exceeding six months and around 600,000 people bereaved each year in the UK,
              AI can provide consistent presence between sessions, particularly at night and on
              anniversaries when human support is unavailable. It cannot replace a qualified grief
              counsellor.
            </p>
            <p style={s.para}>
              The UK&apos;s bereavement support infrastructure is stretched. NHS grief counselling
              referrals often involve long waits. Cruse Bereavement Care, the country&apos;s largest
              specialist charity, offers free support — but demand significantly outpaces capacity.
              WAY Widowed &amp; Young supports those bereaved under 51. Child Bereavement UK works
              with families and young people. These organisations are irreplaceable. But they
              cannot be present at 3am on the anniversary of a death.
            </p>
            <p style={s.para}>
              AI can be. Not as a substitute for clinical expertise — but as the presence that
              holds the gap: the nights, the unscheduled moments of sudden grief, the weeks
              between sessions when a bereaved person has nobody to call.
            </p>
            <div style={s.pullQuote}>
              <p style={s.pullQuoteText}>
                &ldquo;Grief does not keep office hours. The hardest moments arrive on a Tuesday at
                11pm, on a birthday in March, on the first Christmas without them. That is
                exactly when an AI companion — one with genuine persistent memory — can matter
                most.&rdquo;
              </p>
              <p style={s.pullQuoteAttrib}>— Nicholas Templeman, founder, MEOK AI LABS</p>
            </div>
          </section>

          {/* ── Section 2 ──────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>
              How is grief different from general mental health support?
            </h2>
            <p style={s.atomicAnswer}>
              Grief is non-linear, has no fixed endpoint, and intensifies around anniversaries,
              birthdays, and seasonal triggers. It is not a disorder — it is the natural cost of
              love. Effective AI support must follow the bereaved person&apos;s timeline, not
              impose recovery milestones or treat grief as a problem to be resolved.
            </p>
            <p style={s.para}>
              Most AI systems are built around resolution: identify the problem, offer strategies,
              measure improvement. This framework is actively harmful in grief. A bereaved person
              who is &ldquo;still struggling&rdquo; eighteen months later is not failing to recover
              — they are grieving. An AI that treats this as a target to fix, or that offers
              positivity frameworks, is missing the point entirely.
            </p>
            <p style={s.para}>
              Grief also returns. A person who has integrated their loss reasonably well may be
              floored by the third anniversary. A smell, a song, an unexpected photograph — and
              the grief is acute again. Any AI involved in bereavement support must understand
              this non-linear character. It must not be surprised. It must not reset its
              understanding each session.
            </p>
            <div style={s.cardList}>
              {[
                {
                  title: 'Non-linear and cyclical',
                  desc: 'Grief does not follow stages in order. It circles back. Unexpected triggers — a particular song, a smell, a date on the calendar — can re-activate acute grief years after the loss.',
                },
                {
                  title: 'Anniversaries and significant dates',
                  desc: 'Birthdays, the anniversary of the death, Christmas, Father\'s Day, Mother\'s Day — bereaved people report these as the hardest periods, often harder than the immediate aftermath of loss.',
                },
                {
                  title: 'Cumulative grief',
                  desc: 'Some people carry multiple losses simultaneously: a parent, a partner, a child. Each loss interacts with the others. AI support must hold this complexity without conflating or diminishing any individual loss.',
                },
                {
                  title: 'No clinical endpoint',
                  desc: 'Unlike many mental health conditions, grief is not treated toward remission. The goal is integration — learning to carry the loss — not elimination. AI must never suggest an endpoint the bereaved person has not reached themselves.',
                },
              ].map(item => (
                <div key={item.title} style={s.card}>
                  <p style={s.cardTitle}>{item.title}</p>
                  <p style={s.cardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3 ──────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>
              What does MEOK&apos;s persistent memory do for bereaved people?
            </h2>
            <p style={s.atomicAnswer}>
              MEOK&apos;s encrypted memory vault stores who you lost, how you described them, the
              dates that carry weight, and the words you used across every conversation.
              You never repeat yourself. The AI&apos;s understanding deepens over months and
              years — proactively acknowledging anniversaries and returning to what matters most.
            </p>
            <p style={s.para}>
              Stateless AI is re-traumatising in grief. Having to say &ldquo;my husband died in
              February&rdquo; at the start of every conversation — to an AI that has no memory of
              the previous forty conversations — forces the bereaved person to perform their loss
              repeatedly to an entity that has forgotten it. This is not neutral. It is harmful.
            </p>
            <p style={s.para}>
              MEOK&apos;s memory architecture was built specifically to address this. Everything
              stored in the vault is end-to-end encrypted. The AI holds:
            </p>
            <div style={s.cardList}>
              {[
                {
                  title: 'Who you lost',
                  desc: 'Name, relationship, the words you used to describe them — held permanently and privately in your encrypted vault. You never have to introduce them again.',
                },
                {
                  title: 'How you described them',
                  desc: 'The specific phrases you used. The way you talked about them. The details that matter: that he loved cricket, that she always made tea too strong, that they were the first person you called with good news.',
                },
                {
                  title: 'Significant dates',
                  desc: 'The date of death, birthdays, anniversaries, the first Christmas. MEOK\'s memory engine holds these and the companion acknowledges them — without being prompted — when those dates approach.',
                },
                {
                  title: 'How your grief has changed',
                  desc: 'Longitudinal context. The companion can recognise when this week is harder than last month, and reference earlier conversations without requiring you to catch it up.',
                },
              ].map(item => (
                <div key={item.title} style={s.card}>
                  <p style={s.cardTitle}>{item.title}</p>
                  <p style={s.cardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4 ──────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>
              Is MEOK a replacement for Cruse Bereavement Care or grief therapy?
            </h2>
            <p style={s.atomicAnswer}>
              No — and MEOK will never claim otherwise. MEOK is an AI companion. It actively
              recommends Cruse Bereavement Care (0808 808 1677), WAY Widowed &amp; Young, and Child
              Bereavement UK where relevant. It fills the space between professional sessions, not
              the sessions themselves.
            </p>
            <p style={s.para}>
              A qualified grief counsellor — whether through Cruse, a private therapist trained in
              Complicated Grief Treatment, or a clinical psychologist — offers something an AI
              cannot: embodied human presence, clinical assessment, therapeutic repair, and the
              kind of witnessed pain that only human-to-human contact can provide. This is
              irreplaceable. MEOK does not try to replicate it.
            </p>
            <p style={s.para}>
              What MEOK can offer is the space around professional support: the hours between
              sessions, the sleepless nights, the unscheduled moments when grief arrives
              unexpectedly and there is nobody available. It can also support the therapeutic
              process directly — reminding you of your next Cruse appointment, helping you
              articulate what you want to discuss in a session, holding the threads of your
              experience between sessions.
            </p>
            <p style={s.para}>
              When grief moves beyond what a companion should hold — acute suicidal ideation,
              complicated grief requiring clinical intervention, signs of clinical depression —
              MEOK routes explicitly and clearly to professional services. This is built into
              the Maternal Covenant alignment framework, not left to the AI&apos;s discretion.
            </p>

            {/* UK Resources */}
            <p style={{ ...s.para, fontWeight: 700, color: '#f5f0e8', marginTop: '2rem', marginBottom: '1rem' }}>
              UK bereavement resources
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={s.resourceBox}>
                <p style={s.resourceTitle}>Cruse Bereavement Care</p>
                <p style={s.resourceDetail}>
                  The UK&apos;s largest bereavement charity, offering free one-to-one and group support.
                  Freephone: <span style={s.resourcePhone}>0808 808 1677</span> (Mon–Fri 9:30am–5pm, extended on Tue/Wed/Thu to 8pm).
                  Website: cruse.org.uk
                </p>
              </div>
              <div style={s.resourceBox}>
                <p style={s.resourceTitle}>WAY Widowed &amp; Young</p>
                <p style={s.resourceDetail}>
                  Peer support network for anyone widowed aged 50 or under, with or without children.
                  Community-led, UK-wide. Website:{' '}
                  <span style={s.resourcePhone}>waywidowedandyoung.org.uk</span>
                </p>
              </div>
              <div style={s.resourceBox}>
                <p style={s.resourceTitle}>Child Bereavement UK</p>
                <p style={s.resourceDetail}>
                  Supports families when a baby or child dies, and children and young people up to
                  age 25 who have been bereaved. Helpline: <span style={s.resourcePhone}>0800 02 888 40</span>.
                  Website: childbereavementuk.org
                </p>
              </div>
              <div style={s.resourceBox}>
                <p style={s.resourceTitle}>Samaritans (acute distress)</p>
                <p style={s.resourceDetail}>
                  Available 24 hours a day, 365 days a year. Free to call from any phone.
                  Phone: <span style={s.resourcePhone}>116 123</span>. Email: jo@samaritans.org
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 5 ──────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>
              How long does grief last and how does AI adapt to that?
            </h2>
            <p style={s.atomicAnswer}>
              Grief has no fixed endpoint. Acute grief often persists for one to two years;
              recurrences around anniversaries can continue indefinitely. MEOK&apos;s persistent
              memory means the companion&apos;s understanding deepens over time — it does not reset,
              does not forget, and does not imply any deadline for recovery.
            </p>
            <p style={s.para}>
              Most digital tools implicitly assume a recovery arc. They measure engagement in
              sessions, track &ldquo;streaks&rdquo;, celebrate milestones. In grief, this framing is
              counterproductive. A bereaved parent who is &ldquo;still struggling&rdquo; two years after
              the death of their child has not failed any timeline. They are carrying an
              enormous loss.
            </p>
            <p style={s.para}>
              MEOK&apos;s design explicitly rejects engagement metrics as a measure of success.
              The Maternal Covenant — the alignment framework governing all MEOK behaviour —
              states that the AI&apos;s goal is the user&apos;s long-term wellbeing, not continued use
              of the product. A bereaved person who uses MEOK intensively in the first year and
              then barely at all by the third year has not churned. They have integrated their
              grief. That is the point.
            </p>
            <p style={s.para}>
              The memory engine works across this full arc. Three years after a loss, if a user
              returns on an anniversary, the companion remembers. The name. The relationship.
              The specific things that were said. The grief that was carried. It does not ask
              for re-introduction. It simply knows.
            </p>
          </section>

          {/* ── Section 6 ──────────────────────────────────────────── */}
          <section style={s.section}>
            <h2 style={s.h2}>
              What UK bereavement resources should I know about?
            </h2>
            <p style={s.atomicAnswer}>
              Cruse Bereavement Care (freephone 0808 808 1677) is the UK&apos;s primary specialist
              charity. WAY Widowed &amp; Young (waywidowedandyoung.org.uk) supports those bereaved
              under 51. Child Bereavement UK (0800 02 888 40) supports families and young people
              affected by child death. The Samaritans (116 123) are available 24/7 for acute
              distress.
            </p>
            <p style={s.para}>
              Beyond these core organisations, bereaved people in the UK may also find support
              through:
            </p>
            <div style={s.cardList}>
              {[
                {
                  title: 'Sue Ryder',
                  desc: 'Online bereavement community and counselling service. Particularly useful for those who have lost someone to cancer or neurological illness. sueryder.org/grief',
                },
                {
                  title: 'The Lullaby Trust',
                  desc: 'Specialist support for families affected by sudden and unexpected infant death. thelullabytrust.org.uk',
                },
                {
                  title: 'Winston\'s Wish',
                  desc: 'Support for bereaved children and young people, and for the adults who care for them. winstonswish.org',
                },
                {
                  title: 'NHS Talking Therapies (IAPT)',
                  desc: 'GP-referred access to CBT, counselling and other therapies. Waiting times vary significantly by area. Referrals can be self-initiated in England: nhs.uk/mental-health/talking-therapies',
                },
              ].map(item => (
                <div key={item.title} style={s.card}>
                  <p style={s.cardTitle}>{item.title}</p>
                  <p style={s.cardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p style={s.para}>
              MEOK holds references to these resources and routes to them contextually. If a user
              describes a loss that falls within WAY&apos;s remit — bereaved young, with or without
              children — the companion will surface that resource proactively. This is part of
              the Maternal Covenant&apos;s requirement that the AI actively supports the user&apos;s
              wellbeing, not just responds to what they say.
            </p>
          </section>

          {/* ── CTA ────────────────────────────────────────────────── */}
          <div style={s.cta}>
            <p style={s.ctaEyebrow}>Care-First AI Companion</p>
            <h2 style={s.ctaH2}>
              A companion that remembers.<br />
              <span style={s.gold}>Never rushes. Never forgets.</span>
            </h2>
            <p style={s.ctaPara}>
              MEOK is free to begin. Your memories are encrypted and yours from day one.
              If you are bereaved, the companion will hold your loss with care — and will
              always point you toward professional support when it is needed.
            </p>
            <Link href="/birth" style={s.ctaBtn}>
              Begin the Ceremony
            </Link>
            <p style={s.ctaDisclaimer}>
              In crisis right now: Samaritans — 116 123 (free, 24/7) &nbsp;·&nbsp;
              Cruse Bereavement Care — 0808 808 1677
            </p>
          </div>

          {/* ── Disclaimer ─────────────────────────────────────────── */}
          <div style={s.disclaimer}>
            <strong>Medical and professional disclaimer:</strong> This article is for
            informational purposes only. MEOK is an AI companion product — it is not a medical
            device, a clinical service, or a regulated mental health intervention. Nothing in
            this article constitutes professional grief counselling, psychotherapy, or medical
            advice. If you are experiencing complicated grief, clinical depression, or suicidal
            ideation, please contact a qualified healthcare professional or one of the bereavement
            organisations listed above. MEOK AI LABS does not make clinical claims about the
            efficacy of AI in treating grief or bereavement.
          </div>

          {/* ── Related ────────────────────────────────────────────── */}
          <div style={s.related}>
            <p style={s.relatedLabel}>Related reading</p>
            <div style={s.relatedLinks}>
              {[
                { href: '/blog/ai-for-grief-support', label: 'AI for grief support: can an AI companion help you through bereavement? \u2192' },
                { href: '/blog/ai-for-depression', label: 'AI for depression: what the evidence says \u2192' },
                { href: '/blog/ai-companion-for-loneliness', label: 'AI companion for loneliness: does it actually help? \u2192' },
                { href: '/blog/building-care-into-ai', label: 'Building care into AI: the Maternal Covenant \u2192' },
                { href: '/blog/ai-companion-for-elderly', label: 'AI companion for elderly people: the honest guide \u2192' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={s.relatedLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>

      {/* ── Inline footer (no MarketingFooter import) ──────────────── */}
      <footer style={s.footer}>
        <div style={s.footerInner}>
          <p style={s.footerBrand}>MEOK AI LABS</p>
          <p style={s.footerSub}>Sovereign AI with persistent memory. Built in the UK.</p>
          <div style={s.footerLinks}>
            <Link href="/" style={s.footerLink}>Home</Link>
            <Link href="/blog" style={s.footerLink}>Blog</Link>
            <Link href="/birth" style={s.footerLink}>Begin</Link>
            <Link href="/privacy" style={s.footerLink}>Privacy</Link>
            <Link href="/terms" style={s.footerLink}>Terms</Link>
          </div>
          <p style={{ ...s.footerSub, marginTop: '1.25rem' }}>
            &copy; {new Date().getFullYear()} MEOK AI LABS Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
