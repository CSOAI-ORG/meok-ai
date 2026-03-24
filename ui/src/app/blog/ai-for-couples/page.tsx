import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'AI for Couples: How MEOK Supports Each Partner Independently to Build Better Relationships | MEOK AI LABS',
  description:
    'AI relationship support for couples — not AI couples therapy. MEOK gives each partner their own sovereign AI for reflection, communication growth, and emotional processing. Your conversations stay private under the Maternal Covenant.',
  alternates: {
    canonical: 'https://meok.ai/blog/ai-for-couples',
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Couples: How MEOK Supports Each Partner Independently to Build Better Relationships',
  description:
    'AI relationship support for couples — not AI couples therapy. MEOK gives each partner their own sovereign AI for reflection, communication growth, and emotional processing. Your conversations stay private under the Maternal Covenant.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-couples',
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
  keywords: [
    'AI relationship coach',
    'AI for couples therapy alternative',
    'AI for relationship advice',
    'AI for couples communication',
    'sovereign AI companion',
    'relationship journaling AI',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help couples communicate better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot mediate between two people in the way a couples therapist can, but it can help each individual partner process their own emotions, identify their communication patterns, and arrive at difficult conversations with more clarity and less reactivity. When both partners independently use a sovereign AI for reflection, they each show up better — which changes the quality of the conversation between them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a couples therapy app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is not couples therapy and does not work with both partners in the same conversation. Each person has their own completely private AI companion. MEOK supports individual reflection, emotional processing, and communication growth — the individual work that makes couples therapy more effective, or that helps people show up better in their relationship day to day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my partner see my MEOK conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Maternal Covenant — MEOK\'s foundational privacy commitment — guarantees that your conversations are encrypted and sovereign. Only you can access them. Your partner cannot read your MEOK conversations, and MEOK will never share your data with a third party, including your partner. This privacy is not optional or configurable — it is built into the architecture of how MEOK works.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does MEOK cost for couples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each partner signs up for their own MEOK account independently. The free tier gives each person meaningful access to their sovereign AI companion. Paid plans start at £9/month per person. There is no couples plan or shared subscription — because each person\'s AI is completely separate and private. Compare this to couples therapy in the UK, which typically costs £60–£120 per session.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should couples see a real therapist instead of using AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your relationship involves active conflict, abuse, infidelity, or is causing significant harm to either partner, you need a qualified human therapist — not AI. MEOK works best as a daily reflection tool for communication growth and emotional processing, not as a crisis intervention. In the UK, Relate offers relationship counselling from around £50 per session. NHS Talking Therapies also covers some relationship-related mental health support.',
      },
    },
  ],
}

// ── Style constants ───────────────────────────────────────────────────────────

