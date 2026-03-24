import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Relationship Anxiety: Stop the Spiral Before It Starts | MEOK AI LABS',
  description:
    'Obsessive thoughts about your partner, fear of abandonment, reassurance-seeking, jealousy — how MEOK helps you break the anxiety spiral and build healthier attachment patterns.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-relationship-anxiety' },
  openGraph: {
    title: 'AI for Relationship Anxiety: Stop the Spiral Before It Starts',
    description:
      'Obsessive thoughts about your partner, fear of abandonment, reassurance-seeking, jealousy — how MEOK helps you break the anxiety spiral and build healthier attachment patterns.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-relationship-anxiety',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Relationship+Anxiety%3A+Stop+the+Spiral+Before+It+Starts&desc=Breaking+the+fear+of+abandonment+loop+with+sovereign+AI',
        width: 1200,
        height: 630,
        alt: 'AI for Relationship Anxiety: Stop the Spiral Before It Starts | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Relationship Anxiety: Stop the Spiral Before It Starts',
    description:
      'Obsessive thoughts, fear of abandonment, reassurance-seeking, jealousy — how MEOK helps you break the relationship anxiety spiral.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Relationship+Anxiety%3A+Stop+the+Spiral+Before+It+Starts&desc=Breaking+the+fear+of+abandonment+loop+with+sovereign+AI',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Relationship Anxiety: Stop the Spiral Before It Starts',
  description:
    'How AI companions help people with relationship anxiety — obsessive thoughts about partners, fear of abandonment, reassurance-seeking, jealousy, attachment styles, learning to self-soothe, healthy relationship habits, and the difference between intuition and anxiety.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-relationship-anxiety',
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
    '@id': 'https://meok.ai/blog/ai-for-relationship-anxiety',
  },
  keywords: [
    'AI for relationship anxiety',
    'AI companion for fear of abandonment',
    'reassurance-seeking in relationships',
    'attachment anxiety AI support',
    'anxious attachment style help',
    'relationship OCD support',
    'AI for jealousy and insecurity',
    'self-soothing techniques relationship anxiety',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is relationship anxiety and why does it feel impossible to stop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Relationship anxiety is a persistent pattern of fearful, intrusive thoughts about your relationship — whether your partner truly loves you, whether they will leave, whether you are enough. The spiral feels impossible to stop because reassurance provides only temporary relief; the fear returns, often stronger. Research suggests roughly 20% of adults display anxious attachment, and the mental loop is self-reinforcing: seeking reassurance reduces anxiety briefly, but also teaches the brain that the threat was real and that checking is necessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is relationship anxiety different from a genuine intuition that something is wrong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anxiety tends to be diffuse, catastrophic, and not tied to specific observable evidence. Intuition is usually quieter, more specific, and based on concrete changes in behaviour. A useful test: write down exactly what you observed — not how it made you feel, but what you literally saw or heard. If the evidence column is thin and the interpretation column is enormous, that is more likely anxiety than intuition. MEOK helps you practise this distinction over time by tracking what you feared versus what actually happened.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does reassurance-seeking make relationship anxiety worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reassurance-seeking reinforces the belief that your partner is responsible for managing your internal state, and that you cannot tolerate uncertainty. Each reassurance provides short-term relief but confirms to your nervous system that the threat was real enough to need checking. Over time your partner may feel exhausted, and your tolerance for uncertainty shrinks further. Breaking the cycle requires building the capacity to sit with not-knowing — which is uncomfortable, and exactly what self-soothing work addresses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with anxious attachment and relationship anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI companion like MEOK can provide a low-pressure space to process anxious thoughts between therapy sessions, track recurring triggers across weeks and months, and offer honest reflection rather than automatic reassurance. It cannot replace couples therapy, diagnose attachment disorders, or give you the lived experience of secure human connection. It works best alongside professional support, not instead of it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What self-soothing techniques actually help relationship anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evidence-based self-soothing techniques include: box breathing or physiological sigh to down-regulate the nervous system before responding to a trigger; writing out the feared outcome and honestly estimating its probability; a 20-minute delay before seeking reassurance, allowing the acute arousal to subside; identifying the core belief beneath the fear (e.g. "I am not lovable") and testing it against evidence; and physical grounding techniques that interrupt the mental spiral by bringing attention to the body.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should relationship anxiety be treated professionally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seek professional support if relationship anxiety is causing significant distress, affecting your daily functioning, driving controlling or surveillance behaviour toward a partner, or persisting despite sustained self-help efforts. In the UK you can self-refer to NHS Talking Therapies, contact Relate at relate.org.uk for relationship counselling, or speak to your GP. In crisis, call Samaritans on 116 123.',
      },
    },
  ],
}

