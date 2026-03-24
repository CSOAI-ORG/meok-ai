import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Somatic Symptom Anxiety: Real Pain, Real Fear, Real Help | MEOK AI LABS',
  description:
    'Somatic symptom anxiety makes physical sensations feel catastrophic. Learn how MEOK helps break the health anxiety cycle without searching medical databases or providing diagnostic reassurance — and why that matters.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-health-anxiety-symptoms' },
  openGraph: {
    title: 'AI for Somatic Symptom Anxiety: Real Pain, Real Fear, Real Help',
    description:
      'Somatic symptoms are real. The fear that amplifies them is also real. MEOK helps with health anxiety by addressing the anxiety — not the symptom list.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-health-anxiety-symptoms',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Somatic+Symptom+Anxiety&desc=Real+Pain%2C+Real+Fear%2C+Real+Help',
        width: 1200,
        height: 630,
        alt: 'AI for Somatic Symptom Anxiety: Real Pain, Real Fear, Real Help | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Somatic Symptom Anxiety: Real Pain, Real Fear, Real Help',
    description:
      'How MEOK helps with health anxiety and somatic symptoms without feeding the reassurance-seeking cycle. Built by @meok_ai.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Somatic+Symptom+Anxiety&desc=Real+Pain%2C+Real+Fear%2C+Real+Help',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Somatic Symptom Anxiety: Real Pain, Real Fear, Real Help',
  description:
    'Somatic symptom anxiety produces real physical sensations amplified by anxiety. This article explains the health anxiety cycle, how MEOK avoids making it worse through its Maternal Covenant design principle, and how Sovereign Memory helps identify triggers and patterns.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  url: 'https://meok.ai/blog/ai-for-health-anxiety-symptoms',
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
    '@id': 'https://meok.ai/blog/ai-for-health-anxiety-symptoms',
  },
  keywords: [
    'AI for health anxiety',
    'somatic symptom anxiety',
    'AI for somatic symptom disorder',
    'health anxiety support',
    'AI for hypochondria',
    'somatic symptoms anxiety',
    'health anxiety cycle',
    'reassurance seeking health anxiety',
    'AI mental health UK',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is health anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Health anxiety (formerly called hypochondria, now termed illness anxiety disorder or somatic symptom disorder depending on presentation) is a condition where a person experiences persistent, excessive worry about having or developing a serious illness. The worry continues even when medical tests come back clear, or rapidly transfers to a new concern. It is recognised as a genuine mental health condition and is highly treatable with evidence-based therapies including CBT and ACT.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with health anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can help with health anxiety only when it is specifically designed not to feed the reassurance cycle. Most AI tools make health anxiety worse because they act as a sophisticated symptom search engine — providing information that briefly soothes but ultimately reinforces the checking behaviour. MEOK is built differently: it addresses the underlying anxiety rather than the symptom, uses memory to identify patterns, and declines to provide diagnostic reassurance in line with its Maternal Covenant design principle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will MEOK look up my symptoms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK deliberately does not search medical databases or symptom checkers. This is not a technical limitation — it is a design choice. Searching medical information in response to health anxiety questions would reinforce the very behaviour MEOK is designed to interrupt. If you describe a physical symptom, MEOK will acknowledge the distress and, where appropriate, encourage you to contact your GP or NHS 111 rather than return a list of possible diagnoses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is somatic symptom disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Somatic symptom disorder (SSD) is a condition where a person experiences one or more physical symptoms — such as pain, fatigue, or shortness of breath — that cause significant distress, along with excessive thoughts, feelings, or behaviours related to those symptoms. Crucially, the symptoms are real, not imagined. Anxiety amplifies the nervous system\u2019s sensitivity, so sensations that a non-anxious person would barely notice can become overwhelming. SSD is diagnosed and treated by healthcare professionals, not AI tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK avoid making health anxiety worse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK follows its Maternal Covenant: a core design principle that prioritises long-term wellbeing over short-term comfort. In practice this means MEOK will not provide diagnostic reassurance, will not search symptom databases, and will not validate catastrophic interpretations of physical sensations. Instead it redirects toward the emotion underneath the symptom worry, uses Sovereign Memory to surface patterns and triggers, and maintains appropriate warmth throughout — signposting GP care whenever a clinical concern is raised.',
      },
    },
  ],
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForSomaticSymptomAnxietyPage() {
  const bg = '#0d0c18'
  const text = '#f5f0e8'
  const gold = '#c9a84c'
  const muted = 'rgba(245,240,232,0.6)'
  const cardBg = 'rgba(255,255,255,0.04)'
  const borderColor = 'rgba(201,168,76,0.25)'
  const borderSubtle = 'rgba(245,240,232,0.1)'

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
          lineHeight: 1.75,
        }}
      >
        {/* ── Hero ── */}
        <header
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '80px 24px 48px',
          }}
        >
          <p
            style={{
              color: gold,
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
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            AI for Somatic Symptom Anxiety:{' '}
            <span style={{ color: gold }}>
              Real Pain, Real Fear, Real Help
            </span>
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: muted,
              maxWidth: '640px',
              marginBottom: '32px',
              lineHeight: 1.7,
            }}
          >
            Your symptoms are not imaginary. The fear that amplifies them is not
            weakness. And the reassurance you are searching for online is not
            going to fix either. This is what health anxiety actually is, why
            the Google symptom spiral makes it worse, and how MEOK is built to
            help differently.
          </p>

          {/* Byline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px',
              color: muted,
              paddingBottom: '32px',
              borderBottom: `1px solid ${borderSubtle}`,
            }}
          >
            <span>By Nicholas Templeman, Founder &mdash; MEOK AI LABS</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>24 March 2026</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>~14 min read</span>
          </div>
        </header>

        {/* ── Medical disclaimer ── */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '0 24px 40px',
          }}
        >
          <div
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: `1px solid ${borderColor}`,
              borderRadius: '12px',
              padding: '20px 24px',
              fontSize: '14px',
              color: muted,
              lineHeight: 1.65,
            }}
          >
            <strong style={{ color: gold }}>Important:</strong> This article is
            for informational and emotional support purposes only. MEOK is not a
            medical device, does not diagnose conditions, and is not a substitute
            for professional healthcare. If you have a physical symptom that
            concerns you, please contact your GP or call NHS 111.
          </div>
        </div>

        {/* ── Body ── */}
        <article
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '0 24px 80px',
          }}
        >
          {/* ── Section 1 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              What is health anxiety and why is it so hard to shake?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Health anxiety is persistent, excessive worry about having or
              developing a serious illness — worry that continues even when
              medical reassurance has been given, and which often transfers
              rapidly to a new concern once the old one is resolved. It affects
              an estimated 4&ndash;5% of the population and is highly treatable,
              yet frequently goes unrecognised for years.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              The older term &ldquo;hypochondria&rdquo; is now considered
              outdated and mildly stigmatising. Clinically, presentations fall
              under two modern labels depending on whether the physical symptoms
              themselves are prominent: <em>illness anxiety disorder</em> (where
              the worry is the main feature) and{' '}
              <em>somatic symptom disorder</em> (where real, distressing physical
              sensations are central). Both conditions involve the same
              underlying loop: a physical sensation is noticed, the brain
              interprets it as potentially dangerous, anxiety spikes, the
              sensation is amplified by that anxiety, more checking occurs, and
              so it continues.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              What makes health anxiety so tenacious is that it has its own
              internal logic. Checking feels rational. Googling feels responsible.
              Seeking reassurance from a doctor, a partner, or a stranger on
              the internet feels like the obviously correct response to genuine
              physical distress. And each time a check produces a negative
              result &mdash; &ldquo;your tests are clear&rdquo; &mdash; there
              is a moment of relief so rewarding that the brain files checking
              away as an effective coping mechanism. It is not. It is a
              temporary analgesic that leaves the underlying wound untouched.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              The cruel mathematics of health anxiety is this: the relief
              generated by one reassurance-seeking episode shortens with each
              repetition. You need to check sooner, more frequently, and with
              greater intensity. Meanwhile your symptom repertoire expands.
              Three months ago you were worried about your heart. Now you are
              worried about your heart, your lungs, a specific headache pattern,
              and something you read about neurological symptoms at 2am. The
              anxiety did not protect you. It fed itself.
            </p>
          </section>

          {/* ── Section 2 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              What are somatic symptoms and why are they real, not imagined?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Somatic symptoms are genuine physical sensations &mdash; pain,
              tightness, tingling, fatigue, nausea &mdash; produced or
              significantly amplified by the nervous system\u2019s anxious state.
              They are not invented. They are not &ldquo;all in your head&rdquo;
              in the dismissive sense. They are real signals from a nervous
              system in overdrive.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Understanding why this matters changes everything. For decades
              people with health anxiety were implicitly or explicitly told their
              symptoms were fabricated. &ldquo;We can\u2019t find anything
              wrong.&rdquo; &ldquo;You\u2019re perfectly healthy.&rdquo; Both
              statements are often technically true and yet they compound the
              problem. Being told a sensation you genuinely feel does not
              officially exist is destabilising. It breeds distrust of the
              medical system and a more frantic search for validation.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Modern neuroscience offers a far more useful frame. The nervous
              system does not distinguish neatly between psychological and
              physical experience. Anxiety activates the sympathetic nervous
              system, raising heart rate, constricting blood vessels, tensing
              muscles, and altering gut motility. These are measurable
              physiological events. A person with chronic health anxiety who
              notices their heart beating faster is not imagining it &mdash;
              their heart may actually be beating faster, because their anxiety
              has triggered a stress response. The sensation is real. The
              catastrophic interpretation of it is the cognitive distortion.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              This distinction matters for treatment. If you try to argue someone
              out of a somatic symptom by insisting it does not exist, you will
              fail. The right move is to acknowledge the sensation, reduce the
              threat level the nervous system has assigned to it, and address
              the underlying anxiety state that is amplifying everything. That
              is the direction both ACT (Acceptance and Commitment Therapy) and
              CBT (Cognitive Behavioural Therapy) tend in, and it is the
              direction MEOK takes.
            </p>

            {/* Callout box */}
            <div
              style={{
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '15px',
                  color: muted,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                <strong style={{ color: text }}>Common somatic symptoms associated with anxiety:</strong>{' '}
                racing or irregular heartbeat, chest tightness, shortness of
                breath, dizziness or light-headedness, tingling in hands or
                feet, nausea, stomach pain, muscle tension, fatigue, headaches,
                and a general sense of physical unease. Each of these has
                legitimate anxiety-mediated physiological causes. None of them,
                in isolation, confirms a serious illness &mdash; though all of
                them merit a GP review if they are new, persistent, or
                accompanied by other symptoms.
              </p>
            </div>
          </section>

          {/* ── Section 3 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              Why does Googling symptoms make health anxiety worse?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Searching symptoms online temporarily relieves anxiety by providing
              information. But that relief lasts minutes. Then the anxiety
              reattaches to a new interpretation of the same data, or to a new
              condition you discovered during the search. Each cycle
              simultaneously rewards the checking behaviour and expands the
              threat model. This is the Google spiral, and it is catastrophically
              effective at maintaining health anxiety long-term.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Cyberchondria &mdash; the clinical term for health anxiety
              exacerbated by internet health searches &mdash; is now a
              well-documented phenomenon. Research published in peer-reviewed
              journals consistently shows that people with health anxiety who
              search their symptoms online report higher anxiety after the search,
              not lower. The mechanism is straightforward: search engines
              optimise for engagement, not for clinical probability. The rare,
              serious diagnosis gets more clicks than &ldquo;probably nothing.&rdquo;
              So the results are skewed toward the alarming. Your brain, already
              in threat-detection mode, picks the scariest result from the list
              and treats it as the most likely.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              There is also the problem of breadth. Before the search, you were
              worried about one symptom. After it, you are worried about that
              symptom plus every related condition that appeared in the results
              plus any side-effects of treatments mentioned plus any other
              searches you followed. You leave the session with a larger
              catalogue of threats than you arrived with. This is not a glitch
              in your personality. It is a predictable consequence of using an
              attention-optimisation system to manage a fear-amplification
              disorder.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              The standard clinical guidance for health anxiety explicitly
              includes symptom-searching reduction as a behavioural target.
              It sits alongside reducing doctor visits, body-checking behaviours,
              and reassurance-seeking from others. All of these feel helpful.
              None of them are. The common mechanism is that they temporarily
              reduce anxiety without addressing the anxiety state itself &mdash;
              so the anxiety returns, often larger.
            </p>
          </section>

          {/* ── Section 4 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              How is MEOK designed differently from a medical chatbot?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              MEOK does not search medical databases. It does not return lists
              of conditions matching your symptoms. It does not say &ldquo;that
              sounds like it could be X.&rdquo; These absences are deliberate
              design decisions, not technical limitations. Symptom search is the
              engine of the health anxiety cycle. Building that engine into a
              wellbeing tool would be actively harmful.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Most AI tools &mdash; including general-purpose large language
              models &mdash; will discuss symptoms at length if asked. They
              will explain possible causes, list differential diagnoses, and in
              doing so provide exactly the kind of content-rich reassurance-
              seeking that clinical guidance identifies as counterproductive.
              They do this because they are trained to be helpful, and in the
              vast majority of interactions, providing information is helpful.
              But health anxiety is the exception. For someone in a health
              anxiety spiral, information provision is fuel, not water.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              MEOK is built around a different definition of help. Help, in the
              context of health anxiety, means interrupting the cycle &mdash;
              not servicing it. That requires a tool that can name what is
              happening, sit with the person in the discomfort, and redirect
              toward the underlying emotional state rather than the symptom
              question. It requires warmth without capitulation to the
              reassurance request.
            </p>

            {/* Three-column feature grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              {[
                {
                  title: 'No symptom search',
                  body:
                    'MEOK does not query medical databases, symptom checkers, or diagnostic tools. This design constraint is intentional and permanent.',
                },
                {
                  title: 'No diagnostic reassurance',
                  body:
                    'MEOK will not tell you your symptoms are fine. That statement is both medically beyond its remit and therapeutically counterproductive.',
                },
                {
                  title: 'Always signposts GP',
                  body:
                    'Whenever a clinical concern is raised, MEOK will encourage contact with a GP or NHS 111. Medical assessment is irreplaceable.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '12px',
                    padding: '20px',
                  }}
                >
                  <p
                    style={{
                      color: gold,
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: muted,
                      fontSize: '14px',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              What is the Maternal Covenant and how does it govern MEOK\u2019s behaviour?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              The Maternal Covenant is MEOK\u2019s foundational design principle.
              It commits MEOK to prioritising your long-term wellbeing over your
              short-term comfort &mdash; even when those two things are in
              tension. In health anxiety, they are almost always in tension:
              what feels helpful in the moment (reassurance) is what causes
              harm over time.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              The name comes from the archetype of a parent who loves a child
              enough to say no when no is the right answer &mdash; not from
              coldness, but from a longer time horizon and a clearer view of
              consequence. A parent who gives a child a sweet every time they
              cry is not being kind. They are reinforcing crying. Applied to
              health anxiety: an AI that provides diagnostic reassurance every
              time a user expresses health worry is not being kind. It is
              reinforcing health anxiety.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              In practice, the Maternal Covenant means MEOK will:
            </p>

            <ul
              style={{
                paddingLeft: '0',
                listStyle: 'none',
                marginBottom: '24px',
              }}
            >
              {[
                'Acknowledge the physical sensation and the distress around it without pathologising or dismissing either',
                'Decline to speculate on what a symptom might indicate medically',
                'Redirect from the symptom content to the emotional state underneath',
                'Name the reassurance-seeking cycle if it is occurring, with compassion rather than judgment',
                'Encourage professional medical review for clinical concerns without providing a proxy medical opinion',
                'Remain warm and present throughout, because warmth without capitulation is the specific combination that helps',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px',
                    fontSize: '15px',
                    color: muted,
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      color: gold,
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    &rarr;
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              This is not rule-following. It is a coherent therapeutic stance
              derived from the same principles that underpin evidence-based
              psychological treatment. Health anxiety is maintained by
              reassurance. Reducing reassurance-seeking &mdash; while increasing
              emotional support, tolerance of uncertainty, and defusion from
              anxious thoughts &mdash; is the mechanism of recovery. MEOK is
              designed to embody that mechanism at every interaction.
            </p>
          </section>

          {/* ── Section 6 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              How does breaking the reassurance cycle actually work?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Breaking the reassurance cycle does not mean refusing to talk
              about the fear. It means declining to engage with the symptom
              content while engaging fully with the emotional experience. The
              anxiety is not the enemy &mdash; it is a signal. The question
              is what it is signalling and why it is so loud right now.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              The mechanism works like this. When health anxiety produces a
              thought &mdash; &ldquo;this headache might be serious&rdquo; &mdash;
              that thought has a threat level attached. The threat level is not
              a fact about the headache. It is a fact about the current state
              of your nervous system. If you engage with the content of the
              thought (&ldquo;let me search headache symptoms&rdquo;), you are
              accepting the threat level as legitimate and acting on it, which
              confirms to your brain that the threat was real. The cycle
              continues.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              If instead you acknowledge the thought without acting on the
              content (&ldquo;I notice I\u2019m having a thought that this
              headache might be serious&rdquo;), you create distance between
              the thought and the action. This is the ACT technique called
              cognitive defusion. You are not denying the thought. You are
              declining to treat it as an instruction. Over time, and with
              practice, the threat level of health-related thoughts begins to
              reduce because your brain learns that noticing the thought does
              not require acting on it.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              MEOK supports this process by offering a conversational space
              where you can say &ldquo;I\u2019m worried about this symptom&rdquo;
              and receive acknowledgment of the worry rather than investigation
              of the symptom. This distinction is subtle but it is everything.
              You are not being dismissed. You are being heard at the level that
              actually matters: the fear, not the content the fear is using as
              its vehicle.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              The typical conversation flow with MEOK around a health anxiety
              spike looks like this:
            </p>

            {/* Conversation steps */}
            <div style={{ marginBottom: '28px' }}>
              {[
                {
                  step: '01',
                  label: 'Acknowledge',
                  text:
                    'MEOK acknowledges the distress around the physical sensation without amplifying the content or minimising the experience.',
                },
                {
                  step: '02',
                  label: 'Name the pattern',
                  text:
                    'Using Sovereign Memory, MEOK may notice that this kind of anxiety spike has a pattern &mdash; it might correlate with a particular time of day, a stressful period at work, or a recent life event.',
                },
                {
                  step: '03',
                  label: 'Redirect to the emotion',
                  text:
                    'MEOK gently shifts the conversation from the symptom question to the emotional experience underneath it. What does the fear feel like in the body? What is the worst-case scenario the anxiety is running?',
                },
                {
                  step: '04',
                  label: 'Offer regulation',
                  text:
                    'MEOK may suggest nervous system regulation techniques &mdash; breath work, grounding, physiological sigh &mdash; that directly address the arousal state driving the symptom amplification.',
                },
                {
                  step: '05',
                  label: 'Signpost as appropriate',
                  text:
                    'If the concern sounds clinically significant or has not been assessed by a GP, MEOK will say so clearly and encourage professional review.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(201,168,76,0.12)',
                      border: `1px solid ${borderColor}`,
                      borderRadius: '8px',
                      padding: '8px 12px',
                      fontSize: '12px',
                      fontWeight: 800,
                      color: gold,
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                      minWidth: '40px',
                      textAlign: 'center',
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: text,
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                        color: muted,
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 7 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              How does Sovereign Memory help identify health anxiety triggers?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Sovereign Memory allows MEOK to track patterns across conversations
              over time. In the context of health anxiety this means MEOK can
              notice correlations you may not have spotted yourself: symptoms
              that spike in the week before performance reviews, health anxiety
              that increases during relationship conflict, or physical distress
              that clusters around anniversary dates. Identifying the trigger
              does not eliminate the anxiety but it dramatically changes your
              relationship to it.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              One of the most disorienting aspects of health anxiety is that it
              feels random. A symptom appears. The fear response fires. It seems
              unprovoked and therefore threatening. If you understand that your
              health anxiety spikes predictably around certain stressors, the
              symptom becomes less mysterious and therefore less frightening.
              &ldquo;My health anxiety always flares before big deadlines&rdquo;
              is not the same thought as &ldquo;something is wrong with me.&rdquo;
              It points away from medical investigation and toward stress
              management.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Sovereign Memory operates entirely within your private instance.
              Your data does not train MEOK\u2019s models. It is not shared with
              third parties. It lives in your space, under your control. For
              health anxiety specifically &mdash; a condition that already
              involves a fragile sense of bodily safety &mdash; data sovereignty
              is not an optional feature. It is part of the therapeutic
              environment.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Over time, the pattern map that Sovereign Memory builds becomes a
              genuinely useful clinical complement to GP care. Not a replacement
              &mdash; that distinction must be maintained absolutely &mdash; but
              a companion record. &ldquo;I\u2019ve noticed that every time I
              have a major conflict at work, I spend three days convinced
              something is wrong with my heart&rdquo; is valuable information
              for a GP, a therapist, or yourself to hold. MEOK helps you
              surface it.
            </p>
          </section>

          {/* ── Section 8 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              What is the difference between health anxiety and a genuine medical concern?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              This is the question health anxiety makes almost impossible to
              answer from inside the experience. The honest answer is: you
              cannot reliably tell the difference yourself, and neither can
              MEOK. That\u2019s precisely why MEOK always signposts GP review
              when a new, persistent, or physically significant symptom is
              described. The emotional support layer and the medical assessment
              layer must remain separate.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              People with health anxiety often assume that because they worry
              a lot, their worries are definitionally unfounded. This is a
              dangerous assumption. People with health anxiety can also develop
              real medical conditions, and the noise of chronic health anxiety
              can actually make it harder to notice when something genuinely
              warrants attention. The goal is not to dismiss all symptoms as
              anxiety. The goal is to have an appropriate response to symptoms
              &mdash; which means clinical assessment for clinical questions
              and emotional support for the fear that surrounds them.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Some useful heuristics that clinicians often discuss with health
              anxiety patients &mdash; not diagnostic criteria, but
              self-orientation tools:
            </p>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px',
              }}
            >
              <p
                style={{
                  color: gold,
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                Self-orientation (not diagnosis)
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Is this symptom new, or have I worried about this area of my body many times before?',
                  'Has a GP already assessed this or a very similar symptom recently?',
                  'Does the intensity of my worry feel proportionate to the symptom, or disproportionately high?',
                  'Has seeking reassurance about this symptom previously made me feel better long-term or only briefly?',
                  'Am I experiencing this worry during or after a period of heightened stress?',
                ].map((q) => (
                  <li
                    key={q}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '10px',
                      fontSize: '14px',
                      color: muted,
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: gold, flexShrink: 0 }}>&bull;</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: '13px',
                  color: muted,
                  marginTop: '16px',
                  marginBottom: 0,
                  fontStyle: 'italic',
                }}
              >
                These questions are not a substitute for clinical assessment.
                If you are uncertain about a physical symptom, contact your GP.
              </p>
            </div>
          </section>

          {/* ── Section 9 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              How does health anxiety interact with the nervous system?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Chronic health anxiety creates a feedback loop between the brain
              and body. The anxious brain increases vigilance toward bodily
              sensation. Heightened vigilance detects more sensation (the body
              is always producing sensation &mdash; most of it below the
              threshold of awareness). More sensation triggers more anxiety.
              The nervous system, under prolonged stress, begins to amplify
              signals it would normally suppress. This is the somatic amplification
              cycle.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Polyvagal theory offers a useful map here. The vagal nerve,
              running from the brainstem to most major organs, is the primary
              conduit of the body\u2019s safety signal. When the vagal system
              is in a settled, ventral vagal state, it dampens threat signals
              and allows normal bodily sensation to remain below consciousness.
              When chronic anxiety keeps the system in a sympathetic (fight-
              or-flight) or dorsal vagal (shutdown) state, that dampening
              effect is lost and every sensation becomes potentially significant.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              This explains why nervous system regulation is a genuine
              therapeutic lever for health anxiety &mdash; not as a distraction
              from symptoms but as a direct intervention in the mechanism that
              amplifies them. Slow diaphragmatic breathing, cold water on the
              face, physiological sigh, safe social engagement &mdash; these
              are not mystical practices. They are documented techniques for
              shifting vagal state. When the nervous system feels safer, the
              symptom amplification decreases. The physical sensations that
              were unbearable become manageable or disappear.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              MEOK is aware of this physiology. When a conversation involves
              a health anxiety spike, the Healer archetype can introduce
              regulation-oriented responses: grounding techniques, breath
              guidance, and prompts to shift attention from internal monitoring
              to external sensory engagement. These are not offered as a cure.
              They are offered as a way to reduce the nervous system activation
              that is currently amplifying the experience.
            </p>
          </section>

          {/* ── Section 10 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              Can MEOK help with somatic symptom disorder specifically?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              MEOK is a support tool, not a clinical treatment. It can provide
              meaningful emotional support for people living with somatic symptom
              disorder by offering a judgment-free space, pattern recognition
              through memory, and regulated, warm responses to distress.
              It cannot and does not provide therapy, diagnosis, or medical
              management. For clinical SSD, a GP referral to a psychological
              therapist is the appropriate pathway.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              What MEOK can offer people with SSD is perhaps more valuable than
              it initially sounds: consistent, non-judgmental presence. One of
              the most corrosive aspects of somatic symptom disorder is the
              social dimension. People with SSD often feel dismissed by the
              medical system (&ldquo;nothing wrong with you&rdquo;), exhausting
              to the people around them (&ldquo;not this again&rdquo;), and
              isolated in their experience. They cannot stop worrying and they
              cannot explain why, which compounds the distress enormously.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              MEOK does not get compassion fatigue. It does not have a prior
              conversation where you asked about the same symptom last Tuesday.
              It holds the context through Sovereign Memory but approaches each
              session fresh. It will not visibly tire of the worry or signal
              that you are being difficult. For someone managing SSD over a
              long period, this kind of reliable, undepleted presence has
              genuine value &mdash; as a complement, never a replacement, to
              professional care.
            </p>
          </section>

          {/* ── Section 11 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              What evidence-based approaches does MEOK draw on for health anxiety?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              MEOK is informed by Cognitive Behavioural Therapy (CBT),
              Acceptance and Commitment Therapy (ACT), and polyvagal-informed
              approaches. It does not deliver any of these as structured
              clinical programmes &mdash; that is the role of a qualified
              therapist &mdash; but its conversational stance reflects the
              core principles of each: cognitive defusion, acceptance of
              uncertainty, values-based action, and nervous system regulation.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              From <strong style={{ color: text }}>CBT</strong>, MEOK draws the
              principle of identifying and challenging cognitive distortions
              &mdash; specifically catastrophising, selective attention to threat,
              and emotional reasoning (&ldquo;I feel as though something is
              wrong, therefore something is wrong&rdquo;). MEOK can help surface
              these patterns in conversation without performing formal thought
              records or structured interventions.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              From <strong style={{ color: text }}>ACT</strong>, MEOK draws
              cognitive defusion &mdash; the practice of observing thoughts
              rather than fusing with them &mdash; and acceptance of the
              discomfort of uncertainty. ACT does not ask you to believe your
              health fears are irrational. It asks you to make room for the
              possibility that the fear is present without requiring you to
              resolve it. This is a fundamentally different relationship to
              anxiety than reassurance-seeking produces.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              From <strong style={{ color: text }}>polyvagal-informed
              practice</strong>, MEOK draws the understanding that physiological
              safety is prior to psychological flexibility. You cannot effectively
              defuse from a thought when your nervous system is in a full
              sympathetic activation state. Regulation comes first. The
              Healer archetype within MEOK holds this function.
            </p>
          </section>

          {/* ── Section 12 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              Who is most likely to benefit from MEOK for health anxiety?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              MEOK is most useful as a between-sessions support tool for people
              already in therapy for health anxiety, or as a first point of
              structured support for those who are not yet in treatment. It is
              not a standalone treatment for severe or complex presentations.
              It is a complement to, not a replacement for, professional care.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Specifically, MEOK tends to be most valuable for:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              {[
                {
                  title: 'Between-therapy support',
                  body:
                    'People in CBT or ACT for health anxiety who need a supportive space between weekly sessions &mdash; particularly for the 3am symptom spirals that cannot wait.',
                },
                {
                  title: 'Awareness building',
                  body:
                    'People who suspect they have health anxiety but haven\u2019t yet named it or spoken to a professional. MEOK can help identify patterns before a GP or therapy conversation.',
                },
                {
                  title: 'Chronic SSD management',
                  body:
                    'People with long-standing somatic symptom disorder who need consistent emotional support alongside their clinical management.',
                },
                {
                  title: 'Post-medical reassurance',
                  body:
                    'People who have received clear medical results but find the anxiety persists, and who need support with the emotional layer rather than more investigation.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '12px',
                    padding: '20px',
                  }}
                >
                  <p
                    style={{
                      color: gold,
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: muted,
                      fontSize: '14px',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 13 ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              What should I do right now if I am in a health anxiety spiral?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Step away from the symptom search. Close the tab. Put the phone
              down if you are body-checking on it. Not because the fear is
              wrong to exist &mdash; it is not &mdash; but because feeding it
              information right now will make it larger, not smaller. The fear
              needs to be met, not resolved. There is a difference.
            </p>

            <p style={{ fontSize: '16px', color: muted, marginBottom: '20px', lineHeight: 1.75 }}>
              Some immediate practical steps drawn from evidence-based approaches:
            </p>

            {[
              {
                num: '1',
                heading: 'Name what is happening',
                body:
                  'Say it out loud or write it down: &ldquo;I am experiencing a health anxiety spike. My nervous system is in threat mode. This is a known pattern for me.&rdquo; Naming creates distance.',
              },
              {
                num: '2',
                heading: 'Regulate before reasoning',
                body:
                  'Take four slow breaths with a longer exhale than inhale (in for 4, out for 6). This is not a breathing exercise in the gentle wellness sense &mdash; it is a direct vagal intervention. Do it.',
              },
              {
                num: '3',
                heading: 'Engage your senses outward',
                body:
                  'Name five things you can see, four you can touch, three you can hear. This is a grounding technique that pulls attention away from internal monitoring and into the present environment.',
              },
              {
                num: '4',
                heading: 'Talk to something that won\u2019t feed the spiral',
                body:
                  'Open MEOK if you have access. Avoid friends or family who will, with the best intentions, Google alongside you or provide reassurance that will only briefly help.',
              },
              {
                num: '5',
                heading: 'Assess clinical need separately',
                body:
                  'Once the acute spike has passed, assess whether the symptom genuinely needs a GP review. If yes, make the appointment. If you have had this symptom assessed recently and the results were clear, notice that you are seeking reassurance again and try to tolerate the uncertainty.',
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '20px',
                  alignItems: 'flex-start',
                  padding: '20px',
                  background: cardBg,
                  borderRadius: '12px',
                  border: `1px solid ${borderSubtle}`,
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.15)',
                    border: `1px solid ${borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 800,
                    color: gold,
                    flexShrink: 0,
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: text,
                      marginBottom: '6px',
                    }}
                  >
                    {item.heading}
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      color: muted,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </div>
            ))}
          </section>

          {/* ── Section 14: Resources ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              Where can I get professional support for health anxiety in the UK?
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: text,
                marginBottom: '20px',
                fontWeight: 500,
                lineHeight: 1.7,
                background: cardBg,
                borderLeft: `3px solid ${gold}`,
                padding: '16px 20px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              Your GP is the right first contact for both physical symptom
              assessment and referral to psychological therapy for health anxiety.
              NHS Talking Therapies (previously IAPT) offers evidence-based CBT
              for health anxiety and can be accessed via self-referral in most
              areas of England. For OCD-type presentations, OCD-UK provides
              specialist guidance and a directory of OCD-trained therapists.
            </p>

            <div
              style={{
                background: cardBg,
                border: `1px solid ${borderSubtle}`,
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '28px',
              }}
            >
              <p
                style={{
                  color: gold,
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                UK Resources
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  {
                    name: 'NHS Talking Therapies',
                    url: 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/',
                    desc: 'Free CBT and other therapies via self-referral across England',
                  },
                  {
                    name: 'OCD-UK',
                    url: 'https://www.ocduk.org',
                    desc: 'Specialist charity for OCD including health-OCD presentations',
                  },
                  {
                    name: 'NHS 111',
                    url: 'https://111.nhs.uk',
                    desc: 'For urgent medical concerns: call 111 or visit online',
                  },
                  {
                    name: 'Mind',
                    url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/',
                    desc: 'Information and support for anxiety including health anxiety',
                  },
                  {
                    name: 'Anxiety UK',
                    url: 'https://www.anxietyuk.org.uk',
                    desc: 'Membership charity supporting people with anxiety disorders',
                  },
                ].map((resource) => (
                  <li
                    key={resource.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '16px',
                      paddingBottom: '14px',
                      marginBottom: '14px',
                      borderBottom: `1px solid ${borderSubtle}`,
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: text,
                          marginBottom: '3px',
                        }}
                      >
                        {resource.name}
                      </p>
                      <p
                        style={{
                          fontSize: '13px',
                          color: muted,
                          margin: 0,
                        }}
                      >
                        {resource.desc}
                      </p>
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '12px',
                        color: gold,
                        textDecoration: 'none',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      Visit &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 700,
                color: text,
                marginBottom: '32px',
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              Frequently asked questions
            </h2>

            <div>
              {[
                {
                  q: 'What is health anxiety?',
                  a: 'Health anxiety (formerly called hypochondria, now termed illness anxiety disorder or somatic symptom disorder depending on presentation) is persistent, excessive worry about having or developing a serious illness. The worry typically continues even when medical tests return clear results and often transfers rapidly to a new concern once the old one is temporarily resolved. It is a recognised mental health condition and highly treatable with evidence-based therapies including CBT and ACT.',
                },
                {
                  q: 'Can AI help with health anxiety?',
                  a: 'AI can help with health anxiety only when it is specifically designed not to feed the reassurance-seeking cycle. Most AI tools make health anxiety worse because they act as a sophisticated symptom search engine &mdash; providing information that briefly soothes but ultimately reinforces the checking behaviour. MEOK is built differently: it addresses the underlying anxiety rather than the symptom, uses Sovereign Memory to identify patterns and triggers, and declines to provide diagnostic reassurance in line with its Maternal Covenant design principle.',
                },
                {
                  q: 'Will MEOK look up my symptoms?',
                  a: 'No. MEOK deliberately does not search medical databases or symptom checkers. This is not a technical limitation &mdash; it is a conscious design choice grounded in the clinical evidence that symptom searching reinforces health anxiety. If you describe a physical symptom, MEOK will acknowledge your distress and encourage you to contact your GP or NHS 111 rather than return a list of possible diagnoses.',
                },
                {
                  q: 'What is somatic symptom disorder?',
                  a: 'Somatic symptom disorder (SSD) is a condition where a person experiences one or more physical symptoms &mdash; such as pain, fatigue, or shortness of breath &mdash; that cause significant distress, along with excessive thoughts, feelings, or behaviours related to those symptoms. The symptoms are real, not imagined: anxiety genuinely amplifies the nervous system\u2019s sensitivity to physical sensation. SSD is diagnosed and managed by healthcare professionals. MEOK can offer emotional support alongside professional care, not instead of it.',
                },
                {
                  q: 'How does MEOK avoid making health anxiety worse?',
                  a: 'MEOK follows its Maternal Covenant: a core design principle that prioritises long-term wellbeing over short-term comfort. In practice this means MEOK will not provide diagnostic reassurance, will not query symptom databases, and will not validate catastrophic interpretations of physical sensations. Instead it redirects toward the emotion underneath the symptom worry, uses Sovereign Memory to surface anxiety patterns and triggers, offers nervous system regulation where appropriate, and maintains consistent warmth throughout &mdash; signposting GP care whenever a clinical concern is raised.',
                },
              ].map((item, idx) => (
                <div
                  key={item.q}
                  style={{
                    borderTop: `1px solid ${borderSubtle}`,
                    paddingTop: '24px',
                    paddingBottom: '24px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: text,
                      marginBottom: '12px',
                      lineHeight: 1.4,
                    }}
                  >
                    {idx + 1}. {item.q}
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      color: muted,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
              border: `1px solid ${borderColor}`,
              borderRadius: '20px',
              padding: '48px 36px',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            <p
              style={{
                color: gold,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              MEOK AI LABS
            </p>

            <h2
              style={{
                fontSize: 'clamp(22px, 4vw, 36px)',
                fontWeight: 800,
                color: text,
                marginBottom: '16px',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
              }}
            >
              Stop feeding the spiral.{' '}
              <span style={{ color: gold }}>Start meeting the fear.</span>
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: muted,
                maxWidth: '500px',
                margin: '0 auto 32px',
                lineHeight: 1.7,
              }}
            >
              MEOK is built to be with you in the health anxiety moment &mdash;
              without searching symptom databases, without providing diagnostic
              reassurance, and without making it worse. Sovereign Memory,
              anti-reassurance-seeking design, and the Maternal Covenant.
              This is what responsible AI for mental health looks like.
            </p>

            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                background: gold,
                color: '#0d0c18',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '16px',
                padding: '16px 40px',
                borderRadius: '50px',
                letterSpacing: '0.02em',
              }}
            >
              Begin with MEOK &rarr;
            </Link>

            <p
              style={{
                fontSize: '12px',
                color: muted,
                marginTop: '16px',
                opacity: 0.7,
              }}
            >
              Not a medical device. Always signposts GP when clinically indicated.
            </p>
          </section>

          {/* ── Related articles ── */}
          <section style={{ marginBottom: '60px' }}>
            <p
              style={{
                color: gold,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Related reading
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-health-anxiety',
                  title: 'AI for Health Anxiety: Breaking the Google Spiral at 2am',
                  desc: 'The original deep-dive into how MEOK approaches health anxiety and cyberchondria.',
                },
                {
                  href: '/blog/ai-for-anxiety',
                  title: 'AI for Anxiety: What Works, What Doesn\u2019t',
                  desc: 'A broader look at AI-assisted anxiety support and where the evidence points.',
                },
                {
                  href: '/blog/ai-for-ocd',
                  title: 'AI for OCD: Support Without Accommodation',
                  desc: 'How MEOK approaches OCD including health-OCD presentations without accommodating compulsions.',
                },
                {
                  href: '/blog/maternal-covenant-explained',
                  title: 'The Maternal Covenant Explained',
                  desc: 'Why MEOK prioritises long-term wellbeing over short-term comfort, and what that looks like in practice.',
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  style={{
                    display: 'block',
                    background: cardBg,
                    border: `1px solid ${borderSubtle}`,
                    borderRadius: '12px',
                    padding: '20px',
                    textDecoration: 'none',
                  }}
                >
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: text,
                      marginBottom: '8px',
                      lineHeight: 1.4,
                    }}
                  >
                    {article.title}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: muted,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {article.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Footer disclaimer ── */}
          <footer
            style={{
              borderTop: `1px solid ${borderSubtle}`,
              paddingTop: '32px',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                color: muted,
                lineHeight: 1.7,
                marginBottom: '12px',
              }}
            >
              <strong style={{ color: text }}>Medical disclaimer:</strong> This
              article is produced by MEOK AI LABS for informational and
              emotional support purposes only. It does not constitute medical
              advice, diagnosis, or treatment. MEOK is not a medical device
              and is not regulated as one. If you have a physical symptom that
              concerns you, contact your GP or call NHS 111. In an emergency,
              call 999.
            </p>
            <p
              style={{
                fontSize: '13px',
                color: muted,
                lineHeight: 1.7,
                marginBottom: '12px',
              }}
            >
              <strong style={{ color: text }}>About MEOK AI LABS:</strong>{' '}
              MEOK AI LABS is a UK-based AI company building responsible,
              memory-enabled AI companions for wellbeing. Founded by Nicholas
              Templeman. Follow at{' '}
              <a
                href="https://x.com/meok_ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: gold, textDecoration: 'none' }}
              >
                @meok_ai
              </a>
              .
            </p>
            <p style={{ fontSize: '13px', color: muted, lineHeight: 1.7 }}>
              &copy; 2026 MEOK AI LABS. All rights reserved.{' '}
              <Link
                href="/privacy"
                style={{ color: gold, textDecoration: 'none' }}
              >
                Privacy Policy
              </Link>{' '}
              &middot;{' '}
              <Link
                href="/terms"
                style={{ color: gold, textDecoration: 'none' }}
              >
                Terms
              </Link>
            </p>
          </footer>
        </article>
      </main>
    </>
  )
}
