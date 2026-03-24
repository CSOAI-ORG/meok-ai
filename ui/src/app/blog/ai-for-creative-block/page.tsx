import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Creative Block: How MEOK\'s Trickster Archetype Breaks the Patterns Keeping You Stuck | MEOK AI LABS',
  description: 'Creative block is not laziness — it\'s a pattern. MEOK\'s Trickster archetype uses reframing, unexpected connections, and pattern disruption to help writers, designers, musicians, and artists break through.',
  keywords: [
    'AI for creative block',
    'creative block help',
    'AI for writers',
    'AI for artists',
    'AI for musicians',
    'Trickster archetype AI',
    'AI creative disruption',
    'reframing creativity',
    'MEOK AI LABS',
    'break creative block',
    'AI brainstorming partner',
    'pattern disruption creativity',
  ],
  authors: [{ name: 'Nicholas Templeman | MEOK AI LABS' }],
  openGraph: {
    title: 'AI for Creative Block: How MEOK\'s Trickster Archetype Breaks the Patterns Keeping You Stuck',
    description: 'Creative block is not laziness — it\'s a pattern. MEOK\'s Trickster archetype uses reframing, unexpected connections, and pattern disruption to help writers, designers, musicians, and artists break through.',
    type: 'article',
    publishedTime: '2026-03-24T00:00:00Z',
    authors: ['Nicholas Templeman | MEOK AI LABS'],
    tags: ['Creative Block', 'AI', 'Writers', 'Artists', 'Musicians', 'Trickster', 'MEOK'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Creative Block: MEOK\'s Trickster Archetype Breaks the Pattern',
    description: 'Creative block is a pattern, not a flaw. MEOK\'s Trickster archetype uses reframing and pattern disruption to unlock writers, artists, and musicians who are stuck.',
  },
  alternates: {
    canonical: 'https://meok.ai/blog/ai-for-creative-block',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Creative Block: How MEOK\'s Trickster Archetype Breaks the Patterns Keeping You Stuck',
  description: 'Creative block is not laziness — it\'s a pattern. MEOK\'s Trickster archetype uses reframing, unexpected connections, and pattern disruption to help writers, designers, musicians, and artists break through.',
  author: {
    '@type': 'Person',
    name: 'Nicholas Templeman | MEOK AI LABS',
    url: 'https://meok.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-creative-block',
  },
  keywords:
    'AI for creative block, Trickster archetype, creative disruption, reframing, pattern disruption, AI for writers, AI for artists, AI for musicians, MEOK AI LABS',
  articleSection: 'Creativity',
  wordCount: 2200,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is creative block and why does it happen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Creative block is not laziness or a lack of talent — it is a pattern your nervous system has locked into. It happens when the brain\'s default problem-solving approach hits a wall: you keep reaching for the same tools, the same references, the same structural moves, and they stop working. The creative signal is still there. The pipeline is congested. Traditional advice like "just start" or "take a walk" fails because it doesn\'t address the underlying pattern — it just waits for the pattern to self-resolve.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK\'s Trickster archetype help with creative block?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK\'s Trickster archetype is specifically designed for creative disruption. Rather than validating your current frame or offering generic encouragement, the Trickster actively destabilises the assumptions keeping you stuck. It introduces unexpected reframes, inverts your premise, drags in cross-domain analogies you wouldn\'t have reached for, and asks questions that force you to see your work from angles you had foreclosed. It is adversarial in the best sense — a thinking partner that refuses to let you stay comfortable inside the block.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is using AI for creative work cheating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Using AI as a brainstorming partner is no more "cheating" than talking through a problem with a friend, reading a book that sparks an idea, or keeping a mood board. MEOK is not generating your work for you — it is helping you see your own work differently. The Trickster archetype is built specifically so it does not impose its aesthetic on yours. It introduces pressure and unexpected connections; you decide what survives. The output is entirely yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between AI as a generator and AI as a brainstorming partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI as a generator produces content for you — a paragraph, a logo, a melody. AI as a brainstorming partner questions, provokes, and reframes your own thinking. MEOK operates as the latter. When you are blocked, the last thing you need is more content that isn\'t yours — it deepens the disconnection. What you need is a shift in perspective so your own creative signal can surface. MEOK\'s role is to create the conditions for your breakthrough, not to hand you one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help musicians and visual artists, not just writers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Creative block is domain-agnostic — it is a cognitive pattern, not a writing problem. MEOK works with writers, visual artists, musicians, designers, filmmakers, and anyone whose work requires original thinking. The Trickster\'s reframing techniques apply equally to a stuck chord progression, a painting that has stopped working, a design system that feels lifeless, or a screenplay that has lost its engine. The Scholar archetype adds cross-domain synthesis — pulling from music theory when you\'re stuck on visual rhythm, or from architecture when you\'re stuck on narrative structure.',
      },
    },
  ],
}

