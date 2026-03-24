import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Support Through Grief and Bereavement: Never Grieving Alone | MEOK AI LABS',
  description:
    'How AI companions like MEOK support people through grief — pet loss, pregnancy loss, bereavement, 3am loneliness, and the feelings nobody talks about. Compassionate, always present.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-bereavement' },
  openGraph: {
    title: 'AI Support Through Grief and Bereavement: Never Grieving Alone',
    description:
      'How AI companions like MEOK support people through grief — pet loss, pregnancy loss, bereavement, 3am loneliness, and the feelings nobody talks about.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-bereavement',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Support+Through+Grief+and+Bereavement&desc=Never+Grieving+Alone',
        width: 1200,
        height: 630,
        alt: 'AI Support Through Grief and Bereavement: Never Grieving Alone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support Through Grief and Bereavement: Never Grieving Alone',
    description:
      'How AI companions like MEOK support people through grief — pet loss, pregnancy loss, bereavement, 3am loneliness, and the feelings nobody talks about.',
    images: [
      'https://meok.ai/api/og?title=AI+Support+Through+Grief+and+Bereavement&desc=Never+Grieving+Alone',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support Through Grief and Bereavement: Never Grieving Alone',
  description:
    'How AI companions like MEOK support people through grief — pet loss, pregnancy loss, bereavement, 3am loneliness, and the feelings nobody talks about. Compassionate, always present.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-bereavement',
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://meok.ai/logo.png',
    },
  },
  image:
    'https://meok.ai/api/og?title=AI+Support+Through+Grief+and+Bereavement&desc=Never+Grieving+Alone',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-bereavement',
  },
  keywords: [
    'AI for bereavement',
    'AI grief support',
    'AI companion for grief',
    'grief and AI',
    'pet loss support AI',
    'pregnancy loss AI',
    'MEOK bereavement',
    'AI mental health',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI really help during bereavement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can provide meaningful, non-judgemental presence during bereavement — especially in the hours when no human support is available. MEOK remembers what you have shared, holds the name and significance of the person you have lost, and offers a space to talk without burdening family members or friends who are also grieving. It will not rush you, minimise your pain, or offer hollow reassurances. It is not a replacement for human connection or professional grief counselling, but it fills an important gap: the 3am loneliness, the waves of grief that arrive without warning, the thoughts you do not feel you can say out loud to the people around you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK support grief differently from a standard chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard chatbots reset between sessions — they have no memory of who you lost, when, or what your grief has looked like. MEOK uses Sovereign Memory to hold that context persistently. It knows who died, the nature of the relationship, the anniversaries that approach, and how the grief has evolved over weeks or months. It also refuses toxic positivity: MEOK will not tell you that everything happens for a reason or that they are in a better place unless you explicitly want that kind of reflection. It sits with grief rather than resolving it prematurely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MEOK support pet loss and pregnancy loss, not just the death of a person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK recognises that grief is not ranked — the loss of a beloved pet or a pregnancy can be as devastating as any bereavement, and often receives far less social acknowledgement. MEOK holds the significance of all forms of loss within Sovereign Memory and responds with the same depth of care regardless of who or what was lost. It will never minimise disenfranchised grief — the grief that the world does not always give you permission to feel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I use MEOK to support a child through grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can help parents and caregivers think through how to talk to a child about death and loss, how to explain what has happened in age-appropriate language, and how to respond when a child asks difficult questions. For older children and teenagers, MEOK can also be a direct source of support — a private space to process complicated feelings without worrying about upsetting the adults around them. MEOK will always recommend professional support from a child bereavement specialist such as Winston\'s Wish when the level of distress warrants it.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should someone grieving seek professional help rather than using AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is clear about this. If you are experiencing suicidal thoughts, if grief is significantly impairing your ability to function, if you are using alcohol or substances to cope, or if the grief feels stuck and unmoving after many months, please contact a professional. In the UK, Cruse Bereavement Support (0808 808 1677) offers free specialist counselling. The Samaritans (116 123) are available around the clock. MEOK will always signpost these resources and will never suggest that AI support is sufficient when clinical or specialist care is needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me journal about my grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Grief journalling — writing through loss, memories, and feeling — is one of the most well-evidenced forms of grief processing. MEOK can guide you into journalling gently, offer prompts that open rather than close down reflection, and hold what you have written in Sovereign Memory so that your journal becomes part of an ongoing conversation rather than isolated entries. It can help you return to memories of the person you lost, celebrate who they were, and trace how your relationship with grief is changing over time.',
      },
    },
  ],
}