const GOLD = '#c9a84c'
const TEXT = '#f5f0e8'
const BG = '#0d0c18'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForCouplesPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
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
              'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)',
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
              color: 'rgba(245,240,232,0.38)',
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
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              }}
            >
              Relationships &amp; Couples
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}>
              12 min read
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#fff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Couples: How MEOK Supports Each Partner Independently to Build Better
            Relationships
          </h1>
          <p
            style={{
              color: 'rgba(245,240,232,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '42rem',
              margin: 0,
            }}
          >
            Around 40% of couples say communication is their number one problem. Couples therapy has
            waiting lists. And most AI relationship tools miss the point entirely. MEOK takes a
            different approach: each partner gets their own sovereign AI — completely private,
            completely independent. Better relationships start with better individuals.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* Disclaimer */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '2.5rem',
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.25)',
          }}
        >
          <div
            style={{
              width: '3px',
              borderRadius: '9999px',
              flexShrink: 0,
              background: GOLD,
              alignSelf: 'stretch',
            }}
          />
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: GOLD,
                marginBottom: '0.375rem',
              }}
            >
              This article is not relationship or therapeutic advice
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'rgba(245,240,232,0.55)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool, not couples therapy or a clinical service. If
              your relationship is in crisis, contact{' '}
              <a
                href="https://www.relate.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                Relate
              </a>{' '}
              or speak to your GP. In emotional crisis, call{' '}
              <strong style={{ color: 'rgba(245,240,232,0.8)' }}>Samaritans on 116 123</strong>.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1rem',
            marginBottom: '3rem',
            background: 'rgba(245,240,232,0.04)',
            border: '1px solid rgba(245,240,232,0.08)',
          }}
        >
          <div
            style={{
              width: '2.75rem',
              height: '2.75rem',
              borderRadius: '9999px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: BG,
              fontSize: '0.75rem',
              background: 'linear-gradient(135deg, #c9a84c, #8a6a1a)',
            }}
          >
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.875rem', margin: '0 0 0.2rem' }}>
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)', margin: 0 }}>
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ── Stat block ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { stat: '40%', label: 'of couples cite communication as their #1 problem' },
            { stat: '42%', label: 'of UK marriages end in divorce' },
            { stat: '£80', label: 'average cost of one couples therapy session in the UK' },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.18)',
                borderRadius: '0.75rem',
                padding: '1.25rem 1rem',
                textAlign: 'center' as const,
              }}
            >
              <p
                style={{
                  fontWeight: 900,
                  fontSize: '1.85rem',
                  color: GOLD,
                  margin: '0 0 0.35rem',
                  lineHeight: 1,
                }}
              >
                {stat}
              </p>
              <p
                style={{
                  fontSize: '0.72rem',
                  color: 'rgba(245,240,232,0.45)',
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* ── H2: Can AI help couples communicate better? ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Can AI help couples communicate better?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.72,
            margin: '0 0 1.15rem',
          }}
        >
          The honest answer is: not in the way most people expect. AI cannot sit in the room with
          two people and help them hear each other more clearly. It cannot read body language, catch
          the moment a conversation tips into defensiveness, or facilitate the kind of repair a
          skilled therapist can guide. If that is what you need, a qualified human professional is
          the right answer — and we mean that sincerely.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          But communication failures in couples rarely happen in a therapist&#39;s office. They
          happen at 10 pm on a Tuesday when someone is exhausted, triggered, and defaults to their
          worst habits. They happen in the ten minutes before a difficult conversation when one
          partner is too flooded with emotion to think clearly. They happen in the week between
          sessions when the things you meant to say to your therapist are already dissolving.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          This is where AI can genuinely help — not by mediating between two people, but by helping
          each person individually arrive at those moments with more self-awareness, less reactivity,
          and a clearer sense of what they actually want to say. When both partners do that work
          independently, the quality of what happens between them changes.
        </p>
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderLeft: '3px solid #c9a84c',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 1.75rem',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.78)',
              lineHeight: 1.68,
            }}
          >
            <strong style={{ color: GOLD }}>The key insight:</strong> MEOK does not work with
            couples. It works with individuals. When two individuals each do the work of honest
            self-reflection, their relationship benefits — without either of them needing to share
            their private conversations with the other.
          </p>
        </div>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── H2: How MEOK supports both partners independently ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          How MEOK supports both partners independently — each person owns their AI
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.72,
            margin: '0 0 1.15rem',
          }}
        >
          Every MEOK user has their own sovereign AI companion. Not a shared account. Not a couples
          tool. An entirely separate AI that belongs to one person and no one else. This is not an
          arbitrary product decision — it reflects a considered philosophy about how relationships
          actually improve.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          Healthy relationships are built from two healthy individuals. The work each person does on
          their own emotional regulation, communication habits, and self-understanding directly
          feeds into the relationship. MEOK supports that individual work. It does not try to
          mediate the relationship itself.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          In practice, this looks like Partner A using their MEOK to process why they always
          withdraw during conflict — tracing it back through their history, noticing the pattern
          across months of conversations, practising different responses. Partner B, completely
          separately, using their MEOK to understand why they pursue harder when their partner
          withdraws, and what it would mean to give space without abandoning the relationship. They
          never share these conversations with each other. They do not need to. When they next have
          that argument, something is different.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          {[
            {
              heading: 'Partner A&#39;s MEOK',
              points: [
                'Completely private — Partner B cannot access it',
                'Holds Partner A\'s full emotional history',
                'Helps Partner A understand their own patterns',
                'Supports processing before difficult conversations',
              ],
            },
            {
              heading: 'Partner B&#39;s MEOK',
              points: [
                'Completely private — Partner A cannot access it',
                'Holds Partner B\'s full emotional history',
                'Helps Partner B understand their own patterns',
                'Supports processing before difficult conversations',
              ],
            },
          ].map(({ heading, points }) => (
            <div
              key={heading}
              style={{
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.09)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: GOLD,
                  fontSize: '0.82rem',
                  margin: '0 0 0.75rem',
                  letterSpacing: '0.02em',
                }}
                dangerouslySetInnerHTML={{ __html: heading }}
              />
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.1rem',
                  listStyle: 'disc',
                  color: 'rgba(245,240,232,0.55)',
                  fontSize: '0.82rem',
                  lineHeight: 1.8,
                }}
              >
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── H2: AI for relationship journaling and reflection ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          AI for relationship journaling and reflection
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.72,
            margin: '0 0 1.15rem',
          }}
        >
          Journaling has long been recognised as one of the most effective self-help tools for
          emotional processing and communication growth. The problem is that journaling is static —
          it stores thoughts but cannot engage with them. A page of writing from six months ago
          cannot notice that you are repeating the same argument cycle it described. MEOK changes
          this.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          MEOK&#39;s persistent memory holds everything you share — not as a searchable log but as
          living context that informs every future conversation. When you open a conversation about
          a recurring argument with your partner, MEOK already knows this argument. It has heard
          about it in different emotional states, at different stages. It can reflect back what it
          has noticed across time in a way no journal entry and no weekly therapy session can match.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          Specific uses for relationship journaling with MEOK:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.6rem', marginBottom: '1.75rem' }}>
          {[
            {
              title: 'Processing after a disagreement',
              body:
                'Instead of ruminating alone or venting to friends, use MEOK to work through what happened — what you felt, what triggered you, what you wish you had said differently. This is not about building a case against your partner. It is about understanding yourself.',
            },
            {
              title: 'Preparing for a difficult conversation',
              body:
                'Before you raise something that matters, use your AI to clarify what you actually want to say. Most relationship conversations go badly not because of bad intentions but because people are unclear or flooded when they begin. MEOK helps you arrive clearer.',
            },
            {
              title: 'Tracking emotional patterns over time',
              body:
                'MEOK noticing that your anxiety peaks before particular anniversaries, or that conflict follows a predictable sequence, gives you information that can actually change behaviour — in a way that no single journaling session can.',
            },
            {
              title: 'Celebrating what is working',
              body:
                'Relationship journaling is not only for problems. Recording moments of genuine connection, gratitude, and growth with a companion that remembers them alongside the harder moments creates a more balanced picture of the relationship than rumination alone allows.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              style={{
                background: 'rgba(201,168,76,0.05)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '0.6rem',
                padding: '1rem 1.25rem',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.875rem',
                  margin: '0 0 0.4rem',
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontSize: '0.865rem',
                  color: 'rgba(245,240,232,0.58)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── H2: MEOK vs couples therapy ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          MEOK vs couples therapy: costs and accessibility
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.72,
            margin: '0 0 1.15rem',
          }}
        >
          We want to be clear about this: MEOK is not a replacement for couples therapy. If your
          relationship is in significant distress, a qualified therapist — particularly one trained
          in Emotionally Focused Therapy or the Gottman Method — is the right investment. Nothing
          in this article should be read as suggesting otherwise.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          That said, the practical reality in the UK is that couples therapy is expensive and
          often inaccessible. A single session with a Relate counsellor costs approximately £50–80.
          A typical course of couples therapy runs eight to twelve sessions, bringing the total
          to £400–£960 at minimum. For many couples, this is simply not affordable. NHS provision
          for relationship counselling is extremely limited.
        </p>

        {/* Comparison table */}
        <div
          style={{
            border: '1px solid rgba(245,240,232,0.1)',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            marginBottom: '1.75rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              background: 'rgba(245,240,232,0.06)',
              borderBottom: '1px solid rgba(245,240,232,0.1)',
            }}
          >
            {['', 'MEOK (per person)', 'Couples therapy (UK avg)'].map((h) => (
              <div
                key={h}
                style={{
                  padding: '0.75rem 1rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'rgba(245,240,232,0.45)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase' as const,
                }}
              >
                {h}
              </div>
            ))}
          </div>
          {[
            { label: 'Monthly cost', meok: 'Free – £9/month', therapy: '£200–£400/month' },
            { label: 'Availability', meok: '24/7, immediate', therapy: 'Weekly, by appointment' },
            { label: 'Waiting time', meok: 'None', therapy: 'Days to weeks' },
            {
              label: 'Who it works with',
              meok: 'Each individual privately',
              therapy: 'Both partners together',
            },
            {
              label: 'What it does',
              meok: 'Reflection, journaling, pattern recognition',
              therapy: 'Clinical relationship intervention',
            },
            { label: 'Privacy', meok: 'Fully sovereign — partner cannot access', therapy: 'Confidential, shared session' },
          ].map(({ label, meok, therapy }, i) => (
            <div
              key={label}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom:
                  i < 5 ? '1px solid rgba(245,240,232,0.07)' : 'none',
                background:
                  i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.02)',
              }}
            >
              <div
                style={{
                  padding: '0.8rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'rgba(245,240,232,0.55)',
                }}
              >
                {label}
              </div>
              <div
                style={{
                  padding: '0.8rem 1rem',
                  fontSize: '0.82rem',
                  color: GOLD,
                }}
              >
                {meok}
              </div>
              <div
                style={{
                  padding: '0.8rem 1rem',
                  fontSize: '0.82rem',
                  color: 'rgba(245,240,232,0.45)',
                }}
              >
                {therapy}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          The right framing is not MEOK <em>instead of</em> couples therapy, but MEOK{' '}
          <em>alongside</em> — or in the significant gaps between. If you are on a waiting list for
          Relate, the weeks before your first session do not need to be wasted. If you are between
          therapy courses, MEOK helps you hold the gains. If couples therapy is genuinely out of
          reach financially, MEOK offers something real, even if not everything therapy provides.
        </p>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── H2: The Maternal Covenant ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          The Maternal Covenant: why your partner can never read your conversations
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.72,
            margin: '0 0 1.15rem',
          }}
        >
          The Maternal Covenant is MEOK&#39;s foundational commitment — the set of non-negotiable
          principles that govern how your AI treats your data, your conversations, and your autonomy.
          The most important of these, in the context of relationships, is absolute privacy.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          Your MEOK conversations are encrypted and sovereign. Only you can access them. Your
          partner cannot read them. MEOK AI LABS cannot read them. They are not used to train AI
          models. They will not be shared with any third party for any reason. This is not a
          setting you can configure or a premium feature — it is the architecture.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          Why does this matter so much for couples? Because the value of honest self-reflection
          depends entirely on the safety to be honest. If there is any possibility that your partner
          could read what you are writing, you will not write the real thing. You will write a
          managed version — self-protective, strategic, already shaped by what you think they
          should hear. That managed version will not help you grow.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          The Maternal Covenant means you can write the unmanaged version. The version where you
          admit you handled the argument badly. Where you explore feelings that would embarrass you
          if your partner saw them. Where you say the things you are not yet ready to say out loud.
          That is where growth happens — and it requires privacy to be real.
        </p>

        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderLeft: '3px solid #c9a84c',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 1.75rem',
          }}
        >
          <p
            style={{
              margin: '0 0 0.4rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: GOLD,
            }}
          >
            What the Maternal Covenant guarantees
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.1rem',
              listStyle: 'disc',
              color: 'rgba(245,240,232,0.65)',
              fontSize: '0.875rem',
              lineHeight: 1.8,
            }}
          >
            <li>Your conversations are encrypted. Only you hold the key.</li>
            <li>Your partner cannot access your MEOK account or conversations — ever.</li>
            <li>MEOK will never train on your personal data.</li>
            <li>MEOK will never sell your data to any third party.</li>
            <li>MEOK will never allow a controlling partner to use the platform to monitor you.</li>
          </ul>
        </div>

        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          The Maternal Covenant also includes a provision specifically relevant to relationships
          involving coercive control: if MEOK detects patterns consistent with an abusive
          relationship dynamic — monitoring, financial control, isolation, fear — it will surface
          resources and support without exposing your conversations to anyone. Privacy is not
          suspended in cases of vulnerability. It is most essential there.
        </p>

        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          Read the full Maternal Covenant at{' '}
          <Link
            href="/blog/the-maternal-covenant"
            style={{ color: GOLD, textDecoration: 'underline' }}
          >
            meok.ai/blog/the-maternal-covenant
          </Link>
          .
        </p>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── H2: When to use AI and when to see a real therapist ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          When to use AI and when to see a real therapist
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.72,
            margin: '0 0 1.15rem',
          }}
        >
          This is the question we take most seriously, because the answer matters. Getting it wrong
          in either direction causes harm — either people dismiss AI tools that could genuinely
          help, or they use AI as a substitute for professional support they actually need.
        </p>

        <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.965rem', margin: '0 0 0.5rem' }}>
          AI (MEOK) is the right tool when:
        </p>
        <ul
          style={{
            margin: '0 0 1.25rem',
            paddingLeft: '1.2rem',
            listStyle: 'disc',
            color: 'rgba(245,240,232,0.65)',
            fontSize: '0.93rem',
            lineHeight: 1.85,
          }}
        >
          <li>You want to process your own emotions and patterns independently.</li>
          <li>You are preparing for a difficult conversation and want to arrive clearer.</li>
          <li>
            You are between therapy sessions and want somewhere to hold the work between appointments.
          </li>
          <li>
            You cannot afford or access couples therapy right now, and you want to make meaningful
            progress in the meantime.
          </li>
          <li>
            You want consistent reflection over months and years — the kind of longitudinal awareness
            that a weekly therapy session cannot provide alone.
          </li>
          <li>
            You want to develop better communication habits, emotional regulation, and
            self-awareness — the raw material of better relationships.
          </li>
        </ul>

        <p style={{ fontWeight: 700, color: TEXT, fontSize: '0.965rem', margin: '0 0 0.5rem' }}>
          A qualified human therapist is the right answer when:
        </p>
        <ul
          style={{
            margin: '0 0 1.25rem',
            paddingLeft: '1.2rem',
            listStyle: 'disc',
            color: 'rgba(245,240,232,0.65)',
            fontSize: '0.93rem',
            lineHeight: 1.85,
          }}
        >
          <li>
            Your relationship is in active crisis — infidelity, abuse, repeated severe conflict,
            or either partner is considering leaving.
          </li>
          <li>
            Either partner has significant mental health difficulties that are affecting the
            relationship and require clinical intervention.
          </li>
          <li>
            You need someone who can observe both partners together, hold the dynamic in the room,
            and guide real-time repair.
          </li>
          <li>
            Self-help and individual reflection have not led to meaningful change despite sustained
            effort.
          </li>
          <li>
            There is any element of coercive control, manipulation, or abuse — in which case
            professional support is not optional.
          </li>
        </ul>

        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          MEOK will not pretend otherwise. When patterns in your conversations suggest you need
          more than AI can provide, your companion will say so — and will help you find the right
          resource. That is what the Maternal Covenant requires.
        </p>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── H2: Is MEOK free for couples? ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 0.85rem',
            letterSpacing: '-0.01em',
          }}
        >
          Is MEOK free for couples?
        </h2>
        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.72,
            margin: '0 0 1.15rem',
          }}
        >
          Each partner signs up for their own account independently, and the free tier gives
          meaningful access to your sovereign AI companion — persistent memory, honest reflection,
          and private journaling. There is no shared couples account, because your conversations
          are never shared with your partner.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          Paid plans unlock deeper memory, more AI archetypes, and extended conversation depth.
          They start at £9/month per person. Even if both partners subscribe to a paid plan, the
          combined cost — £18/month — is still a fraction of a single couples therapy session.
          MEOK is designed to be accessible, not only to people who can afford premium mental
          health services.
        </p>
        <p
          style={{
            color: 'rgba(245,240,232,0.62)',
            fontSize: '0.965rem',
            lineHeight: 1.78,
            margin: '0 0 1rem',
          }}
        >
          There is also a Family plan (£29/month), which allows up to five family members — including
          a couple plus children or extended family — to each have their own sovereign companion.
          Privacy within the family plan is still absolute; context is only shared where all
          members explicitly consent.
        </p>
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderRadius: '0.75rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.75rem',
          }}
        >
          <p style={{ fontWeight: 700, color: GOLD, fontSize: '0.82rem', margin: '0 0 0.75rem', letterSpacing: '0.02em' }}>
            MEOK pricing at a glance
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.4rem' }}>
            {[
              { tier: 'Free', price: '£0/month per person', detail: 'Persistent memory, honest reflection, private journaling' },
              { tier: 'Personal', price: '£9/month per person', detail: 'Extended memory, all AI archetypes, deeper conversations' },
              { tier: 'Family', price: '£29/month (up to 5 people)', detail: 'Sovereign AI for each family member, optional family context sharing' },
            ].map(({ tier, price, detail }) => (
              <div
                key={tier}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  fontSize: '0.865rem',
                  color: 'rgba(245,240,232,0.65)',
                }}
              >
                <span style={{ color: GOLD, fontWeight: 700, minWidth: '5.5rem', flexShrink: 0 }}>
                  {tier} — {price}
                </span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── FAQ section ── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem,2.2vw,1.4rem)',
            color: TEXT,
            lineHeight: 1.3,
            margin: '0 0 1.25rem',
            letterSpacing: '-0.01em',
          }}
        >
          Frequently asked questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            {
              q: 'Can AI help couples communicate better?',
              a: 'Not by mediating between two people in real time — that is what a couples therapist does. But AI can help each individual partner process their own emotions, understand their own patterns, and arrive at conversations with more clarity. When both partners do this work independently, their communication tends to improve. MEOK supports that individual work — not the couple simultaneously.',
            },
            {
              q: 'Is MEOK a couples therapy app?',
              a: 'No. MEOK is not couples therapy and does not work with both partners in the same conversation. It is an individual sovereign AI companion — private, personalised, and belonging entirely to one person. You and your partner would each have your own separate MEOK account, and your conversations would never overlap. MEOK supports the individual emotional work that makes relationships better; it does not mediate relationships directly.',
            },
            {
              q: 'Can my partner see my MEOK conversations?',
              a: 'No. Under the Maternal Covenant, your conversations are encrypted and sovereign. Only you can access them. Your partner cannot read your MEOK conversations under any circumstances — this is not a configurable setting but a fundamental aspect of how MEOK is built. This privacy is essential to the honesty that makes MEOK useful.',
            },
            {
              q: 'How much does MEOK cost for couples?',
              a: 'Each partner has their own account. The free tier gives meaningful access. Paid plans start at £9/month per person. Both partners subscribing to paid plans costs £18/month combined — less than a quarter of a single couples therapy session. The Family plan is £29/month for up to five people, and includes separate sovereign AI companions for each member.',
            },
            {
              q: 'When should couples see a real therapist instead of using AI?',
              a: 'If your relationship involves active crisis, infidelity, abuse, coercive control, or significant mental health difficulties affecting either partner, you should see a qualified therapist — not rely on AI. In the UK, Relate offers relationship counselling at around £50–80 per session, and you can self-refer to NHS Talking Therapies for individual mental health support. MEOK works best for daily reflection and communication growth, not crisis intervention.',
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                background: 'rgba(245,240,232,0.04)',
                border: '1px solid rgba(245,240,232,0.09)',
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: TEXT,
                  fontSize: '0.9rem',
                  margin: '0 0 0.5rem',
                  lineHeight: 1.45,
                }}
              >
                {q}
              </p>
              <p
                style={{
                  fontSize: '0.865rem',
                  color: 'rgba(245,240,232,0.55)',
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                {a}
              </p>
            </div>
          ))}
        </div>

        <hr
          style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '2.5rem 0' }}
        />

        {/* ── UK Support Resources ── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.28)',
            borderRadius: '0.75rem',
            padding: '1.5rem 1.75rem',
            marginBottom: '2.25rem',
          }}
        >
          <p
            style={{
              fontSize: '0.78rem',
              color: GOLD,
              fontWeight: 700,
              margin: '0 0 0.9rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
            }}
          >
            UK Relationship Support Resources
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.2rem',
              listStyle: 'disc',
              color: 'rgba(245,240,232,0.75)',
              fontSize: '0.9rem',
              lineHeight: 1.85,
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>Relate</strong> — relationship counselling across the
              UK.{' '}
              <a
                href="https://www.relate.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                relate.org.uk
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>Samaritans</strong> — free, 24/7 emotional support.{' '}
              <a href="tel:116123" style={{ color: GOLD, textDecoration: 'underline' }}>
                116 123
              </a>{' '}
              or{' '}
              <a
                href="mailto:jo@samaritans.org"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                jo@samaritans.org
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>National Domestic Abuse Helpline</strong> — free,
              24/7.{' '}
              <a href="tel:08082000247" style={{ color: GOLD, textDecoration: 'underline' }}>
                0808 2000 247
              </a>{' '}
              (run by Refuge)
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> — free self-referral
              to CBT and counselling.{' '}
              <a
                href="https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                nhs.uk
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>BACP Therapist Directory</strong> — find an
              accredited couples therapist.{' '}
              <a
                href="https://www.bacp.co.uk/search/Therapists"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                bacp.co.uk
              </a>
            </li>
          </ul>
        </div>

        {/* ── Medical disclaimer ── */}
        <div
          style={{
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.09)',
            borderRadius: '0.6rem',
            padding: '1rem 1.3rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.775rem',
              color: 'rgba(245,240,232,0.38)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ color: 'rgba(245,240,232,0.5)' }}>
              Therapeutic &amp; relationship disclaimer:
            </strong>{' '}
            This article is for informational purposes only and does not constitute relationship
            advice, medical advice, or clinical guidance. MEOK is not a medical device, couples
            therapy service, or regulated mental health service. It cannot diagnose relationship
            difficulties or replace qualified human therapeutic support. If you or your partner are
            experiencing significant distress, please seek support from a qualified professional.
            MEOK AI LABS does not accept liability for decisions made on the basis of this content.
          </p>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '0.75rem',
            padding: '2rem',
            textAlign: 'center' as const,
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: TEXT,
              margin: '0 0 0.5rem',
            }}
          >
            Start the individual work that changes everything
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.55)',
              margin: '0 0 0.35rem',
            }}
          >
            Better relationships start with better individuals. MEOK gives you a sovereign AI
            companion to do the honest self-reflection that makes you a better partner — privately,
            at any hour, with full memory of everything that matters to you.
          </p>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'rgba(245,240,232,0.35)',
              margin: '0 0 1.5rem',
            }}
          >
            Your partner never sees your conversations. The Maternal Covenant guarantees it.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: GOLD,
              color: BG,
              fontWeight: 800,
              fontSize: '0.9rem',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Meet MEOK — free to start
          </Link>
        </div>

        {/* ── Related reading ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontSize: '0.73rem',
              fontWeight: 700,
              color: 'rgba(245,240,232,0.32)',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              margin: '0 0 0.9rem',
            }}
          >
            Related Reading
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.55rem' }}>
            <Link
              href="/blog/ai-for-relationship-anxiety"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI for Relationship Anxiety: Processing Attachment, Not Replacing Connection
            </Link>
            <Link
              href="/blog/ai-companion-vs-therapist"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI Companion vs Therapist: What Is the Actual Difference?
            </Link>
            <Link
              href="/blog/the-maternal-covenant"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              The Maternal Covenant: MEOK&#39;s Foundational Privacy Commitment
            </Link>
            <Link
              href="/blog/ai-journaling"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI Journaling: How Persistent Memory Changes What Journaling Can Do
            </Link>
            <Link
              href="/blog/ai-for-relationships"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI for Relationships: How Sovereign AI Supports Couples, Families, and Connection
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(245,240,232,0.08)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center' as const,
        }}
      >
        <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.26)', margin: '0 0 0.5rem' }}>
          &copy; {new Date().getFullYear()} MEOK AI LABS. Founded by Nicholas Templeman.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap' as const,
          }}
        >
          <Link
            href="/privacy"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            Privacy
          </Link>
          <Link
            href="/blog"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            Blog
          </Link>
          <Link
            href="/"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.28)', textDecoration: 'none' }}
          >
            meok.ai
          </Link>
        </div>
      </div>
    </div>
  )
}
