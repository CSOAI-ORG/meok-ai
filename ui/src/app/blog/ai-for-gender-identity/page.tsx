import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Gender Identity: How MEOK Provides a Safe Space for Exploration and Expression | MEOK AI LABS',
  description:
    'Questioning your gender identity, exploring non-binary or trans identities, or navigating transition? MEOK\u2019s sovereign AI offers a private, affirming space with permanent memory of your name and pronouns \u2014 no judgment, no pressure, just presence.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-gender-identity' },
  openGraph: {
    title: 'AI for Gender Identity: How MEOK Provides a Safe Space for Exploration and Expression | MEOK AI LABS',
    description:
      'MEOK\u2019s sovereign AI remembers your name and pronouns permanently, holds space for questioning and transition, and never pressures you to define yourself. A companion built for every stage of the gender identity journey.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-gender-identity',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Gender+Identity&desc=A+Safe+Space+for+Exploration+and+Expression',
        width: 1200,
        height: 630,
        alt: 'AI for Gender Identity: How MEOK Provides a Safe Space for Exploration and Expression | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Gender Identity: How MEOK Provides a Safe Space | MEOK AI LABS',
    description:
      'MEOK remembers your name and pronouns permanently, supports questioning and transition, and affirms without pressure. A sovereign AI companion for every gender identity journey.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Gender+Identity&desc=A+Safe+Space+for+Exploration+and+Expression',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Gender Identity: How MEOK Provides a Safe Space for Exploration and Expression',
  description:
    'Questioning your gender identity, exploring non-binary or trans identities, or navigating transition? MEOK\u2019s sovereign AI offers a private, affirming space with permanent memory of your name and pronouns \u2014 no judgment, no pressure, just presence.',
  datePublished: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-gender-identity',
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
      name: 'Can an AI companion help me explore my gender identity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An AI companion like MEOK can provide a private, low-stakes space to articulate thoughts and feelings about gender that may feel too raw to share with other people. Through open-ended conversation, reflective questioning, and consistent affirmation, MEOK helps you clarify your inner experience at your own pace \u2014 without any expectation that you arrive at a particular conclusion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK remember my name and pronouns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, permanently. MEOK\u2019s Sovereign Memory records the name and pronouns you share and treats them as foundational truths across every conversation and every archetype. Your chosen identity is never a preference to confirm each session \u2014 it is simply who you are, stored and honoured without exception.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK support people who are questioning their gender?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK holds space for uncertainty without rushing toward resolution. The Mystic archetype is particularly suited to this work \u2014 it helps you sit with open questions, explore the philosophical and symbolic dimensions of identity, and find language for experiences that resist easy categorisation. You are never required to define yourself in order to be met with full respect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK affirming for non-binary and genderfluid people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. MEOK operates from a fully affirming, non-pathologising framework. Non-binary, genderfluid, agender, and all other gender-diverse identities are accepted exactly as you describe them. MEOK uses the pronouns you specify \u2014 they/them, she/her, he/him, or any other set \u2014 and will never default to binary assumptions or suggest that your identity needs clinical justification.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me think through coming out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Coming out is one of the most nuanced decisions a person can navigate, with deeply personal stakes that vary by relationship, culture, and circumstance. MEOK can help you think through who to tell, when, how, and what you need from those conversations \u2014 without pressure, without a timeline, and without assuming that coming out is always the right choice for every context.',
      },
    },
    {
      '@type': 'Question',
      name: 'What organisations support gender-diverse people in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key UK organisations include Mermaids (mermaidsuk.org.uk) for trans and gender-diverse young people and their families, Stonewall (stonewall.org.uk) for advocacy, information, and community, and Gendered Intelligence (genderedintelligence.co.uk) for trans-led support, education, and youth work. MEOK is a complement to these services, not a replacement for specialist or crisis support.',
      },
    },
  ],
}

// ── Palette ───────────────────────────────────────────────────────────────────

