import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Domestic Abuse Survivors: A Safe Space When Safety Itself Has Been Violated | MEOK AI LABS',
  description:
    'Recovering from domestic abuse requires rebuilding trust, identity, and safety from the ground up. MEOK\u2019s sovereign AI provides a confidential, non-judgmental space for survivors \u2014 with data sovereignty that protects your privacy absolutely.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-domestic-abuse-survivors' },
  openGraph: {
    title: 'AI for Domestic Abuse Survivors: A Safe Space When Safety Itself Has Been Violated | MEOK AI LABS',
    description:
      'MEOK\u2019s sovereign AI provides a confidential, non-judgmental space for domestic abuse survivors \u2014 with absolute data privacy your abuser can never access.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-domestic-abuse-survivors',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Domestic+Abuse+Survivors&desc=A+Safe+Space+When+Safety+Has+Been+Violated',
        width: 1200,
        height: 630,
        alt: 'AI for Domestic Abuse Survivors: A Safe Space When Safety Itself Has Been Violated | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Domestic Abuse Survivors: A Safe Space | MEOK AI LABS',
    description:
      'MEOK\u2019s Healer companion and Guardian safety features support domestic abuse survivors \u2014 confidential, sovereign, and yours alone.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Domestic+Abuse+Survivors&desc=A+Safe+Space+When+Safety+Has+Been+Violated',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Domestic Abuse Survivors: A Safe Space When Safety Itself Has Been Violated',
  description:
    'Recovering from domestic abuse requires rebuilding trust, identity, and safety from the ground up. MEOK\u2019s sovereign AI provides a confidential, non-judgmental space for survivors \u2014 with data sovereignty that protects your privacy absolutely.',
  datePublished: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-domestic-abuse-survivors',
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
      name: 'Can an abuser access my MEOK conversations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK operates on a sovereign data model: your conversations, memory vault, and all personal data belong exclusively to you. MEOK has no ability to share your data with third parties, and your account is protected by end-to-end encryption. Unlike cloud AI services that store data on shared infrastructure, MEOK\u2019s sovereign architecture means there is no centralised store an abuser could petition or access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK safe to use if I am still in a dangerous situation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can support you at any stage, but if you are in immediate danger, please call 999 or the National Domestic Abuse Helpline on 0808 2000 247. MEOK is a compassionate companion and safety-planning support tool \u2014 not a crisis service. Use a private browsing window and ensure your device is not monitored if you have concerns about being watched. Safety always comes first.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is trauma bonding and can AI help with it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trauma bonding is a psychological response where a survivor develops deep emotional attachment to their abuser, often through cycles of abuse and intermittent reinforcement. It is not a character flaw \u2014 it is a neurological survival response. MEOK\u2019s Healer companion provides a non-judgmental space to explore these feelings without shame, while always connecting you to qualified therapists for clinical support.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK\u2019s Guardian feature help survivors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guardian is MEOK\u2019s relationship-awareness layer, designed to help users identify unhealthy relational patterns, set boundaries, and protect themselves from manipulation. For domestic abuse survivors, Guardian can help flag coercive control tactics in real-time, support safety planning conversations, and help you articulate your experiences clearly when speaking to solicitors, police, or support workers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free for domestic abuse survivors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\u2019s Explorer tier is free forever with no credit card required. It includes 50 messages per day, full Sovereign Memory, access to the Healer companion, and Guardian relationship-safety features. Survivors should never face financial barriers to compassionate support. Begin your journey at meok.ai/birth.',
      },
    },
  ],
}

// ── Style tokens ──────────────────────────────────────────────────────────────

