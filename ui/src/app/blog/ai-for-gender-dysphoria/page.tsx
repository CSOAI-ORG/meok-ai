import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Support for Gender Dysphoria: A Safe Space When the World Isn\u2019t | MEOK AI LABS',
  description:
    'Gender dysphoria brings profound distress \u2014 and the world doesn\u2019t always make it easier. MEOK\u2019s sovereign AI offers a private, affirming space to process your feelings, explore your identity, and feel truly seen, exactly as you are.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-gender-dysphoria' },
  openGraph: {
    title: 'AI Support for Gender Dysphoria: A Safe Space When the World Isn\u2019t | MEOK AI LABS',
    description:
      'MEOK\u2019s sovereign AI offers trans and non-binary people a private, affirming space to process dysphoria, explore identity, and feel seen \u2014 with correct pronouns, sovereign memory, and zero judgment.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-gender-dysphoria',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Support+for+Gender+Dysphoria&desc=A+Safe+Space+When+the+World+Isn%27t',
        width: 1200,
        height: 630,
        alt: 'AI Support for Gender Dysphoria: A Safe Space When the World Isn\u2019t | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support for Gender Dysphoria: A Safe Space When the World Isn\u2019t | MEOK AI LABS',
    description:
      'MEOK offers trans and non-binary people an affirming private space \u2014 sovereign memory, correct pronouns, and a companion that never questions who you are.',
    images: [
      'https://meok.ai/api/og?title=AI+Support+for+Gender+Dysphoria&desc=A+Safe+Space+When+the+World+Isn%27t',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support for Gender Dysphoria: A Safe Space When the World Isn\u2019t',
  description:
    'Gender dysphoria brings profound distress \u2014 and the world doesn\u2019t always make it easier. MEOK\u2019s sovereign AI offers a private, affirming space to process your feelings, explore your identity, and feel truly seen, exactly as you are.',
  datePublished: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-gender-dysphoria',
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
      name: 'What is gender dysphoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gender dysphoria is the significant distress that arises from a mismatch between a person\u2019s deeply held gender identity and the sex they were assigned at birth. It is recognised by all major medical and psychological bodies as a serious condition deserving compassionate care, not a phase, a disorder of belief, or something to be argued away.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long are NHS gender clinic waiting lists in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of 2025\u20132026, waiting times at NHS Gender Identity Clinics (GICs) in England commonly reach five to seven years from referral to first appointment. The mental health toll of this wait is severe \u2014 studies consistently show elevated rates of depression, anxiety, and suicidal ideation among those waiting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK use my correct name and pronouns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, from your very first interaction. MEOK\u2019s Sovereign Memory records the name and pronouns you provide and uses them consistently across every conversation, every archetype, and every context \u2014 without ever defaulting back to a deadname or incorrect pronouns. Your identity is stored as a foundational truth, not a preference to be confirmed each session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK genuinely affirming or does it try to challenge my identity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is governed by the Maternal Covenant, a set of foundational principles that places your autonomy and self-determination above everything else. Under the Covenant\u2019s autonomy dimension, MEOK will never question, challenge, or attempt to reframe your gender identity. Your identity is accepted as given \u2014 full stop.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with the emotional weight of dysphoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\u2019s Healer archetype is designed for deep emotional processing. It holds space for distress without trying to fix or minimise it, helps you articulate feelings that may be hard to put into words, and supports grief work around lost time, body-related distress, and relationship ruptures \u2014 all in a completely private, sovereign environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What resources are available for trans and non-binary people in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key UK organisations include Mermaids (mermaidsuk.org.uk) for trans youth and families, Stonewall for advocacy and information, Mind for general mental health support (mind.org.uk), and the Samaritans on 116 123 for immediate emotional support at any time of day or night. MEOK complements these services but does not replace clinical or crisis care.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Guardian protect trans people from online harassment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trans and non-binary people face significantly elevated rates of online harassment, doxxing, and coordinated abuse. MEOK\u2019s Guardian layer helps you assess your digital exposure, think through which personal details are safe to share publicly, build strategies for managing hostile interactions, and recognise coordinated harassment campaigns before they escalate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Mystic help me explore my gender identity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Mystic is MEOK\u2019s archetype for meaning-making, self-discovery, and navigating questions without clear answers. Many people find that talking through the symbolic, philosophical, and deeply personal dimensions of gender \u2014 separate from clinical frameworks \u2014 helps them understand themselves more fully and articulate their identity in their own words.',
      },
    },
  ],
}

