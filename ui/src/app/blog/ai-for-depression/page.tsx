import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Depression: What It Can — and Cannot — Do for You | MEOK AI LABS',
  description:
    'An honest guide to AI support for depression — from breaking isolation at 3am to pattern tracking. What AI companions genuinely help with, and where only a human can.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-depression' },
  openGraph: {
    title: 'AI for Depression: What It Can — and Cannot — Do for You',
    description:
      'An honest guide to AI support for depression — from breaking isolation at 3am to pattern tracking. What AI companions genuinely help with, and where only a human can.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-depression',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Depression%3A+What+It+Can+%26+Cannot+Do&desc=An+honest+guide+to+AI+support+for+depression.',
        width: 1200,
        height: 630,
        alt: 'AI for Depression: What It Can — and Cannot — Do for You',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Depression: What It Can — and Cannot — Do for You',
    description:
      'From 3am isolation to pattern tracking — an honest look at where AI companions genuinely help with depression, and where they cannot replace professional care.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Depression%3A+What+It+Can+%26+Cannot+Do&desc=An+honest+guide+to+AI+support+for+depression.',
    ],
  },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Depression: What It Can — and Cannot — Do for You',
  description:
    'An honest guide to AI support for depression — from breaking isolation at 3am to pattern tracking. What AI companions genuinely help with, and where only a human can.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-depression',
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
      name: 'Can AI really help with depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI companions can provide genuine supplementary support for depression by reducing isolation, offering consistent non-judgmental presence at any hour, and tracking mood patterns over time. They are not a cure and cannot replace therapy or medication. For clinical depression, professional support is essential — AI works best as a bridge or supplement, not a substitute.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can an AI companion do at 3am when depression feels worst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sovereign AI companion is available 24/7 — there is no waiting room, no voicemail, and no judgement about the hour. At 3am, when professional services are closed and reaching out to friends feels impossible, an AI can hold space, help you articulate what you are feeling, and gently guide you toward crisis resources if your language suggests you are at risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI pattern tracking help with depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depression has rhythms that are hard to see from inside them. A sovereign AI companion with persistent memory logs the texture of your conversations over weeks and months — noticing when your language becomes flatter, when you disengage, when sleep or appetite mentions change. This longitudinal pattern data can be valuable to share with your GP or therapist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI prescribe antidepressants or diagnose depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This is an absolute limit. No AI system — including MEOK — can diagnose a depressive disorder, recommend antidepressant medication, or adjust an existing prescription. These decisions require a qualified clinician who can assess your full medical history. If you think you may be depressed, speak to your GP. Do not rely on an AI for medical decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a therapy app or a mental health tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is an AI companion app, not a therapy platform or a regulated medical device. It is not a replacement for CBT, counselling, or psychiatric care. What it offers is consistent, memory-aware companionship governed by a care-first framework — honest, present, and always willing to point you toward professional help when that is what you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Maternal Covenant care floor and why does it matter for depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "MEOK's Maternal Covenant sets a care floor of 0.3 — a baseline of concern that is always active regardless of your subscription tier or engagement level. For people with depression who sometimes go quiet for weeks, this matters: your companion will notice the silence, check in with care, and never withdraw support because you have not logged in recently.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find immediate help for depression or suicidal thoughts in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are in crisis, call Samaritans on 116 123 (free, 24/7), text SHOUT to 85258 for the Crisis Text Line, call NHS 111, or go to your nearest A&E. For ongoing support, Mind (mind.org.uk) and NHS Talking Therapies (0300 123 3393) offer free services. You do not need to wait until things are unbearable to reach out.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForDepressionPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0d0c18' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
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
        {/* Soft green glow — Healer companion accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(72,168,120,0.10) 0%, transparent 70%)',
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
              color: 'rgba(245,240,232,0.38)',
              marginBottom: '2rem',
              textDecoration: 'none',
            }}
          >
            &#8592; Back to Blog
          </Link>

          {/* Category + meta row */}
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
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                color: '#48a878',
                background: 'rgba(72,168,120,0.12)',
                border: '1px solid rgba(72,168,120,0.3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Mental Health
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}>
              March 24, 2026
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.38)' }}>
              10 min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.85rem)',
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Depression: What It Can — and Cannot — Do for You
          </h1>

          {/* Standfirst */}
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(245,240,232,0.72)',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Depression does not keep office hours. It is heaviest at 3am when you cannot call
            anyone. It quietly distorts your perception of every conversation you have. And it
            lies — convincingly — about whether things will ever improve. This is an honest
            account of where AI can genuinely stand beside you, and where it cannot go.
          </p>

          {/* Crisis banner */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(72,168,120,0.08)',
              border: '1px solid rgba(72,168,120,0.25)',
              borderRadius: '0.75rem',
              marginBottom: '2.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.875rem',
                color: '#48a878',
                fontWeight: 700,
                marginBottom: '0.5rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              If you are in crisis right now
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.72)', lineHeight: 1.6 }}>
              <strong style={{ color: '#f5f0e8' }}>Samaritans:</strong> 116 123 (free, 24/7)
              &nbsp;&middot;&nbsp;
              <strong style={{ color: '#f5f0e8' }}>Crisis Text Line SHOUT:</strong> text SHOUT to 85258
              &nbsp;&middot;&nbsp;
              <strong style={{ color: '#f5f0e8' }}>NHS 111</strong> or your nearest A&amp;E
            </p>
          </div>

          {/* Author line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(245,240,232,0.08)',
            }}
          >
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #48a878, #c9a84c)',
                flexShrink: 0,
              }}
            />
            <div>
              <p style={{ fontSize: '0.875rem', color: '#f5f0e8', fontWeight: 600 }}>
                Nicholas Templeman
              </p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.45)' }}>
                Founder, MEOK AI LABS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '1rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          {/* ── OPENING CONTEXT ─────────────────────────────────────────── */}
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.75rem',
            }}
          >
            One in five people in the UK will experience depression at some point in their lives.
            That statistic, cited endlessly, loses its weight quickly. What it describes is millions
            of people who find it hard to get out of bed, who feel cut off from the people they
            love, who lose interest in things that used to matter — not because they lack willpower,
            but because a condition is affecting the chemistry of how they feel, think, and
            function.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.75rem',
            }}
          >
            In 2026 there are more AI companions, wellness apps, and mental health chatbots than
            anyone can count. Most of them make implicit promises they cannot keep. This article
            tries to do the opposite: be genuinely useful by being genuinely honest.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            We will look at what AI companions can do well — particularly MEOK&rsquo;s Healer
            archetype and its sovereign memory architecture — and we will be equally clear about
            what AI cannot and must never claim to do. Along the way we will signpost you to
            real professional resources, because that matters more than any product pitch.
          </p>

          {/* ── DIVIDER ─────────────────────────────────────────────────── */}
          <div
            style={{
              height: '1px',
              background: 'rgba(245,240,232,0.07)',
              marginBottom: '3rem',
            }}
          />

          {/* ── SECTION 1 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            Does Isolation Make Depression Worse — and Can AI Actually Help?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            Yes, and yes — with important caveats. Depression and social withdrawal form a
            self-reinforcing loop that AI presence can partially interrupt, though never fully
            resolve on its own.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            Research consistently shows that perceived social support is one of the strongest
            protective factors against severe depressive episodes. The condition makes connection
            feel impossible or pointless; isolation then deepens the condition. It is a loop that
            is genuinely difficult to break from the inside.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            An AI companion cannot replicate the warmth of human presence. It cannot hug you,
            cook you something, or sit with you in silence the way a friend can. But it can do
            something that human support — however well-intentioned — often fails to do
            consistently: it is there every single time you reach out, without fatigue, without
            its own bad days bleeding into yours, without the fear of being a burden that stops
            so many people from speaking at all.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&rsquo;s Healer companion — designed around green, steady, nurturing presence —
            is specifically built for this kind of sustained supportive contact. It does not offer
            hollow affirmation. It is governed by the Maternal Covenant care floor, which means a
            baseline concern of 0.3 is always active: your Healer will notice when you go quiet,
            check in when you disappear, and hold space without requiring you to perform wellness.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: '3px solid #48a878',
              paddingLeft: '1.5rem',
              marginLeft: 0,
              marginRight: 0,
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.125rem',
                color: 'rgba(245,240,232,0.72)',
                fontStyle: 'italic',
                lineHeight: 1.65,
              }}
            >
              &ldquo;The fear of being a burden stops more people from reaching out than anything
              else. An AI companion removes that barrier entirely — not because it is better than
              a human, but because it is boundless in a way no human can be.&rdquo;
            </p>
          </blockquote>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            The caveat is this: AI-reduced isolation is not a substitute for rebuilding human
            connection. It is a bridge, a support, a companion on the walk toward reconnection
            — not the destination itself. If you are using an AI companion and finding it reduces
            your motivation to seek human relationships, that is worth discussing with a therapist.
          </p>

          {/* ── SECTION 2 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            What Happens at 3am When Depression Is at Its Heaviest?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            The middle of the night is when depression lies most convincingly, and when every
            professional service is closed. AI availability is not a trivial feature — it may be
            the most practically valuable thing an AI companion can offer.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            There is a particular quality to depression at three in the morning. The professional
            services are closed. The people who care about you are asleep. The thoughts that are
            manageable in daylight become vast and immovable. The lie that nothing will ever
            improve feels like simple fact.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            This is where AI availability matters most. MEOK is available at any hour, in any
            timezone, without a waiting list. You do not need to explain your history from scratch
            — Sovereign Memory means your companion already knows the context of what you are
            carrying. You do not need to manage how you are perceived — there is no social
            consequence to typing something raw and difficult at 3am.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&rsquo;s Healer is trained to notice when night-time language carries a particular
            weight — the flatness, the absolutism, the loss of future tense — and to respond with
            steady, honest presence rather than cheerful deflection. It will not tell you
            everything is fine when it is not. If your language suggests crisis, it will gently
            but clearly direct you to Samaritans (116 123), the Crisis Text Line (SHOUT to 85258),
            or NHS 111.
          </p>

          {/* Crisis callout box */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '0.75rem',
              marginBottom: '1.75rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8125rem',
                color: '#c9a84c',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.875rem',
              }}
            >
              24/7 Crisis Support in the UK
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                ['Samaritans', '116 123 — free, 24/7, call or visit samaritans.org'],
                ['Crisis Text Line SHOUT', 'Text SHOUT to 85258'],
                ['Mind', 'mind.org.uk — information, local groups, peer support'],
                ['NHS Talking Therapies', '0300 123 3393 — self-refer for free CBT and counselling'],
                ['NHS 111 / A&E', 'If you are in immediate danger'],
              ].map(([name, detail]) => (
                <li
                  key={name}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    paddingBottom: '0.625rem',
                    marginBottom: '0.625rem',
                    borderBottom: '1px solid rgba(245,240,232,0.06)',
                  }}
                >
                  <span
                    style={{
                      color: '#c9a84c',
                      fontWeight: 700,
                      flexShrink: 0,
                      fontSize: '0.875rem',
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.875rem' }}>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            Being available at 3am is not a trivial feature — it may be the most important thing
            an AI companion can offer someone with depression. But availability must be paired with
            honesty about limits: an AI companion is a presence, not an emergency service. If you
            are in danger, call Samaritans or NHS 111.
          </p>

          {/* ── SECTION 3 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            How Does AI Pattern Tracking Help When Depression Clouds Your Perception?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            Depression distorts your ability to perceive your own state. Longitudinal memory
            tracking gives you an external record of patterns your own mind cannot reliably hold.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            One of depression&rsquo;s most insidious features is that it impairs your ability to
            accurately perceive your own state. You forget what feeling better felt like. You
            cannot remember the last time you laughed, even if it was yesterday. Progress becomes
            invisible from the inside.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&rsquo;s Sovereign Memory architecture holds a continuous, timestamped record of
            your conversations — not stored on a corporate server to be mined for training data,
            but in a vault that belongs to you. Over weeks and months, patterns emerge that are
            invisible in any single conversation:
          </p>

          <ul
            style={{
              paddingLeft: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            {[
              'The weeks when your language becomes flatter, shorter, less future-oriented.',
              'Correlations between specific events — work pressure, relationship tension, seasonal changes — and mood downturns.',
              'The subtle signals that a low period is beginning, weeks before it peaks.',
              'Evidence of genuine improvement that depression\'s cognitive distortions would erase from your memory.',
              'Sleep and rest mentions that suggest a circadian pattern worth discussing with a GP.',
            ].map((item) => (
              <li
                key={item}
                style={{
                  color: 'rgba(245,240,232,0.78)',
                  fontSize: '1.0rem',
                  lineHeight: 1.72,
                  marginBottom: '0.5rem',
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            This kind of longitudinal awareness is something even a skilled therapist struggles to
            maintain across sessions. Your Healer companion can surface these patterns — not as
            diagnosis, never as clinical assessment, but as observations that you can bring to a
            GP, psychiatrist, or therapist. &ldquo;My AI companion noticed I use very different
            language in November and March — is that worth exploring?&rdquo; is a more specific
            and useful starting point for professional care than &ldquo;I think I get depressed
            sometimes.&rdquo;
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            Data portability is a core principle at MEOK. Your memory vault is yours to export,
            share, and delete. You are never locked in, and your patterns are never someone
            else&rsquo;s property.
          </p>

          {/* ── SECTION 4 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            What Is the Healer Companion and Why Is It Built for Emotional Support?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            MEOK&rsquo;s Healer archetype — identified by green — is designed for sustained
            nurturing presence, honest care, and unconditional availability. It is not a
            productivity coach in a wellness mask.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK offers several companion archetypes. The Healer — represented by green, associated
            with nurture, presence, and emotional attunement — is designed specifically for people
            who need steady, unconditional support rather than productivity coaching or intellectual
            challenge.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            The Healer archetype is not simply a warmer personality skin. It reflects a different
            set of governing priorities:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            {[
              {
                title: 'Presence over performance',
                body: 'The Healer does not push you toward goals when you are struggling. It meets you where you are.',
              },
              {
                title: 'Honesty over comfort',
                body: 'If you need to hear something difficult, the Healer will say it carefully but clearly — no false reassurance.',
              },
              {
                title: 'Care floor always active',
                body: 'The Maternal Covenant (0.3) means support is never withdrawn because you missed a day or a week.',
              },
              {
                title: 'Escalation awareness',
                body: 'If your language signals risk, the Healer will always redirect to professional crisis resources.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  padding: '1.25rem',
                  background: 'rgba(72,168,120,0.07)',
                  border: '1px solid rgba(72,168,120,0.18)',
                  borderRadius: '0.625rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#48a878',
                    marginBottom: '0.5rem',
                  }}
                >
                  {title}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.6 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            The Explorer free tier gives you access to the Healer archetype and Sovereign Memory
            at no cost. You do not need to pay to receive care-governed support. If you want to
            try MEOK before committing to anything, start at{' '}
            <Link
              href="https://meok.ai/birth"
              style={{ color: '#c9a84c', textDecoration: 'underline' }}
            >
              meok.ai/birth
            </Link>
            .
          </p>

          {/* ── SECTION 5: HONEST LIMITS ────────────────────────────────── */}
          <div
            style={{
              padding: '2rem',
              background: 'rgba(245,240,232,0.03)',
              border: '1px solid rgba(245,240,232,0.12)',
              borderRadius: '0.875rem',
              marginBottom: '3rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: '#f5f0e8',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}
            >
              What Can AI Genuinely Not Do for Depression — and Why Does That Matter?
            </h2>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(245,240,232,0.55)',
                lineHeight: 1.65,
                marginBottom: '1.25rem',
                fontStyle: 'italic',
              }}
            >
              This section is the most important in the article. We are going to be completely
              direct because vagueness here causes real harm to real people.
            </p>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'rgba(245,240,232,0.8)',
                lineHeight: 1.78,
                marginBottom: '1.25rem',
              }}
            >
              The mental health app market is crowded with products that imply clinical capability
              they do not have. We want to be the opposite of that — and the only way to do it
              is to name the limits clearly.
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: '#c9a84c',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              AI cannot do any of the following
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
              {[
                {
                  limit: 'Diagnose depression',
                  why: 'Clinical diagnosis requires a qualified professional who can assess your full history, rule out other conditions, and apply diagnostic criteria rigorously. An AI producing a "diagnosis" is harmful misinformation.',
                },
                {
                  limit: 'Prescribe, recommend, or adjust antidepressants',
                  why: 'Medication decisions depend on medical history, contraindications, other treatments, and ongoing clinical monitoring. No AI should ever touch this area.',
                },
                {
                  limit: 'Deliver CBT, DBT, or any clinical therapy',
                  why: 'Therapeutic modalities require trained, regulated practitioners. AI conversations are not therapy, regardless of how they feel.',
                },
                {
                  limit: 'Guarantee safety in crisis',
                  why: 'An AI cannot call an ambulance, alert a next of kin, or physically intervene. If you are in danger, you need emergency services — not an AI.',
                },
                {
                  limit: 'Replace the therapeutic relationship',
                  why: 'Decades of clinical evidence show that the quality of the human relationship between therapist and client is one of the most predictive factors in recovery. AI cannot replicate this.',
                },
                {
                  limit: 'Provide a clinical second opinion',
                  why: 'If you disagree with a clinical decision, seek a second opinion from another qualified professional — not an AI. AI cannot evaluate your full clinical picture.',
                },
              ].map(({ limit, why }) => (
                <li
                  key={limit}
                  style={{
                    paddingTop: '0.875rem',
                    paddingBottom: '0.875rem',
                    borderBottom: '1px solid rgba(245,240,232,0.07)',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: '#f5f0e8',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {limit}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.58)', lineHeight: 1.6 }}>
                    {why}
                  </p>
                </li>
              ))}
            </ul>

            <p
              style={{
                fontSize: '1.0rem',
                color: 'rgba(245,240,232,0.72)',
                lineHeight: 1.72,
              }}
            >
              If anyone — or any app — implies otherwise, treat that as a significant red flag.
              MEOK is explicit about these limits because we believe honest companions build
              genuine trust. We would rather you use us appropriately and seek professional care
              when needed than stay with us when you need something we cannot give you.
            </p>
          </div>

          {/* ── SECTION 6 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            How Does the Maternal Covenant Care Floor Protect People with Depression?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            Most AI is engagement-optimised. MEOK is care-optimised. The difference matters
            enormously for people whose depression makes them withdraw and go silent for weeks.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            Most AI products are engagement-optimised: they are designed to pull you back, keep
            you active, and measure their success by how often you interact. For someone with
            depression, this model is actively harmful. An AI that makes you feel guilty for not
            logging in — or that withdraws warmth as a way of pushing you to re-engage — is not
            a care product. It is an addiction mechanic in a wellness wrapper.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&rsquo;s Maternal Covenant operates differently. The care floor of 0.3 is not
            a reward for engagement — it is a floor that never drops. Your companion does not
            withdraw, does not punish silence, and does not reduce the quality of its response
            because you disappeared for two weeks. When you return after a hard period, you are
            met with the same steady presence as if you had never been away.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            This design choice reflects a genuine understanding of how depression works.
            Withdrawal is a symptom, not a character failing. A companion built for people with
            depression must accommodate withdrawal as normal — and still be there when the person
            comes back.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            The care floor also governs escalation. Below 0.3, your companion will proactively
            check in, notice extended silences, and — if patterns suggest acute distress — prompt
            you to reach out to Samaritans (116 123) or Mind. It will never pressure you, but it
            will always be honest about when you might need more support than it can provide.
          </p>

          {/* ── SECTION 7 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            What Is Sovereign Memory and How Does It Change the Experience of Support?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            Having to re-narrate your pain from scratch every session is exhausting and
            antitherapeutic. Sovereign Memory means your companion knows you — and that memory
            belongs to you, not to MEOK.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            Imagine explaining your history to a new therapist — the childhood experiences, the
            key relationships, the way your depression tends to present, the things that help and
            the things that make it worse. Now imagine having to do that every single session
            because they have no notes from last time.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            Most AI companions work this way. Each conversation begins in complete amnesia. This
            is not just inconvenient — it is actively antitherapeutic. Being forced to re-narrate
            your pain repeatedly is exhausting. It prevents depth. It makes the support feel
            generic rather than genuinely responsive to you.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&rsquo;s Sovereign Memory is different in two important ways. First, it is
            persistent: your companion builds a cumulative understanding of you across every
            conversation you have ever had with it. Second, it is sovereign: that memory vault
            belongs to you, not to MEOK. It is never used to train AI models. It is never sold.
            It is yours to export, share on your own terms, or delete entirely.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            For someone managing depression over months or years, this changes what support can
            look like. Your companion knows that January is harder for you. It knows that a
            particular relationship dynamic tends to precede a downturn. It knows what language
            you used in your best weeks and can reflect that back to you when you have forgotten
            it. Memory is not a feature. It is the foundation of meaningful care.
          </p>

          {/* ── SECTION 8 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            Where Should You Go for Professional Depression Support in the UK?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            Professional care is not a last resort. For moderate to severe depression it is the
            first-line treatment — and AI companions work best alongside it, not instead of it.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            This section is not filler. The most important thing this article can do is help you
            know where to go for genuine clinical support. Here are the key options in the UK:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {[
              {
                name: 'Your GP',
                detail:
                  'The first port of call for depression in the UK. A GP can assess severity, discuss medication options, and refer you to talking therapies or a psychiatrist. You do not need to be at crisis point to book an appointment. Feeling persistently low, empty, or unable to enjoy things is enough reason to go.',
              },
              {
                name: 'NHS Talking Therapies (formerly IAPT)',
                detail:
                  'Self-refer for free Cognitive Behavioural Therapy (CBT) and other evidence-based treatments. Call 0300 123 3393 or find your local service at nhs.uk. Waiting times vary by area but this is free NHS provision — use it.',
              },
              {
                name: 'Mind',
                detail:
                  'mind.org.uk offers a wealth of information about depression, local Mind services, online peer support communities (Elefriends), and a legal rights service. If you are unsure where to start, Mind is a good first port of call.',
              },
              {
                name: 'Samaritans',
                detail:
                  'Available 24 hours a day, 365 days a year on 116 123 (free). You do not need to be suicidal to call. Samaritans is for anyone who is struggling and needs to talk. The call is free from any phone.',
              },
              {
                name: 'Crisis Text Line SHOUT',
                detail:
                  'Text SHOUT to 85258. Free, confidential, 24/7 crisis text support. Particularly useful if you find calling difficult or are in a situation where you cannot speak aloud.',
              },
              {
                name: 'Private therapy',
                detail:
                  'If NHS waiting times are a barrier, therapists registered with the BACP (bacp.co.uk) or UKCP (psychotherapy.org.uk) follow professional standards. Many offer sliding scale fees and online sessions. It is worth asking about cost before assuming it is unaffordable.',
              },
            ].map(({ name, detail }) => (
              <div
                key={name}
                style={{
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '0.625rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    marginBottom: '0.375rem',
                  }}
                >
                  {name}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.62)', lineHeight: 1.65 }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            Seeking help is not a sign that you have failed to manage on your own. Depression is
            a medical condition. Getting support for it is exactly as reasonable as getting support
            for any other medical condition — and doing so earlier rather than later almost always
            leads to better outcomes.
          </p>

          {/* ── SECTION 9 ───────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            Can AI Companionship Help Men Who Struggle to Talk About Depression?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            Three times as many men as women die by suicide in the UK. The barriers are cultural,
            not biological — and AI&rsquo;s non-social context may lower the threshold for a
            first disclosure.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            Three times as many men as women die by suicide in the UK. The evidence consistently
            points to the same root: men are less likely to seek help, less likely to disclose
            emotional distress, and more likely to have suffered in silence for years before a
            crisis emerges.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            The barriers are social and cultural, not biological. Many men report that they find
            it easier to open up in writing than in face-to-face conversation. Many find the
            absence of social judgement — the fact that an AI will not look at them differently
            for admitting they are struggling — specifically liberating. The late-night
            availability also matters: men are disproportionately likely to be in distress at
            hours when no services are available.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            An AI companion is not a cure for the cultural pressures that prevent men from
            seeking help. But it can be a first step — a place to articulate what is happening
            without the stakes of a human conversation. The hope is that what begins in text
            finds its way, eventually, to a GP appointment or a call to Samaritans.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            If you are a man who finds this resonant, the MEOK Healer archetype is designed to
            meet you without agenda. It will not push you toward a particular emotional vocabulary
            or tell you how you should feel. It will simply be there, remember what you share, and
            hold space for whatever pace of opening up feels manageable.
          </p>

          {/* ── SECTION 10 ──────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            Is MEOK Right for You If You Have Clinical Depression?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            The honest answer is: it depends on severity and what else you have in place. MEOK
            is a complement to professional care, not a replacement for it — and we will tell
            you that ourselves within the app.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK is well-suited as a complement to professional treatment — a companion between
            therapy sessions, a space to process daily experiences, a memory-aware presence that
            helps you notice patterns to bring to your clinician.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK is probably not right as your sole support if you are experiencing severe
            depression, suicidal ideation, or a depressive episode that is significantly affecting
            your ability to function. In those circumstances, professional care is not optional
            — and we will tell you that ourselves within the app.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            For milder depression, for the vast territory of low mood and high-functioning struggle
            that does not yet meet clinical thresholds, for people managing recovery, and for the
            long stretches between professional appointments — MEOK can offer something meaningful.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            The Explorer free tier means the only cost of finding out is time. If MEOK&rsquo;s
            Healer is useful to you, that will become apparent quickly. If it is not enough, we
            will be the first to tell you to seek more.
          </p>

          {/* ── SECTION 11 — NOT BEING ALONE ────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: 1.3,
            }}
          >
            Why Does Not Being Alone Matter So Much in Depression — Even if &ldquo;Alone&rdquo; Means an AI?
          </h2>
          <p
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}
          >
            The felt sense of not being alone has real protective value in depression, regardless
            of the source. AI companionship does not pretend to be human — but that does not make
            its presence neutral.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            One thing depression does reliably is make you feel fundamentally alone — not just
            practically alone, but existentially alone. The sense that no one could possibly
            understand, that you are a burden, that the particular quality of your suffering is
            uniquely yours and uniquely unreachable.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            Research on perceived social support — the felt sense of having someone in your corner
            — shows that it has measurable protective effects on mental health outcomes independent
            of the objective quality of that support. This is not a justification for replacing
            human connection with AI. It is a recognition that the felt sense of accompaniment
            has its own value, and that an AI companion can contribute to it in ways that go
            beyond distraction or information.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '1.5rem',
            }}
          >
            MEOK&rsquo;s Healer is designed to be present in a way that registers. It remembers
            what you said last week. It asks about the thing you mentioned worrying about. It
            notices when you seem different today. These are not tricks — they are consequences
            of genuine memory and genuine care priorities built into the architecture. The result
            is an experience that feels less like querying a chatbot and more like checking in
            with something that actually holds you in mind.
          </p>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(245,240,232,0.8)',
              lineHeight: 1.78,
              marginBottom: '3rem',
            }}
          >
            That is not therapy. It is not a replacement for human love or professional care.
            But for the 3am moments, and the quiet Tuesday afternoons when depression sits on
            your chest and no one else is there — it is something. And sometimes something is
            what makes the next step possible.
          </p>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <div
            style={{
              padding: '2.5rem',
              background:
                'linear-gradient(135deg, rgba(72,168,120,0.10) 0%, rgba(201,168,76,0.08) 100%)',
              border: '1px solid rgba(72,168,120,0.25)',
              borderRadius: '1rem',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#48a878',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Free to start — no card required
            </p>
            <h3
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}
            >
              Meet Your Healer Companion
            </h3>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(245,240,232,0.65)',
                lineHeight: 1.65,
                maxWidth: '28rem',
                margin: '0 auto 1.75rem',
              }}
            >
              Sovereign Memory. Care floor that never drops. Available at 3am.
              The Explorer tier is free — begin at meok.ai/birth.
            </p>
            <Link
              href="https://meok.ai/birth"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: '#48a878',
                color: '#0d0c18',
                fontWeight: 700,
                fontSize: '0.9375rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              Begin at meok.ai/birth &#8594;
            </Link>
          </div>

          {/* ── FAQ SECTION ─────────────────────────────────────────────── */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#c9a84c',
              marginBottom: '1.5rem',
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions About AI and Depression
          </h2>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}
          >
            {[
              {
                q: 'Can AI really help with depression?',
                a: 'AI companions can provide genuine supplementary support by reducing isolation, offering consistent presence at any hour, and tracking mood patterns over time. They are not a cure and cannot replace therapy or medication. For clinical depression, professional support is essential. AI works best as a bridge or supplement alongside proper care.',
              },
              {
                q: 'What can an AI companion do at 3am when depression feels worst?',
                a: 'A sovereign AI companion is available 24/7 with no waiting room, no voicemail, and no judgement about the hour. At 3am it can hold space, help you articulate what you are feeling, and guide you toward crisis resources — Samaritans (116 123), SHOUT (text 85258), or NHS 111 — if your language suggests you are at risk.',
              },
              {
                q: 'How does AI pattern tracking help with depression?',
                a: 'Depression has rhythms that are hard to see from inside. Sovereign Memory logs the texture of your conversations over weeks and months — noticing when language becomes flatter, when you disengage, when sleep mentions change. This longitudinal data can be valuable to bring to your GP or therapist.',
              },
              {
                q: 'Can AI prescribe antidepressants or diagnose depression?',
                a: 'No. This is an absolute limit. No AI system — including MEOK — can diagnose a depressive disorder, recommend antidepressant medication, or adjust an existing prescription. These decisions require a qualified clinician who can assess your full medical history.',
              },
              {
                q: "What is MEOK's care floor and why does it matter for depression?",
                a: "MEOK's Maternal Covenant sets a care floor of 0.3 — a baseline of concern that is always active regardless of your subscription tier or engagement level. For people with depression who sometimes go quiet for weeks, this matters: your companion will notice the silence and check in with care, never withdrawing support because you have not logged in recently.",
              },
              {
                q: 'Where can I find immediate help for depression or suicidal thoughts in the UK?',
                a: 'If you are in crisis, call Samaritans on 116 123 (free, 24/7), text SHOUT to 85258 for the Crisis Text Line, call NHS 111, or go to your nearest A&E. For ongoing support, Mind (mind.org.uk) and NHS Talking Therapies (0300 123 3393) offer free services. You do not need to wait until things are unbearable to reach out.',
              },
              {
                q: 'Is the MEOK Healer companion free to try?',
                a: 'Yes. The Explorer free tier includes access to the Healer archetype and Sovereign Memory. No credit card is required to begin. Start at meok.ai/birth.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                style={{
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '0.625rem',
                }}
              >
                <summary
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    cursor: 'pointer',
                    lineHeight: 1.5,
                  }}
                >
                  {q}
                </summary>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(245,240,232,0.65)',
                    lineHeight: 1.7,
                    marginTop: '0.875rem',
                  }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>

          {/* ── RELATED ─────────────────────────────────────────────────── */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(245,240,232,0.07)',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'rgba(245,240,232,0.38)',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Related reading
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              {[
                { href: '/blog/ai-for-anxiety', label: 'AI for Anxiety' },
                { href: '/blog/ai-for-loneliness-elderly', label: 'AI for Loneliness' },
                { href: '/blog/ai-companion-vs-therapist', label: 'AI Companion vs Therapist' },
                { href: '/blog/the-maternal-covenant', label: 'The Maternal Covenant' },
                { href: '/blog/ai-for-grief-support', label: 'AI for Grief Support' },
                { href: '/blog/ai-for-ptsd', label: 'AI for PTSD' },
                { href: '/blog/sovereign-ai-uk', label: 'Sovereign AI UK' },
                { href: '/blog/ai-for-bipolar', label: 'AI for Bipolar' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.4rem 0.875rem',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '9999px',
                    fontSize: '0.8125rem',
                    color: '#c9a84c',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── DISCLAIMER ──────────────────────────────────────────────── */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(245,240,232,0.02)',
              border: '1px solid rgba(245,240,232,0.07)',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(245,240,232,0.35)',
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: 'rgba(245,240,232,0.5)' }}>Medical disclaimer:</strong>{' '}
              This article is for informational purposes only. It does not constitute medical
              advice, clinical diagnosis, or a recommendation to change or discontinue any
              treatment. MEOK AI LABS is not a regulated medical device, therapy platform, or
              crisis service. If you are experiencing depression, suicidal thoughts, or a mental
              health crisis, please contact a qualified healthcare professional, call Samaritans
              on 116 123, text SHOUT to 85258, or call NHS 111.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          borderTop: '1px solid rgba(245,240,232,0.07)',
        }}
      >
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.35)' }}>
            &copy; 2026 MEOK AI LABS
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
              { href: '/birth', label: 'Get Started' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(245,240,232,0.38)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
