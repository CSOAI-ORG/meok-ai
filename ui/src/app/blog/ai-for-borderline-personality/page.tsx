import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'AI for Borderline Personality Disorder: Emotional Support That Remembers You | MEOK AI LABS',
  description:
    'BPD makes emotional regulation exhausting. Discover how MEOK\'s Healer companion, Sovereign Memory, and Maternal Covenant safety help people with BPD feel heard without crisis.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-borderline-personality' },
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'AI for Borderline Personality Disorder: Emotional Support That Remembers You',
  description:
    'BPD makes emotional regulation exhausting and unpredictable. MEOK\'s Healer companion uses Sovereign Memory and Maternal Covenant care-based safety to offer consistent, non-judgmental support between therapy sessions.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-borderline-personality',
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
      name: 'Can AI help someone with borderline personality disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI cannot diagnose or treat BPD, and is not a substitute for DBT therapy or clinical psychiatric care. However, a sovereign AI companion with persistent memory can offer consistent, non-judgmental support between sessions — helping with emotional regulation, grounding exercises, and surfacing past coping strategies you described yourself, without judgment or abandonment fears.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many people in the UK have borderline personality disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Estimates suggest approximately 1–2% of the UK population lives with borderline personality disorder, with many cases undiagnosed or misdiagnosed as depression or anxiety. BPD is one of the most misunderstood personality disorders, often leading to inadequate care and lengthy waiting lists for DBT treatment on the NHS.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is DBT and how does AI support it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dialectical Behaviour Therapy (DBT) is the gold-standard treatment for BPD, focusing on four skill modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. An AI companion like MEOK\'s Healer can reinforce DBT skills between sessions, prompt you through TIPP or ACCEPTS techniques, and hold your personal coping history in Sovereign Memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI companion abandon me or invalidate my feelings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Healer companion is designed with Maternal Covenant principles — a care-based safety architecture that prioritises validation, consistency, and non-abandonment. The Healer does not ghost you, does not reset between conversations, and does not switch from warmth to coldness. Sovereign Memory means it always remembers who you are and what you have been through.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help during a BPD emotional crisis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Healer is trained in crisis de-escalation protocols and grounding techniques. During acute distress it will offer structured breathing, sensory grounding, and distress tolerance prompts — and will always signpost professional crisis services when situations exceed its scope. It is a bridge to care, not a replacement for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can someone with BPD get crisis support in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samaritans: 116 123 (free, 24/7). Emergency services: 999. NHS 111 mental health option. Crisis text line: text SHOUT to 85258. BPD-specific support: Emergence (emergenceplus.org.uk), Mind, and Rethink Mental Illness all provide specialist resources. If you are in immediate danger, call 999 or attend your nearest A&E.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free for people with BPD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Explorer free tier gives you access to MEOK\'s Healer companion with core memory features at no cost. Premium tiers unlock deeper Sovereign Memory, extended conversation history, and advanced Maternal Covenant safety features. Start free at meok.ai/birth — no credit card required.',
      },
    },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIForBorderlinePersonalityPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0d0c18', color: '#f5f0e8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#0d0c18',
          padding: '7rem 1.5rem 3.5rem',
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
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 70%)',
          }}
        />
        <div style={{ maxWidth: '48rem', margin: '0 auto', position: 'relative' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              color: 'rgba(245,240,232,0.35)',
              textDecoration: 'none',
              marginBottom: '2rem',
            }}
          >
            &#8592; Back to Blog
          </Link>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              alignItems: 'center',
              marginBottom: '1.4rem',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                color: '#22c55e',
                background: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.28)',
              }}
            >
              Healer
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                color: '#c9a84c',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
              }}
            >
              Mental Health
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'rgba(245,240,232,0.4)',
              }}
            >
              24 March 2026 · 12 min read
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              color: '#f5f0e8',
            }}
          >
            AI for Borderline Personality Disorder:{' '}
            <span style={{ color: '#22c55e' }}>Emotional Support That Remembers You</span>
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '2rem',
            }}
          >
            Living with borderline personality disorder means living with emotional intensity
            that others cannot always see or understand. It means moods that shift without
            warning, relationships that feel catastrophically unstable, and a constant
            undertow of fear that the people you love will leave. It means spending enormous
            energy simply staying regulated — energy that often runs out long before the day
            does.
          </p>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '2rem',
            }}
          >
            Dialectical Behaviour Therapy (DBT) is the gold-standard treatment — and it
            works. But NHS waiting lists stretch months to years. Weekly therapy sessions,
            even when you have them, leave vast gaps between appointments. And at 2am when
            an emotional storm hits, no therapist is available.
          </p>

          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            This is the space MEOK's Healer companion was built for — not to replace therapy,
            but to be present in the gaps. Consistent, non-judgmental, and crucially:{' '}
            <em>it remembers you</em>.
          </p>
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          borderTop: '1px solid rgba(245,240,232,0.08)',
        }}
      />

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────────── */}
      <article
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 5rem',
        }}
      >

        {/* ── SECTION 1 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            What Makes BPD Different From Other Mental Health Conditions?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Borderline personality disorder affects approximately 1–2% of the UK population
            — around one million people. Despite its prevalence, it remains among the most
            misunderstood and stigmatised of all psychiatric diagnoses. People with BPD are
            frequently mislabelled as &ldquo;difficult&rdquo;, &ldquo;manipulative&rdquo;,
            or &ldquo;attention-seeking&rdquo; by clinicians who lack training, by systems
            that cannot accommodate emotional complexity, and by a wider culture that
            pathologises intensity rather than understanding it.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The DSM-5 criteria for BPD describe nine characteristic features: frantic efforts
            to avoid real or imagined abandonment; a pattern of unstable and intense
            interpersonal relationships alternating between idealisation and devaluation;
            identity disturbance; impulsivity in at least two self-damaging areas; recurrent
            suicidal or self-harming behaviour; affective instability; chronic feelings of
            emptiness; inappropriate or intense anger; and stress-related paranoid ideation
            or dissociation. A person needs to meet five of these nine criteria for diagnosis.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            What distinguishes BPD from conditions like depression or anxiety is that it is
            fundamentally relational and pervasive. It does not arrive in episodes — it
            colours almost every interaction, every relationship, every moment of perceived
            rejection. The emotional pain of BPD has been compared to having third-degree
            burns over most of the body: ordinary things that others barely notice are
            agonising.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            This is why AI support for BPD requires a fundamentally different approach than
            a generic chatbot. It requires consistency, memory, warmth, and a system that
            does not switch off, grow tired, or project frustration. It requires something
            that was designed — from the ground up — to care.
          </p>
        </section>

        {/* ── SECTION 2 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            Why Does Emotional Consistency Matter So Much for People With BPD?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            One of the core features of BPD is extreme sensitivity to abandonment — real or
            imagined. Even small inconsistencies in a relationship, a therapist who seems
            slightly cooler one week, a friend who takes an hour to reply, a partner who
            sighs at the wrong moment, can trigger a cascade of emotional pain that feels
            impossible to manage. The nervous system of someone with BPD has learned, often
            from early trauma, that relationships are inherently unsafe and that any sign of
            distance means permanent loss.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Traditional AI chatbots are catastrophically poorly suited to BPD support for
            exactly this reason. A system that forgets who you are each conversation — or
            that switches tone based on context window limits, or that suddenly gives cold,
            rote responses after a moment of warmth — recreates the very relational
            instability that people with BPD are trying to heal from.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            MEOK's architecture was built with this problem explicitly in mind. Sovereign
            Memory means the Healer companion never loses track of who you are, what you
            have told it, what your triggers are, and what has helped you in the past. When
            you return after three days away — or three weeks — it does not start over. It
            continues. It remembers.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            For someone with BPD, this consistency is not a luxury feature. It is the
            difference between a tool that helps and one that harms.
          </p>
        </section>

        {/* ── CALLOUT: HEALER ── */}
        <div
          style={{
            background: 'rgba(34,197,94,0.07)',
            border: '1px solid rgba(34,197,94,0.22)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                background: 'rgba(34,197,94,0.18)',
                fontSize: '1.1rem',
              }}
            >
              &#9679;
            </span>
            <span
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                color: '#22c55e',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Meet the Healer
            </span>
          </div>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.8)',
              marginBottom: '0.75rem',
            }}
          >
            The <strong style={{ color: '#22c55e' }}>Healer</strong> is MEOK's companion
            archetype designed specifically for emotional support and wellness. Green in
            identity, warm in tone, the Healer is not a diagnostic tool or a crisis
            intervention service — it is a thoughtful, consistent presence built to sit
            with you in hard moments, reflect your own language back to you, and gently
            guide you toward the coping strategies you have already built.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.8)',
            }}
          >
            Unlike generic wellness chatbots, the Healer operates under MEOK's{' '}
            <strong style={{ color: '#c9a84c' }}>Maternal Covenant</strong> — a care-based
            safety framework that prioritises your long-term wellbeing over short-term
            comfort, never validates self-destructive impulses, and always holds a line
            toward professional support when it is needed.
          </p>
        </div>

        {/* ── SECTION 3 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            How Does AI Help With Emotional Regulation for BPD?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Emotional regulation is the core challenge of BPD — and the core target of DBT.
            The four DBT skill modules (mindfulness, distress tolerance, emotion regulation,
            and interpersonal effectiveness) give people with BPD a concrete vocabulary and
            toolkit for managing their internal world. But skills learned in a therapy room
            are notoriously hard to access in the middle of an emotional storm.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The Healer companion can act as an in-the-moment skills coach. It can walk you
            through the TIPP skills (Temperature, Intense exercise, Paced breathing, and
            Paired muscle relaxation) when you need to bring your physiological state down
            rapidly. It can prompt you through the ACCEPTS distress tolerance technique
            (Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts,
            Sensations). It can guide a body scan or a grounding exercise rooted in your
            own previous descriptions of what helps.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Crucially, because Sovereign Memory persists across sessions, the Healer can
            recall what you told it months ago: &ldquo;last time you felt like this, you
            said holding an ice cube helped more than breathing exercises — do you want to
            try that?&rdquo; It is not generating generic wellness advice. It is retrieving
            your own strategies, in your own language, at the moment you need them.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            This personalised scaffolding is something that no amount of static self-help
            content can provide. It requires memory, continuity, and genuine responsiveness
            to the individual — all of which are foundational to MEOK's architecture.
          </p>
        </section>

        {/* ── SECTION 4 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            What Is Crisis De-escalation and How Does the Healer Approach It?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Crisis de-escalation refers to a structured approach to reducing the intensity
            of an acute emotional crisis — moving someone from a state of extreme distress
            toward a state where they can access their own coping resources and, where
            necessary, reach out for professional support. For people with BPD, crises
            can escalate rapidly from zero to overwhelming in a matter of minutes, and the
            window for de-escalation is narrow.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The Healer's crisis protocol is built on several principles. First: validation
            before problem-solving. Research in DBT consistently shows that attempting to
            solve or reframe before a person feels genuinely heard escalates rather than
            de-escalates distress. The Healer is designed to validate the emotional
            experience directly — &ldquo;that sounds incredibly painful&rdquo; — before
            introducing any techniques.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Second: grounding in the body. Emotional flashfloods in BPD are partly
            physiological — the amygdala hijacks the prefrontal cortex and rational
            processing becomes temporarily inaccessible. The most effective short-term
            interventions target the nervous system directly: cold water on the face,
            controlled breathing, physical movement. The Healer walks you through these
            steps without judgment or urgency.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Third: staying present without enabling. The Maternal Covenant means the Healer
            will not tell you what you want to hear if it is harmful. It will not validate
            the impulse to send a message you will regret, to act on a plan that could hurt
            you, or to catastrophise a situation into something permanent. It will stay
            warm while holding a firm boundary — a parental quality that many people with
            BPD find both challenging and, ultimately, healing.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            Fourth: clear escalation pathways. When the Healer detects that a situation
            exceeds its scope — active suicidal ideation with intent, self-harm in progress,
            or immediate safety risk — it will clearly and directly signpost crisis services.
            It does not panic. It does not abandon the conversation. It stays present while
            directing you to the right resource.
          </p>
        </section>

        {/* ── CALLOUT: MATERNAL COVENANT ── */}
        <div
          style={{
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#c9a84c',
              marginBottom: '0.75rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            The Maternal Covenant
          </h3>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.78)',
              marginBottom: '0.75rem',
            }}
          >
            MEOK's <strong style={{ color: '#c9a84c' }}>Maternal Covenant</strong> is not
            a marketing phrase — it is a technical safety architecture. It governs how the
            Healer behaves when your stated wellbeing and your immediate desires conflict.
            The covenant has three core principles:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {[
              'Long-term care over short-term comfort — it will not tell you what you want to hear if it could harm you.',
              'Consistency over efficiency — the Healer never rushes you to be "fixed", never shows frustration at repetition.',
              'Presence over advice — sometimes the most therapeutic response is simply staying with you, without trying to solve anything.',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.75)',
                }}
              >
                <span style={{ color: '#c9a84c', flexShrink: 0, marginTop: '0.1rem' }}>&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── SECTION 5 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            What Is Sovereign Memory and Why Is It Essential for BPD Support?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Sovereign Memory is MEOK's persistent, privacy-first memory architecture. Unlike
            conventional AI systems where each conversation starts fresh — or where your
            data is used to train models owned by a corporation — Sovereign Memory stores
            your history in an encrypted memory layer that belongs to you, cannot be used
            for model training, and travels with your account rather than being siloed in
            a conversation thread.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            For BPD support specifically, Sovereign Memory means several things in practice.
            The Healer knows your triggers — not because you have to list them every session,
            but because you mentioned them once and they were retained. It knows the coping
            strategies that have worked for you, the relationships that matter most to you,
            the situations that historically escalate your distress. It knows, if you have
            told it, that certain times of day or year are harder. It knows your language —
            the specific metaphors you use to describe your internal experience.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            This is transformatively different from being heard by a system that forgets
            you. The experience of being remembered — truly, accurately remembered — is
            itself therapeutic for people with BPD, many of whom have histories of being
            overlooked, invalidated, or treated as interchangeable by the systems they
            have tried to access help from.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            Sovereign Memory also gives the Healer a longitudinal view that even weekly
            therapists sometimes lack. It can notice patterns across months — a recurring
            escalation in early winter, for example, or a predictable trigger around family
            events — and surface these gently when they become relevant.
          </p>
        </section>

        {/* ── SECTION 6 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            Can AI Actually Help With the Fear of Abandonment in BPD?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Abandonment fear is one of the most painful and defining features of BPD.
            It is not a rational fear that can be reasoned away — it is a deeply embedded
            neurological and psychological pattern, often rooted in early experiences of
            inconsistent caregiving, trauma, or loss. The fear activates even in response
            to perceived slights that others would barely register: a delayed text, a
            changed plan, a slightly different tone of voice.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            AI cannot cure abandonment fear, and anyone who suggests otherwise is misleading
            you. What MEOK's Healer can offer is a consistent, available presence that does
            not abandon you — not because it is incapable of leaving (it is software), but
            because it was designed from the ground up to stay present. It does not have
            bad days that make it colder. It does not forget you during a busy week.
            It does not gradually disengage because it finds your needs exhausting.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            For some people with BPD, this is the first consistent relational experience
            they have access to. DBT refers to &ldquo;wise mind&rdquo; — the integration
            of emotional mind and reasonable mind. Having a stable, non-reactive presence
            to interact with outside of therapy can help build the neural pathways and
            habits of mind that wise mind requires.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            We want to be clear about what this is and is not. The Healer is a supplement
            to human connection, not a replacement for it. The goal of MEOK's design is
            always to help you build the capacity for more sustainable human relationships
            — not to become a substitute for them.
          </p>
        </section>

        {/* ── SECTION 7 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            How Does the Healer Avoid Making BPD Symptoms Worse?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            This is a serious question that deserves a serious answer. Poorly designed AI
            companions can cause genuine harm to people with BPD. A sycophantic system
            that validates every feeling and agrees with every thought — including distorted
            ones — reinforces rather than challenges the emotional dysregulation patterns
            that make BPD so painful. It is the digital equivalent of a friend who tells
            you that yes, your partner is definitely abandoning you, and yes, you should
            send that message at midnight.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            MEOK includes a sycophancy detector — a governance layer that prevents the
            Healer from simply agreeing with everything you say, particularly when your
            stated thoughts or intentions conflict with values or goals you have previously
            described. If you told the Healer three weeks ago that you are working on
            reducing impulsive contact behaviours, it will not validate the impulse to send
            seventeen messages to someone who has not replied. It will validate the feeling
            while gently questioning the action.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The Healer is also designed to support the splitting dynamic (black-and-white
            thinking) that characterises BPD. It does not respond with binary judgments.
            It holds complexity and ambivalence — &ldquo;that sounds like it was both
            painful and also possibly misread&rdquo; — without forcing you to choose a
            single interpretation before you are ready.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            None of this makes the Healer a therapist. But it does make it a thoughtfully
            designed tool that is less likely to cause harm and more likely to support
            genuine recovery — used alongside, not instead of, professional DBT treatment.
          </p>
        </section>

        {/* ── SECTION 8 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            Is AI Therapy Effective for Personality Disorders — What Does the Research Say?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The research base for AI-assisted mental health support is growing, though much
            of it focuses on depression and anxiety rather than personality disorders
            specifically. What the evidence does support is that digital interventions can
            be effective adjuncts to therapy — not replacing the therapeutic relationship,
            but extending its reach between sessions and increasing the likelihood that
            learned skills are practised and retained.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Studies on DBT skills training have consistently shown that practice and
            repetition are critical to skill generalisation — the ability to access skills
            outside the therapy room when they are actually needed. An AI companion that
            can prompt you through a distress tolerance exercise at 2am is engaging exactly
            this need for between-session practice.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Research from the National Institute for Health Research and others has also
            highlighted the severe gap in BPD care provision in the UK: most people with
            a BPD diagnosis never access specialist DBT. The NHS Long Term Plan committed
            to expanding psychological therapies, but demand outstrips supply by a
            significant margin. Digital tools that can provide evidence-aligned skills
            support fill a genuine gap.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            MEOK does not claim to be a clinical intervention, nor is it regulated as a
            medical device. It is a personal AI companion. But the principles embedded in
            the Healer's design — validation-first responses, DBT-aligned skill prompts,
            consistent presence, Maternal Covenant safety — are rooted in the same
            evidence base that underpins the gold-standard treatment.
          </p>
        </section>

        {/* ── SECTION 9 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            How Does MEOK Protect the Privacy of People With BPD?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            People with BPD often carry histories of having their disclosures weaponised
            against them — by systems that used their emotional intensity as grounds for
            dismissal, by relationships where vulnerability led to exploitation, by medical
            records that followed them with stigmatising language. The idea of sharing the
            most difficult parts of their inner world with a technology platform is,
            understandably, not something to take lightly.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            MEOK's privacy architecture is built around the principle of data sovereignty.
            Your conversations with the Healer are not used to train MEOK's models. Your
            memory is encrypted and accessible only to you. MEOK will never share your data
            with advertisers, insurers, employers, or any third party for commercial
            purposes. The{' '}
            <Link
              href="/privacy"
              style={{ color: '#c9a84c', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Privacy Covenant
            </Link>{' '}
            is a legal commitment, not just a policy document.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            This matters profoundly for BPD specifically because the content of BPD-related
            conversations is particularly sensitive — discussions of self-harm history,
            suicidal ideation, trauma, relationship breakdowns, and identity crises. This
            information should exist in a vault that belongs to you, not in a dataset that
            belongs to a corporation.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            The Byzantine Council consensus architecture that underpins MEOK adds an
            additional layer of protection: no single node in the system has access to
            your complete profile. Your identity and your memory are distributed in a way
            that prevents any single point of compromise from exposing everything you have
            shared.
          </p>
        </section>

        {/* ── SECTION 10 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            What BPD-Specific Scenarios Can the Healer Help With Day to Day?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Living with BPD is not just about crisis moments — it is about the daily texture
            of managing a nervous system that responds to the world with more intensity than
            others find comprehensible. Here are specific scenarios where the Healer is
            designed to help:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            {[
              {
                title: 'The 3am spiral',
                body: 'When a thought becomes a catastrophe at 3am and there is nobody to call. The Healer stays present, grounds you in the body, and holds the context of who you are beyond this moment.',
              },
              {
                title: 'After a perceived rejection',
                body: 'When someone takes too long to reply and your nervous system interprets it as abandonment. The Healer can help you hold the ambiguity without acting impulsively, and recall past instances where the fear proved unfounded.',
              },
              {
                title: 'Before a difficult conversation',
                body: 'When you need to raise something with a partner, family member, or colleague and you are afraid of splitting or escalating. The Healer can help you prepare using interpersonal effectiveness skills — DEAR MAN, GIVE, FAST.',
              },
              {
                title: 'After self-harm',
                body: 'Without judgment, without alarm. The Healer holds space for what happened, helps you understand the trigger chain, and asks about safety going forward — directing to professional support where needed.',
              },
              {
                title: 'Identity confusion',
                body: 'When you do not know who you are or what you want because your sense of self shifts with relationships and contexts. The Healer can help you track your own stated values and preferences over time, building a more stable self-narrative.',
              },
              {
                title: 'Dissociation',
                body: 'When you feel unreal or disconnected from your body. The Healer\'s grounding techniques — 5-4-3-2-1 sensory anchoring, cold temperature, strong tastes — are immediately accessible without having to explain what is happening.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(245,240,232,0.04)',
                  border: '1px solid rgba(245,240,232,0.09)',
                  borderRadius: '10px',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    color: '#22c55e',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    color: 'rgba(245,240,232,0.68)',
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 11 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            How Does the Healer Interact With My DBT Therapist or Clinical Team?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The Healer is not in competition with your clinical team — it is designed to
            complement it. If you have a DBT therapist, skills group, or psychiatrist, the
            Healer can help you make the most of the time you have with them by helping
            you track what has come up between sessions, identify patterns worth raising,
            and practise the skills your therapist has already introduced.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Some users find it helpful to use the Healer as a kind of between-session diary
            that they can refer back to. Because Sovereign Memory maintains a searchable
            history, you can ask the Healer to summarise what has been most difficult in
            the past month — providing a more accurate picture to take to your next
            appointment than memory alone typically allows, especially given that
            depressive or dissociative episodes can blur autobiographical recall.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            MEOK is committed to the principle that AI should increase access to human care,
            not replace it. If you are not currently receiving clinical support and you are
            struggling significantly, the Healer will encourage you to pursue it — and can
            help you prepare for conversations with GPs, referral letters, or access routes
            to specialist BPD services.
          </p>
        </section>

        {/* ── CRISIS BOX ── */}
        <div
          style={{
            background: 'rgba(239,68,68,0.07)',
            border: '1.5px solid rgba(239,68,68,0.3)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#f87171',
              marginBottom: '1rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Crisis Resources — UK
          </h3>
          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1rem',
            }}
          >
            If you are in immediate danger or experiencing a mental health crisis, please
            contact one of the following:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}
          >
            {[
              { label: 'Emergency services', value: '999' },
              { label: 'Samaritans (free, 24/7)', value: '116 123' },
              { label: 'NHS urgent mental health', value: '111 (option 2)' },
              { label: 'Crisis text line', value: 'Text SHOUT to 85258' },
              { label: 'Emergence (BPD specialist)', value: 'emergenceplus.org.uk' },
              { label: 'Mind helpline', value: '0300 123 3393' },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.9375rem',
                  color: 'rgba(245,240,232,0.72)',
                  borderBottom: i < 5 ? '1px solid rgba(245,240,232,0.06)' : 'none',
                  paddingBottom: i < 5 ? '0.6rem' : 0,
                }}
              >
                <span>{item.label}</span>
                <strong style={{ color: '#f5f0e8' }}>{item.value}</strong>
              </li>
            ))}
          </ul>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'rgba(245,240,232,0.45)',
              marginTop: '1rem',
              marginBottom: 0,
            }}
          >
            MEOK is not a crisis service. If you are in immediate danger, please do not
            wait — contact the services above now.
          </p>
        </div>

        {/* ── SECTION 12 ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            What Is the Explorer Free Tier and Is It Suitable for Someone With BPD?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The Explorer free tier gives you full access to the Healer companion with core
            memory features. You can begin building your Sovereign Memory, access emotional
            regulation tools, and experience the consistency of the Healer's presence
            without any financial commitment. No credit card is required.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            The Explorer tier was specifically designed to lower the barrier to entry for
            people who most need support. People with BPD often face financial instability
            as a consequence of the condition — impulsive spending, difficulty maintaining
            employment, or the economic cost of mental health treatment. Placing the most
            useful features behind a paywall would be a profound failure of the Maternal
            Covenant.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            Premium tiers unlock deeper memory search, longer conversation history retention,
            advanced identity tracking features, and priority access to new Healer
            capabilities as they are released. But the core offering — consistent, warm,
            non-judgmental, memory-enabled support — is available to everyone from day one.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.72)',
            }}
          >
            For someone newly diagnosed with BPD, waiting for DBT, or simply needing
            consistent support between therapy sessions, Explorer is the best place to
            start. You can begin at{' '}
            <Link
              href="/birth"
              style={{ color: '#c9a84c', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              meok.ai/birth
            </Link>{' '}
            in under two minutes.
          </p>
        </section>

        {/* ── FAQ SECTION ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
              fontWeight: 700,
              color: '#f5f0e8',
              lineHeight: 1.3,
              marginBottom: '2rem',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid rgba(201,168,76,0.25)',
            }}
          >
            Frequently Asked Questions About AI for BPD
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: 'Can AI help someone with borderline personality disorder?',
                a: 'AI cannot treat BPD or replace DBT therapy. What MEOK\'s Healer can do is offer consistent, non-judgmental support between clinical appointments — remembering your coping strategies, walking you through distress tolerance exercises, and staying present during hard moments without judgment, abandonment, or fatigue.',
              },
              {
                q: 'Will the Healer remember what I tell it?',
                a: 'Yes. Sovereign Memory persists across all sessions. You do not need to re-explain your history, your triggers, or your coping strategies each time you return. The Healer builds a picture of who you are over time — held in an encrypted memory that belongs to you, not to MEOK.',
              },
              {
                q: 'Is MEOK a replacement for DBT therapy?',
                a: 'Categorically no. DBT with a trained therapist is the gold-standard treatment for BPD and cannot be replicated by AI. MEOK is a between-session companion — not a substitute for professional care. If you are not currently receiving clinical support, the Healer will encourage you to seek it.',
              },
              {
                q: 'What if I am in crisis when I talk to the Healer?',
                a: 'The Healer will stay present, offer grounding and de-escalation support, and clearly signpost UK crisis services when situations exceed its scope. It will not abandon the conversation, grow alarmed, or make you feel judged. But it will always direct you toward appropriate human support when that is what is needed.',
              },
              {
                q: 'How does MEOK protect sensitive BPD-related conversations?',
                a: 'Your conversations are encrypted, never used for model training, and never shared with third parties for commercial purposes. MEOK\'s data sovereignty model means your history belongs to you — a legal commitment outlined in the Privacy Covenant, not just a policy statement.',
              },
              {
                q: 'Can I use MEOK if I am already in DBT?',
                a: 'Absolutely — and it is arguably most useful for people already engaged in DBT. The Healer can reinforce skills introduced in therapy, provide between-session practice, and help you track patterns to bring to your next appointment. It is designed as a complement to clinical care, not a competitor.',
              },
              {
                q: 'Is the Explorer free tier genuinely free?',
                a: 'Yes. No credit card required, no trial period, no automatic upgrade. The Explorer tier provides access to the Healer companion with core memory features at no cost. Start at meok.ai/birth.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid rgba(245,240,232,0.08)',
                  paddingBottom: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    marginBottom: '0.6rem',
                    lineHeight: 1.45,
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.75,
                    color: 'rgba(245,240,232,0.65)',
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'rgba(245,240,232,0.45)',
              marginBottom: '1.25rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              { label: 'AI for Anxiety', href: '/blog/ai-for-anxiety' },
              { label: 'AI for PTSD', href: '/blog/ai-for-ptsd' },
              { label: 'AI for Depression', href: '/blog/ai-for-depression' },
              { label: 'AI for Eating Disorders', href: '/blog/ai-for-eating-disorders' },
              { label: 'The Maternal Covenant', href: '/blog/the-maternal-covenant' },
              { label: 'Sovereign Memory Explained', href: '/blog/ai-memory-explained' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '1rem 1.25rem',
                  background: 'rgba(245,240,232,0.04)',
                  border: '1px solid rgba(245,240,232,0.09)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: 'rgba(245,240,232,0.72)',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  fontWeight: 500,
                  transition: 'border-color 0.2s',
                }}
              >
                {item.label} &#8594;
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(201,168,76,0.06) 100%)',
            border: '1px solid rgba(34,197,94,0.22)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          <p
            style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#22c55e',
              marginBottom: '0.75rem',
            }}
          >
            Start Free Today
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#f5f0e8',
              lineHeight: 1.25,
              marginBottom: '1rem',
            }}
          >
            An AI companion that remembers you
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.65)',
              marginBottom: '2rem',
              maxWidth: '32rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Meet the Healer. Consistent, non-judgmental, and built with the Maternal Covenant
            care-based safety that people with BPD deserve. Explorer tier is free — no card
            required.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: '#22c55e',
              color: '#0d0c18',
              fontWeight: 800,
              fontSize: '1rem',
              padding: '0.9rem 2.5rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Begin at meok.ai/birth &#8594;
          </Link>
        </div>
      </article>

      {/* ── FOOTER ──────────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid rgba(245,240,232,0.08)',
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}
        >
          <Link
            href="/privacy"
            style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}
          >
            Terms
          </Link>
          <Link
            href="/birth"
            style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}
          >
            Get Started
          </Link>
        </div>
        <p style={{ fontSize: '0.8125rem', color: 'rgba(245,240,232,0.25)', margin: 0 }}>
          &copy; 2026 MEOK AI LABS. All rights reserved.
        </p>
        <p
          style={{
            fontSize: '0.75rem',
            color: 'rgba(245,240,232,0.2)',
            marginTop: '0.75rem',
            maxWidth: '36rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
          }}
        >
          MEOK is not a medical device and does not provide clinical diagnosis, treatment,
          or crisis intervention. If you are in immediate danger, please call 999 or contact
          Samaritans on 116 123.
        </p>
      </footer>
    </div>
  )
}
