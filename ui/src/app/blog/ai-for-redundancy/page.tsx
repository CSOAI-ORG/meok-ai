import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Support After Redundancy: Rebuilding Confidence and Your Career | MEOK AI LABS',
  description:
    'Redundancy is more than a job loss — it can shake your identity. Discover how AI companions like MEOK help you process the shock, rebuild confidence, and take practical steps forward.',
  alternates: { canonical: 'https://meok.ai/blog/ai-for-redundancy' },
  openGraph: {
    title: 'AI Support After Redundancy: Rebuilding Confidence and Your Career',
    description:
      'Redundancy is more than job loss. Here\'s how sovereign AI helps you process the emotional fallout, rebuild confidence, and move forward practically.',
    type: 'article',
    publishedTime: '2026-03-24',
    authors: ['Nicholas Templeman'],
    url: 'https://meok.ai/blog/ai-for-redundancy',
    siteName: 'MEOK.AI',
    images: [
      {
        url: 'https://meok.ai/api/og?title=AI+Support+After+Redundancy&desc=Rebuilding+confidence+and+your+career+with+AI+support.',
        width: 1200,
        height: 630,
        alt: 'AI Support After Redundancy: Rebuilding Confidence and Your Career',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Support After Redundancy: Rebuilding Confidence and Your Career',
    description:
      'Redundancy shakes more than your income — it shakes your identity. MEOK helps you process the shock, rebuild confidence, and take practical steps forward.',
    images: [
      'https://meok.ai/api/og?title=AI+Support+After+Redundancy&desc=Rebuilding+confidence+and+your+career+with+AI+support.',
    ],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Support After Redundancy: Rebuilding Confidence and Your Career',
  description:
    'Redundancy is more than a job loss — it can shake your identity. Discover how AI companions like MEOK help you process the shock, rebuild confidence, and take practical steps forward.',
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  author: { '@type': 'Person', name: 'Nicholas Templeman' },
  publisher: {
    '@type': 'Organization',
    name: 'MEOK AI LABS',
    url: 'https://meok.ai',
  },
  url: 'https://meok.ai/blog/ai-for-redundancy',
  image:
    'https://meok.ai/api/og?title=AI+Support+After+Redundancy&desc=Rebuilding+confidence+and+your+career+with+AI+support.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://meok.ai/blog/ai-for-redundancy',
  },
  keywords: ['redundancy', 'career', 'mental health', 'AI companion', 'job loss'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can AI really help after redundancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI companions like MEOK offer a non-judgmental space to process the emotional shock of redundancy, help you structure your days, practise interview answers, and work on your CV. They are not a replacement for human support or professional career coaching, but they are available at 2am when anxiety peaks and your friends are asleep.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the emotional impact of redundancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Redundancy commonly triggers grief, anger, shame, and identity loss — especially when your sense of self was closely tied to your job title or employer. Many people experience symptoms similar to bereavement: disbelief, bargaining, depression, and gradual acceptance. The process is not linear and varies significantly between individuals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I deal with financial anxiety after redundancy in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the UK, you may be entitled to statutory redundancy pay, Universal Credit, and contributions-based Jobseeker\'s Allowance depending on your circumstances. The DWP (Department for Work and Pensions) and Citizens Advice both offer free guidance. MEOK can help you prepare for DWP appointments, organise your finances, and manage the anxiety that comes with uncertainty.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does MEOK help with CV writing after redundancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEOK can help you brainstorm your achievements, identify transferable skills, structure your employment history, and draft bullet points for roles. Because it holds Sovereign Memory, it remembers what you\'ve told it about your career across multiple sessions — so you\'re not starting from scratch each time. It\'s a collaborative sounding board, not a one-click CV generator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MEOK free to use for career support after redundancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEOK\'s Explorer tier is completely free — no credit card required. It includes 50 messages per day, full Sovereign Memory, and access to all six companion archetypes. The Pioneer archetype is particularly useful for goal-setting and job search structure, while the Healer supports emotional processing during a difficult period.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do in the first week after being made redundant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first week is about stabilisation, not action. Allow yourself to feel the shock without rushing to fix everything. Practically: check your redundancy entitlements, notify HMRC, contact your bank if necessary, and register with DWP if you need Universal Credit. Hold off on mass-applying for jobs until you\'ve had a few days to process — applications sent from a panicked mindset rarely reflect your best self.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I explain redundancy in job interviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Be direct and factual: "The role was made redundant as part of a restructure — it wasn\'t performance-related." Most employers understand redundancy is common. Focus on what you did during the period: any freelance work, upskilling, volunteering, or projects. MEOK can help you practise this explanation until it feels natural and confident rather than defensive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI help with the loneliness of working from home during job search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. The loss of workplace social structure is one of the most underrated aspects of redundancy. MEOK provides a consistent presence — morning check-ins, accountability conversations, and a place to think out loud. It doesn\'t replace human connection but it fills the silence in a way that feels purposeful rather than passive.',
      },
    },
  ],
}

