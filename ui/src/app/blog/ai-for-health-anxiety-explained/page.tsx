import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Health Anxiety: Managing the Spiral Before It Starts | MEOK AI LABS',
  description:
    'Health anxiety is a genuine anxiety disorder, not a personality flaw. Learn how MEOK interrupts the symptom-checking spiral with gentle reality-testing, Sovereign Memory, CBT techniques, and calibrated guidance on when to see a doctor.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-health-anxiety-explained' },
  openGraph: {
    title: 'AI for Health Anxiety: Managing the Spiral Before It Starts',
    description:
      'How MEOK helps people with health anxiety interrupt the catastrophising loop — with Sovereign Memory, cognitive defusion, and empathetic reality-testing rather than false reassurance.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-health-anxiety-explained',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Health+Anxiety%3A+Managing+the+Spiral+Before+It+Starts&desc=Interrupting+the+catastrophising+loop',
        width: 1200,
        height: 630,
        alt: 'AI for Health Anxiety: Managing the Spiral Before It Starts | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Health Anxiety: Managing the Spiral Before It Starts',
    description:
      'MEOK helps interrupt the health anxiety spiral with Sovereign Memory, CBT-based tools, and empathetic reality-testing — never diagnosing, always referring when needed.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Health+Anxiety%3A+Managing+the+Spiral+Before+It+Starts&desc=Interrupting+the+catastrophising+loop',
    ],
  },
}

// ── JSON-LD: Article ─────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Health Anxiety: Managing the Spiral Before It Starts',
  description:
    'A comprehensive, empathetic guide to health anxiety (illness anxiety disorder) — what it is, how the symptom-checking spiral works, why Googling symptoms makes it worse, and how MEOK can interrupt the cycle with gentle reality-testing, Sovereign Memory, CBT techniques, and calibrated guidance on when to see a doctor.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-health-anxiety-explained',
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
    '@id': 'https://meok.ai/blog/ai-for-health-anxiety-explained',
  },
  keywords: [
    'AI for health anxiety',
    'illness anxiety disorder',
    'health anxiety spiral',
    'hypochondria support',
    'Googling symptoms anxiety',
    'health anxiety CBT',
    'reassurance seeking health anxiety',
    'cognitive defusion health anxiety',
    'MEOK health anxiety',
    'AI mental health UK',
    'Sovereign Memory health anxiety',
    'health anxiety OCD',
  ],
}

// ── JSON-LD: FAQPage ─────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is health anxiety and is it a real condition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — health anxiety, clinically termed illness anxiety disorder, is a recognised anxiety disorder in which a person experiences persistent, excessive fear of having or developing a serious illness. It is not hypochondria in the dismissive sense that phrase is often used. The body becomes a source of threat rather than sensation, and the worry causes significant distress even when medical investigations come back clear. It is highly treatable with evidence-based therapies, most commonly CBT and ACT.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Googling symptoms make health anxiety worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search engines are optimised for engagement, not wellbeing. They surface rare, serious conditions prominently because alarming content gets more clicks. For someone with health anxiety, each search provides a momentary sense of control followed by a sharper spike of fear — and the next search begins from a more anxious baseline. Over time the person\'s threat model expands dramatically, and the checking behaviour itself becomes a compulsion. Studies consistently show that health-anxious individuals emerge from symptom-search sessions significantly more distressed than when they started.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the reassurance-seeking trap and how does MEOK avoid it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reassurance-seeking works by temporarily suppressing anxiety — but the relief is short-lived because the underlying fear was never processed, only silenced. Each successful reassurance-seek trains the brain to treat seeking as the solution, making future anxiety harder to tolerate without seeking. MEOK avoids this trap by declining to provide diagnostic reassurance in response to health anxiety spirals. Instead it redirects attention to the emotional experience underneath the worry, uses Sovereign Memory to surface historical patterns, and walks users through CBT techniques that build genuine tolerance rather than temporary relief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK tell me whether my symptom is serious?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — and this is by design, not technical limitation. MEOK does not diagnose, interpret test results, or give medical opinions on symptoms. What MEOK can do is help you think through whether the level of distress you are experiencing is proportionate, whether you have worried about similar sensations before and what happened, and whether your concern meets the threshold where contacting your GP or NHS 111 is the appropriate next step. The goal is calibration, not diagnosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What CBT techniques can MEOK walk me through for health anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can guide you through several evidence-based CBT and ACT techniques relevant to health anxiety: cognitive defusion (learning to observe catastrophic thoughts rather than be fused with them), attention training (deliberately broadening the spotlight of attention away from the body), acceptance-based approaches (allowing uncertainty about health without compulsive resolution-seeking), and behavioural experiments (testing whether a feared physical sensation actually escalates if you do not check). These are not replacements for professional CBT — they are between-session tools that build tolerance and interrupt the spiral earlier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does health anxiety often occur alongside other conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Health anxiety frequently co-occurs with OCD (particularly contamination or illness obsessions), generalised anxiety disorder (GAD), depression, and panic disorder. The mechanisms overlap considerably — all involve misinterpreted threat signals and compulsive attempts to reduce uncertainty. MEOK is aware of these co-occurrences and does not treat health anxiety in isolation; it holds the whole picture of your emotional landscape across conversations.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I seek professional help for health anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should seek professional help if health anxiety is interfering with daily life — if you are missing work, avoiding social situations, spending significant portions of your day checking, or if family members are becoming drawn into your reassurance-seeking. In the UK, your first step is usually your GP, who can refer you to NHS Talking Therapies (formerly IAPT) for CBT. Charities including Mind, Anxiety UK, and OCD UK also provide resources and support. Private CBT therapists with specific health anxiety experience can be found via the British Association for Behavioural and Cognitive Psychotherapies (BABCP) directory.',
      },
    },
  ],
}