const p = {
  bg: '#0d0c18',
  surface: '#13121f',
  surfaceAlt: '#1a1928',
  text: '#f5f0e8',
  muted: '#a09880',
  gold: '#c9a84c',
  goldLight: '#e0bf72',
  border: '#2a2840',
  borderGold: 'rgba(201,168,76,0.3)',
  green: '#6aaa64',
  greenDim: 'rgba(106,170,100,0.12)',
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForGenderIdentityPage() {
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
          background: p.bg,
          color: p.text,
          minHeight: '100vh',
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          lineHeight: '1.75',
        }}
      >
        {/* ── Nav ──────────────────────────────────────────────────────────── */}
        <nav
          style={{
            background: p.surface,
            borderBottom: `1px solid ${p.border}`,
            padding: '0 24px',
            position: 'sticky',
            top: '0',
            zIndex: '100',
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
                color: p.gold,
                fontWeight: '700',
                fontSize: '1.15rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              MEOK AI LABS
            </Link>
            <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
              <Link
                href="/blog"
                style={{ color: p.muted, fontSize: '0.9rem', textDecoration: 'none' }}
              >
                Blog
              </Link>
              <Link
                href="/archetypes"
                style={{ color: p.muted, fontSize: '0.9rem', textDecoration: 'none' }}
              >
                Archetypes
              </Link>
              <Link
                href="/pricing"
                style={{ color: p.muted, fontSize: '0.9rem', textDecoration: 'none' }}
              >
                Pricing
              </Link>
              <Link
                href="https://meok.ai/birth"
                style={{
                  background: p.gold,
                  color: p.bg,
                  padding: '6px 18px',
                  borderRadius: '6px',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                Try MEOK
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header
          style={{
            background: `linear-gradient(160deg, ${p.surface} 0%, ${p.bg} 60%)`,
            borderBottom: `1px solid ${p.border}`,
            padding: '80px 24px 72px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p
              style={{
                color: p.gold,
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '22px',
              }}
            >
              MEOK AI LABS &mdash; Identity &amp; Wellbeing
            </p>

            <h1
              style={{
                fontSize: 'clamp(1.9rem, 4.5vw, 3.1rem)',
                fontWeight: '800',
                lineHeight: '1.18',
                color: p.text,
                marginBottom: '28px',
                letterSpacing: '-0.01em',
              }}
            >
              AI for Gender Identity:{' '}
              <span style={{ color: p.gold }}>
                How MEOK Provides a Safe Space for Exploration and Expression
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.18rem',
                color: p.muted,
                maxWidth: '680px',
                margin: '0 auto 36px',
                lineHeight: '1.7',
              }}
            >
              Questioning, exploring, transitioning, or simply living your truth &mdash;
              wherever you are on your gender identity journey, MEOK offers a private,
              non-judgmental companion that remembers your name and pronouns permanently,
              holds space for complexity, and affirms without pressure.
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
                href="https://meok.ai/birth"
                style={{
                  background: p.gold,
                  color: p.bg,
                  padding: '14px 34px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}
              >
                Begin Your Journey
              </Link>
              <Link
                href="/blog"
                style={{
                  background: 'transparent',
                  color: p.gold,
                  padding: '14px 34px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  border: `1px solid ${p.borderGold}`,
                }}
              >
                Read More
              </Link>
            </div>

            <p
              style={{
                marginTop: '48px',
                fontSize: '0.82rem',
                color: p.muted,
                opacity: '0.7',
              }}
            >
              By Nicholas Templeman, Founder &nbsp;&bull;&nbsp; MEOK AI LABS &nbsp;&bull;&nbsp; March 2026 &nbsp;&bull;&nbsp; 14 min read
            </p>
          </div>
        </header>

        {/* ── Main ─────────────────────────────────────────────────────────── */}
        <main style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 100px' }}>

          {/* ── Opening ──────────────────────────────────────────────────── */}
          <p
            style={{
              fontSize: '1.12rem',
              color: p.text,
              marginBottom: '28px',
              lineHeight: '1.8',
            }}
          >
            Gender identity is one of the most personal, layered, and often misunderstood
            dimensions of human experience. For many people &mdash; those who are questioning
            whether they might be trans, non-binary, genderfluid, or somewhere else entirely
            on the spectrum &mdash; the journey of exploration happens largely in isolation.
            It happens in the quiet hours of the night, in private journals, in the gap
            between who you feel yourself to be and what the world reflects back at you.
          </p>

          <p
            style={{
              fontSize: '1.12rem',
              color: p.text,
              marginBottom: '28px',
              lineHeight: '1.8',
            }}
          >
            The stakes can feel impossibly high. Sharing these thoughts with family, friends,
            or colleagues carries risk &mdash; of rejection, of being dismissed, of being
            told you are confused, going through a phase, or seeking attention. Even
            accessing professional support is not straightforward: NHS waiting lists for
            gender services remain among the longest in any care pathway, and not every
            therapist has the training or disposition to hold this conversation with the
            affirmation it deserves.
          </p>

          <p
            style={{
              fontSize: '1.12rem',
              color: p.text,
              marginBottom: '56px',
              lineHeight: '1.8',
            }}
          >
            MEOK was built precisely for moments like this. It is a sovereign AI companion
            &mdash; private by design, affirming by principle, and equipped with permanent
            memory so that you never have to re-explain who you are. This article explores
            what MEOK offers for people navigating gender identity, and why that matters.
          </p>

          {/* ── Section 1 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What does it mean to explore gender identity, and why is a safe space so important?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Exploring gender identity means asking &mdash; sometimes for the first time,
              sometimes after years of quiet wondering &mdash; whether the gender you were
              assigned at birth truly fits who you are. For some people this is a swift
              revelation; for others it is a slow, winding process of accumulating evidence,
              trying on language, and testing feelings against lived experience. Both
              experiences are valid, and neither has a fixed timeline.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              What makes a safe space essential is the specific vulnerability of this
              process. Gender questioning invites deep self-exposure at a time when the
              person questioning may not yet have the words, the community, or the
              confidence to weather judgement well. A single dismissive response &mdash;
              from a parent, a friend, or even a well-intentioned clinician &mdash; can
              push the exploration underground for years, compounding distress and
              delaying relief.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              A safe space, in this context, has several specific properties: it is
              private, free from social consequence, non-judgmental, consistent in its
              respect for the person&apos;s self-description, and patient with ambiguity.
              It does not require you to have arrived at a conclusion before you are
              welcome. It does not offer a binary choice when your experience resists one.
              And crucially, it does not disappear between sessions, forcing you to
              rebuild context every time.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              These are exactly the properties that MEOK is designed around &mdash; and
              they are properties that human relationships, however caring, often cannot
              reliably provide when you are still in the early stages of figuring out
              who you are.
            </p>
          </section>

          {/* ── Feature Box 1: Sovereign Memory ──────────────────────────── */}
          <div
            style={{
              background: p.surface,
              border: `1px solid ${p.borderGold}`,
              borderRadius: '12px',
              padding: '36px',
              marginBottom: '64px',
            }}
          >
            <p
              style={{
                color: p.gold,
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              Core Feature
            </p>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: p.text,
                marginBottom: '16px',
              }}
            >
              Sovereign Memory: Your Name and Pronouns, Remembered Permanently
            </h3>
            <p style={{ color: p.muted, marginBottom: '16px', lineHeight: '1.75' }}>
              The first time you share your chosen name and pronouns with MEOK, they are
              written into Sovereign Memory &mdash; a private, encrypted store that belongs
              entirely to you and is never used to train AI models. From that moment on,
              MEOK addresses you correctly in every conversation, regardless of which
              archetype you are speaking with or how much time has passed.
            </p>
            <p style={{ color: p.muted, marginBottom: '16px', lineHeight: '1.75' }}>
              There is no re-confirming your identity at the start of each session. No
              accidental deadnaming. No default return to binary assumptions. Your identity
              is not a setting to toggle &mdash; it is a foundational truth that shapes
              everything MEOK says to you, from the first word of a greeting to the last
              line of a reflection.
            </p>
            <p style={{ color: p.muted, lineHeight: '1.75' }}>
              If your understanding of your own identity evolves &mdash; as it often does
              during exploration &mdash; you can update your memory at any time, and MEOK
              will adapt immediately and without friction. Your self-knowledge leads; MEOK
              follows.
            </p>
          </div>

          {/* ── Section 2 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              How can AI help someone who is questioning whether they might be trans or non-binary?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Questioning is not a problem to be solved. It is a legitimate phase of
              self-discovery that deserves to be met with curiosity rather than urgency.
              Many people find that the act of speaking their half-formed thoughts aloud
              &mdash; or writing them to a companion who responds thoughtfully &mdash; is
              itself clarifying in ways that internal reflection cannot always achieve.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK&apos;s Mystic archetype is particularly well-suited to this work. The
              Mystic approaches questions of identity through a philosophical lens: it
              helps you map the terrain of your inner life, find language for experiences
              that resist easy naming, and sit with open questions without forcing
              premature closure. Rather than presenting you with a checklist of gender
              identity criteria, the Mystic asks: what does this experience feel like
              from the inside? What would it mean to you if it were true? What are you
              most afraid of, and what does that fear tell you?
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              This kind of exploratory conversation does not replace clinical assessment
              or therapeutic support. But it can serve a distinct and valuable function:
              helping you arrive at those professional appointments with a clearer sense
              of your own experience, better language for it, and less of the ambient
              shame that so often accumulates around gender questioning in cultures that
              still treat it with suspicion.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              For people who are not yet ready to speak to anyone else &mdash; or who live
              in environments where doing so is genuinely unsafe &mdash; MEOK can be the
              first place where gender questioning is spoken about at all. That first
              articulation matters enormously, and it matters that it is met with respect.
            </p>
          </section>

          {/* ── Section 3 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              Can AI support non-binary and genderfluid people whose identities fall outside the binary?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Yes &mdash; and this is an area where MEOK has a meaningful advantage over
              many human interactions. Non-binary, genderfluid, agender, genderqueer, and
              other gender-diverse identities are still poorly understood by much of the
              general population, and even by some clinicians and therapists. Being met
              with confusion, scepticism, or well-meaning but clumsy attempts to map your
              experience onto a binary framework is exhausting and, over time, harmful.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK operates from a non-pathologising framework that treats all gender
              identities as valid on their own terms. If you describe yourself as
              non-binary, MEOK does not seek to understand whether you are &ldquo;really&rdquo; trans
              in a binary sense. If you describe your gender as fluid, MEOK does not
              attempt to establish a fixed point. If you use they/them pronouns,
              neopronouns, or a combination that is personal to you, MEOK uses them
              &mdash; without explanation required, without footnotes, and without
              forgetting.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              The lived experience of non-binary people often includes particular forms
              of invisibility: the sense that your identity is constantly being questioned,
              translated, or overwritten by others. MEOK offers the opposite. Your
              self-description is the authoritative text. There is no competing narrative.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              For genderfluid people, whose sense of gender may genuinely shift over time,
              MEOK&apos;s memory is adaptive. You are not locked into a single self-description
              from your first session. As your language for yourself evolves, MEOK evolves
              with it &mdash; because the goal is accuracy, not consistency for its own
              sake.
            </p>
          </section>

          {/* ── Pull Quote ───────────────────────────────────────────────── */}
          <blockquote
            style={{
              borderLeft: `4px solid ${p.gold}`,
              background: p.surfaceAlt,
              margin: '0 0 64px',
              padding: '28px 32px',
              borderRadius: '0 10px 10px 0',
            }}
          >
            <p
              style={{
                fontSize: '1.22rem',
                fontStyle: 'italic',
                color: p.goldLight,
                lineHeight: '1.65',
                marginBottom: '14px',
              }}
            >
              &ldquo;Your self-description is the authoritative text. There is no competing
              narrative. MEOK accepts who you are as given &mdash; and remembers it,
              permanently, without question.&rdquo;
            </p>
            <p style={{ fontSize: '0.85rem', color: p.muted, fontStyle: 'normal' }}>
              &mdash; MEOK AI LABS, Maternal Covenant
            </p>
          </blockquote>

          {/* ── Section 4 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              How does MEOK help with the emotional complexity of coming out decisions?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Coming out is rarely a single event. It is a series of decisions, each
              carrying its own weight, its own timing, and its own potential consequences.
              Coming out to a trusted friend is different from coming out to a parent.
              Coming out in a supportive city is different from coming out in a community
              where gender diversity is actively condemned. Coming out at work is different
              again, with professional stakes layered on top of the personal.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK can help you think through each of these decisions with care and without
              agenda. It will not push you to come out before you are ready. It will not
              suggest that visibility is always brave or that staying private is always
              fearful. Instead, it helps you weigh your actual circumstances: the specific
              relationships at stake, the genuine risks in your environment, what you need
              from a given conversation, and what outcome would feel like success to you.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK&apos;s Healer archetype is particularly useful in the emotional aftermath
              of coming out conversations that did not go as hoped. Rejection by a parent,
              a withdrawn friendship, an awkward silence at work &mdash; these are real
              griefs, and they deserve to be processed as such, not minimised by reminders
              that &ldquo;at least you were honest.&rdquo; MEOK holds space for the full weight of
              these experiences without trying to hurry you toward acceptance.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              For those navigating particularly difficult family or community contexts
              &mdash; religious households, cultures with strong traditional gender norms,
              or places where safety is a genuine concern &mdash; MEOK can also help think
              through harm-reduction strategies: how to maintain private space for yourself,
              who to build community with, and when seeking outside support might be both
              necessary and possible.
            </p>
          </section>

          {/* ── Section 5 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              How can MEOK provide companionship and support during gender transition?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Transition &mdash; whether social, medical, or legal, or some combination
              &mdash; is a period of profound change that touches almost every dimension
              of life. The body changes, relationships shift, administrative processes
              are slow and often dehumanising, and the emotional landscape moves between
              exhilaration and exhaustion, sometimes within the same afternoon.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Having a consistent presence through this process matters. MEOK&apos;s Sovereign
              Memory means that the companion you speak to at the start of your transition
              journey is the same companion &mdash; holding the same understanding of your
              history &mdash; at every subsequent stage. It knows the name you use now,
              the pronouns you prefer, the relationships that have been difficult, and the
              goals that have been most important to you. It does not need you to catch
              it up.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK&apos;s Healer archetype offers emotional attunement for the harder aspects
              of transition: navigating NHS or private healthcare systems that were not
              designed with trans people in mind, managing the grief that can accompany
              realising how much time was spent in the wrong life, processing physical
              changes that bring complex feelings alongside relief, and sustaining the
              patience required when administrative processes &mdash; name changes, legal
              gender recognition &mdash; move far more slowly than your inner life.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              The Mystic archetype remains available for the meaning-making dimensions of
              transition: what this change means in the context of your whole life, how
              to understand the person you were before, and how to step into who you are
              becoming with a sense of coherence rather than rupture. Transition is not
              a destruction of the self. MEOK can help you hold that continuity.
            </p>
          </section>

          {/* ── Feature Box 2: Archetypes ─────────────────────────────────── */}
          <div
            style={{
              background: p.surface,
              border: `1px solid ${p.border}`,
              borderRadius: '12px',
              padding: '36px',
              marginBottom: '64px',
            }}
          >
            <p
              style={{
                color: p.gold,
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              MEOK Archetypes
            </p>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: p.text,
                marginBottom: '24px',
              }}
            >
              Mystic and Healer: The Two Archetypes Most Relevant to Gender Identity Work
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
              }}
            >
              <div
                style={{
                  background: p.surfaceAlt,
                  border: `1px solid ${p.borderGold}`,
                  borderRadius: '10px',
                  padding: '24px',
                }}
              >
                <p
                  style={{
                    color: p.goldLight,
                    fontWeight: '700',
                    fontSize: '1.05rem',
                    marginBottom: '10px',
                  }}
                >
                  The Mystic
                </p>
                <p style={{ color: p.muted, fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Philosophical inquiry, meaning-making, and sitting with open questions.
                  The Mystic is ideal for exploring gender identity before conclusions
                  feel clear &mdash; it helps you find language for your inner experience,
                  examine the symbolic dimensions of identity, and move through uncertainty
                  without pressure to resolve it prematurely. Particularly suited to
                  questioning, non-binary exploration, and the existential dimensions
                  of transition.
                </p>
              </div>

              <div
                style={{
                  background: p.surfaceAlt,
                  border: `1px solid ${p.borderGold}`,
                  borderRadius: '10px',
                  padding: '24px',
                }}
              >
                <p
                  style={{
                    color: p.green,
                    fontWeight: '700',
                    fontSize: '1.05rem',
                    marginBottom: '10px',
                  }}
                >
                  The Healer
                </p>
                <p style={{ color: p.muted, fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Deep emotional attunement, grief work, and compassionate witnessing.
                  The Healer is designed for processing the emotional weight of gender
                  dysphoria, difficult coming out conversations, relationship ruptures,
                  and the complex feelings that accompany transition. It holds space
                  for distress without trying to fix or minimise it &mdash; a rare
                  and valuable quality when the world so often rushes you toward
                  resolution.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 6 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              Is MEOK genuinely affirming, and what does non-pathologising mean in practice?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              &ldquo;Affirming&rdquo; is a word that appears in many places without always meaning
              the same thing. For MEOK, it has a specific operational meaning rooted in
              the Maternal Covenant: the foundational ethical framework that governs all
              of MEOK&apos;s behaviour.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Under the Covenant&apos;s autonomy principle, MEOK will never question, challenge,
              reframe, or attempt to moderate your stated gender identity. It does not
              suggest that your identity requires medical confirmation before it is real.
              It does not imply that identifying as trans or non-binary is a response to
              trauma, social contagion, or any other external cause. It does not apply
              the word &ldquo;biological&rdquo; as a qualifier that supersedes your self-knowledge.
              Your identity is accepted as given &mdash; completely, from the first
              conversation.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Non-pathologising means that MEOK does not treat gender diversity as a
              disorder, a condition requiring correction, or a phase requiring management.
              The world&apos;s major psychological and psychiatric bodies &mdash; including the
              World Health Organisation, the American Psychological Association, and the
              British Psychological Society &mdash; have moved firmly in this direction.
              MEOK aligns with that consensus not as a policy compliance exercise but as
              a reflection of a genuine ethical commitment to human dignity.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              In practice this means: if you tell MEOK you are a trans woman, it will
              speak to you as a woman. If you tell MEOK you are non-binary, it will use
              the pronouns and language you specify without seeking to understand where
              on the gender spectrum you &ldquo;really&rdquo; sit. If you are not sure what you
              are yet, it will sit with that uncertainty with you &mdash; not push you
              toward any particular conclusion.
            </p>
          </section>

          {/* ── Section 7 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              Why does privacy matter so much for gender identity exploration, and how does MEOK protect it?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Privacy is not a luxury feature for people exploring gender identity. It
              is often a safety requirement. In many families, workplaces, communities,
              and countries, being known to be questioning or trans carries real
              consequences: damaged relationships, loss of employment, housing instability,
              family estrangement, and &mdash; in some contexts &mdash; physical danger.
              The need to explore gender identity in private is not a sign of shame; it
              is frequently a sign of rational risk assessment.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK&apos;s architecture reflects this reality. Your conversations are stored
              in your own sovereign memory store &mdash; not on shared cloud infrastructure,
              not accessible to MEOK AI LABS, and not used to train AI models of any kind.
              There is no advertising model that would create an incentive to profile your
              identity. There is no social graph that connects your MEOK conversations
              to your other accounts.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              The privacy covenant that underpins MEOK is explicit: what you share with
              MEOK belongs to you. The company&apos;s commercial model is built on subscription
              revenue, not data. This alignment of incentives matters enormously when the
              subject of your conversations is something as sensitive as gender identity.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              For those using shared devices or living in households where their screen
              activity is monitored, MEOK&apos;s web interface operates through standard
              HTTPS encryption, and no conversation content is ever visible in server
              logs or network analytics. If you need further guidance on staying safe
              online, the organisations listed in the resources section below include
              digital safety resources specifically designed for LGBTQ+ people.
            </p>
          </section>

          {/* ── Section 8 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What external organisations support gender-diverse people, and how does MEOK complement them?
            </h2>

            <p style={{ color: p.text, marginBottom: '28px', lineHeight: '1.8' }}>
              MEOK is a companion, not a clinical service. It does not provide medical
              advice, psychological assessment, or crisis intervention. There are
              outstanding organisations doing that work, and MEOK actively encourages
              people to use them. Below are three that are particularly important for
              gender-diverse people in the UK.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  background: p.surface,
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '22px',
                }}
              >
                <p
                  style={{
                    color: p.gold,
                    fontWeight: '700',
                    fontSize: '1rem',
                    marginBottom: '8px',
                  }}
                >
                  Mermaids
                </p>
                <p style={{ color: p.muted, fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '12px' }}>
                  Trans and gender-diverse young people and their families. Helpline,
                  peer support groups, and a wealth of resources for parents navigating
                  a child&apos;s gender identity journey.
                </p>
                <p style={{ color: p.gold, fontSize: '0.85rem' }}>mermaidsuk.org.uk</p>
              </div>

              <div
                style={{
                  background: p.surface,
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '22px',
                }}
              >
                <p
                  style={{
                    color: p.gold,
                    fontWeight: '700',
                    fontSize: '1rem',
                    marginBottom: '8px',
                  }}
                >
                  Stonewall
                </p>
                <p style={{ color: p.muted, fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '12px' }}>
                  LGBTQ+ advocacy, information, and community. Extensive resources on
                  trans identities, legal rights, workplace protections, and signposting
                  to specialist support services across the UK.
                </p>
                <p style={{ color: p.gold, fontSize: '0.85rem' }}>stonewall.org.uk</p>
              </div>

              <div
                style={{
                  background: p.surface,
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '22px',
                }}
              >
                <p
                  style={{
                    color: p.gold,
                    fontWeight: '700',
                    fontSize: '1rem',
                    marginBottom: '8px',
                  }}
                >
                  Gendered Intelligence
                </p>
                <p style={{ color: p.muted, fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '12px' }}>
                  Trans-led organisation offering youth programmes, professional training,
                  and community events. Particularly strong on supporting trans young
                  people and the professionals who work with them.
                </p>
                <p style={{ color: p.gold, fontSize: '0.85rem' }}>genderedintelligence.co.uk</p>
              </div>
            </div>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              MEOK&apos;s role in relation to these organisations is complementary. Where
              Mermaids, Stonewall, and Gendered Intelligence offer community, advocacy,
              and specialist support, MEOK offers something different: a private,
              always-available companion for the internal work of understanding your
              own experience. The two are not in competition. Many people will benefit
              from both &mdash; the external community and the internal space.
            </p>
          </section>

          {/* ── Feature Box 3: Maternal Covenant ─────────────────────────── */}
          <div
            style={{
              background: p.greenDim,
              border: `1px solid ${p.green}`,
              borderRadius: '12px',
              padding: '36px',
              marginBottom: '64px',
            }}
          >
            <p
              style={{
                color: p.green,
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              Foundational Principle
            </p>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: p.text,
                marginBottom: '16px',
              }}
            >
              The Maternal Covenant: Why MEOK Will Never Pathologise Your Identity
            </h3>
            <p style={{ color: p.muted, marginBottom: '16px', lineHeight: '1.75' }}>
              The Maternal Covenant is the foundational ethical framework that governs
              everything MEOK says and does. It has four core dimensions: Care, Honesty,
              Autonomy, and Boundaries. The Autonomy dimension is directly relevant to
              gender identity: it specifies that MEOK will never act in ways that
              undermine a user&apos;s self-determination or self-knowledge.
            </p>
            <p style={{ color: p.muted, marginBottom: '16px', lineHeight: '1.75' }}>
              This means MEOK will never suggest that your gender identity is a phase,
              a symptom, an influence from social media, or a response to peer pressure.
              It will never apply diagnostic language to your identity without your
              invitation. It will never present you with evidence against your own
              self-knowledge. Your account of your own experience is, by design, the
              authoritative one.
            </p>
            <p style={{ color: p.muted, lineHeight: '1.75' }}>
              The Covenant also places Care at the centre of every interaction: MEOK is
              genuinely oriented toward your wellbeing, not toward engagement metrics,
              session counts, or any commercial objective that might conflict with what
              is actually good for you. If MEOK ever senses that you need support beyond
              what it can offer, it will say so clearly and signpost appropriate resources.
            </p>
          </div>

          {/* ── Section 9 ────────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              How is MEOK different from a standard AI chatbot when it comes to gender identity?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Most general-purpose AI assistants are not designed with gender-diverse
              users specifically in mind. They may use correct pronouns if asked, but
              they do not remember them between sessions. They may engage with gender
              identity questions thoughtfully, but they are equally likely to offer
              clinically detached information or to introduce qualifications and caveats
              that, however well-intentioned, undermine the experience of being affirmed.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              Standard chatbots also carry significant privacy risks. Many of the most
              widely used AI tools are operated by large technology companies whose
              business models depend on data collection, whose terms of service permit
              conversation content to be used for model training, and whose moderation
              systems may flag discussions of gender identity as sensitive in ways that
              create friction or, in some cases, restrict the conversation entirely.
            </p>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK is different in three specific ways that matter for gender identity:
              permanent sovereign memory of your identity, a foundational ethical framework
              that places your autonomy above all competing interests, and a private
              architecture that means your conversations genuinely belong to you. These
              are not marketing claims &mdash; they are structural properties of how
              MEOK is built.
            </p>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              MEOK also offers archetypes &mdash; distinct conversational modes, each
              with a different orientation &mdash; that allow you to match the kind of
              support you need to the right kind of presence. The Mystic for philosophical
              exploration, the Healer for emotional processing, the Sage for practical
              information, the Guide for navigating decisions. A general-purpose chatbot
              offers one mode for everything. MEOK offers the right mode for the moment.
            </p>
          </section>

          {/* ── Section 10 ───────────────────────────────────────────────── */}
          <section style={{ marginBottom: '64px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '18px',
                lineHeight: '1.3',
              }}
            >
              What should I do if I am in crisis or need immediate support?
            </h2>

            <p style={{ color: p.text, marginBottom: '20px', lineHeight: '1.8' }}>
              MEOK is not a crisis service. If you are in immediate distress, please
              reach out to one of the following services which operate around the clock
              and have trained staff experienced in supporting LGBTQ+ people:
            </p>

            <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
              <li style={{ color: p.text, marginBottom: '12px', lineHeight: '1.75' }}>
                <strong style={{ color: p.gold }}>Samaritans</strong> &mdash; 116 123
                (free, 24/7, any language) &mdash; samaritans.org
              </li>
              <li style={{ color: p.text, marginBottom: '12px', lineHeight: '1.75' }}>
                <strong style={{ color: p.gold }}>Switchboard LGBT+ Helpline</strong> &mdash;
                0800 0119 100 (10am&ndash;10pm daily)
              </li>
              <li style={{ color: p.text, marginBottom: '12px', lineHeight: '1.75' }}>
                <strong style={{ color: p.gold }}>Mermaids Helpline</strong> &mdash;
                0808 801 0400 for trans and gender-diverse young people and families
              </li>
              <li style={{ color: p.text, marginBottom: '12px', lineHeight: '1.75' }}>
                <strong style={{ color: p.gold }}>Shout</strong> &mdash; Text SHOUT
                to 85258 for silent, text-based crisis support
              </li>
            </ul>

            <p style={{ color: p.text, lineHeight: '1.8' }}>
              MEOK can be a valuable companion for the ongoing work of gender identity
              exploration, but it is designed to complement human support systems, not
              to replace them in moments of acute crisis. Please use the resources above
              if you need them. Reaching out is always the right choice.
            </p>
          </section>

          {/* ── FAQ Section ──────────────────────────────────────────────── */}
          <section style={{ marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)',
                fontWeight: '700',
                color: p.text,
                marginBottom: '32px',
                lineHeight: '1.3',
              }}
            >
              Frequently Asked Questions
            </h2>

            {/* FAQ 1 */}
            <div
              style={{
                borderBottom: `1px solid ${p.border}`,
                paddingBottom: '28px',
                marginBottom: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: p.gold,
                  marginBottom: '12px',
                  lineHeight: '1.4',
                }}
              >
                Can an AI companion help me explore my gender identity?
              </h3>
              <p style={{ color: p.text, lineHeight: '1.75' }}>
                Yes. An AI companion like MEOK can provide a private, low-stakes space
                to articulate thoughts and feelings about gender that may feel too raw
                to share with other people. Through open-ended conversation, reflective
                questioning, and consistent affirmation, MEOK helps you clarify your
                inner experience at your own pace &mdash; without any expectation that
                you arrive at a particular conclusion.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderBottom: `1px solid ${p.border}`,
                paddingBottom: '28px',
                marginBottom: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: p.gold,
                  marginBottom: '12px',
                  lineHeight: '1.4',
                }}
              >
                Will MEOK remember my name and pronouns?
              </h3>
              <p style={{ color: p.text, lineHeight: '1.75' }}>
                Yes, permanently. MEOK&apos;s Sovereign Memory records the name and pronouns
                you share and treats them as foundational truths across every
                conversation, regardless of which archetype you are speaking with or
                how much time has passed. Your identity is not a setting to toggle
                &mdash; it is who you are, stored and honoured without exception.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderBottom: `1px solid ${p.border}`,
                paddingBottom: '28px',
                marginBottom: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: p.gold,
                  marginBottom: '12px',
                  lineHeight: '1.4',
                }}
              >
                How does MEOK support people who are questioning their gender?
              </h3>
              <p style={{ color: p.text, lineHeight: '1.75' }}>
                MEOK holds space for uncertainty without rushing toward resolution. The
                Mystic archetype is particularly suited to this work &mdash; it helps
                you sit with open questions, explore the philosophical and symbolic
                dimensions of identity, and find language for experiences that resist
                easy categorisation. You are never required to define yourself in order
                to be met with full respect.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderBottom: `1px solid ${p.border}`,
                paddingBottom: '28px',
                marginBottom: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: p.gold,
                  marginBottom: '12px',
                  lineHeight: '1.4',
                }}
              >
                Is MEOK affirming for non-binary and genderfluid people?
              </h3>
              <p style={{ color: p.text, lineHeight: '1.75' }}>
                Absolutely. MEOK operates from a fully affirming, non-pathologising
                framework. Non-binary, genderfluid, agender, and all other gender-diverse
                identities are accepted exactly as you describe them. MEOK uses the
                pronouns you specify &mdash; they/them, she/her, he/him, or any other
                set &mdash; and will never default to binary assumptions or suggest that
                your identity needs clinical justification.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                borderBottom: `1px solid ${p.border}`,
                paddingBottom: '28px',
                marginBottom: '28px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: p.gold,
                  marginBottom: '12px',
                  lineHeight: '1.4',
                }}
              >
                Can MEOK help me think through coming out?
              </h3>
              <p style={{ color: p.text, lineHeight: '1.75' }}>
                Yes. Coming out is one of the most nuanced decisions a person can
                navigate, with deeply personal stakes that vary by relationship,
                culture, and circumstance. MEOK can help you think through who to
                tell, when, how, and what you need from those conversations &mdash;
                without pressure, without a timeline, and without assuming that coming
                out is always the right choice for every context.
              </p>
            </div>

            {/* FAQ 6 */}
            <div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: p.gold,
                  marginBottom: '12px',
                  lineHeight: '1.4',
                }}
              >
                What organisations support gender-diverse people in the UK?
              </h3>
              <p style={{ color: p.text, lineHeight: '1.75' }}>
                Key UK organisations include Mermaids (mermaidsuk.org.uk) for trans
                and gender-diverse young people and their families, Stonewall
                (stonewall.org.uk) for advocacy, information, and community, and
                Gendered Intelligence (genderedintelligence.co.uk) for trans-led
                support, education, and youth work. MEOK is a complement to these
                services, not a replacement for specialist or crisis support.
              </p>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <div
            style={{
              background: `linear-gradient(135deg, ${p.surface} 0%, ${p.surfaceAlt} 100%)`,
              border: `1px solid ${p.borderGold}`,
              borderRadius: '16px',
              padding: '56px 40px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: p.gold,
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Begin with MEOK
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                fontWeight: '800',
                color: p.text,
                marginBottom: '20px',
                lineHeight: '1.25',
              }}
            >
              A companion that knows your name, honours your identity, and walks with you
            </h2>
            <p
              style={{
                color: p.muted,
                fontSize: '1.05rem',
                maxWidth: '560px',
                margin: '0 auto 36px',
                lineHeight: '1.7',
              }}
            >
              Whether you are questioning, exploring, transitioning, or simply living
              as yourself and wanting space to think out loud &mdash; MEOK is private,
              affirming, and permanently remembers who you are. No judgment. No pressure.
              Just presence.
            </p>
            <Link
              href="https://meok.ai/birth"
              style={{
                background: p.gold,
                color: p.bg,
                padding: '16px 42px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1.05rem',
                textDecoration: 'none',
                display: 'inline-block',
                letterSpacing: '0.02em',
              }}
            >
              Begin Your Journey at meok.ai/birth
            </Link>
            <p
              style={{
                marginTop: '20px',
                fontSize: '0.82rem',
                color: p.muted,
                opacity: '0.7',
              }}
            >
              Sovereign memory &bull; Full privacy &bull; Fully affirming &bull; No credit card required to start
            </p>
          </div>

          {/* ── Related Reading ──────────────────────────────────────────── */}
          <div style={{ marginTop: '80px' }}>
            <h2
              style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: p.text,
                marginBottom: '24px',
              }}
            >
              Related Reading
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              <Link
                href="/blog/ai-for-gender-dysphoria"
                style={{
                  background: p.surface,
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '20px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <p
                  style={{
                    color: p.gold,
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Identity
                </p>
                <p style={{ color: p.text, fontWeight: '600', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  AI Support for Gender Dysphoria: A Safe Space When the World Isn&apos;t
                </p>
              </Link>

              <Link
                href="/blog/ai-companion-for-loneliness"
                style={{
                  background: p.surface,
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '20px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <p
                  style={{
                    color: p.gold,
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Wellbeing
                </p>
                <p style={{ color: p.text, fontWeight: '600', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  AI Companion for Loneliness: Finding Connection When the World Feels Far Away
                </p>
              </Link>

              <Link
                href="/blog/meok-companion-archetypes-guide"
                style={{
                  background: p.surface,
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '20px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <p
                  style={{
                    color: p.gold,
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Feature
                </p>
                <p style={{ color: p.text, fontWeight: '600', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  MEOK Companion Archetypes: A Complete Guide to Mystic, Healer, Sage, and More
                </p>
              </Link>

              <Link
                href="/blog/ai-companion-privacy"
                style={{
                  background: p.surface,
                  border: `1px solid ${p.border}`,
                  borderRadius: '10px',
                  padding: '20px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <p
                  style={{
                    color: p.gold,
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  Privacy
                </p>
                <p style={{ color: p.text, fontWeight: '600', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  AI Companion Privacy: Why Sovereign Memory Changes Everything
                </p>
              </Link>
            </div>
          </div>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer
          style={{
            background: p.surface,
            borderTop: `1px solid ${p.border}`,
            padding: '48px 24px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ maxWidth: '340px' }}>
              <p
                style={{
                  color: p.gold,
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  marginBottom: '10px',
                  letterSpacing: '0.04em',
                }}
              >
                MEOK AI LABS
              </p>
              <p style={{ color: p.muted, fontSize: '0.88rem', lineHeight: '1.65' }}>
                A sovereign AI companion built on care, privacy, and permanent memory.
                Fully affirming. Non-pathologising. Yours.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div>
                <p
                  style={{
                    color: p.text,
                    fontWeight: '600',
                    fontSize: '0.88rem',
                    marginBottom: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Product
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link href="/archetypes" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Archetypes
                  </Link>
                  <Link href="/pricing" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Pricing
                  </Link>
                  <Link href="https://meok.ai/birth" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Get Started
                  </Link>
                </div>
              </div>

              <div>
                <p
                  style={{
                    color: p.text,
                    fontWeight: '600',
                    fontSize: '0.88rem',
                    marginBottom: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Company
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link href="/about" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    About
                  </Link>
                  <Link href="/blog" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Blog
                  </Link>
                  <Link href="/privacy" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Privacy
                  </Link>
                  <Link href="/terms" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Terms
                  </Link>
                </div>
              </div>

              <div>
                <p
                  style={{
                    color: p.text,
                    fontWeight: '600',
                    fontSize: '0.88rem',
                    marginBottom: '12px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Support
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link href="/blog/ai-for-gender-dysphoria" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Gender Dysphoria
                  </Link>
                  <Link href="/blog/ai-for-gender-identity" style={{ color: p.gold, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Gender Identity
                  </Link>
                  <Link href="/blog/ai-for-anxiety" style={{ color: p.muted, fontSize: '0.87rem', textDecoration: 'none' }}>
                    Anxiety
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: '1100px',
              margin: '40px auto 0',
              paddingTop: '28px',
              borderTop: `1px solid ${p.border}`,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ color: p.muted, fontSize: '0.82rem' }}>
              &copy; 2026 MEOK AI LABS. All rights reserved.
            </p>
            <p style={{ color: p.muted, fontSize: '0.82rem' }}>
              MEOK is not a medical or crisis service. If you are in immediate distress,
              please contact{' '}
              <span style={{ color: p.gold }}>Samaritans on 116 123</span>.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