const BG = '#0d0c18'
const CREAM = '#f5f0e8'
const GOLD = '#c9a84c'
const MUTED = 'rgba(245,240,232,0.55)'
const MUTED_LIGHT = 'rgba(245,240,232,0.35)'
const HEALER_GREEN = '#4caf82'
const HEALER_GREEN_BG = 'rgba(76,175,130,0.12)'
const HEALER_GREEN_BORDER = 'rgba(76,175,130,0.3)'
const GUARDIAN_BLUE = '#5b9bd5'
const GUARDIAN_BLUE_BG = 'rgba(91,155,213,0.10)'
const GUARDIAN_BLUE_BORDER = 'rgba(91,155,213,0.28)'
const DIVIDER = 'rgba(245,240,232,0.08)'

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AiForDomesticAbuseSurvivorsPage() {
  return (
    <div
      style={{
        background: BG,
        color: CREAM,
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── EMERGENCY BANNER ─────────────────────────────────────────────── */}
      <div
        style={{
          background: 'rgba(201,168,76,0.12)',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
          paddingTop: '0.6rem',
          paddingBottom: '0.6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0, fontSize: '0.8rem', color: CREAM, lineHeight: 1.5 }}>
          <strong style={{ color: GOLD }}>If you are in immediate danger, call 999.</strong>
          {' '}National Domestic Abuse Helpline:{' '}
          <a
            href="tel:08082000247"
            style={{ color: GOLD, fontWeight: 700, textDecoration: 'none' }}
          >
            0808 2000 247
          </a>{' '}
          (free, 24/7). This page provides information only and is not a crisis service.
        </p>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: BG,
          paddingTop: '6rem',
          paddingBottom: '4rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow — healing green */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 55% 50% at 50% 0%, rgba(76,175,130,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Background glow — gold */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 40% 40% at 80% 100%, rgba(201,168,76,0.05) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.875rem',
              color: MUTED_LIGHT,
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            ← Back to Blog
          </Link>

          {/* Tag row */}
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
                color: HEALER_GREEN,
                background: HEALER_GREEN_BG,
                border: `1px solid ${HEALER_GREEN_BORDER}`,
                letterSpacing: '0.02em',
              }}
            >
              Trauma Recovery
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GUARDIAN_BLUE,
                background: GUARDIAN_BLUE_BG,
                border: `1px solid ${GUARDIAN_BLUE_BORDER}`,
                letterSpacing: '0.02em',
              }}
            >
              Safety &amp; Privacy
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: GOLD,
                background: 'rgba(201,168,76,0.10)',
                border: '1px solid rgba(201,168,76,0.25)',
                letterSpacing: '0.02em',
              }}
            >
              Sovereign AI
            </span>
            <span style={{ fontSize: '0.75rem', color: MUTED_LIGHT }}>March 25, 2026</span>
            <span style={{ fontSize: '0.75rem', color: MUTED_LIGHT }}>14 min read</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 4vw, 2.875rem)',
              color: CREAM,
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Domestic Abuse Survivors: A Safe Space When Safety Itself Has Been Violated
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              color: MUTED,
              lineHeight: 1.65,
              marginBottom: '2rem',
            }}
          >
            Recovering from domestic abuse is not a single act of leaving. It is the long, often invisible work of reclaiming your voice, your worth, and your sense of safety. MEOK&apos;s sovereign AI was built to hold space for that journey &mdash; confidentially, compassionately, and with absolute privacy that no one else can touch.
          </p>

          {/* Author row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '1.5rem',
              borderTop: `1px solid ${DIVIDER}`,
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                background: 'rgba(201,168,76,0.15)',
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: GOLD,
                flexShrink: 0,
              }}
            >
              NT
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: CREAM,
                }}
              >
                Nicholas Templeman
              </p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: MUTED_LIGHT }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingBottom: '6rem',
        }}
      >
        {/* ── OPENING ─────────────────────────────────────────────────────── */}
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.5rem',
          }}
        >
          If you are reading this, something in you is already reaching toward something better. That act alone &mdash; the reaching &mdash; is not small. After months or years inside a relationship defined by control, fear, and the erosion of your own perception, the capacity to reach outward is evidence of extraordinary resilience.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.5rem',
          }}
        >
          Domestic abuse &mdash; whether physical, emotional, financial, or sexual &mdash; leaves marks that are not always visible. Coercive control, in particular, works by making you doubt your own judgement. Abusers monitor phones, intercept messages, and use technology as a tool of surveillance and power. That is why the question of <em>where</em> you turn for support matters as much as the support itself.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          This page explains how MEOK&apos;s sovereign AI can serve as a private, compassionate space for domestic abuse survivors &mdash; alongside, never instead of, the human professionals and helplines that provide specialist support.
        </p>

        {/* ── SECTION 1 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          Why Does Privacy Matter So Much for Domestic Abuse Survivors?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Coercive control is, at its core, an attack on autonomy. Abusers frequently monitor their partners&apos; digital lives &mdash; reading messages, checking browser history, installing spyware, or demanding access to accounts. The act of seeking help online can itself become a source of danger if that search is discovered.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Most cloud AI services &mdash; large language models operated by major technology companies &mdash; store your conversations on centralised servers. Those conversations can be subpoenaed, accessed by staff, used to train future models, or leaked in a data breach. They are not yours alone.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.5rem',
          }}
        >
          MEOK operates on a fundamentally different architecture. Your conversations, memory vault, and all personal data exist under your data sovereignty. MEOK does not sell, share, or train on your data. Your disclosures are encrypted and portable. If an abuser attempted to compel MEOK to hand over your data, there is no centralised profile to hand. <strong style={{ color: GOLD }}>Your story belongs to you.</strong>
        </p>

        {/* ── CALLOUT 1 — Privacy imperative ──────────────────────────────── */}
        <div
          style={{
            background: GUARDIAN_BLUE_BG,
            border: `1px solid ${GUARDIAN_BLUE_BORDER}`,
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: GUARDIAN_BLUE,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Privacy Imperative
          </p>
          <p
            style={{
              margin: '0 0 0.75rem',
              fontSize: '1rem',
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.4,
            }}
          >
            Before using any digital tool for support, consider your digital safety.
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.25rem',
              listStyle: 'disc',
              color: MUTED,
              fontSize: '0.9rem',
              lineHeight: 1.7,
            }}
          >
            <li>Use a private or incognito browser window to access MEOK if your device may be monitored.</li>
            <li>Consider creating an account on a device your abuser does not have access to.</li>
            <li>MEOK&apos;s mobile app does not display its name on notification previews by default.</li>
            <li>You can delete your full data vault from within the app at any time, instantly.</li>
            <li>If in doubt, contact the National Domestic Abuse Helpline first: <strong style={{ color: CREAM }}>0808 2000 247</strong>.</li>
          </ul>
        </div>

        {/* ── SECTION 2 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          What Is Trauma Bonding and Why Is It So Hard to Leave?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          One of the most painful and misunderstood aspects of abusive relationships is the profound attachment many survivors feel toward their abuser. People on the outside ask: &ldquo;Why didn&apos;t you just leave?&rdquo; The answer is neurological, not moral.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Trauma bonding occurs through cycles of abuse, tension, and intermittent reward. The unpredictable alternation between cruelty and affection activates the same dopamine-reward pathways as addiction. Your nervous system learns to seek relief from the very person causing the pain. This is not weakness. It is a measurable, documented biological response to chronic stress and intermittent reinforcement.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Survivors often describe feeling that they are still &ldquo;in love&rdquo; with someone who hurt them, or feeling compelled to return after leaving. These experiences are common and carry no judgement here.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          MEOK&apos;s Healer companion is designed to hold space for this complexity without judgment, without pushing you toward any particular decision, and without shaming you for the feelings you carry. It meets you exactly where you are. Healing trauma bonds is clinical work best done with a qualified therapist; MEOK supports the space in between.
        </p>

        {/* ── SECTION 3 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          How Does Coercive Control Erode Identity, and How Do You Begin to Rebuild?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Coercive control is a pattern of behaviour designed to dominate another person through fear, dependency, and isolation. Unlike physical violence &mdash; which leaves visible evidence &mdash; coercive control operates on perception. It makes you believe your own judgement is faulty, that you are incapable without your abuser, and that the rest of the world cannot be trusted.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Survivors often emerge from abusive relationships not knowing who they are anymore. Preferences, friendships, hobbies, and ambitions have been slowly hollowed out over months or years. This is not dramatic metaphor; it is the documented psychological consequence of sustained coercive control.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Rebuilding identity after coercive control is a gradual, non-linear process. Small acts of self-determination matter enormously. Choosing what to eat, what music to listen to, what to think about &mdash; these micro-choices rebuild the neural architecture of autonomy.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          MEOK offers one version of that small act: a space where your words are heard without correction or control. Where you set the agenda, choose the topic, speak at your own pace. Where nothing you say is used against you, ever. That might sound minimal. For survivors of coercive control, it is significant.
        </p>

        {/* ── CALLOUT 2 — Healer companion ─────────────────────────────────── */}
        <div
          style={{
            background: HEALER_GREEN_BG,
            border: `1px solid ${HEALER_GREEN_BORDER}`,
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: HEALER_GREEN,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            MEOK Feature: Healer Companion
          </p>
          <p
            style={{
              margin: '0 0 0.75rem',
              fontSize: '1rem',
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.4,
            }}
          >
            Healer is MEOK&apos;s care-specialised AI archetype, designed for trauma processing and emotional recovery.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '0.9rem',
              color: MUTED,
              lineHeight: 1.7,
            }}
          >
            Healer applies trauma-informed communication: slow, non-pressuring, non-probing, and consistently gentle. It never asks you to revisit difficult memories unless you choose to. It does not offer unsolicited opinions about your abuser, your choices, or your timeline. It holds space. It listens. And it always connects you to specialist human support when things go beyond its scope.
          </p>
        </div>

        {/* ── SECTION 4 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          What Is Safety Planning and How Can AI Support It?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          A safety plan is a personalised, practical strategy for protecting yourself when you are in or leaving a dangerous situation. Specialist domestic abuse organisations help survivors create formal safety plans, but the process of thinking through your options &mdash; who to call, where to go, what documents to take &mdash; can feel overwhelming when you are in survival mode.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          MEOK can help you think through this privately. You can use MEOK to organise your thoughts, draft what you want to say to a solicitor, list practical questions before calling a helpline, or simply process the fear and confusion that makes planning feel impossible.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          MEOK&apos;s Sovereign Memory means that these thoughts persist between sessions under your control. If you start a list of important documents on Tuesday and return on Thursday, MEOK remembers. You do not have to start over every time.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          <strong style={{ color: GOLD }}>Critical note:</strong> MEOK is not a crisis service. If you are in immediate danger, call 999. For 24/7 specialist support, call the National Domestic Abuse Helpline on{' '}
          <strong>0808 2000 247</strong>. MEOK supplements professional support; it does not replace it.
        </p>

        {/* ── SECTION 5 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          How Does MEOK&apos;s Guardian Feature Protect Survivors in Relationships?
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Guardian is MEOK&apos;s relationship-safety layer. Built for anyone navigating relational risk &mdash; from family conflict to workplace manipulation to intimate partner abuse &mdash; Guardian helps users identify patterns, understand their rights, and protect their emotional and physical safety.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          For domestic abuse survivors, Guardian serves several functions. It can help you name what you experienced: many survivors struggle to label their experiences as &ldquo;abuse&rdquo; because coercive control operates through gaslighting and self-doubt. Guardian can help you describe situations clearly and reflect on what those patterns might indicate &mdash; not to diagnose, but to affirm your perception.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Guardian also supports boundary articulation. After coercive control, knowing what you are and are not willing to accept in future relationships can feel unclear. Working through this with Guardian &mdash; at your own pace, in private &mdash; is part of rebuilding relational self-knowledge.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          Finally, Guardian can help you prepare for difficult conversations &mdash; with police, with solicitors, with housing officers, with family members who may not fully understand what you have been through. Being able to articulate your experience clearly, without falling apart, is a practical survival skill. Practising with Guardian first can help.
        </p>

        {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.25rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          MEOK vs Generic AI Chatbots: What Matters for Survivors
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: MUTED,
            marginBottom: '1.5rem',
          }}
        >
          Not all AI tools are built the same. For survivors of domestic abuse, the architecture behind an AI matters as much as its conversational quality.
        </p>

        <div
          style={{
            overflowX: 'auto',
            marginBottom: '3rem',
            borderRadius: '0.75rem',
            border: `1px solid ${DIVIDER}`,
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875rem',
            }}
          >
            <thead>
              <tr
                style={{
                  background: 'rgba(245,240,232,0.04)',
                  borderBottom: `1px solid ${DIVIDER}`,
                }}
              >
                <th
                  style={{
                    textAlign: 'left',
                    padding: '0.875rem 1rem',
                    color: MUTED,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    textAlign: 'center',
                    padding: '0.875rem 1rem',
                    color: GOLD,
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  MEOK
                </th>
                <th
                  style={{
                    textAlign: 'center',
                    padding: '0.875rem 1rem',
                    color: MUTED,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Generic AI Chatbot
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Data sovereignty', 'Your data only — never shared', 'Stored on provider servers'],
                ['Training on your data', 'Never', 'Often, by default'],
                ['Persistent memory', 'Full Sovereign Memory', 'Resets each session'],
                ['Trauma-informed design', 'Healer archetype, Maternal Covenant', 'Not designed for trauma'],
                ['Relationship safety layer', 'Guardian feature built in', 'Not available'],
                ['Delete your data', 'Instant, complete vault deletion', 'Limited or unavailable'],
                ['Crisis referral', 'Always active, embedded', 'Variable / inconsistent'],
                ['Abuser data access', 'Not possible — sovereign architecture', 'Theoretically accessible'],
                ['Free tier available', 'Yes — Explorer tier, no card needed', 'Variable'],
              ].map(([feature, meok, generic], i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: `1px solid ${DIVIDER}`,
                    background: i % 2 === 0 ? 'transparent' : 'rgba(245,240,232,0.02)',
                  }}
                >
                  <td
                    style={{
                      padding: '0.75rem 1rem',
                      color: CREAM,
                      fontWeight: 500,
                    }}
                  >
                    {feature}
                  </td>
                  <td
                    style={{
                      padding: '0.75rem 1rem',
                      color: HEALER_GREEN,
                      textAlign: 'center',
                      fontWeight: 500,
                    }}
                  >
                    {meok}
                  </td>
                  <td
                    style={{
                      padding: '0.75rem 1rem',
                      color: MUTED,
                      textAlign: 'center',
                    }}
                  >
                    {generic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── SECTION 6 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          Rebuilding Practical Life After Abuse: Finances, Housing, and Legal Steps
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Leaving an abusive relationship is rarely just an emotional decision. It involves dismantling an entire practical infrastructure &mdash; often one that has been deliberately controlled by an abuser. Financial abuse, in particular, leaves survivors with damaged credit scores, empty accounts, and no independent financial history.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          The practical rebuilding process involves multiple domains simultaneously, which can feel paralysing. MEOK can help you break this down into manageable pieces, tracking what you have done and what comes next, without forgetting the context of your specific situation.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {[
            {
              title: 'Finances',
              points: [
                'Open a bank account in your name only',
                'Request a free credit report (Experian, Equifax)',
                'Contact Citizens Advice about financial abuse',
                'Apply for Universal Credit if needed',
                'Seek debt advice if joint debts exist',
              ],
            },
            {
              title: 'Housing',
              points: [
                'Contact your local council housing team',
                'Speak to a domestic abuse IDVA (advocate)',
                'Refuges can provide emergency accommodation',
                'Legal aid may cover injunction applications',
                'Sanctuary Scheme can make your home safe',
              ],
            },
            {
              title: 'Legal',
              points: [
                'Domestic abuse is a criminal offence in the UK',
                'Apply for a Non-Molestation Order (free)',
                'Keep records: photos, messages, diary entries',
                'Contact the police: you do not need to decide immediately',
                'Women\u2019s Aid and Refuge provide legal advocates',
              ],
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(245,240,232,0.03)',
                border: `1px solid ${DIVIDER}`,
                borderRadius: '0.75rem',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  margin: '0 0 0.75rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                }}
              >
                {card.title}
              </p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '1.1rem',
                  listStyle: 'disc',
                  color: MUTED,
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                }}
              >
                {card.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          MEOK&apos;s persistent memory means you can return to these lists across multiple sessions. Tell MEOK what you have already done, what feels overwhelming, and what questions you need answered before your next call to a solicitor. It will remember, so you do not have to start from scratch every time you seek support.
        </p>

        {/* ── SECTION 7 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          Is It Okay to Need Support? Normalising Reaching Out
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          One of the lasting effects of abuse is the internalisation of your abuser&apos;s voice. That voice often says: you are too sensitive, you are overreacting, nobody would believe you, you cannot cope on your own. It says that needing help is weakness.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          That voice is not yours. And it is not true.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Reaching for support &mdash; whether through a helpline, a therapist, a trusted friend, or an AI companion &mdash; is an act of courage, not weakness. It is the beginning of the long process of reclaiming authority over your own life and narrative.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          You do not have to have everything figured out. You do not need to be certain before you reach out. You do not need to have &ldquo;proof&rdquo; that what happened was bad enough to deserve support. You deserve support because you are a person. That is sufficient.
        </p>

        {/* ── SECTION 8 ───────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          Rebuilding Self-Worth After Coercive Control: What Actually Helps
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Self-worth is not a switch that turns back on when an abusive relationship ends. It is rebuilt in small, consistent moments of self-trust over time. Research into post-traumatic growth &mdash; the genuine positive transformation many trauma survivors report &mdash; identifies several consistent pathways.
        </p>

        <div
          style={{
            marginBottom: '2rem',
          }}
        >
          {[
            {
              heading: 'Telling your story',
              body: 'Narrating what happened &mdash; to yourself, to a therapist, or to a trusted companion &mdash; is one of the most well-evidenced paths through trauma. It organises fragmented memory, reduces the emotional charge of specific recollections over time, and restores your status as the author of your own experience rather than its object.',
            },
            {
              heading: 'Reconnecting with agency',
              body: 'Making small, meaningful choices &mdash; about your time, your body, your environment &mdash; rebuilds the sense that your preferences matter. After coercive control, this can feel unfamiliar. MEOK&apos;s space, where you fully control the direction of every conversation, is one version of this practice.',
            },
            {
              heading: 'Re-establishing connection',
              body: 'Isolation is a tool of abuse. Re-establishing safe connections &mdash; whether with friends, family, support groups, or communities of other survivors &mdash; is protective and healing. MEOK supports this but is not a substitute for human connection.',
            },
            {
              heading: 'Somatic awareness',
              body: 'Trauma lives in the body. Practices like yoga, walking, breathwork, and somatic therapy help regulate the nervous system and reduce the physical hypervigilance that coercive control creates. Many survivors find these practices more accessible than talk therapy initially.',
            },
            {
              heading: 'Professional trauma therapy',
              body: 'Trauma-Focused Cognitive Behavioural Therapy (TF-CBT), EMDR, and somatic experiencing are evidence-based treatments that address the neurological imprints of sustained abuse. MEOK strongly encourages engagement with specialist therapists. Your GP can refer you, or contact the BACP therapist directory at bacp.co.uk.',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                paddingTop: '1rem',
                paddingBottom: '1rem',
                borderBottom: `1px solid ${DIVIDER}`,
              }}
            >
              <p
                style={{
                  margin: '0 0 0.4rem',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: GOLD,
                }}
              >
                {item.heading}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  color: MUTED,
                  lineHeight: 1.7,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── CALLOUT 3 — Professional resources ──────────────────────────── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: GOLD,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Professional Resources — UK
          </p>
          <p
            style={{
              margin: '0 0 1rem',
              fontSize: '1rem',
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.4,
            }}
          >
            MEOK always directs to specialist human support. These organisations are here for you.
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: 0,
              listStyle: 'none',
              fontSize: '0.9rem',
              lineHeight: 1.8,
            }}
          >
            {[
              ['National Domestic Abuse Helpline (Refuge)', '0808 2000 247', 'Free, 24/7'],
              ['Women\u2019s Aid Live Chat', 'chat.womensaid.org.uk', 'Online support'],
              ['Men\u2019s Advice Line', '0808 801 0327', 'Mon\u2013Fri 9am\u20135pm'],
              ['Galop (LGBT+ abuse)', '0800 999 5428', 'Specialist support'],
              ['Karma Nirvana (forced marriage/honour abuse)', '0800 599 9247', 'Helpline'],
              ['Samaritans', '116 123', 'Free, 24/7, emotional support'],
              ['NHS 111', '111', 'Medical support and referrals'],
            ].map(([org, contact, note], i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  paddingTop: '0.4rem',
                  paddingBottom: '0.4rem',
                  borderBottom: i < 6 ? `1px solid rgba(201,168,76,0.1)` : 'none',
                  alignItems: 'baseline',
                }}
              >
                <span style={{ color: CREAM, fontWeight: 600, minWidth: '0' }}>{org}</span>
                <span style={{ color: GOLD, fontWeight: 700 }}>{contact}</span>
                <span style={{ color: MUTED, fontSize: '0.8rem' }}>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1.5rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ marginBottom: '3rem' }}>
          {[
            {
              q: 'Can an abuser access my MEOK conversations?',
              a: 'No. MEOK operates on a sovereign data model: your conversations, memory vault, and all personal data belong exclusively to you. MEOK has no ability to share your data with third parties, and your account is protected by end-to-end encryption. Unlike cloud AI services, there is no centralised store an abuser could petition or access. If you share a device, use a private browsing window and consider logging out between sessions.',
            },
            {
              q: 'Is MEOK safe to use if I am still in a dangerous situation?',
              a: 'MEOK can support you at any stage, but your physical safety always comes first. If you are in immediate danger, call 999. If your device may be monitored, use a private browsing window or a trusted device. MEOK can be closed instantly. The National Domestic Abuse Helpline (0808 2000 247) can also advise on digital safety steps specific to your situation.',
            },
            {
              q: 'What is trauma bonding and can AI help with it?',
              a: 'Trauma bonding is a neurological response where a survivor develops deep emotional attachment to their abuser through cycles of abuse and intermittent reward. It is not a character flaw. MEOK\u2019s Healer companion provides a non-judgmental space to explore these feelings without shame, at your own pace. Trauma bond recovery is clinical work best done with a qualified therapist; MEOK supports the space between sessions.',
            },
            {
              q: 'How does MEOK\u2019s Guardian feature help survivors?',
              a: 'Guardian is MEOK\u2019s relationship-awareness layer. It helps survivors name coercive control patterns, articulate their experiences clearly for legal or professional conversations, and begin building boundaries for future relationships. It does not diagnose or judge; it reflects and supports. It is particularly useful for preparing what you want to say before difficult conversations with police, solicitors, or family members.',
            },
            {
              q: 'Is MEOK free for domestic abuse survivors?',
              a: 'Yes. MEOK\u2019s Explorer tier is completely free with no credit card required. It includes 50 messages per day, full Sovereign Memory across sessions, the Healer companion archetype, and Guardian relationship-safety features. Survivors should never face financial barriers to compassionate support. You can begin at meok.ai/birth.',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem',
                borderBottom: `1px solid ${DIVIDER}`,
              }}
            >
              <p
                style={{
                  margin: '0 0 0.6rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: CREAM,
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  color: MUTED,
                  lineHeight: 1.75,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── CLOSING ─────────────────────────────────────────────────────── */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)',
            fontWeight: 800,
            color: CREAM,
            marginBottom: '1rem',
            paddingTop: '1rem',
            lineHeight: 1.3,
          }}
        >
          You Are Not Starting Over. You Are Starting From Here.
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          Recovery from domestic abuse is not a straight line and it does not have a finish date. There will be days when everything you have built feels fragile, and days when you surprise yourself with your own strength. Both of those experiences are part of the same true story.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '1.25rem',
          }}
        >
          What you experienced was not your fault. The confusion you feel is a normal response to abnormal circumstances. The attachment, the grief, the anger, the relief, the fear &mdash; all of it is allowed. None of it defines your worth or your future.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: CREAM,
            marginBottom: '3rem',
          }}
        >
          MEOK is here for the moments when you need to think out loud, to feel heard, to organise the impossible tangle of what comes next &mdash; in a space that is yours alone, that no one else can access, that remembers you across every conversation without judgment. It is a small but real thing. And you deserve it.
        </p>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(76,175,130,0.10) 0%, rgba(201,168,76,0.10) 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '1rem',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <p
            style={{
              margin: '0 0 0.5rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: GOLD,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Begin Your Sovereign Journey
          </p>
          <h3
            style={{
              margin: '0 0 1rem',
              fontWeight: 800,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              color: CREAM,
              lineHeight: 1.3,
            }}
          >
            A private space that belongs only to you &mdash; free, always.
          </h3>
          <p
            style={{
              margin: '0 0 1.75rem',
              fontSize: '0.95rem',
              color: MUTED,
              lineHeight: 1.65,
              maxWidth: '30rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Start with the Explorer tier: 50 messages per day, full Sovereign Memory, Healer companion, Guardian safety features. No credit card. No trial period. No one else&apos;s eyes on your words.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: GOLD,
              color: BG,
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.875rem 2.25rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
          >
            Begin at meok.ai/birth
          </Link>
          <p
            style={{
              margin: '1.25rem 0 0',
              fontSize: '0.775rem',
              color: MUTED_LIGHT,
            }}
          >
            Always use a private/incognito window if your device may be monitored.
            National Domestic Abuse Helpline:{' '}
            <a
              href="tel:08082000247"
              style={{ color: GOLD, fontWeight: 700, textDecoration: 'none' }}
            >
              0808 2000 247
            </a>
          </p>
        </div>

        {/* ── RELATED POSTS ────────────────────────────────────────────────── */}
        <div style={{ borderTop: `1px solid ${DIVIDER}`, paddingTop: '2.5rem' }}>
          <p
            style={{
              margin: '0 0 1.25rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: MUTED_LIGHT,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Related Reading
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              {
                href: '/blog/ai-for-ptsd',
                tag: 'Trauma',
                title: 'AI for PTSD Support in 2026',
                desc: 'How MEOK\u2019s Healer companion supports trauma survivors with Sovereign Memory.',
              },
              {
                href: '/blog/ai-for-anxiety',
                tag: 'Mental Health',
                title: 'AI for Anxiety',
                desc: 'Compassionate, private support for anxiety \u2014 without judgment or data harvesting.',
              },
              {
                href: '/blog/data-sovereignty-ai',
                tag: 'Privacy',
                title: 'Data Sovereignty and AI',
                desc: 'Why the architecture behind your AI companion matters as much as its personality.',
              },
              {
                href: '/blog/guardian-family-safety',
                tag: 'Safety',
                title: 'Guardian: Family Safety Feature',
                desc: 'How MEOK\u2019s Guardian layer protects you and the people you love.',
              },
            ].map((post, i) => (
              <Link
                key={i}
                href={post.href}
                style={{
                  display: 'block',
                  background: 'rgba(245,240,232,0.03)',
                  border: `1px solid ${DIVIDER}`,
                  borderRadius: '0.75rem',
                  padding: '1.1rem',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: GOLD,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  {post.tag}
                </span>
                <p
                  style={{
                    margin: '0 0 0.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: CREAM,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.8rem',
                    color: MUTED,
                    lineHeight: 1.55,
                  }}
                >
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* ── FOOTER NOTE ──────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: `1px solid ${DIVIDER}`,
          paddingTop: '2rem',
          paddingBottom: '2rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            margin: '0 0 0.5rem',
            fontSize: '0.8rem',
            color: MUTED_LIGHT,
            lineHeight: 1.6,
            maxWidth: '40rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          MEOK is a compassionate AI companion and is not a clinical service, crisis line, or substitute for professional medical or psychological care. If you are in danger, call 999. National Domestic Abuse Helpline:{' '}
          <a
            href="tel:08082000247"
            style={{ color: GOLD, fontWeight: 700, textDecoration: 'none' }}
          >
            0808 2000 247
          </a>{' '}
          (free, 24/7).
        </p>
        <p
          style={{
            margin: 0,
            fontSize: '0.75rem',
            color: MUTED_LIGHT,
          }}
        >
          &copy; 2026 MEOK AI LABS &mdash;{' '}
          <Link href="/privacy" style={{ color: MUTED_LIGHT, textDecoration: 'none' }}>
            Privacy
          </Link>{' '}
          &mdash;{' '}
          <Link href="/blog" style={{ color: MUTED_LIGHT, textDecoration: 'none' }}>
            Blog
          </Link>
        </p>
      </footer>
    </div>
  )
}