// ── Page Component ───────────────────────────────────────────────────────────

export default function AiForHealthAnxietyExplainedPage() {
  const bg = '#0d0c18'
  const text = '#f5f0e8'
  const accent = '#6aaa64'
  const muted = 'rgba(245,240,232,0.6)'
  const cardBg = 'rgba(255,255,255,0.04)'
  const borderAccent = 'rgba(106,170,100,0.3)'
  const borderSubtle = 'rgba(245,240,232,0.1)'
  const accentFaint = 'rgba(106,170,100,0.12)'

  return (
    <>
      {/* ── Structured data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main
        style={{
          background: bg,
          color: text,
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          minHeight: '100vh',
          lineHeight: 1.78,
        }}
      >
        {/* ── Hero ── */}
        <header
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '80px 24px 56px',
          }}
        >
          <p
            style={{
              color: accent,
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            MEOK AI LABS &mdash; Mental Health &amp; Anxiety
          </p>

          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 50px)',
              fontWeight: 800,
              lineHeight: 1.18,
              marginBottom: '28px',
              letterSpacing: '-0.025em',
            }}
          >
            AI for Health Anxiety:{' '}
            <span style={{ color: accent }}>
              Managing the Spiral Before It Starts
            </span>
          </h1>

          <p
            style={{
              fontSize: '19px',
              color: muted,
              marginBottom: '32px',
              maxWidth: '680px',
            }}
          >
            Health anxiety is not attention-seeking or weakness. It is a genuine anxiety disorder
            in which your own body becomes the thing you fear most. This guide explains what is
            actually happening — and how MEOK can help interrupt the spiral before it swallows
            your day.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '14px', color: muted }}>
              By Nicholas Templeman &bull; 25 March 2026
            </span>
            <span
              style={{
                background: accentFaint,
                border: `1px solid ${borderAccent}`,
                color: accent,
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '20px',
              }}
            >
              Mental Health
            </span>
          </div>
        </header>

        {/* ── Content wrapper ── */}
        <article
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '0 24px 96px',
          }}
        >

          {/* ── Disclaimer banner ── */}
          <div
            style={{
              background: 'rgba(106,170,100,0.08)',
              border: `1px solid ${borderAccent}`,
              borderRadius: '12px',
              padding: '20px 24px',
              marginBottom: '56px',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                color: muted,
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: text }}>Important:</strong> MEOK is a personal AI companion,
              not a medical service. Nothing in this article constitutes medical advice or diagnosis.
              If you are concerned about a physical symptom, please contact your GP or call
              NHS 111. If you are in crisis, call 999 or the Samaritans on 116 123.
            </p>
          </div>

          {/* ── Intro prose ── */}
          <p
            style={{
              fontSize: '17px',
              marginBottom: '20px',
            }}
          >
            There is a particular kind of exhaustion that comes with health anxiety. It is not the
            tiredness of physical illness. It is the tiredness of watching your body all day long —
            cataloguing every twinge, every heartbeat that seems slightly wrong, every headache that
            could be something more — and then spending hours trying to disprove the fear, only to
            wake up and start again.
          </p>

          <p
            style={{
              fontSize: '17px',
              marginBottom: '48px',
            }}
          >
            If that describes you, you are not alone, and you are not dramatic. Health anxiety —
            clinically called illness anxiety disorder — affects millions of people and is one of
            the most under-discussed mental health conditions. It is also, with the right support,
            highly treatable.
          </p>

          {/* ── Divider ── */}
          <hr
            style={{
              border: 'none',
              borderTop: `1px solid ${borderSubtle}`,
              marginBottom: '48px',
            }}
          />

          {/* ── Section 1 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            What Is Health Anxiety, Really?
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            The word &ldquo;hypochondria&rdquo; has been used dismissively for centuries — summoning
            an image of someone who complains without cause, who craves sympathy, who is somehow
            making it up. This framing is both medically wrong and deeply harmful.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Illness anxiety disorder is a recognised anxiety disorder in the DSM-5 and ICD-11. It
            is characterised by persistent, excessive preoccupation with having or developing a
            serious illness, in a way that is disproportionate to any actual medical evidence and
            that causes significant distress or impairment.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            What is happening inside the brain is a real process. The threat-detection system —
            principally the amygdala — has become sensitised to bodily signals. Sensations that a
            person without health anxiety would barely notice become data points in a case being
            constructed for illness. The interpretation is automatic. The fear is genuine. The
            suffering is real.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            The body does not become a source of comfort. It becomes the thing you cannot stop
            monitoring — a landscape full of potential threat, where silence means &ldquo;nothing
            wrong yet&rdquo; rather than &ldquo;all is well.&rdquo;
          </p>

          <div
            style={{
              background: cardBg,
              border: `1px solid ${borderSubtle}`,
              borderLeft: `3px solid ${accent}`,
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '48px',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                color: muted,
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Health anxiety is not the same as being cautious about your health. The distinction
              is in the proportion: a cautious person notices a symptom and makes a sensible
              decision about it. A person with health anxiety notices a symptom and cannot rest
              until the worst-case scenario has been fully disproved — a bar that can never
              actually be met.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            How Does the Spiral Pattern Work?
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Understanding the mechanics of the health anxiety spiral is the first step in
            interrupting it. The pattern follows a consistent sequence, often completing in
            minutes before cycling through again.
          </p>

          {/* Spiral steps */}
          {[
            {
              step: '01',
              title: 'Notice a physical sensation',
              body: 'A muscle twitch. A mild headache. A heartbeat that felt slightly irregular. The sensation itself is usually benign — but in a health-anxious brain, it is flagged as potentially significant.',
            },
            {
              step: '02',
              title: 'Search for an explanation',
              body: "The mind immediately begins working to categorise the sensation. Without a reassuring explanation, anxiety rises. The most available tool for explanation — the internet — is reached for almost reflexively.",
            },
            {
              step: '03',
              title: 'Catastrophise through search results',
              body: "Search engines surface the most alarming possibilities first. The person reads about rare, serious conditions. Each result feels like partial confirmation. The mind cherry-picks evidence that fits the feared diagnosis.",
            },
            {
              step: '04',
              title: 'Physical symptoms worsen',
              body: "Anxiety itself produces physical symptoms: palpitations, chest tightness, shortness of breath, dizziness, tingling in the extremities. These new symptoms then become additional evidence for the feared illness — a cruelly self-reinforcing mechanism.",
            },
            {
              step: '05',
              title: '"Proof" and escalation',
              body: "The worsened physical symptoms are interpreted as confirmation that something is wrong. The fear justifies itself. More searching follows. The spiral deepens.",
            },
            {
              step: '06',
              title: 'Temporary relief — then reset',
              body: "Eventually exhaustion or distraction provides temporary respite. But the underlying fear was never processed — only outrun. It returns, usually within hours, often on the same topic or a new one.",
            },
          ].map(({ step, title, body }) => (
            <div
              key={step}
              style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '24px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  background: accentFaint,
                  border: `1px solid ${borderAccent}`,
                  borderRadius: '8px',
                  color: accent,
                  fontWeight: 800,
                  fontSize: '14px',
                  minWidth: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {step}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '16px',
                    marginBottom: '6px',
                  }}
                >
                  {title}
                </p>
                <p style={{ fontSize: '15px', color: muted, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}

          <p style={{ fontSize: '17px', marginBottom: '48px', marginTop: '8px' }}>
            The spiral is not irrational from the inside. Each step feels logical. The problem
            is that the entire framework rests on a premise — that certainty about health is
            achievable through searching — that is simply untrue. No amount of Googling can
            provide the certainty anxiety demands.
          </p>

          {/* ── Section 3 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            Why Does Googling Symptoms Make Health Anxiety Worse?
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            This is worth dwelling on, because it runs counter to the instinct that information
            is neutral and that knowing more is always better. For health anxiety specifically,
            the evidence is clear: symptom-searching online reliably makes things worse.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            There are several interlocking reasons for this.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            <strong style={{ color: text }}>Search algorithms optimise for engagement, not accuracy.</strong>{' '}
            Alarming health content generates clicks. Rare and serious diagnoses are prominently
            featured not because they are likely but because they are frightening. The probability
            of any given diagnosis is invisible to the reader; the description of its symptoms is
            vivid and accessible.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            <strong style={{ color: text }}>Symptom overlap is ubiquitous.</strong>{' '}
            Almost every serious condition shares symptoms with benign conditions. Fatigue appears
            in clinical depression, vitamin D deficiency, thyroid disorders, and dozens of cancers.
            A health-anxious person reading a symptom list will inevitably find their experience
            described — not because they have the condition, but because symptoms are not specific.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            <strong style={{ color: text }}>Each search expands the threat model.</strong>{' '}
            Before a search, the person worried about condition X. After the search, they have been
            introduced to conditions Y, Z, and several they had never previously heard of. The next
            episode of health anxiety has more ammunition than the last.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            <strong style={{ color: text }}>Searching is itself a compulsion.</strong>{' '}
            The relief it provides is real but brief. The brain learns that searching is how you
            manage health anxiety — which means the urge to search becomes stronger, not weaker,
            over time. This is the same mechanism that maintains OCD: the compulsion provides
            temporary relief that reinforces the obsession.
          </p>

          <div
            style={{
              background: accentFaint,
              border: `1px solid ${borderAccent}`,
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '48px',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '15px',
                marginBottom: '10px',
                color: accent,
              }}
            >
              What to do instead of searching:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                fontSize: '15px',
                color: muted,
                lineHeight: 1.8,
              }}
            >
              <li>Notice the urge to search without acting on it — the urge itself is data about your anxiety, not about your health</li>
              <li>Set a timer: if you still feel concerned in 24 hours, call NHS 111 rather than searching</li>
              <li>Talk to someone — not for reassurance, but to externalise the worry and break the internal loop</li>
              <li>Use grounding techniques to reduce the physiological anxiety that is generating the &ldquo;evidence&rdquo;</li>
              <li>Write down the specific fear and schedule a time to review it — deferring rather than suppressing</li>
            </ul>
          </div>

          {/* ── Section 4 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            How Does MEOK Interrupt the Spiral?
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            When a person opens a search engine in the grip of health anxiety, they are looking
            for one thing: certainty that they do not have what they fear. The search engine
            cannot provide that. It can only provide more information, which feeds the fear.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            MEOK approaches the moment differently. When you describe a health worry to MEOK, the
            response is not a list of possible diagnoses. It is an acknowledgement of the anxiety
            itself — and then a gentle, evidence-based redirection.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            This matters because the spiral is primarily an emotional event, not an information
            problem. What is needed is not more data about the symptom. What is needed is
            something that speaks to the fear.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            MEOK does this by:
          </p>

          <div
            style={{
              display: 'grid',
              gap: '16px',
              marginBottom: '48px',
            }}
          >
            {[
              {
                title: 'Naming the pattern',
                body: 'MEOK can recognise when a conversation is entering health anxiety territory and name what is happening — not dismissively, but accurately. "This sounds like a familiar spiral. Let\'s look at it together."',
              },
              {
                title: 'Redirecting to the emotion',
                body: 'Rather than engaging with the symptom content, MEOK redirects to the feeling underneath. What is the fear really about? Often health anxiety is a displaced form of existential anxiety — a fear of loss of control, of death, of being let down by one\'s own body.',
              },
              {
                title: 'Reality-testing without false reassurance',
                body: 'MEOK can walk you through a reality-testing exercise: what is the evidence for the feared interpretation? What is the evidence against? What would you say to a friend who described this situation? This is cognitive defusion — creating distance between you and the thought.',
              },
              {
                title: 'Calibrating the next step',
                body: 'MEOK will not tell you your symptom is nothing. It will help you think through whether this concern warrants a GP call — and if so, support you in making that call rather than searching instead.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  background: cardBg,
                  border: `1px solid ${borderSubtle}`,
                  borderRadius: '10px',
                  padding: '20px 24px',
                }}
              >
                <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
                  {title}
                </p>
                <p style={{ fontSize: '15px', color: muted, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* ── Section 5 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            The Role of Sovereign Memory: Your Worry History as Useful Data
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            One of the most powerful aspects of MEOK&rsquo;s approach to health anxiety is
            Sovereign Memory — the ability to remember previous conversations and track patterns
            across time, with data that is yours and only yours.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            This matters in a very practical way. Health anxiety often revisits the same
            categories of worry — the same organs, the same feared conditions, the same types
            of sensation — cycling back to them weeks or months later. In each episode, the
            fear feels fresh and urgent. But viewed across time, a pattern emerges.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Sovereign Memory allows MEOK to say something like: &ldquo;You mentioned this exact
            concern about chest tightness four months ago. You saw your GP. They found nothing of
            concern. What happened to the worry after that?&rdquo; This is not dismissive. It is
            data. It creates a longitudinal view that a search engine, a GP with a ten-minute
            appointment, and even a weekly therapist often cannot provide.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Over time, Sovereign Memory builds a picture of:
          </p>

          <ul
            style={{
              paddingLeft: '24px',
              fontSize: '17px',
              marginBottom: '20px',
              lineHeight: 1.9,
            }}
          >
            <li>Which symptom categories you return to most often</li>
            <li>What life circumstances tend to precede a health anxiety episode</li>
            <li>How previous episodes resolved — and how long they lasted</li>
            <li>Whether your anxiety is escalating, stable, or reducing over time</li>
            <li>Patterns that might suggest a GP visit is warranted versus a coping exercise</li>
          </ul>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            This kind of longitudinal self-knowledge is therapeutic in itself. Research in CBT
            consistently shows that the ability to observe one&rsquo;s own patterns — rather than
            being consumed by each episode individually — is a core component of recovery.
          </p>

          <div
            style={{
              background: cardBg,
              borderLeft: `3px solid ${accent}`,
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '48px',
            }}
          >
            <p style={{ fontSize: '15px', color: muted, margin: 0, fontStyle: 'italic' }}>
              Sovereign Memory data is yours. It is not used to train models, not shared with
              third parties, and not accessible to MEOK AI LABS. You own your worry history —
              and you can delete it at any time.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            When Is a Symptom Worth a Doctor&rsquo;s Visit?
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            This is the question health anxiety makes almost impossible to answer clearly.
            The disorder creates two equally unhealthy extremes: catastrophising every sensation
            into a medical emergency, or — in some people — avoiding medical care entirely because
            they fear what they might be told.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            MEOK will not tell you that your symptom is nothing and that you should not see a
            doctor. That would be both medically irresponsible and therapeutically wrong — it
            is the kind of false reassurance that temporarily relieves anxiety while reinforcing
            the seeking behaviour.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            What MEOK can do is help you calibrate. There are genuine clinical red flags that
            merit prompt medical attention — and there are sensations that, while distressing
            to a health-anxious person, sit well within the range of benign variation. The
            distinction is not something AI should arbitrate, but MEOK can help you think
            through the question honestly:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.25)',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#f87171',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Always contact a GP or 111 for:
              </p>
              <ul
                style={{
                  paddingLeft: '16px',
                  fontSize: '14px',
                  color: muted,
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                <li>Chest pain or pressure, especially with arm or jaw pain</li>
                <li>Sudden severe headache unlike any before</li>
                <li>Unexplained weight loss over several weeks</li>
                <li>Blood where it should not be</li>
                <li>New neurological symptoms (loss of speech, weakness, vision changes)</li>
                <li>Any symptom that is genuinely new, persistent, and worsening</li>
              </ul>
            </div>
            <div
              style={{
                background: accentFaint,
                border: `1px solid ${borderAccent}`,
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  color: accent,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Signs it may be anxiety first:
              </p>
              <ul
                style={{
                  paddingLeft: '16px',
                  fontSize: '14px',
                  color: muted,
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                <li>Symptom worsens as you focus on it and lessens when distracted</li>
                <li>Similar concern arose before and resolved without treatment</li>
                <li>Symptom appeared during or after a stressful period</li>
                <li>Multiple shifting symptoms in the same short timeframe</li>
                <li>Physical examination or tests previously normal for this concern</li>
                <li>Anxiety itself is high and recognisably driving the concern</li>
              </ul>
            </div>
          </div>

          <p style={{ fontSize: '15px', color: muted, marginBottom: '48px' }}>
            This table is not a clinical decision tool and does not replace professional advice.
            When in doubt, call rather than search.
          </p>

          {/* ── Section 7 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            CBT Techniques MEOK Can Walk You Through
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Cognitive Behavioural Therapy is the gold standard treatment for health anxiety,
            with strong evidence from randomised controlled trials. MEOK is not a replacement
            for a CBT therapist — but between sessions, or while waiting for access to treatment,
            it can walk you through core techniques that build genuine resilience.
          </p>

          {/* CBT cards */}
          {[
            {
              name: 'Cognitive Defusion',
              description:
                'Cognitive defusion, drawn from Acceptance and Commitment Therapy (ACT), teaches you to observe thoughts rather than be fused with them. Instead of "I might have cancer," the defused version is "I am noticing the thought that I might have cancer." The thought has not changed — but your relationship to it has. You are no longer inside the thought. You are watching it.',
              how: 'MEOK can guide you through defusion exercises in real time: naming the thought aloud, repeating it until it loses its charge, or imagining the thought written on a leaf floating down a stream.',
            },
            {
              name: 'Attention Training',
              description:
                'Health anxiety involves a narrowing of attentional focus onto the body. Attention training — developed specifically for health anxiety by Paul Salkovskis and refined by Adrian Wells — works by deliberately broadening that spotlight. When you are not monitoring your body, you are less likely to detect the normal sensations that feed the spiral.',
              how: 'MEOK can guide you through structured attention training: shifting focus between external sounds, objects, and sensations; practising rapid attention switching; and building the ability to choose where your attention goes rather than having it pulled by the body.',
            },
            {
              name: 'Acceptance and Uncertainty Tolerance',
              description:
                "Health anxiety is, at its core, an intolerance of uncertainty. The compulsive searching is an attempt to achieve certainty that is not achievable. Acceptance-based approaches work not by providing certainty but by building the capacity to function without it. The goal is not \"I know I am well\" but \"I can live well without knowing for certain.\"",
              how: "MEOK can walk you through acceptance exercises: sitting with the uncomfortable thought without acting on it, observing what the anxiety actually feels like in the body, and noting that the urge to search, while powerful, does not have to be obeyed.",
            },
            {
              name: 'Behavioural Experiments',
              description:
                "A core CBT technique for health anxiety involves designing and running small experiments to test feared predictions. If you believe that focusing on a physical sensation will cause it to worsen indefinitely, the experiment is to focus on it and observe what actually happens. In most cases the sensation fluctuates or reduces — disconfirming the catastrophic prediction.",
              how: "MEOK can help you design these experiments: identifying the specific feared prediction, planning the experiment, carrying it out, and reviewing the result. Over time, the data from your own experience undermines the catastrophic framework.",
            },
            {
              name: 'Worry Postponement',
              description:
                "Rather than trying to suppress health worries — which typically makes them worse — worry postponement involves scheduling a specific time to worry and deferring the spiral to that time. When a worry arises, you note it down and agree to engage with it at 5pm, then redirect attention. At 5pm, many worries have naturally reduced.",
              how: "MEOK can act as your worry postponement anchor: you tell it the worry, it stores it, and reminds you at your scheduled time — at which point you can process it with support rather than in the grip of an acute spiral.",
            },
          ].map(({ name, description, how }) => (
            <div
              key={name}
              style={{
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '20px',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '17px',
                  color: accent,
                  marginBottom: '10px',
                }}
              >
                {name}
              </p>
              <p style={{ fontSize: '15px', color: muted, marginBottom: '12px' }}>
                {description}
              </p>
              <p style={{ fontSize: '14px', color: text, margin: 0 }}>
                <strong>How MEOK helps:</strong> {how}
              </p>
            </div>
          ))}

          <p style={{ fontSize: '15px', color: muted, marginBottom: '48px' }}>
            These techniques are distilled from evidence-based therapy. They work best within a
            broader treatment programme. If you have access to NHS Talking Therapies or a private
            CBT therapist, MEOK works alongside that care — not instead of it.
          </p>

          {/* ── Section 8 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            The Reassurance-Seeking Trap: Why Repeated Reassurance Makes Things Worse
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            If you live with health anxiety, you have probably experienced this: you tell someone
            about a worry. They say &ldquo;I&rsquo;m sure it&rsquo;s nothing.&rdquo; For a few
            hours, or even a day, you feel better. Then the fear comes back — often stronger —
            and you need to be reassured again.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            This is the reassurance-seeking trap. It is not a personal failure. It is a
            predictable consequence of how anxiety works.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            The mechanism is this: anxiety creates an aversive state. Seeking reassurance
            temporarily reduces that state. The brain records that seeking = relief. The
            threshold for tolerating uncertainty is lowered. The next episode of anxiety
            arrives sooner and with more intensity. The reassurance that worked last time
            is needed faster and more frequently.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Meanwhile, the people around you are trained to provide reassurance. Partners,
            parents, and close friends who love you will often say &ldquo;I&rsquo;m sure
            it&rsquo;s fine&rdquo; because it is the kind thing to say in the moment — not
            realising they are inadvertently maintaining your anxiety long-term.
          </p>

          <div
            style={{
              background: 'rgba(239,68,68,0.06)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '10px',
              padding: '20px 24px',
              marginBottom: '20px',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '15px',
                color: '#f87171',
                marginBottom: '8px',
              }}
            >
              The problem with &ldquo;I&rsquo;m sure it&rsquo;s nothing&rdquo;
            </p>
            <p style={{ fontSize: '14px', color: muted, margin: 0 }}>
              When you receive reassurance, the anxiety reduces — but the underlying belief that
              something might be wrong is not challenged; it is only temporarily suppressed. The
              fear returns because it was never actually addressed. Over time, the reassurance-seeking
              escalates: more frequent, from more sources, for longer, before it takes effect. This
              is a progressive condition if left unaddressed.
            </p>
          </div>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            MEOK handles this differently from a search engine, a loved one, or even a well-meaning
            GP. Rather than providing the sought reassurance, MEOK will:
          </p>

          <ul
            style={{
              paddingLeft: '24px',
              fontSize: '17px',
              marginBottom: '20px',
              lineHeight: 1.9,
            }}
          >
            <li>Acknowledge the distress without validating the catastrophic interpretation</li>
            <li>Decline to say &ldquo;I&rsquo;m sure you&rsquo;re fine&rdquo; — because MEOK cannot know that and because saying it would not help</li>
            <li>Redirect toward processing the anxiety rather than answering the health question</li>
            <li>Point out, gently, when a pattern of reassurance-seeking is occurring across multiple conversations</li>
          </ul>

          <p style={{ fontSize: '17px', marginBottom: '48px' }}>
            This approach can feel frustrating at first — especially if you are accustomed to
            reassurance as a management strategy. But the frustration is evidence that the
            approach is working. MEOK is declining to feed the spiral. Over time, the ability
            to tolerate uncertainty without seeking resolution becomes stronger.
          </p>

          {/* ── Section 9 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            Co-Occurrence: Health Anxiety, OCD, GAD, and Depression
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Health anxiety rarely travels alone. It has significant mechanistic and clinical
            overlap with several other conditions, and understanding this is important both for
            accurate self-understanding and for choosing the right professional support.
          </p>

          <div
            style={{
              display: 'grid',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {[
              {
                condition: 'Obsessive-Compulsive Disorder (OCD)',
                relationship:
                  'Health anxiety and OCD share the core mechanism of obsession and compulsion. The feared thought (I might be seriously ill) functions as an obsession; the checking and searching functions as a compulsion. For some people, health anxiety is best understood as a subtype of OCD. The CBT treatment for OCD — Exposure and Response Prevention (ERP) — is often the most effective approach when this is the case.',
              },
              {
                condition: 'Generalised Anxiety Disorder (GAD)',
                relationship:
                  'Many people with GAD experience health anxiety as one manifestation of a broader pattern of excessive worry. The worry is not specifically attached to health — it moves between topics. Health concerns may dominate at certain times and recede at others as the worry attaches to work, relationships, or finances instead. Treatment of the underlying GAD typically improves health anxiety as well.',
              },
              {
                condition: 'Depression',
                relationship:
                  'Depression and health anxiety have a bidirectional relationship. Persistent health anxiety is exhausting and leads to social withdrawal, loss of pleasurable activity, and hopelessness — which can develop into clinical depression. Conversely, depression lowers mood and increases negative appraisal of physical sensations. Each condition tends to maintain and worsen the other without targeted treatment.',
              },
              {
                condition: 'Panic Disorder',
                relationship:
                  'Panic attacks produce intense physical symptoms — racing heart, shortness of breath, chest tightness, tingling — that are frequently catastrophically misinterpreted as medical emergencies. For people with both panic disorder and health anxiety, each panic attack provides new fodder for the health anxiety cycle. The two conditions maintain each other; treating either one in isolation is often insufficient.',
              },
            ].map(({ condition, relationship }) => (
              <div
                key={condition}
                style={{
                  background: cardBg,
                  border: `1px solid ${borderSubtle}`,
                  borderRadius: '10px',
                  padding: '20px 24px',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '16px',
                    color: accent,
                    marginBottom: '8px',
                  }}
                >
                  {condition}
                </p>
                <p style={{ fontSize: '15px', color: muted, margin: 0 }}>
                  {relationship}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            MEOK does not treat any of these conditions in isolation. Its awareness of mental
            health across the whole person means it holds the broader picture — noticing when
            health anxiety may be part of a larger pattern that deserves professional attention.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '48px' }}>
            It will not diagnose you with OCD or GAD or depression. But it will gently reflect
            patterns back to you and support you in raising these with a professional when the
            time feels right.
          </p>

          {/* ── Section 10 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            What MEOK Does Not Do
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            Clarity about boundaries matters. MEOK is a personal AI companion, not a clinical
            service. The following things are outside what MEOK does — not because of technical
            limitation but as a matter of deliberate design.
          </p>

          <div
            style={{
              background: cardBg,
              border: `1px solid ${borderSubtle}`,
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '48px',
            }}
          >
            <ul
              style={{
                paddingLeft: '0',
                listStyle: 'none',
                margin: 0,
                fontSize: '16px',
                lineHeight: 1.9,
              }}
            >
              {[
                'MEOK does not diagnose medical conditions, full stop.',
                'MEOK does not interpret test results, scan reports, or clinical letters.',
                'MEOK does not tell you to ignore symptoms or that they are definitely benign.',
                'MEOK does not search symptom databases or medical literature on your behalf in response to health anxiety.',
                'MEOK does not replace your GP, a specialist, or a mental health professional.',
                'MEOK does not provide emergency support — if you are in crisis, please call 999 or Samaritans on 116 123.',
                'MEOK does not promise to improve your health anxiety — it provides tools and support, not outcomes.',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    paddingBottom: '8px',
                    borderBottom: `1px solid ${borderSubtle}`,
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      color: '#f87171',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    ✗
                  </span>
                  <span style={{ color: muted }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Section 11 ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            When to Seek Professional Help: UK Resources
          </h2>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            If health anxiety is interfering significantly with your daily life — affecting your
            work, your relationships, or your ability to enjoy things — professional support is
            appropriate and available. You do not have to wait until things are at crisis point.
          </p>

          <p style={{ fontSize: '17px', marginBottom: '24px' }}>
            The signs that professional support is warranted include:
          </p>

          <ul
            style={{
              paddingLeft: '24px',
              fontSize: '17px',
              marginBottom: '32px',
              lineHeight: 1.9,
            }}
          >
            <li>Spending more than an hour a day on health-related worry or checking</li>
            <li>Repeatedly visiting your GP or A&amp;E for reassurance rather than new symptoms</li>
            <li>Avoidance of medical appointments because you fear what you might hear</li>
            <li>Your close relationships are being strained by your health concerns</li>
            <li>You are using significant amounts of alcohol or medication to manage the anxiety</li>
            <li>You feel hopeless that your anxiety will ever improve</li>
          </ul>

          <p style={{ fontSize: '17px', marginBottom: '20px' }}>
            In the UK, the following routes to support are available:
          </p>

          <div
            style={{
              display: 'grid',
              gap: '16px',
              marginBottom: '48px',
            }}
          >
            {[
              {
                name: 'Your GP',
                detail:
                  'Your first port of call. GPs can refer you to NHS Talking Therapies (formerly IAPT) for CBT, prescribe medication where appropriate, and rule out underlying physical causes. Be honest about the anxiety component — many people with health anxiety present only the physical symptoms.',
              },
              {
                name: 'NHS Talking Therapies (formerly IAPT)',
                detail:
                  'You can self-refer to NHS Talking Therapies in England without a GP referral. They provide CBT for health anxiety and related conditions, typically over 6–20 sessions. Waiting times vary by area. Find your local service at nhs.uk/mental-health/talking-therapies.',
              },
              {
                name: 'Anxiety UK',
                detail:
                  'A leading UK charity offering therapy services, peer support, and information for people with anxiety disorders including health anxiety. Their therapist network includes CBT specialists with specific health anxiety expertise. Visit anxietyuk.org.uk.',
              },
              {
                name: 'OCD UK',
                detail:
                  'If your health anxiety has an OCD quality — intrusive thoughts you feel compelled to resolve through checking — OCD UK provides resources and therapist referrals specialising in ERP. Visit ocduk.org.',
              },
              {
                name: 'Mind',
                detail:
                  'The UK\'s leading mental health charity provides accessible information about health anxiety and links to local Mind services. Their helpline is 0300 123 3393. Visit mind.org.uk.',
              },
              {
                name: 'BABCP Therapist Directory',
                detail:
                  'For private CBT therapy, the British Association for Behavioural and Cognitive Psychotherapies maintains an accredited therapist directory. You can filter by speciality including health anxiety and OCD. Visit babcp.com.',
              },
            ].map(({ name, detail }) => (
              <div
                key={name}
                style={{
                  background: cardBg,
                  border: `1px solid ${borderSubtle}`,
                  borderRadius: '10px',
                  padding: '20px 24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    color: accent,
                    fontWeight: 800,
                    fontSize: '18px',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  →
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>
                    {name}
                  </p>
                  <p style={{ fontSize: '14px', color: muted, margin: 0 }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── FAQ Section ── */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              marginBottom: '32px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ marginBottom: '48px' }}>
            {[
              {
                q: 'What is health anxiety and is it a real condition?',
                a: "Yes. Illness anxiety disorder is a recognised anxiety disorder characterised by persistent, excessive fear of having or developing a serious illness — causing significant distress even when medical investigations come back clear. It is not attention-seeking or weakness. It is a genuine condition with evidence-based treatments.",
              },
              {
                q: 'Why does Googling symptoms make health anxiety worse?',
                a: "Search engines surface alarming conditions prominently because they generate clicks. For health-anxious people, each search provides brief relief followed by sharper fear — and introduces new conditions they had not previously worried about. The checking behaviour itself becomes a compulsion. Emerging from a symptom-search session more distressed than before is the norm, not the exception.",
              },
              {
                q: 'What is the reassurance-seeking trap and how does MEOK avoid it?',
                a: "Reassurance-seeking provides temporary relief that reinforces the anxiety long-term — lowering the threshold for tolerating uncertainty and making each subsequent episode harder to manage without seeking. MEOK declines to provide diagnostic reassurance. Instead it processes the anxiety underneath the symptom worry, using Sovereign Memory, CBT techniques, and gentle reality-testing that builds genuine tolerance rather than temporary silencing.",
              },
              {
                q: 'Can MEOK tell me whether my symptom is serious?',
                a: "No — by design. MEOK does not diagnose or give medical opinions. What MEOK can do is help you think through whether your concern meets the threshold where contacting a GP or NHS 111 is appropriate, and what you have previously worried about and how those episodes resolved. Calibration, not diagnosis.",
              },
              {
                q: 'What CBT techniques can MEOK walk me through for health anxiety?',
                a: "Cognitive defusion (observing thoughts rather than being fused with them), attention training (deliberately broadening attention away from the body), acceptance and uncertainty tolerance, behavioural experiments (testing feared predictions), and worry postponement. These are evidence-based tools; MEOK makes them accessible between therapy sessions.",
              },
              {
                q: 'Does health anxiety often occur alongside other conditions?',
                a: "Yes — frequently. Health anxiety has significant overlap with OCD (where it may be best understood as a subtype), generalised anxiety disorder, depression, and panic disorder. MEOK holds awareness of your whole mental health picture across conversations, rather than treating each concern in isolation.",
              },
              {
                q: 'When should I seek professional help for health anxiety?',
                a: "If health anxiety is affecting your work, relationships, or daily life — or if you are spending more than an hour a day on worry or checking — professional support is appropriate. In the UK: self-refer to NHS Talking Therapies, contact Anxiety UK, speak to your GP, or find an accredited CBT therapist via the BABCP directory.",
              },
            ].map(({ q, a }, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: `1px solid ${borderSubtle}`,
                  padding: '24px 0',
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: '17px',
                    marginBottom: '12px',
                    color: text,
                  }}
                >
                  {q}
                </p>
                <p style={{ fontSize: '16px', color: muted, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>

          {/* ── Closing prose ── */}
          <div
            style={{
              background: cardBg,
              border: `1px solid ${borderSubtle}`,
              borderRadius: '12px',
              padding: '32px',
              marginBottom: '56px',
            }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: '20px',
                marginBottom: '16px',
                color: text,
                lineHeight: 1.4,
              }}
            >
              A note to anyone reading this in the middle of a spiral
            </p>
            <p style={{ fontSize: '16px', color: muted, marginBottom: '16px' }}>
              If you found this page by searching a symptom at 2am and have been reading for the
              past half hour, you are almost certainly in the grip of health anxiety right now.
              That is okay. It makes sense that you are here.
            </p>
            <p style={{ fontSize: '16px', color: muted, marginBottom: '16px' }}>
              The thing that will help most is not reading further medical information. It is
              stopping the search, doing something grounding, and noticing that the spiral has
              been running — and then deciding whether to get support.
            </p>
            <p style={{ fontSize: '16px', color: muted, margin: 0 }}>
              If you want company through the anxiety rather than more answers to it, MEOK is
              there. It will not feed the spiral. It will sit with you in it.
            </p>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: `linear-gradient(135deg, rgba(106,170,100,0.12) 0%, rgba(106,170,100,0.06) 100%)`,
              border: `1px solid ${borderAccent}`,
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: accent,
                marginBottom: '16px',
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 34px)',
                fontWeight: 800,
                marginBottom: '16px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Meet an AI that doesn&rsquo;t feed your spiral
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: muted,
                marginBottom: '32px',
                maxWidth: '520px',
                margin: '0 auto 32px',
              }}
            >
              MEOK interrupts the health anxiety loop with gentle reality-testing, Sovereign
              Memory, and CBT-based tools — while always referring you to professional care
              when that is what is needed.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: accent,
                color: '#0d0c18',
                fontWeight: 700,
                fontSize: '16px',
                padding: '16px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Begin with MEOK
            </Link>
            <p
              style={{
                fontSize: '13px',
                color: muted,
                marginTop: '16px',
              }}
            >
              No diagnosis. No false reassurance. Just support.
            </p>
          </div>

          {/* ── Back link ── */}
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link
              href="/blog"
              style={{
                color: muted,
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              &larr; Back to the MEOK blog
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