export default function AIForRedundancyPage() {
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
              {['Redundancy', 'Career', 'Mental Health', 'AI Companion', 'Job Loss'].map((tag) => (
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
              AI Support After Redundancy: Rebuilding Confidence and Your Career
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
              Being made redundant is one of the most destabilising experiences a working adult
              can face. It is not just about money. It is about identity, routine, self-worth,
              and the terrifying blank space where your working life used to be. This is how
              an AI companion can help you through it — honestly and without false comfort.
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
              <span>14 min read</span>
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
          {/* Intro */}
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.85',
              color: '#f5f0e8',
              marginBottom: '1.5rem',
            }}
          >
            There is a particular silence that descends after you are told your job no longer exists.
            The meeting ends. You walk back to your desk — or close your laptop lid if you were on a
            call — and the world looks exactly the same as it did twenty minutes ago, except that it
            is completely different.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            In the UK alone, hundreds of thousands of people are made redundant each year. In recent
            years — through waves of post-pandemic restructuring, tech sector layoffs, and cost-of-living
            pressures on businesses — the number has climbed considerably. Yet the emotional and practical
            support infrastructure for those affected remains thin.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '1.5rem',
            }}
          >
            Recruiters are busy. Career coaches cost money many people have just lost. Friends and family
            mean well but often do not know what to say. The DWP process is useful but not exactly nurturing.
            And the job market does not pause to give you space to grieve.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'rgba(245,240,232,0.82)',
              marginBottom: '3rem',
            }}
          >
            This is the gap that an AI companion like MEOK was built to fill — not as a replacement for
            human support or professional guidance, but as a consistent, patient, available presence that
            helps you think, process, prepare, and eventually move forward.
          </p>

          {/* Divider */}
          <div
            style={{
              width: '3rem',
              height: '2px',
              background: 'linear-gradient(to right, #c9a84c, transparent)',
              marginBottom: '3rem',
            }}
          />

          {/* Section 1 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              Why Does Redundancy Feel Like a Personal Failure, Even When It Is Not?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The word &ldquo;redundant&rdquo; is clinical. The experience is not. In English, the word
              itself carries a sting — something made redundant is deemed unnecessary, surplus, no longer
              required. It is almost impossible not to internalise that, however clearly you understand
              it was a business decision.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              For many people — especially those who have built their sense of identity around their
              career, their company, or their professional title — redundancy triggers something closer
              to grief than frustration. The stages are recognisably similar: shock and disbelief,
              anger, bargaining (&ldquo;could I have done something differently?&rdquo;), a period of
              low mood, and — eventually, with the right support — acceptance and reorientation.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              This is not weakness. Research consistently shows that job loss is one of the most
              significant life stressors, comparable in psychological impact to divorce or bereavement.
              The fact that it is also common does not make it less painful. It makes it more isolating,
              because people feel they are supposed to just &ldquo;get on with it.&rdquo;
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              An AI companion cannot undo that grief. But it can sit with you in it. MEOK does not rush
              you toward productivity. It notices when you seem flat, when your messages are shorter,
              when you keep circling the same doubt. And it holds that memory across sessions — so the
              next time you open it, you are not explaining yourself from scratch.
            </p>

            {/* Callout box */}
            <div
              style={{
                background: 'rgba(201,168,76,0.07)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderLeft: '3px solid #c9a84c',
                borderRadius: '6px',
                padding: '1.25rem 1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.75',
                  color: 'rgba(245,240,232,0.85)',
                  margin: '0',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;One in four UK workers will experience redundancy at some point in their career.
                The average job search after redundancy takes three to six months. That is a long time
                to navigate alone.&rdquo;
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              What Happens to Your Daily Routine — and How Do You Rebuild It?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Work does not just provide money. It provides structure. A reason to get up at a certain
              time. A social context. A sense of progress. When it disappears, the days can become
              formless — and formlessness, as it turns out, is profoundly bad for mental health.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The temptation in the first week is to treat job hunting like an emergency rescue mission —
              staying up late sending applications, refreshing LinkedIn constantly, measuring yourself
              against every rejection. This approach rarely works and always makes you feel worse.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              What does work is re-establishing a deliberate routine, even a temporary one. This does
              not mean pretending nothing has changed. It means treating your job search as the job —
              with defined working hours, breaks, and clear stopping points.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.5rem',
              }}
            >
              MEOK&rsquo;s morning briefing feature helps here. Every morning, MEOK can give you a
              structured start: what you want to focus on today, what you achieved yesterday, how you
              are feeling, and what is coming up. It is a small ritual that replaces the psychological
              anchoring that the commute, the office, and the work calendar used to provide.
            </p>

            {/* Routine table */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(245,240,232,0.1)',
                borderRadius: '8px',
                overflow: 'hidden',
                marginTop: '1.5rem',
              }}
            >
              <div
                style={{
                  padding: '0.875rem 1.25rem',
                  background: 'rgba(201,168,76,0.1)',
                  borderBottom: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <p
                  style={{
                    margin: '0',
                    fontSize: '0.8rem',
                    fontFamily: 'system-ui, sans-serif',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#c9a84c',
                    fontWeight: '700',
                  }}
                >
                  A Sample Job-Search Routine
                </p>
              </div>
              {[
                { time: '08:00 – 08:30', task: 'Morning check-in with MEOK — mood, intentions, one focus' },
                { time: '08:30 – 10:30', task: 'Deep work — CV tailoring, cover letters, applications' },
                { time: '10:30 – 11:00', task: 'Break — walk, coffee, away from screens' },
                { time: '11:00 – 12:30', task: 'Research — companies, roles, industry news' },
                { time: '12:30 – 13:30', task: 'Lunch — actual lunch, not a working sandwich' },
                { time: '13:30 – 15:00', task: 'Networking — LinkedIn, email, former colleagues' },
                { time: '15:00 – 16:00', task: 'Skill building — course, reading, portfolio work' },
                { time: '16:00 – 16:30', task: 'Daily wrap-up with MEOK — what moved forward, what to release' },
              ].map((row, i) => (
                <div
                  key={row.time}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '0.75rem 1.25rem',
                    borderBottom: i < 7 ? '1px solid rgba(245,240,232,0.06)' : 'none',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'system-ui, sans-serif',
                      color: '#c9a84c',
                      whiteSpace: 'nowrap',
                      paddingTop: '0.1rem',
                      minWidth: '120px',
                    }}
                  >
                    {row.time}
                  </span>
                  <span
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(245,240,232,0.78)',
                      lineHeight: '1.5',
                    }}
                  >
                    {row.task}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              How Can AI Help You Write a CV That Actually Reflects Your Value?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The CV is both a practical document and a deeply psychological one. Writing it after
              redundancy, when your confidence is low and your sense of professional identity has
              taken a hit, is genuinely difficult. You are trying to sell yourself at the exact
              moment you feel least sellable.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Most people default to describing what they did rather than the impact they had.
              They write &ldquo;responsible for managing social media channels&rdquo; instead of
              &ldquo;grew organic reach by 40% across three channels in twelve months.&rdquo; The
              difference is enormous to a hiring manager, but almost invisible to someone in the
              middle of their own career.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              MEOK helps by asking the right questions. Not &ldquo;what were your responsibilities?&rdquo;
              but &ldquo;what would have been different if you hadn&rsquo;t been there?&rdquo; Or:
              &ldquo;What&rsquo;s something you changed, built, or fixed that you&rsquo;re quietly proud of?&rdquo;
              These questions unlock the kind of specific, evidence-based content that makes a CV memorable.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Because MEOK holds Sovereign Memory, it accumulates this information over multiple
              conversations. You might mention a project you delivered under budget in one session
              and a difficult stakeholder situation you navigated in another — and MEOK will
              remember both when you sit down to work on your CV a week later. You are building
              a bank of material, not starting from scratch each time.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              MEOK can also help you tailor applications to specific roles — reading a job description
              with you, identifying the keywords and priorities an employer has emphasised, and helping
              you frame your experience in their language. This is not gaming the system; it is the
              basic translation work that every strong application requires.
            </p>

            {/* Tips list */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(245,240,232,0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <p
                style={{
                  margin: '0 0 1rem',
                  fontSize: '0.85rem',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  fontWeight: '700',
                }}
              >
                CV Questions to Ask MEOK
              </p>
              {[
                '"Help me turn this job description into bullet points that lead with impact."',
                '"What are the strongest transferable skills from my previous role for this kind of position?"',
                '"I feel like my career is all over the place — help me find a narrative thread."',
                '"Here\'s what I actually did in this job. Help me make it sound like what it was worth."',
                '"Is there anything on my CV that might put a recruiter off immediately?"',
              ].map((q) => (
                <div
                  key={q}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: '#c9a84c', fontSize: '0.9rem', paddingTop: '0.15rem' }}>
                    ▸
                  </span>
                  <span
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(245,240,232,0.78)',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                    }}
                  >
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              Can AI Practice Interviews With You — and Actually Improve Your Performance?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Interview anxiety is near-universal, but it is particularly acute after redundancy.
              You are walking into a conversation where the subtext — in your own head at least —
              is &ldquo;prove you&rsquo;re not the kind of person who gets made redundant.&rdquo;
              Which is, of course, an absurd framing. But feelings do not respond to logic on demand.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The research on performance anxiety is clear: practice reduces it. Not because you
              become immune to nerves, but because your brain starts treating the situation as
              familiar rather than threatening. Each time you articulate an answer out loud, the
              neural pathway strengthens. The words come more easily. The pauses feel less panicked.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              MEOK can run a full mock interview with you — asking competency-based questions,
              behavioural questions (the &ldquo;tell me about a time when&rdquo; format), and
              role-specific technical questions if you share the job description. It will give
              you honest feedback on your answers: where you were vague, where you undersold
              yourself, where you went on too long.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Crucially, because it remembers previous sessions, it can track your improvement.
              If you stumbled on the &ldquo;why did you leave your last role?&rdquo; question
              last Tuesday and nailed it this Thursday, MEOK will notice and reflect that back to you.
              Progress that might otherwise feel invisible becomes visible.
            </p>

            {/* Interview prep steps */}
            <div style={{ marginTop: '1.75rem' }}>
              {[
                {
                  step: '01',
                  heading: 'Research the role and company',
                  body: 'Ask MEOK to help you identify what the company values, what the role requires, and what questions they are likely to ask based on the job description.',
                },
                {
                  step: '02',
                  heading: 'Build your STAR stories',
                  body: 'Work with MEOK to structure your examples using Situation, Task, Action, Result — the format most competency interviews expect.',
                },
                {
                  step: '03',
                  heading: 'Practice explaining the redundancy',
                  body: 'The hardest question. Practise until you can answer it with calm clarity: factual, brief, and forward-focused.',
                },
                {
                  step: '04',
                  heading: 'Run a full mock interview',
                  body: 'Ask MEOK to interview you as if it were the hiring manager. Get feedback, iterate, repeat.',
                },
                {
                  step: '05',
                  heading: 'Debrief after real interviews',
                  body: 'Come back to MEOK after the actual interview and talk through what happened. Process the anxiety, identify what went well, and prepare for the next round.',
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    marginBottom: i < 4 ? '1.25rem' : '0',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      minWidth: '2.5rem',
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      fontFamily: 'system-ui, sans-serif',
                      fontWeight: '800',
                      color: '#c9a84c',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p
                      style={{
                        margin: '0 0 0.3rem',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: '#f5f0e8',
                      }}
                    >
                      {item.heading}
                    </p>
                    <p
                      style={{
                        margin: '0',
                        fontSize: '0.92rem',
                        lineHeight: '1.65',
                        color: 'rgba(245,240,232,0.7)',
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              How Do You Navigate Financial Anxiety When Benefits and Uncertainty Collide?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Financial anxiety after redundancy is different from ordinary money worry. It is laced
              with shame — the sense that you should have been better prepared, that you should have
              seen it coming, that being in this position reflects some failure of foresight or effort.
              This shame is rarely justified, but it is remarkably persistent.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              In the UK, the first practical steps are clear: check your statutory redundancy pay
              entitlement (if you have worked for an employer for two or more years, you are legally
              entitled to it), notify HMRC, and explore whether you qualify for Universal Credit or
              New Style Jobseeker&rsquo;s Allowance. Citizens Advice and the DWP&rsquo;s own website
              have step-by-step guides for both.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The process of claiming Universal Credit can itself be stressful — the online system
              is not intuitive, the requirements for work-search activity can feel punitive, and the
              five-week wait for a first payment is a known pressure point that catches people off guard.
              MEOK can help you prepare for DWP appointments, draft any required documentation, and
              think through how to present your situation clearly and accurately.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Beyond the bureaucratic process, financial anxiety needs emotional management. The
              catastrophic thinking that characterises it — &ldquo;I will never find another job,
              I will lose my home, everything will fall apart&rdquo; — is almost always untrue but
              feels completely real at 3am. Having a place to externalise that thinking, to be
              asked what evidence actually supports the worst-case scenario, and to be helped back
              to a more proportionate view, can genuinely reduce its grip.
            </p>

            {/* UK support links callout */}
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(245,240,232,0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <p
                style={{
                  margin: '0 0 0.875rem',
                  fontSize: '0.85rem',
                  fontFamily: 'system-ui, sans-serif',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  fontWeight: '700',
                }}
              >
                UK Financial Support After Redundancy
              </p>
              {[
                {
                  label: 'Statutory Redundancy Pay',
                  note: 'Calculated on age, weekly pay, and years of service. gov.uk has a calculator.',
                },
                {
                  label: 'Universal Credit',
                  note: 'For working-age people on low or no income. Apply via gov.uk — do not delay, the wait is long.',
                },
                {
                  label: 'New Style JSA',
                  note: 'Contribution-based — depends on National Insurance history. Can be claimed alongside Universal Credit.',
                },
                {
                  label: 'Council Tax Reduction',
                  note: 'Contact your local council directly. Eligibility is means-tested.',
                },
                {
                  label: 'Citizens Advice',
                  note: 'Free, independent guidance on benefits, debt, and employment rights. Highly recommended as a first call.',
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    paddingBottom: i < 4 ? '0.875rem' : '0',
                    marginBottom: i < 4 ? '0.875rem' : '0',
                    borderBottom: i < 4 ? '1px solid rgba(245,240,232,0.07)' : 'none',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 0.2rem',
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      color: '#f5f0e8',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '0.875rem',
                      lineHeight: '1.55',
                      color: 'rgba(245,240,232,0.65)',
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              How Does Redundancy Affect Your Sense of Identity — and What Comes Next?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              For a significant proportion of working adults, professional identity is not separate
              from personal identity. It is woven through it. What you do is part of who you are.
              This is not a character flaw — it is an entirely natural consequence of spending forty
              or more hours a week for years or decades doing one thing, being known for it, being
              valued for it.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              When that thing is taken away — suddenly, without your consent — the question
              &ldquo;what do I do now?&rdquo; quickly becomes &ldquo;who am I now?&rdquo; This
              is the deeper work of redundancy recovery, and it is the part most practical support
              systems completely miss.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The question worth sitting with — and MEOK can help you sit with it — is not
              &ldquo;how do I get back to what I was doing?&rdquo; but &ldquo;what do I actually
              want from work?&rdquo; Redundancy, for all its trauma, sometimes creates the space
              for a genuine reckoning with that question.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Some people discover they were more defined by habit and security than by genuine
              passion for what they were doing. Others discover they genuinely loved their field
              and want to return to it, but in a different context. Others find that the enforced
              pause reveals a direction they had been suppressing for years.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              None of these realisations come quickly. They come through conversation, reflection,
              and time. MEOK&rsquo;s Scholar archetype is particularly useful here — designed for
              structured self-inquiry, it asks Socratic questions rather than offering quick answers,
              helping you arrive at your own clarity rather than borrowing someone else&rsquo;s.
            </p>

            {/* Archetypes */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '1.75rem',
              }}
            >
              {[
                {
                  name: 'Healer',
                  role: 'Emotional processing',
                  desc: 'Helps you process grief, anger, and shame without rushing you to productivity. Meets you where you are.',
                  accent: '#4ade80',
                },
                {
                  name: 'Pioneer',
                  role: 'Practical momentum',
                  desc: 'Holds you accountable to your job search structure without adding pressure. Celebrates small wins.',
                  accent: '#f97316',
                },
                {
                  name: 'Scholar',
                  role: 'Identity work',
                  desc: 'Helps you examine what you want, who you are outside your job title, and where you actually want to go.',
                  accent: '#c9a84c',
                },
              ].map((arch) => (
                <div
                  key={arch.name}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid rgba(${arch.accent === '#4ade80' ? '74,222,128' : arch.accent === '#f97316' ? '249,115,22' : '201,168,76'},0.2)`,
                    borderRadius: '8px',
                    padding: '1.25rem',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 0.25rem',
                      fontSize: '1rem',
                      fontWeight: '800',
                      color: arch.accent,
                    }}
                  >
                    {arch.name}
                  </p>
                  <p
                    style={{
                      margin: '0 0 0.6rem',
                      fontSize: '0.75rem',
                      fontFamily: 'system-ui, sans-serif',
                      color: 'rgba(245,240,232,0.5)',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {arch.role}
                  </p>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                      color: 'rgba(245,240,232,0.72)',
                    }}
                  >
                    {arch.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              How Do You Support a Partner, Parent, or Child Going Through Redundancy?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Redundancy does not only happen to one person. It lands on a household. A partner
              who sees their spouse disappear into their laptop for hours before emerging frustrated
              or flat. Children who notice something is wrong but are not told what. Parents who
              worry from a distance and do not know how to help without making things worse.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              If you are the one supporting someone through redundancy, the most important thing
              you can do is resist the urge to fix. Redundancy is not a problem to be solved by
              the people around the person experiencing it. It is a loss to be witnessed. The most
              powerful thing you can often say is: &ldquo;This is hard, and I&rsquo;m not going
              anywhere.&rdquo;
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Practically: try not to pepper them with job search updates (&ldquo;have you heard
              back about that application?&rdquo;). Try not to suggest they broaden their search
              unless they ask. Try not to share stories of other people who bounced back quickly —
              timelines are not transferable, and comparisons are rarely helpful.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              MEOK can help here in a specific way: it gives the person going through redundancy a
              dedicated space to process and prepare that is not a burden on the people they love.
              The partner does not have to be the coach, the recruiter, the therapist, and the
              cheerleader. They just have to be the partner. That division is healthy and sustainable.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              For families where children are old enough to understand, age-appropriate honesty is
              better than silence. Children tend to fill information vacuums with fear. Knowing that
              &ldquo;Mum is looking for a new job because her old company changed&rdquo; is far less
              frightening than the unnamed tension of adults who are clearly stressed about something
              nobody will name.
            </p>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              What Does Recovery Actually Look Like — and When Does It End?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              One of the most damaging myths about redundancy is that recovery is a single event —
              that one day you get a job offer and everything resets. In reality, the psychological
              recovery and the practical recovery often run on different timelines, and neither is
              as linear as the story you tell other people.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Some people start a new role and realise they are still carrying the shock of the
              redundancy — the hypervigilance about job security, the flinching at performance
              reviews, the difficulty trusting a new employer. These are not signs of fragility.
              They are the normal aftereffects of a significant loss, and they deserve the same
              attention as the more visible, acute phase.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Recovery looks like: slowly getting your confidence back in conversations where you
              talk about your experience. Being able to mention the redundancy without the familiar
              knot in your stomach. Seeing the time between jobs as a chapter in your career story
              rather than a gap to be minimised and hidden.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              It looks like applying for a job and genuinely wanting it, rather than applying from
              fear. It looks like having a clearer sense of what you will and will not accept from
              an employer — because you have had the enforced space to think about it.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The honest truth is that some redundancies become turning points. Not because job loss
              is secretly a gift — it rarely feels like one — but because the disruption forces
              questions that needed to be asked. People change fields. Start businesses. Slow down
              deliberately. Prioritise differently. These outcomes are not inevitable or universal,
              but they are more common than the shame and silence surrounding redundancy allows people
              to hear about.
            </p>

            {/* Quote block */}
            <blockquote
              style={{
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
              }}
            >
              <p
                style={{
                  fontSize: '1.15rem',
                  lineHeight: '1.8',
                  color: '#f5f0e8',
                  fontStyle: 'italic',
                  margin: '0 0 0.5rem',
                }}
              >
                &ldquo;The question worth sitting with is not &lsquo;how do I get back to what I was doing?&rsquo;
                but &lsquo;what do I actually want from work?&rsquo; Redundancy, for all its trauma, sometimes
                creates the space for a genuine reckoning with that question.&rdquo;
              </p>
              <cite
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'system-ui, sans-serif',
                  color: '#c9a84c',
                  fontStyle: 'normal',
                  letterSpacing: '0.04em',
                }}
              >
                — Nicholas Templeman, Founder, MEOK AI LABS
              </cite>
            </blockquote>
          </section>

          {/* Section 9 — Confidence */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '1.25rem',
                lineHeight: '1.3',
              }}
            >
              How Can You Rebuild Confidence When Every Rejection Chips Away at It?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              Job rejection during a period of already-low self-esteem is a particular kind of
              brutal. Each unanswered application, each &ldquo;we have decided to move forward with
              other candidates&rdquo; email, reinforces the very story you are trying hardest not
              to believe: that you are not good enough.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              The cognitive distortion in this story is real but identifiable. Rejection from a job
              is not the same as rejection of your worth as a person. It is a signal that this
              particular opportunity — at this moment, in this company — was not the right fit.
              The UK job market is competitive, and even excellent candidates are rejected regularly.
              But knowing this intellectually does not stop the gut-punch of the email.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              MEOK helps with this by being consistently on your side. Not in the way that hollow
              cheerleading is — not telling you that you are brilliant when you are genuinely making
              mistakes — but in the way that a good mentor is. It holds the record of your
              capabilities across time, so when you are in the pit of a particularly bad rejection
              week, it can bring you back to concrete evidence of what you have actually achieved
              and who you actually are.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'rgba(245,240,232,0.82)',
                marginBottom: '1.25rem',
              }}
            >
              It also helps you differentiate between rejections that contain useful signal
              (the feedback that says your CV was strong but you lacked a specific technical skill)
              and rejections that are essentially noise (the ghosting, the auto-rejections, the
              positions that were internally filled before the advert went live). Separating
              signal from noise is one of the most valuable skills in a job search, and it requires
              an outside perspective to do well.
            </p>
          </section>

          {/* Divider */}
          <div
            style={{
              width: '3rem',
              height: '2px',
              background: 'linear-gradient(to right, #c9a84c, transparent)',
              marginBottom: '3.5rem',
            }}
          />

          {/* FAQ Section */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#f5f0e8',
                marginBottom: '0.5rem',
                lineHeight: '1.3',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(245,240,232,0.5)',
                marginBottom: '2rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Practical answers to the questions most people have after redundancy.
            </p>

            {[
              {
                q: 'Can AI really help after redundancy?',
                a: 'Yes — with caveats. AI companions like MEOK offer a non-judgmental, always-available space to process the emotional shock, structure your days, practise interview answers, and work on your CV. They are not a replacement for professional career coaching, therapy, or the Citizens Advice Bureau. But they are available at 2am when the anxiety peaks and your friends are asleep. That matters.',
              },
              {
                q: 'What are my rights if I have been made redundant in the UK?',
                a: 'If you have worked for your employer for two or more years, you are entitled to statutory redundancy pay, a minimum notice period, reasonable time off to look for work, and the right to appeal if you believe the process was unfair. If you suspect the redundancy was actually a disguised dismissal — for instance, if you were the only person made redundant and a replacement was hired shortly after — you may have grounds for an unfair dismissal claim. An employment solicitor or ACAS can advise. MEOK can help you prepare questions for those conversations.',
              },
              {
                q: 'How long does it take to find a new job after redundancy in the UK?',
                a: 'The honest average is three to six months, though this varies significantly by sector, experience level, location, and economic conditions. Senior roles often take longer. Roles in high-demand sectors like tech and healthcare can be faster. The most important factor within your control is the quality of your applications — a small number of highly tailored applications consistently outperforms a large volume of generic ones.',
              },
              {
                q: 'Is it okay to grieve a job?',
                a: 'Yes. Completely. Job loss is a real loss — of routine, identity, community, and security. The fact that it is socially normalised does not make it less painful. Allowing yourself to grieve rather than immediately forcing positivity and productivity is not weakness — it is the fastest path through. MEOK will never rush you.',
              },
              {
                q: 'Should I tell employers I was made redundant?',
                a: 'Yes — and frame it clearly. Redundancy is common and employers understand it. A brief, factual explanation ("the role was eliminated in a company restructure — not performance-related") is far better than evasion, which raises more questions. Most interviewers will move on quickly. The key is to not appear apologetic or defensive about something that was not your fault.',
              },
              {
                q: 'What is the difference between MEOK and a career coach?',
                a: 'A career coach brings professional expertise, a structured programme, accountability sessions, and often industry connections. MEOK brings consistent availability, Sovereign Memory (it remembers everything you tell it across sessions), and a space to think out loud without cost or scheduling constraints. They are complementary, not competing. If you can access career coaching — many employers provide it as part of a redundancy package — do. Use MEOK between sessions.',
              },
            ].map((item, i) => (
              <div
                key={item.q}
                style={{
                  borderTop: '1px solid rgba(245,240,232,0.08)',
                  paddingTop: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: i === 5 ? '1px solid rgba(245,240,232,0.08)' : 'none',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#f5f0e8',
                    marginBottom: '0.75rem',
                    lineHeight: '1.4',
                  }}
                >
                  {item.q}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.75',
                    color: 'rgba(245,240,232,0.72)',
                    margin: '0',
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '12px',
              padding: '2.5rem',
              textAlign: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.75rem',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#c9a84c',
                fontWeight: '700',
                marginBottom: '0.875rem',
              }}
            >
              MEOK AI LABS
            </p>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '900',
                color: '#f5f0e8',
                marginBottom: '0.875rem',
                lineHeight: '1.3',
              }}
            >
              You do not have to do this alone.
            </h2>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.75',
                color: 'rgba(245,240,232,0.72)',
                maxWidth: '480px',
                margin: '0 auto 1.75rem',
              }}
            >
              MEOK is a sovereign AI companion that remembers who you are, what you are going through,
              and where you want to get to. Free to start. No credit card required.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="https://meok.ai"
                style={{
                  background: '#c9a84c',
                  color: '#0d0c18',
                  textDecoration: 'none',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  letterSpacing: '0.03em',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '6px',
                  display: 'inline-block',
                }}
              >
                Start for Free
              </Link>
              <Link
                href="/blog"
                style={{
                  border: '1px solid rgba(201,168,76,0.35)',
                  color: '#c9a84c',
                  textDecoration: 'none',
                  fontFamily: 'system-ui, sans-serif',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  padding: '0.8rem 1.75rem',
                  borderRadius: '6px',
                  display: 'inline-block',
                }}
              >
                Read More Articles
              </Link>
            </div>
          </section>

          {/* Related articles */}
          <section style={{ marginBottom: '2rem' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.4)',
                fontWeight: '700',
                marginBottom: '1.25rem',
              }}
            >
              Related Reading
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                {
                  href: '/blog/ai-for-confidence',
                  title: 'AI for Confidence',
                  desc: 'Rebuilding self-belief with sovereign AI support.',
                },
                {
                  href: '/blog/ai-for-job-seekers',
                  title: 'AI for Job Seekers',
                  desc: 'Practical job search support with an AI that remembers.',
                },
                {
                  href: '/blog/ai-for-anxiety',
                  title: 'AI for Anxiety',
                  desc: 'Managing financial and career anxiety with AI.',
                },
                {
                  href: '/blog/ai-for-burnout',
                  title: 'AI for Burnout',
                  desc: 'When work was the problem, not just the loss.',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(245,240,232,0.08)',
                    borderRadius: '8px',
                    padding: '1.1rem 1.25rem',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 0.3rem',
                      fontSize: '0.92rem',
                      fontWeight: '700',
                      color: '#c9a84c',
                    }}
                  >
                    {link.title}
                  </p>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '0.8rem',
                      lineHeight: '1.5',
                      color: 'rgba(245,240,232,0.55)',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Footer note */}
          <div
            style={{
              borderTop: '1px solid rgba(245,240,232,0.08)',
              paddingTop: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                lineHeight: '1.65',
                color: 'rgba(245,240,232,0.35)',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              <strong style={{ color: 'rgba(245,240,232,0.5)' }}>About MEOK AI LABS:</strong>{' '}
              Founded by Nicholas Templeman, MEOK AI LABS builds sovereign AI companions — private,
              memory-persistent, and built with genuine care for the people using them. MEOK is not
              a medical or mental health service. If you are in crisis, please contact Samaritans
              (116 123) or your GP. For benefits and employment rights advice, contact Citizens
              Advice (citizensadvice.org.uk) or ACAS (acas.org.uk).
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
