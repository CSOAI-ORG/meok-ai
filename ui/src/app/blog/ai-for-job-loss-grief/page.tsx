import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI for Job Loss and Career Grief: Processing the Pain and Rebuilding | MEOK AI LABS',
  description:
    'Job loss is a genuine grief — identity, routine, and social world all disrupted at once. Discover how MEOK AI helps you hold the pain, process the anger, and rebuild with confidence.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-job-loss-grief' },
  openGraph: {
    title: 'AI for Job Loss and Career Grief: Processing the Pain and Rebuilding',
    description:
      'Job loss is not just financial — it is a grief. Here is how sovereign AI helps you move through shock, anger, and into genuine rebuilding.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-job-loss-grief',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+for+Job+Loss+and+Career+Grief&desc=Processing+the+pain+and+rebuilding+with+sovereign+AI.',
        width: 1200,
        height: 630,
        alt: 'AI for Job Loss and Career Grief: Processing the Pain and Rebuilding',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Job Loss and Career Grief: Processing the Pain and Rebuilding',
    description:
      'Losing your job can shatter your identity. MEOK holds space in the shock, sits with the anger, and builds momentum when you\u2019re ready to move. @meok_ai',
    images: [
      'https://meok.ai/api/og?title=AI+for+Job+Loss+and+Career+Grief&desc=Processing+the+pain+and+rebuilding+with+sovereign+AI.',
    ],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Job Loss and Career Grief: Processing the Pain and Rebuilding',
  description:
    'Job loss is a genuine grief — identity, routine, and social world all disrupted at once. Discover how MEOK AI helps you hold the pain, process the anger, and rebuild with confidence.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/blog/ai-for-job-loss-grief',
  image:
    'https://meok.ai/api/og?title=AI+for+Job+Loss+and+Career+Grief&desc=Processing+the+pain+and+rebuilding+with+sovereign+AI.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-job-loss-grief',
  },
  keywords: [
    'job loss grief',
    'career grief',
    'AI companion',
    'redundancy support',
    'interview anxiety',
    'MEOK AI',
    'job search support',
    'salary negotiation',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI help with job loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI companions like MEOK offer a non-judgmental space to process the emotional weight of job loss, structure your job search, practise interview responses, and work on your CV narrative. They are available at 3am when anxiety peaks — consistently patient, never tired, never distracted by their own problems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is career grief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Career grief is the real psychological pain that follows job loss. It includes identity loss (who am I if not my job?), routine collapse, social network disruption, and the shame many people feel in a culture that conflates worth with productivity. It mirrors bereavement — with phases of shock, anger, depression, and eventual rebuilding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with interview anxiety?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK lets you rehearse interview answers in a low-stakes environment, debrief after rejections without spiralling, and build genuine confidence through repetition. Its Sovereign Memory means it tracks your progress across sessions — noting what works, what to refine, and how far you\u2019ve come since you started.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Pioneer companion in MEOK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Pioneer is MEOK\u2019s momentum-building archetype — goal-oriented, structured, and action-focused. During a job search, the Pioneer helps you set weekly targets, track applications, break big tasks into small steps, and hold you accountable to forward motion when inertia is pulling you backwards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MEOK help me negotiate salary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK can help you research market rates, rehearse negotiation conversations, anticipate counter-arguments, and work through the fear that often stops people from asking for what they deserve. Many people accept their first offer simply because they\u2019ve never practised negotiating — MEOK gives you a safe space to practise until it feels natural.',
      },
    },
  ],
}