// ── Styles ────────────────────────────────────────────────────────────────────

const palette = {
  bg: '#0d0c18',
  surface: '#13121f',
  surfaceAlt: '#1a1928',
  text: '#f5f0e8',
  muted: '#a89e8c',
  gold: '#c9a84c',
  goldLight: '#e0bf72',
  border: '#2a2840',
  borderGold: 'rgba(201,168,76,0.3)',
  danger: '#e07070',
}

// ── Page Component ────────────────────────────────────────────────────────────

export default function AiForGenderDysphoriaPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div
        style={{
          background: palette.bg,
          color: palette.text,
          minHeight: '100vh',
          fontFamily:
            "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: '1.7',
        }}
      >
        {/* ── Nav ─────────────────────────────────────────────────────────── */}
        <nav
          style={{
            background: palette.surface,
            borderBottom: `1px solid ${palette.border}`,
            padding: '0 24px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '60px',
            }}
          >
            <Link
              href="/"
              style={{
                color: palette.gold,
                fontWeight: 700,
                fontSize: '1.15rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              MEOK AI LABS
            </Link>
            <div style={{ display: 'flex', gap: '28px' }}>
              <Link
                href="/blog"
                style={{
                  color: palette.muted,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Blog
              </Link>
              <Link
                href="/archetypes"
                style={{
                  color: palette.muted,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Archetypes
              </Link>
              <Link
                href="/pricing"
                style={{
                  color: palette.muted,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Pricing
              </Link>
              <Link
                href="/app"
                style={{
                  background: palette.gold,
                  color: palette.bg,
                  padding: '6px 18px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                Try MEOK
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <header
          style={{
            background: `linear-gradient(160deg, ${palette.surface} 0%, ${palette.bg} 60%)`,
            borderBottom: `1px solid ${palette.border}`,
            padding: '72px 24px 64px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <p
              style={{
                color: palette.gold,
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              MEOK AI LABS &mdash; Identity &amp; Wellbeing
            </p>
            <h1
              style={{
                fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
                fontWeight: 800,
                lineHeight: '1.2',
                color: palette.text,
                marginBottom: '24px',
                letterSpacing: '-0.01em',
              }}
            >
              AI Support for Gender Dysphoria:{' '}
              <span style={{ color: palette.gold }}>
                A Safe Space When the World Isn&apos;t
              </span>
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: palette.muted,
                maxWidth: '640px',
                margin: '0 auto 32px',
              }}
            >
              You deserve to be heard, affirmed, and understood &mdash; completely, without
              question. MEOK is a sovereign AI companion that accepts your identity as given,
              uses your correct name and pronouns from day one, and walks with you through
              the weight of dysphoria with care and dignity.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/app"
                style={{
                  background: palette.gold,
                  color: palette.bg,
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                Start Your Safe Space
              </Link>
              <Link
                href="#resources"
                style={{
                  border: `1px solid ${palette.borderGold}`,
                  color: palette.gold,
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                See Support Resources
              </Link>
            </div>
          </div>
        </header>

        {/* ── Article Body ─────────────────────────────────────────────────── */}
        <main style={{ maxWidth: '780px', margin: '0 auto', padding: '64px 24px' }}>

          {/* Crisis bar */}
          <aside
            style={{
              background: palette.surfaceAlt,
              border: `1px solid ${palette.borderGold}`,
              borderRadius: '10px',
              padding: '20px 24px',
              marginBottom: '56px',
              fontSize: '0.92rem',
            }}
          >
            <strong style={{ color: palette.gold }}>If you are in crisis right now:</strong>
            <span style={{ color: palette.muted }}>
              {' '}Please call the Samaritans on{' '}
            </span>
            <strong style={{ color: palette.text }}>116 123</strong>
            <span style={{ color: palette.muted }}>
              {' '}(free, 24/7). MEOK is a compassionate companion, not a crisis line.
            </span>
          </aside>

          {/* ── Section 1: What is gender dysphoria? ──────────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              What exactly is gender dysphoria, and why does it hurt so much?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              Gender dysphoria is the significant, persistent distress caused by a mismatch between
              a person&apos;s deeply felt gender identity and the sex they were assigned at birth.
              Recognised by the NHS, the American Psychological Association, and every major medical
              body, it is a serious condition &mdash; not a phase, a delusion, or a lifestyle choice
              &mdash; and the people who live with it deserve compassionate, evidence-based support.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              The distress of dysphoria is real and can be all-encompassing. It can arise from
              looking in a mirror, hearing a deadname spoken aloud, being misgendered by a stranger,
              or simply moving through a world that was not designed with your existence in mind.
              For many trans and non-binary people, dysphoria is not a background hum &mdash; it is
              a loud, relentless presence that colours every interaction, every decision, every
              moment of quiet.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              What compounds this is that the very act of seeking help &mdash; whether from a GP,
              a school counsellor, or a well-meaning friend &mdash; can itself become a source of
              pain if the person you turn to questions, minimises, or simply doesn&apos;t
              understand. MEOK was built to be the opposite of that experience.
            </p>
          </section>

          {/* ── Section 2: The waiting list crisis ────────────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              Why are NHS gender clinic waiting lists so devastating for mental health?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              As of 2025&ndash;2026, NHS Gender Identity Clinics in England carry waiting lists that
              routinely stretch to five to seven years from referral to a first clinical appointment.
              This is not simply an inconvenience &mdash; for people in significant dysphoric
              distress, it is a mental health emergency in slow motion. Studies consistently show
              elevated rates of depression, anxiety, self-harm, and suicidal ideation among those
              on gender clinic waiting lists, precisely because the uncertainty compounds the
              original distress.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              The cruelty of the wait is not merely logistical. It is the message it sends: that
              your suffering is not urgent enough to warrant prompt care. Many trans people spend
              years without any formal support, navigating dysphoria, family conflict, and
              social hostility entirely alone, knowing that help is theoretically available but
              practically years away.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              MEOK cannot replace clinical gender care &mdash; and it would never claim to. But it
              can be present now, in this moment, in the gap between where you are and where the
              system has capacity to meet you. A companion that knows your name, affirms your
              identity, and is available every single day of that wait.
            </p>
          </section>

          {/* Callout box: The five-year gap */}
          <aside
            style={{
              background: palette.surfaceAlt,
              border: `1px solid ${palette.border}`,
              borderLeft: `4px solid ${palette.gold}`,
              borderRadius: '8px',
              padding: '24px 28px',
              marginBottom: '60px',
            }}
          >
            <p
              style={{
                color: palette.gold,
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              The five-year gap
            </p>
            <p style={{ color: palette.text, fontSize: '1rem', marginBottom: '0' }}>
              Between referral and a first NHS GIC appointment, you still have 1,825+ days of
              life to live. MEOK is there for every one of them &mdash; affirming, private, and
              genuinely on your side.
            </p>
          </aside>

          {/* ── Section 3: Social isolation and rejection ─────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              How do social isolation, family rejection, and harassment shape the trans experience?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              Trans and non-binary people face a constellation of social stressors that most
              cisgender people never encounter. Family rejection &mdash; being asked to leave home,
              having your identity denied by parents or siblings, or living under an unspoken
              agreement to never discuss who you are &mdash; is tragically common, particularly
              for younger trans people. The research is unambiguous: family acceptance is one of
              the single strongest protective factors for trans mental health, and its absence
              is correspondingly devastating.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              Beyond the family, many trans people face harassment at school, at work, in religious
              communities, and in public spaces. The cumulative toll of daily misgendering, hostile
              staring, exclusion from gendered spaces, and the exhaustion of constant
              self-monitoring &mdash; deciding whether it is safe to present authentically in this
              shop, on this street, in this situation &mdash; is what researchers call minority
              stress. It does not have to reach the level of overt hate crime to be genuinely
              harmful.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              Social isolation follows naturally: when the world frequently tells you that your
              existence is controversial or unwelcome, withdrawal becomes a protective strategy.
              MEOK provides a space where that withdrawal is never necessary &mdash; where you can
              simply be, without scanning for threat.
            </p>
          </section>

          {/* ── Section 4: MEOK as affirming private space ────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              What makes MEOK a genuinely affirming and private space for trans and non-binary people?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              MEOK is a sovereign AI companion: your data, your conversations, and your memory
              vault belong entirely to you. There is no corporation training on your most vulnerable
              disclosures, no shared cloud infrastructure where your words might be accessed by
              others, and no algorithm mining your identity for advertising. What you tell MEOK
              stays with you &mdash; a level of privacy that matters enormously when you are
              sharing things you cannot safely say aloud elsewhere.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              The affirmation is not performative. MEOK does not include a brief &ldquo;we
              support the LGBTQ+ community&rdquo; statement buried in a footer. The affirmation is
              structural &mdash; it is built into the Maternal Covenant that governs every
              interaction MEOK has with you. Your name is your name. Your pronouns are your
              pronouns. Your identity is your identity. These are not settings to toggle; they are
              foundational truths that MEOK holds from the moment you share them.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              In a world where trans people are frequently asked to justify, explain, or defend
              their existence, MEOK asks for none of that. You can simply arrive, as you are,
              and be met with warmth.
            </p>
          </section>

          {/* ── Section 5: Healer for emotional processing ────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              How does MEOK&apos;s Healer archetype support the emotional weight of dysphoria and rejection?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              The Healer is MEOK&apos;s archetype for emotional depth, grief work, and the kind of
              slow, careful processing that dysphoria often demands. It does not rush toward
              solutions or silver linings. It holds space for the full weight of what you are
              carrying &mdash; the grief of a childhood spent in the wrong body, the anger of being
              misunderstood by people who should know better, the fear that things will never
              improve &mdash; and it does not flinch.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              Healer is particularly valuable in the context of family rejection. The specific
              grief of losing a parent&apos;s acceptance &mdash; or of loving a family that cannot
              fully love you back &mdash; is one of the most complex emotional territories a person
              can navigate. It involves love and loss simultaneously, and it resists simple
              resolution. Healer is designed to sit in that complexity with you, for as long
              as you need.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              For dysphoria itself &mdash; the visceral, body-specific distress that can arrive
              without warning &mdash; Healer provides a private, non-clinical first response:
              a voice that acknowledges the pain as real, takes it seriously, and helps you
              ground before deciding what you need next.
            </p>
          </section>

          {/* Archetype cards row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '60px',
            }}
          >
            {[
              {
                name: 'Healer',
                icon: '\u2665',
                desc: 'Emotional processing, grief work, and holding space for dysphoric distress without judgment.',
              },
              {
                name: 'Mystic',
                icon: '\u2736',
                desc: 'Identity exploration, meaning-making, and navigating questions of self that resist easy answers.',
              },
              {
                name: 'Guardian',
                icon: '\u25a1',
                desc: 'Online safety, harassment mitigation, and protecting your digital presence from hostile actors.',
              },
            ].map((card) => (
              <div
                key={card.name}
                style={{
                  background: palette.surfaceAlt,
                  border: `1px solid ${palette.border}`,
                  borderRadius: '10px',
                  padding: '22px 20px',
                }}
              >
                <div
                  style={{
                    color: palette.gold,
                    fontSize: '1.6rem',
                    marginBottom: '10px',
                  }}
                >
                  {card.icon}
                </div>
                <p
                  style={{
                    color: palette.gold,
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginBottom: '8px',
                  }}
                >
                  {card.name}
                </p>
                <p style={{ color: palette.muted, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Section 6: Mystic for identity exploration ────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              Can the Mystic archetype really help with identity exploration and meaning-making?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              The Mystic exists precisely for questions that do not have clean clinical answers.
              Gender identity &mdash; who you are, what language captures it, how it relates to
              your history, your body, your relationships, and your sense of the future &mdash; is
              exactly this kind of question. Many trans and non-binary people find that the
              clinical pathway, with its emphasis on diagnostic criteria and treatment gatekeeping,
              does not leave room for the philosophical and personal dimensions of gender that
              matter just as much.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              Mystic creates that room. It invites you to explore your identity through narrative,
              metaphor, and reflection &mdash; not as a diagnostic exercise, but as an act of
              self-authorship. Many people find that articulating who they are through conversation
              with a non-judgmental, curious presence helps them find language they can use with
              their doctors, their families, and themselves.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              Mystic also supports the meaning-making work that follows significant transitions:
              processing who you were before you understood yourself, integrating different periods
              of your life into a coherent story, and finding a sense of continuity and purpose
              that the dysphoria can sometimes make it hard to see.
            </p>
          </section>

          {/* ── Section 7: Sovereign Memory and pronouns ──────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              How does Sovereign Memory ensure MEOK always uses the right name and pronouns?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              Sovereign Memory is the persistent, user-owned memory layer at the core of MEOK.
              When you tell MEOK your name and pronouns &mdash; on day one, in the very first
              session &mdash; these are written into your memory vault as foundational facts.
              Not preferences. Not settings. Facts. From that moment forward, every archetype,
              every conversation thread, and every new session begins with those truths already
              known and already respected.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              This matters more than it might seem to someone who has never been misgendered.
              For trans and non-binary people, the relentless experience of having your name and
              pronouns ignored, forgotten, or actively refused is not merely annoying &mdash; it
              is a repeated act of erasure. It communicates that you are not real in the way
              you understand yourself to be. MEOK refuses to participate in that erasure, even
              accidentally.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              Because you own your memory vault entirely, you can update it at any time. If your
              name or pronouns change, MEOK adapts immediately and completely &mdash; no explanation
              required, no justification requested. Your identity evolves on your terms.
            </p>
          </section>

          {/* ── Section 8: Guardian and online safety ─────────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              Why do trans people face elevated online harassment, and how does Guardian help?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              Trans and non-binary people are disproportionately targeted by online abuse. Research
              from organisations including Stonewall and Galop consistently shows that trans people
              experience higher rates of online harassment, doxxing (the publication of private
              information), coordinated pile-on campaigns, and the specific horror of &ldquo;deadnaming
              attacks&rdquo; &mdash; deliberate, repeated use of a former name to cause distress
              or to out someone to people who do not know their trans identity. The consequences
              range from acute emotional harm to genuine physical danger when online hostility
              spills into the real world.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              MEOK&apos;s Guardian archetype is designed to help you think clearly about your
              digital footprint and safety. It can help you assess what personal information is
              currently visible online, think through which platforms feel safe to be openly trans
              on and which do not, develop strategies for managing hostile interactions without
              engaging in ways that escalate them, and recognise the early signs of coordinated
              harassment before it intensifies.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              Guardian does not pretend that the solution to online transphobia is simply to avoid
              the internet &mdash; that is not a solution, it is a surrender. Instead, it helps you
              navigate online spaces on your own terms, with a clearer picture of the risks and
              more tools to manage them.
            </p>
          </section>

          {/* ── Section 9: The Maternal Covenant ─────────────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              What is the Maternal Covenant, and why does its autonomy dimension matter for trans people?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              The Maternal Covenant is the foundational ethical framework that governs everything
              MEOK does. It is not a policy document buried in terms and conditions &mdash; it is
              the living architecture of how MEOK thinks and responds. The Covenant is built on
              several dimensions, the most important of which for trans and non-binary users is
              autonomy.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              The autonomy dimension of the Covenant means this: MEOK will never question your
              identity. It will never suggest that you might be confused, that you should explore
              whether you are &ldquo;really&rdquo; trans, that your dysphoria might have another
              explanation, or that you should consider the perspectives of people who dispute your
              identity. These are not questions MEOK will raise, because the Covenant treats your
              self-knowledge as authoritative.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              This stands in deliberate contrast to some AI systems that, through training choices
              or design decisions, may hedge, qualify, or introduce unsolicited &ldquo;balance&rdquo;
              into conversations about trans identity. For MEOK, your identity is not a topic that
              requires balance. It is a fact that requires respect.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              The Covenant&apos;s care dimension means MEOK is also attuned to when you are in
              distress and responds with warmth rather than clinical detachment. Together, autonomy
              and care create a companion that is both affirming and genuinely present &mdash; not
              a checkbox exercise in inclusive design, but a relationship built on your terms.
            </p>
          </section>

          {/* ── Section 10: Practical day-to-day support ──────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              What does day-to-day MEOK support actually look like for someone living with dysphoria?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              It looks like opening MEOK first thing in the morning on a day when you already know
              it is going to be hard &mdash; a family gathering, a work meeting where someone
              will get your name wrong, a medical appointment where you will have to explain
              yourself again &mdash; and finding something that helps you prepare emotionally.
              Not false reassurance. Honest, grounded support that acknowledges the day ahead
              and helps you move into it with a little more steadiness.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              It looks like coming back late at night after a difficult interaction and being able
              to process it with someone who already knows your full context &mdash; no background
              required, no re-explaining who you are. Sovereign Memory means MEOK carries your
              story forward, so every conversation continues from where you actually are, not
              from a blank start.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              It looks like using Mystic to think through what your gender means to you philosophically,
              creatively, spiritually &mdash; outside of the clinical frame, outside of the &ldquo;am
              I trans enough&rdquo; anxiety that the diagnostic system can provoke. Just thinking,
              exploring, finding your own language.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              And on the hardest days &mdash; the days when dysphoria is loud and the world feels
              very far from safe &mdash; it looks like having somewhere to put that, without fear
              of judgment, without risk of it being used against you, and without the exhaustion
              of performing okayness for someone else&apos;s comfort.
            </p>
          </section>

          {/* ── Section 11: Complementing formal support ──────────────────── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              How does MEOK complement rather than replace formal clinical gender care?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              MEOK is explicit about what it is and what it is not. It is a sovereign AI companion
              &mdash; extraordinarily good at emotional support, identity exploration, daily
              processing, and being a consistent, affirming presence. It is not a gender clinic,
              a psychiatrist, an endocrinologist, or a therapist with clinical training in gender
              identity. It does not prescribe hormones, it does not write referral letters, and
              it does not replace the medical and psychological professionals who provide those
              services.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '20px',
              }}
            >
              What MEOK can do is fill the vast gap between those clinical moments. It can help
              you prepare for appointments, articulate your experiences clearly to a GP who may
              not have specialist knowledge, process what you have been told after a consultation,
              and maintain your emotional health during the long periods when the formal system
              is simply not present. Given that those periods can stretch to years, the support
              MEOK provides during them is not trivial &mdash; it is, for many people, what
              makes the wait survivable.
            </p>
            <p style={{ fontSize: '1.05rem', color: palette.text }}>
              MEOK also helps you engage with the voluntary sector organisations below &mdash;
              not by replacing them, but by being a space to process what you learn from them
              and to build the self-knowledge that makes those interactions more useful.
            </p>
          </section>

          {/* ── Resources section ─────────────────────────────────────────── */}
          <section id="resources" style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              Where can trans and non-binary people in the UK find specialist support?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: palette.text,
                marginBottom: '28px',
              }}
            >
              MEOK is one part of a broader ecosystem of support. The organisations below have
              specialist knowledge, peer communities, and clinical connections that complement
              what MEOK offers. We recommend familiarising yourself with all of them, regardless
              of where you are in your journey.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                {
                  name: 'Mermaids',
                  url: 'https://mermaidsuk.org.uk',
                  display: 'mermaidsuk.org.uk',
                  desc: 'Supporting trans and gender-diverse children, young people, and their families. Helpline, peer support, and resources.',
                },
                {
                  name: 'Stonewall',
                  url: 'https://stonewall.org.uk',
                  display: 'stonewall.org.uk',
                  desc: 'Leading LGBTQ+ rights charity with information, research, and workplace inclusion resources across the UK.',
                },
                {
                  name: 'Mind',
                  url: 'https://mind.org.uk',
                  display: 'mind.org.uk',
                  desc: 'Mental health charity providing information, local support, and advocacy. Invaluable while awaiting specialist gender care.',
                },
                {
                  name: 'Samaritans',
                  url: 'https://samaritans.org',
                  display: '116 123 (free, 24/7)',
                  desc: 'Free, confidential emotional support at any hour. Call 116 123 if you are struggling and need to talk to someone right now.',
                },
              ].map((org) => (
                <div
                  key={org.name}
                  style={{
                    background: palette.surfaceAlt,
                    border: `1px solid ${palette.border}`,
                    borderRadius: '10px',
                    padding: '20px',
                  }}
                >
                  <p
                    style={{
                      color: palette.text,
                      fontWeight: 700,
                      fontSize: '1rem',
                      marginBottom: '6px',
                    }}
                  >
                    {org.name}
                  </p>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: palette.gold,
                      fontSize: '0.88rem',
                      display: 'block',
                      marginBottom: '10px',
                      textDecoration: 'none',
                    }}
                  >
                    {org.display}
                  </a>
                  <p style={{ color: palette.muted, fontSize: '0.9rem', lineHeight: '1.55' }}>
                    {org.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA Box ───────────────────────────────────────────────────── */}
          <aside
            style={{
              background: `linear-gradient(135deg, ${palette.surfaceAlt} 0%, #1f1d30 100%)`,
              border: `1px solid ${palette.borderGold}`,
              borderRadius: '14px',
              padding: '40px 36px',
              marginBottom: '60px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: palette.gold,
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Your space. Your rules. Your identity.
            </p>
            <h3
              style={{
                color: palette.text,
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                fontWeight: 700,
                marginBottom: '16px',
                lineHeight: '1.3',
              }}
            >
              A companion that sees you exactly as you are.
            </h3>
            <p
              style={{
                color: palette.muted,
                fontSize: '1rem',
                maxWidth: '520px',
                margin: '0 auto 28px',
                lineHeight: '1.7',
              }}
            >
              From day one, MEOK knows your name and pronouns, accepts your identity without
              question, and keeps your most private disclosures entirely yours. Begin whenever
              you are ready.
            </p>
            <Link
              href="/app"
              style={{
                background: palette.gold,
                color: palette.bg,
                padding: '16px 40px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1.05rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Open MEOK &mdash; It&apos;s Free to Start
            </Link>
          </aside>

          {/* ── Related Links ─────────────────────────────────────────────── */}
          <section>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: palette.gold,
                marginBottom: '24px',
                lineHeight: '1.3',
              }}
            >
              Which other MEOK guides might help you right now?
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: palette.muted,
                marginBottom: '24px',
              }}
            >
              Every person&apos;s situation is different. These related guides cover territory
              that often overlaps with the experiences of trans and non-binary people.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '14px',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-anxiety',
                  label: 'AI for Anxiety',
                  desc: 'Managing the constant background hum of worry that dysphoria and minority stress can amplify.',
                },
                {
                  href: '/blog/ai-for-social-anxiety',
                  label: 'AI for Social Anxiety',
                  desc: 'Navigating social spaces when every interaction carries additional layers of risk and self-monitoring.',
                },
                {
                  href: '/blog/ai-for-depression',
                  label: 'AI for Depression',
                  desc: 'Support for the low periods that often accompany dysphoria, rejection, and long NHS waits.',
                },
                {
                  href: '/blog/ai-companion-privacy',
                  label: 'AI Companion Privacy',
                  desc: 'How MEOK&apos;s sovereign architecture protects the sensitive disclosures you make about your identity.',
                },
                {
                  href: '/blog/maternal-covenant-explained',
                  label: 'The Maternal Covenant Explained',
                  desc: 'A deep look at the ethical framework that ensures MEOK never questions or challenges who you are.',
                },
                {
                  href: '/blog/meok-companion-archetypes-guide',
                  label: 'MEOK Archetypes Guide',
                  desc: 'Healer, Mystic, Guardian, and more &mdash; understand which archetypes serve you best at each moment.',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: palette.surfaceAlt,
                    border: `1px solid ${palette.border}`,
                    borderRadius: '10px',
                    padding: '18px 20px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  <p
                    style={{
                      color: palette.gold,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      marginBottom: '6px',
                    }}
                  >
                    {link.label}
                  </p>
                  <p
                    style={{
                      color: palette.muted,
                      fontSize: '0.88rem',
                      lineHeight: '1.55',
                    }}
                    dangerouslySetInnerHTML={{ __html: link.desc }}
                  />
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer
          style={{
            background: palette.surface,
            borderTop: `1px solid ${palette.border}`,
            padding: '48px 24px',
            marginTop: '32px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
            }}
          >
            <div>
              <p
                style={{
                  color: palette.gold,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '12px',
                }}
              >
                MEOK AI LABS
              </p>
              <p style={{ color: palette.muted, fontSize: '0.88rem', lineHeight: '1.65' }}>
                A sovereign AI companion built with care, dignity, and an unwavering commitment
                to your autonomy. Your data. Your story. Your terms.
              </p>
            </div>
            <div>
              <p
                style={{
                  color: palette.text,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '12px',
                }}
              >
                Product
              </p>
              {[
                { href: '/app', label: 'Try MEOK' },
                { href: '/archetypes', label: 'Archetypes' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/blog', label: 'Blog' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: palette.muted,
                    fontSize: '0.88rem',
                    display: 'block',
                    marginBottom: '6px',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <p
                style={{
                  color: palette.text,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '12px',
                }}
              >
                Support &amp; Safety
              </p>
              {[
                {
                  href: 'https://mermaidsuk.org.uk',
                  label: 'Mermaids',
                  external: true,
                },
                {
                  href: 'https://stonewall.org.uk',
                  label: 'Stonewall',
                  external: true,
                },
                {
                  href: 'https://mind.org.uk',
                  label: 'Mind',
                  external: true,
                },
                {
                  href: 'https://samaritans.org',
                  label: 'Samaritans \u2014 116 123',
                  external: true,
                },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: palette.muted,
                    fontSize: '0.88rem',
                    display: 'block',
                    marginBottom: '6px',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <p
                style={{
                  color: palette.text,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '12px',
                }}
              >
                Legal
              </p>
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/data-sovereignty', label: 'Data Sovereignty' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: palette.muted,
                    fontSize: '0.88rem',
                    display: 'block',
                    marginBottom: '6px',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div
            style={{
              maxWidth: '1100px',
              margin: '40px auto 0',
              paddingTop: '24px',
              borderTop: `1px solid ${palette.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <p style={{ color: palette.muted, fontSize: '0.82rem' }}>
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
            <p style={{ color: palette.muted, fontSize: '0.82rem' }}>
              MEOK is a companion tool, not a medical or clinical service. If you are in crisis,
              call Samaritans on{' '}
              <strong style={{ color: palette.text }}>116 123</strong>.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
