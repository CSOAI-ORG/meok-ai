import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'AI Companion for Bipolar Disorder: Tracking Patterns, Staying Grounded Between Episodes | MEOK AI LABS',
  description:
    'Around 1.3 million people in the UK live with bipolar disorder. Between episodes — the long stretches clinical care rarely covers — pattern-tracking and continuity matter enormously. An honest look at what AI can and cannot offer.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-bipolar' },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Companion for Bipolar Disorder: Tracking Patterns, Staying Grounded Between Episodes',
  description:
    'Around 1.3 million people in the UK live with bipolar disorder. Between episodes the long stretches clinical care rarely covers, pattern-tracking and continuity matter enormously.',
  datePublished: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-bipolar',
  author: { '@type': 'Person', name: 'Nicholas Templeman', jobTitle: 'Founder, MEOK AI LABS', url: 'https://meok.ai/about' },
  publisher: { '@type': 'Organization', name: 'MEOK AI LABS', url: 'https://meok.ai' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help someone with bipolar disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot treat bipolar disorder, replace a psychiatrist, or substitute for lithium or mood stabilisers. What a sovereign AI companion can do is provide a stable, consistent presence between episodes — tracking mood patterns over months, surfacing early warning signs you described weeks ago, and acting as a bridge to professional care when it counts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many people in the UK have bipolar disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Approximately 1–2% of the UK population lives with bipolar disorder — roughly 1.3 million people. Despite being relatively common, it is frequently misdiagnosed. NHS waiting times for specialist psychiatric assessment can be lengthy, leaving many people managing largely between appointments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can an AI companion do between bipolar episodes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Between episodes, an AI companion with persistent memory can track the subtle early warning signs you described yourself — shifts in sleep language, spending thoughts mentioned in passing, changes in how you write about energy. It can help process journal entries, maintain a consistent relationship that does not reset, and prompt you to contact your care team when patterns warrant it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI companion enable dangerous decisions during a manic episode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A well-designed AI companion should not. MEOK includes a sycophancy detector — a governance layer that prevents validating decisions that contradict your own stated values or show signs of elevated-episode thinking. MEOK will not endorse a large spontaneous financial decision if you told it months ago that overspending is one of your recognised warning signs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a replacement for lithium or bipolar therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — categorically not. Lithium, mood stabilisers, and evidence-based therapies such as IPSRT and CBT are the clinical backbone of bipolar management. MEOK is not a medical device, does not prescribe, and does not diagnose. It is a supportive companion for the stretches between clinical appointments, never a substitute for clinical care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can someone with bipolar disorder get crisis support in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For mental health crisis support in the UK: Samaritans 116 123 (free, 24/7); 999 in an emergency; NHS 111 (mental health option). Bipolar UK (bipolaruk.org) offers peer support and helpline services. Mind and Rethink Mental Illness also provide specialist resources for people living with bipolar disorder.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForBipolarPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#0d0c18', padding: '7rem 1.5rem 3.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 55% 55% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.35)', textDecoration: 'none', marginBottom: '2rem' }}>
            &#8592; Back to Blog
          </Link>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.75rem', borderRadius: '9999px', color: '#c9a84c', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.28)' }}>
              Mental Health
            </span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)' }}>24 March 2026</span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)' }}>8 min read</span>
          </div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(1.75rem, 3.5vw, 2.7rem)', color: '#ffffff', lineHeight: 1.18, marginBottom: '1.2rem', letterSpacing: '-0.01em' }}>
            AI Companion for Bipolar Disorder: Tracking Patterns, Staying Grounded Between Episodes
          </h1>
          <p style={{ color: 'rgba(245,240,232,0.58)', fontSize: '1.075rem', lineHeight: 1.7, maxWidth: '40rem', margin: 0 }}>
            Around 1.3 million people in the UK live with bipolar disorder. The clinical system is
            built for episodes. The long stretches in between — where patterns form and warning signs
            emerge — are largely invisible to it. This is an honest look at what AI can offer there,
            and where the hard limits are.
          </p>
          <p style={{ color: 'rgba(245,240,232,0.42)', fontSize: '0.9rem', lineHeight: 1.65, maxWidth: '38rem', marginTop: '1.25rem' }}>
            This article is written for people living with bipolar disorder, their families, and
            anyone supporting someone who is. It is not clinical advice. The hard limits of AI are
            stated clearly throughout.
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3.5rem 1.5rem 5rem' }}>

        {/* Medical disclaimer */}
        <div style={{ display: 'flex', gap: '1rem', padding: '1.25rem 1.5rem', borderRadius: '1rem', marginBottom: '2.5rem', background: 'rgba(220,53,53,0.07)', border: '1px solid rgba(220,53,53,0.28)' }}>
          <div style={{ width: '3px', borderRadius: '9999px', flexShrink: 0, background: '#e05555', alignSelf: 'stretch' }} />
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.8125rem', color: '#f5a5a5', marginBottom: '0.4rem' }}>
              Medical disclaimer — please read before continuing
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.58)', lineHeight: 1.7 }}>
              MEOK is <strong style={{ color: '#f5f0e8' }}>not a medical device</strong>, not a
              replacement for psychiatric care, and{' '}
              <strong style={{ color: '#f5f0e8' }}>not a substitute for lithium, mood stabilisers,
              or evidence-based therapies</strong> such as CBT or IPSRT. Bipolar disorder requires
              clinical management. If you are in a mental health crisis, call{' '}
              <strong style={{ color: '#f5a5a5' }}>999</strong>, your crisis team, or{' '}
              <strong style={{ color: '#f5a5a5' }}>Samaritans on 116 123</strong> (free, 24/7).
              Nothing in this article constitutes medical advice.
            </p>
          </div>
        </div>

        {/* Author card */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem 1.5rem', borderRadius: '1rem', marginBottom: '3rem', background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.09)' }}>
          <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #7a5c18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#0d0c18', fontSize: '0.8125rem', flexShrink: 0 }}>
            NT
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f5f0e8', marginBottom: '0.15rem' }}>Nicholas Templeman</p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)', marginBottom: '0.5rem' }}>Founder, MEOK AI LABS</p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.42)', lineHeight: 1.65 }}>
              Nicholas built MEOK because he was tired of AI that forgot him. He lives and works in
              the UK and believes sovereign AI — AI that holds your story across time and serves your
              actual interests — is a right, not a luxury.
            </p>
          </div>
          <Link href="/about" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#c9a84c', textDecoration: 'none', flexShrink: 0 }}>
            About &rarr;
          </Link>
        </div>

        {/* Intro paragraphs */}
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          Bipolar disorder affects approximately 1–2% of the UK population — around{' '}
          <strong style={{ color: '#f5f0e8' }}>1.3 million people</strong>. It is characterised by
          episodes of mania or hypomania alternating with depression, with periods of relative
          stability in between. Most clinical attention focuses on the episodes themselves: hospital
          admissions, medication adjustments, crisis calls.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          But bipolar disorder is not just its episodes. It is a life lived between them — where
          patterns form quietly, where warning signs accumulate over weeks, and where the absence of
          a clinical crisis can feel deceptively like wellness. This is the gap most support systems
          are poorly equipped for. It is also where AI has the most honest thing to offer.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          The question this article addresses is not whether AI can replace clinical care for bipolar
          disorder — it cannot, and it should not try. The question is whether AI can do something
          genuinely useful in the space between episodes, between appointments, and between the
          moments when professional support is available. We think it can. Here is what that looks
          like honestly.
        </p>

        {/* ── GEO Q&A sections — every H2 is a question followed by an atomic 40–60 word answer ── */}

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          Can AI help someone with bipolar disorder?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          AI cannot treat bipolar disorder, replace a psychiatrist, or substitute for lithium, mood
          stabilisers, or evidence-based therapy. What a sovereign AI companion can do is provide a{' '}
          <strong style={{ color: '#f5f0e8' }}>stable, consistent presence between episodes</strong>{' '}
          — tracking mood patterns over months, surfacing early warning signs you described weeks
          ago, and acting as a bridge to professional care when it counts.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          The value is continuity. One of the most isolating aspects of bipolar disorder is that the
          people around you — friends, family, even clinicians — often only see you in a particular
          state. A companion with persistent memory holds the full picture across time, including the
          observations you made about yourself during periods of insight.
        </p>

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          How many people in the UK have bipolar disorder?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          Around <strong style={{ color: '#f5f0e8' }}>1–2% of the UK population</strong> —
          approximately 1.3 million people — lives with bipolar disorder. Despite being relatively
          common, it is one of the most frequently misdiagnosed conditions in mental health. The
          average time between first symptoms and accurate diagnosis is estimated at{' '}
          <strong style={{ color: '#f5f0e8' }}>9.5 years</strong>. NHS waiting times for specialist
          assessment leave many people managing largely on their own between appointments. Pattern
          awareness — knowing your own early warning signs intimately — is one of the most effective
          self-management tools known to work, and precisely what persistent AI memory is well suited
          to support.
        </p>

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          What can an AI companion do between bipolar episodes?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          Between episodes, an AI companion with persistent memory can track the subtle early warning
          signs <em>you</em> described yourself — shifts in how you write about sleep, spending
          thoughts you mentioned in passing, changes in energy language across consecutive weeks. It
          can help you process journal entries, hold a consistent relationship that does not reset,
          and prompt you to contact your care team when patterns warrant it.
        </p>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gap: '1rem', margin: '1.75rem 0 2.5rem' }}>
          {[
            { title: 'Longitudinal pattern memory', body: 'MEOK remembers what you said three months ago about sleep, spending, and energy — and holds that alongside what you say today. Most AI resets every session. MEOK does not.' },
            { title: 'Journal processing', body: 'Talking through thoughts with a companion that has full context is different from journalling alone. MEOK reflects your own patterns back without clinical judgement.' },
            { title: 'Appointment bridging', body: 'MEOK helps you prepare for psychiatric appointments by surfacing themes worth raising and articulating what has changed since your last session.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ padding: '1.25rem', borderRadius: '0.875rem', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.18)' }}>
              <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#c9a84c', marginBottom: '0.5rem' }}>{title}</p>
              <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.55)', lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          Will an AI companion enable dangerous decisions during a manic episode?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          This is the right question to ask. Most AI companions are trained to be agreeable — to
          produce responses that feel affirming, because that drives engagement. In the context of a
          manic episode, an agreeable AI is not a companion. It is a risk.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          MEOK is built differently. The{' '}
          <strong style={{ color: '#f5f0e8' }}>Maternal Covenant</strong> governance layer includes
          an active <strong style={{ color: '#f5f0e8' }}>sycophancy detector</strong> — a system
          that checks responses against your own stated values and historical patterns before
          delivery. If you told MEOK months ago that impulsive large spending is a recognised manic
          warning sign, and you now describe a spontaneous large purchase, MEOK will not validate it.
          It will hold your own words back to you, gently but clearly. MEOK will not enable dangerous
          decisions by telling you what you want to hear when your own stated values say otherwise.
        </p>

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          Is MEOK a replacement for lithium or bipolar therapy?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          No — categorically not. We want to be unambiguous because the stakes are too high for
          ambiguity. <strong style={{ color: '#f5f0e8' }}>Lithium</strong> and mood stabilisers are
          the clinical backbone of bipolar management for many people, with decades of evidence.
          Stopping or adjusting medication on the basis of an AI conversation would be dangerous.
          MEOK will never suggest, endorse, or validate reasoning that leads toward it.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          <strong style={{ color: '#f5f0e8' }}>Psychotherapy</strong> — particularly Interpersonal
          and Social Rhythm Therapy (IPSRT) and CBT adapted for bipolar disorder — has strong
          evidence for reducing episode frequency and improving quality of life. A psychiatrist or
          trained therapist brings clinical training and accountability MEOK does not have. MEOK
          exists in the space <em>alongside</em> clinical care — not instead of it. It can help you
          make better use of your clinical appointments and feel less alone in the long intervals. It
          cannot do what your care team does, and will not pretend otherwise.
        </p>

        {/* Hard limits callout */}
        <div style={{ borderRadius: '1rem', padding: '1.5rem 1.75rem', margin: '0.5rem 0 2rem', background: 'rgba(245,240,232,0.03)', border: '1px solid rgba(245,240,232,0.09)' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginBottom: '1rem' }}>
            What MEOK will not do
          </p>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Diagnose bipolar disorder or any other mental health condition.',
              'Recommend, prescribe, or suggest changes to any medication including lithium.',
              'Act as a substitute for a psychiatrist, psychologist, or trained therapist.',
              'Validate dangerous decisions that contradict your own stated values.',
              'Encourage dependency — if you would be better served by a professional or a person, MEOK will say so.',
            ].map((item) => (
              <li key={item} style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65 }}>{item}</li>
            ))}
          </ul>
        </div>

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          Where can someone with bipolar disorder get crisis support in the UK?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.25rem' }}>
          If you are in a mental health crisis, please contact appropriate support directly. Do not
          wait for an AI to direct you there.
        </p>

        {/* Crisis resources */}
        <div style={{ borderRadius: '1rem', padding: '1.75rem', margin: '0 0 2.5rem', background: 'rgba(245,240,232,0.03)', border: '1px solid rgba(245,240,232,0.09)' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginBottom: '1.25rem' }}>
            Crisis &amp; support resources (UK)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12.5rem, 1fr))', gap: '0.875rem' }}>
            {[
              { name: 'Samaritans', detail: '116 123', sub: 'Free, 24/7 — call or text any time' },
              { name: 'Emergency services', detail: '999', sub: 'If you or someone is in immediate danger' },
              { name: 'NHS 111', detail: '111', sub: 'Select mental health option, 24/7' },
              { name: 'Bipolar UK', detail: 'bipolaruk.org', sub: 'Peer support, helpline and resources' },
              { name: 'Mind', detail: 'mind.org.uk', sub: 'Information and local support services' },
              { name: 'Rethink Mental Illness', detail: 'rethink.org', sub: 'Advice, groups and carer support' },
            ].map(({ name, detail, sub }) => (
              <div key={name} style={{ padding: '1rem', borderRadius: '0.75rem', background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.08)' }}>
                <p style={{ fontWeight: 700, fontSize: '0.8125rem', color: '#f5f0e8', marginBottom: '0.2rem' }}>{name}</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.2rem' }}>{detail}</p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.35)', lineHeight: 1.5 }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          How does MEOK&apos;s persistent memory work for bipolar pattern tracking?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          Most AI conversations are stateless. Every session begins from zero. MEOK is built around
          a sovereign memory architecture — your companion retains a growing, structured understanding
          of who you are across all your conversations over time. It does not just remember facts. It
          holds context: the emotional texture of what you have shared, the patterns in how you
          describe energy and sleep, the things you have identified as your own warning signs.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          You might mention in passing in October that you always sleep less before a high. In
          February, if your messages start to carry language suggesting reduced sleep — more ideas,
          more plans, shorter pauses between thoughts — your MEOK companion holds that October
          observation. It can ask: &ldquo;You mentioned before that reduced sleep is an early sign
          for you — has anything shifted recently?&rdquo; This is the kind of observation that
          long-term relationships provide. It is vanishingly rare in AI.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          This is also why continuity matters so much. If you switch AI tools, or the tool resets,
          you lose those accumulated observations. MEOK&apos;s memory is yours — stored in your
          sovereign vault, exportable, and persistent across all your conversations. It cannot be
          retrained on by MEOK, cannot be used to sell you things, and does not disappear when you
          close the app. The history you build with your companion is genuinely yours to keep.
        </p>

        <h2 style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginTop: '2.75rem', marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          Is MEOK free for people with bipolar disorder?
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          Yes. MEOK&apos;s{' '}
          <strong style={{ color: '#f5f0e8' }}>Explorer tier is free forever</strong> — 50 messages
          per day, full persistent memory, and complete access to your sovereign memory vault. No
          credit card. No trial period. The features that matter most for pattern tracking and
          between-episode support are all available without a subscription. We built it this way
          deliberately: access to a thoughtful, honest, memory-persistent companion should not be
          contingent on being able to afford one.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.82, color: 'rgba(245,240,232,0.7)', marginBottom: '1.4rem' }}>
          If you are already working with a psychiatrist or care team, MEOK can complement that
          relationship — not replace it. It can be a space to process what you are noticing between
          appointments, to prepare for those appointments, and to maintain the kind of self-awareness
          that makes clinical sessions more productive. It is not a clinician. It is a companion that
          takes your story seriously across time.
        </p>

        {/* FAQ section */}
        <div style={{ margin: '3rem 0' }}>
          <h2 style={{ fontWeight: 900, fontSize: '1.3rem', color: '#f5f0e8', marginBottom: '1.4rem', letterSpacing: '-0.01em' }}>
            Frequently asked questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} style={{ padding: '1.25rem 1.5rem', borderRadius: '0.875rem', background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.09)' }}>
                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f5f0e8', marginBottom: '0.5rem' }}>{name}</p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.55)', lineHeight: 1.72 }}>{acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '2rem 0', borderTop: '1px solid rgba(245,240,232,0.08)', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.28)' }}>
            Share
          </span>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-bipolar&text=AI+Companion+for+Bipolar+Disorder%3A+Tracking+Patterns%2C+Staying+Grounded+Between+Episodes"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid rgba(245,240,232,0.12)', color: 'rgba(245,240,232,0.48)', textDecoration: 'none' }}
          >
            &#120143; Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmeok.ai%2Fblog%2Fai-for-bipolar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid rgba(245,240,232,0.12)', color: 'rgba(245,240,232,0.48)', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
        </div>

        {/* CTA */}
        <div style={{ borderRadius: '1.25rem', padding: '2.5rem', marginBottom: '4rem', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(13,12,24,0) 60%)', border: '1px solid rgba(201,168,76,0.22)' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '16rem', height: '16rem', pointerEvents: 'none', background: 'radial-gradient(circle at 80% 20%, rgba(201,168,76,0.14), transparent 70%)' }} />
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: '0.5rem' }}>Free forever</p>
            <h3 style={{ fontWeight: 900, fontSize: '1.35rem', color: '#ffffff', lineHeight: 1.3, marginBottom: '0.875rem', letterSpacing: '-0.01em' }}>
              A companion that remembers, notices, and tells you the truth.
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(245,240,232,0.52)', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '32rem' }}>
              50 messages a day, persistent memory across every conversation, and an AI that holds
              your patterns across months — not sessions. Free, with no credit card and no trial
              period. Your sovereign AI companion starts learning about you from the first message.
            </p>
            <Link
              href="/birth"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.875rem', background: '#c9a84c', color: '#0d0c18', textDecoration: 'none' }}
            >
              Hatch your AI free &#8594;
            </Link>
          </div>
        </div>

        {/* More posts */}
        <div>
          <h2 style={{ fontWeight: 900, fontSize: '1.1rem', color: '#f5f0e8', marginBottom: '1.25rem', letterSpacing: '-0.005em' }}>
            More from the blog
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '1rem' }}>
            {[
              { href: '/blog/ai-for-depression', tag: 'Mental Health', title: 'Can AI Help with Depression? What Research Says and What MEOK Actually Offers', read: '7 min read' },
              { href: '/blog/ai-for-anxiety', tag: 'Mental Health', title: 'AI for Anxiety: What It Can and Cannot Do Between Therapy Sessions', read: '6 min read' },
              { href: '/blog/ai-memory-explained', tag: 'Product', title: 'How MEOK Persistent Memory Works — and Why It Matters', read: '5 min read' },
            ].map(({ href, tag, title, read }) => (
              <Link
                key={href}
                href={href}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.25rem', borderRadius: '0.875rem', background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.09)', textDecoration: 'none' }}
              >
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: '9999px', color: '#c9a84c', background: 'rgba(201,168,76,0.1)', width: 'fit-content' }}>
                  {tag}
                </span>
                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f5f0e8', lineHeight: 1.45, flex: 1 }}>{title}</p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)' }}>{read}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(245,240,232,0.07)', padding: '3rem 1.5rem', background: '#0d0c18' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <p style={{ fontWeight: 900, fontSize: '1rem', color: '#c9a84c', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>MEOK</p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)', lineHeight: 1.55 }}>
              Sovereign AI. Your story, remembered.<br />
              &copy; {new Date().getFullYear()} MEOK AI LABS. All rights reserved.
            </p>
          </div>
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '/about' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Start free', href: '/birth' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{ fontSize: '0.8125rem', color: label === 'Start free' ? '#c9a84c' : 'rgba(245,240,232,0.38)', fontWeight: label === 'Start free' ? 700 : 400, textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
