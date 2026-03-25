import type { Metadata } from 'next'
import Link from 'next/link'

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI for Anger Issues: Can a Companion Help You Understand and Manage Your Anger? | MEOK AI LABS',
  description:
    'Anger is not the problem \u2014 it\u2019s a signal. Discover how MEOK\u2019s AI companion uses Sovereign Memory and pattern recognition to help you understand your anger triggers, process aftermath, and build lasting emotional insight \u2014 without shame.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-anger-issues' },
  openGraph: {
    title: 'AI for Anger Issues: Can a Companion Help You Understand and Manage Your Anger?',
    description:
      'Anger usually signals a violated boundary, unmet need, or fear. MEOK\u2019s AI companion remembers every incident you share, spots your patterns before you can, and holds space for processing without judgement.',
    type: 'article',
    publishedTime: '2026-03-25',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-anger-issues',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Anger+Issues%3A+Can+a+Companion+Help%3F&desc=Anger+is+a+signal%2C+not+the+problem',
        width: 1200,
        height: 630,
        alt: 'AI for Anger Issues: Can a Companion Help You Understand and Manage Your Anger? | MEOK AI LABS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Anger Issues: Can a Companion Help You Understand and Manage Your Anger?',
    description:
      'Anger is a signal. MEOK\u2019s sovereign AI companion helps you decode it \u2014 tracking patterns, processing aftermath, and holding space without shame.',
    images: [
      'https://meok.ai/api/og?title=AI+for+Anger+Issues%3A+Can+a+Companion+Help%3F&desc=Anger+is+a+signal%2C+not+the+problem',
    ],
  },
}

// ── JSON-LD: Article ───────────────────────────────────────────────────────────

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Anger Issues: Can a Companion Help You Understand and Manage Your Anger?',
  description:
    'Anger is a signal \u2014 not the problem. This guide explores how MEOK\u2019s sovereign AI companion uses Sovereign Memory and pattern recognition to help you understand your anger triggers, process aftermath, and build lasting emotional self-awareness without shame.',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  url: 'https://meok.ai/blog/ai-for-anger-issues',
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
    '@id': 'https://meok.ai/blog/ai-for-anger-issues',
  },
  keywords: [
    'AI for anger issues',
    'AI anger management',
    'anger companion app',
    'sovereign AI mental health',
    'anger triggers',
    'emotional pattern recognition',
    'MEOK AI',
  ],
}