// ── Shared style tokens ────────────────────────────────────────────────────────

const GOLD  = '#c9a84c'
const TEXT  = '#f5f0e8'
const BG    = '#0d0c18'
const MUTED = 'rgba(245,240,232,0.62)'
const DIM   = 'rgba(245,240,232,0.38)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AIForRelationshipAnxietyPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG, color: TEXT }}>

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          paddingTop: '7.5rem',
          paddingBottom: '3rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>

          {/* back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: DIM,
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* pill + meta */}
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
              Relationships &amp; Attachment
            </span>
            <span style={{ fontSize: '0.75rem', color: DIM }}>March 24, 2026</span>
            <span style={{ fontSize: '0.75rem', color: DIM }}>12 min read</span>
          </div>

          {/* headline */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.8vw, 2.9rem)',
              color: '#fff',
              lineHeight: 1.16,
              marginBottom: '1.35rem',
              letterSpacing: '-0.02em',
            }}
          >
            AI for Relationship Anxiety: Stop the Spiral Before It Starts
          </h1>

          {/* standfirst */}
          <p
            style={{
              color: 'rgba(245,240,232,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.72,
              maxWidth: '44rem',
              margin: 0,
            }}
          >
            The 11 pm read receipt that never becomes a reply. The loop that asks{' '}
            <em>do they still love me</em> for the fifteenth time today. Relationship anxiety
            is exhausting, isolating, and often invisible to the people who matter most.
            This is an honest guide to what AI can — and cannot — do to help you interrupt
            the spiral and build something steadier inside yourself.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ARTICLE BODY
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '3rem 1.5rem 0',
        }}
      >

        {/* ── Crisis disclaimer ── */}
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
              alignSelf: 'stretch',
              background: GOLD,
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
              Not medical advice
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'rgba(245,240,232,0.55)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              MEOK is a supplementary support tool, not a clinical device. If you are in
              crisis, contact{' '}
              <strong style={{ color: 'rgba(245,240,232,0.8)' }}>Samaritans on 116 123</strong>{' '}
              (free, 24/7),{' '}
              <a
                href="https://www.relate.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                relate.org.uk
              </a>
              , or{' '}
              <a
                href="https://www.mind.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                mind.org.uk
              </a>
              .
            </p>
          </div>
        </div>

        {/* ── Author card ── */}
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
            <p
              style={{
                fontWeight: 700,
                color: TEXT,
                fontSize: '0.875rem',
                margin: '0 0 0.2rem',
              }}
            >
              Nicholas Templeman
            </p>
            <p style={{ fontSize: '0.75rem', color: DIM, margin: 0 }}>
              Founder, MEOK AI LABS
            </p>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 1 — What is relationship anxiety and why can't you stop it?
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What is relationship anxiety and why does it feel impossible to stop?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          Relationship anxiety is a persistent pattern of fearful, intrusive thoughts about
          your relationship. Not the occasional worry that everyone has — the relentless
          loop that scans for signs of rejection, manufactures evidence of unlove, and
          returns to the same questions regardless of the answers you receive.{' '}
          <em style={{ color: TEXT }}>Does my partner really love me? Will they leave?
          Am I too much — or not enough?</em>
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          Adult attachment research — most notably the work of Hazan, Shaver, and
          Bartholomew — consistently finds that roughly{' '}
          <strong style={{ color: TEXT }}>20% of adults</strong> display anxious attachment
          patterns. In the UK, the Mental Health Foundation ranks relationship difficulties
          among the top five drivers of poor mental health year after year.
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          The spiral feels impossible to stop because of a neurological quirk: reassurance
          provides relief for{' '}
          <strong style={{ color: TEXT }}>minutes to hours</strong>, not days. Each time
          you seek it, your brain registers that the threat was real enough to need
          checking. Tolerance for uncertainty shrinks. The next spike of anxiety comes
          faster and feels more urgent. You are not weak or broken. You are caught in a
          loop that is working exactly as designed — just for the wrong outcome.
        </p>

        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderLeft: '3px solid #c9a84c',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 2rem',
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
            <strong style={{ color: GOLD }}>The key insight:</strong> the goal is not to
            eliminate anxiety — it is to reduce your dependence on external reassurance
            so that you can tolerate normal uncertainty without the spiral activating.
          </p>
        </div>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 2 — Attachment styles
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          Which attachment styles drive relationship anxiety — and can they actually change?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          Attachment theory identifies four adult styles: secure, anxious-preoccupied,
          dismissive-avoidant, and fearful-avoidant. Two of them create the conditions for
          relationship anxiety:
        </p>

        {/* style comparison grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          {/* anxious-preoccupied */}
          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '0.75rem',
              padding: '1.25rem 1.4rem',
            }}
          >
            <p
              style={{
                fontWeight: 800,
                fontSize: '0.875rem',
                color: GOLD,
                margin: '0 0 0.5rem',
              }}
            >
              Anxious-Preoccupied
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: MUTED,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Craves closeness but fears abandonment. Hypervigilant to shifts in a
              partner&#39;s mood. Seeks reassurance frequently. Often perceived as
              &ldquo;too needy&rdquo; — a framing that misses the real pain underneath.
            </p>
          </div>

          {/* fearful-avoidant */}
          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '0.75rem',
              padding: '1.25rem 1.4rem',
            }}
          >
            <p
              style={{
                fontWeight: 800,
                fontSize: '0.875rem',
                color: GOLD,
                margin: '0 0 0.5rem',
              }}
            >
              Fearful-Avoidant
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: MUTED,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Simultaneously wants and dreads intimacy. Oscillates between pulling close
              and pushing away. Often the most painful pattern to live with because the
              desire for connection and the terror of it are equally strong.
            </p>
          </div>
        </div>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          The most important thing to understand about attachment styles is that they are{' '}
          <strong style={{ color: TEXT }}>learned patterns, not fixed traits</strong>.
          They were adaptive in your original environment — often an early caregiving
          relationship where love felt conditional or unpredictable. They can be
          unlearned with consistent reflection, professional support, and — critically —
          new relational experiences that provide evidence that contradicts the old story.
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          Emotionally Focused Therapy (EFT), schema therapy, EMDR, and psychodynamic work
          all have evidence bases for shifting attachment patterns. These require a qualified
          human clinician. What AI can support is the between-session work: noticing your
          patterns as they happen, naming them without judgment, and practising a different
          response before the old one has already fired.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 3 — Intuition vs anxiety
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How do you tell the difference between intuition and anxiety?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          This is one of the most genuinely difficult questions in relationship psychology —
          and one that people with anxious attachment ask repeatedly, often because they
          suspect that their gut feelings might be real, but they have also been wrong before
          and cannot tell which this is.
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          A few distinctions that clinical psychologists use:
        </p>

        {/* distinctions list */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '0.85rem',
            marginBottom: '1.75rem',
          }}
        >
          {[
            {
              label: 'Evidence column',
              body: 'Write down what you literally observed — behaviour, words, events — separated from your interpretation. If the evidence column is thin and the interpretation column is catastrophic, that is closer to anxiety than intuition.',
            },
            {
              label: 'The texture of the thought',
              body: 'Anxiety tends to spiral, escalate, and catastrophise. Intuition tends to be quieter, more specific, and more persistent without urgency. Anxiety says "something is wrong and I need to know NOW". Intuition says "something has shifted" — and waits.',
            },
            {
              label: 'History matching',
              body: 'Is this fear familiar from other relationships, or from childhood? If the same fear has appeared across multiple partners in the absence of actual betrayal, that is a signal it belongs to your internal pattern rather than to this specific relationship.',
            },
            {
              label: 'What happens after reassurance',
              body: 'If reassurance brings genuine relief for days, the concern may have had real content. If relief lasts only hours before the same question returns, the loop is anxiety-driven rather than information-driven.',
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                gap: '0.85rem',
                padding: '1rem 1.25rem',
                background: 'rgba(245,240,232,0.03)',
                border: '1px solid rgba(245,240,232,0.07)',
                borderRadius: '0.65rem',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: GOLD,
                  flexShrink: 0,
                  marginTop: '0.45rem',
                }}
              />
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: TEXT,
                    margin: '0 0 0.3rem',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: MUTED,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          MEOK supports this distinction over time by holding a record of what you feared
          and what actually happened. Over months, a pattern emerges: either the fears
          had reliable content (in which case something real needs addressing), or they
          repeatedly exceeded the evidence (in which case the work is internal). Neither
          conclusion is comfortable, but both are useful.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 4 — Reassurance-seeking
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          Why does reassurance-seeking make relationship anxiety worse — and what to do instead?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          Reassurance-seeking — asking a partner repeatedly whether they love you, whether
          they are angry, whether they will stay — is the most common maintaining behaviour
          in relationship anxiety. It feels like it should help. It does not. At least not
          in the way it needs to.
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          When you ask for reassurance, you transfer the responsibility for regulating
          your internal state to your partner. Over time this creates several problems.
          Your partner feels exhausted and monitored. Your own capacity to sit with
          uncertainty — a capacity that can be built, like any skill — does not develop.
          And the implicit message your nervous system receives is:{' '}
          <em style={{ color: TEXT }}>
            this was dangerous enough to need checking, so the threat was real.
          </em>{' '}
          The next spike of anxiety comes a little sooner and feels a little louder.
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          The alternative is not to simply suppress the urge and white-knuckle through it.
          The alternative is to build genuine self-soothing capacity so that you can
          process the anxiety internally before deciding whether a conversation with your
          partner is actually needed — and often it is not.
        </p>

        {/* callout — MEOK anti-sycophancy */}
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderLeft: '3px solid #c9a84c',
            borderRadius: '0.5rem',
            padding: '1rem 1.3rem',
            margin: '0 0 2rem',
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
            <strong style={{ color: GOLD }}>Why MEOK will not just reassure you:</strong>{' '}
            MEOK includes a sycophancy detector that runs before each response is delivered.
            If it detects that a reassuring answer would be dishonest given the patterns
            it has observed in your conversations, it generates a more honest reply instead.
            Blanket reassurance from an AI reinforces the same loop that reassurance from
            a partner does. MEOK reflects what it actually notices — which is more useful,
            even when harder to receive.
          </p>
        </div>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 5 — Self-soothing techniques
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What self-soothing techniques actually work for relationship anxiety?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          Self-soothing is not a euphemism for tolerating pain silently. It is the active
          work of regulating your nervous system so that you can engage with your feelings
          from a more grounded state rather than from the peak of the spiral.
        </p>

        {/* techniques */}
        {[
          {
            num: '01',
            title: 'Physiological sigh — before you type or speak',
            body: 'A double inhale through the nose followed by a long exhale through the mouth is the fastest known way to reduce acute physiological arousal. Doing this before you send a message, before you seek reassurance, or before you check your partner\'s read receipts gives the prefrontal cortex — the part that can reason — a chance to come back online before the limbic system acts.',
          },
          {
            num: '02',
            title: 'The 20-minute delay rule',
            body: 'Anxiety is biologically time-limited. If you can delay seeking reassurance by 20 minutes, the acute spike will pass. Not the underlying anxiety — that remains — but the urgency that makes reassurance-seeking feel impossible to resist. Commit to the delay before deciding whether to act. Most of the time, after 20 minutes, the question feels less urgent.',
          },
          {
            num: '03',
            title: 'Evidence versus interpretation — write it out',
            body: 'On paper or in MEOK: list what you literally observed. Then, in a separate column, list your interpretation. Be honest about how much of the second column is in the first column. Then ask: what are three other explanations for this observation that have nothing to do with me or my lovability? This is not about dismissing your feelings — it is about creating some distance between the feeling and the conclusion.',
          },
          {
            num: '04',
            title: 'Name the core belief underneath',
            body: 'Most relationship anxiety sits on top of a core belief — "I am too much", "I am not enough", "I will always be abandoned", "love is not safe". Naming that belief directly — writing it out in its full, naked form — often reduces its power. The belief feels huge when it is operating in the background. When you surface it explicitly, it becomes something you can look at, examine, and eventually challenge.',
          },
          {
            num: '05',
            title: 'Grounding — when the spiral is purely physical',
            body: 'Sometimes the anxiety has moved entirely into the body: tight chest, racing heart, shallow breathing. When this happens, cognitive techniques achieve little because the threat-detection system is running on pure physiology. The 5-4-3-2-1 grounding exercise — five things you can see, four you can touch, three you can hear, two you can smell, one you can taste — interrupts the body\'s threat signal by flooding the senses with present-moment information.',
          },
        ].map((item) => (
          <div
            key={item.num}
            style={{
              display: 'flex',
              gap: '1.25rem',
              marginBottom: '1.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(245,240,232,0.06)',
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 800,
                color: GOLD,
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
              }}
            >
              {item.num}
            </div>
            <div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: TEXT,
                  margin: '0.1rem 0 0.4rem',
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          </div>
        ))}

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 6 — Jealousy
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          How does jealousy fit into relationship anxiety — and when does it become a problem?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          Jealousy is not a personality defect. It is a threat-response generated by the
          same system that produces fear of abandonment — and it is extremely common in
          anxiously attached people. The evolutionary function of jealousy is to motivate
          vigilance when a valued attachment bond feels at risk. The problem arises when
          the threat-detection system is calibrated too sensitively — when it fires at
          ordinary social interactions because the underlying belief is{' '}
          <em style={{ color: TEXT }}>I am not enough to be chosen</em>.
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          The question to ask of any jealous feeling is: what exactly am I afraid of
          losing? The answer is usually not your partner specifically — it is the sense
          of being wanted, being special, being safe. When you can name what the jealousy
          is protecting, you can begin to examine whether that thing is actually in
          jeopardy, or whether the fear belongs to a wound that predates this relationship.
        </p>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.1rem',
          }}
        >
          Jealousy becomes a problem when it drives{' '}
          <strong style={{ color: TEXT }}>surveillance behaviour</strong> — checking a
          partner&#39;s phone, monitoring their social media, demanding to know their
          location — or when it leads to accusations, punishment, or isolation of a
          partner from their support networks. These behaviours damage trust regardless
          of whether the underlying fear was valid, and they require professional support
          to address safely. MEOK will not help you analyse your partner&#39;s movements;
          it will help you look at what the jealousy is telling you about your own
          internal state.
        </p>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 7 — What AI can actually do + MEOK specifically
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What can an AI companion like MEOK actually do for relationship anxiety?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          There is a gap in almost everyone&#39;s mental health support that AI occupies
          well: the space between therapy sessions, the hours before a crisis hotline feels
          warranted, the 11 pm moment when a spiral is building and there is no one awake
          to call.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: '0.95rem',
            margin: '0 0 0.45rem',
          }}
        >
          Processing obsessive thoughts in the moment they arise
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: '0.9rem',
            lineHeight: 1.78,
            margin: '0 0 1.1rem',
          }}
        >
          MEOK gives anxious thoughts somewhere to go that is not your partner. Instead of
          sending the message, you write it to MEOK. Instead of the spiral running
          uninterrupted at 2 am, there is a conversation that externalises the thought and
          creates some distance from it. That distance alone can interrupt the spiral.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: '0.95rem',
            margin: '0 0 0.45rem',
          }}
        >
          Pattern recognition across months
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: '0.9rem',
            lineHeight: 1.78,
            margin: '0 0 1.1rem',
          }}
        >
          MEOK&#39;s sovereign memory — stored in an encrypted vault that only you can
          access — holds the full record of your conversations. Across weeks and months it
          begins to notice things a static journal cannot: that your anxiety spikes on
          Sunday evenings before the working week, that a particular phrase from your
          partner consistently precedes a spiral, that your abandonment fear increases
          significantly around anniversary dates. This precision is clinically useful and
          practically rare.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: '0.95rem',
            margin: '0 0 0.45rem',
          }}
        >
          Building healthier relationship habits with prompts
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: '0.9rem',
            lineHeight: 1.78,
            margin: '0 0 1.1rem',
          }}
        >
          MEOK supports the kind of structured self-reflection that underpins CBT and EFT
          homework: what was the trigger, what was the thought, what was the evidence for
          and against, what would a more grounded interpretation be, what do you actually
          need right now. Applied consistently, this is not therapy — but it supports the
          conditions in which therapy becomes more effective.
        </p>

        <p
          style={{
            fontWeight: 700,
            color: TEXT,
            fontSize: '0.95rem',
            margin: '0 0 0.45rem',
          }}
        >
          Preparing for difficult conversations
        </p>
        <p
          style={{
            color: MUTED,
            fontSize: '0.9rem',
            lineHeight: 1.78,
            margin: '0 0 1.75rem',
          }}
        >
          One of the most practical uses of MEOK for relationship anxiety is preparing
          to communicate a need to a partner. Anxiously attached people often communicate
          needs from the peak of distress — when the words come out as accusations, tests,
          or demands rather than as genuine requests. Working through what you actually
          need before the conversation, identifying the fear beneath the request, and
          practising a calmer framing produces better outcomes for both people.
        </p>

        {/* what MEOK cannot do */}
        <div
          style={{
            background: 'rgba(245,240,232,0.03)',
            border: '1px solid rgba(245,240,232,0.09)',
            borderRadius: '0.75rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: 'rgba(245,240,232,0.6)',
              margin: '0 0 0.6rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em',
            }}
          >
            Hard limits — what MEOK cannot do
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.2rem',
              color: MUTED,
              fontSize: '0.875rem',
              lineHeight: 1.9,
            }}
          >
            <li>Replace couples therapy or provide it for both partners</li>
            <li>Diagnose an attachment disorder, anxiety disorder, or any clinical condition</li>
            <li>Substitute the lived experience of secure human connection</li>
            <li>Help you monitor or analyse your partner&#39;s behaviour</li>
            <li>
              Provide the corrective relational experience that heals attachment wounds — that
              requires real relationship, not AI
            </li>
          </ul>
        </div>

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 8 — Healthy relationship habits
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          What do healthy relationship habits actually look like when you have anxious attachment?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          Healthy relationship habits for anxiously attached people are not the same as
          healthy relationship habits for securely attached people. The work is asymmetric.
          Securely attached people often need to learn to engage more deeply; anxiously
          attached people often need to learn to soothe first, engage second.
        </p>

        {[
          {
            label: 'Communicate needs as requests, not tests',
            body: 'Anxious attachment often expresses needs indirectly — by sulking, withdrawing, or making statements that invite the partner to prove their love. Direct requests ("I am feeling unsettled tonight and would find it reassuring if you could tell me you\'re glad we\'re together") are more honest and more effective.',
          },
          {
            label: 'Practise tolerating ambiguity in small doses',
            body: 'Toleration of uncertainty is a skill built incrementally. Start with small, low-stakes ambiguities — an unreturned text from a friend, an unclear comment — and practise not resolving them immediately. Each successful episode builds capacity for the bigger ones.',
          },
          {
            label: 'Build a support network outside the relationship',
            body: 'Anxiously attached people often over-invest emotional reliance in a single partner, making that partner the sole source of regulation. Actively building friendships, therapeutic relationships, and other sources of connection reduces the pressure on the partnership and makes abandonment fear less existentially threatening.',
          },
          {
            label: 'Notice and name your attachment behaviour in real time',
            body: 'The simple act of noticing — "I am seeking reassurance right now because I feel scared, not because there is evidence of a threat" — creates a micro-moment of agency. You cannot always choose not to feel anxious, but you can sometimes choose not to act on it.',
          },
          {
            label: 'Repair after conflict without excessive apology',
            body: 'Anxiously attached people often over-apologise after conflict, pre-emptively atoning for the imagined abandonment they fear the conflict will cause. Clean repair — acknowledging what happened, expressing genuine remorse where warranted, and then stopping — is more effective than extended appeasement.',
          },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              padding: '1rem 1.25rem',
              marginBottom: '0.75rem',
              background: 'rgba(245,240,232,0.025)',
              border: '1px solid rgba(245,240,232,0.06)',
              borderRadius: '0.6rem',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '0.875rem',
                color: TEXT,
                margin: '0 0 0.35rem',
              }}
            >
              {item.label}
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: MUTED,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              {item.body}
            </p>
          </div>
        ))}

        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            margin: '2.5rem 0',
          }}
        />

        {/* ────────────────────────────────────────────────────────────────────
            SECTION 9 — When to seek professional help
        ──────────────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
            color: TEXT,
            lineHeight: 1.28,
            margin: '0 0 0.9rem',
            letterSpacing: '-0.01em',
          }}
        >
          When should relationship anxiety be treated professionally?
        </h2>

        <p
          style={{
            color: 'rgba(245,240,232,0.82)',
            fontSize: '1rem',
            lineHeight: 1.74,
            margin: '0 0 1.2rem',
          }}
        >
          Self-soothing and AI support have a ceiling. Seek professional support if any of
          the following apply:
        </p>

        <ul
          style={{
            margin: '0 0 1.4rem',
            paddingLeft: '1.3rem',
            color: MUTED,
            fontSize: '0.95rem',
            lineHeight: 2,
          }}
        >
          <li>Relationship anxiety is causing significant daily distress</li>
          <li>It is affecting your work, sleep, physical health, or other relationships</li>
          <li>You are engaging in surveillance or controlling behaviour toward a partner</li>
          <li>It has persisted across multiple relationships despite self-help efforts</li>
          <li>There is co-occurring depression, OCD, or trauma that needs clinical treatment</li>
          <li>Your partner is expressing that the anxiety is damaging the relationship</li>
        </ul>

        <p
          style={{
            color: MUTED,
            fontSize: '0.965rem',
            lineHeight: 1.8,
            margin: '0 0 1.75rem',
          }}
        >
          In the UK, you can self-refer to{' '}
          <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> for CBT and
          related approaches. For relationship-specific support,{' '}
          <a
            href="https://www.relate.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: 'underline' }}
          >
            Relate
          </a>{' '}
          provides counselling for individuals and couples. If you need help finding an
          attachment-informed therapist, the{' '}
          <a
            href="https://www.bacp.co.uk/search/Therapists"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: GOLD, textDecoration: 'underline' }}
          >
            BACP directory
          </a>{' '}
          allows you to filter by specialism. In crisis, Samaritans are available{' '}
          free on <strong style={{ color: TEXT }}>116 123</strong>, 24 hours a day.
        </p>

        {/* UK resources box */}
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
            UK Support Resources
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.2rem',
              listStyle: 'disc',
              color: 'rgba(245,240,232,0.75)',
              fontSize: '0.9rem',
              lineHeight: 1.9,
            }}
          >
            <li>
              <strong style={{ color: TEXT }}>Relate</strong> — relationship counselling
              across the UK.{' '}
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
              <strong style={{ color: TEXT }}>Samaritans</strong> — free, 24/7 emotional
              support.{' '}
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
              <strong style={{ color: TEXT }}>Mind</strong> — mental health information
              and local support.{' '}
              <a
                href="https://www.mind.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                mind.org.uk
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>NHS Talking Therapies</strong> — free
              self-referral to CBT and related approaches.{' '}
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
              accredited, attachment-informed therapist.{' '}
              <a
                href="https://www.bacp.co.uk/search/Therapists"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                bacp.co.uk
              </a>
            </li>
            <li>
              <strong style={{ color: TEXT }}>No Panic</strong> — help for anxiety,
              phobias, and OCD including relationship OCD.{' '}
              <a
                href="https://www.nopanic.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, textDecoration: 'underline' }}
              >
                nopanic.org.uk
              </a>
            </li>
          </ul>
        </div>

        {/* ── Medical disclaimer ── */}
        <div
          style={{
            background: 'rgba(245,240,232,0.025)',
            border: '1px solid rgba(245,240,232,0.08)',
            borderRadius: '0.6rem',
            padding: '1rem 1.3rem',
            marginBottom: '2.75rem',
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
              Medical &amp; therapeutic disclaimer:
            </strong>{' '}
            This article is for informational purposes only and does not constitute medical
            advice, psychological diagnosis, or clinical guidance. MEOK is not a medical
            device, therapy application, or regulated mental health service. It cannot
            diagnose attachment disorders, anxiety disorders, or any other clinical
            condition. If you are experiencing significant distress, please speak to a
            qualified healthcare professional. MEOK AI LABS does not accept liability for
            decisions made on the basis of this content.
          </p>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderRadius: '1rem',
            padding: '2.25rem',
            textAlign: 'center' as const,
            marginBottom: '3.25rem',
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: TEXT,
              margin: '0 0 0.55rem',
              lineHeight: 1.35,
            }}
          >
            Ready to interrupt the spiral before it takes hold?
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.58)',
              margin: '0 0 1.6rem',
              lineHeight: 1.65,
              maxWidth: '32rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            MEOK holds your full history across months, reflects honestly rather than
            telling you what you want to hear, and is available at 11 pm when the spiral
            is building.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              background: GOLD,
              color: BG,
              fontWeight: 800,
              fontSize: '0.925rem',
              padding: '0.8rem 2.25rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Meet MEOK
          </Link>
        </div>

        {/* ── Related reading ── */}
        <div style={{ marginBottom: '4rem' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: 'rgba(245,240,232,0.28)',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              margin: '0 0 1rem',
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '0.6rem',
            }}
          >
            <Link
              href="/blog/ai-for-anxiety"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI for Anxiety: Can a Sovereign AI Companion Actually Help?
            </Link>
            <Link
              href="/blog/ai-companion-vs-therapist"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI Companion vs Therapist: What Is the Actual Difference?
            </Link>
            <Link
              href="/blog/ai-for-heartbreak"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI for Heartbreak: Processing Loss Without Drowning in It
            </Link>
            <Link
              href="/blog/ai-for-ocd"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI for OCD: Breaking the Reassurance Loop
            </Link>
            <Link
              href="/blog/ai-for-social-anxiety"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              AI for Social Anxiety: Confidence Without Performance
            </Link>
            <Link
              href="/blog/building-care-into-ai"
              style={{ color: GOLD, textDecoration: 'underline', fontSize: '0.9rem' }}
            >
              Building Care Into AI: The Maternal Covenant Framework
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        style={{
          borderTop: '1px solid rgba(245,240,232,0.07)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center' as const,
        }}
      >
        <p
          style={{
            fontSize: '0.8rem',
            color: 'rgba(245,240,232,0.24)',
            margin: '0 0 0.6rem',
          }}
        >
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
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.26)', textDecoration: 'none' }}
          >
            Privacy
          </Link>
          <Link
            href="/blog"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.26)', textDecoration: 'none' }}
          >
            Blog
          </Link>
          <Link
            href="/"
            style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.26)', textDecoration: 'none' }}
          >
            meok.ai
          </Link>
        </div>
      </div>

    </div>
  )
}