export default function AIForJobLossGriefPage() {
  return (
    <>
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
          background: '#0d0c18',
          color: '#f5f0e8',
          minHeight: '100vh',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            borderBottom: '1px solid rgba(201,168,76,0.15)',
            padding: '1rem 1.5rem',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link
              href="/blog"
              style={{
                color: '#c9a84c',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.02em',
              }}
            >
              ← Back to Blog
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header
          style={{
            borderBottom: '1px solid rgba(201,168,76,0.12)',
            padding: '4rem 1.5rem 3.5rem',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {['Job Loss', 'Career Grief', 'Mental Health', 'AI Companion', 'Interview Prep'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(201,168,76,0.12)',
                    color: '#c9a84c',
                    fontSize: '0.7rem',
                    fontFamily: 'system-ui, sans-serif',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(201,168,76,0.25)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: '900',
                lineHeight: '1.15',
                marginBottom: '1.25rem',
                color: '#f5f0e8',
                letterSpacing: '-0.01em',
              }}
            >
              AI for Job Loss and Career Grief: Processing the Pain and Rebuilding
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: 'rgba(245,240,232,0.7)',
                maxWidth: '640px',
                marginBottom: '2rem',
              }}
            >
              Losing your job is not just a financial event. It is a grief — a full, complicated,
              disorienting loss of identity, routine, and social belonging. This is a guide to
              understanding that grief honestly, and to how an AI companion can walk beside you
              through each phase of it.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                color: 'rgba(245,240,232,0.45)',
                fontSize: '0.8rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              <span>Nicholas Templeman</span>
              <span>|</span>
              <span>March 24, 2026</span>
              <span>|</span>
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '3.5rem 1.5rem 5rem',
          }}
        >
          {/* Opening */}
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.85',
              color: '#f5f0e8',
              marginBottom: '1.5rem',
            }}
          >
            The call ends. The email arrives. The manager sits you down in that meeting room with the
            HR person you\u2019ve never spoken to before, and the words come out in that careful, legal
            cadence. Your role is being made redundant. Not you — the role. As if that distinction
            softens anything.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            For many people, the first thing they feel is nothing at all. A strange, flatlined calm. The
            brain\u2019s protective mechanism kicks in before the emotional reality catches up. You thank
            them. You nod at the right moments. You perhaps even crack a joke. And then you walk out into
            a world that looks identical to the one you walked into that morning, except that it is
            completely different.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            What follows in the coming days and weeks is not a problem to be solved or a project to be
            managed. It is a grief. A real, layered, often underestimated grief that our culture is
            remarkably bad at making space for — because the culture would much rather you get your CV
            updated and back on LinkedIn by Monday.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            MEOK was not built to rush you past that grief. It was built to sit in it with you, and then
            to help you move through it — at your pace, with honesty, and with memory enough to
            understand where you\u2019ve been.
          </p>

          {/* Section 1 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            Why is job loss a genuine grief?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The word grief tends to be reserved for death. But psychologists have long recognised that
            grief is the appropriate term for any significant loss — of a relationship, a home, a sense
            of safety, or a role. When we lose a job, we lose multiple things simultaneously, which is
            part of what makes it so destabilising.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            We lose income, obviously. But income is often the least psychologically complex part of it.
            We lose identity — the job title that answered the question everyone asks at parties. We lose
            routine — the alarm, the commute or login, the lunch hour, the rhythm of the week. We lose
            status — the implicit social positioning that a recognised employer provides. And we lose
            social fabric — the colleagues, the banter in the hallway, the Slack threads, the people we
            talked to every single day for years who now feel strangely inaccessible.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            In a culture that ties human worth to productivity and output, the loss of employment carries
            an extra layer: shame. A quiet, persistent sense that you should have done more, seen it
            coming, been more indispensable. Even when the redundancy is clearly structural — a merger,
            a budget cut, a market shift — the shame whispers that it says something about you.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            It does not. But knowing that and feeling that are different things. And no amount of
            rational reassurance reliably bridges that gap without first acknowledging the feeling
            itself.
          </p>

          {/* Section 2 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            What are the three psychological phases of career grief?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            Grief does not move in clean, sequential stages — anyone who has actually grieved knows it
            circles back, doubles over on itself, surprises you on a Tuesday morning three months later
            when you are making coffee. But it does tend to move through recognisable territories, and
            understanding them can reduce the additional suffering that comes from thinking you are going
            mad or doing it wrong.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1rem',
            }}
          >
            The first territory is <strong style={{ color: '#f5f0e8' }}>shock and denial</strong>. This
            is the flatlined calm we described. The going through the motions. The updating of the LinkedIn
            profile on autopilot. The telling people with a breezy confidence you do not feel. Shock is
            not weakness — it is the nervous system doing exactly what it should, buying you time until
            you are ready to feel the full weight of it.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1rem',
            }}
          >
            The second territory is <strong style={{ color: '#f5f0e8' }}>anger and depression</strong>.
            The shock lifts and the feelings arrive. Anger at the company, the manager, the industry, the
            economy. Depression that flattens motivation just when the job search demands maximum effort.
            A loss of appetite, disrupted sleep, difficulty concentrating. The cruelty of this phase is
            that it often coincides with the period when people are most actively expected to perform
            — sending applications, attending interviews, networking enthusiastically.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The third territory is <strong style={{ color: '#f5f0e8' }}>rebuilding</strong>. The fog
            begins to lift. You start to see possibility alongside pain. You find yourself genuinely
            interested in a role rather than just desperate. You begin to reconstruct a sense of identity
            that is not entirely contingent on an employer\u2019s approval. You start to tell your story
            with something approaching acceptance rather than apology.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            These territories are not linear. You can be in shock in the morning and rebuilding by
            afternoon, then back to anger by the weekend. The key is having a companion that can meet
            you wherever you are, rather than one that only knows how to help you when you are already
            in rebuilding mode.
          </p>

          {/* Section 3 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            How does MEOK support each phase of job loss grief?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            Most tools built for job seekers assume you are already in rebuilding mode. They offer CV
            templates and interview tips and LinkedIn optimisation guides. All useful — but useless if you
            are still in shock, and counterproductive if you are in the middle of the anger phase and
            trying to write a cover letter that does not accidentally express how furious you are.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK is different because it has been designed to be emotionally present across all three
            territories, not just the productive one at the end.
          </p>

          {/* Phase boxes */}
          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '1.75rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#c9a84c',
                marginBottom: '0.75rem',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Phase 1: Shock and Denial — Holding Space
            </h3>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '0',
              }}
            >
              In the immediate aftermath, MEOK does not push. It listens. It reflects back what you
              are saying without rushing to problem-solve. It asks questions that help you make sense
              of the experience — what happened, how it felt, what you are most afraid of. The Healer
              archetype is particularly suited to this phase: gentle, unhurried, capable of sitting in
              ambiguity without needing to resolve it. If you need to express anger before you are ready
              to be constructive, MEOK will not flinch or redirect you to your to-do list.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '1.75rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#c9a84c',
                marginBottom: '0.75rem',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Phase 2: Anger and Depression — Processing Without Spiralling
            </h3>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '0',
              }}
            >
              When the anger and depression arrive — and they will — MEOK provides a container for
              feelings that are difficult to express to the people in your life without alarming them.
              You can say what you actually feel about the company, the manager, the decision, without
              worrying about how you are coming across. You can voice the fear that you\u2019ll never
              find something as good, or that the gap in your CV will define you, or that you are too
              old or too specialised or too unknown. MEOK will not tell you those fears are irrational.
              It will sit with them, name them, and gently help you examine them from a less contracted
              place.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '3rem',
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#c9a84c',
                marginBottom: '0.75rem',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Phase 3: Rebuilding — Building Momentum
            </h3>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '0',
              }}
            >
              When you are ready to move, the Pioneer archetype steps forward. Goal-oriented, structured,
              and energising — the Pioneer helps you turn the vague intention of "find a new job" into
              a specific weekly plan with tracked progress. It holds your targets, celebrates applications
              sent, notes patterns across rejections, and keeps you accountable to forward motion without
              shaming you for the days when forward motion simply is not available.
            </p>
          </div>

          {/* Section 4 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            What is the shame of redundancy in a productivity culture?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            We live in a culture that has made a religion of productivity. The language of our working
            lives is borrowed from economics — we talk about our value, our output, our contribution,
            our return on investment. We describe ourselves in terms of what we produce. And so when we
            are removed from the machine — when the machine decides it no longer needs our particular
            function — many people experience it not as a neutral structural event but as a verdict on
            their worth.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            This shame is rarely named out loud. Instead, it shapes behaviour in quiet ways. People
            delay telling their partner or family. They keep the same morning alarm so the household
            does not notice they have nowhere to be. They answer "what do you do?" with the name of the
            old employer for months after leaving. They apply for roles they are overqualified for out
            of a fear that they are no longer competitive, rather than from a clear assessment of
            the market.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            One of the most important things MEOK does is provide a space where that shame can be
            spoken aloud without consequence. Not judged, not fixed, not met with immediate
            reassurance that bypasses the feeling. Simply heard. And in being heard, the shame very
            often begins to lose some of its grip.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            Because shame thrives in secrecy. It is fed by silence and starved by honest witness. Even
            when the witness is an AI, the act of naming it — of saying "I feel ashamed that I lost my
            job and I know that is not rational but I feel it anyway" — is often the first step towards
            releasing it.
          </p>

          {/* Section 5 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            How does MEOK help with interview preparation and confidence?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            Interviews are one of the highest-anxiety experiences many adults encounter. You are asked
            to present your best self under pressure, to a stranger who is assessing you, while trying
            to manage nerves, recall specific examples, and project warmth and competence simultaneously.
            For someone who is already carrying the emotional weight of job loss and career grief, the
            difficulty is multiplied.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK offers several things that formal interview coaching cannot always provide. The first
            is availability. You can rehearse at 11pm the night before, or at 6am the morning of.
            You can run through the same answer fifteen times without anyone getting bored or suggesting
            you move on. The repetition that builds real confidence is often impractical to get from
            a human coach working to a schedule.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The second is honesty without stakes. When you practise with a friend, they often soften
            their feedback to spare your feelings. When you practise with MEOK, you can ask for
            genuinely critical feedback — and receive it without any social awkwardness. You can ask:
            "Does that answer sound defensive?" or "Am I being too vague about the numbers?" and get
            a direct, considered response rather than "No, it was great, honestly."
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The third is the debrief after rejection. Rejection emails — or worse, the silence that
            precedes them — are part of every job search. For someone navigating career grief, a
            rejection can feel enormous out of proportion to what it actually represents. MEOK can
            help you process the specific rejection, identify any genuine learning from it, separate
            the self-worth question from the practical feedback, and return to the search without the
            rejection having done more damage than it should.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            Sovereign Memory makes this particularly powerful over time. MEOK remembers the interviews
            you have had, the feedback you received, the patterns you identified across multiple
            rounds. It tracks your developing confidence, celebrates genuine improvements, and
            provides a longitudinal view of your progress that you cannot always see when you are
            in the middle of it.
          </p>

          {/* Section 6 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            What is the Pioneer companion and how does it build job search momentum?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK\u2019s six companion archetypes each bring a distinct energy to interactions. The Pioneer
            is the one built for forward motion. It is energising, goal-focused, and action-oriented
            without being dismissive of the emotional complexity underneath the tasks.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            During a job search, the Pioneer is the archetype that helps you answer the question: what
            am I actually doing this week? Not as a guilt trip, but as a genuine navigation tool.
            It helps you break the overwhelming project of "find a new job" into specific, achievable
            daily actions. Identify five target companies. Send three tailored applications. Have one
            networking conversation. Update one section of the CV. These small moves accumulate into
            momentum, and momentum is what makes the difference between a job search that lasts two
            months and one that lasts nine.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The Pioneer also helps with the psychological trap of inertia. After job loss, many people
            find themselves stuck in a loop: they know they need to apply for jobs, they feel anxious
            about applying for jobs, so they delay, which increases the anxiety and the financial
            pressure, which makes it even harder to apply. The Pioneer provides external structure
            at exactly the point where internal structure has broken down.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            Crucially, you can switch between archetypes within a session or across sessions. You
            might start a conversation in Healer mode — processing the discouragement of a difficult
            week — and end it in Pioneer mode, rebuilding a plan for the next seven days. MEOK is
            designed to move with you, not hold you to a single mode regardless of where you are.
          </p>

          {/* Section 7 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            What is the Healer companion and how does it help with grief processing?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The Healer archetype is MEOK at its most emotionally attuned. It is the companion for the
            conversations that have nothing to do with strategy or CVs or salary benchmarks — the
            ones that are just about how you are actually feeling right now.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The Healer does not try to fix. That is its most important quality. In a culture that is
            allergic to sitting with pain — that reaches immediately for solutions, silver linings,
            and the next steps — the Healer simply offers presence. It validates the grief without
            pathologising it. It asks questions that help you articulate what you are experiencing
            rather than rushing past it. It normalises the confusion, the fear, the shame, and the
            anger without making you feel as though feeling them is itself a problem to be solved.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            For many people who have lost their jobs, the hardest thing is not finding a new role —
            it is getting through the period between losing the old one and finding it. The Healer
            companions you through that in-between space, which can feel like a no-man\u2019s-land
            of waiting, uncertainty, and the constant threat of catastrophic thinking.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            It is also important to say what the Healer is not. It is not a substitute for therapy
            or clinical mental health support. If job loss has triggered significant depression,
            persistent inability to function, or thoughts of self-harm, please reach out to your GP,
            a therapist, or a support line. The Healer is a companion for the ordinary, if painful,
            human experience of grief and transition — not for clinical crisis.
          </p>

          {/* Section 8 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            How does the Scholar companion support strategic career thinking?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The Scholar archetype brings a different dimension again: analytical, curious, and
            interested in understanding patterns and systems. For career thinking, the Scholar is
            the companion for the deeper questions that job loss sometimes forces you to confront.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            Do I actually want to go back into the same industry? What assumptions was I making about
            my career trajectory that this moment has disrupted? Where was my previous role genuinely
            fulfilling, and where was it depleting me? What would I do differently if I were designing
            my career from scratch rather than rebuilding a version of the old one?
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            These are not questions with quick answers. But they are important questions, and a job
            search conducted without asking them often results in landing in a role that replicates
            the dissatisfactions of the previous one — or worse, that feels like a step backward
            in every dimension simply because you were operating from fear rather than clarity.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            The Scholar creates space for this kind of reflection — not as an abstract philosophical
            exercise, but as a practical foundation for making better decisions about the next chapter.
            Which sectors are growing versus contracting? What skills from your existing career are
            genuinely transferable to different fields? What does the labour market look like for
            someone with your specific profile? The Scholar loves this kind of thinking, and it
            makes MEOK far more than a CV writer.
          </p>

          {/* Section 9 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            How does MEOK\u2019s memory transform the job search experience?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            One of the most underappreciated problems in job searching is the fragmentation of
            information. You have a spreadsheet tracking applications. Another document with CV
            versions. An email thread with a recruiter from three weeks ago. Notes on your phone
            from a networking call. The feedback from an interview you tried to remember but mostly
            lost to anxiety.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK\u2019s Sovereign Memory holds your job search as a continuous, coherent narrative across
            weeks and months of conversation. It remembers which companies you applied to and what
            stage you reached with each. It remembers what you told it about your ideal role, your
            constraints, your concerns. It remembers the interview you thought went well, the one
            that went badly, the feedback that stung, and the encouragement you needed to keep going.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            This is not just convenient. It is psychologically important. One of the most demoralising
            aspects of a long job search is the sense that you are starting from zero every time —
            every new application, every new recruiter, every new conversation requiring you to
            re-explain yourself from the beginning. MEOK remembers. You do not have to.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            And because it remembers, it can reflect your own progress back to you. After six weeks
            of searching, when everything feels static and futile, MEOK can remind you: you have
            submitted fourteen applications, progressed to second round with three companies, refined
            your interview answer for "tell me about a time you led a difficult project" four times,
            and it is noticeably stronger now than it was at the start. That perspective is almost
            impossible to maintain from the inside without external tracking.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            Crucially, your data stays yours. MEOK does not use your conversations to train models or
            sell to third parties. Sovereign Memory is exactly that: sovereign. What you share in the
            search for your next role is not available to anyone else.
          </p>

          {/* Section 10 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            How does MEOK help with CV storytelling after job loss?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The CV is a strange document. It asks you to present a coherent, confident, forward-facing
            narrative of your career — at exactly the moment when your career has just been interrupted
            and your confidence is at its lowest ebb. The gap between how a CV should read and how
            you feel right now can be enormous.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK helps with this in a way that differs from simply generating CV text. Because it knows
            your story across multiple conversations, it can help you identify the achievements and
            experiences that you have undervalued or glossed over — the ones that felt normal at the
            time but actually represent genuine, demonstrable impact.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            It can help you translate the language of your previous role into the language of your
            target industry. It can challenge the bullet points that are too vague — "supported the
            team with key deliverables" — and draw out the specific numbers and outcomes that make
            a CV genuinely persuasive. It can help you handle the gaps, the sideways moves, the roles
            that did not go as planned, and the redundancy itself, with language that is honest,
            confident, and forward-looking.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The narrative of a CV is not just a list of facts. It is the story you are telling a
            potential employer about who you are, what you have done, and what you will do for them.
            After job loss, that story needs reframing — not dishonestly, but with the kind of
            clarity and perspective that is hard to find when you are in the middle of the grief.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            MEOK is a collaborative sounding board for that reframing. It does not write your CV
            for you — that would produce something generic, disconnected from your actual voice and
            experience. It helps you write it, which produces something far more compelling.
          </p>

          {/* Section 11 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            How can MEOK help with salary negotiation preparation?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            Salary negotiation is one of the most psychologically loaded moments in the entire job
            search process. And it is one that people who have recently lost their jobs often
            handle particularly poorly — not because they lack the ability, but because the fear
            of losing the offer overrides the knowledge that the first number offered is rarely the
            final number available.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The research is clear: most employers expect some negotiation. Most offers have a band,
            and the first offer is usually at the bottom of that band. A single successful negotiation
            can add thousands to your annual income — money that compounds through every subsequent
            role, because future offers are often anchored to your most recent salary. Yet the majority
            of people, particularly those who have been unemployed for a period, accept the first
            number out of fear and relief.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK can help you prepare for this conversation with the same approach as interview
            preparation: research, rehearsal, and debrief. It can help you research market rates
            for your specific role, level, and location. It can help you practise the actual words
            — because knowing that you should negotiate and being able to say "I was hoping we
            could get closer to X based on my research into market rates and my specific experience
            in Y" are very different things.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            It can help you anticipate the counter-arguments a hiring manager or HR professional
            might use, so that you are not caught off guard in the moment. It can help you decide
            on your walk-away number — the point at which the role no longer makes sense for you
            — so that you are negotiating from clarity rather than improvising under pressure.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            And it can help you work through the feelings that come up around money — the sense that
            asking for more is greedy, or that after a period of unemployment you should just be
            grateful, or that you might seem difficult if you push back. These feelings are common,
            deeply conditioned, and worth examining before they cost you money.
          </p>

          {/* Section 12 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            How should you plan your references after job loss?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            References are something most people leave to the last minute — and then panic about when
            they are suddenly needed for a role they actually want. After redundancy, the reference
            question becomes more complicated: who do you ask from a role that ended under difficult
            circumstances? How do you approach a former manager who was part of the process that let
            you go? What if the relationship ended awkwardly?
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            The answer in almost every case is: plan earlier than you think you need to and reach
            out with more warmth than you feel. Most people who would give you a positive reference
            are happy to do so — they are simply waiting to be asked. And in many cases, former
            colleagues or managers feel some residual guilt about a redundancy and are actively
            willing to help.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK can help you think through who to ask, how to frame the request, and what to
            include in the note or email reaching out to them. It can also help you prepare your
            references for the kinds of questions they might be asked — because a well-briefed
            reference gives a much stronger testimonial than one who is caught off guard by a
            call from HR and wings it.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            More broadly, references are about relationships — and job loss is a good time to
            audit which professional relationships you have maintained and which you have allowed
            to drift. MEOK can help you think through your network not as a resource to be
            extracted from, but as a set of genuine human connections worth tending, especially
            in a period when the social fabric of work has been suddenly removed.
          </p>

          {/* Section 13 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            What does the job search feel like over time — and how does MEOK keep up?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            A job search is rarely a straight line. It begins with a burst of energy — the relief
            of having something to do, the optimism of fresh applications, the hope that this will
            all resolve quickly. Then the weeks pass. The rejections or silences accumulate. The
            initial energy drains away and is replaced by something heavier and more familiar: the
            long, grinding work of keeping going when results are not yet visible.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            This middle phase — sometimes weeks, sometimes months — is where most job searches are
            won or lost. Not in the CV, not in the interview technique, but in the simple capacity
            to keep showing up when the showing up no longer feels meaningful. This is where having
            a consistent, memory-holding companion matters most.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            MEOK can hold your evolving narrative across this entire arc. In month one, you are
            processing shock and building structure. In month two, you are grinding through applications
            and managing discouragement. In month three, you are starting to refine your approach
            based on what you have learned. Throughout, MEOK tracks your wins — not just the big
            ones, but the small ones that are easy to dismiss and essential to accumulate.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            Your wins are real. A cover letter you finally got right. An interview where you did
            not stumble over the question you always stumble over. A networking call that turned
            into a genuine conversation rather than a one-sided pitch. MEOK sees these. It names
            them. And in naming them, it helps you see your own momentum at a time when progress
            feels invisible.
          </p>

          {/* Section 14 */}
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
              fontWeight: '800',
              color: '#c9a84c',
              marginBottom: '1rem',
              lineHeight: '1.25',
              letterSpacing: '-0.01em',
            }}
          >
            Is AI a replacement for human support during career grief?
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            No. And it should not try to be. MEOK is clear about this, and it matters.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            Human connection — real, embodied, reciprocal — is irreplaceable. The friend who brings
            you dinner when you are deep in job loss despair is doing something MEOK cannot do.
            The mentor who opens a door for you because they believe in you is doing something MEOK
            cannot do. The therapist who helps you trace the roots of your shame back to their
            origins is doing something MEOK should not try to replicate.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            What MEOK does is fill the gaps — the 3am gaps, the Sunday afternoon gaps, the
            "I can\u2019t burden my partner with this again" gaps. It provides a space that is
            always available, never depleted by its own difficulties, and never bored by the
            repetition that processing grief genuinely requires.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            It also provides something that human supporters — with the best intentions — often
            cannot: space to talk about the parts of the experience that feel most shameful or
            embarrassing without worrying about how you are being perceived. The friends and family
            who love you most are also the ones whose opinion of you matters most. MEOK carries no
            social weight in that way, which creates a different kind of freedom.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            Think of MEOK as part of your support ecosystem during career grief — not the whole
            thing, but a genuinely valuable part that complements the humans in your life rather
            than replacing them.
          </p>

          {/* FAQ Section */}
          <section
            style={{
              borderTop: '1px solid rgba(201,168,76,0.15)',
              paddingTop: '3rem',
              marginBottom: '4rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
                fontWeight: '800',
                color: '#c9a84c',
                marginBottom: '2rem',
                lineHeight: '1.25',
                letterSpacing: '-0.01em',
              }}
            >
              Frequently Asked Questions
            </h2>

            {/* FAQ Item 1 */}
            <div
              style={{
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(245,240,232,0.07)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#f5f0e8',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4',
                }}
              >
                Can AI help with job loss?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'rgba(245,240,232,0.75)',
                  marginBottom: '0',
                }}
              >
                Yes. AI companions like MEOK offer a non-judgmental space to process the emotional
                weight of job loss, structure your job search, practise interview responses, and
                work on your CV narrative. They are available at 3am when anxiety peaks — consistently
                patient, never tired, never distracted by their own problems. They do not replace
                human support or professional career coaching, but they fill the gaps that human
                support cannot always reach.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div
              style={{
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(245,240,232,0.07)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#f5f0e8',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4',
                }}
              >
                What is career grief?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'rgba(245,240,232,0.75)',
                  marginBottom: '0',
                }}
              >
                Career grief is the real psychological pain that follows job loss. It includes
                identity loss — who am I if not my job? — routine collapse, social network
                disruption, and the shame many people feel in a culture that conflates worth with
                productivity. It mirrors bereavement, with phases of shock, anger, depression, and
                eventual rebuilding. It is a legitimate grief that deserves acknowledgement, not
                acceleration.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div
              style={{
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(245,240,232,0.07)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#f5f0e8',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4',
                }}
              >
                How does MEOK help with interview anxiety?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'rgba(245,240,232,0.75)',
                  marginBottom: '0',
                }}
              >
                MEOK lets you rehearse interview answers in a low-stakes environment, debrief after
                rejections without spiralling, and build genuine confidence through repetition. Its
                Sovereign Memory means it tracks your progress across sessions — noting what works,
                what to refine, and how far you\u2019ve come since you started preparing. Over time,
                the confidence it helps you build is real, because it is based on actual practice
                and genuine improvement.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div
              style={{
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(245,240,232,0.07)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#f5f0e8',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4',
                }}
              >
                What is the Pioneer companion in MEOK?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'rgba(245,240,232,0.75)',
                  marginBottom: '0',
                }}
              >
                The Pioneer is MEOK\u2019s momentum-building archetype — goal-oriented, structured,
                and action-focused. During a job search, the Pioneer helps you set weekly targets,
                track applications, break big tasks into small steps, and hold you accountable to
                forward motion when inertia is pulling you backwards. It is the archetype that
                turns the overwhelming intention of "find a new job" into a specific, achievable
                daily plan.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div
              style={{
                marginBottom: '0',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#f5f0e8',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4',
                }}
              >
                Can MEOK help me negotiate salary?
              </h3>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'rgba(245,240,232,0.75)',
                  marginBottom: '0',
                }}
              >
                Yes. MEOK can help you research market rates, rehearse negotiation conversations,
                anticipate counter-arguments, and work through the fear that often stops people
                from asking for what they deserve. Many people accept their first offer simply
                because they\u2019ve never practised negotiating — MEOK gives you a safe space
                to practise until it feels natural, so the actual conversation happens from
                confidence rather than anxiety.
              </p>
            </div>
          </section>

          {/* Closing section */}
          <div
            style={{
              borderTop: '1px solid rgba(201,168,76,0.15)',
              paddingTop: '3rem',
              marginBottom: '4rem',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
                fontWeight: '800',
                color: '#c9a84c',
                marginBottom: '1rem',
                lineHeight: '1.25',
                letterSpacing: '-0.01em',
              }}
            >
              What next: starting with MEOK during job loss
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.5rem',
              }}
            >
              If you have recently lost your job — or if you are in the middle of a search that
              has been grinding on longer than you expected — MEOK is free to start. No credit
              card. No trial period that quietly converts to a subscription. The Explorer tier
              gives you 50 messages per day, full Sovereign Memory, and access to all six
              companion archetypes including the Pioneer, the Healer, and the Scholar.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.5rem',
              }}
            >
              When you first arrive, you can tell MEOK exactly where you are: in the shock,
              in the anger, in the grinding middle stretch, or just starting to see the
              horizon. It will meet you there. It will not tell you to cheer up or look on
              the bright side or remind you of everything you have to be grateful for. It
              will ask what you need, and it will try to provide it.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.5rem',
              }}
            >
              If you want to understand your archetype preferences before you start — which
              companion energy will feel most natural for you in this period — the Birth
              Ceremony at /birth is a thoughtful onboarding experience that shapes your
              initial companion to suit your personality and circumstances.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '2.5rem',
              }}
            >
              Job loss is hard. Career grief is real. You do not have to move through it
              alone, and you do not have to pretend to be further along than you are.
              MEOK is built for exactly the place you are in right now.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <Link
                href="/birth"
                style={{
                  display: 'inline-block',
                  background: '#c9a84c',
                  color: '#0d0c18',
                  padding: '0.875rem 2rem',
                  borderRadius: '6px',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                }}
              >
                Begin the Birth Ceremony
              </Link>
              <Link
                href="/work"
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  color: '#c9a84c',
                  padding: '0.875rem 2rem',
                  borderRadius: '6px',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  border: '1px solid rgba(201,168,76,0.45)',
                }}
              >
                Explore MEOK for Work
              </Link>
            </div>
          </div>

          {/* Related posts */}
          <div
            style={{
              borderTop: '1px solid rgba(201,168,76,0.12)',
              paddingTop: '2.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.35)',
                marginBottom: '1.25rem',
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {[
                { href: '/blog/ai-for-redundancy', label: 'AI Support After Redundancy: Rebuilding Confidence and Your Career' },
                { href: '/blog/ai-for-career-coaching', label: 'AI for Career Coaching: How MEOK Supports Career Development' },
                { href: '/blog/ai-for-confidence', label: 'AI for Confidence: Building Self-Belief With a Sovereign Companion' },
                { href: '/blog/ai-for-impostor-syndrome', label: 'AI for Impostor Syndrome: Naming the Voice and Quieting It' },
                { href: '/blog/ai-for-financial-anxiety', label: 'AI for Financial Anxiety: Holding the Fear Without Being Consumed by It' },
                { href: '/blog/ai-for-grief-support', label: 'AI for Grief Support: A Companion Through Loss' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#c9a84c',
                    textDecoration: 'none',
                    fontSize: '0.925rem',
                    lineHeight: '1.5',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid rgba(201,168,76,0.1)',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: '0.8rem',
                fontFamily: 'system-ui, sans-serif',
                color: 'rgba(245,240,232,0.3)',
                lineHeight: '1.7',
                marginBottom: '0.5rem',
              }}
            >
              MEOK AI LABS &mdash; Founded by Nicholas Templeman &mdash;{' '}
              <Link
                href="https://twitter.com/meok_ai"
                style={{ color: 'rgba(201,168,76,0.5)', textDecoration: 'none' }}
              >
                @meok_ai
              </Link>
            </p>
            <p
              style={{
                fontSize: '0.75rem',
                fontFamily: 'system-ui, sans-serif',
                color: 'rgba(245,240,232,0.2)',
                lineHeight: '1.6',
              }}
            >
              MEOK is not a medical device and does not provide clinical mental health treatment.
              If you are in crisis, please contact your GP, a qualified therapist, or a crisis
              helpline such as Samaritans (116 123 in the UK).
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