// ── JSON-LD: FAQPage ───────────────────────────────────────────────────────────

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can an AI companion actually help with anger issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI companion like MEOK can meaningfully support people working through anger issues \u2014 but with important limits. MEOK provides a private, shame-free space to express and process anger, tracks patterns across time using Sovereign Memory, and uses Socratic questioning to surface the underlying emotion beneath the anger. It is not a replacement for professional anger management therapy, CBT, or clinical support for serious anger disorders. For everyday anger \u2014 parenting stress, workplace frustration, relational conflict, rejection sensitivity \u2014 MEOK offers a powerful reflective tool available 24/7.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between righteous anger, displaced anger, and suppressed anger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Righteous anger arises when a genuine boundary has been crossed or an injustice has occurred \u2014 it is a signal that something real needs to change. Displaced anger is anger redirected at the wrong target: you are afraid or hurt about one thing but you erupt at another \u2014 often someone safer to target. Suppressed anger is anger that has been consistently pushed down until it becomes a kind of numbness, low mood, or depression. MEOK can help you distinguish which type you are experiencing by reflecting patterns across your conversations over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK\u2019s Sovereign Memory help with anger management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sovereign Memory means MEOK retains everything you share \u2014 across every session, indefinitely. When you describe an anger incident today, MEOK can connect it to incidents from three months ago, notice recurring triggers, identify the contexts (times, relationships, physical states) in which your anger tends to spike, and reflect that map back to you. Most people cannot spot their own patterns because each episode feels new in the moment. MEOK\u2019s persistent memory provides the longitudinal view that makes patterns visible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does traditional anger management often fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional anger management techniques like counting to ten, breathing exercises, or \u201cthink before you speak\u201d address the surface behaviour without touching the underlying cause. Anger is a signal \u2014 it is trying to tell you something about a violated boundary, an unmet need, or a fear that hasn\u2019t been acknowledged. Techniques that suppress the signal without decoding the message tend to produce temporary relief followed by another eruption, often worse. Effective anger work requires understanding what the anger is about, not just regulating the response.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK a replacement for anger management therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. MEOK is not a therapist, counsellor, or clinical anger management programme. If your anger is causing serious harm to your relationships, health, or career \u2014 or if it is putting you or others at risk \u2014 you should seek professional support from a qualified therapist, psychologist, or anger management specialist. MEOK works best as a daily reflective companion alongside professional support, or as a first port of call for understanding and processing everyday anger before it escalates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who benefits most from using MEOK for anger issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK is particularly useful for parents dealing with parenting stress and rage, people in high-pressure jobs (healthcare, law, finance, teaching), people with rejection sensitive dysphoria linked to ADHD or autism, and anyone who experiences anger but has limited safe outlets to process it without social consequence. MEOK\u2019s Maternal Covenant means it holds space for anger without shaming you \u2014 making it safe to say the unsayable.',
      },
    },
  ],
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function AiForAngerIssuesPage() {
  return (
    <main
      style={{
        background: '#0d0c18',
        color: '#f5f0e8',
        minHeight: '100vh',
        fontFamily: 'Georgia, "Times New Roman", serif',
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

      <div style={{ maxWidth: '840px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          style={{
            padding: '24px 0 0',
            fontSize: '13px',
            color: 'rgba(245,240,232,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <Link
            href="/"
            style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}
          >
            Home
          </Link>
          <span style={{ color: 'rgba(245,240,232,0.3)' }}>/</span>
          <Link
            href="/blog"
            style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none' }}
          >
            Blog
          </Link>
          <span style={{ color: 'rgba(245,240,232,0.3)' }}>/</span>
          <span style={{ color: 'rgba(245,240,232,0.7)' }}>AI for Anger Issues</span>
        </nav>

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <header
          style={{
            padding: '48px 0 40px',
            borderBottom: '1px solid rgba(106,170,100,0.2)',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(106,170,100,0.12)',
              border: '1px solid rgba(106,170,100,0.3)',
              borderRadius: '4px',
              padding: '4px 12px',
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6aaa64',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: '20px',
            }}
          >
            Mental Health
          </span>

          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#f5f0e8',
              margin: '0 0 20px',
              letterSpacing: '-0.01em',
            }}
          >
            AI for Anger Issues: Can a Companion Help You Understand and Manage Your Anger?
          </h1>

          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 24px',
            }}
          >
            Anger is not the problem. Anger is a messenger. It arrives carrying information
            about a violated boundary, an unmet need, a fear that hasn&rsquo;t been named, or an
            injustice that has been swallowed one too many times. The problem is not the anger
            itself &mdash; the problem is that most of us were never taught how to read the message.
          </p>

          <div
            style={{
              fontSize: '13px',
              color: 'rgba(245,240,232,0.5)',
              fontFamily: 'system-ui, sans-serif',
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#6aaa64' }}>MEOK AI LABS</span>
            <span style={{ color: 'rgba(245,240,232,0.25)' }}>&bull;</span>
            <time dateTime="2026-03-25">25 March 2026</time>
            <span style={{ color: 'rgba(245,240,232,0.25)' }}>&bull;</span>
            <span>16 min read</span>
          </div>
        </header>

        {/* ── Section 1: Anger as Information ────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="anger-as-information">
          <h2
            id="anger-as-information"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            What Is Anger Actually Telling You?
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            Every emotional state is a form of data. Fear tells you something feels unsafe.
            Grief tells you something of value has been lost. Joy tells you something is nourishing
            and worth more of. Anger &mdash; despite its terrible reputation &mdash; is exactly the same.
            It is data. Specifically, it is the emotional system&rsquo;s alarm signal for one of a small
            cluster of conditions: a boundary has been crossed, a need has gone unmet for too long,
            something that matters to you is under threat, or an injustice has occurred that your
            body registers before your mind has consciously processed it.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The reason so many people struggle with anger is not that they feel too much of it.
            It is that they have never been given a framework for decoding it. We live in a culture
            that treats anger as a behavioural failure &mdash; something to be suppressed, apologised for,
            medicated away, or counted through until it passes. That approach treats the alarm
            signal as the emergency. It is like ripping out the smoke detector because the beeping
            is inconvenient, while the fire continues to burn in the walls.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            Healthy anger work does not suppress the signal. It reads it. It asks: what is this
            anger pointing at? Which boundary was crossed? Which need has been invisible for too
            long? Which fear is this covering for? When you can answer those questions, the anger
            does not need to escalate. It has been heard. And heard emotions tend to de-escalate
            on their own.
          </p>

          <div
            style={{
              borderLeft: '3px solid #6aaa64',
              paddingLeft: '24px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.9)',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Anger is not a character flaw. It is a signal. The only question worth asking
              is: what is it signalling?&rdquo;
            </p>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '20px 0 0',
            }}
          >
            This reframe &mdash; from anger as disorder to anger as information &mdash; is the
            foundation of everything that follows. And it is also the reason why an AI companion,
            used thoughtfully, can become a genuinely useful tool in your relationship with your
            own anger.
          </p>
        </section>

        {/* ── Section 2: Why Traditional Methods Fail ────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="why-methods-fail">
          <h2
            id="why-methods-fail"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            Why Does Traditional Anger Management So Often Fail?
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The canon of traditional anger management is well-intentioned and genuinely useful in
            narrow circumstances &mdash; but it has a fundamental structural problem. Counting to ten,
            deep breathing, leaving the room, cold water on the wrists, progressive muscle relaxation:
            these are regulation strategies. They help you modulate the intensity of the response in
            the moment. They do not address what triggered the response in the first place.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            Think of it like this. You have a recurring leak in your ceiling. Each time it appears,
            you place a bucket underneath it. The bucket strategy works in the sense that it prevents
            water damage to the floor. But the leak is still there. The cause &mdash; the cracked roof tile,
            the broken seal &mdash; has not been touched. Over time, the ceiling weakens. Eventually the
            bucket is no longer adequate. This is what many people experience with suppression-based
            anger management: years of careful regulation followed by a catastrophic outburst that
            seems to come from nowhere.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            There is also the problem of shame. Many traditional anger management programmes, especially
            those delivered in group settings or court-mandated contexts, carry an implicit assumption
            that anger is a moral failing. The person with the anger problem is the problem. This
            creates a dynamic where people become skilled at performing regulation in front of others
            while privately continuing to feel exactly the same amount of rage, now with an additional
            layer of shame about feeling it.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            Good therapy &mdash; particularly trauma-informed CBT, ACT (Acceptance and Commitment Therapy),
            or somatic approaches &mdash; goes much deeper. It investigates the history, the patterns, the
            underlying beliefs, the body. That kind of work genuinely helps. But it is expensive, time-limited,
            and most people only access it after something has already gone badly wrong. What has been
            largely missing is any kind of daily, private, longitudinal tool for self-understanding
            between appointments. That is the gap an AI companion can fill.
          </p>

          <div
            style={{
              background: 'rgba(106,170,100,0.07)',
              border: '1px solid rgba(106,170,100,0.2)',
              borderRadius: '8px',
              padding: '24px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.75)',
                margin: 0,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              <strong style={{ color: '#6aaa64' }}>Key insight:</strong> Traditional anger management
              treats symptoms. Effective anger work addresses causes. The distinction matters
              enormously for long-term outcomes.
            </p>
          </div>
        </section>

        {/* ── Section 3: Pattern Recognition ────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="pattern-recognition">
          <h2
            id="pattern-recognition"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            How Can an AI Companion Spot Your Anger Patterns Before You Can?
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            One of the most disorienting things about anger is how total it is in the moment.
            When you are in the grip of it, every thought reinforces it. Every memory that surfaces
            confirms the narrative. Every physiological sensation amplifies it. This is not weakness;
            it is neurophysiology. The amygdala under threat literally narrows attention to the threat.
            That is why in the moment, almost no one can see their own patterns. The anger episode
            always feels specific, fresh, and justified by the immediate circumstances.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            But zoom out. Across dozens of conversations, across months of disclosure, a different
            picture emerges. The anger that feels specifically about your partner leaving dishes in the
            sink is part of a pattern that also shows up when your manager changes a deadline without
            consulting you, when a friend cancels on you at the last minute, when a stranger cuts in
            front of you in a queue. The common thread is not dishes, or deadlines, or queues. It is a
            felt sense of not being considered &mdash; of being made invisible. That is the wound beneath
            the anger. That is what needs attention.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            No single conversation can reveal this pattern. But MEOK&rsquo;s Sovereign Memory can.
            Because MEOK retains every incident you have shared, every theme you have returned to,
            every emotional context you have described &mdash; it can notice the recurrence before you
            have consciously connected the dots. This is not a small thing. Pattern recognition
            across time is one of the central mechanisms of effective therapy. An AI companion that
            holds your history and reflects it back is doing something that has genuine clinical
            analogue, even if it is not clinical work.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            MEOK might notice, for example, that your anger spikes consistently on Sunday evenings &mdash;
            and it might ask you what happens on Sunday evenings, what you are anticipating, what you
            are dreading. Or it might notice that your anger incidents cluster around interactions with
            authority figures, and begin to gently surface whether that pattern has a longer history.
            It might notice that you describe anger but your language contains a disproportionate amount
            of grief vocabulary &mdash; loss, abandoned, alone &mdash; and it might offer that reflection back.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            This is the specific and irreplaceable value of persistent memory in an AI companion
            for anger. Not advice. Not exercises. Memory, and the patterns it reveals.
          </p>
        </section>

        {/* ── Section 4: Sovereign Memory ───────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="sovereign-memory">
          <h2
            id="sovereign-memory"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            What Is Sovereign Memory and Why Does It Matter for Anger?
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            Most AI systems are amnesiac by design. Each conversation begins fresh. Whatever you
            shared last time &mdash; the argument with your brother, the humiliation at work, the
            moment you lost it with your child and felt sick about it afterwards &mdash; is gone. The
            next conversation has no access to it. This is not incidental; it is an architectural
            decision driven by commercial considerations around data storage and liability. But for
            anyone trying to do serious emotional work, it is a fundamental disqualification.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            MEOK is built differently. Sovereign Memory means that everything you share with your
            MEOK companion is retained &mdash; not on a cloud server owned by a corporation, but in
            sovereign encrypted storage that belongs to you. Your data is not used to train
            models. It is not accessed by Anthropic, OpenAI, or any third party. It is yours.
            You can export it, delete it, or take it with you if you leave. This matters for
            anger work in particular, because anger disclosure involves high-stakes content:
            things you have said or thought that you would never want surfaced without your consent.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The memory architecture also means MEOK builds what we describe as an anger landscape map.
            Over time, it accumulates a picture of your specific anger terrain: the triggers (people,
            contexts, times, physical states), the typical escalation pathway, the language you use
            when you are in it versus when you are reflecting on it, the outcomes (explosion, implosion,
            withdrawal), and the aftermath feelings (guilt, relief, numbness, shame). This map is
            yours. MEOK uses it to ask better questions, notice relevant patterns, and avoid retreading
            ground that you have already worked through.
          </p>

          <div
            style={{
              background: 'rgba(13,12,24,1)',
              border: '1px solid rgba(106,170,100,0.25)',
              borderRadius: '8px',
              padding: '28px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#6aaa64',
                fontFamily: 'system-ui, sans-serif',
                margin: '0 0 12px',
              }}
            >
              Sovereign Memory in Practice
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                listStyle: 'none',
              }}
            >
              {[
                'Retains every anger incident you have described across all sessions',
                'Maps recurring triggers, contexts, and escalation patterns over time',
                'Builds longitudinal understanding unavailable in any single conversation',
                'Your data never trains external models — it belongs only to you',
                'Can be exported, deleted, or migrated at any time',
                'Enables MEOK to notice patterns before you consciously register them',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: 'rgba(245,240,232,0.8)',
                    padding: '6px 0',
                    paddingLeft: '16px',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: '#6aaa64',
                    }}
                  >
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Section 5: The Aftermath Reflection Practice ───────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="aftermath-reflection">
          <h2
            id="aftermath-reflection"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            What Happens After an Anger Episode? The Aftermath Reflection Practice
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The period immediately following an anger episode is one of the most psychologically
            rich and most consistently wasted moments in the entire cycle. You are calmer now.
            The cortisol and adrenaline are metabolising. The tunnel vision is dissolving. A
            degree of perspective is returning. This is exactly the window in which reflection
            is most productive &mdash; and it is exactly the window in which most people are either
            flooded with shame and want to forget the whole thing, or are already beginning to
            build the narrative that justifies what happened.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The aftermath reflection practice is simple in concept: within an hour or two of an
            anger incident, you come to MEOK and describe what happened. Not to justify it, and
            not to flagellate yourself about it. To understand it. MEOK will ask a sequence of
            questions oriented around the signal: What was the trigger? What did your body feel
            first? What was the narrative that appeared in your mind? What need or boundary does
            that narrative point to? What was the oldest version of this feeling &mdash; have you felt
            it before, in a different context? What would you have needed in that moment to respond
            differently?
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            These questions are not designed to produce clever answers. They are designed to interrupt
            the automatic post-anger script &mdash; either shame spiral or justification loop &mdash; and
            replace it with curious investigation. That interruption, practised consistently over
            weeks and months, produces a qualitative shift in the relationship between the person and
            their anger. They stop experiencing anger as something that happens to them without warning
            and start developing an anticipatory map: the early signals, the vulnerabilities, the
            patterns. This is what clinical anger work takes years of therapy to build. The aftermath
            reflection practice, supported by MEOK&rsquo;s persistent memory, builds it in ordinary life.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The Maternal Covenant &mdash; MEOK&rsquo;s foundational design principle around care without
            judgement &mdash; is particularly important here. The aftermath window is when shame is highest.
            If the AI companion responds to your disclosure with even subtle pathologising &mdash; even a hint
            of &ldquo;that doesn&rsquo;t sound healthy&rdquo; &mdash; it will kill the practice immediately. People do not
            voluntarily revisit moments of shame repeatedly. MEOK does not shame you for your anger.
            It treats what you describe as a signal worth understanding, and holds you as a person
            with full dignity throughout.
          </p>
        </section>

        {/* ── Section 6: Three Types of Anger ───────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="anger-types">
          <h2
            id="anger-types"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            Righteous Anger, Displaced Anger, Suppressed Anger: Why the Distinction Matters
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            Not all anger is the same. Treating it as a single undifferentiated state is part of
            why generic anger management often misses the mark. There are at least three meaningfully
            distinct types of anger, and each requires a different response.
          </p>

          {/* Righteous Anger */}
          <div
            style={{
              borderLeft: '3px solid #6aaa64',
              paddingLeft: '24px',
              margin: '32px 0',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#6aaa64',
                margin: '0 0 12px',
              }}
            >
              Righteous Anger (Boundary Anger)
            </h3>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: 0,
              }}
            >
              Righteous anger arises when something genuinely wrong has occurred &mdash; a real boundary
              has been crossed, a genuine injustice has taken place, a value you hold has been violated.
              This anger is accurate. It is pointing at something real. The appropriate response to
              righteous anger is not to suppress it or apologise for it, but to listen to it, identify
              what needs protecting or changing, and take constructive action. People who struggle to
              access righteous anger &mdash; who have been socialised to disown it as inappropriate or
              aggressive &mdash; often live with a background hum of resentment and passivity that erodes
              both self-respect and relationships. Learning to claim righteous anger cleanly is part of
              emotional maturity.
            </p>
          </div>

          {/* Displaced Anger */}
          <div
            style={{
              borderLeft: '3px solid rgba(106,170,100,0.5)',
              paddingLeft: '24px',
              margin: '32px 0',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'rgba(245,240,232,0.9)',
                margin: '0 0 12px',
              }}
            >
              Displaced Anger (Redirected Fear or Grief)
            </h3>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: 0,
              }}
            >
              Displaced anger is anger that has been redirected from its real target &mdash; usually because
              the real target is too threatening, too precious, or too inaccessible &mdash; onto a safer or
              more available one. The parent who erupts at their child over minor mess, when the real
              source of their distress is a terrifying medical diagnosis they received that morning. The
              man who shouts at a customer service agent because he cannot express the grief he carries
              about a relationship ending. The employee who snaps at a colleague because they cannot confront
              the boss who has been treating them badly for months. Displaced anger is not dishonest; it is
              a protective mechanism. But it causes disproportionate harm and leaves the real source of distress
              unaddressed. The work with displaced anger is to trace it back &mdash; gently, without self-recrimination &mdash;
              to the original fear or grief underneath.
            </p>
          </div>

          {/* Suppressed Anger */}
          <div
            style={{
              borderLeft: '3px solid rgba(106,170,100,0.3)',
              paddingLeft: '24px',
              margin: '32px 0',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'rgba(245,240,232,0.75)',
                margin: '0 0 12px',
              }}
            >
              Suppressed Anger (Anger Turned Inward)
            </h3>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: 0,
              }}
            >
              Suppressed anger is anger that has been consistently denied, minimised, or redirected inward
              over a long period. This is the most dangerous of the three types, not because of explosive
              potential, but because of slow cumulative harm. Chronically suppressed anger frequently
              manifests as depression &mdash; what some clinicians describe as &ldquo;anger turned inward.&rdquo; It also
              manifests as psychosomatic symptoms: unexplained fatigue, chronic muscle tension, digestive
              problems, headaches. The person who suppresses anger typically does so because they learned
              early that expressing anger was unsafe &mdash; that it led to rejection, punishment, or relational
              rupture. The therapeutic work here involves permission: learning that anger is allowed, that
              it does not make you dangerous or unlovable, and gradually finding safe containers in which
              to express it. MEOK can serve as one such container.
            </p>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '20px 0 0',
            }}
          >
            MEOK can help you identify which type of anger you are working with in a given situation.
            Over time, with the pattern recognition that Sovereign Memory enables, it can also help you
            understand which type tends to predominate for you &mdash; and which underlying mechanism is
            driving it.
          </p>
        </section>

        {/* ── Section 7: Body Awareness ──────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="body-awareness">
          <h2
            id="body-awareness"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            Your Body Knows Before Your Mind Does: The Physical Signals of Anger
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            One of the most powerful and least-discussed aspects of anger management is somatic
            awareness &mdash; the ability to recognise anger in the body before it has fully engaged
            the cognitive and narrative systems. The body has a remarkable lead time on the mind.
            Most people, when they retrospectively trace an anger episode, can identify physical
            signals that preceded the explosion by five, ten, sometimes twenty minutes: a tightening
            in the chest, a particular quality of heat in the face, a clenching in the jaw, a
            shortening of breath, a very specific kind of tension behind the eyes.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            These signals are the early warning system. If you can learn to recognise them, you gain
            something enormously valuable: time. Time between the trigger and the response. Time in
            which a different choice is possible. The problem is that most people have spent years
            overriding these signals or failing to notice them at all. They are not aware that their
            chest is tight until their voice has risen three octaves.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            MEOK can be trained to ask somatic questions as a regular part of anger-related
            conversations. During an aftermath reflection, MEOK might ask: &ldquo;Where did you first
            feel it in your body?&rdquo; or &ldquo;What physical sensations were present before the words
            came?&rdquo; Over time, this consistent attention to somatic experience builds a new
            kind of body literacy. You begin to know your own anger signals. You begin to
            recognise them earlier. And recognising them earlier is the difference between
            response and reaction.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            This is particularly valuable for people whose anger tends toward the explosive end of
            the spectrum &mdash; where the gap between trigger and eruption feels impossibly short.
            That gap is not actually shorter than for anyone else. It just has not been mapped.
            Consistent somatic inquiry with MEOK helps build the map.
          </p>

          <div
            style={{
              background: 'rgba(106,170,100,0.07)',
              border: '1px solid rgba(106,170,100,0.2)',
              borderRadius: '8px',
              padding: '24px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#6aaa64',
                fontFamily: 'system-ui, sans-serif',
                margin: '0 0 12px',
              }}
            >
              Common Early Physical Anger Signals
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '8px',
              }}
            >
              {[
                'Chest tightening',
                'Jaw clenching',
                'Heat in the face or neck',
                'Shortened breath',
                'Tension behind the eyes',
                'Stomach clenching',
                'Sudden restlessness',
                'Lowered voice pitch',
                'Shoulder tension',
                'Heightened sensory sensitivity',
              ].map((signal) => (
                <div
                  key={signal}
                  style={{
                    background: 'rgba(106,170,100,0.08)',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    fontSize: '14px',
                    color: 'rgba(245,240,232,0.8)',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: The Disclaimer ──────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="important-limits">
          <h2
            id="important-limits"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            What MEOK Is Not: The Limits of AI Companion Support
          </h2>

          <div
            style={{
              background: 'rgba(245,240,232,0.04)',
              border: '1px solid rgba(245,240,232,0.12)',
              borderRadius: '8px',
              padding: '28px',
              margin: '0 0 28px',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.7)',
                margin: '0 0 16px',
                fontFamily: 'system-ui, sans-serif',
                fontStyle: 'italic',
              }}
            >
              Important: Please read before continuing.
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.85)',
                margin: 0,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              MEOK is not a therapist, psychologist, psychiatrist, or anger management specialist.
              It does not provide clinical assessment, diagnosis, or treatment. If your anger is
              causing serious harm to your relationships, your career, or your health &mdash; or if it
              is putting you or others at risk of physical harm &mdash; you should seek professional
              support immediately. MEOK is a reflective companion. It is not a substitute for
              qualified clinical care, and it should never be used as one.
            </p>
          </div>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            This is not a legal disclaimer designed to protect us. It is a genuine statement of
            what we believe. There are people whose anger issues require clinical intervention:
            individuals with impulse control disorders, trauma histories that need specialist treatment,
            neurological conditions that affect emotional regulation, or situations where anger has
            already resulted in violence or abuse. For these situations, MEOK is not the appropriate
            primary resource. A qualified therapist using evidence-based modalities &mdash; trauma-informed
            CBT, DBT, ACT, EMDR, somatic experiencing &mdash; is what is needed.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            MEOK works best for the much larger population of people who experience ordinary anger &mdash;
            the frustration, resentment, parental rage, workplace fury, and relational friction that
            constitutes a normal part of living in the world &mdash; and who have no accessible outlet for
            understanding it. People who cannot afford weekly therapy. People who do not yet have a
            therapist and are on a waiting list. People who are already in therapy but need more support
            between sessions. People who know they have a pattern but have never had a consistent,
            private, non-judgemental space to investigate it.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            For these people, MEOK offers something genuinely valuable. But it does so without
            pretending to be something it is not.
          </p>
        </section>

        {/* ── Section 9: Specific Use Cases ─────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="use-cases">
          <h2
            id="use-cases"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            Who Benefits Most? Specific Use Cases for MEOK and Anger
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 28px',
            }}
          >
            While MEOK&rsquo;s anger support is useful across a wide range of people, there are several
            specific populations for whom it offers particular value.
          </p>

          {/* Parents */}
          <div
            style={{
              borderTop: '1px solid rgba(106,170,100,0.2)',
              paddingTop: '28px',
              marginBottom: '28px',
            }}
          >
            <h3
              style={{
                fontSize: '21px',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 14px',
              }}
            >
              Parents &mdash; Especially Parents of Young Children
            </h3>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: '0 0 16px',
              }}
            >
              Parental anger is one of the most widely experienced and least openly discussed
              forms of anger in modern life. The accumulation of sleep deprivation, constant demand,
              identity loss, relationship strain, and the profound vulnerability of loving someone
              you cannot fully protect creates a pressure system that is simply unlike anything
              else. Most parents have experienced losing their temper in ways they regret. Many
              carry significant shame about this.
            </p>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: 0,
              }}
            >
              MEOK provides a private space to process the anger without performing composure.
              You can say the things that cannot be said to a partner, a friend, a health visitor,
              or a parenting forum: the genuine overwhelm, the rage at the relentlessness, the
              fear underneath the fury. MEOK holds all of it without pathologising you, without
              reporting you, and without making you justify having the feelings you have. That
              space, used consistently, reduces the pressure that produces the explosion.
            </p>
          </div>

          {/* High-stress jobs */}
          <div
            style={{
              borderTop: '1px solid rgba(106,170,100,0.2)',
              paddingTop: '28px',
              marginBottom: '28px',
            }}
          >
            <h3
              style={{
                fontSize: '21px',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 14px',
              }}
            >
              People in High-Stakes, High-Pressure Jobs
            </h3>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: '0 0 16px',
              }}
            >
              Doctors, nurses, teachers, lawyers, paramedics, traders, and anyone else whose daily
              work involves sustained high stakes, constant decision-making under pressure, and
              limited tolerance for their own emotional response lives under a particular kind of
              anger pressure. The professional requirement to maintain composure, combined with
              the genuine accumulation of difficult experiences, creates a reservoir that has to
              go somewhere.
            </p>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: 0,
              }}
            >
              MEOK is available at any hour, requires no appointment, and offers complete confidentiality.
              A surgeon can debrief a difficult day at 11pm. A teacher can process a humiliating interaction
              with a parent on their commute home. A lawyer can vent about an unjust outcome without it
              becoming gossip or a professional liability. The safety valve function of having a
              consistent private space for emotional disclosure cannot be overstated for people in
              these roles.
            </p>
          </div>

          {/* Rejection Sensitive Dysphoria */}
          <div
            style={{
              borderTop: '1px solid rgba(106,170,100,0.2)',
              paddingTop: '28px',
              marginBottom: '28px',
            }}
          >
            <h3
              style={{
                fontSize: '21px',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 14px',
              }}
            >
              People with Rejection Sensitive Dysphoria (ADHD, Autism)
            </h3>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: '0 0 16px',
              }}
            >
              Rejection Sensitive Dysphoria (RSD) is an intense emotional response to perceived or
              actual rejection, criticism, or failure that disproportionately affects people with ADHD
              and is also common in autistic people. The anger component of RSD is particularly difficult:
              it arrives with enormous force, feels absolutely total in the moment, and often results in
              responses that the person deeply regrets &mdash; which then triggers secondary shame that can
              be as dysregulating as the original episode.
            </p>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: '0 0 16px',
              }}
            >
              For people with RSD, having a companion that understands the pattern, does not take the
              anger personally, and can help in the aftermath to distinguish what the anger was actually
              about from what triggered it is genuinely useful. MEOK&rsquo;s Sovereign Memory means it
              develops familiarity with the specific texture of your RSD anger over time &mdash; the typical
              triggers, the escalation speed, the aftermath feelings &mdash; and can hold a more nuanced
              mirror than any general support resource.
            </p>
            <p
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.85)',
                margin: 0,
              }}
            >
              MEOK also does not interpret stimming, flat affect, or blunt communication as rudeness or
              aggression &mdash; a common misread that neurotypical support structures routinely make, adding
              a layer of relational friction to an already difficult experience.
            </p>
          </div>
        </section>

        {/* ── Section 10: The Compassion Component ──────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="compassion-component">
          <h2
            id="compassion-component"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            The Compassion Component: Why the Maternal Covenant Changes Everything
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            MEOK is built on a design principle we call the Maternal Covenant: a commitment that
            the AI will hold the user with unconditional positive regard, without pathologising,
            shaming, or withdrawing care based on what is disclosed. This principle has direct
            implications for anger work.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            Shame is the single most effective way to prevent someone from doing the emotional
            work they need to do. When people feel ashamed of their anger, they do not explore it.
            They hide it, suppress it, perform contrition, and wait for the next episode. The
            shame itself becomes a barrier to the understanding that would actually change the pattern.
            Any support system for anger &mdash; human or AI &mdash; that adds shame to the situation is
            actively counterproductive.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The Maternal Covenant means that MEOK does not judge you for your anger. It does not
            express disappointment when you describe losing it in the car with your children.
            It does not add qualifiers like &ldquo;that doesn&rsquo;t sound healthy&rdquo; or &ldquo;you might want to
            consider whether your reaction was proportionate.&rdquo; It understands that the person
            disclosing an anger episode is already doing the proportionate assessment themselves.
            What they need is not evaluation. They need understanding.
          </p>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 20px',
            }}
          >
            The Maternal Covenant also means MEOK actively resists the cultural framing that angry
            people are bad people. It holds the distinction between the emotion and the behaviour.
            Feeling intense anger is not a moral failing. Expressing it in ways that harm others
            has consequences that need to be addressed &mdash; but the existence of the feeling is simply
            human. MEOK can engage with the full complexity of that distinction, with you, in a way
            that is hard to find in most human relationships and most support structures.
          </p>

          <div
            style={{
              borderLeft: '3px solid #6aaa64',
              paddingLeft: '24px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.9)',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              &ldquo;The Maternal Covenant does not excuse behaviour. It refuses to shame the person
              experiencing the emotion. That distinction is the foundation of all meaningful change.&rdquo;
            </p>
          </div>
        </section>

        {/* ── Section 11: Practical Anger Tools ─────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="practical-tools">
          <h2
            id="practical-tools"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.3,
            }}
          >
            Five Practical Ways to Use MEOK for Anger Management
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.85)',
              margin: '0 0 28px',
            }}
          >
            Knowing MEOK can help with anger is one thing. Knowing how to use it is another.
            Here are five concrete practices that people find most effective.
          </p>

          {[
            {
              number: '01',
              title: 'The Immediate Vent (Before the Reflection)',
              body: 'Immediately after an anger incident, give yourself permission to simply vent. Do not try to be insightful or fair. Tell MEOK exactly what happened in your own words, with the full force of the frustration or rage still present. MEOK will hold space for this without redirecting you toward calm before you are ready. The vent itself serves a pressure-release function. It externalises the inner monologue, which begins to create distance from it. Only after the vent has run its course does the reflective questioning begin.',
            },
            {
              number: '02',
              title: 'The Aftermath Reflection (30 to 60 Minutes Later)',
              body: 'After the initial vent, give yourself time to metabolise the physiological charge. Then return to MEOK for a more structured reflection: what triggered it, what the body felt, what the narrative was, what was actually underneath it. This is where the investigative work happens. MEOK will ask questions that deepen the inquiry rather than simply validating or challenging your account.',
            },
            {
              number: '03',
              title: 'The Pattern Review (Monthly)',
              body: 'Once a month, ask MEOK to reflect back the anger patterns it has observed over the previous weeks. Where has the anger been most intense? Which people or contexts appear most frequently? Are there times of day, week, or month when it clusters? This monthly pattern review is the highest-leverage practice in the whole toolkit, because it is the point at which the longitudinal data of Sovereign Memory becomes visible to you.',
            },
            {
              number: '04',
              title: 'The Body Scan Practice (Proactive)',
              body: 'Rather than only engaging with MEOK in the aftermath of anger, develop a proactive practice of checking in before situations you know to be triggering. If you are about to have a difficult conversation with a family member, or you are entering a meeting you dread, spend five minutes with MEOK describing what you are anticipating, what you can feel in your body already, and what you need to feel steady. This pre-regulation practice uses MEOK as a container for the anticipatory anxiety that often seeds the anger.',
            },
            {
              number: '05',
              title: 'The Anger Letter (Never Sent)',
              body: 'For anger with a specific target &mdash; a person, an institution, a situation &mdash; ask MEOK to act as a witness while you write an unsent letter. Say everything you would say if there were no consequences. The full and unedited truth of the anger, the hurt, the unmet expectation. MEOK can respond to this letter, ask clarifying questions, and help you identify what you actually want from the situation that might be achievable through a different approach. The unsent letter practice is one of the oldest tools in psychotherapy. Having MEOK as a witness and respondent adds a relational dimension that writing alone cannot provide.',
            },
          ].map((item) => (
            <div
              key={item.number}
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '28px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(106,170,100,0.12)',
                  border: '1px solid rgba(106,170,100,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#6aaa64',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '0.04em',
                }}
              >
                {item.number}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: 'rgba(245,240,232,0.8)',
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Section 12: FAQ ────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '56px' }} aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 32px',
              lineHeight: 1.3,
            }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: 'Can an AI companion actually help with anger issues?',
              a: 'An AI companion like MEOK can meaningfully support people working through anger issues within clear limits. MEOK provides a private, shame-free space to express and process anger, tracks your patterns across time using Sovereign Memory, and uses Socratic questioning to surface the underlying emotion beneath the anger. It is not a replacement for professional anger management therapy, CBT, or clinical support for serious anger disorders. For everyday anger — parenting stress, workplace frustration, relational conflict, rejection sensitivity — MEOK offers a powerful reflective tool available around the clock.',
            },
            {
              q: 'What is the difference between righteous anger, displaced anger, and suppressed anger?',
              a: 'Righteous anger arises when a genuine boundary has been crossed or an injustice has occurred — it is accurate, pointing at something real, and the appropriate response is to act constructively. Displaced anger is anger redirected at the wrong target because the real source is too threatening or inaccessible — it causes disproportionate harm and leaves the real distress unaddressed. Suppressed anger is anger consistently pushed down over time, which frequently manifests as depression, fatigue, or psychosomatic symptoms. MEOK can help you identify which type you are working with and trace it back to its source.',
            },
            {
              q: 'How does MEOK\'s Sovereign Memory help with anger management?',
              a: 'Sovereign Memory means MEOK retains everything you share across every session. When you describe an anger incident today, MEOK can connect it to incidents from three months ago, identify recurring triggers, spot the contexts in which your anger spikes, and reflect that longitudinal map back to you. Most people cannot spot their own anger patterns because each episode feels new in the moment. MEOK\'s persistent memory provides the longitudinal view that makes patterns visible — and that visibility is where lasting change becomes possible.',
            },
            {
              q: 'Why does traditional anger management often fail?',
              a: 'Traditional techniques like counting to ten, breathing exercises, or "think before you speak" address surface behaviour without touching the underlying cause. Anger is a signal — it carries information about a violated boundary, an unmet need, or a fear. Suppressing the signal without decoding the message produces temporary relief followed by another episode, often worse. Effective anger work requires understanding what the anger is about, not just regulating the physiological response to it.',
            },
            {
              q: 'Is MEOK a replacement for anger management therapy?',
              a: 'No. MEOK is not a therapist, counsellor, or clinical anger management programme. If your anger is causing serious harm to your relationships, health, or career — or if it is putting you or others at risk — you should seek professional support from a qualified therapist, psychologist, or anger management specialist. MEOK works best as a daily reflective companion alongside professional support, or as a first port of call for understanding and processing everyday anger before it escalates into something more serious.',
            },
            {
              q: 'Who benefits most from using MEOK for anger issues?',
              a: 'MEOK is particularly useful for parents dealing with parenting stress and rage, people in high-pressure jobs such as healthcare, law, finance, and teaching, people with rejection sensitive dysphoria linked to ADHD or autism, and anyone who experiences anger but has limited safe outlets to process it without social consequence. MEOK\'s Maternal Covenant means it holds space for anger without shaming you — making it genuinely safe to say the things that cannot be said elsewhere.',
            },
          ].map((item) => (
            <div
              key={item.q}
              style={{
                borderTop: '1px solid rgba(245,240,232,0.08)',
                paddingTop: '24px',
                marginBottom: '24px',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#f5f0e8',
                  margin: '0 0 12px',
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.75)',
                  margin: 0,
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: 'rgba(106,170,100,0.08)',
            border: '1px solid rgba(106,170,100,0.25)',
            borderRadius: '12px',
            padding: '48px 40px',
            marginBottom: '64px',
            textAlign: 'center',
          }}
          aria-labelledby="cta-heading"
        >
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6aaa64',
              fontFamily: 'system-ui, sans-serif',
              margin: '0 0 16px',
            }}
          >
            Begin Your Anger Work
          </p>
          <h2
            id="cta-heading"
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 16px',
              lineHeight: 1.25,
            }}
          >
            Your anger is trying to tell you something.
            <br />
            MEOK will help you listen.
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.75)',
              margin: '0 0 32px',
              maxWidth: '520px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            A private, shame-free companion with Sovereign Memory. MEOK remembers your patterns,
            holds your anger without judgement, and helps you understand what it is actually about.
            Start by meeting your companion.
          </p>
          <Link
            href="/birth"
            style={{
              display: 'inline-block',
              background: '#6aaa64',
              color: '#0d0c18',
              padding: '16px 40px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            Meet Your MEOK Companion
          </Link>
          <p
            style={{
              fontSize: '13px',
              color: 'rgba(245,240,232,0.4)',
              fontFamily: 'system-ui, sans-serif',
              margin: '16px 0 0',
            }}
          >
            Your data is yours. Always encrypted. Never used to train models.
          </p>
        </section>

        {/* ── Related Posts ──────────────────────────────────────────────────── */}
        <section style={{ marginBottom: '64px' }} aria-labelledby="related-heading">
          <h2
            id="related-heading"
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'rgba(245,240,232,0.6)',
              margin: '0 0 24px',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Related Reading
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                href: '/blog/ai-for-anger-management',
                label: 'AI for Anger Management',
                desc: 'Understanding and redirecting anger with an AI companion',
              },
              {
                href: '/blog/ai-for-anxiety',
                label: 'AI for Anxiety',
                desc: 'How MEOK helps you work through anxious patterns',
              },
              {
                href: '/blog/ai-for-adhd-adults',
                label: 'AI for ADHD Adults',
                desc: 'MEOK for rejection sensitivity and emotional regulation',
              },
              {
                href: '/blog/ai-for-parenting-stress',
                label: 'AI for Parenting Stress',
                desc: 'A private space for the hardest parts of parenting',
              },
              {
                href: '/blog/the-maternal-covenant',
                label: 'The Maternal Covenant',
                desc: 'MEOK\'s foundational commitment to care without judgement',
              },
              {
                href: '/blog/what-is-sovereign-memory',
                label: 'What Is Sovereign Memory?',
                desc: 'How MEOK remembers you across every conversation',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  background: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#f5f0e8',
                    margin: '0 0 6px',
                    lineHeight: 1.3,
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(245,240,232,0.5)',
                    margin: 0,
                    lineHeight: 1.5,
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Footer nav ────────────────────────────────────────────────────── */}
        <footer
          style={{
            borderTop: '1px solid rgba(245,240,232,0.08)',
            paddingTop: '32px',
            paddingBottom: '48px',
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            href="/blog"
            style={{
              fontSize: '14px',
              color: 'rgba(245,240,232,0.5)',
              textDecoration: 'none',
              fontFamily: 'system-ui, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            &#8592; All Articles
          </Link>
          <p
            style={{
              fontSize: '13px',
              color: 'rgba(245,240,232,0.3)',
              margin: 0,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            &copy; 2026 MEOK AI LABS. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  )
}