export default function AIForCreativeBlockPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main
        style={{
          backgroundColor: '#0d0c18',
          color: '#f5f0e8',
          minHeight: '100vh',
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {/* Hero */}
        <section
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '80px 24px 48px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '4px',
              padding: '6px 14px',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                color: '#c9a84c',
                fontSize: '12px',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              MEOK AI LABS — Creativity
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 46px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#f5f0e8',
              margin: '0 0 24px',
              letterSpacing: '-0.02em',
            }}
          >
            AI for Creative Block: How MEOK's Trickster Archetype Breaks the Patterns Keeping You Stuck
          </h1>

          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.65,
              color: 'rgba(245,240,232,0.75)',
              margin: '0 0 32px',
              fontStyle: 'italic',
            }}
          >
            Creative block is not laziness. It is not a character flaw. It is not evidence that you are not a real artist, writer, or musician. It is a signal — and that signal is telling you that something in the pattern needs to shift.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(245,240,232,0.1)',
            }}
          >
            <div>
              <p
                style={{
                  color: '#c9a84c',
                  fontSize: '14px',
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Nicholas Templeman | MEOK AI LABS
              </p>
              <p
                style={{
                  color: 'rgba(245,240,232,0.45)',
                  fontSize: '13px',
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  margin: '2px 0 0',
                }}
              >
                March 24, 2026 · 10 min read
              </p>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '0 24px 80px',
          }}
        >
          {/* Intro */}
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 28px',
            }}
          >
            You have been staring at the same blank document for three hours. Or the same canvas. Or the same four bars of music that go nowhere. The cursor blinks. You open a new tab. You close a new tab. You make tea. You sit back down.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 28px',
            }}
          >
            This is not a productivity problem. It is a pattern problem. And patterns, unlike motivation, can be broken deliberately.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            MEOK AI LABS was built with a specific archetype — the Trickster — whose entire function is to break patterns. Not to soothe them. Not to wait them out. To break them. This post is about how that works, and how to use it when you are stuck.
          </p>

          {/* H2: What is creative block */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            What is creative block and why do traditional advice columns fail?
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Creative block is a cognitive lock-in. Your brain — specifically the default mode network and prefrontal cortex working in concert — has settled into a groove. It keeps reaching for the same tools, the same metaphors, the same structural approaches. When those approaches stop producing results, the system stalls.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            It is not an absence of ideas. It is an excess of the same idea, wearing different costumes, running on a loop.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Traditional advice fails for a simple reason: it does not address the pattern. "Just start" is advice that assumes the problem is inertia. Sometimes it is. But sustained creative block — the kind that lasts days, weeks, months — is not inertia. It is a stuck compass that keeps pointing in the same wrong direction regardless of how hard you try to move.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            "Take a walk." "Try a different medium." "Read more." These are not bad suggestions. They are incomplete. They rely on the creative block resolving itself through passive exposure to new stimuli. Sometimes that works. More often, you return to the same stuck place carrying a coffee and a slightly better mood.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            What actually breaks creative block is <em>active cognitive disruption</em>: a deliberate intervention that forces the brain out of its groove by changing the frame, the angle, the assumed constraints, or the vocabulary of the problem. This is what the Trickster does.
          </p>

          {/* H2: Trickster archetype */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            MEOK's Trickster archetype: what it does for creatives
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Every AI system has a default mode. Most default to validation: reflecting your ideas back to you in a more polished form, confirming your instincts, generating content that sounds plausibly like what you were already reaching for.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            That is the last thing you need when you are stuck.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            The Trickster archetype in MEOK is built for disruption. It is not aggressive or chaotic — it is precise. The Trickster's job is to locate the assumption you have not examined, the frame you have taken for granted, the constraint you have accepted as permanent when it is actually optional — and apply pressure there.
          </p>

          <div
            style={{
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '24px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#f5f0e8',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              "The Trickster does not add to what you have. It questions what you think you need."
            </p>
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            In practice, this looks like:
          </p>

          <ul
            style={{
              margin: '0 0 24px',
              paddingLeft: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {[
              'Asking what would happen if the opposite of your premise were true',
              'Bringing in an unexpected domain — what does your stuck chapter have in common with a bridge failure? What does your stuck melody share with the structure of a coral reef?',
              'Identifying the rule you are following that you never consciously chose',
              'Proposing that the thing you are treating as the problem is actually the solution',
              'Suggesting you abandon the work entirely and describe what you wish it had been',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.85)',
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            None of these produce the work for you. All of them create the conditions for you to produce it yourself — from a different angle, with a different engine.
          </p>

          {/* H2: Reframing */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Reframing: the single most powerful tool for breaking blocks
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Reframing is not positive thinking. It is not telling yourself that the block is actually fine or that you are secretly making progress. Reframing is a structural move: it changes the frame through which you are looking at the problem, which changes what solutions appear possible.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Consider the writer stuck on chapter seven of a novel. The obvious frame: "I don't know what happens next." The reframes the Trickster might apply:
          </p>

          <div
            style={{
              backgroundColor: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '8px',
              padding: '28px 32px',
              margin: '28px 0',
            }}
          >
            <p
              style={{
                color: '#c9a84c',
                fontSize: '12px',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 18px',
              }}
            >
              Trickster Reframes for the Stuck Writer
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                '"What if the chapter you can\'t write is the one you\'re not supposed to write — what would the novel be if it jumped from chapter six to chapter eight and the gap became meaningful silence?"',
                '"What does your antagonist think happens in this chapter? Write that version."',
                '"You\'re writing chapter seven. What if the actual story starts in chapter seven and everything before it was prologue?"',
                '"The character you\'re stuck on — what are they most afraid someone will find out? What if that information is what makes this chapter finally move?"',
                '"You\'re treating this chapter as a bridge. What if it\'s a trapdoor?"',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.65,
                    color: 'rgba(245,240,232,0.8)',
                    fontStyle: 'italic',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            The same logic applies to musicians. Stuck on a bridge? The Trickster might ask: "What if the bridge is the wrong solution — what emotional problem were you trying to solve with it, and can the verse already solve it if you approach the final verse differently?" Or: "What would this section sound like if you removed all the instruments except the one you find most boring?"
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            For designers: "You're stuck because the layout isn't working. What if the layout is perfect and the content is the problem? Or: the content is perfect and the hierarchy of importance you've assigned is wrong?"
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            Reframing does not tell you the answer. It makes a different answer available. That is not a small thing — it is everything.
          </p>

          {/* H2: Pattern disruption */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            How MEOK uses pattern disruption to unlock creativity
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Pattern disruption is the active complement to reframing. Where reframing changes the frame, pattern disruption changes the inputs — deliberately introducing noise, constraint, or inversion to break the repetitive cycle the creative mind has locked into.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            MEOK's Trickster mode has several pattern disruption tools it uses in practice:
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              margin: '28px 0 36px',
            }}
          >
            {[
              {
                title: 'Constraint Injection',
                body: 'The Trickster imposes an arbitrary, uncomfortable constraint on your work. "Finish this in 200 words." "Remove every adjective." "Describe the entire visual piece using only verbs." "Write the scene with the emotional tone inverted." Constraints collapse the field of options and force the brain to solve differently.',
              },
              {
                title: 'Inversion',
                body: 'Whatever you are currently trying to do, the Trickster proposes you do the opposite — not as the final answer, but as an exercise. A musician writing a slow, melancholic piece gets asked: "What does the energetic, bright version of this feel like?" Sometimes the inversion reveals what the original was missing.',
              },
              {
                title: 'Cross-Domain Contamination',
                body: 'The Trickster deliberately imports vocabulary, structure, or problems from an unrelated field. A novelist might be asked to think about their stuck chapter as a software architecture problem. A visual artist might be asked to score their piece as music and then translate the score back into visual form.',
              },
              {
                title: 'Radical Reduction',
                body: 'Strip the work to its irreducible core. "If you could only keep one element of this piece, what would it be, and why? Start from there." Most creative blocks accumulate complexity. Radical reduction clears the debris and reveals the actual problem.',
              },
              {
                title: 'Temporal Displacement',
                body: 'The Trickster asks you to imagine the work from a different time: "How would you approach this if you already knew it was finished and loved? What choices did you make?" Or: "Imagine you\'re revisiting this work in twenty years. What do you wish you had done differently?" Future perspective unlocks present paralysis.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '8px',
                  padding: '24px 28px',
                }}
              >
                <h3
                  style={{
                    color: '#c9a84c',
                    fontSize: '16px',
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight: 700,
                    margin: '0 0 10px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: 'rgba(245,240,232,0.8)',
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            None of these are guaranteed to produce the breakthrough. Together, cycling through them with a thinking partner who does not give up — who will try a new angle every time — they are extremely effective. The Trickster does not run out of approaches.
          </p>

          {/* H2: Brainstorming vs generator */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            AI as a brainstorming partner vs AI as a generator
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            There is a critical distinction that most conversation about AI and creativity gets wrong.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            AI as a <strong style={{ color: '#f5f0e8' }}>generator</strong> produces things: a paragraph for your chapter, a melody for your bridge, a colour palette for your rebrand. It outputs content that you then use or discard.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            AI as a <strong style={{ color: '#f5f0e8' }}>brainstorming partner</strong> does something entirely different. It asks questions. It reframes. It introduces pressure. It maintains the integrity of your creative process while expanding the possibility space within it. The output is not content — it is perspective.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            When creatives hit a block and reach for AI as a generator, they often make the block worse. The generated content is not theirs — it doesn't carry their intent, their idiosyncrasies, their history with the work. Reading it, they feel more disconnected from the piece, not less. The voice is wrong. The structure is hollow. The block deepens because now there's something in the work that actively isn't them.
          </p>

          <div
            style={{
              borderLeft: '3px solid #c9a84c',
              paddingLeft: '24px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.65,
                color: '#f5f0e8',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              "AI-generated content during a creative block is noise disguised as signal. You need less content. You need a better question."
            </p>
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            MEOK's Trickster mode operates exclusively as a brainstorming partner. It will not write your chapter for you. It will not produce a melody. It will not generate your design. What it will do is sit with you in the problem until the problem changes shape — until the thing that was impossible becomes the thing that is obvious.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            This is what a great creative director does. What a great editor does. What a great collaborator does at 2am when you've been staring at the same wall for four hours. They do not do the work for you — they change how you see the work until you can do it yourself.
          </p>

          {/* H2: Scholar archetype */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            The Scholar archetype: cross-domain synthesis for creative fuel
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Alongside the Trickster, MEOK has a Scholar archetype. Where the Trickster disrupts, the Scholar synthesises — drawing connections across disciplines, periods, cultures, and fields that you would not normally have access to without years of accumulated reading.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            For creative block specifically, the Scholar's cross-domain synthesis is fuel. Creative blocks often happen when a creator has exhausted their immediate reference field. The novelist has read too much of the same genre. The musician has been listening to the same three artists. The designer has been looking at the same visual language.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            The Scholar can pull from anywhere. A composer stuck on a chamber piece might benefit from the Scholar synthesising the structural principles of Islamic geometric tiling. A novelist stuck on pacing might gain from the Scholar unpacking how silent film directors used visual rhythm before sound. A graphic designer might find their visual system unlocked by a deep dive into the logic of musical counterpoint.
          </p>

          <div
            style={{
              backgroundColor: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '8px',
              padding: '28px 32px',
              margin: '28px 0',
            }}
          >
            <p
              style={{
                color: '#c9a84c',
                fontSize: '12px',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                margin: '0 0 18px',
              }}
            >
              Scholar Cross-Domain Prompts
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                '"What does the architecture of this scene share with the structural principles of a suspension bridge? Where are the load-bearing elements and where is the tension being held?"',
                '"Apply the rules of jazz improvisation to this visual composition — what is the tonic, what are you improvising around, and where is the call-and-response?"',
                '"If this creative work were a biological system, what kind of system would it be? What is it optimising for? What would cause it to collapse?"',
                '"What creative problem in a completely different domain shares the same structural shape as the one you are stuck on? How was it solved there?"',
                '"What does the mathematics of fractals have to say about the repeating unit in your work — the smallest element that contains the logic of the whole?"',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.65,
                    color: 'rgba(245,240,232,0.8)',
                    fontStyle: 'italic',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            These are not metaphors for their own sake. They are structural tools. The cross-domain synthesis forces the brain to abstract the problem — to find its underlying logic independent of the medium — which almost always reveals a solution path that was invisible while you were inside the domain.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            The Trickster and Scholar work in tandem. The Trickster breaks your current frame. The Scholar fills the gap with fuel from unexpected places. Between them, the creative block rarely survives the session.
          </p>

          {/* H2: Practical techniques */}
          <h2
            style={{
              fontSize: 'clamp(22px, 3.5vw, 30px)',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '0 0 20px',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Practical techniques: how to use MEOK when you're stuck
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Knowing that MEOK has a Trickster and a Scholar is one thing. Using them effectively when you are genuinely blocked is another. Here is a concrete protocol.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              margin: '28px 0 36px',
            }}
          >
            {[
              {
                step: '01',
                title: 'Name the block precisely',
                body: 'Do not open with "I\'m stuck." Open with the specific shape of the stuck. "I\'m writing a novel and I can\'t figure out how chapter seven ends. The chapter is about X, the character is in a situation where Y, and I keep writing toward Z but it feels false." The more precise your description, the more precise the Trickster\'s disruption.',
              },
              {
                step: '02',
                title: 'Tell MEOK you want the Trickster',
                body: 'Ask explicitly for the Trickster mode: "I need you to challenge my assumptions about this piece, not validate them." This signals to MEOK that you want destabilisation, not reassurance. Most people instinctively seek reassurance when they are stuck — the Trickster is the better medicine.',
              },
              {
                step: '03',
                title: 'Do not deflect the first reframe',
                body: 'The Trickster will offer a reframe that feels wrong or uncomfortable. That discomfort is the signal — it means the reframe has touched something real. Your first instinct will be to explain why the reframe doesn\'t apply. Resist. Sit with it for at least sixty seconds. Try to make it apply. The answering of the reframe is often where the actual breakthrough happens.',
              },
              {
                step: '04',
                title: 'Use the Scholar for domain-crossing',
                body: 'Once the Trickster has broken something open, ask the Scholar to synthesise. "I\'ve realised my chapter needs X. Where else in human creative output has someone solved this kind of structural problem? What can I steal?" The Scholar will find the unexpected parallels. You will recognise the right ones immediately.',
              },
              {
                step: '05',
                title: 'Write a bad version immediately',
                body: 'After a productive Trickster session, do not strategise. Write immediately. Write badly. Write the version that uses the new frame, even if the execution is rough. The point is to move before the new perspective closes back down. Bad first drafts from a new frame are infinitely more valuable than no draft from a perfect frame.',
              },
              {
                step: '06',
                title: 'Return to MEOK with what you found',
                body: 'MEOK\'s Sovereign Memory holds context across sessions. When you come back with "I wrote that bad version and here\'s what I found," the Trickster and Scholar can build on the specific territory you have mapped rather than starting from scratch. The conversation compounds over time.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '28px 0',
                  borderBottom: i < 5 ? '1px solid rgba(245,240,232,0.08)' : 'none',
                }}
              >
                <div
                  style={{
                    color: '#c9a84c',
                    fontSize: '13px',
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    minWidth: '28px',
                    paddingTop: '3px',
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    style={{
                      color: '#f5f0e8',
                      fontSize: '18px',
                      fontWeight: 700,
                      margin: '0 0 10px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.7,
                      color: 'rgba(245,240,232,0.8)',
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* For specific disciplines */}
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#f5f0e8',
              margin: '40px 0 16px',
            }}
          >
            Specific prompts by discipline
          </h3>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(245,240,232,0.8)',
              margin: '0 0 20px',
            }}
          >
            These are entry points. Copy them into MEOK when you are stuck.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              margin: '0 0 40px',
            }}
          >
            {[
              {
                label: 'FOR WRITERS',
                prompts: [
                  '"I\'m stuck on [describe scene/chapter/passage]. Trickster mode: tell me the three most wrong assumptions I am probably making about what this scene needs to do."',
                  '"What is the scene I am most afraid to write in this book? Why might that be the scene I actually need to write next?"',
                  '"I keep writing toward [X]. What would the story look like if [X] was the thing the story is actually about avoiding?"',
                ],
              },
              {
                label: 'FOR MUSICIANS',
                prompts: [
                  '"I\'m stuck on [describe section]. What structural analogy from a completely different creative field might show me what\'s wrong with the architecture of this section?"',
                  '"I\'ve been listening to [same three artists] for six months. Scholar mode: what is a completely unexpected influence — a different era, genre, or discipline — that might feed what I\'m trying to do?"',
                  '"The emotion I\'m trying to capture is [X]. What musical approaches have historically been used to create the opposite emotion, and what can I steal from that inversion?"',
                ],
              },
              {
                label: 'FOR VISUAL ARTISTS & DESIGNERS',
                prompts: [
                  '"This composition isn\'t working and I don\'t know why. Trickster mode: what is the implicit visual hierarchy I have assumed that might be wrong?"',
                  '"I\'ve been in [style/visual language] for too long. Scholar: what visual system from a different culture, period, or discipline has solved the problem of [describe your core creative problem]?"',
                  '"The piece is technically correct but emotionally flat. What single element, if removed, would make the most uncomfortable silence?"',
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(245,240,232,0.03)',
                  border: '1px solid rgba(245,240,232,0.08)',
                  borderRadius: '8px',
                  padding: '24px 28px',
                }}
              >
                <p
                  style={{
                    color: '#c9a84c',
                    fontSize: '11px',
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    margin: '0 0 14px',
                  }}
                >
                  {section.label}
                </p>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {section.prompts.map((prompt, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.65,
                        color: 'rgba(245,240,232,0.75)',
                        fontStyle: 'italic',
                      }}
                    >
                      {prompt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 48px',
            }}
          >
            The pattern in all of these is the same: name the specific shape of the problem, ask for the uncomfortable frame, and then actually engage with the reframe rather than waiting for it to produce something comfortable. The Trickster is not designed to produce comfort. It is designed to produce movement.
          </p>

          {/* Closing */}
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 24px',
            }}
          >
            Creative block is not the end of your creative process. It is a compression point — a place where the process is being forced through too narrow a channel. The Trickster widens the channel. The Scholar fills it with new material. What comes out the other side is still yours.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.88)',
              margin: '0 0 64px',
            }}
          >
            It was always going to be yours. You just needed a different angle.
          </p>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(245,240,232,0.1)',
              margin: '0 0 64px',
            }}
          />

          {/* FAQ */}
          <section>
            <h2
              style={{
                fontSize: 'clamp(22px, 3.5vw, 30px)',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 36px',
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
              }}
            >
              Frequently asked questions
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              {[
                {
                  q: 'What is creative block and why does it happen?',
                  a: 'Creative block is not laziness or a lack of talent — it is a pattern your nervous system has locked into. It happens when the brain\'s default problem-solving approach hits a wall: you keep reaching for the same tools, the same references, the same structural moves, and they stop working. The creative signal is still there. The pipeline is congested. Traditional advice like "just start" or "take a walk" fails because it doesn\'t address the underlying pattern — it just waits for the pattern to self-resolve.',
                },
                {
                  q: "How does MEOK's Trickster archetype help with creative block?",
                  a: "MEOK's Trickster archetype is specifically designed for creative disruption. Rather than validating your current frame or offering generic encouragement, the Trickster actively destabilises the assumptions keeping you stuck. It introduces unexpected reframes, inverts your premise, drags in cross-domain analogies you wouldn't have reached for, and asks questions that force you to see your work from angles you had foreclosed. It is adversarial in the best sense — a thinking partner that refuses to let you stay comfortable inside the block.",
                },
                {
                  q: 'Is using AI for creative work cheating?',
                  a: "Using AI as a brainstorming partner is no more \"cheating\" than talking through a problem with a friend, reading a book that sparks an idea, or keeping a mood board. MEOK is not generating your work for you — it is helping you see your own work differently. The Trickster archetype is built specifically so it does not impose its aesthetic on yours. It introduces pressure and unexpected connections; you decide what survives. The output is entirely yours.",
                },
                {
                  q: 'What is the difference between AI as a generator and AI as a brainstorming partner?',
                  a: "AI as a generator produces content for you — a paragraph, a logo, a melody. AI as a brainstorming partner questions, provokes, and reframes your own thinking. MEOK operates as the latter. When you are blocked, the last thing you need is more content that isn't yours — it deepens the disconnection. What you need is a shift in perspective so your own creative signal can surface. MEOK's role is to create the conditions for your breakthrough, not to hand you one.",
                },
                {
                  q: 'Can MEOK help musicians and visual artists, not just writers?',
                  a: "Yes. Creative block is domain-agnostic — it is a cognitive pattern, not a writing problem. MEOK works with writers, visual artists, musicians, designers, filmmakers, and anyone whose work requires original thinking. The Trickster's reframing techniques apply equally to a stuck chord progression, a painting that has stopped working, a design system that feels lifeless, or a screenplay that has lost its engine. The Scholar archetype adds cross-domain synthesis — pulling from music theory when you're stuck on visual rhythm, or from architecture when you're stuck on narrative structure.",
                },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  style={{
                    padding: '28px 0',
                    borderBottom:
                      i < arr.length - 1
                        ? '1px solid rgba(245,240,232,0.08)'
                        : 'none',
                  }}
                >
                  <h3
                    style={{
                      color: '#f5f0e8',
                      fontSize: '18px',
                      fontWeight: 700,
                      margin: '0 0 12px',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.75,
                      color: 'rgba(245,240,232,0.75)',
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(245,240,232,0.1)',
              margin: '64px 0',
            }}
          />

          {/* CTA */}
          <section
            style={{
              textAlign: 'center',
              padding: '48px 32px',
              backgroundColor: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
            }}
          >
            <p
              style={{
                color: '#c9a84c',
                fontSize: '12px',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                margin: '0 0 16px',
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 700,
                color: '#f5f0e8',
                margin: '0 0 16px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Stop waiting for the block to lift.
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.65,
                color: 'rgba(245,240,232,0.7)',
                margin: '0 0 32px',
                maxWidth: '480px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Meet the Trickster. Get the reframe you haven't given yourself. Break the pattern that has been running on loop.
            </p>
            <Link
              href="/birth"
              style={{
                display: 'inline-block',
                backgroundColor: '#c9a84c',
                color: '#0d0c18',
                fontSize: '15px',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: '6px',
                textDecoration: 'none',
              }}
            >
              Meet MEOK
            </Link>
          </section>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'rgba(245,240,232,0.1)',
              margin: '64px 0 40px',
            }}
          />

          {/* Related posts */}
          <section>
            <p
              style={{
                color: 'rgba(245,240,232,0.45)',
                fontSize: '12px',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                margin: '0 0 24px',
              }}
            >
              Related
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-creative-professionals',
                  label: 'AI for Creative Professionals: A Companion That Feeds Your Process',
                },
                {
                  href: '/blog/archetypes-guide',
                  label: "MEOK's Archetypes Explained: Trickster, Scholar, Guardian, and More",
                },
                {
                  href: '/blog/cognitive-symbiosis',
                  label: 'Cognitive Symbiosis: How MEOK Thinks With You, Not For You',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#c9a84c',
                    fontSize: '15px',
                    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                    paddingBottom: '12px',
                    display: 'block',
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