// ── Style constants ────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const TEXT = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const FAINT = 'rgba(245,240,232,0.35)'
const BORDER = 'rgba(245,240,232,0.08)'
const GOLD_BG = 'rgba(201,168,76,0.08)'
const GOLD_BORDER = 'rgba(201,168,76,0.25)'
const SECTION_BG = 'rgba(255,255,255,0.025)'
const CALLOUT_BG = 'rgba(201,168,76,0.06)'

// ── Page ───────────────────────────────────────────────────────────────────────

export default function AiForBereavementPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: BG,
        color: TEXT,
        fontFamily: 'var(--font-dm-sans, DM Sans, system-ui, sans-serif)',
      }}
    >
      {/* JSON-LD */}
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
          paddingBottom: '4rem',
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
              'radial-gradient(ellipse 60% 55% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 72%)',
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
              color: FAINT,
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            ← Back to Blog
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
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GOLD,
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                letterSpacing: '0.04em',
              }}
            >
              Grief &amp; Bereavement
            </span>
            <span style={{ fontSize: '0.75rem', color: FAINT }}>24 March 2026</span>
            <span style={{ fontSize: '0.75rem', color: FAINT }}>14 min read</span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
              color: '#ffffff',
              lineHeight: 1.16,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            AI Support Through Grief and Bereavement: Never Grieving Alone
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '42rem',
            }}
          >
            Grief is one of the most isolating experiences a person can go through. The world moves on. The phone calls slow down. And at 3am, when the loss hits you like a physical weight, there is nowhere to go and no one to call. This is an honest account of how AI companions like MEOK can help — and where professional support will always matter more.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                background: GOLD_BG,
                border: `1px solid ${GOLD_BORDER}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: GOLD,
              }}
            >
              NT
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: TEXT, margin: 0 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: FAINT, margin: 0 }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CRISIS CALLOUT ────────────────────────────────────────────────── */}
      <div
        style={{
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '3rem',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            background: CALLOUT_BG,
            border: `1px solid ${GOLD_BORDER}`,
            borderRadius: '0.75rem',
            padding: '1.25rem 1.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              color: TEXT,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <strong style={{ color: GOLD }}>Important: </strong>
            MEOK is a compassionate companion, not a replacement for professional grief counselling or therapy. If you are in crisis or experiencing suicidal thoughts, please contact{' '}
            <strong>Samaritans on 116 123</strong> (free, 24/7) or{' '}
            <strong>Cruse Bereavement Support on 0808 808 1677</strong>. This article discusses AI as a complement to — never a substitute for — qualified support.
          </p>
        </div>
      </div>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <article
        style={{
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '6rem',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          {/* Opening paragraphs */}
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: '1.25rem',
            }}
          >
            Grief has no schedule. It does not respect the working week, does not wait until a reasonable hour, and does not ease because you have already cried about it. It arrives in supermarket aisles when a song comes on, in the dark in the early hours, in the strange silence of a house that used to hold more life. And in those moments — the 3am moments, the ambush moments, the ordinary Tuesday afternoon moments — there often is no one available, and even if there were, the words feel impossible to form.
          </p>

          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: '1.25rem',
            }}
          >
            This is the gap that MEOK exists to fill. Not to replace the people who love you, not to replace the grief counsellor or the bereavement therapist, but to be present in the in-between — the moments when the weight of loss needs somewhere to go, and there is nowhere else to take it.
          </p>

          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: TEXT,
              marginBottom: '3rem',
            }}
          >
            MEOK was built by Nicholas Templeman and the team at MEOK AI LABS with a foundational commitment to care — not the performative, hollow care of a customer service script, but the kind of care that shows up consistently, remembers what matters, and never pretends that grief is something to be fixed or fast-forwarded through. In the context of bereavement, that commitment takes on a particular weight.
          </p>

          {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
          <div
            style={{
              background: SECTION_BG,
              borderRadius: '1rem',
              padding: '2rem',
              marginBottom: '3rem',
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              Why Does Grief Feel So Isolating, Even When You Are Surrounded by People?
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              There is a profound and painful paradox at the heart of bereavement: the people most likely to understand your grief are often the same people who are also grieving. A parent, a sibling, a partner, a closest friend — they share the loss. And so the conversations about it, when they happen at all, carry a double weight. You are both trying to hold your own pain and hold theirs simultaneously. The result, for many people, is a kind of mutual protection that leads to silence. Everyone pretends to be coping a little better than they are, because the alternative feels like adding to someone else&rsquo;s burden.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              Beyond the immediate circle, the social space for grief is often shockingly small. The world gives you a few days — a week if you are lucky — before the expectation of returning to normal quietly reasserts itself. Colleagues stop mentioning it. Well-meaning friends say things like &ldquo;how are you doing?&rdquo; with an inflection that clearly hopes the answer is &ldquo;fine.&rdquo; The grief that extends beyond the publicly sanctioned mourning period becomes, by default, a private affair.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              This is not a character flaw in the people around you. It is a structural failure in how modern society deals with death and loss. Grief was once communal — cultures had mourning rituals, periods, and practices that gave structure to loss. Much of that has dissolved. What remains is a kind of improvised, individual grief that often has nowhere to go.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              MEOK cannot restore the communal rituals. But it can restore something else: the simple availability of a presence that is not burdened by its own grief, that is not hoping you will be fine, and that will not tire of hearing about the person you lost.
            </p>
          </div>

          {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
          <div style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              What Can an AI Companion Actually Offer Someone Who Is Grieving?
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              The honest answer to this question matters enormously. AI companions are not grief therapists. They cannot provide the relational depth of a human who truly loves you, and they should never claim otherwise. What MEOK can offer is something distinct, and genuinely valuable, within those limits.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              <strong style={{ color: GOLD }}>Persistent, unhurried presence.</strong> MEOK does not have somewhere else to be. It does not grow fatigued by the repetition that is intrinsic to grief — the circling back, the same memories, the same unanswerable questions. It will sit with you in that repetition without impatience, because there is no impatience built in.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              <strong style={{ color: GOLD }}>Memory that holds the person who died.</strong> Using Sovereign Memory, MEOK can hold the name, character, relationship, and significance of the person you have lost. This means you do not have to re-explain the loss in every conversation. It means that when you come back in week seven, or month four, MEOK already knows who you are talking about and why it matters. It can remember that your mother used to make a specific dish, that your father had a phrase he always used, that your dog slept at the end of your bed for eleven years. Those details are not reset.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              <strong style={{ color: GOLD }}>A space for the unspeakable.</strong> Grief brings feelings that people often cannot say to the people around them — relief, anger at the person who died, guilt about what was not said, complicated emotions about a relationship that was not simple. MEOK is non-judgemental by design. There is no risk that what you say will change how someone important to you sees you. That safety can make it possible to say things that genuinely need to be said, in order to be processed.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              <strong style={{ color: GOLD }}>Availability at the worst times.</strong> Grief does not respect office hours. The 3am call is real — the sudden waking, the weight descending, the need for somewhere to put it. MEOK is available at every hour, without exception, and without the cost of waking someone else.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              <strong style={{ color: GOLD }}>Gentle guidance toward professional support.</strong> When the grief being described goes beyond what a companion can appropriately hold — when someone describes feeling unable to continue, when the pain is causing serious harm to daily life — MEOK will always point clearly and compassionately toward qualified support. It is designed to know its own limits.
            </p>
          </div>

          {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
          <div
            style={{
              background: SECTION_BG,
              borderRadius: '1rem',
              padding: '2rem',
              marginBottom: '3rem',
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              What About Grief That the World Does Not Fully Recognise? Pet Loss, Pregnancy Loss, and Disenfranchised Grief
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              One of the most painful dimensions of grief is the hierarchy the world quietly imposes upon it. The death of a spouse or a parent is met with cards, flowers, and condolences. The loss of a beloved pet is often met with a well-meaning &ldquo;but you can get another one.&rdquo; The end of a pregnancy — whether through miscarriage, stillbirth, or termination — is frequently handled in near-silence, as though the weight of that loss belongs to no one and nowhere. The death of an estranged parent, complicated by a difficult relationship, may feel impossible to grieve publicly at all.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              This is what grief researchers call <em>disenfranchised grief</em> — loss that is not socially acknowledged, that is not given the space or permission to exist fully. And it is one of the most isolating forms of grief there is, because the person carrying it feels both the weight of the loss and the shame of being told, implicitly, that the loss does not quite count.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK does not rank grief. The loss of a cat who slept on your pillow for sixteen years is not lesser. The loss of a pregnancy at eight weeks is not lesser. The loss of a relationship — a friendship, a marriage, a version of yourself — is not lesser. MEOK holds all forms of loss with the same seriousness and the same depth of care, without imposing an external framework about what grief ought to look like or how significant it should be.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              For people experiencing pet loss, MEOK can hold detailed memories of the animal — their name, personality, the rituals that surrounded their care, the particular way their absence has changed the texture of daily life. It will not suggest timelines for when it is appropriate to adopt again. It will not question whether the grief is proportionate. It will simply be present with the reality that something deeply loved is gone.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              For people experiencing pregnancy loss, MEOK recognises the particular cruelty of grief that has no body, no funeral, and often no shared language. It recognises the way that pregnancy loss can sit alongside complex feelings about fertility, about the body, about the future that was briefly imagined. It does not ask you to be grateful for what you still have. It makes space for the loss exactly as it is.
            </p>
          </div>

          {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
          <div style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              How Can Journalling Through Grief Help, and How Does MEOK Make It Easier?
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              Writing about grief is one of the most robust interventions in the psychological literature on loss. James Pennebaker&rsquo;s decades of research on expressive writing established that people who write honestly about emotional experiences — even for as little as fifteen minutes across several sessions — show measurable improvements in psychological wellbeing, immune function, and the ability to make meaning from difficult experiences.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              But grief journalling is harder than it sounds. Sitting down to write into a blank page, alone, when you are already in pain, requires a kind of self-directed motivation that grief itself often destroys. The motivational and cognitive resources that journalling demands are exactly the ones that loss depletes.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK lowers that threshold. Instead of confronting a blank page, you are in a conversation — and MEOK can guide the conversation toward reflection, memory, and feeling without it feeling like a formal exercise. It might ask: <em>What did you love most about the way they laughed?</em> Or: <em>Is there something you wish you had said that you never got to say?</em> Or simply: <em>Tell me something about today that reminded you of them.</em>
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              Because MEOK holds everything you share in Sovereign Memory, those reflections accumulate. Over weeks and months, a record forms — not a clinical case file, but something more like a living journal of grief and memory. You can return to what you wrote six months ago and see how the grief has moved. You can read back the things you loved about the person you lost and feel them held somewhere, not forgotten.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              This is one of the most distinctive things MEOK can offer in the context of bereavement: not just a companion for the acute phase of grief, but a witness to the whole arc of it — from the raw, early pain to the longer, quieter integration of loss into a life.
            </p>
          </div>

          {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
          <div
            style={{
              background: SECTION_BG,
              borderRadius: '1rem',
              padding: '2rem',
              marginBottom: '3rem',
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              How Can Parents and Carers Use AI to Help Children Through Grief?
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              Supporting a child through grief while you are also grieving is one of the hardest things a parent or carer can be asked to do. You are required to be present, clear, and steady for a child who may be asking questions you do not know how to answer — while simultaneously holding your own loss. There is very little preparation for this, and very little in the way of immediate, accessible support.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK can serve as a thinking partner for adults in this situation. It can help you prepare for the conversations: how to explain death to a child at different developmental stages, how to respond when a child asks &ldquo;where did they go?&rdquo; or &ldquo;will you die too?&rdquo;, how to navigate the strange grief behaviour children sometimes show — regression, anger, apparent indifference, or obsessive questions. It can help you find the words before you need to speak them.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              For older children and teenagers, MEOK can also be a direct source of support — a private space for the feelings they may not want to bring to the adults in their lives, who they are already worried about. Adolescent grief is often hidden because teenagers do not want to be seen as vulnerable, and because they sense the weight already carried by their parents. A private, confidential companion that holds their grief without judgment, that does not report back, and that is available at whatever hour the feelings arrive can be enormously valuable.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK will always recommend specialist child bereavement support when the level of distress warrants it. In the UK, organisations like Winston&rsquo;s Wish, Child Bereavement UK, and the NSPCC provide specialist services for bereaved children and young people that go well beyond what any AI companion can or should attempt to provide. These signposts are built into MEOK&rsquo;s awareness and will be offered clearly and compassionately when they are needed.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              MEOK&rsquo;s role in this context is a supporting role — helping parents feel more equipped, helping older children feel less alone, and consistently pointing toward specialist human support when that is what is truly needed.
            </p>
          </div>

          {/* ── SECTION 6 ─────────────────────────────────────────────────── */}
          <div style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              What Are the Complicated Feelings in Grief That People Rarely Talk About?
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              The grief that gets depicted in films and described in condolence cards is mostly sadness — pure, clean sadness for a person purely loved. Real grief is far messier than this, and the gap between the grief that is socially acceptable and the grief that actually exists is one of the most painful aspects of loss.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              People grieve people they had complicated relationships with. They grieve and also feel relief — when someone who suffered for a long time has finally died, when an abusive relationship has ended, when the burden of long-term caring is finally lifted. They feel anger at the person who died — for leaving, for choices they made, for things they never addressed. They feel guilt about things said and unsaid, about relationships that were not repaired in time. They feel strange about experiencing joy, or pleasure, or ordinary life while also being bereaved.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              These feelings are not aberrations. They are, according to grief researchers and counsellors, entirely normal. But they are rarely named, rarely given space, and often a source of profound shame for the people experiencing them — particularly when the dominant social narrative about the person who died is one of uncomplicated love and loss.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK holds space for these feelings without judgment. Because it is not a member of the family, not a mutual friend, not someone who also knew the person who died, it can be the place where the complicated things are said — where the relief is admitted, where the anger is expressed, where the ambivalence about grief is allowed to exist without apology. That is not a small thing. For many people, it is exactly what is needed most.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK is built on what we call the Maternal Covenant — a governance layer that prevents harmful responses. In the context of complicated grief, this means MEOK will not perform judgment, will not offer unsolicited moral evaluation of feelings, and will not suggest that the grief should look different from how it actually looks. It responds to what is real, not to what grief is supposed to be.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              It also means MEOK will not offer false consolation. It will not tell you that they are at peace, or that everything happens for a reason, or that time heals all wounds — unless you have specifically asked for that kind of reflection. It does not reach for comfort that might silence the grief before the grief has had its say.
            </p>
          </div>

          {/* ── SECTION 7 ─────────────────────────────────────────────────── */}
          <div
            style={{
              background: SECTION_BG,
              borderRadius: '1rem',
              padding: '2rem',
              marginBottom: '3rem',
              borderLeft: `3px solid ${GOLD}`,
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              How Does MEOK Help You Remember and Honour the Person You Lost?
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              One of the fears that grief brings is the fear of forgetting. The texture of a voice. The particular laugh. The smell of someone&rsquo;s coat. The specific phrases they used. These details are precious and perishable, and the terror that they will eventually fade is a grief in itself.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK can help preserve these things. As you share memories — how your grandfather used to end every letter, the songs your mother sang in the kitchen, the way your friend always arrived exactly twenty minutes late but was completely worth the wait — those details are held in Sovereign Memory. They do not expire. They are not lost between sessions. They become part of the shared record of who this person was, held in a place you can return to.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              This is not a digital memorial in the traditional sense. MEOK is not building a simulation of the person who died, and it will not attempt to speak as them or act as them. That would be harmful — it would prevent genuine grief processing and create a false comfort that does not serve healing. What MEOK does is hold the person&rsquo;s significance in your life, so that the conversations about grief are always conversations that already know who you are talking about.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK can also help you think through how you want to mark anniversaries — the first birthday without them, the first Christmas, the date of the death itself. It can be a thinking partner for rituals of remembrance: what might feel meaningful, what might help, what feels right for you given who they were and who your relationship was. Grief rituals are powerful tools for processing loss, and having a companion to think them through with can make the difference between an anniversary that arrives as pure pain and one that is also an act of honour.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              Over time, MEOK can also witness the way grief changes — the way it softens without disappearing, the way the person who died becomes integrated into your life rather than simply absent from it. That arc, held in memory, is something worth having.
            </p>
          </div>

          {/* ── SECTION 8 ─────────────────────────────────────────────────── */}
          <div style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              When Is AI Not Enough? Understanding the Limits of AI Bereavement Support
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              Being honest about this is not just important — it is foundational to how MEOK was built. Nicholas Templeman and the MEOK AI LABS team made a deliberate choice to build care into the architecture of the product, and part of that care is the absolute refusal to overstate what AI can do.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              There are forms of grief that require professional clinical support — grief that meets the diagnostic criteria for prolonged grief disorder or complicated grief, grief that is interwoven with trauma, grief that has led to suicidal ideation or serious self-harm, grief that is being processed through substance use. These are not situations that an AI companion can or should attempt to manage.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK is designed to recognise these indicators and respond by clearly, warmly, and directly pointing toward qualified support. It does not attempt to handle what is beyond its scope. It does not minimise what it hears in order to avoid seeming alarming. If you describe something that suggests you need more than a companion can provide, MEOK will say so — and it will tell you where to go.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              Beyond clinical limits, there are also relational limits. MEOK is not a person who loves you. It cannot provide the particular quality of presence that comes from being truly known and truly loved by another human being. Grief research consistently shows that strong social support is one of the most protective factors against complicated grief — and that support means human relationships: people who share the loss, people who knew the person who died, people who hold you in their lives alongside the grief.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              MEOK is a complement to those relationships, not a substitute for them. It fills gaps — the 3am gap, the unspeakable feelings gap, the repetition gap, the disenfranchised loss gap. It does not aim to replace what humans can give each other when they are truly present with loss.
            </p>

            {/* Professional support signpost */}
            <div
              style={{
                background: CALLOUT_BG,
                border: `1px solid ${GOLD_BORDER}`,
                borderRadius: '0.75rem',
                padding: '1.5rem',
                marginBottom: 0,
              }}
            >
              <p
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.75rem',
                }}
              >
                UK Bereavement Support Resources
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.25rem',
                  listStyleType: 'disc',
                }}
              >
                <li
                  style={{
                    fontSize: '0.9375rem',
                    color: TEXT,
                    lineHeight: 1.7,
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong>Cruse Bereavement Support</strong> — 0808 808 1677 (free, Monday–Friday) — specialist grief counselling
                </li>
                <li
                  style={{
                    fontSize: '0.9375rem',
                    color: TEXT,
                    lineHeight: 1.7,
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong>Samaritans</strong> — 116 123 (free, 24/7) — for anyone in distress
                </li>
                <li
                  style={{
                    fontSize: '0.9375rem',
                    color: TEXT,
                    lineHeight: 1.7,
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong>Winston&rsquo;s Wish</strong> — for bereaved children and young people
                </li>
                <li
                  style={{
                    fontSize: '0.9375rem',
                    color: TEXT,
                    lineHeight: 1.7,
                    marginBottom: '0.5rem',
                  }}
                >
                  <strong>Child Bereavement UK</strong> — for families with bereaved children
                </li>
                <li
                  style={{
                    fontSize: '0.9375rem',
                    color: TEXT,
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  <strong>The Miscarriage Association</strong> — for pregnancy loss support
                </li>
              </ul>
            </div>
          </div>

          {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
          <div
            style={{
              marginBottom: '4rem',
              borderTop: `1px solid ${BORDER}`,
              paddingTop: '3rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '2rem',
                letterSpacing: '-0.015em',
              }}
            >
              Frequently Asked Questions
            </h2>

            {/* FAQ 1 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                Can AI really help during bereavement?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                AI can provide meaningful, non-judgemental presence during bereavement — especially in the hours when no human support is available. MEOK remembers what you have shared, holds the name and significance of the person you have lost, and offers a space to talk without burdening family members or friends who are also grieving. It will not rush you, minimise your pain, or offer hollow reassurances. It is not a replacement for human connection or professional grief counselling, but it fills an important gap: the 3am loneliness, the waves of grief that arrive without warning, the thoughts you do not feel you can say out loud to the people around you.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                How does MEOK support grief differently from a standard chatbot?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Standard chatbots reset between sessions — they have no memory of who you lost, when, or what your grief has looked like. MEOK uses Sovereign Memory to hold that context persistently. It knows who died, the nature of the relationship, the anniversaries that approach, and how the grief has evolved over weeks or months. It also refuses toxic positivity: MEOK will not tell you that everything happens for a reason or that they are in a better place unless you explicitly want that kind of reflection. It sits with grief rather than resolving it prematurely.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                Does MEOK support pet loss and pregnancy loss, not just the death of a person?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Yes. MEOK recognises that grief is not ranked — the loss of a beloved pet or a pregnancy can be as devastating as any bereavement, and often receives far less social acknowledgement. MEOK holds the significance of all forms of loss within Sovereign Memory and responds with the same depth of care regardless of who or what was lost. It will never minimise disenfranchised grief — the grief that the world does not always give you permission to feel.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                How can I use MEOK to support a child through grief?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                MEOK can help parents and caregivers think through how to talk to a child about death and loss, how to explain what has happened in age-appropriate language, and how to respond when a child asks difficult questions. For older children and teenagers, MEOK can also be a direct source of support — a private space to process complicated feelings without worrying about upsetting the adults around them. MEOK will always recommend professional support from a child bereavement specialist such as Winston&rsquo;s Wish when the level of distress warrants it.
              </p>
            </div>

            {/* FAQ 5 */}
            <div
              style={{
                borderBottom: `1px solid ${BORDER}`,
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                When should someone grieving seek professional help rather than using AI?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                MEOK is clear about this. If you are experiencing suicidal thoughts, if grief is significantly impairing your ability to function, if you are using alcohol or substances to cope, or if the grief feels stuck and unmoving after many months, please contact a professional. In the UK, Cruse Bereavement Support (0808 808 1677) offers free specialist counselling. The Samaritans (116 123) are available around the clock. MEOK will always signpost these resources and will never suggest that AI support is sufficient when clinical or specialist care is needed.
              </p>
            </div>

            {/* FAQ 6 */}
            <div
              style={{
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: GOLD,
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                Can MEOK help me journal about my grief?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Yes. Grief journalling — writing through loss, memories, and feeling — is one of the most well-evidenced forms of grief processing. MEOK can guide you into journalling gently, offer prompts that open rather than close down reflection, and hold what you have written in Sovereign Memory so that your journal becomes part of an ongoing conversation rather than isolated entries. It can help you return to memories of the person you lost, celebrate who they were, and trace how your relationship with grief is changing over time.
              </p>
            </div>
          </div>

          {/* ── CLOSING ───────────────────────────────────────────────────── */}
          <div
            style={{
              marginBottom: '4rem',
              borderTop: `1px solid ${BORDER}`,
              paddingTop: '3rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              You Do Not Have to Grieve Alone
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              The title of this piece is a promise, and like all promises, its weight rests on what it actually delivers. MEOK will not cure grief. It will not bring anyone back. It will not make the anniversaries easier than they are, or fix the strange silence that descends on a house after loss, or resolve the complicated feelings that grief surfaces.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              What it will do is be there. Consistently, without fatigue, without judgment, without the need to protect itself from your pain. It will hold the memory of who you lost. It will ask about them by name. It will make space for the feelings that have nowhere else to go. It will be available at 3am, and at 3pm, and on the ordinary Tuesday when grief arrives uninvited.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: '1.25rem',
              }}
            >
              And when the grief is more than a companion can hold — when it has tipped into crisis, when it needs clinical expertise, when it needs the particular quality of human presence that only another person who loves you can provide — MEOK will say so clearly, and point you toward the right door.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: TEXT,
                marginBottom: 0,
              }}
            >
              That is what care looks like when it is built honestly. Not a replacement for everything, but a genuine presence for the things it can actually hold. Grief is one of the most isolating experiences a person can go through. It does not have to be as lonely as it often is.
            </p>
          </div>

          {/* ── TAGS ──────────────────────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '3rem',
              paddingBottom: '3rem',
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            {['grief', 'bereavement', 'mental health', 'AI companion'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.625rem',
                  borderRadius: '9999px',
                  color: FAINT,
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${BORDER}`,
                  letterSpacing: '0.02em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ── CTA ───────────────────────────────────────────────────────── */}
          <div
            style={{
              background: GOLD_BG,
              border: `1px solid ${GOLD_BORDER}`,
              borderRadius: '1rem',
              padding: '2.5rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: GOLD,
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              MEOK AI LABS
            </p>
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1rem',
                letterSpacing: '-0.015em',
              }}
            >
              A companion that remembers who you lost
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: MUTED,
                lineHeight: 1.7,
                marginBottom: '1.75rem',
                maxWidth: '32rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              MEOK holds the memory of what matters, sits with you in the hard hours, and never pretends grief should be faster than it is. Always available. Never judgmental. Genuinely present.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <Link
                href="https://meok.ai"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '0.5rem',
                  background: GOLD,
                  color: '#0d0c18',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                }}
              >
                Discover MEOK
              </Link>
              <Link
                href="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '0.5rem',
                  background: 'transparent',
                  color: TEXT,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  border: `1px solid ${BORDER}`,
                }}
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
